import { useState } from 'react'
import { ImageIcon, Play, Download, Maximize2 } from 'lucide-react'
import { Modal } from '@components/ui/Modal'
import { Button } from '@components/ui/Button'

interface MediaLogEntryProps {
  text: string
  mediaUrl: string
  mediaMimeType?: string
}

export function MediaLogEntry({ text, mediaUrl, mediaMimeType }: MediaLogEntryProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false)
  const isVideo = mediaMimeType?.startsWith('video/')
  const isStripped = mediaUrl === '[media stripped from history]'

  if (isStripped) {
    return (
      <span className="text-orange-400/60 flex items-center gap-1.5">
        {isVideo ? <Play size={12} /> : <ImageIcon size={12} />}
        {text} (media removed from history)
      </span>
    )
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <span className="text-orange-400 flex items-center gap-1.5">
          {isVideo ? <Play size={12} /> : <ImageIcon size={12} />}
          {text}
        </span>

        <div className="relative group w-fit">
          {isVideo ? (
            <video
              src={mediaUrl}
              controls
              className="max-w-sm max-h-48 rounded-lg border border-black-600"
            />
          ) : (
            <img
              src={mediaUrl}
              alt={text}
              className="max-w-xs max-h-48 rounded-lg border border-black-600 cursor-pointer"
              onClick={() => setIsExpanded(true)}
            />
          )}

          {!isVideo && (
            <button
              onClick={() => setIsExpanded(true)}
              className="absolute top-2 right-2 p-1 bg-black-800/80 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Expand image"
            >
              <Maximize2 size={14} className="text-white" />
            </button>
          )}
        </div>
      </div>

      {!isVideo && (
        <Modal isOpen={isExpanded} onClose={() => setIsExpanded(false)} title={text} size="xl">
          <div className="p-4 flex flex-col items-center gap-4">
            <img src={mediaUrl} alt={text} className="max-w-full max-h-[70vh] rounded-lg" />
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<Download size={14} />}
              onClick={() => {
                const a = document.createElement('a')
                a.href = mediaUrl
                a.download = `mirox-generated-${Date.now()}.png`
                a.click()
              }}
            >
              Download
            </Button>
          </div>
        </Modal>
      )}
    </>
  )
}
