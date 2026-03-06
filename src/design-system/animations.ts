import type { Variants } from 'framer-motion'

export const pageVariants: Variants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
}

export const cardVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  hover: {
    y: -4,
    boxShadow: '0 0 30px rgba(255, 214, 0, 0.3)',
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  tap: { scale: 0.98 },
}

export const modalVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const modalPanelVariants: Variants = {
  initial: { opacity: 0, scale: 0.94, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, scale: 0.96, y: 10, transition: { duration: 0.15 } },
}

export const sidebarVariants: Variants = {
  expanded: { width: 240, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  collapsed: { width: 64, transition: { type: 'spring', stiffness: 300, damping: 30 } },
}

export const listContainerVariants: Variants = {
  animate: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
}

export const listItemVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
}

export const toastVariants: Variants = {
  initial: { opacity: 0, x: 80, scale: 0.9 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 350, damping: 25 },
  },
  exit: { opacity: 0, x: 80, scale: 0.9, transition: { duration: 0.15 } },
}

export const buttonPressVariants: Variants = {
  initial: { scale: 1 },
  tap: { scale: 0.97 },
}

export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 250, damping: 25 },
  },
  exit: { opacity: 0, y: 30 },
}

export const stepVariants: Variants = {
  inactive: { opacity: 0.4, scale: 0.95 },
  active: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
  complete: { opacity: 1, scale: 1 },
}

export const spinnerVariants: Variants = {
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 1, ease: 'linear' },
  },
}

export const progressVariants = {
  initial: { scaleX: 0 },
  animate: (value: number) => ({
    scaleX: value / 100,
    transition: { type: 'spring', stiffness: 100, damping: 20 },
  }),
}

export const staggerContainer = (stagger = 0.05, delay = 0) => ({
  animate: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

export const pulseRingVariants: Variants = {
  active: {
    scale: [1, 1.4, 1],
    opacity: [0.5, 0, 0.5],
    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
  },
  inactive: {
    scale: 1,
    opacity: 0,
  },
}

export const typingDotsContainerVariants: Variants = {
  animate: {
    transition: { staggerChildren: 0.15 },
  },
}

export const typingDotVariants: Variants = {
  animate: {
    y: [0, -4, 0],
    opacity: [0.4, 1, 0.4],
    transition: { duration: 0.6, repeat: Infinity },
  },
}
