import { ipcMain, app } from 'electron'
import fs from 'fs'
import path from 'path'
import { IPC_CHANNELS } from './channels'

function getMissionsDir(): string {
  const dir = path.join(app.getPath('userData'), 'missions')
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  return dir
}

export function registerMissionLogHandlers(): void {
  // Write event to mission log (append JSONL)
  ipcMain.removeHandler(IPC_CHANNELS.MISSION_LOG_WRITE)
  ipcMain.handle(
    IPC_CHANNELS.MISSION_LOG_WRITE,
    (_event, missionId: string, eventData: { type: string; data: Record<string, unknown> }) => {
      try {
        if (!missionId || typeof missionId !== 'string') return { ok: false, error: 'Invalid missionId' }
        // Sanitize missionId for filesystem safety
        const safeId = missionId.replace(/[^a-zA-Z0-9_-]/g, '_')
        const filePath = path.join(getMissionsDir(), `${safeId}.jsonl`)
        const line = JSON.stringify({ timestamp: Date.now(), type: eventData.type, data: eventData.data }) + '\n'
        fs.appendFileSync(filePath, line, 'utf-8')
        return { ok: true }
      } catch (err) {
        return { ok: false, error: (err as Error).message }
      }
    }
  )

  // Read all events for a mission
  ipcMain.removeHandler(IPC_CHANNELS.MISSION_LOG_READ)
  ipcMain.handle(IPC_CHANNELS.MISSION_LOG_READ, (_event, missionId: string) => {
    try {
      const safeId = missionId.replace(/[^a-zA-Z0-9_-]/g, '_')
      const filePath = path.join(getMissionsDir(), `${safeId}.jsonl`)
      if (!fs.existsSync(filePath)) return { ok: true, events: [] }
      const content = fs.readFileSync(filePath, 'utf-8')
      const events = content.trim().split('\n').filter(Boolean).map((line) => {
        try { return JSON.parse(line) } catch { return null }
      }).filter(Boolean)
      return { ok: true, events }
    } catch (err) {
      return { ok: false, error: (err as Error).message }
    }
  })

  // List all mission logs
  ipcMain.removeHandler(IPC_CHANNELS.MISSION_LOG_LIST)
  ipcMain.handle(IPC_CHANNELS.MISSION_LOG_LIST, () => {
    try {
      const dir = getMissionsDir()
      const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jsonl'))
      const missions = files.map((f) => ({
        id: f.replace('.jsonl', ''),
        path: path.join(dir, f),
        size: fs.statSync(path.join(dir, f)).size,
      }))
      return { ok: true, missions }
    } catch (err) {
      return { ok: false, error: (err as Error).message }
    }
  })
}
