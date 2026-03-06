import { TemplateDefinition, TemplateCategory } from '../types'

export const distributedEventWorld: TemplateDefinition = {
  id: 'distributed-event-world',
  name: 'Distributed Event World',
  category: TemplateCategory.EventIsometric,
  description: 'Visualize a multi-location distributed event as a connected world map with location details.',
  longDescription: 'Plan events that span multiple locations around the world. Create a visual world map showing each event location as a connected node, with sticky clusters providing details for each site. Perfect for global company events, distributed hackathons, and multi-city meetups.',
  emoji: '\u{1F310}',
  estimatedTime: '~12 min',
  blueprintId: 'distributed-event-world',
  brainCategory: 'event-isometric',
  brainBlueprint: 'distributed-event-world',
  complexity: 'complex',
  color: '#1A237E',
  tags: ['distributed', 'event', 'global', 'multi-location', 'world', 'isometric'],
  previewAscii: `
\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502  DISTRIBUTED EVENT WORLD        \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [NYC] --- [London] --- [Tokyo] \u2502
\u2502       [Berlin] --- [SF]         \u2502
\u251C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  [Location Details]             \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
  `,
  fields: [
    { id: 'eventName', label: 'Event Name', type: 'text', placeholder: 'e.g., Global Hackathon 2026', required: true },
    { id: 'date', label: 'Event Date', type: 'date', placeholder: 'Select event date', required: true },
    { id: 'locations', label: 'Event Locations', type: 'textarea', placeholder: 'Event locations, one per line', required: true, helpText: 'Event locations, one per line' },
    { id: 'theme', label: 'Event Theme', type: 'text', placeholder: 'e.g., Innovation, Sustainability', required: false },
    { id: 'connections', label: 'Connections', type: 'textarea', placeholder: 'How locations are connected (livestream, shared activities)', required: false },
  ],
  sections: [
    { id: 'world-map', name: 'World Map', type: 'frame', description: 'Frame-based world map showing event locations as connected nodes', icon: '\u{1F310}' },
    { id: 'location-details', name: 'Location Details', type: 'sticky_cluster', description: 'Sticky notes with venue details, contacts, and logistics per location', icon: '\u{1F4CC}' },
  ],
}
