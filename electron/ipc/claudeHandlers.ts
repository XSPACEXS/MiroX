import { ipcMain } from 'electron'
import { spawn } from 'child_process'
import * as keytar from 'keytar'
import { IPC_CHANNELS } from './channels'

const SERVICE = 'com.mirox.app'
const CLAUDE_ACCOUNT = 'claude-token'

function maskToken(token: string): string {
  if (token.length <= 8) return '****'
  return `${token.slice(0, 4)}...${token.slice(-4)}`
}

export function registerClaudeHandlers(): void {
  // Get token
  ipcMain.removeHandler(IPC_CHANNELS.CLAUDE_GET_TOKEN)
  ipcMain.handle(IPC_CHANNELS.CLAUDE_GET_TOKEN, async () => {
    try {
      const token = await keytar.getPassword(SERVICE, CLAUDE_ACCOUNT)
      if (token) {
        return { ok: true, hasToken: true, masked: maskToken(token) }
      }
      // Fall back to env var
      if (process.env.ANTHROPIC_API_KEY) {
        return { ok: true, hasToken: true, masked: maskToken(process.env.ANTHROPIC_API_KEY) }
      }
      return { ok: true, hasToken: false, masked: '' }
    } catch {
      return { ok: false, hasToken: false, masked: '' }
    }
  })

  // Set token
  ipcMain.removeHandler(IPC_CHANNELS.CLAUDE_SET_TOKEN)
  ipcMain.handle(IPC_CHANNELS.CLAUDE_SET_TOKEN, async (_event, token: string) => {
    try {
      if (typeof token !== 'string') {
        return { ok: false, error: 'Invalid token' }
      }
      const trimmed = token.trim()
      if (trimmed.length === 0) {
        await keytar.deletePassword(SERVICE, CLAUDE_ACCOUNT)
        return { ok: true }
      }
      if (trimmed.length > 1000) {
        return { ok: false, error: 'Token too long' }
      }
      await keytar.setPassword(SERVICE, CLAUDE_ACCOUNT, trimmed)
      return { ok: true }
    } catch {
      return { ok: false, error: 'Failed to save Claude token' }
    }
  })

  // Test connection — run `claude --version` with the stored key
  ipcMain.removeHandler(IPC_CHANNELS.CLAUDE_TEST_CONNECTION)
  ipcMain.handle(IPC_CHANNELS.CLAUDE_TEST_CONNECTION, async () => {
    try {
      const token = await keytar.getPassword(SERVICE, CLAUDE_ACCOUNT)
      const envKey = token || process.env.ANTHROPIC_API_KEY
      if (!envKey) {
        return { ok: false, error: 'No API key configured' }
      }

      const version = await new Promise<string>((resolve, reject) => {
        const env: Record<string, string> = { ...process.env as Record<string, string>, ANTHROPIC_API_KEY: envKey }
        const child = spawn('claude', ['--version'], {
          env,
          stdio: ['ignore', 'pipe', 'pipe'],
          timeout: 10_000,
        })

        let stdout = ''
        child.stdout.on('data', (data: Buffer) => { stdout += data.toString() })
        child.on('close', (code) => {
          if (code === 0 && stdout.trim()) {
            resolve(stdout.trim())
          } else {
            reject(new Error('Claude CLI not available'))
          }
        })
        child.on('error', () => reject(new Error('Claude CLI not found')))
      })

      return { ok: true, version }
    } catch (err) {
      return { ok: false, error: err instanceof Error ? err.message : 'Connection test failed' }
    }
  })
}
