import { motion } from 'framer-motion'
import { Bot, Sparkles, ImageIcon, Video, CheckCircle2, XCircle, Skull } from 'lucide-react'
import { getModelById } from '@services/modelRegistry'
import { pulseRingVariants } from '@design-system/animations'

const PROVIDER_ICONS = {
  bot: Bot,
  sparkles: Sparkles,
  image: ImageIcon,
  video: Video,
} as const

type AvatarSize = 'sm' | 'md' | 'lg'

const SIZE_CONFIG: Record<AvatarSize, { container: string; icon: number; ring: string; badge: number; crown: string }> = {
  sm: { container: 'w-10 h-10', icon: 18, ring: 'border-2', badge: 14, crown: 'text-xs -top-1 -right-1' },
  md: { container: 'w-12 h-12', icon: 22, ring: 'border-2', badge: 16, crown: 'text-sm -top-1.5 -right-1.5' },
  lg: { container: 'w-16 h-16', icon: 28, ring: 'border-[3px]', badge: 18, crown: 'text-base -top-1.5 -right-1.5' },
}

interface AgentAvatarProps {
  provider: 'claude' | 'gemini'
  model: string
  isActive: boolean
  status: 'running' | 'completed' | 'failed' | 'killed' | 'handing-off'
  isPrimary?: boolean
  size?: AvatarSize
}

export function AgentAvatar({ provider, model, isActive, status, isPrimary, size = 'lg' }: AgentAvatarProps): JSX.Element {
  const modelDef = getModelById(model)
  const iconKey = (modelDef?.providerIcon || (provider === 'gemini' ? 'sparkles' : 'bot')) as keyof typeof PROVIDER_ICONS
  const Icon = PROVIDER_ICONS[iconKey]
  const isClaude = provider === 'claude'
  const color = isClaude ? 'text-yellow-400' : 'text-blue-400'
  const bgColor = isClaude ? 'bg-yellow-400/10' : 'bg-blue-400/10'
  const ringColor = isClaude ? 'border-yellow-400/40' : 'border-blue-400/40'
  const cfg = SIZE_CONFIG[size]

  return (
    <div className="relative flex-shrink-0">
      <div className={`${cfg.container} rounded-full ${bgColor} flex items-center justify-center`}>
        <Icon size={cfg.icon} className={color} />
      </div>

      {/* Pulsing ring when active */}
      {status === 'running' && (
        <motion.div
          className={`absolute inset-0 rounded-full ${cfg.ring} ${ringColor}`}
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
          <CheckCircle2 size={cfg.badge} className="text-green-400" />
        </motion.div>
      )}
      {status === 'failed' && (
        <motion.div
          className="absolute -bottom-0.5 -right-0.5 bg-black-900 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <XCircle size={cfg.badge} className="text-red-400" />
        </motion.div>
      )}
      {status === 'killed' && (
        <motion.div
          className="absolute -bottom-0.5 -right-0.5 bg-black-900 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <Skull size={cfg.badge} className="text-gray-400" />
        </motion.div>
      )}

      {/* Crown for primary agent */}
      {isPrimary && (
        <div className={`absolute ${cfg.crown} text-yellow-400`}>
          &#9733;
        </div>
      )}
    </div>
  )
}
