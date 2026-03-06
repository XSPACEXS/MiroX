import type { Subtask } from './types'

export interface FileConflict {
  file: string
  claimants: string[]
}

/** Detect files claimed by more than one subtask */
export function validateFileOwnership(subtasks: Subtask[]): {
  valid: boolean
  conflicts: FileConflict[]
} {
  const fileClaims = new Map<string, string[]>()

  for (const subtask of subtasks) {
    for (const file of subtask.files) {
      const normalized = file.replace(/^\.\//, '')
      const existing = fileClaims.get(normalized) ?? []
      existing.push(subtask.id)
      fileClaims.set(normalized, existing)
    }
  }

  const conflicts: FileConflict[] = []
  for (const [file, claimants] of fileClaims) {
    if (claimants.length > 1) {
      conflicts.push({ file, claimants })
    }
  }

  return { valid: conflicts.length === 0, conflicts }
}

/** Auto-merge subtasks that share files to resolve conflicts */
export function mergeConflictingSubtasks(
  subtasks: Subtask[],
  conflicts: FileConflict[]
): Subtask[] {
  // Build a union-find of subtask IDs that need merging
  const mergeGroups = new Map<string, Set<string>>()

  for (const conflict of conflicts) {
    const groupKey = conflict.claimants[0]!
    const existing = mergeGroups.get(groupKey) ?? new Set([groupKey])
    for (const id of conflict.claimants) {
      existing.add(id)
      // If this ID already belongs to another group, merge the groups
      for (const [key, group] of mergeGroups) {
        if (group.has(id) && key !== groupKey) {
          for (const member of group) existing.add(member)
          mergeGroups.delete(key)
        }
      }
    }
    mergeGroups.set(groupKey, existing)
  }

  const merged: Subtask[] = []
  const consumed = new Set<string>()

  for (const subtask of subtasks) {
    if (consumed.has(subtask.id)) continue

    // Find if this subtask is part of a merge group
    let group: Set<string> | null = null
    for (const [, g] of mergeGroups) {
      if (g.has(subtask.id)) {
        group = g
        break
      }
    }

    if (!group || group.size <= 1) {
      merged.push(subtask)
      continue
    }

    // Merge all subtasks in the group
    const members = subtasks.filter((s) => group!.has(s.id))
    const allFiles = [...new Set(members.flatMap((m) => m.files))]
    const allTools = [...new Set(members.flatMap((m) => m.tools))]
    const allDeps = [...new Set(members.flatMap((m) => m.dependencies))].filter(
      (d) => !group!.has(d)
    )

    // Pick the highest-tier model
    const MODEL_RANK = { opus: 3, sonnet: 2, haiku: 1 } as const
    const bestModel = members.reduce((best, m) =>
      MODEL_RANK[m.model] > MODEL_RANK[best.model] ? m : best
    ).model

    merged.push({
      id: subtask.id,
      title: members.map((m) => m.title).join(' + '),
      description: members.map((m) => `## ${m.title}\n${m.description}`).join('\n\n'),
      files: allFiles,
      dependencies: allDeps,
      model: bestModel,
      tools: allTools,
      status: 'pending',
      agentId: null,
      retryCount: 0,
    })

    for (const m of members) consumed.add(m.id)
  }

  return merged
}

/** Prepend scope guard instructions to a build agent's prompt */
export function injectScopeGuard(subtask: Subtask, basePrompt: string): string {
  const fileList = subtask.files.map((f) => `  - ${f}`).join('\n')

  return `=== SCOPE GUARD — MANDATORY ===
You are working on subtask: "${subtask.title}"
You may ONLY modify these files:
${fileList}

DO NOT create, write, or edit any files outside this list.
If you discover a needed change outside your scope, note it as:
  OUT_OF_SCOPE: <filepath> — <reason>
but do NOT modify it.
=== END SCOPE GUARD ===

${basePrompt}`
}
