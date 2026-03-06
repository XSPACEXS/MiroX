import { TemplateDefinition, TemplateCategory } from '../types'

export const dealTracker: TemplateDefinition = {
  id: 'deal-tracker',
  name: 'Deal Tracker Board',
  category: TemplateCategory.Sales,
  description: 'Track deals through stages with a visual Kanban board and detail table.',
  longDescription: 'Keep track of all your active deals in a simple, visual format. Use the Kanban board to see deal flow at a glance and the detail table for specifics like deal value, close date, and blockers. Great for weekly pipeline reviews and sales standups.',
  emoji: '\u{1F3AF}',
  estimatedTime: '~5 min',
  blueprintId: 'deal-tracker',
  brainCategory: 'sales',
  brainBlueprint: 'deal-tracker',
  complexity: 'simple',
  color: '#01579B',
  tags: ['deals', 'tracker', 'sales', 'pipeline', 'CRM'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     DEAL TRACKER BOARD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  DEAL STAGES  \u2502 DEAL DETAILS \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., SMB Sales Team', required: true },
    { id: 'period', label: 'Period', type: 'text', placeholder: 'e.g., March 2026', required: true },
    { id: 'deals', label: 'Active Deals', type: 'textarea', placeholder: 'Deal name and value, one per line', required: true, helpText: 'Deal name and value, one per line' },
    { id: 'blockers', label: 'Current Blockers', type: 'textarea', placeholder: 'Issues blocking deal progress', required: false },
  ],
  sections: [
    { id: 'dealStages', name: 'Deal Stages', type: 'kanban', description: 'Deals organized by pipeline stage', icon: '\u{1F4CB}' },
    { id: 'dealDetails', name: 'Deal Details', type: 'table', description: 'Full deal details with value, contact, and next steps', icon: '\u{1F4CA}' },
  ],
}
