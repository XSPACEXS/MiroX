import { getModelById } from '@services/modelRegistry'
import type { AgentRun } from '@/types/agent'

const TIER_ROLES: Record<string, string> = {
  flagship: 'Strategist',
  standard: 'Specialist',
  fast: 'Scout',
  lite: 'Sentry',
}

export function generateAgentName(agent: AgentRun): string {
  const modelDef = getModelById(agent.model)
  const label = modelDef?.label || agent.model

  if (agent.teamRole === 'primary') {
    return truncate(`Lead ${label}`)
  }

  if (agent.teamRole === 'collaborator') {
    if (modelDef?.outputType === 'image') return truncate(`Artist ${label}`)
    if (modelDef?.outputType === 'video') return truncate(`Director ${label}`)
    const role = TIER_ROLES[modelDef?.tier || 'standard'] || 'Specialist'
    return truncate(`${role} ${label}`)
  }

  return truncate(`${label} Agent`)
}

function truncate(name: string, max = 20): string {
  return name.length > max ? name.slice(0, max - 1) + '\u2026' : name
}
