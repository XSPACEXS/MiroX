import { TemplateDefinition, TemplateCategory } from '../types'

export const prioritizationMatrix: TemplateDefinition = {
  id: 'prioritization-matrix',
  name: 'Prioritization Matrix',
  category: TemplateCategory.ProductDevelopment,
  description: 'Prioritize features and initiatives using a 2x2 matrix and weighted scoring.',
  longDescription: 'Use a visual prioritization framework to rank features, projects, or initiatives. Plot items on a 2x2 impact vs. effort matrix and score them in a weighted table to make data-driven prioritization decisions.',
  emoji: '\u{2696}\u{FE0F}',
  estimatedTime: '~8 min',
  blueprintId: 'prioritization-matrix',
  brainCategory: 'product-development',
  brainBlueprint: 'prioritization-matrix',
  complexity: 'medium',
  color: '#00BCD4',
  tags: ['prioritization', 'matrix', 'product', 'scoring', 'decision'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  PRIORITIZATION MATRIX        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  2x2 MATRIX   \u2502 SCORE TABLE  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme Platform', required: true },
    { id: 'features', label: 'Features to Prioritize', type: 'textarea', placeholder: 'List features to prioritize, one per line', required: true, helpText: 'List features to prioritize, one per line' },
    { id: 'criteria', label: 'Scoring Criteria', type: 'textarea', placeholder: 'e.g., User Impact, Revenue Potential, Technical Feasibility', required: false },
    { id: 'team', label: 'Team Context', type: 'textarea', placeholder: 'Team size, constraints, and timeline', required: false },
  ],
  sections: [
    { id: 'matrix', name: '2x2 Priority Matrix', type: 'matrix', description: 'Impact vs. Effort grid for visual prioritization', icon: '\u{2696}\u{FE0F}' },
    { id: 'scoring', name: 'Scoring Table', type: 'table', description: 'Weighted scoring for each feature against criteria', icon: '\u{1F4CA}' },
  ],
}
