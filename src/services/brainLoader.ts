import type { BrainContext } from '../types/brain'

export async function loadBrainContext(blueprintId: string): Promise<BrainContext | null> {
  if (!blueprintId) return null
  try {
    const result = await window.electronAPI.brain.loadContext(blueprintId)
    return result ?? null
  } catch {
    return null
  }
}
