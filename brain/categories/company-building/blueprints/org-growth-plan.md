# Org Growth Plan

## Overview

- **Purpose**: Visualize the organizational scaling strategy — current team structure, planned hires, department growth trajectory, leadership pipeline, and team topology evolution. This board transforms abstract hiring plans into a spatial, time-based map that leadership, HR, and finance teams can align around. It answers: "How are we growing, and in what order?"
- **Best For**: Founders planning team scaling, HR teams building hiring roadmaps, finance teams modeling people costs, leadership teams designing org structure for the next 12-18 months
- **Complexity**: Medium
- **Board Size**: 5000x3500px (wide landscape to accommodate timeline columns)

## Color Scheme

| Role                  | Color          | Hex     |
| --------------------- | -------------- | ------- |
| Primary (Headers)     | Deep Navy      | #1A237E |
| Engineering           | Blue           | #1565C0 |
| Product               | Purple         | #6A1B9A |
| GTM (Sales/Marketing) | Teal           | #00897B |
| Operations/G&A        | Amber          | #F9A825 |
| Leadership            | Deep Navy      | #1A237E |
| New Hire Badge        | Coral          | #FF6B6B |
| Current State         | Solid borders  | —       |
| Planned State         | Dashed borders | —       |
| Background            | Cool Neutral   | #F0F4FF |
| Card Fill             | White          | #FFFFFF |
| Text Primary          | Near Black     | #1B1B1B |
| Text Secondary        | Dark Gray      | #616161 |
| Cost Annotations      | Forest Green   | #2E7D32 |

## Board Layout

The board uses a timeline + structure grid. Time periods are columns (left-to-right), departments are rows (top-to-bottom). Each cell shows the team composition for that department at that time.

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]  Org Growth Plan 2025-2026               [v1.0 | Date] │
├─────────────────────────────────────────────────────────────────┤
│              │  NOW (Q1 25)    │  +6 MO (Q3 25)  │ +12 MO (Q1 26) │
│              │  20 people      │  35 people       │  50 people      │
├──────────────┼─────────────────┼──────────────────┼─────────────────┤
│  LEADERSHIP  │  CEO, CTO       │  + VP Eng        │  + VP Product   │
│              │                 │  + VP Sales      │  + CFO          │
├──────────────┼─────────────────┼──────────────────┼─────────────────┤
│  ENGINEERING │  4 engineers    │  8 engineers     │  15 engineers   │
│  (Blue)      │  1 team         │  2 teams         │  3 teams + lead │
│              │                 │  + 1 DevOps      │  + 2 SRE        │
├──────────────┼─────────────────┼──────────────────┼─────────────────┤
│  PRODUCT     │  1 PM           │  2 PM            │  3 PM           │
│  (Purple)    │  1 Designer     │  2 Designers     │  3 Designers    │
│              │                 │  + 1 Researcher  │  + 1 Data       │
├──────────────┼─────────────────┼──────────────────┼─────────────────┤
│  GTM         │  2 Sales (AE)   │  5 Sales         │  10 Sales       │
│  (Teal)      │  1 Marketing    │  2 Marketing     │  4 Marketing    │
│              │                 │  + 1 CS           │  + 3 CS         │
├──────────────┼─────────────────┼──────────────────┼─────────────────┤
│  OPS / G&A   │  1 Ops          │  1 Ops           │  2 Ops          │
│  (Amber)     │                 │  + 1 Finance     │  + 1 Legal      │
├──────────────┼─────────────────┼──────────────────┼─────────────────┤
│  TOTAL       │  10 FTE         │  22 FTE          │  42 FTE         │
│  COST        │  $1.2M/yr       │  $2.8M/yr        │  $5.5M/yr       │
├─────────────────────────────────────────────────────────────────┤
│  HIRING PRIORITY STACK                                          │
│  #1: VP Engineering  #2: Sr Backend Eng  #3: AE (Sales)  ...  │
├─────────────────────────────────────────────────────────────────┤
│  TEAM TOPOLOGY NOTES                                            │
│  Now: Functional teams | +6mo: Transition to squads            │
│  +12mo: 3 cross-functional squads + platform team              │
└─────────────────────────────────────────────────────────────────┘

Approximate positions:
  Header:              (50, 50) — 4900x100
  Grid (main):         (50, 200) — 4900x2200
  Row labels:          (50, 200) — 400 wide
  Column 1 (Now):      (450, 200) — 1450 wide
  Column 2 (+6mo):     (1950, 200) — 1450 wide
  Column 3 (+12mo):    (3450, 200) — 1450 wide
  Total bar:           (50, 2450) — 4900x150
  Hiring Stack:        (50, 2650) — 4900x350
  Topology Notes:      (50, 3050) — 4900x350
```

## Frames & Sections

### Frame 1: Header

- **Position**: (50, 50)
- **Size**: 4900x100px
- **Background**: Deep Navy (#1A237E)
- **Elements**:
  - Logo at (70, 60), 70x70px
  - Text: "Org Growth Plan 2025-2026" (28px bold, white)
  - Text: "v1.0 | January 2025 | CEO + VP People" (12px, #90CAF9)

### Frame 2: Timeline Grid

- **Position**: (50, 200)
- **Size**: 4900x2200px
- **Background**: White (#FFFFFF), grid lines #E0E0E0
- **Elements**:
  - Column headers at y:210:
    - "NOW (Q1 2025) — 20 people" (22px bold, #1A237E)
    - "+6 MONTHS (Q3 2025) — 35 people" (22px bold, #1A237E)
    - "+12 MONTHS (Q1 2026) — 50 people" (22px bold, #1A237E)
  - Row labels (left column, 400px wide):
    - "LEADERSHIP" (18px bold, #1A237E)
    - "ENGINEERING" (18px bold, #1565C0)
    - "PRODUCT" (18px bold, #6A1B9A)
    - "GTM" (18px bold, #00897B)
    - "OPS / G&A" (18px bold, #F9A825)
  - Grid cells: Each cell contains team member counts and role labels
  - NEW badges: Coral (#FF6B6B) pills labeled "NEW" next to planned hires
  - Dashed borders on cells in future columns (vs. solid in "Now" column)

### Frame 3: Current Org Chart (within Now column)

- **Position**: Within the NOW column
- **Elements**:
  - Mini org chart showing current reporting structure:
    ```
    CEO
    ├── CTO
    │   └── 4 Engineers
    ├── VP (acting) Product
    │   ├── 1 PM
    │   └── 1 Designer
    └── Head of Sales
        ├── 2 AEs
        └── 1 Marketing
    ```
  - Each node: Small card (250x60px), department-colored border

### Frame 4: Future Org Chart (within +12mo column)

- **Position**: Within the +12mo column
- **Elements**:
  - Expanded org chart:
    ```
    CEO
    ├── CTO
    │   ├── VP Engineering (NEW)
    │   │   ├── Squad 1 Lead + 5 eng
    │   │   ├── Squad 2 Lead + 5 eng
    │   │   └── Platform Lead + 3 eng + 2 SRE
    │   └── Data (1)
    ├── VP Product (NEW)
    │   ├── 3 PMs
    │   ├── 3 Designers
    │   └── 1 UX Researcher
    ├── VP Sales (NEW)
    │   ├── 10 AEs (2 teams of 5)
    │   ├── 4 Marketing
    │   └── 3 Customer Success
    └── CFO (NEW)
        ├── 2 Ops
        └── 1 Legal
    ```
  - NEW hire nodes have dashed borders and coral badge

### Frame 5: Total & Cost Bar

- **Position**: (50, 2450)
- **Size**: 4900x150px
- **Background**: #E8EAF6
- **Elements**:
  - Three cost cells aligned with columns:
    - "20 people | $1.2M/yr | $100K/mo" (Now)
    - "35 people | $2.8M/yr | $233K/mo" (+6mo)
    - "50 people | $5.5M/yr | $458K/mo" (+12mo)
  - Trend: "People cost grows from 55% to 65% of total expenses"
  - Sticky note: "Funded through Series A ($8M). Runway: 18 months at current burn." fill #FFF9C4

### Frame 6: Hiring Priority Stack

- **Position**: (50, 2650)
- **Size**: 4900x350px
- **Background**: White, border 1px #E0E0E0
- **Elements**:
  - Header: "Hiring Priority Stack" (22px bold, #1A237E)
  - Prioritized list of next 8 hires:
    1. "VP Engineering — Critical for scaling eng from 4 to 15. Target: March 2025."
    2. "Sr. Backend Engineer — Needed for platform rewrite. Target: February 2025."
    3. "Account Executive #3 — Pipeline exceeds current AE capacity. Target: March 2025."
    4. "VP Sales — Needed to build and lead GTM function. Target: April 2025."
    5. "Product Designer #2 — Support enterprise product track. Target: May 2025."
    6. "DevOps Engineer — CI/CD and infrastructure ownership. Target: June 2025."
    7. "Customer Success #1 — Onboarding and retention for enterprise. Target: July 2025."
    8. "UX Researcher — User research for product-led growth initiative. Target: August 2025."
  - Each hire: Role (bold), brief justification, target date, department color indicator

### Frame 7: Team Topology Notes

- **Position**: (50, 3050)
- **Size**: 4900x350px
- **Background**: #F0F4FF
- **Elements**:
  - Header: "Team Topology Evolution" (22px bold, #1A237E)
  - Now: "Functional teams — all engineers in one team, all designers in one team. Works at 10-20 people."
  - +6 months: "Transitioning to squads — 2 cross-functional squads (Growth + Enterprise) + shared platform eng."
  - +12 months: "Full squad model — 3 squads (Growth, Enterprise, Platform) each with PM, Designer, 4-5 Engineers."
  - Sticky note: "Key trigger: When any team exceeds 8 people, split into two teams." fill #E3F2FD
  - Sticky note: "Risk: Moving to squads too early creates coordination overhead. Wait until engineering > 8." fill #FCE4EC

## Connectors & Flow

1. Horizontal arrows between time columns (showing progression)
2. Vertical department color bars along left edge of each row
3. Optional: Dashed lines from hiring priority to the corresponding department row

## Variations

1. **Startup (simple)**: 2 columns (Now + Target), 3 departments, no org chart detail
2. **Rapid scaling**: 5 columns (Now, +3mo, +6mo, +9mo, +12mo) for aggressive hiring
3. **Department-focused**: Zoom into one department (e.g., Engineering only) with role-level detail
4. **Budget-first**: Lead with financial model, derive headcount from budget constraints
5. **Reorg plan**: Show current structure alongside proposed restructure with migration notes

## Build Instructions

1. Create board (5000x3500px, background #F0F4FF)
2. Build header with logo, title, version
3. Create the timeline grid with column headers and row labels
4. Fill "Now" column with current team data (solid borders)
5. Fill "+6 months" column with planned growth (dashed borders, NEW badges)
6. Fill "+12 months" column with target state (dashed borders, NEW badges)
7. Add mini org charts in Now and +12mo columns
8. Build total/cost bar at bottom of grid
9. Build hiring priority stack with justifications
10. Add team topology notes
11. Add cost annotations and risk sticky notes
12. Review: Does the plan feel achievable? Are the priorities justified?

## Tips & Best Practices

- Always include cost context — headcount without cost is half the picture
- Justify every hire — "why this role now?" should be answerable for each position
- Show team topology evolution, not just headcount growth
- Mark new hires distinctly (NEW badges, dashed borders) vs. current team
- Include triggers for structural changes ("Split team when > 8 people")
- Update monthly during active hiring periods
- Flag risks: What happens if a key hire takes longer than expected?
