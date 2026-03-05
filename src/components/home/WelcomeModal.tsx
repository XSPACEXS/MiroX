import { motion, AnimatePresence } from 'framer-motion'
import { useState, useCallback } from 'react'
import { modalVariants, modalPanelVariants, stepVariants } from '../../design-system/animations'
import { useSettingsStore } from '../../stores/settingsStore'
import { Button } from '@components/ui/Button'

type Step = 1 | 2 | 3

function StepIndicator({ current, total }: { current: Step; total: number }) {
  return (
    <div className="flex gap-2 justify-center mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i + 1 <= current ? 'bg-yellow-400 w-8' : 'bg-black-600 w-4'
          }`}
        />
      ))}
    </div>
  )
}

function StepWelcome({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      variants={stepVariants}
      initial="inactive"
      animate="active"
      className="flex flex-col items-center text-center"
    >
      <div className="w-20 h-20 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">
        <span className="font-display font-extrabold text-3xl text-black">M</span>
      </div>
      <h2 className="font-display font-bold text-3xl text-white mb-3">Welcome to MiroX</h2>
      <p className="text-gray-400 text-lg mb-8 max-w-sm leading-relaxed">
        The enterprise Miro board builder. Create professional boards from 30+ templates in
        seconds.
      </p>
      <Button variant="primary" size="md" onClick={onNext}>
        Get Started
      </Button>
    </motion.div>
  )
}

function StepConnect({ onNext }: { onNext: () => void }) {
  const [token, setToken] = useState('')
  const [status, setStatus] = useState<'idle' | 'testing' | 'success' | 'error'>('idle')
  const setMiroConnected = useSettingsStore((s) => s.setMiroConnected)

  const testConnection = useCallback(async () => {
    if (!token.trim()) return
    setStatus('testing')
    try {
      await window.electronAPI.miro.setToken(token.trim())
      const result = await window.electronAPI.miro.testConnection()
      if (result.ok) {
        setStatus('success')
        setMiroConnected(true, 'MiroX User')
        setTimeout(onNext, 800)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }, [token, setMiroConnected, onNext])

  return (
    <motion.div
      variants={stepVariants}
      initial="inactive"
      animate="active"
      className="flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-black-700 flex items-center justify-center mb-6">
        <svg
          className="w-8 h-8 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </div>
      <h2 className="font-display font-bold text-2xl text-white mb-2">Connect to Miro</h2>
      <p className="text-gray-400 mb-6 max-w-sm">
        Paste your Miro API token to enable board creation. You can also do this later in Settings.
      </p>
      <div className="w-full max-w-sm space-y-4">
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste your Miro API token..."
          aria-label="Miro API token"
          className="w-full px-4 py-3 bg-black-800 border border-black-600 rounded-xl text-white placeholder-black-400 focus:outline-none focus:border-yellow-400 transition-colors"
        />
        <div className="flex gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={testConnection}
            disabled={!token.trim() || status === 'testing'}
            isLoading={status === 'testing'}
            className="flex-1"
          >
            {status === 'testing' ? 'Testing...' : 'Test Connection'}
          </Button>
          <Button variant="ghost" size="sm" onClick={onNext}>
            Skip
          </Button>
        </div>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm font-medium"
          >
            Connected successfully!
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm font-medium"
          >
            Invalid token. Please check and try again.
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

function StepComplete({ onFinish }: { onFinish: () => void }) {
  return (
    <motion.div
      variants={stepVariants}
      initial="inactive"
      animate="active"
      className="flex flex-col items-center text-center"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.1 }}
        className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
      >
        <svg
          className="w-10 h-10 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </svg>
      </motion.div>
      <h2 className="font-display font-bold text-3xl text-white mb-3">You're All Set!</h2>
      <p className="text-gray-400 text-lg mb-8 max-w-sm leading-relaxed">
        Start exploring templates or import your first project.
      </p>
      <Button variant="primary" size="md" onClick={onFinish}>
        Open MiroX
      </Button>
    </motion.div>
  )
}

export function WelcomeModal() {
  const [step, setStep] = useState<Step>(1)
  const [isOpen, setIsOpen] = useState(true)
  const completeOnboarding = useSettingsStore((s) => s.completeOnboarding)

  const handleFinish = useCallback(() => {
    completeOnboarding()
    setIsOpen(false)
  }, [completeOnboarding])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Welcome to MiroX"
          variants={modalPanelVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="glass-heavy rounded-2xl p-10 w-full max-w-md mx-4"
        >
          <StepIndicator current={step} total={3} />
          <AnimatePresence mode="wait">
            {step === 1 && <StepWelcome key="s1" onNext={() => setStep(2)} />}
            {step === 2 && <StepConnect key="s2" onNext={() => setStep(3)} />}
            {step === 3 && <StepComplete key="s3" onFinish={handleFinish} />}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
