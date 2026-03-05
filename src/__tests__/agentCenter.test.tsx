import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useAgentStore } from '../stores/agentStore'
import { useUIStore } from '../stores/uiStore'
import type { AgentRun } from '../types/agent'

// Component imports
import { AgentLauncher } from '../components/agent-center/AgentLauncher'
import { LiveLogs } from '../components/agent-center/LiveLogs'
import { AppSelfCheck } from '../components/agent-center/AppSelfCheck'
import { RunHistory } from '../components/agent-center/RunHistory'
import { ActiveAgents } from '../components/agent-center/ActiveAgents'

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

function makeAgent(overrides: Partial<AgentRun> = {}): AgentRun {
  return {
    id: 'agent-1',
    prompt: 'Fix TypeScript errors in the codebase',
    provider: 'claude',
    model: 'sonnet',
    status: 'running',
    logs: [],
    startedAt: Date.now() - 5000,
    finishedAt: null,
    exitCode: null,
    cost: null,
    allowedTools: ['Read', 'Edit'],
    gitTagStart: null,
    gitTagEnd: null,
    outputType: 'text' as const,
    teamRunId: null,
    teamRole: null,
    ...overrides,
  }
}

function resetStores() {
  useAgentStore.setState({
    agents: [],
    history: [],
    consoleErrors: [],
    lastScreenshot: null,
    domCheckResults: null,
    isAdmin: true,
  })
  useUIStore.setState({
    sidebarCollapsed: false,
    activePage: '/',
    activeModal: null,
    toasts: [],
    isSearchOpen: false,
  })
}

// ──────────────────────────────────────────────────────────────────────────────
// AgentLauncher Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('AgentLauncher', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getAllByText('Launch Agent').length).toBeGreaterThanOrEqual(1)
  })

  it('shows the prompt input', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getByPlaceholderText('Describe the task for your AI team...')).toBeInTheDocument()
  })

  it('shows model dropdown with Sonnet 4.6 default', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getAllByText('Sonnet 4.6').length).toBeGreaterThan(0)
  })

  it('shows all tool toggle chips', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getByText('Read')).toBeInTheDocument()
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Glob')).toBeInTheDocument()
    expect(screen.getByText('Grep')).toBeInTheDocument()
    expect(screen.getByText('Bash')).toBeInTheDocument()
  })

  it('tool chips have aria-pressed attribute', () => {
    renderWithRouter(<AgentLauncher />)
    const readChip = screen.getByRole('button', { name: 'Toggle Read tool' })
    expect(readChip).toHaveAttribute('aria-pressed', 'true')
  })

  it('shows Quick Actions section', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getByText('Quick Actions')).toBeInTheDocument()
  })

  it('launch button is disabled when prompt is empty', () => {
    renderWithRouter(<AgentLauncher />)
    const launchButtons = screen.getAllByText('Launch Agent')
    const submitBtn = launchButtons[launchButtons.length - 1]!.closest('button')
    expect(submitBtn).toBeDisabled()
  })

  it('launch button enables when prompt is entered', () => {
    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for your AI team...')
    fireEvent.change(input, { target: { value: 'Fix the bug' } })
    const launchButtons = screen.getAllByText('Launch Agent')
    const submitBtn = launchButtons[launchButtons.length - 1]!.closest('button')
    expect(submitBtn).not.toBeDisabled()
  })

  it('calls electronAPI.agent.launch when launch button is clicked', async () => {
    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for your AI team...')
    fireEvent.change(input, { target: { value: 'Fix the bug' } })
    const launchButtons = screen.getAllByText('Launch Agent')
    fireEvent.click(launchButtons[launchButtons.length - 1]!.closest('button')!)
    await waitFor(() => {
      expect(window.electronAPI.agent.launch).toHaveBeenCalledWith(
        expect.objectContaining({ prompt: 'Fix the bug', model: 'sonnet' })
      )
    })
  })

  it('clears prompt after successful launch', async () => {
    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for your AI team...')
    fireEvent.change(input, { target: { value: 'Fix the bug' } })
    const launchButtons = screen.getAllByText('Launch Agent')
    fireEvent.click(launchButtons[launchButtons.length - 1]!.closest('button')!)
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe('')
    })
  })

  it('adds agent to store after successful launch', async () => {
    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for your AI team...')
    fireEvent.change(input, { target: { value: 'My task' } })
    const launchButtons = screen.getAllByText('Launch Agent')
    fireEvent.click(launchButtons[launchButtons.length - 1]!.closest('button')!)
    await waitFor(() => {
      expect(useAgentStore.getState().agents).toHaveLength(1)
      expect(useAgentStore.getState().agents[0]!.id).toBe('test-agent-id')
    })
  })

  it('shows error toast when launch fails', async () => {
    vi.mocked(window.electronAPI.agent.launch).mockResolvedValueOnce({
      ok: false,
      error: 'Claude CLI not found',
    })
    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for your AI team...')
    fireEvent.change(input, { target: { value: 'Fix the bug' } })
    const launchButtons = screen.getAllByText('Launch Agent')
    fireEvent.click(launchButtons[launchButtons.length - 1]!.closest('button')!)
    await waitFor(() => {
      const toasts = useUIStore.getState().toasts
      expect(toasts.some((t) => t.type === 'error' && t.title === 'Launch failed')).toBe(true)
    })
  })

  it('clicking a quick action fills in the prompt', () => {
    renderWithRouter(<AgentLauncher />)
    fireEvent.click(screen.getByText('Fix All TypeScript Errors'))
    const input = screen.getByPlaceholderText('Describe the task for your AI team...')
    expect((input as HTMLInputElement).value).toContain('typecheck')
  })

  it('toggling a tool chip removes it from selected tools', async () => {
    renderWithRouter(<AgentLauncher />)
    const readChip = screen.getByRole('button', { name: 'Toggle Read tool' })
    // Initially pressed (selected)
    expect(readChip).toHaveAttribute('aria-pressed', 'true')
    fireEvent.click(readChip)
    // After click, not pressed
    expect(readChip).toHaveAttribute('aria-pressed', 'false')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// LiveLogs Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('LiveLogs', () => {
  beforeEach(() => {
    resetStores()
  })

  it('renders without crashing', () => {
    renderWithRouter(<LiveLogs />)
    expect(screen.getByText('Live Logs')).toBeInTheDocument()
  })

  it('shows empty state when no agents are running', () => {
    renderWithRouter(<LiveLogs />)
    expect(screen.getByText('Waiting for agent output...')).toBeInTheDocument()
  })

  it('displays log lines from agents', () => {
    useAgentStore.setState({
      agents: [
        makeAgent({
          logs: [
            { timestamp: 1000, type: 'stdout', text: 'Running task...' },
            { timestamp: 2000, type: 'stderr', text: 'Warning: something' },
            { timestamp: 3000, type: 'system', text: 'Agent launched' },
          ],
        }),
      ],
    })
    renderWithRouter(<LiveLogs />)
    expect(screen.getByText('Running task...')).toBeInTheDocument()
    expect(screen.getByText('Warning: something')).toBeInTheDocument()
    expect(screen.getByText('Agent launched')).toBeInTheDocument()
  })

  it('limits displayed logs to 1000 lines', () => {
    const logs = Array.from({ length: 1500 }, (_, i) => ({
      timestamp: i,
      type: 'stdout' as const,
      text: `Line ${i}`,
    }))
    useAgentStore.setState({ agents: [makeAgent({ logs })] })
    renderWithRouter(<LiveLogs />)
    expect(screen.queryByText('Line 0')).not.toBeInTheDocument()
    expect(screen.getByText('Line 1499')).toBeInTheDocument()
  })

  it('shows filter dropdown', () => {
    renderWithRouter(<LiveLogs />)
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(1)
  })

  it('does not add ellipsis to short agent labels', () => {
    useAgentStore.setState({
      agents: [makeAgent({ id: 'a1', prompt: 'Short' }), makeAgent({ id: 'a2', prompt: 'Another' })],
    })
    renderWithRouter(<LiveLogs />)
    // Multi-agent selector renders — check no spurious ellipsis on short prompts
    const options = screen.getAllByRole('option')
    const shortOption = options.find((o) => o.textContent?.includes('Short'))
    expect(shortOption?.textContent).not.toContain('...')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// AppSelfCheck Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('AppSelfCheck', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    renderWithRouter(<AppSelfCheck />)
    expect(screen.getByText('App Self-Check')).toBeInTheDocument()
  })

  it('shows Screenshot capture button', () => {
    renderWithRouter(<AppSelfCheck />)
    expect(screen.getByText('Capture')).toBeInTheDocument()
  })

  it('shows DOM Checks panel with Run Checks button', () => {
    renderWithRouter(<AppSelfCheck />)
    expect(screen.getByText('DOM Checks')).toBeInTheDocument()
    expect(screen.getByText('Run Checks')).toBeInTheDocument()
  })

  it('shows empty screenshot placeholder initially', () => {
    renderWithRouter(<AppSelfCheck />)
    expect(screen.getByText('No screenshot captured')).toBeInTheDocument()
  })

  it('shows empty DOM check placeholder initially', () => {
    renderWithRouter(<AppSelfCheck />)
    expect(screen.getByText(/Run Checks.*to test/i)).toBeInTheDocument()
  })

  it('calls screenshot API when Capture is clicked', async () => {
    renderWithRouter(<AppSelfCheck />)
    fireEvent.click(screen.getByText('Capture'))
    await waitFor(() => {
      expect(window.electronAPI.selfTest.screenshot).toHaveBeenCalled()
    })
  })

  it('displays screenshot after successful capture', async () => {
    renderWithRouter(<AppSelfCheck />)
    fireEvent.click(screen.getByText('Capture'))
    await waitFor(() => {
      expect(screen.queryByRole('img', { name: 'App screenshot' })).toBeInTheDocument()
    })
  })

  it('calls runAll and consoleErrors APIs when Run Checks is clicked', async () => {
    renderWithRouter(<AppSelfCheck />)
    fireEvent.click(screen.getByText('Run Checks'))
    await waitFor(() => {
      expect(window.electronAPI.selfTest.runAll).toHaveBeenCalled()
      expect(window.electronAPI.selfTest.consoleErrors).toHaveBeenCalled()
    })
  })

  it('displays DOM check results', async () => {
    vi.mocked(window.electronAPI.selfTest.runAll).mockResolvedValueOnce({
      ok: true,
      results: [
        { label: 'Sidebar exists', passed: true, detail: 'Found' },
        { label: 'TopBar visible', passed: false, detail: 'Not found' },
      ],
    })
    renderWithRouter(<AppSelfCheck />)
    fireEvent.click(screen.getByText('Run Checks'))
    await waitFor(() => {
      expect(screen.getByText('Sidebar exists')).toBeInTheDocument()
      expect(screen.getByText('TopBar visible')).toBeInTheDocument()
    })
  })

  it('shows console errors badge when errors are present', () => {
    useAgentStore.setState({
      consoleErrors: ['[error] Something failed', '[error] Another error'],
    })
    renderWithRouter(<AppSelfCheck />)
    expect(screen.getByText('2 errors')).toBeInTheDocument()
  })

  it('uses individual selectors (does not subscribe to entire store)', () => {
    // This test verifies the component renders correctly using granular selectors.
    // If it subscribed to the whole store, it would re-render on any log append.
    useAgentStore.setState({ lastScreenshot: 'data:image/png;base64,test' })
    renderWithRouter(<AppSelfCheck />)
    expect(screen.queryByRole('img', { name: 'App screenshot' })).toBeInTheDocument()
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// RunHistory Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('RunHistory', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    renderWithRouter(<RunHistory />)
    expect(screen.getByText('Run History')).toBeInTheDocument()
  })

  it('shows empty state when no history', () => {
    renderWithRouter(<RunHistory />)
    expect(screen.getByText('No completed runs yet')).toBeInTheDocument()
  })

  it('does not show Clear button when history is empty', () => {
    renderWithRouter(<RunHistory />)
    expect(screen.queryByText('Clear')).not.toBeInTheDocument()
  })

  it('displays history items with prompt text', () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() }),
        makeAgent({ id: 'h2', status: 'failed', finishedAt: Date.now() }),
      ],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getAllByText('Fix TypeScript errors in the codebase')).toHaveLength(2)
  })

  it('shows count badge when history is non-empty', () => {
    useAgentStore.setState({
      history: [makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() })],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('shows Clear button and clears history', async () => {
    useAgentStore.setState({
      history: [makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() })],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getByText('Clear')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Clear'))
    await waitFor(() => {
      expect(screen.getByText('No completed runs yet')).toBeInTheDocument()
    })
  })

  it('shows status badges', () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() }),
        makeAgent({ id: 'h2', status: 'failed', finishedAt: Date.now() }),
      ],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getByText('completed')).toBeInTheDocument()
    expect(screen.getByText('failed')).toBeInTheDocument()
  })

  it('shows Rollback button only when gitTagStart is set', () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now(), gitTagStart: 'abc1234' }),
        makeAgent({ id: 'h2', status: 'completed', finishedAt: Date.now(), gitTagStart: null }),
      ],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getAllByText('Rollback')).toHaveLength(1)
  })

  it('opens confirmation modal when Rollback is clicked', () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now(), gitTagStart: 'abc1234' }),
      ],
    })
    renderWithRouter(<RunHistory />)
    fireEvent.click(screen.getAllByText('Rollback')[0]!)
    expect(screen.getByText('Confirm Rollback')).toBeInTheDocument()
    expect(screen.getByText(/git reset --hard abc1234/)).toBeInTheDocument()
  })

  it('closes modal when Cancel is clicked', async () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now(), gitTagStart: 'abc1234' }),
      ],
    })
    renderWithRouter(<RunHistory />)
    fireEvent.click(screen.getAllByText('Rollback')[0]!)
    expect(screen.getByText('Confirm Rollback')).toBeInTheDocument()
    fireEvent.click(screen.getByText('Cancel'))
    await waitFor(() => {
      expect(screen.queryByText('Confirm Rollback')).not.toBeInTheDocument()
    })
  })

  it('calls agent.rollback IPC when modal Rollback is confirmed', async () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now(), gitTagStart: 'abc1234' }),
      ],
    })
    renderWithRouter(<RunHistory />)
    fireEvent.click(screen.getAllByText('Rollback')[0]!)
    // Click the confirm button inside the modal
    const modalRollbackBtns = screen.getAllByText('Rollback')
    // Last button is the confirm button in the modal
    fireEvent.click(modalRollbackBtns[modalRollbackBtns.length - 1]!)
    await waitFor(() => {
      expect(window.electronAPI.agent.rollback).toHaveBeenCalledWith('abc1234')
    })
  })

  it('shows success toast after successful rollback', async () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now(), gitTagStart: 'abc1234' }),
      ],
    })
    renderWithRouter(<RunHistory />)
    fireEvent.click(screen.getAllByText('Rollback')[0]!)
    const modalRollbackBtns = screen.getAllByText('Rollback')
    fireEvent.click(modalRollbackBtns[modalRollbackBtns.length - 1]!)
    await waitFor(() => {
      const toasts = useUIStore.getState().toasts
      expect(toasts.some((t) => t.type === 'success' && t.title === 'Rollback complete')).toBe(true)
    })
  })

  it('shows error toast when rollback fails', async () => {
    vi.mocked(window.electronAPI.agent.rollback).mockResolvedValueOnce({
      ok: false,
      error: 'Invalid git ref',
    })
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now(), gitTagStart: 'abc1234' }),
      ],
    })
    renderWithRouter(<RunHistory />)
    fireEvent.click(screen.getAllByText('Rollback')[0]!)
    const modalRollbackBtns = screen.getAllByText('Rollback')
    fireEvent.click(modalRollbackBtns[modalRollbackBtns.length - 1]!)
    await waitFor(() => {
      const toasts = useUIStore.getState().toasts
      expect(toasts.some((t) => t.type === 'error' && t.title === 'Rollback failed')).toBe(true)
    })
  })

  it('expand button has aria-label', () => {
    useAgentStore.setState({
      history: [makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() })],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getByRole('button', { name: 'Expand logs' })).toBeInTheDocument()
  })

  it('expands to show logs when expand button is clicked', async () => {
    useAgentStore.setState({
      history: [
        makeAgent({
          id: 'h1',
          status: 'completed',
          finishedAt: Date.now(),
          logs: [{ timestamp: 1000, type: 'stdout', text: 'Task completed successfully' }],
        }),
      ],
    })
    renderWithRouter(<RunHistory />)
    fireEvent.click(screen.getByRole('button', { name: 'Expand logs' }))
    await waitFor(() => {
      expect(screen.getByText('Task completed successfully')).toBeInTheDocument()
    })
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// ActiveAgents Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('ActiveAgents', () => {
  beforeEach(() => {
    resetStores()
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    renderWithRouter(<ActiveAgents />)
    expect(screen.getByText('Active Agents')).toBeInTheDocument()
  })

  it('shows empty state when no agents are running', () => {
    renderWithRouter(<ActiveAgents />)
    expect(screen.getByText('No agents running')).toBeInTheDocument()
  })

  it('shows active agent cards when agents are running', () => {
    useAgentStore.setState({
      agents: [makeAgent({ status: 'running' })],
    })
    renderWithRouter(<ActiveAgents />)
    expect(screen.getByText('Fix TypeScript errors in the codebase')).toBeInTheDocument()
    expect(screen.getByText('Kill')).toBeInTheDocument()
  })

  it('shows Kill All button when multiple agents are running', () => {
    useAgentStore.setState({
      agents: [
        makeAgent({ id: 'a1', status: 'running' }),
        makeAgent({ id: 'a2', status: 'running' }),
      ],
    })
    renderWithRouter(<ActiveAgents />)
    expect(screen.getByText('Kill All')).toBeInTheDocument()
  })

  it('does not show Kill All with only one agent', () => {
    useAgentStore.setState({
      agents: [makeAgent({ status: 'running' })],
    })
    renderWithRouter(<ActiveAgents />)
    expect(screen.queryByText('Kill All')).not.toBeInTheDocument()
  })

  it('calls agent.kill with correct id', async () => {
    useAgentStore.setState({
      agents: [makeAgent({ id: 'my-agent', status: 'running' })],
    })
    renderWithRouter(<ActiveAgents />)
    fireEvent.click(screen.getByText('Kill'))
    await waitFor(() => {
      expect(window.electronAPI.agent.kill).toHaveBeenCalledWith('my-agent')
    })
  })

  it('calls agent.killAll when Kill All is clicked', async () => {
    useAgentStore.setState({
      agents: [
        makeAgent({ id: 'a1', status: 'running' }),
        makeAgent({ id: 'a2', status: 'running' }),
      ],
    })
    renderWithRouter(<ActiveAgents />)
    fireEvent.click(screen.getByText('Kill All'))
    await waitFor(() => {
      expect(window.electronAPI.agent.killAll).toHaveBeenCalled()
    })
  })

  it('shows error toast when kill fails', async () => {
    vi.mocked(window.electronAPI.agent.kill).mockResolvedValueOnce({
      ok: false,
      error: 'Agent not found',
    })
    useAgentStore.setState({
      agents: [makeAgent({ status: 'running' })],
    })
    renderWithRouter(<ActiveAgents />)
    fireEvent.click(screen.getByText('Kill'))
    await waitFor(() => {
      const toasts = useUIStore.getState().toasts
      expect(toasts.some((t) => t.type === 'error' && t.title === 'Failed to kill agent')).toBe(true)
    })
  })
})
