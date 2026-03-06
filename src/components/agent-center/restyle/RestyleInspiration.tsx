import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Upload, Link, Type, X, Globe, Check } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { Card } from '@components/ui/Card'
import { Badge } from '@components/ui/Badge'
import { useRestyleStore } from '@stores/restyleStore'
import { listContainerVariants, listItemVariants } from '@design-system/animations'

const STYLE_KEYWORDS = ['dark', 'light', 'minimal', 'glass', 'gradient', 'neon', 'flat', 'modern', 'retro', 'brutalist']

function detectTags(html: string): string[] {
  const lower = html.toLowerCase()
  return STYLE_KEYWORDS.filter((kw) => lower.includes(kw))
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>(.*?)<\/title>/i)
  return match?.[1]?.trim() || 'Untitled'
}

export function RestyleInspiration(): JSX.Element {
  const setStep = useRestyleStore((s) => s.setStep)
  const images = useRestyleStore((s) => s.inspirationImages)
  const addImage = useRestyleStore((s) => s.addImage)
  const removeImage = useRestyleStore((s) => s.removeImage)
  const toggleImageSelection = useRestyleStore((s) => s.toggleImageSelection)
  const urlRefs = useRestyleStore((s) => s.urlReferences)
  const addUrl = useRestyleStore((s) => s.addUrl)
  const removeUrl = useRestyleStore((s) => s.removeUrl)
  const toggleUrlSelection = useRestyleStore((s) => s.toggleUrlSelection)
  const freeTextVision = useRestyleStore((s) => s.freeTextVision)
  const setFreeText = useRestyleStore((s) => s.setFreeText)

  const [urlInput, setUrlInput] = useState('')
  const [isAddingUrl, setIsAddingUrl] = useState(false)

  const handleImageUpload = useCallback(async () => {
    const paths = await window.electronAPI.files.openDialog({
      filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'webp'] }],
      properties: ['openFile', 'multiSelections'],
    })
    if (!paths) return

    for (const filePath of paths) {
      if (images.length >= 8) break
      const result = await window.electronAPI.files.readFile(filePath)
      if (result.ok && result.content) {
        const ext = result.ext || 'png'
        const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'webp' ? 'image/webp' : 'image/png'
        addImage({
          id: crypto.randomUUID(),
          dataUrl: `data:${mime};base64,${result.content}`,
          selected: true,
          fileName: result.name || filePath.split('/').pop() || 'image',
        })
      }
    }
  }, [images.length, addImage])

  const handleAddUrl = useCallback(async () => {
    const trimmed = urlInput.trim()
    if (!trimmed) return
    setIsAddingUrl(true)

    try {
      let url = trimmed
      if (!url.startsWith('http')) url = 'https://' + url
      const domain = new URL(url).hostname
      const fetchResult = await window.electronAPI.files.fetchUrl(url)

      const html = fetchResult.ok ? (fetchResult.text || '') : ''
      const title = html ? extractTitle(html) : domain
      const tags = html ? detectTags(html) : []

      addUrl({
        id: crypto.randomUUID(),
        url,
        title,
        domain,
        tags,
        selected: true,
        fetchedHtml: html,
      })
      setUrlInput('')
    } catch {
      // URL fetch failed silently
    } finally {
      setIsAddingUrl(false)
    }
  }, [urlInput, addUrl])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      const files = Array.from(e.dataTransfer.files)
      for (const file of files) {
        if (images.length >= 8) break
        if (!file.type.startsWith('image/')) continue
        const reader = new FileReader()
        reader.onload = () => {
          addImage({
            id: crypto.randomUUID(),
            dataUrl: reader.result as string,
            selected: true,
            fileName: file.name,
          })
        }
        reader.readAsDataURL(file)
      }
    },
    [images.length, addImage]
  )

  return (
    <motion.div
      variants={listContainerVariants}
      initial="initial"
      animate="animate"
      className="px-8 py-8 space-y-6"
    >
      {/* A. Screenshot Upload */}
      <motion.div variants={listItemVariants}>
        <div className="flex items-center gap-2 mb-3">
          <Upload size={14} className="text-purple-400" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Screenshots &amp; Inspiration
          </span>
          <span className="text-xs text-gray-600">({images.length}/8)</span>
        </div>

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={handleImageUpload}
          className="border-2 border-dashed border-purple-400/30 rounded-xl p-8 text-center cursor-pointer hover:border-purple-400/50 hover:bg-purple-400/[0.03] transition-all"
        >
          <Upload size={24} className="text-purple-400/60 mx-auto mb-2" />
          <p className="text-sm text-gray-400">Drop images here or click to browse</p>
          <p className="text-xs text-gray-600 mt-1">PNG, JPG, WebP</p>
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-4 gap-2 mt-3">
            {images.map((img) => (
              <div
                key={img.id}
                onClick={() => toggleImageSelection(img.id)}
                className={`relative rounded-xl overflow-hidden border-2 cursor-pointer transition-all aspect-video ${
                  img.selected
                    ? 'border-purple-400 shadow-[0_0_12px_rgba(167,139,250,0.2)]'
                    : 'border-black-600 opacity-60'
                }`}
              >
                <img
                  src={img.dataUrl}
                  alt={img.fileName}
                  className="w-full h-full object-cover"
                />
                {img.selected && (
                  <div className="absolute top-1 left-1">
                    <Check size={14} className="text-purple-400 bg-black/60 rounded-full p-0.5" />
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    removeImage(img.id)
                  }}
                  className="absolute top-1 right-1 p-0.5 bg-black/60 rounded-full text-gray-400 hover:text-white"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* B. Website URLs */}
      <motion.div variants={listItemVariants}>
        <div className="flex items-center gap-2 mb-3">
          <Link size={14} className="text-purple-400" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Website References
          </span>
        </div>

        <div className="flex gap-2 mb-3">
          <input
            type="text"
            placeholder="https://example.com"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') void handleAddUrl()
            }}
            className="flex-1 bg-black-700 border border-black-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-purple-400/50"
          />
          <Button
            variant="secondary"
            size="sm"
            onClick={handleAddUrl}
            isLoading={isAddingUrl}
            className="!border-purple-400/30 !text-purple-400 hover:!bg-purple-400/10"
          >
            Add
          </Button>
        </div>

        {urlRefs.length > 0 && (
          <div className="space-y-2">
            {urlRefs.map((ref) => (
              <Card
                key={ref.id}
                variant="default"
                className={`p-3 cursor-pointer transition-all ${
                  ref.selected ? 'border-purple-400/50' : ''
                }`}
                onClick={() => toggleUrlSelection(ref.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <Globe size={14} className="text-purple-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-sm text-white truncate">{ref.title}</div>
                      <div className="text-xs text-gray-500 truncate">{ref.domain}</div>
                    </div>
                    {ref.tags.length > 0 && (
                      <div className="flex gap-1 flex-shrink-0">
                        {ref.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} color="purple" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      removeUrl(ref.id)
                    }}
                    className="p-1 text-gray-500 hover:text-red-400 transition-colors flex-shrink-0"
                  >
                    <X size={14} />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </motion.div>

      {/* C. Free Text */}
      <motion.div variants={listItemVariants}>
        <div className="flex items-center gap-2 mb-3">
          <Type size={14} className="text-purple-400" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Describe Your Vision
          </span>
        </div>
        <textarea
          placeholder="e.g. I want something like Linear's clean feel but with warmer colors..."
          value={freeTextVision}
          onChange={(e) => setFreeText(e.target.value)}
          rows={3}
          className="w-full bg-black-700 border border-black-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 resize-none focus:outline-none focus:ring-1 focus:ring-purple-400/50"
        />
      </motion.div>

      {/* Navigation */}
      <motion.div variants={listItemVariants} className="flex justify-between pt-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStep(2)}
        >
          Back
        </Button>
        <Button
          variant="primary"
          size="md"
          onClick={() => setStep(4)}
          className="!bg-purple-400 !text-white hover:!bg-purple-500 !shadow-none"
        >
          Next
        </Button>
      </motion.div>
    </motion.div>
  )
}
