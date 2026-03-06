import { TemplateDefinition, TemplateCategory } from '../types'

export const courseCurriculum: TemplateDefinition = {
  id: 'course-curriculum',
  name: 'Course Curriculum',
  category: TemplateCategory.Education,
  description: 'Design course curricula with module structure, details, and learning outcomes.',
  longDescription: 'Design a complete course curriculum with structured modules, detailed session plans, and clear learning outcomes. Organize your course content into a logical progression, define prerequisites, and map outcomes to ensure comprehensive coverage.',
  emoji: '\u{1F4DA}',
  estimatedTime: '~8 min',
  blueprintId: 'course-curriculum',
  brainCategory: 'education',
  brainBlueprint: 'course-curriculum',
  complexity: 'medium',
  color: '#7B1FA2',
  tags: ['course', 'curriculum', 'education', 'modules', 'outcomes'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    COURSE CURRICULUM          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 STRUCTURE\u2502 MODULES  \u2502 OUTCOMES \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'courseName', label: 'Course Name', type: 'text', placeholder: 'e.g., Introduction to Data Science', required: true },
    { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g., Beginner analysts', required: false },
    { id: 'duration', label: 'Course Duration', type: 'text', placeholder: 'e.g., 12 weeks', required: false },
    { id: 'modules', label: 'Modules', type: 'textarea', placeholder: 'List modules, one per line', required: true, helpText: 'List modules, one per line' },
    { id: 'outcomes', label: 'Learning Outcomes', type: 'textarea', placeholder: 'What will students be able to do after completing the course?', required: false },
    { id: 'prerequisites', label: 'Prerequisites', type: 'textarea', placeholder: 'Required knowledge or courses', required: false },
  ],
  sections: [
    { id: 'structure', name: 'Curriculum Structure', type: 'table', description: 'Module sequence with duration and dependencies', icon: '\u{1F4CA}' },
    { id: 'moduleDetails', name: 'Module Details', type: 'document', description: 'Detailed content for each module', icon: '\u{1F4DD}' },
    { id: 'outcomes', name: 'Learning Outcomes', type: 'sticky_cluster', description: 'Mapped learning outcomes by module', icon: '\u{1F3AF}' },
  ],
}
