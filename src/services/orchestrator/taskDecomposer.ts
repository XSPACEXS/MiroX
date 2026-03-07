import type { Subtask, MissionPlan } from './types'
import { validateFileOwnership, mergeConflictingSubtasks } from './scopeGuard'
import { buildPlanPrompt } from './prompts'

const VALID_MODELS = new Set(['opus', 'sonnet', 'haiku'])
const VALID_TOOLS = new Set(['Read', 'Edit', 'Write', 'Glob', 'Grep', 'Bash'])

/** Extract JSON from a markdown code block in agent output */
export function extractJsonFromLogs(logs: string): unknown | null {
  // The result event sends the complete response prefixed with \n__RESULT__\n
  // If present, prefer extracting from that (it's the full, uncorrupted response)
  const resultMarker = '\n__RESULT__\n'
  const resultIdx = logs.lastIndexOf(resultMarker)
  const searchText = resultIdx !== -1 ? logs.slice(resultIdx + resultMarker.length) : logs

  // Strategy 1: ```json ... ``` block
  const jsonBlockMatch = searchText.match(/```json\s*\n?([\s\S]*?)```/)
  if (jsonBlockMatch?.[1]) {
    try {
      return JSON.parse(jsonBlockMatch[1].trim())
    } catch {
      // fall through
    }
  }

  // Strategy 2: balanced JSON object containing "subtasks"
  const subtasksIdx = searchText.indexOf('"subtasks"')
  if (subtasksIdx !== -1) {
    const openIdx = searchText.lastIndexOf('{', subtasksIdx)
    if (openIdx !== -1) {
      let depth = 0
      for (let i = openIdx; i < searchText.length; i++) {
        if (searchText[i] === '{') depth++
        else if (searchText[i] === '}') {
          depth--
          if (depth === 0) {
            try {
              return JSON.parse(searchText.slice(openIdx, i + 1))
            } catch {
              break
            }
          }
        }
      }
    }
  }

  // Strategy 3: try the entire text as raw JSON
  try {
    const parsed = JSON.parse(searchText.trim())
    if (parsed && typeof parsed === 'object') return parsed
  } catch {
    // fall through
  }

  // Strategy 4: if we had a result marker, also try the full logs (deltas)
  if (resultIdx !== -1) {
    const deltaText = logs.slice(0, resultIdx)
    const deltaMatch = deltaText.match(/```json\s*\n?([\s\S]*?)```/)
    if (deltaMatch?.[1]) {
      try {
        return JSON.parse(deltaMatch[1].trim())
      } catch {
        // fall through
      }
    }
  }

  return null
}

/** Validate parsed subtask data */
function validateSubtask(raw: Record<string, unknown>, index: number): Subtask | null {
  const id = typeof raw.id === 'string' ? raw.id : `subtask-${String(index + 1).padStart(3, '0')}`
  const title = typeof raw.title === 'string' ? raw.title : null
  const description = typeof raw.description === 'string' ? raw.description : null

  if (!title || !description) return null

  const files = Array.isArray(raw.files)
    ? raw.files.filter((f): f is string => typeof f === 'string')
    : []

  const dependencies = Array.isArray(raw.dependencies)
    ? raw.dependencies.filter((d): d is string => typeof d === 'string')
    : []

  const model = typeof raw.model === 'string' && VALID_MODELS.has(raw.model)
    ? (raw.model as Subtask['model'])
    : 'sonnet'

  const tools = Array.isArray(raw.tools)
    ? raw.tools.filter((t): t is string => typeof t === 'string' && VALID_TOOLS.has(t))
    : ['Read', 'Edit', 'Glob', 'Grep', 'Bash']

  return {
    id,
    title,
    description,
    files,
    dependencies,
    model,
    tools,
    status: 'pending',
    agentId: null,
    retryCount: 0,
  }
}

/** Parse and validate the plan output from the Haiku agent */
export function parsePlanOutput(logs: string, originalPrompt: string): MissionPlan | { error: string } {
  const parsed = extractJsonFromLogs(logs)
  if (!parsed || typeof parsed !== 'object') {
    return { error: 'Failed to parse JSON from planning agent output' }
  }

  const data = parsed as Record<string, unknown>
  if (!Array.isArray(data.subtasks) || data.subtasks.length === 0) {
    return { error: 'Planning agent returned no subtasks' }
  }

  const subtasks: Subtask[] = []
  for (let i = 0; i < data.subtasks.length; i++) {
    const raw = data.subtasks[i]
    if (!raw || typeof raw !== 'object') continue
    const validated = validateSubtask(raw as Record<string, unknown>, i)
    if (validated) subtasks.push(validated)
  }

  if (subtasks.length === 0) {
    return { error: 'No valid subtasks parsed from planning output' }
  }

  // Check for file ownership conflicts and auto-merge if needed
  const { valid, conflicts } = validateFileOwnership(subtasks)
  const finalSubtasks = valid ? subtasks : mergeConflictingSubtasks(subtasks, conflicts)

  // Build file ownership map
  const fileOwnership: Record<string, string> = {}
  for (const subtask of finalSubtasks) {
    for (const file of subtask.files) {
      fileOwnership[file.replace(/^\.\//, '')] = subtask.id
    }
  }

  return {
    originalPrompt,
    scoutReport: null,
    subtasks: finalSubtasks,
    fileOwnership,
    createdAt: Date.now(),
  }
}

/** Build the prompt to send to the Haiku planning agent */
export function getPlanAgentPrompt(userPrompt: string, scoutReport: string | null): string {
  return buildPlanPrompt(userPrompt, scoutReport)
}
