import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Badge } from '@components/ui/Badge'
import { LinearProgress } from '@components/ui/Progress'
import { getModelById } from '@services/modelRegistry'
import { generateAgentName } from './AgentNameGenerator'
import { useAgentActivity } from './useAgentActivity'
import { AgentAvatar } from './AgentAvatar'
import { SpeechBubble } from './ActivityIndicator'
import { ActivityIndicator } from './ActivityIndicator'
import type { AgentRun } from '@/types/agent'

interface AgentIdentityCardProps {
  agent: AgentRun
  onKill: (id: string) => void
  isPrimary?: boolean
  compact?: boolean
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

export function AgentIdentityCard({ agent, onKill, isPrimary, compact }: AgentIdentityCardProps): JSX.Element {
  const modelDef = getModelById(agent.model)
  const badgeColor = modelDef?.badgeColor || 'gray'
  const name = generateAgentName(agent)
  const activity = useAgentActivity(agent)

  const isClaude = agent.provider === 'claude'
  const glowClass = activity.isActive
    ? isClaude
      ? 'shadow-[0_0_20px_rgba(255,214,0,0.15)]'
      : 'shadow-[0_0_20px_rgba(96,165,250,0.15)]'
    : ''

  const borderColor = isPrimary
    ? 'border-yellow-400/30'
    : agent.status === 'completed'
      ? 'border-green-400/30'
      : agent.status === 'failed'
        ? 'border-red-400/30'
        : agent.status === 'killed'
          ? 'border-gray-500/30'
          : 'border-black-600'

  // Elapsed for progress bar — use actual agent timeout (default 30min = 1800s)
  const timeoutSeconds = (agent as { timeoutSeconds?: number }).timeoutSeconds || 1800
  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    if (agent.status !== 'running') return
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - agent.startedAt) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [agent.startedAt, agent.status])
  const progressValue = Math.min((elapsed / timeoutSeconds) * 100, 100)

  const avatarSize = compact ? 'md' : 'lg'

  return (
    <motion.div
      className={`relative rounded-2xl border ${borderColor} bg-black-800/60 ${glowClass} flex flex-col items-center px-4 py-5 ${compact ? 'min-h-[220px]' : 'min-h-[280px]'} transition-shadow duration-500`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Kill button — top right */}
      {agent.status === 'running' && (
        <button
          onClick={() => onKill(agent.id)}
          className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black-700/80 border border-black-500 text-gray-500 hover:text-red-400 hover:border-red-400/30 transition-colors"
          title="Kill"
        >
          <X size={14} aria-hidden="true" />
          <span className="sr-only">Kill</span>
        </button>
      )}

      {/* Speech bubble — only when active */}
      {activity.isActive && agent.status === 'running' && (
        <div className="mb-2 w-full">
          <SpeechBubble text={activity.currentAction} isActive={activity.isActive} />
        </div>
      )}

      {/* Avatar — large, centered */}
      <div className={activity.isActive && agent.status === 'running' ? '' : 'mt-4'}>
        <AgentAvatar
          provider={agent.provider}
          model={agent.model}
          isActive={activity.isActive}
          status={agent.status}
          isPrimary={isPrimary}
          size={avatarSize}
        />
      </div>

      {/* Agent name */}
      <p className="mt-2 text-sm font-display font-semibold text-white text-center truncate w-full">
        {name}
      </p>

      {/* Progress bar */}
      {agent.status === 'running' && (
        <div className="w-full mt-2 px-2">
          <LinearProgress value={progressValue} size="sm" />
        </div>
      )}

      {/* Metadata line */}
      <div className="flex items-center gap-2 mt-2 flex-wrap justify-center">
        <ElapsedTime startedAt={agent.startedAt} />
        <span className="text-xs text-gray-500">&middot;</span>
        <span className="text-xs text-gray-500">{agent.logs.length} logs</span>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-1 mt-1.5 flex-wrap justify-center">
        <Badge color={badgeColor} size="sm">
          {modelDef?.label || agent.model}
        </Badge>
        {agent.teamRole && (
          <Badge color={agent.teamRole === 'primary' ? 'yellow' : 'gray'} size="sm">
            {agent.teamRole}
          </Badge>
        )}
      </div>

      {/* Activity sparkline + tool badges */}
      <div className="mt-2">
        <ActivityIndicator
          activeTools={activity.activeTools}
          activityDots={activity.activityDots}
        />
      </div>

      {/* Prompt — small gray text at bottom, preserves test assertions */}
      <p className="text-[10px] text-gray-500 text-center truncate w-full mt-auto pt-2">
        {agent.prompt}
      </p>
    </motion.div>
  )
}
