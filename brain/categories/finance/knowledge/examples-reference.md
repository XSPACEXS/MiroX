# Examples & Reference — Finance Boards

## Overview

This document provides detailed breakdowns of exemplary finance boards, common anti-patterns with corrections, before/after transformations, and a catalog of design elements worth incorporating. Each example is analyzed for what makes it effective and how to replicate those qualities.

---

## Example 1: SaaS Company Financial Dashboard (The Command Center)

### Board Summary

**Company**: NovaTech, 187-person B2B SaaS company
**Purpose**: Monthly financial review for leadership team
**Period**: February 2026, with 12-month trailing data
**Board Size**: 4800 x 3200px
**Palette**: Corporate Navy

### What Makes It Exceptional

**1. The KPI Row Tells the Complete P&L Story in 4 Cards**

The four KPI cards at the top read left-to-right as a condensed income statement:

```
Revenue: $3,200K (+8.7% MoM)  →  Expenses: $2,400K (+5.2%)  →  EBITDA: $430K (+18%)  →  Cash: $12.1M
[GREEN]                           [GREEN]                        [GREEN]                  [AMBER]
```

The progression Revenue → Expenses → EBITDA → Cash tells the financial health story in a single horizontal scan. Green across the first three cards signals operational health. The amber on Cash signals attention needed — which drives the viewer to the Cash Flow panel below.

**Why it works**: The KPI row functions as an executive summary. A CEO can look at these four cards for 5 seconds and know whether to be happy or worried.

**2. The Revenue Trend Chart Has Three Comparison Lines**

The revenue trend panel shows three lines overlaid:

- **Solid blue**: Actual revenue (monthly, 12 months)
- **Dashed blue**: Budget/target revenue
- **Dotted gray**: Prior year revenue

This triple comparison instantly communicates: Are we beating budget? Are we growing year-over-year? Are we accelerating or decelerating?

The chart also highlights two key moments with annotated markers:

- "Product launch: August 2025" at the inflection where growth accelerated
- "Enterprise deal: November 2025" at a one-time revenue spike

**3. The Alert Panel Uses Severity Tiers**

The bottom-right alert panel is sorted by severity with clear visual hierarchy:

```
CRITICAL:
! Cash runway dropped to 8.2 months (was 10.4 in Jan)
  → CFO to present revised forecast to board by March 15

WARNING:
! S&M spend 12% over monthly budget for 3rd consecutive month
  → VP Marketing to submit variance justification by March 10

INFO:
i Engineering headcount on track: 14 of 15 planned hires completed
  → Final hire (Sr. DevOps) interview in progress
```

Each alert includes: what happened, the trend/context, and the specific action with owner and deadline.

### Design Elements to Steal

- **KPI row as condensed P&L**: Revenue → Expenses → Profit → Cash, left to right
- **Triple-line trend chart**: Actual + Budget + Prior Year overlaid
- **Annotated chart markers**: Key events labeled directly on trend lines
- **Severity-tiered alerts**: Critical/Warning/Info with escalating visual urgency

---

## Example 2: Department Budget Planning Board (The Negotiation Tool)

### Board Summary

**Company**: NovaTech FY2026 Budget
**Purpose**: Budget planning, department allocation, and approval tracking
**Total Budget**: $24.5M across 6 departments
**Board Size**: 4800 x 3200px
**Palette**: Corporate Navy with department color accents

### What Makes It Exceptional

**1. The Department Table Includes "Budget Story" Annotations**

Each department row in the budget table has a small annotation sticky note that explains the reasoning behind the allocation change. These are not just numbers — they are budget narratives:

- Engineering (+16.7%): "Platform stability initiative requires 8 additional engineers. Approved by CTO after 3 major outages in Q4."
- Sales & Marketing (+21.6%): "New SDR team ($800K) + conference season ($400K). Jim to present ROI case before VP sign-off."
- G&A (+4.8%): "Flat by design. AP/AR automation expected to absorb growth without headcount."

These annotations transform a budget table from "here are the numbers" to "here is the strategy behind the numbers."

**2. The Variance Tracking Uses Traffic Light + Trend**

Each department's variance cell contains three elements:

```
Engineering: -$400K (-4.1%) ▼ [AT RISK]
                              ^trend: 3 months over budget
```

The traffic light badge (On Track / At Risk / Over Budget) provides instant visual scanning. The trend note adds temporal context — a department that is 4% over for the first time is different from one that has been over for 3 consecutive months.

**3. The Approval Workflow Is Visual and Actionable**

The bottom strip shows each department's budget as it moves through the approval pipeline:

```
DRAFT         REVIEW         VP SIGN-OFF     CFO APPROVED
[Product]     [Engineering]  [G&A]           [S&M]
              [CS]                            [IT]
```

Each department name is a movable card that physically moves from left to right as it progresses. This makes the approval status immediately visible and creates accountability — everyone can see who is blocking the process.

### Design Elements to Steal

- **Budget story annotations**: Brief narrative explaining the "why" behind each allocation change
- **Traffic light + trend**: Status badge combined with temporal trend indicator
- **Visual approval pipeline**: Physical card movement showing workflow status

---

## Example 3: Acquisition Investment Analysis (The Decision Board)

### Board Summary

**Purpose**: Comparing 3 SaaS acquisition targets for Southeast Asia expansion
**Decision Deadline**: Board meeting April 15, 2026
**Board Size**: 4800 x 3500px
**Palette**: Clean Analytics

### What Makes It Exceptional

**1. The Comparison Matrix Uses Consistent Visual Encoding**

Each cell in the comparison matrix uses the same visual pattern:

```
+-------------------+
|  $12M ARR         |  <- The number (18pt, bold)
|  ████████░░       |  <- Visual bar showing relative scale
|  35% YoY growth   |  <- Supporting context (12pt, gray)
+-------------------+
```

The small inline bar beneath each number creates instant visual comparison without reading the numbers. You can see at a glance that Option C has the longest bar (highest ARR) even before processing the "$18M" text.

**2. The Risk-Return Scatter Is Brilliant**

A 2x2 scatter plot in the deep dive section maps each option:

```
          HIGH RETURN
              |
         B    |    C
   HIGH ------+------- LOW
   RISK       |      RISK
              |    A
          LOW RETURN
```

Option B: High risk, high return (the growth bet)
Option C: Low risk, high return (the premium pick)
Option A: Low risk, medium return (the safe choice)

This single visualization makes the strategic trade-off instantly clear.

**3. The Recommendation Panel Is Decisive, Not Hedging**

The recommendation does not present "on the one hand... on the other hand..." analysis. It states:

"**Recommendation: Acquire CloudSync (C) at $65M (negotiated from $72M ask).**

Rationale: CloudSync scores highest on weighted criteria (8.2 vs. 7.1 and 6.4). Their 125% net revenue retention and 82% gross margin indicate a healthy, growing business. The 15% YoY revenue growth is the weakest metric, but their product-market fit in Southeast Asia de-risks our expansion timeline by 12-18 months.

Negotiation leverage: Their flat growth rate justifies pushing the multiple from 4.0x to 3.6x ARR.

Required decision: Board approval by April 15. LOI submission by April 22."

This level of decisiveness is what makes the board a tool rather than an exhibit.

### Design Elements to Steal

- **Inline visual bars in comparison cells**: Tiny bars beneath numbers for instant visual comparison
- **Risk-return scatter plot**: 2x2 mapping of options on risk and return axes
- **Decisive recommendation format**: Clear pick, supporting rationale, negotiation angle, and timeline

---

## Example 4: Revenue Model Canvas — Startup Series B (The Growth Story)

### Board Summary

**Company**: DataForge, 45-person B2B data platform, Series A ($8M), preparing Series B deck
**Purpose**: Revenue model visualization for board and investors
**Current ARR**: $4.2M growing 15% MoM
**Board Size**: 5000 x 3500px
**Palette**: Startup Finance

### What Makes It Exceptional

**1. The Revenue Stream Breakdown Uses Proportional Cards**

The three revenue streams are represented as cards whose heights are proportional to their revenue contribution:

```
+------------------+
|                  |
| Platform SaaS    |
| $3.4M (81%)     |  <- Tall card
| 18% MoM growth  |
|                  |
+------------------+
+------------+
| Prof Svcs  |
| $600K (14%)|  <- Medium card
| Flat       |
+------------+
+-------+
| Data  |
| $200K |  <- Small card
| (5%)  |
+-------+
```

This proportional sizing communicates revenue composition before any numbers are read.

**2. The Cohort Grid Reveals the Retention Story**

A monthly cohort retention grid shows exactly how well each monthly cohort retains:

```
        M1    M2    M3    M4    M5    M6    M12
Jan'25  100%  94%   91%   89%   87%   85%   78%
Feb'25  100%  95%   92%   90%   88%   86%   —
Mar'25  100%  96%   93%   91%   89%   —     —
...
```

The cells are color-coded from deep green (>90%) to light green (80-90%) to amber (70-80%) to red (<70%). The pattern shows improving retention over time — newer cohorts retain better than older ones. This trend is highlighted with an annotation: "Product improvements in Q3 improved M6 retention from 78% to 86%."

**3. The Scenario Fan Shows Confidence Ranges**

Instead of a single revenue projection line, the board shows three scenarios:

```
Optimistic (25% MoM): $18M ARR by Dec 2026
Base case  (15% MoM): $12M ARR by Dec 2026
Conservative (10% MoM): $8.5M ARR by Dec 2026
```

These are visualized as a "fan" — three diverging lines from the current point. The area between optimistic and conservative is shaded with a subtle gradient, creating a confidence band.

The annotation notes: "Base case uses trailing 6-month average growth rate. Optimistic assumes enterprise deal pipeline conversion. Conservative assumes 2 large customer churns."

### Design Elements to Steal

- **Proportional revenue stream cards**: Card height proportional to revenue contribution
- **Color-coded cohort retention grid**: Monthly cohort analysis with heatmap coloring
- **Scenario fan chart**: Three diverging projection lines with shaded confidence band

---

## Anti-Patterns

### Anti-Pattern 1: The Spreadsheet Screenshot

**What it looks like**: A board that is literally a screenshot of an Excel spreadsheet placed as an image, or a manual recreation of every spreadsheet row and column in Miro.

**Why it fails**: If the board offers no spatial logic, visual hierarchy, or narrative structure beyond what Excel provides, it has no reason to exist in Miro.

**The fix**: Use Miro's spatial canvas to tell a story. Place the summary KPIs prominently, create visual charts, add annotations, and include an action section. The Miro board should communicate something that the spreadsheet cannot.

### Anti-Pattern 2: Pretty But Wrong

**What it looks like**: Beautifully designed KPI cards, elegant color schemes, and polished typography — but the EBITDA number does not equal Revenue minus Expenses, or the department budgets do not sum to the total.

**Why it fails**: A single mathematical error destroys the board's credibility with finance audiences. Once trust is lost, it is very difficult to recover.

**The fix**: Validate every calculation before adding any visual design. Use cross-checks: totals must sum, variances must compute correctly, and ratios must be internally consistent.

### Anti-Pattern 3: Data Without Context

**What it looks like**: A dashboard showing "Revenue: $3.2M" with no comparison to target, prior period, or benchmark. Every number stands alone.

**Why it fails**: A number without context is meaningless. $3.2M could be excellent (target was $2.8M) or terrible (target was $4.0M). The viewer cannot assess performance without comparison.

**The fix**: Every metric must include at least one comparison: target, prior period, benchmark, or scenario. The comparison should be visually adjacent and clearly labeled.

### Anti-Pattern 4: The Kitchen Sink Dashboard

**What it looks like**: A dashboard with 30+ KPI cards, 8 charts, and 15 tables — all visible simultaneously. Every metric anyone has ever asked about is on the board.

**Why it fails**: When everything is visible, nothing stands out. The cognitive load exceeds human capacity, and viewers cannot find the signal in the noise.

**The fix**: Apply the KPI pyramid: 1 headline number, 4-6 supporting KPIs, and 12-20 detail metrics at full zoom. Not everything needs to be on one board — link to detail boards for deep dives.

### Anti-Pattern 5: The Vanity Dashboard

**What it looks like**: A dashboard that only shows metrics that are going well. Revenue growth is front and center, but churn rate, customer support backlog, and cash burn are nowhere to be found.

**Why it fails**: A dashboard that hides bad news is worse than no dashboard. It creates a false sense of security and prevents early intervention.

**The fix**: Include at least one "health check" metric that could be negative. If everything is genuinely green, the board is more trustworthy because it clearly monitors potential problems too.

---

## Before / After Transformations

### Before: Flat KPI Display

```
Revenue: $3,200,000
Expenses: $2,400,000
EBITDA: $430,000
Cash: $12,100,000
```

### After: Contextual KPI Cards

```
+--REVENUE--+  +--EXPENSES-+  +--EBITDA---+  +--CASH-----+
| $3,200K   |  | $2,400K   |  | $430K     |  | $12,100K  |
| ▲ +8.7%   |  | ▲ +5.2%   |  | ▲ +18.2%  |  | ▼ -$1.2M  |
| vs $2,945K|  | vs $2,500K|  | vs $360K  |  | vs Jan    |
| [GREEN]   |  | [GREEN]   |  | [GREEN]   |  | [AMBER]   |
+-----------+  +-----------+  +-----------+  +-----------+
```

The "after" version communicates financial health at a glance — the numbers tell a story.

### Before: Budget Table Without Narrative

```
| Dept        | Budget    |
| Engineering | $9.8M     |
| S&M         | $6.2M     |
| Product     | $3.1M     |
| Total       | $24.5M    |
```

### After: Budget Table With Story

```
| Dept        | FY25 Actual | FY26 Plan  | Δ      | Why                                    | Status     |
| Engineering | $8,400K     | $9,800K    | +16.7% | Platform stability: +8 eng hires       | VP Review  |
| S&M         | $5,100K     | $6,200K    | +21.6% | New SDR team ($800K) + events ($400K)  | Approved   |
| Product     | $2,800K     | $3,100K    | +10.7% | 2 new PMs for enterprise expansion     | Draft      |
| Total       | $21,200K    | $24,500K   | +15.6% |                                        |            |
```

The "after" version includes prior year comparison, percentage change, the strategic reason, and approval status — turning a data table into a decision tool.

---

## Cross-References

- **03-Strategy-Planning/examples-reference.md**: OKR boards showing strategic context for budget decisions
- **13-Sales/examples-reference.md**: Pipeline and revenue boards as input to financial forecasting
- **14-Data-Analytics/examples-reference.md**: Dashboard design patterns and KPI visualization
- **15-Startup/examples-reference.md**: Investor-facing financial boards and unit economics
- **02-Project-Management/examples-reference.md**: Resource allocation boards connecting to budget
