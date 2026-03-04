import { motion } from 'framer-motion'
import type { ReactNode, HTMLAttributes } from 'react'

type CardVariant = 'default' | 'elevated' | 'highlighted' | 'interactive'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  hoverable?: boolean
  children: ReactNode
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-black-800 border border-black-600',
  elevated: 'bg-black-800 border border-black-600 shadow-lg',
  highlighted: 'bg-black-800 border border-yellow-400/50 shadow-yellow-glow',
  interactive: 'bg-black-800 border border-black-600 cursor-pointer',
}

export function Card({ variant = 'default', hoverable = false, children, className = '', onClick, ...props }: CardProps) {
  const base = 'rounded-2xl transition-all duration-200'

  if (hoverable || onClick) {
    return (
      <motion.div
        whileHover={{ y: -4, boxShadow: '0 0 30px rgba(255, 214, 0, 0.2)' }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${variantStyles[variant]} cursor-pointer ${className}`}
        onClick={onClick}
        {...(props as React.ComponentProps<typeof motion.div>)}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={`${base} ${variantStyles[variant]} ${className}`} onClick={onClick} {...props}>
      {children}
    </div>
  )
}
