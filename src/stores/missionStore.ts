import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import type { MissionPhase, MissionPlan, MissionState, Subtask } from '@/services/orchestrator/types'
import type {
  AgentCharacter,
  AgentCenterPageState,
  AgentInteraction,
  FileMapEntry,
} from '@/types/character'

interface MissionHistoryEntry {
  id: string
  prompt: string
  status: string
  startedAt: number
  finishedAt: number | null
  agentCount: number
  fileCount: number
}

interface MissionStoreState {
  // Active mission
  mission: MissionState | null
  pageState: AgentCenterPageState

  // Character system
  characters: Record<string, AgentCharacter>

  // Live data
  fileMap: Record<string, FileMapEntry>
  interactions: AgentInteraction[]

  // Past missions
  missionHistory: MissionHistoryEntry[]

  // Actions
  startMission: (id: string, prompt: string) => void
  setPhase: (phase: MissionPhase) => void
  setPlan: (plan: MissionPlan) => void
  updateSubtask: (id: string, update: Partial<Subtask>) => void
  setError: (error: string | null) => void
  addActiveAgent: (agentId: string) => void
  removeActiveAgent: (agentId: string) => void
  addCompletedAgent: (agentId: string) => void
  addPhaseTransition: (from: MissionPhase, to: MissionPhase, reason: string) => void
  addCharacter: (agentId: string, character: AgentCharacter) => void
  updateMood: (agentId: string, mood: AgentCharacter['mood']) => void
  updateFileMap: (entry: FileMapEntry) => void
  addInteraction: (interaction: AgentInteraction) => void
  completeMission: () => void
  abortMission: () => void
  reset: () => void
  clearMissionHistory: () => void
}

function phaseToPageState(phase: MissionPhase): AgentCenterPageState {
  switch (phase) {
    case 'idle':
      return 'idle'
    case 'planning':
    case 'scouting':
      return 'planning'
    case 'building':
      return 'working'
    case 'testing':
    case 'verifying':
      return 'verifying'
    case 'done':
    case 'failed':
    case 'aborted':
      return 'done'
  }
}

export const useMissionStore = create<MissionStoreState>()(
  persist(
    immer((set) => ({
      mission: null,
      pageState: 'idle' as AgentCenterPageState,
      characters: {},
      fileMap: {},
      interactions: [],
      missionHistory: [],

      startMission: (id, prompt) =>
        set((state) => {
          state.mission = {
            id,
            phase: 'planning',
            plan: null,
            activeAgentIds: [],
            completedAgentIds: [],
            phaseHistory: [{ from: 'idle', to: 'planning', at: Date.now(), reason: 'Mission started' }],
            error: null,
            startedAt: Date.now(),
            finishedAt: null,
          }
          state.pageState = 'planning'
          state.characters = {}
          state.fileMap = {}
          state.interactions = []
          // Store prompt on the mission for history
          void prompt
        }),

      setPhase: (phase) =>
        set((state) => {
          if (state.mission) {
            state.mission.phase = phase
            state.pageState = phaseToPageState(phase)
          }
        }),

      setPlan: (plan) =>
        set((state) => {
          if (state.mission) {
            state.mission.plan = plan
          }
        }),

      updateSubtask: (id, update) =>
        set((state) => {
          if (state.mission?.plan) {
            const subtask = state.mission.plan.subtasks.find((s) => s.id === id)
            if (subtask) {
              Object.assign(subtask, update)
            }
          }
        }),

      setError: (error) =>
        set((state) => {
          if (state.mission) {
            state.mission.error = error
          }
        }),

      addActiveAgent: (agentId) =>
        set((state) => {
          if (state.mission && !state.mission.activeAgentIds.includes(agentId)) {
            state.mission.activeAgentIds.push(agentId)
          }
        }),

      removeActiveAgent: (agentId) =>
        set((state) => {
          if (state.mission) {
            state.mission.activeAgentIds = state.mission.activeAgentIds.filter((id) => id !== agentId)
          }
        }),

      addCompletedAgent: (agentId) =>
        set((state) => {
          if (state.mission && !state.mission.completedAgentIds.includes(agentId)) {
            state.mission.completedAgentIds.push(agentId)
          }
        }),

      addPhaseTransition: (from, to, reason) =>
        set((state) => {
          if (state.mission) {
            state.mission.phaseHistory.push({ from, to, at: Date.now(), reason })
          }
        }),

      addCharacter: (agentId, character) =>
        set((state) => {
          state.characters[agentId] = character
        }),

      updateMood: (agentId, mood) =>
        set((state) => {
          if (state.characters[agentId]) {
            state.characters[agentId]!.mood = mood
          }
        }),

      updateFileMap: (entry) =>
        set((state) => {
          state.fileMap[entry.path] = entry
        }),

      addInteraction: (interaction) =>
        set((state) => {
          state.interactions.push(interaction)
          // Keep max 100 interactions
          if (state.interactions.length > 100) {
            state.interactions.splice(0, state.interactions.length - 100)
          }
        }),

      completeMission: () =>
        set((state) => {
          if (state.mission) {
            state.mission.finishedAt = Date.now()
            // Add to history
            state.missionHistory.unshift({
              id: state.mission.id,
              prompt: state.mission.plan?.originalPrompt ?? '',
              status: state.mission.phase,
              startedAt: state.mission.startedAt,
              finishedAt: state.mission.finishedAt,
              agentCount: state.mission.completedAgentIds.length,
              fileCount: Object.keys(state.fileMap).length,
            })
            // Keep max 20 history entries
            if (state.missionHistory.length > 20) {
              state.missionHistory.splice(20)
            }
          }
        }),

      abortMission: () =>
        set((state) => {
          if (state.mission) {
            state.mission.phase = 'aborted'
            state.mission.finishedAt = Date.now()
            state.mission.error = 'Mission aborted'
            state.pageState = 'done'
          }
        }),

      reset: () =>
        set((state) => {
          state.mission = null
          state.pageState = 'idle'
          state.characters = {}
          state.fileMap = {}
          state.interactions = []
        }),

      clearMissionHistory: () =>
        set((state) => {
          state.missionHistory = []
        }),
    })),
    {
      name: 'mirox-missions',
      partialize: (state) => ({
        missionHistory: state.missionHistory,
      }),
    }
  )
)
