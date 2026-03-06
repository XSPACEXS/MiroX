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
  geminiAssistReport?: GeminiAssistReport
  geminiAssistSessionId?: string
  handoffCount: number
  totalCost: number
}

export interface GeminiAssistConfig {
  enabled: boolean
  brainModel: 'gemini-pro' | 'gemini-flash' | 'gemini-flash-2' | 'gemini-flash-lite'
  autoMockup: boolean
  autoImage: boolean
  autoVideo: boolean
}

export interface GeminiReview {
  agentId: string
  issues: GeminiReviewIssue[]
  summary: string
  qualityScore: number
  mockupUrl?: string
}

export interface GeminiReviewIssue {
  severity: 'critical' | 'warning' | 'suggestion'
  file: string
  line?: number
  message: string
}

export interface GeminiAssistReport {
  overallScore: number
  reviews: GeminiReview[]
  filesChanged: number
  totalIssues: number
  mockups: string[]
  summary: string
}

export interface HandoffBriefing {
  id: string
  fromAgentId: string
  toAgentId: string | null
  lineageId: string
  generation: number
  subtaskId: string
  completedWork: string
  remainingWork: string
  currentFileState: string
  knownIssues: string
  contextSummary: string
}

export interface MissionConfig {
  prompt: string
  primaryModel: 'opus' | 'sonnet' | 'haiku'
  tools: string[]
  timeLimitSeconds: number
  enableScout: boolean
  enableVerify: boolean
  geminiAssist?: GeminiAssistConfig
  enableHandoff?: boolean
  handoffThresholdClaude?: number
  handoffThresholdGemini?: number
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
  | { type: 'GEMINI_REVIEW_DONE'; review: GeminiReview }
  | { type: 'HANDOFF_START'; fromAgentId: string; lineageId: string; generation: number }
  | { type: 'HANDOFF_COMPLETE'; fromAgentId: string; toAgentId: string; lineageId: string }
  | { type: 'GEMINI_BRAIN_HANDOFF'; oldSessionId: string; newSessionId: string }
