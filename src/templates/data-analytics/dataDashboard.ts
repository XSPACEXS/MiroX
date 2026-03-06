import { TemplateDefinition, TemplateCategory } from '../types'

export const dataDashboard: TemplateDefinition = {
  id: 'data-dashboard',
  name: 'Data Dashboard Board',
  category: TemplateCategory.DataAnalytics,
  description: 'Create a comprehensive data dashboard to visualize key metrics, track performance, and share insights with stakeholders.',
  longDescription: 'Build a structured data dashboard board that organizes your key metrics into a clear grid, clusters insights for quick reference, and produces an executive summary document. Perfect for data teams presenting findings to leadership.',
  emoji: '\u{1F4CA}',
  estimatedTime: '~12 min',
  blueprintId: 'data-dashboard',
  brainCategory: 'data-analytics',
  brainBlueprint: 'data-dashboard',
  complexity: 'complex',
  color: '#1565C0',
  tags: ['dashboard', 'data', 'metrics', 'analytics', 'visualization', 'reporting'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     DATA DASHBOARD BOARD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  KPI #1   \u2502  KPI #2   \u2502  KPI #3   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Insights Cluster]             \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Executive Summary              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'dashboardName', label: 'Dashboard Name', type: 'text', placeholder: 'e.g., Q1 Marketing Performance', required: true },
    { id: 'dataSource', label: 'Data Source', type: 'text', placeholder: 'e.g., Google Analytics, Salesforce', required: false },
    { id: 'keyMetrics', label: 'Key Metrics', type: 'textarea', placeholder: 'List metrics to track, one per line', required: true, helpText: 'List metrics to track' },
    { id: 'timeframe', label: 'Timeframe', type: 'text', placeholder: 'e.g., Q1 2026, Last 30 days', required: false },
    { id: 'audience', label: 'Audience', type: 'text', placeholder: 'e.g., Executive team, Marketing dept', required: false },
    { id: 'insights', label: 'Key Insights', type: 'textarea', placeholder: 'Notable findings or trends, one per line', required: false },
  ],
  sections: [
    { id: 'metrics-grid', name: 'Metrics Grid', type: 'table', description: 'Tabular layout of key metrics with values and trends', icon: '\u{1F4CA}' },
    { id: 'insights-cluster', name: 'Insights Cluster', type: 'sticky_cluster', description: 'Grouped sticky notes highlighting key data insights', icon: '\u{1F4A1}' },
    { id: 'executive-summary', name: 'Executive Summary', type: 'document', description: 'Written summary of dashboard findings for stakeholders', icon: '\u{1F4DD}' },
  ],
}
