import { useLocation, useNavigate } from 'react-router-dom'
import { Search, Settings2 } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/templates': 'Templates',
  '/import': 'Import',
  '/builder': 'Board Builder',
  '/settings': 'Settings',
  '/agent-center': 'Agent Command Center',
}

export function TopBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const toggleSearch = useUIStore(s => s.toggleSearch)
  const title = pageTitles[location.pathname] || 'MiroX'

  return (
    <div className="drag-region h-9 flex items-center justify-between px-4 bg-black-800/50 border-b border-black-700 flex-shrink-0">
      {/* Spacer for macOS traffic lights */}
      <div className="w-16 flex-shrink-0" />

      {/* Center: page title */}
      <span className="text-xs font-medium text-gray-400 select-none">{title}</span>

      {/* Right: actions */}
      <div className="no-drag flex items-center gap-1">
        <button
          onClick={toggleSearch}
          aria-label="Search"
          className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Search size={14} />
        </button>
        <button
          onClick={() => navigate('/settings')}
          aria-label="Settings"
          className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Settings2 size={14} />
        </button>
      </div>
    </div>
  )
}
