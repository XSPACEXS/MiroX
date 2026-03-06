import { TemplateDefinition, TemplateCategory } from '../types'

export const cultureCanvas: TemplateDefinition = {
  id: 'culture-canvas',
  name: 'Culture Canvas Board',
  category: TemplateCategory.CompanyBuilding,
  description: 'Design your company culture with values, behaviors, rituals, and hiring criteria.',
  longDescription: 'Build intentional company culture using a structured canvas. Map core values in a matrix, document what each value means in practice, and cluster specific behaviors and rituals that bring culture to life. Includes anti-patterns to avoid and hiring criteria to maintain culture as you scale.',
  emoji: '\u{1F3AD}',
  estimatedTime: '~8 min',
  blueprintId: 'culture-canvas',
  brainCategory: 'company-building',
  brainBlueprint: 'culture-canvas',
  complexity: 'medium',
  color: '#880E4F',
  tags: ['culture', 'canvas', 'values', 'company', 'hiring', 'team-building'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    CULTURE CANVAS BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Values       \u2502  Behaviors    \u2502
\u2502  Rituals      \u2502  Anti-Culture \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Values Deep Dive               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Behaviors Cluster]            \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'coreValues', label: 'Core Values', type: 'textarea', placeholder: 'Core values, one per line', required: true },
    { id: 'behaviors', label: 'Expected Behaviors', type: 'textarea', placeholder: 'Behaviors that embody values, one per line', required: false },
    { id: 'rituals', label: 'Team Rituals', type: 'textarea', placeholder: 'Rituals and practices, one per line', required: false },
    { id: 'hiringBar', label: 'Hiring Bar', type: 'textarea', placeholder: 'Culture-fit criteria for hiring', required: false },
    { id: 'antiCulture', label: 'Anti-Culture', type: 'textarea', placeholder: 'Behaviors to avoid, one per line', required: false },
  ],
  sections: [
    { id: 'culture-matrix', name: 'Culture Canvas', type: 'matrix', description: 'Multi-cell canvas mapping values, behaviors, rituals, and anti-patterns', icon: '\u{1F3AD}' },
    { id: 'values-doc', name: 'Values Deep Dive', type: 'document', description: 'Document exploring what each value means in practice', icon: '\u{1F4D6}' },
    { id: 'behaviors-cluster', name: 'Behaviors', type: 'sticky_cluster', description: 'Sticky notes for specific behaviors and rituals', icon: '\u{1F4CC}' },
  ],
}
