import { useRef, useEffect } from 'react'
import { useChatStore } from '@stores/chatStore'
import { ChatMessageRenderer } from './ChatMessageRenderer'
import { RecentSessions } from './RecentSessions'
import type { ChatMode } from '@/types/chat'

const MODE_HINTS: Record<Exclude<ChatMode, 'chat'>, string> = {
  mission: 'Describe your mission and press \u2318\u23CE to launch',
  scan: 'Press \u2318\u23CE or click Scan Project to begin',
  debug: 'Paste an error message to start debugging',
}

export function ChatContent(): JSX.Element {
  const messages = useChatStore((s) => s.messages)
  const mode = useChatStore((s) => s.mode)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }, [messages.length])

  const isEmpty = messages.length === 0

  if (isEmpty && mode === 'chat') {
    return (
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth">
        <RecentSessions />
      </div>
    )
  }

  if (isEmpty) {
    return (
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth flex items-center justify-center">
        <p className="text-sm text-gray-500">{MODE_HINTS[mode as Exclude<ChatMode, 'chat'>]}</p>
      </div>
    )
  }

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
      {messages.map((msg) => (
        <ChatMessageRenderer key={msg.id} message={msg} />
      ))}
    </div>
  )
}
