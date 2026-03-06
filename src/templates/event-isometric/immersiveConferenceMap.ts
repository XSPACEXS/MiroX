import { TemplateDefinition, TemplateCategory } from '../types'

export const immersiveConferenceMap: TemplateDefinition = {
  id: 'immersive-conference-map',
  name: 'Immersive Conference Map',
  category: TemplateCategory.EventIsometric,
  description: 'Create an isometric conference venue map with tracks, stages, and a session schedule.',
  longDescription: 'Design an immersive conference experience with an isometric venue map. Lay out stages, breakout rooms, and networking areas in a visual frame, then organize the full session schedule in a companion table. Great for virtual and hybrid conference planning.',
  emoji: '\u{1F3DF}\uFE0F',
  estimatedTime: '~12 min',
  blueprintId: 'immersive-conference-map',
  brainCategory: 'event-isometric',
  brainBlueprint: 'immersive-conference-map',
  complexity: 'complex',
  color: '#37474F',
  tags: ['conference', 'isometric', 'event', 'venue', 'map', 'schedule'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  IMMERSIVE CONFERENCE MAP       \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Main Stage]  [Track A]       \u2502
\u2502     [Track B]  [Lounge]        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Session Schedule Table         \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'eventName', label: 'Event Name', type: 'text', placeholder: 'e.g., TechConf 2026', required: true },
    { id: 'date', label: 'Event Date', type: 'date', placeholder: 'Select event date', required: true },
    { id: 'venue', label: 'Venue', type: 'text', placeholder: 'e.g., Convention Center Hall A', required: true },
    { id: 'tracks', label: 'Tracks / Stages', type: 'textarea', placeholder: 'Conference tracks or stages, one per line', required: false, helpText: 'Conference tracks/stages' },
    { id: 'capacity', label: 'Capacity', type: 'text', placeholder: 'e.g., 500 attendees', required: false },
    { id: 'highlights', label: 'Highlights', type: 'textarea', placeholder: 'Keynotes, special sessions, or notable speakers', required: false },
  ],
  sections: [
    { id: 'isometric-map', name: 'Isometric Venue Map', type: 'frame', description: 'Frame-based isometric layout of the conference venue', icon: '\u{1F3DF}\uFE0F' },
    { id: 'session-schedule', name: 'Session Schedule', type: 'table', description: 'Table of sessions with times, speakers, and track assignments', icon: '\u{1F4C5}' },
  ],
}
