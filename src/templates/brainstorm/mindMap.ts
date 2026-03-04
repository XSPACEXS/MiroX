import { TemplateDefinition, TemplateCategory } from '../types'

export const mindMap: TemplateDefinition = {
  id: 'mind-map',
  name: 'Mind Map',
  category: TemplateCategory.Brainstorm,
  description: 'Radial mind map with a central concept and branching sub-topics for idea exploration.',
  longDescription: 'Explore topics visually with a mind map radiating from a central concept. Create branches for major themes with color-coded sub-topics, then capture key insights and connections in a companion notes document. Great for brainstorming, note-taking, and knowledge organization.',
  emoji: '\u{1F9E0}',
  estimatedTime: '~3 min',
  blueprintId: 'mind-map',
  complexity: 'simple',
  color: '#EC4899',
  tags: ['mind map', 'brainstorm', 'topics', 'ideas', 'knowledge', 'exploration'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       MIND MAP                \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Branch 1    \u2502  NOTES DOC     \u2502
\u2502    \\         \u2502               \u2502
\u2502  Branch 2\u2500[C]\u2502  \u2022 Insights    \u2502
\u2502    /         \u2502  \u2022 Actions     \u2502
\u2502  Branch 3    \u2502  \u2022 Connections \u2502
\u2502    \\         \u2502               \u2502
\u2502  Branch 4    \u2502               \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'centralConcept', label: 'Central Concept', type: 'text', placeholder: 'e.g., Product Strategy 2026', required: true },
    { id: 'branch1', label: 'Branch 1', type: 'text', placeholder: 'e.g., Market Expansion', required: true },
    { id: 'branch2', label: 'Branch 2', type: 'text', placeholder: 'e.g., Product Features', required: true },
    { id: 'branch3', label: 'Branch 3', type: 'text', placeholder: 'e.g., Team Growth', required: false },
    { id: 'branch4', label: 'Branch 4', type: 'text', placeholder: 'e.g., Technology', required: false },
    { id: 'branch5', label: 'Branch 5', type: 'text', placeholder: 'e.g., Partnerships', required: false },
    { id: 'subIdeas', label: 'Sub-Ideas', type: 'textarea', placeholder: 'Additional sub-topics per branch, one per line\ne.g., Branch 1: APAC markets, EU expansion', required: false },
  ],
  sections: [
    { id: 'mindMap', name: 'Mind Map Diagram', type: 'flowchart', description: 'Radial diagram with central concept and branches', icon: '\u{1F9E0}' },
    { id: 'notes', name: 'Mind Map Notes', type: 'document', description: 'Key insights, connections, and action items', icon: '\u{1F4DD}' },
  ],
}
