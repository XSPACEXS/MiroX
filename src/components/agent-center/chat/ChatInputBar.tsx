import { useRef, useEffect, useCallback } from 'react'
import { ArrowUp, Square } from 'lucide-react'
import { useChatStore } from '@stores/chatStore'
import type { ChatMode } from '@/types/chat'

interface Props {
  onSubmit: (text: string) => void
  onStop: () => void
}

const PLACEHOLDERS: Record<ChatMode, string> = {
  chat: 'Ask about the codebase...',
  mission: 'Describe your mission...',
  scan: 'Customize scan focus or press \u2318\u23CE...',
  debug: 'Paste an error or describe the bug...',
}

export function ChatInputBar({ onSubmit, onStop }: Props): JSX.Element {
  const mode = useChatStore((s) => s.mode)
  const isStreaming = useChatStore((s) => s.isStreaming)
  const config = useChatStore((s) => s.config)
  const pendingInput = useChatStore((s) => s.pendingInput)
  const setPendingInput = useChatStore((s) => s.setPendingInput)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const autoResize = useCallback(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    const maxHeight = 6 * 24
    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`
  }, [])

  useEffect(() => {
    if (pendingInput && textareaRef.current) {
      textareaRef.current.value = pendingInput
      setPendingInput('')
      autoResize()
      textareaRef.current.focus()
    }
  }, [pendingInput, setPendingInput, autoResize])

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>): void {
    if (e.key === 'Enter' && e.metaKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const isBusy = isStreaming || config.isLocked

  function handleSubmit(): void {
    if (isBusy) return
    const text = textareaRef.current?.value.trim() ?? ''
    if (!text && mode !== 'scan') return
    onSubmit(text)
    if (textareaRef.current) {
      textareaRef.current.value = ''
      autoResize()
    }
  }

  function handleStop(): void {
    onStop()
  }

  return (
    <div className="border-t border-black-600 p-3">
      <div className="flex items-end gap-2">
        <textarea
          ref={textareaRef}
          rows={1}
          placeholder={PLACEHOLDERS[mode]}
          disabled={isBusy}
          onChange={autoResize}
          onKeyDown={handleKeyDown}
          className="w-full resize-none bg-black-700 border border-black-500 rounded-xl text-sm text-white placeholder-gray-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 disabled:opacity-50"
        />
        {isBusy ? (
          <button
            onClick={handleStop}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors"
            aria-label="Stop streaming"
          >
            <Square size={14} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-yellow-400 text-black-900 hover:bg-yellow-300 transition-colors"
            aria-label="Send message"
          >
            <ArrowUp size={16} strokeWidth={2.5} />
          </button>
        )}
      </div>
      <div className="text-xs text-gray-500 mt-1 px-1">
        {config.projectDir ? `project: ${config.projectDir}` : 'No project set'}
      </div>
    </div>
  )
}
