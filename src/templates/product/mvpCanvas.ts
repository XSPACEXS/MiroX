import { TemplateDefinition, TemplateCategory } from '../types'

export const mvpCanvas: TemplateDefinition = {
  id: 'mvp-canvas',
  name: 'MVP Canvas',
  category: TemplateCategory.ProductDevelopment,
  description: 'Define your minimum viable product with a structured canvas and hypothesis doc.',
  longDescription: 'Use the MVP Canvas to define the smallest version of your product that delivers core value. Map out your value proposition, target user, key features, and success criteria in a structured canvas, then document your hypotheses for validation.',
  emoji: '\u{1F3AF}',
  estimatedTime: '~5 min',
  blueprintId: 'mvp-canvas',
  brainCategory: 'product-development',
  brainBlueprint: 'feature-planning',
  complexity: 'simple',
  color: '#4CAF50',
  tags: ['mvp', 'canvas', 'product', 'lean', 'startup', 'hypothesis'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502        MVP CANVAS             \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502    CANVAS      \u2502  HYPOTHESIS  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., TaskFlow', required: true },
    { id: 'coreValue', label: 'Core Value Proposition', type: 'textarea', placeholder: 'What is the single most important value this MVP delivers?', required: true },
    { id: 'targetUser', label: 'Target User', type: 'text', placeholder: 'e.g., Freelance designers', required: true },
    { id: 'mvpFeatures', label: 'MVP Features', type: 'textarea', placeholder: 'Must-have features only, one per line', required: false },
    { id: 'successCriteria', label: 'Success Criteria', type: 'textarea', placeholder: 'How will you know the MVP is successful?', required: false },
    { id: 'timeline', label: 'Timeline', type: 'text', placeholder: 'e.g., 6 weeks', required: false },
  ],
  sections: [
    { id: 'canvas', name: 'MVP Canvas', type: 'matrix', description: 'Structured canvas with value, users, features, and metrics', icon: '\u{1F3AF}' },
    { id: 'hypothesis', name: 'Hypothesis Document', type: 'document', description: 'Key hypotheses to validate with the MVP', icon: '\u{1F9EA}' },
  ],
}
