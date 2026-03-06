# Company Building — Examples & Reference

## Overview

This reference guide provides detailed breakdowns of excellent company building boards, common anti-patterns to avoid, and case studies demonstrating the design philosophy and content principles in action. Use these examples to calibrate quality — every board you build should match the standard of the great examples and avoid the pitfalls of the anti-patterns.

---

## Great Board Breakdown #1: SaaS Startup Vision Board

### Context

A Series A SaaS company ($2.4M ARR, 28 people) creating a vision board for their annual all-hands. The board serves double duty: team alignment and investor reference.

### Layout

Strategic cascade (top-to-bottom), 4800x3400px.

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] FinLearn — Company Vision 2025       [v2.1 | Jan 25]│
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  "Democratize financial literacy for the                     │
│   next billion internet users"                               │  ← 48px bold
│                                                              │
│  We build AI-powered learning tools that make financial      │  ← 18px regular
│  concepts accessible to anyone with a smartphone.            │
├─────────────────────────────────────────────────────────────┤
│  OUR VALUES                                                  │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌──────────┐ │
│  │ LEARNER    │ │ SPEED OVER │ │ RADICAL    │ │ BUILD    │ │
│  │ FIRST      │ │ PERFECTION │ │TRANSPARENCY│ │ TOGETHER │ │
│  │            │ │            │ │            │ │          │ │
│  │ [behaviors]│ │ [behaviors]│ │ [behaviors]│ │[behaviors]│ │
│  └────────────┘ └────────────┘ └────────────┘ └──────────┘ │
├─────────────────────────────────────────────────────────────┤
│  STRATEGIC PILLARS                                          │
│  ┌─────────────────┐ ┌─────────────────┐ ┌───────────────┐ │
│  │ 01 PRODUCT-LED  │ │ 02 ENTERPRISE   │ │ 03 PLATFORM   │ │
│  │    GROWTH       │ │    EXPANSION    │ │    PLAY       │ │
│  │ KRs + Owner     │ │ KRs + Owner     │ │ KRs + Owner   │ │
│  └─────────────────┘ └─────────────────┘ └───────────────┘ │
├─────────────────────────────────────────────────────────────┤
│  KEY METRICS                                                │
│  [$2.4M ARR] [12K Users] [115% NRR] [42 NPS] [18mo Runway]│
│  [↑24% MoM]  [↑15% MoM] [↑3% QoQ] [↑8 pts] [Stable]     │
├─────────────────────────────────────────────────────────────┤
│  MILESTONES                                                 │
│  ● Seed ($2M) ● v1.0 Launch ● 1K Users ● Series A ($8M)   │
│  ○ 25K Users ○ EU Launch ○ $5M ARR ○ Series B             │
└─────────────────────────────────────────────────────────────┘
```

### Why It Works

1. **Clear narrative arc**: Vision → Values → Strategy → Metrics → Future. A new employee can trace the company's story from top to bottom.
2. **Specific values**: "Learner First" and "Speed Over Perfection" are distinctive to this company. They could not be copied to a bank or a consulting firm.
3. **Metrics with trends**: Every number has an arrow and percentage change. An investor sees trajectory, not just a snapshot.
4. **North Star prominent**: ARR is the largest number on the board — it is clear what the company measures success by.
5. **Milestone timeline**: Past achievements (filled dots) and future goals (empty dots) show momentum and ambition.
6. **Brand-consistent**: The company's deep blue and coral accent colors are used throughout, with their actual logo.
7. **Dual-audience ready**: The board works for an all-hands presentation and an investor deck by selecting different frames.

---

## Great Board Breakdown #2: Culture Canvas for a Remote-First Company

### Context

A 45-person remote-first company creating a culture canvas for onboarding. Every new hire reviews this board in their first week.

### Layout

Culture grid (value blocks), 4800x3200px.

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] RemoteHQ Culture Canvas              [Updated Q1 25]│
│  "How we work, wherever we are"                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────┐│
│  │ ASYNC BY DEFAULT │ │ OWN YOUR OUTCOME │ │ WRITE IT DOWN││
│  │                  │ │                  │ │              ││
│  │ We communicate   │ │ We don't assign  │ │ If it's not  ││
│  │ in writing first.│ │ tasks—we assign  │ │ documented,  ││
│  │ Meetings are the │ │ outcomes. How you│ │ it doesn't   ││
│  │ exception, not   │ │ get there is up  │ │ exist.       ││
│  │ the rule.        │ │ to you.          │ │              ││
│  │                  │ │                  │ │              ││
│  │ ✓ Loom > meeting│ │ ✓ Ship & iterate │ │ ✓ RFC for    ││
│  │ ✓ Doc > Slack   │ │ ✓ No micromanage│ │   decisions  ││
│  │ ✓ 24hr response │ │ ✓ Celebrate wins│ │ ✓ Handbook > ││
│  │                  │ │                  │ │   tribal     ││
│  │ ✗ No "quick call"│ │ ✗ No blame for  │ │              ││
│  │   without agenda │ │   failed experi-│ │ ✗ No verbal  ││
│  │                  │ │   ments         │ │   agreements  ││
│  └──────────────────┘ └──────────────────┘ └──────────────┘│
│                                                              │
│  ┌──────────────────┐ ┌──────────────────┐ ┌──────────────┐│
│  │ TRUST > CONTROL  │ │  OUR ANTI-VALUES │ │  RITUALS     ││
│  │                  │ │  ═══════════════ │ │  ═══════════ ││
│  │ We trust adults  │ │ ✗ Presenteeism  │ │ Mon: Async   ││
│  │ to manage their  │ │ ✗ Hero culture  │ │   kickoff doc││
│  │ time, location,  │ │ ✗ "Just checking│ │ Wed: Optional││
│  │ and output.      │ │    in" messages  │ │   social call││
│  │                  │ │ ✗ Building in   │ │ Fri: Ship log││
│  │ ✓ Flex hours    │ │    secret       │ │ Monthly: All ││
│  │ ✓ No tracking   │ │ ✗ Meeting       │ │   hands retro││
│  │ ✓ Results only  │ │    marathons    │ │ Quarterly:   ││
│  │                  │ │                  │ │   IRL meetup ││
│  └──────────────────┘ └──────────────────┘ └──────────────┘│
├─────────────────────────────────────────────────────────────┤
│  COMMUNICATION NORMS                                        │
│  [Async-first] [All meetings need agenda] [Max 25 min]     │
│  [Loom for demos] [PRs for decisions] [Handbook for policy] │
└─────────────────────────────────────────────────────────────┘
```

### Why It Works

1. **Behaviors, not platitudes**: Each value tells employees exactly what to DO and what NOT to do. There is no ambiguity.
2. **Anti-values section**: By explicitly naming what they reject, the board draws sharp cultural boundaries.
3. **Remote-specific**: The culture reflects the actual working reality of a distributed team. This is not a generic "values poster" — it could only belong to a remote-first company.
4. **Onboarding-friendly**: A new hire reads this and knows how to communicate, make decisions, and contribute from day one.
5. **Rituals section**: Concrete practices anchor abstract values in real schedules.
6. **Warm visual tone**: Earth tones and warm off-white background feel human and approachable.

---

## Great Board Breakdown #3: Investor Update (Quarterly)

### Context

A Series B company ($8M ARR) sending a quarterly update to 12 investors. The board is designed for a 5-minute read.

### Layout

Dashboard update, 4200x3000px.

```
┌────────────────────────────────────────────────────────────┐
│  [Logo] FinLearn — Q4 2025 Investor Update  [CONFIDENTIAL] │
├────────────────────────────────────────────────────────────┤
│  TL;DR: Record quarter. $8M ARR (+35% QoQ). Closed 3      │
│  enterprise deals. Churn improved to 3.2%. Raising Series C.│
├────────────────────────────────────────────────────────────┤
│  [$8M ARR] [$680K MRR] [4.2K Cust] [118% NRR] [14mo Run]│
│  [↑35% QoQ] [↑12% MoM] [↑22% QoQ] [↑5% QoQ] [Stable]  │
├────────────────────────────────────────────────────────────┤
│  WINS THIS QUARTER              │ CHALLENGES                │
│  ● Closed 3 enterprise deals   │ ● Engineering velocity    │
│    ($1.2M combined ARR)        │   dropped 15% (technical  │
│  ● Launched AI tutor feature   │   debt paydown in Q1)     │
│    (2x engagement increase)    │ ● APAC market entry       │
│  ● Hired VP Engineering        │   delayed to Q2 (partner  │
│    (ex-Stripe, started Dec)    │   contract negotiations)  │
│  ● Churn improved from 4.8%   │ ● 2 senior eng departures │
│    to 3.2% (onboarding fix)   │   (replaced, no product   │
│                                │   impact)                  │
├────────────────────────────────────────────────────────────┤
│  PRODUCT ROADMAP                │ TEAM UPDATE               │
│  Q1: AI study plans, mobile   │ Current: 52 people (+8)   │
│  Q2: Enterprise SSO, analytics│ Key hire: VP Eng (filled) │
│  Q3: APAC localization        │ Open: 5 roles (3 eng,     │
│  Q4: Platform API (B2B2B)     │   1 sales, 1 data)        │
├────────────────────────────────────────────────────────────┤
│  FINANCIAL SUMMARY                                         │
│  Revenue: $680K/mo │ Expenses: $520K/mo │ Net: +$160K/mo  │
│  Cash: $12M │ Burn: $360K/mo (net) │ Runway: 14 months    │
│  Series C: Exploring. Targeting $30M at $150M+ valuation.  │
├────────────────────────────────────────────────────────────┤
│  THE ASK                                                   │
│  1. Intros to CLOs at Fortune 500 companies (enterprise)  │
│  2. Advice on APAC market entry (Japan and Singapore)     │
│  3. Series C lead investor introductions                   │
└────────────────────────────────────────────────────────────┘
```

### Why It Works

1. **5-minute readable**: An investor can absorb the entire update in one sitting. No scrolling through slides.
2. **TL;DR first**: The most important information is in the first 2 lines. Busy investors may only read this.
3. **Honest challenges**: Engineering velocity drop and team departures are disclosed without sugarcoating. This builds trust.
4. **Specific asks**: Not "help us grow" but specific introductions and advice. Investors can act immediately.
5. **Financial transparency**: Cash position, burn rate, and runway are clearly stated. No surprises.
6. **Consistent format**: This investor has received updates in this exact format for 6 quarters. They know where to find MRR.

---

## Great Board Breakdown #4: Org Growth Plan for a Scaling Startup

### Context

A 20-person startup planning to grow to 50 people in 12 months. The board shows the current structure alongside the target structure with a hiring timeline.

### Layout

Org evolution (timeline + structure), 5000x3500px.

```
              NOW (20 people)     +6 MONTHS (35)     +12 MONTHS (50)
LEADERSHIP    CEO, CTO            + VP Eng, VP Sales  + VP Product, CFO
ENGINEERING   4 eng, 1 team       8 eng, 2 teams      15 eng, 3 teams + lead
PRODUCT       1 PM, 1 designer    2 PM, 2 design      3 PM, 3 design, 1 UXR
GTM           2 sales, 1 mktg     5 sales, 2 mktg     10 sales, 4 mktg, 3 CS
OPS           1 ops               1 ops, 1 finance     2 ops, 1 finance, 1 legal
─────────────────────────────────────────────────────────────────────────────
TOTAL         10 FTE              20 FTE (+10)         35 FTE (+15)
PEOPLE COST   $1.2M/yr            $2.8M/yr             $5.5M/yr
```

### Why It Works

1. **Clear time horizon**: Three distinct snapshots make the growth trajectory tangible.
2. **Department-level detail**: Each department shows not just headcount but roles and team structure.
3. **Cost context**: Annual people cost at each stage helps finance and board members understand the investment.
4. **Hiring priority**: The hiring stack rank (VP Eng first, VP Sales next) is clear from the timeline.
5. **Team topology evolution**: Moving from 1 team to 3 teams with leads shows organizational maturity.
6. **NEW badges**: Planned hires have visual indicators distinguishing them from current team.

---

## Anti-Pattern #1: The Corporate Buzzword Board

### What Goes Wrong

The board is filled with generic statements that could apply to any company: "We value innovation," "Our people are our greatest asset," "We strive for excellence." No specific behaviors, no metrics, no evidence.

**Symptoms**:

- Values could be copied to any company without changes
- No behavioral definitions (just nouns: "integrity," "innovation," "teamwork")
- No metrics on the board
- No stories or examples
- Feels like it was generated by a "company values" template

**Root cause**: Confusing aspiration with definition. The board states what the company wants to be perceived as, not what it actually does differently.

**Fix**:

1. For each value, add 3 specific behaviors ("We do X, we don't do Y")
2. Include a real story where the value was tested
3. Add anti-values to draw boundaries
4. If a value could apply to 90% of companies, rewrite it to be company-specific
5. Include metrics that prove the values in action (e.g., "NPS 60 proves Learner First works")

---

## Anti-Pattern #2: The Vanity Metrics Board

### What Goes Wrong

The board showcases impressive-sounding numbers without context: "500,000 downloads!" "10,000 registered users!" "Featured in TechCrunch!" But there is no information about revenue, retention, or growth rate.

**Symptoms**:

- Metrics are large but lack trend arrows or context
- Top-of-funnel metrics (downloads, signups) dominate over bottom-of-funnel metrics (revenue, retention)
- No challenges or risks mentioned
- Press mentions substituting for business metrics
- No runway, burn rate, or financial health indicators

**Root cause**: Optimizing for impression rather than information. The board is designed to impress, not to inform decisions.

**Fix**:

1. Replace vanity metrics with business metrics (ARR, NRR, churn, CAC, LTV)
2. Add trend direction to every metric (MoM or QoQ change)
3. Include at least 2 challenge callouts
4. Show financial health (burn rate, runway)
5. Context every metric: "12% MoM growth (industry avg: 5%)"

---

## Anti-Pattern #3: The Stale Board

### What Goes Wrong

The board was created 18 months ago and never updated. The metrics show "Q2 2024," the team section shows people who have left, and the strategic pillars reference initiatives that were completed or abandoned.

**Symptoms**:

- Dates are clearly outdated
- Metrics do not match current reality
- Team members listed who are no longer with the company
- Strategic initiatives that were completed months ago still shown as "planned"
- No version history or "last updated" timestamp

**Root cause**: The board was treated as a one-time artifact instead of a living document.

**Fix**:

1. Add a visible "Last Updated" timestamp and commit to updating it
2. Set a refresh cadence: quarterly for vision boards, monthly for investor updates
3. Use Miro's version history to track changes
4. Assign an owner responsible for keeping the board current
5. In the board itself, add a "Board Health" indicator: Green (updated this quarter), Amber (>3 months), Red (>6 months)

---

## Anti-Pattern #4: The Investor Wishlist Board

### What Goes Wrong

The investor update paints an unrealistically positive picture. Only wins are mentioned. Challenges are hidden. Metrics are cherry-picked. The "ask" section is empty or vague.

**Symptoms**:

- Zero challenges or risks mentioned
- Only the best metrics shown (ignoring churn, burn)
- Revenue shown without expenses or burn rate
- No specific asks — just "continue to support us"
- Tone is relentlessly optimistic without evidence

**Root cause**: Fear that honesty will reduce investor confidence. In reality, the opposite is true — investors lose confidence when they sense information is being hidden.

**Fix**:

1. Dedicate equal visual space to wins AND challenges
2. For each challenge, include root cause and action plan (shows competence)
3. Show full financial picture (revenue AND expenses AND runway)
4. Include 2-3 specific, actionable asks
5. Maintain the same honest format every quarter — consistency builds trust

---

## Anti-Pattern #5: The Org Chart Without Strategy

### What Goes Wrong

The board shows who reports to whom but provides no context for WHY the organization is structured this way, WHERE it is going, or WHAT hiring priorities exist. It is a static hierarchy diagram with no strategic dimension.

**Symptoms**:

- Names and titles only — no team responsibilities
- No headcount plan or hiring priorities
- No team topology rationale
- No growth timeline
- The board answers "who's in charge?" but not "how are we scaling?"

**Root cause**: Treating the org chart as an HR document instead of a strategic planning tool.

**Fix**:

1. Add the time dimension: current + 6 months + 12 months
2. Include department responsibilities, not just names
3. Rank hiring priorities with justification
4. Show team topology model and planned evolution
5. Include people cost context

---

## Reference Frameworks

### The YC Investor Update Format

Y Combinator recommends this monthly update structure:

```
1. What's your top-level number? (MRR or ARR)
2. What were your biggest wins?
3. What were your biggest challenges?
4. What do you need help with?
5. Morale: How's the team feeling? (1-10 scale)
```

Simple, honest, consistent. This can be visualized as a compact dashboard.

### The Netflix Culture Deck Pattern

Netflix's famous culture deck follows this pattern:

1. Values are described as behaviors, not adjectives
2. Each value includes a "context" paragraph explaining the trade-off
3. Anti-patterns are explicitly called out
4. Compensation philosophy is transparent
5. Freedom and responsibility are framed as a package

This translates to culture canvases that are behavioral, trade-off-aware, and radically specific.

### The Amazon Working Backwards Pattern

Amazon's approach to company building starts with the customer:

1. Write the press release first (what will the world say?)
2. Define the customer experience (FAQ format)
3. Work backwards to strategy and structure

This translates to vision boards that lead with customer impact before company metrics.

---

## Checklist: Does Your Board Match Great Examples?

Score your board (1 point each, target: 14+):

| #   | Criterion                                             | Points |
| --- | ----------------------------------------------------- | ------ |
| 1   | Vision statement is specific and under 20 words       | /1     |
| 2   | Values are behavioral with do/don't lists             | /1     |
| 3   | At least 3 metrics with trend indicators              | /1     |
| 4   | Brand colors used consistently                        | /1     |
| 5   | Clear narrative flow (top-to-bottom or left-to-right) | /1     |
| 6   | Content is specific to THIS company (not generic)     | /1     |
| 7   | At least 1 challenge or risk is acknowledged          | /1     |
| 8   | Updated within the last quarter                       | /1     |
| 9   | Audience-appropriate tone and detail level            | /1     |
| 10  | Font hierarchy consistent throughout                  | /1     |
| 11  | Adequate whitespace (board does not feel cramped)     | /1     |
| 12  | All sections have consistent visual treatment         | /1     |
| 13  | Timeline or milestones showing past and future        | /1     |
| 14  | North Star metric visually prominent                  | /1     |
| 15  | Board would make a team member feel proud             | /1     |
| 16  | An outsider understands the company in 3 minutes      | /1     |

**Scoring**:

- 14-16: Excellent — reference-quality board
- 10-13: Good — communicates well, minor improvements possible
- 7-9: Adequate — functional but lacks depth or specificity
- Below 7: Needs significant rework

---

## Summary

Great company building boards share common traits: specific content that could only belong to this company, metrics with trajectory context, honest acknowledgment of challenges, brand-consistent visual design, and a clear narrative that answers who we are, where we are going, and how we are doing. Anti-pattern boards share common failures: generic values, hidden challenges, vanity metrics, stale content, and static structures without strategic context. Build every board as if it will be referenced in the next all-hands, the next board meeting, and the next new hire's first week — because it should.
