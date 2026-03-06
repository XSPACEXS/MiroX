# Feature Landscape

## Overview

- **Purpose**: Map the entire feature set of a product as a terrain-style landscape where mountains represent flagship features, valleys hold supporting capabilities, rivers connect data flows, and forests symbolize ecosystem depth. This metaphorical board makes complex product portfolios intuitive and memorable, turning dry feature lists into an explorable world that stakeholders can navigate by terrain type.
- **Best For**: Product leaders presenting feature portfolios to boards or investors, solution architects mapping capability landscapes for enterprise clients, competitive analysis teams comparing product terrains side-by-side, product marketing crafting positioning narratives.
- **Complexity**: Advanced
- **Board Size**: 5000 x 3500px

## Color Scheme

| Role                 | Color          | Hex     |
| -------------------- | -------------- | ------- |
| Primary (Sky)        | Soft Sky Blue  | #D4E8F7 |
| Mountains (Flagship) | Slate Blue     | #3A5683 |
| Hills (Secondary)    | Sage Olive     | #6B8F71 |
| Valleys (Supporting) | Warm Sand      | #F2E6D9 |
| Rivers (Data Flow)   | Azure Blue     | #4DA6FF |
| Forest (Ecosystem)   | Deep Green     | #2D6A4F |
| Desert (Deprecated)  | Dusty Tan      | #C9B99A |
| Accent (New)         | Sunrise Orange | #FF7B54 |
| Text Primary         | Charcoal       | #212121 |
| Text on Dark         | White          | #FFFFFF |
| Grid/Path Lines      | Warm Gray      | #B0A99F |

## Board Layout

The board is rendered as a topographic map viewed from above. The title sits in the top-left corner as a "map legend" frame. Terrain zones flow organically across the canvas. A winding river (representing data flow) connects multiple zones. Mountain peaks sit prominently in the center. Decorative contour lines create the topographic map feeling.

```
+-----------------------------------------------------------------------+
| [MAP LEGEND]                                                           |
| Feature Landscape                                                      |
| ACME Platform 2026                                                     |
+-----------------------------------------------------------------------+
|                                                                        |
|         /\  MOUNTAIN PEAKS          ~~~~ RIVER: DATA FLOW ~~~~        |
|        /  \  (Flagship Features)     ~~~~                  ~~~~        |
|       /    \                              ~~~~             ~~~~        |
|      /  /\  \                                 ~~~~                     |
|     / /    \ \                                                         |
|   HILLS (Secondary)          VALLEY (Supporting)                       |
|   ::::::::::::              ........................                    |
|   ::::::::::::              ........................                    |
|                                                                        |
|   FOREST (Ecosystem)        DESERT (Legacy/Deprecated)                 |
|   ||||||||||||              ,,,,,,,,,,,,,,,,,,                          |
|   ||||||||||||              ,,,,,,,,,,,,,,,,,,                          |
|                                                                        |
|   [COMPASS ROSE]   [SCALE BAR]   [CONTOUR LEGEND]                     |
+-----------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Map Legend & Title

- **Position**: Top-left corner
- **Size**: 1200 x 500px
- **Background**: Warm Sand (#F2E6D9) with dark border
- **Elements**:
  - Text block: "Feature Landscape" — font size 48, bold, Slate Blue (#3A5683)
  - Text block: "ACME Platform — Capability Terrain Map — Q1 2026" — font size 20, Charcoal
  - Text block: "Navigate the product by terrain: Mountains = Flagship | Hills = Secondary | Valleys = Supporting | Rivers = Data Flow | Forests = Ecosystem" — font size 13, italic
  - Shape: Small colored squares as map key — Slate Blue "Flagship", Sage Olive "Secondary", Warm Sand "Supporting", Azure Blue "Data Flow", Deep Green "Ecosystem", Dusty Tan "Legacy"
  - Sticky note (light, #FFF9C4): "Last surveyed: March 6, 2026 | Cartographer: Product Team | 52 features mapped"

### Frame 2: Mountain Peaks — Flagship Features

- **Position**: Center-top of board, prominent
- **Size**: 2000 x 1000px
- **Background**: Slate Blue (#3A5683) at 8% opacity
- **Elements**:
  - Text block: "Mountain Peaks — Flagship Features" — font size 36, bold, Slate Blue (#3A5683)
  - Shape: Large triangle "Peak 1: Real-Time Collaboration" — (#3A5683), labeled "Multi-user editing, cursors, comments, reactions | 94% of users engage | Signature feature"
  - Shape: Large triangle "Peak 2: Visual Canvas Engine" — (#4A6693), labeled "Infinite canvas, zoom, frames, grids | 60fps rendering | Core IP"
  - Shape: Large triangle "Peak 3: AI Assist" — (#3A76A3), labeled "Natural language to board, smart layout, auto-suggest | Newest peak | Growing fast"
  - Shape: Medium triangle "Peak 4: Template Library" — (#5A86B3), labeled "342 templates, community-created, industry-specific | 78% activation rate"
  - Sticky note (blue, #BBDEFB): "Summit goal: AI Assist to become tallest peak by Q4 — measuring by daily active usage"
  - Sticky note (orange, #FFE0B2): "NEW: AI Assist gained 35% height (adoption) this quarter — fastest growing peak"
  - Sticky note (green, #C8E6C9): "Real-Time Collaboration remains the tallest — NPS 72, industry-leading"
  - Sticky note (yellow, #FFF9C4): "Canvas Engine performance: 60fps with 1000+ objects — competitors average 30fps"
  - Text block: "Altitude = User Adoption | Base Width = Feature Breadth | Snow Cap = Market Leadership" — font size 12

### Frame 3: Rolling Hills — Secondary Features

- **Position**: Left-center zone
- **Size**: 1400 x 900px
- **Background**: Sage Olive (#6B8F71) at 10% opacity
- **Elements**:
  - Text block: "Rolling Hills — Secondary Features" — font size 36, bold, Sage Olive (#6B8F71)
  - Shape: Rectangle "Presentation Mode" — (#6B8F71), labeled "Walk-through boards as slides | Used by 42% of teams weekly"
  - Shape: Rectangle "Board Sharing & Permissions" — (#7B9F81), labeled "Public links, team spaces, guest access, embed | Enterprise-grade"
  - Shape: Rectangle "Import/Export Engine" — (#5B7F61), labeled "CSV, JSON, PDF, PNG, Visio, Jira import | 89 formats supported"
  - Shape: Rectangle "Voting & Reactions" — (#8BAF91), labeled "Dot voting, emoji reactions, timer | Workshop essential"
  - Shape: Rectangle "Commenting System" — (#9BBF A1), labeled "Thread replies, @mentions, resolve/reopen | 2.3M comments/month"
  - Sticky note (green, #C8E6C9): "Presentation mode climbing toward peak status — 42% weekly usage, up from 28%"
  - Sticky note (teal, #B2DFDB): "Import engine: Added Notion import this quarter — 12K boards imported in week 1"
  - Sticky note (yellow, #FFF9C4): "Permissions model needs refactoring — currently 6 different permission systems"
  - Text block: "Hills are features with strong adoption but not yet defining the product" — font size 12

### Frame 4: Fertile Valley — Supporting Capabilities

- **Position**: Right-center zone
- **Size**: 1400 x 900px
- **Background**: Warm Sand (#F2E6D9) at 60% opacity
- **Elements**:
  - Text block: "Fertile Valley — Supporting Capabilities" — font size 36, bold, Charcoal
  - Shape: Rectangle "Notification Center" — (#D4C4A9), labeled "In-app, email, Slack, mobile push | 89% open rate"
  - Shape: Rectangle "Search & Discovery" — (#C4B499), labeled "Full-text across boards, filters, recent, favorites"
  - Shape: Rectangle "User Profiles & Settings" — (#B4A489), labeled "Avatar, timezone, language, notification prefs"
  - Shape: Rectangle "Audit Log" — (#A49479), labeled "Enterprise: action tracking, compliance, export"
  - Shape: Rectangle "Billing & Subscription" — (#948469), labeled "Self-serve billing, usage metering, invoice generation"
  - Shape: Rectangle "Help Center Integration" — (#847459), labeled "In-app help widget, contextual tooltips, chatbot"
  - Sticky note (sand, #FFF9C4): "Valley features rarely excite users but cause pain when broken — invest in reliability"
  - Sticky note (green, #C8E6C9): "Search overhaul shipped: results now 3x faster, full-text across all content types"
  - Sticky note (pink, #F8BBD0): "Billing system: 3rd most common support ticket topic — needs UX refresh"
  - Text block: "Valley features provide essential infrastructure — fertile soil for the peaks to grow" — font size 12

### Frame 5: Azure River — Data Flow

- **Position**: Winding through center of board (horizontal band)
- **Size**: 4200 x 400px
- **Background**: Azure Blue (#4DA6FF) at 10% opacity
- **Elements**:
  - Text block: "Azure River — Data Flow & Integrations" — font size 30, bold, Azure Blue (#4DA6FF)
  - Shape: Wavy horizontal line representing the river, Azure Blue, 4px
  - Sticky note (blue, #BBDEFB): "Source: 24 native integrations flowing data into ACME"
  - Sticky note (blue, #BBDEFB): "Current: 12M events/day processed through event pipeline"
  - Sticky note (blue, #BBDEFB): "Tributaries: Slack, Jira, GitHub, Figma, Notion, Salesforce (new)"
  - Sticky note (blue, #BBDEFB): "Delta: Webhooks, API, Zapier — data flows outward to 420+ connected tools"
  - Sticky note (light blue, #E3F2FD): "River health: 99.9% data delivery SLA | avg latency 340ms | 0 data loss incidents in 2026"
  - Text block: "The river connects all terrain zones — data flows from mountains through valleys to the sea (external systems)" — font size 12

### Frame 6: Dense Forest — Ecosystem Depth

- **Position**: Lower-left zone
- **Size**: 1400 x 800px
- **Background**: Deep Green (#2D6A4F) at 10% opacity
- **Elements**:
  - Text block: "Dense Forest — Ecosystem & Platform" — font size 36, bold, Deep Green (#2D6A4F)
  - Shape: Rectangle "App Marketplace" — (#2D6A4F), labeled "67 published apps | 2,300 developers | SDK: JS, Python, Go"
  - Shape: Rectangle "Community Forum" — (#3D7A5F), labeled "14K members | 890 posts/month | 92% response in 24h"
  - Shape: Rectangle "Academy & Certification" — (#4D8A6F), labeled "8 learning paths | 2,340 certified users"
  - Shape: Rectangle "Partner Network" — (#5D9A7F), labeled "12 certified partners | SI, consulting, training"
  - Sticky note (green, #C8E6C9): "Forest growing rapidly: developer community up 180% YoY"
  - Sticky note (green, #C8E6C9): "New trail: 'Build with ACME' YouTube series — 12 episodes, 45K views"
  - Sticky note (orange, #FFE0B2): "Q2: Launch revenue-sharing template marketplace for community creators"
  - Text block: "Dense forests indicate ecosystem maturity — the thicker the forest, the harder to replicate" — font size 12

### Frame 7: Dusty Desert — Legacy & Deprecated

- **Position**: Lower-right zone
- **Size**: 1200 x 800px
- **Background**: Dusty Tan (#C9B99A) at 15% opacity
- **Elements**:
  - Text block: "Dusty Desert — Legacy & Deprecated" — font size 36, bold, Dusty Tan (#C9B99A)
  - Shape: Rectangle "Legacy Export v1" — (#C9B99A), labeled "Deprecated: Removal June 2026 | Migration tool available"
  - Shape: Rectangle "Classic Editor" — (#B9A98A), labeled "Sunset: Fully removed Q4 2025 | 0 active users remain"
  - Shape: Rectangle "Old Webhook Format" — (#A9997A), labeled "Deprecated: Event-driven webhooks replace polling"
  - Shape: Rectangle "Flash Viewer" — (#99896A), labeled "Removed 2024 | Historical artifact | Zero usage"
  - Sticky note (gray, #E0E0E0): "Desert expands as we sunset old features — healthy sign of product evolution"
  - Sticky note (yellow, #FFF9C4): "Migration priority: 340 accounts still on Legacy Export v1 — email campaign started"
  - Text block: "The desert preserves the fossils of past decisions — learn from what came before" — font size 12

### Frame 8: Compass Rose & Scale

- **Position**: Bottom strip
- **Size**: 4800 x 300px
- **Background**: Warm Sand (#F2E6D9)
- **Elements**:
  - Shape: Compass rose (diamond with N/S/E/W labels) — decorative
  - Text block: "Scale: Each grid square = ~1 feature cluster | Elevation = adoption maturity | Color depth = strategic importance" — font size 14
  - Text block: "Total features mapped: 52 | Teams: 8 | Last updated: March 6, 2026 | Next terrain survey: April 1, 2026" — font size 12
  - Shape: Small rectangles as contour legend — "High Elevation (Flagship)", "Mid Elevation (Secondary)", "Low Elevation (Supporting)", "Water (Data Flow)", "Forest (Ecosystem)", "Desert (Legacy)"

## Connectors & Flow

Terrain pathways (styled as hiking trails):

1. **Map Legend --> Mountain Peaks**: Warm Gray (#B0A99F), 3px, dashed, labeled "Start exploration here"
2. **Mountain Peaks --> Rolling Hills**: Warm Gray, 3px, solid, labeled "Descend to secondary features"
3. **Rolling Hills --> Fertile Valley**: Warm Gray, 3px, solid, labeled "Valley floor — essential support"
4. **Mountain Peaks --> Azure River**: Azure Blue (#4DA6FF), 4px, solid, labeled "Data flows from peaks"
5. **Azure River --> Dense Forest**: Deep Green (#2D6A4F), 3px, solid, labeled "Nourishes the ecosystem"
6. **Fertile Valley --> Dusty Desert**: Dusty Tan (#C9B99A), 2px, dashed, labeled "Features may erode over time"
7. **Dense Forest --> Mountain Peaks**: Sage Olive (#6B8F71), 2px, dashed, labeled "Ecosystem feeds growth"

## Example Content

The board maps the ACME collaborative workspace platform as a geographic landscape. Key terrain metrics:

- **Mountain Peaks (Flagship)**: 4 features — Real-Time Collaboration, Canvas Engine, AI Assist, Template Library
- **Rolling Hills (Secondary)**: 5 features — Presentation Mode, Permissions, Import/Export, Voting, Comments
- **Fertile Valley (Supporting)**: 6 features — Notifications, Search, Profiles, Audit, Billing, Help
- **Azure River (Data Flow)**: 24 native integrations + 420 Zapier connections
- **Dense Forest (Ecosystem)**: Marketplace, Community, Academy, Partners
- **Dusty Desert (Deprecated)**: 4 legacy items in various sunset stages

## Variations

1. **Competitive Terrain Comparison**: Place two landscapes side-by-side — your product vs. a competitor. Compare mountain heights, forest density, and river width.
2. **Platform Evolution Timeline**: Show 4 smaller terrain maps in sequence (2023, 2024, 2025, 2026) to visualize how the landscape grew over time.
3. **Customer Segment Terrain**: Create different terrain maps for each customer segment — what's a mountain for SMB might be a hill for Enterprise.
4. **Technical Debt Geology**: Replace the metaphors — mountains are clean architecture, valleys are tech debt, deserts are abandoned code, rivers are CI/CD pipelines.

## Build Instructions

1. Create the board at 5000 x 3500px with Soft Sky Blue (#D4E8F7) background for the "aerial view" effect.
2. Place the Map Legend frame (1200 x 500px) at top-left with Warm Sand background. Add title, description, and color key.
3. Create Mountain Peaks frame (2000 x 1000px) at center-top. Add triangle shapes for flagship features with adoption metrics.
4. Create Rolling Hills frame (1400 x 900px) at left-center with Sage Olive tint.
5. Create Fertile Valley frame (1400 x 900px) at right-center with Warm Sand tint.
6. Create Azure River frame (4200 x 400px) as a horizontal band through the center. Add the wavy line shape and data flow stickies.
7. Create Dense Forest frame (1400 x 800px) at lower-left with Deep Green tint.
8. Create Dusty Desert frame (1200 x 800px) at lower-right with Dusty Tan tint.
9. Place Compass Rose & Scale strip (4800 x 300px) at the bottom.
10. Draw terrain pathway connectors between frames using Warm Gray lines.
11. Add decorative contour lines (thin, light gray, curved) scattered between frames for topographic effect.
12. Add small "tree" shapes near the Forest frame and "rock" shapes near the Desert.

## Tips & Best Practices

- Use the terrain metaphor consistently in team conversations — "Is this a mountain or a hill?" becomes a natural product question.
- Update the landscape quarterly to show feature "growth" (hills becoming mountains) or "erosion" (features moving to desert).
- Print the board as a large poster for the product team area — teams love having a map of what they're building.
- Use Miro's zoom feature to create progressive detail: zoomed out = terrain overview, zoomed in = specific feature details.
- Add clickable links on each terrain zone that jump to detailed feature boards.
- During roadmap planning, place "flag" shapes on terrain features to mark strategic priorities.
