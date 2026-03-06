import { MessageSquare, Rocket, Search, Bug } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import type { ChatMode } from '@/types/chat'

interface TabDef {
  mode: ChatMode
  label: string
  icon: typeof MessageSquare
}

const TABS: TabDef[] = [
  { mode: 'chat', label: 'Chat', icon: MessageSquare },
  { mode: 'mission', label: 'Mission', icon: Rocket },
  { mode: 'scan', label: 'Scan', icon: Search },
  { mode: 'debug', label: 'Debug', icon: Bug },
]

export function ModeTabBar(): JSX.Element {
  const activeMode = useChatStore((s) => s.mode)
  const setMode = useChatStore((s) => s.setMode)

  return (
    <div className="flex border-b border-black-600" role="tablist">
      {TABS.map(({ mode, label, icon: Icon }) => {
        const isActive = activeMode === mode
        return (
          <button
            key={mode}
            role="tab"
            aria-selected={isActive}
            onClick={() => setMode(mode)}
            className={`
              flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium transition-colors
              ${isActive
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-gray-200'}
            `}
          >
            <Icon size={14} />
            {label}
          </button>
        )
      })}
    </div>
  )
}
