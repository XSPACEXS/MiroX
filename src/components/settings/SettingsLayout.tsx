import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Plug, Github, Palette, Info } from 'lucide-react'

interface Tab {
  id: string
  label: string
  icon: ReactNode
}

const tabs: Tab[] = [
  { id: 'miro', label: 'Miro', icon: <Plug size={18} /> },
  { id: 'github', label: 'GitHub', icon: <Github size={18} /> },
  { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> },
  { id: 'about', label: 'About', icon: <Info size={18} /> },
]

interface SettingsLayoutProps {
  activeTab: string
  onTabChange: (tab: string) => void
  children: ReactNode
}

export function SettingsLayout({ activeTab, onTabChange, children }: SettingsLayoutProps) {
  return (
    <div className="flex gap-8 h-full">
      {/* Sidebar */}
      <nav className="w-48 flex-shrink-0 space-y-1">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150
              ${activeTab === tab.id
                ? 'bg-yellow-400/10 text-yellow-400'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }
            `}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  )
}
