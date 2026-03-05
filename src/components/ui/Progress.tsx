import { motion } from 'framer-motion'

interface LinearProgressProps {
  value: number
  className?: string
  size?: 'sm' | 'md'
}

export function LinearProgress({ value, className = '', size = 'md' }: LinearProgressProps) {
  return (
    <div role="progressbar" aria-valuenow={Math.round(Math.min(value, 100))} aria-valuemin={0} aria-valuemax={100} className={`w-full bg-black-700 rounded-full overflow-hidden ${size === 'sm' ? 'h-1' : 'h-2'} ${className}`}>
      <motion.div
        className="h-full bg-yellow-400 rounded-full origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: Math.min(value, 100) / 100 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </div>
  )
}

interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  className?: string
}

export function CircularProgress({ value, size = 40, strokeWidth = 3, className = '' }: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (Math.min(value, 100) / 100) * circumference

  return (
    <svg role="progressbar" aria-valuenow={Math.round(Math.min(value, 100))} aria-valuemin={0} aria-valuemax={100} width={size} height={size} className={className}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-black-700"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="text-yellow-400"
        style={{ transform: `rotate(-90deg)`, transformOrigin: '50% 50%' }}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />
    </svg>
  )
}
