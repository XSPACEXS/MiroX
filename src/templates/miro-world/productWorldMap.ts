import { TemplateDefinition, TemplateCategory } from '../types'

export const productWorldMap: TemplateDefinition = {
  id: 'product-world-map',
  name: 'Product World Map',
  category: TemplateCategory.MiroWorld,
  description: 'Visualize your entire product as an explorable world map with interconnected areas and zones.',
  longDescription: 'Transform your product into a visual world map where each feature area becomes an explorable zone. Perfect for onboarding, product overviews, and team alignment. Use frames for world layout and sticky clusters for area-specific callouts and details.',
  emoji: '\u{1F30D}',
  estimatedTime: '~12 min',
  blueprintId: 'product-world-map',
  brainCategory: 'miro-world',
  brainBlueprint: 'product-world-map',
  complexity: 'complex',
  color: '#1A237E',
  tags: ['world-map', 'product', 'visualization', 'overview', 'miro-world', 'interactive'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     PRODUCT WORLD MAP           \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Zone A]  [Zone B]  [Zone C]   \u2502
\u2502      [Zone D]  [Zone E]         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Area Callouts]               \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme Platform', required: true },
    { id: 'areas', label: 'Product Areas / Zones', type: 'textarea', placeholder: 'Product areas to include, one per line', required: true, helpText: 'Product areas/zones to include' },
    { id: 'theme', label: 'Visual Theme', type: 'text', placeholder: 'e.g., Space, Nature, City', required: false },
    { id: 'audience', label: 'Audience', type: 'text', placeholder: 'e.g., New hires, customers', required: false },
    { id: 'highlights', label: 'Highlights', type: 'textarea', placeholder: 'Key highlights or callouts for the map', required: false },
  ],
  sections: [
    { id: 'world-layout', name: 'World Layout', type: 'frame', description: 'Frame-based layout representing the product world with zones', icon: '\u{1F30D}' },
    { id: 'area-callouts', name: 'Area Callouts', type: 'sticky_cluster', description: 'Sticky notes with details and descriptions for each product area', icon: '\u{1F4CC}' },
  ],
}
