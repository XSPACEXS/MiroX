import { app, BrowserWindow, dialog, ipcMain, shell } from 'electron'
import fs from 'fs/promises'
import path from 'path'
import { store } from '../config'

export function registerSystemHandlers(mainWindow: BrowserWindow): void {
  // System info
  ipcMain.removeHandler('system:info')
  ipcMain.handle('system:info', () => ({
    platform: process.platform,
    arch: process.arch,
    version: process.versions.electron,
    appVersion: app.getVersion(),
    nodeVersion: process.versions.node,
  }))

  // System quit
  ipcMain.removeHandler('system:quit')
  ipcMain.handle('system:quit', () => {
    app.quit()
  })

  // Window controls
  ipcMain.removeHandler('window:minimize')
  ipcMain.handle('window:minimize', () => {
    mainWindow.minimize()
  })

  ipcMain.removeHandler('window:maximize')
  ipcMain.handle('window:maximize', () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  })

  ipcMain.removeHandler('window:close')
  ipcMain.handle('window:close', () => {
    mainWindow.close()
  })

  // File open dialog
  ipcMain.removeHandler('file:open-dialog')
  ipcMain.handle('file:open-dialog', async (_event, options?: Electron.OpenDialogOptions) => {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [
        { name: 'Documents', extensions: ['pdf', 'docx', 'doc', 'txt', 'md', 'csv', 'xlsx', 'xls', 'json'] },
        { name: 'All Files', extensions: ['*'] },
      ],
      ...options,
    })
    if (result.canceled || result.filePaths.length === 0) {
      return null
    }
    return result.filePaths[0]
  })

  // File read
  ipcMain.removeHandler('file:read')
  ipcMain.handle('file:read', async (_event, filePath: string) => {
    try {
      const content = await fs.readFile(filePath)
      return {
        ok: true,
        content: content.toString('base64'),
        size: content.length,
        name: path.basename(filePath),
        ext: path.extname(filePath).toLowerCase(),
      }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // File parse — delegates to appropriate parser based on file type
  ipcMain.removeHandler('file:parse')
  ipcMain.handle('file:parse', async (_event, filePath: string, fileName: string, mimeType: string) => {
    try {
      const ext = path.extname(fileName).toLowerCase()
      let text = ''

      if (ext === '.pdf') {
        const pdfParse = (await import('pdf-parse')).default
        const buffer = await fs.readFile(filePath)
        const data = await pdfParse(buffer)
        text = data.text
      } else if (ext === '.docx' || ext === '.doc') {
        const mammoth = await import('mammoth')
        const result = await mammoth.extractRawText({ path: filePath })
        text = result.value
      } else if (ext === '.xlsx' || ext === '.xls') {
        const XLSX = await import('xlsx')
        const workbook = XLSX.readFile(filePath)
        const sheets: string[] = []
        for (const sheetName of workbook.SheetNames) {
          const sheet = workbook.Sheets[sheetName]
          if (sheet) {
            sheets.push(`## ${sheetName}\n${XLSX.utils.sheet_to_csv(sheet)}`)
          }
        }
        text = sheets.join('\n\n')
      } else if (ext === '.csv') {
        const content = await fs.readFile(filePath, 'utf-8')
        text = content
      } else if (ext === '.json') {
        const content = await fs.readFile(filePath, 'utf-8')
        text = content
      } else {
        // Plain text fallback
        text = await fs.readFile(filePath, 'utf-8')
      }

      return {
        ok: true,
        text,
        fileName,
        mimeType,
        ext,
      }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // URL fetch
  ipcMain.removeHandler('file:fetch-url')
  ipcMain.handle('file:fetch-url', async (_event, url: string) => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      const text = await response.text()
      return { ok: true, text, url }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // Settings
  ipcMain.removeHandler('settings:load')
  ipcMain.handle('settings:load', () => {
    return store.store
  })

  ipcMain.removeHandler('settings:save')
  ipcMain.handle('settings:save', (_event, settings: Record<string, unknown>) => {
    for (const [key, value] of Object.entries(settings)) {
      store.set(key as keyof typeof store.store, value)
    }
    return { ok: true }
  })

  // Shell
  ipcMain.removeHandler('shell:open-external')
  ipcMain.handle('shell:open-external', async (_event, url: string) => {
    // Validate URL before opening
    try {
      const parsed = new URL(url)
      if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
        await shell.openExternal(url)
        return { ok: true }
      }
      return { ok: false, error: 'Only http/https URLs are allowed' }
    } catch {
      return { ok: false, error: 'Invalid URL' }
    }
  })
}
