# Prioritization Matrix Board

## Overview

- **Purpose**: Objectively evaluate and rank competing feature requests, projects, or initiatives using a visual 2x2 Impact vs Effort matrix and a structured RICE scoring table. Helps product teams move beyond gut feelings and HiPPO (Highest Paid Person's Opinion) decisions to data-informed prioritization.
- **Best For**: Product managers during quarterly planning, leadership teams evaluating investment options, and engineering leads negotiating scope trade-offs.
- **Complexity**: Simple
- **Board Size**: 4000x2800px

## Color Scheme

| Role       | Color          | Hex     |
| ---------- | -------------- | ------- |
| Primary    | Deep Purple    | #6200EA |
| Secondary  | Teal           | #00897B |
| Accent     | Amber          | #FF8F00 |
| Background | Light Lavender | #F5F0FF |
| Text       | Graphite       | #263238 |

## Board Layout

Two main sections: a large 2x2 matrix on the left, and a RICE scoring table on the right. A legend and summary panel sits at the bottom.

```
+--------------------------------------------------------------+
|  PRIORITIZATION MATRIX — Q2 2026 Feature Candidates          |
|                                                              |
|  +---------------------------+  +---------------------------+|
|  |                           |  |                           ||
|  |   2x2 Impact vs Effort   |  |   RICE Scoring Table      ||
|  |   Matrix                  |  |                           ||
|  |                           |  |                           ||
|  +---------------------------+  +---------------------------+|
|                                                              |
|  +------------------------------------------------------+   |
|  | Priority Summary & Decisions                          |   |
|  +------------------------------------------------------+   |
+--------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Board Header

- **Position**: top full-width
- **Size**: 3900x200px
- **Background**: #6200EA
- **Elements**:
  - Text block: "Prioritization Matrix — Q2 2026 Feature Candidates" (font size 36, bold, #FFFFFF)
  - Text block: "Use this board to evaluate and rank 12 feature candidates for the next quarter. Updated: March 6, 2026 | Owner: Jake Reynolds (PM)" (font size 14, #D1C4E9)

### Frame 2: 2x2 Impact vs Effort Matrix

- **Position**: left
- **Size**: 2000x1800px
- **Background**: #FFFFFF with #6200EA border (2px)
- **Elements**:
  - Text block: "Impact vs Effort Matrix" (font size 28, bold, #263238)
  - Shape (horizontal line, #263238, 2px): X-axis at vertical center
  - Shape (vertical line, #263238, 2px): Y-axis at horizontal center
  - Text block: "LOW EFFORT" (font size 14, bold, #607D8B) — left side of X-axis
  - Text block: "HIGH EFFORT" (font size 14, bold, #607D8B) — right side of X-axis
  - Text block: "HIGH IMPACT" (font size 14, bold, #607D8B) — top of Y-axis
  - Text block: "LOW IMPACT" (font size 14, bold, #607D8B) — bottom of Y-axis
  - Shape (rectangle background, #E8F5E9, quadrant top-left): Label "QUICK WINS — Do First"
  - Shape (rectangle background, #E3F2FD, quadrant top-right): Label "MAJOR PROJECTS — Plan Carefully"
  - Shape (rectangle background, #FFF8E1, quadrant bottom-left): Label "FILL-INS — Do If Time Allows"
  - Shape (rectangle background, #FFEBEE, quadrant bottom-right): Label "AVOID — Deprioritize"
  - **Plotted Items (sticky notes positioned in quadrants):**
  - **Quick Wins (High Impact, Low Effort):**
    - Sticky note (green #A5D6A7, 180x80): "Smart Notifications — 2 weeks, high user demand"
    - Sticky note (green #A5D6A7, 180x80): "Kanban WIP Limits — 1 week, reduces bottlenecks"
    - Sticky note (green #A5D6A7, 180x80): "Sprint Goal Field — 3 days, improves focus"
  - **Major Projects (High Impact, High Effort):**
    - Sticky note (blue #90CAF9, 180x80): "AI Task Routing — 6 weeks, core differentiator"
    - Sticky note (blue #90CAF9, 180x80): "Time Tracking — 5 weeks, top customer request"
    - Sticky note (blue #90CAF9, 180x80): "Timeline/Gantt View — 6 weeks, enterprise need"
  - **Fill-Ins (Low Impact, Low Effort):**
    - Sticky note (amber #FFE082, 180x80): "Card Aging Indicators — 2 days, nice visual"
    - Sticky note (amber #FFE082, 180x80): "Dark Mode — 1 week, frequent request"
    - Sticky note (amber #FFE082, 180x80): "Emoji Reactions on Tasks — 2 days, engagement"
  - **Avoid (Low Impact, High Effort):**
    - Sticky note (red #EF9A9A, 180x80): "White-Label Option — 8 weeks, niche use case"
    - Sticky note (red #EF9A9A, 180x80): "Built-In Video Chat — 10 weeks, competitive space"
    - Sticky note (red #EF9A9A, 180x80): "Offline Mode — 6 weeks, low usage signal"

### Frame 3: RICE Scoring Table

- **Position**: right
- **Size**: 1800x1800px
- **Background**: #FFFFFF with #00897B left border (6px)
- **Elements**:
  - Text block: "RICE Scoring" (font size 28, bold, #263238)
  - Text block: "RICE = (Reach x Impact x Confidence) / Effort" (font size 16, bold, #00897B)
  - Text block: "Scoring Guide:" (font size 14, bold, #607D8B)
  - Text block: "Reach: # of users affected per quarter (estimate). Impact: 3 = massive, 2 = high, 1 = medium, 0.5 = low, 0.25 = minimal. Confidence: 100% = data-backed, 80% = strong signal, 50% = hunch. Effort: person-weeks." (font size 13, #607D8B)
  - Shape (table, 1650x1200):
    - Header: "Feature | Reach | Impact | Confidence | Effort | RICE Score | Rank"
    - Row: "AI Task Routing | 8,000 | 3 | 80% | 12 | 1,600 | 1"
    - Row: "Smart Notifications | 12,000 | 2 | 90% | 4 | 5,400 | 2 (adjusted: quick win)"
    - Row: "Time Tracking | 6,000 | 2 | 80% | 10 | 960 | 3"
    - Row: "Kanban WIP Limits | 10,000 | 1 | 90% | 2 | 4,500 | 4 (adjusted: quick win)"
    - Row: "Timeline/Gantt View | 4,000 | 2 | 70% | 12 | 467 | 5"
    - Row: "Sprint Goal Field | 8,000 | 1 | 90% | 0.5 | 14,400 | 6 (adjusted: tiny effort)"
    - Row: "Dark Mode | 15,000 | 0.5 | 80% | 2 | 3,000 | 7"
    - Row: "Card Aging Indicators | 10,000 | 0.5 | 70% | 0.5 | 7,000 | 8 (fill-in)"
    - Row: "Emoji Reactions | 12,000 | 0.25 | 60% | 0.5 | 3,600 | 9 (fill-in)"
    - Row: "White-Label Option | 200 | 2 | 40% | 16 | 10 | 10"
    - Row: "Built-In Video Chat | 3,000 | 1 | 30% | 20 | 45 | 11"
    - Row: "Offline Mode | 1,500 | 1 | 50% | 12 | 63 | 12"
  - Sticky note (teal #B2DFDB, 700x100): "Note: RICE scores are a starting point for discussion, not a final answer. Adjust rankings based on strategic alignment and dependencies."

### Frame 4: Priority Summary & Decisions

- **Position**: full-width bottom
- **Size**: 3900x600px
- **Background**: #F5F0FF with #6200EA top border (4px)
- **Elements**:
  - Text block: "Priority Summary — Q2 2026" (font size 28, bold, #263238)
  - Text block: "Tier 1: Commit (must ship this quarter)" (font size 20, bold, #00897B)
  - Sticky note (green #C8E6C9, 350x80): "AI Task Routing (RICE #1, core differentiator)"
  - Sticky note (green #C8E6C9, 350x80): "Smart Notifications (RICE #2, quick win)"
  - Sticky note (green #C8E6C9, 350x80): "Kanban WIP Limits (RICE #4, quick win)"
  - Sticky note (green #C8E6C9, 350x80): "Sprint Goal Field (RICE #6, 3-day effort)"
  - Text block: "Tier 2: Target (ship if capacity allows)" (font size 20, bold, #FF8F00)
  - Sticky note (amber #FFE082, 350x80): "Time Tracking (RICE #3, start design this quarter)"
  - Sticky note (amber #FFE082, 350x80): "Timeline/Gantt View (RICE #5, start scoping)"
  - Sticky note (amber #FFE082, 350x80): "Dark Mode (RICE #7, community request)"
  - Text block: "Tier 3: Deprioritize (not this quarter)" (font size 20, bold, #D32F2F)
  - Sticky note (red #EF9A9A, 350x80): "White-Label, Video Chat, Offline Mode — low RICE, high effort, no strategic alignment"
  - Text block: "Fill-Ins: Card Aging, Emoji Reactions — assign to engineers who finish sprint early" (font size 14, #607D8B)
  - Text block: "Decision made: March 6, 2026 | Approved by: Jake R. (PM), Marcus W. (Eng Lead), David K. (VP Product)" (font size 14, #607D8B)

## Connectors & Flow

- Dashed arrow from each item in the 2x2 matrix to its corresponding row in the RICE table (dashed, #BDBDBD, 1px) — showing that matrix placement aligns with scoring
- Solid arrow from RICE table to Priority Summary (solid, #6200EA, 2px) — labeled "Scores inform decisions"
- No flow between quadrants — the matrix is a snapshot, not a process

## Example Content

The board evaluates 12 realistic feature candidates for the fictional AutoPilot product. Each item is plotted on the 2x2 matrix by impact and effort, and scored using RICE with specific numbers. The Priority Summary translates scores into three actionable tiers with clear commitments. Every RICE input (reach, impact, confidence, effort) uses realistic estimates that trace to a plausible SaaS product context.

## Variations

1. **Value vs Complexity Matrix**: Replace Impact/Effort with Customer Value/Technical Complexity. Better for customer-facing product decisions.
2. **MoSCoW Prioritization**: Replace the 2x2 and RICE with four columns: Must Have, Should Have, Could Have, Will Not Have. Simpler for stakeholder workshops.
3. **Weighted Scoring Model**: Expand RICE to include additional criteria: Strategic Alignment (weight 30%), Revenue Impact (25%), Customer Demand (20%), Effort Inverse (15%), Risk (10%). Build a weighted scorecard table.

## Build Instructions

1. Create board at 4000x2800px with background #F5F0FF.
2. Place Frame 1 (Header) at (50, 50), size 3900x200, background #6200EA.
3. Place Frame 2 (2x2 Matrix) at (50, 300), size 2000x1800.
4. Place Frame 3 (RICE Table) at (2100, 300), size 1800x1800.
5. Place Frame 4 (Priority Summary) at (50, 2150), size 3900x600.
6. In Frame 2: Draw the X and Y axes as perpendicular lines. Color-code the four quadrants with light background fills. Add axis labels. Place sticky notes in appropriate quadrants.
7. In Frame 3: Build the RICE table with calculated scores. Sort by rank. Add the scoring guide text above the table.
8. In Frame 4: Create three tier groupings with colored sticky notes. Add decision metadata.
9. Draw dashed connectors between matrix items and table rows.
10. Draw solid arrow from table to summary.

## Tips & Best Practices

- Run this exercise at the start of every quarter with PM, engineering lead, and design lead present. Decisions should not be made in isolation.
- Be honest about Confidence scores in RICE. A feature with 50% confidence and high impact should not outrank a feature with 90% confidence and medium impact — you might be wrong about the high-impact one.
- The 2x2 matrix is great for visual communication in leadership meetings. The RICE table is better for detailed team discussions.
- Revisit mid-quarter if new information changes assumptions (e.g., a competitor launches a similar feature, a large customer makes a specific request).
- Archive previous quarter's boards — they create a useful record of decision-making rationale for future reference.
