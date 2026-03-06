import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CharacterAvatar } from '@components/agent-center/character/CharacterAvatar'
import { Button } from '@components/ui/Button'
import type { AgentCharacter } from '@/types/character'

interface CelebrationOverlayProps {
  characters: AgentCharacter[]
  onDismiss: () => void
}

export function CelebrationOverlay({ characters, onDismiss }: CelebrationOverlayProps): JSX.Element {
  // Auto-dismiss after 5 seconds
  useEffect(() => {
    const timer = setTimeout(onDismiss, 5000)
    return () => clearTimeout(timer)
  }, [onDismiss])

  // Dismiss on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onDismiss}
        role="dialog"
        aria-modal="true"
        aria-label="Mission complete"
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black-900/80 backdrop-blur-sm" />

        {/* Content card */}
        <motion.div
          className="relative z-10 bg-black-800 border border-yellow-400/30 rounded-2xl px-8 py-8 max-w-md w-full mx-4 flex flex-col items-center shadow-[0_0_60px_rgba(255,214,0,0.15)]"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.1 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Heading */}
          <h2 className="text-2xl font-display font-bold text-yellow-400 mb-4">
            Mission Complete!
          </h2>

          {/* Character avatars row */}
          <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
            {characters.map((char) => (
              <CharacterAvatar
                key={char.id}
                character={char}
                isActive={true}
                status="completed"
                size="md"
                mood="celebrating"
              />
            ))}
          </div>

          {/* Character names */}
          <p className="text-sm text-gray-300 text-center mb-6">
            {characters.map((c) => c.firstName).join(', ')}
          </p>

          {/* Continue button */}
          <Button variant="primary" size="md" onClick={onDismiss}>
            Continue
          </Button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
