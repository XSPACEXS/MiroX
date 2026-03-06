import { useMissionStore } from '@stores/missionStore'
import { useChatStore } from '@stores/chatStore'
import type { MissionPhase } from '@/services/orchestrator/types'

function makeId(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  if (seconds < 60) return `${seconds}s`
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${minutes}m ${secs}s`
}

/**
 * Subscribe to missionStore changes and produce chat messages.
 * Returns an unsubscribe function.
 */
export function startMissionAdapter(): () => void {
  let lastPhase: MissionPhase | null = null
  let progressMessageId: string | null = null

  const unsubscribe = useMissionStore.subscribe((state) => {
    const mission = state.mission
    if (!mission) {
      if (lastPhase !== null) {
        lastPhase = null
        progressMessageId = null
        useChatStore.getState().unlockConfig()
      }
      return
    }

    const phase = mission.phase
    if (phase === lastPhase) {
      // Update progress card in-place if in building phase
      if (phase === 'building' && progressMessageId) {
        useChatStore.getState().updateMessage(progressMessageId, {
          content: `Building... ${mission.completedAgentIds.length} agent(s) completed, ${mission.activeAgentIds.length} active`,
          metadata: {
            missionId: mission.id,
            missionPhase: phase,
          },
        })
      }
      return
    }

    lastPhase = phase
    const chatStore = useChatStore.getState()

    switch (phase) {
      case 'planning':
      case 'scouting': {
        chatStore.lockConfig()
        chatStore.addMessage({
          id: makeId(),
          role: 'assistant',
          type: 'thinking',
          mode: 'mission',
          content: phase === 'planning' ? 'Planning mission...' : 'Scouting codebase...',
          timestamp: Date.now(),
        })
        break
      }

      case 'building': {
        if (mission.plan) {
          chatStore.replaceLastThinking({
            id: makeId(),
            role: 'assistant',
            type: 'mission-plan',
            mode: 'mission',
            content: `Plan ready: ${mission.plan.subtasks.length} subtask(s)`,
            timestamp: Date.now(),
            metadata: { plan: mission.plan },
          })
        }

        const progressId = makeId()
        progressMessageId = progressId
        chatStore.addMessage({
          id: progressId,
          role: 'assistant',
          type: 'mission-progress',
          mode: 'mission',
          content: `Building... ${mission.activeAgentIds.length} agent(s) active`,
          timestamp: Date.now(),
          metadata: {
            missionId: mission.id,
            missionPhase: phase,
          },
        })
        break
      }

      case 'testing':
      case 'verifying': {
        chatStore.addMessage({
          id: makeId(),
          role: 'assistant',
          type: 'thinking',
          mode: 'mission',
          content: phase === 'testing' ? 'Running tests...' : 'Verifying changes...',
          timestamp: Date.now(),
        })
        break
      }

      case 'done':
      case 'failed':
      case 'aborted': {
        const status = phase as 'done' | 'failed' | 'aborted'
        const duration = mission.finishedAt
          ? formatDuration(mission.finishedAt - mission.startedAt)
          : 'unknown'

        const fileCount = Object.keys(useMissionStore.getState().fileMap).length

        chatStore.replaceLastThinking({
          id: makeId(),
          role: 'assistant',
          type: 'mission-complete',
          mode: 'mission',
          content: status === 'done'
            ? 'Mission completed successfully!'
            : status === 'aborted'
              ? 'Mission was aborted.'
              : `Mission failed: ${mission.error ?? 'Unknown error'}`,
          timestamp: Date.now(),
          metadata: {
            missionId: mission.id,
            missionSummary: {
              duration,
              filesChanged: fileCount,
              agentCount: mission.completedAgentIds.length,
              qualityScore: mission.geminiAssistReport?.overallScore,
              status,
            },
          },
        })

        chatStore.unlockConfig()
        progressMessageId = null
        break
      }
    }
  })

  return unsubscribe
}
