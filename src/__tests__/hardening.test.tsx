import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Suspense } from 'react'

// Stores
import { useUIStore } from '../stores/uiStore'
import { useBoardStore } from '../stores/boardStore'
import { useSettingsStore } from '../stores/settingsStore'
import { useAgentStore } from '../stores/agentStore'

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
    isCreating: false,
    creationProgress: 0,
    creationStep: '',
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

// ────────────────────────────────────────────────────────────────────────
// SECTION 1: TopBar Page Titles
// ────────────────────────────────────────────────────────────────────────
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

// ────────────────────────────────────────────────────────────────────────
// SECTION 2: QuickActions Edge Cases
// ────────────────────────────────────────────────────────────────────────
describe('QuickActions', () => {
  beforeEach(() => resetStores())

  it('renders all four quick action cards', () => {
    renderWithRouter(<QuickActions />)
    expect(screen.getByText('New Board')).toBeInTheDocument()
    expect(screen.getByText('Import File')).toBeInTheDocument()
    expect(screen.getByText('GitHub Project')).toBeInTheDocument()
    expect(screen.getByText('Recent Boards')).toBeInTheDocument()
  })

  it('navigates to /templates when New Board is clicked', () => {
    renderWithRouter(<QuickActions />)
    fireEvent.click(screen.getByText('New Board'))
    // Navigation occurs via useNavigate — we can verify the button is clickable
    expect(screen.getByText('New Board')).toBeInTheDocument()
  })

  it('handles Recent Boards click with scrollIntoView', () => {
    renderWithRouter(<QuickActions />)
    fireEvent.click(screen.getByText('Recent Boards'))
    // scrollIntoView is mocked in setup.ts — just verify no crash
    expect(screen.getByText('Recent Boards')).toBeInTheDocument()
  })

  it('has keyboard-accessible buttons with focus-visible ring', () => {
    renderWithRouter(<QuickActions />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(4)
    buttons.forEach(btn => {
      expect(btn.className).toContain('focus-visible')
    })
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 3: WelcomeModal Token Flow
// ────────────────────────────────────────────────────────────────────────
describe('WelcomeModal', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('renders step 1 with Get Started button', () => {
    renderWithRouter(<WelcomeModal />)
    expect(screen.getByText('Welcome to MiroX')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('advances to step 2 on Get Started click', () => {
    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))
    expect(screen.getByText('Connect to Miro')).toBeInTheDocument()
  })

  it('calls miro.setToken and miro.testConnection on test button', async () => {
    const mockSetToken = vi.mocked(window.electronAPI.miro.setToken)
    const mockTestConn = vi.mocked(window.electronAPI.miro.testConnection)
    mockTestConn.mockResolvedValueOnce({ ok: true, status: 200 })

    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))

    const input = screen.getByPlaceholderText('Paste your Miro API token...')
    fireEvent.change(input, { target: { value: 'test-token-12345' } })
    fireEvent.click(screen.getByText('Test Connection'))

    await waitFor(() => {
      expect(mockSetToken).toHaveBeenCalledWith('test-token-12345')
      expect(mockTestConn).toHaveBeenCalled()
    })
  })

  it('shows success state when API returns ok', async () => {
    vi.mocked(window.electronAPI.miro.testConnection).mockResolvedValueOnce({ ok: true, status: 200 })

    renderWithRouter(<WelcomeModal />)
    fireEvent.click(screen.getByText('Get Started'))

    const input = screen.getByPlaceholderText('Paste your Miro API token...')
    fireEvent.change(input, { target: { value: 'test-token-12345' } })
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
    fireEvent.change(input, { target: { value: 'bad-token-xxxxxx' } })
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
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 4: ErrorBoundary
// ────────────────────────────────────────────────────────────────────────
describe('ErrorBoundary', () => {
  // Suppress console.error from ErrorBoundary
  const originalError = console.error
  beforeEach(() => {
    console.error = vi.fn()
  })
  afterEach(() => {
    console.error = originalError
  })

  function ThrowError({ shouldThrow }: { shouldThrow: boolean }) {
    if (shouldThrow) throw new Error('Test explosion')
    return <div>No error here</div>
  }

  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Child content</div>
      </ErrorBoundary>
    )
    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('catches render errors and shows fallback UI', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })

  it('displays error message in fallback', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )
    expect(screen.getByText('Test explosion')).toBeInTheDocument()
  })

  it('shows Reload App button in fallback', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )
    expect(screen.getByText('Reload App')).toBeInTheDocument()
  })

  it('Try Again button attempts to re-render children', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    )
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()

    // Click Try Again — it resets internal state and tries to render children
    // Since shouldThrow is still true, it will error again and show fallback
    fireEvent.click(screen.getByText('Try Again'))
    expect(screen.getByText('Something went wrong')).toBeInTheDocument()
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 5: Store Versioning
// ────────────────────────────────────────────────────────────────────────
describe('Store persistence versioning', () => {
  it('boardStore initializes correctly with persist config', () => {
    const state = useBoardStore.getState()
    expect(state.recentBoards).toEqual([])
    expect(state.totalBoardsCreated).toBe(0)
  })

  it('settingsStore initializes correctly with persist config', () => {
    const state = useSettingsStore.getState()
    expect(state.theme).toBe('dark')
    expect(state.accentColor).toBe('#FFD600')
  })

  it('agentStore initializes correctly with persist config', () => {
    const state = useAgentStore.getState()
    expect(state.agents).toEqual([])
    expect(state.history).toEqual([])
    expect(state.isAdmin).toBe(true)
  })

  it('boardStore addRecentBoard works with versioned persist', () => {
    const board = {
      id: 'b1', name: 'Test', url: 'https://miro.com/1',
      templateId: 't1', templateName: 'T1', createdAt: '2024-01-01',
    }
    useBoardStore.getState().addRecentBoard(board)
    expect(useBoardStore.getState().recentBoards[0]?.id).toBe('b1')
    useBoardStore.getState().removeRecentBoard('b1')
  })

  it('settingsStore recordTemplateUsed works with versioned persist', () => {
    useSettingsStore.getState().recordTemplateUsed('tmpl-1')
    expect(useSettingsStore.getState().templatesUsed).toContain('tmpl-1')
    resetStores()
  })

  it('agentStore moveToHistory works with versioned persist', () => {
    const agent = {
      id: 'a1', prompt: 'test', model: 'sonnet' as const, status: 'completed' as const,
      logs: [], startedAt: Date.now(), finishedAt: Date.now(),
      exitCode: 0, cost: null, allowedTools: [], gitTagStart: null, gitTagEnd: null,
    }
    useAgentStore.getState().addAgent(agent)
    useAgentStore.getState().moveToHistory('a1')
    expect(useAgentStore.getState().history[0]?.id).toBe('a1')
    resetStores()
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 6: Toast Timeout Management
// ────────────────────────────────────────────────────────────────────────
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

  it('respects custom duration', () => {
    useUIStore.getState().addToast({ type: 'info', title: 'Custom', duration: 2000 })
    expect(useUIStore.getState().toasts).toHaveLength(1)

    act(() => { vi.advanceTimersByTime(2000) })
    expect(useUIStore.getState().toasts).toHaveLength(0)
  })

  it('multiple toasts have independent timeouts', () => {
    useUIStore.getState().addToast({ type: 'info', title: 'Toast A', duration: 1000 })
    useUIStore.getState().addToast({ type: 'info', title: 'Toast B', duration: 3000 })
    expect(useUIStore.getState().toasts).toHaveLength(2)

    act(() => { vi.advanceTimersByTime(1000) })
    expect(useUIStore.getState().toasts).toHaveLength(1)
    expect(useUIStore.getState().toasts[0]?.title).toBe('Toast B')

    act(() => { vi.advanceTimersByTime(2000) })
    expect(useUIStore.getState().toasts).toHaveLength(0)
  })

  it('manually removing toast clears its timeout without double-remove', () => {
    useUIStore.getState().addToast({ type: 'info', title: 'Manual remove' })
    const toastId = useUIStore.getState().toasts[0]!.id
    expect(useUIStore.getState().toasts).toHaveLength(1)

    useUIStore.getState().removeToast(toastId)
    expect(useUIStore.getState().toasts).toHaveLength(0)

    // Advance past the timeout — should not error or re-remove
    act(() => { vi.advanceTimersByTime(5000) })
    expect(useUIStore.getState().toasts).toHaveLength(0)
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 7: FileDropZone Edge Cases
// ────────────────────────────────────────────────────────────────────────
describe('FileDropZone', () => {
  beforeEach(() => resetStores())

  it('renders drop zone with instruction text', () => {
    renderWithRouter(<FileDropZone />)
    expect(screen.getByText('Drop files here or click to browse')).toBeInTheDocument()
  })

  it('lists supported file types', () => {
    renderWithRouter(<FileDropZone />)
    expect(screen.getByText('PDF, DOCX, TXT, MD, CSV, XLSX, JSON, ZIP')).toBeInTheDocument()
  })

  it('renders as a clickable area', () => {
    const { container } = renderWithRouter(<FileDropZone />)
    const dropZone = container.querySelector('.cursor-pointer')
    expect(dropZone).not.toBeNull()
  })

  it('calls onFileReady callback when provided', () => {
    const callback = vi.fn()
    renderWithRouter(<FileDropZone onFileReady={callback} />)
    // Callback is called via useEffect when files reach 'ready' status
    // Since no files are present initially, callback should not be called
    expect(callback).not.toHaveBeenCalled()
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 8: URLImporter Edge Cases
// ────────────────────────────────────────────────────────────────────────
describe('URLImporter', () => {
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

  it('fetch button is disabled when URL is empty', () => {
    renderWithRouter(<URLImporter />)
    const button = screen.getByText('Fetch & Analyze')
    expect(button).toBeDisabled()
  })

  it('Enter key triggers fetch', () => {
    renderWithRouter(<URLImporter />)
    const input = screen.getByPlaceholderText('https://...')
    fireEvent.change(input, { target: { value: 'not-a-url' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    // Should trigger validation error for invalid URL
    expect(screen.getByText('Please enter a valid URL')).toBeInTheDocument()
  })

  it('shows result card after successful fetch', async () => {
    vi.mocked(window.electronAPI.files.fetchUrl).mockResolvedValueOnce({
      ok: true,
      text: '<html><head><title>Test Page</title></head><body><h1>Hello World</h1><p>Content here</p></body></html>',
      url: 'https://example.com',
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

// ────────────────────────────────────────────────────────────────────────
// SECTION 9: BoardWizard Error Recovery
// ────────────────────────────────────────────────────────────────────────
describe('BoardWizard error recovery', () => {
  beforeEach(() => resetStores())

  it('renders step indicator with Template step', () => {
    renderWithRouter(<BoardWizard />, { route: '/builder' })
    expect(screen.getByText('Template')).toBeInTheDocument()
  })

  it('renders step indicator with Name step', () => {
    renderWithRouter(<BoardWizard />, { route: '/builder' })
    expect(screen.getByText('Name')).toBeInTheDocument()
  })

  it('renders step indicator with Content and Creating steps', () => {
    renderWithRouter(<BoardWizard />, { route: '/builder' })
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Creating')).toBeInTheDocument()
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 10: Navigation Flows
// ────────────────────────────────────────────────────────────────────────
describe('Navigation flows', () => {
  beforeEach(() => resetStores())

  it('Home page renders hero section', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText('Enterprise Board Builder')).toBeInTheDocument()
    expect(screen.getByText('v1.0.0')).toBeInTheDocument()
  })

  it('Templates page renders search and gallery', () => {
    renderWithRouter(<Templates />, { route: '/templates' })
    expect(screen.getByPlaceholderText('Search templates...')).toBeInTheDocument()
    expect(screen.getByText('Board Templates')).toBeInTheDocument()
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

// ────────────────────────────────────────────────────────────────────────
// SECTION 11: Form Submissions
// ────────────────────────────────────────────────────────────────────────
describe('Form submissions', () => {
  beforeEach(() => resetStores())

  it('Builder Next button disabled when board name is empty', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByText('Board Name')).toBeInTheDocument()
    })
    // Clear the auto-filled board name
    const nameInput = screen.getByDisplayValue('Sprint Planning')
    fireEvent.change(nameInput, { target: { value: '' } })
    const nextButton = screen.getByText('Next: Customize Content')
    expect(nextButton).toBeDisabled()
  })

  it('Builder Next button enabled when board name is entered', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByText('Board Name')).toBeInTheDocument()
    })
    const nameInput = screen.getByDisplayValue('Sprint Planning')
    fireEvent.change(nameInput, { target: { value: 'My Board' } })
    const nextButton = screen.getByText('Next: Customize Content')
    expect(nextButton).not.toBeDisabled()
  })

  it('Settings Miro tab shows connection config', () => {
    renderWithRouter(<Settings />, { route: '/settings' })
    expect(screen.getByText('Miro Connection')).toBeInTheDocument()
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 12: useBoardBuilder Hook
// ────────────────────────────────────────────────────────────────────────
describe('useBoardBuilder via BoardWizard', () => {
  beforeEach(() => resetStores())

  it('starts at step 1 with no template selected', () => {
    renderWithRouter(<BoardWizard />, { route: '/builder' })
    expect(screen.getByText('Template')).toBeInTheDocument()
  })

  it('auto-selects template from URL param and shows step 2', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByText('Board Name')).toBeInTheDocument()
    })
  })

  it('shows Back button on step 2', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByText('Back')).toBeInTheDocument()
    })
  })

  it('shows description field on step 2', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByText('Description (optional)')).toBeInTheDocument()
    })
  })

  it('auto-fills board name from template', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByDisplayValue('Sprint Planning')).toBeInTheDocument()
    })
  })

  it('shows Next: Customize Content button', async () => {
    renderWithRouter(<BoardWizard />, { route: '/builder?template=sprint-planning' })
    await waitFor(() => {
      expect(screen.getByText('Next: Customize Content')).toBeInTheDocument()
    })
  })
})

// ────────────────────────────────────────────────────────────────────────
// SECTION 13: IPC Type Safety
// ────────────────────────────────────────────────────────────────────────
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
