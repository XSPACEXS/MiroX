import { TemplateDefinition, TemplateCategory } from '../types'

export const launchGTMOverview: TemplateDefinition = {
  id: 'launch-gtm-overview',
  name: 'Launch & GTM Overview',
  category: TemplateCategory.LaunchGTM,
  description: 'Plan your product launch and go-to-market strategy with channels, messaging, and success metrics.',
  longDescription: 'Orchestrate a successful product launch with a comprehensive GTM strategy board. Define your target market, craft channel-specific plans, build a launch checklist, and track success metrics. Brings together strategy, execution, and measurement in one place.',
  emoji: '\u{1F6F8}',
  estimatedTime: '~12 min',
  blueprintId: 'launch-gtm-overview',
  brainCategory: 'launch-gtm',
  brainBlueprint: 'launch-gtm-overview',
  complexity: 'complex',
  color: '#AD1457',
  tags: ['launch', 'gtm', 'go-to-market', 'strategy', 'product-launch', 'marketing'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    LAUNCH & GTM OVERVIEW        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  GTM Strategy Document          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Launch Checklist Table         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Channel Plans Cluster]        \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product Name', type: 'text', placeholder: 'e.g., Acme Pro 2.0', required: true },
    { id: 'launchDate', label: 'Launch Date', type: 'date', placeholder: 'Select launch date', required: true },
    { id: 'targetMarket', label: 'Target Market', type: 'textarea', placeholder: 'Who is this launch targeting?', required: true },
    { id: 'channels', label: 'Channels', type: 'textarea', placeholder: 'Distribution and marketing channels, one per line', required: false },
    { id: 'messaging', label: 'Key Messaging', type: 'textarea', placeholder: 'Core launch messages and positioning', required: false },
    { id: 'successMetrics', label: 'Success Metrics', type: 'textarea', placeholder: 'How will you measure launch success?', required: false },
    { id: 'risks', label: 'Risks', type: 'textarea', placeholder: 'Potential risks and mitigations', required: false },
  ],
  sections: [
    { id: 'gtm-strategy', name: 'GTM Strategy', type: 'document', description: 'Comprehensive go-to-market strategy document with positioning and messaging', icon: '\u{1F4D6}' },
    { id: 'launch-checklist', name: 'Launch Checklist', type: 'table', description: 'Task table with owners, deadlines, and status for launch readiness', icon: '\u2705' },
    { id: 'channel-plans', name: 'Channel Plans', type: 'sticky_cluster', description: 'Clustered sticky notes for each marketing and distribution channel', icon: '\u{1F4E2}' },
  ],
}
