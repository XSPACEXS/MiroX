export const IPC_CHANNELS = {
  // System
  SYSTEM_INFO: 'system:info',
  SYSTEM_QUIT: 'system:quit',

  // Window
  WINDOW_MINIMIZE: 'window:minimize',
  WINDOW_MAXIMIZE: 'window:maximize',
  WINDOW_CLOSE: 'window:close',

  // Miro
  MIRO_CREATE_BOARD: 'miro:create-board',
  MIRO_LIST_BOARDS: 'miro:list-boards',
  MIRO_TEST_CONNECTION: 'miro:test-connection',
  MIRO_GET_TOKEN: 'miro:get-token',
  MIRO_SET_TOKEN: 'miro:set-token',
  MIRO_CREATE_FRAME: 'miro:create-frame',
  MIRO_CREATE_SHAPE: 'miro:create-shape',
  MIRO_CREATE_STICKY: 'miro:create-sticky',
  MIRO_CREATE_TEXT: 'miro:create-text',
  MIRO_CREATE_CONNECTOR: 'miro:create-connector',
  MIRO_DELETE_ITEM: 'miro:delete-item',
  MIRO_REPOSITION_ITEM: 'miro:reposition-item',
  MIRO_DELETE_GHOSTS: 'miro:delete-ghosts',

  // GitHub
  GITHUB_GET_TOKEN: 'github:get-token',
  GITHUB_SET_TOKEN: 'github:set-token',
  GITHUB_LIST_REPOS: 'github:list-repos',
  GITHUB_ANALYZE_REPO: 'github:analyze-repo',
  GITHUB_TEST_CONNECTION: 'github:test-connection',

  // Files
  FILE_OPEN_DIALOG: 'file:open-dialog',
  FILE_READ: 'file:read',
  FILE_PARSE: 'file:parse',
  FILE_FETCH_URL: 'file:fetch-url',

  // Settings
  SETTINGS_LOAD: 'settings:load',
  SETTINGS_SAVE: 'settings:save',

  // Shell
  SHELL_OPEN_EXTERNAL: 'shell:open-external',
} as const

export type IPCChannel = (typeof IPC_CHANNELS)[keyof typeof IPC_CHANNELS]

export const ALLOWED_CHANNELS: readonly string[] = Object.values(IPC_CHANNELS)
