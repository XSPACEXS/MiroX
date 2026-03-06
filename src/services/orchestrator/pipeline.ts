import type { MissionConfig, MissionPlan, MissionState, Subtask } from './types'
import type { AgentRun } from '@/types/agent'
import { transition, isTerminal } from './stateMachine'
import { injectScopeGuard } from './scopeGuard'
import { parsePlanOutput, getPlanAgentPrompt } from './taskDecomposer'
import { buildScoutPrompt, buildBuildPrompt, buildTestPrompt, buildVerifyPrompt } from './prompts'
import { GeminiAssistant } from './geminiAssist'
import { HandoffManager } from './handoffManager'

// Re-export for convenience
export type { MissionConfig }

// -------------------------------------------------------------------
// Types for store interaction (avoids importing Zustand directly)
// -------------------------------------------------------------------

export interface MissionStoreAPI {
  getMission: () => MissionState | null
  setPhase: (phase: MissionState['phase']) => void
  setPlan: (plan: MissionPlan) => void
  updateSubtask: (id: string, update: Partial<Subtask>) => void
  setError: (error: string | null) => void
  addActiveAgent: (agentId: string) => void
  removeActiveAgent: (agentId: string) => void
  addCompletedAgent: (agentId: string) => void
  addPhaseTransition: (from: MissionState['phase'], to: MissionState['phase'], reason: string) => void
  setGeminiAssistReport: (report: import('./types').GeminiAssistReport) => void
  completeMission: () => void
}

export interface AgentStoreAPI {
  addAgent: (agent: AgentRun) => void
  getAgent: (id: string) => AgentRun | undefined
}

// -------------------------------------------------------------------
// Agent IPC helpers
// -------------------------------------------------------------------

interface LaunchResult {
  ok: boolean
  id?: string
  model?: string
  startedAt?: number
  error?: string
}

function getElectronAPI() {
  if (typeof window === 'undefined' || !window.electronAPI) {
    throw new Error('electronAPI not available')
  }
  return window.electronAPI
}

/** Launch an agent and register it in the agent store */
async function launchAgent(
  config: { model: string; prompt: string; allowedTools: string[] },
  meta: {
    teamRunId: string
    teamRole: AgentRun['teamRole']
    teamSkill: string
    timeLimitSeconds: number
    outputType?: AgentRun['outputType']
    generation?: number
    parentAgentId?: string
    lineageId?: string
  },
  agentStore: AgentStoreAPI
): Promise<string> {
  const api = getElectronAPI()
  const result: LaunchResult = await api.agent.launch({
    model: config.model,
    prompt: config.prompt,
    allowedTools: config.allowedTools,
  })

  if (!result.ok || !result.id) {
    throw new Error(result.error ?? 'Agent launch failed')
  }

  agentStore.addAgent({
    id: result.id,
    prompt: config.prompt.slice(0, 500),
    provider: 'claude',
    model: config.model as AgentRun['model'],
    status: 'running',
    logs: [],
    startedAt: result.startedAt ?? Date.now(),
    finishedAt: null,
    exitCode: null,
    cost: null,
    allowedTools: config.allowedTools,
    gitTagStart: null,
    gitTagEnd: null,
    outputType: meta.outputType ?? 'text',
    teamRunId: meta.teamRunId,
    teamRole: meta.teamRole,
    teamSkill: meta.teamSkill,
    timeLimitSeconds: meta.timeLimitSeconds,
    generation: meta.generation ?? 0,
    parentAgentId: meta.parentAgentId,
    lineageId: meta.lineageId,
  })

  return result.id
}

/** Write an event to the disk-backed mission log */
function writeMissionLog(
  missionId: string,
  type: string,
  data: Record<string, unknown>
): void {
  try {
    const api = getElectronAPI()
    if (api.missionLog) {
      void api.missionLog.write(missionId, { type, data })
    }
  } catch {
    // Best effort — don't crash pipeline if log write fails
  }
}

/** Wait for an agent to exit by subscribing to IPC events */
function waitForAgent(agentId: string): Promise<{
  status: 'completed' | 'failed' | 'killed'
  exitCode: number | null
}> {
  return new Promise((resolve) => {
    const api = getElectronAPI()
    const unsubscribe = api.agent.onExit((data) => {
      if (data.id === agentId) {
        unsubscribe()
        resolve({
          status: data.status as 'completed' | 'failed' | 'killed',
          exitCode: data.exitCode,
        })
      }
    })
  })
}

/** Collect all stdout logs for an agent (for parsing output) */
function collectAgentLogs(agentId: string): { logs: string[]; stop: () => void } {
  const logs: string[] = []
  const api = getElectronAPI()
  const unsubscribe = api.agent.onLog((data) => {
    if (data.agentId === agentId && data.type === 'stdout') {
      logs.push(data.text)
    }
  })
  return { logs, stop: unsubscribe }
}

// -------------------------------------------------------------------
// Topological sort for subtask dependencies
// -------------------------------------------------------------------

function topologicalSort(subtasks: Subtask[]): Subtask[] {
  const map = new Map(subtasks.map((s) => [s.id, s]))
  const visited = new Set<string>()
  const result: Subtask[] = []

  function visit(id: string) {
    if (visited.has(id)) return
    visited.add(id)
    const subtask = map.get(id)
    if (!subtask) return
    for (const dep of subtask.dependencies) {
      visit(dep)
    }
    result.push(subtask)
  }

  for (const subtask of subtasks) {
    visit(subtask.id)
  }

  return result
}

// -------------------------------------------------------------------
// Phase executors
// -------------------------------------------------------------------

const MODEL_MAP: Record<string, string> = {
  opus: 'opus',
  sonnet: 'sonnet',
  haiku: 'haiku',
}

const MAX_BUILD_CONCURRENT = 3
const MAX_TEST_RETRIES = 2

async function runPlanPhase(
  config: MissionConfig,
  missionId: string,
  scoutReport: string | null,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI
): Promise<MissionPlan> {
  const prompt = getPlanAgentPrompt(config.prompt, scoutReport)

  const agentId = await launchAgent(
    { model: 'haiku', prompt, allowedTools: ['Read', 'Glob', 'Grep'] },
    { teamRunId: missionId, teamRole: 'collaborator', teamSkill: 'Planner', timeLimitSeconds: 300 },
    agentStore
  )

  missionStore.addActiveAgent(agentId)
  const collector = collectAgentLogs(agentId)

  const exitResult = await waitForAgent(agentId)
  collector.stop()
  missionStore.removeActiveAgent(agentId)
  missionStore.addCompletedAgent(agentId)

  if (exitResult.status !== 'completed') {
    throw new Error('Planning agent failed')
  }

  const allLogs = collector.logs.join('\n')
  const plan = parsePlanOutput(allLogs, config.prompt)

  if ('error' in plan) {
    throw new Error(plan.error)
  }

  plan.scoutReport = scoutReport
  return plan
}

async function runScoutPhase(
  config: MissionConfig,
  missionId: string,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI
): Promise<string> {
  const prompt = buildScoutPrompt(config.prompt)

  const agentId = await launchAgent(
    { model: 'haiku', prompt, allowedTools: ['Read', 'Glob', 'Grep'] },
    { teamRunId: missionId, teamRole: 'collaborator', teamSkill: 'Scout', timeLimitSeconds: 300 },
    agentStore
  )

  missionStore.addActiveAgent(agentId)
  const collector = collectAgentLogs(agentId)

  const exitResult = await waitForAgent(agentId)
  collector.stop()
  missionStore.removeActiveAgent(agentId)
  missionStore.addCompletedAgent(agentId)

  if (exitResult.status !== 'completed') {
    throw new Error('Scout agent failed')
  }

  return collector.logs.join('\n')
}

async function runBuildPhase(
  plan: MissionPlan,
  config: MissionConfig,
  missionId: string,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI,
  geminiAssist: GeminiAssistant | null = null,
  handoffManager: HandoffManager | null = null
): Promise<void> {
  const ordered = topologicalSort(plan.subtasks.filter((s) => s.status !== 'completed'))

  // Track running agents and their subtask associations
  const running = new Map<string, Subtask>()
  const completed = new Set<string>()
  let failed = false

  function getReady(): Subtask[] {
    return ordered.filter(
      (s) =>
        s.status === 'pending' &&
        s.dependencies.every((d) => completed.has(d)) &&
        running.size < MAX_BUILD_CONCURRENT
    )
  }

  async function launchSubtask(subtask: Subtask): Promise<void> {
    const buildPrompt = buildBuildPrompt(subtask, plan.originalPrompt, plan.scoutReport)
    const scopedPrompt = injectScopeGuard(subtask, buildPrompt)

    const lineageId = `lineage-${subtask.id}-${Date.now()}`
    const model = MODEL_MAP[subtask.model] ?? 'sonnet'
    const agentId = await launchAgent(
      { model, prompt: scopedPrompt, allowedTools: subtask.tools },
      {
        teamRunId: missionId,
        teamRole: 'primary',
        teamSkill: `Builder (${subtask.title.slice(0, 20)})`,
        timeLimitSeconds: config.timeLimitSeconds,
        generation: 0,
        lineageId,
      },
      agentStore
    )

    missionStore.updateSubtask(subtask.id, { status: 'running', agentId })
    missionStore.addActiveAgent(agentId)
    running.set(agentId, subtask)
    writeMissionLog(missionId, 'agent_launch', { agentId, subtaskId: subtask.id, model })

    // Start handoff watching if enabled
    if (handoffManager) {
      const threshold = config.handoffThresholdClaude ?? 0.6
      handoffManager.startWatching(agentId, lineageId, 0, subtask, threshold, 200000)
    }
  }

  // Launch initial batch
  for (const subtask of getReady()) {
    if (running.size >= MAX_BUILD_CONCURRENT) break
    await launchSubtask(subtask)
  }

  // Wait for agents to complete and launch new ones
  while (running.size > 0 && !failed) {
    // Wait for any agent to exit
    const exitPromise = new Promise<{ agentId: string; status: string; exitCode: number | null }>(
      (resolve) => {
        const api = getElectronAPI()
        const unsubscribe = api.agent.onExit((data) => {
          if (running.has(data.id)) {
            // Skip if this agent is being handed off (handoff manager will handle it)
            if (handoffManager?.isHandingOff(data.id)) return
            unsubscribe()
            resolve({ agentId: data.id, status: data.status, exitCode: data.exitCode })
          }
        })
      }
    )

    const result = await exitPromise
    const subtask = running.get(result.agentId)!
    running.delete(result.agentId)
    missionStore.removeActiveAgent(result.agentId)
    missionStore.addCompletedAgent(result.agentId)
    handoffManager?.stopWatching(result.agentId)

    writeMissionLog(missionId, 'agent_exit', { agentId: result.agentId, status: result.status, subtaskId: subtask.id })

    if (result.status === 'completed') {
      missionStore.updateSubtask(subtask.id, { status: 'completed' })
      completed.add(subtask.id)

      // Gemini review of completed agent work (fire and forget)
      if (geminiAssist) {
        void (async () => {
          try {
            const agent = agentStore.getAgent(result.agentId)
            const logs = agent?.logs.map((l) => l.text) ?? []
            const review = await geminiAssist!.reviewAgentWork(result.agentId, logs, subtask.files)
            writeMissionLog(missionId, 'gemini_review', { agentId: result.agentId, score: review.qualityScore, issues: review.issues.length })

            // Generate mockup if UI files changed
            const uiFiles = subtask.files.filter((f) => f.endsWith('.tsx') || f.endsWith('.css'))
            if (uiFiles.length > 0) {
              const mockupUrl = await geminiAssist!.generateMockup(uiFiles)
              if (mockupUrl) {
                review.mockupUrl = mockupUrl
              }
            }
          } catch {
            // Non-fatal
          }
        })()
      }

      // Launch newly unblocked subtasks
      for (const next of getReady()) {
        if (running.size >= MAX_BUILD_CONCURRENT) break
        await launchSubtask(next)
      }
    } else {
      // Agent failed — retry if allowed
      if (subtask.retryCount < 1) {
        missionStore.updateSubtask(subtask.id, {
          status: 'pending',
          agentId: null,
          retryCount: subtask.retryCount + 1,
        })
        subtask.status = 'pending'
        subtask.agentId = null
        subtask.retryCount += 1
        await launchSubtask(subtask)
      } else {
        missionStore.updateSubtask(subtask.id, { status: 'failed' })
        failed = true
      }
    }
  }

  if (failed) {
    throw new Error('One or more build agents failed after retry')
  }
}

async function runTestPhase(
  missionId: string,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI,
  timeLimitSeconds: number
): Promise<{ passed: boolean; output: string }> {
  const prompt = buildTestPrompt()

  const agentId = await launchAgent(
    { model: 'haiku', prompt, allowedTools: ['Read', 'Glob', 'Grep', 'Bash'] },
    { teamRunId: missionId, teamRole: 'collaborator', teamSkill: 'Tester', timeLimitSeconds },
    agentStore
  )

  missionStore.addActiveAgent(agentId)
  const collector = collectAgentLogs(agentId)

  const exitResult = await waitForAgent(agentId)
  collector.stop()
  missionStore.removeActiveAgent(agentId)
  missionStore.addCompletedAgent(agentId)

  const output = collector.logs.join('\n')
  const passed = exitResult.status === 'completed' && exitResult.exitCode === 0

  return { passed, output }
}

async function runVerifyPhase(
  config: MissionConfig,
  missionId: string,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI
): Promise<boolean> {
  const prompt = buildVerifyPrompt(config.prompt)

  const agentId = await launchAgent(
    { model: 'sonnet', prompt, allowedTools: ['Read', 'Glob', 'Grep', 'Bash'] },
    { teamRunId: missionId, teamRole: 'collaborator', teamSkill: 'Verifier', timeLimitSeconds: config.timeLimitSeconds },
    agentStore
  )

  missionStore.addActiveAgent(agentId)

  const exitResult = await waitForAgent(agentId)
  missionStore.removeActiveAgent(agentId)
  missionStore.addCompletedAgent(agentId)

  return exitResult.status === 'completed'
}

// -------------------------------------------------------------------
// Main pipeline
// -------------------------------------------------------------------

function applyTransition(
  current: MissionState['phase'],
  event: Parameters<typeof transition>[1],
  missionStore: MissionStoreAPI
): MissionState['phase'] {
  const result = transition(current, event)
  if (result.valid) {
    missionStore.setPhase(result.next)
    missionStore.addPhaseTransition(current, result.next, result.reason)
  }
  return result.next
}

export async function executeMission(
  config: MissionConfig,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI
): Promise<void> {
  const missionId = `mission-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

  let phase: MissionState['phase'] = 'idle'

  // Initialize Gemini Assist if enabled
  let geminiAssist: GeminiAssistant | null = null
  if (config.geminiAssist?.enabled) {
    geminiAssist = new GeminiAssistant(config.geminiAssist)
  }

  // Initialize HandoffManager if handoffs enabled
  let handoffManager: HandoffManager | null = null
  if (config.enableHandoff) {
    handoffManager = new HandoffManager({
      launchAgent: async (launchConfig, meta) => {
        return launchAgent(launchConfig, { ...meta }, agentStore)
      },
      geminiAssistant: geminiAssist,
      missionId,
      originalPrompt: config.prompt,
      onHandoff: (oldId, newId, lineageId, generation) => {
        missionStore.addActiveAgent(newId)
        missionStore.removeActiveAgent(oldId)
        writeMissionLog(missionId, 'handoff_complete', { oldId, newId, lineageId, generation })
      },
    })
  }

  try {
    writeMissionLog(missionId, 'mission_start', { prompt: config.prompt, config: { ...config, geminiAssist: config.geminiAssist } })

    // --- Launch Gemini Brain (if enabled) ---
    if (geminiAssist) {
      try {
        const brainResult = await geminiAssist.loadProjectContext()
        writeMissionLog(missionId, 'gemini_brain_start', { ok: brainResult.ok, sessionId: brainResult.sessionId })
      } catch {
        // Graceful degradation — continue without Gemini
        geminiAssist = null
        writeMissionLog(missionId, 'gemini_brain_start', { ok: false, error: 'Brain launch failed' })
      }
    }

    // --- Planning ---
    phase = applyTransition('idle', { type: 'PLAN_READY', plan: null as unknown as MissionPlan }, missionStore)
    // Actually set to planning manually since idle→planning isn't in the map
    missionStore.setPhase('planning')
    missionStore.addPhaseTransition('idle', 'planning', 'Mission started')
    phase = 'planning'
    writeMissionLog(missionId, 'phase_change', { from: 'idle', to: 'planning' })

    // Scout first if enabled
    let scoutReport: string | null = null
    if (config.enableScout) {
      missionStore.setPhase('scouting')
      missionStore.addPhaseTransition('planning', 'scouting', 'Starting scout phase')
      phase = 'scouting'
      writeMissionLog(missionId, 'phase_change', { from: 'planning', to: 'scouting' })

      try {
        scoutReport = await runScoutPhase(config, missionId, missionStore, agentStore)
        phase = applyTransition(phase, { type: 'SCOUT_DONE', report: scoutReport }, missionStore)
      } catch {
        // Soft fail — proceed without scout
        phase = applyTransition(phase, { type: 'SCOUT_FAILED', error: 'Scout failed' }, missionStore)
      }

      // Go back to planning to run decomposition with scout report
      missionStore.setPhase('planning')
      phase = 'planning'
    }

    // Run task decomposition
    const plan = await runPlanPhase(config, missionId, scoutReport, missionStore, agentStore)
    missionStore.setPlan(plan)
    phase = applyTransition(phase, { type: 'PLAN_READY', plan }, missionStore)
    writeMissionLog(missionId, 'plan_ready', { subtaskCount: plan.subtasks.length })

    if (isTerminal(phase)) return

    // --- Build ---
    missionStore.setPhase('building')
    missionStore.addPhaseTransition(phase, 'building', 'Starting build phase')
    phase = 'building'
    writeMissionLog(missionId, 'phase_change', { from: phase, to: 'building' })

    let testRetries = 0

    // Build-test loop (retry up to MAX_TEST_RETRIES times)
    while (testRetries <= MAX_TEST_RETRIES) {
      await runBuildPhase(plan, config, missionId, missionStore, agentStore, geminiAssist, handoffManager)
      phase = applyTransition(phase, { type: 'ALL_BUILDERS_DONE' }, missionStore)
      writeMissionLog(missionId, 'all_builders_done', { retry: testRetries })

      if (isTerminal(phase)) return

      // --- Test ---
      const testResult = await runTestPhase(missionId, missionStore, agentStore, config.timeLimitSeconds)
      writeMissionLog(missionId, 'test_result', { passed: testResult.passed })

      if (testResult.passed) {
        phase = applyTransition(phase, { type: 'TEST_PASSED' }, missionStore)
        break
      } else {
        // If Gemini is available, analyze test failure for smarter retry
        if (geminiAssist) {
          try {
            const fixes = await geminiAssist.analyzeTestFailure(testResult.output, plan)
            writeMissionLog(missionId, 'gemini_test_analysis', { fixes: fixes.length })
            // Reset only subtasks that Gemini identified as needing fixes
            if (fixes.length > 0) {
              for (const fix of fixes) {
                const subtask = plan.subtasks.find((s) => s.id === fix.subtaskId)
                if (subtask) {
                  subtask.status = 'pending'
                  subtask.description = `${subtask.description}\n\nFIX REQUIRED: ${fix.fix}`
                  missionStore.updateSubtask(subtask.id, { status: 'pending', agentId: null })
                }
              }
            }
          } catch {
            // Fall back to resetting all subtasks
          }
        }

        testRetries++
        if (testRetries > MAX_TEST_RETRIES) {
          phase = applyTransition(phase, { type: 'TEST_FAILED', error: testResult.output.slice(-500) }, missionStore)
          missionStore.setPhase('failed')
          missionStore.setError('Tests failed after maximum retries')
          writeMissionLog(missionId, 'mission_failed', { reason: 'Tests failed after maximum retries' })
          return
        }
        // Reset subtasks for retry (if Gemini didn't already do targeted resets)
        const anyReset = plan.subtasks.some((s) => s.status === 'pending')
        if (!anyReset) {
          for (const subtask of plan.subtasks) {
            if (subtask.status === 'completed') {
              subtask.status = 'pending'
              missionStore.updateSubtask(subtask.id, { status: 'pending', agentId: null })
            }
          }
        }
        phase = 'building'
        missionStore.setPhase('building')
      }
    }

    if (isTerminal(phase)) return

    // --- Verify ---
    if (config.enableVerify) {
      const verified = await runVerifyPhase(config, missionId, missionStore, agentStore)
      if (verified) {
        phase = applyTransition(phase, { type: 'VERIFY_DONE' }, missionStore)
      } else {
        phase = applyTransition(phase, { type: 'VERIFY_FAILED', error: 'Verification issues found' }, missionStore)
      }
      writeMissionLog(missionId, 'verify_result', { verified })
    } else {
      missionStore.setPhase('done')
      missionStore.addPhaseTransition(phase, 'done', 'Verification skipped')
    }

    // --- Generate Gemini Final Report ---
    if (geminiAssist) {
      try {
        const mission = missionStore.getMission()
        if (mission) {
          const report = await geminiAssist.generateFinalReport(mission)
          missionStore.setGeminiAssistReport(report)
          writeMissionLog(missionId, 'gemini_final_report', { score: report.overallScore, issues: report.totalIssues })
        }
      } catch {
        // Non-fatal — mission still completes without report
      }
    }

    missionStore.completeMission()
    writeMissionLog(missionId, 'mission_complete', { phase: missionStore.getMission()?.phase })

    // Cleanup handoff manager
    handoffManager?.stopAll()
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    missionStore.setError(message)
    missionStore.setPhase('failed')
    missionStore.addPhaseTransition(phase, 'failed', message)
    writeMissionLog(missionId, 'mission_failed', { error: message })
    handoffManager?.stopAll()
  }
}

/** Abort a running mission by killing all active agents */
export async function abortMission(missionStore: MissionStoreAPI): Promise<void> {
  const mission = missionStore.getMission()
  if (!mission || isTerminal(mission.phase)) return

  try {
    const api = getElectronAPI()
    await api.agent.killAll()
  } catch {
    // Best effort — agents may already be dead
  }

  missionStore.setPhase('aborted')
  missionStore.addPhaseTransition(mission.phase, 'aborted', 'Mission aborted by user')
  missionStore.setError('Mission aborted')
}
