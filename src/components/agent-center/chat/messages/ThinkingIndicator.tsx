import { Bot } from 'lucide-react'
import { motion } from 'framer-motion'
import { typingDotsContainerVariants, typingDotVariants } from '@design-system/animations'
import { useAgentStore } from '@stores/agentStore'
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
  const agents = useAgentStore((s) => s.agents)
  const runningAgent = agents.find((a) => a.status === 'running')
  const recentLogs = runningAgent
    ?.logs
    .filter((l) => l.type === 'stdout' && l.text.trim().length > 0)
    .slice(-3)
    .map((l) => l.text.trim())

  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0">
        <Bot size={14} className="text-yellow-400" />
      </div>
      <div>
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
        {/* B8: Live log preview */}
        {recentLogs && recentLogs.length > 0 && (
          <div className="mt-1.5 space-y-0.5 max-w-md">
            {recentLogs.map((line, i) => (
              <p key={i} className="text-[11px] text-gray-600 font-mono truncate">
                {line.length > 80 ? `${line.slice(0, 80)}...` : line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
