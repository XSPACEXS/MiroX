import { TemplateDefinition, TemplateCategory } from '../types'

export const companyVisionBoard: TemplateDefinition = {
  id: 'company-vision-board',
  name: 'Company Vision Board',
  category: TemplateCategory.CompanyBuilding,
  description: 'Define and communicate your company vision, mission, values, and strategic pillars.',
  longDescription: 'Align your team around a shared company vision. Document your vision and mission statements, cluster your core values as sticky notes, and organize strategic pillars in a table. Perfect for founding teams, leadership offsites, and company-wide alignment sessions.',
  emoji: '\u{1F31F}',
  estimatedTime: '~8 min',
  blueprintId: 'company-vision-board',
  brainCategory: 'company-building',
  brainBlueprint: 'company-vision-board',
  complexity: 'medium',
  color: '#1A237E',
  tags: ['vision', 'mission', 'values', 'company', 'strategy', 'alignment'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   COMPANY VISION BOARD          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Vision & Mission Document      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Core Values Cluster]          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Strategic Pillars Table        \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'vision', label: 'Vision Statement', type: 'textarea', placeholder: 'Where do you see the company in 10 years?', required: true },
    { id: 'mission', label: 'Mission Statement', type: 'textarea', placeholder: 'What does the company do and for whom?', required: true },
    { id: 'values', label: 'Core Values', type: 'textarea', placeholder: 'Company values, one per line', required: true, helpText: 'Company values, one per line' },
    { id: 'pillars', label: 'Strategic Pillars', type: 'textarea', placeholder: 'Key strategic pillars, one per line', required: false },
    { id: 'northStar', label: 'North Star Metric', type: 'text', placeholder: 'e.g., Monthly Active Users', required: false },
  ],
  sections: [
    { id: 'vision-mission-doc', name: 'Vision & Mission', type: 'document', description: 'Document articulating the company vision and mission statements', icon: '\u{1F31F}' },
    { id: 'values-cluster', name: 'Core Values', type: 'sticky_cluster', description: 'Sticky notes for each core value with descriptions', icon: '\u{1F4A0}' },
    { id: 'pillars-table', name: 'Strategic Pillars', type: 'table', description: 'Table outlining strategic pillars with goals and owners', icon: '\u{1F3DB}\uFE0F' },
  ],
}
