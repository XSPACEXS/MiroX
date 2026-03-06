import { TemplateDefinition, TemplateCategory } from '../types'

export const investorUpdateBoard: TemplateDefinition = {
  id: 'investor-update-board',
  name: 'Investor Update Board',
  category: TemplateCategory.CompanyBuilding,
  description: 'Share structured investor updates with metrics, narrative highlights, and strategic asks.',
  longDescription: 'Keep investors informed with a structured update board designed for company-building stage. Track key metrics in a table, tell the company story through a narrative document, and surface asks and support needs through sticky clusters. Built for founders who want to maintain strong investor relationships.',
  emoji: '\u{1F4CA}',
  estimatedTime: '~12 min',
  blueprintId: 'investor-update-board',
  brainCategory: 'company-building',
  brainBlueprint: 'investor-update-board',
  complexity: 'complex',
  color: '#1B5E20',
  tags: ['investor', 'update', 'metrics', 'company-building', 'fundraising', 'reporting'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   INVESTOR UPDATE BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Metric\u2502 Target \u2502 Actual\u2502  Trend  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Company Narrative              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Asks & Support Cluster]       \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Inc.', required: true },
    { id: 'period', label: 'Update Period', type: 'text', placeholder: 'e.g., Q1 2026', required: true },
    { id: 'metrics', label: 'Key Metrics', type: 'textarea', placeholder: 'Key metrics with values, one per line', required: true, helpText: 'Key metrics with values' },
    { id: 'highlights', label: 'Highlights', type: 'textarea', placeholder: 'Key wins and milestones, one per line', required: true },
    { id: 'challenges', label: 'Challenges', type: 'textarea', placeholder: 'Current challenges and how you are addressing them', required: false },
    { id: 'nextQuarter', label: 'Next Quarter Plan', type: 'textarea', placeholder: 'Key priorities and goals for next period', required: false },
  ],
  sections: [
    { id: 'metrics-table', name: 'Metrics Dashboard', type: 'table', description: 'Table of key metrics with targets, actuals, and trends', icon: '\u{1F4CA}' },
    { id: 'narrative-doc', name: 'Company Narrative', type: 'document', description: 'Narrative document covering highlights, challenges, and outlook', icon: '\u{1F4D6}' },
    { id: 'asks-cluster', name: 'Asks & Support', type: 'sticky_cluster', description: 'Sticky notes for investor asks and support needs', icon: '\u{1F64B}' },
  ],
}
