import { useNavigate } from 'react-router-dom'
import { useTemplateStore } from '../../stores/templateStore'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

const complexityColor: Record<string, 'green' | 'yellow' | 'orange'> = {
  simple: 'green',
  medium: 'yellow',
  complex: 'orange',
}

export function TemplatePreview() {
  const template = useTemplateStore(s => s.previewTemplate)
  const setPreviewTemplate = useTemplateStore(s => s.setPreviewTemplate)
  const selectTemplate = useTemplateStore(s => s.selectTemplate)
  const navigate = useNavigate()

  if (!template) return null

  return (
    <Modal
      isOpen={!!template}
      onClose={() => setPreviewTemplate(null)}
      size="xl"
    >
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {/* Left panel - Info */}
        <div className="w-full md:w-2/5 p-6 border-r border-black-600 flex flex-col">
          <span className="text-7xl mb-4">{template.emoji}</span>
          <Badge color={complexityColor[template.complexity]} size="md" className="self-start mb-3">
            {template.complexity}
          </Badge>
          <h2 className="font-display font-bold text-2xl text-white mb-2">{template.name}</h2>
          <p className="text-sm text-gray-400 mb-4 flex-1">{template.longDescription}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {template.tags.map(tag => (
              <Badge key={tag} color="gray" size="sm">{tag}</Badge>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Badge color="blue" size="md">{template.estimatedTime}</Badge>
            <Badge color="purple" size="md">{template.sections.length} sections</Badge>
          </div>

          {/* Sections list */}
          <div className="space-y-1.5">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Sections</p>
            {template.sections.map(section => (
              <div key={section.id} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-base">{section.icon}</span>
                {section.name}
              </div>
            ))}
          </div>
        </div>

        {/* Right panel - Preview */}
        <div className="w-full md:w-3/5 p-6 flex flex-col">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Preview</h3>
          <div className="flex-1 bg-[#0D1117] rounded-xl p-4 overflow-auto font-mono text-xs leading-relaxed">
            <pre className="text-yellow-400 whitespace-pre">{template.previewAscii}</pre>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            This board will have {template.sections.length} sections
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-black-600">
        <Button variant="ghost" onClick={() => setPreviewTemplate(null)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            selectTemplate(template)
            setPreviewTemplate(null)
            navigate(`/builder?template=${template.id}`)
          }}
        >
          Use This Template
        </Button>
      </div>
    </Modal>
  )
}
