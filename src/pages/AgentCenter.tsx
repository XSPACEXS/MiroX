import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Lock, Wrench } from 'lucide-react'
import { pageVariants } from '@design-system/animations'
import { useAgentStore } from '@stores/agentStore'
import { AgentLauncher } from '@components/agent-center/AgentLauncher'
import { ActiveAgents } from '@components/agent-center/ActiveAgents'
import { LiveLogs } from '@components/agent-center/LiveLogs'
import { AppSelfCheck } from '@components/agent-center/AppSelfCheck'
import { RunHistory } from '@components/agent-center/RunHistory'

export default function AgentCenter(): JSX.Element {
  const isAdmin = useAgentStore((s) => s.isAdmin)
  const agents = useAgentStore((s) => s.agents)
  const appendLog = useAgentStore((s) => s.appendLog)
  const updateAgentStatus = useAgentStore((s) => s.updateAgentStatus)
  const moveToHistory = useAgentStore((s) => s.moveToHistory)

  // Track pending move-to-history timeouts so we can clear them on unmount
  const pendingTimeouts = useRef<ReturnType<typeof setTimeout>[]>([])

  // Subscribe to IPC events
  useEffect(() => {
    const api = window.electronAPI
    if (!api?.agent || !api?.gemini) return

    const unsubLog = api.agent.onLog((data) => {
      appendLog(data.agentId, {
        timestamp: data.timestamp,
        type: data.type,
        text: data.text,
      })
    })

    const unsubExit = api.agent.onExit((data) => {
      updateAgentStatus(data.id, data.status, data.exitCode)
      const tid = setTimeout(() => {
        moveToHistory(data.id)
        pendingTimeouts.current = pendingTimeouts.current.filter((t) => t !== tid)
      }, 2000)
      pendingTimeouts.current.push(tid)
    })

    const unsubGeminiLog = api.gemini.onLog((data) => {
      appendLog(data.agentId, {
        timestamp: data.timestamp,
        type: data.type,
        text: data.text,
        mediaUrl: data.mediaUrl,
        mediaMimeType: data.mediaMimeType,
      })
    })

    const unsubGeminiExit = api.gemini.onExit((data) => {
      updateAgentStatus(data.id, data.status, data.exitCode)
      const tid = setTimeout(() => {
        moveToHistory(data.id)
        pendingTimeouts.current = pendingTimeouts.current.filter((t) => t !== tid)
      }, 2000)
      pendingTimeouts.current.push(tid)
    })

    return () => {
      unsubLog()
      unsubExit()
      unsubGeminiLog()
      unsubGeminiExit()
      pendingTimeouts.current.forEach(clearTimeout)
      pendingTimeouts.current = []
    }
  }, [appendLog, updateAgentStatus, moveToHistory])

  if (!isAdmin) {
    return (
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="h-full flex items-center justify-center"
      >
        <div className="text-center">
          <Lock size={48} className="text-gray-600 mx-auto mb-4" />
          <h1 className="font-display font-bold text-2xl text-white mb-2">Access Denied</h1>
          <p className="text-gray-400">You need admin privileges to access the Agent Command Center.</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full overflow-y-auto p-6 space-y-8"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center">
          <Wrench size={22} className="text-yellow-400" />
        </div>
        <div>
          <h1 className="font-display font-bold text-3xl text-white">Agent Command Center</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Launch AI agents, monitor progress, and test the app
          </p>
        </div>
        {agents.filter((a) => a.status === 'running').length > 0 && (
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping opacity-75" />
            </div>
            <span className="text-xs text-green-400">
              {agents.filter((a) => a.status === 'running').length} agent(s) running
            </span>
          </div>
        )}
      </div>

      <AgentLauncher />
      <ActiveAgents />
      <LiveLogs />
      <AppSelfCheck />
      <RunHistory />
    </motion.div>
  )
}
