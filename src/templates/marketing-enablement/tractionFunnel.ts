import { TemplateDefinition, TemplateCategory } from '../types'

export const tractionFunnel: TemplateDefinition = {
  id: 'traction-funnel',
  name: 'Traction Funnel Board',
  category: TemplateCategory.MarketingEnablement,
  description: 'Visualize your traction funnel with stage metrics, bottleneck analysis, and growth experiments.',
  longDescription: 'Map your entire traction funnel from awareness to retention. Visualize the flow with a flowchart, track stage-by-stage metrics in a table, and brainstorm growth experiments in sticky clusters. Identify bottlenecks and prioritize experiments to improve conversion at each stage.',
  emoji: '\u{1F53B}',
  estimatedTime: '~8 min',
  blueprintId: 'traction-funnel',
  brainCategory: 'marketing-enablement',
  brainBlueprint: 'traction-funnel',
  complexity: 'medium',
  color: '#1A237E',
  tags: ['funnel', 'traction', 'growth', 'marketing', 'conversion', 'experiments'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    TRACTION FUNNEL BOARD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Awareness \u2192 Interest \u2192 ...     \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 Stage \u2502 Volume \u2502  CVR  \u2502  Drop   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Experiments Cluster]          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme SaaS', required: true },
    { id: 'stages', label: 'Funnel Stages', type: 'textarea', placeholder: 'Funnel stages, one per line', required: false, defaultValue: 'Awareness\nInterest\nConsideration\nIntent\nPurchase\nRetention' },
    { id: 'currentNumbers', label: 'Current Numbers', type: 'textarea', placeholder: 'Volume at each stage, one per line', required: false },
    { id: 'bottleneck', label: 'Bottleneck Analysis', type: 'textarea', placeholder: 'Where are users dropping off and why?', required: false },
    { id: 'experiments', label: 'Growth Experiments', type: 'textarea', placeholder: 'Experiment ideas to improve conversion', required: false },
  ],
  sections: [
    { id: 'funnel-flow', name: 'Funnel Flow', type: 'flowchart', description: 'Visual flowchart showing funnel stages and conversion flow', icon: '\u{1F53B}' },
    { id: 'stage-metrics', name: 'Stage Metrics', type: 'table', description: 'Table with volume, conversion rate, and drop-off at each stage', icon: '\u{1F4CA}' },
    { id: 'experiments-cluster', name: 'Experiments', type: 'sticky_cluster', description: 'Sticky notes for growth experiment ideas and results', icon: '\u{1F9EA}' },
  ],
}
