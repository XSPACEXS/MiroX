import { TemplateDefinition, TemplateCategory } from '../types'

export const whatsNewShowcase: TemplateDefinition = {
  id: 'whats-new-showcase',
  name: "What's New Showcase",
  category: TemplateCategory.MiroWorld,
  description: 'Showcase new features, improvements, and changes in a visual release board.',
  longDescription: 'Announce product updates with a visually engaging showcase board. Cluster new features as sticky notes, write detailed release notes in a document, and maintain a changelog table for reference. Perfect for product updates, sprint demos, and customer communications.',
  emoji: '\u2728',
  estimatedTime: '~8 min',
  blueprintId: 'whats-new-showcase',
  brainCategory: 'miro-world',
  brainBlueprint: 'whats-new-showcase',
  complexity: 'medium',
  color: '#E65100',
  tags: ['release', 'showcase', 'whats-new', 'changelog', 'product-update', 'miro-world'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    WHAT'S NEW SHOWCASE          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [New Features Cluster]         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Release Notes Document         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Changelog Table                \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme Platform', required: true },
    { id: 'version', label: 'Version', type: 'text', placeholder: 'e.g., v2.5.0', required: false },
    { id: 'newFeatures', label: 'New Features', type: 'textarea', placeholder: 'New features, one per line', required: true, helpText: 'New features, one per line' },
    { id: 'improvements', label: 'Improvements', type: 'textarea', placeholder: 'Improvements and enhancements, one per line', required: false },
    { id: 'deprecations', label: 'Deprecations', type: 'textarea', placeholder: 'Deprecated or removed features', required: false },
  ],
  sections: [
    { id: 'features-cluster', name: 'New Features', type: 'sticky_cluster', description: 'Clustered sticky notes showcasing each new feature', icon: '\u2728' },
    { id: 'release-notes', name: 'Release Notes', type: 'document', description: 'Detailed release notes document for the update', icon: '\u{1F4DD}' },
    { id: 'changelog-table', name: 'Changelog', type: 'table', description: 'Table of all changes organized by type and impact', icon: '\u{1F4CB}' },
  ],
}
