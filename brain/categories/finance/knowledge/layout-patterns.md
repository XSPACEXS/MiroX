# Layout Patterns — Finance Boards

## Overview

Finance boards demand a unique balance: they must be data-dense without being overwhelming, precise without being sterile, and structured without being rigid. The layout must serve rapid scanning (executive use) and deep analysis (finance team use) simultaneously. This guide covers four core layout patterns with ASCII diagrams, dimensions, and spacing rules.

---

## Pattern 1: The Dashboard Grid (Financial Dashboard)

A structured grid of KPI cards, charts, and summary panels arranged for maximum scannability. The layout reads like a newspaper front page — headline numbers dominate, supporting detail fills the grid.

### Structure

```
+------------------------------------------------------------------+
|                    HEADER: Financial Dashboard                     |
|  Company | Period | Last Updated | Status: On Track / At Risk     |
+------------------------------------------------------------------+
|                                                                    |
|  +---KPI-1---+  +---KPI-2---+  +---KPI-3---+  +---KPI-4---+     |
|  | Revenue   |  | Expenses  |  | EBITDA    |  | Cash       |     |
|  | $38.2M    |  | $24.5M    |  | $5.7M     |  | $12.1M     |     |
|  | +8.3% YoY |  | +15.6%    |  | +2.1%     |  | -$1.2M MoM |     |
|  +-----------+  +-----------+  +-----------+  +-----------+      |
|                                                                    |
|  +------------------------+  +----------------------------------+ |
|  |  Revenue Trend         |  |  Expense Breakdown               | |
|  |  (12-month line chart) |  |  (Stacked bar or pie)            | |
|  |                        |  |                                  | |
|  |  ~~~~~~~~~/            |  |  [Eng 40%] [S&M 25%] [Prod 13%] | |
|  +------------------------+  +----------------------------------+ |
|                                                                    |
|  +------------------------+  +----------------------------------+ |
|  |  Cash Flow Waterfall   |  |  Key Alerts & Actions            | |
|  |  (Waterfall chart)     |  |  ! S&M 21% over budget           | |
|  |                        |  |  ! Cash runway: 8 months          | |
|  |  [+]  [-]  [-]  [=]   |  |  > Reforecast Q3 by March 15     | |
|  +------------------------+  +----------------------------------+ |
|                                                                    |
+------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element              | Width       | Height | Notes                         |
| -------------------- | ----------- | ------ | ----------------------------- |
| Total board          | 4800px      | 3200px | Landscape, 3:2 ratio          |
| Header               | 4700px      | 200px  | Full width, navy background   |
| KPI cards            | 1050px each | 300px  | 4 cards in a row, equal width |
| Chart panels (row 2) | 2250px each | 800px  | 2-column, equal split         |
| Chart panels (row 3) | 2250px each | 700px  | 2-column, equal split         |
| Margin               | 50px        | —      | All sides                     |

### Spacing Rules

- **Between KPI cards**: 30px horizontal gap
- **Between rows**: 40px vertical gap
- **Header to KPI row**: 30px
- **Internal card padding**: 20px all sides
- **Chart panel internal margin**: 25px

### Key Layout Principles

1. **KPI row dominates the top** — these 4 numbers are the first thing the eye sees. They should consume 20% of the board height.
2. **2-column grid below** — left column for trend/time-series data, right column for composition/breakdown data. This creates a natural "how is it trending?" (left) vs. "where is the money going?" (right) reading pattern.
3. **Alerts in the bottom-right** — the action items live where the eye ends its scan path (Z-pattern reading). By the time the viewer reaches them, they have the context to understand why.
4. **Color-coded KPI cards** — each card's top border (4px) reflects its health: green for on-target, amber for warning, red for off-target.

---

## Pattern 2: The Allocation Map (Budget Planning)

A hierarchical layout showing how a total budget decomposes into departments, then into line items. The layout mirrors the mental model of "whole → parts → details."

### Structure

```
+------------------------------------------------------------------+
|                    HEADER: FY2026 Budget Plan                     |
+---------------------+---------------------+----------------------+
|                     |                     |                      |
|  BUDGET SUMMARY     |  DEPARTMENT         |  ALLOCATION          |
|  & KPIs             |  BREAKDOWN TABLE    |  VISUAL              |
|                     |                     |  (Pie/Treemap)       |
|  Total: $24.5M      |  Eng: $9.8M (+17%) |                      |
|  vs FY25: +15.6%    |  S&M: $6.2M (+22%) |  [Eng 40%]           |
|  Headcount: 187     |  Prod: $3.1M (+11%) |  [S&M 25%]          |
|                     |  CS: $2.3M (+21%)   |  [Prod 13%]         |
|                     |  G&A: $2.2M (+5%)   |                      |
|                     |  IT: $900K (flat)    |                      |
+---------------------+---------------------+----------------------+
|                     |                     |                      |
|  VARIANCE           |  MONTHLY CASH       |  ASSUMPTIONS         |
|  TRACKING           |  FLOW FORECAST      |  & RISKS             |
|                     |                     |                      |
|  [Budget vs Actual  |  [12-month bar      |  - 15% QoQ growth    |
|   by department]    |   chart: inflows    |  - 3-mo hire time    |
|                     |   vs outflows]      |  - EUR 1.08/USD      |
|                     |                     |                      |
+---------------------+---------------------+----------------------+
|                                                                  |
|  APPROVAL WORKFLOW: [Draft] → [Review] → [VP Sign-off] → [CFO]  |
|                                                                  |
+------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element            | Width       | Height | Notes                 |
| ------------------ | ----------- | ------ | --------------------- |
| Total board        | 4800px      | 3200px | Standard finance size |
| Header             | 4700px      | 200px  | Full width            |
| Grid cells (row 1) | 1500px each | 1200px | 3 equal columns       |
| Grid cells (row 2) | 1500px each | 1000px | 3 equal columns       |
| Bottom workflow    | 4700px      | 250px  | Full width strip      |

### Spacing Rules

- **Between grid cells**: 25px (horizontal and vertical)
- **Header to grid**: 25px
- **Grid to workflow strip**: 30px
- **Internal cell padding**: 20px all sides
- **Table row spacing**: 8px within department breakdown

### Key Layout Principles

1. **Top-left = the headline** — the budget summary with the single most important number (total budget) should be top-left, where the eye starts its scan.
2. **Top-center = the detail** — department breakdown provides the supporting data the executive needs after seeing the headline.
3. **Top-right = the visual** — a pie chart or treemap provides instant visual comparison of allocations. This is the "at a glance" version of the table.
4. **Bottom row = analysis layer** — variance tracking, cash flow, and assumptions provide the analytical depth that the finance team needs.
5. **Workflow strip = process layer** — shows where the budget is in the approval process. Uses status badges (Draft, Review, Approved) with color coding.

---

## Pattern 3: The Comparison Matrix (Investment Analysis)

A side-by-side layout that enables direct comparison of 2-4 investment options across multiple evaluation criteria. The layout is designed for structured decision-making.

### Structure

```
+------------------------------------------------------------------+
|                HEADER: Investment Analysis                         |
+------------------------------------------------------------------+
|                                                                    |
|  INVESTMENT THESIS    (full-width context banner)                 |
|  "Evaluating 3 acquisition targets for market expansion into      |
|   Southeast Asia. Decision deadline: April 15, 2026."             |
|                                                                    |
+----------+-----------+-----------+-----------+---+                |
| CRITERIA | OPTION A  | OPTION B  | OPTION C  |WIN|               |
+----------+-----------+-----------+-----------+---+                |
| Revenue  | $12M ARR  | $8M ARR   | $18M ARR  | C |               |
| Growth   | 35% YoY   | 55% YoY   | 15% YoY   | B |               |
| Price    | $48M      | $35M      | $72M      | B |               |
| Multiple | 4.0x ARR  | 4.4x ARR  | 4.0x ARR  | A=C|              |
| Team     | 45 people | 28 people | 110 people| — |               |
| Tech Fit | 8/10      | 6/10      | 9/10      | C |               |
| Risk     | Medium    | High      | Low       | C |               |
+----------+-----------+-----------+-----------+---+                |
|                                                                    |
|  +-----------+  +-----------+  +-----------+                      |
|  | OPTION A  |  | OPTION B  |  | OPTION C  |                      |
|  | DEEP DIVE |  | DEEP DIVE |  | DEEP DIVE |                      |
|  | Financial |  | Financial |  | Financial |                      |
|  | details,  |  | details,  |  | details,  |                      |
|  | risks,    |  | risks,    |  | risks,    |                      |
|  | timeline  |  | timeline  |  | timeline  |                      |
|  +-----------+  +-----------+  +-----------+                      |
|                                                                    |
|  +----------------------------------------------------------+     |
|  |  RECOMMENDATION & DECISION FRAMEWORK                     |     |
|  |  Weighted score: C (8.2) > A (7.1) > B (6.4)            |     |
|  |  Recommendation: Option C with negotiation on price      |     |
|  |  Decision needed by: April 15, 2026                      |     |
|  +----------------------------------------------------------+     |
+------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element          | Width       | Height | Notes                                   |
| ---------------- | ----------- | ------ | --------------------------------------- |
| Total board      | 4800px      | 3500px | Slightly taller for deep dives          |
| Header           | 4700px      | 200px  | Standard                                |
| Thesis banner    | 4700px      | 200px  | Full width context                      |
| Comparison table | 4700px      | 800px  | Multi-row grid                          |
| Criteria column  | 500px       | —      | Left label column                       |
| Option columns   | 1300px each | —      | 3 equal columns + winner column (200px) |
| Deep dive cards  | 1450px each | 800px  | 3 equal cards below table               |
| Recommendation   | 4700px      | 350px  | Full width bottom                       |

### Spacing Rules

- **Between option columns**: 15px (tight for comparison)
- **Between table and deep dives**: 40px
- **Between deep dive cards**: 25px
- **Table row height**: 60px per row
- **Winner column**: narrow (200px), uses colored letters (A/B/C)

### Key Layout Principles

1. **The comparison table is king** — it occupies the visual center and should be readable at 50% zoom. Numbers are large (18-20pt) and color-coded.
2. **Winner column creates instant summary** — a narrow column on the right showing which option wins each criterion enables pattern recognition without reading all numbers.
3. **Deep dives are expandable** — each option card contains the detailed analysis (financial projections, risk register, integration timeline) that the comparison table summarizes.
4. **Recommendation panel is decisive** — it does not present another table of data. It states a clear recommendation with supporting reasoning. "We recommend Option C because..."

---

## Pattern 4: The Revenue Flow (Revenue Model Canvas)

A left-to-right flow showing how revenue enters, flows through the business model, and projects forward. The layout mirrors the mental model of "source → mechanics → projection."

### Structure

```
+------------------------------------------------------------------------+
|                    HEADER: Revenue Model Canvas                         |
+------------------------------------------------------------------------+
|                                                                         |
|  REVENUE         PRICING &         UNIT              GROWTH            |
|  STREAMS         PACKAGING         ECONOMICS         PROJECTIONS       |
|                                                                         |
|  +----------+   +-----------+    +------------+    +--------------+    |
|  | Stream 1 |   | Tier 1    |    | CAC: $450  |    |  Scenario A  |    |
|  | SaaS     |   | Free      |    | LTV: $3,200|    |  (Base)      |    |
|  | $28M     |-->| 0/mo      |--->| Ratio: 7.1 |--->|  $42M by     |    |
|  |          |   |           |    |            |    |  Dec 2026    |    |
|  +----------+   +-----------+    +------------+    +--------------+    |
|  +----------+   +-----------+    +------------+    +--------------+    |
|  | Stream 2 |   | Tier 2    |    | Payback:   |    |  Scenario B  |    |
|  | Services |   | Pro       |    | 5 months   |    |  (Optimistic)|    |
|  | $7M      |-->| $49/mo    |--->| Gross      |--->|  $51M by     |    |
|  |          |   |           |    | Margin: 78%|    |  Dec 2026    |    |
|  +----------+   +-----------+    +------------+    +--------------+    |
|  +----------+   +-----------+    +------------+    +--------------+    |
|  | Stream 3 |   | Tier 3    |    | Retention: |    |  Scenario C  |    |
|  | Partner  |   | Enterprise|    | 92% annual |    |  (Pessimist) |    |
|  | $3M      |-->| Custom    |--->| Net Rev    |--->|  $35M by     |    |
|  |          |   |           |    | Retention: |    |  Dec 2026    |    |
|  |          |   |           |    | 115%       |    |              |    |
|  +----------+   +-----------+    +------------+    +--------------+    |
|                                                                         |
|  +-------------------------------------------------------------------+ |
|  |  COHORT ANALYSIS & RETENTION CURVES                                | |
|  |  [Monthly cohort grid + retention chart]                           | |
|  +-------------------------------------------------------------------+ |
|                                                                         |
|  +-------------------------------------------------------------------+ |
|  |  KEY ASSUMPTIONS & SENSITIVITY ANALYSIS                            | |
|  |  "Revenue growth most sensitive to retention rate (+/-2% = $4M)"  | |
|  +-------------------------------------------------------------------+ |
+------------------------------------------------------------------------+
```

### Dimensions & Spacing

| Element        | Width       | Height    | Notes                    |
| -------------- | ----------- | --------- | ------------------------ |
| Total board    | 5000px      | 3500px    | Wide for horizontal flow |
| Header         | 4900px      | 200px     | Standard                 |
| Flow columns   | 1100px each | 1800px    | 4 columns, equal width   |
| Stream cards   | 1000px      | 350-500px | Within column, stacked   |
| Cohort section | 4900px      | 600px     | Full width, below flow   |
| Assumptions    | 4900px      | 400px     | Full width, bottom       |

### Spacing Rules

- **Between flow columns**: 30px + arrow connectors
- **Between stream cards**: 20px vertical
- **Arrow connectors**: 2px weight, navy, with arrowhead
- **Column-to-column flow**: Connected with horizontal arrows showing the analytical flow
- **Internal card padding**: 15px

### Key Layout Principles

1. **Left-to-right flow** — Revenue enters on the left (streams), flows through mechanics (pricing, unit economics), and projects forward on the right (growth scenarios). This mirrors how financial analysis works.
2. **Stream cards are the building blocks** — each revenue stream gets its own row that flows across all four columns. This enables stream-by-stream analysis.
3. **Arrows show causality** — the connectors between columns signal analytical dependencies: pricing determines unit economics, which determines growth potential.
4. **Cohort analysis spans full width** — retention data is cross-cutting (affects all streams) so it gets a dedicated full-width section.
5. **Assumptions are anchored at the bottom** — every projection above is built on assumptions below. This visual arrangement makes the dependency explicit.

---

## Universal Layout Rules for Finance Boards

### Number Formatting

- **Large numbers**: Use comma separators ($24,500,000 or $24.5M with tooltip/annotation showing full number)
- **Percentages**: Always include the sign (+8.3%, -2.1%) and one decimal place
- **Currency**: Always specify currency symbol and period ($, USD, FY2026 Q1)
- **Variances**: Show both absolute and percentage variance: "+$1.2M (+8.3%)"

### Alignment

- Numbers are **right-aligned** within their containers (standard accounting convention)
- Labels are **left-aligned**
- Headers are **centered**
- Positive/negative values are color-coded (green/red) and use +/- signs

### Grid Snapping

- Use a 50px major grid for panel placement
- Use a 10px minor grid for internal element placement
- All panels should have consistent rounded corners (8px radius)

### Data Source Attribution

Every chart, table, or KPI card should include a small attribution note:

- "Source: QuickBooks GL export, March 1, 2026"
- "Source: Salesforce pipeline report, as of Feb 28"
- "Source: CFO estimate based on Q4 run rate"

This builds trust and enables verification.

---

## Choosing the Right Pattern

| Pattern           | Best For                         | Complexity | Board Size |
| ----------------- | -------------------------------- | ---------- | ---------- |
| Dashboard Grid    | Periodic performance review      | Medium     | 4800x3200  |
| Allocation Map    | Budget planning and approval     | Advanced   | 4800x3200  |
| Comparison Matrix | Investment decisions             | Advanced   | 4800x3500  |
| Revenue Flow      | Revenue modeling and forecasting | Advanced   | 5000x3500  |

### Decision Framework

1. **"How are we performing financially?"** → Dashboard Grid
2. **"How should we allocate our budget?"** → Allocation Map
3. **"Which investment should we choose?"** → Comparison Matrix
4. **"How will our revenue grow?"** → Revenue Flow
