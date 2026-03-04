import { TemplateDefinition, TemplateCategory } from '../types'

export const swot: TemplateDefinition = {
  id: 'swot-analysis',
  name: 'SWOT Analysis',
  category: TemplateCategory.Strategy,
  description: 'Classic 2x2 SWOT matrix for strategic analysis of strengths, weaknesses, opportunities, and threats.',
  longDescription: 'Evaluate your strategic position using the time-tested SWOT framework. Map your internal strengths and weaknesses alongside external opportunities and threats, then generate actionable insights for your next move.',
  emoji: '\u{1F3AF}',
  estimatedTime: '~3 min',
  blueprintId: 'swot-analysis',
  complexity: 'simple',
  color: '#FFD600',
  tags: ['swot', 'strategy', 'analysis', 'competitive', 'planning'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     SWOT ANALYSIS MATRIX      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  STRENGTHS   \u2502  WEAKNESSES  \u2502
\u2502  (mint)      \u2502  (coral)     \u2502
\u2502  \u2022 ...       \u2502  \u2022 ...       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 OPPORTUNITIES\u2502  THREATS     \u2502
\u2502  (sky)       \u2502  (lemon)     \u2502
\u2502  \u2022 ...       \u2502  \u2022 ...       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ACTION PLAN DOCUMENT         \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'projectName', label: 'Project / Company Name', type: 'text', placeholder: 'e.g., Acme Product Launch', required: true },
    { id: 'context', label: 'Context', type: 'textarea', placeholder: 'What are you analyzing? e.g., market entry, product pivot...', required: true },
    { id: 'strengths', label: 'Strengths', type: 'textarea', placeholder: 'Internal advantages, one per line', required: false, helpText: 'What do you do well? What unique resources do you have?' },
    { id: 'weaknesses', label: 'Weaknesses', type: 'textarea', placeholder: 'Internal disadvantages, one per line', required: false, helpText: 'Where can you improve? What resources do you lack?' },
    { id: 'opportunities', label: 'Opportunities', type: 'textarea', placeholder: 'External factors you can exploit, one per line', required: false, helpText: 'What trends can you leverage? What gaps exist in the market?' },
    { id: 'threats', label: 'Threats', type: 'textarea', placeholder: 'External risks and challenges, one per line', required: false, helpText: 'What obstacles do you face? What is the competition doing?' },
  ],
  sections: [
    { id: 'matrix', name: 'SWOT Matrix', type: 'matrix', description: '2x2 grid with Strengths, Weaknesses, Opportunities, Threats', icon: '\u{1F3AF}' },
    { id: 'actions', name: 'Action Plan', type: 'document', description: 'Strategic recommendations based on SWOT findings', icon: '\u{1F4CB}' },
  ],
}
