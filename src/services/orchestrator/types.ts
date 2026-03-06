export type MissionPhase =
  | 'idle'
  | 'planning'
  | 'scouting'
  | 'building'
  | 'testing'
  | 'verifying'
  | 'done'
  | 'failed'
  | 'aborted'

export interface Subtask {
  id: string
  title: string
  description: string
  files: string[]
  dependencies: string[]
  model: 'opus' | 'sonnet' | 'haiku'
  tools: string[]
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped'
  agentId: string | null
  retryCount: number
}

export interface MissionPlan {
  originalPrompt: string
  scoutReport: string | null
  subtasks: Subtask[]
  fileOwnership: Record<string, string>
  createdAt: number
}

export interface PhaseTransition {
  from: MissionPhase
  to: MissionPhase
  at: number
  reason: string
}

export interface MissionState {
  id: string
  phase: MissionPhase
  plan: MissionPlan | null
  activeAgentIds: string[]
  completedAgentIds: string[]
  phaseHistory: PhaseTransition[]
  error: string | null
  startedAt: number
  finishedAt: number | null
}

export interface MissionConfig {
  prompt: string
  primaryModel: 'opus' | 'sonnet' | 'haiku'
  tools: string[]
  timeLimitSeconds: number
  enableScout: boolean
  enableVerify: boolean
}

export type MissionEvent =
  | { type: 'PLAN_READY'; plan: MissionPlan }
  | { type: 'PLAN_FAILED'; error: string }
  | { type: 'SCOUT_DONE'; report: string }
  | { type: 'SCOUT_FAILED'; error: string }
  | { type: 'SCOUT_SKIPPED' }
  | { type: 'ALL_BUILDERS_DONE' }
  | { type: 'BUILDER_FAILED'; subtaskId: string; error: string }
  | { type: 'TEST_PASSED' }
  | { type: 'TEST_FAILED'; error: string }
  | { type: 'VERIFY_DONE' }
  | { type: 'VERIFY_FAILED'; error: string }
  | { type: 'ABORT' }
