import type { ChatMessage } from '@/types/chat'

interface UserMessageProps {
  message: ChatMessage
}

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

export default function UserMessage({ message }: UserMessageProps): JSX.Element {
  return (
    <div className="flex justify-end">
      <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-black-700 px-4 py-3">
        <p className="text-sm text-white whitespace-pre-wrap break-words">{message.content}</p>
        <p className="text-[10px] text-gray-500 mt-1 text-right">{formatTime(message.timestamp)}</p>
      </div>
    </div>
  )
}
