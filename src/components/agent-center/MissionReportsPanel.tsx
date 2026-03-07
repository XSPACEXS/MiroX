import { useState, useEffect, useCallback } from 'react'
import { FileText, X, ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Clock, Users, Files, Zap, Bot, FlaskConical, ShieldCheck, Sparkles } from 'lucide-react'
import { useMissionStore } from '@stores/missionStore'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface MissionLogEvent {
  timestamp: number
  type: string
  data: Record<string, unknown>
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDuration(ms: number): string {
  if (ms < 1000) return '<1s'
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  if (minutes === 0) return `${seconds}s`
  return `${minutes}m ${seconds}s`
}

function formatRelativeTime(eventTs: number, startTs: number): string {
  const diff = eventTs - startTs
  if (diff < 0) return '+0:00'
  const totalSeconds = Math.floor(diff / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `+${minutes}:${seconds.toString().padStart(2, '0')}`
}

function formatDate(ts: number): string {
  const d = new Date(ts)
  const month = d.toLocaleString('en-US', { month: 'short' })
  const day = d.getDate()
  const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
  return `${month} ${day}, ${time}`
}

function statusColor(status: string): string {
  if (status === 'done') return 'text-green-400'
  if (status === 'failed') return 'text-red-400'
  if (status === 'aborted') return 'text-yellow-400'
  return 'text-gray-400'
}

function statusBg(status: string): string {
  if (status === 'done') return 'bg-green-400/10 border-green-400/20'
  if (status === 'failed') return 'bg-red-400/10 border-red-400/20'
  if (status === 'aborted') return 'bg-yellow-400/10 border-yellow-400/20'
  return 'bg-gray-400/10 border-gray-400/20'
}

function StatusIcon({ status }: { status: string }): JSX.Element {
  if (status === 'done') return <CheckCircle2 size={12} className="text-green-400" />
  if (status === 'failed') return <XCircle size={12} className="text-red-400" />
  if (status === 'aborted') return <AlertTriangle size={12} className="text-yellow-400" />
  return <Clock size={12} className="text-gray-400" />
}

// ---------------------------------------------------------------------------
// Event timeline rendering
// ---------------------------------------------------------------------------

interface TimelineEvent {
  time: string
  label: string
  detail?: string
  color: string
  icon: JSX.Element
}

function parseEventsToTimeline(events: MissionLogEvent[]): { timeline: TimelineEvent[]; quality: QualitySignals } {
  const timeline: TimelineEvent[] = []
  const quality: QualitySignals = { testRetries: 0, testPassedFirst: false, verified: null, geminiScore: null, totalAgents: 0 }

  if (events.length === 0) return { timeline, quality }

  const startTs = events[0]!.timestamp
  const agentIds = new Set<string>()

  for (const event of events) {
    const time = formatRelativeTime(event.timestamp, startTs)

    switch (event.type) {
      case 'mission_start':
        timeline.push({ time, label: 'Mission started', color: 'text-blue-400', icon: <Zap size={12} className="text-blue-400" /> })
        break
      case 'phase_change':
        timeline.push({
          time,
          label: `Phase: ${String(event.data.from)} → ${String(event.data.to)}`,
          color: 'text-blue-400',
          icon: <Zap size={12} className="text-blue-400" />,
        })
        break
      case 'agent_launch':
        agentIds.add(String(event.data.agentId))
        timeline.push({
          time,
          label: `Agent launched`,
          detail: `${String(event.data.model ?? '')} — subtask ${String(event.data.subtaskId ?? '').slice(0, 8)}`,
          color: 'text-green-400',
          icon: <Bot size={12} className="text-green-400" />,
        })
        break
      case 'agent_exit':
        timeline.push({
          time,
          label: `Agent exited: ${String(event.data.status)}`,
          detail: event.data.subtaskId ? `subtask ${String(event.data.subtaskId).slice(0, 8)}` : undefined,
          color: event.data.status === 'completed' ? 'text-green-400' : 'text-red-400',
          icon: event.data.status === 'completed'
            ? <CheckCircle2 size={12} className="text-green-400" />
            : <XCircle size={12} className="text-red-400" />,
        })
        break
      case 'plan_ready':
        timeline.push({
          time,
          label: `Plan ready: ${String(event.data.subtaskCount)} subtasks`,
          color: 'text-purple-400',
          icon: <FileText size={12} className="text-purple-400" />,
        })
        break
      case 'all_builders_done':
        timeline.push({
          time,
          label: `All builders done`,
          detail: Number(event.data.retry) > 0 ? `retry #${String(event.data.retry)}` : 'first pass',
          color: 'text-blue-400',
          icon: <CheckCircle2 size={12} className="text-blue-400" />,
        })
        break
      case 'test_result': {
        const passed = Boolean(event.data.passed)
        if (quality.testRetries === 0 && passed) quality.testPassedFirst = true
        if (!passed) quality.testRetries++
        timeline.push({
          time,
          label: passed ? 'Tests passed' : 'Tests failed',
          color: passed ? 'text-green-400' : 'text-red-400',
          icon: <FlaskConical size={12} className={passed ? 'text-green-400' : 'text-red-400'} />,
        })
        break
      }
      case 'verify_result': {
        const verified = Boolean(event.data.verified)
        quality.verified = verified
        timeline.push({
          time,
          label: verified ? 'Verification passed' : 'Verification failed',
          color: verified ? 'text-green-400' : 'text-red-400',
          icon: <ShieldCheck size={12} className={verified ? 'text-green-400' : 'text-red-400'} />,
        })
        break
      }
      case 'gemini_review':
        timeline.push({
          time,
          label: `Gemini review: score ${String(event.data.score ?? '?')}/10`,
          detail: `${String(event.data.issues ?? 0)} issues found`,
          color: 'text-purple-400',
          icon: <Sparkles size={12} className="text-purple-400" />,
        })
        break
      case 'gemini_final_report':
        quality.geminiScore = typeof event.data.score === 'number' ? event.data.score : null
        timeline.push({
          time,
          label: `Gemini final report: ${String(event.data.score ?? '?')}/10`,
          detail: `${String(event.data.issues ?? 0)} total issues`,
          color: 'text-purple-400',
          icon: <Sparkles size={12} className="text-purple-400" />,
        })
        break
      case 'mission_complete':
        timeline.push({
          time,
          label: 'Mission completed',
          color: 'text-green-400',
          icon: <CheckCircle2 size={12} className="text-green-400" />,
        })
        break
      case 'mission_failed':
        timeline.push({
          time,
          label: 'Mission failed',
          detail: String(event.data.reason ?? event.data.error ?? ''),
          color: 'text-red-400',
          icon: <XCircle size={12} className="text-red-400" />,
        })
        break
      case 'handoff_complete':
        timeline.push({
          time,
          label: `Agent handoff (gen ${String(event.data.generation)})`,
          color: 'text-yellow-400',
          icon: <Users size={12} className="text-yellow-400" />,
        })
        break
      case 'gemini_test_analysis':
        timeline.push({
          time,
          label: `Gemini analysis: ${String(event.data.fixes)} fixes suggested`,
          color: 'text-purple-400',
          icon: <Sparkles size={12} className="text-purple-400" />,
        })
        break
      case 'plan_parse_failed':
        timeline.push({
          time,
          label: `Plan parse failed (attempt ${String(event.data.attempt)})`,
          detail: event.data.error ? String(event.data.error).slice(0, 80) : undefined,
          color: 'text-red-400',
          icon: <AlertTriangle size={12} className="text-red-400" />,
        })
        break
      case 'gemini_brain_start':
        timeline.push({
          time,
          label: event.data.ok ? 'Gemini Brain connected' : 'Gemini Brain failed',
          color: event.data.ok ? 'text-purple-400' : 'text-red-400',
          icon: <Sparkles size={12} className={event.data.ok ? 'text-purple-400' : 'text-red-400'} />,
        })
        break
      default:
        timeline.push({
          time,
          label: event.type.replace(/_/g, ' '),
          color: 'text-gray-400',
          icon: <Clock size={12} className="text-gray-400" />,
        })
    }
  }

  quality.totalAgents = agentIds.size
  return { timeline, quality }
}

interface QualitySignals {
  testRetries: number
  testPassedFirst: boolean
  verified: boolean | null
  geminiScore: number | null
  totalAgents: number
}

// ---------------------------------------------------------------------------
// MissionReportDetail
// ---------------------------------------------------------------------------

interface MissionReportDetailProps {
  missionId: string
  prompt: string
  status: string
  startedAt: number
  finishedAt: number | null
  agentCount: number
  fileCount: number
  onBack: () => void
}

function MissionReportDetail({
  missionId,
  prompt,
  status,
  startedAt,
  finishedAt,
  agentCount,
  fileCount,
  onBack,
}: MissionReportDetailProps): JSX.Element {
  const [events, setEvents] = useState<MissionLogEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      try {
        if (window.electronAPI?.missionLog) {
          const result = await window.electronAPI.missionLog.read(missionId)
          if (cancelled) return
          if (result.ok && result.events) {
            setEvents(result.events as MissionLogEvent[])
          } else {
            setError(result.error ?? 'Failed to load events')
          }
        } else {
          setError('Mission log API not available')
        }
      } catch {
        if (!cancelled) setError('Failed to load mission log')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    void load()
    return () => { cancelled = true }
  }, [missionId])

  const duration = finishedAt ? finishedAt - startedAt : Date.now() - startedAt
  const { timeline, quality } = parseEventsToTimeline(events)

  return (
    <div className="space-y-3">
      {/* Back button + header */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-200 transition-colors"
      >
        <ArrowLeft size={12} />
        Back to reports
      </button>

      {/* Summary bar */}
      <div className="flex flex-wrap items-center gap-3">
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium ${statusBg(status)} ${statusColor(status)}`}>
          <StatusIcon status={status} />
          {status}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-gray-500">
          <Clock size={10} /> {formatDuration(duration)}
        </span>
        <span className="flex items-center gap-1 text-[11px] text-gray-500">
          <Users size={10} /> {agentCount} agents
        </span>
        <span className="flex items-center gap-1 text-[11px] text-gray-500">
          <Files size={10} /> {fileCount} files
        </span>
      </div>

      {/* Prompt */}
      <div className="rounded-lg bg-black-700/50 border border-black-600 p-2.5">
        <p className="text-[11px] text-gray-500 mb-1">Prompt</p>
        <p className="text-xs text-gray-300 whitespace-pre-wrap">{prompt || '(no prompt recorded)'}</p>
      </div>

      {/* Quality signals */}
      {events.length > 0 && (
        <div className="rounded-lg bg-black-700/50 border border-black-600 p-2.5 space-y-1.5">
          <p className="text-[11px] text-gray-500 font-medium">Quality Signals</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <div className="flex items-center gap-1.5 text-[11px]">
              <FlaskConical size={10} className="text-gray-500" />
              <span className="text-gray-400">Test retries:</span>
              <span className={quality.testRetries === 0 ? 'text-green-400' : 'text-yellow-400'}>
                {quality.testRetries}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <CheckCircle2 size={10} className="text-gray-500" />
              <span className="text-gray-400">First-pass tests:</span>
              <span className={quality.testPassedFirst ? 'text-green-400' : 'text-gray-500'}>
                {quality.testPassedFirst ? 'Yes' : 'No'}
              </span>
            </div>
            {quality.verified !== null && (
              <div className="flex items-center gap-1.5 text-[11px]">
                <ShieldCheck size={10} className="text-gray-500" />
                <span className="text-gray-400">Verified:</span>
                <span className={quality.verified ? 'text-green-400' : 'text-red-400'}>
                  {quality.verified ? 'Yes' : 'No'}
                </span>
              </div>
            )}
            {quality.geminiScore !== null && (
              <div className="flex items-center gap-1.5 text-[11px]">
                <Sparkles size={10} className="text-gray-500" />
                <span className="text-gray-400">Gemini score:</span>
                <span className={quality.geminiScore >= 7 ? 'text-green-400' : quality.geminiScore >= 5 ? 'text-yellow-400' : 'text-red-400'}>
                  {quality.geminiScore}/10
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5 text-[11px]">
              <Bot size={10} className="text-gray-500" />
              <span className="text-gray-400">Agents spawned:</span>
              <span className="text-gray-300">{quality.totalAgents}</span>
            </div>
          </div>
        </div>
      )}

      {/* Timeline */}
      <div className="rounded-lg bg-black-700/50 border border-black-600 p-2.5">
        <p className="text-[11px] text-gray-500 font-medium mb-2">Timeline</p>
        {loading && <p className="text-[11px] text-gray-600">Loading events...</p>}
        {error && <p className="text-[11px] text-red-400">{error}</p>}
        {!loading && !error && timeline.length === 0 && (
          <p className="text-[11px] text-gray-600">No events recorded for this mission.</p>
        )}
        {timeline.length > 0 && (
          <div className="space-y-0">
            {timeline.map((entry, i) => (
              <div key={i} className="flex items-start gap-2 py-1 border-l border-black-500 pl-3 ml-1 relative">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-black-800 border border-black-500 flex items-center justify-center">
                  <div className={`w-1.5 h-1.5 rounded-full ${entry.color.replace('text-', 'bg-')}`} />
                </div>
                <span className="text-[10px] text-gray-600 font-mono w-12 shrink-0 pt-0.5">{entry.time}</span>
                <div className="flex items-center gap-1.5 min-w-0">
                  {entry.icon}
                  <span className={`text-[11px] ${entry.color}`}>{entry.label}</span>
                  {entry.detail && (
                    <span className="text-[10px] text-gray-600 truncate">{entry.detail}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// MissionReportsStrip (compact header button)
// ---------------------------------------------------------------------------

interface MissionReportsStripProps {
  onClick: () => void
  count: number
}

export function MissionReportsStrip({ onClick, count }: MissionReportsStripProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-black-600 hover:border-yellow-400/20 hover:bg-yellow-400/5 transition-colors"
      aria-label="Toggle mission reports panel"
    >
      <FileText size={12} className="text-gray-500" />
      {count > 0 && (
        <span className="text-[10px] font-medium text-gray-400 bg-black-600 px-1.5 py-0.5 rounded-full">
          {count}
        </span>
      )}
    </button>
  )
}

// ---------------------------------------------------------------------------
// MissionReportsPanel (full panel)
// ---------------------------------------------------------------------------

interface MissionReportsPanelProps {
  onClose: () => void
}

export function MissionReportsPanel({ onClose }: MissionReportsPanelProps): JSX.Element {
  const missionHistory = useMissionStore((s) => s.missionHistory)
  const clearMissionHistory = useMissionStore((s) => s.clearMissionHistory)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selected = selectedId ? missionHistory.find((m) => m.id === selectedId) : null

  const handleClear = useCallback(() => {
    clearMissionHistory()
    setSelectedId(null)
  }, [clearMissionHistory])

  return (
    <div className="rounded-2xl border border-black-600 bg-black-800/90 backdrop-blur-sm p-4 space-y-3 max-h-[60vh] overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText size={14} className="text-yellow-400" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">Mission Reports</h3>
        </div>
        <button
          onClick={onClose}
          className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-black-600 text-gray-500 hover:text-gray-300 transition-colors"
          aria-label="Close mission reports panel"
        >
          <X size={12} />
        </button>
      </div>

      {selected ? (
        <MissionReportDetail
          missionId={selected.id}
          prompt={selected.prompt}
          status={selected.status}
          startedAt={selected.startedAt}
          finishedAt={selected.finishedAt}
          agentCount={selected.agentCount}
          fileCount={selected.fileCount}
          onBack={() => setSelectedId(null)}
        />
      ) : (
        <>
          {missionHistory.length === 0 ? (
            <div className="py-6 text-center">
              <FileText size={24} className="text-gray-700 mx-auto mb-2" />
              <p className="text-xs text-gray-600">No missions yet</p>
              <p className="text-[11px] text-gray-700 mt-1">
                Run a mission from the chat to see reports here
              </p>
            </div>
          ) : (
            <div className="space-y-1.5">
              {missionHistory.map((entry) => {
                const duration = entry.finishedAt
                  ? entry.finishedAt - entry.startedAt
                  : 0

                return (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedId(entry.id)}
                    className="w-full text-left rounded-xl border border-black-600 bg-black-700/50 hover:border-black-500 hover:bg-black-700 p-3 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <StatusIcon status={entry.status} />
                      <span className="text-xs text-white font-medium truncate flex-1">
                        {entry.prompt
                          ? entry.prompt.length > 80
                            ? entry.prompt.slice(0, 80) + '...'
                            : entry.prompt
                          : '(no prompt)'}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full border ${statusBg(entry.status)} ${statusColor(entry.status)}`}>
                        {entry.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] text-gray-600 pl-5">
                      <span className="flex items-center gap-1">
                        <Clock size={9} /> {formatDuration(duration)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={9} /> {entry.agentCount}
                      </span>
                      <span className="flex items-center gap-1">
                        <Files size={9} /> {entry.fileCount}
                      </span>
                      <span className="ml-auto">{formatDate(entry.startedAt)}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {missionHistory.length > 0 && (
            <div className="flex justify-end pt-1">
              <button
                onClick={handleClear}
                className="text-[11px] text-gray-600 hover:text-red-400 transition-colors"
              >
                Clear history
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
