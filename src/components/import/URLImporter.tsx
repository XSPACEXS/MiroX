import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Spinner } from '@components/ui/Spinner'
import type { ParsedContent } from '../../types/import'
import { suggestTemplate } from '../../services/fileParser'

interface URLImporterProps {
  onAnalysisReady?: (analysis: ParsedContent) => void
}

export default function URLImporter({ onAnalysisReady }: URLImporterProps) {
  const [url, setUrl] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [result, setResult] = useState<{ title: string; excerpt: string; content: ParsedContent } | null>(null)

  const isValidUrl = (s: string) => {
    try {
      new URL(s)
      return true
    } catch {
      return false
    }
  }

  const handleFetch = async () => {
    if (!url.trim() || !isValidUrl(url.trim())) {
      setError('Please enter a valid URL')
      return
    }

    setIsFetching(true)
    setError(null)
    setResult(null)

    try {
      const res = await window.electronAPI.files.fetchUrl(url.trim())
      if (!res.ok || !res.text) {
        setError(res.error || 'Failed to fetch URL')
        return
      }

      const text = res.text
      // Try DOMParser first for robust HTML parsing
      let title: string
      let headings: string[]
      try {
        const parser = new DOMParser()
        const doc = parser.parseFromString(text, 'text/html')
        title = doc.title || new URL(url).hostname
        headings = Array.from(doc.querySelectorAll('h1, h2, h3'))
          .map(h => h.textContent?.trim() || '')
          .filter(Boolean)
          .slice(0, 10)
      } catch {
        // Fallback to regex for non-browser environments
        const titleMatch = text.match(/<title[^>]*>(.*?)<\/title>/i)
        title = titleMatch?.[1]?.trim() || new URL(url).hostname
        headings = (text.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi) || [])
          .map(h => h.replace(/<[^>]+>/g, '').trim())
          .filter(Boolean)
          .slice(0, 10)
      }

      // Strip HTML for plain text excerpt
      const plainText = text
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

      const excerpt = plainText.slice(0, 300) + (plainText.length > 300 ? '...' : '')

      const content: ParsedContent = {
        rawText: plainText.slice(0, 5000),
        title,
        headings,
        keyPhrases: [],
        summary: excerpt.slice(0, 200),
        fileType: 'document',
        suggestedTemplate: 'brainstorm-session',
        confidence: 0.6,
      }

      content.suggestedTemplate = suggestTemplate(content)
      setResult({ title, excerpt, content })
      onAnalysisReady?.(content)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch URL')
    } finally {
      setIsFetching(false)
    }
  }

  return (
    <div className="space-y-4">
      {/* URL input */}
      <div className="flex gap-2">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.07-9.07l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
          </svg>
          <input
            type="url"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError(null) }}
            onKeyDown={(e) => e.key === 'Enter' && handleFetch()}
            placeholder="https://..."
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-black-800 border border-black-600 text-white text-sm placeholder:text-gray-500 focus:border-yellow-400/50 focus:outline-none focus:ring-1 focus:ring-yellow-400/20 transition-colors"
          />
        </div>
        <button
          onClick={handleFetch}
          disabled={!url.trim() || isFetching}
          className="px-5 py-3 rounded-lg bg-yellow-400 text-black font-semibold text-sm hover:bg-yellow-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center gap-2 whitespace-nowrap"
        >
          {isFetching ? (
            <>
              <Spinner size="sm" className="border-black/20 border-t-black" />
              Fetching...
            </>
          ) : (
            'Fetch & Analyze'
          )}
        </button>
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 p-3 rounded-lg bg-red-400/5 border border-red-400/20 text-red-400 text-sm"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state */}
      {!result && !isFetching && !error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center min-h-[220px] gap-3 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-black-700 flex items-center justify-center">
            <svg className="w-7 h-7 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          <div>
            <p className="text-gray-400 text-sm">Enter a URL to fetch and analyze web content</p>
            <p className="text-gray-600 text-xs mt-1">Works with articles, docs, blog posts, and more</p>
          </div>
        </motion.div>
      )}

      {/* Result */}
      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 rounded-lg bg-black-800/60 border border-black-600 space-y-3"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-400/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white">{result.title}</p>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{result.excerpt}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                {result.content.suggestedTemplate}
              </span>
              <span className="text-[10px] text-gray-600">
                {Math.round(result.content.confidence * 100)}% match
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
