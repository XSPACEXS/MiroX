# Build Process — Finance Boards

## Overview

Finance boards are among the most precision-critical boards in Miro. A misplaced decimal, an incorrect variance calculation, or a number that does not tie to its source can destroy the board's credibility permanently. This guide walks through the six-phase build process optimized for financial accuracy, data integrity, and visual clarity.

---

## Phase 1: Discovery

### Gather Financial Data

Before touching Miro, assemble and validate all source data:

**For Budget Planning**:

- Prior year actuals (from GL/accounting system)
- Current year budget draft (from finance team)
- Department budget requests (from VPs/directors)
- Headcount plan (from HR)
- Revenue forecast (from sales/finance)
- Capital expenditure plan
- Board-level guidance (growth targets, margin targets)

**For Financial Dashboard**:

- Monthly P&L data (actuals vs. budget)
- Balance sheet summary (cash, AR, AP)
- Cash flow statement
- Revenue by segment/product
- Expense by department/category
- KPI definitions with calculation methodology

**For Investment Analysis**:

- Financial models for each investment option
- Market data and comparable company analysis
- Due diligence findings
- Risk assessments
- Strategic fit criteria and weights

**For Revenue Model**:

- Revenue by stream/product/segment
- Pricing structure and tier data
- Cohort data (sign-ups, retention, expansion by month)
- Unit economics calculations (CAC, LTV, payback)
- Growth assumptions with supporting data

### Validate the Data

**Critical**: Before building the board, verify:

1. All totals sum correctly
2. Actuals match the source system (GL, CRM, etc.)
3. Variance calculations are correct (both absolute and percentage)
4. Period labels are accurate and consistent
5. Currency and units are specified
6. Assumptions are documented

A finance board with a single calculation error loses all credibility. Validate twice, build once.

### Define the Narrative

Answer these questions:

1. **What is the single most important message?** ("We are on track for Q1 revenue target" or "Engineering is 15% over budget — action needed")
2. **Who is the primary audience?** (CFO review, board presentation, all-hands, department heads)
3. **What decisions should this board drive?** (Approve the budget, reallocate funds, select an investment)
4. **What is the time horizon?** (Current month, quarter, fiscal year, 3-year projection)

---

## Phase 2: Structure

### Step 1: Set Up the Board

```
Budget board:     4800 x 3200px, background #FAFAFA
Dashboard:        4800 x 3200px, background #FAFAFA
Investment:       4800 x 3500px, background #FAFAFA
Revenue model:    5000 x 3500px, background #FAFAFA
```

### Step 2: Create the Frame Skeleton

Place empty frames for all major sections. Do not add any data yet.

**Dashboard skeleton**:

1. Header frame (full width, top)
2. KPI card frames (4 equal, below header)
3. Chart panel frames (2x2 grid, main area)
4. Alert frame (bottom right)

**Budget skeleton**:

1. Header frame
2. Summary frame (top left)
3. Department table frame (top center)
4. Allocation visual frame (top right)
5. Variance frame (bottom left)
6. Cash flow frame (bottom center)
7. Assumptions frame (bottom right)
8. Approval workflow frame (bottom, full width)

### Step 3: Establish Visual Grid

- Draw light gray guide lines at grid intersections
- Verify all frames are equally sized where they should be
- Check that column widths match across rows
- Ensure header height is consistent

---

## Phase 3: Content Population

### The Golden Rule: Numbers First, Design Later

In finance boards, populate ALL numbers before adjusting any visual design. This is because:

- Numbers determine whether cells need more or less space
- Variance calculations may reveal the need for additional alert indicators
- The narrative may shift once you see all the data together

### Step 1: KPI Cards (Dashboard) or Summary Panel (Budget)

Start with the headline numbers. These are the anchors:

- Place the single most important number in the most prominent position
- Add comparison values immediately (vs. target, vs. prior)
- Calculate variances and apply color coding (green/red/amber)
- Add the health status indicator

### Step 2: Tables and Breakdowns

Fill in data tables row by row:

- Enter department names and numbers
- Calculate and add variance columns
- Verify that rows sum to totals
- Apply status badges
- Add annotation sticky notes for context

### Step 3: Visual Charts

Build chart approximations using Miro shapes:

- Bar heights proportional to values (calculate pixel-to-value ratio)
- Pie segments proportional to percentages
- Line chart points at correct relative positions
- Add axis labels and data labels

### Step 4: Assumptions and Notes

Fill the assumptions and risks section:

- State each assumption clearly
- Note the basis for each assumption
- Include sensitivity ranges
- Flag high-risk assumptions with amber/red indicators

### Step 5: Alerts and Actions

Populate the alerts section based on the data:

- Identify any metric that is off-target by more than 10%
- Create alert entries with severity, description, impact, and owner
- Sort by severity (Critical → Warning → Info)
- Add action deadlines

### Step 6: Approval/Decision Section

Add the workflow or recommendation:

- For budgets: Set approval stage indicators
- For dashboards: List action items with owners
- For investments: State the recommendation with supporting scores
- For revenue models: Summarize the base-case projection with confidence level

---

## Phase 4: Validation Pass

This phase is unique to finance boards and is non-negotiable.

### Cross-Check #1: Internal Consistency

Verify that:

- Department budgets sum to total budget (exact match, not approximate)
- Revenue minus expenses equals the stated profit/EBITDA
- Monthly cash flows net to the stated change in cash position
- All percentages are correctly calculated (numerator/denominator verified)
- Headcount numbers are consistent between budget and HR data

### Cross-Check #2: Source Verification

For each number on the board, verify:

- It matches the source system (GL, CRM, model)
- The period label is correct
- The unit is correct (thousands vs. millions, USD vs. EUR)
- The comparison baseline is correct (comparing to the right period)

### Cross-Check #3: Narrative Consistency

Read the board as a story and verify:

- The headline KPIs are consistent with the detail below
- Alerts match the data (if S&M is flagged as over budget, the table should show the overrun)
- The recommendation follows logically from the analysis
- Assumptions in one section do not contradict assumptions in another

---

## Phase 5: Visual Polish

### Step 1: Color Audit

- All positive variances: green (#2E7D32)
- All negative variances: red (#C62828)
- All warnings: amber (#FF8F00)
- Headers: navy (#1B3A5C)
- No color is used inconsistently

### Step 2: Alignment

- All KPI cards identical size and height
- All table columns right-aligned for numbers, left-aligned for text
- All chart elements aligned to baseline
- All frames aligned to the grid

### Step 3: Typography

- KPI values: 36pt bold
- Section headers: 24pt bold
- Table data: 12pt regular
- Annotations: 11pt regular
- Verify no text smaller than 10pt

### Step 4: Data Labels

Every chart element must be labeled:

- Bar chart bars: value above each bar
- Pie segments: label and percentage
- Line chart: labeled data points at key inflections
- Waterfall: value inside each block

### Step 5: Source Attribution

Add source labels to every data section:

- "Source: QuickBooks GL, March 1, 2026"
- "Source: Salesforce pipeline, as of Feb 28"
- "Source: CFO forecast model v3.1"

---

## Phase 6: Miro API Translation

### Coordinate Strategy for Finance Boards

Finance boards use a grid-based coordinate system. Calculate coordinates from the layout pattern:

**Dashboard Grid (4800x3200)**:

```
Header:       x=2400, y=100,  w=4700, h=200
KPI Card 1:   x=600,  y=450,  w=1050, h=300
KPI Card 2:   x=1700, y=450,  w=1050, h=300
KPI Card 3:   x=2800, y=450,  w=1050, h=300
KPI Card 4:   x=3900, y=450,  w=1050, h=300
Chart TL:     x=1200, y=1100, w=2250, h=800
Chart TR:     x=3500, y=1100, w=2250, h=800
Chart BL:     x=1200, y=2050, w=2250, h=700
Alerts BR:    x=3500, y=2050, w=2250, h=700
```

### Element Mapping

| Board Element  | Miro Type             | Properties                                                                          |
| -------------- | --------------------- | ----------------------------------------------------------------------------------- |
| KPI Card       | Frame + shapes + text | Background frame, colored top border shape, value text, label text, comparison text |
| Data Table     | Multiple text blocks  | Aligned in grid pattern, right-aligned numbers, header with border                  |
| Bar Chart      | Rectangle shapes      | Height proportional to value, fill color, value label above                         |
| Status Badge   | Shape (rounded rect)  | Small, colored background, white text                                               |
| Variance Arrow | Text (Unicode)        | ▲ in green or ▼ in red, inline with value                                           |
| Sparkline      | Line elements         | Multiple connected short lines approximating trend                                  |

### Build Order

1. Create board and set background
2. Create all frames (header, KPIs, charts, alerts)
3. Add header text (title, date, status)
4. Build KPI cards (border shape, value text, label, comparison)
5. Build data tables (header row, data rows, total row)
6. Build chart approximations (shapes sized to data)
7. Add status badges and alert items
8. Add annotations and source labels

### API Pitfalls for Finance

- **Number alignment**: Miro text blocks default to left-align. Override to right-align for numerical data.
- **Precise sizing**: Bar charts require calculating height ratios. If max value = $10M and max bar height = 600px, each $1M = 60px. Round consistently.
- **Color accuracy**: Use exact hex values for financial health colors. Do not approximate.
- **Sticky note limitations**: Miro sticky notes have limited color options. For precise financial colors, use shapes with text instead of sticky notes.

---

## Common Pitfalls

### 1. Building Before Validating Data

Never start building the board until all source data is validated. A beautiful board with wrong numbers is worse than a rough board with right numbers.

### 2. Visual Decoration Before Data

Spend 70% of time on data accuracy and content, 30% on visual polish. Never invert this ratio.

### 3. Inconsistent Periods

Mixing monthly actuals with quarterly forecasts or comparing YTD to full-year budget without labeling creates confusion. Always label periods explicitly.

### 4. Calculation Errors in Variances

The most common error: calculating percentage variance as (actual - budget) when it should be (actual - budget) / budget. Always verify the denominator.

### 5. Forgetting to Update

Finance boards go stale quickly. Build the board to be update-friendly: clear data source labels, consistent structure, and a prominent "Last Updated" field. Schedule monthly or quarterly refresh cadence.

### 6. No Action Items

A finance dashboard without recommendations is a monitoring screen. Always end with "what do we do about this?" — specific actions, owners, and deadlines.
