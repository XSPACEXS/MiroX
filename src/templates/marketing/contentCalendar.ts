import { TemplateDefinition, TemplateCategory } from '../types'

export const contentCalendar: TemplateDefinition = {
  id: 'content-calendar',
  name: 'Content Calendar',
  category: TemplateCategory.Marketing,
  description: 'Organize your content pipeline and publishing schedule across platforms.',
  longDescription: 'Plan, create, and schedule content across all your channels in one place. Track content from ideation through publishing with a Kanban pipeline and a calendar grid for scheduling. Ideal for content teams, social media managers, and editorial workflows.',
  emoji: '\u{1F4C5}',
  estimatedTime: '~5 min',
  blueprintId: 'content-calendar',
  brainCategory: 'marketing',
  brainBlueprint: 'content-calendar',
  complexity: 'simple',
  color: '#9C27B0',
  tags: ['content', 'calendar', 'social media', 'publishing', 'editorial'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502      CONTENT CALENDAR          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 CONTENT PIPE  \u2502 CALENDAR GRID \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'teamName', label: 'Team Name', type: 'text', placeholder: 'e.g., Content Marketing Team', required: false },
    { id: 'month', label: 'Month / Period', type: 'text', placeholder: 'e.g., March 2026', required: false },
    { id: 'platforms', label: 'Platforms', type: 'multiselect', placeholder: 'Select platforms', required: false, options: ['Blog', 'Twitter/X', 'LinkedIn', 'Instagram', 'YouTube', 'Newsletter'] },
    { id: 'themes', label: 'Content Themes', type: 'textarea', placeholder: 'Key themes or pillars for this period', required: false },
    { id: 'goals', label: 'Content Goals', type: 'textarea', placeholder: 'What do you want to achieve with this content?', required: false },
  ],
  sections: [
    { id: 'pipeline', name: 'Content Pipeline', type: 'kanban', description: 'Content pieces from ideation to published', icon: '\u{1F4CB}' },
    { id: 'calendarGrid', name: 'Calendar Grid', type: 'table', description: 'Weekly/monthly publishing schedule', icon: '\u{1F4C5}' },
  ],
}
