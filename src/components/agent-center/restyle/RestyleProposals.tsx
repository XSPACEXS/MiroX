import { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Check } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { useRestyleStore } from '@stores/restyleStore'
import { useAgentStore } from '@stores/agentStore'
import { listContainerVariants, listItemVariants, spinnerVariants } from '@design-system/animations'
import type { StyleProposal } from '@/types/restyle'

function MiniPreview({ tokens }: { tokens: StyleProposal['tokens'] }): JSX.Element {
  const isGlass = tokens.cardStyle === 'glass'
  const cardBg = isGlass
    ? `rgba(255,255,255,0.05)`
    : tokens.surface
  const cardStyle: React.CSSProperties = {
    backgroundColor: cardBg,
    border: `1px solid ${tokens.surfaceBorder}`,
    borderRadius: tokens.borderRadius,
    ...(isGlass ? { backdropFilter: 'blur(8px)' } : {}),
  }

  return (
    <div
      className="w-full aspect-[4/3] rounded-xl overflow-hidden p-2"
      style={{ backgroundColor: tokens.background }}
    >
      {/* Mini sidebar */}
      <div className="flex h-full gap-1.5">
        <div
          className="w-8 rounded-lg flex flex-col gap-1 p-1"
          style={{ backgroundColor: tokens.surface, borderRight: `1px solid ${tokens.surfaceBorder}` }}
        >
          <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: tokens.accent }} />
          <div className="w-full h-1 rounded-full bg-white/10" />
          <div className="w-full h-1 rounded-full bg-white/10" />
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col gap-1.5">
          {/* Header */}
          <div
            className="h-4 rounded-md flex items-center px-1.5"
            style={cardStyle}
          >
            <div className="h-1 w-8 rounded-full" style={{ backgroundColor: tokens.accent }} />
          </div>
          {/* Cards */}
          <div className="flex-1 grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md p-1" style={cardStyle}>
                <div className="h-1 w-full rounded-full bg-white/10 mb-0.5" />
                <div className="h-1 w-2/3 rounded-full bg-white/5" />
              </div>
            ))}
          </div>
          {/* Accent bar */}
          <div className="h-1.5 rounded-full" style={{ backgroundColor: tokens.accent, opacity: 0.6 }} />
        </div>
      </div>
    </div>
  )
}

export function RestyleProposals(): JSX.Element {
  const setStep = useRestyleStore((s) => s.setStep)
  const proposals = useRestyleStore((s) => s.proposals)
  const setProposals = useRestyleStore((s) => s.setProposals)
  const selectedIndex = useRestyleStore((s) => s.selectedProposalIndex)
  const selectProposal = useRestyleStore((s) => s.selectProposal)
  const isGenerating = useRestyleStore((s) => s.isGeneratingProposals)
  const setIsGenerating = useRestyleStore((s) => s.setIsGeneratingProposals)
  const scanReport = useRestyleStore((s) => s.scanReport)
  const inspirationImages = useRestyleStore((s) => s.inspirationImages)
  const urlRefs = useRestyleStore((s) => s.urlReferences)
  const freeTextVision = useRestyleStore((s) => s.freeTextVision)
  const quizAnswers = useRestyleStore((s) => s.quizAnswers)
  const addAgent = useAgentStore((s) => s.addAgent)
  const agents = useAgentStore((s) => s.agents)

  const geminiIdRef = useRef<string | null>(null)
  const launchedRef = useRef(false)

  const buildPrompt = useCallback((): string => {
    const parts: string[] = [
      'You are a UI/UX design system expert. Based on the following context, generate exactly 3 design proposals for a dark-themed desktop app.',
    ]

    if (scanReport) {
      parts.push(`\nCurrent codebase scan:\n${JSON.stringify(scanReport, null, 2)}`)
    }

    if (inspirationImages.length > 0) {
      parts.push(`\nUser uploaded ${inspirationImages.length} design screenshot(s) for inspiration.`)
    }

    if (urlRefs.length > 0) {
      const urls = urlRefs
        .filter((u) => u.selected)
        .map((u) => `${u.domain} (${u.title}) [tags: ${u.tags.join(', ')}]`)
      parts.push(`\nWebsite references:\n${urls.join('\n')}`)
    }

    if (freeTextVision) {
      parts.push(`\nUser's vision: "${freeTextVision}"`)
    }

    parts.push(`\nQuiz answers:
- Corners: ${quizAnswers.corners || 'no preference'}
- Surface: ${quizAnswers.surfaceEffect || 'no preference'}
- Density: ${quizAnswers.density}/100
- Animation: ${quizAnswers.animationIntensity}/100
- Selected palette index: ${quizAnswers.selectedPalette ?? 'none'}
- Selected extracted colors: ${quizAnswers.selectedExtractedColors.join(', ') || 'none'}`)

    parts.push(`\nReturn EXACTLY this JSON structure and nothing else:
{
  "proposals": [
    {
      "name": "string",
      "description": "string",
      "tokens": {
        "accent": "#hex",
        "accentDim": "rgba(r,g,b,a)",
        "background": "#hex",
        "surface": "#hex",
        "surfaceBorder": "#hex",
        "borderRadius": "css value like 12px or 4px",
        "cardStyle": "glass" or "solid"
      },
      "recommended": boolean,
      "reasoning": "string"
    }
  ]
}

Mark exactly one as recommended: true. All colors must be valid hex or rgba.`)

    return parts.join('\n')
  }, [scanReport, inspirationImages, urlRefs, freeTextVision, quizAnswers])

  const launchGeneration = useCallback(async () => {
    if (launchedRef.current) return
    launchedRef.current = true
    setIsGenerating(true)

    const result = await window.electronAPI.gemini.launch({
      model: 'gemini-pro',
      prompt: buildPrompt(),
    })

    if (result.ok) {
      geminiIdRef.current = result.id
      addAgent({
        id: result.id,
        prompt: 'Style proposals generation',
        provider: 'gemini',
        model: 'gemini-pro',
        status: 'running',
        logs: [],
        startedAt: result.startedAt,
        finishedAt: null,
        exitCode: null,
        cost: null,
        allowedTools: [],
        gitTagStart: null,
        gitTagEnd: null,
        outputType: 'text',
        teamRunId: null,
        teamRole: null,
      })
    }
  }, [buildPrompt, setIsGenerating, addAgent])

  // Launch on mount
  useEffect(() => {
    if (proposals.length === 0 && !launchedRef.current) {
      void launchGeneration()
    }
  }, [proposals.length, launchGeneration])

  // Watch for results
  useEffect(() => {
    const gId = geminiIdRef.current
    if (!gId) return

    const agent = agents.find((a) => a.id === gId)
    if (!agent) return

    const fullText = agent.logs
      .filter((l) => l.type === 'stdout')
      .map((l) => l.text)
      .join('\n')

    const jsonMatch = fullText.match(/\{[\s\S]*"proposals"[\s\S]*\}/)
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0]) as { proposals: StyleProposal[] }
        if (parsed.proposals?.length > 0) {
          setProposals(parsed.proposals)
          setIsGenerating(false)
          // Auto-select recommended
          const recIdx = parsed.proposals.findIndex((p) => p.recommended)
          if (recIdx >= 0) selectProposal(recIdx)
        }
      } catch {
        // not valid yet
      }
    }

    if (agent.status !== 'running' && proposals.length === 0) {
      setIsGenerating(false)
    }
  }, [agents, proposals.length, setProposals, setIsGenerating, selectProposal])

  return (
    <motion.div
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
      className="px-8 py-8"
    >
      <motion.div variants={listItemVariants} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center">
          <Sparkles size={20} className="text-purple-400" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-white">Style Proposals</h3>
          <p className="text-xs text-gray-500">Gemini generated these designs based on your preferences</p>
        </div>
      </motion.div>

      {isGenerating && (
        <motion.div variants={listItemVariants} className="flex items-center gap-3 py-12 justify-center">
          <motion.div variants={spinnerVariants} animate="animate">
            <Sparkles size={20} className="text-purple-400" />
          </motion.div>
          <span className="text-sm text-gray-400">Generating proposals...</span>
        </motion.div>
      )}

      {proposals.length > 0 && (
        <>
          <motion.div variants={listItemVariants} className="grid grid-cols-3 gap-4 mb-6">
            {proposals.map((proposal, i) => (
              <button
                key={proposal.name}
                onClick={() => selectProposal(i)}
                className={`text-left rounded-2xl border-2 overflow-hidden transition-all ${
                  selectedIndex === i
                    ? 'border-purple-400 shadow-[0_0_20px_rgba(167,139,250,0.2)]'
                    : 'border-black-600 hover:border-gray-500'
                }`}
              >
                <MiniPreview tokens={proposal.tokens} />
                <div className="p-3 bg-black-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white">{proposal.name}</span>
                    {selectedIndex === i && (
                      <Check size={14} className="text-purple-400" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-2">{proposal.description}</p>
                  <div className="flex gap-1">
                    {proposal.recommended && (
                      <Badge color="purple" size="sm">Best Match</Badge>
                    )}
                    <Badge color="blue" size="sm">Gemini Generated</Badge>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>

          <motion.div variants={listItemVariants} className="flex justify-between">
            <Button variant="ghost" size="sm" onClick={() => setStep(4)}>
              Back
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => setStep(6)}
              disabled={selectedIndex === null}
              className="!bg-purple-400 !text-white hover:!bg-purple-500 !shadow-none"
            >
              Apply This Style
            </Button>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}
