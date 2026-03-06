import { TemplateDefinition, TemplateCategory } from '../types'

export const departmentCampus: TemplateDefinition = {
  id: 'department-campus',
  name: 'Department Campus Map',
  category: TemplateCategory.MiroWorld,
  description: 'Map your company departments as a visual campus with buildings, zones, and team details.',
  longDescription: 'Represent your organization as a campus where each department is a building or zone. Navigate between teams, understand headcount, and see how departments connect. Great for company overviews, onboarding, and org design workshops.',
  emoji: '\u{1F3D9}\uFE0F',
  estimatedTime: '~12 min',
  blueprintId: 'department-campus',
  brainCategory: 'miro-world',
  brainBlueprint: 'department-campus',
  complexity: 'complex',
  color: '#311B92',
  tags: ['campus', 'departments', 'organization', 'company', 'miro-world', 'teams'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   DEPARTMENT CAMPUS MAP         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Eng]  [Design]  [Product]     \u2502
\u2502     [Sales]  [Marketing]        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Department Details Doc         \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'departments', label: 'Departments', type: 'textarea', placeholder: 'List departments, one per line', required: true, helpText: 'List departments, one per line' },
    { id: 'theme', label: 'Visual Theme', type: 'text', placeholder: 'e.g., Tech campus, University, City blocks', required: false },
    { id: 'headcount', label: 'Headcount', type: 'text', placeholder: 'e.g., 150 employees', required: false },
    { id: 'highlights', label: 'Highlights', type: 'textarea', placeholder: 'Key highlights or focus areas', required: false },
  ],
  sections: [
    { id: 'campus-layout', name: 'Campus Layout', type: 'frame', description: 'Frame-based campus layout with department buildings and zones', icon: '\u{1F3D7}\uFE0F' },
    { id: 'dept-details', name: 'Department Details', type: 'document', description: 'Document with details about each department including roles and responsibilities', icon: '\u{1F4D1}' },
  ],
}
