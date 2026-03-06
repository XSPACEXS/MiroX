import { TemplateDefinition, TemplateCategory } from '../types'

export const revenueModel: TemplateDefinition = {
  id: 'revenue-model',
  name: 'Revenue Model Board',
  category: TemplateCategory.Finance,
  description: 'Model revenue streams with breakdowns and financial projections.',
  longDescription: 'Build and visualize your revenue model with detailed stream breakdowns, pricing structures, and financial projections. Document assumptions, model different scenarios, and create a clear picture of your path to revenue targets.',
  emoji: '\u{1F4B9}',
  estimatedTime: '~8 min',
  blueprintId: 'revenue-model',
  brainCategory: 'finance',
  brainBlueprint: 'revenue-model',
  complexity: 'medium',
  color: '#388E3C',
  tags: ['revenue', 'model', 'finance', 'pricing', 'projections'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    REVENUE MODEL BOARD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 MODEL BREAK.  \u2502 PROJECTIONS  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'streams', label: 'Revenue Streams', type: 'textarea', placeholder: 'List revenue streams, one per line', required: true },
    { id: 'pricing', label: 'Pricing Structure', type: 'textarea', placeholder: 'Pricing tiers, models, or strategies', required: false },
    { id: 'assumptions', label: 'Key Assumptions', type: 'textarea', placeholder: 'Growth rates, market size, conversion assumptions', required: false },
    { id: 'projections', label: 'Revenue Projections', type: 'textarea', placeholder: 'Monthly or quarterly projections', required: false },
  ],
  sections: [
    { id: 'modelBreakdown', name: 'Model Breakdown', type: 'table', description: 'Revenue streams with pricing, volume, and totals', icon: '\u{1F4CA}' },
    { id: 'projections', name: 'Financial Projections', type: 'document', description: 'Revenue projections and scenario analysis', icon: '\u{1F4B9}' },
  ],
}
