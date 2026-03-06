import { motion } from 'framer-motion'
import { Circle, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface CheckItem {
  name: string
  status: 'pending' | 'running' | 'pass' | 'fail'
  detail?: string
}

interface VerificationChecklistProps {
  checks: CheckItem[]
}

const STATUS_CONFIG: Record<CheckItem['status'], {
  icon: LucideIcon
  className: string
}> = {
  pending: { icon: Circle, className: 'text-gray-500' },
  running: { icon: Loader2, className: 'text-yellow-400 animate-spin' },
  pass: { icon: CheckCircle2, className: 'text-green-400' },
  fail: { icon: XCircle, className: 'text-red-400' },
}

export function VerificationChecklist({ checks }: VerificationChecklistProps): JSX.Element {
  return (
    <div className="space-y-2" role="list" aria-label="Verification checks">
      {checks.map((check) => {
        const cfg = STATUS_CONFIG[check.status]
        const StatusIcon = cfg.icon

        return (
          <motion.div
            key={check.name}
            className="flex items-start gap-3 px-3 py-2 rounded-xl border border-black-600 bg-black-800/40"
            animate={
              check.status === 'pass' || check.status === 'fail'
                ? { scale: [1, 1.03, 1] }
                : undefined
            }
            transition={{ duration: 0.25, ease: 'easeOut' }}
            role="listitem"
          >
            <div className="flex-shrink-0 mt-0.5">
              <StatusIcon size={18} className={cfg.className} />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-white">{check.name}</span>
              {check.detail && (
                <p className="text-xs text-gray-400 mt-0.5">{check.detail}</p>
              )}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
