import { TemplateDefinition, TemplateCategory } from '../types'

export const orgChart: TemplateDefinition = {
  id: 'org-chart',
  name: 'Org Chart Board',
  category: TemplateCategory.TeamHR,
  description: 'Visualize organizational structure with reporting lines and headcount tracking.',
  longDescription: 'Create a visual organizational chart showing departments, reporting lines, and team structure. Track headcount by department and visualize the hierarchy from leadership to individual contributors. Perfect for restructuring, new hire planning, and team communication.',
  emoji: '\u{1F3E2}',
  estimatedTime: '~8 min',
  blueprintId: 'org-chart',
  brainCategory: 'team-hr',
  brainBlueprint: 'org-chart',
  complexity: 'medium',
  color: '#1976D2',
  tags: ['org chart', 'organization', 'team', 'hr', 'structure', 'hierarchy'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502      ORG CHART BOARD          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 ORG STRUCTURE \u2502  HEADCOUNT   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'departments', label: 'Departments', type: 'textarea', placeholder: 'List departments, one per line', required: true, helpText: 'List departments, one per line' },
    { id: 'ceo', label: 'CEO / Top Leader', type: 'text', placeholder: 'e.g., Jane Smith', required: false },
    { id: 'reportingLines', label: 'Reporting Lines', type: 'textarea', placeholder: 'Key reporting relationships', required: false },
    { id: 'headcount', label: 'Total Headcount', type: 'text', placeholder: 'e.g., 250', required: false },
  ],
  sections: [
    { id: 'orgStructure', name: 'Org Structure', type: 'flowchart', description: 'Hierarchical org chart with reporting lines', icon: '\u{1F3E2}' },
    { id: 'headcountTable', name: 'Headcount by Department', type: 'table', description: 'Department headcount and open positions', icon: '\u{1F4CA}' },
  ],
}
