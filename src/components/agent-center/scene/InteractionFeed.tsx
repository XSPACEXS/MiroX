import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Clock, HandHelping, Star, AlertTriangle, Eye, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { CharacterAvatar } from '@components/agent-center/character/CharacterAvatar'
import type { AgentInteraction, AgentCharacter, InteractionType } from '@/types/character'

interface InteractionFeedProps {
  interactions: AgentInteraction[]
  characters: Record<string, AgentCharacter>
}

const TYPE_CONFIG: Record<InteractionType, { icon: LucideIcon; colorClass: string }> = {
  handoff: { icon: ArrowRight, colorClass: 'text-blue-400' },
  waiting: { icon: Clock, colorClass: 'text-gray-400' },
  helping: { icon: HandHelping, colorClass: 'text-green-400' },
  celebration: { icon: Star, colorClass: 'text-yellow-400' },
  error_report: { icon: AlertTriangle, colorClass: 'text-red-400' },
  review: { icon: Eye, colorClass: 'text-cyan-400' },
  context_handoff: { icon: RefreshCw, colorClass: 'text-orange-400' },
}

function formatRelativeTime(timestamp: number): string {
  const diff = Math.max(0, Math.floor((Date.now() - timestamp) / 1000))
  if (diff < 5) return 'just now'
  if (diff < 60) return `${diff}s ago`
  const mins = Math.floor(diff / 60)
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  return `${hrs}h ago`
}

const MAX_DISPLAY = 50

export function InteractionFeed({ interactions, characters }: InteractionFeedProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null)
  const [autoScroll, setAutoScroll] = useState(true)

  // Auto-scroll to bottom when new interactions arrive
  useEffect(() => {
    if (autoScroll && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }, [interactions.length, autoScroll])

  const handleScroll = (): void => {
    const el = containerRef.current
    if (!el) return
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50
    setAutoScroll(atBottom)
  }

  // Relative time updates every 5s
  const [, setTick] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 5000)
    return () => clearInterval(interval)
  }, [])

  const visible = interactions.slice(-MAX_DISPLAY)

  if (visible.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-600 text-sm">
        No interactions yet
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="overflow-y-auto max-h-80 space-y-2 pr-1"
      role="log"
      aria-label="Agent interaction feed"
    >
      {visible.map((interaction) => {
        const fromChar = characters[interaction.fromAgentId]
        const config = TYPE_CONFIG[interaction.type]
        const Icon = config.icon

        return (
          <div
            key={interaction.id}
            className="flex items-start gap-2.5 py-1.5 px-2 rounded-lg hover:bg-black-700/30 transition-colors"
          >
            {/* Small avatar */}
            {fromChar ? (
              <div className="flex-shrink-0">
                <CharacterAvatar
                  character={fromChar}
                  isActive={false}
                  status="running"
                  size="sm"
                  mood="idle"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-black-700 flex-shrink-0" />
            )}

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-white truncate">
                  {fromChar?.firstName ?? 'Agent'}
                </span>
                <Icon size={12} className={config.colorClass} />
                <span className="text-[10px] text-gray-500 ml-auto flex-shrink-0">
                  {formatRelativeTime(interaction.timestamp)}
                </span>
              </div>
              <p className={`text-xs ${config.colorClass} mt-0.5 break-words`}>
                {interaction.message}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
