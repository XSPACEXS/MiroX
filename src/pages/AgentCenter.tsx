import { useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Wrench, Octagon, Terminal } from 'lucide-react'
import { pageVariants } from '@design-system/animations'
import { useAgentStore } from '@stores/agentStore'
import { useMissionStore } from '@stores/missionStore'
import { useChatStore } from '@stores/chatStore'
import { useUIStore } from '@stores/uiStore'
import { abortMission } from '@services/orchestrator'
import type { MissionStoreAPI } from '@services/orchestrator'
import { generateCharacter } from '@services/characterGenerator'
import { startMissionAdapter } from '@services/chatService/missionAdapter'
import { useChatIPCBridge } from '@hooks/useChatIPCBridge'
import { ChatPanel } from '@components/agent-center/chat/ChatPanel'
import { ConnectionsStrip, ConnectionsPanel } from '@components/agent-center/ConnectionsPanel'
import { MissionReportsStrip, MissionReportsPanel } from '@components/agent-center/MissionReportsPanel'
import { LiveLogs } from '@components/agent-center/LiveLogs'
import { PlanningView } from '@components/agent-center/phases/PlanningView'
import { WorkingView } from '@components/agent-center/phases/WorkingView'
import { VerifyingView } from '@components/agent-center/phases/VerifyingView'
import { DoneView } from '@components/agent-center/phases/DoneView'
import { useClaude } from '@hooks/useClaude'
import { useGemini } from '@hooks/useGemini'
import { CelebrationOverlay } from '@components/agent-center/scene/CelebrationOverlay'
import { ReStyleWizard } from '@components/agent-center/ReStyleWizard'
import { Button } from '@components/ui/Button'
import { ErrorBoundary } from '@components/ui/ErrorBoundary'

export default function AgentCenter(): JSX.Element {
  const isAdmin = useAgentStore((s) => s.isAdmin)
  const agents = useAgentStore((s) => s.agents)

  const pageState = useMissionStore((s) => s.pageState)
  const mission = useMissionStore((s) => s.mission)
  const characters = useMissionStore((s) => s.characters)
  const addCharacter = useMissionStore((s) => s.addCharacter)

  const addToast = useUIStore((s) => s.addToast)

  const missionHistory = useMissionStore((s) => s.missionHistory)

  const fileMap = useMissionStore((s) => s.fileMap)
  const interactions = useMissionStore((s) => s.interactions)

  const [showCelebration, setShowCelebration] = useState(false)
  const [showConnections, setShowConnections] = useState(false)
  const [showReports, setShowReports] = useState(false)
  const [showLogs, setShowLogs] = useState(false)
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
      addInteraction: (interaction) => useMissionStore.getState().addInteraction(interaction),
      getCharacterName: (agentId) => {
        const char = useMissionStore.getState().characters[agentId]
        return char?.firstName ?? 'Agent'
      },
    }

    await abortMission(missionStoreAPI)
    addToast({ type: 'warning', title: 'Mission aborted' })
  }, [addToast])

  const handleKillAgent = useCallback((id: string) => {
    void window.electronAPI.agent.kill(id)
  }, [])

  const handleNewMission = useCallback(() => {
    useMissionStore.getState().reset()
    useChatStore.getState().clearMessages()
    useChatStore.getState().unlockConfig()
  }, [])

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
        {/* B2: LiveLogs strip button */}
        <button
          onClick={() => setShowLogs((v) => !v)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-colors ${
            showLogs
              ? 'border-yellow-400/30 bg-yellow-400/10 text-yellow-400'
              : 'border-black-600 bg-black-700 text-gray-400 hover:text-gray-200 hover:border-black-500'
          }`}
        >
          <Terminal size={14} />
          Logs
        </button>
        <MissionReportsStrip
          onClick={() => setShowReports((v) => !v)}
          count={missionHistory.length}
        />
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

      {/* Mission reports panel */}
      {showReports && (
        <MissionReportsPanel onClose={() => setShowReports(false)} />
      )}

      {/* B2: LiveLogs panel */}
      {showLogs && (
        <div className="shrink-0 rounded-2xl border border-black-600 bg-black-800/40 p-4">
          <LiveLogs />
        </div>
      )}

      {/* B1: Phase view + Chat panel split layout */}
      <div className="flex-1 flex flex-col gap-3 min-h-0">
        {/* Phase view — rendered above chat when mission is active */}
        {pageState === 'planning' && mission && (
          <div className="shrink-0 rounded-2xl border border-black-600 bg-black-800/40 p-4 max-h-[40%] overflow-y-auto">
            <PlanningView mission={mission} characters={characters} />
          </div>
        )}

        {pageState === 'working' && mission && (
          <div className="flex-[3] min-h-0 rounded-2xl border border-black-600 bg-black-800/40 p-3 overflow-hidden">
            <WorkingView
              agents={agents}
              mission={mission}
              characters={characters}
              fileMap={fileMap}
              interactions={interactions}
              onKill={handleKillAgent}
            />
          </div>
        )}

        {pageState === 'verifying' && (
          <div className="flex-1 min-h-0 rounded-2xl border border-black-600 bg-black-800/40 p-3 overflow-hidden">
            <VerifyingView agents={agents} characters={characters} />
          </div>
        )}

        {pageState === 'done' && mission && (
          <div className="flex-[3] min-h-0 rounded-2xl border border-black-600 bg-black-800/40 p-4 overflow-y-auto">
            <DoneView
              mission={mission}
              fileMap={fileMap}
              characters={characters}
              onNewMission={handleNewMission}
            />
          </div>
        )}

        {/* Chat panel — always visible, flexes to fill remaining space */}
        <ErrorBoundary
          fallback={
            <div className="flex-1 flex items-center justify-center rounded-2xl border border-black-600 bg-black-800/40">
              <div className="text-center p-8">
                <p className="text-red-400 font-semibold mb-2">Chat panel encountered an error</p>
                <button
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 transition-colors"
                >
                  Reload
                </button>
              </div>
            </div>
          }
        >
          <div className={pageState === 'idle' ? 'flex-1 min-h-0' : 'flex-[2] min-h-[200px]'}>
            <ChatPanel />
          </div>
        </ErrorBoundary>
      </div>

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
