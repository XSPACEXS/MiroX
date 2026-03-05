import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { LinearProgress } from '../ui/Progress'
import type { CreationStep } from '../../hooks/useBoardBuilder'

interface CreationProgressProps {
  progress: number
  steps: CreationStep[]
  className?: string
}

const subtitles: Record<string, string> = {
  validate: 'Checking your configuration...',
  'create-board': 'Setting up your Miro board...',
  diagrams: 'Building diagrams and flowcharts...',
  documents: 'Creating companion documents...',
  tables: 'Adding data tables...',
  polish: 'Applying visual styling...',
  cleanup: 'Finishing up...',
}

export function CreationProgress({ progress, steps, className = '' }: CreationProgressProps) {
  const activeStep = steps.find(s => s.status === 'active')
  const subtitle = activeStep ? subtitles[activeStep.id] || 'Working...' : 'Preparing...'

  return (
    <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
      {/* Top progress bar */}
      <LinearProgress value={progress} className="w-full max-w-md mb-10" />

      {/* Spinning logo */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-6"
      >
        <span className="text-black font-bold text-2xl">M</span>
      </motion.div>

      <h2 className="font-display font-semibold text-xl text-white mb-2">Creating your board...</h2>
      <p className="text-sm text-gray-400 mb-8" aria-live="polite">{subtitle}</p>

      {/* Step checklist */}
      <div className="w-full max-w-sm space-y-3">
        <AnimatePresence>
          {steps.map(step => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              {step.status === 'complete' ? (
                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-black" />
                </div>
              ) : step.status === 'active' ? (
                <Loader2 size={20} className="text-yellow-400 animate-spin flex-shrink-0" />
              ) : (
                <div className="w-5 h-5 rounded-full bg-black-600 flex-shrink-0" />
              )}
              <span className={`text-sm ${
                step.status === 'complete' ? 'text-gray-300' :
                step.status === 'active' ? 'text-white font-medium' :
                'text-gray-500'
              }`}>
                {step.label}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
