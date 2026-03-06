import { contextBridge, ipcRenderer } from 'electron'
import { IPC_CHANNELS } from './ipc/channels'

// NOTE: This file is the source of implementation for the IPC bridge.
// The renderer-side TypeScript interface lives in src/types/electron.ts and
// MUST be kept in sync with the object exposed below.

const electronAPI = {
  // System
  getSystemInfo: () => ipcRenderer.invoke(IPC_CHANNELS.SYSTEM_INFO),
  quit: () => ipcRenderer.invoke(IPC_CHANNELS.SYSTEM_QUIT),
  minimize: () => ipcRenderer.invoke(IPC_CHANNELS.WINDOW_MINIMIZE),
  maximize: () => ipcRenderer.invoke(IPC_CHANNELS.WINDOW_MAXIMIZE),
  close: () => ipcRenderer.invoke(IPC_CHANNELS.WINDOW_CLOSE),

  // Miro
  miro: {
    createBoard: (name: string, description?: string) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_CREATE_BOARD, name, description),
    listBoards: () => ipcRenderer.invoke(IPC_CHANNELS.MIRO_LIST_BOARDS),
    testConnection: () => ipcRenderer.invoke(IPC_CHANNELS.MIRO_TEST_CONNECTION),
    getToken: () => ipcRenderer.invoke(IPC_CHANNELS.MIRO_GET_TOKEN),
    setToken: (token: string) => ipcRenderer.invoke(IPC_CHANNELS.MIRO_SET_TOKEN, token),
    createFrame: (boardId: string, data: unknown) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_CREATE_FRAME, boardId, data),
    createShape: (boardId: string, data: unknown) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_CREATE_SHAPE, boardId, data),
    createStickyNote: (boardId: string, data: unknown) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_CREATE_STICKY, boardId, data),
    createText: (boardId: string, data: unknown) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_CREATE_TEXT, boardId, data),
    createConnector: (boardId: string, data: unknown) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_CREATE_CONNECTOR, boardId, data),
    deleteItem: (boardId: string, itemId: string) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_DELETE_ITEM, boardId, itemId),
    repositionItem: (boardId: string, itemId: string, x: number, y: number) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_REPOSITION_ITEM, boardId, itemId, x, y),
    deleteGhosts: (boardId: string) =>
      ipcRenderer.invoke(IPC_CHANNELS.MIRO_DELETE_GHOSTS, boardId),
  },

  // GitHub
  github: {
    getToken: () => ipcRenderer.invoke(IPC_CHANNELS.GITHUB_GET_TOKEN),
    setToken: (token: string) => ipcRenderer.invoke(IPC_CHANNELS.GITHUB_SET_TOKEN, token),
    listRepos: () => ipcRenderer.invoke(IPC_CHANNELS.GITHUB_LIST_REPOS),
    analyzeRepo: (owner: string, repo: string) =>
      ipcRenderer.invoke(IPC_CHANNELS.GITHUB_ANALYZE_REPO, owner, repo),
    testConnection: () => ipcRenderer.invoke(IPC_CHANNELS.GITHUB_TEST_CONNECTION),
  },

  // Files
  files: {
    openDialog: (options?: unknown) => ipcRenderer.invoke(IPC_CHANNELS.FILE_OPEN_DIALOG, options),
    readFile: (filePath: string) => ipcRenderer.invoke(IPC_CHANNELS.FILE_READ, filePath),
    parseFile: (filePath: string, fileName: string, mimeType: string) =>
      ipcRenderer.invoke(IPC_CHANNELS.FILE_PARSE, filePath, fileName, mimeType),
    fetchUrl: (url: string) => ipcRenderer.invoke(IPC_CHANNELS.FILE_FETCH_URL, url),
  },

  // Settings
  settings: {
    load: () => ipcRenderer.invoke(IPC_CHANNELS.SETTINGS_LOAD),
    save: (settings: unknown) => ipcRenderer.invoke(IPC_CHANNELS.SETTINGS_SAVE, settings),
  },

  // Shell
  openExternal: (url: string) => ipcRenderer.invoke(IPC_CHANNELS.SHELL_OPEN_EXTERNAL, url),

  // Agent
  agent: {
    launch: (config: { model: string; prompt: string; allowedTools: string[] }) =>
      ipcRenderer.invoke(IPC_CHANNELS.AGENT_LAUNCH, config),
    kill: (id: string) => ipcRenderer.invoke(IPC_CHANNELS.AGENT_KILL, id),
    killAll: () => ipcRenderer.invoke(IPC_CHANNELS.AGENT_KILL_ALL),
    rollback: (tag: string) => ipcRenderer.invoke(IPC_CHANNELS.AGENT_ROLLBACK, tag),
    getProjectDir: () => ipcRenderer.invoke(IPC_CHANNELS.AGENT_GET_PROJECT_DIR),
    setProjectDir: () => ipcRenderer.invoke(IPC_CHANNELS.AGENT_SET_PROJECT_DIR),
    onLog: (callback: (data: {
      agentId: string
      timestamp: number
      type: 'stdout' | 'stderr' | 'system'
      text: string
    }) => void) => {
      const handler = (
        _event: Electron.IpcRendererEvent,
        data: { agentId: string; timestamp: number; type: 'stdout' | 'stderr' | 'system'; text: string }
      ) => callback(data)
      ipcRenderer.on(IPC_CHANNELS.AGENT_LOG, handler)
      return () => {
        ipcRenderer.removeListener(IPC_CHANNELS.AGENT_LOG, handler)
      }
    },
    onExit: (callback: (data: {
      id: string
      exitCode: number | null
      status: 'completed' | 'failed' | 'killed'
    }) => void) => {
      const handler = (
        _event: Electron.IpcRendererEvent,
        data: { id: string; exitCode: number | null; status: 'completed' | 'failed' | 'killed' }
      ) => callback(data)
      ipcRenderer.on(IPC_CHANNELS.AGENT_EXIT, handler)
      return () => {
        ipcRenderer.removeListener(IPC_CHANNELS.AGENT_EXIT, handler)
      }
    },
    onContextUpdate: (callback: (data: {
      agentId: string
      inputTokens: number
      outputTokens: number
      cacheReadTokens: number
      cacheWriteTokens: number
    }) => void) => {
      const handler = (
        _event: Electron.IpcRendererEvent,
        data: { agentId: string; inputTokens: number; outputTokens: number; cacheReadTokens: number; cacheWriteTokens: number }
      ) => callback(data)
      ipcRenderer.on(IPC_CHANNELS.AGENT_CONTEXT_UPDATE, handler)
      return () => {
        ipcRenderer.removeListener(IPC_CHANNELS.AGENT_CONTEXT_UPDATE, handler)
      }
    },
  },

  // Gemini
  gemini: {
    getToken: () => ipcRenderer.invoke(IPC_CHANNELS.GEMINI_GET_TOKEN),
    setToken: (token: string) => ipcRenderer.invoke(IPC_CHANNELS.GEMINI_SET_TOKEN, token),
    testConnection: () => ipcRenderer.invoke(IPC_CHANNELS.GEMINI_TEST_CONNECTION),
    launch: (config: { model: string; prompt: string; contextFiles?: string[] }) =>
      ipcRenderer.invoke(IPC_CHANNELS.GEMINI_LAUNCH, config),
    launchImagen: (config: { prompt: string; model?: string; count?: number; aspectRatio?: string }) =>
      ipcRenderer.invoke(IPC_CHANNELS.GEMINI_LAUNCH_IMAGEN, config),
    launchVeo: (config: { prompt: string; durationSeconds?: number; aspectRatio?: string }) =>
      ipcRenderer.invoke(IPC_CHANNELS.GEMINI_LAUNCH_VEO, config),
    stop: (id: string) => ipcRenderer.invoke(IPC_CHANNELS.GEMINI_STOP, id),
    onLog: (callback: (data: {
      agentId: string
      timestamp: number
      type: 'stdout' | 'stderr' | 'system' | 'media'
      text: string
      mediaUrl?: string
      mediaMimeType?: string
    }) => void) => {
      const handler = (
        _event: Electron.IpcRendererEvent,
        data: {
          agentId: string
          timestamp: number
          type: 'stdout' | 'stderr' | 'system' | 'media'
          text: string
          mediaUrl?: string
          mediaMimeType?: string
        }
      ) => callback(data)
      ipcRenderer.on(IPC_CHANNELS.GEMINI_LOG, handler)
      return () => {
        ipcRenderer.removeListener(IPC_CHANNELS.GEMINI_LOG, handler)
      }
    },
    onExit: (callback: (data: {
      id: string
      exitCode: number | null
      status: 'completed' | 'failed' | 'killed'
    }) => void) => {
      const handler = (
        _event: Electron.IpcRendererEvent,
        data: { id: string; exitCode: number | null; status: 'completed' | 'failed' | 'killed' }
      ) => callback(data)
      ipcRenderer.on(IPC_CHANNELS.GEMINI_EXIT, handler)
      return () => {
        ipcRenderer.removeListener(IPC_CHANNELS.GEMINI_EXIT, handler)
      }
    },
  },

  // Mission Log
  missionLog: {
    write: (missionId: string, event: { type: string; data: Record<string, unknown> }) =>
      ipcRenderer.invoke(IPC_CHANNELS.MISSION_LOG_WRITE, missionId, event),
    read: (missionId: string) =>
      ipcRenderer.invoke(IPC_CHANNELS.MISSION_LOG_READ, missionId),
    list: () =>
      ipcRenderer.invoke(IPC_CHANNELS.MISSION_LOG_LIST),
  },

  // Brain
  brain: {
    loadContext: (blueprintId: string) =>
      ipcRenderer.invoke(IPC_CHANNELS.BRAIN_LOAD_CONTEXT, blueprintId),
    generateBoard: (params: unknown) =>
      ipcRenderer.invoke(IPC_CHANNELS.BRAIN_GENERATE_BOARD, params),
  },

  // Self-test
  selfTest: {
    screenshot: () => ipcRenderer.invoke(IPC_CHANNELS.SELFTEST_SCREENSHOT),
    domCheck: (code: string) => ipcRenderer.invoke(IPC_CHANNELS.SELFTEST_DOM_CHECK, code),
    consoleErrors: () => ipcRenderer.invoke(IPC_CHANNELS.SELFTEST_CONSOLE_ERRORS),
    clearConsoleErrors: () => ipcRenderer.invoke(IPC_CHANNELS.SELFTEST_CLEAR_CONSOLE_ERRORS),
    runAll: () => ipcRenderer.invoke(IPC_CHANNELS.SELFTEST_RUN_ALL),
  },

  // Navigation listener (from main process menu)
  onNavigate: (callback: (path: string) => void) => {
    const handler = (_event: Electron.IpcRendererEvent, path: string) => callback(path)
    ipcRenderer.on(IPC_CHANNELS.NAVIGATE, handler)
    return () => {
      ipcRenderer.removeListener(IPC_CHANNELS.NAVIGATE, handler)
    }
  },
}

contextBridge.exposeInMainWorld('electronAPI', electronAPI)
