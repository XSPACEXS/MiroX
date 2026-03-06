import { motion, AnimatePresence } from 'framer-motion'
import { FileText } from 'lucide-react'

interface HandoffAnimationProps {
  fileName: string
  isVisible: boolean
  onComplete?: () => void
}

export function HandoffAnimation({ fileName, isVisible, onComplete }: HandoffAnimationProps): JSX.Element {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          onAnimationComplete={(definition) => {
            // Only call onComplete when the exit animation finishes
            if (definition === 'exit' || (!isVisible && onComplete)) {
              onComplete?.()
            }
          }}
        >
          <div className="flex flex-col items-center gap-1">
            <FileText size={24} className="text-yellow-400" />
            <span className="text-[10px] text-yellow-400/80 font-mono truncate max-w-[120px]">
              {fileName}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
