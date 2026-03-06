# Project Overview & Launch GTM — Layout Patterns

## Introduction

Launch GTM boards serve a unique structural challenge: they must synthesize four fundamentally different types of information (research insights, customer journeys, task execution, and design deliverables) into a coherent visual space. Each pattern in this guide addresses a different combination of these needs, from the canonical 2x2 dashboard to specialized variants for cross-functional coordination and quarterly review.

---

## Pattern 1: The 2x2 Launch Command Center

### When to Use

The primary Launch GTM layout. Use for product launches, feature releases, go-to-market initiatives, and any cross-functional project that involves research, journey mapping, execution, and design review.

### Design Rationale

The 2x2 grid mirrors the four cognitive modes of cross-functional work: understanding (Insights), planning (Mapping), executing (Tasks), and creating (Design). The grid creates equal visual weight for each mode, preventing any single function from dominating the board. A header bar provides launch identity and readiness status, while a footer provides the shared timeline.

### ASCII Diagram

```
+=================================================================+
|                    LAUNCH COMMAND CENTER                          |
| [Project Name] [Launch Date] [Phase: Build] [Owner: PM Name]   |
| [Launch Readiness: Engineering ● Marketing ● Sales ● Support ●]|
| Height: 350px | Full width | Primary blue                       |
+=================================================================+
|                              |                                   |
|  INSIGHTS                    |  MAPPING                          |
|  (Research & Data)           |  (Customer Journey)               |
|                              |                                   |
|  [Key Finding 1]             |  [Current State Journey Map]      |
|  [Key Finding 2]             |                                   |
|  [Key Finding 3]             |  Awareness → Consideration →      |
|  [Competitive Intel]         |  Purchase → Onboarding →          |
|  [Market Data]               |  Usage → Expansion                |
|                              |                                   |
|  [Chart: User Research]      |  [Pain Points highlighted]        |
|  [Chart: Market Sizing]      |  [Opportunity gaps marked]        |
|                              |                                   |
|  Width: 2700px               |  Width: 2900px                    |
|  Height: 1500px              |  Height: 1500px                   |
+------------------------------+-----------------------------------+
|                              |                                   |
|  TASKS                       |  DESIGN                           |
|  (Execution Tracking)        |  (Creative & Wireframes)          |
|                              |                                   |
|  TO DO | IN PROG | DONE     |  [Wireframe / Mockup 1]           |
|  [card] | [card]  | [card]  |  [Wireframe / Mockup 2]           |
|  [card] | [card]  | [card]  |  [Design System Excerpt]          |
|  [card] | [card]  |         |  [Screenshot / Prototype Link]    |
|  [card] |         |         |                                   |
|                              |  [Feedback annotations]           |
|  BLOCKED: [card] [card]     |  [Revision status]                |
|                              |                                   |
|  Width: 2700px               |  Width: 2900px                    |
|  Height: 1400px              |  Height: 1400px                   |
+------------------------------+-----------------------------------+
|                   SHARED TIMELINE                                 |
| [Research] → [Planning] → [Build] → [Test] → [Launch] → [Retro]|
| [Week 1-2]   [Week 3-4]   [Week 5-8] [Week 9] [Week 10] [W11] |
| Height: 300px | Full width                                       |
+=================================================================+
```

### Grid Specifications

| Element           | Width            | Height | Gap                 |
| ----------------- | ---------------- | ------ | ------------------- |
| Header Bar        | Full board width | 350px  | 0                   |
| Insights Quadrant | 2700px           | 1500px | 30px between quads  |
| Mapping Quadrant  | 2900px           | 1500px | 30px between quads  |
| Tasks Quadrant    | 2700px           | 1400px | 30px between quads  |
| Design Quadrant   | 2900px           | 1400px | 30px between quads  |
| Shared Timeline   | Full board width | 300px  | 20px from quadrants |

### Recommended Board Size

6000 x 3800px

### Eye Flow

1. Header establishes project identity, launch date, and readiness status
2. Eye moves to Insights (top-left) — the strategic foundation
3. Eye flows right to Mapping — how insights translate to customer experience
4. Eye drops to Tasks (bottom-left) — what is being done about it
5. Eye flows right to Design — what the deliverables look like
6. Timeline at bottom grounds everything in the schedule

### Zone Definitions

| Zone       | Content                               | Visible At |
| ---------- | ------------------------------------- | ---------- |
| Glanceable | Project name, launch date, RAG status | 25% zoom   |
| Scannable  | Quadrant titles, key metrics, phases  | 50% zoom   |
| Readable   | Insight cards, task details, designs  | 75% zoom   |
| Reference  | Evidence links, annotations, notes    | 100% zoom  |

---

## Pattern 2: Cross-Functional Swim Lane Board

### When to Use

Complex launches with 4+ teams that need parallel tracking. Use when the primary challenge is coordination between teams rather than connecting insights to execution.

### Design Rationale

Swim lanes create horizontal tracks for each team (Engineering, Marketing, Sales, Support, etc.) with shared milestones as vertical markers. This layout makes dependencies between teams visible: when Marketing's campaign launch depends on Engineering's feature deployment, the dependency connector crosses swim lanes and the relationship becomes obvious.

### ASCII Diagram

```
+=================================================================+
|                   CROSS-FUNCTIONAL LAUNCH BOARD                  |
| [Project] [Target: March 15] [Days to Launch: 22]               |
| [Overall Status: ON TRACK] [Risks: 2 High, 3 Medium]           |
| Height: 300px | Full width                                      |
+=================================================================+
|          | M1: Feature  | M2: Beta    | M3: Campaign  | M4: LAUNCH |
|          | Complete     | Start       | Live          | DAY        |
|          | Feb 21       | Mar 1       | Mar 8         | Mar 15     |
+----------+--------------+-------------+---------------+------------+
|          |              |             |               |            |
| ENG      | [Sprint 5]   | [Bug fixes] | [Performance] | [Monitor]  |
|          | [Sprint 6]   | [Beta sup]  | [Scale test]  | [Hotfix]   |
|          |              |             |               |            |
| H: 500px |              |             |               |            |
+----------+--------------+-------------+---------------+------------+
|          |              |             |               |            |
| DESIGN   | [Final UI]   | [Beta feed] | [Marketing]   | [Launch]   |
|          | [Handoff]    | [Iterate]   | [assets]      | [assets]   |
|          |              |             |               |            |
| H: 500px |              |             |               |            |
+----------+--------------+-------------+---------------+------------+
|          |              |             |               |            |
| MKTG     | [Content]    | [Beta]      | [Campaign]    | [Launch]   |
|          | [creation]   | [comms]     | [activate]    | [PR/blog]  |
|          |              |             |               |            |
| H: 500px |              |             |               |            |
+----------+--------------+-------------+---------------+------------+
|          |              |             |               |            |
| SALES    | [Enablement] | [Beta]      | [Outreach]    | [Pitch]    |
|          | [materials]  | [feedback]  | [prep]        | [new feat] |
|          |              |             |               |            |
| H: 500px |              |             |               |            |
+----------+--------------+-------------+---------------+------------+
|          |              |             |               |            |
| SUPPORT  | [Docs draft] | [Beta]      | [Training]    | [Go live]  |
|          |              | [triage]    | [KB publish]  | [support]  |
|          |              |             |               |            |
| H: 500px |              |             |               |            |
+----------+--------------+-------------+---------------+------------+
|                DEPENDENCY MAP & RISK REGISTER                     |
| [Dep 1: ENG → MKTG] [Dep 2: DESIGN → SALES] [Risk 1] [Risk 2] |
| Height: 500px | Full width                                       |
+=================================================================+
```

### Grid Specifications

| Element            | Width            | Height | Gap                  |
| ------------------ | ---------------- | ------ | -------------------- |
| Header             | Full board width | 300px  | 0                    |
| Milestone Headers  | Full board width | 100px  | 0                    |
| Team Label Column  | 300px            | 500px  | 0                    |
| Phase Cell         | Variable         | 500px  | 0 (grid borders)     |
| Dependency Section | Full board width | 500px  | 30px from swim lanes |

### Recommended Board Size

5800 x 3800px (for 5 teams, 4 milestones)

---

## Pattern 3: Insights-to-Execution Flow

### When to Use

When the primary value of the board is tracing from research findings through customer journey analysis to actionable tasks. Use for product discovery that leads directly to launch planning, or when you need to demonstrate the rationale chain from research to action.

### Design Rationale

This is a horizontal flow board (left-to-right) that follows the causal chain: Insights generate understanding → Understanding reveals journey gaps → Journey gaps generate tasks → Tasks produce deliverables. Each section flows into the next with explicit connectors showing the traceability.

### ASCII Diagram

```
+=================================================================+
|                 INSIGHTS-TO-EXECUTION FLOW                       |
| [Project] [Phase: Discovery → Planning] [Owner] [Date]          |
| Height: 250px | Full width                                      |
+=================================================================+
|                |                |                |                |
|  INSIGHTS      |  JOURNEY MAP   |  TASK BREAKDOWN |  DELIVERABLES |
|  (Why)         |  (What)        |  (How)          |  (Output)     |
|                |                |                |                |
|  [Research     |  [Current      |  [Epic 1]      |  [Design      |
|   finding 1]   |   state map]   |   [Task 1.1]   |   mockup]     |
|      ↓         |      ↓         |   [Task 1.2]   |               |
|  [Research     |  [Pain point   |   [Task 1.3]   |  [Content     |
|   finding 2]   |   identified]  |                |   draft]      |
|      ↓         |      ↓         |  [Epic 2]      |               |
|  [Research     |  [Future       |   [Task 2.1]   |  [Campaign    |
|   finding 3]   |   state map]   |   [Task 2.2]   |   brief]      |
|      ↓         |      ↓         |                |               |
|  [Data point]  |  [Opportunity  |  [Epic 3]      |  [Training    |
|                |   gap]         |   [Task 3.1]   |   materials]  |
|                |                |                |                |
|  W: 1400px     |  W: 1600px     |  W: 1400px     |  W: 1200px    |
|  H: 2200px     |  H: 2200px     |  H: 2200px     |  H: 2200px    |
+----------------+----------------+----------------+----------------+
|                    TRACEABILITY MATRIX                             |
| [Insight A → Journey Gap 1 → Epic 1 → Mockup v2]                |
| [Insight B → Journey Gap 2 → Epic 2 → Content Draft]            |
| [Insight C → Journey Gap 3 → Epic 3 → Training Deck]            |
| Height: 400px | Full width                                       |
+=================================================================+
```

### Grid Specifications

| Element             | Width            | Height | Gap               |
| ------------------- | ---------------- | ------ | ----------------- |
| Header              | Full board width | 250px  | 0                 |
| Insights Column     | 1400px           | 2200px | 30px between cols |
| Journey Map Column  | 1600px           | 2200px | 30px between cols |
| Task Breakdown Col  | 1400px           | 2200px | 30px between cols |
| Deliverables Column | 1200px           | 2200px | 30px between cols |
| Traceability Matrix | Full board width | 400px  | 20px from columns |

### Recommended Board Size

6000 x 3200px

### Eye Flow

1. Header establishes project and phase
2. Read left-to-right: Insights → Journey → Tasks → Deliverables
3. Each column flows into the next via explicit connectors
4. Traceability matrix at the bottom provides the reference mapping

---

## Pattern 4: Quarterly Review Dashboard

### When to Use

End-of-quarter or end-of-launch retrospective. Combines OKR tracking, launch outcomes, metrics review, lessons learned, and next-quarter planning into a structured, presentation-ready format.

### Design Rationale

The quarterly review follows a temporal narrative: What did we plan? (OKRs) → What did we do? (Launch Outcomes) → What happened? (Metrics) → What did we learn? (Retrospective) → What is next? (Planning). The horizontal flow mirrors this storytelling structure and maps naturally to a presentation sequence.

### ASCII Diagram

```
+=================================================================+
|                 Q1 2026 REVIEW & Q2 PLANNING                     |
| [Team: Product & Growth] [Period: Jan-Mar 2026]                  |
| [Presenter: VP Product] [Audience: Leadership Team]              |
| Height: 280px | Full width                                       |
+=================================================================+
|                    |                    |                         |
|  OKR SCORECARD     |  LAUNCH OUTCOMES   |  KEY METRICS            |
|                    |                    |                         |
|  O1: [status]      |  Launch 1:         |  [Revenue Chart]        |
|   KR1: 85% ●       |  [outcome summary] |  [User Growth Chart]    |
|   KR2: 60% ●       |  [impact metrics]  |  [Retention Chart]      |
|   KR3: 100% ●      |                    |                         |
|                    |  Launch 2:         |  [KPI Card] [KPI Card]  |
|  O2: [status]      |  [outcome summary] |  [KPI Card] [KPI Card]  |
|   KR1: 45% ●       |  [impact metrics]  |                         |
|   KR2: 90% ●       |                    |  vs. Target: [chart]    |
|                    |  Launch 3:         |  vs. Last Quarter:      |
|  Overall: 73%      |  [outcome summary] |  [comparison chart]     |
|                    |                    |                         |
|  W: 1800px         |  W: 1800px         |  W: 1800px              |
|  H: 1400px         |  H: 1400px         |  H: 1400px              |
+--------------------+--------------------+-------------------------+
|                              |                                    |
|  RETROSPECTIVE               |  NEXT QUARTER PLAN                 |
|  (Lessons Learned)           |  (Q2 Priorities)                   |
|                              |                                    |
|  WHAT WORKED:                |  Q2 OKRs:                          |
|  [sticky] [sticky] [sticky] |  O1: [description]                 |
|                              |   KR1: [target]                    |
|  WHAT DIDN'T:                |   KR2: [target]                    |
|  [sticky] [sticky] [sticky] |                                    |
|                              |  Q2 Launches:                      |
|  KEY DECISIONS:              |  [Launch A] [Launch B] [Launch C]  |
|  [sticky] [sticky]          |                                    |
|                              |  Resource Needs:                   |
|  ACTION ITEMS:               |  [headcount] [budget] [tools]      |
|  [item 1] [item 2] [item 3]|                                    |
|                              |                                    |
|  W: 2700px                   |  W: 2900px                         |
|  H: 1200px                   |  H: 1200px                         |
+------------------------------+------------------------------------+
```

### Grid Specifications

| Element           | Width            | Height | Gap                 |
| ----------------- | ---------------- | ------ | ------------------- |
| Header            | Full board width | 280px  | 0                   |
| OKR Scorecard     | 1800px           | 1400px | 30px between panels |
| Launch Outcomes   | 1800px           | 1400px | 30px between panels |
| Key Metrics       | 1800px           | 1400px | 30px between panels |
| Retrospective     | 2700px           | 1200px | 30px                |
| Next Quarter Plan | 2900px           | 1200px | 30px                |

### Recommended Board Size

5800 x 3400px

---

## Pattern 5: Launch Readiness Checklist Board

### When to Use

The final 2-4 weeks before a launch when the primary question is "Are we ready?" Use as a daily standup board for the launch team, and as the launch/no-launch decision artifact.

### Design Rationale

The launch readiness board flips the focus from what is being built to what is missing. Each functional area (Engineering, Design, Marketing, Sales, Support, Legal) has a readiness checklist. A prominent readiness dashboard at the top shows the aggregate status. The board is designed for quick daily updates and for the go/no-go meeting decision.

### ASCII Diagram

```
+=================================================================+
|                 LAUNCH READINESS — [PROJECT NAME]                |
| [Target Launch: March 15] [Days Remaining: 5]                   |
| [OVERALL: NOT READY — 4 of 6 teams GREEN]                       |
|                                                                   |
| ENG: ● GREEN | DESIGN: ● GREEN | MKTG: ● AMBER |              |
| SALES: ● GREEN | SUPPORT: ● RED | LEGAL: ● GREEN |             |
| Height: 400px | Full width                                       |
+=================================================================+
| ENG           | DESIGN        | MKTG          | SALES          |
| READINESS     | READINESS     | READINESS     | READINESS      |
|               |               |               |                |
| ☑ Feature     | ☑ UI final    | ☑ Blog post   | ☑ Deck updated |
|   deployed    | ☑ Assets      | ☑ Email seq   | ☑ Battlecard   |
| ☑ Tests pass  |   delivered   | ☐ Social      | ☑ Demo script  |
| ☑ Perf tested | ☑ Screenshots |   scheduled   | ☐ Territory    |
| ☑ Rollback    | ☑ Help center | ☐ Press       |   assignments  |
|   plan ready  |   updated     |   outreach    |                |
| ☑ Monitoring  |               | ☐ Landing     | Status: GREEN  |
|   configured  | Status: GREEN |   page live   |                |
|               |               |               | W: 1350px      |
| Status: GREEN | W: 1350px     | Status: AMBER | H: 1200px      |
| W: 1350px     | H: 1200px     | W: 1350px     |                |
| H: 1200px     |               | H: 1200px     |                |
+---------------+---------------+---------------+----------------+
| SUPPORT       | LEGAL         | BLOCKERS & RISKS               |
| READINESS     | READINESS     |                                |
|               |               | BLOCKER 1: Support training    |
| ☐ Training    | ☑ Terms       | not complete (ETA: Mar 13)     |
|   complete    |   updated     | Owner: @support_lead           |
| ☐ KB articles | ☑ Privacy     |                                |
|   published   |   review done | RISK 1: Marketing social       |
| ☐ Escalation  | ☑ Compliance  | calendar not confirmed         |
|   path        |   cleared     | Mitigation: Manual posting     |
|   defined     |               |                                |
|               | Status: GREEN | RISK 2: Performance under load |
| Status: RED   | W: 1350px     | not tested at 2x capacity      |
| W: 1350px     | H: 1200px     | Mitigation: Scale test Mar 12  |
| H: 1200px     |               | W: 2750px | H: 1200px         |
+---------------+---------------+--------------------------------+
```

### Grid Specifications

| Element          | Width            | Height | Gap                |
| ---------------- | ---------------- | ------ | ------------------ |
| Readiness Header | Full board width | 400px  | 0                  |
| Team Checklist   | 1350px           | 1200px | 20px between cards |
| Blockers & Risks | 2750px           | 1200px | 20px               |

### Recommended Board Size

5800 x 2200px

---

## Universal Layout Rules for Launch GTM Boards

### Readiness Indicator Standards

Every launch board should include cross-functional readiness using RAG indicators:

| Status      | Color | Hex Background | Hex Text | Meaning                              |
| ----------- | ----- | -------------- | -------- | ------------------------------------ |
| GREEN       | Green | #2E7D32        | #FFFFFF  | On track, no blockers                |
| AMBER       | Amber | #F9A825        | #1A1A2E  | At risk, action needed               |
| RED         | Red   | #C62828        | #FFFFFF  | Blocked or behind, escalation needed |
| NOT STARTED | Gray  | #78909C        | #FFFFFF  | Work has not begun                   |
| COMPLETE    | Blue  | #1565C0        | #FFFFFF  | Fully done and verified              |

### Phase Indicator Standards

| Phase         | Color  | Hex     | Icon/Symbol |
| ------------- | ------ | ------- | ----------- |
| Research      | Purple | #7B1FA2 | magnifier   |
| Planning      | Blue   | #1565C0 | calendar    |
| Build         | Teal   | #00897B | hammer      |
| Test          | Orange | #EF6C00 | flask       |
| Launch        | Green  | #2E7D32 | rocket      |
| Retrospective | Slate  | #37474F | magnifier   |

### Spacing Rules for Launch GTM Boards

| Relationship                         | Spacing                 |
| ------------------------------------ | ----------------------- |
| Between quadrants                    | 30px                    |
| Between swim lanes                   | 0px (borders delineate) |
| Between cards within a quadrant      | 15px                    |
| Between task cards in kanban columns | 12px                    |
| Between header and first content     | 20px                    |
| Between main content and footer      | 20px                    |
| Internal padding within frames       | 20px                    |

### Cross-Quadrant Connectors

When elements in one quadrant depend on or derive from elements in another quadrant:

| Connection Type             | Line Style  | Color   | Arrow  |
| --------------------------- | ----------- | ------- | ------ |
| Insight → Journey Gap       | Dashed, 2px | #7B1FA2 | Single |
| Journey Gap → Task Epic     | Solid, 2px  | #1565C0 | Single |
| Task → Design Deliverable   | Solid, 2px  | #00897B | Single |
| Cross-Team Dependency       | Dashed, 3px | #C62828 | Double |
| Milestone Marker (vertical) | Solid, 1px  | #E0E0E0 | None   |
