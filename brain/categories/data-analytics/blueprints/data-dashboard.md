# Analytics Dashboard Board

## Overview

- **Purpose**: Create a visual analytics dashboard on a Miro board that communicates KPIs, trend charts, comparison tables, data source documentation, and refresh schedules — serving as a shared reference for stakeholders who need a high-level view of business performance without diving into BI tools.
- **Best For**: Data teams presenting to executives, product managers tracking feature adoption, marketing teams reviewing campaign performance, operations teams monitoring SLAs.
- **Complexity**: Advanced
- **Board Size**: 6000x3500px

## Color Scheme

| Role       | Color       | Hex     |
| ---------- | ----------- | ------- |
| Primary    | Deep Teal   | #006064 |
| Secondary  | Slate Blue  | #455A64 |
| Accent     | Bright Blue | #1976D2 |
| Background | Off White   | #FAFBFC |
| Text       | Near Black  | #1A1A1A |

## Board Layout

The board uses a dashboard grid layout with a header strip, a KPI card row, a main chart area in the center, and data documentation at the bottom.

```
+================================================================+
|                   DASHBOARD HEADER                               |
|  [Title] [Date Range] [Data Source] [Last Refresh]               |
+================================================================+
| KPI CARD | KPI CARD | KPI CARD | KPI CARD | KPI CARD | KPI CARD |
+================================================================+
|  TREND CHART       |  COMPARISON TABLE     |  BREAKDOWN CHART    |
|  (Revenue over     |  (Month-over-month    |  (Revenue by        |
|   time — 12 mo)    |   metric comparison)  |   channel/segment)  |
+================================================================+
|  COHORT ANALYSIS   |  FUNNEL METRICS       |  ANOMALY LOG        |
|  (User retention   |  (Conversion funnel   |  (Notable data      |
|   by monthly       |   by stage)           |   events & flags)   |
|   cohort)          |                       |                     |
+================================================================+
|              DATA SOURCE DOCUMENTATION                           |
|  [Sources] [Definitions] [Refresh Schedule] [Known Limitations]  |
+================================================================+
```

## Frames & Sections

### Frame 1: Dashboard Header

- **Position**: Top, spanning full width
- **Size**: 5800x300px
- **Background**: #006064 (Deep Teal)
- **Elements**:
  - Text block: "Product Analytics Dashboard — SaaS Platform" (font size 34, bold, white #FFFFFF)
  - Text block: "Reporting Period: January 1 - February 28, 2026" (font size 15, #B2DFDB)
  - Info pill 1: "Source: Mixpanel + Stripe + Salesforce" (font size 11, white on #00838F rounded rect)
  - Info pill 2: "Last Refresh: March 5, 2026 at 06:00 UTC" (font size 11, white on #00838F rounded rect)
  - Info pill 3: "Owner: Data Team — Priya Sharma" (font size 11, white on #00838F rounded rect)
  - Info pill 4: "Cadence: Weekly executive review (Tuesdays 10 AM)" (font size 11, white on #00838F rounded rect)

### Frame 2: KPI Cards Row

- **Position**: Below header, spanning full width
- **Size**: 5800x300px
- **Background**: #FAFBFC
- **Elements**:
  - KPI Card 1 — Rectangle (280x220px, white #FFFFFF, shadow, rounded):
    - Label: "Monthly Recurring Revenue" (font size 11, #6B7280)
    - Value: "$2.47M" (font size 32, bold, #1A1A1A)
    - Change: "+8.3% MoM" (font size 13, #2E7D32, up arrow icon)
    - Sparkline: small upward trend line shape (#2E7D32)
    - Target: "Target: $2.6M" (font size 10, #78909C)
  - KPI Card 2 — Rectangle (280x220px, white #FFFFFF, shadow, rounded):
    - Label: "Active Users (MAU)" (font size 11, #6B7280)
    - Value: "34,200" (font size 32, bold, #1A1A1A)
    - Change: "+12.1% MoM" (font size 13, #2E7D32, up arrow icon)
    - Sparkline: small upward trend line (#2E7D32)
    - Target: "Target: 35,000" (font size 10, #78909C)
  - KPI Card 3 — Rectangle (280x220px, white #FFFFFF, shadow, rounded):
    - Label: "Net Revenue Retention" (font size 11, #6B7280)
    - Value: "112%" (font size 32, bold, #2E7D32)
    - Change: "+2pp MoM" (font size 13, #2E7D32, up arrow icon)
    - Sparkline: small steady trend line (#2E7D32)
    - Target: "Target: 110%" (font size 10, #78909C)
  - KPI Card 4 — Rectangle (280x220px, white #FFFFFF, shadow, rounded):
    - Label: "Customer Churn Rate" (font size 11, #6B7280)
    - Value: "2.1%" (font size 32, bold, #D32F2F)
    - Change: "+0.3pp MoM" (font size 13, #D32F2F, up arrow icon — bad direction)
    - Sparkline: small uptick line (#D32F2F)
    - Target: "Target: <1.8%" (font size 10, #78909C)
  - KPI Card 5 — Rectangle (280x220px, white #FFFFFF, shadow, rounded):
    - Label: "Avg Revenue Per User" (font size 11, #6B7280)
    - Value: "$72.20" (font size 32, bold, #1A1A1A)
    - Change: "-1.4% MoM" (font size 13, #D32F2F, down arrow icon)
    - Sparkline: small slight-dip line (#EF6C00)
    - Target: "Target: $75.00" (font size 10, #78909C)
  - KPI Card 6 — Rectangle (280x220px, white #FFFFFF, shadow, rounded):
    - Label: "NPS Score" (font size 11, #6B7280)
    - Value: "47" (font size 32, bold, #1976D2)
    - Change: "+3 pts MoM" (font size 13, #2E7D32, up arrow icon)
    - Sparkline: small upward trend line (#1976D2)
    - Target: "Target: 50" (font size 10, #78909C)

### Frame 3: Revenue Trend Chart

- **Position**: Left, main chart row
- **Size**: 1900x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Chart title: "Monthly Recurring Revenue — Trailing 12 Months" (font size 18, bold, #1A1A1A)
  - Chart area with axis lines:
    - Y-axis label: "MRR ($M)" | X-axis label: "Month"
    - Data points represented as connected circles on a line:
    - Mar 2025: $1.52M | Apr: $1.58M | May: $1.65M | Jun: $1.72M
    - Jul: $1.81M | Aug: $1.89M | Sep: $1.98M | Oct: $2.08M
    - Nov: $2.18M | Dec: $2.28M | Jan 2026: $2.38M | Feb 2026: $2.47M
  - Trend line in #1976D2 (Bright Blue), 3px weight
  - Target line in dashed #EF6C00 (Warm Orange): "$2.6M Q1 target" label
  - Annotation sticky (#FFF8E1, small): "Nov surge: annual plan migration campaign drove 14% uplift"
  - Growth rate label: "62.5% YoY growth" (font size 14, bold, #2E7D32)

### Frame 4: Month-over-Month Comparison Table

- **Position**: Center, main chart row
- **Size**: 1900x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Table title: "Key Metrics — Month-over-Month Comparison" (font size 18, bold, #1A1A1A)
  - Table header row (#F0F2F5):
    - "Metric" | "Jan 2026" | "Feb 2026" | "Change" | "Status"
  - Row 1: "MRR" | "$2.38M" | "$2.47M" | "+3.8%" | Green circle (on track)
  - Row 2: "New Customers" | "187" | "204" | "+9.1%" | Green circle
  - Row 3: "Churned Customers" | "38" | "52" | "+36.8%" | Red circle (alert)
  - Row 4: "Expansion Revenue" | "$142K" | "$168K" | "+18.3%" | Green circle
  - Row 5: "MAU" | "30,500" | "34,200" | "+12.1%" | Green circle
  - Row 6: "DAU/MAU Ratio" | "38%" | "41%" | "+3pp" | Green circle
  - Row 7: "Avg Session Duration" | "8.2 min" | "7.8 min" | "-4.9%" | Yellow circle (watch)
  - Row 8: "Support Tickets" | "342" | "411" | "+20.2%" | Red circle (alert)
  - Row 9: "CSAT Score" | "4.3/5" | "4.1/5" | "-0.2" | Yellow circle (watch)
  - Row 10: "ARPU" | "$73.20" | "$72.20" | "-1.4%" | Yellow circle (watch)
  - Callout box (#FFEBEE, 400x60px): "ALERT: Churn spike of +36.8% correlates with pricing change effective Feb 1. Investigate cohort impact."

### Frame 5: Revenue Breakdown Chart

- **Position**: Right, main chart row
- **Size**: 1900x1200px
- **Background**: #FFFFFF
- **Elements**:
  - Chart title: "Revenue by Channel — February 2026" (font size 18, bold, #1A1A1A)
  - Horizontal bar chart representation:
    - "Self-Serve" — bar at 42% width (#1976D2): "$1,037K (42%)"
    - "Sales-Assisted" — bar at 31% width (#FB8C00): "$766K (31%)"
    - "Partner Channel" — bar at 18% width (#7B1FA2): "$445K (18%)"
    - "Enterprise Direct" — bar at 9% width (#006064): "$222K (9%)"
  - Segment comparison section:
    - "SMB (<50 employees): $988K | 40% of MRR | Growing +15% MoM"
    - "Mid-Market (50-500): $1,112K | 45% of MRR | Growing +6% MoM"
    - "Enterprise (500+): $370K | 15% of MRR | Growing +2% MoM"
  - Insight sticky (#FFF8E1): "Self-serve is the fastest growing channel (+18% MoM) driven by PLG improvements. Enterprise growth is slowing — needs sales investment."

### Frame 6: Cohort Analysis

- **Position**: Left, second chart row
- **Size**: 1900x1000px
- **Background**: #FFFFFF
- **Elements**:
  - Chart title: "Monthly User Retention by Cohort" (font size 18, bold, #1A1A1A)
  - Cohort grid (simplified representation):
    - Header: "Cohort" | "Month 0" | "Month 1" | "Month 2" | "Month 3" | "Month 6" | "Month 12"
    - "Sep 2025 (n=1,240)": 100% | 68% | 52% | 45% | 34% | 24%
    - "Oct 2025 (n=1,380)": 100% | 71% | 55% | 48% | 36% | --
    - "Nov 2025 (n=1,890)": 100% | 74% | 58% | 50% | -- | --
    - "Dec 2025 (n=1,450)": 100% | 72% | 56% | -- | -- | --
    - "Jan 2026 (n=1,620)": 100% | 70% | -- | -- | -- | --
    - "Feb 2026 (n=1,780)": 100% | -- | -- | -- | -- | --
  - Color coding: cells green (>60%), yellow (40-60%), orange (25-39%), red (<25%)
  - Insight sticky (#FFF8E1): "Nov 2025 cohort shows best retention (74% M1) — likely due to new onboarding flow launched Oct 28. Recommend scaling this approach."

### Frame 7: Funnel Metrics

- **Position**: Center, second chart row
- **Size**: 1900x1000px
- **Background**: #FFFFFF
- **Elements**:
  - Chart title: "User Activation Funnel — February 2026" (font size 18, bold, #1A1A1A)
  - Funnel stages (descending trapezoid shapes):
    - Stage 1 — Rectangle (#1976D2, full width): "Signed Up: 1,780 users (100%)"
    - Stage 2 — Rectangle (#1976D2, 85% width): "Completed Onboarding: 1,513 (85%)"
    - Stage 3 — Rectangle (#1976D2, 62% width): "Connected Data Source: 1,103 (62%)"
    - Stage 4 — Rectangle (#FB8C00, 41% width): "Created First Dashboard: 730 (41%)"
    - Stage 5 — Rectangle (#FB8C00, 28% width): "Invited Team Member: 498 (28%)"
    - Stage 6 — Rectangle (#2E7D32, 19% width): "Converted to Paid: 338 (19%)"
  - Drop-off labels between stages:
    - "85% complete onboarding (-15%)"
    - "62% connect data (-23% drop — biggest gap)"
    - "41% create dashboard (-21%)"
    - "28% invite team (-13%)"
    - "19% convert to paid (-9%)"
  - Insight sticky (#FFEBEE): "BOTTLENECK: 23% drop between onboarding and data source connection. Hypothesis: connector setup is too complex. A/B test simplified wizard launching March 15."

### Frame 8: Anomaly Log

- **Position**: Right, second chart row
- **Size**: 1900x1000px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Data Anomalies & Notable Events" (font size 18, bold, #1A1A1A)
  - Event Card 1 — Rectangle (#FFEBEE, full width, 120px):
    - Red dot + "Feb 1 — Pricing Change" (bold, 14px)
    - "Increased starter plan from $29 to $39/mo. Saw 36.8% churn spike in Feb. 87% of churned users were on starter plan. Impact: -$48K MRR."
  - Event Card 2 — Rectangle (#FFF8E1, full width, 120px):
    - Yellow dot + "Feb 12 — Data Pipeline Outage" (bold, 14px)
    - "Stripe webhook processing delayed 4 hours. Feb 12 revenue data backfilled on Feb 13. No impact on reported MRR but daily metrics for Feb 12 are unreliable."
  - Event Card 3 — Rectangle (#E8F5E9, full width, 120px):
    - Green dot + "Feb 18 — Product Hunt Launch" (bold, 14px)
    - "Featured on Product Hunt (#3 product of the day). 2,400 signups in 48 hours. This cohort has higher-than-average activation rate (89% onboarding completion)."
  - Event Card 4 — Rectangle (#FFF8E1, full width, 120px):
    - Yellow dot + "Feb 25 — Tracking Discrepancy" (bold, 14px)
    - "Mixpanel MAU count shows 34,200 but internal DB shows 33,850. Delta of 350 users likely due to bot traffic. Investigating filter update."
  - Event Card 5 — Rectangle (#E3F2FD, full width, 120px):
    - Blue dot + "Upcoming: March 15 — A/B Test Launch" (bold, 14px)
    - "Simplified data connector wizard. Expect funnel impact at Stage 3. Will report results in March dashboard."

### Frame 9: Data Source Documentation

- **Position**: Bottom, spanning full width
- **Size**: 5800x500px
- **Background**: #F5F5F5
- **Elements**:
  - Frame title: "Data Source Documentation" (font size 20, bold, #1A1A1A)
  - Source Card 1 — Rectangle (#FFFFFF, 380x180px):
    - "Mixpanel" (bold, 14px)
    - "Type: Product analytics"
    - "Metrics: MAU, DAU, sessions, activation funnel, retention cohorts"
    - "Refresh: Real-time (15-min delay)"
    - "Owner: Priya Sharma"
  - Source Card 2 — Rectangle (#FFFFFF, 380x180px):
    - "Stripe" (bold, 14px)
    - "Type: Payment/billing"
    - "Metrics: MRR, ARPU, churn, expansion revenue, new customers"
    - "Refresh: Daily at 06:00 UTC via webhook"
    - "Owner: Priya Sharma"
  - Source Card 3 — Rectangle (#FFFFFF, 380x180px):
    - "Salesforce" (bold, 14px)
    - "Type: CRM"
    - "Metrics: Pipeline, sales-assisted revenue, enterprise deals"
    - "Refresh: Bi-daily sync at 06:00 and 18:00 UTC"
    - "Owner: RevOps — Jake Martinez"
  - Source Card 4 — Rectangle (#FFFFFF, 380x180px):
    - "Intercom" (bold, 14px)
    - "Type: Support"
    - "Metrics: Ticket volume, CSAT, response time"
    - "Refresh: Daily at 07:00 UTC"
    - "Owner: Support Ops — Anna Chen"
  - Definitions Box — Rectangle (#FFFFFF, 500x180px):
    - "Key Definitions" (bold, 14px)
    - "MRR: Sum of all active subscription amounts, normalized to monthly"
    - "MAU: Unique users with at least 1 session in trailing 30 days"
    - "Churn: Customers who cancelled or downgraded to $0 in the period"
    - "NRR: (Starting MRR + Expansion - Contraction - Churn) / Starting MRR"
  - Limitations Box — Rectangle (#FFF8E1, 500x180px):
    - "Known Limitations" (bold, 14px)
    - "Trial users included in MAU but excluded from MRR"
    - "Partner channel attribution has 48-hour lag"
    - "Enterprise contracts are recognized on booking date, not payment date"
    - "Bot traffic filter may undercount MAU by 1-2%"

## Connectors & Flow

- Vertical connector from Dashboard Header down through KPI Cards to chart rows (visual hierarchy).
- Dashed horizontal connectors between KPI Cards and their related detailed charts (e.g., MRR card connects to Revenue Trend Chart).
- Dotted connectors from Anomaly Log events to the specific data points they affect in the Trend Chart and Comparison Table.
- Solid arrow from Funnel Metrics bottleneck insight to Anomaly Log "upcoming A/B test" card (action connects to experiment).

## Example Content

All frames contain realistic pre-filled data for a mid-stage SaaS product analytics dashboard. Key narrative:

**Business Context**: A SaaS product with $2.47M MRR and 34,200 monthly active users is growing at 62.5% YoY. The dashboard reveals strong top-line growth but surfaces two concerns: a churn spike tied to a February pricing change and a persistent activation funnel bottleneck where users drop off during data source connection. The team is responding with a simplified connector wizard A/B test in March.

**Dashboard Audience**: Weekly executive review (CEO, CTO, VP Product, VP Sales), plus self-serve access for product managers and data team.

## Variations

1. **Marketing Dashboard**: Replace Revenue Trend with Campaign Performance (spend, impressions, clicks, conversions). Replace Cohort Analysis with Channel Attribution. Replace Funnel with Marketing Qualified Lead flow.
2. **Operations Dashboard**: Replace revenue metrics with SLA compliance, uptime, incident count, mean time to resolution. Replace Funnel with Incident Severity Breakdown. Add a real-time status section.
3. **Lightweight Weekly Snapshot**: Remove Cohort Analysis and Anomaly Log. Compress to KPI cards + one trend chart + one comparison table. Reduce board size to 3000x1500px.

## Build Instructions

1. Set board background to #FAFBFC and dimensions to 6000x3500px.
2. Create the Dashboard Header (5800x300px) at the top with #006064 background and title/metadata pills.
3. Create a row of 6 KPI cards (280x220px each) below the header with white backgrounds, subtle shadows, and rounded corners.
4. Create a 3-column layout for the main chart row (each ~1900x1200px) with white backgrounds.
5. Build the Revenue Trend Chart with a line chart representation, trend line, target line, and annotation.
6. Build the Comparison Table with a header row, 10 data rows with RAG status indicators, and alert callout.
7. Build the Revenue Breakdown Chart with horizontal bars and segment comparison text.
8. Create a second 3-column row (each ~1900x1000px) for Cohort Analysis, Funnel Metrics, and Anomaly Log.
9. Build the Cohort grid with color-coded retention percentages.
10. Build the Funnel with descending-width rectangles and drop-off labels.
11. Build the Anomaly Log with color-coded event cards.
12. Create the Data Source Documentation strip (5800x500px) at the bottom with source cards, definitions, and limitations.
13. Add all connectors as described.

## Tips & Best Practices

- **Lead with the story, not the data**: Start every dashboard review by stating the 2-3 key takeaways before diving into individual metrics. The anomaly log helps surface what matters.
- **Use RAG consistently**: Green = on track or improving, yellow = watch / slight miss, red = needs immediate action. Never use red for informational items.
- **Document your data sources**: Stakeholders lose trust in dashboards when they do not understand where numbers come from. The documentation frame is not optional.
- **Log anomalies religiously**: Every data spike, outage, or one-time event should be logged so future viewers can explain historical patterns.
- **Set targets on every KPI**: A number without a target is just a number. Targets create accountability and make trends meaningful.
- **Refresh before every review**: Stale dashboards are worse than no dashboards. Automate refresh where possible and show the last-refresh timestamp prominently.
