import { useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Wrench, Octagon } from 'lucide-react'
import { pageVariants } from '@design-system/animations'
import { useAgentStore } from '@stores/agentStore'
import { useMissionStore } from '@stores/missionStore'
import { useUIStore } from '@stores/uiStore'
import { abortMission } from '@services/orchestrator'
import type { MissionStoreAPI } from '@services/orchestrator'
import { generateCharacter } from '@services/characterGenerator'
import { startMissionAdapter } from '@services/chatService/missionAdapter'
import { useChatIPCBridge } from '@hooks/useChatIPCBridge'
import { ChatPanel } from '@components/agent-center/chat/ChatPanel'
import { ConnectionsStrip, ConnectionsPanel } from '@components/agent-center/ConnectionsPanel'
import { useClaude } from '@hooks/useClaude'
import { useGemini } from '@hooks/useGemini'
import { CelebrationOverlay } from '@components/agent-center/scene/CelebrationOverlay'
import { ReStyleWizard } from '@components/agent-center/ReStyleWizard'
import { Button } from '@components/ui/Button'

export default function AgentCenter(): JSX.Element {
  const isAdmin = useAgentStore((s) => s.isAdmin)
  const agents = useAgentStore((s) => s.agents)

  const pageState = useMissionStore((s) => s.pageState)
  const mission = useMissionStore((s) => s.mission)
  const characters = useMissionStore((s) => s.characters)
  const addCharacter = useMissionStore((s) => s.addCharacter)

  const addToast = useUIStore((s) => s.addToast)

  const [showCelebration, setShowCelebration] = useState(false)
  const [showConnections, setShowConnections] = useState(false)
  const claude = useClaude()
  const gemini = useGemini()

  // IPC bridge (agent logs, exits, context updates, gemini events)
  useChatIPCBridge()

  // Mission adapter: bridges missionStore changes into chatStore messages
  useEffect(() => {
    const unsubscribe = startMissionAdapter()
    return unsubscribe
  }, [])

  // Show celebration overlay when transitioning to 'done' (not failed/aborted)
  const [prevPageState, setPrevPageState] = useState(pageState)
  if (pageState !== prevPageState) {
    setPrevPageState(pageState)
    if (pageState === 'done' && mission?.phase === 'done' && !showCelebration) {
      setShowCelebration(true)
    }
  }

  // Generate character for agents added to the mission
  const handleAgentCharacterGeneration = useCallback(
    (agentId: string) => {
      const agent = useAgentStore.getState().agents.find((a) => a.id === agentId)
      if (agent && !characters[agentId]) {
        const character = generateCharacter(agent)
        addCharacter(agentId, character)
      }
    },
    [characters, addCharacter]
  )

  useEffect(() => {
    if (!mission) return
    for (const agentId of mission.activeAgentIds) {
      handleAgentCharacterGeneration(agentId)
    }
  }, [mission?.activeAgentIds, handleAgentCharacterGeneration, mission])

  const handleAbort = useCallback(async () => {
    const missionStoreAPI: MissionStoreAPI = {
      getMission: () => useMissionStore.getState().mission,
      setPhase: (phase) => useMissionStore.getState().setPhase(phase),
      setPlan: (plan) => useMissionStore.getState().setPlan(plan),
      updateSubtask: (id, update) => useMissionStore.getState().updateSubtask(id, update),
      setError: (error) => useMissionStore.getState().setError(error),
      addActiveAgent: (agentId) => useMissionStore.getState().addActiveAgent(agentId),
      removeActiveAgent: (agentId) => useMissionStore.getState().removeActiveAgent(agentId),
      addCompletedAgent: (agentId) => useMissionStore.getState().addCompletedAgent(agentId),
      addPhaseTransition: (from, to, reason) =>
        useMissionStore.getState().addPhaseTransition(from, to, reason),
      setGeminiAssistReport: (report) => useMissionStore.getState().setGeminiAssistReport(report),
      completeMission: () => useMissionStore.getState().completeMission(),
    }

    await abortMission(missionStoreAPI)
    addToast({ type: 'warning', title: 'Mission aborted' })
  }, [addToast])

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
          <p className="text-gray-400">
            You need admin privileges to access the Agent Command Center.
          </p>
        </div>
      </motion.div>
    )
  }

  const runningCount = agents.filter((a) => a.status === 'running').length

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full flex flex-col p-6 gap-4"
    >
      {/* Page header */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center">
          <Wrench size={22} className="text-yellow-400" />
        </div>
        <div>
          <h1 className="font-display font-bold text-3xl text-white">Agent Command Center</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            Launch AI agents, monitor progress, and test the app
          </p>
        </div>
        {runningCount > 0 && (
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400 animate-ping opacity-75" />
            </div>
            <span className="text-xs text-green-400">
              {runningCount} agent(s) running
            </span>
          </div>
        )}
        <ConnectionsStrip
          onClick={() => setShowConnections((v) => !v)}
          claudeConnected={claude.isConnected}
          geminiConnected={gemini.isConnected}
        />
        {pageState !== 'idle' && pageState !== 'done' && (
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Octagon size={14} />}
            onClick={() => void handleAbort()}
            className="ml-2"
          >
            Abort Mission
          </Button>
        )}
      </div>

      {/* Connections panel */}
      {showConnections && (
        <ConnectionsPanel onClose={() => setShowConnections(false)} />
      )}

      {/* Chat panel — the unified interface */}
      <ChatPanel />

      {/* Celebration overlay */}
      <AnimatePresence>
        {showCelebration && (
          <CelebrationOverlay
            characters={Object.values(characters)}
            onDismiss={() => setShowCelebration(false)}
          />
        )}
      </AnimatePresence>

      {/* ReStyle wizard (mounts from restyleStore.isOpen) */}
      <ReStyleWizard />
    </motion.div>
  )
}
