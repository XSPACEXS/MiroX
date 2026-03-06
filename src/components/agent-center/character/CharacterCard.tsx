import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { CharacterAvatar } from './CharacterAvatar'
import { CharacterStats } from './CharacterStats'
import { SpeechBubble } from '@components/agent-center/active-agents/ActivityIndicator'
import { useAgentActivity } from '@components/agent-center/active-agents/useAgentActivity'
import { useMood } from '@hooks/useMoodEngine'
import { useAgentStats } from '@hooks/useAgentStats'
import { flavorSpeech } from '@hooks/useMoodEngine'
import { MOOD_CONFIGS } from '@/types/character'
import type { AgentCharacter } from '@/types/character'
import type { AgentRun } from '@/types/agent'

interface CharacterCardProps {
  agent: AgentRun
  character: AgentCharacter
  size: 'lg' | 'md' | 'sm'
  onKill?: (id: string) => void
}

const AVATAR_SIZE_MAP: Record<CharacterCardProps['size'], 'lg' | 'md' | 'sm'> = {
  lg: 'lg',
  md: 'md',
  sm: 'sm',
}

export function CharacterCard({ agent, character, size, onKill }: CharacterCardProps): JSX.Element {
  const activity = useAgentActivity(agent)
  const mood = useMood(agent, activity)
  const stats = useAgentStats(agent)
  const moodConfig = MOOD_CONFIGS[mood]

  const isRunning = agent.status === 'running'
  const showStats = size === 'lg'
  const showSpeech = size !== 'sm' && isRunning && activity.isActive

  // Flavor the current action with personality
  const speechText = flavorSpeech(
    activity.currentAction,
    character.personalityTraits,
    agent.logs.length
  )

  const glowShadow = activity.isActive
    ? `0 0 24px ${moodConfig.glowRgba}, 0 0 48px ${moodConfig.glowRgba}`
    : undefined

  return (
    <motion.div
      className={`relative rounded-2xl border border-black-600 bg-black-800/50 flex flex-col items-center transition-shadow duration-500 ${
        size === 'lg' ? 'px-5 py-5 min-w-[200px]' : size === 'md' ? 'px-3 py-3 min-w-[160px]' : 'px-2 py-2 min-w-[120px]'
      }`}
      style={{ boxShadow: glowShadow }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Kill button — top right, only when running */}
      {isRunning && onKill && (
        <button
          onClick={() => onKill(agent.id)}
          className="absolute top-2 right-2 p-1 rounded-lg bg-black-700/80 border border-black-500 text-gray-500 hover:text-red-400 hover:border-red-400/30 transition-colors z-10"
          title="Kill agent"
        >
          <X size={12} aria-hidden="true" />
          <span className="sr-only">Kill agent</span>
        </button>
      )}

      {/* Speech bubble */}
      {showSpeech && (
        <div className="mb-1.5 w-full">
          <SpeechBubble text={speechText} isActive={activity.isActive} />
        </div>
      )}

      {/* Avatar */}
      <CharacterAvatar
        character={character}
        isActive={activity.isActive}
        status={agent.status}
        size={AVATAR_SIZE_MAP[size]}
        mood={mood}
      />

      {/* Name and role */}
      <p
        className={`mt-2 font-display font-semibold text-white text-center truncate w-full ${
          size === 'lg' ? 'text-sm' : 'text-xs'
        }`}
        title={character.firstName}
      >
        {character.firstName}
      </p>
      <p
        className={`text-gray-400 text-center truncate w-full ${
          size === 'lg' ? 'text-xs' : 'text-[10px]'
        }`}
        title={character.roleTitle}
      >
        {character.roleTitle}
      </p>

      {/* Stats — only on lg */}
      {showStats && (
        <div className="mt-2 w-full">
          <CharacterStats stats={stats} compact={size !== 'lg'} />
        </div>
      )}
    </motion.div>
  )
}
