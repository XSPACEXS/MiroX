import { useState, useEffect, useRef, useMemo } from 'react'
import type { AgentRun } from '@/types/agent'

export interface AgentActivity {
  isActive: boolean
  isIdle: boolean
  currentAction: string
  activeTools: string[]
  activityDots: boolean[]
  logRate: number
}

const TOOL_PATTERNS: [string, RegExp][] = [
  ['Read', /\bread\(|"name"\s*:\s*"Read"/i],
  ['Edit', /\bedit\(|"name"\s*:\s*"Edit"/i],
  ['Bash', /\bbash\(|^\$|"name"\s*:\s*"Bash"/i],
  ['Glob', /\bglob\(|"name"\s*:\s*"Glob"/i],
  ['Grep', /\bgrep\(|"name"\s*:\s*"Grep"/i],
  ['Write', /\bwrite\(|"name"\s*:\s*"Write"/i],
]

function tryParseStreamJson(text: string): string | null {
  if (!text.startsWith('{')) return null
  try {
    const obj = JSON.parse(text) as Record<string, unknown>

    // tool_use events — Claude CLI uses "tool" or "name" depending on version
    if (obj.type === 'tool_use') {
      const toolName = (obj.name || obj.tool) as string | undefined
      if (!toolName) return 'Using tool...'
      const input = obj.input as Record<string, unknown> | undefined
      if ((toolName === 'Read' || toolName === 'read') && input?.file_path) {
        const file = String(input.file_path).split('/').pop()
        return `Reading ${file}`
      }
      if ((toolName === 'Edit' || toolName === 'edit') && input?.file_path) {
        const file = String(input.file_path).split('/').pop()
        return `Editing ${file}`
      }
      if ((toolName === 'Write' || toolName === 'write') && input?.file_path) {
        const file = String(input.file_path).split('/').pop()
        return `Writing ${file}`
      }
      if (toolName === 'Bash' || toolName === 'bash') {
        const cmd = String(input?.command || '').slice(0, 30)
        return cmd ? `Running ${cmd}` : 'Running command...'
      }
      if (/^(Glob|Grep|glob|grep)$/.test(toolName)) return 'Searching files...'
      return `Using ${toolName}`
    }

    // assistant text — various possible shapes
    if (obj.type === 'assistant') {
      const msg = (obj.message || obj.content || obj.text) as string | undefined
      if (typeof msg === 'string' && msg.length > 0) {
        return msg.length > 40 ? msg.slice(0, 40) + '\u2026' : msg
      }
      return 'Thinking...'
    }

    // content_block events from streaming API
    if (obj.type === 'content_block_start' || obj.type === 'content_block_delta') {
      return 'Thinking...'
    }

    // result / tool_result events
    if (obj.type === 'result' || obj.type === 'tool_result') return 'Processing result...'

    // system init
    if (obj.type === 'system') return 'Initializing...'

    return null
  } catch {
    return null
  }
}

function parseAction(text: string): string {
  if (!text) return 'Waiting...'

  // Try parsing as stream-json first
  const parsed = tryParseStreamJson(text)
  if (parsed) return parsed

  // Fallback: plain-text keyword matching
  const lower = text.toLowerCase()
  if (lower.includes('reading') || lower.includes('read(')) {
    const file = text.match(/(?:Reading|Read\().*?([/\w.-]+\.\w+)/)?.[1]
    return file ? `Reading ${file}` : 'Reading file...'
  }
  if (lower.includes('editing') || lower.includes('edit(')) {
    const file = text.match(/(?:Editing|Edit\().*?([/\w.-]+\.\w+)/)?.[1]
    return file ? `Editing ${file}` : 'Editing file...'
  }
  if (lower.includes('bash(') || lower.includes('running')) return 'Running command...'
  if (lower.includes('glob(') || lower.includes('grep(')) return 'Searching files...'
  if (lower.includes('typecheck')) return 'Running typecheck'
  if (lower.includes('npm run build') || lower.includes('vite build')) return 'Building...'
  if (lower.includes('npm run test') || lower.includes('vitest')) return 'Running tests...'
  if (lower.includes('electron-builder')) return 'Packaging app...'
  return text.length > 40 ? text.slice(0, 40) + '\u2026' : text
}

function computeTimeDependentState(
  lastLogTime: number,
  timestamps: number[]
): { isActive: boolean; isIdle: boolean; activityDots: boolean[]; logRate: number } {
  const now = Date.now()
  const isActive = now - lastLogTime < 4000
  const isIdle = now - lastLogTime > 10000

  const activityDots: boolean[] = []
  for (let i = 9; i >= 0; i--) {
    const start = now - (i + 1) * 1000
    const end = now - i * 1000
    activityDots.push(timestamps.some((t) => t >= start && t < end))
  }

  const tenAgo = now - 10_000
  const logRate = timestamps.filter((t) => t > tenAgo).length / 10

  return { isActive, isIdle, activityDots, logRate }
}

export function useAgentActivity(agent: AgentRun): AgentActivity {
  const logTimestamps = useRef<number[]>([])

  // Track log timestamps
  useEffect(() => {
    if (agent.logs.length > 0) {
      const last = agent.logs[agent.logs.length - 1]
      if (last) {
        logTimestamps.current.push(last.timestamp)
        const cutoff = Date.now() - 60_000
        logTimestamps.current = logTimestamps.current.filter((t) => t > cutoff)
      }
    }
  }, [agent.logs])

  // Compute log-derived values (pure)
  const logDerived = useMemo(() => {
    const lastLog = agent.logs.length > 0 ? agent.logs[agent.logs.length - 1] : null
    const lastLogTime = lastLog?.timestamp || 0

    const lastStdout = [...agent.logs].reverse().find((l) => l.type === 'stdout')
    const currentAction = parseAction(lastStdout?.text || '')

    const recentLogs = agent.logs.slice(-20)
    const activeTools: string[] = []
    for (const [tool, pattern] of TOOL_PATTERNS) {
      if (recentLogs.some((l) => pattern.test(l.text))) {
        activeTools.push(tool)
      }
    }

    return { lastLogTime, currentAction, activeTools }
  }, [agent.logs])

  // Time-dependent state updated via interval
  const [timeState, setTimeState] = useState(() =>
    computeTimeDependentState(logDerived.lastLogTime, [])
  )

  useEffect(() => {
    if (agent.status !== 'running') return
    const lastLogTime = logDerived.lastLogTime
    const update = (): void => {
      setTimeState(computeTimeDependentState(lastLogTime, logTimestamps.current))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [agent.status, logDerived.lastLogTime])

  return {
    isActive: timeState.isActive,
    isIdle: timeState.isIdle,
    currentAction: logDerived.currentAction,
    activeTools: logDerived.activeTools,
    activityDots: timeState.activityDots,
    logRate: timeState.logRate,
  }
}
