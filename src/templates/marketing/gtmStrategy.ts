import { TemplateDefinition, TemplateCategory } from '../types'

export const gtmStrategy: TemplateDefinition = {
  id: 'gtm-strategy',
  name: 'GTM Strategy Board',
  category: TemplateCategory.Marketing,
  description: 'Plan your go-to-market strategy with market analysis, channel planning, and launch timeline.',
  longDescription: 'Build a comprehensive go-to-market strategy board that covers market analysis, competitive positioning, channel selection, and launch timeline. Perfect for product launches, market expansions, and new business initiatives.',
  emoji: '\u{1F680}',
  estimatedTime: '~12 min',
  blueprintId: 'gtm-strategy',
  brainCategory: 'marketing',
  brainBlueprint: 'gtm-strategy',
  complexity: 'complex',
  color: '#FF6B35',
  tags: ['gtm', 'go-to-market', 'strategy', 'launch', 'marketing', 'channels'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    GTM STRATEGY BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 MARKET   \u2502 CHANNELS \u2502 TIMELINE \u2502
\u2502 ANALYSIS \u2502  PLAN    \u2502          \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme SaaS Platform', required: true },
    { id: 'targetMarket', label: 'Target Market', type: 'textarea', placeholder: 'Describe your target market, segments, and ideal customer profile', required: true },
    { id: 'competitors', label: 'Competitors', type: 'textarea', placeholder: 'Key competitors, one per line', required: false },
    { id: 'launchDate', label: 'Launch Date', type: 'date', placeholder: 'Target launch date', required: false },
    { id: 'channels', label: 'Go-to-Market Channels', type: 'multiselect', placeholder: 'Select channels', required: false, options: ['Email', 'Social', 'Content', 'Paid', 'Events', 'PR'] },
    { id: 'successMetrics', label: 'Success Metrics', type: 'textarea', placeholder: 'How will you measure success? e.g., MQLs, pipeline, revenue targets', required: false },
  ],
  sections: [
    { id: 'marketAnalysis', name: 'Market Analysis', type: 'sticky_cluster', description: 'Target segments, competitive landscape, and positioning', icon: '\u{1F4CA}' },
    { id: 'channelPlan', name: 'Channel Plan', type: 'table', description: 'Channel strategy with budget allocation and KPIs', icon: '\u{1F4CB}' },
    { id: 'launchTimeline', name: 'Launch Timeline', type: 'document', description: 'Phased launch plan with milestones and deadlines', icon: '\u{1F4C5}' },
  ],
}
