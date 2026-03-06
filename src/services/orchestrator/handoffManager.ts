import type { Subtask, HandoffBriefing } from './types'
import type { AgentRun } from '@/types/agent'
import { useAgentStore } from '@stores/agentStore'
import { GeminiAssistant } from './geminiAssist'
import { buildHandoffAgentPrompt } from './handoffPrompts'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface WatchedAgent {
  agentId: string
  lineageId: string
  generation: number
  subtask: Subtask
  threshold: number
  contextWindow: number
  unsubscribe: (() => void) | null
}

export interface HandoffResult {
  newAgentId: string
  briefing: HandoffBriefing
  generation: number
}

export type LaunchAgentFn = (
  config: { model: string; prompt: string; allowedTools: string[] },
  meta: {
    teamRunId: string
    teamRole: AgentRun['teamRole']
    teamSkill: string
    timeLimitSeconds: number
    generation: number
    parentAgentId: string
    lineageId: string
  }
) => Promise<string>

export type OnHandoffCallback = (
  oldAgentId: string,
  newAgentId: string,
  lineageId: string,
  generation: number
) => void

// ---------------------------------------------------------------------------
// HandoffManager
// ---------------------------------------------------------------------------

export class HandoffManager {
  private watched = new Map<string, WatchedAgent>()
  private handoffInProgress = new Set<string>()
  private launchAgent: LaunchAgentFn
  private geminiAssistant: GeminiAssistant | null
  private onHandoff: OnHandoffCallback | null = null
  private missionId: string
  private originalPrompt: string

  constructor(opts: {
    launchAgent: LaunchAgentFn
    geminiAssistant: GeminiAssistant | null
    missionId: string
    originalPrompt: string
    onHandoff?: OnHandoffCallback
  }) {
    this.launchAgent = opts.launchAgent
    this.geminiAssistant = opts.geminiAssistant
    this.missionId = opts.missionId
    this.originalPrompt = opts.originalPrompt
    this.onHandoff = opts.onHandoff ?? null
  }

  /** Start watching an agent for context threshold crossings */
  startWatching(
    agentId: string,
    lineageId: string,
    generation: number,
    subtask: Subtask,
    threshold: number,
    contextWindow: number
  ): void {
    if (this.watched.has(agentId)) return

    const api = typeof window !== 'undefined' ? window.electronAPI : null
    let unsubscribe: (() => void) | null = null

    if (api?.agent?.onContextUpdate) {
      unsubscribe = api.agent.onContextUpdate((data) => {
        if (data.agentId === agentId && !this.handoffInProgress.has(agentId)) {
          const totalTokens = data.inputTokens + data.outputTokens
          const usage = totalTokens / contextWindow
          if (usage >= threshold) {
            void this.triggerHandoff(agentId)
          }
        }
      })
    }

    this.watched.set(agentId, {
      agentId,
      lineageId,
      generation,
      subtask,
      threshold,
      contextWindow,
      unsubscribe,
    })
  }

  /** Stop watching an agent */
  stopWatching(agentId: string): void {
    const entry = this.watched.get(agentId)
    if (entry?.unsubscribe) {
      entry.unsubscribe()
    }
    this.watched.delete(agentId)
  }

  /** Stop watching all agents */
  stopAll(): void {
    for (const [id] of this.watched) {
      this.stopWatching(id)
    }
  }

  /** Check if a handoff is currently in progress for an agent */
  isHandingOff(agentId: string): boolean {
    return this.handoffInProgress.has(agentId)
  }

  /** Trigger a handoff for an agent that has crossed the context threshold */
  private async triggerHandoff(agentId: string): Promise<HandoffResult | null> {
    if (this.handoffInProgress.has(agentId)) return null
    this.handoffInProgress.add(agentId)

    const entry = this.watched.get(agentId)
    if (!entry) {
      this.handoffInProgress.delete(agentId)
      return null
    }

    try {
      const result = await this.performHandoff(entry)
      return result
    } catch {
      // Handoff failed — keep original agent running
      this.handoffInProgress.delete(agentId)
      return null
    }
  }

  /** Perform the actual handoff sequence */
  async performHandoff(entry: WatchedAgent): Promise<HandoffResult> {
    const { agentId, lineageId, generation, subtask } = entry

    // 1. Collect recent agent logs
    const agentLogs = this.collectRecentLogs(agentId)

    // 2. Build handoff briefing (via Gemini or fallback)
    let briefing: HandoffBriefing
    if (this.geminiAssistant) {
      briefing = await this.geminiAssistant.buildHandoffBriefing(
        agentId,
        agentLogs,
        subtask,
        lineageId,
        generation
      )
    } else {
      briefing = GeminiAssistant.buildFallbackBriefing(
        agentId,
        agentLogs,
        subtask,
        lineageId,
        generation
      )
    }

    // 3. Build prompt for replacement agent
    const newGeneration = generation + 1
    const handoffPrompt = buildHandoffAgentPrompt(
      briefing,
      subtask,
      this.originalPrompt,
      newGeneration
    )

    // 4. Launch replacement agent
    const newAgentId = await this.launchAgent(
      {
        model: subtask.model,
        prompt: handoffPrompt,
        allowedTools: subtask.tools,
      },
      {
        teamRunId: this.missionId,
        teamRole: 'primary',
        teamSkill: `Builder (${subtask.title.slice(0, 20)}) Gen${newGeneration}`,
        timeLimitSeconds: 3600,
        generation: newGeneration,
        parentAgentId: agentId,
        lineageId,
      }
    )

    briefing.toAgentId = newAgentId

    // 5. Stop watching old agent, start watching new one
    this.stopWatching(agentId)
    this.startWatching(
      newAgentId,
      lineageId,
      newGeneration,
      subtask,
      entry.threshold,
      entry.contextWindow
    )

    // 6. Kill old agent (it has committed its work via the briefing)
    try {
      const api = typeof window !== 'undefined' ? window.electronAPI : null
      await api?.agent.kill(agentId)
    } catch {
      // Best effort
    }

    this.handoffInProgress.delete(agentId)

    // 7. Notify callback
    if (this.onHandoff) {
      this.onHandoff(agentId, newAgentId, lineageId, newGeneration)
    }

    return { newAgentId, briefing, generation: newGeneration }
  }

  /** Collect recent logs for an agent from the agent store */
  private collectRecentLogs(agentId: string): string[] {
    try {
      const agent = useAgentStore.getState().agents.find((a) => a.id === agentId)
      if (agent) {
        return agent.logs.slice(-100).map((l) => `[${l.type}] ${l.text}`)
      }
    } catch {
      // Fallback
    }
    return []
  }

  /** Get the current watched agent map (for swapping agent IDs in the running map) */
  getWatchedAgent(agentId: string): WatchedAgent | undefined {
    return this.watched.get(agentId)
  }

  /** Get a replacement agent ID if a handoff occurred for the given agent */
  getReplacementId(originalAgentId: string): string | null {
    // Check if we have a watched entry that was spawned as a replacement
    for (const [, entry] of this.watched) {
      // If any watched entry has a lineageId matching the original, and different agentId
      const originalEntry = this.watched.get(originalAgentId)
      if (originalEntry && entry.lineageId === originalEntry.lineageId && entry.agentId !== originalAgentId) {
        return entry.agentId
      }
    }
    return null
  }
}
