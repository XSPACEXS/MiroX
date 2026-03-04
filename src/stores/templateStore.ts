import { create } from 'zustand'
import type { TemplateDefinition, TemplateCategory } from '../templates/types'

interface TemplateStore {
  selectedCategory: TemplateCategory | 'all'
  searchQuery: string
  selectedTemplate: TemplateDefinition | null
  previewTemplate: TemplateDefinition | null
  setCategory: (category: TemplateCategory | 'all') => void
  setSearch: (query: string) => void
  selectTemplate: (template: TemplateDefinition | null) => void
  setPreviewTemplate: (template: TemplateDefinition | null) => void
  clearSelection: () => void
}

export const useTemplateStore = create<TemplateStore>((set) => ({
  selectedCategory: 'all',
  searchQuery: '',
  selectedTemplate: null,
  previewTemplate: null,
  setCategory: (selectedCategory) => set({ selectedCategory }),
  setSearch: (searchQuery) => set({ searchQuery }),
  selectTemplate: (selectedTemplate) => set({ selectedTemplate }),
  setPreviewTemplate: (previewTemplate) => set({ previewTemplate }),
  clearSelection: () => set({ selectedTemplate: null, searchQuery: '' }),
}))
