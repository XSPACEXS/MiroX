import { TemplateDefinition, TemplateCategory } from '../types'

export const onboardingBoard: TemplateDefinition = {
  id: 'onboarding-board',
  name: 'Onboarding Board',
  category: TemplateCategory.TeamHR,
  description: 'Onboard new team members with 30/60/90 day plans, resources, and checklists.',
  longDescription: 'Create a comprehensive onboarding experience for new hires with structured 30/60/90 day plans, essential resources, and task checklists. Ensure new team members have everything they need to ramp up quickly and feel welcomed.',
  emoji: '\u{1F44B}',
  estimatedTime: '~8 min',
  blueprintId: 'onboarding-board',
  brainCategory: 'team-hr',
  brainBlueprint: 'onboarding-board',
  complexity: 'medium',
  color: '#00897B',
  tags: ['onboarding', 'new hire', 'hr', 'team', '30-60-90', 'checklist'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    ONBOARDING BOARD           \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 30/60/90 \u2502 RESOURCE \u2502 CHECKLIST\u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'roleName', label: 'Role Name', type: 'text', placeholder: 'e.g., Senior Software Engineer', required: true },
    { id: 'startDate', label: 'Start Date', type: 'date', placeholder: 'New hire start date', required: false },
    { id: 'manager', label: 'Manager', type: 'text', placeholder: 'e.g., John Doe', required: false },
    { id: 'week1Tasks', label: 'Week 1 Tasks', type: 'textarea', placeholder: 'First week priorities, one per line', required: true },
    { id: 'week2Tasks', label: 'Week 2 Tasks', type: 'textarea', placeholder: 'Second week tasks, one per line', required: false },
    { id: 'resources', label: 'Key Resources', type: 'textarea', placeholder: 'Links, docs, and tools to share', required: false },
  ],
  sections: [
    { id: 'plan', name: '30/60/90 Day Plan', type: 'kanban', description: 'Phased onboarding milestones and goals', icon: '\u{1F4CB}' },
    { id: 'resources', name: 'Resources', type: 'document', description: 'Essential resources, links, and documentation', icon: '\u{1F4DA}' },
    { id: 'checklist', name: 'Onboarding Checklist', type: 'table', description: 'Task checklist with owner and due date', icon: '\u{2705}' },
  ],
}
