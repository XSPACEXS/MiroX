import { useChatStore } from '@stores/chatStore'
import { buildChatPrompt, buildDebugPrompt, buildScanPrompt } from './chatService/prompts'
import type { ChatConfig, ChatMessage, DebugAnalysis, ScanResults } from '@/types/chat'

function makeId(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

const MODEL_MAP: Record<string, string> = {
  opus: 'opus',
  sonnet: 'sonnet',
  haiku: 'haiku',
}

// ---------------------------------------------------------------------------
// Chat mode
// ---------------------------------------------------------------------------

export async function sendChatMessage(message: string, config: ChatConfig): Promise<void> {
  const store = useChatStore.getState()

  // Add user message
  store.addMessage({
    id: makeId(),
    role: 'user',
    type: 'text',
    mode: 'chat',
    content: message,
    timestamp: Date.now(),
  })

  // Add thinking indicator
  const thinkingId = makeId()
  store.addMessage({
    id: thinkingId,
    role: 'assistant',
    type: 'thinking',
    mode: 'chat',
    content: 'Thinking...',
    timestamp: Date.now(),
  })

  const api = window.electronAPI
  const prompt = buildChatPrompt(message, config.projectDir)

  // Register listeners BEFORE launch to prevent race condition where
  // fast agents complete before listeners are attached
  let pendingAgentId: string | null = null
  let accumulated = ''

  const unsubLog = api.agent.onLog((data) => {
    if (!pendingAgentId || data.agentId !== pendingAgentId) return
    if (data.type === 'stdout') {
      accumulated += data.text + '\n'
      store.updateMessage(thinkingId, { content: accumulated.trim() })
    }
  })

  const unsubExit = api.agent.onExit((data) => {
    if (!pendingAgentId || data.id !== pendingAgentId) return
    unsubLog()
    unsubExit()
    store.setStreaming(false)

    const finalMessage: ChatMessage = {
      id: thinkingId,
      role: 'assistant',
      type: 'text',
      mode: 'chat',
      content: accumulated.trim() || 'No response received.',
      timestamp: Date.now(),
      agentId: pendingAgentId,
    }

    store.replaceLastThinking(finalMessage)
  })

  const result = await api.agent.launch({
    model: MODEL_MAP[config.primaryModel] ?? 'sonnet',
    prompt,
    allowedTools: ['Read', 'Glob', 'Grep'],
  })

  if (!result.ok) {
    unsubLog()
    unsubExit()
    store.replaceLastThinking({
      id: thinkingId,
      role: 'assistant',
      type: 'error',
      mode: 'chat',
      content: `Failed to launch agent: ${result.error}`,
      timestamp: Date.now(),
    })
    return
  }

  pendingAgentId = result.id
  store.setStreaming(true, result.id)
}

// ---------------------------------------------------------------------------
// Debug mode
// ---------------------------------------------------------------------------

export async function sendDebugMessage(errorText: string, config: ChatConfig): Promise<void> {
  const store = useChatStore.getState()

  store.addMessage({
    id: makeId(),
    role: 'user',
    type: 'text',
    mode: 'debug',
    content: errorText,
    timestamp: Date.now(),
  })

  const thinkingId = makeId()
  store.addMessage({
    id: thinkingId,
    role: 'assistant',
    type: 'thinking',
    mode: 'debug',
    content: 'Analyzing error...',
    timestamp: Date.now(),
  })

  const api = window.electronAPI
  const prompt = buildDebugPrompt(errorText, config.projectDir)

  // Register listeners BEFORE launch to prevent race condition
  let pendingAgentId: string | null = null
  let accumulated = ''

  const unsubLog = api.agent.onLog((data) => {
    if (!pendingAgentId || data.agentId !== pendingAgentId) return
    if (data.type === 'stdout') {
      accumulated += data.text + '\n'
      store.updateMessage(thinkingId, { content: accumulated.trim() })
    }
  })

  const unsubExit = api.agent.onExit((data) => {
    if (!pendingAgentId || data.id !== pendingAgentId) return
    unsubLog()
    unsubExit()
    store.setStreaming(false)

    // Try to parse JSON debug analysis from response
    const analysis = parseDebugAnalysis(accumulated)
    const finalMessage: ChatMessage = analysis
      ? {
          id: thinkingId,
          role: 'assistant',
          type: 'debug-analysis',
          mode: 'debug',
          content: accumulated.trim(),
          timestamp: Date.now(),
          agentId: pendingAgentId,
          metadata: { debugAnalysis: analysis },
        }
      : {
          id: thinkingId,
          role: 'assistant',
          type: 'text',
          mode: 'debug',
          content: accumulated.trim() || 'No analysis produced.',
          timestamp: Date.now(),
          agentId: pendingAgentId,
        }

    store.replaceLastThinking(finalMessage)
  })

  const result = await api.agent.launch({
    model: MODEL_MAP[config.primaryModel] ?? 'sonnet',
    prompt,
    allowedTools: ['Read', 'Glob', 'Grep', 'Bash'],
  })

  if (!result.ok) {
    unsubLog()
    unsubExit()
    store.replaceLastThinking({
      id: thinkingId,
      role: 'assistant',
      type: 'error',
      mode: 'debug',
      content: `Failed to launch agent: ${result.error}`,
      timestamp: Date.now(),
    })
    return
  }

  pendingAgentId = result.id
  store.setStreaming(true, result.id)
}

// ---------------------------------------------------------------------------
// Scan mode
// ---------------------------------------------------------------------------

export async function runProjectScan(config: ChatConfig): Promise<void> {
  const store = useChatStore.getState()

  store.addMessage({
    id: makeId(),
    role: 'user',
    type: 'text',
    mode: 'scan',
    content: 'Scan project for issues and health',
    timestamp: Date.now(),
  })

  const thinkingId = makeId()
  store.addMessage({
    id: thinkingId,
    role: 'assistant',
    type: 'thinking',
    mode: 'scan',
    content: 'Scanning project...',
    timestamp: Date.now(),
  })

  const api = window.electronAPI
  const prompt = buildScanPrompt(config.projectDir)

  // Register listeners BEFORE launch to prevent race condition
  let pendingAgentId: string | null = null
  let accumulated = ''

  const unsubLog = api.agent.onLog((data) => {
    if (!pendingAgentId || data.agentId !== pendingAgentId) return
    if (data.type === 'stdout') {
      accumulated += data.text + '\n'
      store.updateMessage(thinkingId, { content: accumulated.trim() })
    }
  })

  const unsubExit = api.agent.onExit((data) => {
    if (!pendingAgentId || data.id !== pendingAgentId) return
    unsubLog()
    unsubExit()
    store.setStreaming(false)

    const scanResults = parseScanResults(accumulated)
    const finalMessage: ChatMessage = scanResults
      ? {
          id: thinkingId,
          role: 'assistant',
          type: 'scan-results',
          mode: 'scan',
          content: accumulated.trim(),
          timestamp: Date.now(),
          agentId: pendingAgentId,
          metadata: { scanResults },
        }
      : {
          id: thinkingId,
          role: 'assistant',
          type: 'text',
          mode: 'scan',
          content: accumulated.trim() || 'Scan produced no output.',
          timestamp: Date.now(),
          agentId: pendingAgentId,
        }

    store.replaceLastThinking(finalMessage)
  })

  const result = await api.agent.launch({
    model: MODEL_MAP[config.primaryModel] ?? 'sonnet',
    prompt,
    allowedTools: ['Read', 'Glob', 'Grep', 'Bash'],
  })

  if (!result.ok) {
    unsubLog()
    unsubExit()
    store.replaceLastThinking({
      id: thinkingId,
      role: 'assistant',
      type: 'error',
      mode: 'scan',
      content: `Failed to launch agent: ${result.error}`,
      timestamp: Date.now(),
    })
    return
  }

  pendingAgentId = result.id
  store.setStreaming(true, result.id)
}

// ---------------------------------------------------------------------------
// Cancel
// ---------------------------------------------------------------------------

export async function cancelStream(): Promise<void> {
  const agentId = useChatStore.getState().streamingAgentId
  if (!agentId) return
  try {
    await window.electronAPI.agent.kill(agentId)
  } catch {
    // best effort
  }
  useChatStore.getState().setStreaming(false)
}

// ---------------------------------------------------------------------------
// Parsers
// ---------------------------------------------------------------------------

function extractJsonBlock(text: string): string | null {
  const match = text.match(/```json\s*([\s\S]*?)```/)
  return match?.[1]?.trim() ?? null
}

function parseDebugAnalysis(text: string): DebugAnalysis | null {
  const json = extractJsonBlock(text)
  if (!json) return null
  try {
    const parsed = JSON.parse(json) as Record<string, unknown>
    if (typeof parsed.rootCause === 'string' && Array.isArray(parsed.affectedFiles)) {
      return {
        rootCause: parsed.rootCause,
        affectedFiles: parsed.affectedFiles as string[],
        suggestedFix: (parsed.suggestedFix as string) ?? '',
        diffPreview: (parsed.diffPreview as string) ?? undefined,
      }
    }
  } catch {
    // fall through
  }
  return null
}

function parseScanResults(text: string): ScanResults | null {
  const json = extractJsonBlock(text)
  if (!json) return null
  try {
    const parsed = JSON.parse(json) as Record<string, unknown>
    if (typeof parsed.overallScore === 'number' && Array.isArray(parsed.categories)) {
      return {
        overallScore: parsed.overallScore,
        categories: parsed.categories as ScanResults['categories'],
        strengths: (parsed.strengths as string[]) ?? [],
      }
    }
  } catch {
    // fall through
  }
  return null
}
