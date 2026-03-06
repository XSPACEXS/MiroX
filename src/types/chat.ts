import type { ClaudeModel, GeminiTextModel } from './agent'
import type { MissionPlan } from '@/services/orchestrator/types'

// ---------------------------------------------------------------------------
// Modes
// ---------------------------------------------------------------------------

export type ChatMode = 'chat' | 'mission' | 'scan' | 'debug'

// ---------------------------------------------------------------------------
// Message types
// ---------------------------------------------------------------------------

export type ChatMessageType =
  | 'text'
  | 'suggestion-card'
  | 'mission-plan'
  | 'scan-results'
  | 'debug-analysis'
  | 'mission-progress'
  | 'mission-complete'
  | 'thinking'
  | 'error'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  type: ChatMessageType
  mode: ChatMode
  content: string
  timestamp: number
  agentId?: string
  metadata?: ChatMessageMetadata
}

export interface ChatMessageMetadata {
  actions?: Array<{ label: string; action: string; payload?: string }>
  plan?: MissionPlan
  scanResults?: ScanResults
  debugAnalysis?: DebugAnalysis
  missionId?: string
  missionSummary?: MissionCompleteSummary
  missionPhase?: string
}

// ---------------------------------------------------------------------------
// Scan
// ---------------------------------------------------------------------------

export interface ScanIssue {
  severity: 'critical' | 'warning' | 'info'
  message: string
  file?: string
  fixPrompt?: string
}

export interface ScanCategory {
  name: string
  score: number
  issues: ScanIssue[]
}

export interface ScanResults {
  overallScore: number
  categories: ScanCategory[]
  strengths: string[]
}

// ---------------------------------------------------------------------------
// Debug
// ---------------------------------------------------------------------------

export interface DebugAnalysis {
  rootCause: string
  affectedFiles: string[]
  suggestedFix: string
  diffPreview?: string
}

// ---------------------------------------------------------------------------
// Mission complete
// ---------------------------------------------------------------------------

export interface MissionCompleteSummary {
  duration: string
  filesChanged: number
  agentCount: number
  qualityScore?: number
  status: 'done' | 'failed' | 'aborted'
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

export interface ChatConfig {
  primaryModel: ClaudeModel
  geminiEnabled: boolean
  geminiModel: GeminiTextModel
  timeLimitSeconds: number
  autoMockup: boolean
  handoffEnabled: boolean
  projectDir: string | null
  isLocked: boolean
}
