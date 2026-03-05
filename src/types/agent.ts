export type AIProvider = 'claude' | 'gemini'

export type ClaudeModel = 'opus' | 'sonnet' | 'haiku'
export type GeminiModel = 'gemini-pro' | 'gemini-flash' | 'gemini-flash-2'
export type AgentModel = ClaudeModel | GeminiModel

export interface AgentRun {
  id: string
  prompt: string
  provider: AIProvider
  model: AgentModel
  status: 'running' | 'completed' | 'failed' | 'killed'
  logs: Array<{ timestamp: number; type: 'stdout' | 'stderr' | 'system'; text: string }>
  startedAt: number
  finishedAt: number | null
  exitCode: number | null
  cost: { inputTokens: number; outputTokens: number; estimatedUSD: number } | null
  allowedTools: string[]
  gitTagStart: string | null
  gitTagEnd: string | null
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

export interface QuickAction {
  id: string
  label: string
  description: string
  prompt: string
  provider: AIProvider
  model: AgentModel
  tools: string[]
  icon: 'bug' | 'alert' | 'paintbrush' | 'package' | 'shield' | 'hammer' | 'sparkles'
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
