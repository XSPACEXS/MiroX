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

// Marketing
import { gtmStrategy } from './marketing/gtmStrategy'
import { campaignPlanning } from './marketing/campaignPlanning'
import { contentCalendar } from './marketing/contentCalendar'
import { funnelMapping } from './marketing/funnelMapping'
import { brandGuidelines } from './marketing/brandGuidelines'

// Product Development
import { featurePlanning } from './product/featurePlanning'
import { prioritizationMatrix } from './product/prioritizationMatrix'
import { mvpCanvas } from './product/mvpCanvas'

// Event Planning
import { eventGuide } from './event-planning/eventGuide'
import { agendaBoard } from './event-planning/agendaBoard'
import { speakerShowcase } from './event-planning/speakerShowcase'
import { venueLayout } from './event-planning/venueLayout'

// Customer Journey
import { touchpointAnalysis } from './customer-journey/touchpointAnalysis'

// Finance
import { budgetPlanning } from './finance/budgetPlanning'
import { financialDashboard } from './finance/financialDashboard'
import { investmentAnalysis } from './finance/investmentAnalysis'
import { revenueModel } from './finance/revenueModel'

// Education
import { lessonPlan } from './education/lessonPlan'
import { researchBoard } from './education/researchBoard'
import { studyMap } from './education/studyMap'
import { courseCurriculum } from './education/courseCurriculum'

// Team & HR
import { orgChart } from './team-hr/orgChart'
import { onboardingBoard } from './team-hr/onboardingBoard'
import { performanceReview } from './team-hr/performanceReview'

// Sales
import { salesPipeline } from './sales/salesPipeline'
import { accountPlanning } from './sales/accountPlanning'
import { salesPlaybook } from './sales/salesPlaybook'
import { dealTracker } from './sales/dealTracker'

// Data & Analytics
import { dataDashboard } from './data-analytics/dataDashboard'
import { kpiTracker } from './data-analytics/kpiTracker'
import { researchSynthesis } from './data-analytics/researchSynthesis'
import { surveyAnalysis } from './data-analytics/surveyAnalysis'

// Startup
import { leanCanvas } from './startup/leanCanvas'
import { investorBoard } from './startup/investorBoard'
import { mvpPlanning } from './startup/mvpPlanning'

// Launch & GTM
import { launchGTMOverview } from './launch-gtm/launchGTMOverview'

// Miro World
import { productWorldMap } from './miro-world/productWorldMap'
import { departmentCampus } from './miro-world/departmentCampus'
import { featureLandscape } from './miro-world/featureLandscape'
import { whatsNewShowcase } from './miro-world/whatsNewShowcase'

// Marketing Enablement
import { enablementWarRoom } from './marketing-enablement/enablementWarRoom'
import { featureBundleBoard } from './marketing-enablement/featureBundleBoard'
import { landingPageTracker } from './marketing-enablement/landingPageTracker'
import { tractionFunnel } from './marketing-enablement/tractionFunnel'

// Event Isometric
import { immersiveConferenceMap } from './event-isometric/immersiveConferenceMap'
import { festivalCampus } from './event-isometric/festivalCampus'
import { hybridEventLayout } from './event-isometric/hybridEventLayout'
import { distributedEventWorld } from './event-isometric/distributedEventWorld'

// Mind Map & Collab
import { collaborativeBrainstorm } from './mind-map-collab/collaborativeBrainstorm'
import { productMindMap } from './mind-map-collab/productMindMap'
import { researchClusterMap } from './mind-map-collab/researchClusterMap'
import { decisionTree } from './mind-map-collab/decisionTree'

// Company Building
import { companyVisionBoard } from './company-building/companyVisionBoard'
import { cultureCanvas } from './company-building/cultureCanvas'
import { investorUpdateBoard } from './company-building/investorUpdateBoard'
import { orgGrowthPlan } from './company-building/orgGrowthPlan'

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
  // Marketing (5)
  gtmStrategy, campaignPlanning, contentCalendar, funnelMapping, brandGuidelines,
  // Product Development (3)
  featurePlanning, prioritizationMatrix, mvpCanvas,
  // Event Planning (4)
  eventGuide, agendaBoard, speakerShowcase, venueLayout,
  // Customer Journey (1)
  touchpointAnalysis,
  // Finance (4)
  budgetPlanning, financialDashboard, investmentAnalysis, revenueModel,
  // Education (4)
  lessonPlan, researchBoard, studyMap, courseCurriculum,
  // Team & HR (3)
  orgChart, onboardingBoard, performanceReview,
  // Sales (4)
  salesPipeline, accountPlanning, salesPlaybook, dealTracker,
  // Data & Analytics (4)
  dataDashboard, kpiTracker, researchSynthesis, surveyAnalysis,
  // Startup (3)
  leanCanvas, investorBoard, mvpPlanning,
  // Launch & GTM (1)
  launchGTMOverview,
  // Miro World (4)
  productWorldMap, departmentCampus, featureLandscape, whatsNewShowcase,
  // Marketing Enablement (4)
  enablementWarRoom, featureBundleBoard, landingPageTracker, tractionFunnel,
  // Event Isometric (4)
  immersiveConferenceMap, festivalCampus, hybridEventLayout, distributedEventWorld,
  // Mind Map & Collab (4)
  collaborativeBrainstorm, productMindMap, researchClusterMap, decisionTree,
  // Company Building (4)
  companyVisionBoard, cultureCanvas, investorUpdateBoard, orgGrowthPlan,
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
  [TemplateCategory.Marketing]: [gtmStrategy, campaignPlanning, contentCalendar, funnelMapping, brandGuidelines],
  [TemplateCategory.ProductDevelopment]: [featurePlanning, prioritizationMatrix, mvpCanvas],
  [TemplateCategory.EventPlanning]: [eventGuide, agendaBoard, speakerShowcase, venueLayout],
  [TemplateCategory.Workshops]: [],
  [TemplateCategory.CustomerJourney]: [touchpointAnalysis],
  [TemplateCategory.Finance]: [budgetPlanning, financialDashboard, investmentAnalysis, revenueModel],
  [TemplateCategory.Education]: [lessonPlan, researchBoard, studyMap, courseCurriculum],
  [TemplateCategory.TeamHR]: [orgChart, onboardingBoard, performanceReview],
  [TemplateCategory.Sales]: [salesPipeline, accountPlanning, salesPlaybook, dealTracker],
  [TemplateCategory.DataAnalytics]: [dataDashboard, kpiTracker, researchSynthesis, surveyAnalysis],
  [TemplateCategory.Startup]: [leanCanvas, investorBoard, mvpPlanning],
  [TemplateCategory.LaunchGTM]: [launchGTMOverview],
  [TemplateCategory.MiroWorld]: [productWorldMap, departmentCampus, featureLandscape, whatsNewShowcase],
  [TemplateCategory.MarketingEnablement]: [enablementWarRoom, featureBundleBoard, landingPageTracker, tractionFunnel],
  [TemplateCategory.EventIsometric]: [immersiveConferenceMap, festivalCampus, hybridEventLayout, distributedEventWorld],
  [TemplateCategory.MindMapCollab]: [collaborativeBrainstorm, productMindMap, researchClusterMap, decisionTree],
  [TemplateCategory.TechnicalArchitecture]: [],
  [TemplateCategory.CompanyBuilding]: [companyVisionBoard, cultureCanvas, investorUpdateBoard, orgGrowthPlan],
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
