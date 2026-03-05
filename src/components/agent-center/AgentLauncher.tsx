import { useState, useCallback } from 'react'
import { Rocket, Send } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { Dropdown } from '@components/ui/Dropdown'
import { QuickActions } from './QuickActions'
import { useAgentStore } from '@stores/agentStore'
import type { AgentRun, QuickAction } from '@/types/agent'

const MODEL_OPTIONS = [
  { value: 'opus', label: 'Opus 4.6' },
  { value: 'sonnet', label: 'Sonnet 4.6' },
  { value: 'haiku', label: 'Haiku 4.5' },
]

const DEFAULT_TOOLS = ['Read', 'Edit', 'Glob', 'Grep', 'Bash']

export function AgentLauncher(): JSX.Element {
  const [prompt, setPrompt] = useState('')
  const [model, setModel] = useState<string>('sonnet')
  const [tools, setTools] = useState<string[]>(DEFAULT_TOOLS)
  const [isLaunching, setIsLaunching] = useState(false)
  const addAgent = useAgentStore((s) => s.addAgent)

  const handleQuickAction = useCallback((action: QuickAction) => {
    setPrompt(action.prompt)
    setModel(action.model)
    setTools(action.tools)
  }, [])

  const handleLaunch = useCallback(async () => {
    if (!prompt.trim() || isLaunching) return

    setIsLaunching(true)
    try {
      const result = await window.electronAPI.agent.launch({
        model,
        prompt: prompt.trim(),
        allowedTools: tools,
      })

      if (result.ok && result.id) {
        const agent: AgentRun = {
          id: result.id,
          prompt: prompt.trim(),
          model: model as AgentRun['model'],
          status: 'running',
          logs: [],
          startedAt: result.startedAt || Date.now(),
          finishedAt: null,
          exitCode: null,
          cost: null,
          allowedTools: tools,
          gitTagStart: null,
          gitTagEnd: null,
        }
        addAgent(agent)
        setPrompt('')
      }
    } finally {
      setIsLaunching(false)
    }
  }, [prompt, model, tools, isLaunching, addAgent])

  const toggleTool = useCallback((tool: string) => {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    )
  }, [])

  const allTools = ['Read', 'Edit', 'Glob', 'Grep', 'Bash']

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <Rocket size={20} className="text-yellow-400" />
        <h2 className="font-display font-bold text-xl text-white">Launch Agent</h2>
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
                  handleLaunch()
                }
              }}
              leftIcon={<Send size={16} />}
            />
          </div>
          <Dropdown
            options={MODEL_OPTIONS}
            value={model}
            onChange={setModel}
            className="w-40"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-gray-400 mr-1">Tools:</span>
          {allTools.map((tool) => (
            <button
              key={tool}
              onClick={() => toggleTool(tool)}
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
