import { useState, useCallback, useRef } from 'react'
import type { ImportedFile } from '../types/import'
import { parseFileContent, suggestTemplate } from '../services/fileParser'
import { logger } from '../utils/logger'
import { useUIStore } from '../stores/uiStore'
import { useSettingsStore } from '../stores/settingsStore'

interface UseFileImportReturn {
  files: ImportedFile[]
  isDragging: boolean
  isParsingFile: boolean
  onDragOver: (e: React.DragEvent) => void
  onDragLeave: (e: React.DragEvent) => void
  onDrop: (e: React.DragEvent) => void
  openFilePicker: () => Promise<void>
  removeFile: (id: string) => void
  clearFiles: () => void
}

export function useFileImport(): UseFileImportReturn {
  const isElectronRef = useRef(typeof window !== 'undefined' && !!window.electronAPI)

  const [files, setFiles] = useState<ImportedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isParsingFile, setIsParsingFile] = useState(false)
  const dragCounter = useRef(0)

  const processFile = useCallback(async (filePath: string, fileName: string, mimeType: string) => {
    const id = `file-${Date.now()}-${Math.random().toString(36).slice(2)}`

    const newFile: ImportedFile = {
      id, name: fileName, size: 0, type: mimeType, path: filePath,
      status: 'parsing', importedAt: new Date(),
    }

    setFiles(prev => [...prev, newFile])
    setIsParsingFile(true)

    try {
      const content = await parseFileContent(filePath, fileName, mimeType)
      const suggested = content.suggestedTemplate || suggestTemplate(content)

      setFiles(prev => prev.map(f => f.id === id ? {
        ...f,
        status: 'ready' as const,
        content: { ...content, suggestedTemplate: suggested },
      } : f))
      useSettingsStore.getState().incrementFilesImported()
    } catch (err) {
      logger.error('File parse failed:', err)
      useUIStore.getState().addToast({ type: 'error', title: 'Import Error', message: err instanceof Error ? err.message : String(err) })
      setFiles(prev => prev.map(f => f.id === id ? {
        ...f,
        status: 'error' as const,
        error: err instanceof Error ? err.message : 'Parse failed',
      } : f))
    } finally {
      setIsParsingFile(false)
    }
  }, [])

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current++
    setIsDragging(true)
  }, [])

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    dragCounter.current--
    if (dragCounter.current <= 0) {
      dragCounter.current = 0
      setIsDragging(false)
    }
  }, [])

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    dragCounter.current = 0
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files)
    droppedFiles.forEach(file => {
      // In Electron, dropped files have a path property
      const path = (file as File & { path?: string }).path || file.name
      void processFile(path, file.name, file.type)
    })
  }, [processFile])

  const openFilePicker = useCallback(async () => {
    if (!isElectronRef.current) return
    const result = await window.electronAPI.files.openDialog({
      properties: ['openFile', 'multiSelections'],
      filters: [
        { name: 'All Supported', extensions: ['pdf', 'docx', 'doc', 'txt', 'md', 'csv', 'xlsx', 'xls', 'json', 'zip'] },
        { name: 'Documents', extensions: ['pdf', 'docx', 'doc', 'txt', 'md'] },
        { name: 'Data Files', extensions: ['csv', 'xlsx', 'xls', 'json'] },
        { name: 'Archives', extensions: ['zip'] },
      ],
    })

    if (result && Array.isArray(result)) {
      for (const filePath of result) {
        const fileName = filePath.split('/').pop() || filePath
        const ext = fileName.split('.').pop()?.toLowerCase() || ''
        const mimeMap: Record<string, string> = {
          pdf: 'application/pdf', docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          csv: 'text/csv', json: 'application/json', txt: 'text/plain',
          md: 'text/markdown', zip: 'application/zip',
        }
        void processFile(filePath, fileName, mimeMap[ext] || 'application/octet-stream')
      }
    }
  }, [processFile])

  const removeFile = useCallback((id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id))
  }, [])

  const clearFiles = useCallback(() => setFiles([]), [])

  return { files, isDragging, isParsingFile, onDragOver, onDragLeave, onDrop, openFilePicker, removeFile, clearFiles }
}
