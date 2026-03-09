import { useEffect, useRef } from 'react'
import { useAgentStore } from '@stores/agentStore'
import { useMissionStore } from '@stores/missionStore'

/**
 * Subscribes to Electron IPC events for agent/gemini logs, exits, and context updates.
 * Extracted from AgentCenter.tsx for reuse with the ChatPanel.
 *
 * Uses refs for store callbacks so the IPC listeners only register once
 * on mount, avoiding double-registration when Zustand selectors change.
 */
export function useChatIPCBridge(): void {
  const appendLog = useAgentStore((s) => s.appendLog)
  const updateAgentStatus = useAgentStore((s) => s.updateAgentStatus)
  const moveToHistory = useAgentStore((s) => s.moveToHistory)
  const updateContextUsage = useAgentStore((s) => s.updateContextUsage)

  // Keep callbacks in a ref so the effect doesn't re-run when they change
  const cbRef = useRef({ appendLog, updateAgentStatus, moveToHistory, updateContextUsage })
  useEffect(() => {
    cbRef.current = { appendLog, updateAgentStatus, moveToHistory, updateContextUsage }
  })

  const pendingTimeouts = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const api = window.electronAPI
    if (!api?.agent || !api?.gemini) return

    const unsubLog = api.agent.onLog((data) => {
      cbRef.current.appendLog(data.agentId, {
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
      cbRef.current.updateAgentStatus(data.id, data.status, data.exitCode)
      const tid = setTimeout(() => {
        cbRef.current.moveToHistory(data.id)
        pendingTimeouts.current = pendingTimeouts.current.filter((t) => t !== tid)
      }, 2000)
      pendingTimeouts.current.push(tid)
    })

    const unsubGeminiLog = api.gemini.onLog((data) => {
      cbRef.current.appendLog(data.agentId, {
        timestamp: data.timestamp,
        type: data.type,
        text: data.text,
        mediaUrl: data.mediaUrl,
        mediaMimeType: data.mediaMimeType,
      })
    })

    const unsubGeminiExit = api.gemini.onExit((data) => {
      cbRef.current.updateAgentStatus(data.id, data.status, data.exitCode)
      const tid = setTimeout(() => {
        cbRef.current.moveToHistory(data.id)
        pendingTimeouts.current = pendingTimeouts.current.filter((t) => t !== tid)
      }, 2000)
      pendingTimeouts.current.push(tid)
    })

    const unsubContextUpdate = api.agent.onContextUpdate((data) => {
      cbRef.current.updateContextUsage(data.agentId, {
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
  }, []) // eslint-disable-line react-hooks/exhaustive-deps -- callbacks accessed via ref
}
