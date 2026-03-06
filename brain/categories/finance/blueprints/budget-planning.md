# Budget Planning Board

## Overview

- **Purpose**: Collaborative annual or quarterly budget planning — allocating funds across departments, tracking variances against plan, and managing the approval workflow from draft to final sign-off.
- **Best For**: CFOs, finance managers, department heads, and startup founders preparing budgets for the upcoming fiscal period.
- **Complexity**: Advanced
- **Board Size**: 4800 x 3200px

## Color Scheme

| Role             | Color        | Hex     |
| ---------------- | ------------ | ------- |
| Primary          | Navy Blue    | #1B3A5C |
| Secondary        | Steel Gray   | #607D8B |
| Accent           | Rich Gold    | #F9A825 |
| Revenue/Positive | Forest Green | #2E7D32 |
| Expense/Negative | Crimson      | #C62828 |
| Background       | Warm White   | #FAFAFA |
| Text             | Dark Gray    | #212121 |

## Board Layout

The board is divided into a 3-column, 2-row grid with a full-width header at the top and a full-width approval workflow strip at the bottom.

```
+------------------------------------------------------------------+
|                    HEADER: FY2026 Budget Plan                     |
+---------------------+---------------------+----------------------+
|                     |                     |                      |
|  Frame 1:           |  Frame 2:           |  Frame 3:            |
|  Budget Summary     |  Department         |  Allocation          |
|  & KPIs             |  Breakdown          |  Pie Chart           |
|                     |                     |                      |
+---------------------+---------------------+----------------------+
|                     |                     |                      |
|  Frame 4:           |  Frame 5:           |  Frame 6:            |
|  Variance           |  Monthly Cash       |  Assumptions         |
|  Tracking           |  Flow Forecast      |  & Risks             |
|                     |                     |                      |
+---------------------+---------------------+----------------------+
|                                                                  |
|  Frame 7: Approval Workflow (Draft → Review → Approved)          |
|                                                                  |
+------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Budget Summary & KPIs

- **Position**: Top-left
- **Size**: 1500 x 1200px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "FY2026 Budget Summary" (font size 28, bold, #1B3A5C)
  - Text block: "Prepared: January 15, 2026 | Version: 3.1 | Owner: Sarah Chen, CFO" (font size 14, #757575)
  - Shape: Rounded rectangle, #F5F5F5, label "Total Budget"
    - Text block inside: "$24,500,000" (font size 36, bold, #1B3A5C)
    - Text block below: "vs. FY2025: $21,200,000 (+15.6%)" (font size 14, #2E7D32)
  - Shape: Rounded rectangle, #F5F5F5, label "Revenue Target"
    - Text block inside: "$38,000,000" (font size 28, bold, #2E7D32)
  - Shape: Rounded rectangle, #F5F5F5, label "Planned EBITDA"
    - Text block inside: "$5,700,000" (font size 28, bold, #2E7D32)
    - Text block below: "EBITDA Margin: 15.0%" (font size 14, #607D8B)
  - Shape: Rounded rectangle, #F5F5F5, label "Headcount Budget"
    - Text block inside: "187 FTEs" (font size 28, bold, #1B3A5C)
    - Text block below: "Current: 162 | Net new: +25" (font size 14, #607D8B)
  - Sticky note (yellow, #FFF9C4): "Board approved 12% YoY growth ceiling — confirm with Linda before finalizing engineering headcount"
  - Sticky note (pink, #F8BBD0): "HR flagged salary benchmarks are 8% above last year — impacts personnel line items across all depts"

### Frame 2: Department Breakdown

- **Position**: Top-center
- **Size**: 1500 x 1200px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "Department Budget Allocation" (font size 24, bold, #1B3A5C)
  - Table shape with columns: Department | FY2025 Actual | FY2026 Proposed | Change | Status
  - Row 1: Engineering | $8,400,000 | $9,800,000 | +16.7% | Pending VP Review
  - Row 2: Sales & Marketing | $5,100,000 | $6,200,000 | +21.6% | CFO Approved
  - Row 3: Product | $2,800,000 | $3,100,000 | +10.7% | Draft
  - Row 4: Customer Success | $1,900,000 | $2,300,000 | +21.1% | Pending VP Review
  - Row 5: G&A (Finance, Legal, HR) | $2,100,000 | $2,200,000 | +4.8% | CFO Approved
  - Row 6: Infrastructure & IT | $900,000 | $900,000 | 0.0% | CFO Approved
  - Status badges: "Pending VP Review" (#F9A825 background), "CFO Approved" (#2E7D32 background, white text), "Draft" (#607D8B background, white text)
  - Sticky note (blue, #BBDEFB): "Sales wants $800K for new SDR team — Jim to present ROI case by Jan 22"
  - Sticky note (green, #C8E6C9): "G&A flat by design: automate AP/AR workflow to absorb growth without headcount"

### Frame 3: Allocation Pie Chart

- **Position**: Top-right
- **Size**: 1500 x 1200px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "Budget Allocation by Department" (font size 24, bold, #1B3A5C)
  - Circle shape (large, centered) representing pie chart with labeled segments:
    - Engineering: 40% (#1B3A5C)
    - Sales & Marketing: 25% (#F9A825)
    - Product: 13% (#607D8B)
    - Customer Success: 9% (#2E7D32)
    - G&A: 9% (#C62828)
    - Infrastructure: 4% (#E65100)
  - Legend: six colored squares with department names and percentages
  - Text block: "Personnel costs represent 72% of total budget ($17.6M)" (font size 14, italic, #607D8B)
  - Sticky note (yellow, #FFF9C4): "Engineering share grew from 37% to 40% — driven by AI/ML team expansion. Flag to board."

### Frame 4: Variance Tracking

- **Position**: Bottom-left
- **Size**: 1500 x 1200px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "Budget vs. Actual Variance (Rolling)" (font size 24, bold, #1B3A5C)
  - Text block: "Updated monthly — last refresh: Dec 2025" (font size 12, #757575)
  - Table shape with columns: Category | Budget | Actual | Variance | %
  - Row 1: Personnel | $15,200,000 | $15,850,000 | -$650,000 | -4.3% (red text)
  - Row 2: Software & Tools | $2,100,000 | $1,940,000 | +$160,000 | +7.6% (green text)
  - Row 3: Marketing Spend | $3,400,000 | $3,620,000 | -$220,000 | -6.5% (red text)
  - Row 4: Professional Services | $800,000 | $720,000 | +$80,000 | +10.0% (green text)
  - Row 5: Travel & Events | $600,000 | $480,000 | +$120,000 | +20.0% (green text)
  - Row 6: Office & Facilities | $1,100,000 | $1,090,000 | +$10,000 | +0.9% (green text)
  - Shape: Red alert banner (#C62828 background): "Personnel overspend driven by unplanned contractor hires in Q3 — corrective action in FY2026 budget"
  - Sticky note (pink, #F8BBD0): "Marketing overspend due to unbudgeted conference sponsorship ($180K). Require pre-approval for FY2026."

### Frame 5: Monthly Cash Flow Forecast

- **Position**: Bottom-center
- **Size**: 1500 x 1200px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "FY2026 Monthly Cash Flow Forecast" (font size 24, bold, #1B3A5C)
  - Bar chart representation (12 bars, one per month):
    - Jan: +$420K | Feb: +$380K | Mar: +$510K | Apr: +$290K | May: +$350K | Jun: +$680K
    - Jul: +$150K | Aug: +$120K | Sep: +$440K | Oct: +$520K | Nov: +$610K | Dec: +$230K
  - Horizontal line shape at $0 baseline (dashed, #C62828)
  - Text block: "Minimum cash reserve target: $2,000,000" (font size 14, #E65100)
  - Text block: "Projected year-end cash position: $6,200,000" (font size 16, bold, #2E7D32)
  - Sticky note (yellow, #FFF9C4): "Jul-Aug dip expected due to annual software renewals ($890K) and summer hiring ramp"
  - Sticky note (blue, #BBDEFB): "Q4 collections historically slow — AR team to implement 15-day follow-up cadence"

### Frame 6: Assumptions & Risks

- **Position**: Bottom-right
- **Size**: 1500 x 1200px
- **Background**: #FAFAFA
- **Elements**:
  - Text block: "Key Assumptions" (font size 22, bold, #1B3A5C)
  - Sticky note 1 (green, #C8E6C9): "Revenue growth: 25% YoY based on current pipeline ($14.2M weighted) and 18% logo retention rate"
  - Sticky note 2 (green, #C8E6C9): "Average salary increase: 4.5% across all departments per compensation benchmarking study"
  - Sticky note 3 (green, #C8E6C9): "AWS infrastructure costs: 12% reduction from reserved instance commitment signed in Nov 2025"
  - Sticky note 4 (green, #C8E6C9): "No acquisition spend budgeted — any M&A activity requires separate board approval"
  - Text block: "Top Risks" (font size 22, bold, #C62828)
  - Sticky note 5 (pink, #F8BBD0): "Risk: Key enterprise deal ($2.1M ARR) slips from Q1 to Q2 — impacts cash flow forecast by 30 days"
  - Sticky note 6 (pink, #F8BBD0): "Risk: Engineering talent market tightens — may need 10-15% salary premium above budget for senior hires"
  - Sticky note 7 (pink, #F8BBD0): "Risk: FX exposure on European revenue (18% of total) — EUR/USD volatility could swing $200-400K"
  - Sticky note 8 (yellow, #FFF9C4): "Mitigation: Build 5% contingency buffer ($1.2M) into operating budget — draw-down requires CFO approval"

### Frame 7: Approval Workflow

- **Position**: Full-width bottom strip
- **Size**: 4600 x 500px
- **Background**: #F5F5F5
- **Elements**:
  - Text block: "Budget Approval Workflow" (font size 22, bold, #1B3A5C)
  - Shape: Rounded rectangle, #607D8B, label "1. Draft" with text "Dept heads submit requests by Jan 10"
  - Shape: Rounded rectangle, #F9A825, label "2. Finance Review" with text "CFO consolidates & challenges Jan 10-17"
  - Shape: Rounded rectangle, #E65100, label "3. VP Review" with text "VPs validate dept budgets Jan 17-24"
  - Shape: Rounded rectangle, #1B3A5C (white text), label "4. CEO Approval" with text "CEO reviews total plan Jan 24-28"
  - Shape: Rounded rectangle, #2E7D32 (white text), label "5. Board Sign-off" with text "Board meeting Feb 5"
  - Shape: Rounded rectangle, #2E7D32 (white text), label "6. Communicate" with text "All-hands budget overview Feb 10"
  - Connectors: Arrow from each step to the next (solid line, #37474F, 2px)
  - Current status indicator: Star shape on "3. VP Review" with text "WE ARE HERE" (#F9A825)

## Connectors & Flow

- Arrow from Frame 1 (Budget Summary) to Frame 2 (Department Breakdown): dashed line, #607D8B, label "Drill down"
- Arrow from Frame 2 (Department Breakdown) to Frame 3 (Pie Chart): dashed line, #607D8B, label "Visual summary"
- Arrow from Frame 4 (Variance Tracking) to Frame 6 (Assumptions & Risks): solid line, #C62828, label "Informs risk assessment"
- Arrow from Frame 5 (Cash Flow) to Frame 6 (Assumptions & Risks): solid line, #E65100, label "Validates assumptions"
- Arrow from Frame 6 (Assumptions & Risks) to Frame 7 (Approval Workflow): solid line, #1B3A5C, label "Feeds approval discussion"

## Example Content

All example content is embedded in the Frames & Sections above. The scenario models a mid-stage SaaS company (NovaTech Inc.) with:

- $38M revenue target for FY2026
- 187 planned headcount across 6 departments
- $24.5M total operating budget
- Key growth investments in Engineering (AI/ML team) and Sales (new SDR team)
- Historical variance data from FY2025 actuals
- Monthly cash flow projections showing seasonal patterns
- Four identified risks with mitigation strategies

## Variations

1. **Quarterly Budget Review**: Reduce to 4 months of cash flow, add a "Q1 Actuals vs. Plan" frame replacing the Pie Chart, and simplify the approval workflow to "Review → Adjust → Approve."
2. **Startup Runway Board**: Replace Department Breakdown with a burn rate tracker, replace Pie Chart with a runway countdown (months of cash remaining), and add a fundraising milestone frame.
3. **Cost Center View**: Replace department-level breakdown with cost center granularity (e.g., "Engineering — Backend," "Engineering — ML," "Engineering — QA") for larger organizations needing sub-department visibility.

## Build Instructions

1. Create the board at 4800 x 3200px with #FAFAFA background.
2. Add a full-width header text "FY2026 Budget Plan — NovaTech Inc." at the top (font 36, bold, #1B3A5C), centered.
3. Create Frame 1 (Budget Summary) at position (50, 150) with size 1500 x 1200. Add the four KPI rounded rectangles in a 2x2 grid inside the frame. Populate each with the numbers specified.
4. Create Frame 2 (Department Breakdown) at position (1600, 150) with size 1500 x 1200. Build the table with 6 department rows. Use colored status badges.
5. Create Frame 3 (Pie Chart) at position (3150, 150) with size 1500 x 1200. Draw the circle with labeled segments and add the legend below.
6. Create Frame 4 (Variance Tracking) at position (50, 1400) with size 1500 x 1200. Build the variance table with 6 rows. Color-code positive (green) and negative (red) variances.
7. Create Frame 5 (Cash Flow) at position (1600, 1400) with size 1500 x 1200. Draw 12 vertical bars for monthly cash flow. Add the dashed zero-line and annotations.
8. Create Frame 6 (Assumptions & Risks) at position (3150, 1400) with size 1500 x 1200. Place assumption sticky notes (green) in the top half and risk sticky notes (pink) in the bottom half.
9. Create Frame 7 (Approval Workflow) at position (50, 2650) with size 4600 x 500. Place 6 workflow step rectangles in a horizontal row with arrows connecting them. Add the "WE ARE HERE" indicator.
10. Add all connectors between frames as specified in the Connectors & Flow section.
11. Add all sticky notes with the exact text specified in each frame.
12. Review alignment: ensure all frames are evenly spaced with 50px gutters.

## Tips & Best Practices

- **Update monthly**: Keep the variance tracking frame current — stale data erodes trust in the budget process.
- **Use sticky notes for context**: Numbers alone do not tell the story. Every significant line item should have a sticky note explaining the "why."
- **Color-code consistently**: Green for favorable, red for unfavorable, gold for items needing attention. Never mix these meanings.
- **Version control**: Update the version number in Frame 1 every time the budget is revised. Archive previous versions as separate Miro boards.
- **Link to source data**: Add links on each table to the underlying spreadsheet or financial model so reviewers can drill into details.
- **Invite department heads**: Give each VP edit access only to their department's section. Use Miro's frame-level permissions if available.
