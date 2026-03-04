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
    createBoard: (name: string, description?: string) => Promise<unknown>
    listBoards: () => Promise<unknown>
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
    }) => Promise<unknown>
    createShape: (boardId: string, data: {
      content: string
      shape: string
      x: number
      y: number
      width: number
      height: number
      style?: Record<string, unknown>
    }) => Promise<unknown>
    createStickyNote: (boardId: string, data: {
      content: string
      x: number
      y: number
      shape?: string
      style?: Record<string, unknown>
    }) => Promise<unknown>
    createText: (boardId: string, data: {
      content: string
      x: number
      y: number
      width?: number
      style?: Record<string, unknown>
    }) => Promise<unknown>
    createConnector: (boardId: string, data: {
      startItemId: string
      endItemId: string
      style?: Record<string, unknown>
      captions?: Array<{ content: string }>
    }) => Promise<unknown>
    deleteItem: (boardId: string, itemId: string) => Promise<unknown>
    repositionItem: (boardId: string, itemId: string, x: number, y: number) => Promise<unknown>
    deleteGhosts: (boardId: string) => Promise<{ ok: boolean; deleted?: number; error?: string }>
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
    openDialog: (options?: unknown) => Promise<string | null>
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

  // Navigation listener
  onNavigate: (callback: (path: string) => void) => () => void
}

declare global {
  interface Window {
    electronAPI: ElectronAPI
  }
}
