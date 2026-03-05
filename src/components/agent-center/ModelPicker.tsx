import { useMemo } from 'react'
import { Sparkles, ImageIcon, Video } from 'lucide-react'
import { Modal } from '@components/ui/Modal'
import { Badge } from '@components/ui/Badge'
import {
  getCollaboratorModels,
  type ModelDefinition,
} from '@services/modelRegistry'

interface ModelPickerProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (modelId: string) => void
  excludeModelIds: string[]
}

const ICON_MAP = {
  sparkles: Sparkles,
  image: ImageIcon,
  video: Video,
} as const

const TIER_COLORS: Record<string, 'purple' | 'blue' | 'green' | 'yellow' | 'gray'> = {
  flagship: 'purple',
  standard: 'blue',
  fast: 'green',
  lite: 'gray',
}

function ModelCard({
  model,
  disabled,
  onSelect,
}: {
  model: ModelDefinition
  disabled: boolean
  onSelect: (id: string) => void
}): JSX.Element {
  const Icon = ICON_MAP[model.providerIcon as keyof typeof ICON_MAP] || Sparkles

  return (
    <button
      onClick={() => !disabled && onSelect(model.id)}
      disabled={disabled}
      className={`w-full text-left p-4 rounded-xl border transition-colors ${
        disabled
          ? 'border-black-700 bg-black-800/50 opacity-40 cursor-not-allowed'
          : 'border-black-600 bg-black-800 hover:border-yellow-400/40 hover:bg-black-700 cursor-pointer'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <Icon size={16} className="text-blue-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-white text-sm">{model.label}</span>
            <Badge color={TIER_COLORS[model.tier] || 'gray'} size="sm">
              {model.tier}
            </Badge>
          </div>
          <p className="text-xs text-gray-400 mb-2">{model.description}</p>
          <div className="flex flex-wrap gap-1">
            {model.capabilities.map((cap) => (
              <span
                key={cap}
                className="px-1.5 py-0.5 text-[10px] rounded bg-black-700 text-gray-500 border border-black-600"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  )
}

export function ModelPicker({
  isOpen,
  onClose,
  onSelect,
  excludeModelIds,
}: ModelPickerProps): JSX.Element {
  const models = useMemo(() => getCollaboratorModels(), [])

  const textModels = useMemo(
    () => models.filter((m) => m.outputType === 'text'),
    [models]
  )
  const imageModels = useMemo(
    () => models.filter((m) => m.outputType === 'image'),
    [models]
  )
  const videoModels = useMemo(
    () => models.filter((m) => m.outputType === 'video'),
    [models]
  )

  const handleSelect = (id: string): void => {
    onSelect(id)
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Collaborator Model" size="lg">
      <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
        {textModels.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-blue-400" />
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Text Models
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {textModels.map((model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                  disabled={excludeModelIds.includes(model.id)}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        )}

        {imageModels.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ImageIcon size={14} className="text-orange-400" />
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Image Models
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {imageModels.map((model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                  disabled={excludeModelIds.includes(model.id)}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        )}

        {videoModels.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Video size={14} className="text-red-400" />
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Video Models
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {videoModels.map((model) => (
                <ModelCard
                  key={model.id}
                  model={model}
                  disabled={excludeModelIds.includes(model.id)}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}
