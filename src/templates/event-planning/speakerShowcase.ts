import { TemplateDefinition, TemplateCategory } from '../types'

export const speakerShowcase: TemplateDefinition = {
  id: 'speaker-showcase',
  name: 'Speaker Showcase Board',
  category: TemplateCategory.EventPlanning,
  description: 'Showcase event speakers with visual cards and detailed bios.',
  longDescription: 'Create a visual showcase of your event speakers with cards featuring photos, bios, and session topics. Perfect for conference planning, internal events, and speaker coordination. Share with attendees or use internally for planning.',
  emoji: '\u{1F3A4}',
  estimatedTime: '~5 min',
  blueprintId: 'speaker-showcase',
  brainCategory: 'event-planning',
  brainBlueprint: 'speaker-showcase',
  complexity: 'simple',
  color: '#673AB7',
  tags: ['speakers', 'event', 'showcase', 'bios', 'conference'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502   SPEAKER SHOWCASE BOARD      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502 SPEAKER CARDS \u2502 SPEAKER BIOS \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'eventName', label: 'Event Name', type: 'text', placeholder: 'e.g., Innovation Summit 2026', required: true },
    { id: 'speakers', label: 'Speakers', type: 'textarea', placeholder: 'One speaker per line', required: true, helpText: 'One speaker per line' },
    { id: 'topics', label: 'Topics', type: 'textarea', placeholder: 'Session topics, one per line', required: false },
    { id: 'sponsorNote', label: 'Sponsor Notes', type: 'textarea', placeholder: 'Sponsor acknowledgments or notes', required: false },
  ],
  sections: [
    { id: 'speakerCards', name: 'Speaker Cards', type: 'sticky_cluster', description: 'Visual cards for each speaker with name and topic', icon: '\u{1F3A4}' },
    { id: 'bios', name: 'Speaker Bios', type: 'document', description: 'Detailed biographies and session descriptions', icon: '\u{1F4D6}' },
  ],
}
