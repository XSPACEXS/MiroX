import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { listContainerVariants, listItemVariants } from '../../design-system/animations'

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
    description: 'Start from 30+ professional templates',
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
          whileHover={{ y: -4, boxShadow: '0 0 30px rgba(255, 214, 0, 0.3)' }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleClick(action.path)}
          className="glass rounded-xl p-6 text-left transition-all duration-200 hover:border-yellow-400/30 cursor-pointer"
        >
          <div className="text-4xl mb-3">{action.emoji}</div>
          <div className="font-display font-bold text-lg text-white mb-1">{action.title}</div>
          <div className="text-black-300 text-sm leading-relaxed">{action.description}</div>
        </motion.button>
      ))}
    </motion.div>
  )
}
