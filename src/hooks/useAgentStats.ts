import { useMemo } from 'react'
import type { AgentRun } from '@/types/agent'
import type { AgentStats } from '@/types/character'

const FILE_ACTION_PATTERN = /\b(?:Read|Edit|Write|read|edit|write|Reading|Editing|Writing|Creating)\b.*?(?:['"`]([^'"`\s]+\.[a-zA-Z]+)['"`]|(\S+\.[a-zA-Z]{1,4}))/
const TOOL_PATTERN = /\b(Read|Edit|Write|Glob|Grep|Bash)\b/

/** Derive agent stats from log entries */
export function computeStats(agent: AgentRun): AgentStats {
  const filesSet = new Set<string>()
  const toolsSet = new Set<string>()
  let linesChanged = 0
  let errorsEncountered = 0

  for (const log of agent.logs) {
    // Detect file operations
    if (log.type === 'stdout') {
      const fileMatch = log.text.match(FILE_ACTION_PATTERN)
      if (fileMatch) {
        const filePath = fileMatch[1] ?? fileMatch[2]
        if (filePath) filesSet.add(filePath)
      }

      // Detect tools used
      const toolMatch = log.text.match(TOOL_PATTERN)
      if (toolMatch?.[1]) {
        toolsSet.add(toolMatch[1])
      }

      // Rough line count estimation from edit operations
      if (/\b(Edit|edit|Editing)\b/.test(log.text)) {
        linesChanged += 5 // rough estimate per edit operation
      }
      if (/\b(Write|write|Writing|Creating)\b/.test(log.text)) {
        linesChanged += 20 // rough estimate per write operation
      }
    }

    if (log.type === 'stderr') {
      errorsEncountered++
    }
  }

  // Compute active time
  const firstLog = agent.logs[0]
  const lastLog = agent.logs[agent.logs.length - 1]
  const activeSeconds = firstLog && lastLog
    ? Math.round((lastLog.timestamp - firstLog.timestamp) / 1000)
    : 0

  return {
    filesTouched: filesSet.size,
    linesChanged,
    toolsUsed: [...toolsSet],
    activeSeconds,
    errorsEncountered,
  }
}

/** Hook that returns derived stats for an agent */
export function useAgentStats(agent: AgentRun): AgentStats {
  return useMemo(
    () => computeStats(agent),
    // Re-compute when log count changes significantly (every 10 logs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [agent.id, Math.floor(agent.logs.length / 10)]
  )
}
