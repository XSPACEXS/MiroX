import type { ParsedContent } from '../types/import'
import { suggestTemplate } from './fileParser'

export interface UrlParseResult {
  title: string
  excerpt: string
  content: ParsedContent
}

export async function fetchAndParseUrl(url: string): Promise<UrlParseResult> {
  const res = await window.electronAPI.files.fetchUrl(url.trim())
  if (!res.ok || !res.text) {
    throw new Error(res.error || 'Failed to fetch URL')
  }

  const text = res.text
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
    const titleMatch = text.match(/<title[^>]*>(.*?)<\/title>/i)
    title = titleMatch?.[1]?.trim() || new URL(url).hostname
    headings = (text.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi) || [])
      .map(h => h.replace(/<[^>]+>/g, '').trim())
      .filter(Boolean)
      .slice(0, 10)
  }

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

  return { title, excerpt, content }
}
