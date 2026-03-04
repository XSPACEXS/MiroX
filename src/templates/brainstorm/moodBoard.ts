import { TemplateDefinition, TemplateCategory } from '../types'

export const moodBoard: TemplateDefinition = {
  id: 'mood-board',
  name: 'Mood Board',
  category: TemplateCategory.Brainstorm,
  description: 'Visual inspiration board with image placeholders, color palette, and design direction.',
  longDescription: 'Create a visual mood board to communicate design direction, brand personality, and aesthetic vision. Includes image placeholder frames, a color palette section, and a design direction document capturing keywords, style, and brand personality.',
  emoji: '\u{1F3A8}',
  estimatedTime: '~2 min',
  blueprintId: 'mood-board',
  complexity: 'simple',
  color: '#EC4899',
  tags: ['mood board', 'design', 'inspiration', 'brand', 'visual', 'creative'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  Image  \u2502  Image  \u2502  Image  \u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Image  \u2502  Image  \u2502  Image  \u2502
\u2502 [____] \u2502 [____] \u2502 [____] \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  COLOR PALETTE                  \u2502
\u2502  \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF \u25CF              \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  DESIGN DIRECTION DOCUMENT     \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'projectName', label: 'Project Name', type: 'text', placeholder: 'e.g., Brand Refresh 2026', required: true },
    { id: 'keywords', label: 'Mood Keywords', type: 'textarea', placeholder: 'Comma-separated mood words\ne.g., Minimal, Bold, Warm, Organic, Premium', required: true },
    { id: 'colorPalette', label: 'Color Palette', type: 'textarea', placeholder: 'Hex colors or color names, comma-separated\ne.g., #1A1A1A, #FFD600, #F5F5F5, #2563EB', required: false },
    { id: 'styleDirection', label: 'Style Direction', type: 'select', placeholder: 'Select direction', required: false, options: ['Minimalist', 'Bold & Vibrant', 'Organic & Natural', 'Corporate & Clean', 'Retro & Vintage', 'Futuristic & Tech'] },
    { id: 'brandPersonality', label: 'Brand Personality', type: 'textarea', placeholder: 'Describe the personality in 3-5 adjectives\ne.g., Approachable, Innovative, Trustworthy', required: false },
  ],
  sections: [
    { id: 'images', name: 'Image Grid', type: 'frame', description: 'Placeholder frames for inspiration images', icon: '\u{1F5BC}\uFE0F' },
    { id: 'palette', name: 'Color Palette', type: 'frame', description: 'Color swatches representing the brand palette', icon: '\u{1F3A8}' },
    { id: 'direction', name: 'Design Direction', type: 'document', description: 'Design principles, mood, and brand personality', icon: '\u{1F4DD}' },
  ],
}
