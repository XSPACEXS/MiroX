import { useRef, useEffect } from 'react'
import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  showShortcut?: boolean
  className?: string
  autoFocus?: boolean
}

export function SearchBar({ value, onChange, placeholder = 'Search...', showShortcut = true, className = '', autoFocus = false }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!showShortcut) return
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [showShortcut])

  return (
    <div className={`relative ${className}`}>
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            e.preventDefault()
            if (value) {
              onChange('')
            } else {
              inputRef.current?.blur()
            }
          }
        }}
        placeholder={placeholder}
        aria-label={placeholder}
        autoFocus={autoFocus}
        className="w-full bg-black-700 border border-black-500 rounded-xl text-white placeholder-gray-400 pl-10 pr-20 py-2.5 text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 hover:border-black-400"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {value && (
          <button onClick={() => onChange('')} aria-label="Clear search" className="p-0.5 text-gray-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/50 rounded">
            <X size={14} />
          </button>
        )}
        {showShortcut && !value && (
          <kbd className="px-1.5 py-0.5 text-2xs font-mono text-gray-500 bg-black-600 border border-black-500 rounded">
            Cmd+K
          </kbd>
        )}
      </div>
    </div>
  )
}
