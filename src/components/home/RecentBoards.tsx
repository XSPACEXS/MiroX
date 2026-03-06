import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { listContainerVariants, listItemVariants } from '../../design-system/animations'
import { useBoardStore } from '../../stores/boardStore'
import { Button } from '@components/ui/Button'
import { Badge } from '@components/ui/Badge'

function EmptyState() {
  const navigate = useNavigate()
  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-4 opacity-30">{'\uD83D\uDCCB'}</div>
      <p className="text-gray-400 text-lg mb-4">No boards yet. Create your first board!</p>
      <Button variant="primary" size="md" onClick={() => navigate('/templates')}>
        Browse Templates
      </Button>
    </div>
  )
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 7) return `${diffDays}d ago`
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function RecentBoards() {
  const recentBoards = useBoardStore((s) => s.recentBoards)

  return (
    <div id="recent-boards">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-bold text-2xl text-white">Recent Boards</h2>
        {recentBoards.length > 0 && (
          <span className="text-gray-400 text-sm">{recentBoards.length} boards</span>
        )}
      </div>

      {recentBoards.length === 0 ? (
        <EmptyState />
      ) : (
        <motion.div
          className="space-y-2"
          variants={listContainerVariants}
          initial="initial"
          animate="animate"
        >
          {recentBoards.map((board) => (
            <motion.a
              key={board.id}
              variants={listItemVariants}
              href={board.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between glass rounded-xl px-5 py-4 hover:border-yellow-400/30 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-400 font-display font-bold text-sm">
                    {board.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white truncate" title={board.name}>{board.name}</div>
                  <div className="text-gray-400 text-sm flex items-center gap-2">
                    <Badge color="yellow">
                      {board.templateName}
                    </Badge>
                    <span>{formatDate(board.createdAt)}</span>
                  </div>
                </div>
              </div>
              <span className="text-gray-500 group-hover:text-yellow-400 transition-colors text-sm font-medium flex-shrink-0">
                Open →
              </span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  )
}
