# Event Planning Boards — Build Process

## Overview

Building event boards — especially the premium isometric event world boards — follows a
different creative process than other board types. The decorative richness, spatial
complexity, and dual purpose (planning tool + stakeholder showcase) require extra
attention to world-building, atmosphere, and visual polish. This guide covers the
complete workflow.

---

## The Six-Phase Build Process

### Phase 1: Discovery (15-20 minutes)

**Goal**: Define the event scope and the board's role.

**Questions to determine**:

1. What type of event? (Conference, summit, meetup, corporate offsite, festival, gala)
2. What scale? (50 people, 500 people, 5,000 people)
3. What duration? (Half-day, full day, multi-day)
4. What type of board is needed? (Overview world map, agenda, speaker showcase, venue layout)
5. Who is the audience for the board? (Event team, stakeholders, sponsors, attendees)
6. What is the visual personality? (Premium/immersive, practical/functional, festive/fun)
7. Is this an isometric world board? (Premium tier — requires more build time)

**Discovery outputs**:

- Event profile: type, scale, duration, venue
- Board type and ambition level selected
- Color palette selected (Indigo Summit, Festival Warmth, Night Gala, Tech Campus)
- Zone inventory: list of all event zones/areas that need to appear
- Visual style: isometric world vs. flat layout vs. venue floor plan

### Phase 2: Structure (20-30 minutes)

**Goal**: Create the world layout before adding any content.

**For Isometric Event World boards**:

1. **Set board dimensions**: 5000x4000px minimum for a full event world. Larger events
   may need 6000x5000px.

2. **Place the title banner**: Full-width, 400-600px tall, with event name, date,
   location, and tagline. This is the visual identity of the event.

3. **Sketch the zone layout**: Before creating any frames, sketch (mentally or on paper)
   where each zone goes. Follow the zone placement strategy:
   - Registration at the entry point (top-left or left)
   - Main Stage at the center
   - Social zones flanking the main stage
   - Activity zones on the periphery
   - Support zones at the edges

4. **Create zone frames**: Place frames at planned positions. Use rounded rectangles
   with the zone color at 10-15% opacity fill.

5. **Draw pathways**: Create gold/amber pathway shapes connecting zones. Start with the
   main arterial path (Registration → Main Stage → Networking), then add secondary
   paths to satellite zones.

6. **Add the schedule frame**: Place the agenda overview in the center-bottom or as a
   wide bar across the middle.

**For Agenda boards**:

1. Create the day/track grid structure
2. Define track swimlanes and time columns
3. Add day headers and track labels

**For Venue Layout boards**:

1. Create room rectangles proportional to actual dimensions
2. Add corridor/hallway shapes between rooms
3. Mark doors, exits, and circulation paths

### Phase 3: Skeleton Content (20-30 minutes)

**Goal**: Populate zones with the right number of elements, without real content.

**Steps**:

1. Add zone title text to each frame
2. Place placeholder sticky notes for sessions, speakers, or activities within zones
3. Add placeholder speaker cards to the Speaker Showcase zone
4. Place session blocks in the Agenda overview with generic titles
5. Add logistics stickies in the Registration zone

**Skeleton checkpoint**: Zoom out to 25%. The board should look like a complete event
world — all zones present, pathways connected, decorative space identified. Content is
placeholder but the world is built.

### Phase 4: Content Population (30-60 minutes)

**Goal**: Replace all placeholders with real event content.

**Content population order**:

1. **Title banner**: Final event name, tagline, dates, venue, key statistics
2. **Main Stage**: Keynote speaker cards, session details, AV requirements
3. **Schedule overview**: All sessions with times, rooms, speakers, tracks
4. **Speaker showcase**: All speaker cards with bios and session references
5. **Registration**: Check-in details, lanes, swag, help desk
6. **Other zones**: Community Hub, Expo Hall, Networking, Companion Sessions, Quiet Zone
7. **Logistics**: Accessibility info, WiFi details, emergency contacts
8. **Sponsor content**: Booth assignments, tier details, expo layout

### Phase 5: Polish and Decorate (20-30 minutes)

**Goal**: Transform the functional board into an immersive world.

This phase is unique to event boards — it is where the magic happens.

**Decoration steps**:

1. **Add clouds**: Place 4-8 cloud shapes in open areas between zones. Vary sizes
   (150-400px). Use #E8EAF6 at 40-60% opacity. Position in the upper half of the board
   and in gaps between zones.

2. **Add stars**: Place 5-10 small star shapes near the Main Stage and title banner.
   Use #FFD54F. Cluster 2-3 stars together for visual grouping.

3. **Add trees/vegetation**: Place small isometric tree shapes along pathways (4-8 trees).
   Use #A5D6A7. Space evenly along the main pathway.

4. **Refine pathways**: Ensure pathways smoothly connect to zone edges. Add pathway labels
   at intersections. Adjust pathway width for hierarchy.

5. **Add signposts**: Place 2-3 signpost elements at major pathway intersections with
   directional labels.

6. **Polish zone frames**: Verify all borders, fills, and headers are consistent. Align
   zone positions for visual balance.

7. **Final typography check**: All font sizes follow the typography scale. Zone titles
   readable at 30% zoom. Details readable at 80% zoom.

**Polish checklist**:

- [ ] All zones have titles, content, and consistent styling
- [ ] Pathways connect all zones with no dead ends
- [ ] Decorative elements are evenly distributed (not clumped)
- [ ] The board passes the "atmosphere test" at 30% zoom
- [ ] Speaker cards are consistently formatted
- [ ] Schedule has no time gaps or overlaps
- [ ] Accessibility information is present and visible
- [ ] Color coding is consistent between zones and schedule
- [ ] The title banner is the visual anchor of the entire board

### Phase 6: Review and Handoff (10-15 minutes)

**Review actions**:

1. **Walk-through test**: Navigate the board as an attendee would — Registration →
   Main Stage → Breakout → Networking → Expo. Does the journey feel natural?
2. **Stakeholder test**: Would a CEO/sponsor be proud to show this board?
3. **Production test**: Does the event team have all the logistical details they need?
4. **Accessibility audit**: Are all accessibility features documented?
5. **Export test**: Export at high resolution to verify everything renders clearly.

---

## Miro API Translation for Event Elements

### Creating Isometric Zone Frames

```
POST /v2/boards/{board_id}/frames
{
  "data": { "title": "MAIN STAGE", "format": "custom" },
  "style": { "fillColor": "#E8EAF6" },
  "position": { "x": 2400, "y": 1200 },
  "geometry": { "width": 1800, "height": 1000 }
}
```

### Creating Pathway Shapes

Pathways are wide, low-height rectangles with rounded ends:

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "", "shape": "round_rectangle" },
  "style": { "fillColor": "#FDCB6E", "borderColor": "#F9A825", "borderWidth": "1.0" },
  "position": { "x": 1800, "y": 1000 },
  "geometry": { "width": 400, "height": 60 }
}
```

### Creating Cloud Decorations

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "", "shape": "cloud" },
  "style": { "fillColor": "#E8EAF6", "fillOpacity": "0.5", "borderWidth": "0" },
  "position": { "x": 800, "y": 400 },
  "geometry": { "width": 300, "height": 150 }
}
```

### Creating Speaker Cards

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "Dr. Amara Chen\nVP Product, NovaTech\n\n\"AI-Native Product Design\"\nDay 1, 9:00 AM | Main Stage", "shape": "round_rectangle" },
  "style": { "fillColor": "#FFFFFF", "borderColor": "#1A237E", "borderWidth": "2.0", "textAlign": "center" },
  "position": { "x": 3200, "y": 800 },
  "geometry": { "width": 500, "height": 350 }
}
```

---

## Common Pitfalls

### Pitfall 1: All Zones Look the Same

**Fix**: Each zone should have a distinct color identity, size proportional to importance,
and unique internal content structure. The Main Stage zone should look different from the
Quiet Zone in every visual dimension.

### Pitfall 2: Decoration Overwhelms Content

**Fix**: Decorative elements should always be lower contrast and opacity than content.
If clouds are brighter than zone headers, reduce cloud opacity.

### Pitfall 3: Schedule Disconnected from Map

**Fix**: Use consistent color coding between the spatial zones and the schedule blocks.
If the Main Stage zone is blue, keynote sessions in the schedule should also be blue.

### Pitfall 4: No Attendee Journey

**Fix**: Pathways must connect zones in the order attendees experience them. Registration
connects to Main Stage connects to Networking. The board should tell the story of an
attendee's day.

### Pitfall 5: Missing Accessibility

**Fix**: Every event board needs accessibility information. Add it as a dedicated section
or as annotations within each zone.

### Pitfall 6: Flat and Lifeless World

**Fix**: Add decorative elements (clouds, stars, trees, banners). Increase color
saturation on zone headers. Use the full typography scale. Make the board FEEL like
an event, not like a spreadsheet.

---

## Build Time Estimates

| Board Type                      | Discovery | Structure | Skeleton | Content | Polish | Total    |
| ------------------------------- | --------- | --------- | -------- | ------- | ------ | -------- |
| Isometric Event World (Premium) | 20 min    | 30 min    | 25 min   | 50 min  | 30 min | ~2.6 hrs |
| Agenda Board (Multi-track)      | 10 min    | 20 min    | 20 min   | 35 min  | 15 min | ~1.7 hrs |
| Speaker Showcase                | 10 min    | 15 min    | 15 min   | 40 min  | 15 min | ~1.6 hrs |
| Venue Layout                    | 15 min    | 25 min    | 20 min   | 30 min  | 15 min | ~1.8 hrs |
| Hybrid Event Layout             | 20 min    | 30 min    | 25 min   | 45 min  | 25 min | ~2.4 hrs |
