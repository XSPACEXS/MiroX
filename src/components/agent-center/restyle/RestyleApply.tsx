import { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Wand2, CheckCircle2, Circle, Loader2 } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { useRestyleStore } from '@stores/restyleStore'
import { useAgentStore } from '@stores/agentStore'
import { listContainerVariants, listItemVariants } from '@design-system/animations'

const APPLY_STEPS = [
  'Update design tokens',
  'Update tailwind config',
  'Update global styles',
  'Replace color classes',
  'Update border radius',
  'Apply surface effects',
  'Run typecheck',
  'Run build',
  'Build Electron app',
  'Deploy to Desktop',
]

const STEP_KEYWORDS: Record<string, string[]> = {
  'Update design tokens': ['tokens.ts', 'design-system'],
  'Update tailwind config': ['tailwind.config'],
  'Update global styles': ['index.css', 'global'],
  'Replace color classes': ['yellow-400', 'color class'],
  'Update border radius': ['border-radius', 'rounded'],
  'Apply surface effects': ['backdrop-blur', 'glass', 'surface'],
  'Run typecheck': ['typecheck', 'tsc'],
  'Run build': ['vite build', 'npm run build'],
  'Build Electron app': ['electron-builder'],
  'Deploy to Desktop': ['cp -R', 'MiroX.app'],
}

export function RestyleApply(): JSX.Element {
  const setStep = useRestyleStore((s) => s.setStep)
  const proposals = useRestyleStore((s) => s.proposals)
  const selectedIndex = useRestyleStore((s) => s.selectedProposalIndex)
  const isApplying = useRestyleStore((s) => s.isApplying)
  const setIsApplying = useRestyleStore((s) => s.setIsApplying)
  const applyProgress = useRestyleStore((s) => s.applyProgress)
  const setApplyProgress = useRestyleStore((s) => s.setApplyProgress)
  const setApplyAgentId = useRestyleStore((s) => s.setApplyAgentId)
  const applyAgentId = useRestyleStore((s) => s.applyAgentId)
  const addAgent = useAgentStore((s) => s.addAgent)
  const agents = useAgentStore((s) => s.agents)

  const launchedRef = useRef(false)
  const logContainerRef = useRef<HTMLDivElement>(null)

  const selectedProposal = selectedIndex !== null ? proposals[selectedIndex] : null

  const buildApplyPrompt = useCallback((): string => {
    if (!selectedProposal) return ''

    return `You are applying a complete design system overhaul to this Electron + React + Tailwind app.

Selected design proposal: ${JSON.stringify(selectedProposal, null, 2)}

Follow these steps EXACTLY in order:

1. Update src/design-system/tokens.ts with the new colors:
   - accent: ${selectedProposal.tokens.accent}
   - accentDim: ${selectedProposal.tokens.accentDim}
   - background: ${selectedProposal.tokens.background}
   - surface: ${selectedProposal.tokens.surface}
   - surfaceBorder: ${selectedProposal.tokens.surfaceBorder}

2. Update tailwind.config.js with new theme values matching the tokens.

3. Update src/index.css global styles (background, text colors, scrollbar colors).

4. Replace all Tailwind color classes across ALL components and pages:
   - yellow-400 -> new accent color class
   - yellow-500 -> new accent hover color
   - Update all bg-black-* classes if background changed
   - Update shadow-yellow-glow references

5. Update border-radius values to: ${selectedProposal.tokens.borderRadius}

6. ${selectedProposal.tokens.cardStyle === 'glass' ? 'Add backdrop-blur and glass effect (bg opacity + border white/10) to Card components' : 'Ensure cards use solid opaque backgrounds'}

7. Run: npm run typecheck — fix any TypeScript errors

8. Run: npm run build — fix any build errors

9. Run: npx electron-builder --mac --dir --config electron-builder.json

10. Run: rm -rf /Users/space/Desktop/MiroX.app && cp -R release/mac-arm64/MiroX.app /Users/space/Desktop/MiroX.app

IMPORTANT: Do each step one at a time, verify it works, then move on.`
  }, [selectedProposal])

  const launchApply = useCallback(async () => {
    if (launchedRef.current || !selectedProposal) return
    launchedRef.current = true
    setIsApplying(true)
    setApplyProgress(APPLY_STEPS.map((step) => ({ step, done: false })))

    const result = await window.electronAPI.agent.launch({
      model: 'opus',
      prompt: buildApplyPrompt(),
      allowedTools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
    })

    if (result.ok) {
      setApplyAgentId(result.id)
      addAgent({
        id: result.id,
        prompt: 'Re-Style apply',
        provider: 'claude',
        model: 'opus',
        status: 'running',
        logs: [],
        startedAt: result.startedAt,
        finishedAt: null,
        exitCode: null,
        cost: null,
        allowedTools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
        gitTagStart: null,
        gitTagEnd: null,
        outputType: 'text',
        teamRunId: null,
        teamRole: null,
      })
    }
  }, [selectedProposal, buildApplyPrompt, setIsApplying, setApplyProgress, setApplyAgentId, addAgent])

  // Launch on mount
  useEffect(() => {
    if (!launchedRef.current && selectedProposal) {
      void launchApply()
    }
  }, [selectedProposal, launchApply])

  // Watch agent logs to detect step completion
  useEffect(() => {
    if (!applyAgentId) return

    const agent = agents.find((a) => a.id === applyAgentId)
    if (!agent) return

    const fullText = agent.logs.map((l) => l.text).join('\n').toLowerCase()

    const updatedProgress = applyProgress.map((p) => {
      if (p.done) return p
      const keywords = STEP_KEYWORDS[p.step]
      if (!keywords) return p
      const matched = keywords.some((kw) => fullText.includes(kw.toLowerCase()))
      return matched ? { ...p, done: true } : p
    })

    const hasChange = updatedProgress.some((p, i) => p.done !== applyProgress[i]?.done)
    if (hasChange) {
      setApplyProgress(updatedProgress)
    }

    if (agent.status !== 'running') {
      setIsApplying(false)
      // Mark all remaining as done if agent completed successfully
      if (agent.status === 'completed') {
        setApplyProgress(updatedProgress.map((p) => ({ ...p, done: true })))
      }
    }
  }, [applyAgentId, agents, applyProgress, setApplyProgress, setIsApplying])

  const agent = applyAgentId ? agents.find((a) => a.id === applyAgentId) : null
  const recentLogs = agent?.logs.slice(-20) || []

  // Auto-scroll log — scope to container only
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight
    }
  }, [recentLogs.length])

  return (
    <motion.div
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
      className="px-8 py-8"
    >
      <motion.div variants={listItemVariants} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center">
          <Wand2 size={20} className="text-purple-400" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-white">Applying Style</h3>
          <p className="text-xs text-gray-500">
            Claude Opus is redesigning your app
            {selectedProposal ? ` — ${selectedProposal.name}` : ''}
          </p>
        </div>
      </motion.div>

      {/* Progress Steps */}
      <motion.div variants={listItemVariants} className="space-y-2 mb-6">
        {applyProgress.map((p) => (
          <div key={p.step} className="flex items-center gap-3">
            {p.done ? (
              <CheckCircle2 size={16} className="text-green-400 flex-shrink-0" />
            ) : isApplying ? (
              <Loader2 size={16} className="text-purple-400 animate-spin flex-shrink-0" />
            ) : (
              <Circle size={16} className="text-gray-600 flex-shrink-0" />
            )}
            <span
              className={`text-sm ${
                p.done ? 'text-green-400' : isApplying ? 'text-gray-300' : 'text-gray-500'
              }`}
            >
              {p.step}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Live Log */}
      <motion.div
        ref={logContainerRef}
        variants={listItemVariants}
        className="bg-black-900 border border-black-600 rounded-xl p-4 max-h-48 overflow-y-auto font-mono text-xs text-gray-500"
      >
        {recentLogs.map((log, i) => (
          <div
            key={i}
            className={`${
              log.type === 'stderr' ? 'text-red-400' : log.type === 'system' ? 'text-yellow-400' : ''
            }`}
          >
            {log.text}
          </div>
        ))}
      </motion.div>

      {/* Navigation */}
      {!isApplying && (
        <motion.div variants={listItemVariants} className="flex justify-between mt-6">
          <Button variant="ghost" size="sm" onClick={() => setStep(5)}>
            Back
          </Button>
          {agent?.status === 'completed' && (
            <Button
              variant="primary"
              size="md"
              onClick={() => useRestyleStore.getState().closeWizard()}
              className="!bg-green-500 !text-white hover:!bg-green-600 !shadow-none"
            >
              Done!
            </Button>
          )}
        </motion.div>
      )}
    </motion.div>
  )
}
