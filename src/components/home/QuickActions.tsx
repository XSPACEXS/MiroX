import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { listContainerVariants, listItemVariants } from '../../design-system/animations'
import { ALL_TEMPLATES } from '@templates/index'

interface ActionItem {
  emoji: string
  title: string
  description: string
  path: string
}

const actions: ActionItem[] = [
  {
    emoji: '\u2728',
    title: 'New Board',
    description: `Start from ${ALL_TEMPLATES.length}+ professional templates`,
    path: '/templates',
  },
  {
    emoji: '\uD83D\uDCC1',
    title: 'Import File',
    description: 'Upload PDF, DOCX, CSV, and more',
    path: '/import?tab=file',
  },
  {
    emoji: '\uD83D\uDD17',
    title: 'GitHub Project',
    description: 'Connect your repos in seconds',
    path: '/import?tab=github',
  },
  {
    emoji: '\uD83D\uDCCB',
    title: 'Recent Boards',
    description: 'View your last 10 boards',
    path: '#recent',
  },
]

export function QuickActions() {
  const navigate = useNavigate()

  const handleClick = (path: string) => {
    if (path === '#recent') {
      document.getElementById('recent-boards')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(path)
    }
  }

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
    >
      {actions.map((action) => (
        <motion.button
          key={action.title}
          variants={listItemVariants}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleClick(action.path)}
          className="glass rounded-xl p-6 text-left transition-all duration-200 hover:border-yellow-400/30 hover:shadow-yellow-glow cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50 focus-visible:ring-offset-1 focus-visible:ring-offset-black-900"
        >
          <div className="text-4xl mb-3">{action.emoji}</div>
          <div className="font-display font-bold text-lg text-white mb-1">{action.title}</div>
          <div className="text-gray-400 text-sm leading-relaxed">{action.description}</div>
        </motion.button>
      ))}
    </motion.div>
  )
}
