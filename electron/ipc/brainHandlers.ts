import { app, ipcMain } from 'electron'
import { spawn } from 'child_process'
import path from 'path'
import fs from 'fs'
import { IPC_CHANNELS } from './channels'

interface BrainKnowledge {
  designPhilosophy: string
  layoutPatterns: string
  visualGuide: string
  contentGuide: string
  buildProcess: string
  examplesReference: string
  variations: string
}

interface BrainContext {
  blueprintId: string
  category: string
  blueprint: string
  knowledge: BrainKnowledge
}

interface GenerateBoardParams {
  template: { name: string; brainBlueprint?: string }
  fieldValues: Record<string, string>
  boardName: string
  brainContext: { blueprint: string; knowledge: BrainKnowledge }
}

interface BoardSection {
  type: 'shape' | 'sticky_note' | 'frame' | 'text' | 'card'
  content: string
  x: number
  y: number
  width: number
  height: number
  color: string
  style: Record<string, unknown>
}

interface BoardManifest {
  boardName: string
  sections: BoardSection[]
}

function getBrainPath(): string {
  if (app.isPackaged) return path.join(process.resourcesPath, 'brain')
  return path.join(app.getAppPath(), 'brain')
}

function readFileGraceful(filePath: string): string | null {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return null
  }
}

const KNOWLEDGE_FILES: Array<[keyof BrainKnowledge, string]> = [
  ['designPhilosophy', 'design-philosophy.md'],
  ['layoutPatterns', 'layout-patterns.md'],
  ['visualGuide', 'visual-guide.md'],
  ['contentGuide', 'content-guide.md'],
  ['buildProcess', 'build-process.md'],
  ['examplesReference', 'examples-reference.md'],
  ['variations', 'variations.md'],
]

export function registerBrainHandlers(): void {
  // Load brain context for a blueprint
  ipcMain.handle(
    IPC_CHANNELS.BRAIN_LOAD_CONTEXT,
    async (_event, blueprintId: string): Promise<BrainContext | null> => {
      try {
        const brainDir = getBrainPath()
        const registryPath = path.join(brainDir, 'registry.json')
        const registryRaw = readFileGraceful(registryPath)
        if (!registryRaw) return null

        const registry: Record<string, { category: string; file: string }> = JSON.parse(registryRaw)
        const entry = registry[blueprintId]
        if (!entry) return null

        // Read blueprint file
        const blueprintPath = path.join(
          brainDir,
          'categories',
          entry.category,
          'blueprints',
          entry.file + '.md'
        )
        const blueprint = readFileGraceful(blueprintPath)
        if (!blueprint) return null

        // Read knowledge files
        const knowledgeDir = path.join(brainDir, 'categories', entry.category, 'knowledge')
        const knowledge = {} as BrainKnowledge
        for (const [key, filename] of KNOWLEDGE_FILES) {
          knowledge[key] = readFileGraceful(path.join(knowledgeDir, filename)) || ''
        }

        return { blueprintId, category: entry.category, blueprint, knowledge }
      } catch {
        return null
      }
    }
  )

  // Generate board via Claude CLI
  ipcMain.handle(
    IPC_CHANNELS.BRAIN_GENERATE_BOARD,
    async (_event, params: GenerateBoardParams): Promise<BoardManifest> => {
      const { template, fieldValues, boardName, brainContext } = params

      const prompt = `You are a Miro board architect. Build a professional, content-rich Miro board.

USER INPUTS:
Board Name: ${boardName}
Template: ${template.name}
${Object.entries(fieldValues).map(([k, v]) => `${k}: ${v}`).join('\n')}

BLUEPRINT:
${brainContext.blueprint}

DOMAIN KNOWLEDGE — Design Philosophy:
${brainContext.knowledge.designPhilosophy}

DOMAIN KNOWLEDGE — Layout Patterns:
${brainContext.knowledge.layoutPatterns}

DOMAIN KNOWLEDGE — Visual Guide:
${brainContext.knowledge.visualGuide}

DOMAIN KNOWLEDGE — Content Guide:
${brainContext.knowledge.contentGuide}

Return ONLY valid JSON (no markdown fencing, no explanation):
{"boardName":"string","sections":[{"type":"shape|sticky_note|frame|text|card","content":"string","x":0,"y":0,"width":800,"height":400,"color":"#hexcolor","style":{}}]}

Rules:
- Use PIXEL-PRECISE positions from the blueprint layout section
- Use the EXACT color palette from the blueprint color scheme
- Replace ALL example content with the user's actual inputs
- Generate 30-60 elements for a comprehensive board
- Every sticky note must have real, specific content (not placeholders)
- Include frames, shapes, sticky notes, and text elements
- Follow the spatial layout exactly as described in the blueprint`

      return new Promise<BoardManifest>((resolve, reject) => {
        // Build safe environment (same pattern as agentHandlers.ts)
        const safeEnv: Record<string, string> = {}
        const allowedEnvKeys = [
          'PATH', 'HOME', 'USER', 'SHELL', 'LANG', 'TERM', 'TMPDIR',
          'XDG_RUNTIME_DIR', 'NODE_ENV',
        ]
        for (const key of allowedEnvKeys) {
          if (process.env[key]) {
            safeEnv[key] = process.env[key]!
          }
        }
        const extraPaths = [
          `${process.env.HOME}/.local/bin`,
          '/usr/local/bin',
          '/opt/homebrew/bin',
          `${process.env.HOME}/.nvm/versions/node/current/bin`,
          `${process.env.HOME}/.npm-global/bin`,
        ]
        const currentPath = safeEnv.PATH || '/usr/bin:/bin'
        safeEnv.PATH = [...extraPaths, currentPath].join(':')
        if (process.env.ANTHROPIC_API_KEY) {
          safeEnv.ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
        }

        const args = [
          '-p',
          prompt,
          '--model',
          'claude-sonnet-4-6',
          '--output-format',
          'json',
        ]

        const child = spawn('claude', args, {
          env: safeEnv,
          stdio: ['ignore', 'pipe', 'pipe'],
        })

        let stdout = ''
        let stderr = ''

        child.stdout?.on('data', (chunk: Buffer) => {
          stdout += chunk.toString()
        })

        child.stderr?.on('data', (chunk: Buffer) => {
          stderr += chunk.toString()
        })

        // 120 second timeout
        const timeout = setTimeout(() => {
          child.kill('SIGTERM')
          setTimeout(() => {
            try { child.kill('SIGKILL') } catch { /* already dead */ }
          }, 5_000)
          reject(new Error('Board generation timed out after 120 seconds'))
        }, 120_000)

        child.on('close', (code) => {
          clearTimeout(timeout)
          if (code !== 0) {
            reject(new Error(`Claude CLI exited with code ${code}: ${stderr.slice(0, 500)}`))
            return
          }

          try {
            // Claude CLI --output-format json wraps the result in an envelope
            const envelope = JSON.parse(stdout)
            const manifest: BoardManifest = JSON.parse(envelope.result)
            resolve(manifest)
          } catch (parseErr) {
            reject(
              new Error(
                `Failed to parse board manifest: ${parseErr instanceof Error ? parseErr.message : String(parseErr)}`
              )
            )
          }
        })

        child.on('error', (err) => {
          clearTimeout(timeout)
          const isEnoent = (err as NodeJS.ErrnoException).code === 'ENOENT'
          if (isEnoent) {
            reject(new Error('Claude CLI not found. Install it from https://claude.ai/download'))
          } else {
            reject(new Error(`Failed to spawn Claude CLI: ${err.message}`))
          }
        })
      })
    }
  )
}
