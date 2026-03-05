import { useState, useRef, useEffect, type ReactNode } from 'react'
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
  const ref = useRef<HTMLDivElement>(null)
  const selected = options.find(o => o.value === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className={`flex flex-col gap-1.5 ${className}`} ref={ref}>
      {label && <label className="text-sm font-medium text-gray-200">{label}</label>}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
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
            {options.map(option => (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={option.value === value}
                onClick={() => { onChange(option.value); setIsOpen(false) }}
                className={`
                  w-full text-left px-4 py-2.5 text-sm transition-colors
                  ${option.value === value ? 'bg-yellow-400/10 text-yellow-400' : 'text-gray-300 hover:bg-white/5 hover:text-white'}
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
