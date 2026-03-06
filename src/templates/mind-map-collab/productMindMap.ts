import { TemplateDefinition, TemplateCategory } from '../types'

export const productMindMap: TemplateDefinition = {
  id: 'product-mind-map',
  name: 'Product Mind Map',
  category: TemplateCategory.MindMapCollab,
  description: 'Map your product structure as a mind map with branches, sub-topics, and detailed elaborations.',
  longDescription: 'Visualize your entire product as a mind map radiating from a central theme. Define main branches for key areas, then elaborate on each with sticky clusters. Perfect for product discovery, feature brainstorming, and communicating product architecture to stakeholders.',
  emoji: '\u{1F5FA}\uFE0F',
  estimatedTime: '~8 min',
  blueprintId: 'product-mind-map',
  brainCategory: 'mind-map-collab',
  brainBlueprint: 'product-mind-map',
  complexity: 'medium',
  color: '#00695C',
  tags: ['mind-map', 'product', 'structure', 'brainstorm', 'visualization', 'discovery'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     PRODUCT MIND MAP            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502     [A] \u2500\u2500 [Core] \u2500\u2500 [B]       \u2502
\u2502             \u2502                   \u2502
\u2502            [C]                   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Elaboration Notes]           \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme Platform', required: true },
    { id: 'centralTheme', label: 'Central Theme', type: 'text', placeholder: 'e.g., User Experience, Feature Set', required: true },
    { id: 'branches', label: 'Main Branches', type: 'textarea', placeholder: 'Main branches or topics, one per line', required: false, helpText: 'Main branches/topics, one per line' },
    { id: 'depth', label: 'Map Depth', type: 'text', placeholder: 'e.g., 3 levels deep', required: false },
    { id: 'context', label: 'Context', type: 'textarea', placeholder: 'Additional context for the mind map', required: false },
  ],
  sections: [
    { id: 'mind-map-flow', name: 'Mind Map', type: 'flowchart', description: 'Flowchart-based mind map radiating from the central theme', icon: '\u{1F5FA}\uFE0F' },
    { id: 'elaboration', name: 'Elaboration Notes', type: 'sticky_cluster', description: 'Sticky notes with detailed notes for each branch', icon: '\u{1F4DD}' },
  ],
}
