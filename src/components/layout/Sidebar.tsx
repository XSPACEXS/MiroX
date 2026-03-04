import { motion } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, LayoutGrid, Upload, Zap, Settings2, PanelLeftClose, PanelLeft } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'
import { useMiro } from '../../hooks/useMiro'
import { sidebarVariants } from '../../design-system/animations'
import { Tooltip } from '../ui/Tooltip'

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/templates', label: 'Templates', icon: LayoutGrid },
  { path: '/import', label: 'Import', icon: Upload },
  { path: '/builder', label: 'Builder', icon: Zap },
  { path: '/settings', label: 'Settings', icon: Settings2 },
]

interface SidebarProps {
  collapsed: boolean
}

export function Sidebar({ collapsed }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const toggleSidebar = useUIStore(s => s.toggleSidebar)
  const { isConnected } = useMiro()

  return (
    <motion.aside
      variants={sidebarVariants}
      animate={collapsed ? 'collapsed' : 'expanded'}
      className="flex flex-col h-full bg-black-800 border-r border-black-600 overflow-hidden flex-shrink-0"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 h-14 flex-shrink-0 border-b border-black-600">
        <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
          <span className="text-black font-bold text-sm">M</span>
        </div>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display font-bold text-white text-lg whitespace-nowrap"
          >
            MiroX
          </motion.span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-3 px-2 flex flex-col gap-1">
        {navItems.map(item => {
          const isActive = location.pathname === item.path
          const Icon = item.icon
          const button = (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
                ${isActive
                  ? 'bg-yellow-400/10 text-yellow-400 border-l-4 border-yellow-400'
                  : 'text-gray-400 hover:text-white hover:bg-black-700 border-l-4 border-transparent'
                }
              `}
            >
              <Icon size={20} className="flex-shrink-0" />
              {!collapsed && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="whitespace-nowrap">
                  {item.label}
                </motion.span>
              )}
            </button>
          )

          return collapsed ? (
            <Tooltip key={item.path} content={item.label} placement="right">
              {button}
            </Tooltip>
          ) : button
        })}
      </nav>

      {/* Bottom controls */}
      <div className="px-2 pb-3 flex flex-col gap-2">
        {/* Collapse toggle */}
        <button
          onClick={toggleSidebar}
          className="flex items-center justify-center w-full p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          {collapsed ? <PanelLeft size={18} /> : <PanelLeftClose size={18} />}
        </button>

        {/* Miro connection indicator */}
        <div className="flex items-center gap-2 px-3 py-2">
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
          {!collapsed && (
            <span className="text-xs text-gray-500 whitespace-nowrap">
              {isConnected ? 'Miro Connected' : 'Disconnected'}
            </span>
          )}
        </div>
      </div>
    </motion.aside>
  )
}
