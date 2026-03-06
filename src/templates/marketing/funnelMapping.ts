import { TemplateDefinition, TemplateCategory } from '../types'

export const funnelMapping: TemplateDefinition = {
  id: 'funnel-mapping',
  name: 'Funnel Mapping Board',
  category: TemplateCategory.Marketing,
  description: 'Visualize and optimize your marketing funnel from awareness to conversion.',
  longDescription: 'Map out your entire marketing and sales funnel with visual flow diagrams, stage-by-stage analysis, and an optimization plan. Identify bottlenecks, improve conversion rates, and align your team on the customer acquisition journey.',
  emoji: '\u{1F53B}',
  estimatedTime: '~8 min',
  blueprintId: 'funnel-mapping',
  brainCategory: 'marketing',
  brainBlueprint: 'funnel-mapping',
  complexity: 'medium',
  color: '#FF9800',
  tags: ['funnel', 'conversion', 'marketing', 'optimization', 'pipeline'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     FUNNEL MAPPING BOARD      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 FUNNEL   \u2502 STAGES   \u2502 OPTIMIZE \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme SaaS', required: true },
    { id: 'funnelStages', label: 'Funnel Stages', type: 'textarea', placeholder: 'e.g., Awareness, Interest, Consideration, Purchase, Retention', required: false },
    { id: 'currentConversionRate', label: 'Current Conversion Rate', type: 'text', placeholder: 'e.g., 2.5%', required: false },
    { id: 'topOfFunnel', label: 'Top of Funnel Sources', type: 'textarea', placeholder: 'Where do leads come from? One per line', required: false },
    { id: 'bottlenecks', label: 'Known Bottlenecks', type: 'textarea', placeholder: 'Where are people dropping off?', required: false },
  ],
  sections: [
    { id: 'funnelVisual', name: 'Funnel Visual', type: 'flowchart', description: 'Visual funnel diagram showing stages and flow', icon: '\u{1F53B}' },
    { id: 'stageAnalysis', name: 'Stage Analysis', type: 'sticky_cluster', description: 'Deep dive into each funnel stage with metrics', icon: '\u{1F50D}' },
    { id: 'optimizationPlan', name: 'Optimization Plan', type: 'document', description: 'Action plan to improve conversion at each stage', icon: '\u{1F4DD}' },
  ],
}
