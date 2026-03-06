import { TemplateDefinition, TemplateCategory } from '../types'

export const valueProposition: TemplateDefinition = {
  id: 'value-proposition-canvas',
  name: 'Value Proposition Canvas',
  category: TemplateCategory.Strategy,
  description: 'Map customer jobs, pains, and gains against your product\'s value proposition.',
  longDescription: 'Achieve product-market fit by deeply understanding your customer. Map their jobs-to-be-done, pains, and gains on one side, then design your products, pain relievers, and gain creators to match. Visualize the fit between what customers need and what you offer.',
  emoji: '\u{1F48E}',
  estimatedTime: '~4 min',
  blueprintId: 'value-proposition-canvas',
  brainCategory: 'strategy-planning',
  brainBlueprint: 'vision-board',
  complexity: 'medium',
  color: '#FFD600',
  tags: ['value proposition', 'product-market fit', 'customer', 'canvas', 'jobs to be done'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502 CUSTOMER      \u2502 VALUE MAP      \u2502
\u2502 PROFILE       \u2502               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Customer Jobs \u2502 Products &    \u2502
\u2502  (sky)        \u2502 Services      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Pains         \u2502 Pain          \u2502
\u2502  (coral)      \u2502 Relievers     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Gains         \u2502 Gain          \u2502
\u2502  (mint)       \u2502 Creators      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  FIT ANALYSIS DOCUMENT         \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product / Service Name', type: 'text', placeholder: 'e.g., TaskFlow Pro', required: true },
    { id: 'customerJobs', label: 'Customer Jobs', type: 'textarea', placeholder: 'What jobs are your customers trying to get done?', required: true, helpText: 'Functional, social, and emotional jobs' },
    { id: 'customerPains', label: 'Customer Pains', type: 'textarea', placeholder: 'What frustrations or risks do they experience?', required: true },
    { id: 'customerGains', label: 'Customer Gains', type: 'textarea', placeholder: 'What outcomes and benefits do they desire?', required: true },
    { id: 'painRelievers', label: 'Pain Relievers', type: 'textarea', placeholder: 'How does your product eliminate or reduce customer pains?', required: false },
    { id: 'gainCreators', label: 'Gain Creators', type: 'textarea', placeholder: 'How does your product create customer gains?', required: false },
    { id: 'products', label: 'Products & Services', type: 'textarea', placeholder: 'List the products and services your value proposition is built around', required: true },
  ],
  sections: [
    { id: 'customerProfile', name: 'Customer Profile', type: 'frame', description: 'Jobs, pains, and gains of the target customer', icon: '\u{1F464}' },
    { id: 'valueMap', name: 'Value Map', type: 'frame', description: 'Products, pain relievers, and gain creators', icon: '\u{1F48E}' },
    { id: 'fitAnalysis', name: 'Fit Analysis', type: 'document', description: 'Assessment of product-market fit and gaps', icon: '\u{1F4DD}' },
  ],
}
