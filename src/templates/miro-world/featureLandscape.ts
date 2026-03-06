import { TemplateDefinition, TemplateCategory } from '../types'

export const featureLandscape: TemplateDefinition = {
  id: 'feature-landscape',
  name: 'Feature Landscape Board',
  category: TemplateCategory.MiroWorld,
  description: 'Showcase your product features as an explorable landscape with callouts and roadmap items.',
  longDescription: 'Present your product features as a visual landscape that stakeholders can explore. Each feature becomes a landmark on the map with detailed callouts. Include roadmap items to show where the landscape is heading. Ideal for product demos, sales enablement, and strategic reviews.',
  emoji: '\u{1F5FA}\uFE0F',
  estimatedTime: '~12 min',
  blueprintId: 'feature-landscape',
  brainCategory: 'miro-world',
  brainBlueprint: 'feature-landscape',
  complexity: 'complex',
  color: '#1B5E20',
  tags: ['feature', 'landscape', 'product', 'visualization', 'miro-world', 'roadmap'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   FEATURE LANDSCAPE BOARD       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Feature A]  [Feature B]       \u2502
\u2502     [Feature C]  [Feature D]    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Feature Callouts]            \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme Platform', required: true },
    { id: 'features', label: 'Key Features', type: 'textarea', placeholder: 'Key features to showcase, one per line', required: true, helpText: 'Key features to showcase' },
    { id: 'audience', label: 'Audience', type: 'text', placeholder: 'e.g., Customers, internal teams', required: false },
    { id: 'highlights', label: 'Highlights', type: 'textarea', placeholder: 'Notable highlights or differentiators', required: false },
    { id: 'roadmapItems', label: 'Roadmap Items', type: 'textarea', placeholder: 'Upcoming features, one per line', required: false },
  ],
  sections: [
    { id: 'landscape-frame', name: 'Feature Landscape', type: 'frame', description: 'Frame-based landscape layout with features as landmarks', icon: '\u{1F5FA}\uFE0F' },
    { id: 'feature-callouts', name: 'Feature Callouts', type: 'sticky_cluster', description: 'Sticky notes with detailed descriptions for each feature', icon: '\u{1F4CC}' },
  ],
}
