import { Bug, FlaskConical, RefreshCcw, Shield, Sparkles, Rocket } from 'lucide-react'
import type { ClaudeModel } from '@/types/agent'

interface Preset {
  label: string
  desc: string
  icon: React.ReactNode
  prompt: string
  model: ClaudeModel
}

const PRESETS: Preset[] = [
  {
    label: 'Fix All Bugs',
    desc: 'Find & fix type errors, broken flows, and edge cases',
    icon: <Bug size={16} className="text-red-400" />,
    prompt: 'Find and fix all bugs, type errors, and broken functionality. Run typecheck and tests to verify all fixes.',
    model: 'sonnet',
  },
  {
    label: 'Full Test Suite',
    desc: 'Generate tests for every untested module and component',
    icon: <FlaskConical size={16} className="text-green-400" />,
    prompt: 'Write comprehensive unit and integration tests for all untested code. Aim for >90% coverage. Use vitest and testing-library.',
    model: 'sonnet',
  },
  {
    label: 'Deep Refactor',
    desc: 'Reduce duplication, improve architecture, keep tests green',
    icon: <RefreshCcw size={16} className="text-blue-400" />,
    prompt: 'Refactor the codebase to reduce duplication, improve naming and architecture, and eliminate dead code. All existing tests must still pass.',
    model: 'sonnet',
  },
  {
    label: 'Security Hardening',
    desc: 'OWASP audit, fix vulnerabilities, add input validation',
    icon: <Shield size={16} className="text-yellow-400" />,
    prompt: 'Perform a comprehensive security audit for OWASP top-10 vulnerabilities including XSS, injection, CSRF, and secrets exposure. Fix all issues found.',
    model: 'sonnet',
  },
  {
    label: 'Performance Boost',
    desc: 'Optimize renders, bundle size, and lazy loading',
    icon: <Rocket size={16} className="text-purple-400" />,
    prompt: 'Optimize performance: add React.memo where needed, optimize re-renders, implement code splitting, reduce bundle size, and add lazy loading for heavy components.',
    model: 'sonnet',
  },
  {
    label: 'Polish & Ship',
    desc: 'Fix a11y, add loading states, error boundaries, animations',
    icon: <Sparkles size={16} className="text-cyan-400" />,
    prompt: 'Polish the app for production: add missing loading states, error boundaries, accessibility labels, keyboard navigation, and smooth transitions. Fix any visual inconsistencies.',
    model: 'sonnet',
  },
]

interface QuickLaunchPresetsProps {
  onSelect: (preset: { prompt: string; model: ClaudeModel }) => void
}

export function QuickLaunchPresets({ onSelect }: QuickLaunchPresetsProps): JSX.Element {
  return (
    <div>
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
        Quick Launch
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset.label}
            type="button"
            onClick={() => onSelect({ prompt: preset.prompt, model: preset.model })}
            className="flex items-start gap-3 p-3 rounded-xl bg-black-800/60 border border-black-600 hover:border-yellow-400/30 hover:bg-yellow-400/5 transition-all duration-150 text-left group"
          >
            <div className="mt-0.5 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
              {preset.icon}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-white group-hover:text-yellow-400 transition-colors truncate">
                {preset.label}
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2 leading-relaxed">
                {preset.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
