import { TemplateDefinition, TemplateCategory } from '../types'

export const orgGrowthPlan: TemplateDefinition = {
  id: 'org-growth-plan',
  name: 'Org Growth Plan',
  category: TemplateCategory.CompanyBuilding,
  description: 'Plan organizational growth with hiring plans, org evolution, and growth strategy documentation.',
  longDescription: 'Scale your organization intentionally with a structured growth plan. Visualize how your org structure evolves with a flowchart, track key hires in a table with timelines and budgets, and document your growth strategy. Perfect for founders and People/HR leaders planning the next stage of company growth.',
  emoji: '\u{1F4C8}',
  estimatedTime: '~12 min',
  blueprintId: 'org-growth-plan',
  brainCategory: 'company-building',
  brainBlueprint: 'org-growth-plan',
  complexity: 'complex',
  color: '#006064',
  tags: ['org', 'growth', 'hiring', 'company-building', 'scaling', 'planning'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502      ORG GROWTH PLAN            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Now \u2192 +6mo \u2192 +12mo \u2192 +24mo    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Role \u2502  Team  \u2502 Start \u2502 Priority\u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Growth Strategy Document       \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'currentStage', label: 'Current Stage', type: 'text', placeholder: 'e.g., Seed, Series A, Growth', required: false },
    { id: 'targetStage', label: 'Target Stage', type: 'text', placeholder: 'e.g., Series B, 100 employees', required: false },
    { id: 'hires', label: 'Key Hires Needed', type: 'textarea', placeholder: 'Key hires needed, one per line', required: true, helpText: 'Key hires needed, one per line' },
    { id: 'timeline', label: 'Timeline', type: 'text', placeholder: 'e.g., 18 months', required: false },
    { id: 'challenges', label: 'Growth Challenges', type: 'textarea', placeholder: 'Challenges to scaling the org', required: false },
    { id: 'budget', label: 'Hiring Budget', type: 'text', placeholder: 'e.g., $500K annually', required: false },
  ],
  sections: [
    { id: 'org-evolution', name: 'Org Evolution', type: 'flowchart', description: 'Flowchart showing org structure evolution over time', icon: '\u{1F4C8}' },
    { id: 'hiring-plan', name: 'Hiring Plan', type: 'table', description: 'Table of key hires with roles, teams, timelines, and priorities', icon: '\u{1F4CB}' },
    { id: 'growth-strategy', name: 'Growth Strategy', type: 'document', description: 'Document outlining the growth strategy and key considerations', icon: '\u{1F4D6}' },
  ],
}
