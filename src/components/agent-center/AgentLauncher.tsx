import { useState, useCallback } from 'react'
import { Rocket, Send, Sparkles, Bot } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { Dropdown } from '@components/ui/Dropdown'
import { QuickActions } from './QuickActions'
import { useAgentStore } from '@stores/agentStore'
import { useUIStore } from '@stores/uiStore'
import type { AIProvider, AgentModel, QuickAction } from '@/types/agent'

const CLAUDE_MODEL_OPTIONS = [
  { value: 'opus', label: 'Opus 4.6' },
  { value: 'sonnet', label: 'Sonnet 4.6' },
  { value: 'haiku', label: 'Haiku 4.5' },
]
const GEMINI_MODEL_OPTIONS = [
  { value: 'gemini-pro', label: 'Gemini 2.5 Pro' },
  { value: 'gemini-flash', label: 'Gemini 2.5 Flash' },
  { value: 'gemini-flash-2', label: 'Gemini 2.0 Flash' },
]

const DEFAULT_TOOLS = ['Read', 'Edit', 'Glob', 'Grep', 'Bash']

export function AgentLauncher(): JSX.Element {
  const [prompt, setPrompt] = useState('')
  const [provider, setProvider] = useState<AIProvider>('claude')
  const [model, setModel] = useState<AgentModel>('sonnet')
  const [tools, setTools] = useState<string[]>(DEFAULT_TOOLS)
  const [isLaunching, setIsLaunching] = useState(false)
  const addAgent = useAgentStore((s) => s.addAgent)
  const addToast = useUIStore((s) => s.addToast)

  const handleQuickAction = useCallback((action: QuickAction) => {
    setPrompt(action.prompt)
    setProvider(action.provider)
    setModel(action.model)
    setTools(action.tools)
  }, [])

  const handleLaunch = useCallback(async () => {
    if (!prompt.trim() || isLaunching) return
    setIsLaunching(true)
    try {
      let result: { ok: boolean; id?: string; model?: string; startedAt?: number; error?: string }
      if (provider === 'claude') {
        result = await window.electronAPI.agent.launch({
          model,
          prompt: prompt.trim(),
          allowedTools: tools,
        })
      } else {
        result = await window.electronAPI.gemini.launch({
          model,
          prompt: prompt.trim(),
        })
      }
      if (result.ok && result.id && result.startedAt) {
        addAgent({
          id: result.id,
          prompt: prompt.trim(),
          provider,
          model,
          status: 'running',
          logs: [],
          startedAt: result.startedAt,
          finishedAt: null,
          exitCode: null,
          cost: null,
          allowedTools: provider === 'claude' ? tools : [],
          gitTagStart: null,
          gitTagEnd: null,
        })
        setPrompt('')
      } else {
        addToast({ type: 'error', title: 'Launch failed', message: (result as { error?: string }).error || 'Unknown error' })
      }
    } catch (err) {
      addToast({ type: 'error', title: 'Launch failed', message: String(err) })
    } finally {
      setIsLaunching(false)
    }
  }, [prompt, model, tools, provider, isLaunching, addAgent, addToast])

  const toggleTool = useCallback((tool: string) => {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    )
  }, [])

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <Rocket size={20} className="text-yellow-400" />
        <h2 className="font-display font-bold text-xl text-white">Launch Agent</h2>
      </div>

      {/* Provider selector */}
      <div className="flex gap-1 p-1 bg-black-800 rounded-xl w-fit">
        <button
          onClick={() => { setProvider('claude'); setModel('sonnet') }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150
            ${provider === 'claude' ? 'bg-yellow-400/10 text-yellow-400' : 'text-gray-400 hover:text-white'}`}
        >
          <Bot size={16} />
          Claude
        </button>
        <button
          onClick={() => { setProvider('gemini'); setModel('gemini-pro') }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150
            ${provider === 'gemini' ? 'bg-blue-400/10 text-blue-400' : 'text-gray-400 hover:text-white'}`}
        >
          <Sparkles size={16} />
          Gemini
        </button>
      </div>

      <Card variant="default" className="p-5 space-y-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <Input
              placeholder="Describe the task for the AI agent..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  void handleLaunch()
                }
              }}
              leftIcon={<Send size={16} />}
            />
          </div>
          <Dropdown
            options={provider === 'claude' ? CLAUDE_MODEL_OPTIONS : GEMINI_MODEL_OPTIONS}
            value={model}
            onChange={(v) => setModel(v as AgentModel)}
            className="w-40"
          />
        </div>

        {/* Tool toggle chips — only shown for Claude provider */}
        {provider === 'claude' && (
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-gray-400 mr-1">Tools:</span>
            {DEFAULT_TOOLS.map((tool) => (
              <button
                key={tool}
                type="button"
                onClick={() => toggleTool(tool)}
                aria-pressed={tools.includes(tool)}
                aria-label={`Toggle ${tool} tool`}
                className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-all duration-150 ${
                  tools.includes(tool)
                    ? 'bg-yellow-400/10 border-yellow-400/30 text-yellow-400'
                    : 'bg-black-700 border-black-500 text-gray-500 hover:text-gray-300'
                }`}
              >
                {tool}
              </button>
            ))}
          </div>
        )}

        <div className="flex justify-end">
          <Button
            variant="primary"
            size="md"
            isLoading={isLaunching}
            disabled={!prompt.trim() || isLaunching}
            onClick={handleLaunch}
            leftIcon={<Rocket size={16} />}
          >
            Launch Agent
          </Button>
        </div>
      </Card>

      <QuickActions onSelect={handleQuickAction} />
    </div>
  )
}
