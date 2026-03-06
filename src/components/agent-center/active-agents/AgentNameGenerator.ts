import { getModelById } from '@services/modelRegistry'
import type { AgentRun } from '@/types/agent'

export function generateAgentName(agent: AgentRun): string {
  const modelDef = getModelById(agent.model)
  const label = modelDef?.label || agent.model

  if (agent.teamRole === 'primary') {
    return truncate(`Lead ${label}`)
  }

  if (agent.teamRole === 'collaborator') {
    if (modelDef?.outputType === 'image') return truncate(`Artist ${label}`)
    if (modelDef?.outputType === 'video') return truncate(`Director ${label}`)
    // Use teamSkill if available, otherwise fall back to generic role
    const skill = agent.teamSkill || 'Specialist'
    return truncate(`${skill} ${label}`)
  }

  return truncate(`${label} Agent`)
}

function truncate(name: string, max = 28): string {
  return name.length > max ? name.slice(0, max - 1) + '\u2026' : name
}
