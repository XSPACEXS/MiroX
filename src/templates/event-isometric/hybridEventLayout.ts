import { TemplateDefinition, TemplateCategory } from '../types'

export const hybridEventLayout: TemplateDefinition = {
  id: 'hybrid-event-layout',
  name: 'Hybrid Event Layout',
  category: TemplateCategory.EventIsometric,
  description: 'Plan hybrid events with in-person and virtual components, session splits, and logistics guides.',
  longDescription: 'Design a hybrid event that seamlessly connects in-person and virtual attendees. Use a frame layout to visualize the physical and digital spaces, a table to split sessions across formats, and a guide document for hybrid logistics and best practices.',
  emoji: '\u{1F500}',
  estimatedTime: '~8 min',
  blueprintId: 'hybrid-event-layout',
  brainCategory: 'event-isometric',
  brainBlueprint: 'hybrid-event-layout',
  complexity: 'medium',
  color: '#006064',
  tags: ['hybrid', 'event', 'virtual', 'in-person', 'layout', 'isometric'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    HYBRID EVENT LAYOUT          \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  In-Person     \u2502   Virtual      \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Session Split Table            \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Hybrid Guide                   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'eventName', label: 'Event Name', type: 'text', placeholder: 'e.g., Product Summit 2026', required: true },
    { id: 'date', label: 'Event Date', type: 'date', placeholder: 'Select event date', required: true },
    { id: 'inPersonVenue', label: 'In-Person Venue', type: 'text', placeholder: 'e.g., Downtown Conference Center', required: false },
    { id: 'virtualPlatform', label: 'Virtual Platform', type: 'text', placeholder: 'e.g., Zoom, Hopin, Gather', required: false },
    { id: 'sessions', label: 'Sessions', type: 'textarea', placeholder: 'Sessions with format (in-person/virtual/both)', required: false },
    { id: 'hybridNotes', label: 'Hybrid Notes', type: 'textarea', placeholder: 'Logistics and considerations for hybrid format', required: false },
  ],
  sections: [
    { id: 'event-layout', name: 'Event Layout', type: 'frame', description: 'Frame showing physical and virtual event spaces side by side', icon: '\u{1F500}' },
    { id: 'session-split', name: 'Session Split', type: 'table', description: 'Table showing which sessions are in-person, virtual, or both', icon: '\u{1F4CB}' },
    { id: 'hybrid-guide', name: 'Hybrid Guide', type: 'document', description: 'Document with hybrid event best practices and logistics', icon: '\u{1F4D6}' },
  ],
}
