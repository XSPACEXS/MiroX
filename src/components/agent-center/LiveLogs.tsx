import { useEffect, useRef, useState, useMemo } from 'react'
import { Terminal, Filter } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { SimpleSelect } from '@components/ui/Dropdown'
import { useAgentStore } from '@stores/agentStore'
import { MediaLogEntry } from './MediaLogEntry'

type LogFilter = 'all' | 'stdout' | 'stderr' | 'system' | 'media'

const FILTER_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'stdout', label: 'stdout' },
  { value: 'stderr', label: 'stderr' },
  { value: 'system', label: 'system' },
  { value: 'media', label: 'media' },
]

const PROVIDER_OPTIONS = [
  { value: 'all', label: 'All Providers' },
  { value: 'claude', label: 'Claude' },
  { value: 'gemini', label: 'Gemini' },
]

const TYPE_COLORS: Record<string, string> = {
  stdout: 'text-gray-200',
  stderr: 'text-red-400',
  system: 'text-yellow-400/60',
  media: 'text-orange-400',
}

function formatTimestamp(ts: number): string {
  const d = new Date(ts)
  return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

export function LiveLogs(): JSX.Element {
  const agents = useAgentStore((s) => s.agents)
  const [filter, setFilter] = useState<LogFilter>('all')
  const [providerFilter, setProviderFilter] = useState('all')
  const [selectedAgentId, setSelectedAgentId] = useState<string>('')
  const logEndRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [autoScroll, setAutoScroll] = useState(true)

  const agentOptions = useMemo(
    () => [
      { value: '', label: 'All Agents' },
      ...agents.map((a) => ({
        value: a.id,
        label: a.prompt.length > 40 ? `${a.model} — ${a.prompt.slice(0, 40)}...` : `${a.model} — ${a.prompt}`,
      })),
    ],
    [agents]
  )

  const allLogs = useMemo(() => {
    let source = selectedAgentId
      ? agents.filter((a) => a.id === selectedAgentId)
      : agents
    // Provider filter
    if (providerFilter !== 'all') {
      source = source.filter((a) => a.provider === providerFilter)
    }
    const merged = source.flatMap((a) =>
      a.logs.map((l) => ({ ...l, agentId: a.id }))
    )
    merged.sort((a, b) => a.timestamp - b.timestamp)

    const filtered =
      filter === 'all' ? merged : merged.filter((l) => l.type === filter)

    // Max 1000 lines
    return filtered.slice(-1000)
  }, [agents, selectedAgentId, filter, providerFilter])

  // Auto-scroll — scope to container only (not the page)
  useEffect(() => {
    if (autoScroll && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [allLogs.length, autoScroll])

  // Detect manual scroll
  const handleScroll = () => {
    const el = containerRef.current
    if (!el) return
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50
    setAutoScroll(atBottom)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Terminal size={20} className="text-yellow-400" />
          <h2 className="font-display font-bold text-xl text-white">Live Logs</h2>
        </div>
        <div className="flex items-center gap-2">
          {agents.length > 1 && (
            <SimpleSelect
              options={agentOptions}
              value={selectedAgentId}
              onChange={setSelectedAgentId}
              className="w-52"
            />
          )}
          <SimpleSelect
            options={PROVIDER_OPTIONS}
            value={providerFilter}
            onChange={setProviderFilter}
            className="w-36"
          />
          <div className="flex items-center gap-1">
            <Filter size={14} className="text-gray-400" />
            <SimpleSelect
              options={FILTER_OPTIONS}
              value={filter}
              onChange={(v) => setFilter(v as LogFilter)}
              className="w-28"
            />
          </div>
        </div>
      </div>

      <Card variant="default" className="overflow-hidden">
        <div
          ref={containerRef}
          onScroll={handleScroll}
          role="log"
          aria-label="Agent output logs"
          className="h-80 overflow-y-auto p-4 font-mono text-xs leading-relaxed"
        >
          {allLogs.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-600">
              <p>Waiting for agent output...</p>
            </div>
          ) : (
            allLogs.map((log, i) => (
              <div key={`${log.timestamp}-${i}`} className="flex gap-2">
                <span className="text-gray-600 flex-shrink-0 select-none">
                  {formatTimestamp(log.timestamp)}
                </span>
                {log.type === 'media' && log.mediaUrl ? (
                  <MediaLogEntry
                    text={log.text}
                    mediaUrl={log.mediaUrl}
                    mediaMimeType={log.mediaMimeType}
                  />
                ) : (
                  <span className={TYPE_COLORS[log.type] || 'text-gray-200'}>
                    {log.text}
                  </span>
                )}
              </div>
            ))
          )}
          <div ref={logEndRef} />
        </div>
      </Card>
    </div>
  )
}
