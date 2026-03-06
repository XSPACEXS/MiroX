import { TemplateDefinition, TemplateCategory } from '../types'

export const salesPlaybook: TemplateDefinition = {
  id: 'sales-playbook',
  name: 'Sales Playbook Board',
  category: TemplateCategory.Sales,
  description: 'Build a sales playbook with pitch docs, objection handling, and competitive intel.',
  longDescription: 'Create a comprehensive sales playbook that equips your team with everything they need to win deals. Document your pitch, handle common objections, and track competitive intelligence. A living document that evolves with your sales process.',
  emoji: '\u{1F4D3}',
  estimatedTime: '~12 min',
  blueprintId: 'sales-playbook',
  brainCategory: 'sales',
  brainBlueprint: 'sales-playbook',
  complexity: 'complex',
  color: '#0D47A1',
  tags: ['sales', 'playbook', 'objections', 'competitive', 'pitch'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   SALES PLAYBOOK BOARD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 PLAYBOOK \u2502 OBJECTNS \u2502 COMPETE  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme Platform', required: true },
    { id: 'idealCustomer', label: 'Ideal Customer Profile', type: 'textarea', placeholder: 'Who is the ideal buyer?', required: false },
    { id: 'pitch', label: 'Elevator Pitch', type: 'textarea', placeholder: 'Your 30-second pitch', required: false },
    { id: 'objections', label: 'Common Objections', type: 'textarea', placeholder: 'Common objections and responses', required: false, helpText: 'Common objections and responses' },
    { id: 'winReasons', label: 'Why We Win', type: 'textarea', placeholder: 'Top reasons customers choose us', required: false },
    { id: 'lossReasons', label: 'Why We Lose', type: 'textarea', placeholder: 'Top reasons we lose deals', required: false },
  ],
  sections: [
    { id: 'playbook', name: 'Sales Playbook', type: 'document', description: 'Complete sales playbook with process and messaging', icon: '\u{1F4D3}' },
    { id: 'objectionHandling', name: 'Objection Handling', type: 'sticky_cluster', description: 'Common objections with proven responses', icon: '\u{1F6E1}\u{FE0F}' },
    { id: 'competitiveIntel', name: 'Competitive Intel', type: 'table', description: 'Competitor comparison and battlecards', icon: '\u{1F4CA}' },
  ],
}
