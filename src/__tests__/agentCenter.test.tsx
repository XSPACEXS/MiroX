import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { useAgentStore } from '../stores/agentStore'
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
    ...overrides,
  }
}

function resetStore() {
  useAgentStore.setState({
    agents: [],
    history: [],
    consoleErrors: [],
    lastScreenshot: null,
    domCheckResults: null,
    isAdmin: true,
  })
}

// ──────────────────────────────────────────────────────────────────────────────
// AgentLauncher Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('AgentLauncher', () => {
  beforeEach(() => {
    resetStore()
    vi.clearAllMocks()
  })

  it('renders without crashing', () => {
    renderWithRouter(<AgentLauncher />)
    // Section heading exists
    expect(screen.getAllByText('Launch Agent').length).toBeGreaterThanOrEqual(1)
  })

  it('shows the prompt input', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getByPlaceholderText('Describe the task for the AI agent...')).toBeInTheDocument()
  })

  it('shows model dropdown with Sonnet 4.6 default', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getByText('Sonnet 4.6')).toBeInTheDocument()
  })

  it('shows tool toggle buttons', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getByText('Read')).toBeInTheDocument()
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Glob')).toBeInTheDocument()
    expect(screen.getByText('Grep')).toBeInTheDocument()
    expect(screen.getByText('Bash')).toBeInTheDocument()
  })

  it('shows Quick Actions section', () => {
    renderWithRouter(<AgentLauncher />)
    expect(screen.getByText('Quick Actions')).toBeInTheDocument()
  })

  it('launch button is disabled when prompt is empty', () => {
    renderWithRouter(<AgentLauncher />)
    // The submit button is the last "Launch Agent" occurrence (h2 + button)
    const launchButtons = screen.getAllByText('Launch Agent')
    const submitBtn = launchButtons[launchButtons.length - 1]!.closest('button')
    expect(submitBtn).toBeDisabled()
  })

  it('launch button enables when prompt is entered', () => {
    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for the AI agent...')
    fireEvent.change(input, { target: { value: 'Fix the bug' } })
    const launchButtons = screen.getAllByText('Launch Agent')
    const submitBtn = launchButtons[launchButtons.length - 1]!.closest('button')
    expect(submitBtn).not.toBeDisabled()
  })

  it('calls electronAPI.agent.launch when launch button is clicked', async () => {
    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for the AI agent...')
    fireEvent.change(input, { target: { value: 'Fix the bug' } })
    const launchButtons = screen.getAllByText('Launch Agent')
    const submitBtn = launchButtons[launchButtons.length - 1]!.closest('button')!
    fireEvent.click(submitBtn)
    await waitFor(() => {
      expect(window.electronAPI.agent.launch).toHaveBeenCalledWith(
        expect.objectContaining({ prompt: 'Fix the bug', model: 'sonnet' })
      )
    })
  })

  it('clears prompt after successful launch', async () => {
    renderWithRouter(<AgentLauncher />)
    const input = screen.getByPlaceholderText('Describe the task for the AI agent...')
    fireEvent.change(input, { target: { value: 'Fix the bug' } })
    const launchButtons = screen.getAllByText('Launch Agent')
    const submitBtn = launchButtons[launchButtons.length - 1]!.closest('button')!
    fireEvent.click(submitBtn)
    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe('')
    })
  })

  it('clicking a quick action fills in the prompt', () => {
    renderWithRouter(<AgentLauncher />)
    const fixTsButton = screen.getByText('Fix All TypeScript Errors')
    fireEvent.click(fixTsButton)
    const input = screen.getByPlaceholderText('Describe the task for the AI agent...')
    expect((input as HTMLInputElement).value).toContain('typecheck')
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// LiveLogs Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('LiveLogs', () => {
  beforeEach(() => {
    resetStore()
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
            { timestamp: 2000, type: 'stderr', text: 'Warning: something went wrong' },
            { timestamp: 3000, type: 'system', text: 'Agent launched' },
          ],
        }),
      ],
    })
    renderWithRouter(<LiveLogs />)
    expect(screen.getByText('Running task...')).toBeInTheDocument()
    expect(screen.getByText('Warning: something went wrong')).toBeInTheDocument()
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
    // Only the most recent 1000 lines should be shown (Line 500 - Line 1499)
    expect(screen.queryByText('Line 0')).not.toBeInTheDocument()
    expect(screen.getByText('Line 1499')).toBeInTheDocument()
  })

  it('shows filter dropdown', () => {
    renderWithRouter(<LiveLogs />)
    // The SimpleSelect renders a <select> with filter options
    const selects = screen.getAllByRole('combobox')
    expect(selects.length).toBeGreaterThanOrEqual(1)
  })
})

// ──────────────────────────────────────────────────────────────────────────────
// AppSelfCheck Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('AppSelfCheck', () => {
  beforeEach(() => {
    resetStore()
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
      const img = screen.queryByRole('img', { name: 'App screenshot' })
      expect(img).toBeInTheDocument()
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

  it('displays DOM check results after running checks', async () => {
    vi.mocked(window.electronAPI.selfTest.runAll).mockResolvedValueOnce({
      ok: true,
      results: [
        { label: 'Sidebar exists', passed: true, detail: 'Sidebar found' },
        { label: 'TopBar visible', passed: false, detail: 'TopBar not found' },
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
})

// ──────────────────────────────────────────────────────────────────────────────
// RunHistory Tests
// ──────────────────────────────────────────────────────────────────────────────

describe('RunHistory', () => {
  beforeEach(() => {
    resetStore()
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

  it('displays history items', () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() }),
        makeAgent({ id: 'h2', status: 'failed', finishedAt: Date.now() }),
      ],
    })
    renderWithRouter(<RunHistory />)
    // Both agents have same prompt, so two instances should exist
    expect(screen.getAllByText('Fix TypeScript errors in the codebase')).toHaveLength(2)
  })

  it('shows count badge when history is non-empty', () => {
    useAgentStore.setState({
      history: [makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() })],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('shows Clear button when history is non-empty', () => {
    useAgentStore.setState({
      history: [makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() })],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getByText('Clear')).toBeInTheDocument()
  })

  it('clears history when Clear is clicked', async () => {
    useAgentStore.setState({
      history: [makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now() })],
    })
    renderWithRouter(<RunHistory />)
    fireEvent.click(screen.getByText('Clear'))
    await waitFor(() => {
      expect(screen.getByText('No completed runs yet')).toBeInTheDocument()
    })
  })

  it('shows Rollback button only for agents with gitTagStart', () => {
    useAgentStore.setState({
      history: [
        makeAgent({ id: 'h1', status: 'completed', finishedAt: Date.now(), gitTagStart: 'abc1234' }),
        makeAgent({ id: 'h2', status: 'completed', finishedAt: Date.now(), gitTagStart: null }),
      ],
    })
    renderWithRouter(<RunHistory />)
    expect(screen.getAllByText('Rollback')).toHaveLength(1)
  })

  it('shows status badges for completed and failed runs', () => {
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

  it('expands to show logs when chevron is clicked', async () => {
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
    // The expand button has no text content (only a ChevronDown SVG icon)
    const allButtons = screen.getAllByRole('button')
    const expandBtn = allButtons.find((btn) => btn.textContent?.trim() === '')
    expect(expandBtn).toBeTruthy()
    fireEvent.click(expandBtn!)
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
    resetStore()
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

  it('does not show Kill All when only one agent is running', () => {
    useAgentStore.setState({
      agents: [makeAgent({ status: 'running' })],
    })
    renderWithRouter(<ActiveAgents />)
    expect(screen.queryByText('Kill All')).not.toBeInTheDocument()
  })

  it('calls agent.kill when Kill button is clicked', async () => {
    useAgentStore.setState({
      agents: [makeAgent({ status: 'running' })],
    })
    renderWithRouter(<ActiveAgents />)
    fireEvent.click(screen.getByText('Kill'))
    await waitFor(() => {
      expect(window.electronAPI.agent.kill).toHaveBeenCalledWith('agent-1')
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
})
