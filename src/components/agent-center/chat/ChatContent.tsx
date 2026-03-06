import { useRef, useEffect } from 'react'
import { useChatStore } from '@stores/chatStore'
import { ChatMessageRenderer } from './ChatMessageRenderer'
import { RecentSessions } from './RecentSessions'
import type { ChatMode } from '@/types/chat'

const MODE_EMPTY: Record<Exclude<ChatMode, 'chat'>, { heading: string; sub: string }> = {
  mission: {
    heading: 'Ready to execute.',
    sub: 'Describe your mission and press \u2318\u23CE to launch.',
  },
  scan: {
    heading: 'Project health check.',
    sub: 'Press \u2318\u23CE or click a scan action below to begin.',
  },
  debug: {
    heading: 'Paste an error, I\'ll trace it.',
    sub: 'Drop a stack trace or describe the bug to start debugging.',
  },
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
    const empty = MODE_EMPTY[mode as Exclude<ChatMode, 'chat'>]
    return (
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-gray-400 font-medium">{empty.heading}</p>
          <p className="text-xs text-gray-600 mt-1">{empty.sub}</p>
        </div>
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
