import { TemplateDefinition, TemplateCategory } from '../types'

export const performanceReview: TemplateDefinition = {
  id: 'performance-review',
  name: 'Performance Review Board',
  category: TemplateCategory.TeamHR,
  description: 'Conduct performance reviews with structured feedback, assessments, and goal tracking.',
  longDescription: 'Run effective performance reviews with a structured review document, multi-source feedback collection, and goal tracking table. Document achievements, identify growth areas, and set clear goals for the next period.',
  emoji: '\u{2B50}',
  estimatedTime: '~8 min',
  blueprintId: 'performance-review',
  brainCategory: 'team-hr',
  brainBlueprint: 'performance-review',
  complexity: 'medium',
  color: '#F57C00',
  tags: ['performance', 'review', 'hr', 'feedback', 'goals', 'assessment'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  PERFORMANCE REVIEW BOARD     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  REVIEW  \u2502 FEEDBACK \u2502  GOALS   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'reviewee', label: 'Reviewee Name', type: 'text', placeholder: 'e.g., Jane Smith', required: true },
    { id: 'period', label: 'Review Period', type: 'text', placeholder: 'e.g., H1 2026', required: true },
    { id: 'role', label: 'Role', type: 'text', placeholder: 'e.g., Product Manager', required: false },
    { id: 'achievements', label: 'Key Achievements', type: 'textarea', placeholder: 'Notable accomplishments, one per line', required: true },
    { id: 'areas', label: 'Growth Areas', type: 'textarea', placeholder: 'Areas for improvement', required: false },
    { id: 'goals', label: 'Goals for Next Period', type: 'textarea', placeholder: 'Goals and objectives for the next review cycle', required: false },
  ],
  sections: [
    { id: 'review', name: 'Performance Review', type: 'document', description: 'Structured review with ratings and commentary', icon: '\u{1F4DD}' },
    { id: 'feedback', name: 'Feedback Collection', type: 'sticky_cluster', description: 'Multi-source feedback organized by theme', icon: '\u{1F4AC}' },
    { id: 'goalTracking', name: 'Goal Tracking', type: 'table', description: 'Goals with progress, status, and deadlines', icon: '\u{1F3AF}' },
  ],
}
