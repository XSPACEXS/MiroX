import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ExternalLink, Plus, Home } from 'lucide-react'
import { Button } from '../ui/Button'

interface SuccessScreenProps {
  boardName: string
  boardUrl: string | null
  templateName: string
  onNewBoard: () => void
  className?: string
}

export function SuccessScreen({ boardName, boardUrl, templateName, onNewBoard, className = '' }: SuccessScreenProps) {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 250, damping: 25 }}
      className={`flex flex-col items-center justify-center py-16 text-center ${className}`}
    >
      {/* Animated checkmark */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15, delay: 0.2 }}
        className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-8"
      >
        <motion.svg
          className="w-12 h-12 text-green-400"
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
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </motion.svg>
      </motion.div>

      <h2 className="font-display font-bold text-3xl text-white mb-3">Board Created!</h2>
      <p className="text-gray-400 mb-2 text-lg">{boardName}</p>
      <p className="text-gray-500 text-sm mb-8">Built with the {templateName} template</p>

      <div className="flex flex-col sm:flex-row gap-3">
        {boardUrl && (
          <Button
            variant="primary"
            size="lg"
            rightIcon={<ExternalLink size={16} />}
            onClick={() => window.electronAPI.openExternal(boardUrl)}
          >
            Open in Miro
          </Button>
        )}
        <Button
          variant="secondary"
          size="lg"
          leftIcon={<Plus size={16} />}
          onClick={onNewBoard}
        >
          Create Another
        </Button>
        <Button
          variant="ghost"
          size="lg"
          leftIcon={<Home size={16} />}
          onClick={() => navigate('/')}
        >
          Go Home
        </Button>
      </div>
    </motion.div>
  )
}
