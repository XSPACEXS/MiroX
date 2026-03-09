export { executeMission, abortMission } from './pipeline'
export type { MissionConfig, MissionStoreAPI, AgentStoreAPI } from './pipeline'
export { buildMissionStoreAPI, buildAgentStoreAPI } from './storeApiFactory'
export { transition, isTerminal, isActive } from './stateMachine'
export type { TransitionResult } from './stateMachine'
export { validateFileOwnership, mergeConflictingSubtasks, injectScopeGuard } from './scopeGuard'
export { parsePlanOutput, extractJsonFromLogs, getPlanAgentPrompt } from './taskDecomposer'
export { GeminiAssistant } from './geminiAssist'
export { HandoffManager } from './handoffManager'
export type { HandoffResult, LaunchAgentFn, OnHandoffCallback } from './handoffManager'

export type {
  MissionPhase,
  MissionState,
  MissionPlan,
  MissionEvent,
  Subtask,
  PhaseTransition,
  GeminiAssistConfig,
  GeminiAssistReport,
  GeminiReview,
  GeminiReviewIssue,
  HandoffBriefing,
} from './types'
