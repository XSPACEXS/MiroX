import { TemplateDefinition, TemplateCategory } from '../types'

export const mvpPlanning: TemplateDefinition = {
  id: 'mvp-planning',
  name: 'MVP Planning Board',
  category: TemplateCategory.Startup,
  description: 'Plan your minimum viable product with scope definition, feature prioritization, and success metrics.',
  longDescription: 'Define what goes into your MVP and what stays out. Start with a scope definition document, organize features in a kanban board by priority, and track success metrics in a table. Keep your team focused on shipping the smallest valuable product.',
  emoji: '\u{1F680}',
  estimatedTime: '~8 min',
  blueprintId: 'mvp-planning',
  brainCategory: 'startup',
  brainBlueprint: 'mvp-planning',
  complexity: 'medium',
  color: '#BF360C',
  tags: ['mvp', 'planning', 'startup', 'product', 'scope', 'prioritization'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502      MVP PLANNING BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Scope Definition               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Must Have \u2502 Nice Have \u2502 Out Scope \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Success Metrics Table          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., TaskFlow v1', required: true },
    { id: 'targetUser', label: 'Target User', type: 'text', placeholder: 'e.g., Freelance designers', required: true },
    { id: 'coreProblem', label: 'Core Problem', type: 'textarea', placeholder: 'What problem does your MVP solve?', required: true },
    { id: 'mvpScope', label: 'MVP Scope (In)', type: 'textarea', placeholder: 'Features included in MVP, one per line', required: false },
    { id: 'outOfScope', label: 'Out of Scope', type: 'textarea', placeholder: 'Features explicitly excluded, one per line', required: false },
    { id: 'successMetrics', label: 'Success Metrics', type: 'textarea', placeholder: 'How will you measure MVP success?', required: false },
    { id: 'timeline', label: 'Timeline', type: 'text', placeholder: 'e.g., 6 weeks', required: false },
  ],
  sections: [
    { id: 'scope-doc', name: 'Scope Definition', type: 'document', description: 'Document defining MVP scope, target user, and core problem', icon: '\u{1F4D1}' },
    { id: 'feature-kanban', name: 'Feature Kanban', type: 'kanban', description: 'Kanban board organizing features by Must Have, Nice to Have, Out of Scope', icon: '\u{1F4CB}' },
    { id: 'metrics-table', name: 'Success Metrics', type: 'table', description: 'Table tracking success metrics with targets and measurement methods', icon: '\u{1F3AF}' },
  ],
}
