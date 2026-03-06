# Startup Board Content Guide

## Introduction

Startup board content is fundamentally different from other board types because nearly everything is a hypothesis. The content must communicate confidence without dishonesty, ambition without delusion, and uncertainty without paralysis. This guide covers the essential content for each startup board type, with real examples that demonstrate the difference between mediocre filler and god-level substance.

---

## Lean Canvas Content

### Block-by-Block Content Requirements

#### Problem Block

The Problem block is the foundation of the entire business model. A weak problem statement undermines every other block.

**Required content**:

- Top 3 problems, ranked by severity
- Each problem stated from the customer's perspective (not the founder's)
- Supporting evidence or quote for each problem
- Existing alternatives section showing how customers currently cope

**Mediocre example**:

```
Problem:
- Companies waste time on manual reporting
- Data is hard to access
- Decisions are slow
```

**God-level example**:

```
PROBLEM [VALIDATED]
Evidence: 23 customer discovery interviews, Feb 2024

1. Mid-market CFOs spend 12+ hours/week manually compiling
   financial reports from 4-6 disconnected systems
   "I have a finance degree and I spend my Mondays copy-pasting
    between QuickBooks and Excel" — CFO, 200-person SaaS company

2. Report errors go undetected for weeks because there is no
   automated reconciliation between source systems
   3 of 23 interviewees reported material errors in board reports

3. Board members receive reports 2-3 weeks after month close,
   making the data stale before it is discussed
   Average reporting lag: 18 days (self-reported, n=23)

EXISTING ALTERNATIVES:
• Manual Excel compilation (most common, 78% of interviewees)
• Enterprise ERP (too expensive for mid-market, $200K+ implementation)
• Outsourced bookkeeping (limited to historical, no real-time)
• Status quo: "We just deal with it" (15% of interviewees)
```

#### Solution Block

**Required content**:

- Top 3 features or capabilities that directly address the stated problems
- Each solution feature linked to a specific problem
- Validation status for each feature
- What has been built vs. what is planned

**God-level example**:

```
SOLUTION [TESTING]
MVP launched Feb 15, 2024 — 47 beta users

1. Automated data sync from QuickBooks, Stripe, and bank feeds
   → Addresses Problem #1 (manual compilation)
   [VALIDATED] 89% of beta users connected 2+ sources

2. Real-time reconciliation engine with discrepancy alerts
   → Addresses Problem #2 (undetected errors)
   [TESTING] Alert accuracy: 73% (target: 90%)

3. One-click board report generation with auto-commentary
   → Addresses Problem #3 (reporting lag)
   [HYPOTHESIS] Not yet built — scheduled for Sprint 6
```

#### Unique Value Proposition

**Required content**:

- Single, clear sentence that captures the unique value
- High-level concept (analogy format: "X for Y")
- Why this is different from existing alternatives
- Evidence that the UVP resonates with target customers

**God-level example**:

```
UNIQUE VALUE PROPOSITION [PARTIAL]

"Close your books in hours, not weeks —
 automated financial reporting for the
 mid-market finance team"

High-Level Concept:
"Plaid + Notion for CFOs"
(Automated data aggregation meets flexible reporting)

Why Different: Unlike enterprise ERPs ($200K+), we are purpose-built
for 100-500 employee companies with 4-6 financial systems.
Unlike Excel, we reconcile automatically.

Evidence: 8 of 23 interviewees said "I would pay for this today"
when shown the value prop statement (35% strong intent)
```

#### Key Metrics

**Required content**:

- 3-5 metrics that would prove the business model is working
- Current values (or "Not yet measured" if pre-launch)
- Target values with timeline
- Leading indicators, not just lagging

**God-level example**:

```
KEY METRICS [TESTING]

1. Activation Rate: 67% (target: 80%)
   Definition: % of sign-ups who connect 2+ data sources within 7 days
   Current: 31 of 47 beta users activated

2. Weekly Active Reports: 2.3 per user (target: 4+)
   Definition: Reports generated per active user per week
   Trend: Growing 12% week-over-week

3. Time to First Report: 43 minutes (target: <30 min)
   Definition: Minutes from sign-up to first generated report
   Bottleneck: Bank feed connection takes avg 22 minutes

4. NPS: 34 (target: 50+)
   Definition: Net Promoter Score from weekly beta survey
   Detractor feedback: "Reconciliation alerts too noisy"

5. MRR: $1,363 (target: $10K by month 6)
   Definition: Monthly recurring revenue from paying users
   47 beta users × $29/mo = $1,363 (100% on starter plan)
```

#### Unfair Advantage

**Required content**:

- Honest assessment of defensibility
- What IS an advantage vs. what is NOT
- Timeline to build real moats
- Reality check on competitive vulnerability

**God-level example**:

```
UNFAIR ADVANTAGE [HYPOTHESIS]

HONEST ASSESSMENT:
What we have:
• Domain expertise: CEO was CFO at 3 mid-market companies
• Early data network: 47 companies' financial data structures
  (anonymized patterns help improve reconciliation accuracy)

What we do NOT have (yet):
• No proprietary technology — LLM-based reconciliation is replicable
• No switching costs — data connections are portable
• No brand recognition — pre-launch

MOAT BUILDING PLAN:
Month 6: Accumulated transaction patterns from 200+ companies
Month 12: Industry-specific reporting templates (hard to replicate
          without the underlying data patterns)
Month 18: Integrations with 20+ financial tools (breadth creates
          switching cost)

REALITY CHECK: If a well-funded competitor enters with the same
approach, our advantage is speed of iteration and founder-market
fit, not technology.
```

#### Customer Segments

**Required content**:

- Primary segment with demographic and firmographic detail
- Early adopters: who are the first users and why them
- Segment size estimate with source
- Characteristics that make this segment reachable

**God-level example**:

```
CUSTOMER SEGMENTS [VALIDATED]

PRIMARY SEGMENT:
Mid-market companies (100-500 employees)
with 4+ financial systems and no dedicated
FP&A analyst

Industry: SaaS, professional services, e-commerce
Geography: US (initially)
Decision Maker: CFO or VP Finance
Budget: $200-500/mo for finance tools

Segment Size: ~45,000 companies in the US
(Source: US Census Bureau + LinkedIn Sales Navigator filter)

EARLY ADOPTERS:
• CFOs who are "hands-on" (compile reports themselves)
• Companies that recently raised Series A/B (board reporting
  pressure increased, no budget for enterprise tools yet)
• Finance leaders active in CFO peer communities
  (The Finance Collective, CFO Slack groups)

WHY THEM FIRST:
• Acute pain (12+ hrs/week on manual reporting)
• Reachable (active in 3-4 online communities)
• Willing to try new tools (early adopter mentality)
• Can make purchase decisions without procurement process
```

#### Cost Structure

**Required content**:

- Fixed costs (monthly, itemized)
- Variable costs (unit-based)
- Current burn rate
- Runway calculation
- Cost trajectory as the company scales

**God-level example**:

```
COST STRUCTURE

FIXED COSTS (Monthly):
• Salaries (3 founders, below-market): $18,000
• Office / coworking: $800
• Software tools (dev + design): $1,200
• Legal / accounting: $500
• Insurance: $300
Total Fixed: $20,800/mo

VARIABLE COSTS (Per Customer):
• Cloud infrastructure: ~$3.50/customer/mo
• Payment processing (Stripe): 2.9% + $0.30/transaction
• Support (founder-led currently): ~$0/incremental
• Data API costs (Plaid, bank feeds): ~$2/customer/mo

BURN RATE: $22,400/mo (including 47 customers' variable costs)
CASH ON HAND: $340,000 (pre-seed round closed Jan 2024)
RUNWAY: ~15 months at current burn

SCALING NOTE: At 500 customers, cloud + API costs become
material (~$2,750/mo). Hiring first engineer at $150K would
reduce runway to 8 months without revenue growth.
```

#### Revenue Streams

**Required content**:

- Revenue model (subscription, usage-based, transaction, etc.)
- Pricing tiers with rationale
- Current revenue (actual numbers)
- Unit economics (LTV, CAC, payback period)
- Revenue targets with milestones

**God-level example**:

```
REVENUE STREAMS [TESTING]

MODEL: SaaS subscription (monthly)

PRICING:
• Starter: $29/mo (up to 3 data sources, 5 reports/mo)
• Pro: $99/mo (unlimited sources, unlimited reports, custom templates)
• Team: $249/mo (multi-user, audit trail, API access)
Pricing based on: Willingness-to-pay interviews (n=23)
  $29 anchored to "coffee budget" framing
  $99 anchored to "cheaper than 2 hours of CFO time/week"

CURRENT REVENUE:
MRR: $1,363 (47 users × $29, all on Starter)
ARR Run Rate: $16,356
Paid Conversion: 47 of 312 sign-ups (15%)

UNIT ECONOMICS (Estimated):
CAC: $45 (content marketing + CFO community outreach)
LTV: $870 (30-month estimated lifespan × $29)
LTV:CAC Ratio: 19.3:1 (healthy, but Starter tier only)
Payback Period: 1.6 months

TARGET:
Month 6: $10K MRR (345 customers or mix with Pro tier)
Month 12: $50K MRR (requires Pro tier adoption + team plan launch)
Month 18: $150K MRR (Series A readiness threshold)
```

---

## Pitch Deck Content

### Slide-by-Slide Content Guide

#### Slide 1: Hook

**Purpose**: Capture attention in 10 seconds. Make the investor lean in.

**Content formula**: [Surprising statistic] + [Human implication] + [Startup name as the answer]

**God-level example**:

```
CONTENT:
"Mid-market CFOs spend 12 hours every week
copy-pasting between spreadsheets.
That is 624 hours a year of a $200K executive
doing $15/hour work.

DataSight eliminates manual financial reporting."

VISUAL DIRECTION:
Full-screen stat: "624 hours/year"
Below: "A $200K executive doing $15/hour work"
Minimal design, dark background, white text
Logo reveal at the end

TALKING POINTS:
1. Open with: "Raise your hand if you've spent your
   Monday morning in spreadsheet hell"
2. Pause on the 624 number — let it sink in
3. "DataSight makes this go away. Let me show you how."
```

#### Slide 5: Traction

**Purpose**: Prove the business is working, not just an idea.

**God-level example**:

```
CONTENT:
• 47 paying customers in 8 weeks (no paid marketing)
• $1,363 MRR, growing 18% week-over-week
• 15% of sign-ups convert to paid (organic)
• NPS: 34 (and climbing — was 22 in week 1)
• 3 enterprise prospects in pipeline ($249/mo tier)

Key stat: 89% activation rate (connected 2+ data sources)
Implies strong product-market fit signal

VISUAL DIRECTION:
MRR growth chart (hockey stick starting)
Customer logos (if permission granted)
NPS trend line showing improvement
Highlight: "Zero paid marketing spend"

TALKING POINTS:
1. "We launched 8 weeks ago with zero marketing budget"
2. "47 companies are paying us $29/month because the
    problem is that painful"
3. "Our NPS started at 22 — we listened and it is now 34"
4. Transition: "And here is where the market gets exciting..."
```

#### Slide 10: The Ask

**Purpose**: Clear, specific, confident request for investment.

**God-level example**:

```
CONTENT:
Raising: $1.5M Seed Round
Valuation: $8M pre-money (based on 50x ARR run-rate multiple)

Use of Funds:
• Engineering (60%): Hire 2 senior engineers, build Pro tier
• Sales (25%): Hire first AE, launch outbound for mid-market
• Operations (15%): Legal, compliance, SOC 2 certification

Milestones This Round Gets Us To:
• $50K MRR (18 months from close)
• 500+ customers
• Pro tier launched and generating 40% of revenue
• SOC 2 Type II certified
• Ready for Series A at $30-40M valuation

VISUAL DIRECTION:
Simple, clean slide. Amount centered and large.
Use of funds as horizontal bar chart.
Milestone timeline at bottom.

TALKING POINTS:
1. "We are raising $1.5M to go from product-market fit
    to repeatable sales"
2. Walk through use of funds briefly
3. "This round gets us to Series A readiness in 18 months"
4. Close: "We have $500K committed. Looking for a lead."
```

---

## Investor Pipeline Content

### Investor Card Content

Each investor card in the pipeline should contain:

**Required fields**:

- Fund name and specific partner
- Check size range
- Investment focus (stage, sector, geography)
- Current pipeline status
- Next action with date
- Introduction source (warm intro, cold outreach, event)
- Sentiment indicator (1-5 scale)
- Key notes from interactions

**God-level example**:

```
SEQUOIA CAPITAL
Partner: Alfred Lin

Check: $500K - $2M | Stage: Seed-A | Focus: Enterprise SaaS
Intro: Via Sarah Chen (portfolio founder at Vanta)

STATUS: Partner meeting scheduled March 22
SENTIMENT: ●●●●○ (4/5 — Strong interest)

MEETING HISTORY:
• Feb 28: First call with associate (25 min)
  → Asked for product demo and metrics deck
• Mar 8: Demo with Alfred + associate (45 min)
  → Alfred: "Interesting. How defensible is the reconciliation?"
  → Follow-up: Sent competitive moat memo
• Mar 15: Alfred requested partner meeting slot
  → Confirmed March 22, 11am, Sand Hill Road

KEY CONCERNS RAISED:
1. Defensibility of core technology (addressed in memo)
2. Mid-market vs. enterprise strategy (discuss at partner mtg)
3. Founder team — want to meet CTO

PREPARATION NEEDED:
☐ CTO available for March 22
☐ Updated metrics deck with March data
☐ Competitive landscape one-pager
☐ Reference customers (3 beta users willing to take calls)
```

### Term Sheet Comparison Content

When comparing multiple term sheets:

```
TERM SHEET COMPARISON

                    | VC Fund A (Sequoia) | VC Fund B (a16z)    |
--------------------|---------------------|---------------------|
Pre-money valuation | $8M                 | $7M                 |
Investment amount   | $1.5M               | $2M                 |
Post-money          | $9.5M               | $9M                 |
Founder dilution    | 15.8%               | 22.2%               |
Board seats         | 1 investor + 1 ind. | 1 investor          |
Liquidation pref    | 1x non-participating| 1x participating    |
Pro-rata rights     | Yes (full round)    | Yes (pro-rata only) |
Anti-dilution       | Broad-based WA      | Broad-based WA      |
Vesting             | 4yr/1yr cliff       | 4yr/1yr cliff       |
Information rights  | Quarterly financials| Monthly financials  |
Protective provisions| Standard           | Standard + veto on  |
                    |                     | key hires           |

ANALYSIS:
Fund A: Lower dilution, standard terms, Sequoia brand value
Fund B: More capital, but participating preferred is aggressive
        and veto on key hires is unusual for seed

RECOMMENDATION: Negotiate with Fund A as lead, use Fund B
offer as leverage on check size ($1.5M → $1.75M ask)
```

---

## MVP Planning Content

### Feature Card Content

Each feature card should contain:

```
FEATURE: Real-Time Reconciliation Engine

Description: Automatically compare transactions across connected
data sources and flag discrepancies with suggested resolutions

Priority: MVP — MUST HAVE
Linked Problem: Problem #2 (undetected report errors)

Effort Estimate: Large (3 sprints / 6 weeks)
Value Assessment: High (core differentiator, mentioned by 18/23
                  interviewees as the #1 desired capability)

Acceptance Criteria:
☑ Matches transactions across 2+ sources by amount + date
☑ Flags unmatched transactions within 24 hours
☐ Suggests resolution for common mismatch types
☐ False positive rate below 10%

Dependencies:
• Requires: Data sync feature (Feature 1) completed
• Blocks: Board report generation (Feature 3)

Current Status: In Development (Sprint 4, Week 2)
Owner: @cto
```

### Experiment Design Content

```
EXPERIMENT 3: Pricing Sensitivity Test

HYPOTHESIS:
Mid-market CFOs will pay $99/mo for the Pro tier because
automated reconciliation saves them 4+ hours per week,
which they value at $50+/hour

BUILD:
• Create Pro tier upgrade prompt within dashboard
• Show reconciliation feature preview (screenshot + description)
• "Upgrade to Pro" button with $99/mo pricing
• Track: click rate, sign-up rate, objection reasons (via survey)

MEASURE:
Primary metric: Upgrade click rate (target: >15%)
Secondary metric: Actual conversion to paid Pro (target: >5%)
Qualitative: Exit survey for users who click but do not convert

SUCCESS CRITERIA:
• >15% click rate: PROCEED with Pro tier development
• 5-15% click rate: ITERATE on pricing or feature set
• <5% click rate: INVALIDATE pricing hypothesis, test lower price

TIMELINE:
Start: March 18 | End: April 1 (2-week test)
Sample size needed: 200 active users (we have 47 — extend test
or accelerate user acquisition)

RESULTS: [To be filled after experiment completes]
Actual click rate: ___
Actual conversion: ___
Decision: PROCEED / ITERATE / INVALIDATE
```

---

## Hypothesis Validation Tracker Content

The hypothesis validation tracker sits below the Lean Canvas and documents the learning journey:

```
HYPOTHESIS VALIDATION TRACKER

H1: "CFOs at 100-500 person companies spend 10+ hrs/week
     on manual reporting"
     Method: Customer discovery interviews (n=23)
     Result: Average 12.4 hrs/week (range: 6-20)
     Status: [VALIDATED] — Feb 15, 2024
     Impact: Problem confirmed. Proceed with solution.

H2: "Users will connect 2+ data sources within first session"
     Method: Beta user behavior tracking (n=47)
     Result: 67% connected 2+ in first session, 89% within 7 days
     Status: [PARTIAL] — Mar 1, 2024
     Impact: First-session activation below target. Improve onboarding
             flow — added guided setup wizard in Sprint 4.

H3: "CFOs will pay $29/mo for basic automated reporting"
     Method: Beta launch with Stripe payment (n=312 sign-ups)
     Result: 15% converted to paid ($29/mo Starter)
     Status: [VALIDATED] — Mar 5, 2024
     Impact: Price point works for Starter tier. Test Pro tier ($99).

H4: "Reconciliation alerts reduce report errors by 50%"
     Method: Compare error rates pre/post reconciliation feature
     Result: [Not yet measured — feature in development]
     Status: [HYPOTHESIS]
     Impact: Core value prop depends on this. Priority 1 experiment.

H5: "CFO peer communities are a scalable acquisition channel"
     Method: Post in 3 CFO Slack groups, measure sign-up attribution
     Result: 28 of 47 paying users attributed to community posts
     Status: [TESTING] — Ongoing
     Impact: Promising but sample too small for "scalable" conclusion.
             Need 200+ attributable sign-ups to validate scalability.
```

---

## Content Copywriting Principles

### Startup-Specific Writing Rules

1. **Hypothesis language**: Use "We believe..." or "Our assumption is..." for untested claims. Use "We have validated that..." or "Evidence shows..." for tested claims. Never state hypotheses as facts.

2. **Evidence citations**: Every validated claim should cite the evidence: method, sample size, date, and result. "23 customer interviews" is more credible than "customer research."

3. **Honest qualifiers**: Include confidence levels. "High confidence (n=23, consistent results)" vs. "Low confidence (n=5, mixed signals)." Investors respect honesty about uncertainty.

4. **Metric precision**: Use exact numbers when available. "$1,363 MRR" is more credible than "~$1.4K MRR." Precision signals that you track your numbers carefully.

5. **Avoid buzzword filler**: "AI-powered," "disruptive," "revolutionary," "leveraging synergies" — these communicate nothing. Replace with specific capabilities: "Automated transaction matching using rule-based logic with ML-assisted categorization."

6. **Active voice for actions**: "We interviewed 23 CFOs" not "23 CFOs were interviewed." "We will hire 2 engineers" not "2 engineers will be hired." Active voice communicates founder agency.

7. **Stage-appropriate depth**: Pre-seed boards have more hypotheses than data. Series A boards have more data than hypotheses. Do not fill a pre-seed board with projected financials as if they are facts.

### Number Formatting Standards

| Type                | Format          | Example            |
| ------------------- | --------------- | ------------------ |
| Currency < $1K      | $X              | $29, $99, $249     |
| Currency $1K-$999K  | $X.XK           | $1.4K, $50K, $150K |
| Currency $1M+       | $X.XM           | $1.5M, $8M, $150M  |
| Percentages         | X% (no decimal) | 15%, 89%, 67%      |
| Percentages precise | X.X%            | 2.9%, 15.8%, 22.2% |
| User counts < 1K    | X               | 47, 312, 847       |
| User counts 1K+     | X.XK            | 1.2K, 5.4K, 47K    |
| Time periods        | X months/weeks  | 8 weeks, 18 months |
| Ratios              | X:1 or X.X:1    | 19:1, 3.5:1        |

### Section Header Standards

| Board Type         | Header Style                               |
| ------------------ | ------------------------------------------ |
| Lean Canvas        | UPPERCASE: "PROBLEM", "SOLUTION", "UVP"    |
| Pitch Deck         | Title Case: "The Problem", "Our Solution"  |
| Investor Pipeline  | Title Case: "Research", "First Meeting"    |
| MVP Planning       | Title Case: "Feature Backlog", "MVP Scope" |
| Validation Tracker | Code Style: "H1:", "H2:", "H3:" prefix     |

---

## Cross-Reference Content

Every startup board should include navigation references to related boards:

### Lean Canvas Cross-References

```
RELATED BOARDS:
→ Pitch Deck Plan: Investor narrative based on this canvas (v1.4)
→ MVP Planning: Feature priorities derived from Solution block
→ Investor Pipeline: Active fundraise using this business model
Last synced: March 10, 2024
```

### Pitch Deck Cross-References

```
DATA SOURCES:
→ Lean Canvas v2.3: Business model and hypothesis status
→ Metrics Dashboard: Traction data updated weekly
→ Investor Pipeline: Fundraise status and committed capital
Deck version: v1.4 | Last updated: March 12, 2024
```

### Common Content Mistakes

1. **No version number**: Every board should have a visible version number and date. "Lean Canvas v2.3 | Updated March 15, 2024" — not just "Lean Canvas."

2. **Aspirational content without labels**: "$50M ARR in 3 years" is fine as a target, but it must be labeled as a target, not stated as a fact. Use "Target: $50M ARR by 2027" or bracket it with [PROJECTION].

3. **Missing "so what"**: Every metric should have an implication. "NPS: 34" is data. "NPS: 34 — up from 22 in week 1, driven by reconciliation accuracy improvements. On track for 50+ target." is insight.

4. **Generic personas**: "Small business owners who need better reporting" is useless. "CFOs at 100-500 employee SaaS companies who compile board reports manually from 4+ financial systems" is actionable.

5. **No negative evidence**: God-level boards include what did NOT work. "H4: INVALIDATED — Users did not engage with the weekly email digest. 3% open rate. Pivoted to in-app notifications." This builds credibility.
