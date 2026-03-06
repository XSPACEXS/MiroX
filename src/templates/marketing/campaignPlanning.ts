import { TemplateDefinition, TemplateCategory } from '../types'

export const campaignPlanning: TemplateDefinition = {
  id: 'campaign-planning',
  name: 'Campaign Planning Board',
  category: TemplateCategory.Marketing,
  description: 'Plan and execute marketing campaigns with briefs, task tracking, and budget breakdowns.',
  longDescription: 'Organize your entire marketing campaign from brief to execution. Define campaign goals, manage tasks with a Kanban board, and track budget allocation across channels. Great for product launches, seasonal campaigns, and brand awareness initiatives.',
  emoji: '\u{1F4E3}',
  estimatedTime: '~8 min',
  blueprintId: 'campaign-planning',
  brainCategory: 'marketing',
  brainBlueprint: 'campaign-planning',
  complexity: 'medium',
  color: '#E91E63',
  tags: ['campaign', 'marketing', 'planning', 'budget', 'tasks'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   CAMPAIGN PLANNING BOARD     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  BRIEF   \u2502  TASKS   \u2502  BUDGET  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'campaignName', label: 'Campaign Name', type: 'text', placeholder: 'e.g., Summer Product Launch', required: true },
    { id: 'goal', label: 'Campaign Goal', type: 'textarea', placeholder: 'What is the primary objective of this campaign?', required: true },
    { id: 'budget', label: 'Total Budget', type: 'text', placeholder: 'e.g., $50,000', required: false },
    { id: 'startDate', label: 'Start Date', type: 'date', placeholder: 'Campaign start date', required: false },
    { id: 'endDate', label: 'End Date', type: 'date', placeholder: 'Campaign end date', required: false },
    { id: 'audience', label: 'Target Audience', type: 'textarea', placeholder: 'Who is this campaign targeting?', required: false },
  ],
  sections: [
    { id: 'brief', name: 'Campaign Brief', type: 'document', description: 'Campaign overview, goals, messaging, and creative direction', icon: '\u{1F4DD}' },
    { id: 'tasks', name: 'Task Board', type: 'kanban', description: 'Campaign tasks organized by status', icon: '\u{1F4CB}' },
    { id: 'budgetBreakdown', name: 'Budget Breakdown', type: 'table', description: 'Budget allocation by channel and line item', icon: '\u{1F4B0}' },
  ],
}
