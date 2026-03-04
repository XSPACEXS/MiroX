import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useSearchParams } from 'react-router-dom'
import type { ImportTab, ParsedContent } from '../../types/import'
import FileDropZone from './FileDropZone'
import GitHubPicker from './GitHubPicker'
import URLImporter from './URLImporter'
import ImportAnalysis from './ImportAnalysis'

const tabs: { id: ImportTab; label: string; icon: React.ReactNode }[] = [
  {
    id: 'file',
    label: 'File Upload',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 'url',
    label: 'URL',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.07-9.07l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
  },
]

export default function ImportHub() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const initialTab = (searchParams.get('tab') as ImportTab) || 'file'
  const [activeTab, setActiveTab] = useState<ImportTab>(initialTab)
  const [analysisContent, setAnalysisContent] = useState<ParsedContent | null>(null)

  const handleAnalysisReady = useCallback((content: ParsedContent) => {
    setAnalysisContent(content)
  }, [])

  const handleUseTemplate = useCallback((templateId: string) => {
    navigate(`/builder?template=${templateId}`)
  }, [navigate])

  const handleChooseDifferent = useCallback(() => {
    navigate('/templates')
  }, [navigate])

  return (
    <div className="space-y-6">
      {/* Tab bar */}
      <div className="flex gap-1 p-1 rounded-xl bg-neutral-900/60 border border-neutral-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setAnalysisContent(null) }}
            className={`relative flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-black'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="import-tab-bg"
                className="absolute inset-0 bg-yellow-400 rounded-lg"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'file' && <FileDropZone onFileReady={() => {}} />}
          {activeTab === 'github' && <GitHubPicker onAnalysisReady={handleAnalysisReady} />}
          {activeTab === 'url' && <URLImporter onAnalysisReady={handleAnalysisReady} />}
        </motion.div>
      </AnimatePresence>

      {/* Analysis result */}
      <AnimatePresence>
        {analysisContent && (
          <ImportAnalysis
            content={analysisContent}
            onUseTemplate={handleUseTemplate}
            onChooseDifferent={handleChooseDifferent}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
