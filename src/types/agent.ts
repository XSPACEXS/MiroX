export type AIProvider = 'claude' | 'gemini'

export type ClaudeModel = 'opus' | 'sonnet' | 'haiku'
export type GeminiTextModel = 'gemini-pro' | 'gemini-flash' | 'gemini-flash-2' | 'gemini-flash-lite'
export type GeminiMediaModel =
  | 'gemini-imagen'
  | 'gemini-imagen-fast'
  | 'gemini-nano-banana'
  | 'gemini-veo'
export type GeminiModel = GeminiTextModel | GeminiMediaModel
export type AgentModel = ClaudeModel | GeminiModel

export type AgentOutputType = 'text' | 'image' | 'video'

export interface AgentLogEntry {
  timestamp: number
  type: 'stdout' | 'stderr' | 'system' | 'media'
  text: string
  mediaUrl?: string
  mediaMimeType?: string
}

export interface AgentRun {
  id: string
  prompt: string
  provider: AIProvider
  model: AgentModel
  status: 'running' | 'completed' | 'failed' | 'killed'
  logs: AgentLogEntry[]
  startedAt: number
  finishedAt: number | null
  exitCode: number | null
  cost: { inputTokens: number; outputTokens: number; estimatedUSD: number } | null
  allowedTools: string[]
  gitTagStart: string | null
  gitTagEnd: string | null
  outputType: AgentOutputType
  teamRunId: string | null
  teamRole: 'primary' | 'collaborator' | null
}

export interface AgentConfig {
  provider: AIProvider
  model: AgentModel
  prompt: string
  allowedTools: string[]
  contextFiles?: string[]
}

export interface DomCheckResult {
  label: string
  passed: boolean
  detail: string
}

export interface CollaboratorConfig {
  model: GeminiModel
  role: string
  promptOverride?: string
}

export interface TeamRunConfig {
  primary: {
    model: ClaudeModel
    prompt: string
    allowedTools: string[]
  }
  collaborators: CollaboratorConfig[]
}

export interface SessionConfig {
  timeLimitMinutes: number
  claudeModel: ClaudeModel
  geminiEnabled: boolean
  geminiModel: GeminiModel
  prompt: string
}

export interface AgentSession {
  id: string
  config: SessionConfig
  status: 'running' | 'completed' | 'stopped'
  startedAt: number
  endsAt: number
  claudeAgentId: string | null
  geminiAgentId: string | null
}
