# KPI Tracker Board

## Overview

- **Purpose**: Track key performance indicators across teams or business units with targets vs. actuals, RAG (Red/Amber/Green) status indicators, trend arrows, accountable owners, and linked action items — providing a shared scoreboard that drives accountability and focus.
- **Best For**: Leadership teams running monthly business reviews, department heads tracking OKRs, project managers monitoring delivery metrics, operations teams running daily standups with data.
- **Complexity**: Medium
- **Board Size**: 5000x3500px

## Color Scheme

| Role       | Color       | Hex     |
| ---------- | ----------- | ------- |
| Primary    | Deep Teal   | #006064 |
| Secondary  | Slate Blue  | #455A64 |
| Accent     | Bright Blue | #1976D2 |
| Background | Off White   | #FAFBFC |
| Text       | Near Black  | #1A1A1A |

## Board Layout

The board uses a structured grid layout with a header, a main KPI metrics grid, and an action items panel at the bottom.

```
+=============================================================+
|                     KPI TRACKER HEADER                        |
|  [Team/Dept] [Period] [Owner] [Review Cadence]               |
+=============================================================+
|                                                             |
|                    KPI METRICS GRID                          |
|                                                             |
| [Metric] [Target] [Actual] [RAG] [Trend] [Owner] [Notes]   |
| [------] [------] [------] [---] [-----] [-----] [-----]   |
| [------] [------] [------] [---] [-----] [-----] [-----]   |
| [------] [------] [------] [---] [-----] [-----] [-----]   |
|                                                             |
+=============================================================+
| TREND DETAILS          | ACTION ITEMS FOR OFF-TRACK KPIS     |
| (Sparklines and        | (Linked corrective actions with     |
|  historical context)   |  owners and deadlines)              |
+=============================================================+
```

## Frames & Sections

### Frame 1: KPI Tracker Header

- **Position**: Top, spanning full width
- **Size**: 4800x350px
- **Background**: #006064 (Deep Teal)
- **Elements**:
  - Text block: "Engineering Team KPI Tracker — Q1 2026" (font size 32, bold, white #FFFFFF)
  - Text block: "Tracking period: January - March 2026 | Data as of March 5, 2026" (font size 14, #B2DFDB)
  - Info pill 1: "Team: Platform Engineering (14 engineers)" (font size 11, white on #00838F rounded rect)
  - Info pill 2: "Owner: CTO — David Chang" (font size 11, white on #00838F rounded rect)
  - Info pill 3: "Review: Bi-weekly (Mondays 2 PM)" (font size 11, white on #00838F rounded rect)
  - Info pill 4: "Source: Jira + Datadog + GitHub" (font size 11, white on #00838F rounded rect)
  - Legend row:
    - Green circle (#2E7D32) + "On Track"
    - Yellow circle (#F9A825) + "At Risk"
    - Red circle (#D32F2F) + "Off Track"
    - Up arrow (#2E7D32) + "Improving"
    - Right arrow (#78909C) + "Flat"
    - Down arrow (#D32F2F) + "Declining"

### Frame 2: KPI Metrics Grid

- **Position**: Center, main area
- **Size**: 4800x1800px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Key Performance Indicators" (font size 22, bold, #1A1A1A)

  - **Category Header: Delivery Velocity** — Rectangle (full width, 40px, #E0F2F1):
    - "DELIVERY VELOCITY" (bold, 14px, #006064)

  - KPI Row 1 — Rectangle (full width, 100px, alternating #FFFFFF):
    - Metric: "Sprint Velocity" (bold, 14px)
    - Target: "42 story points / sprint" (14px, #6B7280)
    - Actual: "38 story points" (14px, bold, #1A1A1A)
    - RAG: Yellow circle (#F9A825)
    - Trend: Down arrow (#D32F2F) — "Declined from 41 last sprint"
    - Owner: "Sarah Lin, Eng Manager"
    - Notes sticky (#FFF8E1, small): "Dropped due to 2 unplanned incidents consuming 15% of sprint capacity."

  - KPI Row 2 — Rectangle (full width, 100px, alternating #F9F9F9):
    - Metric: "Cycle Time (commit to deploy)" (bold, 14px)
    - Target: "< 4 hours" (14px, #6B7280)
    - Actual: "3.2 hours" (14px, bold, #2E7D32)
    - RAG: Green circle (#2E7D32)
    - Trend: Up arrow (#2E7D32) — "Improved from 3.8 hours"
    - Owner: "Platform Team"
    - Notes: "CI/CD pipeline optimization in Feb reduced by 16%"

  - KPI Row 3 — Rectangle (full width, 100px, #FFFFFF):
    - Metric: "Deployment Frequency" (bold, 14px)
    - Target: ">= 12 deploys / week" (14px, #6B7280)
    - Actual: "14 deploys / week" (14px, bold, #2E7D32)
    - RAG: Green circle (#2E7D32)
    - Trend: Up arrow (#2E7D32) — "Up from 11 in January"
    - Owner: "All squads"
    - Notes: "Feature flags adoption driving more frequent, smaller deploys"

  - **Category Header: Quality** — Rectangle (full width, 40px, #E0F2F1):
    - "QUALITY" (bold, 14px, #006064)

  - KPI Row 4 — Rectangle (full width, 100px, #F9F9F9):
    - Metric: "Change Failure Rate" (bold, 14px)
    - Target: "< 5%" (14px, #6B7280)
    - Actual: "7.8%" (14px, bold, #D32F2F)
    - RAG: Red circle (#D32F2F)
    - Trend: Down arrow (#D32F2F) — "Worsened from 5.2% in Jan"
    - Owner: "Sarah Lin, Eng Manager"
    - Notes sticky (#FFEBEE, small): "3 rollbacks in February. Root cause: insufficient staging environment parity."

  - KPI Row 5 — Rectangle (full width, 100px, #FFFFFF):
    - Metric: "Test Coverage" (bold, 14px)
    - Target: ">= 80%" (14px, #6B7280)
    - Actual: "76%" (14px, bold, #F9A825)
    - RAG: Yellow circle (#F9A825)
    - Trend: Right arrow (#78909C) — "Flat (76% last period)"
    - Owner: "Tech Leads"
    - Notes: "Legacy billing module at 52% coverage pulling down average. New services at 91%."

  - KPI Row 6 — Rectangle (full width, 100px, #F9F9F9):
    - Metric: "Mean Time to Recovery (MTTR)" (bold, 14px)
    - Target: "< 30 minutes" (14px, #6B7280)
    - Actual: "22 minutes" (14px, bold, #2E7D32)
    - RAG: Green circle (#2E7D32)
    - Trend: Up arrow (#2E7D32) — "Improved from 35 min (runbook automation)"
    - Owner: "SRE Team — Kevin Patel"
    - Notes: "Automated runbooks for top 5 incident types launched Jan 15"

  - **Category Header: Team Health** — Rectangle (full width, 40px, #E0F2F1):
    - "TEAM HEALTH" (bold, 14px, #006064)

  - KPI Row 7 — Rectangle (full width, 100px, #FFFFFF):
    - Metric: "Developer Satisfaction (eNPS)" (bold, 14px)
    - Target: ">= 40" (14px, #6B7280)
    - Actual: "36" (14px, bold, #F9A825)
    - RAG: Yellow circle (#F9A825)
    - Trend: Down arrow (#D32F2F) — "Down from 42 in Q4 2025"
    - Owner: "David Chang, CTO"
    - Notes sticky (#FFF8E1, small): "Top concern in survey: on-call burden. Secondary: tech debt allocation."

  - KPI Row 8 — Rectangle (full width, 100px, #F9F9F9):
    - Metric: "Unplanned Work Ratio" (bold, 14px)
    - Target: "< 15%" (14px, #6B7280)
    - Actual: "23%" (14px, bold, #D32F2F)
    - RAG: Red circle (#D32F2F)
    - Trend: Down arrow (#D32F2F) — "Worsened from 18% in Jan"
    - Owner: "Sarah Lin, Eng Manager"
    - Notes sticky (#FFEBEE, small): "3 P1 incidents in Feb + 2 urgent customer escalations consumed sprint capacity."

  - KPI Row 9 — Rectangle (full width, 100px, #FFFFFF):
    - Metric: "Attrition Rate (trailing 12 months)" (bold, 14px)
    - Target: "< 10%" (14px, #6B7280)
    - Actual: "7.1%" (14px, bold, #2E7D32)
    - RAG: Green circle (#2E7D32)
    - Trend: Right arrow (#78909C) — "Stable"
    - Owner: "David Chang, CTO"
    - Notes: "1 departure in Q1 (voluntary, relocation). Backfill req approved."

  - **Summary Row** — Rectangle (full width, 60px, #006064):
    - "SUMMARY: 4 Green | 3 Yellow | 2 Red | Overall: AT RISK" (white, bold, 14px)

### Frame 3: Trend Details

- **Position**: Bottom-left
- **Size**: 2300x1000px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Trend Details — Historical Context" (font size 18, bold, #1A1A1A)

  - Trend Card 1 — Rectangle (#FFFFFF, full width, 200px, #D32F2F left border):
    - "Change Failure Rate — 6-Month Trend" (bold, 14px)
    - Monthly values: "Sep: 4.1% | Oct: 3.8% | Nov: 4.5% | Dec: 4.2% | Jan: 5.2% | Feb: 7.8%"
    - Sparkline shape: flat then sharply up in Feb (#D32F2F)
    - Context: "Feb spike driven by 3 rollbacks: payment processing (Feb 8), user auth (Feb 15), data export (Feb 22). All three involved changes to the legacy billing module."

  - Trend Card 2 — Rectangle (#FFFFFF, full width, 200px, #F9A825 left border):
    - "Sprint Velocity — 6-Sprint Trend" (bold, 14px)
    - Sprint values: "S7: 43 | S8: 44 | S9: 41 | S10: 42 | S11: 41 | S12: 38"
    - Sparkline shape: slightly declining (#F9A825)
    - Context: "Velocity dip in S12 correlates with 23% unplanned work ratio. Team capacity was effectively reduced by 2 engineers worth of effort on incident response."

  - Trend Card 3 — Rectangle (#FFFFFF, full width, 200px, #D32F2F left border):
    - "Unplanned Work Ratio — 6-Month Trend" (bold, 14px)
    - Monthly values: "Sep: 12% | Oct: 11% | Nov: 14% | Dec: 13% | Jan: 18% | Feb: 23%"
    - Sparkline shape: steady rise (#D32F2F)
    - Context: "Unplanned work has been creeping up since November. Correlates with growing customer base (+40% in 6 months) without proportional SRE investment."

  - Trend Card 4 — Rectangle (#FFFFFF, full width, 200px, #2E7D32 left border):
    - "MTTR — 6-Month Trend" (bold, 14px)
    - Monthly values: "Sep: 48 min | Oct: 42 min | Nov: 38 min | Dec: 35 min | Jan: 35 min | Feb: 22 min"
    - Sparkline shape: steady decline (#2E7D32)
    - Context: "MTTR improvement driven by automated runbook initiative. 5 of top 10 incident types now have automated response playbooks."

### Frame 4: Action Items for Off-Track KPIs

- **Position**: Bottom-right
- **Size**: 2300x1000px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Corrective Actions for Off-Track KPIs" (font size 18, bold, #1A1A1A)

  - **Change Failure Rate (RED)** section:
  - Action 1 — Sticky (#FFEBEE, 600x100px):
    - "Implement staging environment parity audit" (bold)
    - "Owner: Kevin Patel (SRE) | Due: March 15 | Status: In Progress"
  - Action 2 — Sticky (#FFEBEE, 600x100px):
    - "Add mandatory staging deployment + 2-hour soak period for billing module changes" (bold)
    - "Owner: Sarah Lin | Due: March 10 | Status: Approved, awaiting implementation"
  - Action 3 — Sticky (#FFEBEE, 600x100px):
    - "Increase test coverage for billing module from 52% to 75% (dedicated 2-week sprint)" (bold)
    - "Owner: Tech Lead — Alex Kim | Due: March 28 | Status: Planned for Sprint 13"

  - **Unplanned Work Ratio (RED)** section:
  - Action 4 — Sticky (#FFEBEE, 600x100px):
    - "Hire dedicated SRE engineer (req #ENG-042)" (bold)
    - "Owner: David Chang (CTO) | Due: April 15 | Status: Req approved, recruiting"
  - Action 5 — Sticky (#FFEBEE, 600x100px):
    - "Automate remaining 5 top incident runbooks to reduce on-call burden" (bold)
    - "Owner: Kevin Patel (SRE) | Due: March 31 | Status: 2 of 5 complete"

  - **Developer Satisfaction (YELLOW)** section:
  - Action 6 — Sticky (#FFF8E1, 600x100px):
    - "Revise on-call rotation: move from 1-week to 3-day shifts to reduce burnout" (bold)
    - "Owner: Sarah Lin | Due: March 12 | Status: Proposal drafted"
  - Action 7 — Sticky (#FFF8E1, 600x100px):
    - "Allocate 20% of Sprint 13 to tech debt (team voted on top 5 items)" (bold)
    - "Owner: Sarah Lin | Due: March 21 (sprint start) | Status: Backlog groomed"

## Connectors & Flow

- Vertical connector from header legend down to the KPI grid (legend explains grid symbols).
- Horizontal connectors from red/yellow KPI rows in the grid to their corresponding trend cards and action items below.
- Dashed arrows from each action item back to the specific KPI it addresses (traceability).
- Color-coded connector lines: red connectors for off-track KPIs, yellow for at-risk, green for on-track (visual consistency).

## Example Content

All frames contain realistic pre-filled data for a platform engineering team's Q1 2026 KPI tracker. Key narrative:

**Team Situation**: A 14-person engineering team is tracking 9 KPIs across three categories (Delivery Velocity, Quality, Team Health). Four KPIs are green, three are yellow (at risk), and two are red (off track). The two red items — Change Failure Rate and Unplanned Work Ratio — are interrelated: growing unplanned work from incidents is consuming sprint capacity and correlating with rushed deployments that fail. The corrective actions focus on staging environment improvements, automated runbooks, and an SRE hire.

**Review Cadence**: The CTO reviews this board bi-weekly with engineering managers. Red items get escalated to the weekly leadership team meeting.

## Variations

1. **Company-Wide OKR Tracker**: Replace engineering-specific KPIs with cross-functional OKRs (Revenue, Product, Marketing, Engineering, Customer Success). Add a "Key Result" sub-row under each Objective. Include a quarterly progress percentage.
2. **Marketing KPI Tracker**: Replace metrics with MQLs, SQLs, CAC, LTV, pipeline contribution, campaign ROI, website traffic, and conversion rates. Add a "Campaign Performance" detail section.
3. **Customer Success Scorecard**: Replace metrics with NPS, CSAT, time to first value, expansion rate, churn rate, support ticket volume, QBR completion rate. Add a "Customer Health by Segment" breakdown.

## Build Instructions

1. Set board background to #FAFBFC and dimensions to 5000x3500px.
2. Create the KPI Tracker Header (4800x350px) at the top with #006064 background, title, metadata pills, and RAG legend.
3. Create the KPI Metrics Grid frame (4800x1800px) with white background.
4. Build category header bars (#E0F2F1) to separate KPI groups.
5. Create 9 KPI rows with alternating backgrounds, including: metric name, target, actual, RAG status circle, trend arrow, owner, and notes.
6. Add the summary row at the bottom of the grid with #006064 background.
7. Create two frames at the bottom (2300x1000px each) for Trend Details and Action Items.
8. Build Trend Cards with colored left borders, sparkline shapes, monthly values, and context text.
9. Build Action Items as color-coded stickies grouped by the KPI they address.
10. Draw all connectors: vertical from header, horizontal from grid rows to bottom panels, dashed arrows for traceability.

## Tips & Best Practices

- **Never have a KPI without an owner**: Every metric needs a named individual (not a team) who is accountable for it. Teams share responsibility; individuals drive it.
- **Red means action, not blame**: Off-track KPIs should immediately link to a corrective action with an owner and a deadline. Red without a plan is just anxiety.
- **Limit to 8-12 KPIs**: More than 12 KPIs dilutes focus. If everything is important, nothing is. Choose metrics that are leading indicators, not lagging.
- **Show trends, not just snapshots**: A single data point means nothing. Always show at least a 3-month trend to distinguish noise from signal.
- **Review cadence matters**: KPIs that are reviewed monthly drift for 30 days before anyone notices. Critical metrics should have weekly or bi-weekly reviews.
- **Celebrate green, too**: Do not only focus on red. Acknowledge on-track and improving metrics to reinforce positive behaviors.
