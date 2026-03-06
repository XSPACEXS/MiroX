# Investor Update Board

## Overview

- **Purpose**: Communicate company progress, key metrics, wins, challenges, and asks to investors in a structured, scannable visual format. This board replaces the traditional investor update email with a richer, more engaging experience that investors can consume in 5 minutes. It builds trust through consistency, transparency, and specificity.
- **Best For**: Founders sending quarterly or monthly updates to investors, companies preparing for board meetings, startups building narrative for next fundraise, leadership teams creating accountability dashboards
- **Complexity**: Medium
- **Board Size**: 4200x3000px (compact — investor attention is limited)

## Color Scheme

| Role                | Color        | Hex     |
| ------------------- | ------------ | ------- |
| Primary (Headers)   | Charcoal     | #212121 |
| Secondary           | Slate        | #37474F |
| Accent              | Deep Blue    | #0D47A1 |
| Positive Metrics    | Forest Green | #2E7D32 |
| Negative Metrics    | Crimson      | #C62828 |
| Neutral Metrics     | Medium Gray  | #616161 |
| Wins Section        | Light Green  | #E8F5E9 |
| Challenges Section  | Light Pink   | #FCE4EC |
| Ask Section         | Light Blue   | #E3F2FD |
| Background          | White        | #FFFFFF |
| Card Fill           | White        | #FFFFFF |
| Confidential Banner | Red          | #C62828 |
| Text Primary        | Near Black   | #1B1B1B |
| Text Secondary      | Dark Gray    | #616161 |
| Divider             | Light Gray   | #E0E0E0 |

## Board Layout

The board uses a dashboard layout optimized for scanning: TL;DR at top, metrics row, narrative sections in two columns, financial summary, and ask at the bottom.

```
┌───────────────────────────────────────────────────────────┐
│  ⚠ CONFIDENTIAL — For investor use only                   │
├───────────────────────────────────────────────────────────┤
│  [Logo] FinLearn — Q4 2025 Investor Update                │
├───────────────────────────────────────────────────────────┤
│  TL;DR: Record quarter. $8M ARR (+35% QoQ). 3 enterprise │
│  deals closed. Churn improved. Exploring Series C.         │
├───────────────────────────────────────────────────────────┤
│  HEADLINE METRICS                                          │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │
│  │ ARR │ │ MRR │ │Cust │ │ NRR │ │ CAC │ │ Run │       │
│  │ $8M │ │$680K│ │4.2K │ │118% │ │$165 │ │14mo │       │
│  │↑35% │ │↑12% │ │↑22% │ │↑5%  │ │↓15% │ │stbl │       │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘       │
├───────────────────────────┬───────────────────────────────┤
│  WINS                     │  CHALLENGES                    │
│  ● 3 enterprise deals     │  ● Eng velocity dropped 15%   │
│    ($1.2M combined ARR)   │    (tech debt paydown planned) │
│  ● AI tutor launched      │  ● APAC delayed to Q2         │
│    (2x engagement)        │    (partner contract)          │
│  ● VP Eng hired (ex-Stripe)│ ● 2 sr eng departures        │
│  ● Churn: 4.8% → 3.2%    │    (replaced, no impact)      │
├───────────────────────────┼───────────────────────────────┤
│  PRODUCT                  │  TEAM                          │
│  Shipped: AI study plans, │  Current: 52 (+8 this quarter) │
│    learning analytics     │  Key hire: VP Eng (Dec start)  │
│  Next: Enterprise SSO,    │  Open: 5 roles                 │
│    mobile app v2          │    3 eng, 1 sales, 1 data     │
│  Decision: Rebuilding     │  Morale: 8/10 (eNPS: +42)     │
│    onboarding (Jan)       │  Attrition: 0 voluntary        │
├───────────────────────────────────────────────────────────┤
│  FINANCIAL SUMMARY                                         │
│  Revenue: $680K/mo │ Expenses: $520K/mo │ Net: +$160K/mo  │
│  Cash: $12M │ Burn: $360K/mo (net) │ Runway: 14 months    │
│  Series C: Exploring. Target $30M at $150M+ valuation.     │
├───────────────────────────────────────────────────────────┤
│  THE ASK                                                   │
│  1. Intro to CLOs at Fortune 500 (enterprise pipeline)    │
│  2. Advice on APAC market entry (Japan, Singapore)        │
│  3. Series C lead investor introductions                   │
└───────────────────────────────────────────────────────────┘

Approximate positions:
  Confidential Banner:  (50, 50) — 4100x40
  Header:               (50, 100) — 4100x80
  TL;DR:                (50, 200) — 4100x100
  Metrics Row:          (50, 320) — 4100x250
  Wins:                 (50, 600) — 2000x450
  Challenges:           (2100, 600) — 2050x450
  Product:              (50, 1080) — 2000x400
  Team:                 (2100, 1080) — 2050x400
  Financial:            (50, 1510) — 4100x250
  Ask:                  (50, 1790) — 4100x250
```

## Frames & Sections

### Frame 0: Confidential Banner

- **Position**: (50, 50)
- **Size**: 4100x40px
- **Background**: Red (#C62828)
- **Elements**:
  - Text: "CONFIDENTIAL — For investor use only. Not for distribution." (14px bold, white, centered)

### Frame 1: Header

- **Position**: (50, 100)
- **Size**: 4100x80px
- **Background**: Charcoal (#212121)
- **Elements**:
  - Logo at (70, 110), 50x50px
  - Text: "FinLearn — Q4 2025 Investor Update" (24px bold, white)
  - Text: "Period: October - December 2025" (12px, #90A4AE)

### Frame 2: TL;DR

- **Position**: (50, 200)
- **Size**: 4100x100px
- **Background**: Light Blue (#E3F2FD)
- **Elements**:
  - Header: "TL;DR" (18px bold, #0D47A1)
  - Text: "Record quarter. Crossed $8M ARR (+35% QoQ). Closed 3 enterprise deals totaling $1.2M ARR. Churn improved from 4.8% to 3.2%. Hired VP Engineering (ex-Stripe). Exploring Series C fundraise targeting $30M." (16px, #1B1B1B)

### Frame 3: Headline Metrics

- **Position**: (50, 320)
- **Size**: 4100x250px
- **Background**: White (#FFFFFF)
- **Elements**:
  - Header: "Headline Metrics" (18px bold, #212121)
  - Six metric cards evenly distributed:
  - Card "ARR": (100, 370), 600x180px
    - Label: "ANNUAL RECURRING REVENUE" (11px uppercase, #9E9E9E)
    - Value: "$8.0M" (42px bold, #2E7D32)
    - Delta: "↑ 35% QoQ" (14px semibold, #2E7D32)
    - Sparkline: ascending bar chart
  - Card "MRR": (750, 370), 600x180px
    - Value: "$680K" — "↑ 12% MoM" (green)
  - Card "Customers": (1400, 370), 600x180px
    - Value: "4,200" — "↑ 22% QoQ" (green)
  - Card "NRR": (2050, 370), 600x180px
    - Value: "118%" — "↑ 5% QoQ" (green)
  - Card "CAC": (2700, 370), 600x180px
    - Value: "$165" — "↓ 15% QoQ" (green — lower is better)
  - Card "Runway": (3350, 370), 600x180px
    - Value: "14 mo" — "Stable" (gray)

### Frame 4: Wins

- **Position**: (50, 600)
- **Size**: 2000x450px
- **Background**: Light Green (#E8F5E9)
- **Elements**:
  - Header: "Wins This Quarter" (22px bold, #2E7D32)
  - Bulleted list (16px, #1B1B1B):
    - "Closed 3 enterprise deals totaling $1.2M combined ARR (Acme Corp, GlobalEd, EduTech Inc)"
    - "Launched AI-powered study plans — 2x improvement in learning completion rates"
    - "Hired VP Engineering: Sarah Chen, previously Sr. Director at Stripe. Started December."
    - "Churn improved from 4.8% to 3.2% — root cause: redesigned onboarding flow in October"
    - "NPS increased from 38 to 46 — highest ever, driven by AI tutor feature"

### Frame 5: Challenges

- **Position**: (2100, 600)
- **Size**: 2050x450px
- **Background**: Light Pink (#FCE4EC)
- **Elements**:
  - Header: "Challenges" (22px bold, #C62828)
  - Bulleted list (16px, #1B1B1B):
    - "Engineering velocity dropped 15% in Q4 — root cause: accumulated technical debt in payment module. Plan: Dedicated tech debt sprint in January (2 weeks)."
    - "APAC market entry delayed from Q1 to Q2 — root cause: partner contract negotiations taking longer than expected. Mitigation: Running parallel discussions with alternative partners."
    - "Two senior engineers departed (Nov, Dec) — both replaced within 4 weeks, no product impact. Root cause: comp competitiveness — adjusting bands in Q1."
  - Sticky note: "None of these challenges are existential. Each has a clear plan." at (3600, 900), 300x100, fill #FFF9C4

### Frame 6: Product Update

- **Position**: (50, 1080)
- **Size**: 2000x400px
- **Background**: White (#FFFFFF), border 1px #E0E0E0
- **Elements**:
  - Header: "Product" (22px bold, #0D47A1)
  - Subheader "Shipped in Q4:" (16px bold)
    - "AI-powered personalized study plans"
    - "Learning analytics dashboard for B2B customers"
    - "Mobile app performance improvements (50% faster load)"
  - Subheader "Q1 2026 Roadmap:" (16px bold)
    - "Enterprise SSO (SAML/OIDC) — unlocks enterprise pipeline"
    - "Mobile app v2 with offline learning"
    - "Onboarding redesign (reduce time-to-value from 12min to 5min)"
  - Subheader "Key Decision:" (16px bold, #F9A825)
    - "Rebuilding onboarding from scratch in January — short-term velocity hit, long-term retention gain"

### Frame 7: Team Update

- **Position**: (2100, 1080)
- **Size**: 2050x400px
- **Background**: White (#FFFFFF), border 1px #E0E0E0
- **Elements**:
  - Header: "Team" (22px bold, #0D47A1)
  - Text: "Current headcount: 52 people (+8 this quarter)" (16px bold)
  - Text: "Key hire: VP Engineering — Sarah Chen (ex-Stripe), started December 2025" (16px)
  - Text: "Open roles: 5 (3 engineers, 1 AE, 1 data analyst)" (16px)
  - Subheader: "Team Health:" (16px bold)
    - "Morale: 8/10 (team survey)"
    - "eNPS: +42 (up from +35)"
    - "Voluntary attrition this quarter: 0"
    - "Involuntary: 0"
  - Sticky note: "Full team page: [link to internal directory]" at (3600, 1350), 250x80, fill #E3F2FD

### Frame 8: Financial Summary

- **Position**: (50, 1510)
- **Size**: 4100x250px
- **Background**: #F5F5F5
- **Elements**:
  - Header: "Financial Summary" (22px bold, #212121)
  - Three-column layout:
    - Revenue: "$680K/mo MRR | $8.0M ARR"
    - Expenses: "$520K/mo (people: 72%, infra: 12%, marketing: 10%, other: 6%)"
    - Net: "+$160K/mo cash flow positive (before non-recurring)"
  - Cash metrics:
    - "Cash position: $12.0M"
    - "Net burn: $360K/mo (including one-time expenses)"
    - "Runway: 14 months at current burn"
  - Fundraise note:
    - "Series C: Actively exploring. Targeting $30M at $150M+ pre-money. Initial conversations with 3 tier-1 funds." (16px bold, #0D47A1)

### Frame 9: The Ask

- **Position**: (50, 1790)
- **Size**: 4100x250px
- **Background**: Light Blue (#E3F2FD)
- **Elements**:
  - Header: "The Ask" (22px bold, #0D47A1)
  - Numbered list (16px bold, #1B1B1B):
    1. "Introductions to Chief Learning Officers at Fortune 500 companies — we have 5 enterprise deals in pipeline that need senior champion buy-in"
    2. "Advice on APAC market entry strategy, specifically Japan and Singapore — who should we talk to?"
    3. "Series C lead investor introductions — we're looking for a growth-stage fund with EdTech or FinTech thesis"
  - Text: "Please reply to this update or reach out to maya@finlearn.io with any connections." (14px, #616161)

## Connectors & Flow

No explicit connectors — the dashboard layout is self-explanatory. Visual flow is top-to-bottom, left-to-right within paired sections.

## Variations

1. **Monthly update (minimal)**: TL;DR + metrics + 3 bullets wins + 2 bullets challenges + ask. No product/team/financial sections.
2. **Board meeting version**: Add governance section, detailed financial model, strategic options analysis, risk register
3. **Fundraising version**: Expand financial section, add market size, competitive landscape, use-of-funds, cap table summary
4. **Annual review**: Four quarterly snapshots side-by-side showing full-year progression
5. **Pre-seed version**: Minimal metrics, heavy on vision/problem, team bios, early signals

## Build Instructions

1. Create board (4200x3000px, background #FFFFFF)
2. Add confidential banner at very top (red bar)
3. Build header with logo, company name, update period
4. Write TL;DR paragraph (most important info in 2-3 sentences)
5. Build metric cards row (6 cards with values, trends, labels)
6. Build wins section (left column, green tint, 4-5 specific bullets)
7. Build challenges section (right column, pink tint, 2-3 honest bullets with plans)
8. Build product section (left column, shipped + roadmap + decisions)
9. Build team section (right column, headcount + hires + morale)
10. Build financial summary (full width, revenue + expenses + cash + runway)
11. Build the ask section (full width, 2-3 specific actionable requests)
12. Final check: Could an investor understand your business in 5 minutes from this board?

## Tips & Best Practices

- Always include the confidential banner — investors expect it
- The TL;DR is the most important section. If investors read nothing else, they read this.
- Be honest about challenges. Include root cause AND plan for each.
- Metrics must have trends (MoM or QoQ). Numbers without context are meaningless.
- The ask must be SPECIFIC. "Help us grow" is not an ask. "Introduce us to the CLO at Google" is.
- Send in the same format every time. Investors should know where to find MRR without searching.
- If a metric is bad, do not hide it. Show it, explain it, and describe your response.
- Financial transparency builds trust. Show revenue, expenses, burn, and runway every update.
- Update on time. Late updates signal chaos, regardless of content quality.
