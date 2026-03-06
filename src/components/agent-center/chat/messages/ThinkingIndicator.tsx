import { Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import { typingDotsContainerVariants, typingDotVariants } from '@design-system/animations'
import type { ChatMessage } from '@/types/chat'
import type { ChatMode } from '@/types/chat'

interface ThinkingIndicatorProps {
  message: ChatMessage
}

function getLabel(mode: ChatMode): string {
  switch (mode) {
    case 'chat':
      return 'Thinking...'
    case 'scan':
      return 'Scanning project...'
    case 'debug':
      return 'Analyzing error...'
    case 'mission':
      return 'Planning mission...'
  }
}

export default function ThinkingIndicator({ message }: ThinkingIndicatorProps): JSX.Element {
  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0">
        <Bot size={14} className="text-yellow-400" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">{getLabel(message.mode)}</span>
        <motion.div className="flex gap-1" variants={typingDotsContainerVariants} animate="animate">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-yellow-400"
              variants={typingDotVariants}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
