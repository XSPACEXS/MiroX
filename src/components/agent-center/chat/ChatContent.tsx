import { useRef, useEffect, useState, useCallback } from 'react'
import { ChevronDown } from 'lucide-react'
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
  const [isAtBottom, setIsAtBottom] = useState(true)
  const [newCount, setNewCount] = useState(0)
  const prevLengthRef = useRef(messages.length)

  const checkAtBottom = useCallback(() => {
    const el = scrollRef.current
    if (!el) return true
    return el.scrollHeight - el.scrollTop - el.clientHeight < 50
  }, [])

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }
    setNewCount(0)
    setIsAtBottom(true)
  }, [])

  const handleScroll = useCallback(() => {
    const atBottom = checkAtBottom()
    setIsAtBottom(atBottom)
    if (atBottom) setNewCount(0)
  }, [checkAtBottom])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    // Count new messages when scrolled away
    const diff = messages.length - prevLengthRef.current
    prevLengthRef.current = messages.length
    if (diff > 0 && !checkAtBottom()) {
      setNewCount((c) => c + diff)
    }

    // Auto-scroll only when at bottom
    if (checkAtBottom()) {
      el.scrollTop = el.scrollHeight
    }
  }, [messages.length, checkAtBottom])

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
    <div className="relative flex-1 min-h-0">
      <div ref={scrollRef} onScroll={handleScroll} className="h-full overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
        {messages.map((msg) => (
          <ChatMessageRenderer key={msg.id} message={msg} />
        ))}
      </div>

      {/* B11: Scroll-to-bottom button */}
      {!isAtBottom && (
        <button
          onClick={scrollToBottom}
          aria-label={newCount > 0 ? `${newCount} new messages, scroll to bottom` : 'Scroll to bottom'}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black-700 border border-black-500 hover:border-yellow-400/30 text-xs text-gray-400 hover:text-white shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50"
        >
          <ChevronDown size={14} />
          {newCount > 0 ? `${newCount} new` : 'Scroll to bottom'}
        </button>
      )}
    </div>
  )
}
