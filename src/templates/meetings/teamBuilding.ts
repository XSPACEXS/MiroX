import { TemplateDefinition, TemplateCategory } from '../types'

export const teamBuilding: TemplateDefinition = {
  id: 'team-building',
  name: 'Team Building',
  category: TemplateCategory.Meetings,
  description: 'Team building board with icebreaker, personality map, values, and working agreements.',
  longDescription: 'Build team cohesion with a structured board for icebreakers, personality mapping, shared values discovery, and working agreements. Perfect for new team kickoffs, team health checks, or any time you want to strengthen team culture and alignment.',
  emoji: '\u{1F91D}',
  estimatedTime: '~3 min',
  blueprintId: 'team-building',
  complexity: 'simple',
  color: '#10B981',
  tags: ['team', 'building', 'culture', 'icebreaker', 'values', 'agreements'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  ICEBREAKER    \u2502 PERSONALITY    \u2502
\u2502  [prompt]      \u2502 MAP (2x2)     \u2502
\u2502  [sticky]      \u2502  \u25CB \u25CB          \u2502
\u2502  [sticky]      \u2502    \u25CB \u25CB        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  OUR VALUES    \u2502 WORKING       \u2502
\u2502  [hex] [hex]   \u2502 AGREEMENTS    \u2502
\u2502  [hex] [hex]   \u2502  [sticky]     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  TEAM CHARTER DOCUMENT          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., Engineering Team Alpha', required: true },
    { id: 'icebreaker', label: 'Icebreaker Prompt', type: 'textarea', placeholder: 'e.g., Share something that would surprise the team about you', required: false, defaultValue: 'Share something that would surprise the team about you' },
    { id: 'teamValues', label: 'Team Values', type: 'textarea', placeholder: 'Comma-separated values\ne.g., Trust, Transparency, Growth, Quality, Fun', required: false },
    { id: 'agreements', label: 'Working Agreements', type: 'textarea', placeholder: 'Initial agreements, one per line\ne.g., Cameras on during meetings\nRespond within 4 hours\nNo meetings Friday PM', required: false },
  ],
  sections: [
    { id: 'icebreaker', name: 'Icebreaker', type: 'frame', description: 'Icebreaker prompt with team response stickies', icon: '\u{1F3B2}' },
    { id: 'personality', name: 'Personality Map', type: 'matrix', description: 'Working styles matrix with team placement', icon: '\u{1F9E9}' },
    { id: 'values', name: 'Team Values', type: 'frame', description: 'Shared values as visual hexagon shapes', icon: '\u{1F48E}' },
    { id: 'agreements', name: 'Working Agreements', type: 'sticky_cluster', description: 'Agreed working norms on sticky notes', icon: '\u{1F91D}' },
    { id: 'charter', name: 'Team Charter', type: 'document', description: 'Mission, communication, and decision-making process', icon: '\u{1F4DD}' },
  ],
}
