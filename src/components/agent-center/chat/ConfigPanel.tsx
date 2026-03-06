import { useChatStore } from '@stores/chatStore'
import type { ClaudeModel, GeminiTextModel } from '@/types/agent'

const CLAUDE_MODELS: { value: ClaudeModel; label: string; desc: string }[] = [
  { value: 'haiku', label: 'Haiku 4.5', desc: 'Quick & light' },
  { value: 'sonnet', label: 'Sonnet 4.6', desc: 'Fast & capable' },
  { value: 'opus', label: 'Opus 4.6', desc: 'Best quality' },
]

const GEMINI_MODELS: { value: GeminiTextModel; label: string }[] = [
  { value: 'gemini-pro', label: 'Gemini Pro \u2014 deep analysis' },
  { value: 'gemini-flash', label: 'Flash \u2014 fast generation' },
  { value: 'gemini-flash-2', label: 'Flash 2 \u2014 latest fast' },
  { value: 'gemini-flash-lite', label: 'Flash Lite \u2014 lightest' },
]

const TIME_OPTIONS: { value: number; label: string }[] = [
  { value: 0, label: 'No limit \u2014 run until done' },
  { value: 900, label: '15 minutes \u2014 quick task' },
  { value: 1800, label: '30 minutes \u2014 medium project' },
  { value: 3600, label: '1 hour \u2014 large refactor' },
  { value: 7200, label: '2 hours \u2014 full audit' },
]

function SectionHeader({ children }: { children: string }): JSX.Element {
  return (
    <div className="flex items-center gap-2 pt-1">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-600">{children}</span>
      <div className="flex-1 h-px bg-black-600" />
    </div>
  )
}

export function ConfigPanel(): JSX.Element {
  const config = useChatStore((s) => s.config)
  const updateConfig = useChatStore((s) => s.updateConfig)
  const toggleConfigExpanded = useChatStore((s) => s.toggleConfigExpanded)

  async function handleChangeDir(): Promise<void> {
    const result = await window.electronAPI.agent.setProjectDir()
    if (result.ok && result.projectPath) {
      updateConfig({ projectDir: result.projectPath })
    }
  }

  return (
    <div className="rounded-2xl bg-black-800/60 border border-black-600 p-4 mx-3 my-2 space-y-4">
      <SectionHeader>AI Model</SectionHeader>
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          {CLAUDE_MODELS.map((m) => (
            <label key={m.value} className="flex items-center gap-1.5 cursor-pointer">
              <span
                className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center
                  ${config.primaryModel === m.value ? 'border-yellow-400' : 'border-gray-500'}`}
              >
                {config.primaryModel === m.value && (
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                )}
              </span>
              <input
                type="radio"
                name="claude-model"
                value={m.value}
                checked={config.primaryModel === m.value}
                onChange={() => updateConfig({ primaryModel: m.value })}
                className="sr-only"
              />
              <div className="flex flex-col">
                <span className="text-xs text-gray-300">{m.label}</span>
                <span className="text-[10px] text-gray-500">{m.desc}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <SectionHeader>Gemini Brain</SectionHeader>
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400">Enable</span>
          <button
            onClick={() => updateConfig({ geminiEnabled: !config.geminiEnabled })}
            className={`relative w-8 h-4 rounded-full transition-colors ${
              config.geminiEnabled ? 'bg-yellow-400' : 'bg-black-600'
            }`}
            aria-label="Toggle Gemini"
          >
            <span
              className={`absolute top-0.5 w-3 h-3 rounded-full bg-white transition-transform ${
                config.geminiEnabled ? 'translate-x-4' : 'translate-x-0.5'
              }`}
            />
          </button>
          {config.geminiEnabled && (
            <select
              value={config.geminiModel}
              onChange={(e) => updateConfig({ geminiModel: e.target.value as GeminiTextModel })}
              className="bg-black-700 border-none text-xs text-gray-300 rounded-lg px-2 py-1 focus:ring-1 focus:ring-yellow-400/50 focus:outline-none appearance-none cursor-pointer"
            >
              {GEMINI_MODELS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      <SectionHeader>Execution</SectionHeader>
      <div className="flex items-center gap-6">
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={config.autoMockup}
            onChange={(e) => updateConfig({ autoMockup: e.target.checked })}
            className="w-3.5 h-3.5 rounded border-gray-500 bg-black-700 text-yellow-400 focus:ring-yellow-400/50 focus:ring-offset-0"
          />
          <span className="text-xs text-gray-300">Auto Mockup</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={config.handoffEnabled}
            onChange={(e) => updateConfig({ handoffEnabled: e.target.checked })}
            className="w-3.5 h-3.5 rounded border-gray-500 bg-black-700 text-yellow-400 focus:ring-yellow-400/50 focus:ring-offset-0"
          />
          <span className="text-xs text-gray-300">Handoff Enabled</span>
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-xs font-medium text-gray-300">Time Limit</span>
        <select
          value={config.timeLimitSeconds}
          onChange={(e) => updateConfig({ timeLimitSeconds: Number(e.target.value) })}
          className="w-full bg-black-700 border border-black-500 text-xs text-gray-300 rounded-lg px-2 py-1.5 focus:ring-1 focus:ring-yellow-400/50 focus:outline-none appearance-none cursor-pointer"
        >
          {TIME_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <SectionHeader>Project</SectionHeader>
      <div className="space-y-1">
        <span className="text-xs font-medium text-gray-300">Project Directory</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 truncate flex-1 font-mono">
            {config.projectDir ?? 'Not set'}
          </span>
          <button
            onClick={handleChangeDir}
            className="px-2 py-1 text-xs text-gray-300 bg-black-700 border border-black-500 rounded-lg hover:border-yellow-400/30 transition-colors"
          >
            Change
          </button>
        </div>
      </div>

      {/* Done */}
      <button
        onClick={toggleConfigExpanded}
        className="w-full py-1.5 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-lg hover:bg-yellow-400/20 transition-colors"
      >
        Done
      </button>
    </div>
  )
}
