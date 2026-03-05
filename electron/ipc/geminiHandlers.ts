import { ipcMain, BrowserWindow, app } from 'electron'
import * as keytar from 'keytar'
import { IPC_CHANNELS } from './channels'
import { fetchWithTimeout } from '../utils/fetchWithTimeout'
import fs from 'fs'
import path from 'path'

const SERVICE = 'com.mirox.app'
const GEMINI_ACCOUNT = 'gemini-token'

const GEMINI_MODEL_MAP: Record<string, string> = {
  'gemini-pro': 'gemini-2.5-pro-preview-06-05',
  'gemini-flash': 'gemini-2.5-flash-preview-04-17',
  'gemini-flash-2': 'gemini-2.0-flash',
}

const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta'

interface GeminiSession {
  id: string
  controller: AbortController
  model: string
  prompt: string
  startedAt: number
}

const activeSessions = new Map<string, GeminiSession>()

function maskToken(token: string): string {
  if (token.length <= 8) return '****'
  return `${token.slice(0, 4)}...${token.slice(-4)}`
}

export function registerGeminiHandlers(mainWindow: BrowserWindow): void {
  // Get token
  ipcMain.removeHandler(IPC_CHANNELS.GEMINI_GET_TOKEN)
  ipcMain.handle(IPC_CHANNELS.GEMINI_GET_TOKEN, async () => {
    try {
      const token = await keytar.getPassword(SERVICE, GEMINI_ACCOUNT)
      return { ok: true, hasToken: !!token, masked: token ? maskToken(token) : '' }
    } catch {
      return { ok: false, error: 'Failed to read Gemini token' }
    }
  })

  // Set token
  ipcMain.removeHandler(IPC_CHANNELS.GEMINI_SET_TOKEN)
  ipcMain.handle(IPC_CHANNELS.GEMINI_SET_TOKEN, async (_event, token: string) => {
    try {
      if (typeof token !== 'string') {
        return { ok: false, error: 'Invalid token' }
      }
      const trimmed = token.trim()
      if (trimmed.length === 0) {
        await keytar.deletePassword(SERVICE, GEMINI_ACCOUNT)
        return { ok: true }
      }
      await keytar.setPassword(SERVICE, GEMINI_ACCOUNT, trimmed)
      return { ok: true }
    } catch {
      return { ok: false, error: 'Failed to save Gemini token' }
    }
  })

  // Test connection
  ipcMain.removeHandler(IPC_CHANNELS.GEMINI_TEST_CONNECTION)
  ipcMain.handle(IPC_CHANNELS.GEMINI_TEST_CONNECTION, async () => {
    try {
      const token = await keytar.getPassword(SERVICE, GEMINI_ACCOUNT)
      if (!token) return { ok: false, error: 'No Gemini API key configured' }

      const res = await fetchWithTimeout(
        `${BASE_URL}/models?key=${token}`,
        { method: 'GET' },
        10_000
      )

      if (!res.ok) {
        return { ok: false, error: `API returned ${res.status}` }
      }

      const data = (await res.json()) as { models?: Array<{ name: string }> }
      const modelCount = data.models?.length ?? 0
      return { ok: true, modelCount }
    } catch (err) {
      return { ok: false, error: (err as Error).message }
    }
  })

  // Launch Gemini agent
  ipcMain.removeHandler(IPC_CHANNELS.GEMINI_LAUNCH)
  ipcMain.handle(
    IPC_CHANNELS.GEMINI_LAUNCH,
    async (
      _event,
      config: { model: string; prompt: string; contextFiles?: string[] }
    ) => {
      try {
        const token = await keytar.getPassword(SERVICE, GEMINI_ACCOUNT)
        if (!token) return { ok: false, error: 'No Gemini API key configured' }

        if (!config || typeof config !== 'object') {
          return { ok: false, error: 'Invalid config' }
        }
        if (typeof config.prompt !== 'string' || !config.prompt.trim()) {
          return { ok: false, error: 'Prompt is required' }
        }
        if (config.prompt.length > 100_000) {
          return { ok: false, error: 'Prompt too long (max 100,000 chars)' }
        }
        if (activeSessions.size >= 3) {
          return { ok: false, error: 'Max 3 concurrent Gemini sessions' }
        }

        const modelId = GEMINI_MODEL_MAP[config.model] || config.model
        const id = `gemini-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
        const controller = new AbortController()

        const session: GeminiSession = {
          id,
          controller,
          model: config.model,
          prompt: config.prompt,
          startedAt: Date.now(),
        }
        activeSessions.set(id, session)

        // Build context from project files
        let contextText = ''
        const workDir = app.isPackaged
          ? path.dirname(app.getAppPath())
          : process.cwd()

        if (config.contextFiles && Array.isArray(config.contextFiles)) {
          for (const filePath of config.contextFiles.slice(0, 20)) {
            try {
              const fullPath = path.resolve(workDir, filePath)
              // Security: ensure file is within working directory
              if (!fullPath.startsWith(workDir)) continue
              const content = fs.readFileSync(fullPath, 'utf-8').slice(0, 50_000)
              contextText += `\n--- File: ${filePath} ---\n${content}\n`
            } catch {
              // Skip unreadable files
            }
          }
        }

        const systemPrompt =
          'You are a design and frontend specialist for MiroX, an Electron + React + TypeScript + Tailwind CSS desktop app. Focus on visual design, UI/UX, component styling, animations, layout, and aesthetic improvements. The app uses a dark theme (background #0A0A0A, accent #FFD600 yellow), Framer Motion for animations, and Lucide icons.'

        const requestBody = {
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: [
            {
              parts: [
                ...(contextText
                  ? [{ text: `Project context:\n${contextText}` }]
                  : []),
                { text: config.prompt },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 16384,
          },
        }

        // Send initial system log
        sendLog(mainWindow, id, 'system', `Gemini ${modelId} started`)

        // Fire and forget — stream in background
        void (async () => {
          try {
            const res = await fetch(
              `${BASE_URL}/models/${modelId}:streamGenerateContent?alt=sse&key=${token}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
                signal: controller.signal,
              }
            )

            if (!res.ok) {
              const errText = await res.text()
              sendLog(mainWindow, id, 'stderr', `API error ${res.status}: ${errText}`)
              sendExit(mainWindow, id, 'failed', 1)
              activeSessions.delete(id)
              return
            }

            const reader = res.body?.getReader()
            if (!reader) {
              sendLog(mainWindow, id, 'stderr', 'No response stream')
              sendExit(mainWindow, id, 'failed', 1)
              activeSessions.delete(id)
              return
            }

            const decoder = new TextDecoder()
            let buffer = ''
            let done = false

            while (!done) {
              const result = await reader.read()
              done = result.done
              if (done) break
              const value = result.value

              buffer += decoder.decode(value, { stream: true })
              const lines = buffer.split('\n')
              buffer = lines.pop() || ''

              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  const jsonStr = line.slice(6).trim()
                  if (!jsonStr || jsonStr === '[DONE]') continue
                  try {
                    const chunk = JSON.parse(jsonStr) as {
                      candidates?: Array<{
                        content?: { parts?: Array<{ text?: string }> }
                      }>
                    }
                    const text =
                      chunk.candidates?.[0]?.content?.parts?.[0]?.text
                    if (text) {
                      sendLog(mainWindow, id, 'stdout', text)
                    }
                  } catch {
                    // Skip unparseable chunks
                  }
                }
              }
            }

            sendLog(mainWindow, id, 'system', 'Gemini finished')
            sendExit(mainWindow, id, 'completed', 0)
          } catch (err) {
            if ((err as Error).name === 'AbortError') {
              sendLog(mainWindow, id, 'system', 'Gemini stopped by user')
              sendExit(mainWindow, id, 'killed', -1)
            } else {
              sendLog(mainWindow, id, 'stderr', (err as Error).message)
              sendExit(mainWindow, id, 'failed', 1)
            }
          } finally {
            activeSessions.delete(id)
          }
        })()

        return { ok: true, id, model: config.model, startedAt: session.startedAt }
      } catch (err) {
        return { ok: false, error: (err as Error).message }
      }
    }
  )

  // Stop Gemini session
  ipcMain.removeHandler(IPC_CHANNELS.GEMINI_STOP)
  ipcMain.handle(IPC_CHANNELS.GEMINI_STOP, async (_event, id: string) => {
    const session = activeSessions.get(id)
    if (!session) return { ok: false, error: 'Session not found' }
    session.controller.abort()
    activeSessions.delete(id)
    return { ok: true }
  })
}

function sendLog(
  mainWindow: BrowserWindow,
  agentId: string,
  type: 'stdout' | 'stderr' | 'system',
  text: string
): void {
  if (!mainWindow.isDestroyed()) {
    mainWindow.webContents.send(IPC_CHANNELS.GEMINI_LOG, {
      agentId,
      timestamp: Date.now(),
      type,
      text,
    })
  }
}

function sendExit(
  mainWindow: BrowserWindow,
  id: string,
  status: 'completed' | 'failed' | 'killed',
  exitCode: number
): void {
  if (!mainWindow.isDestroyed()) {
    mainWindow.webContents.send(IPC_CHANNELS.GEMINI_EXIT, {
      id,
      status,
      exitCode,
    })
  }
}
