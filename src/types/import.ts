export interface ParsedContent {
  rawText: string
  title: string
  headings: string[]
  keyPhrases: string[]
  summary: string
  dataRows?: Record<string, string>[]
  structure?: { type: string; items: string[] }[]
  fileType: 'document' | 'spreadsheet' | 'code' | 'archive' | 'image' | 'other'
  detectedLanguage?: string
  suggestedTemplate: string
  confidence: number  // 0-1
  extractedFields?: Record<string, string>  // Pre-filled template field values
}

export interface ImportedFile {
  id: string
  name: string
  size: number
  type: string
  path: string
  content?: ParsedContent
  status: 'uploading' | 'parsing' | 'ready' | 'error'
  error?: string
  importedAt: Date
}

export type ImportTab = 'file' | 'github' | 'url'
