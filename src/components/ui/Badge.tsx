import type { ReactNode } from 'react'

type BadgeColor = 'yellow' | 'green' | 'red' | 'blue' | 'gray' | 'purple' | 'orange'
type BadgeSize = 'sm' | 'md'

interface BadgeProps {
  color?: BadgeColor
  size?: BadgeSize
  children: ReactNode
  className?: string
}

const colorStyles: Record<BadgeColor, string> = {
  yellow: 'bg-yellow-400/15 text-yellow-400 border border-yellow-400/30',
  green: 'bg-green-500/15 text-green-400 border border-green-500/30',
  red: 'bg-red-500/15 text-red-400 border border-red-500/30',
  blue: 'bg-blue-500/15 text-blue-400 border border-blue-500/30',
  gray: 'bg-black-600 text-gray-400 border border-black-500',
  purple: 'bg-purple-500/15 text-purple-400 border border-purple-500/30',
  orange: 'bg-orange-500/15 text-orange-400 border border-orange-500/30',
}

export function Badge({ color = 'gray', size = 'sm', children, className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center font-medium rounded-full ${
      size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
    } ${colorStyles[color]} ${className}`}>
      {children}
    </span>
  )
}
