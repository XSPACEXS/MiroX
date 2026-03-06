import { TemplateDefinition, TemplateCategory } from '../types'

export const productRoadmap: TemplateDefinition = {
  id: 'product-roadmap',
  name: 'Product Roadmap',
  category: TemplateCategory.Strategy,
  description: 'Timeline-based product roadmap with phases, milestones, and feature tracking.',
  longDescription: 'Plan your product journey across multiple quarters with a visual roadmap. Define phases, set milestones, and track features from ideation through delivery. Great for stakeholder communication and team alignment on product direction.',
  emoji: '\u{1F5FA}\uFE0F',
  estimatedTime: '~5 min',
  blueprintId: 'product-roadmap',
  brainCategory: 'product-development',
  brainBlueprint: 'product-roadmap',
  complexity: 'medium',
  color: '#FFD600',
  tags: ['roadmap', 'product', 'timeline', 'milestones', 'features', 'planning'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502        PRODUCT ROADMAP              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   Q1    \u2502   Q2    \u2502   Q3    \u2502   Q4    \u2502
\u2502 Phase 1 \u2502 Phase 2 \u2502 Phase 3 \u2502 Launch  \u2502
\u2502\u2500\u2500>\u25CB\u2500\u2500>\u2502\u2500\u2500>\u25CB\u2500\u2500>\u2502\u2500\u2500>\u25CB\u2500\u2500>\u2502\u2500\u2500>\u25CF    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  FEATURE BACKLOG TABLE              \u2502
\u2502  Feature | Phase | Priority | Status \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ROADMAP STRATEGY DOCUMENT          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., MyApp 2.0', required: true },
    { id: 'q1Goals', label: 'Q1 Goals', type: 'textarea', placeholder: 'Key goals for Q1, one per line', required: true },
    { id: 'q2Goals', label: 'Q2 Goals', type: 'textarea', placeholder: 'Key goals for Q2, one per line', required: false },
    { id: 'q3Goals', label: 'Q3 Goals', type: 'textarea', placeholder: 'Key goals for Q3, one per line', required: false },
    { id: 'q4Goals', label: 'Q4 Goals', type: 'textarea', placeholder: 'Key goals for Q4, one per line', required: false },
    { id: 'theme', label: 'Roadmap Theme', type: 'text', placeholder: 'e.g., Scale & Reliability, User Growth', required: false, helpText: 'An overarching theme that ties the roadmap together' },
  ],
  sections: [
    { id: 'timeline', name: 'Roadmap Timeline', type: 'flowchart', description: 'Visual timeline with phases and milestones', icon: '\u{1F5FA}\uFE0F' },
    { id: 'backlog', name: 'Feature Backlog', type: 'table', description: 'Feature list with phase, priority, and status', icon: '\u{1F4CB}' },
    { id: 'strategy', name: 'Roadmap Strategy', type: 'document', description: 'Vision, phase descriptions, and success metrics', icon: '\u{1F4DD}' },
  ],
}
