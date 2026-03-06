# Event Guide Immersive Isometric — Examples & Reference

## Overview

This reference guide provides detailed breakdowns of excellent Immersive Isometric Event Guide boards, common anti-patterns to avoid, and real-world case studies. These are the gold standard of Miro board design — visually stunning isometric worlds that serve as functional event companions. Use these examples to judge the quality of every event guide board you build.

---

## Great Board Breakdown #1: TechSummit 2026 Conference Map (Standard Isometric Campus)

### What Makes It Excellent

This board maps a 2-day, 1,500-person technology conference with 6 zones, 45 sessions, 30 speakers, and 20 sponsor booths — all rendered as an isometric campus with buildings, pathways, trees, and walking figures.

**Layout**: Isometric Conference Campus, 5000x3500px, Soft Cream (#FDFEFE) background.

```
┌─────────────────────────────────────────────────────────────────┐
│  TECHSUMMIT 2026 — IMMERSIVE CONFERENCE MAP                     │
│  March 15-16, 2026 | Convention Center | 1,500 Attendees        │
│  45 Sessions | 30 Speakers | 20 Exhibitors | 2 Days             │
└─────────────────────────────────────────────────────────────────┘

      ☁  ☁        ☁           ☁  ☁
                      ☁

  ┌──────────┐              ┌──────────┐
  │▓▓ REGIS  │   🌳  🚶     │▓▓ MAIN   │     🌳  🚶
  │▓▓ TRATION│══════════════│▓▓ STAGE  │════════════
  │  (Teal)  │  Golden path │  (Blue)  │  Golden path
  │  Check-in│   3 min walk │  Keynotes│   2 min walk
  │  Badges  │              │  800 cap │
  │  WiFi    │              │  12 talks│
  └──────────┘              └──────────┘
       │                         │
  🌳   ═══ pathway ═══   🌳     ═══ pathway ═══   🌳
       │                         │
  ┌──────────┐              ┌──────────┐
  │▓▓ BREAK  │              │▓▓ EXPO   │
  │▓▓ OUT    │══════════════│▓▓ HALL   │
  │  (Green) │              │  (Orange)│
  │  4 rooms │              │  20 boots│
  │  20 talks│              │  Demos   │
  └──────────┘              └──────────┘
       │                         │
  🌳   ═══ pathway ═══   🌳     ═══ pathway ═══   🌳
       │                         │
  ┌──────────┐              ┌──────────┐
  │▓▓ FOOD & │              │▓▓ NET    │  ┌──────────┐
  │▓▓ LOUNGE │══════════════│▓▓ WORKING│  │ COMPANION│
  │  (Amber) │              │  (Coral) │  │ PANEL    │
  │  Meals   │              │  Areas   │  │ NOW: ... │
  │  Coffee  │              │  Events  │  │ NEXT: ...│
  └──────────┘              └──────────┘  └──────────┘

  🚶 🌳 🚶 🌳 🚶 🌳 🚶 🌳 🚶 🌳 🚶 🌳 🚶

┌─────────────────────────────────────────────────────────────────┐
│ SCHEDULE — Day 1                  │ SCHEDULE — Day 2             │
│ 8:00  Registration Opens          │ 8:30  Breakfast & Networking │
│ 9:00  Opening Keynote ★           │ 9:00  Keynote: AI Ethics ★   │
│ 10:00 Breakout Sessions (4 track) │ 10:00 Breakout Sessions      │
│ 12:00 Lunch                       │ 12:00 Lunch                  │
│ 13:00 Expo Hall Opens             │ 13:00 Workshop Labs          │
│ 15:00 Afternoon Keynote ★         │ 15:00 Closing Keynote ★      │
│ 17:00 Happy Hour (Networking)     │ 16:00 Closing & Farewell     │
│ 19:00 Evening Gala                │                              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ SPEAKER DIRECTORY — 30 Featured Speakers                        │
│ [Photo] Name, Title, Company — Session, Day/Time, Room          │
│ [Photo] Name, Title, Company — Session, Day/Time, Room          │
│ ...                                                             │
└─────────────────────────────────────────────────────────────────┘
```

**Why it works**:

1. **The isometric campus is immediately recognizable** — Within 2 seconds, an attendee understands this is a map of a conference venue. Buildings represent zones, pathways show how to get between them, and the spatial arrangement mirrors the actual venue layout.
2. **Every building has the 3-face isometric treatment** — Front face (zone color), top face (lighter shade, offset), side face (darker shade). This creates convincing 3D depth on a 2D canvas.
3. **Shadows ground every building** — Each building casts a subtle shadow (dark gray at 12-15% opacity) offset to the lower-right. This small detail makes the buildings feel like they sit on the ground rather than floating.
4. **Pathways include walking times** — Every golden pathway segment is labeled with estimated walking time: "3 min walk." This is genuinely useful information for attendees planning their route between sessions.
5. **The companion panel is the live nerve center** — An 800px-wide panel at the right edge shows: "NOW PLAYING: AI Keynote — Main Stage," "UP NEXT: 4 breakout sessions," "QUICK LINKS: WiFi, Schedule, Map," and "LIVE POLL: Rate this session." This is the only zone that changes during the event.
6. **Decorative elements create atmosphere** — 5 cloud clusters in the sky (varying opacity: 15-25%), 28 trees along pathways (alternating sides), 18 human figures (walking, standing, in groups), 3 spotlight shapes above the main stage. All locked.
7. **The schedule is color-coded to match zone colors** — Main stage sessions are blue, breakout sessions are green, expo activities are orange, networking events are coral. An attendee can cross-reference the schedule with the map using color alone.
8. **Speaker cards are scannable** — Each speaker card follows a consistent format: photo placeholder, name (bold), title, company, session title, day/time, room. An attendee searching for a specific speaker can scan quickly.

**Key metrics and info displayed**:

- Title banner: "1,500 Attendees | 45 Sessions | 30 Speakers | 20 Exhibitors | 2 Days"
- Registration zone: "Check-in Hours: 7:30-9:00 | Badge Types: VIP, Speaker, Attendee, Sponsor"
- Main Stage zone: "Capacity: 800 | AV: Live stream + recording | Keynotes: 4"
- Breakout zone: "4 Rooms | 20 sessions | Capacity: 100-200 per room"
- Expo zone: "20 booths | Demo Theater: 8 demos | Scavenger Hunt: 10 stops"
- Food zone: "Breakfast: 8:00-9:00 | Lunch: 12:00-13:00 | Dietary: V, VG, GF, Halal"
- Networking zone: "Speed Networking: 17:00 | Evening Gala: 19:00 | Quiet Lounge available"

---

## Great Board Breakdown #2: NightCode Hackathon (Dark Theme Isometric)

### What Makes It Excellent

This board maps a 48-hour hackathon for 300 developers with 5 zones, rendered in a dramatic nighttime isometric style with neon accents, stars, and spotlights.

**Layout**: Isometric Campus with dark theme, 5000x3500px, Midnight Blue (#0C1445) background.

```
        ☆     ☆        ☆    ☆       ☆
     ☆      ☆     ☆        ☆    ☆
          ☆            ☆         ☆

  ┌─────────────────────────────────────────────────────────────┐
  │  🌙 NIGHTCODE HACKATHON 2026 — 48 HOURS OF BUILDING 🌙    │
  │  300 Hackers | 60 Teams | $50K Prizes | March 22-24         │
  └─────────────────────────────────────────────────────────────┘

  ┌──────────┐  ═══ neon path ═══  ┌──────────┐
  │▓▓ HACKING│                      │▓▓ STAGE  │
  │▓▓ HALL   │    [spotlights]     │▓▓ (Neon  │
  │  (Neon   │                      │   Blue)  │
  │   Green) │                      │  Demos   │
  │  60 desks│                      │  Judging │
  └──────────┘                      └──────────┘
       │                                 │
  ═══ neon pathway (cyan glow) ═══
       │                                 │
  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │▓▓ MENTOR │  │▓▓ FUEL   │  │▓▓ CHILL  │
  │▓▓ LOUNGE │  │▓▓ STATION│  │▓▓ ZONE   │
  │  (Neon   │  │  (Neon   │  │  (Neon   │
  │   Purple)│  │   Orange)│  │   Pink)  │
  │  Office  │  │  24/7    │  │  Sleep   │
  │  hours   │  │  food    │  │  rest    │
  └──────────┘  └──────────┘  └──────────┘
```

**Why it works**:

1. **The dark theme perfectly matches the hackathon atmosphere** — Hackathons happen at night. The midnight blue background with stars, moon, and neon accents creates the energy of a late-night coding session.
2. **Neon pathway colors glow against dark background** — Pathway connectors use bright cyan (#00E5FF) which appears to glow against the dark background. This creates a Tron-like aesthetic that developers love.
3. **The Hacking Hall building is the largest** — It dominates the left side of the board, reflecting the reality that 80% of attendee time is spent at their desks coding. The Stage is smaller but prominent, reflecting its importance for demos and judging.
4. **A 48-hour timeline runs along the bottom** — Hour-by-hour markers show: workshop times, mentor office hours, meal breaks, energy breaks (midnight snacks, 3 AM coffee), and the final demo submission deadline with a countdown timer.
5. **Sponsor logos appear as "building signs"** — Sponsors are not in a separate section; their logos appear as illuminated signs on the buildings they sponsor: "HACKING HALL — Powered by GitHub" and "FUEL STATION — Sponsored by Red Bull."

**Key design innovations**:

- Stars are small white circles at 30-60% opacity, randomly scattered in the top third of the board
- A crescent moon shape sits in the upper-left corner
- Spotlights are triangular shapes with gradient opacity pointing down from the stage building
- Building windows glow with a faint light (tiny yellow rectangles at 40% opacity)
- The entire board has a sense of energy and excitement that a daytime theme would not achieve

---

## Great Board Breakdown #3: GreenFuture Summit (Outdoor Festival Campus)

### What Makes It Excellent

This board maps a 3-day outdoor sustainability summit for 2,000 attendees, rendered as a park-like campus with green spaces, open-air stages, and garden paths.

**Layout**: Festival Campus, 5500x4000px, Park Green (#E8F5E9) background.

```
  ☁   ☁      ☁         ☁    ☁

  ┌──────────────────────────────────────────────────────────────┐
  │  🌿 GREENFUTURE SUMMIT 2026 — 3 DAYS FOR THE PLANET 🌿     │
  │  2,000 Attendees | 60 Sessions | 40 Speakers | Outdoor Venue │
  └──────────────────────────────────────────────────────────────┘

  ┌──────────┐    🌳🌳🌳    ┌──────────┐    🌳🌳🌳    ┌──────────┐
  │ MAIN     │   garden     │ WORKSHOP │   garden     │ TECH     │
  │ MEADOW   │   path       │ GROVE    │   path       │ GARDEN   │
  │ (Green)  │              │ (Olive)  │              │ (Teal)   │
  │ Keynotes │   🌸 🌸       │ Hands-on │   🌸 🌸       │ Demos    │
  │ Open-air │              │ Labs     │              │ Exhibits │
  └──────────┘              └──────────┘              └──────────┘
       │                         │                         │
  🌳 ═══ garden path ═══ 🌳 ═══ garden path ═══ 🌳 ═══ garden path ═══ 🌳
       │                         │                         │
  ┌──────────┐    🌿🌿🌿    ┌──────────┐    🌿🌿🌿    ┌──────────┐
  │ FOOD     │              │ COMMUNITY│              │ SPONSOR  │
  │ FOREST   │              │ CLEARING │              │ VILLAGE  │
  │ (Amber)  │              │ (Coral)  │              │ (Purple) │
  │ Farm-to- │              │ Network  │              │ Booths   │
  │ table    │              │ Connect  │              │ Demos    │
  └──────────┘              └──────────┘              └──────────┘

  🌳 🌸 🌳 🌿 🌳 🌸 🌳 🌿 🌳 🌸 🌳 🌿 🌳 🌸 🌳
```

**Why it works**:

1. **The outdoor theme is physically evident** — No building has a roof. Zones are rendered as open-air areas with canvas canopy shapes, garden borders, and nature elements. This matches the outdoor venue reality.
2. **Vegetation density is extraordinary** — Over 50 tree and plant elements across the board: full trees along paths, flower clusters in open spaces, vine decorations on stage structures, leaf shapes in zone borders. This density creates a lush, immersive garden feel.
3. **Zone names use nature metaphors** — "Main Meadow" instead of "Main Stage," "Workshop Grove" instead of "Breakout Rooms," "Food Forest" instead of "Catering." These names reinforce the outdoor theme and make the board memorable.
4. **The color palette is exclusively warm and natural** — No neon, no harsh primary colors. Greens, olives, ambers, and earth tones dominate. This creates visual harmony that matches the sustainability theme.
5. **Weather and logistics are prominently placed** — A weather strip at the top shows forecast for each day. Sunscreen, water station, and first aid locations are marked on the map. This is critical for outdoor events.

---

## Great Board Breakdown #4: HybridConnect 2026 (Split-World Layout)

### What Makes It Excellent

This board maps a hybrid conference where 800 in-person and 3,000 virtual attendees share the same experience. The board literally splits into two worlds: a physical venue on the left and a virtual platform on the right.

**Layout**: Split-World, 5500x3500px, White (#FFFFFF) background with a central divider.

```
┌──────────────────────┬────┬──────────────────────┐
│  PHYSICAL WORLD      │ ⟷  │  VIRTUAL WORLD        │
│  800 In-Person       │    │  3,000 Online          │
│                      │    │                        │
│  ┌────────────┐      │ B  │      ┌────────────┐   │
│  │ Main Stage │      │ R  │      │ Live Stream │   │
│  │ (isometric │ ────►│ I  │◄──── │ (screen     │   │
│  │  building) │      │ D  │      │  mockup)    │   │
│  └────────────┘      │ G  │      └────────────┘   │
│                      │ E  │                        │
│  ┌────────────┐      │    │      ┌────────────┐   │
│  │ Expo Hall  │ ────►│ Z  │◄──── │ Virtual     │   │
│  │ (isometric)│      │ O  │      │ Expo Hall   │   │
│  └────────────┘      │ N  │      └────────────┘   │
│                      │ E  │                        │
│  🌳 🚶 pathways     │    │      Chat, Q&A,        │
│                      │    │      Networking         │
└──────────────────────┴────┴──────────────────────┘
```

**Why it works**:

1. **The split is immediately obvious** — A prominent vertical "bridge zone" divides the board into two halves. The left half uses isometric buildings and pathways (physical world). The right half uses flat screen mockups and UI elements (virtual world).
2. **Bridge connections show shared experiences** — Horizontal arrows cross the bridge zone, showing which physical experiences have virtual equivalents: "Main Stage → Live Stream," "Expo Hall → Virtual Booths," "Networking → Video Chat Rooms."
3. **The bridge zone contains shared elements** — The Q&A tool, live polls, and event hashtag sit in the bridge zone, indicating they are shared between both worlds.
4. **Virtual attendees have their own companion panel** — The right side has a virtual companion panel showing: "Current Session," "Virtual Booth to Visit," "Networking Queue," and "Your Schedule."
5. **This layout solves a real problem** — Hybrid events are inherently confusing. This board makes the relationship between physical and virtual clear at a glance.

---

## Anti-Pattern #1: The Flat Floor Plan

### What Goes Wrong

The board claims to be an "immersive isometric event guide" but is actually a flat floor plan with rectangles and labels. There is no 3D perspective, no decorative elements, no atmosphere. It looks like an architecture blueprint, not an immersive world.

**Symptoms**:

- All zones are flat rectangles with no depth treatment (no top face, no side face, no shadows)
- No decorative elements: no clouds, trees, figures, or ambient elements
- No pathway system — zones are connected by thin lines or not connected at all
- Background is plain white with no sky or ground treatment
- The board communicates venue layout but creates zero emotional engagement
- Attendees use the PDF floor plan instead because "it has the same information"

**Root cause**: Building a floor plan instead of an experience map. The builder focused on spatial accuracy (which room is where) without investing in the visual storytelling that makes this board type special.

**Fix**:

1. Apply the three-face isometric treatment to every zone building (front face, top face, side face)
2. Add shadows beneath every building (dark gray, 12-15% opacity, lower-right offset)
3. Create a sky area with 3-5 cloud clusters
4. Add 20-30 trees along pathways
5. Add 15-20 human figure shapes across the board
6. Create golden pathway connectors with walking time labels
7. Add ambient elements: spotlights above stages, coffee cups near food areas, WiFi signals near registration
8. The transformation from floor plan to immersive world requires 30-60 minutes of decorative work — it is worth every minute

---

## Anti-Pattern #2: The Information Desert

### What Goes Wrong

The board is visually beautiful — gorgeous isometric buildings, atmospheric clouds, charming walking figures — but the zones contain almost no useful information. Buildings have names but no session schedules, no speaker details, no capacity information, no logistics.

**Symptoms**:

- Zone buildings have titles ("Main Stage") but no content inside
- No session schedule anywhere on the board
- No speaker information
- No WiFi password, no emergency contacts, no dietary information
- The board is shared on social media as a "cool visual" but attendees cannot use it to navigate the event
- A separate text document or app must be consulted for actual event information

**Root cause**: Prioritizing visual design over information utility. The builder treated this as an illustration project rather than an information design project.

**Fix**:

1. Every zone must contain: schedule of activities in that zone, capacity, key logistics
2. The main stage zone must list all sessions with times and speakers
3. Registration zone must include: check-in hours, WiFi password, emergency contacts
4. Food zone must include: meal times, dietary options, evening event details
5. A full schedule reference must appear below the isometric world
6. Speaker directory must appear as a scannable section
7. The companion panel must be ready for live updates during the event
8. Rule: "If an attendee cannot plan their entire day using only this board, it is not finished"

---

## Anti-Pattern #3: The Scale Mismatch

### What Goes Wrong

Some buildings are enormous (600x500px) while others are tiny (100x80px), not because of importance hierarchy but because of inconsistent construction. Walking figures are the same height as buildings. Trees are taller than the main stage. The spatial scale is incoherent.

**Symptoms**:

- Human figures are disproportionately large or small relative to buildings
- Trees are as tall as or taller than buildings
- The main stage building is the same size as the bathroom indicator
- Pathway widths vary randomly across the board
- Cloud sizes are inconsistent (some tiny, some enormous)
- The overall effect is disorienting rather than immersive

**Root cause**: Building decorative elements at arbitrary sizes without establishing a consistent spatial scale. Each element was created independently without considering its relationship to other elements.

**Fix**:

1. Establish a scale reference: if the main stage building is 600px wide, a standard zone building should be 400-500px, and a minor zone should be 300-350px
2. Trees should be approximately 1/4 to 1/3 the height of a standard building
3. Human figures should be approximately 1/8 to 1/6 the height of a standard building
4. Clouds should be 150-300px wide, positioned in the sky area only
5. Pathways should be consistent width: 5px for primary, 2-3px for secondary
6. Draw all decorative elements at the SAME time using the SAME reference scale

---

## Anti-Pattern #4: The Unnavigable City

### What Goes Wrong

The board has beautifully rendered zones, but there is no clear spatial relationship between them. An attendee cannot determine how to get from the main stage to the breakout rooms, or whether the food area is near the expo hall.

**Symptoms**:

- No pathway system connecting zones
- No walking time estimates between zones
- Zones are scattered randomly across the canvas without spatial logic
- The spatial arrangement does not mirror the actual venue layout
- Attendees still need a separate venue map to navigate
- The board creates confusion rather than clarity about the event space

**Root cause**: Placing zones for visual balance rather than spatial accuracy. The builder optimized for how the board looks rather than how the venue works.

**Fix**:

1. Obtain the actual venue floor plan and use it as a spatial reference
2. Position zones to roughly mirror their real-world positions
3. Connect all zones with golden pathway lines
4. Label every pathway with walking time estimates
5. Add directional indicators where pathways fork
6. Ensure every zone is reachable from every other zone via the pathway network
7. Add "You Are Here" indicators at key entry points

---

## Anti-Pattern #5: The Static Poster

### What Goes Wrong

The board is designed as a static image rather than a live event companion. It has no companion panel, no mechanism for live updates, and no interactive elements. It is printed once and never updated during the event.

**Symptoms**:

- No companion panel for "Now Playing" and "Up Next"
- No mechanism for schedule change announcements
- No live polling or interactive elements
- The board was shared before the event but not used during the event
- Schedule changes were communicated through email or app notifications, not the board
- The board's full potential as a live companion was wasted

**Root cause**: Treating the event guide as pre-event marketing collateral rather than a live operational tool.

**Fix**:

1. Create a companion panel (800-1000px wide) that will be updated every 15-30 minutes during the event
2. Include "Now Playing," "Up Next," "Quick Links," and "Announcements" sections in the companion panel
3. Brief the event coordinator on how to update the companion panel
4. Test the update workflow before the event
5. Share the live board link (not a static image) with attendees
6. Add QR codes at the physical venue that link directly to the live board

---

## Reference Architecture: The Ideal Event Guide

### Zone Building Construction

Every zone building should follow this construction sequence:

```
Step 1: Front face (main rectangle)
- Width: 400-600px based on importance
- Height: 300-450px based on content
- Fill: Zone color at 100%
- Border: 2px, darker shade of zone color

Step 2: Top face (roof rectangle)
- Width: Same as front face
- Height: 60-80px
- Fill: Zone color at 60% (lighter)
- Offset: 30-40px up and 30-40px right (isometric angle)

Step 3: Side face (depth rectangle)
- Width: 30-40px (matches top face offset)
- Height: Same as front face
- Fill: Zone color at 130% (darker)
- Position: Right edge of front face, connecting to top face

Step 4: Shadow
- Width: Same as front face
- Height: 30-40px
- Fill: #333333 at 12-15% opacity
- Position: Below and slightly right of front face

Step 5: Content
- Zone title: 28-36pt, bold, white or zone color
- Zone content: Sessions, schedule, logistics inside the front face
- Entrance: Lighter rectangle at bottom center of front face
```

### Decorative Element Density Guide

For a standard 5000x3500px event board:

```
Clouds:        3-5 clusters in sky area (top 30% of board)
Trees:         25-35 along pathways (alternating sides, every 200-300px)
Human figures: 15-25 across the board (mix of walking, standing, groups)
Ambient:       8-12 total (spotlights, WiFi signals, coffee cups, music notes)
Stars:         (Dark theme only) 15-25 in sky area at varying opacity
```

### Companion Panel Template

```
┌──────────────────────────┐
│ 📍 LIVE COMPANION         │
│ Updated: [Time]           │
│                           │
│ ▶ NOW PLAYING             │
│ [Session Title]           │
│ [Speaker] — [Room]        │
│ [Time remaining: XX min]  │
│                           │
│ ⏭ UP NEXT (15 min)        │
│ • [Session A] — [Room]    │
│ • [Session B] — [Room]    │
│ • [Session C] — [Room]    │
│                           │
│ 📢 ANNOUNCEMENTS          │
│ • [Latest update]         │
│                           │
│ 🔗 QUICK LINKS            │
│ WiFi: [Network] / [Pass]  │
│ App: [URL]                │
│ Help: [Contact]           │
│                           │
│ 📊 LIVE POLL              │
│ [Question]                │
│ ██████ Option A: 45%      │
│ ████   Option B: 30%      │
│ ███    Option C: 25%      │
└──────────────────────────┘
```

---

## Checklist: Does Your Board Match Great Examples?

Score your board against these criteria (1 point each, target: 22+):

| #   | Criterion                                                      | Points |
| --- | -------------------------------------------------------------- | ------ |
| 1   | Isometric 3-face treatment on all major zone buildings         | /1     |
| 2   | Shadows beneath every building                                 | /1     |
| 3   | Sky area with 3-5 cloud clusters                               | /1     |
| 4   | 25+ trees along pathways and in open spaces                    | /1     |
| 5   | 15+ human figures across the board                             | /1     |
| 6   | All decorative elements locked                                 | /1     |
| 7   | Golden pathway system connecting all zones                     | /1     |
| 8   | Walking time labels on pathway segments                        | /1     |
| 9   | Title banner with event name, dates, location, key stats       | /1     |
| 10  | Registration zone with WiFi, badges, emergency info            | /1     |
| 11  | Main stage zone with complete session schedule                 | /1     |
| 12  | Breakout zone with room-by-room session lists                  | /1     |
| 13  | Expo zone with sponsor booths and demo schedule                | /1     |
| 14  | Food zone with meal times and dietary options                  | /1     |
| 15  | Networking zone with event descriptions and tips               | /1     |
| 16  | Full schedule reference (timeline format, color-coded by zone) | /1     |
| 17  | Speaker directory with name, title, session, day/time, room    | /1     |
| 18  | Companion panel ready for live event updates                   | /1     |
| 19  | Scale consistency (buildings > trees > figures)                | /1     |
| 20  | Zone color coding consistent between map and schedule          | /1     |
| 21  | Board readable on both desktop and mobile                      | /1     |
| 22  | Presentation frames for a guided tour of each zone             | /1     |
| 23  | Ambient elements (spotlights, WiFi signals, coffee cups, etc.) | /1     |
| 24  | The board creates a "wow" reaction — visually stunning         | /1     |
| 25  | An attendee can plan their entire day using only this board    | /1     |

**Scoring**:

- 22-25: Exceptional — gold-standard immersive event guide
- 17-21: Strong — visually impressive and functionally useful
- 12-16: Adequate — has the elements but needs visual or content polish
- Below 12: Needs significant rework — not yet immersive or functional

---

## Summary

Great Immersive Isometric Event Guide boards combine two equally important qualities: visual beauty and practical utility. The isometric world-building creates an emotional experience that makes attendees want to explore the board. The comprehensive event information makes the board genuinely useful as a navigation and planning tool. Anti-pattern boards fail by being flat (no 3D), empty (no content), inconsistent (no scale), disconnected (no pathways), or static (no live updates). The gold standard is a board that a conference attendee opens on their phone, says "wow," and then uses to navigate every hour of the event. That is the target for every board you build.
