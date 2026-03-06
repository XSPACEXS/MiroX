import { motion } from 'framer-motion'
import { Badge } from '@components/ui/Badge'
import { typingDotsContainerVariants, typingDotVariants } from '@design-system/animations'

interface ActivityIndicatorProps {
  activeTools: string[]
  activityDots: boolean[]
}

function TypingDots(): JSX.Element {
  return (
    <motion.span
      className="inline-flex items-center gap-0.5 ml-1.5"
      variants={typingDotsContainerVariants}
      animate="animate"
    >
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1 h-1 rounded-full bg-yellow-400"
          variants={typingDotVariants}
        />
      ))}
    </motion.span>
  )
}

interface SpeechBubbleProps {
  text: string
  isActive: boolean
}

export function SpeechBubble({ text, isActive }: SpeechBubbleProps): JSX.Element {
  return (
    <div className="relative">
      <div className="bg-black-700/90 border border-black-500 rounded-lg px-3 py-1.5">
        <div className="flex items-center justify-center">
          <span className="text-xs text-gray-300 truncate max-w-[220px]">
            {text}
          </span>
          {isActive && <TypingDots />}
        </div>
      </div>
      {/* Triangle arrow pointing down */}
      <div className="flex justify-center">
        <div
          className="w-0 h-0"
          style={{
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid rgba(38, 38, 38, 0.9)',
          }}
        />
      </div>
    </div>
  )
}

export function ActivityIndicator({
  activeTools,
  activityDots,
}: ActivityIndicatorProps): JSX.Element {
  return (
    <div className="flex flex-col items-center gap-1.5">
      {/* Activity sparkline */}
      <div className="flex items-center gap-px" title="Activity over last 10 seconds">
        {activityDots.map((lit, i) => (
          <div
            key={i}
            className={`w-1 h-3 rounded-full transition-colors duration-300 ${
              lit ? 'bg-green-400' : 'bg-black-600'
            }`}
          />
        ))}
      </div>

      {/* Tool badges */}
      {activeTools.length > 0 && (
        <div className="flex items-center gap-1 flex-wrap justify-center">
          {activeTools.map((tool) => (
            <Badge key={tool} color="gray" size="sm">
              {tool}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
