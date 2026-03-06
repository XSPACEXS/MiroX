import { Bot, AlertCircle } from 'lucide-react'
import type { ChatMessage } from '@/types/chat'
import { renderContent } from './markdownRenderer'

interface AssistantMessageProps {
  message: ChatMessage
}

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

export default function AssistantMessage({ message }: AssistantMessageProps): JSX.Element {
  const isError = message.type === 'error'

  return (
    <div className="flex items-start gap-3">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
          isError ? 'bg-red-400/20' : 'bg-yellow-400/20'
        }`}
      >
        {isError ? (
          <AlertCircle size={14} className="text-red-400" />
        ) : (
          <Bot size={14} className="text-yellow-400" />
        )}
      </div>
      <div className="max-w-[85%] min-w-0">
        <div
          className={`text-sm whitespace-pre-wrap break-words leading-relaxed ${
            isError ? 'text-red-400' : 'text-gray-200'
          }`}
        >
          {renderContent(message.content)}
        </div>
        <p className="text-[10px] text-gray-500 mt-1">{formatTime(message.timestamp)}</p>
      </div>
    </div>
  )
}
