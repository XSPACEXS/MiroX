import { TemplateDefinition, TemplateCategory } from '../types'

export const releasePlanning: TemplateDefinition = {
  id: 'release-planning',
  name: 'Release Planning',
  category: TemplateCategory.Agile,
  description: 'Release train timeline with features grouped by version and dependency tracking.',
  longDescription: 'Plan your release schedule with a visual timeline showing feature clusters, milestones, and dependencies across multiple versions. Coordinate cross-team efforts, track feature readiness, and communicate release plans to stakeholders.',
  emoji: '\u{1F6A2}',
  estimatedTime: '~4 min',
  blueprintId: 'release-planning',
  brainCategory: 'product-development',
  brainBlueprint: 'release-planning',
  complexity: 'medium',
  color: '#7C3AED',
  tags: ['release', 'planning', 'versions', 'features', 'timeline', 'coordination'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       RELEASE PLANNING              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 v1.0 \u2500\u2500> \u25CB \u2500\u2500> v2.0 \u2500\u2500> \u25CB \u2500\u2500> v3.0 \u2502
\u2502 [features]  [features]  [features]  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  FEATURE TABLE                      \u2502
\u2502  Feature | Release | Status | Team   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  RELEASE STRATEGY DOCUMENT          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Platform v2', required: true },
    { id: 'v1Features', label: 'v1.0 Features', type: 'textarea', placeholder: 'Features for first release, one per line', required: true },
    { id: 'v2Features', label: 'v2.0 Features', type: 'textarea', placeholder: 'Features for second release, one per line', required: false },
    { id: 'v3Features', label: 'v3.0 Features', type: 'textarea', placeholder: 'Features for third release, one per line', required: false },
    { id: 'releaseSchedule', label: 'Release Schedule', type: 'text', placeholder: 'e.g., v1.0: March, v2.0: June, v3.0: September', required: false },
    { id: 'teamName', label: 'Team / Product Owner', type: 'text', placeholder: 'e.g., Core Platform Team', required: false },
  ],
  sections: [
    { id: 'timeline', name: 'Release Timeline', type: 'flowchart', description: 'Visual timeline with release milestones', icon: '\u{1F6A2}' },
    { id: 'features', name: 'Feature Table', type: 'table', description: 'Feature list with release, priority, and status', icon: '\u{1F4CB}' },
    { id: 'strategy', name: 'Release Strategy', type: 'document', description: 'Version history, rollback plan, and highlights', icon: '\u{1F4DD}' },
  ],
}
