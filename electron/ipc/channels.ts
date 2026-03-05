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

  // Agent
  AGENT_LAUNCH: 'agent:launch',
  AGENT_KILL: 'agent:kill',
  AGENT_KILL_ALL: 'agent:kill-all',
  AGENT_ROLLBACK: 'agent:rollback',
  AGENT_LOG: 'agent:log',
  AGENT_EXIT: 'agent:exit',

  // Gemini
  GEMINI_GET_TOKEN: 'gemini:get-token',
  GEMINI_SET_TOKEN: 'gemini:set-token',
  GEMINI_TEST_CONNECTION: 'gemini:test-connection',
  GEMINI_LAUNCH: 'gemini:launch',
  GEMINI_LAUNCH_IMAGEN: 'gemini:launch-imagen',
  GEMINI_LAUNCH_VEO: 'gemini:launch-veo',
  GEMINI_STOP: 'gemini:stop',
  GEMINI_LOG: 'gemini:log',
  GEMINI_EXIT: 'gemini:exit',

  // Navigation
  NAVIGATE: 'navigate',

  // Self-test
  SELFTEST_SCREENSHOT: 'selftest:screenshot',
  SELFTEST_DOM_CHECK: 'selftest:dom-check',
  SELFTEST_CONSOLE_ERRORS: 'selftest:console-errors',
  SELFTEST_CLEAR_CONSOLE_ERRORS: 'selftest:clear-console-errors',
  SELFTEST_RUN_ALL: 'selftest:run-all',
} as const

export type IPCChannel = (typeof IPC_CHANNELS)[keyof typeof IPC_CHANNELS]

export const ALLOWED_CHANNELS: readonly string[] = Object.values(IPC_CHANNELS)
