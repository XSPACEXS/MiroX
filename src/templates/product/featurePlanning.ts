import { TemplateDefinition, TemplateCategory } from '../types'

export const featurePlanning: TemplateDefinition = {
  id: 'feature-planning',
  name: 'Feature Planning Board',
  category: TemplateCategory.ProductDevelopment,
  description: 'Plan product features with specs, user stories, and priority/effort matrices.',
  longDescription: 'Define and plan new product features from problem statement through user stories and prioritization. Create detailed feature specs, map user stories with acceptance criteria, and prioritize against effort using a visual matrix.',
  emoji: '\u{2699}\u{FE0F}',
  estimatedTime: '~8 min',
  blueprintId: 'feature-planning',
  brainCategory: 'product-development',
  brainBlueprint: 'feature-planning',
  complexity: 'medium',
  color: '#2196F3',
  tags: ['feature', 'product', 'planning', 'user stories', 'prioritization'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   FEATURE PLANNING BOARD      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SPEC    \u2502 STORIES  \u2502 PRIORITY \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme App', required: true },
    { id: 'featureName', label: 'Feature Name', type: 'text', placeholder: 'e.g., Real-time Collaboration', required: true },
    { id: 'problem', label: 'Problem Statement', type: 'textarea', placeholder: 'What problem does this feature solve?', required: true },
    { id: 'users', label: 'Target Users', type: 'textarea', placeholder: 'Who will use this feature?', required: false },
    { id: 'successMetrics', label: 'Success Metrics', type: 'textarea', placeholder: 'How will you measure success?', required: false },
    { id: 'constraints', label: 'Constraints', type: 'textarea', placeholder: 'Technical, time, or resource constraints', required: false },
  ],
  sections: [
    { id: 'featureSpec', name: 'Feature Spec', type: 'document', description: 'Detailed feature specification and requirements', icon: '\u{1F4DD}' },
    { id: 'userStories', name: 'User Stories', type: 'sticky_cluster', description: 'User stories with acceptance criteria', icon: '\u{1F464}' },
    { id: 'priorityEffort', name: 'Priority / Effort Matrix', type: 'matrix', description: '2x2 grid mapping priority against effort', icon: '\u{2696}\u{FE0F}' },
  ],
}
