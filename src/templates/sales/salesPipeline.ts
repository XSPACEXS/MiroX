import { TemplateDefinition, TemplateCategory } from '../types'

export const salesPipeline: TemplateDefinition = {
  id: 'sales-pipeline',
  name: 'Sales Pipeline Board',
  category: TemplateCategory.Sales,
  description: 'Manage your sales pipeline with stage tracking, deal details, and strategy docs.',
  longDescription: 'Visualize and manage your entire sales pipeline from prospect to close. Track deals through customizable stages, maintain a detailed deal tracker, and document your sales strategy. Perfect for sales teams of any size.',
  emoji: '\u{1F4BC}',
  estimatedTime: '~8 min',
  blueprintId: 'sales-pipeline',
  brainCategory: 'sales',
  brainBlueprint: 'sales-pipeline',
  complexity: 'medium',
  color: '#1565C0',
  tags: ['sales', 'pipeline', 'deals', 'CRM', 'tracking'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   SALES PIPELINE BOARD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 PIPELINE \u2502 TRACKER  \u2502 STRATEGY \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., Enterprise Sales', required: true },
    { id: 'quarter', label: 'Quarter', type: 'text', placeholder: 'e.g., Q2 2026', required: true },
    { id: 'target', label: 'Revenue Target', type: 'text', placeholder: 'e.g., $1,000,000', required: false },
    { id: 'stages', label: 'Pipeline Stages', type: 'textarea', placeholder: 'Pipeline stages, one per line', required: false, defaultValue: 'Prospect\nQualified\nProposal\nNegotiation\nClosed Won\nClosed Lost' },
    { id: 'topDeals', label: 'Top Deals', type: 'textarea', placeholder: 'Key deals in the pipeline', required: false },
  ],
  sections: [
    { id: 'pipeline', name: 'Pipeline Stages', type: 'kanban', description: 'Visual pipeline with deals moving through stages', icon: '\u{1F4BC}' },
    { id: 'dealTracker', name: 'Deal Tracker', type: 'table', description: 'Deal details with value, stage, and probability', icon: '\u{1F4CA}' },
    { id: 'strategy', name: 'Sales Strategy', type: 'document', description: 'Quarterly sales strategy and tactics', icon: '\u{1F4DD}' },
  ],
}
