import { useEffect } from 'react'
import { useChatStore } from '@stores/chatStore'
import { useMissionStore } from '@stores/missionStore'
import { useAgentStore } from '@stores/agentStore'
import { sendChatMessage, sendDebugMessage, runProjectScan, cancelStream } from '@services/chatService'
import { executeMission, abortMission } from '@services/orchestrator'
import type { MissionStoreAPI, AgentStoreAPI, MissionConfig } from '@services/orchestrator'
import { ModeTabBar } from './ModeTabBar'
import { ConfigStrip } from './ConfigStrip'
import { ConfigPanel } from './ConfigPanel'
import { ChatContent } from './ChatContent'
import { QuickActions } from './QuickActions'
import { ChatInputBar } from './ChatInputBar'

function buildMissionStoreAPI(): MissionStoreAPI {
  return {
    getMission: () => useMissionStore.getState().mission,
    setPhase: (phase) => useMissionStore.getState().setPhase(phase),
    setPlan: (plan) => useMissionStore.getState().setPlan(plan),
    updateSubtask: (id, update) => useMissionStore.getState().updateSubtask(id, update),
    setError: (error) => useMissionStore.getState().setError(error),
    addActiveAgent: (agentId) => useMissionStore.getState().addActiveAgent(agentId),
    removeActiveAgent: (agentId) => useMissionStore.getState().removeActiveAgent(agentId),
    addCompletedAgent: (agentId) => useMissionStore.getState().addCompletedAgent(agentId),
    addPhaseTransition: (from, to, reason) => useMissionStore.getState().addPhaseTransition(from, to, reason),
    setGeminiAssistReport: (report) => useMissionStore.getState().setGeminiAssistReport(report),
    completeMission: () => useMissionStore.getState().completeMission(),
  }
}

function buildAgentStoreAPI(): AgentStoreAPI {
  return {
    addAgent: (agent) => useAgentStore.getState().addAgent(agent),
    getAgent: (id) => useAgentStore.getState().agents.find((a) => a.id === id),
  }
}

export function ChatPanel(): JSX.Element {
  const mode = useChatStore((s) => s.mode)
  const config = useChatStore((s) => s.config)
  const messages = useChatStore((s) => s.messages)
  const isStreaming = useChatStore((s) => s.isStreaming)
  const configExpanded = useChatStore((s) => s.configExpanded)

  useEffect(() => {
    void window.electronAPI.agent.getProjectDir().then((r) => {
      if (r.ok && r.projectPath) {
        useChatStore.getState().updateConfig({ projectDir: r.projectPath })
      }
    })
  }, [])

  function handleSubmit(text: string): void {
    switch (mode) {
      case 'chat':
        void sendChatMessage(text, config)
        break
      case 'debug':
        void sendDebugMessage(text, config)
        break
      case 'scan':
        void runProjectScan(config)
        break
      case 'mission': {
        if (config.isLocked) return
        useChatStore.getState().addMessage({
          id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          role: 'user',
          type: 'text',
          mode: 'mission',
          content: text,
          timestamp: Date.now(),
        })
        const missionConfig: MissionConfig = {
          prompt: text,
          primaryModel: config.primaryModel,
          tools: ['Read', 'Edit', 'Write', 'Glob', 'Grep', 'Bash'],
          timeLimitSeconds: config.timeLimitSeconds,
          enableScout: true,
          enableVerify: true,
          geminiAssist: config.geminiEnabled
            ? {
                enabled: true,
                brainModel: config.geminiModel,
                autoMockup: config.autoMockup,
                autoImage: false,
                autoVideo: false,
              }
            : undefined,
          enableHandoff: config.handoffEnabled,
        }
        useMissionStore.getState().startMission(`mission-${Date.now()}`, text)
        void executeMission(missionConfig, buildMissionStoreAPI(), buildAgentStoreAPI())
        break
      }
    }
  }

  function handleStop(): void {
    if (isStreaming) {
      void cancelStream()
    } else if (config.isLocked) {
      void abortMission(buildMissionStoreAPI())
    }
  }

  const showQuickActions = (messages.length === 0 || !isStreaming) && !config.isLocked

  return (
    <div className="flex flex-col h-full rounded-2xl border border-black-600 bg-black-800/40 overflow-hidden">
      <ModeTabBar />
      {configExpanded ? <ConfigPanel /> : <ConfigStrip />}
      <ChatContent />
      {showQuickActions && <QuickActions />}
      <ChatInputBar onSubmit={handleSubmit} onStop={handleStop} />
    </div>
  )
}
