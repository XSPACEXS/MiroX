import { TemplateDefinition, TemplateCategory } from '../types'

export const landingPageTracker: TemplateDefinition = {
  id: 'landing-page-tracker',
  name: 'Landing Page Tracker',
  category: TemplateCategory.MarketingEnablement,
  description: 'Track landing page performance with metrics, conversion rates, and optimization notes.',
  longDescription: 'Monitor and optimize your landing pages in one place. Track key metrics like conversion rates and traffic in a table, and capture optimization ideas and test results in sticky clusters. Perfect for growth teams running continuous experiments.',
  emoji: '\u{1F4C4}',
  estimatedTime: '~8 min',
  blueprintId: 'landing-page-tracker',
  brainCategory: 'marketing-enablement',
  brainBlueprint: 'landing-page-tracker',
  complexity: 'medium',
  color: '#4A148C',
  tags: ['landing-page', 'tracker', 'conversion', 'marketing', 'optimization', 'growth'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   LANDING PAGE TRACKER          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Page \u2502  CVR   \u2502 Views \u2502  Goal   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Optimization Notes]           \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'pageName', label: 'Page Name', type: 'text', placeholder: 'e.g., Product Demo Landing Page', required: true },
    { id: 'url', label: 'URL', type: 'text', placeholder: 'e.g., https://example.com/demo', required: false },
    { id: 'goal', label: 'Page Goal', type: 'text', placeholder: 'e.g., Demo signups', required: true },
    { id: 'conversionRate', label: 'Conversion Rate', type: 'text', placeholder: 'e.g., 3.2%', required: false },
    { id: 'traffic', label: 'Traffic Volume', type: 'text', placeholder: 'e.g., 5,000 visits/month', required: false },
    { id: 'testVariants', label: 'Test Variants', type: 'textarea', placeholder: 'A/B test variants and results', required: false },
  ],
  sections: [
    { id: 'metrics-table', name: 'Page Metrics', type: 'table', description: 'Table of landing pages with conversion rates, traffic, and goals', icon: '\u{1F4CA}' },
    { id: 'optimization-notes', name: 'Optimization Notes', type: 'sticky_cluster', description: 'Sticky notes with optimization ideas and experiment results', icon: '\u{1F4A1}' },
  ],
}
