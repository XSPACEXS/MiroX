# Product Development Boards — Layout Patterns

## Overview

Product development boards must serve multiple audiences and decision types simultaneously.
The layout pattern you choose determines how information is discovered, how relationships
are perceived, and ultimately how decisions get made. This guide presents five proven layout
patterns, each optimized for a different product development scenario.

---

## Pattern 1: The Story Map Grid

**Best for**: User story mapping, feature discovery, backlog organization
**Decision it enables**: "What do we build first?"

The Story Map Grid arranges user activities horizontally across the top (the "backbone")
and user stories vertically beneath each activity, ordered by priority from top to bottom.
A horizontal line divides "must-have" from "nice-to-have."

```
+=========================================================================+
|  BACKBONE (User Activities — left to right in journey order)            |
+=========================================================================+
|                                                                         |
|  Activity 1     Activity 2      Activity 3      Activity 4     Act. 5  |
|  +-----------+  +-----------+   +-----------+   +-----------+  +------+ |
|  | Discover  |  | Sign Up   |   | Configure |   | Use Core  |  |Share | |
|  +-----------+  +-----------+   +-----------+   +-----------+  +------+ |
|                                                                         |
|  ---- RELEASE 1 LINE ---- ---- ---- ---- ---- ---- ---- ---- ----      |
|                                                                         |
|  [Story A1]     [Story B1]      [Story C1]      [Story D1]    [E1]     |
|  [Story A2]     [Story B2]      [Story C2]      [Story D2]    [E2]     |
|                                                                         |
|  ---- RELEASE 2 LINE ---- ---- ---- ---- ---- ---- ---- ---- ----      |
|                                                                         |
|  [Story A3]     [Story B3]      [Story C3]      [Story D3]    [E3]     |
|  [Story A4]                     [Story C4]      [Story D4]             |
|                                                                         |
|  ---- RELEASE 3 / NICE-TO-HAVE ---- ---- ---- ---- ---- ----          |
|                                                                         |
|  [Story A5]                     [Story C5]                     [E4]     |
|                                                                         |
+=========================================================================+
```

### Key Dimensions

- **Horizontal axis**: User journey sequence (left = beginning, right = end)
- **Vertical axis**: Priority (top = critical, bottom = optional)
- **Horizontal dividers**: Release boundaries or priority tiers
- **Column width**: 250-350px per activity
- **Row height**: Varies — stories are stickies (150-200px tall)

### Spacing Rules

| Element                              | Spacing               |
| ------------------------------------ | --------------------- |
| Between activity columns             | 40-60px               |
| Between stories vertically           | 20-30px               |
| Between backbone and first story row | 60-80px               |
| Release divider line padding         | 40px above and below  |
| Board margins                        | 80-120px on all sides |

### Visual Hierarchy

1. **Backbone activities**: Large text (28-32pt), bold, colored background matching
   the category theme. These are the anchors — always visible even when zoomed out.
2. **Release dividers**: Dashed horizontal lines spanning full width. Labeled on the
   left margin ("Release 1 — MVP", "Release 2 — Enhancement").
3. **Story stickies**: Standard size (250x150px), color-coded by status or epic.
4. **Story detail**: Smaller text (12-14pt) visible only when zoomed in.

### Eye-Flow

The eye enters at the top-left backbone activity, scans right across the journey, then
drops down to scan the highest-priority stories left to right. This Z-pattern repeats
for each release tier.

---

## Pattern 2: The Timeline Roadmap

**Best for**: Product roadmaps, quarterly planning, stakeholder communication
**Decision it enables**: "When will things be delivered?"

The Timeline Roadmap uses horizontal time as the primary axis and vertical swimlanes
for themes, teams, or product areas. Items are positioned along the timeline to show
their planned start, duration, and dependencies.

```
+=========================================================================+
|  PRODUCT ROADMAP 2026                                                   |
|  Vision: "Make task management effortless through AI"                   |
+=========================================================================+
|              |   Q1 2026    |   Q2 2026    |   Q3 2026    |   Q4 2026  |
|              | J | F | M    | A | M | J    | J | A | S    | O | N | D  |
+--------------+--------------+--------------+--------------+------------+
|              |              |              |              |            |
|  AI/ML       | [==========] |              | [========]   |            |
|  Theme       | Smart Sort   |              | Auto-Assign  |            |
|              |    [===============]         |         [===========]    |
|              |    NLP Search               |         Predictions      |
+--------------+--------------+--------------+--------------+------------+
|              |              |              |              |            |
|  Platform    |  [======]    |  [==========]|              | [========] |
|  Theme       |  API v2      |  Webhooks    |              | GraphQL   |
|              |              |     [================]      |            |
|              |              |     Performance Overhaul    |            |
+--------------+--------------+--------------+--------------+------------+
|              |              |              |              |            |
|  UX          |[====]        |  [==========]|  [=======]  |            |
|  Theme       |Onboarding    |  Dashboard   |  Mobile v2  |            |
|              |    v2        |  Redesign    |              |            |
+--------------+--------------+--------------+--------------+------------+
|  MILESTONES  |      * Beta  |   * GA       |  * v3.0     | * Annual   |
|              |      Launch  |   Release    |  Launch     | Review     |
+--------------+--------------+--------------+--------------+------------+
```

### Key Dimensions

- **Time columns**: Equal width per month (200-300px) or quarter (600-900px)
- **Swimlane rows**: 300-500px tall per theme
- **Feature bars**: Height 60-80px, width proportional to duration
- **Milestone markers**: Diamond or star shapes on a dedicated row at the bottom

### Spacing Rules

| Element                                       | Spacing                              |
| --------------------------------------------- | ------------------------------------ |
| Between swimlanes                             | 30-40px divider line                 |
| Between feature bars vertically within a lane | 20-30px                              |
| Column gridlines                              | 1px light gray, every month boundary |
| Quarter boundaries                            | 2px darker line                      |
| Left label column width                       | 200-300px                            |
| Board left/right margin                       | 100px                                |

### Visual Hierarchy

1. **Board title and vision**: Top banner, 40-56pt, themed background
2. **Time headers**: 20-24pt, month abbreviations, quarter labels prominent
3. **Swimlane labels**: 24-28pt, bold, left-aligned with theme icon
4. **Feature bars**: Rounded rectangles with feature name inside (14-16pt)
5. **Milestone markers**: Diamond shape with label below (14pt, bold)

### Confidence Encoding

A god-level roadmap distinguishes between committed and speculative:

- **Committed** (this quarter): Solid fill, solid border, 100% opacity
- **Planned** (next quarter): Solid fill, 70% opacity
- **Tentative** (2+ quarters out): Hatched fill or dashed border, 50% opacity
- **Exploring** (no date): Shown in a "Future Ideas" parking lot to the right

---

## Pattern 3: The Prioritization Matrix (2x2)

**Best for**: Impact/effort analysis, RICE scoring, MoSCoW categorization
**Decision it enables**: "What should we prioritize?"

The classic 2x2 matrix plots items on two axes — typically Impact (vertical) and
Effort (horizontal). The four quadrants create natural priority categories.

```
+=========================================================================+
|  PRIORITIZATION MATRIX                                                  |
+=========================================================================+
|                                                                         |
|  HIGH        |  QUICK WINS         |  BIG BETS                |        |
|  IMPACT      |  (Do First)         |  (Plan Carefully)        |        |
|              |                     |                          |        |
|              |   * Auto-save       |   * AI Task Routing      |        |
|              |   * Dark mode       |   * Real-time collab     |        |
|              |   * Email notifs    |   * Platform migration   |        |
|              |                     |                          |        |
|              +---------------------+--------------------------+        |
|              |  FILL-INS           |  MONEY PITS              |        |
|  LOW         |  (Do If Capacity)   |  (Avoid / Defer)         |        |
|  IMPACT      |                     |                          |        |
|              |   * Footer redesign |   * Legacy API rewrite   |        |
|              |   * Tooltip updates |   * Custom email builder |        |
|              |   * Favicon update  |                          |        |
|              |                     |                          |        |
|              +---------------------+--------------------------+        |
|                 LOW EFFORT            HIGH EFFORT                       |
|                                                                         |
+=========================================================================+
|  SCORING TABLE (Below matrix)                                           |
|  +-------+--------+--------+--------+--------+--------+               |
|  | Item  | Reach  | Impact | Conf.  | Effort | RICE   |               |
|  +-------+--------+--------+--------+--------+--------+               |
|  | AI... | 5,000  | 3      | 80%    | 8 wks  | 1,500  |               |
|  | Auto..| 12,000 | 2      | 95%    | 1 wk   | 22,800 |               |
|  +-------+--------+--------+--------+--------+--------+               |
+=========================================================================+
```

### Key Dimensions

- **Matrix area**: 2400x2400px to 3000x3000px (square proportions are essential)
- **Each quadrant**: Equal size (1200x1200px to 1500x1500px)
- **Item dots/stickies**: 150-200px wide, positioned by their score on each axis
- **Scoring table**: Full width below the matrix, 200-300px tall

### Spacing Rules

| Element                           | Spacing                         |
| --------------------------------- | ------------------------------- |
| Matrix border to board edge       | 120-160px                       |
| Axis labels to matrix edge        | 40-60px                         |
| Between items within a quadrant   | 30-50px minimum (avoid overlap) |
| Quadrant label to quadrant corner | 30px                            |
| Matrix to scoring table below     | 80-100px                        |

### Visual Hierarchy

1. **Quadrant labels**: 24-28pt, bold, positioned in the top-left corner of each quadrant
2. **Quadrant backgrounds**: Subtle color fills — green (Quick Wins), blue (Big Bets),
   yellow (Fill-ins), red/gray (Money Pits)
3. **Item markers**: Circles or small stickies (150x100px) with feature name
4. **Axis labels**: 20-24pt, centered along each axis edge
5. **Axis arrows**: Thick arrows (3-4px) along the left edge (pointing up) and bottom
   edge (pointing right)

### Zone Design

The four quadrants should have distinct visual treatment:

| Quadrant                  | Background             | Border             | Meaning                 |
| ------------------------- | ---------------------- | ------------------ | ----------------------- |
| Top-Left (Quick Wins)     | #E8F5E9 (light green)  | 3px green left+top | Do first — high ROI     |
| Top-Right (Big Bets)      | #E3F2FD (light blue)   | 3px blue right+top | Strategic investments   |
| Bottom-Left (Fill-Ins)    | #FFF8E1 (light yellow) | 1px gray           | Low-stakes improvements |
| Bottom-Right (Money Pits) | #FFEBEE (light red)    | 1px dashed gray    | Avoid unless strategic  |

---

## Pattern 4: The Release Board (Kanban-Meets-Timeline)

**Best for**: Release planning, sprint coordination, launch readiness
**Decision it enables**: "Are we ready to ship?"

The Release Board combines a kanban-style column flow with a checklist-driven approach.
Each column represents a phase of the release process, and items move left to right as
they progress toward launch.

```
+=========================================================================+
|  RELEASE: AutoPilot 3.0 — Target: April 22, 2026                       |
|  Status: ON TRACK | 14 features | 3 teams | 6 weeks remaining          |
+=========================================================================+
|                                                                         |
|  SCOPING      | IN DESIGN    | IN DEV       | IN QA       | READY      |
|  (Backlog)    | (Spec'd)     | (Building)   | (Testing)   | (Ship it)  |
|  +---------+  | +---------+  | +---------+  | +---------+ | +---------+|
|  |Feature G|  | |Feature E|  | |Feature C|  | |Feature B| | |Feature A||
|  |         |  | |         |  | |         |  | |         | | |  [DONE] ||
|  +---------+  | +---------+  | +---------+  | +---------+ | +---------+|
|  |Feature H|  | |Feature F|  | |Feature D|  |             |            |
|  |         |  | |         |  | |         |  |             |            |
|  +---------+  | +---------+  | +---------+  |             |            |
|               |              |              |             |            |
+===============+==============+==============+=============+============+
|                                                                         |
|  CROSS-CUTTING CONCERNS                                                 |
|  +------------------+  +------------------+  +------------------+       |
|  | QA Test Plan     |  | Deployment Plan  |  | Comms & Docs     |       |
|  | [========60%===] |  | [====40%=======] |  | [==20%=========] |       |
|  +------------------+  +------------------+  +------------------+       |
|                                                                         |
|  DEPENDENCIES & BLOCKERS                                                |
|  [!] Calendar API — Blocked on Integrations team (ETA Mar 20)          |
|  [!] Design System update — In review (ETA Mar 18)                     |
|                                                                         |
|  LAUNCH CHECKLIST                                                       |
|  [x] Feature freeze date set    [ ] Performance benchmarks pass        |
|  [x] QA plan approved           [ ] Release notes drafted              |
|  [ ] Staging deploy complete    [ ] Customer support briefed           |
+=========================================================================+
```

### Key Dimensions

- **Column width**: 300-450px per phase (5 columns = 1500-2250px)
- **Feature cards**: 280-400px wide, 150-250px tall
- **Cross-cutting section**: Full width, 400-500px tall
- **Total board width**: 4000-5000px
- **Total board height**: 3000-4000px

### Spacing Rules

| Element                          | Spacing                       |
| -------------------------------- | ----------------------------- |
| Between columns                  | 20-30px divider               |
| Between feature cards vertically | 20px                          |
| Card internal padding            | 16-20px                       |
| Section dividers (horizontal)    | 60-80px gap with labeled line |
| Column header to first card      | 40px                          |
| Board margins                    | 80-100px                      |

### Visual Hierarchy

1. **Release banner**: Full-width header with release name, target date, and status badge
2. **Column headers**: 24-28pt, bold, with count badges ("In Dev (3)")
3. **Feature cards**: White background with colored left-border indicating team/epic
4. **Status badges on cards**: Small colored dots (green/yellow/red)
5. **Cross-cutting progress bars**: Visual fill bars showing percentage completion
6. **Blockers**: Red background, warning icon, bold text

---

## Pattern 5: The Feature Spec Canvas

**Best for**: Detailed feature planning, PRDs, design specs
**Decision it enables**: "Do we understand this feature well enough to build it?"

The Feature Spec Canvas uses a structured grid that mirrors the flow of product thinking:
context at the top, detail in the middle, execution at the bottom.

```
+=========================================================================+
|  FEATURE SPEC: [Feature Name]                                           |
|  Owner: [PM] | Status: [Phase] | Last Updated: [Date]                  |
+=========================================================================+
|                                                                         |
|  +--------------------------+  +------------------------------+         |
|  | PROBLEM STATEMENT        |  | SUCCESS METRICS              |         |
|  | Why does this matter?    |  | How will we know it worked?  |         |
|  +--------------------------+  +------------------------------+         |
|                                                                         |
|  +-------------------+  +------------------+  +-------------------+     |
|  | USER STORIES      |  | WIREFRAMES       |  | TECHNICAL REQS    |     |
|  | Who needs what?   |  | What does it     |  | How do we build   |     |
|  |                   |  | look like?       |  | it?               |     |
|  |                   |  |                  |  |                   |     |
|  |                   |  |                  |  |                   |     |
|  +-------------------+  +------------------+  +-------------------+     |
|                                                                         |
|  +-------------------+  +------------------+  +-------------------+     |
|  | DEPENDENCIES      |  | EDGE CASES &     |  | DELIVERY          |     |
|  | & RISKS           |  | OPEN QUESTIONS   |  | TIMELINE          |     |
|  |                   |  |                  |  |                   |     |
|  +-------------------+  +------------------+  +-------------------+     |
|                                                                         |
+=========================================================================+
```

### Key Dimensions

- **Top context row**: Two frames, each ~2400x500px
- **Middle detail row**: Three frames, each ~1550x1400px
- **Bottom execution row**: Three frames, each ~1550x1200px
- **Total board**: 5000x3600px

### Spacing Rules

| Element                             | Spacing |
| ----------------------------------- | ------- |
| Between frames in the same row      | 50-80px |
| Between rows                        | 50-60px |
| Frame internal padding              | 30-40px |
| Between sticky notes within a frame | 20-30px |
| Title banner to first row           | 40-60px |
| Board edge margins                  | 50-80px |

### Visual Hierarchy

1. **Banner**: Full-width, themed color, feature name at 40pt
2. **Context frames** (row 1): Largest text, most prominent — these set the stage
3. **Detail frames** (row 2): Primary working area, most content density
4. **Execution frames** (row 3): Supporting information, reference material
5. **Frame accents**: Each frame has a colored left-border (4-6px) indicating its domain:
   purple = product, pink = design, blue = engineering, amber = risk, gray = questions

---

## White Space Philosophy

White space in product boards is not wasted space — it is **functional separation**. It
serves three purposes:

1. **Grouping**: Items within a section are close together; sections are separated by
   whitespace. This leverages Gestalt proximity.
2. **Breathing room**: Dense information needs space around it to be digestible. A board
   with no margins feels claustrophobic and panicked.
3. **Expansion room**: Product boards evolve. A feature card today might need three more
   stickies tomorrow. Leave 20-30% more space than you think you need.

### White Space Minimums

| Context                          | Minimum White Space |
| -------------------------------- | ------------------- |
| Board edge margins               | 80px                |
| Between major sections           | 60-80px             |
| Between items in a group         | 20-30px             |
| Inside a frame (padding)         | 20-40px             |
| Around a matrix or table         | 40-60px             |
| Between a header and its content | 30-40px             |

### The 60-30-10 Space Rule

For any given view at standard zoom:

- **60%** of the visible area should be content (frames, stickies, text)
- **30%** should be functional whitespace (margins, gutters, padding)
- **10%** should be connectors, labels, and decorative elements

If content exceeds 70% of the visible area, the board feels cramped. If it drops below
50%, the board feels sparse and unfinished.

---

## Grid Systems

### The 12-Column Grid

For large boards (4000px+ wide), a 12-column grid provides maximum flexibility:

- **Column width**: Board width / 12 (e.g., 4800 / 12 = 400px per column)
- **Gutter**: 40px between columns
- **Common layouts**:
  - 3 equal columns: 4-4-4 (three frames of 4 columns each)
  - 2 columns + sidebar: 8-4 or 9-3
  - Full width: 12 (title banners, headers)
  - 4 equal columns: 3-3-3-3 (kanban phases)

### The 8-Point Grid

All spacing should be multiples of 8px for visual consistency:

- 8px: Minimum padding inside small elements
- 16px: Standard padding inside cards/stickies
- 24px: Gap between related items
- 32px: Gap between sections within a frame
- 48px: Gap between frames
- 64px: Gap between major board zones
- 80px: Board edge margins

---

## Alignment and Anchoring

### Anchor Points

Every board should have clear anchor points — elements that are always in the same place
and serve as visual reference points:

1. **Title banner**: Always at the top, always full width. This is the "north star" of
   the board.
2. **Legend/key**: Always in the bottom-right corner or as a fixed sidebar.
3. **Status summary**: Always adjacent to the title — current state at a glance.
4. **Navigation links**: If the board links to sub-boards, always in the top-right corner.

### Alignment Rules

- All frames in the same row share the same top edge (horizontal alignment)
- All frames in the same column share the same left edge (vertical alignment)
- Text within frames is left-aligned (never centered, except for titles and labels)
- Sticky notes within a column are left-aligned with consistent left margins
- Connector lines enter/exit frames from the midpoint of the nearest edge

---

## Responsive Design for Zoom Levels

Product boards must be readable at multiple zoom levels. Design with three zoom levels
in mind:

### Zoom Level 1: 25-35% (Bird's Eye)

- Board title, section names, and color zones are visible
- Individual items are not readable, but their presence and grouping are clear
- Color coding carries all the information at this level
- Use: Orientation, navigation, getting the big picture

### Zoom Level 2: 50-70% (Working View)

- Item titles, status indicators, and key labels are readable
- Sticky note headers are visible; detail text is not
- Frame headers and column headers are clear
- Use: Sprint planning, roadmap reviews, prioritization sessions

### Zoom Level 3: 90-120% (Detail View)

- All text is readable including acceptance criteria, technical notes, and annotations
- Individual sticky note content is fully visible
- Use: Feature spec reviews, writing user stories, reading technical requirements

Design your font sizes and element sizes to serve all three levels:

- 40-56pt: Readable at 25% zoom (board titles)
- 24-32pt: Readable at 50% zoom (section headers, frame titles)
- 16-20pt: Readable at 70% zoom (item titles, card headers)
- 12-14pt: Readable at 100% zoom (detail text, acceptance criteria, notes)
