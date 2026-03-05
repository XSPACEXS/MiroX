import { useState, useRef, useEffect, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Search, Settings2 } from 'lucide-react'
import { useUIStore } from '../../stores/uiStore'
import { SearchBar } from '../ui/SearchBar'
import { searchTemplates } from '../../templates'

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/templates': 'Templates',
  '/import': 'Import',
  '/builder': 'Board Builder',
  '/settings': 'Settings',
  '/agent-center': 'Agent Command Center',
}

export function TopBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const isSearchOpen = useUIStore(s => s.isSearchOpen)
  const toggleSearch = useUIStore(s => s.toggleSearch)
  const title = pageTitles[location.pathname] || 'MiroX'

  const [query, setQuery] = useState('')
  const overlayRef = useRef<HTMLDivElement>(null)
  const results = query.trim() ? searchTemplates(query).slice(0, 8) : []

  const closeSearch = useCallback(() => {
    if (isSearchOpen) toggleSearch()
    setQuery('')
  }, [isSearchOpen, toggleSearch])

  // Close on click outside
  useEffect(() => {
    if (!isSearchOpen) return
    const handler = (e: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        closeSearch()
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [isSearchOpen, closeSearch])

  // Close on Escape
  useEffect(() => {
    if (!isSearchOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isSearchOpen, closeSearch])

  const handleSelect = (templateId: string) => {
    closeSearch()
    navigate(`/builder?template=${templateId}`)
  }

  return (
    <div className="drag-region h-9 flex items-center justify-between px-4 bg-black-800/50 border-b border-black-700 flex-shrink-0 relative">
      {/* Spacer for macOS traffic lights */}
      <div className="w-16 flex-shrink-0" />

      {/* Center: page title */}
      <span className="text-xs font-medium text-gray-400 select-none">{title}</span>

      {/* Right: actions */}
      <div className="no-drag flex items-center gap-1">
        <button
          onClick={toggleSearch}
          aria-label="Search"
          className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Search size={14} />
        </button>
        <button
          onClick={() => navigate('/settings')}
          aria-label="Settings"
          className="p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Settings2 size={14} />
        </button>
      </div>

      {/* Search overlay */}
      {isSearchOpen && (
        <div ref={overlayRef} className="no-drag absolute top-full right-4 mt-1 w-80 z-50">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search templates..."
            autoFocus
            showShortcut={false}
          />
          {query.trim() && (
            <div className="mt-1 bg-black-800 border border-black-600 rounded-xl overflow-hidden shadow-xl max-h-64 overflow-y-auto">
              {results.length > 0 ? (
                results.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleSelect(t.id)}
                    className="w-full text-left px-3 py-2 hover:bg-white/5 transition-colors flex items-center gap-2"
                  >
                    <span>{t.emoji}</span>
                    <div className="min-w-0">
                      <p className="text-sm text-white truncate">{t.name}</p>
                      <p className="text-2xs text-gray-500 truncate">{t.category}</p>
                    </div>
                  </button>
                ))
              ) : (
                <p className="px-3 py-4 text-sm text-gray-500 text-center">No templates found</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
