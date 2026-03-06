import type {
  GeminiAssistConfig,
  GeminiReview,
  GeminiReviewIssue,
  GeminiAssistReport,
  HandoffBriefing,
  MissionPlan,
  MissionState,
  Subtask,
} from './types'
import type { GeminiTextModel } from '@/types/agent'
import { buildHandoffBriefingPrompt, buildGeminiBrainSummaryPrompt } from './handoffPrompts'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getElectronAPI() {
  if (typeof window === 'undefined' || !window.electronAPI) {
    throw new Error('electronAPI not available')
  }
  return window.electronAPI
}

/** Launch a Gemini text session and collect all output, resolving on exit */
async function runGeminiSession(
  model: string,
  prompt: string,
  contextFiles?: string[]
): Promise<{ ok: boolean; output: string; sessionId: string }> {
  const api = getElectronAPI()
  const result = await api.gemini.launch({ model, prompt, contextFiles })

  if (!result.ok || !('id' in result)) {
    return { ok: false, output: result.ok ? '' : result.error, sessionId: '' }
  }

  const sessionId = result.id
  const chunks: string[] = []

  return new Promise((resolve) => {
    const unsubLog = api.gemini.onLog((data) => {
      if (data.agentId === sessionId && (data.type === 'stdout' || data.type === 'system')) {
        chunks.push(data.text)
      }
    })

    const unsubExit = api.gemini.onExit((data) => {
      if (data.id === sessionId) {
        unsubLog()
        unsubExit()
        resolve({
          ok: data.status === 'completed',
          output: chunks.join(''),
          sessionId,
        })
      }
    })
  })
}

/** Try to extract JSON from text (markdown code block or raw) */
function extractJson<T>(text: string): T | null {
  // Try markdown code block first
  const codeBlockMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/)
  const jsonStr = codeBlockMatch?.[1]?.trim() ?? text.trim()

  try {
    return JSON.parse(jsonStr) as T
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// GeminiAssistant
// ---------------------------------------------------------------------------

export class GeminiAssistant {
  private sessionId: string | null = null
  private config: GeminiAssistConfig
  private reviews: GeminiReview[] = []
  private reviewCount = 0
  private sessionLogs: string[] = []

  constructor(config: GeminiAssistConfig) {
    this.config = config
  }

  get brainModel(): GeminiTextModel {
    return this.config.brainModel as GeminiTextModel
  }

  /** Load project context into Gemini brain at mission start */
  async loadProjectContext(): Promise<{ ok: boolean; sessionId?: string }> {
    try {
      const api = getElectronAPI()
      const result = await api.gemini.launch({
        model: this.config.brainModel,
        prompt: 'You are the Gemini Brain for a MiroX mission. You will review code changes, analyze test failures, and provide quality assessments. Acknowledge that you are ready.',
        contextFiles: [
          'package.json',
          'tsconfig.json',
          'src/App.tsx',
          'CLAUDE.md',
        ],
      })

      if (!result.ok || !('id' in result)) {
        return { ok: false }
      }

      this.sessionId = result.id

      // Wait for initial response
      await new Promise<void>((resolve) => {
        const unsub = api.gemini.onExit((data) => {
          if (data.id === this.sessionId) {
            unsub()
            resolve()
          }
        })
        // Also resolve after 30s timeout
        setTimeout(() => { unsub(); resolve() }, 30_000)
      })

      return { ok: true, sessionId: this.sessionId }
    } catch {
      return { ok: false }
    }
  }

  /** Review an agent's completed work */
  async reviewAgentWork(
    agentId: string,
    logs: string[],
    changedFiles: string[]
  ): Promise<GeminiReview> {
    const logSummary = logs.slice(-50).join('\n').slice(-4000)
    const fileList = changedFiles.join(', ')

    const prompt = `Review the following coding agent's work.

AGENT ID: ${agentId}
FILES CHANGED: ${fileList}

AGENT LOGS (last 50 entries):
${logSummary}

Provide your review as JSON:
\`\`\`json
{
  "summary": "Brief summary of what the agent did...",
  "qualityScore": 85,
  "issues": [
    {
      "severity": "warning",
      "file": "src/example.ts",
      "line": 42,
      "message": "Description of issue..."
    }
  ]
}
\`\`\`

Quality score: 0-100 where 90+ is excellent, 70-89 is good, 50-69 needs improvement, below 50 has major issues.
Issue severities: "critical" (must fix), "warning" (should fix), "suggestion" (nice to have).`

    const result = await runGeminiSession(this.config.brainModel, prompt, changedFiles.slice(0, 10))
    this.sessionLogs.push(result.output)

    const parsed = extractJson<{
      summary?: string
      qualityScore?: number
      issues?: Array<{ severity?: string; file?: string; line?: number; message?: string }>
    }>(result.output)

    const review: GeminiReview = {
      agentId,
      summary: parsed?.summary ?? result.output.slice(0, 500),
      qualityScore: parsed?.qualityScore ?? 70,
      issues: (parsed?.issues ?? []).map((i) => ({
        severity: (i.severity as GeminiReviewIssue['severity']) ?? 'suggestion',
        file: i.file ?? 'unknown',
        line: i.line,
        message: i.message ?? '',
      })),
    }

    this.reviews.push(review)
    this.reviewCount++
    return review
  }

  /** Generate a UI mockup using Nano Banana when UI files change */
  async generateMockup(uiFiles: string[]): Promise<string | null> {
    if (!this.config.autoMockup || uiFiles.length === 0) return null

    try {
      const api = getElectronAPI()
      const prompt = `Generate a UI mockup showing the visual design of these React components: ${uiFiles.join(', ')}.
The app uses a dark theme (background #0A0A0A, accent #FFD600 yellow), modern design with rounded corners, subtle gradients, and clean typography.
Show the components as they would appear in the app.`

      const result = await api.gemini.launch({
        model: 'gemini-nano-banana',
        prompt,
        contextFiles: uiFiles.slice(0, 5),
      })

      if (!result.ok || !('id' in result)) return null

      // Wait for media output
      return new Promise((resolve) => {
        let mockupUrl: string | null = null
        const unsub = api.gemini.onLog((data) => {
          if (data.agentId === result.id && data.type === 'media' && data.mediaUrl) {
            mockupUrl = data.mediaUrl
          }
        })

        const unsubExit = api.gemini.onExit((data) => {
          if (data.id === result.id) {
            unsub()
            unsubExit()
            resolve(mockupUrl)
          }
        })
      })
    } catch {
      return null
    }
  }

  /** Analyze test failures and suggest fixes */
  async analyzeTestFailure(
    testOutput: string,
    plan: MissionPlan
  ): Promise<Array<{ subtaskId: string; fix: string }>> {
    const subtaskSummary = plan.subtasks
      .map((s) => `- ${s.id}: ${s.title} (files: ${s.files.join(', ')})`)
      .join('\n')

    const prompt = `Analyze this test failure and determine which subtask(s) need fixes.

TEST OUTPUT:
${testOutput.slice(-3000)}

SUBTASKS:
${subtaskSummary}

Respond with JSON:
\`\`\`json
{
  "fixes": [
    {
      "subtaskId": "subtask-001",
      "fix": "Detailed description of what to fix..."
    }
  ]
}
\`\`\`

Only suggest fixes for subtasks whose files are related to the failure.`

    const result = await runGeminiSession(this.config.brainModel, prompt)
    this.sessionLogs.push(result.output)

    const parsed = extractJson<{ fixes?: Array<{ subtaskId?: string; fix?: string }> }>(result.output)
    return (parsed?.fixes ?? [])
      .filter((f): f is { subtaskId: string; fix: string } => !!f.subtaskId && !!f.fix)
  }

  /** Build a handoff briefing for agent replacement */
  async buildHandoffBriefing(
    agentId: string,
    logs: string[],
    subtask: Subtask,
    lineageId: string,
    generation: number
  ): Promise<HandoffBriefing> {
    const logText = logs.join('\n')
    const prompt = buildHandoffBriefingPrompt(logText, subtask, generation)

    const result = await runGeminiSession(this.config.brainModel, prompt, subtask.files.slice(0, 5))
    this.sessionLogs.push(result.output)

    const parsed = extractJson<{
      completedWork?: string
      remainingWork?: string
      currentFileState?: string
      knownIssues?: string
      contextSummary?: string
    }>(result.output)

    return {
      id: `briefing-${Date.now()}`,
      fromAgentId: agentId,
      toAgentId: null,
      lineageId,
      generation: generation + 1,
      subtaskId: subtask.id,
      completedWork: parsed?.completedWork ?? 'Unable to determine completed work.',
      remainingWork: parsed?.remainingWork ?? subtask.description,
      currentFileState: parsed?.currentFileState ?? 'Unknown.',
      knownIssues: parsed?.knownIssues ?? 'None identified.',
      contextSummary: parsed?.contextSummary ?? 'Continue with the subtask description.',
    }
  }

  /** Generate the final quality report at mission end */
  async generateFinalReport(mission: MissionState): Promise<GeminiAssistReport> {
    const reviewSummaries = this.reviews
      .map((r) => `- Agent ${r.agentId}: score=${r.qualityScore}, issues=${r.issues.length}`)
      .join('\n')

    const prompt = `Generate a final quality report for this completed mission.

MISSION ID: ${mission.id}
PHASE: ${mission.phase}
DURATION: ${mission.finishedAt ? Math.round((mission.finishedAt - mission.startedAt) / 60000) : '?'} minutes
AGENTS USED: ${mission.completedAgentIds.length}
HANDOFFS: ${mission.handoffCount}

REVIEWS PERFORMED:
${reviewSummaries || 'No reviews performed.'}

Provide an overall assessment as JSON:
\`\`\`json
{
  "overallScore": 85,
  "summary": "Overall quality assessment..."
}
\`\`\``

    const result = await runGeminiSession(this.config.brainModel, prompt)
    const parsed = extractJson<{ overallScore?: number; summary?: string }>(result.output)

    const allMockups = this.reviews
      .map((r) => r.mockupUrl)
      .filter((url): url is string => !!url)

    return {
      overallScore: parsed?.overallScore ?? 70,
      reviews: this.reviews,
      filesChanged: new Set(this.reviews.flatMap((r) => r.issues.map((i) => i.file))).size,
      totalIssues: this.reviews.reduce((sum, r) => sum + r.issues.length, 0),
      mockups: allMockups,
      summary: parsed?.summary ?? 'Mission completed.',
    }
  }

  /** Build a fallback handoff briefing without Gemini (from disk logs) */
  static buildFallbackBriefing(
    agentId: string,
    logs: string[],
    subtask: Subtask,
    lineageId: string,
    generation: number
  ): HandoffBriefing {
    const recentLogs = logs.slice(-30).join('\n')

    // Extract file operations from logs
    const filesRead = new Set<string>()
    const filesWritten = new Set<string>()
    for (const log of logs) {
      const readMatch = log.match(/(?:Read|Reading)\s+[`"]?([^\s`"]+)[`"]?/i)
      if (readMatch?.[1]) filesRead.add(readMatch[1])
      const writeMatch = log.match(/(?:Write|Edit|Creating)\s+[`"]?([^\s`"]+)[`"]?/i)
      if (writeMatch?.[1]) filesWritten.add(writeMatch[1])
    }

    return {
      id: `briefing-${Date.now()}`,
      fromAgentId: agentId,
      toAgentId: null,
      lineageId,
      generation: generation + 1,
      subtaskId: subtask.id,
      completedWork: `Read ${filesRead.size} files, modified ${filesWritten.size} files.`,
      remainingWork: subtask.description,
      currentFileState: `Files modified: ${[...filesWritten].join(', ') || 'none'}`,
      knownIssues: 'Handoff generated without Gemini review — verify all changes.',
      contextSummary: `Recent activity:\n${recentLogs.slice(-2000)}`,
    }
  }

  /** Generate a summary for self-handoff (Gemini brain replacement) */
  async generateSelfHandoffSummary(): Promise<string> {
    const prompt = buildGeminiBrainSummaryPrompt(
      this.sessionLogs.join('\n'),
      this.reviewCount
    )

    const result = await runGeminiSession(this.config.brainModel, prompt)
    return result.output
  }
}
