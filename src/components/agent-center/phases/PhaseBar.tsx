import { motion } from 'framer-motion'
import { Check, Map, Search, Hammer, TestTube, ShieldCheck, Flag } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { MissionPhase } from '@/services/orchestrator/types'

interface PhaseBarProps {
  currentPhase: MissionPhase
  phaseHistory: Array<{ from: MissionPhase; to: MissionPhase; at: number }>
}

interface PhaseSegment {
  phase: MissionPhase
  label: string
  icon: LucideIcon
}

const PHASE_SEGMENTS: PhaseSegment[] = [
  { phase: 'planning', label: 'Plan', icon: Map },
  { phase: 'scouting', label: 'Scout', icon: Search },
  { phase: 'building', label: 'Build', icon: Hammer },
  { phase: 'testing', label: 'Test', icon: TestTube },
  { phase: 'verifying', label: 'Verify', icon: ShieldCheck },
  { phase: 'done', label: 'Done', icon: Flag },
]

type SegmentStatus = 'completed' | 'active' | 'upcoming' | 'failed'

function getSegmentStatus(
  segmentPhase: MissionPhase,
  currentPhase: MissionPhase,
  completedPhases: Set<MissionPhase>,
  failedPhase: boolean
): SegmentStatus {
  if (segmentPhase === currentPhase) {
    if (failedPhase) return 'failed'
    if (currentPhase === 'done') return 'completed'
    return 'active'
  }
  if (completedPhases.has(segmentPhase)) return 'completed'
  return 'upcoming'
}

const STATUS_STYLES: Record<SegmentStatus, { bg: string; text: string; border: string }> = {
  completed: { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/40' },
  active: { bg: 'bg-yellow-400/20', text: 'text-yellow-400', border: 'border-yellow-400/40' },
  upcoming: { bg: 'bg-black-800', text: 'text-gray-500', border: 'border-black-600' },
  failed: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/40' },
}

export function PhaseBar({ currentPhase, phaseHistory }: PhaseBarProps): JSX.Element {
  // Determine which phases are completed based on transitions FROM them
  const completedPhases = new Set<MissionPhase>()
  for (const transition of phaseHistory) {
    completedPhases.add(transition.from)
  }

  const isFailed = currentPhase === 'failed' || currentPhase === 'aborted'

  return (
    <div className="flex items-center gap-1 w-full" role="progressbar" aria-label="Mission progress">
      {PHASE_SEGMENTS.map((segment, index) => {
        const status = getSegmentStatus(segment.phase, currentPhase, completedPhases, isFailed && segment.phase === currentPhase)
        const styles = STATUS_STYLES[status]
        const Icon = segment.icon

        return (
          <div key={segment.phase} className="flex items-center flex-1 min-w-0">
            {/* Segment */}
            <div
              className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg border w-full ${styles.bg} ${styles.border} relative`}
            >
              {status === 'completed' ? (
                <Check size={13} className="text-green-400 flex-shrink-0" />
              ) : (
                <Icon size={13} className={`${styles.text} flex-shrink-0`} />
              )}
              <span className={`text-[11px] font-medium ${styles.text} truncate`}>
                {segment.label}
              </span>

              {/* Pulsing dot for active phase */}
              {status === 'active' && (
                <motion.div
                  className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-yellow-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              )}
            </div>

            {/* Connector line */}
            {index < PHASE_SEGMENTS.length - 1 && (
              <div
                className={`w-3 h-px flex-shrink-0 mx-0.5 ${
                  completedPhases.has(segment.phase) ? 'bg-green-500/40' : 'bg-black-600'
                }`}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
