import { motion } from 'framer-motion'
import { pageVariants } from '../design-system/animations'
import { TemplateGallery } from '../components/templates/TemplateGallery'

export default function Templates() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="h-full overflow-y-auto p-6"
    >
      <h1 className="font-display font-bold text-4xl text-white mb-2">Board Templates</h1>
      <p className="text-black-300 mb-6">Choose from 30+ professional templates</p>
      <TemplateGallery />
    </motion.div>
  )
}
