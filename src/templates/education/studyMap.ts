import { TemplateDefinition, TemplateCategory } from '../types'

export const studyMap: TemplateDefinition = {
  id: 'study-map',
  name: 'Study Map',
  category: TemplateCategory.Education,
  description: 'Create visual study maps with topic flowcharts and study schedules.',
  longDescription: 'Build a visual study map that connects topics and concepts in a flowchart, paired with a structured study schedule. Perfect for exam preparation, course overview, or self-directed learning. Map dependencies between topics and plan your study sessions.',
  emoji: '\u{1F5FA}\u{FE0F}',
  estimatedTime: '~5 min',
  blueprintId: 'study-map',
  brainCategory: 'education',
  brainBlueprint: 'study-map',
  complexity: 'simple',
  color: '#26A69A',
  tags: ['study', 'map', 'education', 'learning', 'schedule', 'topics'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502        STUDY MAP               \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  TOPIC MAP    \u2502  SCHEDULE    \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g., Organic Chemistry', required: true },
    { id: 'topics', label: 'Main Topics', type: 'textarea', placeholder: 'Main topics, one per line', required: true, helpText: 'Main topics, one per line' },
    { id: 'timeline', label: 'Study Timeline', type: 'text', placeholder: 'e.g., 4 weeks before exam', required: false },
    { id: 'goals', label: 'Study Goals', type: 'textarea', placeholder: 'What do you want to achieve?', required: false },
    { id: 'resources', label: 'Resources', type: 'textarea', placeholder: 'Textbooks, videos, or other materials', required: false },
  ],
  sections: [
    { id: 'topicMap', name: 'Topic Map', type: 'flowchart', description: 'Visual map connecting topics and prerequisites', icon: '\u{1F5FA}\u{FE0F}' },
    { id: 'studySchedule', name: 'Study Schedule', type: 'table', description: 'Weekly study plan with topics and time blocks', icon: '\u{1F4C5}' },
  ],
}
