import { create } from 'zustand'
import type { ImportTab, ImportedFile, ParsedContent } from '../types/import'

interface ImportStore {
  activeTab: ImportTab
  uploadedFiles: ImportedFile[]
  importAnalysis: ParsedContent | null
  isAnalyzing: boolean
  urlInput: string
  setTab: (tab: ImportTab) => void
  addFile: (file: ImportedFile) => void
  updateFile: (id: string, update: Partial<ImportedFile>) => void
  removeFile: (id: string) => void
  clearFiles: () => void
  setAnalysis: (analysis: ParsedContent | null) => void
  setAnalyzing: (isAnalyzing: boolean) => void
  setUrlInput: (url: string) => void
}

export const useImportStore = create<ImportStore>((set) => ({
  activeTab: 'file',
  uploadedFiles: [],
  importAnalysis: null,
  isAnalyzing: false,
  urlInput: '',
  setTab: (activeTab) => set({ activeTab }),
  addFile: (file) => set(state => ({ uploadedFiles: [...state.uploadedFiles, file] })),
  updateFile: (id, update) => set(state => ({
    uploadedFiles: state.uploadedFiles.map(f => f.id === id ? { ...f, ...update } : f),
  })),
  removeFile: (id) => set(state => ({ uploadedFiles: state.uploadedFiles.filter(f => f.id !== id) })),
  clearFiles: () => set({ uploadedFiles: [], importAnalysis: null }),
  setAnalysis: (importAnalysis) => set({ importAnalysis }),
  setAnalyzing: (isAnalyzing) => set({ isAnalyzing }),
  setUrlInput: (urlInput) => set({ urlInput }),
}))
