import { TemplateDefinition, TemplateCategory } from '../types'

export const eventGuide: TemplateDefinition = {
  id: 'event-guide',
  name: 'Event Guide Board',
  category: TemplateCategory.EventPlanning,
  description: 'Plan events end-to-end with agenda, speaker management, and logistics tracking.',
  longDescription: 'Organize your entire event from planning to execution. Create a detailed agenda, manage speakers and sessions, and track logistics like venue, catering, and AV requirements all in one collaborative board.',
  emoji: '\u{1F4CB}',
  estimatedTime: '~8 min',
  blueprintId: 'event-guide',
  brainCategory: 'event-planning',
  brainBlueprint: 'event-guide',
  complexity: 'medium',
  color: '#FF5722',
  tags: ['event', 'planning', 'agenda', 'speakers', 'logistics'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502     EVENT GUIDE BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  AGENDA  \u2502 SPEAKERS \u2502 LOGISTIC \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'eventName', label: 'Event Name', type: 'text', placeholder: 'e.g., Annual Tech Summit 2026', required: true },
    { id: 'date', label: 'Event Date', type: 'date', placeholder: 'Event date', required: true },
    { id: 'location', label: 'Location', type: 'text', placeholder: 'e.g., San Francisco Convention Center', required: false },
    { id: 'attendees', label: 'Expected Attendees', type: 'text', placeholder: 'e.g., 500', required: false },
    { id: 'agenda', label: 'Agenda Overview', type: 'textarea', placeholder: 'High-level agenda items, one per line', required: true },
    { id: 'speakers', label: 'Speakers', type: 'textarea', placeholder: 'Speaker names and topics, one per line', required: false },
  ],
  sections: [
    { id: 'agenda', name: 'Event Agenda', type: 'document', description: 'Detailed event agenda with times and descriptions', icon: '\u{1F4CB}' },
    { id: 'speakerTable', name: 'Speaker Management', type: 'table', description: 'Speaker details, topics, and session assignments', icon: '\u{1F3A4}' },
    { id: 'logistics', name: 'Logistics', type: 'sticky_cluster', description: 'Venue, catering, AV, and other logistics notes', icon: '\u{1F4E6}' },
  ],
}
