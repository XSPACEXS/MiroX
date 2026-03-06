import { app, BrowserWindow, dialog, ipcMain, shell } from 'electron'
import { execSync } from 'child_process'
import fs from 'fs/promises'
import path from 'path'
import { store } from '../config'
import { IPC_CHANNELS } from './channels'
import { fetchWithTimeout } from '../utils/fetchWithTimeout'

/**
 * Validate a file path is safe to read:
 * - Must be a non-empty absolute path
 * - Must not contain path traversal after normalization
 */
function validateFilePath(filePath: string): string | null {
  if (typeof filePath !== 'string' || !filePath.trim()) return 'Invalid file path'
  if (!path.isAbsolute(filePath)) return 'Absolute path required'
  const normalized = path.normalize(filePath)
  // After normalization, the path should not contain '..'
  if (normalized.includes('..')) return 'Path traversal not allowed'
  return null
}

export function registerSystemHandlers(mainWindow: BrowserWindow): void {
  // System info
  ipcMain.removeHandler(IPC_CHANNELS.SYSTEM_INFO)
  ipcMain.handle(IPC_CHANNELS.SYSTEM_INFO, () => ({
    platform: process.platform,
    arch: process.arch,
    version: process.versions.electron,
    appVersion: app.getVersion(),
    nodeVersion: process.versions.node,
  }))

  // System quit
  ipcMain.removeHandler(IPC_CHANNELS.SYSTEM_QUIT)
  ipcMain.handle(IPC_CHANNELS.SYSTEM_QUIT, () => {
    app.quit()
  })

  // Window controls
  ipcMain.removeHandler(IPC_CHANNELS.WINDOW_MINIMIZE)
  ipcMain.handle(IPC_CHANNELS.WINDOW_MINIMIZE, () => {
    mainWindow.minimize()
  })

  ipcMain.removeHandler(IPC_CHANNELS.WINDOW_MAXIMIZE)
  ipcMain.handle(IPC_CHANNELS.WINDOW_MAXIMIZE, () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  })

  ipcMain.removeHandler(IPC_CHANNELS.WINDOW_CLOSE)
  ipcMain.handle(IPC_CHANNELS.WINDOW_CLOSE, () => {
    mainWindow.close()
  })

  // File open dialog
  ipcMain.removeHandler(IPC_CHANNELS.FILE_OPEN_DIALOG)
  ipcMain.handle(IPC_CHANNELS.FILE_OPEN_DIALOG, async (_event, options?: Record<string, unknown>) => {
    // Whitelist allowed properties to prevent abuse
    const allowedProperties: Electron.OpenDialogOptions['properties'] = ['openFile']
    if (
      options &&
      Array.isArray(options.properties) &&
      options.properties.includes('multiSelections')
    ) {
      allowedProperties.push('multiSelections')
    }

    // Whitelist filters — only allow known safe extensions
    const allowedExtensions = ['pdf', 'docx', 'doc', 'txt', 'md', 'csv', 'xlsx', 'xls', 'json']
    let filters: Electron.FileFilter[] = [
      { name: 'Documents', extensions: allowedExtensions },
      { name: 'All Files', extensions: ['*'] },
    ]
    if (options && Array.isArray(options.filters)) {
      filters = (options.filters as Array<{ name?: string; extensions?: string[] }>)
        .filter(
          (f): f is { name: string; extensions: string[] } =>
            typeof f.name === 'string' &&
            Array.isArray(f.extensions) &&
            f.extensions.every((e: unknown) => typeof e === 'string')
        )
        .map((f) => ({
          name: f.name,
          extensions: f.extensions.filter((e) => /^[a-zA-Z0-9*]+$/.test(e)),
        }))
      if (filters.length === 0) {
        filters = [
          { name: 'Documents', extensions: allowedExtensions },
          { name: 'All Files', extensions: ['*'] },
        ]
      }
    }

    const result = await dialog.showOpenDialog(mainWindow, {
      properties: allowedProperties,
      filters,
    })
    if (result.canceled || result.filePaths.length === 0) {
      return null
    }
    return result.filePaths
  })

  // File read
  ipcMain.removeHandler(IPC_CHANNELS.FILE_READ)
  ipcMain.handle(IPC_CHANNELS.FILE_READ, async (_event, filePath: string) => {
    const pathErr = validateFilePath(filePath)
    if (pathErr) return { ok: false, error: pathErr }
    try {
      // Check file size before reading (max 50 MB)
      const stat = await fs.stat(filePath)
      if (stat.size > 50 * 1024 * 1024) {
        return { ok: false, error: 'File too large (max 50 MB)' }
      }
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
  ipcMain.removeHandler(IPC_CHANNELS.FILE_PARSE)
  ipcMain.handle(IPC_CHANNELS.FILE_PARSE, async (_event, filePath: string, fileName: string, mimeType: string) => {
    const pathErr = validateFilePath(filePath)
    if (pathErr) return { ok: false, error: pathErr }
    if (typeof fileName !== 'string' || !fileName.trim()) {
      return { ok: false, error: 'Invalid file name' }
    }
    if (typeof mimeType !== 'string') {
      return { ok: false, error: 'Invalid MIME type' }
    }
    // Check file size before parsing (max 50 MB)
    try {
      const stat = await fs.stat(filePath)
      if (stat.size > 50 * 1024 * 1024) {
        return { ok: false, error: 'File too large (max 50 MB)' }
      }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
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
  ipcMain.removeHandler(IPC_CHANNELS.FILE_FETCH_URL)
  ipcMain.handle(IPC_CHANNELS.FILE_FETCH_URL, async (_event, url: string) => {
    if (typeof url !== 'string' || !url.trim()) {
      return { ok: false, error: 'Invalid URL' }
    }
    try {
      const parsed = new URL(url)
      if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
        return { ok: false, error: 'Only http/https URLs are supported' }
      }
      // Block requests to private/internal IPs (SSRF protection)
      const hostname = parsed.hostname.toLowerCase()
      if (
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '0.0.0.0' ||
        hostname === '::1' ||
        hostname === '[::1]' ||
        hostname.startsWith('10.') ||
        hostname.startsWith('192.168.') ||
        hostname.startsWith('169.254.') ||
        /^172\.(1[6-9]|2\d|3[01])\./.test(hostname) ||
        hostname.endsWith('.local') ||
        hostname.endsWith('.internal')
      ) {
        return { ok: false, error: 'Requests to private/internal addresses are not allowed' }
      }
    } catch {
      return { ok: false, error: 'Invalid URL format' }
    }
    try {
      const response = await fetchWithTimeout(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      // Limit response size to 10 MB to prevent memory exhaustion
      const maxSize = 10 * 1024 * 1024
      const contentLength = response.headers.get('content-length')
      if (contentLength && parseInt(contentLength, 10) > maxSize) {
        return { ok: false, error: 'Response too large (max 10 MB)' }
      }
      const text = await response.text()
      if (text.length > maxSize) {
        return { ok: false, error: 'Response too large (max 10 MB)' }
      }
      return { ok: true, text, url }
    } catch (err) {
      return { ok: false, error: String(err) }
    }
  })

  // Settings
  ipcMain.removeHandler(IPC_CHANNELS.SETTINGS_LOAD)
  ipcMain.handle(IPC_CHANNELS.SETTINGS_LOAD, () => {
    return store.store
  })

  ipcMain.removeHandler(IPC_CHANNELS.SETTINGS_SAVE)
  ipcMain.handle(IPC_CHANNELS.SETTINGS_SAVE, (_event, settings: Record<string, unknown>) => {
    if (!settings || typeof settings !== 'object' || Array.isArray(settings)) {
      return { ok: false, error: 'Invalid settings object' }
    }
    // Whitelist allowed keys to prevent config pollution
    const allowedKeys = new Set(['theme', 'accentColor', 'onboardingComplete', 'windowBounds', 'windowMaximized', 'recentBoards', 'totalBoardsCreated', 'projectPath'])
    for (const [key, value] of Object.entries(settings)) {
      if (allowedKeys.has(key)) {
        store.set(key as keyof typeof store.store, value)
      }
    }
    return { ok: true }
  })

  // iCloud check (macOS)
  ipcMain.removeHandler(IPC_CHANNELS.SYSTEM_CHECK_ICLOUD)
  ipcMain.handle(IPC_CHANNELS.SYSTEM_CHECK_ICLOUD, () => {
    try {
      const output = execSync('defaults read MobileMeAccounts Accounts 2>/dev/null', {
        encoding: 'utf-8',
        timeout: 5000,
      })
      const hasAccount = output.includes('AccountID')
      return { ok: hasAccount, account: hasAccount ? 'iCloud configured' : undefined }
    } catch {
      return { ok: false }
    }
  })

  // Shell
  ipcMain.removeHandler(IPC_CHANNELS.SHELL_OPEN_EXTERNAL)
  ipcMain.handle(IPC_CHANNELS.SHELL_OPEN_EXTERNAL, async (_event, url: string) => {
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
