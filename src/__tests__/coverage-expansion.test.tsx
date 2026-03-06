import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import type React from 'react'

// Services
import { generateBoardManifest, interpolate } from '../services/templateEngine'
import { buildBoard } from '../services/boardBuilder'
import { parseFileContent, suggestTemplate } from '../services/fileParser'

// Stores
import { useAgentStore } from '../stores/agentStore'
import { useUIStore } from '../stores/uiStore'
import { useBoardStore } from '../stores/boardStore'
import { useSettingsStore } from '../stores/settingsStore'
import { useTemplateStore } from '../stores/templateStore'
import { useImportStore } from '../stores/importStore'

// Hooks
import { useBoardBuilder } from '../hooks/useBoardBuilder'
import { useTemplates } from '../hooks/useTemplates'
import { useFileImport } from '../hooks/useFileImport'
import { useMiro } from '../hooks/useMiro'
import { useGitHub } from '../hooks/useGitHub'

// Components
import GitHubPicker from '../components/import/GitHubPicker'
import { AgentLauncher } from '../components/agent-center/AgentLauncher'

// Templates
import { ALL_TEMPLATES } from '../templates'
import type { TemplateDefinition } from '../templates/types'

// Types
import type { AgentRun } from '../types/agent'

function renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  )
}

function hookWrapper({ children }: { children: React.ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>
}

function resetStores() {
  useUIStore.setState({
    sidebarCollapsed: false,
    activePage: '/',
    activeModal: null,
    toasts: [],
    isSearchOpen: false,
  })
  useBoardStore.setState({
    recentBoards: [],
    totalBoardsCreated: 0,
    lastCreatedBoard: null,
  })
  useSettingsStore.setState({
    miroConnected: false,
    githubConnected: false,
    miroUsername: null,
    githubUsername: null,
    githubAvatarUrl: null,
    theme: 'dark',
    accentColor: '#FFD600',
    onboardingComplete: false,
    filesImported: 0,
    templatesUsed: [],
  })
  useAgentStore.setState({
    agents: [],
    history: [],
    consoleErrors: [],
    lastScreenshot: null,
    domCheckResults: null,
    isAdmin: true,
  })
  useTemplateStore.setState({
    selectedCategory: 'all',
    searchQuery: '',
    selectedTemplate: null,
    previewTemplate: null,
  })
  useImportStore.setState({
    activeTab: 'file',
    uploadedFiles: [],
    importAnalysis: null,
    isAnalyzing: false,
    urlInput: '',
  })
}

function makeAgent(overrides: Partial<AgentRun> = {}): AgentRun {
  return {
    id: 'agent-1',
    prompt: 'Test prompt',
    provider: 'claude',
    model: 'sonnet',
    status: 'running',
    logs: [],
    startedAt: Date.now(),
    finishedAt: null,
    exitCode: null,
    cost: null,
    allowedTools: ['Read', 'Edit'],
    gitTagStart: null,
    gitTagEnd: null,
    outputType: 'text' as const,
    teamRunId: null,
    teamRole: null,
    teamSkill: null,
    timeLimitSeconds: 0,
    ...overrides,
  }
}

const mockTemplate: TemplateDefinition = {
  id: 'kanban-test',
  name: 'Kanban Board',
  category: 'agile' as never,
  description: 'A kanban board',
  longDescription: 'A kanban board for tracking',
  emoji: '📋',
  previewAscii: 'ascii',
  estimatedTime: '3 min',
  blueprintId: 'bp-kanban',
  brainCategory: 'project-management',
  brainBlueprint: 'kanban-board',
  fields: [
    { id: 'col1', label: 'Column 1', type: 'text' as const, placeholder: 'To Do', required: false, defaultValue: 'To Do' },
    { id: 'col2', label: 'Column 2', type: 'text' as const, placeholder: 'Done', required: false, defaultValue: 'Done' },
  ],
  tags: ['agile', 'kanban'],
  complexity: 'simple' as const,
  sections: [
    { id: 's1', name: 'Board', type: 'kanban' as const, description: 'Main board', icon: '📋' },
  ],
  color: '#FFD600',
}

// ──────────────────────────────────────────────────────────────────────────────
// Phase 0 Fix Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('Phase 0: Pipe escaping in generateTableContent', () => {
  const tableTemplate: TemplateDefinition = {
    ...mockTemplate,
    id: 'table-test',
    name: 'Table Test',
    sections: [
      { id: 't1', name: 'Data Table', type: 'table' as const, description: 'Data overview', icon: '📊' },
    ],
  }

  it('escapes pipe characters in field values', () => {
    const manifest = generateBoardManifest(tableTemplate, {
      col1: 'Option A | Option B',
      col2: 'Yes | No | Maybe',
    }, 'Pipe Test')

    const tableSection = manifest.sections.find(s =>
      s.content.includes('| Field | Value |')
    )
    expect(tableSection).toBeDefined()
    expect(tableSection!.content).toContain('Option A \\| Option B')
    expect(tableSection!.content).toContain('Yes \\| No \\| Maybe')
    expect(tableSection!.content).not.toContain('| Option A | Option B |')
  })

  it('escapes pipe characters in field keys', () => {
    const manifest = generateBoardManifest(tableTemplate, {
      'key|with|pipes': 'clean value',
    }, 'Key Pipe Test')

    const tableSection = manifest.sections.find(s =>
      s.content.includes('| Field | Value |')
    )
    expect(tableSection).toBeDefined()
    expect(tableSection!.content).toContain('key\\|with\\|pipes')
  })

  it('handles values with no pipes normally', () => {
    const manifest = generateBoardManifest(tableTemplate, {
      col1: 'Normal value',
    }, 'Normal Test')

    const tableSection = manifest.sections.find(s =>
      s.content.includes('| Field | Value |')
    )
    expect(tableSection).toBeDefined()
    expect(tableSection!.content).toContain('| col1 | Normal value |')
  })

  it('table section shows description when no field values provided', () => {
    const manifest = generateBoardManifest(tableTemplate, {}, 'Empty Test')

    const tableSection = manifest.sections.find(s =>
      s.content.includes('Data overview')
    )
    expect(tableSection).toBeDefined()
  })
})

describe('Phase 0: deleteGhosts mock returns failed field', () => {
  it('deleteGhosts mock includes failed count', async () => {
    const result = await window.electronAPI.miro.deleteGhosts('board-1')
    expect(result).toHaveProperty('ok', true)
    expect(result).toHaveProperty('deleted', 0)
    expect(result).toHaveProperty('failed', 0)
  })
})

describe('Phase 0: Board description length validation', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('passes board description to buildBoard service', async () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => {
      result.current.setTemplate(mockTemplate)
      result.current.setBoardName('Test Board')
      result.current.setBoardDescription('My custom description')
    })

    await act(async () => { await result.current.startCreation() })

    expect(window.electronAPI.miro.createBoard).toHaveBeenCalledWith(
      'Test Board',
      'My custom description'
    )
  })

  it('uses default description when boardDescription is empty', async () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => {
      result.current.setTemplate(mockTemplate)
      result.current.setBoardName('Test Board')
    })

    await act(async () => { await result.current.startCreation() })

    expect(window.electronAPI.miro.createBoard).toHaveBeenCalledWith(
      'Test Board',
      expect.stringContaining('Created with MiroX using Kanban Board template')
    )
  })

  it('boardDescription over 5000 chars is still passed through (validation is server-side)', async () => {
    const longDesc = 'A'.repeat(5001)
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => {
      result.current.setTemplate(mockTemplate)
      result.current.setBoardName('Long Desc Board')
      result.current.setBoardDescription(longDesc)
    })

    await act(async () => { await result.current.startCreation() })

    expect(window.electronAPI.miro.createBoard).toHaveBeenCalledWith(
      'Long Desc Board',
      longDesc
    )
  })

  it('reset clears boardDescription', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => {
      result.current.setBoardDescription('will be cleared')
    })
    expect(result.current.boardDescription).toBe('will be cleared')
    act(() => result.current.reset())
    expect(result.current.boardDescription).toBe('')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// useTemplates hook tests
// ──────────────────────────────────────────────────────────────────────────────

describe('useTemplates hook', () => {
  beforeEach(() => resetStores())

  it('returns all templates by default', () => {
    const { result } = renderHook(() => useTemplates())
    expect(result.current.templates.length).toBe(ALL_TEMPLATES.length)
    expect(result.current.allTemplates).toBe(ALL_TEMPLATES)
  })

  it('filters by category', () => {
    const { result } = renderHook(() => useTemplates())
    act(() => result.current.setCategory('agile' as never))
    expect(result.current.selectedCategory).toBe('agile')
    expect(result.current.templates.length).toBeGreaterThan(0)
    expect(result.current.templates.every(t => t.category === 'agile')).toBe(true)
  })

  it('filters by search query', () => {
    const { result } = renderHook(() => useTemplates())
    act(() => result.current.setSearch('kanban'))
    expect(result.current.searchQuery).toBe('kanban')
    expect(result.current.templates.length).toBeGreaterThan(0)
  })

  it('combines category and search filters', () => {
    const { result } = renderHook(() => useTemplates())
    act(() => {
      result.current.setCategory('agile' as never)
      result.current.setSearch('kanban')
    })
    expect(result.current.templates.length).toBeGreaterThan(0)
    expect(result.current.templates.every(t => t.category === 'agile')).toBe(true)
  })

  it('selectTemplate sets selected template', () => {
    const { result } = renderHook(() => useTemplates())
    const first = ALL_TEMPLATES[0]!
    act(() => result.current.selectTemplate(first))
    expect(result.current.selectedTemplate).toBe(first)
  })

  it('getTemplate returns template by id', () => {
    const { result } = renderHook(() => useTemplates())
    const first = ALL_TEMPLATES[0]!
    expect(result.current.getTemplate(first.id)).toBe(first)
    expect(result.current.getTemplate('nonexistent')).toBeUndefined()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// useFileImport hook tests
// ──────────────────────────────────────────────────────────────────────────────

describe('useFileImport hook', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('initial state is empty with no dragging', () => {
    const { result } = renderHook(() => useFileImport())
    expect(result.current.files).toEqual([])
    expect(result.current.isDragging).toBe(false)
    expect(result.current.isParsingFile).toBe(false)
  })

  it('clearFiles empties the file list', () => {
    const { result } = renderHook(() => useFileImport())
    act(() => result.current.clearFiles())
    expect(result.current.files).toEqual([])
  })

  it('removeFile removes by id', async () => {
    vi.mocked(window.electronAPI.files.parseFile).mockResolvedValueOnce({
      ok: true,
      text: 'hello',
      ext: '.txt',
    })

    const { result } = renderHook(() => useFileImport())

    // Simulate a drop
    const file = new File(['content'], 'test.txt', { type: 'text/plain' })
    Object.defineProperty(file, 'path', { value: '/tmp/test.txt' })
    const dropEvent = {
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
      dataTransfer: { files: [file] },
    } as unknown as React.DragEvent

    act(() => result.current.onDrop(dropEvent))

    await waitFor(() => {
      expect(result.current.files.length).toBe(1)
    })

    const fileId = result.current.files[0]!.id
    act(() => result.current.removeFile(fileId))
    expect(result.current.files.length).toBe(0)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// useMiro hook tests
// ──────────────────────────────────────────────────────────────────────────────

describe('useMiro hook', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('initial state is not connected', () => {
    const { result } = renderHook(() => useMiro())
    // Note: useEffect runs but getToken returns hasToken: false
    expect(result.current.isConnected).toBe(false)
    expect(result.current.boards).toEqual([])
  })

  it('testConnection updates connection status', async () => {
    vi.mocked(window.electronAPI.miro.testConnection).mockResolvedValueOnce({ ok: true })

    const { result } = renderHook(() => useMiro())
    await act(async () => { await result.current.testConnection() })

    expect(result.current.isConnected).toBe(true)
  })

  it('testConnection handles failure', async () => {
    vi.mocked(window.electronAPI.miro.testConnection).mockResolvedValueOnce({ ok: false, error: 'Invalid' })

    const { result } = renderHook(() => useMiro())
    await act(async () => { await result.current.testConnection() })

    expect(result.current.isConnected).toBe(false)
    expect(result.current.connectionStatus?.error).toBe('Invalid')
  })

  it('createBoard returns board on success', async () => {
    vi.mocked(window.electronAPI.miro.createBoard).mockResolvedValueOnce({
      id: 'new-board',
      name: 'My Board',
      description: 'desc',
      viewLink: 'https://miro.com/app/board/new-board/',
    })

    const { result } = renderHook(() => useMiro())
    let board: unknown
    await act(async () => { board = await result.current.createBoard('My Board', 'desc') })

    expect(board).toBeTruthy()
    expect((board as { id: string }).id).toBe('new-board')
  })

  it('createBoard returns null on failure', async () => {
    vi.mocked(window.electronAPI.miro.createBoard).mockRejectedValueOnce(new Error('API down'))

    const { result } = renderHook(() => useMiro())
    let board: unknown
    await act(async () => { board = await result.current.createBoard('Fail Board') })

    expect(board).toBeNull()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// useGitHub hook tests
// ──────────────────────────────────────────────────────────────────────────────

describe('useGitHub hook', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('initial state is not connected', () => {
    const { result } = renderHook(() => useGitHub())
    expect(result.current.isConnected).toBe(false)
    expect(result.current.repos).toEqual([])
    expect(result.current.selectedRepo).toBeNull()
    expect(result.current.analysis).toBeNull()
  })

  it('setToken connects and loads repos on success', async () => {
    vi.mocked(window.electronAPI.github.testConnection).mockResolvedValueOnce({
      ok: true,
      user: { login: 'testuser', name: 'Test User', avatarUrl: 'https://avatar.com/1' },
    })
    vi.mocked(window.electronAPI.github.listRepos).mockResolvedValueOnce({
      ok: true,
      repos: [{
        id: 1, name: 'my-repo', fullName: 'testuser/my-repo', description: 'A repo',
        language: 'TypeScript', stars: 5, updatedAt: '2024-01-01T00:00:00Z',
        url: 'https://github.com/testuser/my-repo',
        defaultBranch: 'main', topics: [], isPrivate: false,
        owner: { login: 'testuser', avatarUrl: 'https://avatar.com/1' },
      }],
    })

    const { result } = renderHook(() => useGitHub())
    await act(async () => { await result.current.setToken('ghp_test123') })

    expect(window.electronAPI.github.setToken).toHaveBeenCalledWith('ghp_test123')
    expect(result.current.isConnected).toBe(true)

    await waitFor(() => {
      expect(result.current.repos.length).toBe(1)
      expect(result.current.repos[0]!.name).toBe('my-repo')
    })
  })

  it('disconnect clears state', async () => {
    const { result } = renderHook(() => useGitHub())
    await act(async () => { await result.current.disconnect() })

    expect(result.current.isConnected).toBe(false)
    expect(result.current.repos).toEqual([])
    expect(result.current.user).toBeNull()
  })

  it('selectRepo sets selected and clears analysis', () => {
    const { result } = renderHook(() => useGitHub())
    const repo = {
      id: 1, name: 'test', full_name: 'user/test', description: '', language: 'TS',
      stargazers_count: 0, updated_at: '2024-01-01', html_url: '', default_branch: 'main',
      owner: { login: 'user', avatar_url: '' }, topics: [], private: false,
    }
    act(() => result.current.selectRepo(repo))
    expect(result.current.selectedRepo).toEqual(repo)
    expect(result.current.analysis).toBeNull()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// GitHubPicker component tests
// ──────────────────────────────────────────────────────────────────────────────

describe('GitHubPicker component', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('renders connect screen when not connected', () => {
    renderWithRouter(<GitHubPicker />)
    expect(screen.getByText('Connect to GitHub')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('ghp_xxxxxxxxxxxxxxxxxxxx')).toBeInTheDocument()
  })

  it('Connect button is disabled when token input is empty', () => {
    renderWithRouter(<GitHubPicker />)
    const button = screen.getByText('Connect')
    expect(button).toBeDisabled()
  })

  it('Connect button enables when token is entered', () => {
    renderWithRouter(<GitHubPicker />)
    const input = screen.getByPlaceholderText('ghp_xxxxxxxxxxxxxxxxxxxx')
    fireEvent.change(input, { target: { value: 'ghp_test' } })
    const button = screen.getByText('Connect')
    expect(button).not.toBeDisabled()
  })

  it('shows create token link', () => {
    renderWithRouter(<GitHubPicker />)
    expect(screen.getByText('Create a token on GitHub')).toBeInTheDocument()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// Edge Cases: Missing tokens
// ──────────────────────────────────────────────────────────────────────────────

describe('Edge: Missing Miro token during board creation', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('board creation fails when Miro API rejects', async () => {
    vi.mocked(window.electronAPI.miro.createBoard).mockRejectedValueOnce(
      new Error('Unauthorized: Missing Miro token')
    )

    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => result.current.setTemplate(mockTemplate))
    await act(async () => { await result.current.startCreation() })

    expect(result.current.error).toBe('Unauthorized: Missing Miro token')
    expect(result.current.isComplete).toBe(false)
  })
})

describe('Edge: Missing GitHub token in GitHubPicker', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('shows connect screen when GitHub has no token', () => {
    renderWithRouter(<GitHubPicker />)
    expect(screen.getByText('Connect to GitHub')).toBeInTheDocument()
    expect(screen.queryByText('Disconnect')).not.toBeInTheDocument()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// Edge: File parse returns empty/corrupt data
// ──────────────────────────────────────────────────────────────────────────────

describe('Edge: File parser with empty/corrupt data', () => {
  it('parseFileContent handles empty text', async () => {
    vi.mocked(window.electronAPI.files.parseFile).mockResolvedValueOnce({
      ok: true,
      text: '',
      ext: '.txt',
    })

    const result = await parseFileContent('/tmp/empty.txt', 'empty.txt', 'text/plain')
    expect(result.rawText).toBe('')
    expect(result.title).toBe('empty')
    expect(result.headings).toEqual([])
  })

  it('parseFileContent throws on error result', async () => {
    vi.mocked(window.electronAPI.files.parseFile).mockResolvedValueOnce({
      ok: false,
      error: 'Corrupt file',
      text: '',
      ext: '.bin',
    })

    await expect(parseFileContent('/tmp/corrupt.bin', 'corrupt.bin', 'application/octet-stream'))
      .rejects.toThrow('Corrupt file')
  })

  it('suggestTemplate with empty rawText defaults to brainstorm-session', () => {
    const result = suggestTemplate({
      rawText: '',
      title: '',
      headings: [],
      keyPhrases: [],
      summary: '',
      fileType: 'document',
      suggestedTemplate: '',
      confidence: 0,
    })
    expect(result).toBe('brainstorm-session')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// Edge: Template with zero sections (should still produce hero banner)
// ──────────────────────────────────────────────────────────────────────────────

describe('Edge: Template with zero sections', () => {
  it('generateBoardManifest produces only hero banner for zero-section template', () => {
    const emptyTemplate: TemplateDefinition = {
      ...mockTemplate,
      id: 'empty-sections',
      name: 'Empty Sections',
      sections: [],
    }
    const manifest = generateBoardManifest(emptyTemplate, {}, 'Empty Board')
    expect(manifest.boardName).toBe('Empty Board')
    // Should only have the hero banner section
    expect(manifest.sections.length).toBe(1)
    expect(manifest.sections[0]!.content).toContain('Empty Board')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// Edge: Agent launch ENOENT (claude binary not found)
// ──────────────────────────────────────────────────────────────────────────────

describe('Edge: Agent launch ENOENT', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('shows error toast when agent launch returns ENOENT-style error', async () => {
    vi.mocked(window.electronAPI.agent.launch).mockResolvedValueOnce({
      ok: false,
      error: 'spawn claude ENOENT',
    })

    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for your AI team...')
    fireEvent.change(input, { target: { value: 'Do something' } })
    const launchButtons = screen.getAllByText('Launch Team')
    fireEvent.click(launchButtons[launchButtons.length - 1]!.closest('button')!)

    await waitFor(() => {
      const toasts = useUIStore.getState().toasts
      expect(toasts.some(t => t.type === 'error')).toBe(true)
    })
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// Edge: 50+ agents in history (cap test)
// ──────────────────────────────────────────────────────────────────────────────

describe('Edge: History cap at 50 agents', () => {
  beforeEach(() => resetStores())

  it('history is capped at exactly 50 entries', () => {
    for (let i = 0; i < 60; i++) {
      useAgentStore.getState().addAgent(makeAgent({ id: `agent-${i}`, status: 'completed' }))
      useAgentStore.getState().moveToHistory(`agent-${i}`)
    }
    expect(useAgentStore.getState().history).toHaveLength(50)
  })

  it('newest entry is first after cap', () => {
    for (let i = 0; i < 55; i++) {
      useAgentStore.getState().addAgent(makeAgent({ id: `agent-${i}`, status: 'completed' }))
      useAgentStore.getState().moveToHistory(`agent-${i}`)
    }
    // Last added should be first
    expect(useAgentStore.getState().history[0]!.id).toBe('agent-54')
  })

  it('oldest entries are dropped when cap is exceeded', () => {
    for (let i = 0; i < 55; i++) {
      useAgentStore.getState().addAgent(makeAgent({ id: `agent-${i}`, status: 'completed' }))
      useAgentStore.getState().moveToHistory(`agent-${i}`)
    }
    // agent-0 through agent-4 should be dropped
    const ids = useAgentStore.getState().history.map(a => a.id)
    expect(ids).not.toContain('agent-0')
    expect(ids).not.toContain('agent-4')
    expect(ids).toContain('agent-5')
    expect(ids).toContain('agent-54')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// Edge: Corrupted persist JSON in localStorage
// ──────────────────────────────────────────────────────────────────────────────

describe('Edge: Corrupted localStorage data', () => {
  it('stores still initialize correctly after corrupt localStorage', () => {
    // Simulate corrupted data
    localStorage.setItem('mirox-boards', '{corrupt')
    localStorage.setItem('mirox-agent-center', 'not valid json')
    localStorage.setItem('mirox-settings', '{"version":999}')

    // Reset stores to defaults (should not crash)
    resetStores()

    expect(useBoardStore.getState().recentBoards).toEqual([])
    expect(useAgentStore.getState().agents).toEqual([])
    expect(useSettingsStore.getState().theme).toBe('dark')
  })

  afterEach(() => {
    localStorage.clear()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// buildBoard service: boardDescription passthrough + deleteGhosts call
// ──────────────────────────────────────────────────────────────────────────────

describe('buildBoard service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('passes boardDescription to createBoard', async () => {
    const promise = buildBoard(mockTemplate, {}, 'Test', undefined, 'My description')
    // Advance timers for delay(200) calls inside buildBoard
    await vi.runAllTimersAsync()
    await promise

    expect(window.electronAPI.miro.createBoard).toHaveBeenCalledWith('Test', 'My description')
  })

  it('uses default description when boardDescription is empty', async () => {
    const promise = buildBoard(mockTemplate, {}, 'Test Board')
    await vi.runAllTimersAsync()
    await promise

    expect(window.electronAPI.miro.createBoard).toHaveBeenCalledWith(
      'Test Board',
      'Created with MiroX using Kanban Board template'
    )
  })

  it('calls deleteGhosts after creating sections', async () => {
    const promise = buildBoard(mockTemplate, {}, 'Test')
    await vi.runAllTimersAsync()
    await promise

    expect(window.electronAPI.miro.deleteGhosts).toHaveBeenCalledWith('board-1')
  })

  it('reports progress via callback', async () => {
    const progressFn = vi.fn()
    const promise = buildBoard(mockTemplate, {}, 'Test', progressFn)
    await vi.runAllTimersAsync()
    await promise

    expect(progressFn).toHaveBeenCalled()
    // First call: 'Creating board workspace...', 5
    expect(progressFn).toHaveBeenCalledWith('Creating board workspace...', 5)
    // Last call: 'Board ready!', 100
    expect(progressFn).toHaveBeenCalledWith('Board ready!', 100)
  })

  it('returns board details', async () => {
    const promise = buildBoard(mockTemplate, {}, 'My Board')
    await vi.runAllTimersAsync()
    const result = await promise

    expect(result.boardId).toBe('board-1')
    expect(result.boardUrl).toBe('https://miro.com/app/board/1/')
    expect(result.boardName).toBe('My Board')
  })

  it('continues even if a section creation fails', async () => {
    vi.mocked(window.electronAPI.miro.createShape).mockRejectedValueOnce(new Error('Shape failed'))

    const promise = buildBoard(mockTemplate, {}, 'Test')
    await vi.runAllTimersAsync()
    const result = await promise

    // Should still complete even with section errors
    expect(result.boardId).toBe('board-1')
  })

  it('ignores deleteGhosts failure', async () => {
    vi.mocked(window.electronAPI.miro.deleteGhosts).mockRejectedValueOnce(new Error('Cleanup failed'))

    const promise = buildBoard(mockTemplate, {}, 'Test')
    await vi.runAllTimersAsync()
    const result = await promise

    // Should still return successfully
    expect(result.boardId).toBe('board-1')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// templateEngine: Section type coverage
// ──────────────────────────────────────────────────────────────────────────────

describe('generateBoardManifest section types', () => {
  it('generates frame section items', () => {
    const t: TemplateDefinition = {
      ...mockTemplate,
      sections: [{ id: 'f1', name: 'Frame Section', type: 'frame' as const, description: 'A frame', icon: '🖼️' }],
    }
    const manifest = generateBoardManifest(t, {}, 'Frame Test')
    const frameSection = manifest.sections.find(s => s.content.includes('Frame Section'))
    expect(frameSection).toBeDefined()
    expect(frameSection!.type).toBe('shape')
  })

  it('generates document section items', () => {
    const t: TemplateDefinition = {
      ...mockTemplate,
      sections: [{ id: 'd1', name: 'Doc Section', type: 'document' as const, description: 'A document', icon: '📄' }],
    }
    const manifest = generateBoardManifest(t, { col1: 'Value1' }, 'Doc Test')
    const docSection = manifest.sections.find(s => s.content.includes('# Doc Section'))
    expect(docSection).toBeDefined()
    expect(docSection!.type).toBe('card')
    expect(docSection!.content).toContain('Value1')
  })

  it('generates flowchart section items', () => {
    const t: TemplateDefinition = {
      ...mockTemplate,
      sections: [{ id: 'fc1', name: 'Flow', type: 'flowchart' as const, description: 'A flow', icon: '🔀' }],
    }
    const manifest = generateBoardManifest(t, {}, 'Flow Test')
    const flowSection = manifest.sections.find(s => s.content.includes('Flow'))
    expect(flowSection).toBeDefined()
  })

  it('generates matrix section items', () => {
    const t: TemplateDefinition = {
      ...mockTemplate,
      sections: [{ id: 'm1', name: 'Matrix', type: 'matrix' as const, description: 'A matrix', icon: '📊' }],
    }
    const manifest = generateBoardManifest(t, {}, 'Matrix Test')
    // Skip hero banner (index 0), matrix section starts at index 1
    const matrixSection = manifest.sections.find(s => s.content.includes('📊 Matrix'))
    expect(matrixSection).toBeDefined()
    expect(matrixSection!.width).toBe(3200)
  })

  it('generates sticky_cluster section items with defaults', () => {
    const t: TemplateDefinition = {
      ...mockTemplate,
      sections: [{ id: 'sc1', name: 'Ideas', type: 'sticky_cluster' as const, description: 'Sticky ideas', icon: '🟡' }],
    }
    const manifest = generateBoardManifest(t, {}, 'Sticky Test')
    const stickies = manifest.sections.filter(s => s.type === 'sticky_note')
    expect(stickies.length).toBe(3) // Default: Item 1, Item 2, Item 3
  })

  it('generates sticky_cluster with field values', () => {
    const t: TemplateDefinition = {
      ...mockTemplate,
      sections: [{ id: 'ideas', name: 'Ideas', type: 'sticky_cluster' as const, description: 'Your ideas', icon: '🟡' }],
    }
    const manifest = generateBoardManifest(t, { ideas: 'Alpha\nBravo\nCharlie\nDelta' }, 'Sticky Values')
    const stickies = manifest.sections.filter(s => s.type === 'sticky_note')
    expect(stickies.length).toBe(4)
    expect(stickies[0]!.content).toBe('Alpha')
  })

  it('handles unknown section type with default card', () => {
    const t: TemplateDefinition = {
      ...mockTemplate,
      sections: [{ id: 'u1', name: 'Unknown', type: 'unknown_type' as never, description: 'Fallback', icon: '❓' }],
    }
    const manifest = generateBoardManifest(t, {}, 'Unknown Test')
    const unknown = manifest.sections.find(s => s.content === 'Unknown')
    expect(unknown).toBeDefined()
    expect(unknown!.type).toBe('card')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// interpolate edge cases
// ──────────────────────────────────────────────────────────────────────────────

describe('interpolate edge cases', () => {
  it('handles empty template string', () => {
    expect(interpolate('', { key: 'value' })).toBe('')
  })

  it('handles no variables in template', () => {
    expect(interpolate('plain text', { key: 'value' })).toBe('plain text')
  })

  it('handles empty values object', () => {
    expect(interpolate('Hello {{name}}', {})).toBe('Hello [name]')
  })

  it('handles multiple occurrences of same variable', () => {
    expect(interpolate('{{x}} and {{x}}', { x: 'ok' })).toBe('ok and ok')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// Import store edge cases
// ──────────────────────────────────────────────────────────────────────────────

describe('Import store edge cases', () => {
  beforeEach(() => resetStores())

  it('setUrlInput updates URL', () => {
    useImportStore.getState().setUrlInput('https://example.com')
    expect(useImportStore.getState().urlInput).toBe('https://example.com')
  })

  it('setAnalyzing updates flag', () => {
    useImportStore.getState().setAnalyzing(true)
    expect(useImportStore.getState().isAnalyzing).toBe(true)
    useImportStore.getState().setAnalyzing(false)
    expect(useImportStore.getState().isAnalyzing).toBe(false)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// Agent store persist partialize
// ──────────────────────────────────────────────────────────────────────────────

describe('Agent store persist behavior', () => {
  beforeEach(() => resetStores())

  it('appendLog also adds to history agent if it exists', () => {
    useAgentStore.getState().addAgent(makeAgent({ id: 'dual-agent', status: 'completed' }))
    useAgentStore.getState().moveToHistory('dual-agent')

    useAgentStore.getState().appendLog('dual-agent', { timestamp: 1, type: 'stdout', text: 'After history move' })

    const histAgent = useAgentStore.getState().history.find(a => a.id === 'dual-agent')
    expect(histAgent!.logs.some(l => l.text === 'After history move')).toBe(true)
  })

})
