import { TemplateDefinition, TemplateCategory } from '../types'

export const dailyStandup: TemplateDefinition = {
  id: 'daily-standup',
  name: 'Daily Standup',
  category: TemplateCategory.Meetings,
  description: 'Daily standup board with Yesterday/Today/Blockers for each team member.',
  longDescription: 'Run structured daily standups with a visual board showing each team member\'s updates: what they did yesterday, what they\'re doing today, and any blockers. Includes a blockers tracking table to ensure impediments get resolved quickly.',
  emoji: '\u2600\uFE0F',
  estimatedTime: '~2 min',
  blueprintId: 'daily-standup',
  brainCategory: 'workshops',
  brainBlueprint: 'icebreaker',
  complexity: 'simple',
  color: '#10B981',
  tags: ['standup', 'daily', 'scrum', 'sync', 'team', 'blockers'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    DAILY STANDUP               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502YESTERDAY\u2502  TODAY  \u2502 BLOCKERS  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Alice   \u2502 [____] \u2502 [_red_]   \u2502
\u2502 Bob     \u2502 [____] \u2502           \u2502
\u2502 Charlie \u2502 [____] \u2502 [_red_]   \u2502
\u2502 Diana   \u2502 [____] \u2502           \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  BLOCKERS TABLE                \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., Core Platform', required: true },
    { id: 'members', label: 'Team Members', type: 'textarea', placeholder: 'One name per line\ne.g., Alice\nBob\nCharlie\nDiana', required: true },
    { id: 'date', label: 'Date', type: 'date', placeholder: 'YYYY-MM-DD', required: false },
    { id: 'focusArea', label: 'Sprint Focus Area', type: 'text', placeholder: 'e.g., User authentication module', required: false },
  ],
  sections: [
    { id: 'rows', name: 'Team Member Rows', type: 'frame', description: 'Per-person rows with Yesterday/Today/Blockers', icon: '\u{1F465}' },
    { id: 'blockers', name: 'Blockers Table', type: 'table', description: 'Blocker tracking with impact and resolution', icon: '\u{1F6A7}' },
  ],
}
