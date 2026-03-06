import { TemplateDefinition, TemplateCategory } from '../types'

export const riskMatrix: TemplateDefinition = {
  id: 'risk-matrix',
  name: 'Risk Matrix',
  category: TemplateCategory.Strategy,
  description: 'Probability x Impact risk assessment grid with detailed risk register.',
  longDescription: 'Visualize and prioritize project risks using a probability-impact matrix. Plot risks on a color-coded grid from green (low) to red (critical), backed by a detailed register with mitigation strategies and ownership assignments.',
  emoji: '\u26A0\uFE0F',
  estimatedTime: '~4 min',
  blueprintId: 'risk-matrix',
  brainCategory: 'strategy-planning',
  brainBlueprint: 'competitive-analysis',
  complexity: 'medium',
  color: '#FFD600',
  tags: ['risk', 'matrix', 'assessment', 'mitigation', 'project management'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502      RISK MATRIX             \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 High  \u2502 Med  \u2502 HIGH \u2502 CRIT \u2502
\u2502 Prob  \u2502  R3  \u2502  R1  \u2502  R5  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Med   \u2502 Low  \u2502 Med  \u2502 HIGH \u2502
\u2502 Prob  \u2502      \u2502  R2  \u2502  R4  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Low   \u2502 Low  \u2502 Low  \u2502 Med  \u2502
\u2502 Prob  \u2502      \u2502      \u2502      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  RISK REGISTER TABLE         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  ASSESSMENT DOCUMENT         \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'projectName', label: 'Project Name', type: 'text', placeholder: 'e.g., Product Launch 2026', required: true },
    { id: 'risks', label: 'Risks', type: 'textarea', placeholder: 'List risks, one per line\ne.g., Key developer leaves\nSupplier delays shipment', required: true },
    { id: 'mitigations', label: 'Mitigation Ideas', type: 'textarea', placeholder: 'Mitigation strategies for the above risks, one per line', required: false },
    { id: 'riskOwner', label: 'Default Risk Owner', type: 'text', placeholder: 'e.g., Project Manager', required: false },
    { id: 'methodology', label: 'Assessment Methodology', type: 'select', placeholder: 'Select methodology', required: false, options: ['Qualitative (Low/Med/High)', 'Semi-quantitative (1-5 scale)', 'Custom'] },
  ],
  sections: [
    { id: 'matrix', name: 'Risk Matrix Grid', type: 'matrix', description: '3x3 probability-impact grid with risk placement', icon: '\u{1F7E5}' },
    { id: 'register', name: 'Risk Register', type: 'table', description: 'Detailed risk register with mitigations and owners', icon: '\u{1F4CA}' },
    { id: 'assessment', name: 'Risk Assessment', type: 'document', description: 'Methodology, top risks deep dive, and action plan', icon: '\u{1F4DD}' },
  ],
}
