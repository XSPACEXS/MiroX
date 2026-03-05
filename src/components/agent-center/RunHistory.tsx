import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Clock, History, RotateCcw, Trash2 } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { Modal } from '@components/ui/Modal'
import { useAgentStore } from '@stores/agentStore'
import { useUIStore } from '@stores/uiStore'
import { listItemVariants } from '@design-system/animations'
import type { AgentRun } from '@/types/agent'

// Module-level constants to avoid re-creation on every render
const STATUS_COLORS: Record<string, 'green' | 'red' | 'yellow' | 'gray' | 'blue'> = {
  completed: 'green',
  failed: 'red',
  killed: 'yellow',
  running: 'blue',
}

const MODEL_COLORS: Record<string, 'purple' | 'blue' | 'green' | 'gray'> = {
  opus: 'purple',
  sonnet: 'blue',
  haiku: 'green',
}

function formatDuration(start: number, end: number | null): string {
  const ms = (end || Date.now()) - start
  const secs = Math.floor(ms / 1000)
  const mins = Math.floor(secs / 60)
  if (mins > 0) return `${mins}m ${secs % 60}s`
  return `${secs}s`
}

function formatDate(ts: number): string {
  return new Date(ts).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function formatCost(cost: AgentRun['cost']): string {
  if (!cost) return '—'
  return `$${cost.estimatedUSD.toFixed(4)}`
}

export function RunHistory(): JSX.Element {
  const history = useAgentStore((s) => s.history)
  const clearHistory = useAgentStore((s) => s.clearHistory)
  const addToast = useUIStore((s) => s.addToast)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [rollbackTarget, setRollbackTarget] = useState<AgentRun | null>(null)

  const handleRollbackRequest = useCallback((agent: AgentRun) => {
    if (!agent.gitTagStart) return
    setRollbackTarget(agent)
  }, [])

  const handleRollbackConfirm = useCallback(async () => {
    if (!rollbackTarget?.gitTagStart) return
    const tag = rollbackTarget.gitTagStart
    setRollbackTarget(null)
    const result = await window.electronAPI.agent.rollback(tag)
    if (result.ok) {
      addToast({ type: 'success', title: 'Rollback complete', message: `Reset to ${tag}` })
    } else {
      addToast({ type: 'error', title: 'Rollback failed', message: result.error })
    }
  }, [rollbackTarget, addToast])

  const toggleExpand = useCallback(
    (id: string) => {
      setExpandedId(expandedId === id ? null : id)
    },
    [expandedId]
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <History size={20} className="text-yellow-400" />
          <h2 className="font-display font-bold text-xl text-white">Run History</h2>
          {history.length > 0 && (
            <Badge color="gray" size="sm">
              {history.length}
            </Badge>
          )}
        </div>
        {history.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearHistory}
            leftIcon={<Trash2 size={14} />}
          >
            Clear
          </Button>
        )}
      </div>

      {history.length === 0 ? (
        <Card variant="default" className="p-6 text-center">
          <Clock size={32} className="text-gray-600 mx-auto mb-2" aria-hidden="true" />
          <p className="text-sm text-gray-500">No completed runs yet</p>
        </Card>
      ) : (
        <div className="space-y-2">
          {history.map((agent) => (
            <motion.div key={agent.id} variants={listItemVariants} initial="initial" animate="animate">
              <Card variant="default" className="overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white truncate">{agent.prompt}</p>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <Badge color={STATUS_COLORS[agent.status] || 'gray'} size="sm">
                          {agent.status}
                        </Badge>
                        <Badge color={MODEL_COLORS[agent.model] || 'gray'} size="sm">
                          {agent.model}
                        </Badge>
                        <span className="text-xs text-gray-500">
                          {formatDate(agent.startedAt)}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDuration(agent.startedAt, agent.finishedAt)}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">
                          {formatCost(agent.cost)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {agent.gitTagStart && (
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleRollbackRequest(agent)}
                          leftIcon={<RotateCcw size={14} />}
                        >
                          Rollback
                        </Button>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleExpand(agent.id)}
                        aria-label={expandedId === agent.id ? 'Collapse logs' : 'Expand logs'}
                        aria-expanded={expandedId === agent.id}
                        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            expandedId === agent.id ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedId === agent.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden border-t border-black-600"
                    >
                      <div
                        role="log"
                        aria-label="Agent run logs"
                        className="p-4 max-h-60 overflow-y-auto font-mono text-xs leading-relaxed"
                      >
                        {agent.logs.length === 0 ? (
                          <p className="text-gray-500">No logs recorded</p>
                        ) : (
                          agent.logs.map((log, i) => (
                            <div key={i} className="flex gap-2">
                              <span className="text-gray-600 flex-shrink-0 select-none">
                                {new Date(log.timestamp).toLocaleTimeString('en-US', {
                                  hour12: false,
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  second: '2-digit',
                                })}
                              </span>
                              <span
                                className={
                                  log.type === 'stderr'
                                    ? 'text-red-400'
                                    : log.type === 'system'
                                      ? 'text-yellow-400/60'
                                      : 'text-gray-200'
                                }
                              >
                                {log.text}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Rollback confirmation modal — replaces window.confirm for design consistency */}
      <Modal
        isOpen={rollbackTarget !== null}
        onClose={() => setRollbackTarget(null)}
        title="Confirm Rollback"
        size="sm"
      >
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-300">
            This will run{' '}
            <code className="font-mono text-yellow-400 bg-black-700 px-1.5 py-0.5 rounded text-xs">
              git reset --hard {rollbackTarget?.gitTagStart}
            </code>
            . All changes since this agent run will be lost.
          </p>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" size="sm" onClick={() => setRollbackTarget(null)}>
              Cancel
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={handleRollbackConfirm}
              leftIcon={<RotateCcw size={14} />}
            >
              Rollback
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
