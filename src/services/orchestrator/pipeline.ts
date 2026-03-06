import type { MissionConfig, MissionPlan, MissionState, Subtask } from './types'
import type { AgentRun } from '@/types/agent'
import { transition, isTerminal } from './stateMachine'
import { injectScopeGuard } from './scopeGuard'
import { parsePlanOutput, getPlanAgentPrompt } from './taskDecomposer'
import { buildScoutPrompt, buildBuildPrompt, buildTestPrompt, buildVerifyPrompt } from './prompts'

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
  })

  return result.id
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
  agentStore: AgentStoreAPI
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

    const model = MODEL_MAP[subtask.model] ?? 'sonnet'
    const agentId = await launchAgent(
      { model, prompt: scopedPrompt, allowedTools: subtask.tools },
      {
        teamRunId: missionId,
        teamRole: 'primary',
        teamSkill: `Builder (${subtask.title.slice(0, 20)})`,
        timeLimitSeconds: config.timeLimitSeconds,
      },
      agentStore
    )

    missionStore.updateSubtask(subtask.id, { status: 'running', agentId })
    missionStore.addActiveAgent(agentId)
    running.set(agentId, subtask)
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

    if (result.status === 'completed') {
      missionStore.updateSubtask(subtask.id, { status: 'completed' })
      completed.add(subtask.id)

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

  try {
    // --- Planning ---
    phase = applyTransition('idle', { type: 'PLAN_READY', plan: null as unknown as MissionPlan }, missionStore)
    // Actually set to planning manually since idle→planning isn't in the map
    missionStore.setPhase('planning')
    missionStore.addPhaseTransition('idle', 'planning', 'Mission started')
    phase = 'planning'

    // Scout first if enabled
    let scoutReport: string | null = null
    if (config.enableScout) {
      missionStore.setPhase('scouting')
      missionStore.addPhaseTransition('planning', 'scouting', 'Starting scout phase')
      phase = 'scouting'

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

    if (isTerminal(phase)) return

    // --- Build ---
    missionStore.setPhase('building')
    missionStore.addPhaseTransition(phase, 'building', 'Starting build phase')
    phase = 'building'

    let testRetries = 0

    // Build-test loop (retry up to MAX_TEST_RETRIES times)
    while (testRetries <= MAX_TEST_RETRIES) {
      await runBuildPhase(plan, config, missionId, missionStore, agentStore)
      phase = applyTransition(phase, { type: 'ALL_BUILDERS_DONE' }, missionStore)

      if (isTerminal(phase)) return

      // --- Test ---
      const testResult = await runTestPhase(missionId, missionStore, agentStore, config.timeLimitSeconds)

      if (testResult.passed) {
        phase = applyTransition(phase, { type: 'TEST_PASSED' }, missionStore)
        break
      } else {
        testRetries++
        if (testRetries > MAX_TEST_RETRIES) {
          phase = applyTransition(phase, { type: 'TEST_FAILED', error: testResult.output.slice(-500) }, missionStore)
          // TEST_FAILED transitions to building for retry, but we've exhausted retries
          missionStore.setPhase('failed')
          missionStore.setError('Tests failed after maximum retries')
          return
        }
        // Reset failed subtasks for retry
        for (const subtask of plan.subtasks) {
          if (subtask.status === 'completed') {
            subtask.status = 'pending'
            missionStore.updateSubtask(subtask.id, { status: 'pending', agentId: null })
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
    } else {
      missionStore.setPhase('done')
      missionStore.addPhaseTransition(phase, 'done', 'Verification skipped')
    }

    missionStore.completeMission()
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    missionStore.setError(message)
    missionStore.setPhase('failed')
    missionStore.addPhaseTransition(phase, 'failed', message)
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
