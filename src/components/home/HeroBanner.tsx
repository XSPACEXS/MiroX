import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { slideUpVariants, listContainerVariants, listItemVariants } from '../../design-system/animations'

export function HeroBanner() {
  const navigate = useNavigate()
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-400/20 via-black-800 to-black-900 p-12 mb-8"
      variants={slideUpVariants}
      initial="initial"
      animate="animate"
    >
      {/* Yellow glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,214,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,214,0,0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        className="relative z-10"
        variants={listContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={listItemVariants} className="flex items-center gap-3 mb-4">
          <span className="text-yellow-400 font-mono text-sm tracking-widest uppercase">
            v1.0.0
          </span>
          <div className="w-px h-4 bg-black-500" />
          <span className="text-gray-400 text-sm">Enterprise Board Builder</span>
        </motion.div>

        <motion.h1
          variants={listItemVariants}
          className="font-display font-extrabold text-7xl text-white mb-4 leading-tight"
        >
          Miro<span className="text-yellow-400">X</span>
        </motion.h1>

        <motion.p
          variants={listItemVariants}
          className="font-body text-black-300 text-xl mb-8 max-w-xl leading-relaxed"
        >
          Turn any idea into a professional Miro board — instantly. 30+ templates, file import,
          GitHub integration.
        </motion.p>

        <motion.div variants={listItemVariants} className="flex gap-4">
          <button
            onClick={() => navigate('/templates')}
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition-all hover:-translate-y-0.5 hover:shadow-yellow-glow active:scale-95"
          >
            Browse Templates →
          </button>
          <button
            onClick={() => navigate('/import')}
            className="px-6 py-3 border border-yellow-400/50 text-yellow-400 font-semibold rounded-xl hover:bg-yellow-400/10 hover:border-yellow-400 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            Import Project
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
