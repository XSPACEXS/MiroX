import type { TemplateDefinition, BoardSection, BoardManifest } from '../templates/types'
import { generateBoardManifest } from './templateEngine'
import { loadBrainContext } from './brainLoader'
import { generateBoardWithBrain } from './boardGenerator'
import { logger } from '../utils/logger'

export type ProgressCallback = (step: string, progress: number) => void

export interface BuildResult {
  boardId: string
  boardUrl: string
  boardName: string
  failedSections: number
  sectionErrors: string[]
}

export async function buildBoard(
  template: TemplateDefinition,
  fieldValues: Record<string, string>,
  boardName: string,
  onProgress?: ProgressCallback,
  boardDescription?: string
): Promise<BuildResult> {
  const api = window.electronAPI

  onProgress?.('Creating board workspace...', 5)

  // Create the board
  const board = await api.miro.createBoard(boardName, boardDescription || `Created with MiroX using ${template.name} template`)
  const boardId = board.id
  const boardUrl = board.viewLink

  onProgress?.('Board created - adding content...', 15)

  // Generate board manifest (use Brain if context available, else static)
  let manifest: BoardManifest
  const brainContext = await loadBrainContext(template.blueprintId)
  if (brainContext) {
    onProgress?.('Brain context loaded - generating intelligent layout...', 18)
    manifest = await generateBoardWithBrain(template, fieldValues, boardName, brainContext, (p) => {
      onProgress?.('Generating with Brain...', p)
    })
  } else {
    manifest = generateBoardManifest(template, fieldValues, boardName)
  }

  const totalSections = manifest.sections.length

  // Create each section
  let failedSections = 0
  const sectionErrors: string[] = []

  for (let i = 0; i < manifest.sections.length; i++) {
    const section = manifest.sections[i]!
    const progress = 15 + ((i / totalSections) * 70)

    onProgress?.(`Building ${template.sections[Math.min(i, template.sections.length - 1)]?.name || 'section'}...`, progress)

    try {
      await createBoardSection(boardId, section, api)
      await delay(200)
    } catch (err) {
      failedSections++
      const msg = err instanceof Error ? err.message : String(err)
      sectionErrors.push(`Section ${i}: ${msg}`)
      logger.error(`Error creating section ${i}:`, err)
    }
  }

  onProgress?.('Cleaning up...', 88)

  try {
    await api.miro.deleteGhosts(boardId)
  } catch {
    // Ignore ghost cleanup errors
  }

  onProgress?.('Board ready!', 100)

  return { boardId, boardUrl, boardName, failedSections, sectionErrors }
}

async function createBoardSection(boardId: string, section: BoardSection, api: typeof window.electronAPI) {
  switch (section.type) {
    case 'shape':
      await api.miro.createShape(boardId, {
        content: section.content,
        shape: 'round_rectangle',
        x: section.x,
        y: section.y,
        width: section.width || 800,
        height: section.height || 400,
        style: section.style,
      })
      break

    case 'sticky_note':
      await api.miro.createStickyNote(boardId, {
        content: section.content,
        x: section.x,
        y: section.y,
        style: { fillColor: section.color || 'light_yellow' },
      })
      break

    case 'card':
      await api.miro.createText(boardId, {
        content: section.content,
        x: section.x,
        y: section.y,
        width: section.width || 600,
        style: { color: '#FFFFFF', fontSize: '14' },
      })
      break

    case 'frame':
      await api.miro.createFrame(boardId, {
        title: section.content,
        x: section.x,
        y: section.y,
        width: section.width || 2400,
        height: section.height || 1200,
        style: { fillColor: section.color || '#1a1a1a' },
      })
      break

    case 'text':
      await api.miro.createText(boardId, {
        content: section.content,
        x: section.x,
        y: section.y,
        width: section.width || 600,
        style: { color: section.style?.color || '#FFFFFF', fontSize: String(section.style?.fontSize || 14) },
      })
      break

    default:
      await api.miro.createShape(boardId, {
        content: section.content,
        shape: 'round_rectangle',
        x: section.x,
        y: section.y,
        width: 400,
        height: 200,
      })
  }
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
