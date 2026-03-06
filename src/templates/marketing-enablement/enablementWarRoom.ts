import { TemplateDefinition, TemplateCategory } from '../types'

export const enablementWarRoom: TemplateDefinition = {
  id: 'enablement-war-room',
  name: 'Enablement War Room',
  category: TemplateCategory.MarketingEnablement,
  description: 'Coordinate marketing campaigns with task tracking, status dashboards, and blocker management.',
  longDescription: 'Run your marketing campaigns like a war room. Track all campaign tasks on a kanban board, monitor status across channels in a table, and surface blockers in a sticky cluster for rapid resolution. Designed for fast-paced launch teams that need real-time visibility.',
  emoji: '\u2694\uFE0F',
  estimatedTime: '~12 min',
  blueprintId: 'enablement-war-room',
  brainCategory: 'marketing-enablement',
  brainBlueprint: 'enablement-war-room',
  complexity: 'complex',
  color: '#B71C1C',
  tags: ['campaign', 'war-room', 'marketing', 'enablement', 'launch', 'coordination'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    ENABLEMENT WAR ROOM          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   To Do   \u2502 In Prog  \u2502   Done    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Status Table                   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Blockers Cluster]             \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'campaignName', label: 'Campaign Name', type: 'text', placeholder: 'e.g., Spring Product Launch', required: true },
    { id: 'launchDate', label: 'Launch Date', type: 'date', placeholder: 'Select launch date', required: true },
    { id: 'channels', label: 'Channels', type: 'textarea', placeholder: 'Marketing channels, one per line', required: false },
    { id: 'budget', label: 'Budget', type: 'text', placeholder: 'e.g., $50,000', required: false },
    { id: 'goals', label: 'Campaign Goals', type: 'textarea', placeholder: 'What does success look like?', required: true },
    { id: 'blockers', label: 'Known Blockers', type: 'textarea', placeholder: 'Current blockers or risks, one per line', required: false },
  ],
  sections: [
    { id: 'campaign-kanban', name: 'Campaign Tasks', type: 'kanban', description: 'Kanban board tracking all campaign tasks by status', icon: '\u{1F4CB}' },
    { id: 'status-table', name: 'Channel Status', type: 'table', description: 'Table showing status across each marketing channel', icon: '\u{1F4CA}' },
    { id: 'blockers-cluster', name: 'Blockers', type: 'sticky_cluster', description: 'Sticky notes highlighting blockers that need resolution', icon: '\u{1F6A8}' },
  ],
}
