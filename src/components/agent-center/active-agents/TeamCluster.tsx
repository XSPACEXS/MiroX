import { motion, AnimatePresence } from 'framer-motion'
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
      className="rounded-2xl border border-yellow-400/15 bg-black-800/30 p-4 space-y-3"
    >
      {/* Team header */}
      <div className="flex items-center justify-between">
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

      {/* Primary agent */}
      {primary && (
        <motion.div variants={listItemVariants}>
          <div className="border border-yellow-400/20 rounded-xl">
            <AgentIdentityCard agent={primary} onKill={onKill} isPrimary />
          </div>
        </motion.div>
      )}

      {/* Collaborators with connection lines */}
      {collaborators.length > 0 && (
        <div className="ml-5 border-l-2 border-dashed border-yellow-400/15 pl-4 space-y-2">
          <AnimatePresence mode="popLayout">
            {collaborators.map((agent) => (
              <motion.div
                key={agent.id}
                variants={listItemVariants}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, x: -20 }}
                layout
                className="relative"
              >
                {/* Horizontal connector */}
                <div className="absolute -left-4 top-1/2 w-3 border-t border-dashed border-yellow-400/15" />
                <AgentIdentityCard agent={agent} onKill={onKill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  )
}
