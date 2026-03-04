import { TemplateDefinition, TemplateCategory } from '../types'

export const kanban: TemplateDefinition = {
  id: 'kanban-board',
  name: 'Kanban Board',
  category: TemplateCategory.Agile,
  description: 'Visual task board with customizable columns for tracking work from backlog to done.',
  longDescription: 'Set up a Kanban workflow for your team with customizable columns, WIP limits, and a master backlog table. Perfect for continuous delivery teams, personal productivity, or any workflow that benefits from visual task management.',
  emoji: '\u{1F4CB}',
  estimatedTime: '~2 min',
  blueprintId: 'kanban-board',
  complexity: 'simple',
  color: '#7C3AED',
  tags: ['kanban', 'tasks', 'workflow', 'agile', 'board', 'project management'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502BACKLOG\u2502 TO DO \u2502IN PROG\u2502REVIEW \u2502 DONE  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 [___] \u2502 [___] \u2502 [___] \u2502 [___] \u2502 [___] \u2502
\u2502 [___] \u2502 [___] \u2502 [___] \u2502       \u2502 [___] \u2502
\u2502 [___] \u2502       \u2502       \u2502       \u2502       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  MASTER BACKLOG TABLE                  \u2502
\u2502  Task | Priority | Status | Assignee   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'projectName', label: 'Project Name', type: 'text', placeholder: 'e.g., Website Redesign', required: true },
    { id: 'teamMembers', label: 'Team Members', type: 'textarea', placeholder: 'One name per line\ne.g., Alice\nBob\nCharlie', required: false },
    { id: 'columns', label: 'Board Columns', type: 'multiselect', placeholder: 'Select columns', required: true, defaultValue: 'Backlog,To Do,In Progress,Review,Done', options: ['Backlog', 'To Do', 'In Progress', 'Review', 'Done', 'Blocked', 'QA', 'Deployed'] },
    { id: 'initialCards', label: 'Initial Tasks', type: 'textarea', placeholder: 'Add initial tasks, one per line', required: false, helpText: 'These will be added to the Backlog column' },
    { id: 'wipLimit', label: 'WIP Limit per Column', type: 'number', placeholder: 'e.g., 3', required: false, helpText: 'Maximum number of items in any In Progress column' },
  ],
  sections: [
    { id: 'columns', name: 'Kanban Columns', type: 'kanban', description: 'Visual column layout with sticky notes', icon: '\u{1F4CB}' },
    { id: 'backlog', name: 'Master Backlog', type: 'table', description: 'Full task list with priority and status', icon: '\u{1F4CA}' },
    { id: 'guidelines', name: 'Board Guidelines', type: 'document', description: 'WIP limits, workflow rules, and definitions', icon: '\u{1F4DD}' },
  ],
}
