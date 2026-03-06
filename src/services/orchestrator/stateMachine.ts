import type { MissionPhase, MissionEvent } from './types'

export interface TransitionResult {
  next: MissionPhase
  valid: boolean
  reason: string
}

const VALID_TRANSITIONS: Record<string, MissionPhase> = {
  'idle:PLAN_READY': 'planning',      // Not used — planning starts immediately
  'planning:PLAN_READY': 'scouting',
  'planning:PLAN_FAILED': 'failed',
  'scouting:SCOUT_DONE': 'building',
  'scouting:SCOUT_FAILED': 'building', // Soft fail — proceed without scout
  'scouting:SCOUT_SKIPPED': 'building',
  'building:ALL_BUILDERS_DONE': 'testing',
  'building:BUILDER_FAILED': 'failed',
  'testing:TEST_PASSED': 'verifying',
  'testing:TEST_FAILED': 'building',   // Retry cycle
  'verifying:VERIFY_DONE': 'done',
  'verifying:VERIFY_FAILED': 'done',   // Advisory — still mark done
}

export function transition(current: MissionPhase, event: MissionEvent): TransitionResult {
  // Abort from any active phase
  if (event.type === 'ABORT') {
    if (current === 'done' || current === 'failed' || current === 'aborted' || current === 'idle') {
      return { next: current, valid: false, reason: `Cannot abort from ${current}` }
    }
    return { next: 'aborted', valid: true, reason: 'Mission aborted by user' }
  }

  const key = `${current}:${event.type}`
  const next = VALID_TRANSITIONS[key]

  if (!next) {
    return {
      next: current,
      valid: false,
      reason: `Invalid transition: ${event.type} from phase ${current}`,
    }
  }

  let reason = `${current} → ${next}`
  if (event.type === 'SCOUT_FAILED') {
    reason = 'Scout failed — proceeding without codebase context'
  } else if (event.type === 'VERIFY_FAILED') {
    reason = 'Verification failed — marking done with warnings'
  } else if (event.type === 'TEST_FAILED' && 'error' in event) {
    reason = `Tests failed: ${event.error} — retrying build`
  } else if (event.type === 'BUILDER_FAILED' && 'error' in event) {
    reason = `Build failed: ${event.error}`
  } else if (event.type === 'PLAN_FAILED' && 'error' in event) {
    reason = `Planning failed: ${event.error}`
  }

  return { next, valid: true, reason }
}

/** Check if a phase is a terminal state */
export function isTerminal(phase: MissionPhase): boolean {
  return phase === 'done' || phase === 'failed' || phase === 'aborted'
}

/** Check if a phase is actively running agents */
export function isActive(phase: MissionPhase): boolean {
  return phase === 'planning' || phase === 'scouting' || phase === 'building' || phase === 'testing' || phase === 'verifying'
}
