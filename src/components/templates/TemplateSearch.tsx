import { useState, useEffect } from 'react'
import { useTemplateStore } from '../../stores/templateStore'
import { searchTemplates, ALL_TEMPLATES } from '../../templates'
import { SearchBar } from '../ui/SearchBar'

interface TemplateSearchProps {
  className?: string
}

export function TemplateSearch({ className = '' }: TemplateSearchProps) {
  const searchQuery = useTemplateStore(s => s.searchQuery)
  const setSearch = useTemplateStore(s => s.setSearch)
  const [localQuery, setLocalQuery] = useState(searchQuery)

  // Debounce search
  useEffect(() => {
    const timeout = setTimeout(() => setSearch(localQuery), 200)
    return () => clearTimeout(timeout)
  }, [localQuery, setSearch])

  const results = searchQuery ? searchTemplates(searchQuery) : ALL_TEMPLATES
  const resultText = searchQuery
    ? `${results.length} result${results.length !== 1 ? 's' : ''} for "${searchQuery}"`
    : `${ALL_TEMPLATES.length} templates`

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <SearchBar
        value={localQuery}
        onChange={setLocalQuery}
        placeholder="Search templates..."
        showShortcut
      />
      <p className="text-xs text-gray-500">{resultText}</p>
    </div>
  )
}
