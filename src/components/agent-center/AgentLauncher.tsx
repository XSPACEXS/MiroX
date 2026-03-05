import { useState, useCallback } from 'react'
import { Rocket, Send, Bot, Plus, X, Clock } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Input } from '@components/ui/Input'
import { Dropdown } from '@components/ui/Dropdown'
import { SimpleSelect } from '@components/ui/Dropdown'
import { Badge } from '@components/ui/Badge'
import { QuickActions } from './QuickActions'
import { ModelPicker } from './ModelPicker'
import { useAgentStore } from '@stores/agentStore'
import { useUIStore } from '@stores/uiStore'
import {
  CLAUDE_MODELS,
  getModelById,
  COLLABORATOR_ROLES,
  type ModelDefinition,
} from '@services/modelRegistry'
import type { ClaudeModel, GeminiModel, QuickAction } from '@/types/agent'

const CLAUDE_MODEL_OPTIONS = CLAUDE_MODELS.map((m) => ({
  value: m.id,
  label: m.label,
}))

const DEFAULT_TOOLS = ['Read', 'Edit', 'Glob', 'Grep', 'Bash']

const TIME_LIMIT_OPTIONS = [
  { value: '0', label: 'No limit' },
  { value: '30', label: '30 min' },
  { value: '60', label: '1 hour' },
  { value: '120', label: '2 hours' },
  { value: '240', label: '4 hours' },
  { value: '360', label: '6 hours' },
]

const ROLE_OPTIONS = COLLABORATOR_ROLES.map((r) => ({
  value: r.id,
  label: r.label,
}))

interface CollaboratorEntry {
  model: GeminiModel
  modelDef: ModelDefinition
  role: string
  customInstruction: string
}

function getRoleInstruction(roleId: string): string {
  const role = COLLABORATOR_ROLES.find((r) => r.id === roleId)
  return role?.instruction || ''
}

function buildCollaboratorPrompt(
  mainPrompt: string,
  roleId: string,
  customInstruction: string
): string {
  const roleName =
    COLLABORATOR_ROLES.find((r) => r.id === roleId)?.label || 'Collaborator'
  const instruction = roleId === 'custom' ? customInstruction : getRoleInstruction(roleId)

  return `You are a ${roleName} working alongside a Claude agent on this task.

Main task: ${mainPrompt}

${instruction ? `Focus on: ${instruction}` : ''}`
}

export function AgentLauncher(): JSX.Element {
  const [prompt, setPrompt] = useState('')
  const [primaryModel, setPrimaryModel] = useState<ClaudeModel>('sonnet')
  const [tools, setTools] = useState<string[]>(DEFAULT_TOOLS)
  const [collaborators, setCollaborators] = useState<CollaboratorEntry[]>([])
  const [isLaunching, setIsLaunching] = useState(false)
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [timeLimit, setTimeLimit] = useState('0')
  const addAgent = useAgentStore((s) => s.addAgent)
  const addToast = useUIStore((s) => s.addToast)

  const handleQuickAction = useCallback((action: QuickAction) => {
    setPrompt(action.prompt)
    if (action.provider === 'claude') {
      setPrimaryModel(action.model as ClaudeModel)
    }
    setTools(action.tools.length > 0 ? action.tools : DEFAULT_TOOLS)
    // Set collaborators if quick action has them
    if (action.collaborators) {
      const entries: CollaboratorEntry[] = action.collaborators
        .map((c) => {
          const def = getModelById(c.model)
          if (!def) return null
          return {
            model: c.model,
            modelDef: def,
            role: c.role || 'design-specialist',
            customInstruction: c.promptOverride || '',
          }
        })
        .filter((e): e is CollaboratorEntry => e !== null)
      setCollaborators(entries)
    } else {
      setCollaborators([])
    }
  }, [])

  const handleAddCollaborator = useCallback(
    (modelId: string) => {
      const def = getModelById(modelId)
      if (!def || collaborators.length >= 3) return

      const autoRole =
        def.outputType === 'image'
          ? 'Image Generator'
          : def.outputType === 'video'
            ? 'Video Generator'
            : ''

      setCollaborators((prev) => [
        ...prev,
        {
          model: modelId as GeminiModel,
          modelDef: def,
          role: autoRole || 'design-specialist',
          customInstruction: '',
        },
      ])
    },
    [collaborators.length]
  )

  const handleRemoveCollaborator = useCallback((index: number) => {
    setCollaborators((prev) => prev.filter((_, i) => i !== index))
  }, [])

  const handleRoleChange = useCallback((index: number, roleId: string) => {
    setCollaborators((prev) =>
      prev.map((c, i) => (i === index ? { ...c, role: roleId } : c))
    )
  }, [])

  const handleLaunch = useCallback(async () => {
    if (!prompt.trim() || isLaunching) return
    setIsLaunching(true)

    const teamRunId =
      collaborators.length > 0 ? `team-${Date.now()}` : null

    try {
      // 1. Launch primary Claude agent
      const claudeResult = await window.electronAPI.agent.launch({
        model: primaryModel,
        prompt: prompt.trim(),
        allowedTools: tools,
      })

      if (claudeResult.ok && claudeResult.id && claudeResult.startedAt) {
        addAgent({
          id: claudeResult.id,
          prompt: prompt.trim(),
          provider: 'claude',
          model: primaryModel,
          status: 'running',
          logs: [],
          startedAt: claudeResult.startedAt,
          finishedAt: null,
          exitCode: null,
          cost: null,
          allowedTools: tools,
          gitTagStart: null,
          gitTagEnd: null,
          outputType: 'text',
          teamRunId,
          teamRole: teamRunId ? 'primary' : null,
        })
      } else {
        addToast({
          type: 'error',
          title: 'Launch failed',
          message: (claudeResult as { error?: string }).error || 'Unknown error',
        })
        setIsLaunching(false)
        return
      }

      // 2. Launch collaborators
      for (const collab of collaborators) {
        try {
          let result: {
            ok: boolean
            id?: string
            model?: string
            startedAt?: number
            error?: string
          }

          if (
            collab.model === 'gemini-imagen' ||
            collab.model === 'gemini-imagen-fast'
          ) {
            result = await window.electronAPI.gemini.launchImagen({
              prompt: prompt.trim(),
              model: collab.model,
            })
          } else if (collab.model === 'gemini-veo') {
            result = await window.electronAPI.gemini.launchVeo({
              prompt: prompt.trim(),
            })
          } else {
            // Text or Nano Banana — use gemini.launch with role-derived prompt
            const collabPrompt = buildCollaboratorPrompt(
              prompt.trim(),
              collab.role,
              collab.customInstruction
            )
            result = await window.electronAPI.gemini.launch({
              model: collab.model,
              prompt: collabPrompt,
            })
          }

          if (result.ok && result.id) {
            addAgent({
              id: result.id,
              prompt: prompt.trim(),
              provider: 'gemini',
              model: collab.model,
              status: 'running',
              logs: [],
              startedAt: result.startedAt || Date.now(),
              finishedAt: null,
              exitCode: null,
              cost: null,
              allowedTools: [],
              gitTagStart: null,
              gitTagEnd: null,
              outputType: collab.modelDef.outputType,
              teamRunId,
              teamRole: 'collaborator',
            })
          } else {
            addToast({
              type: 'error',
              title: `${collab.modelDef.label} failed`,
              message: (result as { error?: string }).error || 'Unknown error',
            })
          }
        } catch (err) {
          addToast({
            type: 'error',
            title: `${collab.modelDef.label} failed`,
            message: String(err),
          })
        }
      }

      setPrompt('')
      setCollaborators([])
    } catch (err) {
      addToast({ type: 'error', title: 'Launch failed', message: String(err) })
    } finally {
      setIsLaunching(false)
    }
  }, [prompt, primaryModel, tools, collaborators, isLaunching, addAgent, addToast])

  const toggleTool = useCallback((tool: string) => {
    setTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    )
  }, [])

  const isMediaModel = (model: string): boolean => {
    const def = getModelById(model)
    return def?.outputType !== 'text'
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-1">
        <Rocket size={20} className="text-yellow-400" />
        <h2 className="font-display font-bold text-xl text-white">
          Launch Agent{collaborators.length > 0 ? ' Team' : ''}
        </h2>
      </div>

      <Card variant="default" className="p-5 space-y-5">
        {/* Prompt */}
        <div>
          <Input
            placeholder="Describe the task for your AI team..."
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

        {/* Primary Model (Claude) */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Bot size={14} className="text-yellow-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Primary — Claude
            </span>
          </div>
          <div className="flex gap-3">
            <Dropdown
              options={CLAUDE_MODEL_OPTIONS}
              value={primaryModel}
              onChange={(v) => setPrimaryModel(v as ClaudeModel)}
              className="w-44"
            />
            <div className="flex items-center gap-2 flex-wrap flex-1">
              <span className="text-xs text-gray-500">Tools:</span>
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
          </div>
        </div>

        {/* Collaborators */}
        {collaborators.length > 0 && (
          <div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
              Collaborators
            </span>
            <div className="space-y-2">
              {collaborators.map((collab, i) => (
                <div
                  key={`${collab.model}-${i}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-black-600 bg-black-800/50"
                >
                  <Badge color={collab.modelDef.badgeColor} size="sm">
                    {collab.modelDef.label}
                  </Badge>

                  {/* Role selector — only for text models */}
                  {!isMediaModel(collab.model) ? (
                    <SimpleSelect
                      options={ROLE_OPTIONS}
                      value={collab.role}
                      onChange={(v) => handleRoleChange(i, v)}
                      className="w-44"
                    />
                  ) : (
                    <span className="text-xs text-gray-500">{collab.role}</span>
                  )}

                  {collab.role === 'custom' && (
                    <input
                      type="text"
                      placeholder="Custom role instruction..."
                      value={collab.customInstruction}
                      onChange={(e) =>
                        setCollaborators((prev) =>
                          prev.map((c, idx) =>
                            idx === i
                              ? { ...c, customInstruction: e.target.value }
                              : c
                          )
                        )
                      }
                      className="flex-1 bg-black-700 border border-black-500 rounded-lg px-3 py-1.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-yellow-400/50"
                    />
                  )}

                  <button
                    onClick={() => handleRemoveCollaborator(i)}
                    aria-label={`Remove ${collab.modelDef.label}`}
                    className="ml-auto p-1 text-gray-500 hover:text-red-400 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add collaborator + time limit + launch */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {collaborators.length < 3 && (
              <Button
                variant="ghost"
                size="sm"
                leftIcon={<Plus size={14} />}
                onClick={() => setIsPickerOpen(true)}
              >
                Add Collaborator
              </Button>
            )}
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-gray-500" />
              <SimpleSelect
                options={TIME_LIMIT_OPTIONS}
                value={timeLimit}
                onChange={setTimeLimit}
                className="w-28"
              />
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            isLoading={isLaunching}
            disabled={!prompt.trim() || isLaunching}
            onClick={handleLaunch}
            leftIcon={<Rocket size={16} />}
          >
            {collaborators.length > 0 ? 'Launch Team' : 'Launch Agent'}
          </Button>
        </div>
      </Card>

      <ModelPicker
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        onSelect={handleAddCollaborator}
        excludeModelIds={collaborators.map((c) => c.model)}
      />

      <QuickActions onSelect={handleQuickAction} />
    </div>
  )
}
