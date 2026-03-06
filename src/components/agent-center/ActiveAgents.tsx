import { useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Skull } from 'lucide-react'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { Card } from '@components/ui/Card'
import { useAgentStore } from '@stores/agentStore'
import { useUIStore } from '@stores/uiStore'
import { listItemVariants } from '@design-system/animations'
import { AgentIdentityCard } from './active-agents/AgentIdentityCard'
import { TeamCluster } from './active-agents/TeamCluster'
import type { AgentRun } from '@/types/agent'

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

  const handleKillTeam = useCallback(
    async (ids: string[]) => {
      for (const id of ids) {
        await handleKill(id)
      }
    },
    [handleKill]
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
        <div className="space-y-4">
          {/* Team groups — full width */}
          {teamGroups.map(([teamId, teamAgents]) => (
            <TeamCluster
              key={teamId}
              teamId={teamId}
              agents={teamAgents}
              onKill={handleKill}
              onKillTeam={handleKillTeam}
            />
          ))}

          {/* Solo agents — CSS grid of character tiles */}
          {soloAgents.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {soloAgents.map((agent) => (
                  <motion.div
                    key={agent.id}
                    variants={listItemVariants}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0, scale: 0.9 }}
                    layout
                  >
                    <AgentIdentityCard agent={agent} onKill={handleKill} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
