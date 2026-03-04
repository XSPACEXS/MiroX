import { motion } from 'framer-motion'
import { useTemplateStore } from '../../stores/templateStore'
import { ALL_TEMPLATES, searchTemplates, TEMPLATES_BY_CATEGORY } from '../../templates'
import { listContainerVariants, listItemVariants } from '../../design-system/animations'
import { CategoryFilter } from './CategoryFilter'
import { TemplateSearch } from './TemplateSearch'
import { TemplateCard } from './TemplateCard'
import { TemplatePreview } from './TemplatePreview'
import { Button } from '../ui/Button'

interface TemplateGalleryProps {
  compact?: boolean
  onSelect?: (templateId: string) => void
}

export function TemplateGallery({ compact = false, onSelect }: TemplateGalleryProps) {
  const selectedCategory = useTemplateStore(s => s.selectedCategory)
  const searchQuery = useTemplateStore(s => s.searchQuery)
  const setSearch = useTemplateStore(s => s.setSearch)

  // Filter templates
  let templates = selectedCategory === 'all'
    ? ALL_TEMPLATES
    : (TEMPLATES_BY_CATEGORY[selectedCategory] ?? [])

  if (searchQuery) {
    templates = searchTemplates(searchQuery).filter(t =>
      selectedCategory === 'all' || t.category === selectedCategory
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Filters row */}
      <div className={`flex ${compact ? 'flex-col' : 'flex-col lg:flex-row lg:items-start lg:justify-between'} gap-4`}>
        <CategoryFilter />
        <TemplateSearch className={compact ? 'w-full' : 'w-full lg:w-80'} />
      </div>

      {/* Grid */}
      {templates.length > 0 ? (
        <motion.div
          variants={listContainerVariants}
          initial="initial"
          animate="animate"
          className={`grid gap-4 ${compact ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
        >
          {templates.map(template => (
            <motion.div key={template.id} variants={listItemVariants}>
              <TemplateCard template={template} onSelect={onSelect} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-gray-400 text-lg mb-2">No templates match "{searchQuery}"</p>
          <p className="text-gray-600 text-sm mb-4">Try a different search term or clear filters</p>
          <Button variant="secondary" size="sm" onClick={() => setSearch('')}>
            Clear Search
          </Button>
        </div>
      )}

      {/* Preview modal */}
      <TemplatePreview />
    </div>
  )
}
