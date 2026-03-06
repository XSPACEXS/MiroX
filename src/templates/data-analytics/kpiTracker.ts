import { TemplateDefinition, TemplateCategory } from '../types'

export const kpiTracker: TemplateDefinition = {
  id: 'kpi-tracker',
  name: 'KPI Tracker Board',
  category: TemplateCategory.DataAnalytics,
  description: 'Track team KPIs with targets, owners, and status updates in a visual board format.',
  longDescription: 'Keep your team aligned on key performance indicators with a structured tracker. Define KPIs with targets, assign owners, and update status regularly. The board provides both a tracking table and a cluster of status update notes for context.',
  emoji: '\u{1F3AF}',
  estimatedTime: '~8 min',
  blueprintId: 'kpi-tracker',
  brainCategory: 'data-analytics',
  brainBlueprint: 'kpi-tracker',
  complexity: 'medium',
  color: '#00838F',
  tags: ['kpi', 'tracker', 'metrics', 'performance', 'goals', 'okr'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       KPI TRACKER BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  KPI  \u2502 Target \u2502 Actual\u2502 Status  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Status Update Notes]          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., Growth Team', required: true },
    { id: 'period', label: 'Tracking Period', type: 'text', placeholder: 'e.g., Q1 2026', required: true },
    { id: 'kpis', label: 'KPIs', type: 'textarea', placeholder: 'KPI name and target, one per line', required: true, helpText: 'KPI name and target, one per line' },
    { id: 'owner', label: 'Owner', type: 'text', placeholder: 'e.g., Sarah Chen', required: false },
    { id: 'status', label: 'Overall Status', type: 'text', placeholder: 'e.g., On Track, At Risk', required: false },
  ],
  sections: [
    { id: 'kpi-table', name: 'KPI Tracking Table', type: 'table', description: 'Table of KPIs with targets, actuals, and status indicators', icon: '\u{1F3AF}' },
    { id: 'status-updates', name: 'Status Updates', type: 'sticky_cluster', description: 'Sticky notes with context and commentary on KPI progress', icon: '\u{1F4CC}' },
  ],
}
