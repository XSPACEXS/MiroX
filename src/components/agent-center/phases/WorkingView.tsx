import { TeamScene } from '@components/agent-center/scene/TeamScene'
import { InteractionFeed } from '@components/agent-center/scene/InteractionFeed'
import { FileMap } from '@components/agent-center/mission/FileMap'
import { LiveCodeView } from '@components/agent-center/mission/LiveCodeView'
import { ActivityFeed } from '@components/agent-center/mission/ActivityFeed'
import type { AgentRun } from '@/types/agent'
import type { MissionState } from '@/services/orchestrator/types'
import type { AgentCharacter, AgentInteraction, FileMapEntry } from '@/types/character'

interface WorkingViewProps {
  agents: AgentRun[]
  mission: MissionState
  characters: Record<string, AgentCharacter>
  fileMap: Record<string, FileMapEntry>
  interactions: AgentInteraction[]
  onKill: (id: string) => void
}

export function WorkingView({
  agents,
  mission: _mission,
  characters,
  fileMap,
  interactions,
  onKill,
}: WorkingViewProps): JSX.Element {
  // _mission available for future use (e.g., progress indicators)
  void _mission
  return (
    <div className="flex flex-col h-full gap-3">
      {/* Main 3-column grid */}
      <div className="flex-1 grid grid-cols-[280px_300px_1fr] gap-3 min-h-0">
        {/* Left: TeamScene */}
        <div className="rounded-2xl border border-black-600 bg-black-800/40 overflow-y-auto p-3">
          <TeamScene agents={agents} characters={characters} onKill={onKill} />
        </div>

        {/* Center: InteractionFeed */}
        <div className="rounded-2xl border border-black-600 bg-black-800/40 overflow-y-auto p-3">
          <InteractionFeed interactions={interactions} characters={characters} />
        </div>

        {/* Right: split vertically — FileMap (60%) + LiveCodeView (40%) */}
        <div className="flex flex-col gap-3 min-h-0">
          <div className="rounded-2xl border border-black-600 bg-black-800/40 overflow-hidden p-3" style={{ flex: '6 1 0%' }}>
            <FileMap entries={fileMap} characters={characters} />
          </div>
          <div className="rounded-2xl border border-black-600 bg-black-800/40 overflow-hidden" style={{ flex: '4 1 0%' }}>
            <LiveCodeView agents={agents} />
          </div>
        </div>
      </div>

      {/* Bottom strip: ActivityFeed */}
      <div className="h-32 flex-shrink-0 rounded-2xl border border-black-600 bg-black-800/40 overflow-hidden">
        <ActivityFeed agents={agents} characters={characters} interactions={interactions} />
      </div>
    </div>
  )
}
