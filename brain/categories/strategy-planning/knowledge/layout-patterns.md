# Strategy & Planning — Layout Patterns

## Overview

Strategy boards are framework-driven. Unlike creative boards where layout emerges from content, strategy boards use predefined structures that enforce analytical rigor. Each layout pattern maps to a specific strategic framework, ensuring that the visual structure itself guides strategic thinking.

---

## Pattern 1: Four-Quadrant Matrix (SWOT, Priority Matrix, Risk Matrix)

The most iconic strategy layout. Four equal quadrants divided by two perpendicular axes, each representing a dimension of analysis.

### When to Use

- SWOT Analysis (Strengths/Weaknesses/Opportunities/Threats)
- Eisenhower Matrix (Urgent/Important prioritization)
- Risk Assessment (Probability/Impact)
- BCG Matrix (Growth/Market Share)
- 2x2 competitive positioning

### ASCII Diagram

```
┌──────────────────────────────────────────────────┐
│               [BOARD TITLE & CONTEXT]             │
├────────────────────────┬─────────────────────────┤
│                        │                          │
│  QUADRANT 1            │  QUADRANT 2              │
│  (e.g., Strengths)     │  (e.g., Weaknesses)      │
│                        │                          │
│  ┌────┐ ┌────┐ ┌────┐ │  ┌────┐ ┌────┐          │
│  │Item│ │Item│ │Item│ │  │Item│ │Item│          │
│  └────┘ └────┘ └────┘ │  └────┘ └────┘          │
│  ┌────┐ ┌────┐        │  ┌────┐                  │
│  │Item│ │Item│        │  │Item│                  │
│  └────┘ └────┘        │  └────┘                  │
│                        │                          │
├────────────────────────┼─────────────────────────┤
│                        │                          │
│  QUADRANT 3            │  QUADRANT 4              │
│  (e.g., Opportunities) │  (e.g., Threats)         │
│                        │                          │
│  ┌────┐ ┌────┐        │  ┌────┐ ┌────┐ ┌────┐   │
│  │Item│ │Item│        │  │Item│ │Item│ │Item│   │
│  └────┘ └────┘        │  └────┘ └────┘ └────┘   │
│  ┌────┐ ┌────┐ ┌────┐ │  ┌────┐                  │
│  │Item│ │Item│ │Item│ │  │Item│                  │
│  └────┘ └────┘ └────┘ │  └────┘                  │
│                        │                          │
├────────────────────────┴─────────────────────────┤
│  [IMPLICATIONS / STRATEGIC ACTIONS ZONE]          │
└──────────────────────────────────────────────────┘
```

### Spatial Rules

**Board Dimensions**: 5000-7000px wide, 5000-7000px tall (square or near-square)

**Board Header**: Full width, 120-160px tall. Contains title, date, company name.

**Quadrant Grid**:

- Each quadrant: (Board width - padding) / 2 wide, (Board height - header - footer) / 2 tall
- Divider: 4-6px lines at the center cross, in neutral gray
- Axis labels at the cross: "INTERNAL" / "EXTERNAL" on vertical, "POSITIVE" / "NEGATIVE" on horizontal
- Each quadrant has its own background tint (5-10% opacity of quadrant color)

**Quadrant Headers**:

- Position: Top-left corner of each quadrant
- Font: Bold, 22-26px, quadrant color
- Icon/emoji prefix optional

**Items Within Quadrants**:

- Sticky notes or cards, 200x150px each
- Arranged in a grid (3-4 columns, 2-4 rows)
- Gaps: 20-30px between items
- Items sorted by priority (highest top-left, lowest bottom-right)

**Implications Zone**: Full width, 250-400px tall at the bottom. Contains strategic actions derived from the analysis.

### SWOT-Specific Color Mapping

| Quadrant      | Position     | Color      | Hex     | Emotional Tone      |
| ------------- | ------------ | ---------- | ------- | ------------------- |
| Strengths     | Top-Left     | Blue/Green | #1565C0 | Positive, confident |
| Weaknesses    | Top-Right    | Red/Orange | #E65100 | Cautionary, honest  |
| Opportunities | Bottom-Left  | Green/Teal | #2E7D32 | Optimistic, forward |
| Threats       | Bottom-Right | Red/Dark   | #B71C1C | Serious, watchful   |

---

## Pattern 2: Nine-Block Canvas (Business Model Canvas)

A structured grid of nine blocks arranged in a specific layout that maps the components of a business model. The layout is NOT a simple 3x3 grid — it follows Osterwalder's precise arrangement.

### When to Use

- Business Model Canvas
- Lean Canvas (startup variation)
- Value Proposition Canvas (zoomed into two BMC blocks)
- Any framework with 6-12 distinct but interconnected categories

### ASCII Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                    BUSINESS MODEL CANVAS                      │
│                    [Company Name] — [Date]                    │
├──────────┬──────────┬──────────┬──────────┬─────────────────┤
│          │          │          │          │                  │
│ KEY      │ KEY      │ VALUE    │ CUSTOMER │  CUSTOMER       │
│ PARTNERS │ ACTIVITIES│ PROP.   │ RELATIONS│  SEGMENTS       │
│          │          │          │          │                  │
│          ├──────────┤          ├──────────┤                  │
│          │          │          │          │                  │
│          │ KEY      │          │ CHANNELS │                  │
│          │ RESOURCES│          │          │                  │
│          │          │          │          │                  │
├──────────┴──────────┴────┬─────┴──────────┴─────────────────┤
│                          │                                   │
│    COST STRUCTURE        │     REVENUE STREAMS              │
│                          │                                   │
└──────────────────────────┴───────────────────────────────────┘
```

### Spatial Rules

**Board Dimensions**: 8000-10000px wide, 5000-7000px tall

**Canvas Grid (BMC specific)**:

- Left column (Partners): 20% width
- Left-center column (Activities + Resources, stacked): 20% width
- Center column (Value Prop): 20% width
- Right-center column (Relations + Channels, stacked): 20% width
- Right column (Segments): 20% width
- Bottom left (Cost Structure): 50% width, 25% height
- Bottom right (Revenue Streams): 50% width, 25% height

**Block Headers**:

- Position: Top of each block
- Font: Bold, 18-22px, block color
- Background: Very subtle tint of block color
- All caps or Title Case

**Items Within Blocks**:

- Sticky notes: 180x120px
- One concept per sticky
- Arranged vertically within the block
- Connected stickies in different blocks linked with dashed lines

---

## Pattern 3: Hierarchical Cascade (OKR Tree, Goal Hierarchy)

A top-down tree structure where high-level objectives cascade into progressively more specific goals and key results. Each level is wider than the one above, creating a pyramid or waterfall shape.

### When to Use

- OKR Planning (Objectives and Key Results)
- Goal cascading (Company, Department, Team, Individual)
- Strategic priority decomposition
- Mission-Vision-Goals-Initiatives hierarchies

### ASCII Diagram

```
                    ┌─────────────────────┐
                    │   COMPANY MISSION    │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                 │
     ┌────────┴────────┐ ┌────┴────┐ ┌─────────┴────────┐
     │  OBJECTIVE 1     │ │  OBJ 2  │ │  OBJECTIVE 3      │
     └────────┬────────┘ └────┬────┘ └─────────┬────────┘
              │               │                 │
     ┌────┬───┴───┬────┐    ┌┴┐         ┌──┬───┴──┬──┐
     │    │       │    │    │ │         │  │      │  │
    KR1  KR2    KR3  KR4  KR1 KR2    KR1 KR2   KR3 KR4
     │                                         │
    ┌┴──────┐                                 ┌┴──────┐
    │INIT.1 │                                 │INIT.1 │
    │INIT.2 │                                 │INIT.2 │
    └───────┘                                 └───────┘
```

### Spatial Rules

**Board Dimensions**: 8000-12000px wide, 4000-6000px tall

**Level Hierarchy**:

| Level | Element        | Width | Height | Font           | Color           |
| ----- | -------------- | ----- | ------ | -------------- | --------------- |
| 0     | Mission/Vision | 600px | 200px  | 28px bold      | Primary dark    |
| 1     | Objectives     | 400px | 150px  | 20px semi-bold | Primary color   |
| 2     | Key Results    | 300px | 120px  | 16px medium    | Secondary color |
| 3     | Initiatives    | 250px | 100px  | 14px regular   | Tertiary color  |

**Vertical Spacing**: 200-350px between levels
**Horizontal Spacing**: 100-200px between siblings at same level
**Connectors**: Solid, 3px from parent bottom-center to child top-center

**Alignment Rules**:

- Each level is horizontally centered relative to its parent
- If children overflow the parent's width, the parent should have enough spacing to contain them
- The entire tree is centered on the board

---

## Pattern 4: Competitive Positioning Map (2-Axis Scatter)

A scatter plot where competitors are positioned on two strategic axes. This pattern reveals market gaps, competitive clusters, and strategic positioning opportunities.

### When to Use

- Competitive analysis and positioning
- Market segment mapping
- Product-market fit visualization
- Technology adoption mapping
- Price-value positioning

### ASCII Diagram

```
       HIGH
        │
        │    ● Comp A        ● Comp B
        │
  AXIS  │              ★ US
  Y     │    ● Comp C
        │                         ● Comp D
        │
        │         ● Comp E
        │
       LOW ──────────────────────────────── HIGH
                        AXIS X

★ = Our position    ● = Competitors
Dotted circle = market gap (opportunity)
```

### Spatial Rules

**Board Dimensions**: 5000-7000px wide, 5000-7000px tall

**Chart Area**: Centered, occupying 70-80% of board space
**Axes**: 4px lines, dark gray, with arrow heads at the high end
**Axis Labels**: Bold, 18-20px, at each end of each axis
**Grid Lines**: Dashed, 1px, light gray, dividing each axis into 4-5 segments
**Quadrant Labels**: Large, semi-transparent text naming each quadrant's strategic meaning

**Competitor Dots**:

- Shape: Circle, 40-60px diameter
- Color: Red for direct competitors, gray for indirect
- Label: Company name below or beside the dot
- Size variation: Circle diameter proportional to market share or revenue

**Our Position**:

- Shape: Star or distinctive marker, 60-80px
- Color: Primary brand color, bold
- Label: "US" or company name, larger font than competitors

**Market Gap Zones**:

- Dashed circle or highlighted region
- Label: "OPPORTUNITY" with brief description
- Subtle background fill (accent color at 10%)

---

## Pattern 5: Vision-to-Execution Bridge

A horizontal flow from left (aspirational) to right (actionable), connecting high-level vision through strategic pillars to concrete initiatives and metrics. This pattern bridges the common gap between "strategy deck" and "to-do list."

### When to Use

- Strategic planning sessions
- Annual/quarterly planning
- Vision board to roadmap translation
- Strategy communication to teams

### ASCII Diagram

```
┌──────────┬──────────────┬───────────────┬──────────────┬──────────┐
│          │              │               │              │          │
│  VISION  │  STRATEGIC   │  INITIATIVES  │   METRICS    │  TIME-   │
│  &       │  PILLARS     │  & PROJECTS   │   & KPIs     │  LINE    │
│  MISSION │              │               │              │          │
│          │  ┌────────┐  │  ┌─────────┐  │  ┌────────┐  │  Q1 ─── │
│ ┌──────┐ │  │Pillar 1│──│──│Project A│──│──│KPI: +20%│  │  Q2 ─── │
│ │Vision│ │  └────────┘  │  ├─────────┤  │  └────────┘  │  Q3 ─── │
│ │State-│ │  ┌────────┐  │  │Project B│  │  ┌────────┐  │  Q4 ─── │
│ │ment  │ │  │Pillar 2│──│──├─────────┤──│──│KPI: -15%│  │         │
│ └──────┘ │  └────────┘  │  │Project C│  │  └────────┘  │         │
│          │  ┌────────┐  │  └─────────┘  │  ┌────────┐  │         │
│ ┌──────┐ │  │Pillar 3│──│──┌─────────┐──│──│KPI: 95%│  │         │
│ │Values│ │  └────────┘  │  │Project D│  │  └────────┘  │         │
│ └──────┘ │              │  └─────────┘  │              │         │
│          │              │               │              │         │
└──────────┴──────────────┴───────────────┴──────────────┴──────────┘

  WHY            WHAT            HOW            MEASURE         WHEN
```

### Spatial Rules

**Board Dimensions**: 10000-14000px wide, 4000-6000px tall

**Five Columns** (left to right):

1. Vision & Mission: 15% width, aspirational content
2. Strategic Pillars: 20% width, 3-5 major strategic themes
3. Initiatives: 25% width, specific projects and programs
4. Metrics & KPIs: 20% width, measurable targets
5. Timeline: 20% width, quarterly or monthly milestones

**Horizontal Connectors**: Solid arrows flowing left to right, showing how each pillar connects to specific initiatives, which connect to specific metrics.

**Column Headers**: Full width of each column, 80px tall, bold, with a descriptive subtitle ("WHY," "WHAT," "HOW," "MEASURE," "WHEN")

**Visual Gradient**: Columns transition from cool/deep colors (left, aspirational) to warm/active colors (right, executable). This visual temperature change mirrors the shift from abstract to concrete.

---

## Universal Layout Principles for Strategy Boards

### Framework Labeling

Every strategy board should clearly identify which framework it uses:

- Framework name in the board header or subtitle
- Section labels matching the framework's standard terminology
- Brief framework description for viewers unfamiliar with the model

### Cross-Section Connections

Strategy frameworks are most powerful when sections interact:

- SWOT: Strengths that can exploit Opportunities, Weaknesses that amplify Threats
- BMC: How Value Propositions connect to Customer Segments through Channels
- OKR: How Key Results ladder up to Objectives

Visual connections (arrows, dotted lines) between sections are the most valuable — and most often missing — element of strategy boards.

### Implications Zone

Every strategy board should include a "So What?" section:

- Position: Bottom of the board or right edge
- Content: 3-5 strategic implications or recommended actions
- Visual treatment: Distinct background color, larger text, bordered
- This section bridges analysis to decision-making

### Evidence Annotations

Strategy items should include supporting evidence:

- Data points: "Market growing at 23% CAGR (Source: Gartner 2026)"
- Confidence level: Border style indicates certainty (solid = confirmed, dashed = estimated)
- Source reference: Small text attribution below items

### Scoring and Prioritization

When frameworks require scoring (risk matrix, priority matrix):

- Use a consistent scale (1-5 or Low/Medium/High)
- Show scores visually (filled dots, star ratings, progress bars)
- Sort items within sections by score (highest priority first)

---

## Choosing the Right Pattern

```
What strategic question are you answering?

├── "What are our internal and external factors?"
│   └── Pattern 1: Four-Quadrant (SWOT)
│
├── "How does our business model work?"
│   └── Pattern 2: Nine-Block Canvas (BMC)
│
├── "What are our goals and how do they cascade?"
│   └── Pattern 3: Hierarchical Cascade (OKR)
│
├── "Where do we sit relative to competitors?"
│   └── Pattern 4: Positioning Map
│
└── "How does our vision translate to action?"
    └── Pattern 5: Vision-to-Execution Bridge
```

### Pattern Compatibility Matrix

| Strategic Need           | Best Pattern         | Good Alternative     |
| ------------------------ | -------------------- | -------------------- |
| Situation assessment     | Four-Quadrant        | Positioning Map      |
| Business model design    | Nine-Block Canvas    | Vision-to-Execution  |
| Goal setting             | Hierarchical Cascade | Vision-to-Execution  |
| Competitive intelligence | Positioning Map      | Four-Quadrant        |
| Strategic communication  | Vision-to-Execution  | Hierarchical Cascade |
| Risk assessment          | Four-Quadrant        | Positioning Map      |
| Annual planning          | Vision-to-Execution  | Hierarchical Cascade |
