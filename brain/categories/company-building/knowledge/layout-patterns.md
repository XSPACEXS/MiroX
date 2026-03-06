# Company Building — Layout Patterns

## Overview

Company building boards communicate organizational identity, strategy, and growth. Unlike technical boards that follow engineering conventions, company building boards blend informational clarity with visual storytelling. The layout must guide the viewer through a narrative while making each section independently useful. This guide covers the fundamental layout patterns with precise spatial specifications.

---

## Pattern 1: The Strategic Cascade (Top-to-Bottom)

The most common layout for vision and strategy boards. Content flows from the highest-level abstraction (vision) down to the most concrete (metrics and initiatives).

### When to Use

- Company vision boards
- Strategic planning documents
- Annual or quarterly planning boards
- Board of directors presentations

### ASCII Diagram

```
┌─────────────────────────────────────────────────────────┐
│  VISION & MISSION                             y: 0-400  │
│  ┌─────────────────────────────────────────────────┐    │
│  │    "Our vision statement here"                   │    │
│  │     Mission: what we do, for whom, how           │    │
│  └─────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────┤
│  VALUES / PRINCIPLES                         y: 500-900 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐               │
│  │Value │  │Value │  │Value │  │Value │               │
│  │  1   │  │  2   │  │  3   │  │  4   │               │
│  └──────┘  └──────┘  └──────┘  └──────┘               │
├─────────────────────────────────────────────────────────┤
│  STRATEGIC PILLARS                        y: 1000-1800  │
│  ┌────────────────┐ ┌────────────────┐ ┌──────────────┐│
│  │   Pillar 1     │ │   Pillar 2     │ │  Pillar 3    ││
│  │   Description  │ │   Description  │ │  Description ││
│  │   Key Results  │ │   Key Results  │ │  Key Results ││
│  │   Owner        │ │   Owner        │ │  Owner       ││
│  └────────────────┘ └────────────────┘ └──────────────┘│
├─────────────────────────────────────────────────────────┤
│  KEY METRICS & MILESTONES                 y: 1900-2500  │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                  │
│  │MRR│ │DAU│ │NPS│ │LTV│ │CAC│ │NRR│                  │
│  └───┘ └───┘ └───┘ └───┘ └───┘ └───┘                  │
├─────────────────────────────────────────────────────────┤
│  INITIATIVES & ROADMAP                    y: 2600-3200  │
│  Q1: [████████]  Q2: [████████]  Q3: [█████]  Q4: [██] │
└─────────────────────────────────────────────────────────┘
```

### Spatial Specifications

| Section           | Y-Start | Y-End | Height | Purpose                      |
| ----------------- | ------- | ----- | ------ | ---------------------------- |
| Vision & Mission  | 50      | 400   | 350px  | Company purpose and ambition |
| Values            | 500     | 900   | 400px  | Cultural principles          |
| Strategic Pillars | 1000    | 1800  | 800px  | Major strategic bets         |
| Key Metrics       | 1900    | 2500  | 600px  | Performance scoreboard       |
| Initiatives       | 2600    | 3200  | 600px  | Execution roadmap            |

**Board dimensions**: 4800x3400px
**Inter-section gap**: 100px
**Margin**: 50px all sides

---

## Pattern 2: The Culture Grid (Value Blocks)

A grid layout that presents company values, behaviors, and cultural artifacts as distinct, equally-weighted blocks. Each block is a self-contained culture definition.

### When to Use

- Culture canvases
- Values definition boards
- Team charter boards
- Onboarding culture guides

### ASCII Diagram

```
┌────────────────────────────────────────────────────────────┐
│  [Company Logo]  OUR CULTURE                    [Updated]  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  VALUE 1     │  │  VALUE 2     │  │  VALUE 3     │    │
│  │  ───────     │  │  ───────     │  │  ───────     │    │
│  │  Icon        │  │  Icon        │  │  Icon        │    │
│  │  Statement   │  │  Statement   │  │  Statement   │    │
│  │  Behaviors:  │  │  Behaviors:  │  │  Behaviors:  │    │
│  │  • We do X   │  │  • We do X   │  │  • We do X   │    │
│  │  • We don't Y│  │  • We don't Y│  │  • We don't Y│    │
│  │  Quote:      │  │  Quote:      │  │  Quote:      │    │
│  │  "..."       │  │  "..."       │  │  "..."       │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │
│  │  VALUE 4     │  │  VALUE 5     │  │  ANTI-VALUES │    │
│  │  ───────     │  │  ───────     │  │  ──────────  │    │
│  │  Icon        │  │  Icon        │  │  What we     │    │
│  │  Statement   │  │  Statement   │  │  DON'T do:   │    │
│  │  Behaviors:  │  │  Behaviors:  │  │  • Not X     │    │
│  │  • We do X   │  │  • We do X   │  │  • Not Y     │    │
│  │  • We don't Y│  │  • We don't Y│  │  • Not Z     │    │
│  │  Quote:      │  │  Quote:      │  │              │    │
│  │  "..."       │  │  "..."       │  │              │    │
│  └──────────────┘  └──────────────┘  └──────────────┘    │
│                                                            │
│  ┌────────────────────────────────────────────────────┐   │
│  │  RITUALS & TRADITIONS                               │   │
│  │  [Monday standup] [Friday demo] [Quarterly offsite] │   │
│  └────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘
```

### Spatial Specifications

| Element           | Size                                           | Spacing                        |
| ----------------- | ---------------------------------------------- | ------------------------------ |
| Header bar        | Full width x 120px                             | Top of board                   |
| Value block       | 1400x600px (3-column) or 1050x600px (4-column) | 100px between blocks           |
| Value icon area   | 100x100px                                      | Centered at top of value block |
| Value title       | Full block width x 50px                        | Below icon                     |
| Behavior list     | Full block width - 40px padding                | Below title                    |
| Quote area        | Full block width x 80px                        | Bottom of value block          |
| Rituals bar       | Full width x 200px                             | Bottom of board                |
| Anti-values block | Same as value block                            | Distinct color (warning tint)  |

**Grid formula** for N values:

- 3 values: 3-column single row
- 4-5 values: 2x2 or 2x3 grid
- 6 values: 3x2 grid
- Board width: 4800px recommended

---

## Pattern 3: The Org Evolution (Timeline + Structure)

Combines a timeline (left-to-right) with organizational structure (top-to-bottom) to show how the team grows over time.

### When to Use

- Org growth plans
- Hiring roadmaps
- Team topology evolution
- Scaling strategy documents

### ASCII Diagram

```
                    NOW (Q1)         +6 MONTHS (Q3)      +12 MONTHS (Q1+1)
                  ┌───────────┐    ┌───────────────┐    ┌─────────────────┐
LEADERSHIP        │   CEO     │    │    CEO        │    │     CEO         │
                  │   CTO     │    │    CTO        │    │     CTO         │
                  │           │    │    VP Eng     │    │     VP Eng      │
                  │           │    │    VP Sales   │    │     VP Sales    │
                  │           │    │              │    │     VP Product  │
                  └───────────┘    └───────────────┘    └─────────────────┘
                  ┌───────────┐    ┌───────────────┐    ┌─────────────────┐
ENGINEERING       │ 4 eng     │    │ 8 eng         │    │ 15 eng          │
                  │ 1 team    │    │ 2 teams       │    │ 3 teams         │
                  │           │    │ + DevOps hire │    │ + Team leads    │
                  └───────────┘    └───────────────┘    └─────────────────┘
                  ┌───────────┐    ┌───────────────┐    ┌─────────────────┐
PRODUCT           │ 1 PM      │    │ 2 PM          │    │ 3 PM            │
                  │ 1 designer│    │ 2 designers   │    │ 3 designers     │
                  │           │    │ 1 researcher  │    │ 1 researcher    │
                  └───────────┘    └───────────────┘    └─────────────────┘
                  ┌───────────┐    ┌───────────────┐    ┌─────────────────┐
GTM (Sales/Mktg)  │ 2 sales   │    │ 5 sales       │    │ 10 sales        │
                  │ 1 mktg    │    │ 2 mktg        │    │ 4 mktg          │
                  │           │    │ 1 CS          │    │ 3 CS            │
                  └───────────┘    └───────────────┘    └─────────────────┘
                  ─────────────    ─────────────────    ───────────────────
TOTAL             │ 10 people │    │ 22 people     │    │ 42 people       │
HEADCOUNT         │ $1.2M/yr  │    │ $2.8M/yr      │    │ $5.5M/yr        │
```

### Spatial Specifications

| Element            | Size                      | Notes                             |
| ------------------ | ------------------------- | --------------------------------- |
| Time column        | 1200-1500px wide          | One per time period               |
| Department row     | Full width x 300-400px    | One per department                |
| Cell (time x dept) | Column width x row height | Contains headcount and roles      |
| Total bar          | Full width x 100px        | Bottom of board, headcount + cost |
| Column separator   | 2px dashed vertical line  | Between time periods              |
| Row separator      | 1px solid horizontal line | Between departments               |
| Hire badge         | 80x24px pill              | "NEW" badge on planned hires      |

**Time periods**: Typically 3-5 columns (Now, +3mo, +6mo, +12mo, +18mo)
**Departments**: Typically 4-6 rows (Leadership, Engineering, Product, GTM, Operations, Finance)

---

## Pattern 4: The Dashboard Update (Investor/Board Layout)

A structured dashboard layout that presents key metrics, narrative highlights, and asks in a format optimized for investor or board of directors consumption.

### When to Use

- Quarterly investor updates
- Board of directors reports
- Annual review presentations
- Fundraising narrative boards

### ASCII Diagram

```
┌────────────────────────────────────────────────────────────────┐
│  [Logo]  INVESTOR UPDATE — Q4 2025              [Confidential] │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  HEADLINE METRICS                                              │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐ │
│  │ ARR  │  │  MRR │  │ Users│  │ NRR  │  │ CAC  │  │Runway│ │
│  │$2.4M │  │$200K │  │ 12K  │  │ 115% │  │ $180 │  │18 mo │ │
│  │↑ 24% │  │↑ 8%  │  │↑ 15% │  │↑ 3%  │  │↓ 12% │  │      │ │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘ │
│                                                                │
│  ┌────────────────────────────┐ ┌────────────────────────────┐ │
│  │  WINS THIS QUARTER        │ │  CHALLENGES                │ │
│  │  • Closed 3 enterprise    │ │  • Churn increased to 5%   │ │
│  │  • Launched v2.0          │ │  • Engineering hire delayed│ │
│  │  • Strategic partnership  │ │  • Market headwind         │ │
│  └────────────────────────────┘ └────────────────────────────┘ │
│                                                                │
│  ┌────────────────────────────┐ ┌────────────────────────────┐ │
│  │  PRODUCT ROADMAP          │ │  TEAM & HIRING             │ │
│  │  Q1: Feature X            │ │  Current: 28 people        │ │
│  │  Q2: Platform expansion   │ │  Hiring: 5 roles open      │ │
│  │  Q3: Enterprise tier      │ │  Key hire: VP Engineering  │ │
│  └────────────────────────────┘ └────────────────────────────┘ │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  THE ASK                                                  │  │
│  │  • Introductions to [target customers]                    │  │
│  │  • Advice on enterprise sales hiring                      │  │
│  │  • Connection to [specific partner]                       │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
```

### Spatial Specifications

| Section                            | Size                            | Position                        |
| ---------------------------------- | ------------------------------- | ------------------------------- |
| Header bar                         | Full width x 100px              | Top of board                    |
| Metric cards                       | 600x250px each                  | Row below header, evenly spaced |
| Narrative blocks (Wins/Challenges) | (Board width - 150) / 2 x 400px | Side by side                    |
| Detail blocks (Roadmap/Team)       | (Board width - 150) / 2 x 350px | Side by side                    |
| Ask section                        | Full width - 100px x 250px      | Bottom of board                 |
| Confidentiality badge              | 150x30px                        | Top-right corner                |

**Board dimensions**: 4200x3000px (compact — investor attention is limited)
**Content density**: Medium — every word earns its place

---

## Pattern 5: The Hub and Spoke (Vision-Centered)

Central vision/mission with strategic pillars, values, and goals radiating outward. Creates a powerful visual hierarchy with the company's purpose at the center.

### When to Use

- Company vision boards (alternative to cascade)
- Mission-driven organizations
- Boards where "purpose" is the central message
- All-hands presentation boards

### ASCII Diagram

```
                    ┌───────────┐
                    │  MARKET   │
                    │  POSITION │
                    └─────┬─────┘
                          │
      ┌──────────┐  ┌─────┴─────┐  ┌──────────┐
      │  VALUE 1 │──│           │──│  VALUE 2 │
      │ Customer │  │  VISION   │  │ Quality  │
      │  First   │  │   &       │  │          │
      └──────────┘  │ MISSION   │  └──────────┘
                    │           │
      ┌──────────┐  │ "Our one  │  ┌──────────┐
      │ PILLAR 1 │──│  sentence │──│ PILLAR 2 │
      │ Product  │  │  vision"  │  │  Growth  │
      └──────────┘  │           │  └──────────┘
                    └─────┬─────┘
                          │
      ┌──────────┐        │        ┌──────────┐
      │ PILLAR 3 │────────┴────────│  TEAM    │
      │ Platform │                 │  CULTURE │
      └──────────┘                 └──────────┘
```

### Spatial Specifications

| Element                     | Size       | Position                  |
| --------------------------- | ---------- | ------------------------- |
| Central vision circle/block | 800x500px  | Exact center              |
| Spoke elements              | 500x300px  | 600-800px from center     |
| Connector lines             | Solid, 2px | Hub to each spoke         |
| Spoke labels                | 18px bold  | Centered in spoke element |

**Radial placement**: Same formula as technical hub-and-spoke. For 6 spokes at 700px radius, place at 0, 60, 120, 180, 240, 300 degrees.

---

## Pattern 6: The Before-After Split (Transformation View)

Two-panel layout showing current state on the left and desired future state on the right, connected by a transformation bridge in the center.

### When to Use

- Company transformation narratives
- Pre/post fundraising comparison
- Culture evolution boards
- Strategic pivot documentation

### ASCII Diagram

```
┌────────────────────┐ ┌──────────┐ ┌────────────────────┐
│  CURRENT STATE     │ │          │ │  FUTURE STATE      │
│  "Where we are"    │ │  BRIDGE  │ │  "Where we're going"│
│                    │ │          │ │                    │
│  Team: 15 people   │ │ Strategic│ │  Team: 50 people   │
│  ARR: $500K        │ │ Pillars  │ │  ARR: $5M          │
│  1 product         │ │          │ │  3 products        │
│  US market only    │ │ Key      │ │  US + EU markets   │
│  Manual processes  │ │ Initiatives│ │  Automated ops     │
│                    │ │          │ │                    │
│  [Current Org]     │ │ Timeline │ │  [Future Org]      │
│  [Current Metrics] │ │ 18 months│ │  [Target Metrics]  │
│                    │ │          │ │                    │
└────────────────────┘ └──────────┘ └────────────────────┘
```

### Spatial Specifications

| Panel         | Width        | Position   |
| ------------- | ------------ | ---------- |
| Current State | 40% of board | Left side  |
| Bridge        | 20% of board | Center     |
| Future State  | 40% of board | Right side |

**Board dimensions**: 5000x3000px
**Current state background**: Neutral gray (#F5F5F5)
**Bridge background**: Accent color tint
**Future state background**: Light brand color tint

---

## Pattern 7: The Quarterly Narrative (Time-Segmented)

A horizontal timeline layout where each quarter/period gets its own frame, showing progress as a left-to-right journey.

### When to Use

- Annual investor update compilations
- Year-in-review boards
- Progress tracking over multiple periods
- Fundraising narrative (seed → Series A → Series B)

### ASCII Diagram

```
┌───────────┐  ┌───────────┐  ┌───────────┐  ┌───────────┐
│    Q1     │  │    Q2     │  │    Q3     │  │    Q4     │
│           │  │           │  │           │  │           │
│ ARR: $1M  │  │ ARR: $1.5M│  │ ARR: $2M  │  │ ARR: $2.4M│
│ Team: 15  │  │ Team: 20  │  │ Team: 25  │  │ Team: 28  │
│           │  │           │  │           │  │           │
│ Wins:     │  │ Wins:     │  │ Wins:     │  │ Wins:     │
│ • Launch  │  │ • Partner │  │ • Enter   │  │ • Close   │
│   v2.0    │  │   signed  │  │   EU      │  │   Series B│
│           │  │           │  │           │  │           │
│ Challenge:│  │ Challenge:│  │ Challenge:│  │ Challenge:│
│ • Churn   │  │ • Hiring  │  │ • GDPR    │  │ • Market  │
└───────────┘  └───────────┘  └───────────┘  └───────────┘
     ──────▶        ──────▶        ──────▶
```

### Spatial Specifications

| Element        | Size                          | Notes              |
| -------------- | ----------------------------- | ------------------ |
| Quarter frame  | (Board width - 500) / 4       | Evenly distributed |
| Frame gap      | 80px                          | Between quarters   |
| Progress arrow | 80px, centered between frames | Connects quarters  |
| Metric banner  | Full frame width x 100px      | Top of each frame  |
| Narrative area | Full frame width x remaining  | Below metrics      |

---

## Cross-Cutting Layout Concerns

### Logo and Branding Placement

```
┌────────────────────────────────────────────┐
│ [Logo]  Board Title              [Badge]   │
│          Subtitle/date            [Status] │
├────────────────────────────────────────────┤
```

- Logo: Top-left, 100x100px maximum
- Title: Adjacent to logo, H1 font
- Badge: Top-right (Confidential, Draft, Version)

### Confidentiality Banner

For investor-facing boards, add a confidentiality banner:

```
┌────────────────────────────────────────────┐
│  ⚠ CONFIDENTIAL — For investor use only    │
│  Not for distribution without permission    │
└────────────────────────────────────────────┘
```

Size: Full width x 60px, position at very top
Color: Red tint background (#FFEBEE), red text (#C62828)

### Call-to-Action Placement

For boards with an "ask" (investor updates, fundraising):

```
Board Bottom:
┌────────────────────────────────────────────┐
│  THE ASK                                   │
│  • Specific request 1                      │
│  • Specific request 2                      │
│  • Specific request 3                      │
└────────────────────────────────────────────┘
```

Always place the ask at the **bottom** of the board — after the viewer has absorbed context and evidence.

---

## Metric Card Design

### Standard Metric Card Layout

```
┌───────────────────────┐
│  METRIC NAME          │  ← 12px, uppercase, secondary color
│  $2.4M                │  ← 36px, bold, primary color
│  ↑ 24% MoM           │  ← 14px, green if up, red if down
│  ▂▃▅▆▇ (sparkline)   │  ← Optional trend visualization
└───────────────────────┘
Size: 350x200px
```

### Metric Card Color Rules

| Trend                             | Arrow       | Color                  |
| --------------------------------- | ----------- | ---------------------- |
| Positive (revenue up, churn down) | Up arrow    | Green #2E7D32          |
| Negative (revenue down, churn up) | Down arrow  | Red #C62828            |
| Flat/neutral                      | Right arrow | Gray #546E7A           |
| Target achieved                   | Checkmark   | Green with bold border |
| Target missed                     | X mark      | Red with highlight     |

---

## Alignment and Grid System

### Base Grid

Use a 100px grid for company building boards (vs. 50px for technical boards). The larger grid reflects the lower element density and the need for visual breathing room.

### Alignment Rules

1. All section frames align to the grid
2. Metric cards are evenly distributed within their row
3. Text blocks use consistent left padding (30px within frames)
4. Headers are consistently positioned (top-center or top-left of frame)
5. Logos and branding elements align to the top-left corner

### Whitespace Rules

- Minimum 80px between section frames
- Minimum 40px between elements within a frame
- 30% whitespace target (company boards should feel spacious, not dense)
- Use whitespace strategically to draw attention to key messages

---

## Summary

Company building boards follow narrative patterns that guide the viewer from purpose to strategy to execution to results. The right pattern depends on the board's primary purpose: cascades for strategy, grids for culture, timelines for growth, dashboards for updates, hub-and-spoke for vision, splits for transformation, and time segments for progress. Always maintain generous whitespace, brand alignment, and a clear narrative thread that answers: who we are, where we are going, and how we are getting there.
