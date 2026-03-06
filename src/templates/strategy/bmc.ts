import { TemplateDefinition, TemplateCategory } from '../types'

export const bmc: TemplateDefinition = {
  id: 'bmc',
  name: 'Business Model Canvas',
  category: TemplateCategory.Strategy,
  description: 'Osterwalder\'s 9-block Business Model Canvas for validating your business idea.',
  longDescription: 'Map your entire business model on a single canvas using the Osterwalder framework. Define your value proposition, customer segments, revenue streams, and key resources to validate assumptions and communicate your strategy clearly.',
  emoji: '\u{1F9E9}',
  estimatedTime: '~5 min',
  blueprintId: 'business-model-canvas',
  brainCategory: 'strategy-planning',
  brainBlueprint: 'business-model-canvas',
  complexity: 'medium',
  color: '#FFD600',
  tags: ['bmc', 'business model', 'canvas', 'startup', 'lean', 'osterwalder'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  KEY     \u2502  KEY     \u2502  VALUE   \u2502 CUSTOMER\u2502 CUSTOMER\u2502
\u2502 PARTNERS\u2502ACTIVITIES\u2502PROPOSIT.\u2502 RELATION\u2502 SEGMENTS\u2502
\u2502         \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524         \u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524         \u2502
\u2502         \u2502  KEY     \u2502         \u2502 CHANNELS\u2502         \u2502
\u2502         \u2502RESOURCES \u2502         \u2502         \u2502         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  COST STRUCTURE       \u2502  REVENUE STREAMS        \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productName', label: 'Product / Company Name', type: 'text', placeholder: 'e.g., My SaaS Platform', required: true },
    { id: 'customerSegments', label: 'Customer Segments', type: 'textarea', placeholder: 'Who are your most important customers?', required: true },
    { id: 'valueProposition', label: 'Value Proposition', type: 'textarea', placeholder: 'What value do you deliver to customers?', required: true },
    { id: 'channels', label: 'Channels', type: 'textarea', placeholder: 'How do you reach your customer segments?', required: false },
    { id: 'revenueStreams', label: 'Revenue Streams', type: 'textarea', placeholder: 'How does the business earn revenue?', required: true },
    { id: 'keyPartners', label: 'Key Partners', type: 'textarea', placeholder: 'Who are your key partners and suppliers?', required: false },
    { id: 'keyActivities', label: 'Key Activities', type: 'textarea', placeholder: 'What key activities does your value proposition require?', required: false },
    { id: 'keyResources', label: 'Key Resources', type: 'textarea', placeholder: 'What key resources does your value proposition require?', required: false },
    { id: 'costStructure', label: 'Cost Structure', type: 'textarea', placeholder: 'What are the most important costs inherent to your model?', required: false },
  ],
  sections: [
    { id: 'canvas', name: 'Business Model Canvas', type: 'matrix', description: '9-block BMC layout with color-coded segments', icon: '\u{1F9E9}' },
    { id: 'analysis', name: 'BMC Analysis', type: 'document', description: 'Strategic fit assessment and key hypotheses', icon: '\u{1F4DD}' },
    { id: 'validation', name: 'Validation Checklist', type: 'table', description: 'Assumptions to test and validate', icon: '\u2705' },
  ],
}
