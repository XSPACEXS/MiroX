import { Input } from '../ui/Input'
import { Dropdown } from '../ui/Dropdown'
import type { TemplateField } from '../../templates/types'

interface ContentEditorProps {
  fields: TemplateField[]
  values: Record<string, string>
  onChange: (fieldId: string, value: string) => void
  errors?: Record<string, string>
  className?: string
}

export function ContentEditor({ fields, values, onChange, errors = {}, className = '' }: ContentEditorProps) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <span className="text-sm text-blue-400">Fill in the fields below to customize your board content.</span>
      </div>

      {fields.map(field => {
        const value = values[field.id] ?? ''
        const error = errors[field.id]

        if (field.type === 'textarea') {
          return (
            <div key={field.id} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-200">
                {field.label}
                {field.required && <span className="text-red-400 ml-1">*</span>}
              </label>
              <textarea
                value={value}
                onChange={e => onChange(field.id, e.target.value)}
                placeholder={field.placeholder}
                rows={4}
                className={`
                  w-full bg-black-700 border rounded-xl text-white placeholder-gray-400
                  px-4 py-2.5 text-sm transition-all duration-150 resize-y
                  focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50
                  ${error ? 'border-red-500' : 'border-black-500 hover:border-black-400'}
                `}
              />
              {error && <p className="text-xs text-red-400">{error}</p>}
              {field.helpText && !error && <p className="text-xs text-gray-500">{field.helpText}</p>}
            </div>
          )
        }

        if (field.type === 'select' && field.options) {
          return (
            <Dropdown
              key={field.id}
              label={`${field.label}${field.required ? ' *' : ''}`}
              options={field.options.map(o => ({ value: o, label: o }))}
              value={value}
              onChange={v => onChange(field.id, v)}
              placeholder={field.placeholder}
              error={error}
            />
          )
        }

        if (field.type === 'multiselect' && field.options) {
          const selected = value ? value.split(',').filter(Boolean) : []
          return (
            <div key={field.id} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-200">
                {field.label}
                {field.required && <span className="text-red-400 ml-1">*</span>}
              </label>
              <div className="flex flex-wrap gap-2">
                {field.options.map(opt => {
                  const isSelected = selected.includes(opt)
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        const next = isSelected
                          ? selected.filter(s => s !== opt)
                          : [...selected, opt]
                        onChange(field.id, next.join(','))
                      }}
                      className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                        isSelected
                          ? 'bg-yellow-400/15 text-yellow-400 border-yellow-400/30'
                          : 'bg-black-700 text-gray-400 border-black-500 hover:border-black-400'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {error && <p className="text-xs text-red-400">{error}</p>}
            </div>
          )
        }

        return (
          <Input
            key={field.id}
            label={`${field.label}${field.required ? ' *' : ''}`}
            value={value}
            onChange={e => onChange(field.id, e.target.value)}
            placeholder={field.placeholder}
            error={error}
            hint={field.helpText}
          />
        )
      })}
    </div>
  )
}
