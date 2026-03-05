import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { persist } from 'zustand/middleware'
import type { AgentRun, DomCheckResult } from '@/types/agent'

interface AgentState {
  agents: AgentRun[]
  history: AgentRun[]
  consoleErrors: string[]
  lastScreenshot: string | null
  domCheckResults: DomCheckResult[] | null
  isAdmin: boolean

  // Actions
  addAgent: (agent: AgentRun) => void
  updateAgentStatus: (id: string, status: AgentRun['status'], exitCode?: number | null) => void
  appendLog: (id: string, log: { timestamp: number; type: 'stdout' | 'stderr' | 'system'; text: string }) => void
  removeAgent: (id: string) => void
  moveToHistory: (id: string) => void
  clearHistory: () => void
  setConsoleErrors: (errors: string[]) => void
  setLastScreenshot: (dataURL: string | null) => void
  setDomCheckResults: (results: DomCheckResult[] | null) => void
  setAdmin: (isAdmin: boolean) => void
  updateAgentCost: (id: string, cost: AgentRun['cost']) => void
}

export const useAgentStore = create<AgentState>()(
  persist(
    immer((set) => ({
      agents: [],
      history: [],
      consoleErrors: [],
      lastScreenshot: null,
      domCheckResults: null,
      isAdmin: true,

      addAgent: (agent) =>
        set((state) => {
          state.agents.push(agent)
        }),

      updateAgentStatus: (id, status, exitCode) =>
        set((state) => {
          const agent = state.agents.find((a) => a.id === id)
          if (agent) {
            agent.status = status
            if (exitCode !== undefined) {
              agent.exitCode = exitCode ?? null
            }
            if (status !== 'running') {
              agent.finishedAt = Date.now()
            }
          }
        }),

      appendLog: (id, log) =>
        set((state) => {
          const agent = state.agents.find((a) => a.id === id)
          if (agent) {
            agent.logs.push(log)
            // Keep max 2000 log entries per agent
            if (agent.logs.length > 2000) {
              agent.logs.splice(0, agent.logs.length - 2000)
            }
          }
          // Also check history for active log viewing
          const histAgent = state.history.find((a) => a.id === id)
          if (histAgent) {
            histAgent.logs.push(log)
          }
        }),

      removeAgent: (id) =>
        set((state) => {
          state.agents = state.agents.filter((a) => a.id !== id)
        }),

      moveToHistory: (id) =>
        set((state) => {
          const idx = state.agents.findIndex((a) => a.id === id)
          if (idx !== -1) {
            const agent = state.agents[idx]!
            state.history.unshift(agent)
            state.agents.splice(idx, 1)
            // Keep max 50 history entries
            if (state.history.length > 50) {
              state.history.splice(50)
            }
          }
        }),

      clearHistory: () =>
        set((state) => {
          state.history = []
        }),

      setConsoleErrors: (errors) =>
        set((state) => {
          state.consoleErrors = errors
        }),

      setLastScreenshot: (dataURL) =>
        set((state) => {
          state.lastScreenshot = dataURL
        }),

      setDomCheckResults: (results) =>
        set((state) => {
          state.domCheckResults = results
        }),

      setAdmin: (isAdmin) =>
        set((state) => {
          state.isAdmin = isAdmin
        }),

      // updateAgentCost: call this when cost data is parsed from the agent's
      // stream-json output (e.g. from a `result` event with usage fields).
      updateAgentCost: (id, cost) =>
        set((state) => {
          const agent = state.agents.find((a) => a.id === id)
          if (agent) {
            agent.cost = cost
          }
          const histAgent = state.history.find((a) => a.id === id)
          if (histAgent) {
            histAgent.cost = cost
          }
        }),
    })),
    {
      name: 'mirox-agent-center',
      partialize: (state) => ({
        // Persist only the last 100 log lines per history entry to keep
        // localStorage from growing unbounded (50 entries × 2000 logs = 100MB worst case).
        history: state.history.map((agent) => ({
          ...agent,
          logs: agent.logs.slice(-100),
        })),
        isAdmin: state.isAdmin,
      }),
    }
  )
)
