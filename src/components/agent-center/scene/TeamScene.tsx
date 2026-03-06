import { AnimatePresence, motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { CharacterCard } from '@components/agent-center/character/CharacterCard'
import { useMissionStore } from '@stores/missionStore'
import type { AgentCharacter } from '@/types/character'
import type { AgentRun } from '@/types/agent'

interface TeamSceneProps {
  agents: AgentRun[]
  characters: Record<string, AgentCharacter>
  onKill: (id: string) => void
}

export function TeamScene({ agents, characters, onKill }: TeamSceneProps): JSX.Element {
  const geminiAssistSessionId = useMissionStore((s) => s.mission?.geminiAssistSessionId)
  const primary = agents.find((a) => a.teamRole === 'primary')
  const collaborators = agents.filter((a) => a.teamRole !== 'primary')

  // If no primary, show all as 'md'
  if (!primary) {
    return (
      <div className="relative overflow-y-auto max-h-[600px] py-2">
        {geminiAssistSessionId && <GeminiBrainBadge />}
        <div className="flex justify-center gap-4 flex-wrap">
          <AnimatePresence mode="popLayout">
            {agents.map((agent) => {
              const char = characters[agent.id]
              if (!char) return null
              return (
                <motion.div
                  key={agent.id}
                  layout
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <CharacterCard
                    agent={agent}
                    character={char}
                    size="md"
                    onKill={onKill}
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    )
  }

  const primaryChar = characters[primary.id]

  return (
    <div className="relative overflow-y-auto max-h-[600px] py-2">
      {geminiAssistSessionId && <GeminiBrainBadge />}
      <div className="flex flex-col items-center">
        {/* Primary agent — centered at top */}
        <AnimatePresence mode="popLayout">
          {primaryChar && (
            <motion.div
              key={primary.id}
              layout
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[240px]"
            >
              <CharacterCard
                agent={primary}
                character={primaryChar}
                size="lg"
                onKill={onKill}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Connection lines from primary to collaborators */}
        {collaborators.length > 0 && (
          <svg
            className="flex-shrink-0"
            width={Math.max(collaborators.length * 144, 200)}
            height={40}
            viewBox={`0 0 ${Math.max(collaborators.length * 144, 200)} 40`}
            style={{ overflow: 'visible' }}
          >
            {/* Vertical line down from primary center */}
            <line
              x1={Math.max(collaborators.length * 144, 200) / 2}
              y1={0}
              x2={Math.max(collaborators.length * 144, 200) / 2}
              y2={20}
              stroke="rgba(255,214,0,0.2)"
              strokeWidth={1}
            />
            {/* Horizontal bar */}
            {collaborators.length > 1 && (
              <line
                x1={72}
                y1={20}
                x2={(collaborators.length - 1) * 144 + 72}
                y2={20}
                stroke="rgba(255,214,0,0.2)"
                strokeWidth={1}
              />
            )}
            {/* Vertical drops to each collaborator */}
            {collaborators.map((_, i) => (
              <line
                key={i}
                x1={i * 144 + 72}
                y1={20}
                x2={i * 144 + 72}
                y2={40}
                stroke="rgba(255,214,0,0.2)"
                strokeWidth={1}
              />
            ))}
          </svg>
        )}

        {/* Collaborator row */}
        {collaborators.length > 0 && (
          <div className="flex justify-center gap-4 flex-wrap">
            <AnimatePresence mode="popLayout">
              {collaborators.map((agent) => {
                const char = characters[agent.id]
                if (!char) return null
                return (
                  <motion.div
                    key={agent.id}
                    layout
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CharacterCard
                      agent={agent}
                      character={char}
                      size="sm"
                      onKill={onKill}
                    />
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}

function GeminiBrainBadge(): JSX.Element {
  return (
    <div className="absolute top-2 right-2 z-10">
      <div className="flex flex-col items-center gap-1 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Cpu size={20} className="text-blue-400" />
        </div>
        <span className="text-xs font-semibold text-blue-400">Gemini Brain</span>
        <span className="text-[10px] text-blue-400/60">Watching</span>
      </div>
    </div>
  )
}
