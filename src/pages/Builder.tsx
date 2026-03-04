import { motion } from 'framer-motion'
import { pageVariants } from '../design-system/animations'
import { BoardWizard } from '../components/builder/BoardWizard'

export default function Builder() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full overflow-y-auto p-6"
    >
      <BoardWizard />
    </motion.div>
  )
}
