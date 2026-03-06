import { useState, useCallback, useEffect } from 'react'
import { Rocket, FolderOpen, Clock, Bot, Zap, Target } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { SimpleSelect } from '@components/ui/Dropdown'
import { useAgentStore } from '@stores/agentStore'
import { useMissionStore } from '@stores/missionStore'
import { useUIStore } from '@stores/uiStore'
import { executeMission } from '@services/orchestrator'
import type { MissionStoreAPI, AgentStoreAPI } from '@services/orchestrator'
import { generateCharacter } from '@services/characterGenerator'
import { CLAUDE_MODELS } from '@services/modelRegistry'
import type { ClaudeModel } from '@/types/agent'
import { AgentLauncher } from './AgentLauncher'
import { QuickLaunchPresets } from './QuickLaunchPresets'

const CLAUDE_MODEL_OPTIONS = CLAUDE_MODELS.map((m) => ({
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
    [prompt, primaryModel, timeLimit, isLaunching, addToast]
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
        {/* Prompt textarea */}
        <div>
          <textarea
            rows={3}
            placeholder="Describe your mission..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                void handleLaunchMission()
              }
            }}
            className="w-full bg-black-700 border border-black-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400/50 font-body"
          />
        </div>

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
