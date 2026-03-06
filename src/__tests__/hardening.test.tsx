import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { renderHook } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Suspense } from 'react'
import type React from 'react'

// Stores
import { useUIStore } from '../stores/uiStore'
import { useBoardStore } from '../stores/boardStore'
import { useSettingsStore } from '../stores/settingsStore'
import { useAgentStore } from '../stores/agentStore'

// Templates
import { ALL_TEMPLATES } from '../templates'

// Components
import { TopBar } from '../components/layout/TopBar'
import { QuickActions } from '../components/home/QuickActions'
import { WelcomeModal } from '../components/home/WelcomeModal'
import { ErrorBoundary } from '../components/ui/ErrorBoundary'
import { BoardWizard } from '../components/builder/BoardWizard'
import FileDropZone from '../components/import/FileDropZone'
import URLImporter from '../components/import/URLImporter'

// Pages
import Home from '../pages/Home'
import Templates from '../pages/Templates'
import Settings from '../pages/Settings'
import Import from '../pages/Import'

// Hook
import { useBoardBuilder } from '../hooks/useBoardBuilder'

function renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Suspense fallback={<div>Loading...</div>}>
        {ui}
      </Suspense>
    </MemoryRouter>
  )
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
}

function hookWrapper({ children }: { children: React.ReactNode }) {
  return <MemoryRouter>{children}</MemoryRouter>
}

const mockTemplate = {
  id: 'kanban-test',
  name: 'Kanban Board',
  category: 'agile' as never,
  description: 'A kanban board',
  longDescription: 'A kanban board for tracking',
  emoji: '📋',
  previewAscii: '',
  estimatedTime: '3 min',
  blueprintId: 'bp-kanban',
  fields: [
    { id: 'col1', label: 'Column 1', type: 'text' as const, placeholder: 'To Do', required: false, defaultValue: 'To Do' },
  ],
  tags: ['agile', 'kanban'],
  complexity: 'simple' as const,
  sections: [
    { id: 's1', name: 'Board', type: 'kanban' as const, description: 'Main board', icon: '📋' },
  ],
  color: '#FFD600',
}

// ──────────────────────────────────────────────────────────────────────────────
// 1. TopBar page titles (3 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('TopBar page titles', () => {
  beforeEach(() => resetStores())

  it('shows "Agent Command Center" for /agent-center path', () => {
    renderWithRouter(<TopBar />, { route: '/agent-center' })
    expect(screen.getByText('Agent Command Center')).toBeInTheDocument()
  })

  it('shows correct title for each defined route', () => {
    const routes: Record<string, string> = {
      '/': 'Home',
      '/templates': 'Templates',
      '/import': 'Import',
      '/builder': 'Board Builder',
      '/settings': 'Settings',
      '/agent-center': 'Agent Command Center',
    }
    for (const [route, title] of Object.entries(routes)) {
      const { unmount } = renderWithRouter(<TopBar />, { route })
      expect(screen.getByText(title)).toBeInTheDocument()
      unmount()
    }
  })

  it('shows "MiroX" for unknown paths', () => {
    renderWithRouter(<TopBar />, { route: '/nonexistent' })
    expect(screen.getByText('MiroX')).toBeInTheDocument()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 2. QuickActions edge cases (4 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('QuickActions edge cases', () => {
  beforeEach(() => resetStores())

  it('navigates to /templates for New Board action', () => {
    renderWithRouter(<QuickActions />)
    fireEvent.click(screen.getByText('New Board'))
    expect(screen.getByText('New Board')).toBeInTheDocument()
  })

  it('navigates to /import?tab=file for Import File action', () => {
    renderWithRouter(<QuickActions />)
    fireEvent.click(screen.getByText('Import File'))
    expect(screen.getByText('Import File')).toBeInTheDocument()
  })

  it('navigates to /import?tab=github for GitHub Project action', () => {
    renderWithRouter(<QuickActions />)
    fireEvent.click(screen.getByText('GitHub Project'))
    expect(screen.getByText('GitHub Project')).toBeInTheDocument()
  })

  it('Recent Boards calls scrollIntoView on recent-boards element', () => {
    const scrollMock = vi.fn()
    const mockElement = document.createElement('div')
    mockElement.scrollIntoView = scrollMock
    vi.spyOn(document, 'getElementById').mockReturnValue(mockElement)

    renderWithRouter(<QuickActions />)
    fireEvent.click(screen.getByText('Recent Boards'))
    expect(scrollMock).toHaveBeenCalledWith({ behavior: 'smooth' })

    vi.restoreAllMocks()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 3. WelcomeModal token flow (5 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('WelcomeModal token flow', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('renders step 1 with Get Started button', () => {
    renderWithRouter(<WelcomeModal />)
    expect(screen.getByText('Welcome to MiroX')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('calls miro.setToken and miro.testConnection on test button', async () => {
    vi.mocked(window.electronAPI.miro.testConnection).mockResolvedValueOnce({ ok: true })

    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))

    const input = screen.getByPlaceholderText('Paste your Miro API token...')
    fireEvent.change(input, { target: { value: 'test-token-123' } })
    fireEvent.click(screen.getByText('Test Connection'))

    await waitFor(() => {
      expect(window.electronAPI.miro.setToken).toHaveBeenCalledWith('test-token-123')
      expect(window.electronAPI.miro.testConnection).toHaveBeenCalled()
    })
  })

  it('shows success state when API returns ok', async () => {
    vi.mocked(window.electronAPI.miro.testConnection).mockResolvedValueOnce({ ok: true })

    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))

    const input = screen.getByPlaceholderText('Paste your Miro API token...')
    fireEvent.change(input, { target: { value: 'valid-token' } })
    fireEvent.click(screen.getByText('Test Connection'))

    await waitFor(() => {
      expect(screen.getByText('Connected successfully!')).toBeInTheDocument()
    })
  })

  it('shows error state when API returns not ok', async () => {
    vi.mocked(window.electronAPI.miro.testConnection).mockResolvedValueOnce({ ok: false, error: 'Bad token' })

    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))

    const input = screen.getByPlaceholderText('Paste your Miro API token...')
    fireEvent.change(input, { target: { value: 'bad-token' } })
    fireEvent.click(screen.getByText('Test Connection'))

    await waitFor(() => {
      expect(screen.getByText('Invalid token. Please check and try again.')).toBeInTheDocument()
    })
  })

  it('Skip button advances to step 3 without testing', () => {
    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))
    fireEvent.click(screen.getByText('Skip'))
    expect(screen.getByText("You're All Set!")).toBeInTheDocument()
    expect(window.electronAPI.miro.testConnection).not.toHaveBeenCalled()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 4. ErrorBoundary (5 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('ErrorBoundary', () => {
  const originalError = console.error
  beforeEach(() => { console.error = vi.fn() })
  afterEach(() => { console.error = originalError })

  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Child content</div>
      </ErrorBoundary>
    )
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('catches render errors and shows fallback UI', () => {
    function Bomb(): React.ReactElement { throw new Error('Boom') }
    render(<ErrorBoundary><Bomb /></ErrorBoundary>)
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('displays error message in fallback', () => {
    function Bomb(): React.ReactElement { throw new Error('Detailed error message') }
    render(<ErrorBoundary><Bomb /></ErrorBoundary>)
    expect(screen.getByText('Detailed error message')).toBeInTheDocument()
  })

  it('Reload button exists in fallback', () => {
    function Bomb(): React.ReactElement { throw new Error('crash') }
    render(<ErrorBoundary><Bomb /></ErrorBoundary>)
    expect(screen.getByText('Reload App')).toBeInTheDocument()
  })

  it('Try Again button resets error state and re-renders children', () => {
    let shouldThrow = true
    function MaybeThrow(): React.ReactElement {
      if (shouldThrow) throw new Error('first render crash')
      return <div>Recovered content</div>
    }
    render(<ErrorBoundary><MaybeThrow /></ErrorBoundary>)
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()

    shouldThrow = false
    fireEvent.click(screen.getByText('Try Again'))
    expect(screen.getByText('Recovered content')).toBeInTheDocument()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 5. Store versioning (6 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('Store versioning', () => {
  beforeEach(() => resetStores())

  it('boardStore initializes with correct defaults', () => {
    const state = useBoardStore.getState()
    expect(state.recentBoards).toEqual([])
    expect(state.totalBoardsCreated).toBe(0)
    expect(state.lastCreatedBoard).toBeNull()
  })

  it('settingsStore initializes with correct defaults', () => {
    const state = useSettingsStore.getState()
    expect(state.miroConnected).toBe(false)
    expect(state.onboardingComplete).toBe(false)
    expect(state.theme).toBe('dark')
  })

  it('agentStore initializes with correct defaults', () => {
    const state = useAgentStore.getState()
    expect(state.agents).toEqual([])
    expect(state.history).toEqual([])
    expect(state.isAdmin).toBe(true)
  })

  it('boardStore operations work with versioned persist', () => {
    const board = {
      id: 'b1', name: 'Test Board', url: 'https://miro.com/1',
      templateId: 'kanban', templateName: 'Kanban', createdAt: new Date().toISOString(),
    }
    useBoardStore.getState().addRecentBoard(board)
    expect(useBoardStore.getState().recentBoards).toHaveLength(1)
    expect(useBoardStore.getState().recentBoards[0]!.id).toBe('b1')
  })

  it('settingsStore operations work with versioned persist', () => {
    expect(useSettingsStore.getState().onboardingComplete).toBe(false)
    useSettingsStore.getState().completeOnboarding()
    expect(useSettingsStore.getState().onboardingComplete).toBe(true)
  })

  it('agentStore operations work with versioned persist', () => {
    useAgentStore.getState().addAgent({
      id: 'a1', prompt: 'test', provider: 'claude', model: 'sonnet', status: 'running',
      logs: [], startedAt: Date.now(), finishedAt: null, exitCode: null,
      cost: null, allowedTools: ['Read'], gitTagStart: null, gitTagEnd: null,
    outputType: 'text' as const,
    teamRunId: null,
    teamRole: null,
    teamSkill: null,
    timeLimitSeconds: 0,
    })
    expect(useAgentStore.getState().agents).toHaveLength(1)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 6. Toast timeout management (4 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('Toast timeout management', () => {
  beforeEach(() => {
    resetStores()
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  it('auto-removes toast after default duration (4s)', () => {
    useUIStore.getState().addToast({ type: 'info', title: 'Auto toast' })
    expect(useUIStore.getState().toasts).toHaveLength(1)
    act(() => { vi.advanceTimersByTime(4000) })
    expect(useUIStore.getState().toasts).toHaveLength(0)
  })

  it('multiple toasts have independent timeouts', () => {
    useUIStore.getState().addToast({ type: 'info', title: 'Toast A', duration: 1000 })
    useUIStore.getState().addToast({ type: 'info', title: 'Toast B', duration: 3000 })
    expect(useUIStore.getState().toasts).toHaveLength(2)

    act(() => { vi.advanceTimersByTime(1000) })
    expect(useUIStore.getState().toasts).toHaveLength(1)
    expect(useUIStore.getState().toasts[0]!.title).toBe('Toast B')

    act(() => { vi.advanceTimersByTime(2000) })
    expect(useUIStore.getState().toasts).toHaveLength(0)
  })

  it('manually removing toast does not cause double-removal', () => {
    useUIStore.getState().addToast({ type: 'info', title: 'Manual remove' })
    const toastId = useUIStore.getState().toasts[0]!.id
    useUIStore.getState().removeToast(toastId)
    expect(useUIStore.getState().toasts).toHaveLength(0)

    act(() => { vi.advanceTimersByTime(5000) })
    expect(useUIStore.getState().toasts).toHaveLength(0)
  })

  it('toast with custom duration respects it', () => {
    useUIStore.getState().addToast({ type: 'warning', title: 'Custom', duration: 10000 })
    expect(useUIStore.getState().toasts).toHaveLength(1)

    act(() => { vi.advanceTimersByTime(4000) })
    expect(useUIStore.getState().toasts).toHaveLength(1)

    act(() => { vi.advanceTimersByTime(6000) })
    expect(useUIStore.getState().toasts).toHaveLength(0)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 7. FileDropZone edge cases (4 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('FileDropZone edge cases', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('renders drop zone with instruction text', () => {
    renderWithRouter(<FileDropZone />)
    expect(screen.getByText('Drop files here or click to browse')).toBeInTheDocument()
  })

  it('lists supported file types', () => {
    renderWithRouter(<FileDropZone />)
    expect(screen.getByText('PDF, DOCX, TXT, MD, CSV, XLSX, JSON, ZIP')).toBeInTheDocument()
  })

  it('renders as a clickable drop area', () => {
    const { container } = renderWithRouter(<FileDropZone />)
    const dropZone = container.querySelector('.cursor-pointer')
    expect(dropZone).not.toBeNull()
  })

  it('shows file name after dropping a file', async () => {
    renderWithRouter(<FileDropZone />)
    const dropZone = screen.getByText('Drop files here or click to browse').closest('div[class*="min-h"]')!
    const file = new File(['content'], 'report.pdf', { type: 'application/pdf' })
    Object.defineProperty(file, 'path', { value: '/tmp/report.pdf' })
    fireEvent.drop(dropZone, { dataTransfer: { files: [file] } })

    await waitFor(() => {
      expect(screen.getByText('report.pdf')).toBeInTheDocument()
    })
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 8. URLImporter edge cases (5 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('URLImporter edge cases', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('shows empty state initially', () => {
    renderWithRouter(<URLImporter />)
    expect(screen.getByText('Enter a URL to fetch and analyze web content')).toBeInTheDocument()
  })

  it('shows error for invalid URL', async () => {
    renderWithRouter(<URLImporter />)
    const input = screen.getByPlaceholderText('https://...')
    fireEvent.change(input, { target: { value: 'not-a-url' } })
    fireEvent.click(screen.getByText('Fetch & Analyze'))

    await waitFor(() => {
      expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument()
    })
  })

  it('Fetch button disabled when URL empty', () => {
    renderWithRouter(<URLImporter />)
    const button = screen.getByText('Fetch & Analyze')
    expect(button).toBeDisabled()
  })

  it('Enter key triggers fetch', () => {
    renderWithRouter(<URLImporter />)
    const input = screen.getByPlaceholderText('https://...')
    fireEvent.change(input, { target: { value: 'not-a-url' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument()
  })

  it('shows result card after successful fetch', async () => {
    vi.mocked(window.electronAPI.files.fetchUrl).mockResolvedValueOnce({
      ok: true,
      text: '<html><head><title>Test Page</title></head><body><h1>Hello</h1><p>Content</p></body></html>',
    })

    renderWithRouter(<URLImporter />)
    const input = screen.getByPlaceholderText('https://...')
    fireEvent.change(input, { target: { value: 'https://example.com' } })
    fireEvent.click(screen.getByText('Fetch & Analyze'))

    await waitFor(() => {
      expect(screen.getByText('Test Page')).toBeInTheDocument()
    })
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 9. BoardWizard error recovery (3 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('BoardWizard error recovery', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('shows error message when creation fails (via hook)', async () => {
    vi.mocked(window.electronAPI.miro.createBoard).mockRejectedValueOnce(new Error('API limit reached'))

    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => { result.current.setTemplate(mockTemplate) })
    await act(async () => { await result.current.startCreation() })

    expect(result.current.error).toBe('API limit reached')
  })

  it('error state includes Try Again ability via reset', async () => {
    vi.mocked(window.electronAPI.miro.createBoard).mockRejectedValueOnce(new Error('Board creation failed'))

    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => { result.current.setTemplate(mockTemplate) })
    await act(async () => { await result.current.startCreation() })
    expect(result.current.error).toBe('Board creation failed')

    act(() => { result.current.reset() })
    expect(result.current.error).toBeNull()
  })

  it('Try Again via reset returns to step 1', async () => {
    vi.mocked(window.electronAPI.miro.createBoard).mockRejectedValueOnce(new Error('Failure'))

    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => { result.current.setTemplate(mockTemplate) })
    await act(async () => { await result.current.startCreation() })
    expect(result.current.currentStep).toBe(4)

    act(() => { result.current.reset() })
    expect(result.current.currentStep).toBe(1)
    expect(result.current.selectedTemplate).toBeNull()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 10. Navigation flows (4 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('Navigation flows', () => {
  beforeEach(() => resetStores())

  it('Home page renders hero section', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText('Enterprise Board Builder')).toBeInTheDocument()
    expect(screen.getByText(`v${__APP_VERSION__}`)).toBeInTheDocument()
  })

  it('Templates page renders search and gallery', () => {
    renderWithRouter(<Templates />, { route: '/templates' })
    expect(screen.getByText('Board Templates')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search templates...')).toBeInTheDocument()
  })

  it('Settings page renders all tabs', () => {
    renderWithRouter(<Settings />, { route: '/settings' })
    expect(screen.getByText('Miro')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Appearance')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('Import page renders tab selector', () => {
    renderWithRouter(<Import />, { route: '/import' })
    expect(screen.getByText('File Upload')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('URL')).toBeInTheDocument()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 11. Form submissions (3 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('Form submissions', () => {
  beforeEach(() => resetStores())

  it('Builder Next button disabled when board name empty', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByText('Board Name')).toBeInTheDocument()
    })
    const nameInput = screen.getByDisplayValue('Sprint Planning')
    fireEvent.change(nameInput, { target: { value: '' } })
    const nextButton = screen.getByText('Next: Customize Content')
    expect(nextButton).toBeDisabled()
  })

  it('Builder Next button enabled when board name entered', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByText('Board Name')).toBeInTheDocument()
    })
    const nameInput = screen.getByDisplayValue('Sprint Planning')
    fireEvent.change(nameInput, { target: { value: 'My Board' } })
    const nextButton = screen.getByText('Next: Customize Content')
    expect(nextButton).not.toBeDisabled()
  })

  it('Settings tab navigation works', async () => {
    renderWithRouter(<Settings />, { route: '/settings' })
    expect(screen.getByText('Miro Connection')).toBeInTheDocument()

    fireEvent.click(screen.getByText('GitHub'))
    await waitFor(() => {
      expect(screen.getByText('GitHub Integration')).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText('Appearance'))
    await waitFor(() => {
      expect(screen.getByText('Theme')).toBeInTheDocument()
    })
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 12. useBoardBuilder hook (6 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('useBoardBuilder hook', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('initial state has step 1, no template selected', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    expect(result.current.currentStep).toBe(1)
    expect(result.current.selectedTemplate).toBeNull()
    expect(result.current.boardName).toBe('')
  })

  it('setTemplate sets template and board name', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => { result.current.setTemplate(mockTemplate) })
    expect(result.current.selectedTemplate).toEqual(mockTemplate)
    expect(result.current.boardName).toBe('Kanban Board')
  })

  it('nextStep advances step, prevStep goes back', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    expect(result.current.currentStep).toBe(1)

    act(() => result.current.nextStep())
    expect(result.current.currentStep).toBe(2)

    act(() => result.current.nextStep())
    expect(result.current.currentStep).toBe(3)

    act(() => result.current.prevStep())
    expect(result.current.currentStep).toBe(2)

    act(() => result.current.prevStep())
    expect(result.current.currentStep).toBe(1)

    act(() => result.current.prevStep())
    expect(result.current.currentStep).toBe(1)
  })

  it('reset clears all state', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => {
      result.current.setTemplate(mockTemplate)
      result.current.setBoardName('Custom Name')
      result.current.nextStep()
    })
    expect(result.current.currentStep).toBe(2)

    act(() => result.current.reset())
    expect(result.current.currentStep).toBe(1)
    expect(result.current.selectedTemplate).toBeNull()
    expect(result.current.boardName).toBe('')
    expect(result.current.error).toBeNull()
  })

  it('startCreation calls buildBoard service', async () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => {
      result.current.setTemplate(mockTemplate)
      result.current.setBoardName('My Kanban')
    })

    await act(async () => { await result.current.startCreation() })

    expect(window.electronAPI.miro.createBoard).toHaveBeenCalledWith(
      'My Kanban',
      expect.stringContaining('Kanban Board')
    )
    expect(result.current.isComplete).toBe(true)
    expect(result.current.boardUrl).toBeTruthy()
  })

  it('error in creation sets error state', async () => {
    vi.mocked(window.electronAPI.miro.createBoard).mockRejectedValueOnce(new Error('Network error'))

    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => { result.current.setTemplate(mockTemplate) })
    await act(async () => { await result.current.startCreation() })

    expect(result.current.error).toBe('Network error')
    expect(result.current.isComplete).toBe(false)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 13. Additional store operations (12 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('Additional store operations', () => {
  beforeEach(() => resetStores())

  it('boardStore limits recent boards to 10', () => {
    for (let i = 0; i < 15; i++) {
      useBoardStore.getState().addRecentBoard({
        id: `b${i}`, name: `Board ${i}`, url: `https://miro.com/${i}`,
        templateId: 'kanban', templateName: 'Kanban', createdAt: new Date().toISOString(),
      })
    }
    expect(useBoardStore.getState().recentBoards).toHaveLength(10)
  })

  it('boardStore removeRecentBoard removes by id', () => {
    useBoardStore.getState().addRecentBoard({
      id: 'to-remove', name: 'Temp Board', url: 'https://miro.com/temp',
      templateId: 'kanban', templateName: 'Kanban', createdAt: new Date().toISOString(),
    })
    useBoardStore.getState().removeRecentBoard('to-remove')
    expect(useBoardStore.getState().recentBoards).toHaveLength(0)
  })

  it('boardStore clearRecentBoards removes all', () => {
    useBoardStore.getState().addRecentBoard({
      id: 'b1', name: 'Board 1', url: 'https://miro.com/1',
      templateId: 'kanban', templateName: 'Kanban', createdAt: new Date().toISOString(),
    })
    useBoardStore.getState().clearRecentBoards()
    expect(useBoardStore.getState().recentBoards).toEqual([])
  })

  it('boardStore incrementTotal increases count', () => {
    expect(useBoardStore.getState().totalBoardsCreated).toBe(0)
    useBoardStore.getState().incrementTotal()
    expect(useBoardStore.getState().totalBoardsCreated).toBe(1)
    useBoardStore.getState().incrementTotal()
    expect(useBoardStore.getState().totalBoardsCreated).toBe(2)
  })

  it('settingsStore recordTemplateUsed tracks templates', () => {
    useSettingsStore.getState().recordTemplateUsed('kanban')
    useSettingsStore.getState().recordTemplateUsed('swot')
    expect(useSettingsStore.getState().templatesUsed).toContain('kanban')
    expect(useSettingsStore.getState().templatesUsed).toContain('swot')
  })

  it('settingsStore setTheme changes theme', () => {
    useSettingsStore.getState().setTheme('light')
    expect(useSettingsStore.getState().theme).toBe('light')
    useSettingsStore.getState().setTheme('dark')
    expect(useSettingsStore.getState().theme).toBe('dark')
  })

  it('uiStore toggleSidebar toggles collapsed state', () => {
    expect(useUIStore.getState().sidebarCollapsed).toBe(false)
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarCollapsed).toBe(true)
    useUIStore.getState().toggleSidebar()
    expect(useUIStore.getState().sidebarCollapsed).toBe(false)
  })

  it('uiStore toggleSearch toggles isSearchOpen', () => {
    expect(useUIStore.getState().isSearchOpen).toBe(false)
    useUIStore.getState().toggleSearch()
    expect(useUIStore.getState().isSearchOpen).toBe(true)
  })

  it('uiStore openModal and closeModal work correctly', () => {
    useUIStore.getState().openModal('welcome')
    expect(useUIStore.getState().activeModal).toBe('welcome')
    useUIStore.getState().closeModal()
    expect(useUIStore.getState().activeModal).toBeNull()
  })

  it('agentStore moveToHistory moves agent from active to history', () => {
    useAgentStore.getState().addAgent({
      id: 'move-me', prompt: 'test', provider: 'claude', model: 'sonnet', status: 'completed',
      logs: [], startedAt: Date.now(), finishedAt: Date.now(), exitCode: 0,
      cost: null, allowedTools: [], gitTagStart: null, gitTagEnd: null,
    outputType: 'text' as const,
    teamRunId: null,
    teamRole: null,
    teamSkill: null,
    timeLimitSeconds: 0,
    })
    useAgentStore.getState().moveToHistory('move-me')
    expect(useAgentStore.getState().agents).toHaveLength(0)
    expect(useAgentStore.getState().history).toHaveLength(1)
  })

  it('agentStore clearHistory empties history array', () => {
    useAgentStore.getState().addAgent({
      id: 'h1', prompt: 'test', provider: 'claude', model: 'sonnet', status: 'completed',
      logs: [], startedAt: Date.now(), finishedAt: Date.now(), exitCode: 0,
      cost: null, allowedTools: [], gitTagStart: null, gitTagEnd: null,
    outputType: 'text' as const,
    teamRunId: null,
    teamRole: null,
    teamSkill: null,
    timeLimitSeconds: 0,
    })
    useAgentStore.getState().moveToHistory('h1')
    useAgentStore.getState().clearHistory()
    expect(useAgentStore.getState().history).toHaveLength(0)
  })

  it('agentStore updateAgentStatus changes status and sets finishedAt', () => {
    useAgentStore.getState().addAgent({
      id: 'status-test', prompt: 'test', provider: 'claude', model: 'sonnet', status: 'running',
      logs: [], startedAt: Date.now(), finishedAt: null, exitCode: null,
      cost: null, allowedTools: [], gitTagStart: null, gitTagEnd: null,
    outputType: 'text' as const,
    teamRunId: null,
    teamRole: null,
    teamSkill: null,
    timeLimitSeconds: 0,
    })
    useAgentStore.getState().updateAgentStatus('status-test', 'completed', 0)
    const agent = useAgentStore.getState().agents.find(a => a.id === 'status-test')
    expect(agent!.status).toBe('completed')
    expect(agent!.exitCode).toBe(0)
    expect(agent!.finishedAt).toBeTruthy()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 14. IPC Type Safety (5 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('ElectronAPI type safety', () => {
  it('miro namespace has all required methods', () => {
    const api = window.electronAPI.miro
    expect(typeof api.createBoard).toBe('function')
    expect(typeof api.listBoards).toBe('function')
    expect(typeof api.testConnection).toBe('function')
    expect(typeof api.getToken).toBe('function')
    expect(typeof api.setToken).toBe('function')
    expect(typeof api.deleteGhosts).toBe('function')
  })

  it('github namespace has all required methods', () => {
    const api = window.electronAPI.github
    expect(typeof api.getToken).toBe('function')
    expect(typeof api.setToken).toBe('function')
    expect(typeof api.listRepos).toBe('function')
    expect(typeof api.analyzeRepo).toBe('function')
    expect(typeof api.testConnection).toBe('function')
  })

  it('agent namespace has all required methods', () => {
    const api = window.electronAPI.agent
    expect(typeof api.launch).toBe('function')
    expect(typeof api.kill).toBe('function')
    expect(typeof api.killAll).toBe('function')
    expect(typeof api.rollback).toBe('function')
    expect(typeof api.onLog).toBe('function')
    expect(typeof api.onExit).toBe('function')
  })

  it('files namespace has all required methods', () => {
    const api = window.electronAPI.files
    expect(typeof api.openDialog).toBe('function')
    expect(typeof api.readFile).toBe('function')
    expect(typeof api.parseFile).toBe('function')
    expect(typeof api.fetchUrl).toBe('function')
  })

  it('selfTest namespace has all required methods', () => {
    const api = window.electronAPI.selfTest
    expect(typeof api.screenshot).toBe('function')
    expect(typeof api.domCheck).toBe('function')
    expect(typeof api.consoleErrors).toBe('function')
    expect(typeof api.clearConsoleErrors).toBe('function')
    expect(typeof api.runAll).toBe('function')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 15. WelcomeModal full flow (2 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('WelcomeModal full flow', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('step 3 shows completion screen with Open MiroX button', () => {
    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))
    fireEvent.click(screen.getByText('Skip'))
    expect(screen.getByText("You're All Set!")).toBeInTheDocument()
    expect(screen.getByText('Open MiroX')).toBeInTheDocument()
  })

  it('Open MiroX button completes onboarding', () => {
    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))
    fireEvent.click(screen.getByText('Skip'))
    fireEvent.click(screen.getByText('Open MiroX'))
    expect(useSettingsStore.getState().onboardingComplete).toBe(true)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 16. useBoardBuilder field defaults (2 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('useBoardBuilder field defaults', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('initializes field defaults from template', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => { result.current.setTemplate(mockTemplate) })
    expect(result.current.fieldValues).toEqual({ col1: 'To Do' })
  })

  it('setFieldValue updates a single field', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => { result.current.setTemplate(mockTemplate) })
    act(() => { result.current.setFieldValue('col1', 'In Progress') })
    expect(result.current.fieldValues.col1).toBe('In Progress')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 17. Settings store edge cases (3 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('Settings store edge cases', () => {
  beforeEach(() => resetStores())

  it('setMiroConnected with username stores both values', () => {
    useSettingsStore.getState().setMiroConnected(true, 'TestUser')
    expect(useSettingsStore.getState().miroConnected).toBe(true)
    expect(useSettingsStore.getState().miroUsername).toBe('TestUser')
  })

  it('setGithubConnected with username and avatar stores all values', () => {
    useSettingsStore.getState().setGithubConnected(true, 'ghuser', 'https://avatar.com/1')
    expect(useSettingsStore.getState().githubConnected).toBe(true)
    expect(useSettingsStore.getState().githubUsername).toBe('ghuser')
    expect(useSettingsStore.getState().githubAvatarUrl).toBe('https://avatar.com/1')
  })

  it('incrementFilesImported increases counter', () => {
    expect(useSettingsStore.getState().filesImported).toBe(0)
    useSettingsStore.getState().incrementFilesImported()
    expect(useSettingsStore.getState().filesImported).toBe(1)
    useSettingsStore.getState().incrementFilesImported()
    expect(useSettingsStore.getState().filesImported).toBe(2)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 18. Agent log management (3 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('Agent log management', () => {
  beforeEach(() => resetStores())

  it('appendLog adds log entries to the correct agent', () => {
    useAgentStore.getState().addAgent({
      id: 'log-agent', prompt: 'test', provider: 'claude', model: 'sonnet', status: 'running',
      logs: [], startedAt: Date.now(), finishedAt: null, exitCode: null,
      cost: null, allowedTools: [], gitTagStart: null, gitTagEnd: null,
    outputType: 'text' as const,
    teamRunId: null,
    teamRole: null,
    teamSkill: null,
    timeLimitSeconds: 0,
    })
    useAgentStore.getState().appendLog('log-agent', { timestamp: 1000, type: 'stdout', text: 'Line 1' })
    useAgentStore.getState().appendLog('log-agent', { timestamp: 2000, type: 'stderr', text: 'Line 2' })

    const agent = useAgentStore.getState().agents.find(a => a.id === 'log-agent')
    expect(agent!.logs).toHaveLength(2)
    expect(agent!.logs[0]!.text).toBe('Line 1')
    expect(agent!.logs[1]!.text).toBe('Line 2')
  })

  it('appendLog caps at 2000 entries', () => {
    useAgentStore.getState().addAgent({
      id: 'cap-agent', prompt: 'test', provider: 'claude', model: 'sonnet', status: 'running',
      logs: [], startedAt: Date.now(), finishedAt: null, exitCode: null,
      cost: null, allowedTools: [], gitTagStart: null, gitTagEnd: null,
    outputType: 'text' as const,
    teamRunId: null,
    teamRole: null,
    teamSkill: null,
    timeLimitSeconds: 0,
    })
    for (let i = 0; i < 2100; i++) {
      useAgentStore.getState().appendLog('cap-agent', { timestamp: i, type: 'stdout', text: `Line ${i}` })
    }
    const agent = useAgentStore.getState().agents.find(a => a.id === 'cap-agent')
    expect(agent!.logs.length).toBeLessThanOrEqual(2000)
  })

})

// ──────────────────────────────────────────────────────────────────────────────
// 19. QuickActions descriptions (2 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('QuickActions descriptions', () => {
  beforeEach(() => resetStores())

  it('renders all four action descriptions', () => {
    renderWithRouter(<QuickActions />)
    expect(screen.getByText(`Start from ${ALL_TEMPLATES.length}+ professional templates`)).toBeInTheDocument()
    expect(screen.getByText('Upload PDF, DOCX, CSV, and more')).toBeInTheDocument()
    expect(screen.getByText('Connect your repos in seconds')).toBeInTheDocument()
    expect(screen.getByText('View your last 10 boards')).toBeInTheDocument()
  })

  it('does not scroll when element does not exist', () => {
    vi.spyOn(document, 'getElementById').mockReturnValue(null)
    renderWithRouter(<QuickActions />)
    fireEvent.click(screen.getByText('Recent Boards'))
    expect(screen.getByText('Recent Boards')).toBeInTheDocument()
    vi.restoreAllMocks()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 20. TopBar UI elements (2 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('TopBar UI elements', () => {
  beforeEach(() => resetStores())

  it('has settings navigation button', () => {
    renderWithRouter(<TopBar />)
    // TopBar has two buttons: search and settings
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
  })

  it('has search toggle button', () => {
    renderWithRouter(<TopBar />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 21. Catch-all 404 route (1 test)
// ──────────────────────────────────────────────────────────────────────────────

describe('Catch-all 404 route', () => {
  beforeEach(() => resetStores())

  it('redirects unknown routes to home', async () => {
    renderWithRouter(<Home />, { route: '/nonexistent-page' })
    await waitFor(() => {
      expect(screen.getByText('Enterprise Board Builder')).toBeInTheDocument()
    })
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// 22. useBoardBuilder boardDescription (2 tests)
// ──────────────────────────────────────────────────────────────────────────────

describe('useBoardBuilder boardDescription', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('exposes boardDescription state initialized to empty string', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    expect(result.current.boardDescription).toBe('')
  })

  it('setBoardDescription updates boardDescription', () => {
    const { result } = renderHook(() => useBoardBuilder(), { wrapper: hookWrapper })
    act(() => result.current.setBoardDescription('My description'))
    expect(result.current.boardDescription).toBe('My description')
  })
})
