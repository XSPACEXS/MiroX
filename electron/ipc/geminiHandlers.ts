import { ipcMain, BrowserWindow } from 'electron'
import * as keytar from 'keytar'
import { IPC_CHANNELS } from './channels'
import { fetchWithTimeout } from '../utils/fetchWithTimeout'
import fs from 'fs'
import path from 'path'
import { getWorkingDir } from './agentHandlers'

const SERVICE = 'com.mirox.app'
const GEMINI_ACCOUNT = 'gemini-token'

const GEMINI_MODEL_MAP: Record<string, string> = {
  'gemini-pro': 'gemini-2.5-pro-preview-06-05',
  'gemini-flash': 'gemini-2.5-flash-preview-04-17',
  'gemini-flash-2': 'gemini-2.0-flash',
  'gemini-flash-lite': 'gemini-2.0-flash-lite',
  'gemini-nano-banana': 'gemini-3.1-flash-image-preview',
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
        const workDir = getWorkingDir()

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

        // Nano Banana: non-streaming with image output
        if (config.model === 'gemini-nano-banana') {
          void (async () => {
            try {
              sendLog(mainWindow, id, 'system', `Nano Banana 2 started`)
              const nanoBananaBody = {
                contents: [
                  {
                    parts: [
                      ...(contextText ? [{ text: `Project context:\n${contextText}` }] : []),
                      { text: config.prompt },
                    ],
                  },
                ],
                generationConfig: {
                  responseModalities: ['TEXT', 'IMAGE'],
                  imageConfig: { aspectRatio: '1:1' },
                },
              }

              const res = await fetch(
                `${BASE_URL}/models/${modelId}:generateContent?key=${token}`,
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(nanoBananaBody),
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

              const data = await res.json() as {
                candidates?: Array<{
                  content?: {
                    parts?: Array<{
                      text?: string
                      inline_data?: { mime_type: string; data: string }
                    }>
                  }
                }>
              }

              const parts = data.candidates?.[0]?.content?.parts || []
              for (const part of parts) {
                if (part.text) {
                  sendLog(mainWindow, id, 'stdout', part.text)
                }
                if (part.inline_data) {
                  const dataUrl = `data:${part.inline_data.mime_type};base64,${part.inline_data.data}`
                  sendMediaLog(mainWindow, id, 'Generated image', dataUrl, part.inline_data.mime_type)
                }
              }

              sendLog(mainWindow, id, 'system', 'Nano Banana 2 finished')
              sendExit(mainWindow, id, 'completed', 0)
            } catch (err) {
              if ((err as Error).name === 'AbortError') {
                sendLog(mainWindow, id, 'system', 'Nano Banana stopped by user')
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

  // Launch Imagen image generation
  ipcMain.removeHandler(IPC_CHANNELS.GEMINI_LAUNCH_IMAGEN)
  ipcMain.handle(
    IPC_CHANNELS.GEMINI_LAUNCH_IMAGEN,
    async (
      _event,
      config: { prompt: string; model?: string; count?: number; aspectRatio?: string }
    ) => {
      try {
        const token = await keytar.getPassword(SERVICE, GEMINI_ACCOUNT)
        if (!token) return { ok: false, error: 'No Gemini API key configured' }

        if (!config?.prompt?.trim()) return { ok: false, error: 'Prompt is required' }
        if (config.prompt.length > 480) {
          return { ok: false, error: 'Imagen prompt max 480 tokens. Please shorten your prompt.' }
        }

        const id = `imagen-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
        const startedAt = Date.now()
        const imagenModel = config.model === 'gemini-imagen-fast'
          ? 'imagen-4.0-fast-generate-001'
          : 'imagen-4.0-generate-001'

        sendLog(mainWindow, id, 'system', `Imagen 4 generation started`)

        void (async () => {
          try {
            const res = await fetchWithTimeout(
              `${BASE_URL}/models/${imagenModel}:predict?key=${token}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  instances: [{ prompt: config.prompt }],
                  parameters: {
                    sampleCount: Math.min(config.count || 1, 4),
                    aspectRatio: config.aspectRatio || '1:1',
                    imageSize: '1K',
                  },
                }),
              },
              60_000
            )

            if (!res.ok) {
              const errText = await res.text()
              sendLog(mainWindow, id, 'stderr', `Imagen API error ${res.status}: ${errText}`)
              sendExit(mainWindow, id, 'failed', 1)
              return
            }

            const data = await res.json() as {
              predictions?: Array<{ bytesBase64Encoded: string; mimeType: string }>
            }

            if (!data.predictions?.length) {
              sendLog(mainWindow, id, 'stderr', 'No images generated')
              sendExit(mainWindow, id, 'failed', 1)
              return
            }

            for (const [i, pred] of data.predictions.entries()) {
              const dataUrl = `data:${pred.mimeType};base64,${pred.bytesBase64Encoded}`
              sendMediaLog(
                mainWindow,
                id,
                `Image ${i + 1} of ${data.predictions.length}`,
                dataUrl,
                pred.mimeType
              )
            }

            sendLog(mainWindow, id, 'system', `Imagen generated ${data.predictions.length} image(s)`)
            sendExit(mainWindow, id, 'completed', 0)
          } catch (err) {
            sendLog(mainWindow, id, 'stderr', (err as Error).message)
            sendExit(mainWindow, id, 'failed', 1)
          }
        })()

        return { ok: true, id, startedAt }
      } catch (err) {
        return { ok: false, error: (err as Error).message }
      }
    }
  )

  // Launch Veo video generation
  ipcMain.removeHandler(IPC_CHANNELS.GEMINI_LAUNCH_VEO)
  ipcMain.handle(
    IPC_CHANNELS.GEMINI_LAUNCH_VEO,
    async (
      _event,
      config: { prompt: string; durationSeconds?: number; aspectRatio?: string }
    ) => {
      try {
        const token = await keytar.getPassword(SERVICE, GEMINI_ACCOUNT)
        if (!token) return { ok: false, error: 'No Gemini API key configured' }

        if (!config?.prompt?.trim()) return { ok: false, error: 'Prompt is required' }

        const id = `veo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
        const startedAt = Date.now()
        const controller = new AbortController()

        const session: GeminiSession = {
          id,
          controller,
          model: 'gemini-veo',
          prompt: config.prompt,
          startedAt,
        }
        activeSessions.set(id, session)

        sendLog(mainWindow, id, 'system', 'Veo 3.1 video generation started (may take 1-3 minutes)')

        void (async () => {
          try {
            const generateRes = await fetchWithTimeout(
              `${BASE_URL}/models/veo-3.1-generate-preview:predictLongRunning?key=${token}`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  instances: [{ prompt: config.prompt }],
                  parameters: {
                    durationSeconds: config.durationSeconds || 5,
                    aspectRatio: config.aspectRatio || '16:9',
                  },
                }),
                signal: controller.signal,
              },
              30_000
            )

            if (!generateRes.ok) {
              const errText = await generateRes.text()
              sendLog(mainWindow, id, 'stderr', `Veo API error ${generateRes.status}: ${errText}`)
              sendExit(mainWindow, id, 'failed', 1)
              return
            }

            const opData = await generateRes.json() as { name?: string }
            if (!opData.name) {
              sendLog(mainWindow, id, 'stderr', 'No operation name returned')
              sendExit(mainWindow, id, 'failed', 1)
              return
            }

            // Poll for completion (max 5 minutes)
            const maxPollTime = 5 * 60 * 1000
            const pollStart = Date.now()

            while (Date.now() - pollStart < maxPollTime) {
              // Check if aborted
              if (controller.signal.aborted) {
                sendLog(mainWindow, id, 'system', 'Veo stopped by user')
                sendExit(mainWindow, id, 'killed', -1)
                return
              }

              await new Promise((r) => setTimeout(r, 10_000))

              try {
                const pollRes = await fetchWithTimeout(
                  `${BASE_URL}/${opData.name}?key=${token}`,
                  { method: 'GET', signal: controller.signal },
                  15_000
                )

                if (!pollRes.ok) {
                  sendLog(mainWindow, id, 'system', 'Polling... video still generating')
                  continue
                }

                const pollData = await pollRes.json() as {
                  done?: boolean
                  response?: {
                    generateVideoResponse?: {
                      generatedSamples?: Array<{
                        video: { uri?: string; bytesBase64Encoded?: string; mimeType?: string }
                      }>
                    }
                  }
                }

                if (pollData.done) {
                  const sample =
                    pollData.response?.generateVideoResponse?.generatedSamples?.[0]
                  if (sample?.video) {
                    if (sample.video.bytesBase64Encoded) {
                      const mimeType = sample.video.mimeType || 'video/mp4'
                      const dataUrl = `data:${mimeType};base64,${sample.video.bytesBase64Encoded}`
                      sendMediaLog(mainWindow, id, 'Generated video', dataUrl, mimeType)
                    } else if (sample.video.uri) {
                      // Video is at a GCS URI — download it
                      try {
                        const videoRes = await fetchWithTimeout(
                          `${sample.video.uri}`,
                          {
                            method: 'GET',
                            headers: { 'x-goog-api-key': token },
                          },
                          120_000
                        )
                        if (videoRes.ok) {
                          const buffer = Buffer.from(await videoRes.arrayBuffer())
                          const mimeType = sample.video.mimeType || 'video/mp4'
                          const dataUrl = `data:${mimeType};base64,${buffer.toString('base64')}`
                          sendMediaLog(mainWindow, id, 'Generated video', dataUrl, mimeType)
                        } else {
                          sendLog(mainWindow, id, 'stderr', `Failed to download video: ${videoRes.status}`)
                        }
                      } catch (dlErr) {
                        sendLog(mainWindow, id, 'stderr', `Video download error: ${(dlErr as Error).message}`)
                      }
                    }
                  }

                  sendLog(mainWindow, id, 'system', 'Veo 3.1 video generation complete')
                  sendExit(mainWindow, id, 'completed', 0)
                  return
                }

                sendLog(mainWindow, id, 'system', 'Polling... video still generating')
              } catch (pollErr) {
                if ((pollErr as Error).name === 'AbortError') {
                  sendLog(mainWindow, id, 'system', 'Veo stopped by user')
                  sendExit(mainWindow, id, 'killed', -1)
                  return
                }
                // Continue polling on transient errors
              }
            }

            sendLog(mainWindow, id, 'stderr', 'Video generation timed out after 5 minutes')
            sendExit(mainWindow, id, 'failed', 1)
          } catch (err) {
            if ((err as Error).name === 'AbortError') {
              sendLog(mainWindow, id, 'system', 'Veo stopped by user')
              sendExit(mainWindow, id, 'killed', -1)
            } else {
              sendLog(mainWindow, id, 'stderr', (err as Error).message)
              sendExit(mainWindow, id, 'failed', 1)
            }
          } finally {
            activeSessions.delete(id)
          }
        })()

        return { ok: true, id, startedAt }
      } catch (err) {
        return { ok: false, error: (err as Error).message }
      }
    }
  )
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

function sendMediaLog(
  mainWindow: BrowserWindow,
  agentId: string,
  text: string,
  mediaUrl: string,
  mediaMimeType: string
): void {
  if (!mainWindow.isDestroyed()) {
    mainWindow.webContents.send(IPC_CHANNELS.GEMINI_LOG, {
      agentId,
      timestamp: Date.now(),
      type: 'media',
      text,
      mediaUrl,
      mediaMimeType,
    })
  }
}
