import { motion } from 'framer-motion'
import {
  Shield, Code, Search, Paintbrush, FlaskConical, Cpu,
  Bug, Rocket, Wrench, Eye, Check, X, Skull,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { MoodGlow } from './MoodGlow'
import type { AgentCharacter, AvatarIcon } from '@/types/character'
import type { AgentRun } from '@/types/agent'

interface CharacterAvatarProps {
  character: AgentCharacter
  isActive: boolean
  status: AgentRun['status']
  size: 'sm' | 'md' | 'lg'
  /** Optionally provide mood directly instead of deriving it */
  mood?: AgentCharacter['mood']
  /** Generation number for handoff lineage badge */
  generation?: number
}

const ICON_MAP: Record<AvatarIcon, LucideIcon> = {
  shield: Shield,
  code: Code,
  search: Search,
  paintbrush: Paintbrush,
  flask: FlaskConical,
  cpu: Cpu,
  bug: Bug,
  rocket: Rocket,
  wrench: Wrench,
  eye: Eye,
}

const SIZE_CONFIG: Record<CharacterAvatarProps['size'], { container: string; iconSize: number; badgeSize: number }> = {
  sm: { container: 'w-10 h-10', iconSize: 16, badgeSize: 14 },
  md: { container: 'w-12 h-12', iconSize: 20, badgeSize: 16 },
  lg: { container: 'w-16 h-16', iconSize: 24, badgeSize: 18 },
}

export function CharacterAvatar({ character, isActive, status, size, mood: moodOverride, generation }: CharacterAvatarProps): JSX.Element {
  const cfg = SIZE_CONFIG[size]
  const Icon: LucideIcon = ICON_MAP[character.avatarIcon] ?? Code
  const currentMood = moodOverride ?? character.mood

  const bgColor = `hsl(${character.avatarHue}, 70%, 25%)`
  const iconColor = `hsl(${character.avatarHue}, 70%, 70%)`

  return (
    <div className="relative flex-shrink-0 flex items-center justify-center">
      {/* Mood glow behind avatar */}
      <MoodGlow mood={currentMood} isActive={isActive} size={size} />

      {/* Avatar circle */}
      <div
        className={`${cfg.container} rounded-full flex items-center justify-center relative z-10`}
        style={{ backgroundColor: bgColor }}
      >
        <Icon size={cfg.iconSize} style={{ color: iconColor }} />
      </div>

      {/* Status badge — bottom-right */}
      {status === 'completed' && (
        <motion.div
          className="absolute -bottom-0.5 -right-0.5 bg-green-500 rounded-full flex items-center justify-center z-20"
          style={{ width: cfg.badgeSize, height: cfg.badgeSize }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Check size={cfg.badgeSize - 4} className="text-white" />
        </motion.div>
      )}
      {status === 'failed' && (
        <motion.div
          className="absolute -bottom-0.5 -right-0.5 bg-red-500 rounded-full flex items-center justify-center z-20"
          style={{ width: cfg.badgeSize, height: cfg.badgeSize }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <X size={cfg.badgeSize - 4} className="text-white" />
        </motion.div>
      )}
      {status === 'killed' && (
        <motion.div
          className="absolute -bottom-0.5 -right-0.5 bg-gray-600 rounded-full flex items-center justify-center z-20"
          style={{ width: cfg.badgeSize, height: cfg.badgeSize }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Skull size={cfg.badgeSize - 4} className="text-gray-300" />
        </motion.div>
      )}

      {/* Generation badge for handoff lineage */}
      {generation != null && generation > 0 && status === 'running' && (
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-black-900 z-20">
          {generation}
        </div>
      )}
    </div>
  )
}
