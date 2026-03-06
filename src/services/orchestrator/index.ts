export { executeMission, abortMission } from './pipeline'
export type { MissionConfig, MissionStoreAPI, AgentStoreAPI } from './pipeline'
export { transition, isTerminal, isActive } from './stateMachine'
export type { TransitionResult } from './stateMachine'
export { validateFileOwnership, mergeConflictingSubtasks, injectScopeGuard } from './scopeGuard'
export { parsePlanOutput, extractJsonFromLogs, getPlanAgentPrompt } from './taskDecomposer'

export type {
  MissionPhase,
  MissionState,
  MissionPlan,
  MissionEvent,
  Subtask,
  PhaseTransition,
} from './types'
