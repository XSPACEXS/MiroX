# Traction Funnel

## Overview

- **Purpose**: A full-funnel marketing metrics board that visualizes the entire customer journey from first touch to closed revenue. Each funnel stage is a dedicated zone showing volume, conversion rates, velocity, channel attribution, and drop-off analysis. The board transforms abstract funnel data into a spatial, interactive workspace where marketing and sales teams can diagnose bottlenecks, celebrate wins, and plan optimization experiments together.
- **Best For**: Growth marketing teams tracking acquisition funnels, demand generation managers reporting pipeline metrics, revenue operations teams aligning marketing and sales handoffs, startup founders monitoring unit economics and funnel health.
- **Complexity**: Advanced
- **Board Size**: 5000 x 3500px

## Color Scheme

| Role                 | Color           | Hex     |
| -------------------- | --------------- | ------- |
| Primary              | Deep Indigo     | #1B1464 |
| Secondary            | Electric Orange | #F39C12 |
| Accent               | Neon Green      | #00E676 |
| Stage: Awareness     | Sky Blue        | #74B9FF |
| Stage: Interest      | Lavender        | #A29BFE |
| Stage: Consideration | Amber           | #FDCB6E |
| Stage: Intent        | Tangerine       | #E17055 |
| Stage: Evaluation    | Coral           | #FF6B6B |
| Stage: Purchase      | Emerald         | #00B894 |
| Background           | Dark Navy       | #0A0A2E |
| Text on Dark         | White           | #FFFFFF |
| Drop-off Indicator   | Muted Red       | #FF7675 |
| Growth Indicator     | Bright Green    | #55EFC4 |

## Board Layout

```
+-----------------------------------------------------------------------+
|                    [ TRACTION FUNNEL DASHBOARD ]                        |
|           "From First Touch to Closed Revenue"                         |
+-----------------------------------------------------------------------+
|                                                                        |
|  +------------------------------------------------------------------+ |
|  |                     FUNNEL VISUALIZATION                          | |
|  | Awareness > Interest > Consideration > Intent > Eval > Purchase   | |
|  +------------------------------------------------------------------+ |
|                                                                        |
|  +---------------------+  +---------------------+                     |
|  | CHANNEL ATTRIBUTION |  | VELOCITY & TIMING   |                     |
|  | (Source breakdown)   |  | (Days in each stage)|                     |
|  +---------------------+  +---------------------+                     |
|                                                                        |
|  +---------------------+  +---------------------+                     |
|  | DROP-OFF ANALYSIS   |  | COHORT COMPARISON   |                     |
|  | (Where leads leak)  |  | (Month-over-month)  |                     |
|  +---------------------+  +---------------------+                     |
|                                                                        |
|  +------------------------------------------------------------------+ |
|  |              EXPERIMENT LOG & OPTIMIZATION PIPELINE                | |
|  +------------------------------------------------------------------+ |
+-----------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Dashboard Title Banner

- **Size**: 4800 x 350px | **Background**: Deep Indigo (#1B1464)
- Title: "Traction Funnel Dashboard" (56pt, white), subtitle: "From First Touch to Closed Revenue"
- Key metrics strip: "Q1 2026 | 142K visitors | 8,400 leads | 1,260 MQLs | 420 SQLs | 168 Opps | 84 Closed Won | $2.1M Revenue"
- Date range selector placeholder and "Last updated: March 6, 2026" timestamp

### Frame 2: Funnel Visualization

- **Size**: 4400 x 900px | **Background**: Dark Navy (#0A0A2E) at 95%
- Six trapezoid-shaped stages arranged left-to-right, each narrower than the last:
  - **Awareness** (Sky Blue): 142,000 visitors | Sources: Organic 45%, Paid 30%, Social 15%, Referral 10%
  - **Interest** (Lavender): 8,400 leads (5.9% conversion) | Email signups, content downloads, webinar registrants
  - **Consideration** (Amber): 1,260 MQLs (15% conversion) | Scored by behavior: product page visits, pricing page, demo request
  - **Intent** (Tangerine): 420 SQLs (33.3% conversion) | Sales accepted, budget confirmed, timeline identified
  - **Evaluation** (Coral): 168 Opportunities (40% conversion) | In active sales cycle, POC/trial underway
  - **Purchase** (Emerald): 84 Closed Won (50% conversion) | $2.1M total, $25K avg deal size
- Conversion rate arrows between each stage
- Volume bars showing relative size

### Frame 3: Channel Attribution

- **Size**: 2100 x 800px | **Background**: Sky Blue at 8%
- Header: "Channel Attribution" (32pt, Sky Blue)
- Channel breakdown table:
  - **Organic Search**: 63,900 visitors | 3,780 leads | $420K revenue | CAC: $180 | ROI: 8.2x
  - **Paid Search**: 42,600 visitors | 2,520 leads | $630K revenue | CAC: $340 | ROI: 4.1x
  - **Social Media**: 21,300 visitors | 1,260 leads | $315K revenue | CAC: $280 | ROI: 3.8x
  - **Referral/Partners**: 14,200 visitors | 840 leads | $735K revenue | CAC: $120 | ROI: 12.1x
- Best performer callout: "Referral has 12.1x ROI — invest more in partner program"
- Worst performer callout: "Events channel CAC at $2,100 — needs optimization or reallocation"

### Frame 4: Velocity & Timing

- **Size**: 2100 x 800px | **Background**: Lavender at 8%
- Header: "Funnel Velocity" (32pt, Lavender)
- Stage duration bars:
  - Awareness to Interest: avg 12 days
  - Interest to MQL: avg 18 days
  - MQL to SQL: avg 8 days (fastest — strong scoring model)
  - SQL to Opportunity: avg 22 days (slowest — bottleneck identified)
  - Opportunity to Close: avg 35 days
- Total cycle: 95 days average (target: 75 days)
- Sticky: "SQL to Opp is the bottleneck — sales needs better enablement materials"
- Sticky: "Enterprise deals avg 140 days vs SMB avg 45 days — segment reporting needed"

### Frame 5: Drop-off Analysis

- **Size**: 2100 x 700px | **Background**: Muted Red at 8%
- Header: "Drop-off Analysis — Where Leads Leak" (32pt, Muted Red)
- Leakage points with volumes:
  - Awareness to Interest: 133,600 lost (94.1% drop) — "Normal for top-of-funnel, but improve landing page conversion"
  - Interest to MQL: 7,140 lost (85%) — "Nurture sequences need work. Only 22% open rate on drip emails"
  - MQL to SQL: 840 lost (66.7%) — "Scoring model too generous? Or sales follow-up too slow (avg 36hrs)"
  - SQL to Opp: 252 lost (60%) — "Budget objection in 45% of lost SQLs. Need better ROI collateral"
  - Opp to Close: 84 lost (50%) — "Lost to competitor in 38% of cases. Competitive positioning gaps"
- Action items for each drop-off point

### Frame 6: Cohort Comparison

- **Size**: 2100 x 700px | **Background**: Amber at 8%
- Header: "Month-over-Month Cohort Analysis" (32pt, Amber)
- Comparison grid:
  - **January Cohort**: 45K visitors | 2,800 leads | 380 MQLs | 6.2% lead-to-MQL | $680K pipeline
  - **February Cohort**: 48K visitors | 2,900 leads | 440 MQLs | 7.1% lead-to-MQL | $780K pipeline
  - **March Cohort (in progress)**: 49K visitors | 2,700 leads | 440 MQLs | 7.8% lead-to-MQL | $640K pipeline (partial)
- Trend indicators: Lead-to-MQL improving (+1.6pp over 3 months)
- Sticky: "February cohort converting 15% better than January — new content strategy working"
- Sticky: "March traffic is up but lead capture rate dropped — check form performance"

### Frame 7: Experiment Log & Optimization Pipeline

- **Size**: 4400 x 600px | **Background**: Neon Green at 6%
- Header: "Optimization Experiments" (32pt, Neon Green)
- Active experiments:
  - "Homepage CTA test: 'Start Free Trial' vs 'See It In Action' — Day 8, +12% for variant B, 78% confidence"
  - "Pricing page simplification: 3 tiers vs 4 tiers — Day 14, +8% conversion, 92% confidence"
  - "Lead magnet swap: Ebook vs Interactive Calculator — Day 5, calculator +22% but low sample"
- Completed experiments:
  - "Email nurture frequency: 2x/week vs 1x/week — WINNER: 1x/week (+18% MQL rate, less fatigue)"
  - "Demo booking flow: Calendar embed vs form — WINNER: Calendar (+34% booking rate)"
- Backlog of next experiments with priority scores

## Connectors & Flow

1. Funnel stages connected left-to-right with gradient arrows (labeled with conversion rates)
2. Channel Attribution --> Funnel Visualization (labeled "Traffic sources feed top of funnel")
3. Funnel Visualization --> Drop-off Analysis (labeled "Identify leakage")
4. Drop-off Analysis --> Experiment Log (labeled "Informs optimization priorities")
5. Experiment Log --> Funnel Visualization (labeled "Winners improve conversion")
6. Cohort Comparison --> Funnel Visualization (labeled "Trend validation")

## Example Content

Full-funnel metrics for a B2B SaaS company (NovaTech) with $2.1M quarterly revenue, 142K monthly visitors, and a 95-day average sales cycle. All data represents realistic B2B benchmarks with channel-level attribution and cohort-level analysis.

## Variations

1. **E-commerce Funnel**: Replace SQLs/Opps with Cart/Checkout stages, add AOV and repeat purchase metrics
2. **PLG (Product-Led Growth) Funnel**: Add Signup > Activation > Aha Moment > Conversion stages
3. **Freemium Conversion Funnel**: Focus on Free > Trial > Paid > Expansion > Advocacy
4. **B2C Subscription Funnel**: Impression > Click > Landing > Signup > First Use > Retained > Subscribed

## Build Instructions

1. Create board at 5000x3500px with Dark Navy background
2. Place title banner at top with key metric strip
3. Build the wide funnel visualization across the middle-top — use trapezoid shapes narrowing left to right
4. Place Channel Attribution and Velocity side by side below the funnel
5. Place Drop-off Analysis and Cohort Comparison in the next row
6. Add Experiment Log as a wide footer section
7. Connect all sections with labeled flow arrows
8. Add conversion rate labels on funnel stage transitions

## Tips & Best Practices

- Update funnel metrics weekly from your CRM/analytics tools — stale data kills trust in the board
- Color-code conversion rates: green for above target, yellow for within 10%, red for below target
- Celebrate improvements publicly with "before/after" sticky notes
- Use this board in weekly marketing-sales alignment meetings to diagnose handoff issues
- Link each funnel stage to detailed sub-boards with individual lead-level analysis
- Export monthly snapshots to track long-term funnel health trends
