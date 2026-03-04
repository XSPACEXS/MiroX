import type { TemplateDefinition } from '../../templates/types'

interface BoardPreviewProps {
  template: TemplateDefinition
  className?: string
}

export function BoardPreview({ template, className = '' }: BoardPreviewProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className="text-sm font-medium text-gray-400 mb-3">Board Preview</h3>
      <div className="flex-1 bg-[#0D1117] rounded-xl p-4 overflow-auto font-mono text-xs leading-relaxed min-h-[300px]">
        <pre className="text-yellow-400 whitespace-pre">{template.previewAscii}</pre>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        This board will have {template.sections.length} sections
      </p>
    </div>
  )
}
