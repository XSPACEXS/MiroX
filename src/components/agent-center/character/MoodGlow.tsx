import { motion } from 'framer-motion'
import { MOOD_CONFIGS } from '@/types/character'
import type { AgentMood } from '@/types/character'

interface MoodGlowProps {
  mood: AgentMood
  isActive: boolean
  size: 'sm' | 'md' | 'lg'
}

const SIZE_PX: Record<MoodGlowProps['size'], number> = {
  sm: 40,
  md: 48,
  lg: 64,
}

const MOOD_ANIMATIONS: Record<AgentMood, { scale: number[]; opacity?: number[]; duration: number }> = {
  focused: {
    scale: [1, 1.15, 1],
    duration: 2.5,
  },
  excited: {
    scale: [1, 1.3, 1],
    duration: 1.2,
  },
  frustrated: {
    scale: [1, 1.05, 1.1, 1],
    duration: 1.5,
  },
  idle: {
    scale: [1, 1, 1],
    opacity: [0.15, 0.08, 0.15],
    duration: 4,
  },
  thinking: {
    scale: [1, 1.1, 1],
    duration: 2,
  },
  celebrating: {
    scale: [1, 1.4, 1.2, 1.5, 1],
    duration: 1.5,
  },
}

export function MoodGlow({ mood, isActive, size }: MoodGlowProps): JSX.Element {
  const px = SIZE_PX[size]
  const config = MOOD_CONFIGS[mood]
  const anim = MOOD_ANIMATIONS[mood]

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: px,
        height: px,
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        background: `radial-gradient(circle, ${config.glowRgba} 0%, transparent 70%)`,
        boxShadow: `0 0 ${px * 0.6}px ${config.glowRgba}`,
      }}
      animate={
        isActive
          ? {
              scale: anim.scale,
              opacity: anim.opacity ?? 1,
            }
          : {
              scale: 1,
              opacity: 0.15,
            }
      }
      transition={
        isActive
          ? {
              duration: anim.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }
          : { duration: 0.5 }
      }
    />
  )
}
