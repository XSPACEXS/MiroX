import { TemplateDefinition, TemplateCategory } from '../types'

export const investorBoard: TemplateDefinition = {
  id: 'investor-board',
  name: 'Investor Update Board',
  category: TemplateCategory.Startup,
  description: 'Create polished investor updates with highlights, key metrics, challenges, and asks.',
  longDescription: 'Keep your investors informed and engaged with a structured update board. Present highlights in a narrative document, track key metrics in a clear table, and use a roadmap cluster to show what comes next. Perfect for monthly or quarterly investor communications.',
  emoji: '\u{1F48E}',
  estimatedTime: '~12 min',
  blueprintId: 'investor-board',
  brainCategory: 'startup',
  brainBlueprint: 'investor-board',
  complexity: 'complex',
  color: '#4E342E',
  tags: ['investor', 'update', 'startup', 'fundraising', 'metrics', 'reporting'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    INVESTOR UPDATE BOARD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Highlights Document            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Metric\u2502 Target \u2502 Actual\u2502  Trend  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Roadmap Cluster]              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Inc.', required: true },
    { id: 'period', label: 'Update Period', type: 'text', placeholder: 'e.g., January 2026', required: true },
    { id: 'highlights', label: 'Highlights', type: 'textarea', placeholder: 'Key wins and progress, one per line', required: true },
    { id: 'metrics', label: 'Key Metrics', type: 'textarea', placeholder: 'Metric and value, one per line', required: true, helpText: 'Key metrics with values' },
    { id: 'challenges', label: 'Challenges', type: 'textarea', placeholder: 'Current obstacles and risks', required: false },
    { id: 'asks', label: 'Asks', type: 'textarea', placeholder: 'What you need from investors', required: false },
  ],
  sections: [
    { id: 'highlights-doc', name: 'Highlights', type: 'document', description: 'Narrative document covering key wins and company progress', icon: '\u{1F31F}' },
    { id: 'metrics-table', name: 'Metrics Dashboard', type: 'table', description: 'Table of key metrics with targets, actuals, and trends', icon: '\u{1F4CA}' },
    { id: 'roadmap-cluster', name: 'Roadmap & Asks', type: 'sticky_cluster', description: 'Sticky notes for upcoming roadmap items and investor asks', icon: '\u{1F5FA}\uFE0F' },
  ],
}
