import { TemplateDefinition, TemplateCategory } from '../types'

export const businessPlan: TemplateDefinition = {
  id: 'business-plan',
  name: 'Business Plan',
  category: TemplateCategory.Strategy,
  description: 'Complete business plan with market analysis, financials, and go-to-market strategy.',
  longDescription: 'Build a comprehensive business plan that covers every aspect of your venture — from market opportunity and competitive landscape to operational plan and financial projections. Perfect for startups, new products, or business unit planning.',
  emoji: '\u{1F4CA}',
  estimatedTime: '~8 min',
  blueprintId: 'business-plan',
  brainCategory: 'strategy-planning',
  brainBlueprint: 'vision-board',
  complexity: 'complex',
  color: '#FFD600',
  tags: ['business', 'startup', 'planning', 'strategy', 'financials'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502            BUSINESS PLAN OVERVIEW           \u2502
\u2502  [Company] \u00B7 [Industry] \u00B7 [Stage]           \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  MARKET      \u2502  PRODUCT/SERVICE             \u2502
\u2502  ANALYSIS    \u2502  OVERVIEW                    \u2502
\u2502  \u2022 Size      \u2502  \u2022 Features                  \u2502
\u2502  \u2022 Segments  \u2502  \u2022 USP                       \u2502
\u2502  \u2022 Trends    \u2502  \u2022 Pricing                   \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  COMPETITIVE LANDSCAPE                      \u2502
\u2502  [Positioning Map]                          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  GO-TO-MARKET            \u2502  FINANCIAL       \u2502
\u2502  \u2022 Channels              \u2502  PROJECTIONS     \u2502
\u2502  \u2022 Marketing             \u2502  \u2022 Revenue       \u2502
\u2502  \u2022 Sales Strategy        \u2502  \u2022 Costs         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  RISK REGISTER          \u2502  TEAM & ORG      \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'companyName', label: 'Company / Product Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'industry', label: 'Industry / Sector', type: 'text', placeholder: 'e.g., SaaS, FinTech, Healthcare', required: true },
    { id: 'stage', label: 'Business Stage', type: 'select', placeholder: 'Select stage', required: true, options: ['Idea', 'Pre-seed', 'Seed', 'Series A', 'Growth', 'Established'] },
    { id: 'targetMarket', label: 'Target Market', type: 'textarea', placeholder: 'e.g., SMBs in the US with 10-100 employees who struggle with...', required: true },
    { id: 'keyProduct', label: 'Key Product / Service', type: 'textarea', placeholder: 'Describe your main offering and unique value proposition', required: true },
    { id: 'teamSize', label: 'Team Size', type: 'select', placeholder: 'Select team size', required: false, options: ['1 (Solo)', '2-5', '6-15', '16-50', '50+'] },
    { id: 'fundingGoal', label: 'Funding Goal (Optional)', type: 'text', placeholder: 'e.g., $2M Seed Round', required: false },
  ],
  sections: [
    { id: 'overview', name: 'Business Overview', type: 'frame', description: 'Hero section with company summary', icon: '\u{1F3E2}' },
    { id: 'market', name: 'Market Analysis', type: 'document', description: 'Market size, segments, and opportunity', icon: '\u{1F4C8}' },
    { id: 'competitive', name: 'Competitive Landscape', type: 'flowchart', description: 'Positioning map and competitor comparison', icon: '\u2694\uFE0F' },
    { id: 'product', name: 'Product/Service', type: 'document', description: 'Features, USP, and pricing', icon: '\u{1F6E0}\uFE0F' },
    { id: 'gtm', name: 'Go-to-Market', type: 'flowchart', description: 'Marketing and sales strategy', icon: '\u{1F680}' },
    { id: 'financials', name: 'Financial Projections', type: 'table', description: 'Revenue, costs, and runway', icon: '\u{1F4B0}' },
    { id: 'risks', name: 'Risk Register', type: 'table', description: 'Key risks and mitigation strategies', icon: '\u26A0\uFE0F' },
  ],
}
