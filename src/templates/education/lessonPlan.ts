import { TemplateDefinition, TemplateCategory } from '../types'

export const lessonPlan: TemplateDefinition = {
  id: 'lesson-plan',
  name: 'Lesson Plan Board',
  category: TemplateCategory.Education,
  description: 'Create structured lesson plans with objectives, activities, and assessment timelines.',
  longDescription: 'Design effective lesson plans with clear learning objectives, engaging activities, and assessment strategies. Organize your teaching into a structured document with a detailed activity timeline. Perfect for teachers, trainers, and instructional designers.',
  emoji: '\u{1F4D6}',
  estimatedTime: '~5 min',
  blueprintId: 'lesson-plan',
  brainCategory: 'education',
  brainBlueprint: 'lesson-plan',
  complexity: 'simple',
  color: '#FF9800',
  tags: ['lesson', 'plan', 'education', 'teaching', 'curriculum'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     LESSON PLAN BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  LESSON PLAN  \u2502  ACTIVITIES  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g., Introduction to Biology', required: true },
    { id: 'grade', label: 'Grade / Level', type: 'text', placeholder: 'e.g., 10th Grade', required: false },
    { id: 'duration', label: 'Duration', type: 'text', placeholder: 'e.g., 50 minutes', required: false },
    { id: 'objectives', label: 'Learning Objectives', type: 'textarea', placeholder: 'What will students learn? One objective per line', required: true },
    { id: 'activities', label: 'Activities', type: 'textarea', placeholder: 'Planned activities, one per line', required: false },
    { id: 'assessment', label: 'Assessment', type: 'textarea', placeholder: 'How will you assess learning?', required: false },
  ],
  sections: [
    { id: 'plan', name: 'Lesson Plan', type: 'document', description: 'Structured lesson plan with objectives and materials', icon: '\u{1F4D6}' },
    { id: 'activityTimeline', name: 'Activity Timeline', type: 'table', description: 'Time-blocked activity schedule', icon: '\u{23F1}\u{FE0F}' },
  ],
}
