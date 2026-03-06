import { Bug, FlaskConical, RefreshCcw, Shield } from 'lucide-react'
import { Button } from '@components/ui/Button'
import type { ClaudeModel } from '@/types/agent'

interface Preset {
  label: string
  icon: React.ReactNode
  prompt: string
  model: ClaudeModel
}

const PRESETS: Preset[] = [
  {
    label: 'Fix Bugs',
    icon: <Bug size={14} />,
    prompt: 'Find and fix all bugs, type errors, and broken functionality',
    model: 'sonnet',
  },
  {
    label: 'Add Tests',
    icon: <FlaskConical size={14} />,
    prompt: 'Write comprehensive tests for all untested code',
    model: 'sonnet',
  },
  {
    label: 'Refactor',
    icon: <RefreshCcw size={14} />,
    prompt: 'Refactor and improve code quality, reduce duplication',
    model: 'sonnet',
  },
  {
    label: 'Security Audit',
    icon: <Shield size={14} />,
    prompt: 'Audit for security vulnerabilities and fix them',
    model: 'sonnet',
  },
]

interface QuickLaunchPresetsProps {
  onSelect: (preset: { prompt: string; model: ClaudeModel }) => void
}

export function QuickLaunchPresets({ onSelect }: QuickLaunchPresetsProps): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      {PRESETS.map((preset) => (
        <Button
          key={preset.label}
          variant="secondary"
          size="sm"
          leftIcon={preset.icon}
          onClick={() => onSelect({ prompt: preset.prompt, model: preset.model })}
        >
          {preset.label}
        </Button>
      ))}
    </div>
  )
}
