export interface AgentRun {
  id: string
  prompt: string
  model: 'opus' | 'sonnet' | 'haiku'
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
  model: 'opus' | 'sonnet' | 'haiku'
  prompt: string
  allowedTools: string[]
  fileScope?: string
}

export interface DomCheckResult {
  label: string
  passed: boolean
  detail: string
}

export interface SelfTestResult {
  screenshot: string | null
  domChecks: DomCheckResult[]
  consoleErrors: string[]
}

export interface QuickAction {
  id: string
  label: string
  description: string
  prompt: string
  model: 'opus' | 'sonnet' | 'haiku'
  tools: string[]
  icon: string
}
