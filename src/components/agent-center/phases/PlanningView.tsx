import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'
import { SubtaskList } from '@components/agent-center/mission/SubtaskList'
import { Button } from '@components/ui/Button'
import type { MissionState } from '@/services/orchestrator/types'
import type { AgentCharacter } from '@/types/character'

interface PlanningViewProps {
  mission: MissionState
  characters: Record<string, AgentCharacter>
}

export function PlanningView({ mission, characters }: PlanningViewProps): JSX.Element {
  const hasPlan = mission.plan !== null && mission.plan.subtasks.length > 0

  // Show active planner/scout info
  const activeAgentId = mission.activeAgentIds[0] ?? null
  const activeCharacter = activeAgentId ? characters[activeAgentId] : null

  return (
    <div className="flex flex-col h-full">
      {/* Active agent info */}
      {activeCharacter && (
        <div className="flex items-center gap-2 mb-4 px-1">
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse"
            style={{ backgroundColor: `hsl(${activeCharacter.avatarHue}, 70%, 55%)` }}
          />
          <span className="text-xs text-gray-400">
            <span className="text-white font-medium">{activeCharacter.firstName}</span>
            {' '}is {mission.phase === 'scouting' ? 'scouting the codebase...' : 'analyzing the task...'}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {!hasPlan ? (
          // No plan yet — loading animation
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Brain size={48} className="text-yellow-400" />
            </motion.div>
            <p className="text-sm text-gray-400">Analyzing task...</p>
            <p className="text-xs text-gray-600">
              {mission.phase === 'scouting'
                ? 'Scouting codebase and gathering context'
                : 'Breaking down the task into subtasks'}
            </p>
          </div>
        ) : (
          // Plan exists — show subtasks
          <SubtaskList
            subtasks={mission.plan!.subtasks}
            characters={characters}
            isAnimating={true}
          />
        )}
      </div>

      {/* Cancel button at bottom */}
      <div className="pt-4 flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            // Abort is handled by parent — this is a visual placeholder
            // The parent page should wire this to missionStore.abortMission()
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}
