import { motion } from 'framer-motion'
import { Bot, Sparkles, ImageIcon, Video, CheckCircle2, XCircle } from 'lucide-react'
import { getModelById } from '@services/modelRegistry'
import { pulseRingVariants } from '@design-system/animations'

const PROVIDER_ICONS = {
  bot: Bot,
  sparkles: Sparkles,
  image: ImageIcon,
  video: Video,
} as const

interface AgentAvatarProps {
  provider: 'claude' | 'gemini'
  model: string
  isActive: boolean
  status: 'running' | 'completed' | 'failed' | 'killed'
  isPrimary?: boolean
}

export function AgentAvatar({ provider, model, isActive, status, isPrimary }: AgentAvatarProps): JSX.Element {
  const modelDef = getModelById(model)
  const iconKey = (modelDef?.providerIcon || (provider === 'gemini' ? 'sparkles' : 'bot')) as keyof typeof PROVIDER_ICONS
  const Icon = PROVIDER_ICONS[iconKey]
  const isClaude = provider === 'claude'
  const color = isClaude ? 'text-yellow-400' : 'text-blue-400'
  const bgColor = isClaude ? 'bg-yellow-400/10' : 'bg-blue-400/10'
  const ringColor = isClaude ? 'border-yellow-400/40' : 'border-blue-400/40'

  return (
    <div className="relative flex-shrink-0">
      <div className={`w-10 h-10 rounded-full ${bgColor} flex items-center justify-center`}>
        <Icon size={18} className={color} />
      </div>

      {/* Pulsing ring when active */}
      {status === 'running' && (
        <motion.div
          className={`absolute inset-0 rounded-full border-2 ${ringColor}`}
          variants={pulseRingVariants}
          animate={isActive ? 'active' : 'inactive'}
        />
      )}

      {/* Status overlay */}
      {status === 'completed' && (
        <motion.div
          className="absolute -bottom-0.5 -right-0.5 bg-black-900 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <CheckCircle2 size={14} className="text-green-400" />
        </motion.div>
      )}
      {status === 'failed' && (
        <motion.div
          className="absolute -bottom-0.5 -right-0.5 bg-black-900 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <XCircle size={14} className="text-red-400" />
        </motion.div>
      )}

      {/* Crown for primary agent */}
      {isPrimary && (
        <div className="absolute -top-1.5 -right-1.5 text-yellow-400 text-xs">
          &#9733;
        </div>
      )}
    </div>
  )
}
