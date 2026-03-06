import { Search, Bug, FlaskConical, Shield, BookOpen } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import { runProjectScan } from '@services/chatService'

interface QuickAction {
  label: string
  icon: typeof Search
  handler: () => void
}

export function QuickActions(): JSX.Element {
  const config = useChatStore((s) => s.config)
  const setMode = useChatStore((s) => s.setMode)
  const setPendingInput = useChatStore((s) => s.setPendingInput)

  const actions: QuickAction[] = [
    {
      label: 'Scan Project',
      icon: Search,
      handler: () => {
        setMode('scan')
        void runProjectScan(config)
      },
    },
    {
      label: 'Fix Bugs',
      icon: Bug,
      handler: () => {
        setMode('mission')
        setPendingInput('Find and fix all bugs, type errors, and broken functionality.')
      },
    },
    {
      label: 'Add Tests',
      icon: FlaskConical,
      handler: () => {
        setMode('mission')
        setPendingInput('Write comprehensive tests for all untested code.')
      },
    },
    {
      label: 'Security Audit',
      icon: Shield,
      handler: () => {
        setMode('mission')
        setPendingInput('Perform a comprehensive security audit for OWASP top-10 vulnerabilities.')
      },
    },
    {
      label: 'Explain Codebase',
      icon: BookOpen,
      handler: () => {
        setMode('chat')
        setPendingInput('Explain the architecture and key patterns of this codebase.')
      },
    },
  ]

  return (
    <div className="flex flex-wrap gap-2 px-4 py-2">
      {actions.map(({ label, icon: Icon, handler }) => (
        <button
          key={label}
          onClick={handler}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black-700 border border-black-600 hover:border-yellow-400/30 hover:bg-yellow-400/5 text-xs text-gray-400 hover:text-gray-200 transition-colors"
        >
          <Icon size={12} />
          {label}
        </button>
      ))}
    </div>
  )
}
