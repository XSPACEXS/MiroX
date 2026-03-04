import { motion } from 'framer-motion'

interface Tab {
  id: string
  label: string
  icon?: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
  className?: string
}

export function Tabs({ tabs, activeTab, onChange, className = '' }: TabsProps) {
  return (
    <div className={`flex gap-1 ${className}`}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            activeTab === tab.id ? 'text-yellow-400' : 'text-gray-400 hover:text-white'
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            {tab.icon}
            {tab.label}
          </span>
          {activeTab === tab.id && (
            <motion.div
              layoutId="tab-indicator"
              className="absolute inset-0 bg-yellow-400/10 rounded-lg"
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}

interface VerticalTabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
  className?: string
}

export function VerticalTabs({ tabs, activeTab, onChange, className = '' }: VerticalTabsProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl transition-colors text-left ${
            activeTab === tab.id ? 'text-yellow-400' : 'text-gray-400 hover:text-white'
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="vtab-indicator"
              className="absolute inset-0 bg-yellow-400/10 rounded-xl"
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-3">
            {tab.icon}
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  )
}
