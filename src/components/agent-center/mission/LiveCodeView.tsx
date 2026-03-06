import { useEffect, useRef, useMemo, useState } from 'react'
import type { AgentRun } from '@/types/agent'

interface LiveCodeViewProps {
  agents: AgentRun[]
}

interface CodeEntry {
  agentName: string
  timestamp: number
  lines: string[]
}

function formatTimestamp(ts: number): string {
  const d = new Date(ts)
  return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

function classifyLine(line: string): string {
  if (line.startsWith('+') && !line.startsWith('+++')) return 'text-green-400'
  if (line.startsWith('-') && !line.startsWith('---')) return 'text-red-400'
  if (/\.(tsx?|jsx?|json|css|html|md|yml|yaml)/.test(line)) return 'text-yellow-400/80'
  return 'text-gray-400'
}

function isCodeLike(text: string): boolean {
  // Match diff lines, file paths, code-ish patterns
  if (text.startsWith('+') || text.startsWith('-')) return true
  if (/\.(tsx?|jsx?|json|css|html|md|yml|yaml)/.test(text)) return true
  if (/^(import|export|const|let|var|function|class|interface|type|return|if|for|while)\b/.test(text.trim())) return true
  if (/[{}();=><]/.test(text)) return true
  if (/^\s*(\/\/|\/\*|\*)/.test(text)) return true
  return false
}

export function LiveCodeView({ agents }: LiveCodeViewProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [autoScroll, setAutoScroll] = useState(true)

  const codeEntries = useMemo((): CodeEntry[] => {
    const entries: CodeEntry[] = []

    for (const agent of agents) {
      // Parse recent stdout logs for code-like content
      const recentLogs = agent.logs
        .filter((log) => log.type === 'stdout' && isCodeLike(log.text))
        .slice(-50)

      for (const log of recentLogs) {
        entries.push({
          agentName: `${agent.model}`,
          timestamp: log.timestamp,
          lines: log.text.split('\n'),
        })
      }
    }

    // Sort by timestamp, keep last 50
    entries.sort((a, b) => a.timestamp - b.timestamp)
    return entries.slice(-50)
  }, [agents])

  // Auto-scroll to bottom
  useEffect(() => {
    if (autoScroll && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [codeEntries.length, autoScroll])

  const handleScroll = (): void => {
    const el = containerRef.current
    if (!el) return
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50
    setAutoScroll(atBottom)
  }

  if (codeEntries.length === 0) {
    return (
      <div className="flex items-center justify-center h-full bg-black-900 rounded-xl text-gray-500 text-sm font-mono">
        Waiting for code changes...
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="h-full overflow-y-auto bg-black-900 rounded-xl p-3 font-mono text-xs leading-relaxed"
      role="log"
      aria-label="Live code changes"
    >
      {codeEntries.map((entry, i) => (
        <div key={`${entry.timestamp}-${i}`} className="mb-2">
          {/* Header */}
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] text-purple-400 font-semibold">
              {entry.agentName}
            </span>
            <span className="text-[10px] text-gray-600">
              {formatTimestamp(entry.timestamp)}
            </span>
          </div>

          {/* Code block */}
          <div className="pl-2 border-l border-black-600">
            {entry.lines.map((line, j) => (
              <div key={j} className={classifyLine(line)}>
                {line || '\u00A0'}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
