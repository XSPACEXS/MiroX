import { motion, AnimatePresence } from 'framer-motion'
import {
  Circle, Loader2, CheckCircle2, XCircle, MinusCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Badge } from '@components/ui/Badge'
import type { Subtask } from '@/services/orchestrator/types'
import type { AgentCharacter } from '@/types/character'

interface SubtaskListProps {
  subtasks: Subtask[]
  characters: Record<string, AgentCharacter>
  isAnimating: boolean
}

const STATUS_ICONS: Record<Subtask['status'], { icon: LucideIcon; className: string }> = {
  pending: { icon: Circle, className: 'text-gray-500' },
  running: { icon: Loader2, className: 'text-yellow-400 animate-spin' },
  completed: { icon: CheckCircle2, className: 'text-green-400' },
  failed: { icon: XCircle, className: 'text-red-400' },
  skipped: { icon: MinusCircle, className: 'text-gray-500' },
}

const MODEL_BADGE_COLOR: Record<Subtask['model'], 'purple' | 'blue' | 'green'> = {
  opus: 'purple',
  sonnet: 'blue',
  haiku: 'green',
}

const itemVariants = {
  initial: { opacity: 0, x: -24 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, x: -16, transition: { duration: 0.15 } },
}

const containerVariants = {
  animate: {
    transition: { staggerChildren: 0.06 },
  },
}

export function SubtaskList({ subtasks, characters, isAnimating }: SubtaskListProps): JSX.Element {
  if (subtasks.length === 0) {
    return (
      <div className="flex items-center justify-center py-8 text-gray-500 text-sm">
        No subtasks yet
      </div>
    )
  }

  return (
    <motion.div
      className="space-y-2"
      variants={isAnimating ? containerVariants : undefined}
      initial={isAnimating ? 'initial' : false}
      animate="animate"
    >
      <AnimatePresence mode="popLayout">
        {subtasks.map((subtask) => {
          const statusCfg = STATUS_ICONS[subtask.status]
          const StatusIcon = statusCfg.icon
          const character = subtask.agentId ? characters[subtask.agentId] : null
          const visibleFiles = subtask.files.slice(0, 3)
          const extraFileCount = subtask.files.length - 3

          return (
            <motion.div
              key={subtask.id}
              variants={isAnimating ? itemVariants : undefined}
              initial={isAnimating ? 'initial' : false}
              animate="animate"
              exit="exit"
              layout
              className="rounded-xl border border-black-600 bg-black-800/40 p-3"
            >
              <div className="flex items-start gap-3">
                {/* Status icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <StatusIcon size={18} className={statusCfg.className} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm text-white truncate">
                      {subtask.title}
                    </span>
                    <Badge color={MODEL_BADGE_COLOR[subtask.model]} size="sm">
                      {subtask.model}
                    </Badge>
                  </div>

                  {subtask.description && (
                    <p className="text-xs text-gray-400 line-clamp-2 mb-2">
                      {subtask.description}
                    </p>
                  )}

                  {/* File scope badges */}
                  {subtask.files.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1 mb-1">
                      {visibleFiles.map((file) => (
                        <span
                          key={file}
                          className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono bg-black-700 text-gray-400 border border-black-600 truncate max-w-[160px]"
                        >
                          {file}
                        </span>
                      ))}
                      {extraFileCount > 0 && (
                        <span className="text-[10px] text-gray-500">
                          +{extraFileCount} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Assigned agent */}
                  {character && (
                    <div className="flex items-center gap-1.5 mt-1">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: `hsl(${character.avatarHue}, 70%, 55%)` }}
                      />
                      <span className="text-[11px] text-gray-400">
                        {character.firstName}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </motion.div>
  )
}
