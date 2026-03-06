import { Settings, Lock } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import type { ClaudeModel, GeminiTextModel } from '@/types/agent'

const MODEL_OPTIONS: { value: ClaudeModel; label: string }[] = [
  { value: 'haiku', label: 'Haiku 4.5 \u2014 quick & light' },
  { value: 'sonnet', label: 'Sonnet 4.6 \u2014 fast & capable' },
  { value: 'opus', label: 'Opus 4.6 \u2014 best quality' },
]

const GEMINI_OPTIONS: { value: string; label: string }[] = [
  { value: 'off', label: 'Gemini Off' },
  { value: 'gemini-pro', label: 'Pro \u2014 deep analysis' },
  { value: 'gemini-flash', label: 'Flash \u2014 fast generation' },
  { value: 'gemini-flash-2', label: 'Flash 2 \u2014 latest fast' },
  { value: 'gemini-flash-lite', label: 'Lite \u2014 lightest' },
]

const TIME_OPTIONS: { value: string; label: string }[] = [
  { value: '0', label: 'No limit \u2014 run until done' },
  { value: '900', label: '15m \u2014 quick task' },
  { value: '1800', label: '30m \u2014 medium project' },
  { value: '3600', label: '1h \u2014 large refactor' },
  { value: '7200', label: '2h \u2014 full audit' },
]

const selectClass =
  'bg-black-700 border-none text-xs text-gray-300 rounded-lg px-2 py-1 focus:ring-1 focus:ring-yellow-400/50 focus:outline-none appearance-none cursor-pointer'

export function ConfigStrip(): JSX.Element {
  const config = useChatStore((s) => s.config)
  const updateConfig = useChatStore((s) => s.updateConfig)
  const toggleConfigExpanded = useChatStore((s) => s.toggleConfigExpanded)
  const isLocked = config.isLocked

  const geminiValue = config.geminiEnabled ? config.geminiModel : 'off'

  function handleGeminiChange(val: string): void {
    if (val === 'off') {
      updateConfig({ geminiEnabled: false })
    } else {
      updateConfig({ geminiEnabled: true, geminiModel: val as GeminiTextModel })
    }
  }

  return (
    <div className="flex items-center gap-3 px-4 py-2 border-b border-black-600 bg-black-800/30">
      {isLocked && <Lock size={12} className="text-gray-500 shrink-0" />}

      <div className={`flex items-center gap-3 flex-1 ${isLocked ? 'opacity-50 pointer-events-none' : ''}`}>
        <label className="flex items-center gap-1.5 text-xs text-gray-500">
          Model
          <select
            className={selectClass}
            value={config.primaryModel}
            onChange={(e) => updateConfig({ primaryModel: e.target.value as ClaudeModel })}
          >
            {MODEL_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-1.5 text-xs text-gray-500">
          Gemini
          <select
            className={selectClass}
            value={geminiValue}
            onChange={(e) => handleGeminiChange(e.target.value)}
          >
            {GEMINI_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-1.5 text-xs text-gray-500">
          Time
          <select
            className={selectClass}
            value={String(config.timeLimitSeconds)}
            onChange={(e) => updateConfig({ timeLimitSeconds: Number(e.target.value) })}
          >
            {TIME_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </label>
      </div>

      <button
        onClick={toggleConfigExpanded}
        className="p-1.5 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-black-700 transition-colors"
        aria-label="Toggle expanded config"
      >
        <Settings size={14} />
      </button>
    </div>
  )
}
