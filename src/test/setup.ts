import { vi, afterEach } from 'vitest'
import '@testing-library/jest-dom'
import { useBuilderDraftStore } from '../stores/builderStore'

// jsdom does not implement scrollIntoView — mock it globally
window.HTMLElement.prototype.scrollIntoView = vi.fn()

// Clear sessionStorage and reset builder draft store between tests
afterEach(() => {
  sessionStorage.clear()
  useBuilderDraftStore.getState().clearDraft()
})

// Mock window.electronAPI for all tests
const mockElectronAPI = {
  getSystemInfo: vi.fn().mockResolvedValue({
    platform: 'darwin',
    arch: 'arm64',
    version: '28.0.0',
    appVersion: '1.1.0',
    nodeVersion: '20.0.0',
  }),
  quit: vi.fn().mockResolvedValue(undefined),
  minimize: vi.fn().mockResolvedValue(undefined),
  maximize: vi.fn().mockResolvedValue(undefined),
  close: vi.fn().mockResolvedValue(undefined),
  miro: {
    createBoard: vi.fn().mockResolvedValue({ id: 'board-1', viewLink: 'https://miro.com/app/board/1/' }),
    listBoards: vi.fn().mockResolvedValue({ data: [] }),
    testConnection: vi.fn().mockResolvedValue({ ok: false, error: 'Not configured' }),
    getToken: vi.fn().mockResolvedValue({ ok: true, masked: '****', hasToken: false }),
    setToken: vi.fn().mockResolvedValue({ ok: true }),
    createFrame: vi.fn().mockResolvedValue({ id: 'frame-1' }),
    createShape: vi.fn().mockResolvedValue({ id: 'shape-1' }),
    createStickyNote: vi.fn().mockResolvedValue({ id: 'sticky-1' }),
    createText: vi.fn().mockResolvedValue({ id: 'text-1' }),
    createConnector: vi.fn().mockResolvedValue({ id: 'conn-1' }),
    deleteItem: vi.fn().mockResolvedValue(undefined),
    repositionItem: vi.fn().mockResolvedValue(undefined),
    deleteGhosts: vi.fn().mockResolvedValue({ ok: true, deleted: 0, failed: 0 }),
  },
  github: {
    getToken: vi.fn().mockResolvedValue({ ok: true, hasToken: false, masked: '' }),
    setToken: vi.fn().mockResolvedValue({ ok: true }),
    listRepos: vi.fn().mockResolvedValue({ ok: true, repos: [] }),
    analyzeRepo: vi.fn().mockResolvedValue({ ok: true, analysis: null }),
    testConnection: vi.fn().mockResolvedValue({ ok: false, error: 'Not configured' }),
  },
  files: {
    openDialog: vi.fn().mockResolvedValue(null),
    readFile: vi.fn().mockResolvedValue({ ok: true, content: '', size: 0 }),
    parseFile: vi.fn().mockResolvedValue({ ok: true, text: '', ext: '.txt' }),
    fetchUrl: vi.fn().mockResolvedValue({ ok: true, text: '<html></html>' }),
  },
  settings: {
    load: vi.fn().mockResolvedValue({}),
    save: vi.fn().mockResolvedValue({ ok: true }),
  },
  openExternal: vi.fn().mockResolvedValue({ ok: true }),
  onNavigate: vi.fn().mockReturnValue(() => {}),
  agent: {
    launch: vi.fn().mockResolvedValue({ ok: true, id: 'test-agent-id', model: 'sonnet', startedAt: 1000 }),
    kill: vi.fn().mockResolvedValue({ ok: true }),
    killAll: vi.fn().mockResolvedValue({ ok: true, killed: 0 }),
    rollback: vi.fn().mockResolvedValue({ ok: true }),
    getProjectDir: vi.fn().mockResolvedValue({ ok: true, projectPath: '/mock/project', isCustom: false }),
    setProjectDir: vi.fn().mockResolvedValue({ ok: true, projectPath: '/mock/new-project' }),
    onLog: vi.fn().mockReturnValue(() => {}),
    onExit: vi.fn().mockReturnValue(() => {}),
    onContextUpdate: vi.fn().mockReturnValue(() => {}),
  },
  missionLog: {
    write: vi.fn().mockResolvedValue({ ok: true }),
    read: vi.fn().mockResolvedValue({ ok: true, events: [] }),
    list: vi.fn().mockResolvedValue({ ok: true, missions: [] }),
  },
  selfTest: {
    screenshot: vi.fn().mockResolvedValue({ ok: true, dataURL: 'data:image/png;base64,abc', filePath: '/tmp/test.png' }),
    domCheck: vi.fn().mockResolvedValue({ ok: true, result: {} }),
    consoleErrors: vi.fn().mockResolvedValue({ ok: true, errors: [] }),
    clearConsoleErrors: vi.fn().mockResolvedValue({ ok: true }),
    runAll: vi.fn().mockResolvedValue({ ok: true, results: [] }),
  },
}

Object.defineProperty(window, 'electronAPI', {
  value: mockElectronAPI,
  writable: true,
})
