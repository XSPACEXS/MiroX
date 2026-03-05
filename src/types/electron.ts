/**
 * IMPORTANT: This interface is the renderer-side source of truth for the IPC bridge.
 * It MUST be kept in sync with the `electronAPI` object in electron/preload.ts.
 * Any method added/changed/removed in preload.ts must be reflected here, and vice versa.
 */
interface MiroItemResponse {
  id: string
  type?: string
  position?: { x: number; y: number }
  geometry?: { width: number; height: number }
}

interface MiroBoardResponse {
  id: string
  viewLink: string
  name: string
  description?: string
  createdAt?: string
  modifiedAt?: string
}

export interface ElectronAPI {
  // System
  getSystemInfo: () => Promise<{
    platform: string
    arch: string
    version: string
    appVersion: string
    nodeVersion: string
  }>
  quit: () => Promise<void>
  minimize: () => Promise<void>
  maximize: () => Promise<void>
  close: () => Promise<void>

  // Miro
  miro: {
    createBoard: (name: string, description?: string) => Promise<MiroBoardResponse>
    listBoards: () => Promise<{ data?: MiroBoardResponse[] }>
    testConnection: () => Promise<{ ok: boolean; status?: number; error?: string }>
    getToken: () => Promise<{ ok: boolean; masked: string; hasToken: boolean }>
    setToken: (token: string) => Promise<{ ok: boolean; error?: string }>
    createFrame: (boardId: string, data: {
      title: string
      x: number
      y: number
      width: number
      height: number
      style?: { fillColor?: string }
    }) => Promise<MiroItemResponse>
    createShape: (boardId: string, data: {
      content: string
      shape: string
      x: number
      y: number
      width: number
      height: number
      style?: Record<string, unknown>
    }) => Promise<MiroItemResponse>
    createStickyNote: (boardId: string, data: {
      content: string
      x: number
      y: number
      shape?: string
      style?: Record<string, unknown>
    }) => Promise<MiroItemResponse>
    createText: (boardId: string, data: {
      content: string
      x: number
      y: number
      width?: number
      style?: Record<string, unknown>
    }) => Promise<MiroItemResponse>
    createConnector: (boardId: string, data: {
      startItemId: string
      endItemId: string
      style?: Record<string, unknown>
      captions?: Array<{ content: string }>
    }) => Promise<MiroItemResponse>
    deleteItem: (boardId: string, itemId: string) => Promise<{ ok: boolean }>
    repositionItem: (boardId: string, itemId: string, x: number, y: number) => Promise<MiroItemResponse>
    deleteGhosts: (boardId: string) => Promise<{ ok: boolean; deleted?: number; failed?: number; error?: string }>
  }

  // GitHub
  github: {
    getToken: () => Promise<{ ok: boolean; hasToken: boolean; masked: string }>
    setToken: (token: string) => Promise<{ ok: boolean; error?: string }>
    listRepos: () => Promise<{
      ok: boolean
      repos?: Array<{
        id: number
        name: string
        fullName: string
        description: string | null
        language: string | null
        stars: number
        updatedAt: string
        url: string
        defaultBranch: string
        topics: string[]
        isPrivate: boolean
        owner: { login: string; avatarUrl: string }
      }>
      error?: string
    }>
    analyzeRepo: (owner: string, repo: string) => Promise<{
      ok: boolean
      analysis?: {
        name: string
        description: string | null
        language: string | null
        topics: string[]
        defaultBranch: string
        projectType: string
        readme: string
        suggestedTemplate: string
      }
      error?: string
    }>
    testConnection: () => Promise<{
      ok: boolean
      user?: { login: string; avatarUrl: string; name: string | null }
      error?: string
    }>
  }

  // Files
  files: {
    openDialog: (options?: unknown) => Promise<string[] | null>
    readFile: (filePath: string) => Promise<{
      ok: boolean
      content?: string
      size?: number
      name?: string
      ext?: string
      error?: string
    }>
    parseFile: (filePath: string, fileName: string, mimeType: string) => Promise<{
      ok: boolean
      text?: string
      fileName?: string
      mimeType?: string
      ext?: string
      error?: string
    }>
    fetchUrl: (url: string) => Promise<{ ok: boolean; text?: string; url?: string; error?: string }>
  }

  // Settings
  settings: {
    load: () => Promise<Record<string, unknown>>
    save: (settings: Record<string, unknown>) => Promise<{ ok: boolean }>
  }

  // Shell
  openExternal: (url: string) => Promise<{ ok: boolean; error?: string }>

  // Agent
  agent: {
    launch: (config: { model: string; prompt: string; allowedTools: string[] }) => Promise<
      | { ok: true; id: string; model: string; startedAt: number }
      | { ok: false; error: string }
    >
    kill: (id: string) => Promise<{ ok: boolean; error?: string }>
    killAll: () => Promise<{ ok: boolean; killed?: number }>
    rollback: (tag: string) => Promise<{ ok: boolean; error?: string }>
    onLog: (callback: (data: {
      agentId: string
      timestamp: number
      type: 'stdout' | 'stderr' | 'system'
      text: string
    }) => void) => () => void
    onExit: (callback: (data: {
      id: string
      exitCode: number | null
      status: 'completed' | 'failed' | 'killed'
    }) => void) => () => void
  }

  // Self-test
  selfTest: {
    screenshot: () => Promise<{ ok: boolean; dataURL?: string; filePath?: string; error?: string }>
    domCheck: (code: string) => Promise<{ ok: boolean; result?: unknown; error?: string }>
    consoleErrors: () => Promise<{ ok: boolean; errors?: string[] }>
    clearConsoleErrors: () => Promise<{ ok: boolean }>
    runAll: () => Promise<{
      ok: boolean
      results?: Array<{ label: string; passed: boolean; detail: string }>
    }>
  }

  // Navigation listener
  onNavigate: (callback: (path: string) => void) => () => void
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}
