import { motion } from 'framer-motion'
import { Badge } from '@components/ui/Badge'
import { typingDotsContainerVariants, typingDotVariants } from '@design-system/animations'

interface ActivityIndicatorProps {
  currentAction: string
  isActive: boolean
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

export function ActivityIndicator({
  currentAction,
  isActive,
  activeTools,
  activityDots,
}: ActivityIndicatorProps): JSX.Element {
  return (
    <div className="space-y-1.5">
      {/* Current action */}
      <div className="flex items-center">
        <span className="text-xs text-gray-300 truncate max-w-[200px]">
          {currentAction}
        </span>
        {isActive && <TypingDots />}
      </div>

      {/* Activity sparkline + tool badges */}
      <div className="flex items-center gap-3">
        {/* Sparkline dots */}
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
          <div className="flex items-center gap-1">
            {activeTools.map((tool) => (
              <Badge key={tool} color="gray" size="sm">
                {tool}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
