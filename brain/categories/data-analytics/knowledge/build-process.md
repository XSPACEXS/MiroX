# Data & Analytics Board Build Process

## Introduction

Building an analytics board requires a blend of data engineering discipline and visual design skill. The process differs from other Miro boards because accuracy is paramount — a single wrong number destroys credibility. This guide walks through the complete workflow with particular emphasis on data verification, chart construction, and the API translation layer.

---

## Phase 1: Discovery (30-60 minutes)

### Core Questions

**The Question**: What is the single most important question this board answers? Write it as a complete sentence: "Why did churn spike in February 2026?" or "What is our product-market fit trajectory?"

**The Audience**: Who will look at this board? What is their data literacy? Will they interpret charts independently or need text summaries? Will this be presented or self-served?

**The Data**: What data sources are available? What metrics can be pulled? What is the refresh cadence? Who owns data quality? Are there known gaps or limitations?

**The Cadence**: How often will this board be reviewed? Weekly executive meeting? Monthly board report? One-time investigation? The cadence determines the refresh requirement and the level of polish needed.

**The Context**: What decisions will be made based on this board? What are the key hypotheses? What surprises or anomalies need explaining?

### Discovery Deliverable

A brief: "Build an executive analytics dashboard for the weekly Tuesday review (CEO, CTO, VP Product, VP Sales). The board answers 'How is our SaaS product performing?' with emphasis on revenue, growth, retention, and product health. Data from Mixpanel (product analytics), Stripe (billing), Salesforce (CRM), and Intercom (support). Refreshed weekly by the Data Team. Key issue this month: February churn spike needs investigation."

---

## Phase 2: Data Preparation (30-60 minutes)

### Steps

1. **Identify all metrics**: List every metric that will appear on the board. For each, document:
   - Metric name
   - Definition (precise, unambiguous)
   - Source system
   - Calculation method
   - Refresh schedule
   - Known limitations

2. **Pull current data**: Extract the latest values for all metrics. Record the extraction timestamp.

3. **Calculate derived metrics**: Compute any metrics that require combining sources (e.g., LTV:CAC ratio, NRR, conversion rates).

4. **Verify accuracy**: Cross-check all numbers:
   - Do totals add up? (Revenue by channel should sum to total revenue)
   - Are percentages consistent? (Churn rate x customers should approximately equal churned customers)
   - Are date ranges consistent? (All metrics should cover the same period)

5. **Identify anomalies**: Flag any data points that are unusual. For each, note the date, magnitude, and hypothesized cause.

6. **Prepare comparison data**: For every metric, pull the comparison value (last period, target, benchmark).

### Data Preparation Checklist

- [ ] All metrics defined with precise calculations
- [ ] Current values extracted with timestamp
- [ ] Derived metrics calculated and verified
- [ ] Totals cross-checked for consistency
- [ ] Date ranges verified as consistent
- [ ] Comparison values (target, last period) prepared
- [ ] Anomalies identified and documented
- [ ] Sources and limitations documented

---

## Phase 3: Structure (20-30 minutes)

### Steps

1. **Select layout pattern**: Based on the board type:
   - Performance monitoring → Executive Dashboard Grid
   - Research readout → Research Synthesis Flow
   - Metric tracking → KPI Tracker Scoreboard
   - Survey results → Survey Analysis Dashboard
   - Ad-hoc investigation → Data Investigation Board

2. **Assign content to panels**: Map each metric, chart, and content block to a specific panel position in the layout.

3. **Define chart types**: For each chart panel, choose the visualization:
   - Trend over time → Line chart
   - Category comparison → Bar chart (horizontal preferred)
   - Part-to-whole → Pie/donut (use sparingly) or stacked bar
   - Ranked list → Horizontal bar or table
   - Retention → Cohort grid
   - Process → Funnel
   - Correlation → Scatter plot (advanced audiences only)

4. **Plan the annotation layer**: For each chart, draft the one-sentence annotation.

---

## Phase 4: Skeleton Build (30-45 minutes)

### Steps

1. **Create the board**: Set dimensions and background per the layout pattern.

2. **Build the header strip**: Full-width frame with primary color background. Add placeholder text for title, period, source, refresh date, and owner.

3. **Build KPI card row**: Create 6 card shapes (white rectangles with rounded corners and subtle shadows). Position evenly across the row.

4. **Build chart panels**: Create frames for each chart panel with white backgrounds. Add panel titles.

5. **Build documentation strip**: Full-width frame at the bottom for data sources and definitions.

6. **Add structural connectors**: Arrows or lines indicating reading flow.

### API Translation

```
Create board:
  POST /v2/boards
  - name: "Product Analytics Dashboard — February 2026"

Create header frame:
  POST /v2/boards/{boardId}/frames
  - x: 100, y: 0
  - width: 5800, height: 280
  - title: "Dashboard Header"
  - style.fillColor: "#006064"

Create KPI card shapes:
  POST /v2/boards/{boardId}/shapes (x6)
  - type: "rectangle"
  - x: calculated (evenly spaced)
  - y: 320
  - width: 280, height: 240
  - style.fillColor: "#FFFFFF"
  - style.borderRadius: 8

Create chart panel frames:
  POST /v2/boards/{boardId}/frames (x6)
  Row 1: y=600, height=1200
  Row 2: y=1840, height=1000
  Each: width=1900, gap=30px

Create documentation frame:
  POST /v2/boards/{boardId}/frames
  - x: 100, y: 2880
  - width: 5800, height: 450
  - style.fillColor: "#F5F5F5"
```

---

## Phase 5: Content Population (60-90 minutes)

### KPI Cards

For each KPI card, create four text elements:

1. Label (top, 11px, gray)
2. Value (center, 32px, bold, state-colored)
3. Change indicator (below value, 13px, directional)
4. Target (bottom, 10px, gray)

Plus one shape element: 5. RAG dot (small circle, state-colored)

### Charts

Build each chart from primitive Miro elements:

**Line chart**: Create axis lines (shapes), grid lines (shapes), data point circles, connector lines between points, target line (dashed), axis labels (text), and chart title (text).

**Bar chart**: Create rectangles of varying widths, category labels (text), value labels (text), chart title (text).

**Cohort grid**: Create a grid of rectangles with text inside each cell. Color-code cells by value range.

**Funnel**: Create stacked rectangles of decreasing width with stage labels and drop-off annotations.

### Annotations

Add a text block below each chart with the three-sentence annotation:

1. What happened
2. How significant / why
3. What to do about it

### Anomaly Log

Create color-coded event cards:

- Red border: Negative events (outages, bugs, losses)
- Yellow border: Cautionary events (near-misses, data issues)
- Green border: Positive events (launches, wins, milestones)
- Blue border: Upcoming events (planned experiments, launches)

### Documentation

Create source cards (one per data source):

- System name (bold)
- Data type
- Metrics provided
- Refresh schedule
- Owner

Create definitions section:

- List every metric with its precise definition

Create limitations section:

- List every known data quality issue

---

## Phase 6: Polish (20-30 minutes)

### Accuracy Verification

- [ ] Every number cross-checked against source data
- [ ] All percentages sum correctly where they should
- [ ] Date ranges are consistent across all panels
- [ ] Derived metrics are calculated correctly
- [ ] Chart scales are not misleading (y-axis starts at zero for bars)

### Visual Polish

- [ ] All panels aligned on grid
- [ ] KPI cards evenly spaced
- [ ] Font sizes follow the hierarchy consistently
- [ ] Colors from palette only (no rogue colors)
- [ ] RAG indicators consistent across all metrics
- [ ] Chart annotations present for every chart
- [ ] Sparklines consistent style across all KPI cards

### Metadata Verification

- [ ] Last refresh date is current and prominent
- [ ] Data sources are documented
- [ ] Metric definitions are complete
- [ ] Board owner is identified
- [ ] Review cadence is noted

---

## Phase 7: Review (15-20 minutes)

### The Data Team Review

Have the data team verify:

1. Every metric value is correct
2. Every definition is accurate
3. Every source attribution is correct
4. Every limitation is documented

### The Stakeholder Preview

Show the board to one representative stakeholder and ask:

1. "What is the main story this board tells?" (Tests narrative clarity)
2. "What are the top 3 things that need attention?" (Tests hierarchy)
3. "Where does the data come from?" (Tests documentation visibility)
4. "What action should we take based on this?" (Tests actionability)

---

## Phase 8: Maintenance Setup

### Refresh Workflow

| Step  | Action                                                              | Owner          | Time          |
| ----- | ------------------------------------------------------------------- | -------------- | ------------- |
| 1     | Pull latest data from all sources                                   | Data analyst   | 30 min        |
| 2     | Update KPI card values and change indicators                        | Data analyst   | 20 min        |
| 3     | Update chart data points (add new period, remove oldest if rolling) | Data analyst   | 30 min        |
| 4     | Update anomaly log with new events                                  | Data analyst   | 10 min        |
| 5     | Verify accuracy of all numbers                                      | Data analyst   | 15 min        |
| 6     | Update "Last Refreshed" timestamp                                   | Data analyst   | 1 min         |
| 7     | Review annotations — update if narrative has changed                | Data team lead | 10 min        |
| Total |                                                                     |                | ~2 hours/week |

### Automation Opportunities

For teams with engineering resources, consider automating:

- KPI value updates via Miro API (pull from data warehouse, update text elements)
- Timestamp updates (automatic on each API call)
- RAG status calculation (threshold-based coloring)
- Anomaly detection and logging

```
Example automation flow:
1. Scheduled job (cron, Airflow, dbt) runs every Monday at 5 AM
2. Queries data warehouse for current metric values
3. Compares to targets, calculates RAG status
4. Updates Miro board via API:
   - PATCH /v2/boards/{boardId}/texts/{textId}
     body: { content: "$2.47M" }
   - PATCH /v2/boards/{boardId}/shapes/{shapeId}
     body: { style: { fillColor: "#2E7D32" } }
5. Updates timestamp
6. Sends Slack notification: "Dashboard refreshed for week of March 3"
```

---

## Quick-Start Sequences

### Executive Dashboard — Fast Track (2 hours)

1. Create board, header, KPI row (20 min)
2. Build 3 chart panels: trend, comparison table, breakdown (45 min)
3. Build 3 secondary panels: cohort, funnel, anomaly log (35 min)
4. Add annotations to all charts (15 min)
5. Build documentation strip (10 min)
6. Polish and verify (15 min)

### KPI Tracker — Fast Track (90 minutes)

1. Create board and header (10 min)
2. Build KPI grid: 3 rows x 5 columns (40 min)
3. Apply RAG indicators to all metrics (15 min)
4. Build corrective actions section (15 min)
5. Polish and verify (10 min)

### Research Synthesis — Fast Track (3 hours)

1. Create board, header, column structure (15 min)
2. Populate quotes column from research notes (45 min)
3. Cluster quotes into themes (30 min)
4. Write insight cards (30 min)
5. Write recommendations (20 min)
6. Document methodology (15 min)
7. Draw connective tissue (connectors from quotes to themes to insights) (15 min)
8. Polish and review (10 min)
