# MiroX — Gemini Integration + Timed Build Sessions

## What to Build

**Requirement 1:** Add Google Gemini as an AI provider in Agent Center alongside Claude.
- User picks provider (Claude or Gemini) when launching an agent
- Gemini models: Gemini 2.5 Pro, Gemini 2.5 Flash, Gemini 2.0 Flash
- Gemini API key stored securely via keytar (like Miro/GitHub tokens)
- Gemini settings panel in Settings page
- Gemini agents stream responses to LiveLogs just like Claude agents

**Requirement 2:** Timed build sessions with dual-AI routing.
- Session mode: set a time budget (30 min, 1h, 2h, 4h, 6h)
- Pick Claude model as primary worker
- Optionally enable Gemini as design specialist
- Claude handles: logic, architecture, TypeScript, Electron, testing
- Gemini handles: UI/design, CSS/styling, visual component work
- Both run in parallel, both visible in LiveLogs (filterable by provider)
- Countdown timer, auto-stop when time expires

Read `CLAUDE.md` for full project context, architecture, and conventions.

---

## Architecture Overview

**Claude agent** = spawns `claude` CLI as child process (existing — can read/edit files, run commands)

**Gemini agent** = calls Google Generative AI REST API from main process, streams response back via IPC. Gemini reads project files as context (main process reads them), provides design suggestions/code. It's an advisor — Claude is the doer.

**Session mode** = coordinated timed execution. Claude runs as the primary worker. Gemini (if enabled) runs in parallel providing design direction. Both stream to LiveLogs. Countdown timer kills both when time expires.

---

## Group A — Gemini Electron Infrastructure (5 files)

### A1. Add Gemini IPC channels

**File:** `electron/ipc/channels.ts`

Add after the Agent section (before Navigation):

```typescript
// Gemini
GEMINI_GET_TOKEN: 'gemini:get-token',
GEMINI_SET_TOKEN: 'gemini:set-token',
GEMINI_TEST_CONNECTION: 'gemini:test-connection',
GEMINI_LAUNCH: 'gemini:launch',
GEMINI_STOP: 'gemini:stop',
GEMINI_LOG: 'gemini:log',      // push channel (main -> renderer)
GEMINI_EXIT: 'gemini:exit',    // push channel (main -> renderer)
```

### A2. Create Gemini IPC handlers

**New file:** `electron/ipc/geminiHandlers.ts`

This handler:
1. Stores/retrieves the Gemini API key via keytar (service: `mirox`, account: `gemini-token`)
2. Tests connection by calling the models list endpoint
3. Launches a Gemini "agent" — reads project context files, sends prompt + context to Gemini streaming API, streams response chunks to renderer via IPC
4. Supports stopping a running Gemini request via AbortController

```typescript
import { ipcMain, BrowserWindow } from 'electron'
import * as keytar from 'keytar'
import { IPC_CHANNELS } from './channels'
import { fetchWithTimeout } from '../utils/fetchWithTimeout'
import fs from 'fs'
import path from 'path'
import { app } from 'electron'

const KEYTAR_SERVICE = 'mirox'
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

export function registerGeminiHandlers(mainWindow: BrowserWindow): void {
  // Get token
  ipcMain.handle(IPC_CHANNELS.GEMINI_GET_TOKEN, async () => {
    try {
      const token = await keytar.getPassword(KEYTAR_SERVICE, GEMINI_ACCOUNT)
      return { ok: true, token: token || null }
    } catch {
      return { ok: false, error: 'Failed to read Gemini token' }
    }
  })

  // Set token
  ipcMain.handle(IPC_CHANNELS.GEMINI_SET_TOKEN, async (_event, token: string) => {
    try {
      if (!token || typeof token !== 'string') {
        return { ok: false, error: 'Invalid token' }
      }
      const trimmed = token.trim()
      if (trimmed.length === 0) {
        await keytar.deletePassword(KEYTAR_SERVICE, GEMINI_ACCOUNT)
        return { ok: true }
      }
      await keytar.setPassword(KEYTAR_SERVICE, GEMINI_ACCOUNT, trimmed)
      return { ok: true }
    } catch {
      return { ok: false, error: 'Failed to save Gemini token' }
    }
  })

  // Test connection
  ipcMain.handle(IPC_CHANNELS.GEMINI_TEST_CONNECTION, async () => {
    try {
      const token = await keytar.getPassword(KEYTAR_SERVICE, GEMINI_ACCOUNT)
      if (!token) return { ok: false, error: 'No Gemini API key configured' }

      const res = await fetchWithTimeout(
        `${BASE_URL}/models?key=${token}`,
        { method: 'GET' },
        10_000
      )

      if (!res.ok) {
        return { ok: false, error: `API returned ${res.status}` }
      }

      const data = await res.json() as { models?: Array<{ name: string }> }
      const modelCount = data.models?.length ?? 0
      return { ok: true, modelCount }
    } catch (err) {
      return { ok: false, error: (err as Error).message }
    }
  })

  // Launch Gemini agent
  ipcMain.handle(IPC_CHANNELS.GEMINI_LAUNCH, async (_event, config: {
    model: string
    prompt: string
    contextFiles?: string[]
  }) => {
    try {
      const token = await keytar.getPassword(KEYTAR_SERVICE, GEMINI_ACCOUNT)
      if (!token) return { ok: false, error: 'No Gemini API key configured' }

      // Validate
      if (!config.prompt || typeof config.prompt !== 'string') {
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
      const workDir = app.isPackaged ? path.dirname(app.getAppPath()) : process.cwd()

      if (config.contextFiles && config.contextFiles.length > 0) {
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

      const systemPrompt = `You are a design and frontend specialist for MiroX, an Electron + React + TypeScript + Tailwind CSS desktop app. Focus on visual design, UI/UX, component styling, animations, layout, and aesthetic improvements. The app uses a dark theme (background #0A0A0A, accent #FFD600 yellow), Framer Motion for animations, and Lucide icons.`

      const requestBody = {
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{
          parts: [
            ...(contextText ? [{ text: `Project context:\n${contextText}` }] : []),
            { text: config.prompt },
          ],
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 16384,
        },
      }

      // Send initial system log
      sendGeminiLog(mainWindow, id, 'system', `Gemini ${modelId} started`)

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
            sendGeminiLog(mainWindow, id, 'stderr', `API error ${res.status}: ${errText}`)
            sendGeminiExit(mainWindow, id, 'failed', 1)
            activeSessions.delete(id)
            return
          }

          const reader = res.body?.getReader()
          if (!reader) {
            sendGeminiLog(mainWindow, id, 'stderr', 'No response stream')
            sendGeminiExit(mainWindow, id, 'failed', 1)
            activeSessions.delete(id)
            return
          }

          const decoder = new TextDecoder()
          let buffer = ''

          while (true) {
            const { done, value } = await reader.read()
            if (done) break

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
                  const text = chunk.candidates?.[0]?.content?.parts?.[0]?.text
                  if (text) {
                    sendGeminiLog(mainWindow, id, 'stdout', text)
                  }
                } catch {
                  // Skip unparseable chunks
                }
              }
            }
          }

          sendGeminiLog(mainWindow, id, 'system', 'Gemini finished')
          sendGeminiExit(mainWindow, id, 'completed', 0)
        } catch (err) {
          if ((err as Error).name === 'AbortError') {
            sendGeminiLog(mainWindow, id, 'system', 'Gemini stopped by user')
            sendGeminiExit(mainWindow, id, 'killed', -1)
          } else {
            sendGeminiLog(mainWindow, id, 'stderr', (err as Error).message)
            sendGeminiExit(mainWindow, id, 'failed', 1)
          }
        } finally {
          activeSessions.delete(id)
        }
      })()

      return { ok: true, id, model: config.model, startedAt: session.startedAt }
    } catch (err) {
      return { ok: false, error: (err as Error).message }
    }
  })

  // Stop Gemini session
  ipcMain.handle(IPC_CHANNELS.GEMINI_STOP, async (_event, id: string) => {
    const session = activeSessions.get(id)
    if (!session) return { ok: false, error: 'Session not found' }
    session.controller.abort()
    activeSessions.delete(id)
    return { ok: true }
  })
}

function sendGeminiLog(
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

function sendGeminiExit(
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
```

### A3. Update preload.ts

**File:** `electron/preload.ts`

Add a `gemini` namespace alongside the existing `agent` namespace:

```typescript
gemini: {
  getToken: () => ipcRenderer.invoke(IPC_CHANNELS.GEMINI_GET_TOKEN),
  setToken: (token: string) => ipcRenderer.invoke(IPC_CHANNELS.GEMINI_SET_TOKEN, token),
  testConnection: () => ipcRenderer.invoke(IPC_CHANNELS.GEMINI_TEST_CONNECTION),
  launch: (config: { model: string; prompt: string; contextFiles?: string[] }) =>
    ipcRenderer.invoke(IPC_CHANNELS.GEMINI_LAUNCH, config),
  stop: (id: string) => ipcRenderer.invoke(IPC_CHANNELS.GEMINI_STOP, id),
  onLog: (callback: (data: { agentId: string; timestamp: number; type: string; text: string }) => void) => {
    const handler = (_event: Electron.IpcRendererEvent, data: unknown) => callback(data as Parameters<typeof callback>[0])
    ipcRenderer.on(IPC_CHANNELS.GEMINI_LOG, handler)
    return () => ipcRenderer.removeListener(IPC_CHANNELS.GEMINI_LOG, handler)
  },
  onExit: (callback: (data: { id: string; status: string; exitCode: number }) => void) => {
    const handler = (_event: Electron.IpcRendererEvent, data: unknown) => callback(data as Parameters<typeof callback>[0])
    ipcRenderer.on(IPC_CHANNELS.GEMINI_EXIT, handler)
    return () => ipcRenderer.removeListener(IPC_CHANNELS.GEMINI_EXIT, handler)
  },
},
```

### A4. Register Gemini handlers in main.ts

**File:** `electron/main.ts`

Add import:
```typescript
import { registerGeminiHandlers } from './ipc/geminiHandlers'
```

Add registration inside `createWindow()` after `registerAgentHandlers(mainWindow)`:
```typescript
registerGeminiHandlers(mainWindow)
```

### A5. Update CSP to allow Gemini API

**File:** `electron/main.ts`

In the `setupCSP()` function, update the `connect-src` directive:
```
connect-src 'self' https://api.miro.com https://api.github.com https://generativelanguage.googleapis.com
```

---

## Group B — Gemini Settings UI (4 files)

### B1. Create GeminiConfig settings panel

**New file:** `src/components/settings/GeminiConfig.tsx`

Follow the exact same pattern as `MiroConfig.tsx` and `GitHubConfig.tsx`:
- Password input for Gemini API key
- "Save Key" button → calls `window.electronAPI.gemini.setToken()`
- "Test" button → calls `window.electronAPI.gemini.testConnection()`
- Connection status dot (green/red) with text
- Hint: "Get your API key from aistudio.google.com/apikey"
- On successful test, call `useSettingsStore.getState().setGeminiConnected(true)`

Component structure:
```tsx
export function GeminiConfig(): JSX.Element {
  // Local state: token, isConnected, isTesting
  // On mount: check for existing token via gemini.getToken()
  // If token exists: show connected state with masked token
  // If no token: show input form
  // "Save Key" → gemini.setToken() → testConnection()
  // "Test" → gemini.testConnection()
  // Use Card, Input, Button from @components/ui/
  // Match the visual style of MiroConfig exactly
}
```

### B2. Add Gemini to SettingsLayout

**File:** `src/components/settings/SettingsLayout.tsx`

Add to the `tabs` array after GitHub:
```typescript
{ id: 'gemini', label: 'Gemini', icon: <Sparkles size={18} /> },
```

Import `Sparkles` from `lucide-react`.

### B3. Add Gemini panel to Settings page

**File:** `src/pages/Settings.tsx`

Add import:
```typescript
import { GeminiConfig } from '../components/settings/GeminiConfig'
```

Add to the `panels` record:
```typescript
gemini: <GeminiConfig />,
```

### B4. Add geminiConnected to settingsStore

**File:** `src/stores/settingsStore.ts`

Add to the interface:
```typescript
geminiConnected: boolean
```

Add to initial state:
```typescript
geminiConnected: false
```

Add action:
```typescript
setGeminiConnected: (connected: boolean) => set({ geminiConnected: connected })
```

---

## Group C — Agent Center Provider Support (7 files)

### C1. Update agent types

**File:** `src/types/agent.ts`

Update `AgentRun` to include provider:
```typescript
export type AIProvider = 'claude' | 'gemini'

export type ClaudeModel = 'opus' | 'sonnet' | 'haiku'
export type GeminiModel = 'gemini-pro' | 'gemini-flash' | 'gemini-flash-2'
export type AgentModel = ClaudeModel | GeminiModel
```

Update `AgentRun`:
```typescript
export interface AgentRun {
  id: string
  prompt: string
  provider: AIProvider          // NEW
  model: AgentModel             // CHANGED from string literal union
  status: 'running' | 'completed' | 'failed' | 'killed'
  logs: Array<{ timestamp: number; type: 'stdout' | 'stderr' | 'system'; text: string }>
  startedAt: number
  finishedAt: number | null
  exitCode: number | null
  cost: { inputTokens: number; outputTokens: number; estimatedUSD: number } | null
  allowedTools: string[]
  gitTagStart: string | null
  gitTagEnd: string | null
}
```

Update `AgentConfig`:
```typescript
export interface AgentConfig {
  provider: AIProvider          // NEW
  model: AgentModel             // CHANGED
  prompt: string
  allowedTools: string[]
  contextFiles?: string[]       // NEW — for Gemini file context
}
```

Update `QuickAction`:
```typescript
export interface QuickAction {
  id: string
  label: string
  description: string
  prompt: string
  provider: AIProvider          // NEW
  model: AgentModel             // CHANGED
  tools: string[]
  icon: 'bug' | 'alert' | 'paintbrush' | 'package' | 'shield' | 'hammer' | 'sparkles'  // added sparkles
}
```

Add session types:
```typescript
export interface SessionConfig {
  timeLimitMinutes: number
  claudeModel: ClaudeModel
  geminiEnabled: boolean
  geminiModel: GeminiModel
  prompt: string
}

export interface AgentSession {
  id: string
  config: SessionConfig
  status: 'running' | 'completed' | 'stopped'
  startedAt: number
  endsAt: number
  claudeAgentId: string | null
  geminiAgentId: string | null
}
```

### C2. Update ElectronAPI types

**File:** `src/types/electron.ts`

Add `gemini` namespace to the `ElectronAPI` interface:
```typescript
gemini: {
  getToken: () => Promise<{ ok: boolean; token?: string | null; error?: string }>
  setToken: (token: string) => Promise<{ ok: boolean; error?: string }>
  testConnection: () => Promise<{ ok: boolean; modelCount?: number; error?: string }>
  launch: (config: { model: string; prompt: string; contextFiles?: string[] }) =>
    Promise<{ ok: true; id: string; model: string; startedAt: number } | { ok: false; error: string }>
  stop: (id: string) => Promise<{ ok: boolean; error?: string }>
  onLog: (callback: (data: { agentId: string; timestamp: number; type: string; text: string }) => void) => () => void
  onExit: (callback: (data: { id: string; status: string; exitCode: number }) => void) => () => void
}
```

### C3. Update AgentLauncher

**File:** `src/components/agent-center/AgentLauncher.tsx`

Major changes:
1. Add provider selector (Claude / Gemini) as a segmented control above the model dropdown
2. When Claude is selected: show existing model options (Opus 4.6, Sonnet 4.6, Haiku 4.5)
3. When Gemini is selected: show Gemini model options (Gemini 2.5 Pro, Gemini 2.5 Flash, Gemini 2.0 Flash)
4. When Gemini is selected: hide the tools toggles (Gemini doesn't use tools — it's an API call)
5. When Gemini is selected: optionally show a "Context Files" field (comma-separated file paths)
6. Update `handleLaunch()` to call either `agent.launch()` or `gemini.launch()` based on provider
7. Show a Gemini icon (Sparkles from lucide-react) when Gemini is selected

New module-level constants:
```typescript
const CLAUDE_MODEL_OPTIONS = [
  { value: 'opus', label: 'Opus 4.6' },
  { value: 'sonnet', label: 'Sonnet 4.6' },
  { value: 'haiku', label: 'Haiku 4.5' },
]

const GEMINI_MODEL_OPTIONS = [
  { value: 'gemini-pro', label: 'Gemini 2.5 Pro' },
  { value: 'gemini-flash', label: 'Gemini 2.5 Flash' },
  { value: 'gemini-flash-2', label: 'Gemini 2.0 Flash' },
]
```

New local state:
```typescript
const [provider, setProvider] = useState<AIProvider>('claude')
```

Provider selector UI — two buttons above the prompt input:
```tsx
<div className="flex gap-1 p-1 bg-black-800 rounded-xl">
  <button
    onClick={() => { setProvider('claude'); setModel('sonnet') }}
    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150
      ${provider === 'claude' ? 'bg-yellow-400/10 text-yellow-400' : 'text-gray-400 hover:text-white'}`}
  >
    <Bot size={16} />
    Claude
  </button>
  <button
    onClick={() => { setProvider('gemini'); setModel('gemini-pro') }}
    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150
      ${provider === 'gemini' ? 'bg-blue-400/10 text-blue-400' : 'text-gray-400 hover:text-white'}`}
  >
    <Sparkles size={16} />
    Gemini
  </button>
</div>
```

Model dropdown: show `CLAUDE_MODEL_OPTIONS` when provider is `'claude'`, show `GEMINI_MODEL_OPTIONS` when provider is `'gemini'`.

Tools section: only show when `provider === 'claude'`. Hide for Gemini.

Updated `handleLaunch()`:
```typescript
const handleLaunch = useCallback(async () => {
  if (!prompt.trim() || isLaunching) return
  setIsLaunching(true)
  try {
    let result: { ok: boolean; id?: string; model?: string; startedAt?: number; error?: string }

    if (provider === 'claude') {
      result = await window.electronAPI.agent.launch({
        model,
        prompt: prompt.trim(),
        allowedTools: tools,
      })
    } else {
      result = await window.electronAPI.gemini.launch({
        model,
        prompt: prompt.trim(),
      })
    }

    if (result.ok && result.id && result.startedAt) {
      addAgent({
        id: result.id,
        prompt: prompt.trim(),
        provider,                        // NEW
        model: model as AgentModel,
        status: 'running',
        logs: [],
        startedAt: result.startedAt,
        finishedAt: null,
        exitCode: null,
        cost: null,
        allowedTools: provider === 'claude' ? tools : [],
        gitTagStart: null,
        gitTagEnd: null,
      })
      setPrompt('')
    } else {
      addToast({ type: 'error', title: 'Launch failed', message: result.error || 'Unknown error' })
    }
  } catch (err) {
    addToast({ type: 'error', title: 'Launch failed', message: (err as Error).message })
  } finally {
    setIsLaunching(false)
  }
}, [prompt, model, tools, provider, isLaunching, addAgent, addToast])
```

### C4. Update QuickActions

**File:** `src/components/agent-center/QuickActions.tsx`

Add `provider: 'claude'` to all 6 existing quick actions.

Add 2 new Gemini quick actions:
```typescript
{
  id: 'design-audit',
  label: 'Design System Audit',
  description: 'Review UI components against design tokens and suggest improvements',
  prompt: 'Audit all React components in src/components/ against the design system in src/design-system/tokens.ts. Check for inconsistent spacing, border radius, colors, typography, and animations. For each issue found, provide the exact Tailwind class fix.',
  provider: 'gemini',
  model: 'gemini-pro',
  tools: [],
  icon: 'sparkles',
},
{
  id: 'ui-polish',
  label: 'Visual Polish Suggestions',
  description: 'Get AI-powered design improvement suggestions for the UI',
  prompt: 'Review the MiroX UI components and suggest visual improvements. Focus on: hover states, transitions, empty states, loading skeletons, micro-interactions, and spacing refinement. Provide specific Tailwind CSS and Framer Motion code for each suggestion.',
  provider: 'gemini',
  model: 'gemini-flash',
  tools: [],
  icon: 'paintbrush',
}
```

Add `Sparkles` to the `ICON_MAP`:
```typescript
const ICON_MAP: Record<string, typeof Bug> = {
  bug: Bug,
  alert: AlertTriangle,
  paintbrush: Paintbrush,
  package: Package,
  shield: Shield,
  hammer: Hammer,
  sparkles: Sparkles,  // NEW
}
```

Update `MODEL_COLORS` to include Gemini models:
```typescript
const MODEL_COLORS: Record<string, 'purple' | 'blue' | 'green' | 'yellow'> = {
  opus: 'purple',
  sonnet: 'blue',
  haiku: 'green',
  'gemini-pro': 'blue',
  'gemini-flash': 'green',
  'gemini-flash-2': 'yellow',
}
```

Add a provider badge next to the model badge:
```tsx
<Badge color={action.provider === 'gemini' ? 'blue' : 'yellow'} size="sm">
  {action.provider === 'gemini' ? 'Gemini' : 'Claude'}
</Badge>
```

### C5. Update ActiveAgents

**File:** `src/components/agent-center/ActiveAgents.tsx`

1. Add provider badge next to model badge for each agent
2. Update the kill handler to call the right API:

```typescript
const handleKill = useCallback(async (agent: AgentRun) => {
  try {
    if (agent.provider === 'gemini') {
      await window.electronAPI.gemini.stop(agent.id)
    } else {
      await window.electronAPI.agent.kill(agent.id)
    }
  } catch (err) {
    addToast({ type: 'error', title: 'Kill failed', message: (err as Error).message })
  }
}, [addToast])
```

3. Add provider icon (Bot for Claude, Sparkles for Gemini) next to the pulsing dot:

```tsx
{agent.provider === 'gemini' ? (
  <Sparkles size={14} className="text-blue-400" />
) : (
  <Bot size={14} className="text-yellow-400" />
)}
```

### C6. Subscribe to Gemini IPC events in AgentCenter page

**File:** `src/pages/AgentCenter.tsx`

Add Gemini event subscriptions in the same `useEffect` that subscribes to Claude events:

```typescript
useEffect(() => {
  const api = window.electronAPI

  // Claude events (existing)
  const unsubClaudeLog = api.agent.onLog((data) => {
    appendLog(data.agentId, { timestamp: data.timestamp, type: data.type as 'stdout'|'stderr'|'system', text: data.text })
  })
  const unsubClaudeExit = api.agent.onExit((data) => {
    updateAgentStatus(data.id, data.status as AgentRun['status'], data.exitCode)
    const timeout = setTimeout(() => moveToHistory(data.id), 2000)
    pendingTimeouts.current.push(timeout)
  })

  // Gemini events (NEW)
  const unsubGeminiLog = api.gemini.onLog((data) => {
    appendLog(data.agentId, { timestamp: data.timestamp, type: data.type as 'stdout'|'stderr'|'system', text: data.text })
  })
  const unsubGeminiExit = api.gemini.onExit((data) => {
    updateAgentStatus(data.id, data.status as AgentRun['status'], data.exitCode)
    const timeout = setTimeout(() => moveToHistory(data.id), 2000)
    pendingTimeouts.current.push(timeout)
  })

  return () => {
    unsubClaudeLog()
    unsubClaudeExit()
    unsubGeminiLog()
    unsubGeminiExit()
    pendingTimeouts.current.forEach(clearTimeout)
    pendingTimeouts.current = []
  }
}, [appendLog, updateAgentStatus, moveToHistory])
```

### C7. Update agentStore for provider

**File:** `src/stores/agentStore.ts`

The store itself doesn't need major changes since `AgentRun` already includes `provider` via the type update. But update `killAll` handling in the renderer to account for Gemini agents:

No changes needed to the store itself — the `AgentRun` type update in C1 covers it. The store is provider-agnostic (just stores `AgentRun[]`).

---

## Group D — Session Mode (3 files)

### D1. Create SessionLauncher component

**New file:** `src/components/agent-center/SessionLauncher.tsx`

This is a new panel in Agent Center for launching timed build sessions.

UI structure:
```
Card
  Header: "Build Session" with Clock icon

  Prompt input (textarea, taller — for describing the full session goal)

  Row 1: Time Budget dropdown
    Options: 30 min, 1 hour, 2 hours, 4 hours, 6 hours

  Row 2: Claude Model selector
    Dropdown: Opus 4.6 / Sonnet 4.6 / Haiku 4.5

  Row 3: Gemini toggle + model selector
    Toggle switch: "Enable Gemini for design tasks"
    When enabled: Dropdown for Gemini model (Gemini 2.5 Pro / Flash / 2.0 Flash)
    When enabled: show info text "Gemini will handle UI, CSS, and visual design tasks"

  "Start Session" button (primary, full width)

  [When session is active:]
  Countdown timer (MM:SS remaining)
  "Stop Session" button (danger)
  Status badges for Claude (running/idle) and Gemini (running/idle/disabled)
```

Implementation:
```tsx
import { useState, useEffect, useCallback, useRef } from 'react'
import { Clock, Play, Square, Bot, Sparkles } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Dropdown } from '@components/ui/Dropdown'
import { Badge } from '@components/ui/Badge'
import { useAgentStore } from '@stores/agentStore'
import { useUIStore } from '@stores/uiStore'
import type { AgentRun, ClaudeModel, GeminiModel, AgentSession, SessionConfig } from '@/types/agent'

const TIME_OPTIONS = [
  { value: '30', label: '30 minutes' },
  { value: '60', label: '1 hour' },
  { value: '120', label: '2 hours' },
  { value: '240', label: '4 hours' },
  { value: '360', label: '6 hours' },
]

const CLAUDE_MODELS = [
  { value: 'opus', label: 'Opus 4.6' },
  { value: 'sonnet', label: 'Sonnet 4.6' },
  { value: 'haiku', label: 'Haiku 4.5' },
]

const GEMINI_MODELS = [
  { value: 'gemini-pro', label: 'Gemini 2.5 Pro' },
  { value: 'gemini-flash', label: 'Gemini 2.5 Flash' },
  { value: 'gemini-flash-2', label: 'Gemini 2.0 Flash' },
]

export function SessionLauncher(): JSX.Element {
  const [prompt, setPrompt] = useState('')
  const [timeLimit, setTimeLimit] = useState('120')
  const [claudeModel, setClaudeModel] = useState<ClaudeModel>('sonnet')
  const [geminiEnabled, setGeminiEnabled] = useState(false)
  const [geminiModel, setGeminiModel] = useState<GeminiModel>('gemini-pro')
  const [session, setSession] = useState<AgentSession | null>(null)
  const [remaining, setRemaining] = useState(0)
  const [isStarting, setIsStarting] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  const addAgent = useAgentStore((s) => s.addAgent)
  const addToast = useUIStore((s) => s.addToast)

  // Countdown timer
  useEffect(() => {
    if (!session || session.status !== 'running') {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      const now = Date.now()
      const left = Math.max(0, session.endsAt - now)
      setRemaining(left)

      if (left <= 0) {
        void handleStopSession()
      }
    }, 1000)

    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [session])

  const handleStartSession = useCallback(async () => {
    if (!prompt.trim() || isStarting) return
    setIsStarting(true)

    try {
      const timeMins = parseInt(timeLimit, 10)
      const sessionId = `session-${Date.now()}`
      const endsAt = Date.now() + timeMins * 60 * 1000

      // Launch Claude agent
      const claudeResult = await window.electronAPI.agent.launch({
        model: claudeModel,
        prompt: prompt.trim(),
        allowedTools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
      })

      let claudeAgentId: string | null = null
      if (claudeResult.ok && claudeResult.id) {
        claudeAgentId = claudeResult.id
        addAgent({
          id: claudeResult.id,
          prompt: prompt.trim(),
          provider: 'claude',
          model: claudeModel,
          status: 'running',
          logs: [],
          startedAt: claudeResult.startedAt,
          finishedAt: null,
          exitCode: null,
          cost: null,
          allowedTools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
          gitTagStart: null,
          gitTagEnd: null,
        })
      }

      // Launch Gemini agent if enabled
      let geminiAgentId: string | null = null
      if (geminiEnabled) {
        const geminiPrompt = `You are the design specialist for this session.\n\nSession goal: ${prompt.trim()}\n\nFocus on the visual and UI aspects: component styling, layout, animations, color usage, spacing, and overall aesthetic. Suggest specific Tailwind CSS classes and Framer Motion variants.`

        const geminiResult = await window.electronAPI.gemini.launch({
          model: geminiModel,
          prompt: geminiPrompt,
        })

        if (geminiResult.ok && geminiResult.id) {
          geminiAgentId = geminiResult.id
          addAgent({
            id: geminiResult.id,
            prompt: geminiPrompt,
            provider: 'gemini',
            model: geminiModel,
            status: 'running',
            logs: [],
            startedAt: geminiResult.startedAt,
            finishedAt: null,
            exitCode: null,
            cost: null,
            allowedTools: [],
            gitTagStart: null,
            gitTagEnd: null,
          })
        }
      }

      setSession({
        id: sessionId,
        config: { timeLimitMinutes: timeMins, claudeModel, geminiEnabled, geminiModel, prompt: prompt.trim() },
        status: 'running',
        startedAt: Date.now(),
        endsAt,
        claudeAgentId,
        geminiAgentId,
      })
      setRemaining(timeMins * 60 * 1000)

    } catch (err) {
      addToast({ type: 'error', title: 'Session failed', message: (err as Error).message })
    } finally {
      setIsStarting(false)
    }
  }, [prompt, timeLimit, claudeModel, geminiEnabled, geminiModel, isStarting, addAgent, addToast])

  const handleStopSession = useCallback(async () => {
    if (!session) return

    // Kill Claude agent
    if (session.claudeAgentId) {
      try { await window.electronAPI.agent.kill(session.claudeAgentId) } catch { /* ignore */ }
    }
    // Kill Gemini agent
    if (session.geminiAgentId) {
      try { await window.electronAPI.gemini.stop(session.geminiAgentId) } catch { /* ignore */ }
    }

    setSession((prev) => prev ? { ...prev, status: 'stopped' } : null)
    addToast({ type: 'info', title: 'Session stopped' })
  }, [session, addToast])

  const formatTime = (ms: number): string => {
    const totalSec = Math.ceil(ms / 1000)
    const hours = Math.floor(totalSec / 3600)
    const mins = Math.floor((totalSec % 3600) / 60)
    const secs = totalSec % 60
    if (hours > 0) return `${hours}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const isRunning = session?.status === 'running'

  // ... render JSX with the structure described above
  // Use the same Card, Button, Dropdown, Badge components as AgentLauncher
  // Match the visual style exactly
}
```

### D2. Add session mode to AgentCenter page

**File:** `src/pages/AgentCenter.tsx`

Add a tab switcher between "Launch Agent" (single) and "Build Session" (timed):

```tsx
const [mode, setMode] = useState<'launch' | 'session'>('launch')

// In the render, after the header:
<div className="flex gap-1 p-1 bg-black-800 rounded-xl w-fit">
  <button
    onClick={() => setMode('launch')}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150
      ${mode === 'launch' ? 'bg-yellow-400/10 text-yellow-400' : 'text-gray-400 hover:text-white'}`}
  >
    Launch Agent
  </button>
  <button
    onClick={() => setMode('session')}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150
      ${mode === 'session' ? 'bg-yellow-400/10 text-yellow-400' : 'text-gray-400 hover:text-white'}`}
  >
    Build Session
  </button>
</div>

{mode === 'launch' ? <AgentLauncher /> : <SessionLauncher />}
```

Import `SessionLauncher`:
```typescript
import { SessionLauncher } from '@components/agent-center/SessionLauncher'
```

### D3. Add LiveLogs provider filter

**File:** `src/components/agent-center/LiveLogs.tsx`

Add a provider filter alongside the existing type filter. Add to `FILTER_OPTIONS`:

```typescript
const PROVIDER_OPTIONS = [
  { value: 'all', label: 'All Providers' },
  { value: 'claude', label: 'Claude' },
  { value: 'gemini', label: 'Gemini' },
]
```

Add local state:
```typescript
const [providerFilter, setProviderFilter] = useState('all')
```

Filter logs by provider — check the agent's provider by looking up the agentId in the agents array. Show the provider filter dropdown next to the existing type filter.

---

## Group E — Verification (run after all changes)

### E1. Full verification checklist

```bash
npm run typecheck    # zero errors
npm run build        # successful build
npm run lint         # no new errors
npm run test         # all tests passing
```

### E2. Manual verification

1. Settings → Gemini tab visible with API key input
2. Save a Gemini API key → test connection → shows success
3. Agent Center → provider toggle visible (Claude / Gemini)
4. Select Gemini → model dropdown shows Gemini models → tools section hidden
5. Launch a Gemini agent → logs stream in LiveLogs → completes → moves to history
6. Switch to Claude → launch works as before (no regression)
7. Quick Actions → 2 new Gemini actions visible with blue provider badge
8. Kill a Gemini agent → stops cleanly
9. Build Session tab → time budget selector, Claude model, Gemini toggle
10. Start a session → countdown timer visible → agents launch → stop button works

### E3. Type safety

Ensure all `AgentRun` creation sites include the new `provider` field. Search for `addAgent(` across the codebase — every call must include `provider: 'claude' | 'gemini'`.

---

## File Ownership Map (for agent assignment)

**Agent 1 — Electron (backend):**
- `electron/ipc/channels.ts`
- `electron/ipc/geminiHandlers.ts` (NEW)
- `electron/preload.ts`
- `electron/main.ts`

**Agent 2 — Types + Store:**
- `src/types/agent.ts`
- `src/types/electron.ts`
- `src/stores/agentStore.ts`
- `src/stores/settingsStore.ts`

**Agent 3 — Settings UI:**
- `src/components/settings/GeminiConfig.tsx` (NEW)
- `src/components/settings/SettingsLayout.tsx`
- `src/pages/Settings.tsx`

**Agent 4 — Agent Center UI:**
- `src/components/agent-center/AgentLauncher.tsx`
- `src/components/agent-center/QuickActions.tsx`
- `src/components/agent-center/ActiveAgents.tsx`
- `src/components/agent-center/LiveLogs.tsx`
- `src/components/agent-center/SessionLauncher.tsx` (NEW)
- `src/pages/AgentCenter.tsx`

**Co-lead:** Reviews all, runs verification, commits.

**Dependency order:** Agent 1 + Agent 2 first (backend + types). Then Agent 3 + Agent 4 (UI depends on types). Co-lead last.

---

## Commit Strategy

```
feat: add Gemini AI provider integration
feat: add timed build session mode with dual-AI routing
chore: update types and stores for multi-provider support
```
