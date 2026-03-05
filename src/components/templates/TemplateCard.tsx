import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { useTemplateStore } from '../../stores/templateStore'
import type { TemplateDefinition } from '../../templates/types'

interface TemplateCardProps {
  template: TemplateDefinition
  onSelect?: (templateId: string) => void
}

const complexityColor: Record<string, 'green' | 'yellow' | 'orange'> = {
  simple: 'green',
  medium: 'yellow',
  complex: 'orange',
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  const navigate = useNavigate()
  const setPreviewTemplate = useTemplateStore(s => s.setPreviewTemplate)

  const handleClick = () => {
    if (onSelect) {
      onSelect(template.id)
    } else {
      setPreviewTemplate(template)
    }
  }

  return (
    <Card
      hoverable
      className="p-5 group"
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{template.emoji}</span>
          <div>
            <h3 className="font-display font-semibold text-white text-base">{template.name}</h3>
            <Badge color={complexityColor[template.complexity]} size="sm" className="mt-1">
              {template.complexity}
            </Badge>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-gray-400 line-clamp-2">{template.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {template.tags.slice(0, 3).map(tag => (
          <Badge key={tag} color="gray" size="sm">{tag}</Badge>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-500">{template.estimatedTime}</span>
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigate(`/builder?template=${template.id}`)
          }}
          aria-label={`Use ${template.name} template`}
          className="flex items-center gap-1 text-sm text-yellow-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:underline"
        >
          Use Template <ArrowRight size={14} />
        </button>
      </div>
    </Card>
  )
}
