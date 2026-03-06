import { History, Trash2, RotateCcw } from 'lucide-react'
import { useMissionStore } from '@stores/missionStore'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'

interface PastMissionsProps {
  onRelaunch: (prompt: string) => void
}

function formatDuration(startedAt: number, finishedAt: number | null): string {
  if (!finishedAt) return '--'
  const ms = finishedAt - startedAt
  const seconds = Math.floor(ms / 1000)
  if (seconds < 60) return `${seconds}s`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m`
  const hours = Math.floor(minutes / 60)
  const remainMinutes = minutes % 60
  return `${hours}h ${remainMinutes}m`
}

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

const STATUS_BADGE_COLOR: Record<string, 'green' | 'red' | 'yellow' | 'gray'> = {
  done: 'green',
  failed: 'red',
  aborted: 'yellow',
}

export function PastMissions({ onRelaunch }: PastMissionsProps): JSX.Element {
  const missionHistory = useMissionStore((s) => s.missionHistory)
  const clearMissionHistory = useMissionStore((s) => s.clearMissionHistory)

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <History size={16} className="text-gray-400" />
          <h3 className="text-sm font-semibold text-white">Past Missions</h3>
          {missionHistory.length > 0 && (
            <Badge color="gray" size="sm">
              {missionHistory.length}
            </Badge>
          )}
        </div>
        {missionHistory.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<Trash2 size={12} />}
            onClick={clearMissionHistory}
          >
            Clear History
          </Button>
        )}
      </div>

      {/* List or empty state */}
      {missionHistory.length === 0 ? (
        <p className="text-xs text-gray-500 py-4 text-center">No past missions</p>
      ) : (
        <div className="space-y-2">
          {missionHistory.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center gap-3 rounded-xl border border-black-600 bg-black-800/40 px-4 py-3"
            >
              {/* Prompt (truncated) */}
              <p className="flex-1 text-sm text-gray-300 truncate min-w-0">
                {entry.prompt || 'Untitled mission'}
              </p>

              {/* Status badge */}
              <Badge
                color={STATUS_BADGE_COLOR[entry.status] ?? 'gray'}
                size="sm"
              >
                {entry.status}
              </Badge>

              {/* Duration */}
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {formatDuration(entry.startedAt, entry.finishedAt)}
              </span>

              {/* Agent count */}
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {entry.agentCount} agent{entry.agentCount !== 1 ? 's' : ''}
              </span>

              {/* File count */}
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {entry.fileCount} file{entry.fileCount !== 1 ? 's' : ''}
              </span>

              {/* Date */}
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {formatDate(entry.startedAt)}
              </span>

              {/* Relaunch */}
              {entry.prompt && (
                <button
                  type="button"
                  onClick={() => onRelaunch(entry.prompt)}
                  className="p-1.5 rounded-lg text-gray-500 hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50"
                  aria-label="Re-launch this mission"
                  title="Re-launch"
                >
                  <RotateCcw size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
