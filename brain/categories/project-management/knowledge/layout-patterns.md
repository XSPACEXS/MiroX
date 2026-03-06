# Project Management — Layout Patterns

## Overview

Project management boards rely on highly structured layouts because the information they convey — status, ownership, timeline, dependencies — must be instantly parseable. Unlike creative mind maps where organic placement adds value, PM boards demand rigid alignment, consistent spacing, and predictable patterns. Viewers need to build a mental model of the board once and then rely on that model for every subsequent visit.

This document presents five layout patterns for project management boards, each optimized for a different project management methodology and information need.

---

## Pattern 1: Kanban Columns

The most widely used PM layout. Vertical columns represent workflow stages, and cards move left-to-right through the columns as work progresses.

### When to Use

- Continuous workflow (no fixed sprints or timeboxes)
- Teams that need to visualize work-in-progress
- Process optimization (identifying bottlenecks)
- Any team size, any industry

### ASCII Diagram

```
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│ BACKLOG  │  TO DO   │IN PROG.  │  REVIEW  │   DONE   │
│  (∞)     │  (8)     │  (5)     │  (3)     │   (∞)    │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │
│ │Card 1│ │ │Card 5│ │ │Card 9│ │ │Card12│ │ │Card14│ │
│ └──────┘ │ └──────┘ │ └──────┘ │ └──────┘ │ └──────┘ │
│ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │
│ │Card 2│ │ │Card 6│ │ │Card10│ │ │Card13│ │ │Card15│ │
│ └──────┘ │ └──────┘ │ └──────┘ │          │ └──────┘ │
│ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │          │ ┌──────┐ │
│ │Card 3│ │ │Card 7│ │ │Card11│ │          │ │Card16│ │
│ └──────┘ │ └──────┘ │ └──────┘ │          │ └──────┘ │
│ ┌──────┐ │ ┌──────┐ │          │          │          │
│ │Card 4│ │ │Card 8│ │          │          │          │
│ └──────┘ │ └──────┘ │          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┘

        ────────────► Work flows left to right ────────────►
```

### Spatial Rules

**Board Dimensions**: Width scales with column count, height scales with max card count

- 5 columns, up to 10 cards per column: 5000x4000px
- 7 columns, up to 15 cards per column: 7000x5000px

**Column Headers**:

- Height: 80-100px
- Width: 700-1000px per column
- Background: Distinct color per status (muted tints)
- Text: Column name (bold, 20-24px) + WIP limit (regular, 16px)
- Position: Top of each column, flush with column width

**Column Bodies**:

- Background: Very light tint of column header color (5-8% opacity)
- Padding: 30px on all sides
- Cards stack vertically with 15-25px gaps

**Cards**:

- Width: Column width minus 60px (30px padding each side)
- Height: 100-160px (variable based on content)
- Corner radius: 8-12px
- Border: 2px, colored by priority or status
- Background: White or very light gray (#FAFAFA)

**Swim Lanes** (optional horizontal divisions within columns):

- Divider: 2px dashed line, light gray
- Lane label: Left side, rotated 90 degrees, or above the lane
- Common swim lanes: By team, by priority, by epic

### Spacing Rules

| Element                     | Spacing                        |
| --------------------------- | ------------------------------ |
| Between columns             | 20-30px gap (or shared border) |
| Card to column edge         | 30px horizontal padding        |
| Between cards (vertical)    | 15-25px                        |
| Column header to first card | 30-40px                        |
| Swim lane divider padding   | 20px above and below           |

---

## Pattern 2: Sprint Board (Time-Boxed Columns)

A variation of Kanban where columns represent time-boxed sprints rather than workflow stages. Cards are assigned to specific sprints, and each sprint has its own status tracking.

### When to Use

- Scrum/Agile teams with fixed sprint cycles
- When planning capacity across multiple sprints
- Sprint planning ceremonies and retrospectives
- Teams that need to compare velocity across sprints

### ASCII Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    PROJECT HEADER                             │
│  Sprint Velocity: 42pts │ Team: 6 │ Sprint Length: 2 weeks  │
├───────────────┬───────────────┬───────────────┬─────────────┤
│  SPRINT 7     │  SPRINT 8     │  SPRINT 9     │  BACKLOG    │
│  (Mar 4-15)   │  (Mar 18-29)  │  (Apr 1-12)   │  (Future)   │
│  38/42 pts    │  40/42 pts    │  28/42 pts    │  67 pts     │
│  ████████░░   │  ██████████   │  ██████░░░░   │             │
├───────────────┼───────────────┼───────────────┼─────────────┤
│ ✅ Card A (5) │ □ Card E (8)  │ □ Card I (5)  │ □ Card M    │
│ ✅ Card B (8) │ □ Card F (5)  │ □ Card J (8)  │ □ Card N    │
│ 🔄 Card C (13)│ □ Card G (13) │ □ Card K (3)  │ □ Card O    │
│ 🔄 Card D (5) │ □ Card H (8)  │ □ Card L (5)  │ □ Card P    │
│ ⚠️ Card E (8) │ □ Card I (5)  │              │ □ Card Q    │
│               │ □ Card J (3)  │              │             │
└───────────────┴───────────────┴───────────────┴─────────────┘

✅ = Done  🔄 = In Progress  ⚠️ = Blocked  □ = Not Started
```

### Spatial Rules

**Board Dimensions**: 6000-8000px wide, 4000-6000px tall

**Project Header Zone**:

- Position: Top of board, full width
- Height: 120-160px
- Content: Project name, team size, velocity metrics, sprint length
- Background: Primary brand color at 10% opacity

**Sprint Columns**:

- Width: 1000-1400px each
- Show 3-4 sprints at a time (current + next 2 + backlog)
- Each sprint has a sub-header: Sprint name, date range, point capacity, progress bar
- Sub-header height: 100-120px

**Capacity Bars**:

- Width: Column width minus padding
- Height: 16-24px
- Fill color: Green (<80% capacity), Yellow (80-100%), Red (>100%)
- Shows committed points vs. total capacity

**Cards Within Sprints**:

- Same card design as Kanban
- Sorted by priority (highest at top) or status
- Story points displayed as a badge (small circle, 24px diameter)

---

## Pattern 3: Timeline / Gantt View

A horizontal timeline where task bars are positioned according to start and end dates. Tasks can have dependencies shown as arrows between bars.

### When to Use

- Multi-week or multi-month projects
- When timing and sequencing matter more than workflow stage
- Stakeholder presentations showing project schedule
- Resource planning and conflict detection
- Waterfall or hybrid project methodologies

### ASCII Diagram

```
              │ Week 1  │ Week 2  │ Week 3  │ Week 4  │ Week 5  │ Week 6  │
              │ Mar 3-7 │Mar 10-14│Mar 17-21│Mar 24-28│ Apr 1-4 │ Apr 7-11│
──────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
 Design       │ ████████████████  │         │         │         │         │
              │                   │         │         │         │         │
──────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
 Frontend     │         │ ████████████████████████████│         │         │
              │         │         │         │    ↗    │         │         │
──────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
 Backend      │         │         │ ██████████████████████████████████████│
              │         │         │         │         │    ↗    │         │
──────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
 Testing      │         │         │         │         │ ██████████████████│
              │         │         │         │         │         │         │
──────────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
 Launch       │         │         │         │         │         │    ◆    │
──────────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

████ = Task duration bar     ◆ = Milestone     ↗ = Dependency arrow
▓▓▓▓ = Completed portion     ░░░░ = Remaining portion
```

### Spatial Rules

**Board Dimensions**: Width driven by timespan, height driven by task count

- 6-week project, 5 swim lanes: 6000x3000px
- 12-week project, 10 swim lanes: 10000x5000px
- Quarter view (13 weeks), 15 swim lanes: 12000x6000px

**Time Header**:

- Position: Top of board
- Height: 80-100px
- Two rows: Month/Quarter (top, larger) and Week/Day (bottom, smaller)
- Current date marked with a vertical red line ("Today" indicator)
- Weekend/holiday shading: Light gray columns

**Swim Lane Labels** (left column):

- Width: 200-300px
- Position: Left edge of board
- Content: Team name, workstream, or individual
- Background: Subtle color per team
- Text: Bold, 16-18px, left-aligned

**Task Bars**:

- Height: 30-50px
- Horizontal position: Start date to end date, proportionally scaled
- Corner radius: 4-8px
- Fill: Solid team/status color
- Progress overlay: Darker shade filling from left (percent complete)
- Label: Task name inside or above the bar, 12-14px

**Milestone Markers**:

- Shape: Diamond (rotated square), 20-30px
- Color: Accent color (gold, red for critical)
- Label: Below the diamond, 12px

**Dependency Arrows**:

- Style: Curved or angled connector, 2px, gray or accent color
- Arrow from end of predecessor to start of successor
- Optional: Red color for dependencies that create delays

**Today Line**:

- Vertical line at current date position
- Color: Red or accent, 2-3px, dashed
- Label: "Today" at the top, with the date

---

## Pattern 4: Roadmap (Quarterly Swim Lanes)

A strategic view that organizes initiatives by quarter (or month) and category. Less granular than Gantt — focuses on themes and milestones rather than individual tasks.

### When to Use

- Product roadmap presentations to stakeholders
- Strategic planning across quarters
- Alignment between teams on shared goals
- Executive-level project communication

### ASCII Diagram

```
┌──────────────────────────────────────────────────────────────────────┐
│                    2026 PRODUCT ROADMAP                               │
│                    CloudSync Pro — Engineering                         │
├──────────┬────────────────┬────────────────┬────────────────┬────────┤
│          │      Q1        │      Q2        │      Q3        │   Q4   │
│          │   Jan-Mar      │   Apr-Jun      │   Jul-Sep      │Oct-Dec │
├──────────┼────────────────┼────────────────┼────────────────┼────────┤
│          │ ┌────────────┐ │ ┌────────────┐ │                │        │
│ Platform │ │ API v3.0   │ │ │ GraphQL    │ │ ┌────────────┐ │        │
│          │ │ Migration  │ │ │ Support    │ │ │ Webhooks   │ │        │
│          │ └────────────┘ │ └────────────┘ │ │ v2.0       │ │        │
│          │                │                │ └────────────┘ │        │
├──────────┼────────────────┼────────────────┼────────────────┼────────┤
│          │                │ ┌──────────────────────┐        │        │
│ Security │ ┌────────────┐ │ │ SOC2 Type II         │        │        │
│          │ │ SSO/SAML   │ │ │ Certification        │        │        │
│          │ └────────────┘ │ └──────────────────────┘        │        │
├──────────┼────────────────┼────────────────┼────────────────┼────────┤
│          │ ┌────────────┐ │                │ ┌────────────┐ │        │
│ Growth   │ │ Free Tier  │ │ ┌────────────┐ │ │ Enterprise │ │        │
│          │ │ Launch     │ │ │ Partner    │ │ │ Self-Serve │ │        │
│          │ └────────────┘ │ │ Program    │ │ └────────────┘ │        │
│          │                │ └────────────┘ │                │        │
└──────────┴────────────────┴────────────────┴────────────────┴────────┘
```

### Spatial Rules

**Board Dimensions**: 8000-12000px wide, 3000-6000px tall

**Roadmap Header**:

- Full board width, 100-140px tall
- Project/product name, team, year
- Background: Primary brand color

**Quarter Columns**:

- Equal width, divided by subtle vertical lines
- Quarter labels: Bold, 18-22px
- Date range: Regular, 14px, lighter color
- Current quarter highlighted with a subtle background tint

**Category Rows (Swim Lanes)**:

- Height: 250-500px (scales with content)
- Row labels: Left column, 200-300px wide, bold, 16-18px
- Alternating row backgrounds (white and very light gray) for scanability

**Initiative Cards**:

- Width: Proportional to estimated duration (spans partial or full quarters)
- Height: 60-100px
- Background: Category/team color
- Content: Initiative name (bold), brief description, key metric
- Corner radius: 8px

**Status Indicators on Cards**:

- Small colored dot (8-12px) in top-right corner
- Green = On Track, Yellow = At Risk, Red = Blocked
- Optional: Progress percentage text

---

## Pattern 5: Dashboard Overview

A single-screen summary that combines status metrics, task distributions, team assignments, and project health indicators. Not for managing individual tasks but for providing executive-level visibility.

### When to Use

- Executive status reporting
- Portfolio-level project tracking
- Weekly team stand-up reference
- When you need a "single pane of glass" for project health

### ASCII Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                    PROJECT DASHBOARD                              │
│                    CloudSync Pro v3.0 Launch                      │
├────────────────────────┬────────────────────────┬────────────────┤
│   OVERALL STATUS       │   SPRINT PROGRESS      │  TEAM LOAD     │
│                        │                        │                │
│   ┌─────────────┐      │   Sprint 8 of 12       │  Alice  ████░  │
│   │   ON TRACK   │      │   ████████░░░░ 67%     │  Bob    █████  │
│   │   🟢 Green   │      │   18/27 stories done   │  Carol  ███░░  │
│   └─────────────┘      │                        │  Dave   ████░  │
│                        │   Velocity: 42 pts/wk  │  Eve    ██░░░  │
│   Days left: 47        │   Burndown: On track   │                │
├────────────────────────┼────────────────────────┼────────────────┤
│   RISK SUMMARY         │   UPCOMING MILESTONES  │  KEY METRICS   │
│                        │                        │                │
│   🔴 2 Critical        │  ◆ Mar 15 — API Freeze │  Scope: +12%   │
│   🟡 5 Medium          │  ◆ Mar 29 — Beta       │  Budget: 92%   │
│   🟢 18 Low            │  ◆ Apr 12 — Launch     │  Schedule: -3d │
│                        │  ◆ Apr 26 — Retro      │  Quality: 97%  │
│   Top risk: API        │                        │                │
│   latency (P1)         │                        │                │
└────────────────────────┴────────────────────────┴────────────────┘
```

### Spatial Rules

**Board Dimensions**: 5000-7000px wide, 3000-5000px tall

**Dashboard Layout**: 2x3 or 3x2 grid of "widget" frames

- Each widget: 1500-2500px wide, 1000-1500px tall
- Gap between widgets: 30-50px
- All widgets have consistent title bars (60-80px tall, bold, background color)

**Widget Types**:

1. **Status Badge**: Large colored circle with text ("ON TRACK"), prominent center placement
2. **Progress Bar**: Horizontal bar showing sprint/project completion
3. **Team Capacity**: Horizontal bars per person showing workload
4. **Risk Matrix**: Counts by severity with color coding
5. **Milestone Timeline**: Vertical list with dates and diamond markers
6. **Key Metrics**: Grid of labeled numbers with trend indicators (arrows up/down)

**Typography**:

- Dashboard title: 28-36px, bold
- Widget titles: 20-24px, semi-bold
- Metric values: 36-48px, bold (the numbers should be BIG)
- Labels and descriptions: 14-16px, regular
- Dates and metadata: 12-14px, regular

---

## Universal Layout Principles for PM Boards

### Card Design Specification

Every PM card should follow this internal layout:

```
┌─────────────────────────────────┐
│ 🔴 P1  │  [Card Title Here]     │  ← Title row (bold, 14-16px)
├─────────┴────────────────────────┤
│ Assigned: 👤 Alice               │  ← Metadata row
│ Due: Mar 15  │  Est: 5 pts       │
├──────────────────────────────────┤
│ [tag:frontend] [tag:api]         │  ← Tags row (colored pills)
└──────────────────────────────────┘

Width: 250-350px
Height: 100-160px (variable)
Border-left: 4px solid priority color
Background: White (#FFFFFF) or off-white (#FAFAFA)
```

### Column Header Specification

```
┌──────────────────────────────────┐
│  STATUS NAME           (3/5)     │  ← Name + WIP (current/limit)
│  ████████████████░░░░░░          │  ← Optional capacity bar
└──────────────────────────────────┘

Height: 70-90px
Background: Status color at 15-25% opacity
Text: Bold, 18-22px, status color at full saturation
WIP indicator: Regular, 16px, turns red when exceeded
```

### Connector Styles for Dependencies

| Dependency Type          | Line Style  | Color              | Arrow            |
| ------------------------ | ----------- | ------------------ | ---------------- |
| Finish-to-Start (normal) | Solid, 2px  | Gray #757575       | Single arrowhead |
| Start-to-Start           | Dashed, 2px | Blue #1565C0       | Single arrowhead |
| Finish-to-Finish         | Dashed, 2px | Blue #1565C0       | Single arrowhead |
| Blocking dependency      | Solid, 3px  | Red #F44336        | Filled arrowhead |
| Informational link       | Dotted, 1px | Light gray #BDBDBD | No arrowhead     |

### Status Color System

This color system should be used consistently across all PM board types:

| Status      | Color      | Hex     | Usage                          |
| ----------- | ---------- | ------- | ------------------------------ |
| Not Started | Light Gray | #E0E0E0 | Background for unstarted items |
| In Progress | Blue       | #1976D2 | Active work indicators         |
| In Review   | Purple     | #7B1FA2 | Awaiting review/approval       |
| Done        | Green      | #388E3C | Completed items                |
| Blocked     | Red        | #D32F2F | Blocked or overdue items       |
| At Risk     | Amber      | #F57F17 | Warning indicators             |
| Deferred    | Warm Gray  | #8D6E63 | Paused or postponed items      |

### Priority Indicators

| Priority          | Visual                 | Color              | Size       |
| ----------------- | ---------------------- | ------------------ | ---------- |
| P0 (Critical)     | Filled circle + "P0"   | Red #D32F2F        | 24px badge |
| P1 (High)         | Filled circle + "P1"   | Orange #E65100     | 24px badge |
| P2 (Medium)       | Outlined circle + "P2" | Yellow #F9A825     | 20px badge |
| P3 (Low)          | Outlined circle + "P3" | Gray #757575       | 20px badge |
| P4 (Nice-to-have) | Dot + "P4"             | Light gray #BDBDBD | 16px badge |

---

## Choosing the Right Pattern

```
What is the primary question the board should answer?

├── "What is the team working on right now?"
│   └── Pattern 1: Kanban Columns
│
├── "What are we committing to this sprint?"
│   └── Pattern 2: Sprint Board
│
├── "When will each task start and finish?"
│   └── Pattern 3: Timeline / Gantt
│
├── "What are the key initiatives for the next 3-4 quarters?"
│   └── Pattern 4: Roadmap
│
└── "What is the overall health of the project?"
    └── Pattern 5: Dashboard Overview
```

### Pattern Combination Guide

Many projects use multiple patterns together:

| Primary Pattern | Supporting Pattern | How They Connect                                 |
| --------------- | ------------------ | ------------------------------------------------ |
| Sprint Board    | Dashboard Overview | Dashboard summarizes sprint health               |
| Kanban          | Timeline / Gantt   | Timeline shows when Kanban items are due         |
| Roadmap         | Sprint Board       | Roadmap initiatives break down into sprint cards |
| Dashboard       | Kanban + Timeline  | Dashboard links to both for drill-down           |
| Timeline        | Kanban             | Kanban tracks daily work within the timeline     |

### Responsive Scaling

**Adding more tasks**:

- Kanban: Cards stack deeper in columns; expand board height
- Sprint Board: Cards stack within sprints; add more sprints horizontally
- Timeline: Add swim lanes vertically; extend timeline horizontally
- Roadmap: Initiative cards stack within category rows
- Dashboard: Update metric numbers; add new risk entries

**Board size guidelines by project scale**:

| Project Scale     | Team Size    | Duration    | Recommended Board Size |
| ----------------- | ------------ | ----------- | ---------------------- |
| Small sprint      | 3-5 people   | 2 weeks     | 4000x3000px            |
| Standard project  | 5-10 people  | 1-3 months  | 7000x5000px            |
| Large project     | 10-20 people | 3-6 months  | 10000x7000px           |
| Program/Portfolio | 20+ people   | 6-12 months | 12000x8000px           |
