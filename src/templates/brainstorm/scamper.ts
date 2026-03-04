import { TemplateDefinition, TemplateCategory } from '../types'

export const scamper: TemplateDefinition = {
  id: 'scamper',
  name: 'SCAMPER',
  category: TemplateCategory.Brainstorm,
  description: 'Seven-lens creative thinking framework for systematic product innovation.',
  longDescription: 'Apply the SCAMPER method to systematically generate innovative ideas. Explore your product or challenge through seven creative lenses: Substitute, Combine, Adapt, Modify, Put to other use, Eliminate, and Reverse. Each lens prompts different thinking patterns to unlock breakthrough ideas.',
  emoji: '\u{1F504}',
  estimatedTime: '~4 min',
  blueprintId: 'scamper',
  complexity: 'medium',
  color: '#EC4899',
  tags: ['scamper', 'innovation', 'creative thinking', 'ideation', 'product'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2510
\u2502 S  \u2502 C  \u2502 A  \u2502 M  \u2502 P  \u2502 E  \u2502 R  \u2502
\u2502SUB \u2502COM \u2502ADA \u2502MOD \u2502PUT \u2502ELI \u2502REV \u2502
\u2502    \u2502    \u2502    \u2502    \u2502    \u2502    \u2502    \u2502
\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502
\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502
\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502[__]\u2502
\u251C\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2524
\u2502  SCAMPER SUMMARY DOCUMENT            \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'productIdea', label: 'Product / Idea to Improve', type: 'textarea', placeholder: 'What are you applying SCAMPER to?', required: true },
    { id: 'substitute', label: 'Substitute', type: 'textarea', placeholder: 'What can you substitute? Materials, people, processes?', required: false },
    { id: 'combine', label: 'Combine', type: 'textarea', placeholder: 'What can you combine? Features, markets, ideas?', required: false },
    { id: 'adapt', label: 'Adapt', type: 'textarea', placeholder: 'What can you adapt from elsewhere? Other industries?', required: false },
    { id: 'modify', label: 'Modify / Magnify', type: 'textarea', placeholder: 'What can you modify, enlarge, or shrink?', required: false },
    { id: 'putToOtherUse', label: 'Put to Other Use', type: 'textarea', placeholder: 'How else could this be used? New markets?', required: false },
    { id: 'eliminate', label: 'Eliminate', type: 'textarea', placeholder: 'What can you remove or simplify?', required: false },
    { id: 'reverse', label: 'Reverse / Rearrange', type: 'textarea', placeholder: 'What can you reverse, flip, or rearrange?', required: false },
  ],
  sections: [
    { id: 'frames', name: 'SCAMPER Frames', type: 'frame', description: '7 side-by-side frames, one per SCAMPER letter', icon: '\u{1F504}' },
    { id: 'summary', name: 'SCAMPER Summary', type: 'document', description: 'Top ideas from each category with priorities', icon: '\u{1F4DD}' },
  ],
}
