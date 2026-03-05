import { BrowserWindow, ipcMain } from 'electron'
import { spawn, type ChildProcess } from 'child_process'
import crypto from 'crypto'

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

export function registerAgentHandlers(mainWindow: BrowserWindow): void {
  // Launch agent
  ipcMain.removeHandler('agent:launch')
  ipcMain.handle(
    'agent:launch',
    (_event, config: { model: string; prompt: string; allowedTools: string[] }) => {
      const id = crypto.randomUUID()
      const modelId = MODEL_MAP[config.model] || MODEL_MAP['sonnet']!

      const args = [
        '-p',
        config.prompt,
        '--model',
        modelId,
        '--output-format',
        'stream-json',
        '--dangerously-skip-permissions',
      ]

      if (config.allowedTools.length > 0) {
        args.push('--allowedTools', config.allowedTools.join(','))
      }

      const child = spawn('claude', args, {
        cwd: process.cwd(),
        env: { ...process.env },
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

      // Send system message about launch
      sendLog(mainWindow, id, 'system', `Agent ${id.slice(0, 8)} launched with model ${config.model}`)

      // Buffer stdout and split by newlines
      let stdoutBuffer = ''
      child.stdout?.on('data', (chunk: Buffer) => {
        stdoutBuffer += chunk.toString()
        const lines = stdoutBuffer.split('\n')
        // Keep last incomplete line in buffer
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
        if (agentRef) {
          if (agentRef.status === 'running') {
            agentRef.status = code === 0 ? 'completed' : 'failed'
          }
        }

        sendLog(mainWindow, id, 'system', `Agent exited with code ${code ?? 'unknown'}`)

        if (!mainWindow.isDestroyed()) {
          mainWindow.webContents.send('agent:exit', {
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
        sendLog(mainWindow, id, 'system', `Agent error: ${err.message}`)
        if (!mainWindow.isDestroyed()) {
          mainWindow.webContents.send('agent:exit', {
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
  ipcMain.removeHandler('agent:kill')
  ipcMain.handle('agent:kill', (_event, id: string) => {
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
  ipcMain.removeHandler('agent:kill-all')
  ipcMain.handle('agent:kill-all', () => {
    const count = agents.size
    for (const [id, agent] of agents) {
      agent.status = 'killed'
      agent.process.kill('SIGTERM')
      sendLog(mainWindow, id, 'system', 'Agent killed (kill-all)')
    }
    return { ok: true, killed: count }
  })
}

function sendLog(
  mainWindow: BrowserWindow,
  agentId: string,
  type: 'stdout' | 'stderr' | 'system',
  text: string
): void {
  if (!mainWindow.isDestroyed()) {
    mainWindow.webContents.send('agent:log', {
      agentId,
      timestamp: Date.now(),
      type,
      text,
    })
  }
}
