import { TemplateDefinition, TemplateCategory } from '../types'

export const agendaBoard: TemplateDefinition = {
  id: 'agenda-board',
  name: 'Event Agenda Board',
  category: TemplateCategory.EventPlanning,
  description: 'Create a detailed event schedule with session tracking and time blocks.',
  longDescription: 'Build a clear, time-blocked event agenda with session details. Perfect for conferences, workshops, and multi-day events. Track sessions, breaks, and parallel tracks in an easy-to-follow schedule format.',
  emoji: '\u{1F5D3}\u{FE0F}',
  estimatedTime: '~5 min',
  blueprintId: 'agenda-board',
  brainCategory: 'event-planning',
  brainBlueprint: 'agenda-board',
  complexity: 'simple',
  color: '#607D8B',
  tags: ['agenda', 'schedule', 'event', 'sessions', 'timeline'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502    EVENT AGENDA BOARD         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502   SCHEDULE    \u2502   SESSIONS   \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'eventName', label: 'Event Name', type: 'text', placeholder: 'e.g., Developer Conference 2026', required: true },
    { id: 'date', label: 'Event Date', type: 'date', placeholder: 'Event date', required: true },
    { id: 'sessions', label: 'Sessions', type: 'textarea', placeholder: 'List sessions with times, one per line\ne.g., 9:00 AM - Opening Keynote', required: true },
    { id: 'breaks', label: 'Breaks', type: 'textarea', placeholder: 'Break times and descriptions', required: false },
    { id: 'venue', label: 'Venue', type: 'text', placeholder: 'e.g., Grand Ballroom, Level 3', required: false },
  ],
  sections: [
    { id: 'schedule', name: 'Schedule', type: 'table', description: 'Time-blocked schedule with sessions and breaks', icon: '\u{1F5D3}\u{FE0F}' },
    { id: 'sessionDetails', name: 'Session Details', type: 'document', description: 'Detailed description for each session', icon: '\u{1F4DD}' },
  ],
}
