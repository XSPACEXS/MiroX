import { useState, useEffect } from 'react'
import { XCircle } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { CircularProgress } from '@components/ui/Progress'
import { getModelById } from '@services/modelRegistry'
import { generateAgentName } from './AgentNameGenerator'
import { useAgentActivity } from './useAgentActivity'
import { AgentAvatar } from './AgentAvatar'
import { ActivityIndicator } from './ActivityIndicator'
import type { AgentRun } from '@/types/agent'

interface AgentIdentityCardProps {
  agent: AgentRun
  onKill: (id: string) => void
  isPrimary?: boolean
}

function ElapsedTime({ startedAt }: { startedAt: number }): JSX.Element {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startedAt) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [startedAt])

  const mins = Math.floor(elapsed / 60)
  const secs = elapsed % 60
  return (
    <span className="text-xs text-gray-400 font-mono tabular-nums">
      {mins}:{secs.toString().padStart(2, '0')}
    </span>
  )
}

export function AgentIdentityCard({ agent, onKill, isPrimary }: AgentIdentityCardProps): JSX.Element {
  const modelDef = getModelById(agent.model)
  const badgeColor = modelDef?.badgeColor || 'gray'
  const name = generateAgentName(agent)
  const activity = useAgentActivity(agent)

  const isClaude = agent.provider === 'claude'
  const glowClass = activity.isActive
    ? isClaude
      ? 'animate-glow-claude'
      : 'animate-glow-gemini'
    : ''

  // Elapsed seconds for circular progress (30-min timeout = 1800s)
  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    if (agent.status !== 'running') return
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - agent.startedAt) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [agent.startedAt, agent.status])

  const progressValue = Math.min((elapsed / 1800) * 100, 100)

  return (
    <Card variant="default" className={`p-4 ${glowClass}`}>
      {/* Row 1: Avatar + Name + Kill */}
      <div className="flex items-center gap-3 mb-2">
        <AgentAvatar
          provider={agent.provider}
          model={agent.model}
          isActive={activity.isActive}
          status={agent.status}
          isPrimary={isPrimary}
        />

        <div className="flex-1 min-w-0">
          <p className="text-sm font-display font-semibold text-white truncate">{name}</p>
          <p className="text-xs text-gray-500 truncate">{agent.prompt}</p>
        </div>

        {agent.status === 'running' && (
          <Button
            variant="danger"
            size="sm"
            onClick={() => onKill(agent.id)}
            leftIcon={<XCircle size={14} />}
          >
            Kill
          </Button>
        )}
      </div>

      {/* Row 2: Activity */}
      <div className="mb-2 pl-[52px]">
        <ActivityIndicator
          currentAction={activity.currentAction}
          isActive={activity.isActive}
          activeTools={activity.activeTools}
          activityDots={activity.activityDots}
        />
      </div>

      {/* Row 3: Progress + metadata */}
      <div className="flex items-center gap-3 pl-[52px]">
        {agent.status === 'running' && (
          <CircularProgress value={progressValue} size={24} strokeWidth={2} />
        )}
        <ElapsedTime startedAt={agent.startedAt} />
        <span className="text-xs text-gray-500">{agent.logs.length} logs</span>
        <Badge color={badgeColor} size="sm">
          {modelDef?.label || agent.model}
        </Badge>
        {agent.teamRole && (
          <Badge color={agent.teamRole === 'primary' ? 'yellow' : 'gray'} size="sm">
            {agent.teamRole}
          </Badge>
        )}
      </div>
    </Card>
  )
}
