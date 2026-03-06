import { TemplateDefinition, TemplateCategory } from '../types'

export const featureBundleBoard: TemplateDefinition = {
  id: 'feature-bundle-board',
  name: 'Feature Bundle Board',
  category: TemplateCategory.MarketingEnablement,
  description: 'Bundle product features for marketing with messaging guides and audience targeting.',
  longDescription: 'Organize product features into marketing bundles. Cluster features by theme, write messaging guides for each bundle, and align on target audiences. Perfect for product marketing teams preparing launch materials and sales enablement content.',
  emoji: '\u{1F4E6}',
  estimatedTime: '~8 min',
  blueprintId: 'feature-bundle-board',
  brainCategory: 'marketing-enablement',
  brainBlueprint: 'feature-bundle-board',
  complexity: 'medium',
  color: '#880E4F',
  tags: ['feature', 'bundle', 'marketing', 'messaging', 'enablement', 'product-marketing'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    FEATURE BUNDLE BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Features Cluster]             \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Messaging Guide                \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'bundleName', label: 'Bundle Name', type: 'text', placeholder: 'e.g., Enterprise Security Pack', required: true },
    { id: 'features', label: 'Features', type: 'textarea', placeholder: 'Features in this bundle, one per line', required: true },
    { id: 'audience', label: 'Target Audience', type: 'textarea', placeholder: 'Who is this bundle for?', required: false },
    { id: 'messaging', label: 'Key Messaging', type: 'textarea', placeholder: 'Core messages and value propositions', required: false },
    { id: 'assets', label: 'Required Assets', type: 'textarea', placeholder: 'Marketing assets needed, one per line', required: false },
  ],
  sections: [
    { id: 'features-cluster', name: 'Features', type: 'sticky_cluster', description: 'Clustered sticky notes for each feature in the bundle', icon: '\u{1F4E6}' },
    { id: 'messaging-guide', name: 'Messaging Guide', type: 'document', description: 'Document with messaging framework and value propositions', icon: '\u{1F4DD}' },
  ],
}
