import { TemplateDefinition, TemplateCategory } from '../types'

export const pestle: TemplateDefinition = {
  id: 'pestle-analysis',
  name: 'PESTLE Analysis',
  category: TemplateCategory.Research,
  description: 'Macro-environment analysis across Political, Economic, Social, Tech, Legal, Environmental factors.',
  longDescription: 'Scan your external environment using the PESTLE framework. Analyze Political, Economic, Social, Technological, Legal, and Environmental factors that could impact your business. Includes an impact assessment table and strategic synthesis document.',
  emoji: '\u{1F30D}',
  estimatedTime: '~5 min',
  blueprintId: 'pestle-analysis',
  complexity: 'medium',
  color: '#F59E0B',
  tags: ['pestle', 'macro', 'environment', 'analysis', 'strategy', 'external'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502POLITICAL\u2502 ECONOMIC\u2502  SOCIAL  \u2502
\u2502  [____] \u2502  [____] \u2502  [____] \u2502
\u2502  [____] \u2502  [____] \u2502  [____] \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   TECH  \u2502  LEGAL  \u2502  ENVIRO \u2502
\u2502  [____] \u2502  [____] \u2502  [____] \u2502
\u2502  [____] \u2502  [____] \u2502  [____] \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  IMPACT ASSESSMENT TABLE         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  SYNTHESIS DOCUMENT              \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'industry', label: 'Industry / Market', type: 'text', placeholder: 'e.g., Electric Vehicle Market in Europe', required: true },
    { id: 'political', label: 'Political Factors', type: 'textarea', placeholder: 'Government policies, trade regulations, political stability...', required: false },
    { id: 'economic', label: 'Economic Factors', type: 'textarea', placeholder: 'Growth rates, inflation, exchange rates, unemployment...', required: false },
    { id: 'social', label: 'Social Factors', type: 'textarea', placeholder: 'Demographics, cultural trends, health consciousness...', required: false },
    { id: 'technological', label: 'Technological Factors', type: 'textarea', placeholder: 'Innovation rate, R&D activity, automation, digital trends...', required: false },
    { id: 'legal', label: 'Legal Factors', type: 'textarea', placeholder: 'Employment law, consumer protection, data privacy (GDPR)...', required: false },
    { id: 'environmental', label: 'Environmental Factors', type: 'textarea', placeholder: 'Climate change, sustainability, carbon footprint, waste...', required: false },
  ],
  sections: [
    { id: 'categories', name: 'PESTLE Categories', type: 'frame', description: '6 category frames with sticky notes for each factor', icon: '\u{1F30D}' },
    { id: 'impact', name: 'Impact Assessment', type: 'table', description: 'Factor impact ratings with timeframe and actions', icon: '\u{1F4CB}' },
    { id: 'synthesis', name: 'Synthesis Document', type: 'document', description: 'Key trends, strategic implications, and recommendations', icon: '\u{1F4DD}' },
  ],
}
