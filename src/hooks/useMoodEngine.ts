import { useMemo } from 'react'
import type { AgentRun } from '@/types/agent'
import type { AgentMood, PersonalityTrait } from '@/types/character'

interface AgentActivityLike {
  isActive: boolean
  isIdle: boolean
}

/** Derive mood from agent status and recent log activity */
export function deriveMood(agent: AgentRun, activity: AgentActivityLike): AgentMood {
  // Terminal states
  if (agent.status === 'completed') return 'celebrating'
  if (agent.status === 'failed' || agent.status === 'killed') return 'frustrated'

  // Not running
  if (agent.status !== 'running') return 'idle'

  // Idle detection
  if (activity.isIdle) return 'idle'

  // Check recent logs for errors
  const recentLogs = agent.logs.slice(-15)
  const stderrCount = recentLogs.filter((l) => l.type === 'stderr').length
  if (stderrCount >= 3) return 'frustrated'

  // Check for high write activity (excited)
  const writeCount = recentLogs.filter(
    (l) => l.type === 'stdout' && /\b(Edit|Write|edit|write|Creating|creating)\b/.test(l.text)
  ).length
  if (writeCount >= 4) return 'excited'

  // Active = focused
  if (activity.isActive) return 'focused'

  // Between active and idle = thinking
  return 'thinking'
}

/** Hook that returns derived mood for an agent */
export function useMood(agent: AgentRun, activity: AgentActivityLike): AgentMood {
  const lastLogTimestamp = agent.logs.length > 0 ? agent.logs[agent.logs.length - 1]!.timestamp : 0

  return useMemo(
    () => deriveMood(agent, activity),
    // Re-derive when status changes, log count changes significantly, or activity state changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [agent.status, agent.logs.length, activity.isActive, activity.isIdle, lastLogTimestamp]
  )
}

// --- Personality-flavored speech ---

const TRAIT_PREFIXES: Record<PersonalityTrait, string[]> = {
  meticulous: ['Carefully ', 'Double-checking: '],
  enthusiastic: ['Ooh! ', 'Nice! '],
  cautious: ['Hmm, ', 'Let me verify: '],
  creative: ['What if I ', 'Trying something new: '],
  analytical: ['Analyzing ', 'Looking at '],
  tenacious: ['Still on it: ', 'Pushing through: '],
  pragmatic: ['', 'Quick '],
  methodical: ['Step by step: ', 'Next: '],
  curious: ['I wonder... ', 'Interesting: '],
  decisive: ['', 'Going with '],
  patient: ['Taking my time: ', 'Steady: '],
  bold: ["Let's do this! ", 'Diving into '],
}

const TRAIT_SUFFIXES: Record<PersonalityTrait, string[]> = {
  meticulous: ['...checking twice', ''],
  enthusiastic: ['!', ' - love it!'],
  cautious: ['...let me verify', ''],
  creative: ['', '?'],
  analytical: ['...', ''],
  tenacious: ['', ' (not giving up)'],
  pragmatic: [' - done', ''],
  methodical: ['', ''],
  curious: ['', '...'],
  decisive: ['. Next!', ''],
  patient: ['', ''],
  bold: ['', '!'],
}

/** Apply personality flavor to speech bubble text (30% chance) */
export function flavorSpeech(
  text: string,
  traits: [PersonalityTrait, PersonalityTrait],
  seed: number
): string {
  // Only apply 30% of the time for natural feel
  if (seed % 10 >= 3) return text

  const trait = traits[seed % 2]!
  const prefixes = TRAIT_PREFIXES[trait]!
  const suffixes = TRAIT_SUFFIXES[trait]!
  const prefix = prefixes[seed % prefixes.length]!
  const suffix = suffixes[seed % suffixes.length]!

  return `${prefix}${text}${suffix}`
}
