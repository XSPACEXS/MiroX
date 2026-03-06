import { Search, Bug, FlaskConical, Shield, BookOpen, Zap, FileSearch, Terminal, TestTube2 } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import { runProjectScan } from '@services/chatService'
import type { ChatMode } from '@/types/chat'

interface QuickAction {
  label: string
  icon: typeof Search
  handler: () => void
}

function buildActions(
  config: ReturnType<typeof useChatStore.getState>['config'],
  setMode: (m: ChatMode) => void,
  setPendingInput: (t: string) => void,
): Record<ChatMode, QuickAction[]> {
  return {
    chat: [
      {
        label: 'Explain Codebase',
        icon: BookOpen,
        handler: () => {
          setMode('chat')
          setPendingInput('Explain the architecture and key patterns of this codebase.')
        },
      },
      {
        label: 'Scan Project',
        icon: Search,
        handler: () => {
          setMode('scan')
          void runProjectScan(config)
        },
      },
    ],
    mission: [
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
        label: 'Refactor',
        icon: Zap,
        handler: () => {
          setMode('mission')
          setPendingInput('Refactor the codebase for clarity, performance, and maintainability.')
        },
      },
    ],
    scan: [
      {
        label: 'Full Scan',
        icon: Search,
        handler: () => {
          setMode('scan')
          void runProjectScan(config)
        },
      },
      {
        label: 'Security Only',
        icon: Shield,
        handler: () => {
          setMode('scan')
          setPendingInput('Focus on security vulnerabilities and OWASP top-10 issues.')
        },
      },
    ],
    debug: [
      {
        label: 'Run Tests',
        icon: TestTube2,
        handler: () => {
          setMode('debug')
          setPendingInput('Run the test suite and analyze any failures.')
        },
      },
      {
        label: 'Trace Error',
        icon: FileSearch,
        handler: () => {
          setMode('debug')
          setPendingInput('Trace the root cause of the most recent error in the codebase.')
        },
      },
      {
        label: 'Check Console',
        icon: Terminal,
        handler: () => {
          setMode('debug')
          setPendingInput('Check for console errors, warnings, and unhandled promise rejections.')
        },
      },
    ],
  }
}

export function QuickActions(): JSX.Element {
  const mode = useChatStore((s) => s.mode)
  const config = useChatStore((s) => s.config)
  const setMode = useChatStore((s) => s.setMode)
  const setPendingInput = useChatStore((s) => s.setPendingInput)

  const allActions = buildActions(config, setMode, setPendingInput)
  const actions = allActions[mode]

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
