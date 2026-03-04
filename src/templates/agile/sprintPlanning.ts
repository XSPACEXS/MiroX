import { TemplateDefinition, TemplateCategory } from '../types'

export const sprintPlanning: TemplateDefinition = {
  id: 'sprint-planning',
  name: 'Sprint Planning',
  category: TemplateCategory.Agile,
  description: 'Sprint planning board with sprint goal, user stories, capacity tracking, and task breakdown.',
  longDescription: 'Run effective sprint planning ceremonies with a dedicated board for sprint goals, backlog refinement, capacity tracking, and task breakdowns. Includes a burndown-ready sprint backlog table and definition of done checklist.',
  emoji: '\u{1F3C3}',
  estimatedTime: '~4 min',
  blueprintId: 'sprint-planning',
  complexity: 'medium',
  color: '#7C3AED',
  tags: ['sprint', 'scrum', 'planning', 'agile', 'backlog', 'user stories'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  SPRINT PLANNING                \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SPRINT GOAL   \u2502  OVERVIEW DOC   \u2502
\u2502  (hexagon)     \u2502  \u2022 Capacity     \u2502
\u2502               \u2502  \u2022 Velocity     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SPRINT BACKLOG TABLE            \u2502
\u2502  Story | Points | Status | Owner  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  DEFINITION OF DONE              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'sprintNumber', label: 'Sprint Number', type: 'number', placeholder: 'e.g., 12', required: true },
    { id: 'sprintGoal', label: 'Sprint Goal', type: 'textarea', placeholder: 'What is the main objective for this sprint?', required: true },
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., Team Rocket', required: true },
    { id: 'startDate', label: 'Start Date', type: 'date', placeholder: 'YYYY-MM-DD', required: true },
    { id: 'endDate', label: 'End Date', type: 'date', placeholder: 'YYYY-MM-DD', required: true },
    { id: 'backlogItems', label: 'Backlog Items', type: 'textarea', placeholder: 'User stories for this sprint, one per line\ne.g., As a user, I want to reset my password', required: false },
  ],
  sections: [
    { id: 'goal', name: 'Sprint Goal', type: 'frame', description: 'Sprint goal and team capacity overview', icon: '\u{1F3AF}' },
    { id: 'backlog', name: 'Sprint Backlog', type: 'table', description: 'User stories with points and status tracking', icon: '\u{1F4CB}' },
    { id: 'burndown', name: 'Sprint Burndown', type: 'flowchart', description: 'Visual burndown path for the sprint', icon: '\u{1F4C9}' },
    { id: 'dod', name: 'Definition of Done', type: 'document', description: 'Quality criteria and review process checklist', icon: '\u2705' },
  ],
}
