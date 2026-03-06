import { motion } from 'framer-motion'
import { Users, Skull } from 'lucide-react'
import { Badge } from '@components/ui/Badge'
import { Button } from '@components/ui/Button'
import { listContainerVariants, listItemVariants } from '@design-system/animations'
import { AgentIdentityCard } from './AgentIdentityCard'
import type { AgentRun } from '@/types/agent'

interface TeamClusterProps {
  teamId: string
  agents: AgentRun[]
  onKill: (id: string) => void
  onKillTeam: (ids: string[]) => void
}

export function TeamCluster({ teamId, agents, onKill, onKillTeam }: TeamClusterProps): JSX.Element {
  const primary = agents.find((a) => a.teamRole === 'primary')
  const collaborators = agents.filter((a) => a.teamRole !== 'primary')
  const shortId = teamId.slice(-6)

  return (
    <motion.div
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
      className="rounded-2xl border border-yellow-400/15 bg-black-800/30 backdrop-blur-sm p-5"
    >
      {/* Team header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Users size={14} className="text-yellow-400" />
          <span className="text-xs font-semibold text-yellow-400/70 uppercase tracking-wider">
            Team
          </span>
          <span className="text-xs text-gray-500 font-mono">{shortId}</span>
          <Badge color="yellow" size="sm">
            {agents.length} agents
          </Badge>
        </div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onKillTeam(agents.map((a) => a.id))}
          leftIcon={<Skull size={12} />}
        >
          Kill Team
        </Button>
      </div>

      {/* Network graph layout */}
      <div className="flex flex-col items-center">
        {/* Primary agent — centered at top */}
        {primary && (
          <motion.div variants={listItemVariants} className="w-full max-w-[220px]">
            <AgentIdentityCard agent={primary} onKill={onKill} isPrimary />
          </motion.div>
        )}

        {/* Connection lines */}
        {primary && collaborators.length > 0 && (
          <div className="flex flex-col items-center">
            {/* Vertical line down from primary */}
            <div className="w-px h-6 bg-yellow-400/30" />
            {/* Horizontal bar spanning collaborators */}
            {collaborators.length > 1 && (
              <div
                className="h-px bg-yellow-400/30"
                style={{ width: `${(collaborators.length - 1) * (180 + 16)}px` }}
              />
            )}
          </div>
        )}

        {/* Collaborator row */}
        {collaborators.length > 0 && (
          <div className="flex justify-center gap-4 flex-wrap">
            {collaborators.map((agent) => (
              <motion.div
                key={agent.id}
                variants={listItemVariants}
                className="flex flex-col items-center"
              >
                {/* Vertical drop line */}
                {primary && collaborators.length > 1 && (
                  <div className="w-px h-4 bg-yellow-400/30" />
                )}
                {primary && collaborators.length === 1 && <div className="h-0" />}
                <div className="w-[180px]">
                  <AgentIdentityCard agent={agent} onKill={onKill} compact />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No primary — just show all agents in a row */}
        {!primary && (
          <div className="flex justify-center gap-4 flex-wrap">
            {agents.map((agent) => (
              <motion.div key={agent.id} variants={listItemVariants} className="w-[180px]">
                <AgentIdentityCard agent={agent} onKill={onKill} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
