# Strategy & Planning — Examples Reference

## Overview

This document provides detailed breakdowns of god-level strategy boards across multiple frameworks, anti-patterns to avoid, before/after transformations, and design elements worth stealing. Every example is annotated with specific dimensions, colors, content patterns, and the reasoning behind design decisions.

---

## Example 1: Enterprise SaaS SWOT Analysis

### Context

A B2B SaaS company ($5M ARR) in the compliance automation space, preparing for a board meeting to discuss the next 18 months of strategy.

### Board Specifications

- **Framework**: SWOT Analysis
- **Layout**: Four-Quadrant Matrix (Pattern 1)
- **Dimensions**: 6000 x 6000px
- **Palette**: Executive Authority (Royal Purple + Deep Teal + Strategic Green + Warning Red)
- **Target audience**: Board of Directors and executive team

### Header Zone (6000 x 140px)

- Title: "STRATEGIC POSITION ASSESSMENT" — 36px, Bold, Near Black (#1A1A2E)
- Subtitle: "ComplianceAI — Q2 2026 Board Review" — 18px, Regular, Slate (#546E7A)
- Version: "v2.3 | Updated March 2026" — 14px, Regular, Medium Gray (#78909C), right-aligned
- Thin separator line below: 2px, #E0E0E0

### Quadrant Structure

Each quadrant occupies approximately 2900 x 2500px with 20px padding between quadrants and a 4px center cross in #78909C.

**Strengths Quadrant (Top-Left)**:

- Background: #1565C0 at 6% opacity
- Header: "STRENGTHS" — 24px, Bold, #1565C0
- Item count: 6 sticky notes arranged in 3x2 grid

Items (each 200x150px, white background):

1. "3 NLP patents granted — 18-month technology lead" (Confidence: Solid border. Evidence: USPTO records, patent filing dates)
2. "NPS 72 (industry avg: 34) — strongest in mid-market" (Confidence: Solid. Evidence: Q1 2026 survey, n=847)
3. "96% annual retention rate — enterprise segment" (Confidence: Solid. Evidence: Finance dashboard, trailing 12 months)
4. "ML model trained on 2.3M compliance docs — 94% accuracy" (Confidence: Solid. Evidence: Internal benchmark, Jan 2026)
5. "SOC2 + GDPR + HIPAA certified — broadest coverage in category" (Confidence: Solid. Evidence: Audit reports on file)
6. "Inbound content drives 45% of qualified leads at $28 CAC" (Confidence: Solid. Evidence: HubSpot analytics, 6-month average)

**Weaknesses Quadrant (Top-Right)**:

- Background: #E65100 at 6% opacity
- Header: "WEAKNESSES" — 24px, Bold, #E65100
- Item count: 5 sticky notes

Items:

1. "No mobile app — 40% of competitor users access via mobile daily" (Critical priority — gold border 3px. Evidence: Competitor product research, G2 reviews)
2. "Engineering team 60% contractors — knowledge transfer risk" (High priority. Evidence: HR data, March 2026)
3. "No GraphQL API — enterprise prospects expect modern API" (Dashed border — estimated impact. Evidence: 3 lost deals citing API limitations)
4. "Single-region deployment (US-East) — latency for EU customers" (Solid. Evidence: APM data showing 340ms avg for EU users vs. 45ms US)
5. "12-day average onboarding time — competitors average 3 days" (Solid. Evidence: CS team data, trailing 90 days)

**Opportunities Quadrant (Bottom-Left)**:

- Background: #2E7D32 at 6% opacity
- Header: "OPPORTUNITIES" — 24px, Bold, #2E7D32
- Item count: 6 sticky notes

Items:

1. "EU Digital Services Act — Q4 2026 deadline creates $2.8B compliance market" (Critical. Evidence: Gartner market report, Feb 2026)
2. "Competitor X raised prices 40% — NPS dropped to 21, 2,300 customers match our ICP" (Solid. Evidence: G2 reviews + LinkedIn analysis)
3. "AI governance regulations emerging in US/EU — new compliance category" (Dashed. Evidence: Draft legislation tracker, McKinsey analysis)
4. "Mid-market SaaS segment growing 23% CAGR — our sweet spot" (Solid. Evidence: Bessemer State of the Cloud 2026)
5. "Healthcare vertical untapped — HIPAA compliance pain acute" (Dashed. Evidence: 12 inbound requests in Q1 from healthcare orgs)
6. "Partnership opportunity with Big4 consulting — warm intro available" (Dotted. Evidence: CEO relationship, no formal agreement)

**Threats Quadrant (Bottom-Right)**:

- Background: #B71C1C at 6% opacity
- Header: "THREATS" — 24px, Bold, #B71C1C
- Item count: 5 sticky notes

Items:

1. "OpenAI launching compliance product Q3 2026 — 10x our R&D budget" (Critical. Evidence: TechCrunch report + insider source)
2. "AWS raised API pricing 25% — margin impact from 67% to 52%" (Critical. Evidence: AWS pricing announcement, effective June 2026)
3. "Key competitor acquired by Salesforce — will gain distribution advantage" (Solid. Evidence: Public M&A announcement)
4. "Talent market: ML engineers commanding 30% salary increase YoY" (Solid. Evidence: Levels.fyi + internal hiring data)
5. "Customer data sovereignty laws fragmenting — multi-region requirement" (Dashed. Evidence: Legal team analysis of pending legislation)

### Cross-Section Connections (6 connectors)

1. S1 (NLP patents) --> O1 (EU DSA): Green solid, "patents give us first-mover compliance coverage"
2. S3 (96% retention) --> O2 (Competitor X churn): Green solid, "our retention proves we can absorb their unhappy customers"
3. W1 (No mobile) --> T3 (Salesforce acquisition): Red solid, "Salesforce will offer mobile-native — our gap widens"
4. W2 (60% contractors) --> T4 (Talent market): Red solid, "rising costs make contractor model unsustainable"
5. S4 (ML model accuracy) --> T1 (OpenAI entry): Gold dotted, "KEY: Our domain-specific training data is our moat against OpenAI's general model"
6. O1 (EU DSA) --> T5 (Data sovereignty): Gold dotted, "DSA opportunity requires multi-region deployment — our weakness W4"

### Implications Zone (6000 x 350px, bottom)

- Background: #FFF8E1
- Border: 3px, #F9A825
- Title: "STRATEGIC PRIORITIES — NEXT 18 MONTHS"

Three priority actions:

1. "PRIORITY 1: Ship mobile MVP by Q2 end — blocks enterprise deals and widens competitive gap"
2. "PRIORITY 2: Establish EU region (Frankfurt) by Q3 — required for DSA opportunity and sovereignty compliance"
3. "PRIORITY 3: Convert 500 Competitor X customers by year end — capitalize on their price increase backlash"

### Key Insight Callout

Positioned between the quadrants and implications zone:

"KEY INSIGHT: Our 18-month NLP patent lead + EU DSA regulatory deadline (Q4 2026) = a one-time window to establish category leadership. If we don't move before OpenAI enters (Q3), we lose the positioning advantage permanently."

---

## Example 2: Startup Business Model Canvas

### Context

A Series A startup ($2M raised) building a developer productivity tool, using BMC to validate their business model before scaling.

### Board Specifications

- **Framework**: Business Model Canvas
- **Layout**: Nine-Block Canvas (Pattern 2)
- **Dimensions**: 9000 x 6000px
- **Palette**: Strategic Clarity (Midnight Blue + Steel Gray + Bright Teal)
- **Target audience**: Founding team, investors, advisory board

### Key Block Content

**Value Propositions** (center column, most prominent):

- "Reduce code review time from 45 min to 8 min — AI-powered analysis"
- "Zero-config integration — works with GitHub, GitLab, Bitbucket in under 2 min"
- "Team learning loop — every review improves suggestions for the whole org"

**Customer Segments** (right column):

- "Primary: Engineering teams 10-50 devs, Series A-C startups (65% of revenue)"
- "Secondary: Enterprise engineering orgs 100+ devs (25% of revenue, highest growth)"
- "Tertiary: Open-source maintainers — freemium, community building (10% usage, 0% revenue)"

**Revenue Streams** (bottom right):

- "SaaS: $29/seat/mo (Team), $79/seat/mo (Business), custom Enterprise"
- "Current MRR: $180K — 78% from Team tier, 22% from Business"
- "Target: $650K MRR by end of Q2 2027"

**Cost Structure** (bottom left):

- "Infrastructure (GPU compute): $62K/mo — largest variable cost, scales with usage"
- "Team (12 FTE): $290K/mo — 8 engineers, 2 sales, 1 designer, 1 ops"
- "Total burn: $410K/mo — 12-month runway at current burn"

**Channels**:

- "Developer blog + SEO: 52% of qualified leads"
- "GitHub marketplace: 23% of signups"
- "Conference talks + DevRel: 15% of enterprise pipeline"
- "Outbound sales (enterprise only): 10% of leads, 40% of revenue"

### Visual Treatment

- Each block framed with 2px border in Steel Gray (#37474F)
- Block headers: 20px Bold, Midnight Blue (#0D47A1), ALL CAPS
- Items: White sticky notes 180x120px within each block
- Value Propositions block has a subtle blue-tinted background (5% opacity) to emphasize its central importance
- Cross-block connectors: Dashed lines from Value Props to Customer Segments (showing which value serves which segment), and from Customer Segments to Channels (showing how each segment is reached)
- Revenue and Cost blocks span the full bottom, separated by a vertical divider
- A small "Unit Economics" callout sits between Revenue and Cost: "LTV: $8,400 | CAC: $320 | LTV:CAC = 26:1 | Payback: 3.2 months"

---

## Example 3: Company OKR Cascade

### Context

A 200-person company planning Q2 OKRs, cascading from company objectives to department-level key results and initiatives.

### Board Specifications

- **Framework**: OKR Planning
- **Layout**: Hierarchical Cascade (Pattern 3)
- **Dimensions**: 10000 x 5000px
- **Palette**: Executive Authority
- **Target audience**: All-hands meeting, department leads

### Structure

**Level 0 — Mission** (centered, top):

- "Enable every organization to achieve regulatory compliance without specialized expertise"
- 600x200px rectangle, Royal Purple (#4A148C), white text

**Level 1 — Company Objectives** (3 objectives):

- O1: "Become the undisputed leader in automated compliance for mid-market SaaS" — 400x150px, Deep Blue (#1A237E)
- O2: "Build an engineering organization that attracts and retains world-class ML talent" — 400x150px, Deep Blue
- O3: "Achieve financial sustainability to extend runway to 24+ months" — 400x150px, Deep Blue

**Level 2 — Key Results** (2-4 per objective):

- O1-KR1: "Increase MRR from $420K to $650K" — 300x120px, Deep Teal (#00695C)
- O1-KR2: "Achieve 50 enterprise customer logos (current: 31)" — 300x120px
- O1-KR3: "Launch EU region with <100ms latency" — 300x120px
- O1-KR4: "Ship mobile app MVP with 60+ NPS from beta users" — 300x120px

- O2-KR1: "Hire 4 senior ML engineers (current pipeline: 12 candidates)" — 300x120px
- O2-KR2: "Reduce contractor ratio from 60% to 35%" — 300x120px
- O2-KR3: "Achieve 85+ eNPS (current: 62)" — 300x120px

- O3-KR1: "Reach cash-flow positive on operational basis" — 300x120px
- O3-KR2: "Reduce CAC from $320 to $250" — 300x120px
- O3-KR3: "Increase gross margin from 52% to 65% through infrastructure optimization" — 300x120px

**Level 3 — Initiatives** (1-3 per key result, shown as smaller boxes):

- O1-KR1-I1: "Launch enterprise sales playbook — target 5 new logos/month"
- O1-KR1-I2: "Expand Competitor X conversion campaign — target 500 accounts"
- O1-KR4-I1: "Dedicated mobile squad — 3 engineers, 1 designer, 12-week sprint"

### Connectors

- Solid 3px lines from Mission to each Objective (Royal Purple)
- Solid 2px lines from each Objective to its Key Results (Deep Blue to Deep Teal)
- Solid 1px lines from Key Results to Initiatives (Deep Teal to lighter teal)
- Cross-objective link: O2-KR1 (hire ML engineers) connects via dashed gold line to O1-KR3 (launch EU region) with label "ML infra expertise required for multi-region deployment"

### Scoring Track

Each Key Result has a small progress indicator:

- O1-KR1: 0.4 (on track — green indicator)
- O1-KR2: 0.3 (at risk — yellow indicator)
- O1-KR3: 0.1 (behind — red indicator)
- Target score: 0.7 = expected achievement

---

## Example 4: Competitive Positioning Map

### Context

A product team mapping competitive landscape to identify positioning opportunities and market gaps in the project management tool space.

### Board Specifications

- **Framework**: Competitive Analysis (Positioning Map)
- **Layout**: Positioning Map (Pattern 4)
- **Dimensions**: 6000 x 6000px
- **Palette**: Competitive Fire (Onyx + Gunmetal + Vivid Blue + Signal Red)
- **Target audience**: Product strategy team, CEO

### Axis Configuration

- **X-Axis**: "SIMPLICITY" (left, low) to "POWER" (right, high) — measures feature depth and capability range
- **Y-Axis**: "LOW PRICE" (bottom) to "HIGH PRICE" (top) — measures per-seat monthly cost
- Axis lines: 4px, white (#FFFFFF) on dark background (#121212)
- Grid: Dashed 1px, dim gray (#636e72), dividing each axis into 5 segments
- Quadrant labels: "BUDGET BASIC" (bottom-left), "EXPENSIVE BASIC" (top-left), "BUDGET POWERFUL" (bottom-right), "PREMIUM ENTERPRISE" (top-right) — 28px, Silver (#B0BEC5), 20% opacity

### Competitor Positions

| Competitor | X Position | Y Position | Circle Size       | Color                |
| ---------- | ---------- | ---------- | ----------------- | -------------------- |
| Asana      | 3.5        | 3.8        | 50px              | Signal Red (#FF1744) |
| Monday.com | 3.2        | 3.0        | 55px              | Signal Red           |
| Jira       | 4.5        | 4.2        | 60px (largest)    | Signal Red           |
| ClickUp    | 4.0        | 2.0        | 45px              | Signal Red           |
| Notion     | 2.5        | 2.5        | 48px              | Signal Red           |
| Linear     | 3.8        | 3.5        | 35px              | Signal Red           |
| **US**     | 3.0        | 2.2        | 70px (star shape) | Vivid Blue (#2979FF) |

### Market Gap Zones

1. **Gap 1**: Bottom-right quadrant — "OPPORTUNITY: Powerful but affordable" — dashed circle, Emerald (#00C853) at 10% fill. Label: "No strong player offers enterprise features at mid-market pricing"
2. **Gap 2**: Top-left area — labeled "DANGER ZONE: Expensive but limited — avoid"

### Supporting Elements

- Competitor info cards positioned around the perimeter, each containing: company name, funding, estimated ARR, key differentiator
- Movement arrows showing where competitors have shifted in the past 12 months (Jira moved left as it simplified, ClickUp moved up as it raised prices)
- A strategy arrow showing "OUR INTENDED MOVEMENT" — from current position toward the Gap 1 opportunity zone

---

## Example 5: Vision-to-Execution Bridge

### Context

A company translating their 3-year vision into quarterly execution plans for an all-hands alignment meeting.

### Board Specifications

- **Framework**: Vision-to-Execution Bridge
- **Layout**: Pattern 5 (five-column horizontal flow)
- **Dimensions**: 12000 x 5000px
- **Palette**: Executive Authority with a temperature gradient (cool purple left to warm gold right)
- **Target audience**: Full company (all-hands presentation)

### Column Structure

**Column 1 — Vision & Mission (15% = 1800px wide)**:

- Background: Deep Purple (#4A148C) at 8% opacity
- Mission card: "Enable every organization to achieve regulatory compliance without specialized expertise"
- Vision card: "By 2028, 10,000 organizations use ComplianceAI to replace manual compliance teams"
- Values: "Evidence Over Opinion | Customer Obsession | Speed With Quality"

**Column 2 — Strategic Pillars (20% = 2400px)**:

- Background: Deep Blue (#1A237E) at 6% opacity
- Pillar 1: "Product-Led Growth — make the product so good it sells itself"
- Pillar 2: "Vertical Expansion — healthcare, fintech, government"
- Pillar 3: "Platform Play — from tool to ecosystem (API, marketplace, partners)"

**Column 3 — Initiatives (25% = 3000px)**:

- Background: Deep Teal (#00695C) at 5% opacity
- Under Pillar 1: "Mobile app MVP," "Self-serve onboarding revamp," "Freemium tier launch"
- Under Pillar 2: "HIPAA module," "PCI-DSS module," "FedRAMP certification"
- Under Pillar 3: "Public API v3 (GraphQL)," "Partner portal," "Marketplace beta"

**Column 4 — Metrics & KPIs (20% = 2400px)**:

- Background: Amber (#F57F17) at 5% opacity
- For mobile app: "60+ NPS from beta, 500 MAU in month 1"
- For HIPAA module: "$200K pipeline in 90 days"
- For API v3: "50 third-party integrations in 6 months"

**Column 5 — Timeline (20% = 2400px)**:

- Background: Gold (#F9A825) at 5% opacity
- Quarterly timeline: Q2 2026, Q3 2026, Q4 2026, Q1 2027
- Initiative cards positioned along their target quarter
- Milestones marked with star icons at key dates

### Horizontal Connectors

- Each pillar connects to its initiatives with solid 2px arrows (Deep Blue to Teal)
- Each initiative connects to its metrics with solid 2px arrows (Teal to Amber)
- Each metric connects to its timeline position with dashed 1px lines (Amber to Gold)
- The visual flow creates a clear left-to-right narrative: WHY -> WHAT -> HOW -> MEASURE -> WHEN

---

## Example 6: Non-Profit Strategic Assessment (SWOT + Vision Board Hybrid)

### Context

A non-profit education organization conducting strategic planning to apply for a major foundation grant, combining SWOT analysis with a vision board to show both current state and aspirational future.

### Board Specifications

- **Framework**: SWOT + Vision Board hybrid
- **Layout**: Four-Quadrant Matrix (top 60%) + Vision Strip (bottom 40%)
- **Dimensions**: 7000 x 7000px
- **Palette**: Balanced Wisdom (Warm Indigo + Forest + Sage + Rust)
- **Target audience**: Board of Trustees, foundation grant reviewers

### Unique Elements

- Earth-toned palette conveys mission-driven seriousness without corporate coldness
- SWOT items reference impact metrics ("Served 12,400 students across 3 districts") rather than revenue
- Vision strip at the bottom shows the 5-year aspirational state: "By 2031: 100,000 students, 50 districts, measurable 2-grade-level reading improvement"
- Values displayed prominently: "Equity | Evidence | Access | Sustainability"
- Grant-specific callouts: "This strategy directly addresses the Foundation's priority area: Literacy for underserved communities"

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: The Generic SWOT

**What it looks like**: Every item could apply to any company. "Strong brand," "Growing market," "Good team," "Increasing competition."

**Why it fails**: Tells the viewer nothing unique about this organization's strategic position. A strategy that could belong to any company helps no company.

**The fix**: Force specificity. "NPS 72 vs. industry 34" instead of "Strong brand." "EU DSA deadline Q4 2026 creates $2.8B market" instead of "Growing market." If you cannot add a number, date, or competitor name, the item is too vague.

### Anti-Pattern 2: The Island Analysis

**What it looks like**: Beautiful SWOT with 6-8 items per quadrant, but zero connections between quadrants. Each quadrant is an isolated silo.

**Why it fails**: The power of SWOT is in the interactions between quadrants. A strength that exploits an opportunity is more valuable than either alone. A weakness that amplifies a threat is an existential risk.

**The fix**: After populating all quadrants, spend 10 minutes drawing cross-quadrant connections. Add at least 3 connectors. Label each with the relationship type: "enables," "amplifies," "counters," "requires."

### Anti-Pattern 3: The Aspirational OKR

**What it looks like**: Objectives like "Be the best company in the world." Key Results like "Delight all customers."

**Why it fails**: OKRs must be measurable. "Delight all customers" cannot be scored. It creates a false sense of ambition while providing zero accountability.

**The fix**: Every Key Result must have a number. "Increase NPS from 62 to 80." "Reduce churn from 5% to 2%." If you cannot measure it, it is not a Key Result — it is a wish.

### Anti-Pattern 4: The Data Dump

**What it looks like**: 40+ items crammed into a single framework. Every data point the team has ever collected, pasted onto the board without prioritization.

**Why it fails**: Strategy is about prioritization — choosing what matters most. A board with 40 items treats everything as equally important, which means nothing is important.

**The fix**: Limit to 4-8 items per section. Force-rank items. If you have 15 strengths, identify the 5 that are most defensible and most relevant to the strategic question. The others can go in a supplementary appendix.

---

## Before/After Transformations

### Transformation 1: SWOT — From Mediocre to God-Level

**BEFORE**:

- Strengths: "Good team," "Strong product," "Growing customer base," "Innovative culture"
- Weaknesses: "Need better marketing," "Limited resources," "Technical debt"
- Opportunities: "Big market," "New technologies," "International expansion"
- Threats: "Competition," "Economic uncertainty," "Regulation"
- No connections. No implications. No evidence. No prioritization.

**AFTER**:

- Strengths: "3 NLP patents, 18-month lead" (solid border), "NPS 72 vs. industry 34" (solid), "96% retention, enterprise" (solid), "45% leads from inbound at $28 CAC" (solid), "ML model: 94% accuracy on 2.3M docs" (solid)
- Weaknesses: "No mobile app — 40% competitor users access mobile daily" (gold border = critical), "60% contractor engineering team — knowledge risk" (solid), "12-day onboarding vs. 3-day competitor average" (solid)
- Opportunities: "EU DSA Q4 2026 — $2.8B compliance market" (gold = critical), "Competitor X price hike — 2,300 ICP customers available" (solid), "Healthcare HIPAA pain — 12 inbound requests Q1" (dashed)
- Threats: "OpenAI compliance product Q3 2026 — 10x R&D budget" (gold = critical), "AWS pricing +25% — margin drops from 67% to 52%" (solid), "Key competitor acquired by Salesforce — distribution advantage" (solid)
- 6 cross-quadrant connections drawn and labeled
- Implications zone: 3 prioritized actions with owners and deadlines
- Key Insight callout: "Patent lead + DSA deadline = one-time window before OpenAI entry"

**What changed**: Every item is now specific, evidence-backed, and strategically relevant. Connections reveal insights. Implications drive action. The board tells a strategic story.

### Transformation 2: BMC — From Template to Insight Machine

**BEFORE**:

- Value Propositions: "Great product that helps customers"
- Customer Segments: "Businesses of all sizes"
- Revenue Streams: "SaaS subscription"
- Cost Structure: "People and technology"
- No cross-block connections. Blocks feel like separate documents rather than an integrated model.

**AFTER**:

- Value Propositions: "Reduce code review from 45 min to 8 min" + "Zero-config integration in <2 min" + "Team learning loop improves with usage"
- Customer Segments: "Series A-C startups, 10-50 devs (65% rev)" + "Enterprise 100+ devs (25% rev, fastest growth)" + "OSS maintainers (freemium, community)"
- Revenue Streams: "$29/seat Team, $79/seat Business, custom Enterprise | MRR $180K | Target $650K by Q2 2027"
- Cost Structure: "GPU compute $62K/mo (variable) | Team $290K/mo (fixed) | Burn $410K/mo | 12-month runway"
- Unit Economics callout between Revenue and Cost: "LTV $8,400 | CAC $320 | LTV:CAC 26:1 | Payback 3.2 months"
- Cross-block connectors: Value Props -> Segments (which value serves which segment), Segments -> Channels (how each segment is reached)

---

## Design Elements to Steal

### 1. The Confidence Border System

Three border styles encoding data confidence:

- **Solid border**: Confirmed by data (e.g., "NPS 72" — verified by survey)
- **Dashed border**: Estimated or projected (e.g., "Healthcare market worth $500M" — analyst projection)
- **Dotted border**: Hypothesis or speculation (e.g., "Partner channel could drive 30% leads" — untested)

This prevents the board from treating all items with equal certainty.

### 2. The Gold Accent "Key Insight" Bar

A horizontal callout with a 6px gold left border, italic bold text, placed between the analysis and the implications. It forces the team to distill their entire analysis into one sentence. This is the highest-value element on any strategy board.

### 3. The Priority Badge System

Numbered circles (1, 2, 3) in gold (#F9A825) placed next to the implications/actions. The numbering forces explicit prioritization — the team must decide what matters most. Each badge connects visually to the board items that drove the priority.

### 4. The Movement Arrow on Positioning Maps

A bold arrow from "current position" to "target position" on a competitive positioning map. This transforms a static snapshot into a strategic direction. The arrow answers "where are we going?" not just "where are we?"

### 5. The Cross-Section Insight Connector

A dotted gold line with a label that synthesizes an insight spanning two framework sections. Example: "Our NLP patent (S2) directly counters competitor entry (T2) — this is our primary moat." These connectors are the most valuable and most often missing element on strategy boards. They transform isolated analysis into integrated strategic thinking.

### 6. The "So What?" Annotation

A small italic text block below each strategic item that answers "So what does this mean for our strategy?" Example: Under "Competitor X raised prices 40%," the annotation reads: "We should launch a targeted conversion campaign for their top 500 accounts before they find alternatives."

### 7. The Temporal Indicator

Small date badges on strategic items showing when they become relevant. Example: "EU DSA compliance deadline" with a badge "Q4 2026 — 8 months." This adds urgency to the strategic narrative and helps prioritize actions by time sensitivity.

### 8. The Stakeholder Lens Tags

Small colored tags on implications showing which stakeholder group should care most: "CEO," "CTO," "VP Sales," "Board." This helps viewers quickly find what is relevant to them on a dense strategy board.
