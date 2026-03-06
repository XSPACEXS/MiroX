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
  ['Read', /\bread\(/i],
  ['Edit', /\bedit\(/i],
  ['Bash', /\bbash\(|^\$/i],
  ['Glob', /\bglob\(/i],
  ['Grep', /\bgrep\(/i],
  ['Write', /\bwrite\(/i],
]

function parseAction(text: string): string {
  if (!text) return 'Waiting...'
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
  return text.length > 30 ? text.slice(0, 30) + '\u2026' : text
}

function computeTimeDependentState(
  lastLogTime: number,
  timestamps: number[]
): { isActive: boolean; isIdle: boolean; activityDots: boolean[]; logRate: number } {
  const now = Date.now()
  const isActive = now - lastLogTime < 2000
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
  }, [agent.logs.length, agent.logs])

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
