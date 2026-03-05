import { contextBridge, ipcRenderer } from 'electron'

// NOTE: This file is the source of implementation for the IPC bridge.
// The renderer-side TypeScript interface lives in src/types/electron.ts and
// MUST be kept in sync with the object exposed below.

const electronAPI = {
  // System
  getSystemInfo: () => ipcRenderer.invoke('system:info'),
  quit: () => ipcRenderer.invoke('system:quit'),
  minimize: () => ipcRenderer.invoke('window:minimize'),
  maximize: () => ipcRenderer.invoke('window:maximize'),
  close: () => ipcRenderer.invoke('window:close'),

  // Miro
  miro: {
    createBoard: (name: string, description?: string) =>
      ipcRenderer.invoke('miro:create-board', name, description),
    listBoards: () => ipcRenderer.invoke('miro:list-boards'),
    testConnection: () => ipcRenderer.invoke('miro:test-connection'),
    getToken: () => ipcRenderer.invoke('miro:get-token'),
    setToken: (token: string) => ipcRenderer.invoke('miro:set-token', token),
    createFrame: (boardId: string, data: unknown) =>
      ipcRenderer.invoke('miro:create-frame', boardId, data),
    createShape: (boardId: string, data: unknown) =>
      ipcRenderer.invoke('miro:create-shape', boardId, data),
    createStickyNote: (boardId: string, data: unknown) =>
      ipcRenderer.invoke('miro:create-sticky', boardId, data),
    createText: (boardId: string, data: unknown) =>
      ipcRenderer.invoke('miro:create-text', boardId, data),
    createConnector: (boardId: string, data: unknown) =>
      ipcRenderer.invoke('miro:create-connector', boardId, data),
    deleteItem: (boardId: string, itemId: string) =>
      ipcRenderer.invoke('miro:delete-item', boardId, itemId),
    repositionItem: (boardId: string, itemId: string, x: number, y: number) =>
      ipcRenderer.invoke('miro:reposition-item', boardId, itemId, x, y),
    deleteGhosts: (boardId: string) =>
      ipcRenderer.invoke('miro:delete-ghosts', boardId),
  },

  // GitHub
  github: {
    getToken: () => ipcRenderer.invoke('github:get-token'),
    setToken: (token: string) => ipcRenderer.invoke('github:set-token', token),
    listRepos: () => ipcRenderer.invoke('github:list-repos'),
    analyzeRepo: (owner: string, repo: string) =>
      ipcRenderer.invoke('github:analyze-repo', owner, repo),
    testConnection: () => ipcRenderer.invoke('github:test-connection'),
  },

  // Files
  files: {
    openDialog: (options?: unknown) => ipcRenderer.invoke('file:open-dialog', options),
    readFile: (filePath: string) => ipcRenderer.invoke('file:read', filePath),
    parseFile: (filePath: string, fileName: string, mimeType: string) =>
      ipcRenderer.invoke('file:parse', filePath, fileName, mimeType),
    fetchUrl: (url: string) => ipcRenderer.invoke('file:fetch-url', url),
  },

  // Settings
  settings: {
    load: () => ipcRenderer.invoke('settings:load'),
    save: (settings: unknown) => ipcRenderer.invoke('settings:save', settings),
  },

  // Shell
  openExternal: (url: string) => ipcRenderer.invoke('shell:open-external', url),

  // Agent
  agent: {
    launch: (config: { model: string; prompt: string; allowedTools: string[] }) =>
      ipcRenderer.invoke('agent:launch', config),
    kill: (id: string) => ipcRenderer.invoke('agent:kill', id),
    killAll: () => ipcRenderer.invoke('agent:kill-all'),
    rollback: (tag: string) => ipcRenderer.invoke('agent:rollback', tag),
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
      ipcRenderer.on('agent:log', handler)
      return () => {
        ipcRenderer.removeListener('agent:log', handler)
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
      ipcRenderer.on('agent:exit', handler)
      return () => {
        ipcRenderer.removeListener('agent:exit', handler)
      }
    },
  },

  // Self-test
  selfTest: {
    screenshot: () => ipcRenderer.invoke('selftest:screenshot'),
    domCheck: (code: string) => ipcRenderer.invoke('selftest:dom-check', code),
    consoleErrors: () => ipcRenderer.invoke('selftest:console-errors'),
    clearConsoleErrors: () => ipcRenderer.invoke('selftest:clear-console-errors'),
    runAll: () => ipcRenderer.invoke('selftest:run-all'),
  },

  // Navigation listener (from main process menu)
  onNavigate: (callback: (path: string) => void) => {
    const handler = (_event: Electron.IpcRendererEvent, path: string) => callback(path)
    ipcRenderer.on('navigate', handler)
    return () => {
      ipcRenderer.removeListener('navigate', handler)
    }
  },
}

contextBridge.exposeInMainWorld('electronAPI', electronAPI)
