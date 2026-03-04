import { TemplateDefinition, TemplateCategory } from '../types'

export const pitchDeck: TemplateDefinition = {
  id: 'pitch-deck',
  name: 'Pitch Deck',
  category: TemplateCategory.Strategy,
  description: 'Investor pitch deck structure with key slides for fundraising presentations.',
  longDescription: 'Structure your investor pitch using the proven slide format used by top startups. Cover problem, solution, market size, business model, traction, team, financials, and your ask in a clear, compelling narrative that investors expect.',
  emoji: '\u{1F4BC}',
  estimatedTime: '~6 min',
  blueprintId: 'pitch-deck',
  complexity: 'complex',
  color: '#FFD600',
  tags: ['pitch', 'investors', 'fundraising', 'startup', 'deck', 'presentation'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502        PITCH DECK                 \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  1. PROBLEM        [shape+doc]    \u2502
\u2502  2. SOLUTION        [flow+doc]    \u2502
\u2502  3. MARKET SIZE     [TAM/SAM]     \u2502
\u2502  4. BUSINESS MODEL  [flow+doc]    \u2502
\u2502  5. TRACTION        [table+doc]   \u2502
\u2502  6. TEAM            [shapes+doc]  \u2502
\u2502  7. FINANCIALS      [table+doc]   \u2502
\u2502  8. THE ASK         [shape+doc]   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company Name', type: 'text', placeholder: 'e.g., TechStart Inc.', required: true },
    { id: 'problem', label: 'Problem Statement', type: 'textarea', placeholder: 'What pain point are you solving? Who experiences it?', required: true },
    { id: 'solution', label: 'Solution', type: 'textarea', placeholder: 'How does your product solve this problem?', required: true },
    { id: 'marketSize', label: 'Market Size', type: 'text', placeholder: 'e.g., $50B TAM, $5B SAM, $500M SOM', required: true },
    { id: 'businessModel', label: 'Business Model', type: 'textarea', placeholder: 'How do you make money? Pricing model?', required: true },
    { id: 'traction', label: 'Traction / Metrics', type: 'textarea', placeholder: 'e.g., 10K users, $50K MRR, 20% MoM growth', required: false },
    { id: 'askAmount', label: 'Funding Ask', type: 'text', placeholder: 'e.g., $3M Series A', required: true },
    { id: 'useOfFunds', label: 'Use of Funds', type: 'textarea', placeholder: 'How will you use the investment? e.g., 40% Engineering, 30% Sales...', required: false },
  ],
  sections: [
    { id: 'problem', name: 'Problem', type: 'frame', description: 'Problem statement and market pain', icon: '\u{1F6A8}' },
    { id: 'solution', name: 'Solution', type: 'flowchart', description: 'Solution overview and product flow', icon: '\u{1F4A1}' },
    { id: 'market', name: 'Market Size', type: 'frame', description: 'TAM/SAM/SOM visualization', icon: '\u{1F30D}' },
    { id: 'model', name: 'Business Model', type: 'flowchart', description: 'Revenue model and pricing strategy', icon: '\u{1F4B5}' },
    { id: 'traction', name: 'Traction', type: 'table', description: 'Key metrics and growth data', icon: '\u{1F4C8}' },
    { id: 'financials', name: 'Financials', type: 'table', description: 'Financial projections and runway', icon: '\u{1F4B0}' },
  ],
}
