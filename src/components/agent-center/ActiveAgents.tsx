import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Skull, XCircle } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { useAgentStore } from '@stores/agentStore'
import { useUIStore } from '@stores/uiStore'
import { listItemVariants } from '@design-system/animations'
import type { AgentRun } from '@/types/agent'

const MODEL_COLORS: Record<string, 'purple' | 'blue' | 'green'> = {
  opus: 'purple',
  sonnet: 'blue',
  haiku: 'green',
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

export function ActiveAgents(): JSX.Element {
  const agents = useAgentStore((s) => s.agents.filter((a) => a.status === 'running'))
  const addToast = useUIStore((s) => s.addToast)

  const handleKill = useCallback(async (id: string) => {
    const result = await window.electronAPI.agent.kill(id)
    if (!result.ok) {
      addToast({
        type: 'error',
        title: 'Failed to kill agent',
        message: result.error,
      })
    }
  }, [addToast])

  const handleKillAll = useCallback(async () => {
    const result = await window.electronAPI.agent.killAll()
    if (!result.ok) {
      addToast({
        type: 'error',
        title: 'Failed to kill all agents',
      })
    }
  }, [addToast])

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Bot size={20} className="text-yellow-400" />
          <h2 className="font-display font-bold text-xl text-white">Active Agents</h2>
          {agents.length > 0 && (
            <Badge color="yellow" size="sm">
              {agents.length}
            </Badge>
          )}
        </div>
        {agents.length > 1 && (
          <Button variant="danger" size="sm" onClick={handleKillAll} leftIcon={<Skull size={14} />}>
            Kill All
          </Button>
        )}
      </div>

      {agents.length === 0 ? (
        <Card variant="default" className="p-6 text-center">
          <Bot size={32} className="text-gray-600 mx-auto mb-2" aria-hidden="true" />
          <p className="text-sm text-gray-500">No agents running</p>
          <p className="text-xs text-gray-500 mt-1">Launch an agent above to get started</p>
        </Card>
      ) : (
        <div className="space-y-2">
          <AnimatePresence mode="popLayout">
            {agents.map((agent: AgentRun) => (
              <motion.div
                key={agent.id}
                variants={listItemVariants}
                initial="initial"
                animate="animate"
                exit={{ opacity: 0, x: -20 }}
                layout
              >
                <Card variant="default" className="p-4">
                  <div className="flex items-center gap-3">
                    {/* Pulsing status dot */}
                    <div className="relative flex-shrink-0" aria-hidden="true">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-75" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{agent.prompt}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge color={MODEL_COLORS[agent.model] || 'gray'} size="sm">
                          {agent.model}
                        </Badge>
                        <ElapsedTime startedAt={agent.startedAt} />
                        <span className="text-xs text-gray-500">
                          {agent.logs.length} logs
                        </span>
                      </div>
                    </div>

                    {/* Kill button */}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleKill(agent.id)}
                      leftIcon={<XCircle size={14} />}
                    >
                      Kill
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
