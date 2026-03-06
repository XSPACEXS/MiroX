import { TemplateDefinition, TemplateCategory } from '../types'

export const budgetPlanning: TemplateDefinition = {
  id: 'budget-planning',
  name: 'Budget Planning Board',
  category: TemplateCategory.Finance,
  description: 'Plan and allocate budgets with breakdowns, assumptions, and priority tracking.',
  longDescription: 'Create a comprehensive budget planning board for your organization or project. Break down budgets by department or category, document key assumptions, and prioritize spending areas. Perfect for annual planning, project budgets, and departmental allocations.',
  emoji: '\u{1F4B0}',
  estimatedTime: '~8 min',
  blueprintId: 'budget-planning',
  brainCategory: 'finance',
  brainBlueprint: 'budget-planning',
  complexity: 'medium',
  color: '#4CAF50',
  tags: ['budget', 'finance', 'planning', 'allocation', 'spending'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   BUDGET PLANNING BOARD       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 BREAKDOWN\u2502 ASSUMES  \u2502 PRIORITY \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'orgName', label: 'Organization Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'period', label: 'Budget Period', type: 'text', placeholder: 'e.g., FY 2026', required: true },
    { id: 'totalBudget', label: 'Total Budget', type: 'text', placeholder: 'e.g., $2,000,000', required: true },
    { id: 'departments', label: 'Departments', type: 'textarea', placeholder: 'Departments or cost centers, one per line', required: false },
    { id: 'categories', label: 'Budget Categories', type: 'textarea', placeholder: 'e.g., Personnel, Software, Marketing, Operations', required: false },
    { id: 'goals', label: 'Budget Goals', type: 'textarea', placeholder: 'Key financial goals for this period', required: false },
  ],
  sections: [
    { id: 'budgetBreakdown', name: 'Budget Breakdown', type: 'table', description: 'Detailed budget allocation by department and category', icon: '\u{1F4CA}' },
    { id: 'assumptions', name: 'Assumptions', type: 'document', description: 'Key assumptions and constraints for the budget', icon: '\u{1F4DD}' },
    { id: 'priorities', name: 'Spending Priorities', type: 'sticky_cluster', description: 'Priority areas and trade-off decisions', icon: '\u{1F3AF}' },
  ],
}
