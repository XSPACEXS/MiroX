import { TemplateDefinition, TemplateCategory } from '../types'

export const touchpointAnalysis: TemplateDefinition = {
  id: 'touchpoint-analysis',
  name: 'Touchpoint Analysis Board',
  category: TemplateCategory.CustomerJourney,
  description: 'Analyze customer touchpoints across the journey with flow diagrams and recommendations.',
  longDescription: 'Map and analyze every customer touchpoint across the entire journey. Visualize the flow from first contact to retention, identify pain points and moments of delight, and develop actionable recommendations to improve the customer experience.',
  emoji: '\u{1F3AF}',
  estimatedTime: '~8 min',
  blueprintId: 'touchpoint-analysis',
  brainCategory: 'customer-journey',
  brainBlueprint: 'touchpoint-analysis',
  complexity: 'medium',
  color: '#00BCD4',
  tags: ['touchpoint', 'customer journey', 'analysis', 'experience', 'ux'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  TOUCHPOINT ANALYSIS BOARD    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  JOURNEY \u2502  POINTS  \u2502 RECOMM.  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product / Service Name', type: 'text', placeholder: 'e.g., Acme SaaS Platform', required: true },
    { id: 'customerType', label: 'Customer Type', type: 'text', placeholder: 'e.g., Enterprise B2B buyer', required: false },
    { id: 'touchpoints', label: 'Key Touchpoints', type: 'textarea', placeholder: 'List touchpoints across the journey, one per line', required: true },
    { id: 'painPoints', label: 'Pain Points', type: 'textarea', placeholder: 'Known friction points in the journey', required: false },
    { id: 'delightPoints', label: 'Delight Points', type: 'textarea', placeholder: 'Moments that exceed expectations', required: false },
    { id: 'improvements', label: 'Improvement Ideas', type: 'textarea', placeholder: 'Ideas for improving the journey', required: false },
  ],
  sections: [
    { id: 'journeyFlow', name: 'Journey Flow', type: 'flowchart', description: 'Visual flow diagram of the customer journey', icon: '\u{1F504}' },
    { id: 'touchpoints', name: 'Touchpoint Analysis', type: 'sticky_cluster', description: 'Deep analysis of each touchpoint with sentiment', icon: '\u{1F3AF}' },
    { id: 'recommendations', name: 'Recommendations', type: 'document', description: 'Actionable recommendations for journey improvement', icon: '\u{1F4DD}' },
  ],
}
