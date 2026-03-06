import { TemplateDefinition, TemplateCategory } from '../types'

export const accountPlanning: TemplateDefinition = {
  id: 'account-planning',
  name: 'Account Planning Board',
  category: TemplateCategory.Sales,
  description: 'Plan key account strategy with overview, stakeholder mapping, and action plans.',
  longDescription: 'Develop comprehensive account plans for your most important customers. Document account context, map key stakeholders and their influence, and create detailed action plans to grow the relationship. Essential for enterprise sales and key account management.',
  emoji: '\u{1F91D}',
  estimatedTime: '~12 min',
  blueprintId: 'account-planning',
  brainCategory: 'sales',
  brainBlueprint: 'account-planning',
  complexity: 'complex',
  color: '#283593',
  tags: ['account', 'planning', 'sales', 'enterprise', 'stakeholder'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  ACCOUNT PLANNING BOARD       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 OVERVIEW \u2502 STAKEHLD \u2502 ACTIONS  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'accountName', label: 'Account Name', type: 'text', placeholder: 'e.g., Acme Corporation', required: true },
    { id: 'industry', label: 'Industry', type: 'text', placeholder: 'e.g., Financial Services', required: false },
    { id: 'revenue', label: 'Account Revenue', type: 'text', placeholder: 'e.g., $500K ARR', required: false },
    { id: 'contacts', label: 'Key Contacts', type: 'textarea', placeholder: 'Name, title, and role, one per line', required: false },
    { id: 'challenges', label: 'Account Challenges', type: 'textarea', placeholder: 'What challenges does this account face?', required: true },
    { id: 'opportunities', label: 'Growth Opportunities', type: 'textarea', placeholder: 'Expansion and upsell opportunities', required: false },
    { id: 'nextSteps', label: 'Next Steps', type: 'textarea', placeholder: 'Immediate next actions', required: false },
  ],
  sections: [
    { id: 'overview', name: 'Account Overview', type: 'document', description: 'Comprehensive account context and relationship history', icon: '\u{1F4DD}' },
    { id: 'stakeholders', name: 'Stakeholder Map', type: 'sticky_cluster', description: 'Key stakeholders with influence and relationships', icon: '\u{1F465}' },
    { id: 'actionPlan', name: 'Action Plan', type: 'table', description: 'Prioritized actions with owners and deadlines', icon: '\u{1F4CB}' },
  ],
}
