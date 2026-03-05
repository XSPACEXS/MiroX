import type { TemplateDefinition } from './types'
import { TemplateCategory } from './types'

// Strategy
import { businessPlan } from './strategy/businessPlan'
import { swot } from './strategy/swot'
import { bmc } from './strategy/bmc'
import { okrTracker } from './strategy/okrTracker'
import { productRoadmap } from './strategy/productRoadmap'
import { riskMatrix } from './strategy/riskMatrix'
import { pitchDeck } from './strategy/pitchDeck'
import { valueProposition } from './strategy/valueProposition'

// Agile
import { kanban } from './agile/kanban'
import { sprintPlanning } from './agile/sprintPlanning'
import { projectDashboard } from './agile/projectDashboard'
import { userStoryMap } from './agile/userStoryMap'
import { releasePlanning } from './agile/releasePlanning'

// Design UX
import { userJourney } from './design-ux/userJourney'
import { persona } from './design-ux/persona'
import { empathyMap } from './design-ux/empathyMap'
import { designSprint } from './design-ux/designSprint'
import { wireframe } from './design-ux/wireframe'

// Technical
import { systemArchitecture } from './technical/systemArchitecture'
import { apiDesign } from './technical/apiDesign'
import { databaseDesign } from './technical/databaseDesign'
import { microservices } from './technical/microservices'
import { cicd } from './technical/cicd'

// Research
import { competitiveAnalysis } from './research/competitiveAnalysis'
import { pestle } from './research/pestle'
import { rootCause } from './research/rootCause'
import { marketResearch } from './research/marketResearch'
import { decisionMatrix } from './research/decisionMatrix'

// Brainstorm
import { brainstormSession } from './brainstorm/brainstormSession'
import { mindMap } from './brainstorm/mindMap'
import { affinityDiagram } from './brainstorm/affinityDiagram'
import { scamper } from './brainstorm/scamper'
import { moodBoard } from './brainstorm/moodBoard'

// Meetings
import { sprintRetro } from './meetings/sprintRetro'
import { dailyStandup } from './meetings/dailyStandup'
import { workshop } from './meetings/workshop'
import { teamBuilding } from './meetings/teamBuilding'
import { decisionLog } from './meetings/decisionLog'

export const ALL_TEMPLATES: TemplateDefinition[] = [
  // Strategy (8)
  businessPlan, swot, bmc, okrTracker, productRoadmap, riskMatrix, pitchDeck, valueProposition,
  // Agile (5)
  kanban, sprintPlanning, projectDashboard, userStoryMap, releasePlanning,
  // Design UX (5)
  userJourney, persona, empathyMap, designSprint, wireframe,
  // Technical (5)
  systemArchitecture, apiDesign, databaseDesign, microservices, cicd,
  // Research (5)
  competitiveAnalysis, pestle, rootCause, marketResearch, decisionMatrix,
  // Brainstorm (5)
  brainstormSession, mindMap, affinityDiagram, scamper, moodBoard,
  // Meetings (5)
  sprintRetro, dailyStandup, workshop, teamBuilding, decisionLog,
]

export const TEMPLATES_BY_CATEGORY: Record<TemplateCategory | 'all', TemplateDefinition[]> = {
  all: ALL_TEMPLATES,
  [TemplateCategory.Strategy]: [businessPlan, swot, bmc, okrTracker, productRoadmap, riskMatrix, pitchDeck, valueProposition],
  [TemplateCategory.Agile]: [kanban, sprintPlanning, projectDashboard, userStoryMap, releasePlanning],
  [TemplateCategory.Design]: [userJourney, persona, empathyMap, designSprint, wireframe],
  [TemplateCategory.Technical]: [systemArchitecture, apiDesign, databaseDesign, microservices, cicd],
  [TemplateCategory.Research]: [competitiveAnalysis, pestle, rootCause, marketResearch, decisionMatrix],
  [TemplateCategory.Brainstorm]: [brainstormSession, mindMap, affinityDiagram, scamper, moodBoard],
  [TemplateCategory.Meetings]: [sprintRetro, dailyStandup, workshop, teamBuilding, decisionLog],
}

export function getTemplate(id: string): TemplateDefinition | undefined {
  return ALL_TEMPLATES.find(t => t.id === id)
}

export const getTemplateById = getTemplate

export function searchTemplates(query: string): TemplateDefinition[] {
  if (!query.trim()) return ALL_TEMPLATES
  const q = query.toLowerCase()
  return ALL_TEMPLATES.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.includes(q)) ||
    t.category.includes(q)
  )
}

export type { TemplateDefinition, TemplateCategory }
export * from './types'
