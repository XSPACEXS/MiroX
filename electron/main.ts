import { app, BrowserWindow, Menu, session, shell } from 'electron'
import path from 'path'
import { store } from './config'
import { registerSystemHandlers } from './ipc/handlers'
import { registerMiroHandlers } from './ipc/miroHandlers'
import { registerGithubHandlers } from './ipc/githubHandlers'
import { registerAgentHandlers } from './ipc/agentHandlers'
import { registerSelfTestHandlers } from './ipc/selfTestHandlers'

let mainWindow: BrowserWindow | null = null

const isDev = !app.isPackaged

function createWindow(): void {
  const savedBounds = store.get('windowBounds')
  const wasMaximized = store.get('windowMaximized', false)

  mainWindow = new BrowserWindow({
    width: savedBounds?.width ?? 1200,
    height: savedBounds?.height ?? 800,
    x: savedBounds?.x,
    y: savedBounds?.y,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#0A0A0A',
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 16, y: 16 },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
    show: false,
  })

  // Track window state for persistence
  const saveWindowState = () => {
    if (!mainWindow || mainWindow.isDestroyed()) return
    const isMaximized = mainWindow.isMaximized()
    store.set('windowMaximized', isMaximized)
    if (!isMaximized) {
      const bounds = mainWindow.getBounds()
      store.set('windowBounds', bounds)
    }
  }

  mainWindow.on('resize', saveWindowState)
  mainWindow.on('move', saveWindowState)
  mainWindow.on('maximize', saveWindowState)
  mainWindow.on('unmaximize', saveWindowState)

  // Show window when ready to prevent visual flash
  mainWindow.once('ready-to-show', () => {
    if (wasMaximized) {
      mainWindow?.maximize()
    }
    mainWindow?.show()
  })

  // Load the app
  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  // Register IPC handlers
  registerSystemHandlers(mainWindow)
  registerMiroHandlers()
  registerGithubHandlers()
  registerAgentHandlers(mainWindow)
  registerSelfTestHandlers(mainWindow)

  // Prevent new windows — open external links in browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    try {
      const parsed = new URL(url)
      if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
        shell.openExternal(url)
      }
    } catch {
      // Invalid URL — silently deny
    }
    return { action: 'deny' }
  })

  // Block navigation away from the app
  mainWindow.webContents.on('will-navigate', (event, url) => {
    const appUrl = isDev ? 'http://localhost:5173' : 'file://'
    if (!url.startsWith(appUrl)) {
      event.preventDefault()
      try {
        const parsed = new URL(url)
        if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
          shell.openExternal(url)
        }
      } catch {
        // Invalid URL — silently block
      }
    }
  })

  // Cleanup on close
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// Create application menu
function createMenu(): void {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        {
          label: 'Settings',
          accelerator: 'Cmd+,',
          click: () => {
            mainWindow?.webContents.send('navigate', '/settings')
          },
        },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    },
    {
      label: 'File',
      submenu: [
        {
          label: 'New Board',
          accelerator: 'Cmd+N',
          click: () => {
            mainWindow?.webContents.send('navigate', '/templates')
          },
        },
        {
          label: 'Import...',
          accelerator: 'Cmd+I',
          click: () => {
            mainWindow?.webContents.send('navigate', '/import')
          },
        },
        { type: 'separator' },
        { role: 'close' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        ...(isDev ? [{ role: 'toggleDevTools' as const }] : []),
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      label: 'Navigate',
      submenu: [
        {
          label: 'Home',
          accelerator: 'Cmd+1',
          click: () => {
            mainWindow?.webContents.send('navigate', '/')
          },
        },
        {
          label: 'Templates',
          accelerator: 'Cmd+2',
          click: () => {
            mainWindow?.webContents.send('navigate', '/templates')
          },
        },
        {
          label: 'Import',
          accelerator: 'Cmd+3',
          click: () => {
            mainWindow?.webContents.send('navigate', '/import')
          },
        },
        {
          label: 'Settings',
          accelerator: 'Cmd+4',
          click: () => {
            mainWindow?.webContents.send('navigate', '/settings')
          },
        },
        {
          label: 'Agent Center',
          accelerator: 'Cmd+5',
          click: () => {
            mainWindow?.webContents.send('navigate', '/agent-center')
          },
        },
      ],
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        { type: 'separator' },
        { role: 'front' },
      ],
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'MiroX Documentation',
          click: () => {
            shell.openExternal('https://github.com/XSPACEXS/MiroX')
          },
        },
        {
          label: 'Report Issue',
          click: () => {
            shell.openExternal('https://github.com/XSPACEXS/MiroX/issues')
          },
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

// Set CSP headers for production (dev mode needs relaxed CSP for Vite HMR)
function setupCSP(): void {
  if (!isDev) {
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
      callback({
        responseHeaders: {
          ...details.responseHeaders,
          'Content-Security-Policy': [
            "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://api.miro.com https://api.github.com;"
          ]
        }
      })
    })
  }
}

// App lifecycle
app.whenReady().then(() => {
  setupCSP()
  createWindow()
  createMenu()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed (except macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Security: Prevent new window creation from renderer
app.on('web-contents-created', (_, contents) => {
  contents.on('will-navigate', (event, url) => {
    const appUrl = isDev ? 'http://localhost:5173' : 'file://'
    if (!url.startsWith(appUrl)) {
      event.preventDefault()
    }
  })
})
