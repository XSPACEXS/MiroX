import { TemplateDefinition, TemplateCategory } from '../types'

export const brainstormSession: TemplateDefinition = {
  id: 'brainstorm-session',
  name: 'Brainstorm Session',
  category: TemplateCategory.Brainstorm,
  description: 'Structured brainstorming board with category zones, idea capture, and synthesis.',
  longDescription: 'Facilitate productive brainstorming sessions with a central topic, themed category zones for organizing ideas, and a synthesis area for prioritization. Captures ideas on sticky notes organized by category, then ranks them by feasibility and impact.',
  emoji: '\u{1F4A1}',
  estimatedTime: '~2 min',
  blueprintId: 'brainstorm-session',
  brainCategory: 'mind-maps',
  brainBlueprint: 'brainstorming-board',
  complexity: 'simple',
  color: '#EC4899',
  tags: ['brainstorm', 'ideas', 'ideation', 'workshop', 'creativity'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502       BRAINSTORM SESSION              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Cat 1  \u2502         \u2502  Cat 3  \u2502       \u2502
\u2502 [____] \u2502  TOPIC  \u2502 [____] \u2502  Cat 4\u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524  [HEX]  \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524       \u2502
\u2502  Cat 2  \u2502         \u2502  Cat 5  \u2502       \u2502
\u2502 [____] \u2502         \u2502 [____] \u2502       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  IDEAS SUMMARY TABLE + SYNTHESIS DOC  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'topic', label: 'Brainstorm Topic', type: 'textarea', placeholder: 'e.g., How might we improve our onboarding experience?', required: true },
    { id: 'facilitator', label: 'Facilitator', type: 'text', placeholder: 'e.g., Alex Johnson', required: false },
    { id: 'participants', label: 'Participants', type: 'textarea', placeholder: 'Names of participants, one per line', required: false },
    { id: 'duration', label: 'Session Duration', type: 'select', placeholder: 'Select duration', required: false, options: ['15 min', '30 min', '45 min', '60 min', '90 min'] },
    { id: 'categories', label: 'Idea Categories', type: 'textarea', placeholder: 'Comma-separated categories\ne.g., Product, UX, Tech, Marketing, Ops, Finance', required: false, defaultValue: 'Product,UX,Tech,Marketing,Ops,Finance' },
  ],
  sections: [
    { id: 'topic', name: 'Central Topic', type: 'frame', description: 'Central brainstorm question or challenge', icon: '\u{1F4A1}' },
    { id: 'zones', name: 'Idea Zones', type: 'sticky_cluster', description: 'Category zones with sticky notes for ideas', icon: '\u{1F4CC}' },
    { id: 'summary', name: 'Ideas Summary', type: 'table', description: 'Top ideas ranked by feasibility and impact', icon: '\u{1F4CB}' },
    { id: 'synthesis', name: 'Synthesis Document', type: 'document', description: 'Session themes, top picks, and next steps', icon: '\u{1F4DD}' },
  ],
}
