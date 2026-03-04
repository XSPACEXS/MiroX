import { vi } from 'vitest'
import '@testing-library/jest-dom'

// Mock window.electronAPI for all tests
const mockElectronAPI = {
  getSystemInfo: vi.fn().mockResolvedValue({
    platform: 'darwin',
    arch: 'arm64',
    version: '28.0.0',
    appVersion: '1.0.0',
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
    deleteGhosts: vi.fn().mockResolvedValue({ ok: true, deleted: 0 }),
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
}

Object.defineProperty(window, 'electronAPI', {
  value: mockElectronAPI,
  writable: true,
})
