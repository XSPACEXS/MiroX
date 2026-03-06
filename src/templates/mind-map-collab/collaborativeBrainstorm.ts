import { TemplateDefinition, TemplateCategory } from '../types'

export const collaborativeBrainstorm: TemplateDefinition = {
  id: 'collaborative-brainstorm',
  name: 'Collaborative Brainstorm',
  category: TemplateCategory.MindMapCollab,
  description: 'Run structured brainstorming sessions with idea clustering, connection mapping, and voting.',
  longDescription: 'Facilitate productive brainstorming sessions with your team. Start by generating ideas as sticky notes, then connect related ideas with a flowchart, and finally vote on the best ideas using a structured table. Supports time-boxed sessions with multiple perspectives.',
  emoji: '\u{1F9E0}',
  estimatedTime: '~8 min',
  blueprintId: 'collaborative-brainstorm',
  brainCategory: 'mind-map-collab',
  brainBlueprint: 'collaborative-brainstorm',
  complexity: 'medium',
  color: '#4527A0',
  tags: ['brainstorm', 'collaboration', 'ideation', 'mind-map', 'voting', 'team'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  COLLABORATIVE BRAINSTORM       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Ideas Cluster]                \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Connection Map                 \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Voting Table                   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'topic', label: 'Brainstorm Topic', type: 'text', placeholder: 'e.g., How might we improve onboarding?', required: true },
    { id: 'team', label: 'Team / Participants', type: 'text', placeholder: 'e.g., Product team, 6 people', required: false },
    { id: 'timeBox', label: 'Time Box', type: 'text', placeholder: 'e.g., 30 minutes', required: false, defaultValue: '30 minutes' },
    { id: 'perspectives', label: 'Perspectives', type: 'textarea', placeholder: 'Different angles to explore, one per line', required: false, helpText: 'Different angles to explore' },
    { id: 'goal', label: 'Session Goal', type: 'textarea', placeholder: 'What should this brainstorm produce?', required: false },
  ],
  sections: [
    { id: 'ideas-cluster', name: 'Ideas Cluster', type: 'sticky_cluster', description: 'Sticky notes for brainstormed ideas grouped by theme', icon: '\u{1F4A1}' },
    { id: 'connection-map', name: 'Connection Map', type: 'flowchart', description: 'Flowchart showing connections between related ideas', icon: '\u{1F517}' },
    { id: 'voting-table', name: 'Voting Table', type: 'table', description: 'Table for ranking and voting on top ideas', icon: '\u{1F3AF}' },
  ],
}
