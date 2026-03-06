# Deal Tracker Board

## Overview

- **Purpose**: Provide a real-time dashboard for tracking active deals, monitoring stage progression, forecasting revenue, analyzing win/loss patterns, and displaying team performance — giving sales managers and leadership a single pane of glass for revenue operations.
- **Best For**: Sales managers running weekly forecast calls, VP Sales reviewing quarterly attainment, RevOps teams building pipeline reports, individual reps tracking personal quota progress.
- **Complexity**: Medium
- **Board Size**: 5500x3500px

## Color Scheme

| Role       | Color       | Hex     |
| ---------- | ----------- | ------- |
| Primary    | Navy Blue   | #1B2A4A |
| Secondary  | Steel Blue  | #4A6FA5 |
| Accent     | Emerald     | #2E7D32 |
| Background | Light Slate | #F0F2F5 |
| Text       | Charcoal    | #1A1A2E |

## Board Layout

The board uses a dashboard layout with a top KPI strip, a large central deals table, and bottom-row analytics panels.

```
+==============================================================+
|                    REVENUE KPI STRIP                          |
| [Quota] [Closed] [Pipeline] [Forecast] [Win Rate] [Velocity] |
+==============================================================+
|                                                              |
|                  ACTIVE DEALS TABLE                           |
|                                                              |
| [Deal] [Value] [Stage] [Prob] [Close Date] [Owner] [Action] |
| [----] [-----] [-----] [---] [----------] [-----] [------]  |
| [----] [-----] [-----] [---] [----------] [-----] [------]  |
|                                                              |
+==================+====================+======================+
| FORECAST         | WIN/LOSS           | TEAM                  |
| BREAKDOWN        | ANALYSIS           | LEADERBOARD           |
|                  |                    |                       |
| [Commit/Best     | [Win reasons,      | [Rep rankings by      |
|  Case/Upside]    |  Loss reasons,     |  closed revenue,      |
|                  |  cycle analysis]   |  pipeline, activity]  |
+==================+====================+======================+
```

## Frames & Sections

### Frame 1: Revenue KPI Strip

- **Position**: Top, spanning full width
- **Size**: 5300x400px
- **Background**: #1B2A4A (Navy Blue)
- **Elements**:
  - Text block: "Q1 2026 Revenue Dashboard — North America Mid-Market" (font size 32, bold, white #FFFFFF)
  - Text block: "Week of March 2-6, 2026 | Updated daily from HubSpot" (font size 13, #A0AEC0)
  - KPI Card 1 — Rectangle (220x120px, white #FFFFFF, rounded):
    - Label: "Team Quota" (font size 11, #6B7280)
    - Value: "$2,550,000" (font size 24, bold, #1A1A2E)
    - Subtext: "Q1 combined" (font size 10, #6B7280)
  - KPI Card 2 — Rectangle (220x120px, white #FFFFFF, rounded):
    - Label: "Closed Revenue" (font size 11, #6B7280)
    - Value: "$1,127,000" (font size 24, bold, #2E7D32)
    - Subtext: "44.2% attainment" (font size 10, #2E7D32)
    - Progress bar: 44% filled, green
  - KPI Card 3 — Rectangle (220x120px, white #FFFFFF, rounded):
    - Label: "Open Pipeline" (font size 11, #6B7280)
    - Value: "$3,842,000" (font size 24, bold, #4A6FA5)
    - Subtext: "1.5x coverage" (font size 10, #F9A825)
  - KPI Card 4 — Rectangle (220x120px, white #FFFFFF, rounded):
    - Label: "Forecast (Weighted)" (font size 11, #6B7280)
    - Value: "$2,340,000" (font size 24, bold, #1A1A2E)
    - Subtext: "91.8% of quota" (font size 10, #F9A825)
  - KPI Card 5 — Rectangle (220x120px, white #FFFFFF, rounded):
    - Label: "Win Rate" (font size 11, #6B7280)
    - Value: "31%" (font size 24, bold, #F9A825)
    - Subtext: "vs. 35% target" (font size 10, #C62828)
  - KPI Card 6 — Rectangle (220x120px, white #FFFFFF, rounded):
    - Label: "Avg Cycle" (font size 11, #6B7280)
    - Value: "38 days" (font size 24, bold, #1A1A2E)
    - Subtext: "vs. 42 day target" (font size 10, #2E7D32)

### Frame 2: Active Deals Table

- **Position**: Center, below KPI strip
- **Size**: 5300x1600px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Active Deals" (font size 22, bold, #1B2A4A)
  - Filter pills: "All Stages" (#1B2A4A, selected), "Proposal+" (#E0E0E0), "Negotiation" (#E0E0E0), "At Risk" (#E0E0E0)
  - Table header row — Rectangle (full width, 40px, #F0F2F5):
    - Columns: "Deal Name" | "Value" | "Stage" | "Prob" | "Expected Close" | "Owner" | "Days in Stage" | "Next Action"
  - Row 1 (#FFFFFF):
    - "Pacific Brands — E-Commerce" | "$280,000" | "Negotiation" (yellow pill #FFF9C4) | "70%" | "March 20" | "Rachel T." | "8 days" | "Migration plan review March 10"
  - Row 2 (#FFFFFF):
    - "Atlas Manufacturing — ERP" | "$210,000" | "Proposal" (orange pill #FFE0B2) | "50%" | "April 5" | "Marcus J." | "6 days" | "Follow up pricing questions March 8"
  - Row 3 (#F9F9F9):
    - "Horizon Telecom — Monitoring" | "$195,000" | "Negotiation" (yellow pill #FFF9C4) | "75%" | "March 15" | "Rachel T." | "5 days" | "Final pricing call March 9"
  - Row 4 (#FFFFFF):
    - "Redwood Insurance — Claims AI" | "$165,000" | "Proposal" (orange pill #FFE0B2) | "55%" | "April 15" | "Sara K." | "3 days" | "Legal review of MSA terms"
  - Row 5 (#F9F9F9):
    - "Pinnacle Financial — Compliance" | "$150,000" | "Qualified" (purple pill #D1C4E9) | "30%" | "May 1" | "Rachel T." | "10 days" | "Technical deep-dive March 12"
  - Row 6 (#FFFFFF):
    - "Evergreen Health — Telehealth" | "$145,000" | "Negotiation" (yellow pill #FFF9C4) | "80%" | "March 12" | "Marcus J." | "3 days" | "Redline BAA by March 7"
  - Row 7 (#F9F9F9):
    - "Meridian Health — Patient Portal" | "$120,000" | "Lead" (blue pill #BBDEFB) | "10%" | "June 15" | "Sara K." | "4 days" | "Schedule intro with champion"
  - Row 8 (#FFFFFF):
    - "ClearView Analytics — BI" | "$95,000" | "Proposal" (orange pill #FFE0B2) | "50%" | "April 10" | "Marcus J." | "5 days" | "Executive sponsor meeting March 11"
  - Row 9 (#F9F9F9):
    - "NovaBuild — Project Mgmt" | "$85,000" | "Qualified" (purple pill #D1C4E9) | "25%" | "May 15" | "Sara K." | "12 days" | "Demo scheduled March 10"
  - Row 10 (#FFFFFF):
    - "Summit Education — LMS" | "$78,000" | "Proposal" (orange pill #FFE0B2) | "45%" | "April 20" | "Rachel T." | "16 days" | "Revised SOW after feedback"
    - Red dot indicator: Stalled 16 days
  - Row 11 (#F9F9F9):
    - "GreenLeaf Retail — POS" | "$62,000" | "Lead" (blue pill #BBDEFB) | "10%" | "July 1" | "Marcus J." | "7 days" | "Awaiting response to cold email #2"
  - Row 12 (#FFFFFF):
    - "BrightEdge Media — Content" | "$55,000" | "Qualified" (purple pill #D1C4E9) | "25%" | "May 30" | "Sara K." | "18 days" | "Send case study from similar client"
    - Red dot indicator: Stalled 18 days
  - Summary row — Rectangle (full width, 40px, #F0F2F5):
    - "12 Active Deals | Total: $1,640,000 | Weighted: $746,500 | Avg Probability: 45.4%"

### Frame 3: Forecast Breakdown

- **Position**: Bottom-left
- **Size**: 1700x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Q1 Forecast Breakdown" (font size 20, bold, #1B2A4A)
  - Forecast Category 1 — Rectangle (#E8F5E9, full width, 120px):
    - "CLOSED" (bold, 14px, #2E7D32)
    - "$1,127,000 — 7 deals" (font size 18, bold)
    - "44.2% of quota achieved"
  - Forecast Category 2 — Rectangle (#C8E6C9, full width, 120px):
    - "COMMIT (90%+ probability)" (bold, 14px, #2E7D32)
    - "$425,000 — 2 deals" (font size 18, bold)
    - "Evergreen Health ($145K) + Horizon Telecom ($195K) + Pacific Brands partial ($85K)"
  - Forecast Category 3 — Rectangle (#FFF9C4, full width, 120px):
    - "BEST CASE (50-89% probability)" (bold, 14px, #F9A825)
    - "$788,000 — 5 deals" (font size 18, bold)
    - "Atlas, Redwood, Pacific Brands remainder, ClearView, Summit"
  - Forecast Category 4 — Rectangle (#FFE0B2, full width, 120px):
    - "UPSIDE (25-49% probability)" (bold, 14px, #EF6C00)
    - "$290,000 — 3 deals" (font size 18, bold)
    - "Pinnacle Financial, NovaBuild, BrightEdge"
  - Forecast Category 5 — Rectangle (#FFEBEE, full width, 120px):
    - "PIPELINE (<25% probability)" (bold, 14px, #C62828)
    - "$182,000 — 2 deals" (font size 18, bold)
    - "Meridian Health, GreenLeaf Retail"
  - Summary Box — Rectangle (#1B2A4A, full width, 80px):
    - "FORECAST TOTAL: Closed + Commit = $1,552,000 (60.9%)" (white, bold)
    - "Best Case Scenario = $2,340,000 (91.8%)" (white)
    - "Full Upside = $2,812,000 (110.3%)" (#2E7D32)

### Frame 4: Win/Loss Analysis

- **Position**: Bottom-center
- **Size**: 1700x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Win/Loss Analysis — Q1 2026" (font size 20, bold, #1B2A4A)

  - **Wins Section** header (font size 16, bold, #2E7D32):
  - Win Reason 1 — Sticky (#C8E6C9): "Superior product fit (43% of wins) — Our vertical-specific features consistently beat generalist competitors."
  - Win Reason 2 — Sticky (#C8E6C9): "Faster implementation (29% of wins) — 3-week avg vs. competitor 8-week avg drives urgency."
  - Win Reason 3 — Sticky (#C8E6C9): "Champion advocacy (21% of wins) — Deals with an identified champion close at 2.3x rate."
  - Win Reason 4 — Sticky (#C8E6C9): "POC success (7% of wins) — 85% of POCs convert when success criteria are pre-agreed."

  - **Losses Section** header (font size 16, bold, #C62828):
  - Loss Reason 1 — Sticky (#FFCDD2): "Price / Budget (38% of losses) — Lost 4 deals to lower-cost alternatives or budget cuts."
  - Loss Reason 2 — Sticky (#FFCDD2): "Chose incumbent (25% of losses) — Switching costs perceived as too high; failed to quantify cost of inaction."
  - Loss Reason 3 — Sticky (#FFCDD2): "No decision (22% of losses) — Deals went dark or prospects chose to do nothing."
  - Loss Reason 4 — Sticky (#FFCDD2): "Feature gap (15% of losses) — Missing: SSO with Okta (shipping Q2), custom alerting (on roadmap)."

  - **Key Insight** — Rectangle (#FFF9C4, full width, 80px):
    - "INSIGHT: Deals with a confirmed champion AND a quantified business case win at 58% vs. 19% without. Focus discovery on building both." (bold, 13px)

  - **Cycle Time Analysis** — Text block:
    - "Won deals avg cycle: 32 days"
    - "Lost deals avg cycle: 51 days"
    - "Deals stalled >14 days in a stage: 67% end in loss"

### Frame 5: Team Leaderboard

- **Position**: Bottom-right
- **Size**: 1700x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Team Leaderboard — Q1 2026" (font size 20, bold, #1B2A4A)

  - **Rep Card 1** — Rectangle (#E8F5E9, full width, 250px):
    - Rank badge: "1" (circle, #FFD700, bold)
    - "Rachel Torres — Sr. Account Executive" (bold, 16px)
    - "Quota: $900,000 | Closed: $512,000 (56.9%)" (14px)
    - Progress bar: 57% filled, green
    - "Pipeline: $770,000 | Forecast: $683,000"
    - "Win Rate: 38% | Avg Deal: $102,400 | Avg Cycle: 29 days"
    - "Active Deals: 4 | Meetings This Week: 8"

  - **Rep Card 2** — Rectangle (#FFF9C4, full width, 250px):
    - Rank badge: "2" (circle, #C0C0C0, bold)
    - "Marcus Johnson — Account Executive" (bold, 16px)
    - "Quota: $850,000 | Closed: $380,000 (44.7%)" (14px)
    - Progress bar: 45% filled, amber
    - "Pipeline: $547,000 | Forecast: $422,000"
    - "Win Rate: 30% | Avg Deal: $76,000 | Avg Cycle: 35 days"
    - "Active Deals: 4 | Meetings This Week: 6"

  - **Rep Card 3** — Rectangle (#FFEBEE, full width, 250px):
    - Rank badge: "3" (circle, #CD7F32, bold)
    - "Sara Kim — Account Executive" (bold, 16px)
    - "Quota: $800,000 | Closed: $235,000 (29.4%)" (14px)
    - Progress bar: 29% filled, red
    - "Pipeline: $462,000 | Forecast: $311,000"
    - "Win Rate: 24% | Avg Deal: $58,750 | Avg Cycle: 44 days"
    - "Active Deals: 4 | Meetings This Week: 4"
    - Coach note sticky (#FFF9C4, small): "Focus areas: Increase meeting volume, accelerate qualified-to-proposal stage, work on discovery depth."

  - **Team Summary** — Rectangle (#F0F2F5, full width, 100px):
    - "Team Total: $1,127,000 / $2,550,000 (44.2%)" (bold, 16px)
    - "4 weeks remaining in Q1 | Need $1,423,000 to hit quota"
    - "Required weekly close rate: $355,750 (vs. $125,222 current avg)"

## Connectors & Flow

- Vertical connectors from the KPI strip down to the Active Deals Table (data feeds summary).
- Horizontal connectors from Active Deals Table down to the three analytics panels (deals feed analysis).
- Dashed connectors from specific stalled deals (red dot rows) to a "Stalled Deal Alert" callout in the Forecast Breakdown panel.
- Arrows from Win/Loss Analysis insights to the Team Leaderboard coaching notes (analysis informs coaching).

## Example Content

All frames contain realistic pre-filled data for a mid-market SaaS sales team in Q1 2026. Key narrative:

**Team Situation**: A 3-person AE team is at 44.2% of their $2.55M combined Q1 quota with 4 weeks remaining. Rachel Torres is leading the pack at 57% attainment. The weighted forecast suggests 91.8% of quota is achievable if best-case deals close, but the current weekly close rate needs to nearly triple. Two deals are stalled (Summit Education and BrightEdge Media) and need immediate attention.

**Action Items from This Dashboard**:

1. Rachel to close Evergreen Health and Horizon Telecom this week ($340K commit)
2. Marcus to accelerate Atlas Manufacturing — address pricing objections by March 8
3. Sara needs pipeline acceleration coaching — schedule 1:1 with manager
4. Pipeline hygiene: Force-rank stalled deals and either advance or disqualify by March 10

## Variations

1. **Individual Rep Dashboard**: Remove Team Leaderboard. Expand Active Deals Table to show only one rep's deals with more detail per row (full contact info, last activity, email open rates). Add a personal activity tracker (calls, emails, meetings) as a sidebar.
2. **Executive Revenue Dashboard**: Aggregate multiple teams. Replace Active Deals Table with a team-level summary table. Expand Forecast Breakdown with quarterly trend charts. Add a "Pipeline Coverage by Segment" section.
3. **Customer Success Dashboard**: Replace pipeline stages with lifecycle stages (Onboarding, Adoption, Renewal, Expansion). Replace Win/Loss with Health Score Analysis. Replace Leaderboard with CSM Portfolio Breakdown.

## Build Instructions

1. Set board background to #F0F2F5 and dimensions to 5500x3500px.
2. Create the Revenue KPI Strip (5300x400px) at the top with #1B2A4A background and six white KPI cards.
3. Create the Active Deals Table frame (5300x1600px) below the KPI strip with white background, header row, and 12 deal rows with alternating light gray backgrounds.
4. Create three equal-width frames (1700x1200px) in a row at the bottom.
5. Build the Forecast Breakdown with stacked colored rectangles for each forecast category.
6. Build the Win/Loss Analysis with green win stickies and red loss stickies, plus the key insight box.
7. Build the Team Leaderboard with three rep cards including progress bars and performance metrics.
8. Add connectors: vertical from KPI strip to deals table, horizontal from deals table to bottom panels.
9. Mark stalled deals with red dot indicators and connect them with dashed lines to forecast panel warnings.
10. Add filter pill shapes above the deals table header.

## Tips & Best Practices

- **Update daily**: Stale dashboards make pipeline reviews a waste of time. Sync with CRM or assign a daily 5-minute update routine.
- **Focus on commit vs. best case**: Managers should coach reps to move deals from best case to commit, not just add new pipeline.
- **Watch the velocity**: Deals that stall in any stage for more than 14 days should trigger an automatic review. Velocity is the best predictor of close.
- **Review losses equally**: Most teams celebrate wins and ignore losses. The loss analysis section is arguably the most valuable part of this board.
- **Use the leaderboard constructively**: Highlight behaviors and techniques, not just results. Rachel's win rate might come from better discovery — share that with the team.
- **Forecast honestly**: Sandbagging and happy ears both erode trust with leadership. Use the commit/best case/upside framework to give a range, not a single number.
