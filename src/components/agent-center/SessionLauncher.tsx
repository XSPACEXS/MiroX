import { useState, useEffect, useCallback, useRef } from 'react'
import { Clock, Play, Square, Bot, Sparkles } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { SimpleSelect } from '@components/ui/Dropdown'
import { Badge } from '@components/ui/Badge'
import { useAgentStore } from '@stores/agentStore'
import { useUIStore } from '@stores/uiStore'
import type { ClaudeModel, GeminiModel, AgentSession } from '@/types/agent'

const TIME_OPTIONS = [
  { value: '30', label: '30 minutes' },
  { value: '60', label: '1 hour' },
  { value: '120', label: '2 hours' },
  { value: '240', label: '4 hours' },
  { value: '360', label: '6 hours' },
]

const CLAUDE_MODELS = [
  { value: 'opus', label: 'Opus 4.6' },
  { value: 'sonnet', label: 'Sonnet 4.6' },
  { value: 'haiku', label: 'Haiku 4.5' },
]

const GEMINI_MODELS = [
  { value: 'gemini-pro', label: 'Gemini 2.5 Pro' },
  { value: 'gemini-flash', label: 'Gemini 2.5 Flash' },
  { value: 'gemini-flash-2', label: 'Gemini 2.0 Flash' },
]

export function SessionLauncher(): JSX.Element {
  const [prompt, setPrompt] = useState('')
  const [timeLimit, setTimeLimit] = useState('120')
  const [claudeModel, setClaudeModel] = useState<ClaudeModel>('sonnet')
  const [geminiEnabled, setGeminiEnabled] = useState(false)
  const [geminiModel, setGeminiModel] = useState<GeminiModel>('gemini-pro')
  const [session, setSession] = useState<AgentSession | null>(null)
  const [remaining, setRemaining] = useState(0)
  const [isStarting, setIsStarting] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval>>()

  const addAgent = useAgentStore((s) => s.addAgent)
  const addToast = useUIStore((s) => s.addToast)

  // Countdown timer
  useEffect(() => {
    if (!session || session.status !== 'running') {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      const left = Math.max(0, session.endsAt - Date.now())
      setRemaining(left)
      if (left <= 0) {
        void handleStopSession()
      }
    }, 1000)

    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [session?.status, session?.endsAt]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleStartSession = useCallback(async () => {
    if (!prompt.trim() || isStarting) return
    setIsStarting(true)

    try {
      const timeMins = parseInt(timeLimit, 10)
      const sessionId = `session-${Date.now()}`
      const endsAt = Date.now() + timeMins * 60 * 1000

      // Launch Claude agent
      const claudeResult = await window.electronAPI.agent.launch({
        model: claudeModel,
        prompt: prompt.trim(),
        allowedTools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
      })

      let claudeAgentId: string | null = null
      if (claudeResult.ok && claudeResult.id) {
        claudeAgentId = claudeResult.id
        addAgent({
          id: claudeResult.id,
          prompt: prompt.trim(),
          provider: 'claude',
          model: claudeModel,
          status: 'running',
          logs: [],
          startedAt: claudeResult.startedAt,
          finishedAt: null,
          exitCode: null,
          cost: null,
          allowedTools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
          gitTagStart: null,
          gitTagEnd: null,
        })
      }

      // Launch Gemini agent if enabled
      let geminiAgentId: string | null = null
      if (geminiEnabled) {
        const geminiPrompt = `You are the design specialist for this session.\n\nSession goal: ${prompt.trim()}\n\nFocus on the visual and UI aspects: component styling, layout, animations, color usage, spacing, and overall aesthetic. Suggest specific Tailwind CSS classes and Framer Motion variants.`

        const geminiResult = await window.electronAPI.gemini.launch({
          model: geminiModel,
          prompt: geminiPrompt,
        })

        if (geminiResult.ok && geminiResult.id) {
          geminiAgentId = geminiResult.id
          addAgent({
            id: geminiResult.id,
            prompt: geminiPrompt,
            provider: 'gemini',
            model: geminiModel,
            status: 'running',
            logs: [],
            startedAt: geminiResult.startedAt,
            finishedAt: null,
            exitCode: null,
            cost: null,
            allowedTools: [],
            gitTagStart: null,
            gitTagEnd: null,
          })
        }
      }

      setSession({
        id: sessionId,
        config: { timeLimitMinutes: timeMins, claudeModel, geminiEnabled, geminiModel, prompt: prompt.trim() },
        status: 'running',
        startedAt: Date.now(),
        endsAt,
        claudeAgentId,
        geminiAgentId,
      })
      setRemaining(timeMins * 60 * 1000)
    } catch (err) {
      addToast({ type: 'error', title: 'Session failed', message: (err as Error).message })
    } finally {
      setIsStarting(false)
    }
  }, [prompt, timeLimit, claudeModel, geminiEnabled, geminiModel, isStarting, addAgent, addToast])

  const handleStopSession = useCallback(async () => {
    if (!session) return

    if (session.claudeAgentId) {
      try { await window.electronAPI.agent.kill(session.claudeAgentId) } catch { /* ignore */ }
    }
    if (session.geminiAgentId) {
      try { await window.electronAPI.gemini.stop(session.geminiAgentId) } catch { /* ignore */ }
    }

    setSession((prev) => prev ? { ...prev, status: 'stopped' } : null)
    addToast({ type: 'info', title: 'Session stopped' })
  }, [session, addToast])

  const formatTime = (ms: number): string => {
    const totalSec = Math.ceil(ms / 1000)
    const hours = Math.floor(totalSec / 3600)
    const mins = Math.floor((totalSec % 3600) / 60)
    const secs = totalSec % 60
    if (hours > 0) return `${hours}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  const isRunning = session?.status === 'running'

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <Clock size={20} className="text-yellow-400" />
        <h2 className="font-display font-bold text-xl text-white">Build Session</h2>
      </div>

      <Card variant="default" className="p-5 space-y-4">
        {/* Prompt */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe the full session goal..."
          disabled={isRunning}
          rows={3}
          className="w-full bg-black-700 border border-black-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 disabled:opacity-50"
        />

        {/* Time budget */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 w-24">Time Budget</span>
          <SimpleSelect
            options={TIME_OPTIONS}
            value={timeLimit}
            onChange={setTimeLimit}
            className="flex-1"
          />
        </div>

        {/* Claude model */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400 w-24 flex items-center gap-1.5">
            <Bot size={14} /> Claude
          </span>
          <SimpleSelect
            options={CLAUDE_MODELS}
            value={claudeModel}
            onChange={(v) => setClaudeModel(v as ClaudeModel)}
            className="flex-1"
          />
        </div>

        {/* Gemini toggle */}
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={geminiEnabled}
              onChange={(e) => setGeminiEnabled(e.target.checked)}
              disabled={isRunning}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-black-600 peer-checked:bg-blue-500/30 rounded-full relative transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-gray-400 peer-checked:after:bg-blue-400 after:rounded-full after:transition-all peer-checked:after:translate-x-4" />
            <span className="text-sm text-gray-400 flex items-center gap-1.5">
              <Sparkles size={14} /> Enable Gemini for design tasks
            </span>
          </label>

          {geminiEnabled && (
            <div className="flex items-center gap-3 ml-12">
              <SimpleSelect
                options={GEMINI_MODELS}
                value={geminiModel}
                onChange={(v) => setGeminiModel(v as GeminiModel)}
                className="flex-1"
              />
            </div>
          )}
        </div>

        {/* Session controls */}
        {isRunning ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-black-700 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
                <span className="text-sm text-white font-mono tabular-nums">
                  {formatTime(remaining)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge color="yellow" size="sm">
                  <Bot size={12} className="inline mr-1" />
                  Claude
                </Badge>
                {session?.geminiAgentId && (
                  <Badge color="blue" size="sm">
                    <Sparkles size={12} className="inline mr-1" />
                    Gemini
                  </Badge>
                )}
              </div>
            </div>
            <Button
              variant="danger"
              size="md"
              onClick={handleStopSession}
              leftIcon={<Square size={16} />}
              className="w-full"
            >
              Stop Session
            </Button>
          </div>
        ) : (
          <Button
            variant="primary"
            size="md"
            isLoading={isStarting}
            disabled={!prompt.trim() || isStarting}
            onClick={handleStartSession}
            leftIcon={<Play size={16} />}
            className="w-full"
          >
            Start Session
          </Button>
        )}
      </Card>
    </div>
  )
}
