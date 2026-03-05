import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-yellow-400 text-black-900 font-semibold hover:bg-yellow-500 shadow-yellow-glow hover:shadow-yellow-glow-lg',
  secondary: 'border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10',
  ghost: 'text-gray-300 hover:text-white hover:bg-white/10',
  danger: 'bg-red-500/10 border border-red-500/50 text-red-400 hover:bg-red-500/20',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
  lg: 'px-7 py-3.5 text-base rounded-xl gap-2.5',
}

export function Button({ variant = 'primary', size = 'md', isLoading, leftIcon, rightIcon, children, disabled, className = '', ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      disabled={disabled || isLoading}
      className={`
        inline-flex items-center justify-center font-medium transition-all duration-150
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
        hover:-translate-y-0.5 active:translate-y-0
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50 focus-visible:ring-offset-1 focus-visible:ring-offset-black-900
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {isLoading ? <Loader2 className="animate-spin" size={14} /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </motion.button>
  )
}
