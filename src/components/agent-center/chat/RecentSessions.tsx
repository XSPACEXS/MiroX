import { History, RotateCcw } from 'lucide-react'
import { useMissionStore } from '@stores/missionStore'
import { useChatStore } from '@stores/chatStore'

function timeAgo(ts: number): string {
  const seconds = Math.floor((Date.now() - ts) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

function statusColor(status: string): string {
  if (status === 'done') return 'text-green-400 bg-green-400/10'
  if (status === 'failed') return 'text-red-400 bg-red-400/10'
  if (status === 'aborted') return 'text-orange-400 bg-orange-400/10'
  return 'text-gray-400 bg-gray-400/10'
}

export function RecentSessions(): JSX.Element {
  const missionHistory = useMissionStore((s) => s.missionHistory)
  const setMode = useChatStore((s) => s.setMode)
  const setPendingInput = useChatStore((s) => s.setPendingInput)

  function handleRelaunch(prompt: string): void {
    setMode('mission')
    setPendingInput(prompt)
  }

  if (missionHistory.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <History size={28} className="text-gray-600 mb-3" />
        <p className="text-sm text-gray-500">No past sessions yet.</p>
        <p className="text-xs text-gray-600 mt-1">Start by chatting or launching a mission.</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <h3 className="text-xs font-medium text-gray-400 px-1 flex items-center gap-1.5">
        <History size={12} />
        Recent Sessions
      </h3>
      {missionHistory.map((entry) => (
        <div
          key={entry.id}
          className="flex items-center gap-3 p-3 rounded-xl bg-black-800/50 border border-black-600 hover:border-black-500 transition-colors"
        >
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-200 truncate">
              {entry.prompt || 'Untitled mission'}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${statusColor(entry.status)}`}>
                {entry.status}
              </span>
              <span className="text-[10px] text-gray-600">
                {timeAgo(entry.startedAt)}
              </span>
              <span className="text-[10px] text-gray-600">
                {entry.agentCount} agent{entry.agentCount !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
          {entry.prompt && (
            <button
              onClick={() => handleRelaunch(entry.prompt)}
              className="p-1.5 rounded-lg text-gray-500 hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors shrink-0"
              aria-label="Relaunch mission"
            >
              <RotateCcw size={14} />
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
