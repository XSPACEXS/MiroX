import { useState, useCallback, useEffect } from 'react'
import {
  Rocket, FolderOpen, Clock, Bot, Zap, Target, Sparkles,
  Users, Search, Wrench, FlaskConical, ShieldCheck, Layers,
  ArrowRight, Lightbulb,
} from 'lucide-react'
import { Button } from '@components/ui/Button'
import { SimpleSelect } from '@components/ui/Dropdown'
import { useAgentStore } from '@stores/agentStore'
import { useMissionStore } from '@stores/missionStore'
import { useUIStore } from '@stores/uiStore'
import { executeMission } from '@services/orchestrator'
import type { MissionStoreAPI, AgentStoreAPI } from '@services/orchestrator'
import { generateCharacter } from '@services/characterGenerator'
import { CLAUDE_MODELS, GEMINI_TEXT_MODELS } from '@services/modelRegistry'
import type { ClaudeModel, GeminiTextModel } from '@/types/agent'
import { AgentLauncher } from './AgentLauncher'
import { QuickLaunchPresets } from './QuickLaunchPresets'

const CLAUDE_MODEL_OPTIONS = CLAUDE_MODELS.map((m) => ({
  value: m.id,
  label: m.label,
}))

const GEMINI_BRAIN_OPTIONS = GEMINI_TEXT_MODELS.map((m) => ({
  value: m.id,
  label: m.label,
}))

const TIME_LIMIT_OPTIONS = [
  { value: '0', label: 'No limit' },
  { value: '30', label: '30 min' },
  { value: '60', label: '1 hour' },
  { value: '120', label: '2 hours' },
  { value: '240', label: '4 hours' },
  { value: '360', label: '6 hours' },
]

type LauncherTab = 'mission' | 'simple'

function buildMissionStoreAPI(): MissionStoreAPI {
  return {
    getMission: () => useMissionStore.getState().mission,
    setPhase: (phase) => useMissionStore.getState().setPhase(phase),
    setPlan: (plan) => useMissionStore.getState().setPlan(plan),
    updateSubtask: (id, update) => useMissionStore.getState().updateSubtask(id, update),
    setError: (error) => useMissionStore.getState().setError(error),
    addActiveAgent: (agentId) => {
      useMissionStore.getState().addActiveAgent(agentId)
      // Generate character for the new agent
      const agent = useAgentStore.getState().agents.find((a) => a.id === agentId)
      if (agent) {
        const character = generateCharacter(agent)
        useMissionStore.getState().addCharacter(agentId, character)
      }
    },
    removeActiveAgent: (agentId) => useMissionStore.getState().removeActiveAgent(agentId),
    addCompletedAgent: (agentId) => useMissionStore.getState().addCompletedAgent(agentId),
    addPhaseTransition: (from, to, reason) =>
      useMissionStore.getState().addPhaseTransition(from, to, reason),
    setGeminiAssistReport: (report) => useMissionStore.getState().setGeminiAssistReport(report),
    completeMission: () => useMissionStore.getState().completeMission(),
  }
}

function buildAgentStoreAPI(): AgentStoreAPI {
  return {
    addAgent: (agent) => useAgentStore.getState().addAgent(agent),
    getAgent: (id) => useAgentStore.getState().agents.find((a) => a.id === id),
  }
}

export function MissionLauncher(): JSX.Element {
  const [tab, setTab] = useState<LauncherTab>('mission')
  const [prompt, setPrompt] = useState('')
  const [primaryModel, setPrimaryModel] = useState<ClaudeModel>('sonnet')
  const [timeLimit, setTimeLimit] = useState('0')
  const [isLaunching, setIsLaunching] = useState(false)
  const [projectDir, setProjectDir] = useState<string | null>(null)
  const [isDirLoading, setIsDirLoading] = useState(false)
  const [geminiEnabled, setGeminiEnabled] = useState(false)
  const [brainModel, setBrainModel] = useState<GeminiTextModel>('gemini-pro')
  const [autoMockup, setAutoMockup] = useState(true)
  const [handoffEnabled, setHandoffEnabled] = useState(false)

  const addToast = useUIStore((s) => s.addToast)

  useEffect(() => {
    void (async () => {
      try {
        const result = await window.electronAPI.agent.getProjectDir()
        if (result.ok && result.projectPath) {
          setProjectDir(result.projectPath)
        }
      } catch {
        // Silent fallback
      }
    })()
  }, [])

  const handleChangeProjectDir = useCallback(async () => {
    setIsDirLoading(true)
    try {
      const result = await window.electronAPI.agent.setProjectDir()
      if (result.ok && result.projectPath) {
        setProjectDir(result.projectPath)
        addToast({ type: 'success', title: 'Project directory set', message: result.projectPath })
      } else if (result.error) {
        addToast({ type: 'error', title: 'Invalid directory', message: result.error })
      }
    } catch (err) {
      addToast({ type: 'error', title: 'Directory picker failed', message: String(err) })
    } finally {
      setIsDirLoading(false)
    }
  }, [addToast])

  const handleLaunchMission = useCallback(
    async (missionPrompt?: string) => {
      const finalPrompt = (missionPrompt ?? prompt).trim()
      if (!finalPrompt || isLaunching) return
      setIsLaunching(true)

      try {
        const missionId = `mission-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
        const timeLimitSec = parseInt(timeLimit, 10) * 60

        useMissionStore.getState().startMission(missionId, finalPrompt)

        const missionStoreAPI = buildMissionStoreAPI()
        const agentStoreAPI = buildAgentStoreAPI()

        // Fire-and-forget: executeMission runs the full pipeline asynchronously
        void executeMission(
          {
            prompt: finalPrompt,
            primaryModel,
            tools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
            timeLimitSeconds: timeLimitSec || 3600,
            enableScout: true,
            enableVerify: true,
            geminiAssist: geminiEnabled ? {
              enabled: true,
              brainModel,
              autoMockup,
              autoImage: false,
              autoVideo: false,
            } : undefined,
            enableHandoff: handoffEnabled,
          },
          missionStoreAPI,
          agentStoreAPI
        )

        setPrompt('')
        addToast({ type: 'success', title: 'Mission launched', message: finalPrompt.slice(0, 80) })
      } catch (err) {
        addToast({ type: 'error', title: 'Mission launch failed', message: String(err) })
        useMissionStore.getState().setError(String(err))
        useMissionStore.getState().setPhase('failed')
      } finally {
        setIsLaunching(false)
      }
    },
    [prompt, primaryModel, timeLimit, isLaunching, addToast, geminiEnabled, brainModel, autoMockup, handoffEnabled]
  )

  const handlePresetSelect = useCallback(
    (preset: { prompt: string; model: ClaudeModel }) => {
      setPrimaryModel(preset.model)
      void handleLaunchMission(preset.prompt)
    },
    [handleLaunchMission]
  )

  if (tab === 'simple') {
    return (
      <div className="space-y-4">
        <TabBar tab={tab} onTabChange={setTab} />
        <AgentLauncher />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <TabBar tab={tab} onTabChange={setTab} />

      <div className="rounded-2xl bg-black-800/60 border border-black-600 p-6 space-y-5">
        {/* Pipeline overview */}
        <PipelineStrip />

        {/* Capability badges */}
        <div className="flex flex-wrap gap-2">
          <CapBadge icon={<Users size={12} />} label="Multi-Agent Team" />
          <CapBadge icon={<Layers size={12} />} label="Auto Planning" />
          <CapBadge icon={<Search size={12} />} label="Codebase Scout" />
          <CapBadge icon={<Wrench size={12} />} label="Parallel Builders" />
          <CapBadge icon={<FlaskConical size={12} />} label="Test Runner" />
          <CapBadge icon={<ShieldCheck size={12} />} label="Auto Verify" />
        </div>

        {/* Prompt textarea */}
        <div>
          <textarea
            rows={3}
            placeholder={"e.g. Build a dark-themed settings page with profile editing, theme toggle, and notification preferences"}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                void handleLaunchMission()
              }
            }}
            className="w-full bg-black-700 border border-black-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400/50 font-body"
          />
          <p className="text-[11px] text-gray-600 mt-1.5">
            Be specific — agents read your codebase, plan subtasks, build in parallel, run tests, and verify. Press <kbd className="px-1 py-0.5 bg-black-700 rounded text-gray-500 text-[10px]">⌘ Enter</kbd> to launch.
          </p>
        </div>

        {/* Example prompts */}
        <ExamplePrompts onSelect={(text) => setPrompt(text)} />

        {/* Project directory */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FolderOpen size={14} className="text-yellow-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Project Directory
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="flex-1 bg-black-700 border border-black-500 rounded-xl px-4 py-2.5 text-sm text-gray-300 font-mono truncate"
              title={projectDir || ''}
            >
              {projectDir || 'Loading...'}
            </div>
            <Button
              variant="secondary"
              size="sm"
              leftIcon={<FolderOpen size={14} />}
              onClick={handleChangeProjectDir}
              isLoading={isDirLoading}
            >
              Change
            </Button>
          </div>
        </div>

        {/* Model + Time Limit */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Bot size={14} className="text-yellow-400" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Primary Model
              </span>
            </div>
            <SimpleSelect
              options={CLAUDE_MODEL_OPTIONS}
              value={primaryModel}
              onChange={(v) => setPrimaryModel(v as ClaudeModel)}
              className="w-44"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock size={14} className="text-gray-500" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Time Limit
              </span>
            </div>
            <SimpleSelect
              options={TIME_LIMIT_OPTIONS}
              value={timeLimit}
              onChange={setTimeLimit}
              className="w-32"
            />
          </div>
        </div>

        {/* Gemini Assist */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Gemini Assist
            </span>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={geminiEnabled}
                onChange={(e) => setGeminiEnabled(e.target.checked)}
                className="w-4 h-4 rounded border-black-500 bg-black-700 text-yellow-400 focus:ring-yellow-400/50"
              />
              <span className="text-sm text-gray-300">Enable Gemini Brain</span>
            </label>
            {geminiEnabled && (
              <div className="pl-7 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-500 w-24">Brain Model</span>
                  <SimpleSelect
                    options={GEMINI_BRAIN_OPTIONS}
                    value={brainModel}
                    onChange={(v) => setBrainModel(v as GeminiTextModel)}
                    className="w-44"
                  />
                </div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={autoMockup}
                    onChange={(e) => setAutoMockup(e.target.checked)}
                    className="w-4 h-4 rounded border-black-500 bg-black-700 text-yellow-400 focus:ring-yellow-400/50"
                  />
                  <span className="text-xs text-gray-400">Auto UI Mockups</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={handoffEnabled}
                    onChange={(e) => setHandoffEnabled(e.target.checked)}
                    className="w-4 h-4 rounded border-black-500 bg-black-700 text-yellow-400 focus:ring-yellow-400/50"
                  />
                  <span className="text-xs text-gray-400">Generational Handoff (auto-replace agents at 60% context)</span>
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Launch button */}
        <div className="flex items-center justify-end pt-1">
          <Button
            variant="primary"
            size="md"
            isLoading={isLaunching}
            disabled={!prompt.trim() || isLaunching}
            onClick={() => void handleLaunchMission()}
            leftIcon={<Rocket size={16} />}
          >
            Launch Mission
          </Button>
        </div>
      </div>

      {/* Quick launch presets */}
      <QuickLaunchPresets onSelect={handlePresetSelect} />

      {/* What can I do section */}
      <WhatCanIDo />
    </div>
  )
}

// --- Tab bar sub-component ---

function TabBar({
  tab,
  onTabChange,
}: {
  tab: LauncherTab
  onTabChange: (t: LauncherTab) => void
}): JSX.Element {
  return (
    <div className="flex items-center gap-1 p-1 rounded-xl bg-black-800/60 border border-black-600 w-fit">
      <button
        type="button"
        onClick={() => onTabChange('mission')}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50 ${
          tab === 'mission'
            ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30'
            : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <Target size={14} />
        Mission
      </button>
      <button
        type="button"
        onClick={() => onTabChange('simple')}
        className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50 ${
          tab === 'simple'
            ? 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/30'
            : 'text-gray-400 hover:text-gray-200'
        }`}
      >
        <Zap size={14} />
        Simple Launch
      </button>
    </div>
  )
}

// --- Pipeline strip ---

const PIPELINE_STEPS = [
  { label: 'Plan', desc: 'Break into subtasks' },
  { label: 'Scout', desc: 'Analyze codebase' },
  { label: 'Build', desc: 'Parallel agents code' },
  { label: 'Test', desc: 'Run & fix tests' },
  { label: 'Verify', desc: 'Quality check' },
]

function PipelineStrip(): JSX.Element {
  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1">
      {PIPELINE_STEPS.map((step, i) => (
        <div key={step.label} className="flex items-center gap-1 shrink-0">
          <div className="flex flex-col items-center px-2.5 py-1.5 rounded-lg bg-yellow-400/5 border border-yellow-400/10">
            <span className="text-[11px] font-semibold text-yellow-400">{step.label}</span>
            <span className="text-[9px] text-gray-500">{step.desc}</span>
          </div>
          {i < PIPELINE_STEPS.length - 1 && (
            <ArrowRight size={10} className="text-gray-600 shrink-0" />
          )}
        </div>
      ))}
    </div>
  )
}

// --- Capability badge ---

function CapBadge({ icon, label }: { icon: React.ReactNode; label: string }): JSX.Element {
  return (
    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black-700 border border-black-500 text-[11px] text-gray-400">
      {icon}
      {label}
    </div>
  )
}

// --- Example prompts ---

const EXAMPLE_PROMPTS = [
  'Add dark mode toggle with system preference detection and smooth transitions',
  'Build a REST API client with retry logic, caching, and TypeScript types',
  'Refactor the auth flow to use JWT with refresh tokens and secure storage',
  'Create an onboarding wizard with progress tracking, validation, and animations',
  'Add comprehensive error boundaries with user-friendly fallback screens',
  'Build a real-time notification system with WebSocket and toast UI',
]

function ExamplePrompts({ onSelect }: { onSelect: (text: string) => void }): JSX.Element {
  // Show 3 random examples, stable per mount
  const [examples] = useState(() => {
    const shuffled = [...EXAMPLE_PROMPTS].sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 3)
  })

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
        <Lightbulb size={11} />
        <span>Try something like:</span>
      </div>
      {examples.map((text) => (
        <button
          key={text}
          type="button"
          onClick={() => onSelect(text)}
          className="text-left text-xs text-gray-500 hover:text-yellow-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-yellow-400/5 truncate"
        >
          &ldquo;{text}&rdquo;
        </button>
      ))}
    </div>
  )
}

// --- What can I do section ---

const CAPABILITIES = [
  {
    title: 'Build features end-to-end',
    desc: 'Describe what you want — agents plan, scaffold, implement, and test it across multiple files.',
    icon: <Rocket size={16} className="text-yellow-400" />,
  },
  {
    title: 'Fix bugs across your codebase',
    desc: 'Point to a bug or paste an error — agents trace the root cause, fix it, and verify the fix.',
    icon: <Wrench size={16} className="text-orange-400" />,
  },
  {
    title: 'Refactor with confidence',
    desc: 'Request architectural changes — agents refactor safely with test coverage and type checking.',
    icon: <Layers size={16} className="text-blue-400" />,
  },
  {
    title: 'Run security audits',
    desc: 'Scan for vulnerabilities — agents find OWASP issues, hardcode leaks, and patch them.',
    icon: <ShieldCheck size={16} className="text-green-400" />,
  },
]

function WhatCanIDo(): JSX.Element {
  return (
    <div className="rounded-2xl bg-black-800/40 border border-black-600/50 p-5">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        What can missions do?
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {CAPABILITIES.map((cap) => (
          <div key={cap.title} className="flex gap-3 p-3 rounded-xl bg-black-800/60">
            <div className="mt-0.5 shrink-0">{cap.icon}</div>
            <div>
              <p className="text-sm font-medium text-white">{cap.title}</p>
              <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{cap.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
