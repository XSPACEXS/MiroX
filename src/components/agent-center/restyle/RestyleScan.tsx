import { useEffect, useRef, useMemo, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ScanSearch, CheckCircle2, FileCode2 } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { Card } from '@components/ui/Card'
import { useRestyleStore } from '@stores/restyleStore'
import { useAgentStore } from '@stores/agentStore'
import { spinnerVariants, listItemVariants, listContainerVariants } from '@design-system/animations'
import type { ScanReport } from '@/types/restyle'

const SCAN_PROMPT = `Scan the codebase at the project root and produce a JSON report. Look at:
- All React component files (*.tsx) — list component names
- All page/route files — list page names
- All color tokens/theme values (tailwind config, CSS variables, design-system tokens)
- All border-radius values used
- All font families referenced
- Spacing values (padding/margin patterns)
- Any style inconsistencies (e.g. hardcoded colors vs tokens, mixed border radii)

Output ONLY a valid JSON object with this exact shape:
{
  "components": ["ComponentA", "ComponentB"],
  "pages": ["Home", "Settings"],
  "colorTokens": ["#FFD600", "bg-yellow-400"],
  "borderRadii": ["rounded-xl", "rounded-2xl"],
  "fonts": ["Space Grotesk", "Inter"],
  "spacingValues": ["p-4", "gap-3"],
  "inconsistencies": ["Hardcoded #1a1a2e in Card.tsx instead of token"]
}

Wrap the JSON in a markdown code block: \`\`\`json ... \`\`\``

function tryParseReport(text: string): ScanReport | null {
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/)
  if (!jsonMatch?.[1]) return null
  try {
    const parsed = JSON.parse(jsonMatch[1]) as ScanReport
    if (parsed.components && parsed.pages) return parsed
  } catch {
    // not valid json yet
  }
  return null
}

export function RestyleScan(): JSX.Element {
  const setStep = useRestyleStore((s) => s.setStep)
  const scanReport = useRestyleStore((s) => s.scanReport)
  const setScanReport = useRestyleStore((s) => s.setScanReport)
  const scanAgentId = useRestyleStore((s) => s.scanAgentId)
  const setScanAgentId = useRestyleStore((s) => s.setScanAgentId)
  const isScanRunning = useRestyleStore((s) => s.isScanRunning)
  const setIsScanRunning = useRestyleStore((s) => s.setIsScanRunning)
  const agents = useAgentStore((s) => s.agents)
  const addAgent = useAgentStore((s) => s.addAgent)

  const launchedRef = useRef(false)

  const launchScan = useCallback(async () => {
    if (launchedRef.current) return
    launchedRef.current = true
    setIsScanRunning(true)

    const result = await window.electronAPI.agent.launch({
      model: 'haiku',
      prompt: SCAN_PROMPT,
      allowedTools: ['Read', 'Glob', 'Grep'],
    })

    if (result.ok) {
      setScanAgentId(result.id)
      addAgent({
        id: result.id,
        prompt: SCAN_PROMPT,
        provider: 'claude',
        model: 'haiku',
        status: 'running',
        logs: [],
        startedAt: result.startedAt,
        finishedAt: null,
        exitCode: null,
        cost: null,
        allowedTools: ['Read', 'Glob', 'Grep'],
        gitTagStart: null,
        gitTagEnd: null,
        outputType: 'text',
        teamRunId: null,
        teamRole: null,
        teamSkill: null,
        timeLimitSeconds: 0,
      })
    }
  }, [setScanAgentId, setIsScanRunning, addAgent])

  // Launch scan on mount
  useEffect(() => {
    if (!scanReport && !scanAgentId) {
      void launchScan()
    }
  }, [scanReport, scanAgentId, launchScan])

  const scanAgent = scanAgentId ? agents.find((a) => a.id === scanAgentId) : undefined

  // Derive progress and current file from agent logs (no setState in effect)
  const progress = useMemo(() => {
    if (scanReport) return 100
    if (!scanAgent) return 0
    return Math.min(scanAgent.logs.length * 5, 95)
  }, [scanReport, scanAgent])

  const currentFile = useMemo(() => {
    if (!scanAgent) return ''
    const lastLogs = scanAgent.logs.slice(-5)
    for (let i = lastLogs.length - 1; i >= 0; i--) {
      const log = lastLogs[i]
      if (!log) continue
      const fileMatch = log.text.match(/(?:Reading|Scanning|Glob|Grep).*?([/\w.-]+\.\w+)/)
      if (fileMatch?.[1]) return fileMatch[1]
    }
    return ''
  }, [scanAgent])

  // Parse report from agent logs
  useEffect(() => {
    if (!scanAgent || scanReport) return

    const fullText = scanAgent.logs
      .filter((l) => l.type === 'stdout')
      .map((l) => l.text)
      .join('\n')

    const report = tryParseReport(fullText)
    if (report) {
      setScanReport(report)
      setIsScanRunning(false)
    } else if (scanAgent.status !== 'running') {
      setIsScanRunning(false)
    }
  }, [scanAgent, scanReport, setScanReport, setIsScanRunning])

  const stats = scanReport
    ? [
        { label: 'Components', value: scanReport.components.length },
        { label: 'Pages', value: scanReport.pages.length },
        { label: 'Color Tokens', value: scanReport.colorTokens.length },
        { label: 'Inconsistencies', value: scanReport.inconsistencies.length },
      ]
    : []

  return (
    <motion.div
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
      className="px-8 py-8"
    >
      <motion.div variants={listItemVariants} className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-purple-400/10 border border-purple-400/30 flex items-center justify-center">
          <ScanSearch size={20} className="text-purple-400" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-lg text-white">Design Audit</h3>
          <p className="text-xs text-gray-500">Claude Haiku is scanning your codebase</p>
        </div>
      </motion.div>

      {/* Progress */}
      {isScanRunning && (
        <motion.div variants={listItemVariants} className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <motion.div variants={spinnerVariants} animate="animate">
              <ScanSearch size={16} className="text-purple-400" />
            </motion.div>
            <span className="text-sm text-gray-300">Scanning...</span>
          </div>
          <div className="w-full h-2 bg-black-700 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full bg-purple-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            />
          </div>
          {currentFile && (
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FileCode2 size={12} />
              <span className="font-mono truncate" title={currentFile}>{currentFile}</span>
            </div>
          )}
        </motion.div>
      )}

      {/* Results */}
      {scanReport && (
        <>
          <motion.div variants={listItemVariants} className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={16} className="text-green-400" />
            <span className="text-sm text-green-400 font-medium">Scan complete</span>
          </motion.div>

          <motion.div variants={listItemVariants} className="grid grid-cols-2 gap-3 mb-6">
            {stats.map((stat) => (
              <Card key={stat.label} variant="default" className="p-4">
                <div className="text-2xl font-bold text-purple-400 font-display">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={listItemVariants} className="flex justify-end">
            <Button
              variant="primary"
              size="md"
              onClick={() => setStep(3)}
              className="!bg-purple-400 !text-white hover:!bg-purple-500 !shadow-none"
            >
              Continue
            </Button>
          </motion.div>
        </>
      )}
    </motion.div>
  )
}
