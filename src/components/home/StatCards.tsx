import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'
import { listContainerVariants, listItemVariants } from '../../design-system/animations'
import { useBoardStore } from '../../stores/boardStore'
import { useSettingsStore } from '../../stores/settingsStore'

function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.2, ease: 'easeOut' })
    return controls.stop
  }, [count, value])

  return <motion.span>{rounded}</motion.span>
}

interface StatCardProps {
  label: string
  value: number
  suffix?: string
}

function StatCard({ label, value, suffix }: StatCardProps) {
  return (
    <motion.div
      variants={listItemVariants}
      className="glass rounded-xl p-6 flex flex-col items-center justify-center text-center"
    >
      <div className="font-display font-extrabold text-4xl text-yellow-400 mb-2">
        <AnimatedNumber value={value} />
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="text-gray-400 text-sm font-medium">{label}</div>
    </motion.div>
  )
}

export function StatCards() {
  const totalBoardsCreated = useBoardStore((s) => s.totalBoardsCreated)
  const filesImported = useSettingsStore((s) => s.filesImported)

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
    >
      <StatCard label="Boards Created" value={totalBoardsCreated} />
      <StatCard label="Templates Available" value={30} suffix="+" />
      <StatCard label="Imports Processed" value={filesImported} />
    </motion.div>
  )
}
