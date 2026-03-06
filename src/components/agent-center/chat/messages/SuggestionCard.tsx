import { Bot } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import type { ChatMessage } from '@/types/chat'

interface SuggestionCardProps {
  message: ChatMessage
}

export default function SuggestionCard({ message }: SuggestionCardProps): JSX.Element {
  const setMode = useChatStore((s) => s.setMode)
  const setPendingInput = useChatStore((s) => s.setPendingInput)
  const actions = message.metadata?.actions ?? []

  function handleAction(action: { label: string; action: string; payload?: string }): void {
    if (action.action === 'launch-mission') {
      setMode('mission')
      setPendingInput(action.payload ?? '')
    } else if (action.action === 'copy') {
      void navigator.clipboard.writeText(action.payload ?? message.content)
    }
  }

  return (
    <div className="flex items-start gap-3">
      <div className="w-7 h-7 rounded-full bg-yellow-400/20 flex items-center justify-center shrink-0 mt-0.5">
        <Bot size={14} className="text-yellow-400" />
      </div>
      <div className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-4 max-w-[85%]">
        <p className="text-sm text-gray-200 mb-3">{message.content}</p>
        <div className="flex flex-wrap gap-2">
          {actions.map((action, i) => (
            <button
              key={i}
              onClick={() => handleAction(action)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black-700 border border-black-500 hover:border-yellow-400/30 text-xs text-gray-300 hover:text-white transition-colors"
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
