import { motion } from 'framer-motion'
import { pageVariants } from '../design-system/animations'
import ImportHub from '../components/import/ImportHub'

export default function Import() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full overflow-y-auto p-8 max-w-3xl mx-auto"
    >
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-white">Import Your Project</h1>
        <p className="mt-2 text-gray-400">
          Upload files, connect a GitHub repo, or paste a URL. We'll analyze your content and suggest the best template.
        </p>
      </div>

      <ImportHub />
    </motion.div>
  )
}
