import { BrowserWindow, ipcMain, app, dialog } from 'electron'
import { spawn, exec, type ChildProcess } from 'child_process'
import path from 'path'
import fs from 'fs'
import crypto from 'crypto'
import * as keytar from 'keytar'
import { IPC_CHANNELS } from './channels'
import { store } from '../config'

interface AgentTokenTracker {
  inputTokens: number
  outputTokens: number
  cacheReadTokens: number
  cacheWriteTokens: number
}

interface AgentProcess {
  id: string
  process: ChildProcess
  model: string
  prompt: string
  startedAt: number
  status: 'running' | 'completed' | 'failed' | 'killed'
  allowedTools: string[]
  executionTimeout?: ReturnType<typeof setTimeout>
  tokenTracker: AgentTokenTracker
}

const MODEL_MAP: Record<string, string> = {
  opus: 'claude-opus-4-6',
  sonnet: 'claude-sonnet-4-6',
  haiku: 'claude-haiku-4-5-20251001',
}

const agents = new Map<string, AgentProcess>()

/** Returns the best working directory for spawned processes. */
export function getWorkingDir(): string {
  const stored = store.get('projectPath')
  if (stored && typeof stored === 'string' && stored.trim()) {
    try {
      if (fs.existsSync(stored) && fs.statSync(stored).isDirectory()) {
        return stored
      }
    } catch { /* fall through to default */ }
  }
  return app.isPackaged ? path.dirname(app.getAppPath()) : process.cwd()
}

export function registerAgentHandlers(mainWindow: BrowserWindow): void {
  // Launch agent
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_LAUNCH)
  ipcMain.handle(
    IPC_CHANNELS.AGENT_LAUNCH,
    async (_event, config: { model: string; prompt: string; allowedTools: string[]; timeLimitSeconds?: number }) => {
      // E3: Limit concurrent agents
      const runningCount = [...agents.values()].filter(a => a.status === 'running').length
      if (runningCount >= 5) {
        return { ok: false, error: 'Maximum 5 concurrent agents reached' }
      }

      // Validate inputs
      if (!config || typeof config !== 'object') {
        return { ok: false, error: 'Invalid agent config' }
      }
      if (typeof config.prompt !== 'string' || !config.prompt.trim()) {
        return { ok: false, error: 'Prompt is required' }
      }
      if (config.prompt.length > 100_000) {
        return { ok: false, error: 'Prompt too long (max 100,000 characters)' }
      }
      if (typeof config.model !== 'string') {
        return { ok: false, error: 'Model must be a string' }
      }
      if (!Array.isArray(config.allowedTools) || !config.allowedTools.every((t: unknown) => typeof t === 'string')) {
        return { ok: false, error: 'allowedTools must be an array of strings' }
      }

      const id = crypto.randomUUID()
      const modelId = MODEL_MAP[config.model] || MODEL_MAP['sonnet']!

      const args = [
        '-p',
        config.prompt,
        '--model',
        modelId,
        '--output-format',
        'stream-json',
        '--verbose',
        '--dangerously-skip-permissions',
      ]

      if (config.allowedTools.length > 0) {
        args.push('--allowedTools', config.allowedTools.join(','))
      }

      // Only pass safe environment variables to the child process
      const safeEnv: Record<string, string> = {}
      const allowedEnvKeys = ['PATH', 'HOME', 'USER', 'SHELL', 'LANG', 'TERM', 'TMPDIR', 'XDG_RUNTIME_DIR', 'NODE_ENV']
      for (const key of allowedEnvKeys) {
        if (process.env[key]) {
          safeEnv[key] = process.env[key]!
        }
      }
      // Ensure common CLI install paths are in PATH (macOS GUI apps get a minimal PATH)
      const extraPaths = [
        `${process.env.HOME}/.local/bin`,
        '/usr/local/bin',
        '/opt/homebrew/bin',
        `${process.env.HOME}/.nvm/versions/node/current/bin`,
        `${process.env.HOME}/.npm-global/bin`,
      ]
      const currentPath = safeEnv.PATH || '/usr/bin:/bin'
      safeEnv.PATH = [...extraPaths, currentPath].join(':')
      // Try keytar first (user configured in-app), fall back to env var
      const claudeKey = await keytar.getPassword('com.mirox.app', 'claude-token')
      if (claudeKey) {
        safeEnv.ANTHROPIC_API_KEY = claudeKey
      } else if (process.env.ANTHROPIC_API_KEY) {
        safeEnv.ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
      }

      const child = spawn('claude', args, {
        cwd: getWorkingDir(),
        env: safeEnv,
        stdio: ['ignore', 'pipe', 'pipe'],
      })

      const agent: AgentProcess = {
        id,
        process: child,
        model: config.model,
        prompt: config.prompt,
        startedAt: Date.now(),
        status: 'running',
        allowedTools: config.allowedTools,
        tokenTracker: { inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 },
      }

      agents.set(id, agent)

      // E1: Execution timeout (configurable via timeLimitSeconds, default 30 minutes)
      const timeoutMs = (config.timeLimitSeconds && config.timeLimitSeconds > 0)
        ? config.timeLimitSeconds * 1000
        : 30 * 60 * 1000
      agent.executionTimeout = setTimeout(() => {
        const agentRef = agents.get(id)
        if (agentRef && agentRef.status === 'running') {
          agentRef.status = 'killed'
          sendLog(mainWindow, id, 'system', 'Agent killed — execution timeout reached')
          agentRef.process.kill('SIGTERM')
          // Escalate to SIGKILL after 10s if still alive
          setTimeout(() => {
            try { agentRef.process.kill('SIGKILL') } catch { /* already dead */ }
          }, 10_000)
        }
      }, timeoutMs)

      sendLog(mainWindow, id, 'system', `Agent ${id.slice(0, 8)} launched with model ${config.model}`)

      // Buffer stdout and split by newlines before parsing
      let stdoutBuffer = ''
      child.stdout?.on('data', (chunk: Buffer) => {
        stdoutBuffer += chunk.toString()
        const lines = stdoutBuffer.split('\n')
        stdoutBuffer = lines.pop() || ''
        for (const line of lines) {
          if (!line.trim()) continue
          try {
            const parsed = JSON.parse(line) as {
              type?: string
              message?: { usage?: { input_tokens?: number; output_tokens?: number; cache_read_input_tokens?: number; cache_creation_input_tokens?: number } }
              delta?: { text?: string }
              result?: { usage?: { input_tokens?: number; output_tokens?: number; cache_read_input_tokens?: number; cache_creation_input_tokens?: number } }
            }
            const agentRef = agents.get(id)
            if (parsed.type === 'message_start' && parsed.message?.usage && agentRef) {
              agentRef.tokenTracker.inputTokens += parsed.message.usage.input_tokens || 0
              agentRef.tokenTracker.outputTokens += parsed.message.usage.output_tokens || 0
              agentRef.tokenTracker.cacheReadTokens += parsed.message.usage.cache_read_input_tokens || 0
              agentRef.tokenTracker.cacheWriteTokens += parsed.message.usage.cache_creation_input_tokens || 0
              emitContextUpdate(mainWindow, id, agentRef.tokenTracker)
            } else if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
              sendLog(mainWindow, id, 'stdout', parsed.delta.text)
            } else if (parsed.type === 'result' && parsed.result?.usage && agentRef) {
              agentRef.tokenTracker.inputTokens += parsed.result.usage.input_tokens || 0
              agentRef.tokenTracker.outputTokens += parsed.result.usage.output_tokens || 0
              agentRef.tokenTracker.cacheReadTokens += parsed.result.usage.cache_read_input_tokens || 0
              agentRef.tokenTracker.cacheWriteTokens += parsed.result.usage.cache_creation_input_tokens || 0
              emitContextUpdate(mainWindow, id, agentRef.tokenTracker)
            }
            // Parsed JSON lines are NOT sent as raw stdout logs (avoid double-logging)
          } catch {
            // Not JSON — send as regular stdout log
            sendLog(mainWindow, id, 'stdout', line)
          }
        }
      })

      let stderrBuffer = ''
      child.stderr?.on('data', (chunk: Buffer) => {
        stderrBuffer += chunk.toString()
        const lines = stderrBuffer.split('\n')
        stderrBuffer = lines.pop() || ''
        for (const line of lines) {
          if (line.trim()) {
            sendLog(mainWindow, id, 'stderr', line)
          }
        }
      })

      child.on('close', (code) => {
        // Clear execution timeout
        const closingAgent = agents.get(id)
        if (closingAgent?.executionTimeout) clearTimeout(closingAgent.executionTimeout)

        // Flush remaining buffers
        if (stdoutBuffer.trim()) {
          sendLog(mainWindow, id, 'stdout', stdoutBuffer)
        }
        if (stderrBuffer.trim()) {
          sendLog(mainWindow, id, 'stderr', stderrBuffer)
        }

        const agentRef = agents.get(id)
        if (agentRef && agentRef.status === 'running') {
          agentRef.status = code === 0 ? 'completed' : 'failed'
        }

        sendLog(mainWindow, id, 'system', `Agent exited with code ${code ?? 'unknown'}`)

        if (!mainWindow.isDestroyed()) {
          mainWindow.webContents.send(IPC_CHANNELS.AGENT_EXIT, {
            id,
            exitCode: code,
            status: agentRef?.status || (code === 0 ? 'completed' : 'failed'),
            usage: agentRef?.tokenTracker,
          })
        }

        agents.delete(id)
      })

      child.on('error', (err) => {
        const agentRef = agents.get(id)
        if (agentRef) {
          if (agentRef.executionTimeout) clearTimeout(agentRef.executionTimeout)
          agentRef.status = 'failed'
        }

        // Provide a helpful message if the claude CLI is not installed
        const isEnoent = (err as NodeJS.ErrnoException).code === 'ENOENT'
        const message = isEnoent
          ? 'Claude CLI not found. Install it from https://claude.ai/download'
          : `Agent error: ${err.message}`

        sendLog(mainWindow, id, 'system', message)

        if (!mainWindow.isDestroyed()) {
          mainWindow.webContents.send(IPC_CHANNELS.AGENT_EXIT, {
            id,
            exitCode: -1,
            status: 'failed',
          })
        }
        agents.delete(id)
      })

      return { ok: true, id, model: config.model, startedAt: agent.startedAt }
    }
  )

  // Kill specific agent
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_KILL)
  ipcMain.handle(IPC_CHANNELS.AGENT_KILL, (_event, id: string) => {
    const agent = agents.get(id)
    if (!agent) {
      return { ok: false, error: 'Agent not found' }
    }
    agent.status = 'killed'
    if (agent.executionTimeout) clearTimeout(agent.executionTimeout)
    agent.process.kill('SIGTERM')
    // Escalate to SIGKILL after 10s if still alive
    setTimeout(() => {
      try { agent.process.kill('SIGKILL') } catch { /* already dead */ }
    }, 10_000)
    sendLog(mainWindow, id, 'system', 'Agent killed by user')
    return { ok: true }
  })

  // Kill all agents
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_KILL_ALL)
  ipcMain.handle(IPC_CHANNELS.AGENT_KILL_ALL, () => {
    const count = agents.size
    for (const [id, agent] of agents) {
      agent.status = 'killed'
      if (agent.executionTimeout) clearTimeout(agent.executionTimeout)
      agent.process.kill('SIGTERM')
      // Escalate to SIGKILL after 10s if still alive
      const proc = agent.process
      setTimeout(() => {
        try { proc.kill('SIGKILL') } catch { /* already dead */ }
      }, 10_000)
      sendLog(mainWindow, id, 'system', 'Agent killed (kill-all)')
    }
    return { ok: true, killed: count }
  })

  // Rollback via git reset — runs directly without a Claude agent to avoid token cost
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_ROLLBACK)
  ipcMain.handle(IPC_CHANNELS.AGENT_ROLLBACK, (_event, tag: string) => {
    return new Promise<{ ok: boolean; error?: string }>((resolve) => {
      // Validate tag format to prevent shell injection (git refs: alnum, -, ., /, _, ~, ^)
      if (!/^[a-zA-Z0-9._\-/]+$/.test(tag)) {
        resolve({ ok: false, error: 'Invalid git ref format' })
        return
      }
      exec(
        `git reset --hard ${tag}`,
        { cwd: getWorkingDir() },
        (error) => {
          if (error) {
            resolve({ ok: false, error: error.message })
          } else {
            resolve({ ok: true })
          }
        }
      )
    })
  })

  // Get current project directory
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_GET_PROJECT_DIR)
  ipcMain.handle(IPC_CHANNELS.AGENT_GET_PROJECT_DIR, () => {
    return {
      ok: true,
      projectPath: getWorkingDir(),
      isCustom: !!store.get('projectPath'),
    }
  })

  // Set project directory via native folder picker
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_SET_PROJECT_DIR)
  ipcMain.handle(IPC_CHANNELS.AGENT_SET_PROJECT_DIR, async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory', 'createDirectory'],
      title: 'Select Project Directory',
      buttonLabel: 'Select',
    })

    if (result.canceled || result.filePaths.length === 0) {
      return { ok: false, canceled: true }
    }

    const dirPath = result.filePaths[0]!

    try {
      const stat = fs.statSync(dirPath)
      if (!stat.isDirectory()) {
        return { ok: false, error: 'Selected path is not a directory' }
      }
    } catch {
      return { ok: false, error: 'Selected directory does not exist' }
    }

    store.set('projectPath', dirPath)
    return { ok: true, projectPath: dirPath }
  })
}

function emitContextUpdate(
  mainWindow: BrowserWindow,
  agentId: string,
  tracker: AgentTokenTracker
): void {
  if (!mainWindow.isDestroyed()) {
    mainWindow.webContents.send(IPC_CHANNELS.AGENT_CONTEXT_UPDATE, {
      agentId,
      inputTokens: tracker.inputTokens,
      outputTokens: tracker.outputTokens,
      cacheReadTokens: tracker.cacheReadTokens,
      cacheWriteTokens: tracker.cacheWriteTokens,
    })
  }
}

function sendLog(
  mainWindow: BrowserWindow,
  agentId: string,
  type: 'stdout' | 'stderr' | 'system',
  text: string
): void {
  if (!mainWindow.isDestroyed()) {
    mainWindow.webContents.send(IPC_CHANNELS.AGENT_LOG, {
      agentId,
      timestamp: Date.now(),
      type,
      text,
    })
  }
}
