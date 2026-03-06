import { Clock, FileText, Users, Activity } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CharacterAvatar } from '@components/agent-center/character/CharacterAvatar'
import type { MissionState } from '@/services/orchestrator/types'
import type { AgentCharacter } from '@/types/character'

interface MissionSummaryProps {
  mission: MissionState
  fileCount: number
  characters: Record<string, AgentCharacter>
}

function formatDuration(startMs: number, endMs: number | null): string {
  const diff = (endMs ?? Date.now()) - startMs
  const totalSeconds = Math.floor(diff / 1000)
  if (totalSeconds < 60) return `${totalSeconds}s`
  const mins = Math.floor(totalSeconds / 60)
  const secs = totalSeconds % 60
  if (mins < 60) return `${mins}m ${secs}s`
  const hrs = Math.floor(mins / 60)
  const remainMins = mins % 60
  return `${hrs}h ${remainMins}m`
}

function phaseLabel(phase: MissionState['phase']): string {
  const labels: Record<string, string> = {
    idle: 'Idle',
    planning: 'Planning',
    scouting: 'Scouting',
    building: 'Building',
    testing: 'Testing',
    verifying: 'Verifying',
    done: 'Completed',
    failed: 'Failed',
    aborted: 'Aborted',
  }
  return labels[phase] ?? phase
}

interface StatBlockProps {
  icon: LucideIcon
  label: string
  value: string
}

function StatBlock({ icon: Icon, label, value }: StatBlockProps): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-1.5 p-4">
      <Icon size={20} className="text-gray-400" />
      <span className="text-xl font-bold text-yellow-400 font-display">{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  )
}

export function MissionSummary({ mission, fileCount, characters }: MissionSummaryProps): JSX.Element {
  const participatingCharacters = Object.entries(characters).filter(
    ([id]) => mission.completedAgentIds.includes(id) || mission.activeAgentIds.includes(id)
  )

  return (
    <div className="rounded-2xl border border-black-600 bg-black-800/60 p-6">
      {/* Stat blocks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatBlock
          icon={Clock}
          label="Total Time"
          value={formatDuration(mission.startedAt, mission.finishedAt)}
        />
        <StatBlock
          icon={FileText}
          label="Files Changed"
          value={String(fileCount)}
        />
        <StatBlock
          icon={Users}
          label="Agents Used"
          value={String(mission.completedAgentIds.length)}
        />
        <StatBlock
          icon={Activity}
          label="Status"
          value={phaseLabel(mission.phase)}
        />
      </div>

      {/* Agent avatars */}
      {participatingCharacters.length > 0 && (
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs text-gray-500 mr-2">Team:</span>
          <div className="flex items-center -space-x-2">
            {participatingCharacters.map(([id, character]) => (
              <div key={id} className="relative" title={`${character.firstName} — ${character.roleTitle}`}>
                <CharacterAvatar
                  character={character}
                  isActive={false}
                  status="completed"
                  size="sm"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error display */}
      {mission.error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 mt-2">
          <p className="text-sm text-red-400 font-medium">Error</p>
          <p className="text-xs text-red-300 mt-1">{mission.error}</p>
        </div>
      )}
    </div>
  )
}
