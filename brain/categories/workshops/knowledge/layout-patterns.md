# Workshop Boards — Layout Patterns

## Overview

Workshop boards use distinctive layout patterns driven by the facilitation activity
they support. Unlike product boards (which are organized by information architecture)
or event boards (which are organized by spatial mapping), workshop boards are organized
by TIME and ACTIVITY. Every layout pattern answers two questions: "What are participants
doing right now?" and "What do they see?"

This guide covers the five core layout patterns used across all workshop board types,
plus guidance on spacing, grid systems, and zone design.

---

## Pattern 1: The Phase Flow (Left-to-Right Sequential)

### When to Use

Any workshop that follows a sequential process with distinct phases — brainstorming,
design thinking, lean canvas, problem-solving, sprint planning.

### Description

The board flows horizontally from left to right through 3-7 sequential phases. Each
phase is a vertical frame containing instructions, participant areas, and outputs. A
timeline bar runs across the top showing the full process. Large arrows connect phases
to communicate flow direction.

### ASCII Layout

```
+----------------------------------------------------------------------+
| [ TITLE BANNER ]   [ FACILITATOR TIMELINE =============> ]           |
+----------------------------------------------------------------------+
|                                                                        |
| +---------+   +---------+   +---------+   +---------+   +---------+  |
| | PHASE 1 |   | PHASE 2 |   | PHASE 3 |   | PHASE 4 |   | PHASE 5 |  |
| |         |==>|         |==>|         |==>|         |==>|         |  |
| | Setup / |   | Generate|   | Cluster |   | Decide  |   | Action  |  |
| | Frame   |   | / Expand|   | / Focus |   | / Vote  |   | / Plan  |  |
| |         |   |         |   |         |   |         |   |         |  |
| | [locked]|   |[editable|   |[editable|   |[editable|   |[editable|  |
| |         |   | zone]   |   | zone]   |   | zone]   |   | zone]   |  |
| +---------+   +---------+   +---------+   +---------+   +---------+  |
|                                                                        |
| [ RULES & GROUND RULES ]          [ PARKING LOT ]                    |
+----------------------------------------------------------------------+
```

### Specifications

| Property           | Value                                               |
| ------------------ | --------------------------------------------------- |
| Board size         | 4000-5000px wide x 2500-3500px tall                 |
| Phase frame width  | 700-1200px each (proportional to activity duration) |
| Phase frame height | 1400-2000px                                         |
| Title banner       | Full width x 300-400px tall                         |
| Phase gap          | 40-60px between frames                              |
| Arrow width        | 60-80px, primary color or accent                    |
| Bottom bar         | Full width x 300-400px tall                         |

### Sizing Phases by Duration

Phase widths should be roughly proportional to their time allocation. This creates a
visual "timeline" effect where participants can intuit how long each phase takes:

```
| Phase         | Duration | Width  | Ratio    |
| ------------- | -------- | ------ | -------- |
| Problem Setup | 5 min    | 700px  | Narrow   |
| Ideation      | 10 min   | 1200px | Wide     |
| Clustering    | 10 min   | 1000px | Medium   |
| Voting        | 10 min   | 700px  | Narrow   |
| Action Plan   | 15 min   | 700px  | Narrow   |
```

Note: The action plan is narrow because it is densely structured (table format),
while ideation is wide because it needs open space for many sticky notes.

### Zone Design Within Phases

Each phase frame should follow this internal structure:

```
+-- Phase Frame -----------------------+
| PHASE TITLE (28pt, bold)             |
| Purpose statement (14pt, italic)     |
| Duration: X min (12pt, accent)       |
|--------------------------------------|
|                                      |
|  [PARTICIPANT ZONE]                  |
|                                      |
|  This area is where stickies go,     |
|  ideas are generated, voting         |
|  happens, etc.                       |
|                                      |
|  80-85% of frame height              |
|                                      |
|--------------------------------------|
| Summary / Output (12pt)              |
+--------------------------------------+
```

### Templates Using This Pattern

- Brainstorm Session (5 phases)
- Design Thinking Workshop (5 phases)
- Lean Canvas Workshop (9 blocks, adapted to flow)

---

## Pattern 2: The Metaphor Canvas (Spatial/Thematic Zones)

### When to Use

Retrospectives and reflection workshops that use a visual metaphor to structure
thinking — Sailboat, Starfish, Mountain, Hot Air Balloon, Racecar.

### Description

The board uses a central metaphorical image (conceptual, not literal art) with
themed zones radiating outward. Each zone represents a different category of
reflection. The spatial arrangement mirrors the metaphor: winds push forward
(top/left), anchors hold back (bottom), islands represent goals (right), rocks
represent risks (bottom-right).

### ASCII Layout — Sailboat Metaphor

```
+------------------------------------------------------------------+
|  [ RETRO TITLE & SPRINT INFO ]     [ PREV RETRO FOLLOW-UP ]     |
+------------------------------------------------------------------+
|                                                                    |
|  +--- WIND ---+                    +--- ISLAND ---+               |
|  | (Positive  |   [  SAILBOAT  ]   | (Goals &     |               |
|  |  forces)   |   [  METAPHOR  ]   |  Vision)     |               |
|  | green bg   |   [  CENTER    ]   | blue bg      |               |
|  +------------+                    +--------------+               |
|                                                                    |
|  +--- ANCHOR -+                    +--- ROCKS ----+               |
|  | (Negative  |                    | (Risks &     |               |
|  |  forces)   |                    |  Dangers)    |               |
|  | red bg     |                    | orange bg    |               |
|  +------------+                    +--------------+               |
|                                                                    |
|  +-- ACTION ITEMS -----------------------------------------------+|
|  | Owner | Action | Category | Due Date | Status                 ||
|  +--------------------------------------------------------------|+
|                                                                    |
|  [ PARKING LOT ]              [ FACILITATOR NOTES ]              |
+------------------------------------------------------------------+
```

### Specifications

| Property              | Value                               |
| --------------------- | ----------------------------------- |
| Board size            | 3500-4000px wide x 2500-3000px tall |
| Quadrant frame size   | 1200-1400px wide x 800-900px tall   |
| Center metaphor area  | 400-600px wide x 400-600px tall     |
| Title banner          | 2/3 width x 300-350px tall          |
| Previous retro frame  | 1/3 width x 300-350px tall          |
| Action items frame    | Full width x 500-600px tall         |
| Bottom support frames | 800px wide x 350-400px tall each    |

### Zone Color Coding for Metaphor Canvases

| Zone Type    | Background Color | Sticky Note Color | Emotional Tone       |
| ------------ | ---------------- | ----------------- | -------------------- |
| Positive     | Light green      | Green (#C8E6C9)   | Appreciation, pride  |
| Negative     | Light red        | Red (#FFCDD2)     | Frustration, concern |
| Goals/Vision | Light blue       | Blue (#BBDEFB)    | Aspiration, hope     |
| Risks        | Light orange     | Orange (#FFE0B2)  | Caution, awareness   |
| Action Items | White            | Multi-color       | Commitment, clarity  |
| Parking Lot  | Soft yellow      | Yellow            | Capture, defer       |

### Adapting for Other Metaphors

The 2x2 quadrant structure adapts to many metaphors:

```
SAILBOAT:      Wind / Anchor / Island / Rocks
STARFISH:      Keep Doing / More Of / Less Of / Stop / Start (5 zones)
MOUNTAIN:      Base Camp / Obstacles / Trail / Summit
HOT AIR BALLOON: Hot Air (lifts) / Sandbags (weighs down) / Storm (risks) / Sun (goals)
RACECAR:       Engine (drives) / Parachute (slows) / Bridge (risks) / Finish Line (goals)
4Ls:           Liked / Learned / Lacked / Longed For
```

### Templates Using This Pattern

- Sprint Retrospective (Sailboat)
- Variations: 4Ls, Start-Stop-Continue, Mad-Sad-Glad

---

## Pattern 3: The Circular Table (World Cafe / Rotating Discussion)

### When to Use

Discussion-based workshops where multiple groups explore different topics
simultaneously and rotate between stations — World Cafe, Open Space, Stations-Based
Learning, Gallery Walk.

### Description

The board features multiple circular or rounded "table" zones arranged in a row
or cluster. Each table has a distinct theme, a host, and layered round zones for
capturing successive rounds of discussion. A rotation guide explains the movement
pattern. A Harvest Wall at the bottom collects cross-table insights.

### ASCII Layout

```
+----------------------------------------------------------------------+
| [ WORLD CAFE TITLE & INSTRUCTIONS ]                                   |
+----------------------------------------------------------------------+
|                                                                        |
|  +--TABLE 1--+   +--TABLE 2--+   +--TABLE 3--+   +--TABLE 4--+      |
|  |  Theme A  |   |  Theme B  |   |  Theme C  |   |  Theme D  |      |
|  | +-------+ |   | +-------+ |   | +-------+ |   | +-------+ |      |
|  | |Round 1| |   | |Round 1| |   | |Round 1| |   | |Round 1| |      |
|  | +-------+ |   | +-------+ |   | +-------+ |   | +-------+ |      |
|  | |Round 2| |   | |Round 2| |   | |Round 2| |   | |Round 2| |      |
|  | +-------+ |   | +-------+ |   | +-------+ |   | +-------+ |      |
|  | |Round 3| |   | |Round 3| |   | |Round 3| |   | |Round 3| |      |
|  | +-------+ |   | +-------+ |   | +-------+ |   | +-------+ |      |
|  +-----------+   +-----------+   +-----------+   +-----------+      |
|                                                                        |
|  +-- ROTATION GUIDE ------------------------------------------------+ |
|  | Round 1 -> Round 2 -> Round 3                                     | |
|  +-------------------------------------------------------------------+|
|                                                                        |
|  +== HARVEST WALL ===================================================+|
|  || Key Insights | Cross-Table Patterns | Surprises | Action Seeds  |||
|  +===================================================================+|
|                                                                        |
|  [ FACILITATOR GUIDE ]           [ TABLE HOST GUIDE ]                |
+----------------------------------------------------------------------+
```

### Specifications

| Property             | Value                             |
| -------------------- | --------------------------------- |
| Board size           | 5000px wide x 3500px tall         |
| Table frame size     | 1100px wide x 1400px tall each    |
| Table gap            | 50-80px between tables            |
| Round zone height    | 350-400px within each table       |
| Rotation guide       | Full width x 250-300px tall       |
| Harvest wall         | Full width x 800-1000px tall      |
| Bottom guides        | 1200px wide x 400-500px tall each |
| Circular table shape | 800px diameter, dashed border     |

### Table Internal Structure

Each table frame contains:

```
+-- Table Frame -------------------------+
| Table Title (26pt, bold)               |
| Host: Name, Role (14pt, accent)       |
| Central Question (16pt, bold,          |
|   inside circular shape)              |
|                                        |
| +-- Round 1 --+ (pastel color A)      |
| | Sticky notes from round 1           |
| +-------------+                        |
| +-- Round 2 --+ (pastel color B)      |
| | Sticky notes from round 2           |
| +-------------+                        |
| +-- Round 3 --+ (pastel color C)      |
| | Sticky notes from round 3           |
| +-------------+                        |
+----------------------------------------+
```

### Templates Using This Pattern

- World Cafe Discussion
- Variations: Open Space, Stations-Based Learning

---

## Pattern 4: The Activity Grid (Multi-Zone Independent Activities)

### When to Use

Workshop boards that contain multiple independent activities that can be used
in any order — icebreakers, team-building collections, warm-up suites.

### Description

The board presents a grid of activity zones, each self-contained with its own
instructions, participation rules, and content area. Unlike the Phase Flow
(which is sequential), the Activity Grid allows facilitators to pick and choose
activities based on time available and group energy.

### ASCII Layout

```
+------------------------------------------------------------------+
| [ WELCOME BANNER — Activity Title ]                               |
+------------------------------------------------------------------+
|                                                                    |
|  +-----ACTIVITY 1---+     +-----ACTIVITY 2---+                   |
|  | Title            |     | Title            |                   |
|  | Instructions     |     | Instructions     |                   |
|  | Duration         |     | Duration         |                   |
|  | [Content Zone]   |     | [Content Zone]   |                   |
|  +------------------+     +------------------+                   |
|                                                                    |
|  +-----ACTIVITY 3---+     +-----ACTIVITY 4---+                   |
|  | Title            |     | Title            |                   |
|  | Instructions     |     | Instructions     |                   |
|  | Duration         |     | Duration         |                   |
|  | [Content Zone]   |     | [Content Zone]   |                   |
|  +------------------+     +------------------+                   |
|                                                                    |
|  [ FACILITATOR GUIDE — Activity Selection Cheat Sheet ]          |
+------------------------------------------------------------------+
```

### Specifications

| Property            | Value                               |
| ------------------- | ----------------------------------- |
| Board size          | 3000-4000px wide x 2500-3000px tall |
| Activity frame size | 1200-1400px wide x 800-900px tall   |
| Grid arrangement    | 2x2 for 4 activities, 3x2 for 6     |
| Activity gap        | 40-60px                             |
| Welcome banner      | Full width x 250-300px              |
| Facilitator guide   | Full width x 350-400px              |

### Activity Frame Internal Structure

```
+-- Activity Frame --------------------+
| ACTIVITY TITLE (28pt, bold)          |
| Instructions (14pt, italic)          |
| Duration: X-Y min (12pt, accent)    |
| Group size: N-M people (12pt)       |
|--------------------------------------|
|                                      |
| [PARTICIPANT CONTENT ZONE]           |
|                                      |
| - Prompts                            |
| - Example sticky notes               |
| - Templates                          |
| - Blank areas for participant input  |
|                                      |
+--------------------------------------+
```

### Templates Using This Pattern

- Icebreaker Activities (4-activity grid)
- Team Health Check (6-8 activity grid)
- Warm-Up Collection

---

## Pattern 5: The Double Diamond (Design Thinking / Problem-Solving)

### When to Use

Workshops that explicitly follow the double-diamond model — diverge (explore the
problem space), converge (define the problem), diverge (explore solutions), converge
(select and plan). Design thinking, service design, innovation workshops.

### Description

The board visually represents the double-diamond shape: two widening and narrowing
sections, each containing 2-3 phases. The diamond shape communicates that thinking
should expand then focus, expand then focus. The visual narrowing of the zones
reinforces convergent behavior.

### ASCII Layout

```
+----------------------------------------------------------------------+
| [ WORKSHOP TITLE ]   [ FACILITATOR TIMELINE ]                         |
+----------------------------------------------------------------------+
|                                                                        |
|          DIAMOND 1: PROBLEM SPACE         DIAMOND 2: SOLUTION SPACE   |
|                                                                        |
|          /  EMPATHIZE  \                  /  IDEATE    \              |
|         /    (expand)   \                /   (expand)   \             |
|        /                 \              /                 \            |
|       / Research,         \            / Brainstorm,       \          |
|      /  Interview,         \          /  Crazy 8s,          \         |
|     /   Observe             \        /   Gallery Walk        \        |
|     \                       /        \                       /        |
|      \   DEFINE            /          \   PROTOTYPE         /         |
|       \  (focus)          /            \  (focus)          /          |
|        \                 /              \                 /            |
|         \ POV, HMW,    /                \ Build, Test,  /             |
|          \ Persona    /                  \ Iterate     /              |
|           \__________/                    \__________/                |
|                                                                        |
|  [ RESOURCES ]  [ TEMPLATES ]  [ PARKING LOT ]                       |
+----------------------------------------------------------------------+
```

### Practical Implementation

Since Miro does not render actual diamond shapes easily, the double diamond is
implemented as a Phase Flow with visual cues for expansion/contraction:

- **Divergent phases**: Wider frames (1200px), lighter/brighter colors, expansive
  instructions ("Generate as many ideas as possible")
- **Convergent phases**: Narrower frames (800-900px), darker/more focused colors,
  constraining instructions ("Select the top 3")

The widths themselves create the diamond shape when viewed at 25-30% zoom.

### Specifications

| Property               | Value                                          |
| ---------------------- | ---------------------------------------------- |
| Board size             | 5000px wide x 3000px tall                      |
| Divergent frame width  | 1000-1200px                                    |
| Convergent frame width | 800-900px                                      |
| Frame height           | 1800-2000px                                    |
| Phase coloring         | Each phase gets a unique tint at 8-10%         |
| Diamond 1 colors       | Purple (Empathize), Blue (Define)              |
| Diamond 2 colors       | Green (Ideate), Orange (Prototype), Red (Test) |

### Templates Using This Pattern

- Design Thinking Workshop (5 phases in double diamond)
- Innovation Sprint
- Service Design Workshop

---

## Grid and Spacing System

### The Workshop Grid

Workshop boards use an 8-point base grid with a 40px module for consistency:

| Element              | Spacing               | Grid Multiple |
| -------------------- | --------------------- | ------------- |
| Phase frame padding  | 32px internal         | 4 units       |
| Between phases       | 48px gap              | 6 units       |
| Title to content     | 24px                  | 3 units       |
| Between sticky notes | 8-16px                | 1-2 units     |
| Section header gap   | 16px above, 8px below | 2 / 1 units   |
| Frame border radius  | 8px                   | 1 unit        |
| Bottom bar to frames | 48px                  | 6 units       |

### Sticky Note Sizing

Sticky notes are the primary participant element on workshop boards:

| Sticky Note Type | Size      | When to Use                           |
| ---------------- | --------- | ------------------------------------- |
| Standard         | 200x200px | Default for all ideation and comments |
| Small            | 150x150px | Voting annotations, quick reactions   |
| Large            | 300x200px | Key insights, summary statements      |
| Wide             | 400x150px | Action items, table row substitutes   |

### Zone Capacity Planning

Plan the number of sticky notes a zone needs to hold before setting the zone size:

| Activity        | Expected Notes per Person | 10 Participants | Zone Size Needed        |
| --------------- | ------------------------- | --------------- | ----------------------- |
| Silent ideation | 5-8 notes                 | 50-80 notes     | 1200x1600px minimum     |
| Clustering      | Reuse ideation notes      | N/A             | 1000x1600px             |
| Retrospective   | 3-5 per category          | 30-50 notes     | 1200x800px per zone     |
| Dot voting      | 3 dots per person         | 30 dots         | Fits on clustered items |
| Action planning | 3-5 items total           | 3-5 rows        | 700x600px               |

---

## White Space Philosophy for Workshops

### Functional Empty Space

On workshop boards, empty space is not decorative — it is functional. Empty space IS
the participant creation area. A zone with too many pre-filled elements leaves no room
for the actual workshop output.

**The 60/40 Rule**: At least 60% of each participant zone should be empty when the
workshop begins. This space is where the work happens.

**The "Breathing Room" Test**: After placing example sticky notes in a zone, verify
that the zone could hold 3-4x more notes without overlapping or extending beyond
the frame boundary. If not, the frame is too small.

### Negative Space as Invitation

Empty space on a workshop board communicates "your contribution goes here." A dotted
border around an empty area is more inviting than a solid border. A light background
tint with a label "Drop your sticky notes here" is more inviting than a dark filled
area.

```
INVITING EMPTY SPACE:            UNINVITING SPACE:

+- - - - - - - - - - +          +=======================+
|                     |          | [Pre-filled note 1]   |
| "Place your ideas   |          | [Pre-filled note 2]   |
|  here"              |          | [Pre-filled note 3]   |
|                     |          | [Pre-filled note 4]   |
|                     |          | [Pre-filled note 5]   |
+ - - - - - - - - - -+          +=======================+
```

---

## Flow and Navigation

### Directional Flow

Workshop boards have a strong directional flow — typically left-to-right for Phase
Flow boards, or from outer zones to center/bottom for Metaphor Canvases.

**Flow indicators**:

- Large arrows (60-80px) between major phases
- Arrow labels: "Generate" -> "Organize" -> "Prioritize" -> "Commit"
- Timeline bar at the top showing progression
- Phase numbering: "1. EMPATHIZE" -> "2. DEFINE" -> "3. IDEATE"

### Multi-Board Navigation

Complex workshops (like full-day design thinking) may use a hub-and-spoke model:

```
               +-- HUB BOARD --+
               | Overview      |
               | Timeline      |
               | Ground Rules  |
               +-------+-------+
                       |
          +--------+---+---+--------+
          |        |       |        |
     +----v--+ +---v---+ +v------+ +v-------+
     |Phase 1| |Phase 2| |Phase 3| |Phase 4 |
     |Detail | |Detail | |Detail | |Detail  |
     |Board  | |Board  | |Board  | |Board   |
     +-------+ +-------+ +-------+ +--------+
```

This approach is recommended when:

- The workshop is longer than 3 hours
- Each phase has complex sub-activities
- The single-board layout would require scrolling at usable zoom levels
- Different facilitators manage different phases

---

## Responsive Zoom Behavior

### Workshop Board at Different Zoom Levels

Workshop boards must work at three zoom levels:

**Facilitator Overview (25-35% zoom)**:

- All phases visible simultaneously
- Phase titles readable
- Timeline bar visible
- Current position in the process identifiable
- Good for: Facilitator navigation, stakeholder preview

**Activity View (50-70% zoom)**:

- One to two phases fill the screen
- Instructions fully readable
- Sticky note content scannable
- Good for: Participants during the current activity

**Detail View (90-120% zoom)**:

- Individual sticky notes fully readable
- Action item details clear
- Small metadata (timestamps, names) visible
- Good for: Reading specific contributions, post-workshop review

### Zoom-Level Design Priorities

| Element             | 25% Zoom  | 50% Zoom  | 100% Zoom |
| ------------------- | --------- | --------- | --------- |
| Phase titles        | Must read | Must read | Must read |
| Phase instructions  | N/A       | Must read | Must read |
| Timeline bar        | Must read | Must read | N/A       |
| Sticky note content | N/A       | Scan      | Must read |
| Facilitator notes   | N/A       | N/A       | Must read |
| Vote counts         | N/A       | Must read | Must read |
| Action item details | N/A       | Scan      | Must read |
| Ground rules        | N/A       | N/A       | Must read |
