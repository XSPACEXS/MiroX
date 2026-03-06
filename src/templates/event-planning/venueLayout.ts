import { TemplateDefinition, TemplateCategory } from '../types'

export const venueLayout: TemplateDefinition = {
  id: 'venue-layout',
  name: 'Venue Layout Board',
  category: TemplateCategory.EventPlanning,
  description: 'Plan venue layouts with floor plans and room assignments.',
  longDescription: 'Design and plan your event venue layout with visual floor plans and room assignment tables. Map out seating arrangements, equipment placement, and flow between spaces. Great for conferences, trade shows, and large meetings.',
  emoji: '\u{1F3DB}\u{FE0F}',
  estimatedTime: '~8 min',
  blueprintId: 'venue-layout',
  brainCategory: 'event-planning',
  brainBlueprint: 'venue-layout',
  complexity: 'medium',
  color: '#795548',
  tags: ['venue', 'layout', 'floor plan', 'event', 'rooms'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    VENUE LAYOUT BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  FLOOR PLAN   \u2502 ROOM ASSIGN  \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'venueName', label: 'Venue Name', type: 'text', placeholder: 'e.g., Downtown Convention Center', required: true },
    { id: 'capacity', label: 'Total Capacity', type: 'text', placeholder: 'e.g., 1,000', required: false },
    { id: 'rooms', label: 'Rooms / Spaces', type: 'textarea', placeholder: 'List rooms and spaces, one per line', required: true },
    { id: 'setupNotes', label: 'Setup Notes', type: 'textarea', placeholder: 'Special setup requirements or instructions', required: false },
    { id: 'accessibilityNotes', label: 'Accessibility Notes', type: 'textarea', placeholder: 'Accessibility considerations and accommodations', required: false },
  ],
  sections: [
    { id: 'floorPlan', name: 'Floor Plan', type: 'frame', description: 'Visual floor plan with room layouts and flow', icon: '\u{1F3DB}\u{FE0F}' },
    { id: 'roomAssignments', name: 'Room Assignments', type: 'table', description: 'Room assignments with capacity and equipment', icon: '\u{1F4CB}' },
  ],
}
