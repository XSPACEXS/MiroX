import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import type { ChatMode, ChatMessage, ChatConfig } from '@/types/chat'

interface ChatStoreState {
  mode: ChatMode
  messages: ChatMessage[]
  config: ChatConfig
  isStreaming: boolean
  streamingAgentId: string | null
  configExpanded: boolean
  pendingInput: string

  setMode: (mode: ChatMode) => void
  addMessage: (msg: ChatMessage) => void
  updateMessage: (id: string, partial: Partial<ChatMessage>) => void
  replaceLastThinking: (msg: ChatMessage) => void
  setStreaming: (active: boolean, agentId?: string | null) => void
  updateConfig: (partial: Partial<ChatConfig>) => void
  lockConfig: () => void
  unlockConfig: () => void
  toggleConfigExpanded: () => void
  clearMessages: () => void
  setPendingInput: (text: string) => void
}

export const useChatStore = create<ChatStoreState>()(
  immer((set) => ({
    mode: 'chat' as ChatMode,
    messages: [],
    config: {
      primaryModel: 'sonnet',
      geminiEnabled: false,
      geminiModel: 'gemini-flash-2',
      timeLimitSeconds: 3600,
      autoMockup: false,
      handoffEnabled: true,
      projectDir: null,
      isLocked: false,
    },
    isStreaming: false,
    streamingAgentId: null,
    configExpanded: false,
    pendingInput: '',

    setMode: (mode) =>
      set((state) => {
        state.mode = mode
      }),

    addMessage: (msg) =>
      set((state) => {
        state.messages.push(msg)
      }),

    updateMessage: (id, partial) =>
      set((state) => {
        const idx = state.messages.findIndex((m) => m.id === id)
        if (idx !== -1) {
          Object.assign(state.messages[idx]!, partial)
        }
      }),

    replaceLastThinking: (msg) =>
      set((state) => {
        let idx = -1
        for (let i = state.messages.length - 1; i >= 0; i--) {
          if (state.messages[i]!.type === 'thinking') { idx = i; break }
        }
        if (idx !== -1) {
          state.messages[idx] = msg
        } else {
          state.messages.push(msg)
        }
      }),

    setStreaming: (active, agentId) =>
      set((state) => {
        state.isStreaming = active
        state.streamingAgentId = agentId ?? null
      }),

    updateConfig: (partial) =>
      set((state) => {
        Object.assign(state.config, partial)
      }),

    lockConfig: () =>
      set((state) => {
        state.config.isLocked = true
      }),

    unlockConfig: () =>
      set((state) => {
        state.config.isLocked = false
      }),

    toggleConfigExpanded: () =>
      set((state) => {
        state.configExpanded = !state.configExpanded
      }),

    clearMessages: () =>
      set((state) => {
        state.messages = []
      }),

    setPendingInput: (text) =>
      set((state) => {
        state.pendingInput = text
      }),
  }))
)
