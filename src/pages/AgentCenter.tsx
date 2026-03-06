import { useEffect, useRef, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lock, Wrench, Octagon } from 'lucide-react'
import { pageVariants } from '@design-system/animations'
import { useAgentStore } from '@stores/agentStore'
import { useMissionStore } from '@stores/missionStore'
import { useUIStore } from '@stores/uiStore'
import { abortMission } from '@services/orchestrator'
import type { MissionStoreAPI } from '@services/orchestrator'
import { generateCharacter } from '@services/characterGenerator'
import { MissionLauncher } from '@components/agent-center/MissionLauncher'
import { PastMissions } from '@components/agent-center/PastMissions'
import { PhaseBar } from '@components/agent-center/phases/PhaseBar'
import { PlanningView } from '@components/agent-center/phases/PlanningView'
import { WorkingView } from '@components/agent-center/phases/WorkingView'
import { VerifyingView } from '@components/agent-center/phases/VerifyingView'
import { DoneView } from '@components/agent-center/phases/DoneView'
import { CelebrationOverlay } from '@components/agent-center/scene/CelebrationOverlay'
import { ReStyleWizard } from '@components/agent-center/ReStyleWizard'
import { Button } from '@components/ui/Button'

export default function AgentCenter(): JSX.Element {
  const isAdmin = useAgentStore((s) => s.isAdmin)
  const agents = useAgentStore((s) => s.agents)
  const appendLog = useAgentStore((s) => s.appendLog)
  const updateAgentStatus = useAgentStore((s) => s.updateAgentStatus)
  const moveToHistory = useAgentStore((s) => s.moveToHistory)
  const updateContextUsage = useAgentStore((s) => s.updateContextUsage)

  const pageState = useMissionStore((s) => s.pageState)
  const mission = useMissionStore((s) => s.mission)
  const characters = useMissionStore((s) => s.characters)
  const fileMap = useMissionStore((s) => s.fileMap)
  const interactions = useMissionStore((s) => s.interactions)
  const addCharacter = useMissionStore((s) => s.addCharacter)
  const reset = useMissionStore((s) => s.reset)

  const addToast = useUIStore((s) => s.addToast)

  const [showCelebration, setShowCelebration] = useState(false)

  // Track pending move-to-history timeouts so we can clear them on unmount
  const pendingTimeouts = useRef<ReturnType<typeof setTimeout>[]>([])

  // Show celebration overlay when transitioning to 'done' (not failed/aborted)
  const [prevPageState, setPrevPageState] = useState(pageState)
  if (pageState !== prevPageState) {
    setPrevPageState(pageState)
    if (pageState === 'done' && mission?.phase === 'done' && !showCelebration) {
      setShowCelebration(true)
    }
  }

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

      // Parse file operations from logs for mission file map
      const filePatterns: Array<{ regex: RegExp; action: 'read' | 'write' | 'edit' | 'create' }> = [
        { regex: /(?:Read|Reading)\s+[`"]?([^\s`"]+)[`"]?/i, action: 'read' },
        { regex: /(?:Write|Writing|Wrote)\s+[`"]?([^\s`"]+)[`"]?/i, action: 'write' },
        { regex: /(?:Edit|Editing|Edited)\s+[`"]?([^\s`"]+)[`"]?/i, action: 'edit' },
        { regex: /(?:Create|Creating|Created)\s+[`"]?([^\s`"]+)[`"]?/i, action: 'create' },
      ]
      for (const { regex, action } of filePatterns) {
        const match = data.text.match(regex)
        if (match?.[1]) {
          const filePath = match[1]
          if (filePath.includes('/') || filePath.includes('.')) {
            useMissionStore.getState().updateFileMap({
              path: filePath,
              ownerAgentId: data.agentId,
              lastAction: action,
              timestamp: Date.now(),
            })
          }
        }
      }
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

    const unsubContextUpdate = api.agent.onContextUpdate((data) => {
      updateContextUsage(data.agentId, {
        inputTokens: data.inputTokens,
        outputTokens: data.outputTokens,
        cacheReadTokens: data.cacheReadTokens,
        cacheWriteTokens: data.cacheWriteTokens,
      })
    })

    return () => {
      unsubLog()
      unsubExit()
      unsubGeminiLog()
      unsubGeminiExit()
      unsubContextUpdate()
      pendingTimeouts.current.forEach(clearTimeout)
      pendingTimeouts.current = []
    }
  }, [appendLog, updateAgentStatus, moveToHistory, updateContextUsage])

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

  // Watch for new active agents in mission and generate characters
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

  const handleKillAgent = useCallback(
    async (agentId: string) => {
      try {
        await window.electronAPI.agent.kill(agentId)
        addToast({ type: 'info', title: 'Agent killed', message: agentId })
      } catch {
        addToast({ type: 'error', title: 'Failed to kill agent' })
      }
    },
    [addToast]
  )

  const handleNewMission = useCallback(() => {
    reset()
  }, [reset])

  const handleRelaunch = useCallback((_prompt: string) => {
    // Reset to idle so the MissionLauncher becomes visible
    // The user can then edit and re-launch from the launcher
    reset()
    // Note: we can't pre-fill the prompt since MissionLauncher manages its own state
    // The user re-launches from the past missions list
  }, [reset])

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

  // Get the mission agents (those belonging to the current mission)
  const missionAgents = mission
    ? agents.filter((a) => a.teamRunId === mission.id || mission.activeAgentIds.includes(a.id))
    : []

  const runningCount = agents.filter((a) => a.status === 'running').length

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full overflow-y-auto p-6 space-y-6"
    >
      {/* Page header */}
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
        {/* Abort button when mission is active */}
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

      {/* Phase bar (visible during active mission) */}
      {pageState !== 'idle' && mission && (
        <PhaseBar currentPhase={mission.phase} phaseHistory={mission.phaseHistory} />
      )}

      {/* Content routed by page state */}
      <AnimatePresence mode="wait">
        {pageState === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="space-y-8"
          >
            <MissionLauncher />
            <PastMissions onRelaunch={handleRelaunch} />
          </motion.div>
        )}

        {pageState === 'planning' && mission && (
          <motion.div
            key="planning"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <PlanningView mission={mission} characters={characters} />
          </motion.div>
        )}

        {pageState === 'working' && mission && (
          <motion.div
            key="working"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100vh-300px)]"
          >
            <WorkingView
              agents={missionAgents}
              mission={mission}
              characters={characters}
              fileMap={fileMap}
              interactions={interactions}
              onKill={handleKillAgent}
            />
          </motion.div>
        )}

        {pageState === 'verifying' && (
          <motion.div
            key="verifying"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100vh-300px)]"
          >
            <VerifyingView agents={missionAgents} characters={characters} />
          </motion.div>
        )}

        {pageState === 'done' && mission && (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <DoneView
              mission={mission}
              fileMap={fileMap}
              characters={characters}
              onNewMission={handleNewMission}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
