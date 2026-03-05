import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, CheckCircle, ChevronDown, Monitor, XCircle } from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'
import { Spinner } from '@components/ui/Spinner'
import { useAgentStore } from '@stores/agentStore'
import { fadeInVariants } from '@design-system/animations'

export function AppSelfCheck(): JSX.Element {
  const lastScreenshot = useAgentStore((s) => s.lastScreenshot)
  const setLastScreenshot = useAgentStore((s) => s.setLastScreenshot)
  const consoleErrors = useAgentStore((s) => s.consoleErrors)
  const setConsoleErrors = useAgentStore((s) => s.setConsoleErrors)
  const domCheckResults = useAgentStore((s) => s.domCheckResults)
  const setDomCheckResults = useAgentStore((s) => s.setDomCheckResults)

  const [isCapturing, setIsCapturing] = useState(false)
  const [isRunningChecks, setIsRunningChecks] = useState(false)
  const [errorsExpanded, setErrorsExpanded] = useState(false)

  const handleScreenshot = useCallback(async () => {
    setIsCapturing(true)
    try {
      const result = await window.electronAPI.selfTest.screenshot()
      if (result.ok && result.dataURL) {
        setLastScreenshot(result.dataURL)
      }
    } finally {
      setIsCapturing(false)
    }
  }, [setLastScreenshot])

  const handleRunChecks = useCallback(async () => {
    setIsRunningChecks(true)
    try {
      // Fetch console errors
      const errResult = await window.electronAPI.selfTest.consoleErrors()
      if (errResult.ok && errResult.errors) {
        setConsoleErrors(errResult.errors)
      }

      // Run DOM checks
      const checkResult = await window.electronAPI.selfTest.runAll()
      if (checkResult.ok && checkResult.results) {
        setDomCheckResults(checkResult.results)
      }
    } finally {
      setIsRunningChecks(false)
    }
  }, [setConsoleErrors, setDomCheckResults])

  const errorCount = consoleErrors.filter((e) => e.startsWith('[error]')).length

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Monitor size={20} className="text-yellow-400" />
        <h2 className="font-display font-bold text-xl text-white">App Self-Check</h2>
        {errorCount > 0 && (
          <Badge color="red" size="sm">
            {errorCount} errors
          </Badge>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Screenshot panel */}
        <Card variant="default" className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-200">Screenshot</h3>
            <Button
              variant="secondary"
              size="sm"
              isLoading={isCapturing}
              onClick={handleScreenshot}
              leftIcon={<Camera size={14} />}
            >
              Capture
            </Button>
          </div>
          {lastScreenshot ? (
            <motion.img
              variants={fadeInVariants}
              initial="initial"
              animate="animate"
              src={lastScreenshot}
              alt="App screenshot"
              className="w-full rounded-lg border border-black-600"
            />
          ) : (
            <div className="h-48 flex items-center justify-center border border-dashed border-black-500 rounded-lg">
              <p className="text-sm text-gray-600">No screenshot captured</p>
            </div>
          )}
        </Card>

        {/* DOM checks panel */}
        <Card variant="default" className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-200">DOM Checks</h3>
            <Button
              variant="secondary"
              size="sm"
              isLoading={isRunningChecks}
              onClick={handleRunChecks}
              leftIcon={<CheckCircle size={14} />}
            >
              Run Checks
            </Button>
          </div>

          {isRunningChecks ? (
            <div className="h-48 flex items-center justify-center">
              <Spinner size="md" />
            </div>
          ) : domCheckResults ? (
            <div className="space-y-2">
              {domCheckResults.map((check, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black-700"
                >
                  {check.passed ? (
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  ) : (
                    <XCircle size={16} className="text-red-400 flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="text-sm text-white">{check.label}</span>
                    <p className="text-xs text-gray-400 truncate">{check.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="h-48 flex items-center justify-center border border-dashed border-black-500 rounded-lg">
              <p className="text-sm text-gray-600">Click &quot;Run Checks&quot; to test the app</p>
            </div>
          )}

          {/* Console errors section */}
          {consoleErrors.length > 0 && (
            <div className="mt-3 border-t border-black-600 pt-3">
              <button
                onClick={() => setErrorsExpanded(!errorsExpanded)}
                className="flex items-center gap-2 w-full text-left"
              >
                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform ${
                    errorsExpanded ? 'rotate-180' : ''
                  }`}
                />
                <span className="text-sm text-gray-300">
                  Console Errors ({consoleErrors.length})
                </span>
              </button>
              <AnimatePresence>
                {errorsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 max-h-40 overflow-y-auto space-y-1">
                      {consoleErrors.map((err, i) => (
                        <p key={i} className="text-xs font-mono text-red-400/80 truncate">
                          {err}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
