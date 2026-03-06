# Layout Patterns — Team & HR Boards

## Overview

Team and HR boards use five core layout patterns: Hierarchical Tree (for org charts), Timeline Lane (for onboarding), Workshop Grid (for team building), Evaluation Matrix (for performance reviews), and Progression Path (for career mapping). Each pattern is optimized for a specific type of organizational information and has strict rules for spacing, alignment, and visual hierarchy.

---

## Pattern 1: Hierarchical Tree (Org Chart)

### When to Use

When visualizing reporting relationships, department structure, and organizational hierarchy. This is the default pattern for any board that answers "who reports to whom?"

### Layout Structure

```
+----------------------------------------------------------------------+
|                    HEADER (full width, 150px)                         |
+----------------------------------------------------------------------+
|                                                                      |
|                         [L1: CEO]                                    |
|                            |                                         |
|              +------+------+------+------+                           |
|              |      |             |      |                           |
|           [L2:C]  [L2:C]      [L2:C]  [L2:C]        +----------+   |
|              |      |             |      |           |  SIDEBAR  |   |
|          +---+---+  +---+    +---+---+   |           |           |   |
|          |   |   |  |   |   |   |   |    |           | Headcount |   |
|        [L3] [L3] [L3][L3][L3][L3][L3] [L3]          | Metrics   |   |
|          |   |   |  |   |   |   |   |    |           | Flags     |   |
|        [L4 teams]  [L4]   [L4 teams] [L4]           | Open Roles|   |
|                                                      +----------+   |
+----------------------------------------------------------------------+
```

### Spacing Rules

```
Board size:           4800 x 3400px
Header height:        150px
Sidebar width:        800px
Tree area:            3900 x 3100px (remaining space)

Level 1 (CEO):        y = 300,  card = 400 x 200px
Level 2 (C-Suite):    y = 550,  card = 350 x 180px,  gap = 80px between cards
Level 3 (VP/Dir):     y = 800,  card = 300 x 160px,  gap = 60px between cards
Level 4 (Teams):      y = 1050, card = 250 x 120px,  gap = 40px between cards

Vertical gap between levels: 50px (minimum)
Connector start: bottom-center of parent card
Connector end: top-center of child card
```

### Key Layout Decisions

**Horizontal distribution**: Cards at each level are centered under their parent. If a CTO has 4 VPs, those 4 cards are distributed evenly in the horizontal space below the CTO card, centered on the CTO's x-position.

**Width calculation for branches**: Calculate the total width needed for each branch:

```
Branch width = (number of children * card width) + ((number of children - 1) * gap)

Example: CTO with 4 VPs
Branch width = (4 * 300) + (3 * 60) = 1380px
CTO card center x = branch starting x + (1380 / 2)
```

**Sidebar placement**: Always on the right side, spanning the full height below the header. The sidebar never overlaps the tree. It contains aggregate data: headcount summary table, key metrics, open roles by priority, and org health flags.

**Dotted-line reports**: Shown as dashed lines in a contrasting color (department color of the dotted-line manager). These lines cross the tree structure and may need curved paths to avoid overlapping with solid reporting lines.

---

## Pattern 2: Timeline Lane (Onboarding)

### When to Use

When showing a temporal progression of tasks, milestones, or phases that unfold over days or weeks. The default pattern for onboarding boards, but also applicable to any multi-week HR process (PIP plans, transition plans, sabbatical return).

### Layout Structure

```
+----------------------------------------------------------------------+
|                    HEADER (full width, 180px)                         |
+----------------------------------------------------------------------+
|  LANE 1:       |  LANE 2:      |  LANE 3:      |  LANE 4:           |
|  Pre-boarding  |  Week 1       |  Week 2       |  Weeks 3-4         |
|  & Day 1       |  Learn &      |  Contribute   |  Own &             |
|                |  Observe      |  & Practice   |  Deliver           |
|  [checklist    |  [checklist   |  [checklist   |  [checklist        |
|   items]       |   items]      |   items]      |   items]           |
|                |               |               |                    |
+----------------+---------------+---------------+--------------------+
|  PANEL A:      |  PANEL B:                     |  PANEL C:          |
|  Key Contacts  |  30-60-90 Day                 |  Culture           |
|  & Resources   |  Milestone Goals              |  & Values          |
|                |  (spans 2 columns)            |                    |
+----------------+-------------------------------+--------------------+
```

### Spacing Rules

```
Board size:           4600 x 3200px
Header height:        180px
Lane height:          1200px
Panel height:         1200px

Lane 1 (Pre-boarding): x = 50,  w = 1100px
Lane 2 (Week 1):      x = 1200, w = 1100px
Lane 3 (Week 2):      x = 2350, w = 1100px
Lane 4 (Weeks 3-4):   x = 3500, w = 1100px

Panel A:               x = 50,   w = 1100px
Panel B:               x = 1200, w = 2200px (spans 2 lane widths)
Panel C:               x = 3450, w = 1100px

Gap between lanes:     50px horizontal, 50px between lane row and panel row
Checklist item height: ~35-40px per item
```

### Key Layout Decisions

**Lane width**: All time-based lanes should be the same width, regardless of how many tasks they contain. This prevents the visual implication that one week is "more important" than another. The density of tasks within each lane naturally varies.

**Checklist vertical flow**: Items within each lane flow top-to-bottom in chronological order. Group by sub-period within the lane (e.g., within Week 1: Monday items, Tuesday items, etc.) using small header labels.

**Bottom panels**: The three bottom panels contain non-temporal, reference information that supports all phases. Key Contacts and Culture are smaller (1 lane width each). The 30-60-90 Goals panel spans 2 lane widths because it contains the most content and bridges multiple time periods.

**Arrows between lanes**: Horizontal arrows connect lanes left-to-right with labels marking the transition condition ("Day 1 complete," "Foundation set," "Ready to own"). These arrows sit between lanes at the vertical midpoint.

---

## Pattern 3: Workshop Grid (Team Building)

### When to Use

When designing collaborative workshop outputs that contain multiple distinct activity results. Each frame is a self-contained activity that participants contribute to independently.

### Layout Structure

```
+------------------------------------------------------------------+
|              HEADER (full width, 160px)                           |
+------------------------------------------------------------------+
|                     |                      |                      |
|  ACTIVITY 1:        |  ACTIVITY 2:         |  ACTIVITY 3:         |
|  Team Values        |  Strengths Map       |  Working Agreements  |
|                     |                      |                      |
|  [sticky notes      |  [person cards       |  [numbered sticky    |
|   from each         |   with strengths     |   notes with         |
|   participant]      |   listed]            |   commitments]       |
|                     |                      |                      |
+---------------------+----------------------+----------------------+
|                     |                      |                      |
|  ACTIVITY 4:        |  ACTIVITY 5:         |  ACTIVITY 6:         |
|  Fun Facts /        |  Collaboration       |  Action Items        |
|  Ice Breaker        |  Preferences         |  & Next Steps        |
|                     |  Matrix              |                      |
|  [informal sticky   |  [structured table   |  [owner + due date   |
|   notes]            |   per person]        |   sticky notes]      |
|                     |                      |                      |
+---------------------+----------------------+----------------------+
```

### Spacing Rules

```
Board size:           4000 x 3000px
Header height:        160px
Grid:                 2 rows x 3 columns
Cell size:            1250 x 1200px per cell
Gap between cells:    50px horizontal, 50px vertical

Cell 1: x = 50,   y = 180
Cell 2: x = 1350, y = 180
Cell 3: x = 2650, y = 180
Cell 4: x = 50,   y = 1430
Cell 5: x = 1350, y = 1430
Cell 6: x = 2650, y = 1430

Each cell has a unique background color tint (30-40% opacity of its theme color)
```

### Key Layout Decisions

**Equal cell sizes**: Unlike timeline lanes, workshop cells should be equal in size. This communicates that each activity is equally important and prevents participants from perceiving one activity as the "main" one.

**Background color differentiation**: Each cell has a unique light tint background (lavender for values, light green for strengths, warm tint for agreements, pink for fun facts, light teal for preferences, neutral gray for actions). This creates visual variety and helps participants quickly locate each section when working simultaneously.

**Sticky note density**: Workshop cells should be designed to hold contributions from all participants. For an 8-person team, each cell should comfortably fit 8-16 sticky notes with room for summary elements. Size sticky notes at ~200x120px with 15px gaps.

**Empty space by design**: Unlike other board types, workshop boards should start 40-60% empty. The empty space is where participants will add their contributions. Pre-populate only prompts, headers, and structural elements.

**Flow connections**: Dashed arrows connect related cells (Values → Agreements, Strengths → Preferences, Agreements → Action Items). These connections are conceptual, not temporal — they show how the outputs of one activity inform another.

---

## Pattern 4: Evaluation Matrix (Performance Review)

### When to Use

When presenting a structured evaluation that combines quantitative ratings, qualitative feedback, and forward-looking plans. The default pattern for performance reviews, calibration boards, and competency assessments.

### Layout Structure

```
+------------------------------------------------------------------------+
|              HEADER (full width, 180px)                                  |
+------------------------------------------------------------------------+
|  PAST                    |  PRESENT                 |  FUTURE            |
|                          |                          |                    |
|  Frame 1:                |  Frame 3:                |  Frame 5:          |
|  Goals / OKR             |  360-Degree              |  Development       |
|  Review                  |  Feedback                |  Plan              |
|  [goal cards with        |  [strength themes +      |  [dev areas with   |
|   KR status badges]      |   growth themes +        |   specific actions |
|                          |   quoted feedback]       |   and support]     |
+--------------------------+--------------------------+--------------------+
|                          |                          |                    |
|  Frame 2:                |  Frame 4:                |  Frame 6:          |
|  Competency              |  Overall Rating          |  Career            |
|  Assessment              |  & Manager Summary       |  Growth            |
|  [8-row competency       |  [rating badge +         |  Path              |
|   table with gaps]       |   narrative + comp]      |  [ladder + criteria|
|                          |                          |   readiness table] |
+--------------------------+--------------------------+--------------------+
```

### Spacing Rules

```
Board size:           5200 x 3600px
Header height:        180px
Grid:                 2 rows x 3 columns
Cell size:            1650 x 1400px per cell
Gap between cells:    50px

Column 1 (Past):      x = 50
Column 2 (Present):   x = 1750
Column 3 (Future):    x = 3450

Row 1:                y = 200
Row 2:                y = 1650

Frame backgrounds: alternating #FAFAFA and #F5F5F5, with tinted backgrounds for specific sections
```

### Key Layout Decisions

**Three-column temporal flow**: The left column is backward-looking (goals achieved, competencies assessed), the center column is the present evaluation (feedback, overall rating), and the right column is forward-looking (development plan, career path). This left-to-right temporal flow matches natural reading direction and mirrors the structure of a good review conversation.

**Largest visual emphasis on the future**: The right column (development plan and career path) should feel the most visually rich and engaging. Use the most saturated background colors (#E0F2F1 for development, distinct card styling for career ladder) in the right column. This communicates that the most important output of a review is what comes next, not what happened before.

**Competency table color coding**: The competency assessment matrix uses three background colors to instantly communicate gaps:

```
Above level:  #C8E6C9 (green tint)   — strengths to leverage
At level:     #FFFFFF (white)         — expectations met
Below level:  #FFCDD2 (red tint)     — development areas
```

**Connector flow**: Arrows from Frame 1 (Goals) and Frame 2 (Competencies) flow into Frame 4 (Overall Rating). Arrows from Frame 2 and Frame 3 (Feedback) flow into Frame 5 (Development Plan). Frame 5 connects to Frame 6 (Career Path). This shows how assessment leads to development, which leads to career growth.

---

## Pattern 5: Progression Path (Career Growth)

### When to Use

When showing a vertical career ladder, skill development pathway, or any sequential progression of levels or stages. This pattern appears most commonly within the Performance Review board's Frame 6, but can also be used standalone for career framework boards.

### Layout Structure

```
+--------------------------------------------+
|  CAREER LADDER VISUALIZATION               |
|                                            |
|  [FUTURE: Principal / Manager (IC6/M1)]    |
|        ↑ (dashed, 2px)                     |
|  [NEXT: Staff Designer (IC5)]              |
|        ↑ (solid, 3px)                      |
|  [CURRENT: Senior Designer (IC4)]          |
|                                            |
+--------------------------------------------+
|  PROMOTION READINESS TABLE                 |
|                                            |
|  Criteria | Status | Ready?               |
|  ---------|--------|-------               |
|  Crit 1   | Yes    | Ready                |
|  Crit 2   | Dev    | 6-12 mo              |
|  Crit 3   | Yes    | Ready                |
|  ...      |        |                      |
+--------------------------------------------+
|  CAREER CONVERSATION NOTES                 |
|                                            |
|  [sticky notes with aspirations,           |
|   preferences, and manager commitments]    |
|                                            |
+--------------------------------------------+
```

### Spacing Rules

```
Ladder section:       500px height
  Level card:         400 x 120px
  Arrow between:      80px vertical
  Current level:      solid border, saturated fill
  Next level:         dashed border, medium fill
  Future level:       dashed border, light fill

Readiness table:      400px height
  Column widths:      criteria (50%), status (25%), ready (25%)
  Row height:         45px

Conversation notes:   300px height
  Sticky note:        320 x 100px, with 20px gaps
```

### Key Layout Decisions

**Bottom-to-top progression**: Unlike the board's left-to-right flow, the career ladder itself progresses bottom-to-top (current position at the bottom, future at the top). This mirrors the metaphor of "climbing" a career ladder and is intuitively understood.

**Visual fading for distance**: Current position uses a solid border and saturated fill color. The next level uses a dashed border and medium saturation. Future levels use a dashed border and very light fill. This visual fading communicates that further positions are less certain and more aspirational.

**Fork visualization**: When the career path splits (IC track vs management track), show a fork:

```
                    [Principal IC6]     [Design Manager M1]
                          ↑                    ↑
                           \                  /
                            [FORK DECISION]
                                  ↑
                          [Staff IC5]
```

Use a decision diamond or a split point to mark where the employee needs to make a choice.

---

## Layout Combination Patterns

### Onboarding + Org Context

When an onboarding board needs to show where the new hire fits in the organization:

```
+----------------------------------------------------------------------+
|                    ONBOARDING HEADER                                   |
+----------------------------------------------------------------------+
|  [Timeline lanes: Pre-boarding → Week 1 → Week 2 → Weeks 3-4]       |
+----------------------------------------------------------------------+
|  [Mini org chart: just the       |  [30-60-90 Goals]  |  [Culture]   |
|   new hire's branch, 2-3 levels] |                    |              |
+----------------------------------------------------------------------+
```

The mini org chart is embedded in the bottom-left panel where Key Contacts normally sits. It shows just the branch the new hire is joining (e.g., Head of Design → Team → New Hire Position), highlighting where they fit in the structure.

### Performance Review + Team Context

When a manager's review includes their team's performance:

```
+----------------------------------------------------------------------+
|  [Manager's Goals]  |  [Manager's Feedback]  |  [Manager's Dev Plan] |
+----------------------------------------------------------------------+
|  [Manager's         |  [Team Performance     |  [Manager's           |
|   Competencies]     |   Summary: aggregate   |   Career Path]        |
|                     |   team ratings, top     |                       |
|                     |   performers, attrition]|                       |
+----------------------------------------------------------------------+
```

The center-bottom frame becomes a Team Performance Summary showing aggregate data about the manager's team, since a manager's performance is partly measured by their team's results.

---

## Responsive Considerations

### At 30% Zoom (Overview)

At this zoom level, only the largest structural elements are visible:

- Header text (28pt+)
- Frame titles (22pt+)
- The overall layout pattern (tree, timeline, grid, matrix)
- Color coding (department colors in org charts, phase colors in onboarding)
- The location of the largest visual elements (CEO card, overall rating badge, career ladder)

### At 70% Zoom (Section Reading)

At this zoom level, section-level content becomes readable:

- Section headers (18-20pt)
- Card titles (14-16pt)
- Table headers and row labels
- Sticky note headers
- Status badges (Exceeded, Met, Partially Met)
- Connector labels

### At 100% Zoom (Detail Reading)

At this zoom level, everything is readable:

- Body text (12-13pt)
- Checklist items
- Table cell content
- Sticky note body text
- Quotes and feedback verbatims
- Metadata (dates, attributions, footnotes)

---

## Cross-Reference Map

| Pattern           | Also See                                                                 |
| ----------------- | ------------------------------------------------------------------------ |
| Hierarchical Tree | `02-Project-Management/layout-patterns.md` for WBS tree patterns         |
| Timeline Lane     | `09-Customer-Journey/layout-patterns.md` for horizontal journey patterns |
| Workshop Grid     | `08-Workshops/layout-patterns.md` for collaborative activity layouts     |
| Evaluation Matrix | `10-Finance/layout-patterns.md` for dashboard grid patterns              |
| Progression Path  | `01-Mind-Maps/layout-patterns.md` for vertical flow and hierarchy        |
