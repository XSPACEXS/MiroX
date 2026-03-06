import { File, Sparkles } from 'lucide-react'
import { MissionSummary } from '@components/agent-center/mission/MissionSummary'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { useMissionStore } from '@stores/missionStore'
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
  const geminiReport = useMissionStore((s) => s.mission?.geminiAssistReport)
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

      {/* Gemini Assist Report */}
      {geminiReport && (
        <div className="rounded-2xl bg-black-800/60 border border-blue-500/20 p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-blue-400" />
            <h3 className="text-lg font-display font-bold text-white">Gemini Assist Report</h3>
          </div>

          {/* Quality Score */}
          <div className="flex items-center gap-4">
            <div className={`text-3xl font-bold ${
              geminiReport.overallScore >= 90 ? 'text-green-400' :
              geminiReport.overallScore >= 70 ? 'text-yellow-400' :
              'text-red-400'
            }`}>
              {geminiReport.overallScore}
            </div>
            <div>
              <p className="text-sm text-gray-300">Quality Score</p>
              <p className="text-xs text-gray-500">
                {geminiReport.totalIssues} issue(s) across {geminiReport.filesChanged} file(s)
              </p>
            </div>
          </div>

          {/* Summary */}
          <p className="text-sm text-gray-400">{geminiReport.summary}</p>

          {/* Issues */}
          {geminiReport.totalIssues > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Issues</h4>
              {geminiReport.reviews.flatMap((r) => r.issues).slice(0, 10).map((issue, i) => (
                <div key={i} className={`flex items-start gap-2 text-xs ${
                  issue.severity === 'critical' ? 'text-red-400' :
                  issue.severity === 'warning' ? 'text-yellow-400' :
                  'text-gray-400'
                }`}>
                  <span className="font-mono shrink-0">{issue.file}{issue.line ? `:${issue.line}` : ''}</span>
                  <span>{issue.message}</span>
                </div>
              ))}
            </div>
          )}

          {/* Mockups */}
          {geminiReport.mockups.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Generated Mockups</h4>
              <div className="flex gap-2 flex-wrap">
                {geminiReport.mockups.map((url, i) => (
                  <img key={i} src={url} alt={`Mockup ${i + 1}`} className="w-32 h-32 rounded-lg object-cover border border-black-600" />
                ))}
              </div>
            </div>
          )}
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
