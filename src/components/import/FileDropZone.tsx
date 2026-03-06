import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@components/ui/Button'
import { Spinner } from '@components/ui/Spinner'
import { useFileImport } from '../../hooks/useFileImport'
import type { ImportedFile } from '../../types/import'

const fileTypeIcons: Record<string, string> = {
  'application/pdf': 'PDF',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'DOCX',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'XLSX',
  'text/csv': 'CSV',
  'application/json': 'JSON',
  'text/plain': 'TXT',
  'text/markdown': 'MD',
  'application/zip': 'ZIP',
}

const dropzoneVariants = {
  idle: {
    borderColor: 'rgba(255, 214, 0, 0.2)',
    backgroundColor: 'rgba(255, 214, 0, 0.02)',
    boxShadow: '0 0 0px rgba(255, 214, 0, 0)',
  },
  dragging: {
    borderColor: 'rgba(255, 214, 0, 0.8)',
    backgroundColor: 'rgba(255, 214, 0, 0.06)',
    boxShadow: '0 0 40px rgba(255, 214, 0, 0.15)',
  },
}

interface FileDropZoneProps {
  onFileReady?: (file: ImportedFile) => void
}

export default function FileDropZone({ onFileReady }: FileDropZoneProps) {
  const {
    files, isDragging,
    onDragOver, onDragLeave, onDrop,
    openFilePicker, removeFile, clearFiles,
  } = useFileImport()

  // Track which files have been reported as ready
  const readyReported = useRef<Set<string>>(new Set())

  useEffect(() => {
    files.forEach(file => {
      if (file.status === 'ready' && file.content && !readyReported.current.has(file.id)) {
        readyReported.current.add(file.id)
        onFileReady?.(file)
      }
    })
  }, [files, onFileReady])

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <motion.div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => { if (files.length === 0) void openFilePicker() }}
        onKeyDown={(e: React.KeyboardEvent) => { if ((e.key === 'Enter' || e.key === ' ') && files.length === 0) { e.preventDefault(); void openFilePicker() } }}
        tabIndex={0}
        role="button"
        aria-label="Drop files here or click to browse"
        animate={isDragging ? 'dragging' : 'idle'}
        variants={dropzoneVariants}
        transition={{ duration: 0.2 }}
        className="relative flex flex-col items-center justify-center min-h-[320px] rounded-xl border-2 border-dashed cursor-pointer"
      >
        {/* Idle state */}
        {files.length === 0 && !isDragging && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-3 text-center px-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <div>
              <p className="text-white font-medium text-lg">Drop files here or click to browse</p>
              <p className="text-gray-500 text-sm mt-1">
                PDF, DOCX, TXT, MD, CSV, XLSX, JSON, ZIP
              </p>
            </div>
          </motion.div>
        )}

        {/* Dragging state */}
        {isDragging && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-16 h-16 rounded-2xl bg-yellow-400/20 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0-15l-4.5 4.5m4.5-4.5l4.5 4.5" />
              </svg>
            </motion.div>
            <p className="text-yellow-400 font-semibold text-lg">Release to upload</p>
          </motion.div>
        )}
      </motion.div>

      {/* File List */}
      <AnimatePresence mode="popLayout">
        {files.map((file, i) => (
          <motion.div
            key={file.id}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25, delay: i * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-lg bg-black-800/60 border border-black-600"
          >
            {/* File type badge */}
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-black-700 flex items-center justify-center">
              <span className="text-2xs font-bold text-yellow-400 tracking-wider">
                {fileTypeIcons[file.type] || file.name.split('.').pop()?.toUpperCase() || '?'}
              </span>
            </div>

            {/* File info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white font-medium truncate" title={file.name}>{file.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                {file.status === 'parsing' && (
                  <span className="flex items-center gap-1.5 text-xs text-yellow-400">
                    <Spinner size="sm" />
                    Analyzing...
                  </span>
                )}
                {file.status === 'ready' && file.content && (
                  <span className="inline-flex items-center gap-1 text-xs text-green-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Ready
                  </span>
                )}
                {file.status === 'error' && (
                  <span className="text-xs text-red-400">{file.error || 'Failed'}</span>
                )}

                {/* Template suggestion badge */}
                {file.status === 'ready' && file.content?.suggestedTemplate && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-2xs font-medium bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                    {file.content.suggestedTemplate}
                  </span>
                )}
              </div>
            </div>

            {/* Remove button */}
            <button
              onClick={(e) => { e.stopPropagation(); removeFile(file.id) }}
              aria-label={`Remove ${file.name}`}
              className="flex-shrink-0 p-1.5 rounded-md hover:bg-black-700 text-gray-500 hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Actions */}
      {files.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <Button variant="secondary" size="sm" onClick={openFilePicker}>
            Add More Files
          </Button>
          <Button variant="ghost" size="sm" onClick={clearFiles}>
            Clear All
          </Button>
        </motion.div>
      )}
    </div>
  )
}
