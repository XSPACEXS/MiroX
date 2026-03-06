import { TemplateDefinition, TemplateCategory } from '../types'

export const competitiveAnalysis: TemplateDefinition = {
  id: 'competitive-analysis',
  name: 'Competitive Analysis',
  category: TemplateCategory.Research,
  description: 'Competitor comparison with positioning map, comparison table, and strategic analysis.',
  longDescription: 'Analyze your competitive landscape with a visual positioning map, detailed competitor comparison table, and strategic analysis document. Plot competitors on a 2-axis grid, compare features and pricing, and identify your competitive advantages.',
  emoji: '\u{1F50D}',
  estimatedTime: '~4 min',
  blueprintId: 'competitive-analysis',
  brainCategory: 'strategy-planning',
  brainBlueprint: 'competitive-analysis',
  complexity: 'medium',
  color: '#F59E0B',
  tags: ['competitive', 'analysis', 'market', 'positioning', 'comparison'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     COMPETITIVE ANALYSIS         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 POSITIONING    \u2502 ANALYSIS DOC     \u2502
\u2502 MAP (2x2)     \u2502 \u2022 Profiles       \u2502
\u2502  \u25CF You        \u2502 \u2022 Advantages     \u2502
\u2502  \u25CB Comp A     \u2502 \u2022 Strategy       \u2502
\u2502  \u25CB Comp B     \u2502                  \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  COMPETITOR COMPARISON TABLE      \u2502
\u2502  Name|Category|Pricing|Strengths  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'yourProduct', label: 'Your Product', type: 'text', placeholder: 'e.g., MyProduct', required: true },
    { id: 'competitor1', label: 'Competitor 1', type: 'text', placeholder: 'e.g., CompetitorCo', required: true },
    { id: 'competitor2', label: 'Competitor 2', type: 'text', placeholder: 'e.g., RivalApp', required: true },
    { id: 'competitor3', label: 'Competitor 3', type: 'text', placeholder: 'e.g., AltSolution', required: false },
    { id: 'dimensions', label: 'Comparison Dimensions', type: 'textarea', placeholder: 'Comma-separated features to compare\ne.g., Pricing, Ease of Use, Features, Support, Scalability', required: false, helpText: 'What dimensions will you compare competitors on?' },
    { id: 'positioningAxes', label: 'Positioning Axes', type: 'text', placeholder: 'e.g., Price (Low-High) vs Quality (Low-High)', required: false },
  ],
  sections: [
    { id: 'positioning', name: 'Positioning Map', type: 'matrix', description: '2x2 grid plotting competitors on two axes', icon: '\u{1F4CD}' },
    { id: 'comparison', name: 'Competitor Table', type: 'table', description: 'Feature-by-feature competitor comparison', icon: '\u{1F4CB}' },
    { id: 'analysis', name: 'Analysis Document', type: 'document', description: 'Competitor profiles and strategic recommendations', icon: '\u{1F4DD}' },
  ],
}
