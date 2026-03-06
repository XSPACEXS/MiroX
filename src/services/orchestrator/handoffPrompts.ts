import type { Subtask } from './types'

/** Prompt for the Gemini brain to generate a handoff briefing */
export function buildHandoffBriefingPrompt(
  agentLogs: string,
  subtask: Subtask,
  generation: number
): string {
  return `You are generating a handoff briefing for a coding agent that is being replaced due to context limits.

The original agent was working on the following subtask and has reached ${generation > 0 ? `generation ${generation}` : 'its initial run'}.

SUBTASK: ${subtask.title}
DESCRIPTION: ${subtask.description}
FILES IN SCOPE: ${subtask.files.join(', ')}

AGENT LOGS (recent work):
${agentLogs.slice(-8000)}

Generate a structured handoff briefing in JSON format:
\`\`\`json
{
  "completedWork": "What the agent accomplished so far...",
  "remainingWork": "What still needs to be done...",
  "currentFileState": "Summary of current file states and changes made...",
  "knownIssues": "Any known problems, errors, or blockers...",
  "contextSummary": "Key context the new agent needs to continue effectively..."
}
\`\`\`

Be concise but thorough. The new agent will ONLY have this briefing to continue the work.`
}

/** Prompt for the replacement agent that receives a handoff */
export function buildHandoffAgentPrompt(
  briefing: {
    completedWork: string
    remainingWork: string
    currentFileState: string
    knownIssues: string
    contextSummary: string
  },
  subtask: Subtask,
  originalPrompt: string,
  generation: number
): string {
  return `You are a replacement coding agent (generation ${generation}) continuing work from a previous agent that reached its context limit.

OVERALL MISSION: ${originalPrompt}

YOUR SUBTASK: ${subtask.title}
FILES IN SCOPE: ${subtask.files.join(', ')}

HANDOFF BRIEFING FROM PREVIOUS AGENT:
- Completed: ${briefing.completedWork}
- Remaining: ${briefing.remainingWork}
- File State: ${briefing.currentFileState}
- Known Issues: ${briefing.knownIssues}
- Key Context: ${briefing.contextSummary}

INSTRUCTIONS:
${subtask.description}

REQUIREMENTS:
- Continue from where the previous agent left off
- Read the files in scope to understand current state before making changes
- Do NOT redo work that was already completed
- Focus on the remaining work described above
- Follow existing code patterns and conventions
- Run \`npm run typecheck\` after changes to verify
- If you encounter issues outside your file scope, note them as OUT_OF_SCOPE comments`
}

/** Prompt for the Gemini brain to generate a self-handoff summary */
export function buildGeminiBrainSummaryPrompt(
  sessionLogs: string,
  reviewCount: number
): string {
  return `You are a Gemini Brain AI that has been reviewing code changes during a mission.
You are approaching your context limit and need to create a summary for your replacement.

You have completed ${reviewCount} code reviews during this session.

Your session logs:
${sessionLogs.slice(-15000)}

Generate a concise summary that captures:
1. Key decisions made during reviews
2. Patterns and issues found across agents
3. Overall mission progress and quality assessment
4. Any ongoing concerns the replacement brain should watch for

Keep the summary under 3000 words. Focus on actionable information.`
}
