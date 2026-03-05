import { describe, it, expect, beforeEach } from 'vitest'
import { useAgentStore } from '../stores/agentStore'
import type { AgentRun } from '../types/agent'

function makeAgent(overrides: Partial<AgentRun> = {}): AgentRun {
  return {
    id: 'agent-1',
    prompt: 'Fix all TypeScript errors',
    provider: 'claude',
    model: 'sonnet',
    status: 'running',
    logs: [],
    startedAt: 1000,
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

describe('Agent Store', () => {
  beforeEach(() => {
    useAgentStore.setState({
      agents: [],
      history: [],
      consoleErrors: [],
      lastScreenshot: null,
      domCheckResults: null,
      isAdmin: true,
    })
  })

  it('initializes with correct defaults', () => {
    const state = useAgentStore.getState()
    expect(state.agents).toEqual([])
    expect(state.history).toEqual([])
    expect(state.consoleErrors).toEqual([])
    expect(state.lastScreenshot).toBeNull()
    expect(state.domCheckResults).toBeNull()
    expect(state.isAdmin).toBe(true)
  })

  it('addAgent adds to agents array', () => {
    useAgentStore.getState().addAgent(makeAgent())
    expect(useAgentStore.getState().agents).toHaveLength(1)
    expect(useAgentStore.getState().agents[0]!.id).toBe('agent-1')
    expect(useAgentStore.getState().agents[0]!.status).toBe('running')
  })

  it('addAgent supports multiple concurrent agents', () => {
    useAgentStore.getState().addAgent(makeAgent({ id: 'a1' }))
    useAgentStore.getState().addAgent(makeAgent({ id: 'a2' }))
    useAgentStore.getState().addAgent(makeAgent({ id: 'a3' }))
    expect(useAgentStore.getState().agents).toHaveLength(3)
  })

  it('updateAgentStatus updates status and exitCode', () => {
    useAgentStore.getState().addAgent(makeAgent())
    useAgentStore.getState().updateAgentStatus('agent-1', 'completed', 0)
    const agent = useAgentStore.getState().agents[0]!
    expect(agent.status).toBe('completed')
    expect(agent.exitCode).toBe(0)
  })

  it('updateAgentStatus sets finishedAt when not running', () => {
    useAgentStore.getState().addAgent(makeAgent())
    const before = Date.now()
    useAgentStore.getState().updateAgentStatus('agent-1', 'completed', 0)
    const agent = useAgentStore.getState().agents[0]!
    expect(agent.finishedAt).toBeGreaterThanOrEqual(before)
  })

  it('updateAgentStatus does not set finishedAt when still running', () => {
    useAgentStore.getState().addAgent(makeAgent())
    useAgentStore.getState().updateAgentStatus('agent-1', 'running')
    const agent = useAgentStore.getState().agents[0]!
    expect(agent.finishedAt).toBeNull()
  })

  it('updateAgentStatus handles killed status', () => {
    useAgentStore.getState().addAgent(makeAgent())
    useAgentStore.getState().updateAgentStatus('agent-1', 'killed')
    expect(useAgentStore.getState().agents[0]!.status).toBe('killed')
    expect(useAgentStore.getState().agents[0]!.finishedAt).not.toBeNull()
  })

  it('appendLog adds a log entry to the correct agent', () => {
    useAgentStore.getState().addAgent(makeAgent())
    useAgentStore.getState().appendLog('agent-1', { timestamp: 2000, type: 'stdout', text: 'hello world' })
    const logs = useAgentStore.getState().agents[0]!.logs
    expect(logs).toHaveLength(1)
    expect(logs[0]!.text).toBe('hello world')
    expect(logs[0]!.type).toBe('stdout')
  })

  it('appendLog limits logs to 2000 entries', () => {
    useAgentStore.getState().addAgent(makeAgent())
    for (let i = 0; i < 2100; i++) {
      useAgentStore.getState().appendLog('agent-1', { timestamp: i, type: 'stdout', text: `line ${i}` })
    }
    expect(useAgentStore.getState().agents[0]!.logs).toHaveLength(2000)
  })

  it('appendLog does nothing for unknown agent id', () => {
    useAgentStore.getState().addAgent(makeAgent())
    useAgentStore.getState().appendLog('nonexistent', { timestamp: 1, type: 'stdout', text: 'x' })
    expect(useAgentStore.getState().agents[0]!.logs).toHaveLength(0)
  })

  it('removeAgent removes by id', () => {
    useAgentStore.getState().addAgent(makeAgent({ id: 'a1' }))
    useAgentStore.getState().addAgent(makeAgent({ id: 'a2' }))
    useAgentStore.getState().removeAgent('a1')
    expect(useAgentStore.getState().agents).toHaveLength(1)
    expect(useAgentStore.getState().agents[0]!.id).toBe('a2')
  })

  it('moveToHistory moves agent from agents to history', () => {
    useAgentStore.getState().addAgent(makeAgent({ status: 'completed' }))
    useAgentStore.getState().moveToHistory('agent-1')
    expect(useAgentStore.getState().agents).toHaveLength(0)
    expect(useAgentStore.getState().history).toHaveLength(1)
    expect(useAgentStore.getState().history[0]!.id).toBe('agent-1')
  })

  it('moveToHistory prepends to history (newest first)', () => {
    useAgentStore.getState().addAgent(makeAgent({ id: 'a1', status: 'completed' }))
    useAgentStore.getState().moveToHistory('a1')
    useAgentStore.getState().addAgent(makeAgent({ id: 'a2', status: 'completed' }))
    useAgentStore.getState().moveToHistory('a2')
    expect(useAgentStore.getState().history[0]!.id).toBe('a2')
    expect(useAgentStore.getState().history[1]!.id).toBe('a1')
  })

  it('moveToHistory limits history to 50 entries', () => {
    for (let i = 0; i < 55; i++) {
      useAgentStore.getState().addAgent(makeAgent({ id: `agent-${i}`, status: 'completed' }))
      useAgentStore.getState().moveToHistory(`agent-${i}`)
    }
    expect(useAgentStore.getState().history).toHaveLength(50)
  })

  it('clearHistory empties history', () => {
    useAgentStore.getState().addAgent(makeAgent({ status: 'completed' }))
    useAgentStore.getState().moveToHistory('agent-1')
    useAgentStore.getState().clearHistory()
    expect(useAgentStore.getState().history).toHaveLength(0)
  })

  it('setAdmin toggles admin flag', () => {
    useAgentStore.getState().setAdmin(false)
    expect(useAgentStore.getState().isAdmin).toBe(false)
    useAgentStore.getState().setAdmin(true)
    expect(useAgentStore.getState().isAdmin).toBe(true)
  })

  it('setLastScreenshot stores dataURL', () => {
    useAgentStore.getState().setLastScreenshot('data:image/png;base64,abc')
    expect(useAgentStore.getState().lastScreenshot).toBe('data:image/png;base64,abc')
    useAgentStore.getState().setLastScreenshot(null)
    expect(useAgentStore.getState().lastScreenshot).toBeNull()
  })

  it('setConsoleErrors stores errors', () => {
    useAgentStore.getState().setConsoleErrors(['[error] Something went wrong'])
    expect(useAgentStore.getState().consoleErrors).toHaveLength(1)
    expect(useAgentStore.getState().consoleErrors[0]).toBe('[error] Something went wrong')
  })

  it('setDomCheckResults stores results', () => {
    const results = [{ label: 'Sidebar exists', passed: true, detail: 'Found' }]
    useAgentStore.getState().setDomCheckResults(results)
    expect(useAgentStore.getState().domCheckResults).toEqual(results)
    useAgentStore.getState().setDomCheckResults(null)
    expect(useAgentStore.getState().domCheckResults).toBeNull()
  })
})
