import type { TemplateDefinition } from '../templates/types'
import type { BrainContext } from '../types/brain'
import type { BoardManifest } from '../templates/types'

type ProgressCallback = (progress: number) => void

export async function generateBoardWithBrain(
  template: TemplateDefinition,
  fieldValues: Record<string, string>,
  boardName: string,
  brainContext: BrainContext,
  onProgress?: ProgressCallback
): Promise<BoardManifest> {
  onProgress?.(20)
  const result = await window.electronAPI.brain.generateBoard({
    template: { name: template.name, brainBlueprint: template.blueprintId },
    fieldValues,
    boardName,
    brainContext,
  })
  onProgress?.(80)
  if (!result || !Array.isArray((result as BoardManifest).sections)) {
    throw new Error('Brain generation returned invalid board manifest')
  }
  return result as BoardManifest
}
