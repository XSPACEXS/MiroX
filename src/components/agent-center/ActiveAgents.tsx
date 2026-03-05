import { useState, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Skull, XCircle, Sparkles, ImageIcon, Video, Users } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { useAgentStore } from '@stores/agentStore'
import { useUIStore } from '@stores/uiStore'
import { listItemVariants } from '@design-system/animations'
import { getModelById } from '@services/modelRegistry'
import type { AgentRun } from '@/types/agent'

const PROVIDER_ICONS = {
  bot: Bot,
  sparkles: Sparkles,
  image: ImageIcon,
  video: Video,
} as const

function getAgentIcon(agent: AgentRun): { Icon: typeof Bot; color: string } {
  const modelDef = getModelById(agent.model)
  if (modelDef) {
    const Icon = PROVIDER_ICONS[modelDef.providerIcon as keyof typeof PROVIDER_ICONS] || Bot
    const color = modelDef.provider === 'claude' ? 'text-yellow-400' : 'text-blue-400'
    return { Icon, color }
  }
  return {
    Icon: agent.provider === 'gemini' ? Sparkles : Bot,
    color: agent.provider === 'gemini' ? 'text-blue-400' : 'text-yellow-400',
  }
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

function AgentCard({
  agent,
  onKill,
}: {
  agent: AgentRun
  onKill: (id: string) => void
}): JSX.Element {
  const { Icon, color } = getAgentIcon(agent)
  const modelDef = getModelById(agent.model)
  const badgeColor = modelDef?.badgeColor || 'gray'

  return (
    <Card variant="default" className="p-4">
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0" aria-hidden="true">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-75" />
        </div>

        <Icon size={14} className={color} />

        <div className="flex-1 min-w-0">
          <p className="text-sm text-white truncate">{agent.prompt}</p>
          <div className="flex items-center gap-2 mt-1">
            <Badge color={badgeColor} size="sm">
              {modelDef?.label || agent.model}
            </Badge>
            {agent.teamRole && (
              <Badge color={agent.teamRole === 'primary' ? 'yellow' : 'gray'} size="sm">
                {agent.teamRole}
              </Badge>
            )}
            <ElapsedTime startedAt={agent.startedAt} />
            <span className="text-xs text-gray-500">{agent.logs.length} logs</span>
          </div>
        </div>

        <Button
          variant="danger"
          size="sm"
          onClick={() => onKill(agent.id)}
          leftIcon={<XCircle size={14} />}
        >
          Kill
        </Button>
      </div>
    </Card>
  )
}

export function ActiveAgents(): JSX.Element {
  const agents = useAgentStore((s) => s.agents)
  const runningAgents = agents.filter((a) => a.status === 'running')
  const addToast = useUIStore((s) => s.addToast)

  // Group agents by teamRunId
  const { teamGroups, soloAgents } = useMemo(() => {
    const teams = new Map<string, AgentRun[]>()
    const solo: AgentRun[] = []

    for (const agent of runningAgents) {
      if (agent.teamRunId) {
        const group = teams.get(agent.teamRunId) || []
        group.push(agent)
        teams.set(agent.teamRunId, group)
      } else {
        solo.push(agent)
      }
    }
    return { teamGroups: Array.from(teams.entries()), soloAgents: solo }
  }, [runningAgents])

  const handleKill = useCallback(
    async (id: string) => {
      const agent = agents.find((a) => a.id === id)
      try {
        if (agent?.provider === 'gemini') {
          const result = await window.electronAPI.gemini.stop(id)
          if (!result.ok) {
            addToast({ type: 'error', title: 'Failed to stop agent', message: result.error })
          }
        } else {
          const result = await window.electronAPI.agent.kill(id)
          if (!result.ok) {
            addToast({ type: 'error', title: 'Failed to kill agent', message: result.error })
          }
        }
      } catch (err) {
        addToast({ type: 'error', title: 'Failed to kill agent', message: String(err) })
      }
    },
    [addToast, agents]
  )

  const handleKillAll = useCallback(async () => {
    const result = await window.electronAPI.agent.killAll()
    if (!result.ok) {
      addToast({ type: 'error', title: 'Failed to kill all agents' })
    }
  }, [addToast])

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Bot size={20} className="text-yellow-400" />
          <h2 className="font-display font-bold text-xl text-white">Active Agents</h2>
          {runningAgents.length > 0 && (
            <Badge color="yellow" size="sm">
              {runningAgents.length}
            </Badge>
          )}
        </div>
        {runningAgents.length > 1 && (
          <Button
            variant="danger"
            size="sm"
            onClick={handleKillAll}
            leftIcon={<Skull size={14} />}
          >
            Kill All
          </Button>
        )}
      </div>

      {runningAgents.length === 0 ? (
        <Card variant="default" className="p-6 text-center">
          <Bot size={32} className="text-gray-600 mx-auto mb-2" aria-hidden="true" />
          <p className="text-sm text-gray-500">No agents running</p>
          <p className="text-xs text-gray-500 mt-1">Launch an agent above to get started</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {/* Team groups */}
          {teamGroups.map(([teamId, teamAgents]) => (
            <div
              key={teamId}
              className="border border-yellow-400/20 rounded-2xl p-3 space-y-2"
            >
              <div className="flex items-center gap-2 px-1 mb-1">
                <Users size={12} className="text-yellow-400" />
                <span className="text-xs font-semibold text-yellow-400/70 uppercase tracking-wider">
                  Team ({teamAgents.length} models)
                </span>
              </div>
              <AnimatePresence mode="popLayout">
                {teamAgents.map((agent) => (
                  <motion.div
                    key={agent.id}
                    variants={listItemVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0, x: -20 }}
                    layout
                  >
                    <AgentCard agent={agent} onKill={handleKill} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ))}

          {/* Solo agents */}
          <AnimatePresence mode="popLayout">
            {soloAgents.map((agent) => (
              <motion.div
                key={agent.id}
                variants={listItemVariants}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, x: -20 }}
                layout
              >
                <AgentCard agent={agent} onKill={handleKill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
