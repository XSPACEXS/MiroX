import { TemplateDefinition, TemplateCategory } from '../types'

export const brandGuidelines: TemplateDefinition = {
  id: 'brand-guidelines',
  name: 'Brand Guidelines Board',
  category: TemplateCategory.Marketing,
  description: 'Define and document your brand identity with story, visual specs, and usage rules.',
  longDescription: 'Create a comprehensive brand guidelines board that captures your brand story, visual identity specifications, and usage rules. Document colors, fonts, tone of voice, and logo usage to keep your brand consistent across all touchpoints.',
  emoji: '\u{1F3A8}',
  estimatedTime: '~12 min',
  blueprintId: 'brand-guidelines',
  brainCategory: 'marketing',
  brainBlueprint: 'brand-guidelines',
  complexity: 'complex',
  color: '#3F51B5',
  tags: ['brand', 'guidelines', 'identity', 'design', 'style guide'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   BRAND GUIDELINES BOARD      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  STORY   \u2502  SPECS   \u2502  RULES   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'brandName', label: 'Brand Name', type: 'text', placeholder: 'e.g., Acme Corp', required: true },
    { id: 'tagline', label: 'Tagline', type: 'text', placeholder: 'e.g., Innovation at Scale', required: false },
    { id: 'mission', label: 'Mission Statement', type: 'textarea', placeholder: 'What is your brand mission?', required: false },
    { id: 'colors', label: 'Brand Colors', type: 'textarea', placeholder: 'Primary and secondary colors with hex codes', required: false },
    { id: 'fonts', label: 'Brand Fonts', type: 'textarea', placeholder: 'Typography choices for headings, body, and code', required: false },
    { id: 'tone', label: 'Brand Tone', type: 'multiselect', placeholder: 'Select tone attributes', required: false, options: ['Professional', 'Playful', 'Bold', 'Minimalist', 'Warm', 'Innovative'] },
  ],
  sections: [
    { id: 'brandStory', name: 'Brand Story', type: 'document', description: 'Brand mission, vision, values, and narrative', icon: '\u{1F4D6}' },
    { id: 'visualSpecs', name: 'Visual Specs', type: 'table', description: 'Color palette, typography, and logo specifications', icon: '\u{1F3A8}' },
    { id: 'usageRules', name: 'Usage Rules', type: 'sticky_cluster', description: 'Do/don\'t guidelines for brand assets and messaging', icon: '\u{1F4CC}' },
  ],
}
