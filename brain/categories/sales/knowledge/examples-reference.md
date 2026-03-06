# Sales Board Examples & Reference

## Introduction

This reference guide provides detailed breakdowns of six exemplary sales board designs, followed by common anti-patterns with before/after fixes. Each example includes the context, what makes it effective, the specific design decisions that elevate it, and lessons that transfer to other boards.

---

## Example 1: The Weekly Pipeline Review Board

### Context

A B2B SaaS company with an 8-person sales team runs a Monday morning pipeline review. The VP of Sales needs to see the full pipeline, identify stuck deals, and coach reps on next steps. The board is updated every Friday afternoon and reviewed every Monday at 9 AM.

### Board Breakdown

**Layout**: Horizontal Pipeline Kanban (5000x3000px)

**Header Strip** (4800x350px, #1B2A4A background):

- Title: "Q1 2026 Pipeline Review — North America"
- Five KPI cards: Total Pipeline ($2.85M), Weighted ($1.19M), Win Rate (28%), Avg Cycle (34 days), Coverage (2.4x)
- Each KPI shows vs. target with RAG indicator

**Pipeline Columns** (6 columns, 750px each):

- Lead (15 deals, light blue cards)
- Qualified (12 deals, light purple cards)
- Proposal (9 deals, light orange cards)
- Negotiation (6 deals, light yellow cards)
- Closed Won (5 deals, green cards)
- Closed Lost (3 deals, red cards)
- Conversion rates displayed between columns on arrow connectors

**Analytics Strip** (4800x450px, white background):

- Three panels: Stage Conversion Rates, Deal Velocity by Stage, Aging Deals (14+ days)
- Aging deals have dotted connectors pointing up to the specific deal cards in the pipeline

### What Makes It God-Level

1. **The aging deal connectors**: Dotted lines from the analytics strip physically point to the stale deals in the pipeline above. This is not just data — it is an accusation. The VP can literally point at the line and say "This deal has been in Qualified for 18 days. What is happening?"

2. **Cards sorted by value**: Within each column, the highest-value deal is at the top. This means the most important deals get the most visual real estate and attention.

3. **Loss reasons on every lost card**: Each Closed-Lost card includes a one-line reason and a one-line lesson. Over time, these accumulate into a pattern that informs playbook changes.

4. **Contextual metadata**: The board shows CRM sync status, review cadence, quota, and current attainment — everything the VP needs to contextualize the numbers without opening another tool.

### Transferable Lessons

- Always connect analytics to the specific elements they describe (aging deal connectors)
- Sort by importance/value, not by date added
- Document loss reasons — they are more valuable than win reasons for improving the process
- Include enough metadata that the board is self-contained

---

## Example 2: The Enterprise Account War Room

### Context

A software company is pursuing a $280K deal with Pacific Brands for an e-commerce replatform. The deal is in Negotiation with three competitors. The AE, SE, executive sponsor, and deal desk are all involved. The board serves as the single source of truth for deal strategy.

### Board Breakdown

**Layout**: Deal Room / War Room (5600x3000px)

**Deal Header** (full width, 280px, #1B2A4A with amber #F9A825 accent bar indicating active negotiation):

- Account logo, deal name, $280K value, Negotiation stage
- AE: Marcus Johnson, SE: Emily Chen, Exec Sponsor: VP Sales
- Days in Negotiation: 12, Close Target: March 31

**Buying Committee Frame** (2400x1200px, left):

- Org chart with 7 stakeholders mapped
- Steve Morgan (CDO) — Champion, marked with gold star
- Head of E-Commerce — Supporter, green dot
- VP Engineering — Technical Evaluator, blue gear icon
- CFO — Economic Buyer, dollar sign icon
- Head of Procurement — Neutral, gray circle
- CTO — Potential Blocker, red X (prefers incumbent)
- Relationship lines showing reporting structure and influence paths

**Deal Timeline** (3000x1200px, right):

- 8-week timeline from first meeting to target close
- Milestone markers: Discovery (Week 1), Technical Demo (Week 2), Business Case (Week 3), Proposal (Week 4), Executive Review (Week 5), Negotiation (Week 6-7), Close (Week 8)
- Current position indicator at Week 6
- Notes at each milestone: "Demo scored 9/10 — strongest on migration capabilities"

**Competitive Intelligence** (2000x1100px, bottom-left):

- Head-to-head comparison: Us vs. Shopify Plus vs. BigCommerce Enterprise
- Feature matrix with checkmarks, partial checkmarks, and X marks
- Win theme: "Migration speed — 6 weeks vs. 16 weeks for Shopify Plus"
- Trap questions: "Ask about their Snowflake connector — it does not exist yet"

**Strategy & Risks** (1800x1100px, bottom-center):

- Strengths: Migration speed, API flexibility, dedicated implementation team
- Risks: CTO prefers Shopify (incumbent), data migration timeline concern, budget may need CFO re-approval
- Each risk has a mitigation action with owner
- Decision criteria scorecard: Migration Speed (us: 9, Shopify: 6), API Quality (us: 9, Shopify: 7), Price (us: 6, Shopify: 8), Brand (us: 5, Shopify: 9)

**Mutual Action Plan** (1600x1100px, bottom-right):

- Checklist of 12 tasks with owners and dates
- Our tasks: Send revised proposal (Marcus, Mar 8), Migration plan review (Emily, Mar 10), Executive dinner (VP Sales, Mar 14)
- Their tasks: Legal review of MSA (Procurement, Mar 12), Technical sign-off (CTO, Mar 15), Budget re-approval (CFO, Mar 18)

### What Makes It God-Level

1. **The stakeholder map with influence lines**: Not just an org chart — the lines show who influences whom. The CEO influences the CTO who is a blocker. Knowing this, the team can strategize about getting the CEO on their side.

2. **The decision criteria scorecard**: Instead of guessing, the team has scored themselves against competitors on each criterion the prospect cares about. This reveals that they win on technical merit but lose on price and brand.

3. **The mutual action plan with THEIR tasks**: This is not just our to-do list. It maps what the prospect needs to do to close. If their tasks slip, the deal slips. Making this visible creates accountability and reveals blockers early.

### Transferable Lessons

- Map influence, not just hierarchy, in stakeholder charts
- Score yourself honestly against competitors on the prospect's criteria, not yours
- Track the prospect's action items, not just your own
- Centralize all deal intelligence in one place — the board should replace the "deal doc"

---

## Example 3: The Sales Enablement Playbook

### Context

A Series B SaaS company has 15 AEs and is hiring 8 more. The VP of Sales Enablement needs a visual playbook that new hires can walk through during onboarding and experienced reps can reference during live deals. The playbook codifies the outbound enterprise sales motion.

### Board Breakdown

**Layout**: Playbook Horizontal Flow (7000x3400px)

**Five phase columns** spanning the full sales motion:

1. ICP & Personas → 2. Outreach Sequences → 3. Discovery (MEDDPICC) → 4. Demo & Proposal → 5. Close & Negotiate

**ICP Column**: Two persona cards (VP of Engineering, Director of Operations) with demographics, pain points, goals, and anti-personas (who NOT to sell to). Firmographic criteria with explicit disqualifiers.

**Outreach Column**: Three sequence flows (Cold Outbound 14-day, Inbound Response 7-day, Referral 5-day) with specific email/call/LinkedIn templates at each step. A/B test results noted on two email variants.

**Discovery Column**: Full MEDDPICC framework with 3-5 questions per category. Color-coded "good answer" vs. "red flag" examples for each question. Scoring rubric at the bottom.

**Demo & Proposal Column**: Demo script outline, value proposition by persona, proposal template structure, ROI calculator instructions.

**Close & Negotiate Column**: Pricing matrix, discount authority levels, mutual action plan template, contract redline guide, escalation procedures.

**Objection Handling Strip** (full width, 800px): 10 common objections with response frameworks, supporting evidence, and follow-up questions.

**Competitor Battlecard Strip** (full width, 600px): 3 competitor cards with head-to-head comparisons, trap questions, and positioning statements.

### What Makes It God-Level

1. **A/B test results on outreach templates**: The playbook is not just prescriptive — it shows what has been tested and what works. "Subject line A: 24% open rate vs. Subject line B: 31% open rate — use B."

2. **Anti-personas with explicit disqualifiers**: Telling reps who NOT to sell to saves more time and pain than telling them who to sell to. "Do not pursue if: <100 employees, no data warehouse, budget <$20K."

3. **The MEDDPICC scoring rubric**: Each discovery category gets a 1-5 score with definitions. A deal scoring below 15/40 is automatically deprioritized. This creates consistent qualification across all reps.

### Transferable Lessons

- Show what has been tested, not just what is prescribed
- Define the negative space (who to avoid) as clearly as the positive space (who to pursue)
- Include scoring and thresholds that create consistent decision-making
- Make the playbook navigable, not sequential — reps will zoom into the section they need mid-call

---

## Example 4: The Monthly Forecast Dashboard

### Context

A $15M ARR SaaS company presents its monthly sales forecast to the CEO and board. The VP of Sales needs a board that tells the revenue story: where they are, where they are going, what the risks are, and what levers they can pull.

### Board Breakdown

**Layout**: Revenue Dashboard Grid (5500x3000px)

**KPI Strip**: Quota ($3.6M quarterly), Closed ($1.8M, 50%), Pipeline ($5.4M, 1.5x coverage), Forecast ($2.9M commit + best case), Win Rate (31%, up from 28% last quarter)

**Forecast Breakdown Panel** (2400x1100px): Stacked bar chart showing Closed ($1.8M), Commit ($680K), Best Case ($420K), Upside ($300K). Gap analysis: "$780K gap to quota, requires 62% of Best Case + Upside to convert."

**Pipeline Movement Panel** (2800x1100px): Waterfall chart showing pipeline changes this month. Added: $1.2M new pipeline. Advanced: $800K moved forward in stage. Slipped: $340K deals pushed to next quarter. Lost: $180K deals closed-lost. Net change: +$680K.

**Win/Loss Panel** (2000x1000px): Top 3 win reasons, Top 3 loss reasons, Average cycle length by segment (SMB: 18 days, Mid-Market: 42 days, Enterprise: 78 days), Win rate by source (Inbound: 38%, Outbound: 22%, Partner: 45%).

**Rep Leaderboard** (1800x1000px): 8 reps ranked by closed revenue with quota attainment bars. Color-coded: green (>80% attainment), yellow (50-80%), red (<50%).

**Risk Deals Panel** (1300x1000px): 5 deals at risk of slipping, with reason and mitigation for each.

### What Makes It God-Level

1. **The gap analysis narrative**: Instead of just showing numbers, the forecast panel explicitly states: "Here is the gap, here is what needs to happen to close it." This turns data into a plan.

2. **Pipeline movement as a waterfall**: Showing what came in, what moved forward, what slipped, and what was lost makes pipeline dynamics visible. The CEO can see whether pipeline is growing, shrinking, or churning.

3. **Win rate by source**: This reveals ROI on lead generation investments. If partner deals close at 45% but outbound at 22%, the board can make investment decisions accordingly.

### Transferable Lessons

- Always include a gap analysis with the forecast — a number without context is just a number
- Show pipeline dynamics (movement), not just pipeline snapshot (current state)
- Segment metrics by meaningful dimensions (source, size, segment) to reveal actionable patterns

---

## Example 5: The Quarterly Business Review (QBR) Board

### Context

A VP of Sales presents to the CEO and executive team at the end of Q4 2025. The QBR covers results, pipeline health, team performance, market trends, and the plan for Q1 2026.

### Board Breakdown

**Layout**: Adapted Revenue Dashboard with an added narrative flow (6000x4000px)

**Seven sections, designed to be presented in Miro presentation mode**:

1. **Q4 Results Summary**: Revenue vs. target (108% attainment), deal count (62 closed), average deal size ($48K up from $41K), logo acquisition (18 new customers), expansion revenue ($420K)

2. **Quarterly Trend**: Four-quarter revenue trend showing consistent growth from $2.1M (Q1) to $3.4M (Q4). Chart with commentary on key drivers per quarter.

3. **Team Performance**: Leaderboard with all 12 reps. Attainment distribution: 4 reps above 100%, 5 reps at 70-100%, 3 reps below 70%. Performance improvement plans noted for bottom 3.

4. **Win/Loss Deep Dive**: Detailed analysis with customer quotes. "We chose [Company] because their migration took 6 weeks instead of 16" — Sarah M., VP Eng at Pacific Brands.

5. **Pipeline Health for Q1**: $8.2M pipeline, 2.3x coverage, stage distribution analysis. Risk factors: 40% of pipeline in early stages, 2 enterprise deals totaling $1.2M with uncertain timelines.

6. **Market & Competitive Trends**: New competitor entrant (AcmeSoft), pricing pressure in mid-market segment, shift toward consumption-based pricing in the industry.

7. **Q1 Plan**: Hiring plan (4 new AEs), territory realignment, new outbound playbook launch, pricing experiment for mid-market.

### What Makes It God-Level

1. **Customer quotes in win/loss analysis**: Direct quotes from customers about why they chose (or did not choose) the company are infinitely more persuasive than charts. "We chose you because..." is the most powerful sales data there is.

2. **Presentation mode optimization**: Each section is a frame designed for full-screen presentation. The narrative arc follows the classic QBR flow: results → analysis → outlook → plan.

3. **Honesty about bottom performers**: The board does not hide underperformance. It names the bottom 3 reps and notes performance improvement plans. This signals to the CEO that the VP of Sales is managing accountability.

### Transferable Lessons

- Use customer quotes — they are more impactful than any chart
- Design QBR boards for presentation mode with a clear narrative arc
- Be honest about problems — a board that only shows good news is not trusted

---

## Example 6: The Account Expansion Dashboard

### Context

A Customer Success team manages 50 enterprise accounts with a combined $8M ARR. The board tracks account health, expansion opportunities, renewal risks, and cross-sell progress.

### Board Breakdown

**Layout**: Dashboard Grid with account tiles (6000x3500px)

**Portfolio KPIs**: Total ARR ($8M), Net Revenue Retention (112%), Gross Retention (94%), Average Account Health (7.8/10), Expansion Pipeline ($1.4M)

**Account Tier Map**: Three tiers visualized as columns. Strategic (5 accounts, 45% of ARR), Growth (15 accounts, 35% of ARR), Maintain (30 accounts, 20% of ARR). Each account is a card showing: logo, ARR, health score, renewal date, expansion potential.

**Renewal Calendar**: Timeline showing next 12 months of renewals. Accounts placed on their renewal date. Color-coded: green (healthy, auto-renew expected), yellow (some risk, needs outreach), red (significant churn risk).

**Expansion Pipeline**: Kanban of expansion opportunities: Discovery → Proposal → Negotiation → Closed. Each card shows account name, expansion value, product, and champion.

**Health Score Breakdown**: Scatter plot representation. X-axis: Product Adoption (0-10), Y-axis: Relationship Score (0-10). Each dot is an account. Quadrants labeled: "Champions" (high-high), "At Risk — Product" (low adoption, high relationship), "At Risk — Relationship" (high adoption, low relationship), "Urgent" (low-low).

### What Makes It God-Level

1. **The health score scatter plot**: This two-dimensional view reveals accounts that traditional single-number health scores miss. An account with great adoption but weak relationships is one departure away from churning. An account with great relationships but low adoption is ripe for deeper engagement.

2. **Renewal calendar with risk coloring**: Making renewals visible on a timeline with risk indicators creates urgency. When the CEO can see three red accounts coming up in Q2, the conversation shifts from "are we okay?" to "what is the plan for each of these?"

3. **Tier-based portfolio view**: Not all accounts are equal. The tier structure ensures Strategic accounts get disproportionate attention, matching the Pareto reality that 20% of accounts drive 80% of revenue.

### Transferable Lessons

- Use two-dimensional scoring (scatter plots) instead of single-number health scores
- Make time-based events (renewals) visible on a timeline, not hidden in a table
- Structure portfolios by value tier to focus attention where it matters most

---

## Anti-Patterns and Fixes

### Anti-Pattern 1: The Spreadsheet on a Canvas

**Before**: A sales manager copies their Salesforce report into a Miro board — a giant table with 50 rows and 12 columns. Every deal is a table row. There are no colors, no cards, no spatial organization.

**Why It Fails**: The board adds zero value over the CRM. There is no spatial reasoning, no visual hierarchy, no at-a-glance comprehension. It takes longer to navigate than the original spreadsheet.

**After**: Transform the table into a Kanban. Each deal becomes a sticky note card with the 5 most important fields. Deals are arranged in stage columns. Summary metrics sit in a header strip. The 50-row table becomes a scannable landscape of 40-50 cards with spatial meaning.

### Anti-Pattern 2: The Once-And-Done Masterpiece

**Before**: An enablement manager spends 20 hours creating a gorgeous playbook board. It is presented once at the sales kickoff. Six months later, it has not been updated. Half the objection responses are outdated. Two new competitors have entered the market.

**Why It Fails**: The board was designed for a moment, not a workflow. No maintenance plan was established. No owner was assigned for ongoing updates.

**After**: The same playbook board, but with a "Last Updated" timestamp prominently displayed, a quarterly review calendar, and assigned owners for each section (Product Marketing owns battlecards, Enablement owns sequences, Sales Manager owns discovery framework). Each section header shows its last-updated date.

### Anti-Pattern 3: The Everything Board

**Before**: A VP of Sales creates one massive board (10000x8000px) containing the pipeline, forecast, account plans for all 20 strategic accounts, the playbook, and competitive intelligence. It takes 30 seconds to navigate from one section to another.

**Why It Fails**: The board serves no single purpose well. Pipeline reviews require different information density than account planning. Playbook reference requires different navigation than forecast presentation. The board is too large to load efficiently and too complex to maintain.

**After**: Five separate boards, each serving one purpose. A "Sales Hub" board with links to all five. Each board is optimized for its specific meeting and audience. The pipeline board is 5000x3000px and loads in 2 seconds. The playbook board is 7000x3400px and is designed for zoom-in navigation.

### Anti-Pattern 4: The Vanity Dashboard

**Before**: A RevOps team creates a beautiful dashboard with 15 KPIs, 6 charts, and 3 leaderboards. Half the metrics are non-actionable (total emails sent, average response time, number of meetings last Tuesday). The board looks impressive but drives no decisions.

**Why It Fails**: Every metric must pass the "so what" test. If a number goes up or down, does anyone need to take a specific action? If not, it is vanity data.

**After**: The dashboard is stripped to 6 KPIs that directly connect to actions. Each KPI has a target, a RAG indicator, and an implied action when off-target. The 15-KPI dashboard becomes a 6-KPI decision tool with supporting detail panels for the metrics that matter.

### Anti-Pattern 5: The Colorblind Pipeline

**Before**: A pipeline board uses identical white sticky notes for every deal in every stage. The only difference between stages is the column position. There is no color coding, no visual differentiation, no status indicators.

**Why It Fails**: Color is one of the fastest pre-attentive processing channels in the visual system. Without color coding, the brain has to read every card to understand its context. The board loses the "glanceable" quality that makes spatial layouts valuable.

**After**: Each stage gets a distinct background tint and card color. Won cards are green, lost cards are red. Aging deals have amber warning badges. At-risk deals have red dot indicators. The board can now be comprehended at a glance — "lots of orange in Proposal stage, only a few yellow in Negotiation — deals are getting stuck at the proposal stage."

---

## Quick Reference: Board Type Selection

| Situation                        | Board Type             | Key Pattern                 |
| -------------------------------- | ---------------------- | --------------------------- |
| Weekly team pipeline review      | Pipeline Board         | Horizontal Pipeline Kanban  |
| Enterprise deal strategy session | Deal Room              | War Room pattern            |
| Monthly forecast to leadership   | Forecast Dashboard     | Revenue Dashboard Grid      |
| New hire sales training          | Playbook Board         | Horizontal Flow             |
| Strategic account planning       | Account Plan           | Account Strategy Canvas     |
| QBR executive presentation       | QBR Board              | Dashboard + Narrative Flow  |
| Customer success expansion       | Account Dashboard      | Dashboard Grid + Timeline   |
| Competitive win/loss analysis    | Analysis Board         | Dashboard Grid              |
| Territory planning               | Territory Board        | Geographic/Segment Grid     |
| Sales kickoff enablement         | Playbook + Battlecards | Horizontal Flow + Reference |
