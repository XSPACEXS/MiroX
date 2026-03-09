import { useMissionStore } from '@stores/missionStore'
import { useAgentStore } from '@stores/agentStore'
import type { MissionStoreAPI, AgentStoreAPI } from './pipeline'

/** Shared factory — single source of truth for MissionStoreAPI construction. */
export function buildMissionStoreAPI(): MissionStoreAPI {
  return {
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
}

/** Shared factory — single source of truth for AgentStoreAPI construction. */
export function buildAgentStoreAPI(): AgentStoreAPI {
  return {
    addAgent: (agent) => useAgentStore.getState().addAgent(agent),
    getAgent: (id) => useAgentStore.getState().agents.find((a) => a.id === id),
  }
}
