# Sales Board Layout Patterns

## Introduction

Sales boards demand layouts that mirror how revenue teams actually think: deals flow through stages, accounts have hierarchies, playbooks have sequences, and performance has rankings. This guide presents five battle-tested layout patterns for sales Miro boards, each optimized for a specific use case. Every pattern includes ASCII diagrams, detailed spacing specifications, zone definitions, and guidance on eye flow.

---

## Pattern 1: Horizontal Pipeline Kanban

### When to Use

Pipeline reviews, deal tracking, weekly sales team meetings. This is the foundational layout for any board that tracks deals through sequential stages.

### Design Rationale

The left-to-right flow mirrors the natural progression of a deal from lead to close. Western reading direction (left to right) aligns with the temporal progression of the sales cycle. Gravity is implied: deals that slip out of a stage "fall" to lost. Deals that advance move right toward the goal.

### ASCII Diagram

```
+================================================================+
|                    PIPELINE SUMMARY STRIP                        |
|  [Pipeline $] [Weighted $] [Win Rate] [Velocity] [Deals #]      |
|  Height: 350px | Full width | Dark background                   |
+================================================================+
|          |          |          |          |         |            |
| STAGE 1  | STAGE 2  | STAGE 3  | STAGE 4  | WON    | LOST      |
| Lead     | Qualify  | Proposal | Negot.   |        |           |
|          |          |          |          |         |            |
| [card]   | [card]   | [card]   | [card]   | [card] | [card]    |
| [card]   | [card]   | [card]   | [card]   | [card] | [card]    |
| [card]   | [card]   | [card]   |          | [card] |           |
| [card]   |          | [card]   |          |        |           |
| [card]   |          |          |          |        |           |
|          |          |          |          |         |            |
| 62%----->| 58%----->| 47%----->| 72%--+   |        |           |
|          |          |          |      |   |        |           |
|  Stage   |  Stage   |  Stage   | Stage v   |        |           |
|  count:  |  count:  |  count:  | count:   |        |           |
|  15      |  12      |  9       | 6        |        |           |
|  $487K   |  $624K   |  $782K   | $654K    | $412K  | $188K     |
+================================================================+
|                  ANALYTICS STRIP                                 |
|  [Conversion Funnel] [Velocity Chart] [Aging Deals Warning]     |
|  Height: 450px | Full width | Light background                  |
+================================================================+
```

### Grid Specifications

| Element                 | Width            | Height    | Gap                  |
| ----------------------- | ---------------- | --------- | -------------------- |
| Summary Strip           | Full board width | 350px     | 0 (top)              |
| Stage Column (main)     | 750px            | 2000px    | 30px between columns |
| Stage Column (won/lost) | 400px            | 2000px    | 30px                 |
| Deal Card               | 220px            | 140-180px | 15px vertical gap    |
| Analytics Strip         | Full board width | 450px     | 0 (bottom)           |
| Analytics Panel         | 1400px           | 380px     | 30px between panels  |

### Recommended Board Size

5000 x 3200px for 4 main stages + won/lost. Add 750px width per additional stage.

### Eye Flow

1. Eye enters at top-left of summary strip (pipeline total)
2. Scans right across KPIs for overall health
3. Drops to stage columns, scanning left to right following deal progression
4. Eye naturally rests on the rightmost active stage (negotiation) — this is where the action is
5. Drops to analytics strip for deeper analysis
6. Returns to specific stage columns based on problem areas identified

### Zone Definitions

- **Summary Zone** (top): Executive snapshot — answers "how are we doing overall?"
- **Pipeline Zone** (center): Operational detail — answers "what is the state of each deal?"
- **Analytics Zone** (bottom): Pattern recognition — answers "what trends should we act on?"

### Key Design Rules

- Conversion rate labels between columns serve as the connective tissue — never omit them
- Won column should use green tints; Lost column should use red tints
- Stage headers must include both deal count and dollar value
- Cards should be sorted by value descending within each column (highest value at top)
- Use a horizontal rule or color band to visually separate the three zones

---

## Pattern 2: Account Strategy Canvas

### When to Use

Account planning for enterprise or strategic accounts. Quarterly business reviews. Customer success expansion planning.

### Design Rationale

Account strategy is multidimensional — it requires understanding people, relationships, opportunities, competition, and actions simultaneously. The canvas layout places these dimensions in a grid where the eye can synthesize across dimensions. The left column focuses on people (who), the center on strategy (what), and the right on execution (how and when).

### ASCII Diagram

```
+================================================================+
|                  ACCOUNT OVERVIEW BANNER                         |
| [Logo] [Company Name] [Industry] [ARR: $X] [Health: GREEN]     |
| [Account Owner] [CSM] [Exec Sponsor] [Next Review Date]        |
| Height: 300px | Full width | Branded with account colors        |
+================================================================+
|                    |                    |                         |
|  STAKEHOLDER MAP   |  RELATIONSHIP      |  REVENUE LANDSCAPE     |
|                    |  STRENGTH MATRIX   |                         |
|  +-----------+     |                    |  Current ARR: $XXX     |
|  | CEO       |     |  Champion: [names] |  Expansion: $XXX       |
|  +-----+-----+     |  Supporter: [names]|  Whitespace: $XXX      |
|   |         |      |  Neutral:  [names] |  At-Risk: $XXX         |
|  VP Sales  VP Eng  |  Blocker:  [names] |                         |
|   |    |     |     |                    |  [Product penetration   |
|  Dir   Dir   Dir   |  Engagement Score  |   heat map]             |
|                    |  ████████░░ 7/10   |                         |
|  Width: 1800px     |  Width: 1500px     |  Width: 1800px         |
|  Height: 1400px    |  Height: 1400px    |  Height: 1400px        |
+--------------------+--------------------+-------------------------+
|                    |                    |                         |
|  COMPETITIVE       |  OPPORTUNITIES &   |  ACTION PLAN &          |
|  LANDSCAPE         |  WHITE SPACE       |  TIMELINE               |
|                    |                    |                         |
|  [Competitor A]    |  Opp 1: $XXK       |  Q1: [action items]     |
|  ■ Strength        |  Stage: Discovery  |  Q2: [action items]     |
|  □ Weakness        |  Champion: [name]  |  Q3: [action items]     |
|  △ Threat          |                    |  Q4: [action items]     |
|                    |  Opp 2: $XXK       |                         |
|  [Competitor B]    |  Stage: Proposal   |  Owner: [name]          |
|  ■ Strength        |  Risk: Budget      |  Next milestone:        |
|  □ Weakness        |                    |  [date + description]   |
|  △ Threat          |  Opp 3: $XXK       |                         |
|                    |  Stage: Negotiation|                         |
|  Width: 1800px     |  Width: 1500px     |  Width: 1800px         |
|  Height: 1200px    |  Height: 1200px    |  Height: 1200px        |
+--------------------+--------------------+-------------------------+
|                                                                  |
|  MEETING NOTES & ENGAGEMENT HISTORY                              |
|  [Chronological timeline of meetings, calls, and key events]    |
|  Height: 500px | Full width                                      |
|                                                                  |
+================================================================+
```

### Grid Specifications

| Element              | Width            | Height      | Gap      |
| -------------------- | ---------------- | ----------- | -------- |
| Account Banner       | Full board width | 300px       | 0        |
| Left Column Frames   | 1800px           | 1200-1400px | 40px     |
| Center Column Frames | 1500px           | 1200-1400px | 40px     |
| Right Column Frames  | 1800px           | 1200-1400px | 40px     |
| Meeting Notes Strip  | Full board width | 500px       | 0        |
| Stakeholder Card     | 180x100px        | -           | 20px gap |
| Competitor Card      | 350x200px        | -           | 20px gap |
| Opportunity Card     | 320x180px        | -           | 15px gap |
| Action Item          | Full frame width | 60px        | 10px gap |

### Recommended Board Size

6000 x 4000px

### Eye Flow

1. Eye enters at account banner — immediately absorbs company identity, health, and size
2. Drops to stakeholder map (top-left) — who are the people?
3. Moves right to relationship matrix — how strong are our connections?
4. Continues right to revenue landscape — what is the financial opportunity?
5. Drops to second row, scans left to right: competition, opportunities, action plan
6. The bottom-right action plan is the "destination" — this is where strategy becomes execution
7. Meeting notes at bottom provide historical context on demand

### Zone Definitions

- **Identity Zone** (banner): Who is the account? What is their health?
- **Intelligence Zone** (top row): What do we know? People, relationships, revenue.
- **Strategy Zone** (bottom row): What should we do? Competitive positioning, opportunities, actions.
- **History Zone** (bottom strip): What have we done? Meeting notes and engagement timeline.

---

## Pattern 3: Sales Playbook Horizontal Flow

### When to Use

Sales enablement, new hire onboarding, methodology documentation, sales process codification.

### Design Rationale

A playbook is a journey: it starts with understanding the buyer and ends with closing the deal. The horizontal flow mirrors this journey. Each section represents a phase of the sales motion, and the left-to-right progression teaches the methodology in the order it is applied.

### ASCII Diagram

```
+====================================================================+
|                        PLAYBOOK HEADER                               |
| [Company] [Version: X.X] [Last Updated: YYYY-MM-DD] [Owner]        |
| [Sales Motion: Outbound Enterprise] [Avg Cycle: XX days]            |
| Height: 250px | Full width | Brand colors                           |
+====================================================================+
|              |              |              |              |          |
| ICP &        | OUTREACH     | DISCOVERY    | DEMO &       | CLOSE & |
| PERSONAS     | SEQUENCES    | FRAMEWORK    | PROPOSAL     | NEGOT.  |
|              |              |              |              |          |
| [Persona 1]  | Email Day 1  | MEDDPICC     | Demo Script  | Pricing |
|  - Title     | ↓            | Framework    | Outline      | Matrix  |
|  - Pain pts  | Call Day 3   |              |              |          |
|  - Goals     | ↓            | Questions:   | Value Prop   | Mutual  |
|  - Objections| Email Day 5  | - Metrics    | By Persona   | Action  |
|              | ↓            | - Econ Buyer |              | Plan    |
| [Persona 2]  | LinkedIn D7  | - Decision   | Proposal     |          |
|  - Title     | ↓            |   Process    | Template     | Contract|
|  - Pain pts  | Call Day 10  | - Decision   |              | Redline |
|  - Goals     | ↓            |   Criteria   | ROI          | Guide   |
|  - Objections| Break Day 14 | - Paper Proc | Calculator   |          |
|              |              | - Implicate  |              | Win/Loss|
| [Disqualify  | [Response    |   Pain       | [Competitive | Debrief |
|  Criteria]   |  Templates]  | - Champion   |  Positioning]| Template|
|              |              |              |              |          |
| W: 1300px    | W: 1300px    | W: 1300px    | W: 1300px    | W:1300px|
| H: 1800px    | H: 1800px    | H: 1800px    | H: 1800px    | H:1800px|
+--------------+--------------+--------------+--------------+----------+
|                                                                      |
| OBJECTION HANDLING & COMPETITOR BATTLECARDS                          |
|                                                                      |
| [Objection 1] → [Response]  |  [Competitor A]  |  [Competitor B]    |
| [Objection 2] → [Response]  |  Strengths       |  Strengths         |
| [Objection 3] → [Response]  |  Weaknesses      |  Weaknesses        |
| [Objection 4] → [Response]  |  Positioning Stmt |  Positioning Stmt  |
| [Objection 5] → [Response]  |  Trap Questions  |  Trap Questions    |
|                              |  Landmine Topics |  Landmine Topics   |
| Height: 800px | Full width                                           |
+====================================================================+
|                       RESOURCES & LINKS                               |
| [CRM Link] [Collateral Folder] [Case Studies] [Training Videos]     |
| Height: 200px | Full width                                           |
+====================================================================+
```

### Grid Specifications

| Element         | Width             | Height | Gap                  |
| --------------- | ----------------- | ------ | -------------------- |
| Playbook Header | Full board width  | 250px  | 0                    |
| Phase Column    | 1300px            | 1800px | 30px between columns |
| Persona Card    | 350x250px         | -      | 20px gap             |
| Sequence Step   | 300x80px          | -      | 10px gap             |
| Framework Item  | Full column width | 50px   | 8px gap              |
| Objection Pair  | 600x120px         | -      | 15px gap             |
| Battlecard      | 500x400px         | -      | 30px gap             |
| Resource Strip  | Full board width  | 200px  | 0                    |

### Recommended Board Size

7000 x 3400px (wide, to accommodate 5+ phases)

### Eye Flow

1. Header provides context (what sales motion, how long the cycle)
2. Eye scans left to right across phase columns — this IS the sales process
3. Within each column, eye reads top to bottom for depth
4. Objection/battlecard strip is reference material — consulted on demand, not read linearly
5. Resources strip at bottom is the "further reading" section

---

## Pattern 4: Revenue Dashboard Grid

### When to Use

Forecast reviews, monthly/quarterly business reviews, board-of-directors revenue presentations, RevOps performance monitoring.

### Design Rationale

Dashboard grids communicate density of information efficiently. The top-strip KPI pattern establishes the headline numbers, then the grid panels below provide supporting detail. This pattern is familiar from BI tools (Looker, Tableau) but adapted for Miro's freeform canvas, which allows annotation and commentary that BI dashboards cannot.

### ASCII Diagram

```
+================================================================+
|                    REVENUE DASHBOARD HEADER                      |
| [Period] [Team/Territory] [Last Updated] [Owner]                |
| Height: 250px | Full width | Dark primary color                 |
+================================================================+
| KPI 1      | KPI 2      | KPI 3      | KPI 4      | KPI 5      |
| Quota      | Closed     | Pipeline   | Forecast   | Win Rate   |
| $X.XM      | $X.XM      | $X.XM      | $X.XM      | XX%        |
| vs target  | vs target  | coverage   | confidence | vs target  |
| ███░ 78%   | ███░ 65%   | 3.2x ✓     | ██░ 72%    | ██░ 68%    |
| Height: 200px | Width: ~960px each | 20px gaps                  |
+================================================================+
|                          |                                       |
|  FORECAST BREAKDOWN      |  PIPELINE MOVEMENT                    |
|                          |                                       |
|  Commit:     $X.XM      |  New this period:    $XXK             |
|  Best Case:  $X.XM      |  Advanced stage:     $XXK             |
|  Upside:     $X.XM      |  Slipped:            $XXK             |
|  Total:      $X.XM      |  Lost:               $XXK             |
|                          |  Won:                $XXK             |
|  [Stacked bar chart]    |                                       |
|                          |  [Waterfall chart]                    |
|  Width: 2400px           |  Width: 2800px                        |
|  Height: 1100px          |  Height: 1100px                       |
+--------------------------+---------------------------------------+
|                          |                          |            |
|  WIN/LOSS ANALYSIS       |  REP LEADERBOARD         | RISK       |
|                          |                          | DEALS      |
|  Won: XX deals           |  1. Rep A  $XXK  ███    |            |
|  Lost: XX deals          |  2. Rep B  $XXK  ██░    | [deal]     |
|  Win reasons:            |  3. Rep C  $XXK  ██░    | [deal]     |
|  - [reason] XX%          |  4. Rep D  $XXK  █░░    | [deal]     |
|  - [reason] XX%          |  5. Rep E  $XXK  █░░    |            |
|  Loss reasons:           |                          | [aging     |
|  - [reason] XX%          |  Avg attainment: XX%    |  alerts]   |
|  - [reason] XX%          |                          |            |
|  Width: 2000px           |  Width: 1800px           | W: 1300px  |
|  Height: 1000px          |  Height: 1000px          | H: 1000px  |
+--------------------------+--------------------------+------------+
```

### Grid Specifications

| Element              | Width                      | Height               | Gap                 |
| -------------------- | -------------------------- | -------------------- | ------------------- |
| Dashboard Header     | Full board width           | 250px                | 0                   |
| KPI Card             | ~960px (1/5 of board)      | 200px                | 20px between cards  |
| Large Panel (row 2)  | 2400-2800px                | 1100px               | 40px between panels |
| Medium Panel (row 3) | 1300-2000px                | 1000px               | 30px between panels |
| Chart Area           | Panel width - 60px padding | Panel height - 120px | Internal            |
| Leaderboard Row      | Full panel width           | 50px                 | 8px between rows    |

### Recommended Board Size

5500 x 3000px

### Eye Flow

1. Header establishes context (whose numbers, what period)
2. KPI strip is the executive summary — scan all five in 3 seconds
3. Forecast breakdown and pipeline movement provide the "why behind the what"
4. Bottom row is diagnostic: win/loss reveals patterns, leaderboard reveals people performance, risk deals require attention

---

## Pattern 5: Deal Room / War Room

### When to Use

High-stakes enterprise deals ($100K+), complex multi-threaded deals, deal reviews with executives, competitive win scenarios.

### Design Rationale

A deal room centers everything around one specific deal. Unlike a pipeline board (many deals, shallow detail), a deal room is one deal with deep detail. The layout radiates outward from the deal at the center, with stakeholders, timeline, competition, and strategy arranged around it.

### ASCII Diagram

```
+================================================================+
|                     DEAL ROOM HEADER                             |
| [Account Logo] [Deal Name] [Value: $XXK] [Stage: Negotiation]  |
| [Close Date Target] [AE] [SE] [Exec Sponsor] [Days in Stage]   |
| Height: 280px | Full width | Dark primary with deal status color |
+================================================================+
|                          |                                       |
|  BUYING COMMITTEE        |  DEAL TIMELINE & MILESTONES           |
|                          |                                       |
|  [Org chart with         |  Week 1  Week 2  Week 3  Week 4      |
|   relationship lines]    |   |       |       |       |          |
|                          |   ●───────●───────●───────●          |
|  Champion: ★ [Name]      |   Disc.   Demo    Prop.   Close      |
|  Econ Buyer: $ [Name]    |                                       |
|  Tech Eval: ⚙ [Name]    |  [Key meeting notes at each point]   |
|  Blocker: ✕ [Name]       |                                       |
|  Coach: ? [Name]         |                                       |
|                          |                                       |
|  Width: 2400px           |  Width: 3000px                        |
|  Height: 1200px          |  Height: 1200px                       |
+--------------------------+---------------------------------------+
|                          |                          |            |
|  COMPETITIVE             |  STRATEGY &              | MUTUAL     |
|  INTELLIGENCE            |  RISK ASSESSMENT         | ACTION     |
|                          |                          | PLAN       |
|  [Competitor grid]       |  STRENGTHS               |            |
|  Us vs. Them             |  - [item]                | ☐ Task 1   |
|  Feature comparison      |  - [item]                | ☐ Task 2   |
|                          |  RISKS                   | ☐ Task 3   |
|  Win theme:              |  - [item] → mitigation   | ☐ Task 4   |
|  "[our positioning]"     |  - [item] → mitigation   | ☐ Task 5   |
|                          |  DECISION CRITERIA       |            |
|  Trap questions:         |  - [criterion]: [score]  | [Timeline] |
|  - [question]            |  - [criterion]: [score]  | [Owners]   |
|  - [question]            |                          |            |
|  Width: 2000px           |  Width: 1800px           | W: 1600px  |
|  Height: 1100px          |  Height: 1100px          | H: 1100px  |
+--------------------------+--------------------------+------------+
```

### Grid Specifications

| Element              | Width            | Height | Gap           |
| -------------------- | ---------------- | ------ | ------------- |
| Deal Room Header     | Full board width | 280px  | 0             |
| Large Panel (row 1)  | 2400-3000px      | 1200px | 40px          |
| Medium Panel (row 2) | 1600-2000px      | 1100px | 30px          |
| Stakeholder Card     | 200x120px        | -      | 15px gap      |
| Timeline Milestone   | 60x60px circle   | -      | Equal spacing |
| Competitor Row       | Full panel width | 50px   | 5px           |
| Action Item          | Full panel width | 45px   | 8px           |

### Recommended Board Size

5600 x 3000px

---

## Universal Layout Rules for Sales Boards

### Spacing Hierarchy

| Relationship                          | Spacing                             |
| ------------------------------------- | ----------------------------------- |
| Between zones (header, main, footer)  | 0px (zones butt against each other) |
| Between major frames within a zone    | 30-40px                             |
| Between cards/elements within a frame | 15-20px                             |
| Between text lines within a card      | 4-8px                               |
| Frame internal padding                | 30px all sides                      |

### Header Strip Standards

Every sales board starts with a header strip. This strip must contain:

- Board title (what type of board, for what team/territory/account)
- Time context (period, date range, or "as of" date)
- Ownership (who maintains this board)
- Summary KPIs (3-6 numbers that tell the headline story)

Header strips should use the primary color as background with white text, creating a clear visual anchor for the top of the board.

### Column vs. Row Decisions

| Use Columns When                            | Use Rows When                             |
| ------------------------------------------- | ----------------------------------------- |
| Elements progress through stages (pipeline) | Elements compare attributes (leaderboard) |
| Left-to-right temporal flow                 | Top-to-bottom priority ranking            |
| Each stage has multiple items               | Each row is a single entity               |
| Stages have different volumes               | All items have similar structure          |

### Card Density Guidelines

- **Pipeline columns**: Maximum 8-10 cards per column before scrolling becomes painful. If more deals exist, group into "Top 10" with a "+X more" indicator.
- **Leaderboard rows**: Maximum 10 rows. Top 5 is ideal.
- **Action items**: Maximum 7 items per section (Miller's Law: 7 plus or minus 2).
- **Opportunity cards**: Maximum 6 per account plan. Prioritize ruthlessly.

### Color Zone Assignments for Sales Boards

| Zone/Purpose          | Color Approach                                             |
| --------------------- | ---------------------------------------------------------- |
| Headers and banners   | Primary dark color (navy, deep teal)                       |
| Pipeline stages       | Progressive color gradient (cool to warm as deals advance) |
| Won/positive          | Green family (#2E7D32, #4CAF50, #C8E6C9)                   |
| Lost/negative         | Red family (#C62828, #EF5350, #FFCDD2)                     |
| At risk/warning       | Yellow/amber family (#F9A825, #FFF9C4)                     |
| Neutral/informational | Blue/gray family (#4A6FA5, #BBDEFB)                        |
| Action items          | White or light background with colored left-border         |
| Analytics/charts      | White background with colored data elements                |

### Responsive Considerations

Sales boards are viewed in three contexts:

1. **Full board view** (zoomed out): Overall health assessment. Headers and KPIs must be readable at this zoom level.
2. **Section view** (mid zoom): Working within a specific frame. Card-level detail must be readable.
3. **Card view** (zoomed in): Reading a specific deal card or action item. All text fields must be readable.

Design font sizes accordingly:

- Board title: 36px (readable at full board view)
- Section headers: 20-24px (readable at section view)
- Card titles: 14-16px (readable at card view)
- Card body text: 11-12px (readable at card view)
- Supporting labels: 10-11px (readable only at card view)
