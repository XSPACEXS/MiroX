import { useTemplateStore } from '../../stores/templateStore'
import { ALL_TEMPLATES, TEMPLATES_BY_CATEGORY } from '../../templates'
import type { TemplateCategory } from '../../templates/types'

const categories: { id: TemplateCategory | 'all'; label: string; emoji: string }[] = [
  { id: 'all', label: 'All', emoji: '' },
  { id: 'agile' as TemplateCategory, label: 'Agile', emoji: '🏗️' },
  { id: 'strategy' as TemplateCategory, label: 'Strategy', emoji: '🎯' },
  { id: 'research' as TemplateCategory, label: 'Research', emoji: '🔬' },
  { id: 'design' as TemplateCategory, label: 'Design', emoji: '🎨' },
  { id: 'technical' as TemplateCategory, label: 'Technical', emoji: '🏛️' },
  { id: 'brainstorm' as TemplateCategory, label: 'Brainstorm', emoji: '💡' },
  { id: 'meetings' as TemplateCategory, label: 'Meetings', emoji: '👥' },
]

export function CategoryFilter() {
  const selected = useTemplateStore(s => s.selectedCategory)
  const setCategory = useTemplateStore(s => s.setCategory)

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
      {categories.map(cat => {
        const count = cat.id === 'all' ? ALL_TEMPLATES.length : (TEMPLATES_BY_CATEGORY[cat.id]?.length ?? 0)
        const isActive = selected === cat.id

        return (
          <button
            key={cat.id}
            onClick={() => setCategory(cat.id)}
            aria-pressed={isActive}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-150
              ${isActive
                ? 'bg-yellow-400 text-black'
                : 'bg-black-700 text-gray-400 hover:text-white hover:bg-black-600 border border-black-600'
              }
            `}
          >
            {cat.emoji && <span>{cat.emoji}</span>}
            {cat.label}
            <span className={`text-xs ${isActive ? 'text-black/60' : 'text-gray-600'}`}>
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}
