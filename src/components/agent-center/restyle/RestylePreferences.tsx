import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Palette, Sparkles } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { Card } from '@components/ui/Card'
import { useRestyleStore } from '@stores/restyleStore'
import { useAgentStore } from '@stores/agentStore'
import { listContainerVariants, listItemVariants, spinnerVariants } from '@design-system/animations'

const DEFAULT_PALETTES = [
  { name: 'Purple Haze', colors: ['#A78BFA', '#7C3AED', '#1E1B4B', '#312E81'] },
  { name: 'Ocean Breeze', colors: ['#60A5FA', '#3B82F6', '#0F172A', '#1E3A5F'] },
  { name: 'Ember Glow', colors: ['#FB923C', '#F97316', '#1A0F00', '#431407'] },
  { name: 'Mint Fresh', colors: ['#4ADE80', '#22C55E', '#052E16', '#14532D'] },
]

export function RestylePreferences(): JSX.Element {
  const setStep = useRestyleStore((s) => s.setStep)
  const quizAnswers = useRestyleStore((s) => s.quizAnswers)
  const updateQuizAnswer = useRestyleStore((s) => s.updateQuizAnswer)
  const extractedColors = useRestyleStore((s) => s.extractedColors)
  const setExtractedColors = useRestyleStore((s) => s.setExtractedColors)
  const inspirationImages = useRestyleStore((s) => s.inspirationImages)
  const colorExtractionAgentId = useRestyleStore((s) => s.colorExtractionAgentId)
  const setColorExtractionAgentId = useRestyleStore((s) => s.setColorExtractionAgentId)
  const addAgent = useAgentStore((s) => s.addAgent)
  const agents = useAgentStore((s) => s.agents)

  const launchedRef = useRef(false)

  // Launch Gemini for color extraction if images exist
  useEffect(() => {
    if (inspirationImages.length > 0 && extractedColors.length === 0 && !launchedRef.current) {
      launchedRef.current = true

      void (async () => {
        const result = await window.electronAPI.gemini.launch({
          model: 'gemini-flash',
          prompt:
            'Look at the following design context and suggest 8 UI colors that would work well for a dark-themed desktop app. Return ONLY a JSON array of hex color strings, nothing else. Example: ["#A78BFA", "#1a1a2e", "#60A5FA", "#0F172A", "#FB923C", "#1E1E2E", "#4ADE80", "#2A2A3E"]',
        })

        if (result.ok) {
          setColorExtractionAgentId(result.id)
          addAgent({
            id: result.id,
            prompt: 'Color extraction',
            provider: 'gemini',
            model: 'gemini-flash',
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
            teamSkill: null,
            timeLimitSeconds: 0,
          })
        }
      })()
    }
  }, [inspirationImages.length, extractedColors.length, addAgent, setColorExtractionAgentId])

  // Watch for Gemini color results
  useEffect(() => {
    if (!colorExtractionAgentId) return

    const agent = agents.find((a) => a.id === colorExtractionAgentId)
    if (!agent) return

    const fullText = agent.logs
      .filter((l) => l.type === 'stdout')
      .map((l) => l.text)
      .join('\n')

    const jsonMatch = fullText.match(/\[[\s\S]*?\]/)
    if (jsonMatch) {
      try {
        const colors = JSON.parse(jsonMatch[0]) as string[]
        if (Array.isArray(colors) && colors.length > 0) {
          setExtractedColors(colors)
        }
      } catch {
        // not valid yet
      }
    }
  }, [colorExtractionAgentId, agents, setExtractedColors])

  const colorAgent = colorExtractionAgentId
    ? agents.find((a) => a.id === colorExtractionAgentId)
    : undefined
  const isExtracting =
    inspirationImages.length > 0 &&
    extractedColors.length === 0 &&
    colorAgent?.status === 'running'

  return (
    <motion.div
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
      className="px-8 py-8 space-y-6 max-h-[65vh] overflow-y-auto"
    >
      {/* Extracted Colors */}
      {inspirationImages.length > 0 && (
        <motion.div variants={listItemVariants}>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Extracted Colors
            </span>
          </div>

          {isExtracting ? (
            <div className="flex items-center gap-3 p-4">
              <motion.div variants={spinnerVariants} animate="animate">
                <Palette size={16} className="text-purple-400" />
              </motion.div>
              <span className="text-sm text-gray-400">Gemini is analyzing your inspiration...</span>
            </div>
          ) : (
            <div className="flex gap-2 flex-wrap">
              {extractedColors.map((color) => {
                const isSelected = quizAnswers.selectedExtractedColors.includes(color)
                return (
                  <button
                    key={color}
                    onClick={() => {
                      const current = quizAnswers.selectedExtractedColors
                      const next = isSelected
                        ? current.filter((c) => c !== color)
                        : [...current, color]
                      updateQuizAnswer('selectedExtractedColors', next)
                    }}
                    className={`w-10 h-10 rounded-xl border-2 transition-all ${
                      isSelected
                        ? 'border-purple-400 scale-110 shadow-[0_0_12px_rgba(167,139,250,0.3)]'
                        : 'border-black-500 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                )
              })}
            </div>
          )}
        </motion.div>
      )}

      {/* Q1: Corners */}
      <motion.div variants={listItemVariants}>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
          Corners
        </span>
        <div className="grid grid-cols-2 gap-3">
          <Card
            variant="default"
            className={`p-5 cursor-pointer transition-all ${
              quizAnswers.corners === 'rounded'
                ? 'border-purple-400/50 bg-purple-400/[0.05]'
                : ''
            }`}
            onClick={() => updateQuizAnswer('corners', 'rounded')}
          >
            <div className="w-full h-12 rounded-2xl bg-purple-400/20 border border-purple-400/30 mb-2" />
            <span className="text-sm text-white">Rounded</span>
          </Card>
          <Card
            variant="default"
            className={`p-5 cursor-pointer transition-all ${
              quizAnswers.corners === 'sharp'
                ? 'border-purple-400/50 bg-purple-400/[0.05]'
                : ''
            }`}
            onClick={() => updateQuizAnswer('corners', 'sharp')}
          >
            <div className="w-full h-12 rounded-sm bg-purple-400/20 border border-purple-400/30 mb-2" />
            <span className="text-sm text-white">Sharp</span>
          </Card>
        </div>
      </motion.div>

      {/* Q2: Surface */}
      <motion.div variants={listItemVariants}>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
          Surface Effect
        </span>
        <div className="grid grid-cols-2 gap-3">
          <Card
            variant="default"
            className={`p-5 cursor-pointer transition-all ${
              quizAnswers.surfaceEffect === 'glass'
                ? 'border-purple-400/50 bg-purple-400/[0.05]'
                : ''
            }`}
            onClick={() => updateQuizAnswer('surfaceEffect', 'glass')}
          >
            <div
              className="w-full h-12 rounded-xl border border-white/10 mb-2"
              style={{
                background: 'rgba(167, 139, 250, 0.1)',
                backdropFilter: 'blur(12px)',
              }}
            />
            <span className="text-sm text-white">Glass</span>
          </Card>
          <Card
            variant="default"
            className={`p-5 cursor-pointer transition-all ${
              quizAnswers.surfaceEffect === 'solid'
                ? 'border-purple-400/50 bg-purple-400/[0.05]'
                : ''
            }`}
            onClick={() => updateQuizAnswer('surfaceEffect', 'solid')}
          >
            <div className="w-full h-12 rounded-xl bg-black-700 border border-black-500 mb-2" />
            <span className="text-sm text-white">Solid</span>
          </Card>
        </div>
      </motion.div>

      {/* Q3: Density */}
      <motion.div variants={listItemVariants}>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
          Density
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-16">Compact</span>
          <input
            type="range"
            min={0}
            max={100}
            value={quizAnswers.density}
            onChange={(e) => updateQuizAnswer('density', Number(e.target.value))}
            className="flex-1 accent-purple-400"
          />
          <span className="text-xs text-gray-500 w-16 text-right">Spacious</span>
        </div>
      </motion.div>

      {/* Q4: Animation */}
      <motion.div variants={listItemVariants}>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
          Animation Intensity
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-16">Subtle</span>
          <input
            type="range"
            min={0}
            max={100}
            value={quizAnswers.animationIntensity}
            onChange={(e) => updateQuizAnswer('animationIntensity', Number(e.target.value))}
            className="flex-1 accent-purple-400"
          />
          <span className="text-xs text-gray-500 w-16 text-right">Playful</span>
        </div>
      </motion.div>

      {/* Q5: Accent Palette */}
      <motion.div variants={listItemVariants}>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 block">
          Accent Palette
        </span>
        <div className="grid grid-cols-2 gap-3">
          {extractedColors.length > 0 && (
            <Card
              variant="default"
              className={`p-4 cursor-pointer transition-all ${
                quizAnswers.selectedPalette === 0
                  ? 'border-purple-400/50 bg-purple-400/[0.05]'
                  : ''
              }`}
              onClick={() => updateQuizAnswer('selectedPalette', 0)}
            >
              <div className="flex gap-1 mb-2">
                {extractedColors.slice(0, 4).map((c) => (
                  <div
                    key={c}
                    className="w-6 h-6 rounded-lg"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <span className="text-xs text-purple-400 font-medium">Based on your inspiration</span>
            </Card>
          )}
          {DEFAULT_PALETTES.map((palette, i) => {
            const idx = extractedColors.length > 0 ? i + 1 : i
            return (
              <Card
                key={palette.name}
                variant="default"
                className={`p-4 cursor-pointer transition-all ${
                  quizAnswers.selectedPalette === idx
                    ? 'border-purple-400/50 bg-purple-400/[0.05]'
                    : ''
                }`}
                onClick={() => updateQuizAnswer('selectedPalette', idx)}
              >
                <div className="flex gap-1 mb-2">
                  {palette.colors.map((c) => (
                    <div
                      key={c}
                      className="w-6 h-6 rounded-lg"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
                <span className="text-xs text-white">{palette.name}</span>
              </Card>
            )
          })}
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div variants={listItemVariants} className="flex justify-between pt-2">
        <Button variant="ghost" size="sm" onClick={() => setStep(3)}>
          Back
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={() => setStep(5)}
          className="!bg-purple-400 !text-white hover:!bg-purple-500 !shadow-none"
        >
          Generate Proposals
        </Button>
      </motion.div>
    </motion.div>
  )
}
