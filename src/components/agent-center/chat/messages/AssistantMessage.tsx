import { Bot, AlertCircle } from 'lucide-react'
import type { ChatMessage } from '@/types/chat'

interface AssistantMessageProps {
  message: ChatMessage
}

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

function renderContent(content: string): JSX.Element {
  const blocks: JSX.Element[] = []
  const lines = content.split('\n')
  let codeBlock: string[] = []
  let inCodeBlock = false
  let blockIndex = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        blocks.push(
          <pre key={blockIndex++} className="bg-black-900 rounded-xl p-3 mt-2 mb-2 overflow-x-auto">
            <code className="text-xs font-mono text-gray-300">{codeBlock.join('\n')}</code>
          </pre>
        )
        codeBlock = []
        inCodeBlock = false
      } else {
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      codeBlock.push(line)
      continue
    }

    if (line.match(/^[-*]\s/)) {
      // Collect consecutive list items
      const items: string[] = [line.replace(/^[-*]\s/, '')]
      while (i + 1 < lines.length && lines[i + 1]!.match(/^[-*]\s/)) {
        i++
        items.push(lines[i]!.replace(/^[-*]\s/, ''))
      }
      blocks.push(
        <ul key={blockIndex++} className="list-disc list-inside space-y-0.5 my-1">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>
      )
      continue
    }

    if (line.trim() === '') {
      blocks.push(<br key={blockIndex++} />)
    } else {
      blocks.push(<p key={blockIndex++}>{renderInline(line)}</p>)
    }
  }

  // Handle unclosed code block
  if (inCodeBlock && codeBlock.length > 0) {
    blocks.push(
      <pre key={blockIndex++} className="bg-black-900 rounded-xl p-3 mt-2 mb-2 overflow-x-auto">
        <code className="text-xs font-mono text-gray-300">{codeBlock.join('\n')}</code>
      </pre>
    )
  }

  return <>{blocks}</>
}

function renderInline(text: string): JSX.Element {
  const parts: (string | JSX.Element)[] = []
  let remaining = text
  let key = 0

  while (remaining.length > 0) {
    // Match **bold**
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/)
    // Match `code`
    const codeMatch = remaining.match(/`([^`]+)`/)

    // Find earliest match
    const boldIdx = boldMatch?.index ?? Infinity
    const codeIdx = codeMatch?.index ?? Infinity

    if (boldIdx === Infinity && codeIdx === Infinity) {
      parts.push(remaining)
      break
    }

    if (boldIdx <= codeIdx && boldMatch) {
      parts.push(remaining.slice(0, boldIdx))
      parts.push(<strong key={key++}>{boldMatch[1]}</strong>)
      remaining = remaining.slice(boldIdx + boldMatch[0].length)
    } else if (codeMatch) {
      parts.push(remaining.slice(0, codeIdx))
      parts.push(
        <code key={key++} className="bg-black-700 px-1.5 py-0.5 rounded text-yellow-400 text-xs font-mono">
          {codeMatch[1]}
        </code>
      )
      remaining = remaining.slice(codeIdx + codeMatch[0].length)
    }
  }

  return <>{parts}</>
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
