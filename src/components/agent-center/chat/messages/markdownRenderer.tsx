import { CopyButton } from './CopyButton'

export function renderContent(content: string): JSX.Element {
  const blocks: JSX.Element[] = []
  const lines = content.split('\n')
  let codeBlock: string[] = []
  let inCodeBlock = false
  let blockIndex = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        const codeText = codeBlock.join('\n')
        blocks.push(
          <div key={blockIndex++} className="relative group mt-2 mb-2">
            <pre className="bg-black-900 rounded-xl p-3 overflow-x-auto">
              <code className="text-xs font-mono text-gray-300">{codeText}</code>
            </pre>
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <CopyButton text={codeText} />
            </div>
          </div>
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
    const codeText = codeBlock.join('\n')
    blocks.push(
      <div key={blockIndex++} className="relative group mt-2 mb-2">
        <pre className="bg-black-900 rounded-xl p-3 overflow-x-auto">
          <code className="text-xs font-mono text-gray-300">{codeText}</code>
        </pre>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <CopyButton text={codeText} />
        </div>
      </div>
    )
  }

  return <>{blocks}</>
}

export function renderInline(text: string): JSX.Element {
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
