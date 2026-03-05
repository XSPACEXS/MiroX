import { BrowserWindow, ipcMain, app } from 'electron'
import { spawn, exec, type ChildProcess } from 'child_process'
import path from 'path'
import crypto from 'crypto'
import { IPC_CHANNELS } from './channels'

interface AgentProcess {
  id: string
  process: ChildProcess
  model: string
  prompt: string
  startedAt: number
  status: 'running' | 'completed' | 'failed' | 'killed'
  allowedTools: string[]
}

const MODEL_MAP: Record<string, string> = {
  opus: 'claude-opus-4-6',
  sonnet: 'claude-sonnet-4-6',
  haiku: 'claude-haiku-4-5-20251001',
}

const agents = new Map<string, AgentProcess>()

/** Returns the best working directory for spawned processes. */
function getWorkingDir(): string {
  return app.isPackaged ? path.dirname(app.getAppPath()) : process.cwd()
}

export function registerAgentHandlers(mainWindow: BrowserWindow): void {
  // Launch agent
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_LAUNCH)
  ipcMain.handle(
    IPC_CHANNELS.AGENT_LAUNCH,
    (_event, config: { model: string; prompt: string; allowedTools: string[] }) => {
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
        // --dangerously-skip-permissions is required for the agent to run autonomously
        // without interactive confirmation prompts. This is intentional for the dev-tool
        // use case where the user has explicitly chosen to launch the agent.
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
      // Pass through ANTHROPIC_API_KEY if set (needed for Claude CLI)
      if (process.env.ANTHROPIC_API_KEY) {
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
      }

      agents.set(id, agent)

      sendLog(mainWindow, id, 'system', `Agent ${id.slice(0, 8)} launched with model ${config.model}`)

      // Buffer stdout and split by newlines before parsing
      let stdoutBuffer = ''
      child.stdout?.on('data', (chunk: Buffer) => {
        stdoutBuffer += chunk.toString()
        const lines = stdoutBuffer.split('\n')
        stdoutBuffer = lines.pop() || ''
        for (const line of lines) {
          if (line.trim()) {
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
          })
        }

        agents.delete(id)
      })

      child.on('error', (err) => {
        const agentRef = agents.get(id)
        if (agentRef) {
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
    agent.process.kill('SIGTERM')
    sendLog(mainWindow, id, 'system', 'Agent killed by user')
    return { ok: true }
  })

  // Kill all agents
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_KILL_ALL)
  ipcMain.handle(IPC_CHANNELS.AGENT_KILL_ALL, () => {
    const count = agents.size
    for (const [id, agent] of agents) {
      agent.status = 'killed'
      agent.process.kill('SIGTERM')
      sendLog(mainWindow, id, 'system', 'Agent killed (kill-all)')
    }
    return { ok: true, killed: count }
  })

  // Rollback via git reset — runs directly without a Claude agent to avoid token cost
  ipcMain.removeHandler(IPC_CHANNELS.AGENT_ROLLBACK)
  ipcMain.handle(IPC_CHANNELS.AGENT_ROLLBACK, (_event, tag: string) => {
    return new Promise<{ ok: boolean; error?: string }>((resolve) => {
      // Validate tag format to prevent shell injection (git refs: alnum, -, ., /, _, ~, ^)
      if (!/^[a-zA-Z0-9._\-/~^]+$/.test(tag)) {
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
