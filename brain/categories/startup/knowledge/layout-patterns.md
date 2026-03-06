# Startup Board Layout Patterns

## Introduction

Startup boards serve distinct purposes at different stages of the company journey: business model definition, fundraising, product planning, and investor management. Each demands a specific layout optimized for its cognitive function. This guide covers four core patterns plus the canonical Lean Canvas grid.

---

## Pattern 1: Lean Canvas Grid

### When to Use

Business model definition, pivot planning, accelerator workshops, investor-ready business model documentation.

### Design Rationale

The Lean Canvas (adapted from the Business Model Canvas by Ash Maurya) is a 3x3 grid that forces founders to articulate the 9 most critical elements of their business model on a single page. The spatial arrangement is intentional: Problem and Customer Segments are on opposite sides because the relationship between them is the core of the business. Solution sits between Problem and UVP because the solution must address the problem and deliver the value proposition.

### ASCII Diagram

```
+=================================================================+
|                      LEAN CANVAS HEADER                          |
| [Startup Name] [Version] [Date] [Iteration] [Stage] [Author]   |
| Height: 320px | Full width | Primary blue                       |
+=================================================================+
| PROBLEM        | SOLUTION       | UNIQUE VALUE   | UNFAIR       | CUSTOMER       |
| (top 3)        | (top 3         | PROPOSITION    | ADVANTAGE    | SEGMENTS       |
|                |  features)     |                |              |                |
| [sticky]       | [sticky]       | "Single clear  | [sticky]     | [segment 1]    |
| [sticky]       | [sticky]       |  message"      | [sticky]     | [segment 2]    |
| [sticky]       | [sticky]       |                | [sticky]     |                |
|                |                | High-level     |              | EARLY          |
| EXISTING       | KEY            | concept:       | Honest       | ADOPTERS       |
| ALTERNATIVES   | METRICS        | "[analogy]"    | assessment   | [characteristics|
|                |                |                |              |  of first users]|
| W: 900px       | W: 900px       | W: 900px       | W: 700px     | W: 900px       |
| H: 1000px      | H: 500px each  | H: 1000px      | H: 500px ea  | H: 1000px      |
+----------------+----------------+----------------+--------------+----------------+
| COST STRUCTURE                  | REVENUE STREAMS                                |
| [fixed costs]  [variable costs] | [model] [pricing] [LTV] [current revenue]      |
| [burn rate]    [runway]         | [target economics]                             |
| Width: 2400px  Height: 550px   | Width: 2600px  Height: 550px                   |
+=================================================================+
|               HYPOTHESIS VALIDATION TRACKER                      |
| [H1: status] [H2: status] [H3: status] [H4: status] [H5: ...]  |
| Height: 450px | Full width                                       |
+=================================================================+
```

### Grid Specifications

| Element                 | Width                     | Height | Gap               |
| ----------------------- | ------------------------- | ------ | ----------------- |
| Canvas Header           | Full board width (4800px) | 320px  | 0                 |
| Problem Block           | 900px                     | 1000px | 0 (grid, no gaps) |
| Solution Block          | 900px                     | 500px  | 0                 |
| Key Metrics Block       | 900px                     | 500px  | 0                 |
| UVP Block               | 900px                     | 1000px | 0                 |
| Unfair Advantage Block  | 700px                     | 500px  | 0                 |
| Customer Segments Block | 900px                     | 1000px | 0                 |
| Cost Structure          | 2400px                    | 550px  | 0                 |
| Revenue Streams         | 2600px                    | 550px  | 0                 |
| Validation Tracker      | Full board width          | 450px  | 0                 |

### Recommended Board Size

5000 x 3500px

### Eye Flow

1. Header establishes identity and iteration context
2. Eye naturally flows to UVP (center) — the heart of the canvas
3. Scan left: Problem (what) and Solution (how)
4. Scan right: Advantage (why us) and Segments (who)
5. Bottom: Economics (Cost + Revenue) ground the vision in financial reality
6. Validation tracker shows the experimental status of all assumptions

---

## Pattern 2: Pitch Deck Storyboard

### When to Use

Fundraising preparation, demo day planning, narrative development, pitch rehearsal.

### Design Rationale

A pitch deck has a narrative arc: Hook → Problem → Solution → Why Now → Traction → Market → Business Model → Team → Financials → Ask. The storyboard layout arranges these slides horizontally so the narrative flow is visible. Each slide card contains content notes, visual direction, talking points, and rehearsal notes.

### ASCII Diagram

```
+=================================================================+
|                    NARRATIVE ARC GUIDE                            |
| [Hook] → [Problem] → [Solution] → [Why Now] → [Traction] →    |
| [Market] → [Business Model] → [Team] → [Financials] → [Ask]   |
| Height: 200px | Full width | Shows the story structure           |
+=================================================================+
| SLIDE 1  | SLIDE 2  | SLIDE 3   | SLIDE 4  | SLIDE 5            |
| HOOK     | PROBLEM  | SOLUTION  | WHY NOW  | TRACTION           |
|          |          |           |          |                     |
| [Content | [Content | [Content  | [Content | [Content           |
|  notes]  |  notes]  |  notes]   |  notes]  |  notes]            |
| [Visual  | [Visual  | [Visual   | [Visual  | [Visual            |
|  direct] |  direct] |  direct]  |  direct] |  direct]           |
| [Talking | [Talking | [Talking  | [Talking | [Talking           |
|  points] |  points] |  points]  |  points] |  points]           |
|          |          |           |          |                     |
| W: 1100  | W: 1100  | W: 1100   | W: 1100  | W: 1100            |
| H: 1400  | H: 1400  | H: 1400   | H: 1400  | H: 1400            |
+----------+----------+-----------+----------+--------------------+
| SLIDE 6  | SLIDE 7  | SLIDE 8   | SLIDE 9  | SLIDE 10           |
| MARKET   | BIZ MODEL| TEAM      | FINANCES | THE ASK            |
|          |          |           |          |                     |
| [TAM/SAM | [Revenue | [Founder  | [Revenue | [Amount]           |
|  /SOM]   |  model]  |  bios]    |  project]| [Use of funds]     |
| [Growth  | [Pricing | [Key      | [Unit    | [Milestones]       |
|  drivers]|  strat]  |  hires]   |  econ]   | [Timeline]         |
|          |          |           |          |                     |
| W: 1100  | W: 1100  | W: 1100   | W: 1100  | W: 1100            |
| H: 1400  | H: 1400  | H: 1400   | H: 1400  | H: 1400            |
+=================================================================+
|                 PREPARATION NOTES                                |
| [Anticipated Q&A] [Demo flow] [Backup slides] [Rehearsal log]  |
| Height: 600px | Full width                                       |
+=================================================================+
```

### Grid Specifications

| Element             | Width            | Height | Gap                |
| ------------------- | ---------------- | ------ | ------------------ |
| Narrative Arc Guide | Full board width | 200px  | 0                  |
| Slide Card          | 1100px           | 1400px | 30px between cards |
| Slide Row           | 5 cards per row  | -      | 40px between rows  |
| Preparation Strip   | Full board width | 600px  | 0                  |

### Recommended Board Size

6000 x 3800px (for 10 slides in 2 rows)

---

## Pattern 3: Investor Pipeline Kanban

### When to Use

Active fundraising, investor relationship management, term sheet comparison, fundraise progress tracking.

### Design Rationale

Fundraising is a pipeline, just like sales. Investors move through stages: Research → Outreach → First Meeting → Partner Meeting → Due Diligence → Term Sheet → Closed. The Kanban layout makes the fundraise pipeline visible, enabling founders to manage dozens of investor conversations without losing track.

### ASCII Diagram

```
+=================================================================+
|                   FUNDRAISE OVERVIEW                              |
| [Round] [Target: $XM] [Committed: $XM] [Pipeline: $XM]         |
| [Timeline] [Lead Status] [Meetings This Week]                   |
| Height: 300px | Full width | Primary blue                        |
+=================================================================+
|           |           |           |           |           |       |
| RESEARCH  | OUTREACH  | 1ST MTG   | PARTNER   | DUE DIL   | TERM |
|           |           |           | MEETING   |           | SHEET|
| [VC card] | [VC card] | [VC card] | [VC card] | [VC card] |[card]|
| [VC card] | [VC card] | [VC card] | [VC card] |           |      |
| [VC card] | [VC card] | [VC card] |           |           |      |
| [VC card] | [VC card] |           |           |           |      |
| [VC card] |           |           |           |           |      |
|           |           |           |           |           |       |
| W: 850px  | W: 850px  | W: 850px  | W: 850px  | W: 850px  |W:850|
| H: 1600px | H: 1600px | H: 1600px | H: 1600px | H: 1600px |1600 |
+-----------+-----------+-----------+-----------+-----------+------+
|                          |                                       |
|  TERM SHEET COMPARISON   |  MILESTONE PLANNING                   |
|                          |                                       |
|  [VC A terms vs B terms] |  Pre-money → Lead → Close → Deploy   |
|  Valuation, board seats, |  [milestone timeline with dates]      |
|  liquidation, pro-rata   |                                       |
|  Width: 2600px           |  Width: 2800px                        |
|  Height: 800px           |  Height: 800px                        |
+--------------------------+---------------------------------------+
```

### Grid Specifications

| Element          | Width            | Height | Gap                  |
| ---------------- | ---------------- | ------ | -------------------- |
| Fundraise Header | Full board width | 300px  | 0                    |
| Pipeline Column  | 850px            | 1600px | 20px between columns |
| Investor Card    | 280x160px        | -      | 15px vertical gap    |
| Term Sheet Panel | 2600px           | 800px  | 40px                 |
| Milestone Panel  | 2800px           | 800px  | 40px                 |

### Recommended Board Size

5600 x 3200px

---

## Pattern 4: MVP Planning Canvas

### When to Use

Feature scoping, sprint planning for MVPs, launch preparation, experiment design for product validation.

### Design Rationale

MVP planning requires balancing ambition with constraint. The layout separates "what could we build" (full feature backlog) from "what must we build" (MVP scope) from "how do we validate" (experiment design). The left-to-right flow mirrors the decision process: ideate → prioritize → scope → plan → validate.

### ASCII Diagram

```
+=================================================================+
|                    MVP PLANNING HEADER                            |
| [Product] [Target User] [Core Problem] [MVP Goal]               |
| [Timeline] [Team Size] [Budget Constraint]                      |
| Height: 280px | Full width | Primary blue                        |
+=================================================================+
|                    |                    |                         |
|  FEATURE BACKLOG   |  PRIORITIZATION    |  MVP SCOPE              |
|  (Everything)      |  MATRIX            |  (What we build)        |
|                    |                    |                         |
|  [feature card]    |  HIGH VALUE        |  MUST HAVE:             |
|  [feature card]    |  +------+------+   |  ☑ Feature A            |
|  [feature card]    |  | MVP  | NEXT |   |  ☑ Feature B            |
|  [feature card]    |  +------+------+   |  ☑ Feature C            |
|  [feature card]    |  | NICE | SKIP |   |                         |
|  [feature card]    |  +------+------+   |  NICE TO HAVE:          |
|  [feature card]    |  LOW VALUE         |  ☐ Feature D            |
|  [feature card]    |  LOW ← EFFORT → HI |  ☐ Feature E            |
|                    |                    |                         |
|  Width: 1600px     |  Width: 1800px     |  Width: 1800px         |
|  Height: 1400px    |  Height: 1400px    |  Height: 1400px        |
+--------------------+--------------------+-------------------------+
|                          |                                        |
|  BUILD TIMELINE          |  VALIDATION EXPERIMENTS                 |
|                          |                                        |
|  Week 1: [tasks]         |  Experiment 1: [hypothesis]            |
|  Week 2: [tasks]         |    Build: [what]                       |
|  Week 3: [tasks]         |    Measure: [metric]                   |
|  Week 4: [tasks]         |    Success: [threshold]                |
|  Week 5: [tasks]         |                                        |
|  Week 6: LAUNCH          |  Experiment 2: [hypothesis]            |
|                          |    Build: [what]                       |
|  Width: 2600px           |    Measure: [metric]                   |
|  Height: 1000px          |    Success: [threshold]                |
|                          |  Width: 2800px                         |
|                          |  Height: 1000px                        |
+--------------------------+----------------------------------------+
```

### Grid Specifications

| Element               | Width            | Height | Gap      |
| --------------------- | ---------------- | ------ | -------- |
| MVP Header            | Full board width | 280px  | 0        |
| Backlog Column        | 1600px           | 1400px | 30px     |
| Prioritization Matrix | 1800px           | 1400px | 30px     |
| MVP Scope Panel       | 1800px           | 1400px | 30px     |
| Build Timeline Panel  | 2600px           | 1000px | 30px     |
| Validation Panel      | 2800px           | 1000px | 30px     |
| Feature Card          | 350x100px        | -      | 10px gap |

### Recommended Board Size

5600 x 3200px

---

## Universal Layout Rules for Startup Boards

### Validation Badge Standards

Every hypothesis or assumption should carry a color-coded badge:

| Status              | Color  | Hex Background | Hex Text | Badge Text    |
| ------------------- | ------ | -------------- | -------- | ------------- |
| Validated           | Green  | #2E7D32        | #FFFFFF  | "VALIDATED"   |
| Partially Validated | Yellow | #F9A825        | #1A1A2E  | "PARTIAL"     |
| Testing             | Blue   | #1565C0        | #FFFFFF  | "TESTING"     |
| Hypothesis          | Gray   | #78909C        | #FFFFFF  | "HYPOTHESIS"  |
| Invalidated         | Red    | #C62828        | #FFFFFF  | "INVALIDATED" |

### Version Tracking

Every startup board should include visible version information:

- Version number (e.g., "v2.3")
- Date of last update
- Iteration count (e.g., "4th pivot from original idea")
- Stage indicator (e.g., "Pre-seed, validating Problem-Solution fit")

### Startup-Specific Color Rules

| Element                 | Color                            | Reasoning                     |
| ----------------------- | -------------------------------- | ----------------------------- |
| Validated assumptions   | Green tints (#C8E6C9, #2E7D32)   | Signals confidence            |
| Invalidated assumptions | Red tints (#FFCDD2, #C62828)     | Signals change needed         |
| Current experiments     | Blue tints (#BBDEFB, #1565C0)    | Signals active work           |
| Financial elements      | Green for revenue, red for costs | Standard financial convention |
| Competitive elements    | Orange (#EF6C00)                 | Attention and caution         |
| Aspirational/target     | Dashed lines or lighter opacity  | Signals "not yet real"        |

### Spacing Rules for Startup Boards

| Relationship                          | Spacing                                 |
| ------------------------------------- | --------------------------------------- |
| Between canvas blocks                 | 0px (grid structure, borders delineate) |
| Between sections on other boards      | 30-40px                                 |
| Between sticky notes within a block   | 12-15px                                 |
| Between frames on multi-board layouts | 40px                                    |
| Canvas block internal padding         | 20px                                    |
| Header to first content element       | 15px                                    |

### Cross-Referencing Between Boards

Startup boards should link to each other:

- Lean Canvas → "See also: Pitch Deck Plan for investor narrative"
- Pitch Deck → "Data from: Lean Canvas v2.3, Investor Pipeline"
- MVP Plan → "Priorities derived from: Lean Canvas, Customer Interviews"
- Investor Pipeline → "Deck version: Pitch Deck v1.4"

Include these cross-references as text blocks with the linked board name, positioned in the header or a designated reference section.
