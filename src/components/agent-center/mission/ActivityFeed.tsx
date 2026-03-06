import { useEffect, useRef, useMemo } from 'react'
import { Rocket, CheckCircle2, XCircle, ArrowRightLeft, MessageCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { AgentRun } from '@/types/agent'
import type { AgentCharacter, AgentInteraction } from '@/types/character'

interface ActivityFeedProps {
  agents: AgentRun[]
  characters: Record<string, AgentCharacter>
  interactions: AgentInteraction[]
}

interface FeedEvent {
  id: string
  icon: LucideIcon
  text: string
  timestamp: number
  color: 'green' | 'red' | 'yellow' | 'blue'
}

const COLOR_STYLES: Record<FeedEvent['color'], string> = {
  green: 'bg-green-500/10 border-green-500/30 text-green-400',
  red: 'bg-red-500/10 border-red-500/30 text-red-400',
  yellow: 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400',
  blue: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
}

function formatTime(ts: number): string {
  const d = new Date(ts)
  return d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

function getAgentName(agentId: string, agents: AgentRun[], characters: Record<string, AgentCharacter>): string {
  const character = characters[agentId]
  if (character) return character.firstName
  const agent = agents.find((a) => a.id === agentId)
  return agent?.model ?? 'Agent'
}

export function ActivityFeed({ agents, characters, interactions }: ActivityFeedProps): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>(null)

  const events = useMemo((): FeedEvent[] => {
    const result: FeedEvent[] = []

    // Agent lifecycle events
    for (const agent of agents) {
      const name = getAgentName(agent.id, agents, characters)

      result.push({
        id: `start-${agent.id}`,
        icon: Rocket,
        text: `${name} started`,
        timestamp: agent.startedAt,
        color: 'yellow',
      })

      if (agent.status === 'completed' && agent.finishedAt) {
        result.push({
          id: `done-${agent.id}`,
          icon: CheckCircle2,
          text: `${name} finished`,
          timestamp: agent.finishedAt,
          color: 'green',
        })
      }

      if (agent.status === 'failed' && agent.finishedAt) {
        result.push({
          id: `fail-${agent.id}`,
          icon: XCircle,
          text: `${name} failed`,
          timestamp: agent.finishedAt,
          color: 'red',
        })
      }

      if (agent.status === 'killed' && agent.finishedAt) {
        result.push({
          id: `kill-${agent.id}`,
          icon: XCircle,
          text: `${name} killed`,
          timestamp: agent.finishedAt,
          color: 'red',
        })
      }
    }

    // Interaction events
    for (const interaction of interactions) {
      const iconMap: Record<string, LucideIcon> = {
        handoff: ArrowRightLeft,
        waiting: MessageCircle,
        helping: MessageCircle,
        celebration: CheckCircle2,
        error_report: XCircle,
      }
      const colorMap: Record<string, FeedEvent['color']> = {
        handoff: 'blue',
        waiting: 'yellow',
        helping: 'green',
        celebration: 'green',
        error_report: 'red',
      }

      result.push({
        id: interaction.id,
        icon: iconMap[interaction.type] ?? MessageCircle,
        text: interaction.message,
        timestamp: interaction.timestamp,
        color: colorMap[interaction.type] ?? 'yellow',
      })
    }

    // Sort chronologically
    result.sort((a, b) => a.timestamp - b.timestamp)
    return result
  }, [agents, characters, interactions])

  // Auto-scroll right as new events appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [events.length])

  if (events.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 text-sm">
        No activity yet
      </div>
    )
  }

  return (
    <div
      ref={scrollRef}
      className="flex items-center gap-2 overflow-x-auto h-full px-2 scrollbar-thin scrollbar-thumb-black-600"
    >
      {events.map((event) => {
        const Icon = event.icon
        return (
          <div
            key={event.id}
            className={`flex items-center gap-1.5 flex-shrink-0 rounded-full border px-3 py-1.5 text-xs ${COLOR_STYLES[event.color]}`}
          >
            <Icon size={12} className="flex-shrink-0" />
            <span className="whitespace-nowrap max-w-[180px] truncate">{event.text}</span>
            <span className="text-[10px] opacity-60 whitespace-nowrap">{formatTime(event.timestamp)}</span>
          </div>
        )
      })}
    </div>
  )
}
