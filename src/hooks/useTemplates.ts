import { useMemo } from 'react'
import { useTemplateStore } from '../stores/templateStore'
import { ALL_TEMPLATES, searchTemplates, TEMPLATES_BY_CATEGORY, getTemplateById } from '../templates'
import type { TemplateDefinition, TemplateCategory } from '../templates/types'

interface UseTemplatesReturn {
  templates: TemplateDefinition[]
  allTemplates: TemplateDefinition[]
  selectedCategory: TemplateCategory | 'all'
  searchQuery: string
  selectedTemplate: TemplateDefinition | null
  setCategory: (category: TemplateCategory | 'all') => void
  setSearch: (query: string) => void
  selectTemplate: (template: TemplateDefinition | null) => void
  getTemplate: (id: string) => TemplateDefinition | undefined
}

export function useTemplates(): UseTemplatesReturn {
  const selectedCategory = useTemplateStore(s => s.selectedCategory)
  const searchQuery = useTemplateStore(s => s.searchQuery)
  const selectedTemplate = useTemplateStore(s => s.selectedTemplate)
  const setCategory = useTemplateStore(s => s.setCategory)
  const setSearch = useTemplateStore(s => s.setSearch)
  const selectTemplate = useTemplateStore(s => s.selectTemplate)

  const templates = useMemo(() => {
    let result = selectedCategory === 'all'
      ? ALL_TEMPLATES
      : (TEMPLATES_BY_CATEGORY[selectedCategory] ?? [])

    if (searchQuery) {
      result = searchTemplates(searchQuery).filter(t =>
        selectedCategory === 'all' || t.category === selectedCategory
      )
    }

    return result
  }, [selectedCategory, searchQuery])

  return {
    templates,
    allTemplates: ALL_TEMPLATES,
    selectedCategory,
    searchQuery,
    selectedTemplate,
    setCategory,
    setSearch,
    selectTemplate,
    getTemplate: getTemplateById,
  }
}
