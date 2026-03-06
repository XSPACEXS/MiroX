import { File } from 'lucide-react'
import { MissionSummary } from '@components/agent-center/mission/MissionSummary'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import type { MissionState } from '@/services/orchestrator/types'
import type { AgentCharacter, FileMapEntry } from '@/types/character'

interface DoneViewProps {
  mission: MissionState
  fileMap: Record<string, FileMapEntry>
  characters: Record<string, AgentCharacter>
  onNewMission: () => void
  onRollback?: () => void
}

const ACTION_BADGE_COLOR: Record<FileMapEntry['lastAction'], 'gray' | 'blue' | 'green' | 'yellow'> = {
  read: 'gray',
  edit: 'blue',
  write: 'green',
  create: 'yellow',
}

export function DoneView({
  mission,
  fileMap,
  characters,
  onNewMission,
  onRollback,
}: DoneViewProps): JSX.Element {
  const fileEntries = Object.values(fileMap)
  const fileCount = fileEntries.length
  const isFailed = mission.phase === 'failed' || mission.phase === 'aborted'

  return (
    <div className="space-y-6 overflow-y-auto">
      {/* Error banner for failed/aborted missions */}
      {isFailed && mission.error && (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4">
          <p className="text-sm font-semibold text-red-400 mb-1">
            Mission {mission.phase === 'aborted' ? 'Aborted' : 'Failed'}
          </p>
          <p className="text-xs text-red-300">{mission.error}</p>
        </div>
      )}

      {/* Summary card */}
      <MissionSummary
        mission={mission}
        fileCount={fileCount}
        characters={characters}
      />

      {/* File changes section */}
      {fileEntries.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Files Changed</h3>
          <div className="rounded-2xl border border-black-600 bg-black-800/40 divide-y divide-black-600 overflow-hidden">
            {fileEntries
              .sort((a, b) => b.timestamp - a.timestamp)
              .map((entry) => (
                <div
                  key={entry.path}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <File size={14} className="text-gray-500 flex-shrink-0" />
                  <span className="text-xs font-mono text-gray-300 truncate flex-1 min-w-0">
                    {entry.path}
                  </span>
                  <Badge color={ACTION_BADGE_COLOR[entry.lastAction]} size="sm">
                    {entry.lastAction}
                  </Badge>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Action buttons */}
      <div className="flex items-center gap-3 pt-2">
        <Button variant="primary" onClick={onNewMission}>
          New Mission
        </Button>
        {onRollback && (
          <Button variant="secondary" onClick={onRollback}>
            Rollback
          </Button>
        )}
      </div>
    </div>
  )
}
