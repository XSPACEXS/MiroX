import { useMemo } from 'react'
import { TeamScene } from '@components/agent-center/scene/TeamScene'
import { VerificationChecklist } from '@components/agent-center/mission/VerificationChecklist'
import type { AgentRun } from '@/types/agent'
import type { AgentCharacter } from '@/types/character'

interface VerifyingViewProps {
  agents: AgentRun[]
  characters: Record<string, AgentCharacter>
}

interface CheckItem {
  name: string
  status: 'pending' | 'running' | 'pass' | 'fail'
  detail?: string
}

const DEFAULT_CHECKS: CheckItem[] = [
  { name: 'TypeCheck', status: 'pending' },
  { name: 'Build', status: 'pending' },
  { name: 'Lint', status: 'pending' },
  { name: 'Test', status: 'pending' },
]

function deriveCheckStatus(logs: string, checkName: string): CheckItem['status'] {
  const lower = logs.toLowerCase()
  const key = checkName.toLowerCase()

  // Check for running patterns
  if (lower.includes(`running ${key}`) || lower.includes(`${key}...`)) {
    // But check if it finished
    if (lower.includes(`${key} passed`) || lower.includes(`${key} pass`) || lower.includes(`${key}: pass`) || lower.includes(`${key} succeeded`) || lower.includes(`${key} ok`)) {
      return 'pass'
    }
    if (lower.includes(`${key} failed`) || lower.includes(`${key} fail`) || lower.includes(`${key}: fail`) || lower.includes(`${key} error`)) {
      return 'fail'
    }
    return 'running'
  }

  // Direct pass/fail keywords
  if (lower.includes(`${key} passed`) || lower.includes(`${key} pass`) || lower.includes(`${key}: pass`) || lower.includes(`${key} succeeded`) || lower.includes(`${key}: 0 errors`) || lower.includes(`${key} ok`)) {
    return 'pass'
  }
  if (lower.includes(`${key} failed`) || lower.includes(`${key} fail`) || lower.includes(`${key}: fail`) || lower.includes(`${key} error`)) {
    return 'fail'
  }

  return 'pending'
}

function findCheckDetail(logs: string, checkName: string): string | undefined {
  const key = checkName.toLowerCase()

  // Try to extract a detail line
  const lines = logs.split('\n')
  for (const line of lines) {
    const lineLower = line.toLowerCase()
    if (lineLower.includes(key) && (lineLower.includes('error') || lineLower.includes('warning') || lineLower.includes('pass'))) {
      return line.trim().slice(0, 120)
    }
  }
  return undefined
}

// Placeholder kill handler for verify-only view
function noopKill(_id: string): void {
  // Verify agents are not killable from this view
}

export function VerifyingView({ agents, characters }: VerifyingViewProps): JSX.Element {
  const checks = useMemo((): CheckItem[] => {
    // Collect all stdout logs from all agents into one string
    const allLogs = agents
      .flatMap((a) => a.logs.filter((l) => l.type === 'stdout').map((l) => l.text))
      .join('\n')

    if (!allLogs) return DEFAULT_CHECKS

    const checkNames = ['typecheck', 'build', 'lint', 'test']
    const derived = checkNames.map((name) => {
      const displayName = name.charAt(0).toUpperCase() + name.slice(1)
      const status = deriveCheckStatus(allLogs, name)
      const detail = status === 'fail' ? findCheckDetail(allLogs, name) : undefined
      return { name: displayName, status, detail }
    })

    // If none derived anything meaningful, return defaults
    const hasDerived = derived.some((c) => c.status !== 'pending')
    return hasDerived ? derived : DEFAULT_CHECKS
  }, [agents])

  return (
    <div className="grid grid-cols-[280px_1fr] gap-4 h-full">
      {/* Left: TeamScene showing verify/test agents */}
      <div className="rounded-2xl border border-black-600 bg-black-800/40 overflow-y-auto p-3">
        <TeamScene agents={agents} characters={characters} onKill={noopKill} />
      </div>

      {/* Right: VerificationChecklist */}
      <div className="rounded-2xl border border-black-600 bg-black-800/40 overflow-y-auto p-4">
        <h3 className="text-sm font-semibold text-white mb-3">Verification Checks</h3>
        <VerificationChecklist checks={checks} />
      </div>
    </div>
  )
}
