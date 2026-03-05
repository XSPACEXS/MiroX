import { useState, useRef, useEffect, useCallback, type ReactNode } from 'react'
import { ChevronDown } from 'lucide-react'

interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps {
  options: DropdownOption[]
  value?: string
  onChange: (value: string) => void
  placeholder?: string
  label?: string
  error?: string
  className?: string
}

export function Dropdown({ options, value, onChange, placeholder = 'Select...', label, error, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(-1)
  const ref = useRef<HTMLDivElement>(null)
  const selected = options.find(o => o.value === value)

  const closeDropdown = useCallback(() => {
    setIsOpen(false)
    setHighlightedIndex(-1)
  }, [])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) closeDropdown()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [closeDropdown])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setIsOpen(true)
        const currentIndex = options.findIndex(o => o.value === value)
        setHighlightedIndex(currentIndex >= 0 ? currentIndex : 0)
      }
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setHighlightedIndex(prev => Math.min(prev + 1, options.length - 1))
        break
      case 'ArrowUp':
        e.preventDefault()
        setHighlightedIndex(prev => Math.max(prev - 1, 0))
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          onChange(options[highlightedIndex]!.value)
          closeDropdown()
        }
        break
      case 'Escape':
        e.preventDefault()
        closeDropdown()
        break
    }
  }, [isOpen, highlightedIndex, options, value, onChange, closeDropdown])

  return (
    <div className={`flex flex-col gap-1.5 ${className}`} ref={ref}>
      {label && <label className="text-sm font-medium text-gray-200">{label}</label>}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className={`
            w-full flex items-center justify-between bg-black-700 border rounded-xl text-sm
            px-4 py-2.5 transition-all duration-150
            focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50
            ${error ? 'border-red-500' : 'border-black-500 hover:border-black-400'}
            ${selected ? 'text-white' : 'text-gray-400'}
          `}
        >
          {selected ? selected.label : placeholder}
          <ChevronDown size={16} className={`transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div role="listbox" className="absolute z-50 w-full mt-1 bg-black-700 border border-black-500 rounded-xl shadow-xl overflow-hidden">
            {options.map((option, index) => (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={option.value === value}
                onClick={() => { onChange(option.value); closeDropdown() }}
                className={`
                  w-full text-left px-4 py-2.5 text-sm transition-colors
                  ${option.value === value ? 'bg-yellow-400/10 text-yellow-400' : index === highlightedIndex ? 'bg-black-600 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'}
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
}

interface SimpleSelectProps {
  options: DropdownOption[]
  value?: string
  onChange: (value: string) => void
  label?: string
  className?: string
  children?: ReactNode
}

export function SimpleSelect({ options, value, onChange, label, className = '' }: SimpleSelectProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-200">{label}</label>}
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-black-700 border border-black-500 rounded-xl text-white text-sm px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 appearance-none cursor-pointer"
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  )
}
