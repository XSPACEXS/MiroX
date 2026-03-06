import { TemplateDefinition, TemplateCategory } from '../types'

export const financialDashboard: TemplateDefinition = {
  id: 'financial-dashboard',
  name: 'Financial Dashboard',
  category: TemplateCategory.Finance,
  description: 'Create a financial overview dashboard with P&L, KPIs, and executive insights.',
  longDescription: 'Build an executive-level financial dashboard that presents your P&L statement, key performance indicators, and strategic insights in one view. Track revenue, expenses, margins, and highlight important trends for stakeholder review.',
  emoji: '\u{1F4CA}',
  estimatedTime: '~12 min',
  blueprintId: 'financial-dashboard',
  brainCategory: 'finance',
  brainBlueprint: 'financial-dashboard',
  complexity: 'complex',
  color: '#009688',
  tags: ['finance', 'dashboard', 'KPI', 'P&L', 'metrics', 'executive'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   FINANCIAL DASHBOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   P&L    \u2502   KPIs   \u2502 INSIGHTS \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'period', label: 'Reporting Period', type: 'text', placeholder: 'e.g., Q1 2026', required: true },
    { id: 'revenue', label: 'Revenue', type: 'text', placeholder: 'e.g., $5,000,000', required: false },
    { id: 'expenses', label: 'Total Expenses', type: 'text', placeholder: 'e.g., $3,200,000', required: false },
    { id: 'keyMetrics', label: 'Key Metrics', type: 'textarea', placeholder: 'Important KPIs to track, one per line', required: false },
    { id: 'highlights', label: 'Highlights', type: 'textarea', placeholder: 'Notable achievements or concerns', required: false },
  ],
  sections: [
    { id: 'pnl', name: 'P&L Statement', type: 'table', description: 'Profit and loss breakdown by category', icon: '\u{1F4CA}' },
    { id: 'kpis', name: 'KPI Dashboard', type: 'sticky_cluster', description: 'Key performance indicators with targets and actuals', icon: '\u{1F3AF}' },
    { id: 'insights', name: 'Executive Insights', type: 'document', description: 'Strategic insights and commentary on financials', icon: '\u{1F4DD}' },
  ],
}
