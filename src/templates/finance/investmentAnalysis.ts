import { TemplateDefinition, TemplateCategory } from '../types'

export const investmentAnalysis: TemplateDefinition = {
  id: 'investment-analysis',
  name: 'Investment Analysis Board',
  category: TemplateCategory.Finance,
  description: 'Analyze investments with thesis documentation, risk/return matrix, and comparables.',
  longDescription: 'Perform thorough investment analysis with a structured thesis document, visual risk/return assessment, and comparable deal tracking. Ideal for venture capital, private equity, corporate M&A, and any investment decision-making process.',
  emoji: '\u{1F4C8}',
  estimatedTime: '~12 min',
  blueprintId: 'investment-analysis',
  brainCategory: 'finance',
  brainBlueprint: 'investment-analysis',
  complexity: 'complex',
  color: '#1565C0',
  tags: ['investment', 'analysis', 'finance', 'risk', 'returns', 'thesis'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  INVESTMENT ANALYSIS BOARD    \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  THESIS  \u2502 RISK/RET \u2502  COMPS   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'investmentName', label: 'Investment Name', type: 'text', placeholder: 'e.g., Series B - TechCo', required: true },
    { id: 'amount', label: 'Investment Amount', type: 'text', placeholder: 'e.g., $5M', required: false },
    { id: 'horizon', label: 'Time Horizon', type: 'text', placeholder: 'e.g., 5 years', required: false },
    { id: 'thesis', label: 'Investment Thesis', type: 'textarea', placeholder: 'Why is this a good investment?', required: true },
    { id: 'risks', label: 'Key Risks', type: 'textarea', placeholder: 'Major risks, one per line', required: false },
    { id: 'returns', label: 'Expected Returns', type: 'textarea', placeholder: 'Return expectations and scenarios', required: false },
  ],
  sections: [
    { id: 'thesis', name: 'Investment Thesis', type: 'document', description: 'Detailed investment thesis and rationale', icon: '\u{1F4DD}' },
    { id: 'riskReturn', name: 'Risk / Return Matrix', type: 'matrix', description: 'Visual risk vs. return assessment', icon: '\u{1F4C8}' },
    { id: 'comparables', name: 'Comparable Deals', type: 'table', description: 'Comparable investments and benchmarks', icon: '\u{1F4CA}' },
  ],
}
