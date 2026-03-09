import type { MissionConfig, MissionPlan, MissionState, Subtask } from './types'
import type { AgentRun } from '@/types/agent'
import type { AgentInteraction } from '@/types/character'
import { transition, isTerminal } from './stateMachine'
import { injectScopeGuard } from './scopeGuard'
import { parsePlanOutput, getPlanAgentPrompt, getStrictPlanPrompt } from './taskDecomposer'
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
  addInteraction: (interaction: AgentInteraction) => void
  getCharacterName: (agentId: string) => string
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
function waitForAgent(
  agentId: string,
  timeoutMs = 600_000
): Promise<{
  status: 'completed' | 'failed' | 'killed'
  exitCode: number | null
}> {
  return new Promise((resolve, reject) => {
    const api = getElectronAPI()

    const timer = setTimeout(() => {
      unsubscribe()
      reject(new Error(`Agent ${agentId} timed out after ${timeoutMs}ms`))
    }, timeoutMs)

    const unsubscribe = api.agent.onExit((data) => {
      if (data.id === agentId) {
        clearTimeout(timer)
        unsubscribe()
        resolve({
          status: data.status as 'completed' | 'failed' | 'killed',
          exitCode: data.exitCode,
        })
      }
    })
  })
}

/**
 * Create a log collector BEFORE launching an agent.
 * Captures all stdout logs, then filters by agentId once known.
 * This eliminates the race condition where events fire before a
 * post-launch listener is registered.
 */
function createPreLaunchCollector(): {
  setAgentId: (id: string) => void
  logs: string[]
  stop: () => void
} {
  const allLogs: Array<{ agentId: string; text: string }> = []
  const filteredLogs: string[] = []
  let targetId: string | null = null
  const api = getElectronAPI()

  const unsubscribe = api.agent.onLog((data) => {
    if (data.type !== 'stdout') return
    if (targetId) {
      if (data.agentId === targetId) filteredLogs.push(data.text)
    } else {
      // Buffer everything until we know which agent to track
      allLogs.push({ agentId: data.agentId, text: data.text })
    }
  })

  return {
    setAgentId: (id: string) => {
      targetId = id
      // Flush buffered logs for this agent
      for (const entry of allLogs) {
        if (entry.agentId === id) filteredLogs.push(entry.text)
      }
      allLogs.length = 0
    },
    logs: filteredLogs,
    stop: unsubscribe,
  }
}

/** Check if mission has been aborted or failed */
function isAborted(missionStore: MissionStoreAPI): boolean {
  const m = missionStore.getMission()
  return m != null && (m.phase === 'aborted' || m.phase === 'failed')
}

/** Generate a unique interaction and push it to the store */
function emitInteraction(
  missionStore: MissionStoreAPI,
  type: AgentInteraction['type'],
  fromAgentId: string,
  toAgentId: string | null,
  message: string
): void {
  missionStore.addInteraction({
    id: `ix-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    timestamp: Date.now(),
    type,
    fromAgentId,
    toAgentId,
    message,
  })
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

/** Pick a model for each pipeline phase based on user's primaryModel choice */
function getPhaseModel(
  primary: MissionConfig['primaryModel'],
  phase: 'scout' | 'planner' | 'tester' | 'verifier'
): string {
  // High-stakes phases use the user's chosen model directly
  if (phase === 'planner' || phase === 'verifier') return MODEL_MAP[primary] ?? 'sonnet'
  // Scout/Tester: one tier lighter to save cost
  if (primary === 'opus') return 'sonnet'
  return 'haiku'
}

const MAX_BUILD_CONCURRENT = 3
const MAX_TEST_RETRIES = 2

async function runPlanAttempt(
  config: MissionConfig,
  missionId: string,
  scoutReport: string | null,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI,
  promptOverride?: string
): Promise<MissionPlan | { error: string; logsLength: number; logsPreview: string }> {
  const prompt = promptOverride ?? getPlanAgentPrompt(config.prompt, scoutReport)

  // Register collector BEFORE launch to prevent race condition
  const collector = createPreLaunchCollector()
  const planModel = getPhaseModel(config.primaryModel, 'planner')

  const agentId = await launchAgent(
    { model: planModel, prompt, allowedTools: ['Read', 'Glob', 'Grep'] },
    { teamRunId: missionId, teamRole: 'collaborator', teamSkill: 'Planner', timeLimitSeconds: 300 },
    agentStore
  )

  collector.setAgentId(agentId)
  missionStore.addActiveAgent(agentId)
  writeMissionLog(missionId, 'agent_launch', { agentId, phase: 'plan', model: planModel })

  const exitResult = await waitForAgent(agentId)
  collector.stop()
  missionStore.removeActiveAgent(agentId)
  missionStore.addCompletedAgent(agentId)
  writeMissionLog(missionId, 'agent_exit', { agentId, phase: 'plan', status: exitResult.status })

  if (exitResult.status !== 'completed') {
    return { error: 'Planning agent failed', logsLength: 0, logsPreview: '' }
  }

  const allLogs = collector.logs.join('')
  const plan = parsePlanOutput(allLogs, config.prompt)

  if ('error' in plan) {
    return { error: plan.error, logsLength: allLogs.length, logsPreview: allLogs.slice(0, 500) }
  }

  plan.scoutReport = scoutReport
  return plan
}

async function runPlanPhase(
  config: MissionConfig,
  missionId: string,
  scoutReport: string | null,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI
): Promise<MissionPlan> {
  // First attempt
  const result = await runPlanAttempt(config, missionId, scoutReport, missionStore, agentStore)
  if (!('error' in result)) return result

  // Log the failure for debugging
  writeMissionLog(missionId, 'plan_parse_failed', {
    error: result.error,
    logsLength: result.logsLength,
    logsPreview: result.logsPreview,
    attempt: 1,
  })

  // Retry once
  const retry = await runPlanAttempt(config, missionId, scoutReport, missionStore, agentStore)
  if (!('error' in retry)) return retry

  writeMissionLog(missionId, 'plan_parse_failed', {
    error: retry.error,
    logsLength: retry.logsLength,
    logsPreview: retry.logsPreview,
    attempt: 2,
  })

  // B9: 3rd attempt with strict JSON-only prompt
  const strictPrompt = getStrictPlanPrompt(config.prompt, scoutReport)
  const strictRetry = await runPlanAttempt(config, missionId, scoutReport, missionStore, agentStore, strictPrompt)
  if (!('error' in strictRetry)) return strictRetry

  writeMissionLog(missionId, 'plan_parse_failed', {
    error: strictRetry.error,
    logsLength: strictRetry.logsLength,
    logsPreview: strictRetry.logsPreview,
    attempt: 3,
  })

  throw new Error(strictRetry.error)
}

async function runScoutPhase(
  config: MissionConfig,
  missionId: string,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI
): Promise<string> {
  const prompt = buildScoutPrompt(config.prompt)

  // Register collector BEFORE launch to prevent race condition
  const collector = createPreLaunchCollector()
  const scoutModel = getPhaseModel(config.primaryModel, 'scout')

  const agentId = await launchAgent(
    { model: scoutModel, prompt, allowedTools: ['Read', 'Glob', 'Grep'] },
    { teamRunId: missionId, teamRole: 'collaborator', teamSkill: 'Scout', timeLimitSeconds: 300 },
    agentStore
  )

  collector.setAgentId(agentId)
  missionStore.addActiveAgent(agentId)
  writeMissionLog(missionId, 'agent_launch', { agentId, phase: 'scout', model: scoutModel })

  const exitResult = await waitForAgent(agentId)
  collector.stop()
  missionStore.removeActiveAgent(agentId)
  missionStore.addCompletedAgent(agentId)
  writeMissionLog(missionId, 'agent_exit', { agentId, phase: 'scout', status: exitResult.status })

  if (exitResult.status !== 'completed') {
    throw new Error('Scout agent failed')
  }

  return collector.logs.join('')
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

    // B3: Emit "started" interaction
    const agentName = missionStore.getCharacterName(agentId)
    emitInteraction(missionStore, 'helping', agentId, null, `${agentName} picked up "${subtask.title}"`)


    // Start handoff watching if enabled
    if (handoffManager) {
      try {
        const threshold = config.handoffThresholdClaude ?? 0.6
        handoffManager.startWatching(agentId, lineageId, 0, subtask, threshold, 200000)
      } catch {
        // Non-fatal: agent will run without handoff monitoring
        writeMissionLog(missionId, 'handoff_watch_failed', { agentId })
      }
    }
  }

  // Launch initial batch
  for (const subtask of getReady()) {
    if (running.size >= MAX_BUILD_CONCURRENT || isAborted(missionStore)) break
    await launchSubtask(subtask)
  }

  // Wait for agents to complete and launch new ones
  while (running.size > 0 && !failed && !isAborted(missionStore)) {
    // Wait for any agent to exit
    const exitPromise = new Promise<{ agentId: string; status: string; exitCode: number | null }>(
      (resolve) => {
        const api = getElectronAPI()
        const unsubscribe = api.agent.onExit((data) => {
          if (running.has(data.id)) {
            unsubscribe()
            resolve({ agentId: data.id, status: data.status, exitCode: data.exitCode })
          }
        })
      }
    )

    const result = await exitPromise

    // If this agent is being handed off, the handoff manager launched a replacement.
    // Clean up the old agent and continue waiting for exits.
    if (handoffManager?.isHandingOff(result.agentId)) {
      const oldSubtask = running.get(result.agentId)!
      running.delete(result.agentId)
      missionStore.removeActiveAgent(result.agentId)
      missionStore.addCompletedAgent(result.agentId)
      handoffManager.stopWatching(result.agentId)
      writeMissionLog(missionId, 'agent_handoff_exit', { agentId: result.agentId, subtaskId: oldSubtask.id })

      // Track the replacement agent in running map
      const replacementId = handoffManager.getReplacementId?.(result.agentId)
      if (replacementId && !running.has(replacementId)) {
        running.set(replacementId, oldSubtask)
      }
      continue
    }

    const subtask = running.get(result.agentId)!
    running.delete(result.agentId)
    missionStore.removeActiveAgent(result.agentId)
    missionStore.addCompletedAgent(result.agentId)
    handoffManager?.stopWatching(result.agentId)

    writeMissionLog(missionId, 'agent_exit', { agentId: result.agentId, status: result.status, subtaskId: subtask.id })

    // B4: If agent was killed (abort), don't retry — break immediately
    if (result.status === 'killed' || isAborted(missionStore)) {
      missionStore.updateSubtask(subtask.id, { status: 'failed' })
      break
    }

    if (result.status === 'completed') {
      missionStore.updateSubtask(subtask.id, { status: 'completed' })
      completed.add(subtask.id)

      // B3: Emit "completed" interaction
      const completedName = missionStore.getCharacterName(result.agentId)
      emitInteraction(missionStore, 'celebration', result.agentId, null, `${completedName} finished "${subtask.title}"`)

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
      // B3: Emit "handoff" interactions for dependency-unblocked subtasks
      for (const next of getReady()) {
        if (running.size >= MAX_BUILD_CONCURRENT || isAborted(missionStore)) break
        emitInteraction(missionStore, 'handoff', result.agentId, null,
          `${completedName} completed, handing off to "${next.title}"`)
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
  config: MissionConfig,
  missionId: string,
  missionStore: MissionStoreAPI,
  agentStore: AgentStoreAPI
): Promise<{ passed: boolean; output: string }> {
  const prompt = buildTestPrompt()

  // Register collector BEFORE launch to prevent race condition
  const collector = createPreLaunchCollector()
  const testModel = getPhaseModel(config.primaryModel, 'tester')

  const agentId = await launchAgent(
    { model: testModel, prompt, allowedTools: ['Read', 'Glob', 'Grep', 'Bash'] },
    { teamRunId: missionId, teamRole: 'collaborator', teamSkill: 'Tester', timeLimitSeconds: config.timeLimitSeconds },
    agentStore
  )

  collector.setAgentId(agentId)
  missionStore.addActiveAgent(agentId)
  writeMissionLog(missionId, 'agent_launch', { agentId, phase: 'test', model: testModel })

  const exitResult = await waitForAgent(agentId)
  collector.stop()
  missionStore.removeActiveAgent(agentId)
  missionStore.addCompletedAgent(agentId)
  writeMissionLog(missionId, 'agent_exit', { agentId, phase: 'test', status: exitResult.status })

  const output = collector.logs.join('')
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

  // Register collector BEFORE launch to prevent race condition
  const collector = createPreLaunchCollector()
  const verifyModel = getPhaseModel(config.primaryModel, 'verifier')

  const agentId = await launchAgent(
    { model: verifyModel, prompt, allowedTools: ['Read', 'Glob', 'Grep', 'Bash'] },
    { teamRunId: missionId, teamRole: 'collaborator', teamSkill: 'Verifier', timeLimitSeconds: config.timeLimitSeconds },
    agentStore
  )

  collector.setAgentId(agentId)
  missionStore.addActiveAgent(agentId)
  writeMissionLog(missionId, 'agent_launch', { agentId, phase: 'verify', model: verifyModel })

  const exitResult = await waitForAgent(agentId)
  collector.stop()
  missionStore.removeActiveAgent(agentId)
  missionStore.addCompletedAgent(agentId)
  writeMissionLog(missionId, 'agent_exit', { agentId, phase: 'verify', status: exitResult.status })

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

  // Global mission timeout with guard flag to prevent double-abort
  let globalTimer: ReturnType<typeof setTimeout> | null = null
  let missionAborted = false
  if (config.timeLimitSeconds > 0) {
    globalTimer = setTimeout(() => {
      if (!missionAborted) {
        missionAborted = true
        void abortMission(missionStore)
      }
    }, config.timeLimitSeconds * 1000)
  }

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
    writeMissionLog(missionId, 'mission_start', {
      prompt: config.prompt,
      config: {
        primaryModel: config.primaryModel,
        enableScout: config.enableScout,
        enableVerify: config.enableVerify,
        enableHandoff: config.enableHandoff,
        timeLimitSeconds: config.timeLimitSeconds,
        geminiAssist: config.geminiAssist,
      },
    })

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
      const prevPhase = phase
      missionStore.setPhase('planning')
      phase = 'planning'
      writeMissionLog(missionId, 'phase_change', { from: prevPhase, to: 'planning' })
    }

    // Run task decomposition
    const plan = await runPlanPhase(config, missionId, scoutReport, missionStore, agentStore)
    missionStore.setPlan(plan)
    phase = applyTransition(phase, { type: 'PLAN_READY', plan }, missionStore)
    writeMissionLog(missionId, 'plan_ready', { subtaskCount: plan.subtasks.length })

    if (isTerminal(phase)) return

    // --- Build ---
    writeMissionLog(missionId, 'phase_change', { from: phase, to: 'building' })
    missionStore.setPhase('building')
    missionStore.addPhaseTransition(phase, 'building', 'Starting build phase')
    phase = 'building'

    let testRetries = 0

    // Build-test loop (retry up to MAX_TEST_RETRIES times)
    while (testRetries <= MAX_TEST_RETRIES) {
      await runBuildPhase(plan, config, missionId, missionStore, agentStore, geminiAssist, handoffManager)
      const prevBuildPhase = phase
      phase = applyTransition(phase, { type: 'ALL_BUILDERS_DONE' }, missionStore)
      writeMissionLog(missionId, 'all_builders_done', { retry: testRetries })
      writeMissionLog(missionId, 'phase_change', { from: prevBuildPhase, to: phase })

      if (isTerminal(phase) || isAborted(missionStore)) return

      // B3: Emit phase transition interaction
      emitInteraction(missionStore, 'handoff', 'system', null, 'Build complete, handing off to testing')

      // --- Test ---
      const testResult = await runTestPhase(config, missionId, missionStore, agentStore)
      writeMissionLog(missionId, 'test_result', { passed: testResult.passed })

      if (testResult.passed) {
        const prevTestPhase = phase
        phase = applyTransition(phase, { type: 'TEST_PASSED' }, missionStore)
        writeMissionLog(missionId, 'phase_change', { from: prevTestPhase, to: phase })
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
          writeMissionLog(missionId, 'phase_change', { from: 'testing', to: 'failed' })
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
        missionStore.setPhase('building')
        writeMissionLog(missionId, 'phase_change', { from: 'testing', to: 'building' })
        phase = 'building'
      }
    }

    if (isTerminal(phase) || isAborted(missionStore)) return

    // --- Verify ---
    if (config.enableVerify) {
      // B3: Emit phase transition interaction
      emitInteraction(missionStore, 'handoff', 'system', null, 'Tests done, handing off to verification')

      // phase is already 'verifying' (from TEST_PASSED transition, logged above)
      const verified = await runVerifyPhase(config, missionId, missionStore, agentStore)
      if (verified) {
        phase = applyTransition(phase, { type: 'VERIFY_DONE' }, missionStore)
      } else {
        phase = applyTransition(phase, { type: 'VERIFY_FAILED', error: 'Verification issues found' }, missionStore)
      }
      writeMissionLog(missionId, 'verify_result', { verified })
      writeMissionLog(missionId, 'phase_change', { from: 'verifying', to: phase })
    } else {
      writeMissionLog(missionId, 'phase_change', { from: phase, to: 'done' })
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

    missionAborted = true
    if (globalTimer) clearTimeout(globalTimer)
    missionStore.completeMission()
    writeMissionLog(missionId, 'mission_complete', { phase: missionStore.getMission()?.phase })

    // Cleanup handoff manager
    handoffManager?.stopAll()
  } catch (err) {
    missionAborted = true
    if (globalTimer) clearTimeout(globalTimer)
    const message = err instanceof Error ? err.message : 'Unknown error'
    missionStore.setError(message)
    missionStore.setPhase('failed')
    missionStore.addPhaseTransition(phase, 'failed', message)
    writeMissionLog(missionId, 'phase_change', { from: phase, to: 'failed' })
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
