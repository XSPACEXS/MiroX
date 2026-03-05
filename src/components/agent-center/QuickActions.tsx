import { motion } from 'framer-motion'
import {
  AlertTriangle,
  Bug,
  Hammer,
  Package,
  Paintbrush,
  Shield,
} from 'lucide-react'
import { Card } from '@components/ui/Card'
import { Badge } from '@components/ui/Badge'
import { listContainerVariants, listItemVariants } from '@design-system/animations'
import type { QuickAction } from '@/types/agent'

const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'fix-ts',
    label: 'Fix All TypeScript Errors',
    description: 'Run typecheck and fix every error found',
    prompt:
      'Run `npm run typecheck` and fix ALL TypeScript errors. Read each file, understand the error, and apply the correct fix. Re-run typecheck until zero errors remain.',
    model: 'haiku',
    tools: ['Read', 'Edit', 'Glob', 'Grep'],
    icon: 'bug',
  },
  {
    id: 'fix-tests',
    label: 'Run & Fix All Tests',
    description: 'Execute test suite and fix failures',
    prompt:
      'Run `npm run test` and fix ALL failing tests. Read test files and source files to understand failures. Apply fixes and re-run until all tests pass.',
    model: 'sonnet',
    tools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
    icon: 'alert',
  },
  {
    id: 'polish-ui',
    label: 'Polish UI to Design Tokens',
    description: 'Audit and align all UI to design system',
    prompt:
      'Read src/design-system/ to understand the design tokens. Then audit all components in src/components/ and src/pages/ to ensure they follow the design system exactly: correct colors (yellow-400 accent, black-900 bg), correct fonts, correct spacing. Fix any deviations.',
    model: 'sonnet',
    tools: ['Read', 'Edit', 'Glob', 'Grep'],
    icon: 'paintbrush',
  },
  {
    id: 'build-mac',
    label: 'Build & Package macOS App',
    description: 'Full build and package as DMG',
    prompt:
      'Run `npm run build` first. If the build succeeds, run `npm run build:mac:arm64` to package the macOS app. Report the output path of the DMG/ZIP.',
    model: 'haiku',
    tools: ['Read', 'Bash'],
    icon: 'package',
  },
  {
    id: 'security-audit',
    label: 'Security Audit',
    description: 'Check for XSS, injection, and OWASP issues',
    prompt:
      'Perform a security audit of the entire codebase. Check for: XSS vulnerabilities, SQL/command injection, insecure IPC patterns, exposed secrets, missing input validation, unsafe eval usage. Report findings with file paths and line numbers.',
    model: 'sonnet',
    tools: ['Read', 'Glob', 'Grep'],
    icon: 'shield',
  },
  {
    id: 'full-qa',
    label: 'Full QA Pass',
    description: 'Typecheck, lint, test, and fix everything',
    prompt:
      'Run a full QA pass: 1) npm run typecheck — fix all errors, 2) npm run lint — fix all warnings/errors, 3) npm run test — fix all failing tests, 4) npm run build — ensure clean build. Keep iterating until all four pass cleanly.',
    model: 'opus',
    tools: ['Read', 'Edit', 'Glob', 'Grep', 'Bash'],
    icon: 'hammer',
  },
]

const ICON_MAP: Record<string, typeof Bug> = {
  bug: Bug,
  alert: AlertTriangle,
  paintbrush: Paintbrush,
  package: Package,
  shield: Shield,
  hammer: Hammer,
}

const MODEL_COLORS: Record<string, 'purple' | 'blue' | 'green'> = {
  opus: 'purple',
  sonnet: 'blue',
  haiku: 'green',
}

interface QuickActionsProps {
  onSelect: (action: QuickAction) => void
}

export function QuickActions({ onSelect }: QuickActionsProps): JSX.Element {
  return (
    <div>
      <h3 className="font-display font-semibold text-lg text-white mb-3">Quick Actions</h3>
      <motion.div
        variants={listContainerVariants}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {QUICK_ACTIONS.map((action) => {
          const Icon = ICON_MAP[action.icon] || Hammer
          return (
            <motion.div key={action.id} variants={listItemVariants}>
              <Card
                variant="interactive"
                hoverable
                onClick={() => onSelect(action)}
                className="p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-white truncate">
                        {action.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2">{action.description}</p>
                    <div className="mt-2">
                      <Badge color={MODEL_COLORS[action.model] || 'gray'} size="sm">
                        {action.model}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export { QUICK_ACTIONS }
