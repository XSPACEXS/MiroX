# MVP Planning Board

## Overview

- **Purpose**: Plan a minimum viable product by identifying core assumptions to test, designing lightweight experiments, scoping the smallest possible build (must-have vs. nice-to-have features), defining success criteria, creating a realistic timeline, and documenting learning goals — ensuring the team builds the right thing before building the thing right.
- **Best For**: Startup founders scoping their first product, product teams launching a new feature as an MVP, innovation labs inside enterprises, hackathon teams planning their build.
- **Complexity**: Medium
- **Board Size**: 5500x3500px

## Color Scheme

| Role       | Color         | Hex     |
| ---------- | ------------- | ------- |
| Primary    | Electric Blue | #1565C0 |
| Secondary  | Slate         | #37474F |
| Accent     | Bright Orange | #EF6C00 |
| Background | Cool White    | #F5F7FA |
| Text       | Dark Ink      | #1A1A2E |

## Board Layout

The board flows from left (assumptions) through center (build plan) to right (success criteria and timeline), with a learning section at the bottom.

```
+=================================================================+
|                      MVP PLANNING HEADER                         |
|  [Product Name] [Hypothesis] [Sprint/Cycle] [Team] [Deadline]   |
+=================================================================+
| CORE ASSUMPTIONS  | EXPERIMENT DESIGN  | BUILD SCOPE             |
| & RISKIEST        |                    | (Must-Have vs.          |
| ASSUMPTIONS       | [Experiment cards  |  Nice-to-Have)          |
|                   |  with method,      |                         |
| [Assumption       |  hypothesis,       | [Feature cards with     |
|  cards ranked     |  metrics]          |  effort, risk, value]   |
|  by risk]         |                    |                         |
+-------------------+--------------------+-------------------------+
| SUCCESS CRITERIA  | BUILD TIMELINE     | LEARNING GOALS          |
|                   |                    |                         |
| [Measurable       | [Week-by-week      | [What we want to learn  |
|  thresholds for   |  sprint plan       |  and how we'll use      |
|  go/no-go]        |  with milestones]  |  each learning]         |
+=================================================================+
```

## Frames & Sections

### Frame 1: MVP Planning Header

- **Position**: Top, spanning full width
- **Size**: 5300x350px
- **Background**: #1565C0 (Electric Blue)
- **Elements**:
  - Text block: "MVP Planning — DataBridge Natural Language Query Engine" (font size 32, bold, white #FFFFFF)
  - Text block: "Can non-technical users get accurate answers from their data using plain English?" (font size 16, #90CAF9, italic)
  - Info pill 1: "MVP Cycle: 1 (Initial Build)" (font size 11, white on #1976D2)
  - Info pill 2: "Sprint: 6-week build | March 10 - April 18, 2026" (font size 11, white on #1976D2)
  - Info pill 3: "Team: 2 engineers + 1 designer + 1 PM (founder)" (font size 11, white on #1976D2)
  - Info pill 4: "Target Users: 20 beta testers from 5 companies" (font size 11, white on #1976D2)
  - Core hypothesis box (#EF6C00, 600x60px): "CORE HYPOTHESIS: Non-technical business users can get accurate, useful answers to their data questions by typing natural language queries — and this will reduce their dependence on data teams by 50%+." (white, bold, 13px)

### Frame 2: Core Assumptions & Risk Ranking

- **Position**: Left column, main area
- **Size**: 1700x1600px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Core Assumptions" (font size 20, bold, #1A1A2E)
  - Subtitle: "Ranked by risk (highest risk = test first)" (font size 12, #6B7280)

  - **Risk Level: CRITICAL** — Section header (#C62828, bold):

  - Assumption Card 1 — Rectangle (#FFEBEE, full width, 160px):
    - Risk badge: "1 — CRITICAL" (white on #C62828 pill)
    - "LLMs can generate accurate SQL for real-world business queries against messy enterprise schemas" (bold, 14px)
    - "If wrong: The core product does not work. No amount of UX can fix inaccurate results."
    - "Current evidence: GPT-4o achieves ~70% accuracy on public SQL benchmarks. Our schema complexity is higher."
    - "Test method: Build prototype, test against 100 real queries from beta companies."

  - Assumption Card 2 — Rectangle (#FFEBEE, full width, 160px):
    - Risk badge: "2 — CRITICAL" (white on #C62828 pill)
    - "Users trust AI-generated answers enough to make business decisions based on them" (bold, 14px)
    - "If wrong: Users will always double-check with a data analyst, making us a curiosity not a tool."
    - "Current evidence: None. Need to test with real users."
    - "Test method: Observe beta users making actual decisions. Post-query survey on confidence."

  - **Risk Level: HIGH** — Section header (#EF6C00, bold):

  - Assumption Card 3 — Rectangle (#FFF3E0, full width, 140px):
    - Risk badge: "3 — HIGH" (white on #EF6C00 pill)
    - "The semantic mapping layer can be configured in <4 hours per company" (bold, 14px)
    - "If wrong: Onboarding cost is too high, CAC explodes, product is not self-serve viable."
    - "Test method: Time the setup for each of 5 beta companies. Target: <4 hours average."

  - Assumption Card 4 — Rectangle (#FFF3E0, full width, 140px):
    - Risk badge: "4 — HIGH" (white on #EF6C00 pill)
    - "Non-technical users will naturally express their data needs in queryable language" (bold, 14px)
    - "If wrong: Users will ask vague questions ('How are we doing?') that cannot be translated to SQL."
    - "Test method: Collect first 50 queries from beta users. Categorize as specific (queryable) vs. vague."

  - **Risk Level: MODERATE** — Section header (#F9A825, bold):

  - Assumption Card 5 — Rectangle (#FFF8E1, full width, 120px):
    - Risk badge: "5 — MODERATE" (white on #F9A825 pill)
    - "Users will return weekly once they experience the value" (bold, 14px)
    - "Test method: Track weekly active usage rate over 4-week beta period."

  - Assumption Card 6 — Rectangle (#FFF8E1, full width, 120px):
    - Risk badge: "6 — MODERATE" (white on #F9A825 pill)
    - "Companies will pay $499+/month for this capability" (bold, 14px)
    - "Test method: At end of beta, present pricing and measure conversion intent."

### Frame 3: Experiment Design

- **Position**: Center column, main area
- **Size**: 1700x1600px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Experiment Design" (font size 20, bold, #1A1A2E)
  - Subtitle: "Structured tests for each critical assumption" (font size 12, #6B7280)

  - **Experiment 1: Query Accuracy Test** — Rectangle (#E3F2FD, full width, 350px):
    - "EXPERIMENT 1: Query Accuracy" (bold, 16px, #1565C0)
    - "Assumption tested: #1 (LLM SQL accuracy)"
    - "Method: Collect 100 real business queries from 5 beta companies. Run through prototype. Compare generated SQL output against manually verified correct answers."
    - "Sample: 20 queries per company, spanning simple (single table), medium (joins), and complex (aggregations + filters)."
    - "Success criteria: >= 80% accuracy across all query types. >= 90% accuracy on simple queries."
    - "Timeline: Weeks 3-4 of build sprint"
    - "Owner: Priya Mehta (CTO)"
    - Measurement sticky (#FFF8E1): "Tracking: Accuracy rate by complexity tier, error categorization (wrong table, wrong filter, wrong aggregation, syntax error)."

  - **Experiment 2: User Trust & Decision-Making** — Rectangle (#E3F2FD, full width, 300px):
    - "EXPERIMENT 2: Trust & Adoption" (bold, 16px, #1565C0)
    - "Assumption tested: #2 (Users trust AI answers)"
    - "Method: Give 20 beta users access for 2 weeks. After each query, show a 1-question pop-up: 'How confident are you in this answer? (1-5).' Track if they took any action based on the result."
    - "Success criteria: Average confidence >= 3.5/5. At least 60% of queries lead to a documented action or decision."
    - "Timeline: Weeks 4-6 of build sprint"
    - "Owner: Jordan Lee (Head of Product)"

  - **Experiment 3: Onboarding Time Test** — Rectangle (#E3F2FD, full width, 250px):
    - "EXPERIMENT 3: Onboarding Speed" (bold, 16px, #1565C0)
    - "Assumption tested: #3 (Semantic layer setup <4 hours)"
    - "Method: Time the full setup process for each beta company from data warehouse connection to first successful query. Include schema mapping, testing, and validation."
    - "Success criteria: Average setup time <= 4 hours. No company takes more than 8 hours."
    - "Timeline: Weeks 2-3 (as each company onboards)"
    - "Owner: Priya Mehta (CTO)"

  - **Experiment 4: Query Quality Assessment** — Rectangle (#E3F2FD, full width, 250px):
    - "EXPERIMENT 4: Query Phrasing" (bold, 16px, #1565C0)
    - "Assumption tested: #4 (Users express queryable needs)"
    - "Method: Log first 50 natural language queries. Categorize each as: Specific & Queryable, Vague but Clarifiable, Unqueryable. If >30% are vague, build a clarification prompt system."
    - "Success criteria: >= 60% of queries are immediately queryable without clarification."
    - "Timeline: Weeks 4-5"
    - "Owner: Jordan Lee"

### Frame 4: Build Scope

- **Position**: Right column, main area
- **Size**: 1700x1600px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Build Scope" (font size 20, bold, #1A1A2E)
  - Subtitle: "Ruthlessly scoped to minimum viable — what's in vs. what's out" (font size 12, #6B7280)

  - **MUST-HAVE (MVP Core)** — Section header (#2E7D32, bold):

  - Feature Card 1 — Sticky (#C8E6C9, full width, 100px):
    - "Natural language input box + SQL generation engine" (bold)
    - "Effort: 2 weeks | Risk: High (accuracy) | Value: Critical"
    - "Scope: Support SELECT queries only. No INSERT/UPDATE/DELETE."

  - Feature Card 2 — Sticky (#C8E6C9, full width, 100px):
    - "Snowflake data warehouse connector" (bold)
    - "Effort: 3 days | Risk: Low | Value: Critical"
    - "Scope: Snowflake only for MVP. BigQuery and Redshift in v2."

  - Feature Card 3 — Sticky (#C8E6C9, full width, 100px):
    - "Basic semantic layer configuration UI" (bold)
    - "Effort: 1 week | Risk: Medium | Value: Critical"
    - "Scope: Manual mapping of business terms to columns. No auto-detection yet."

  - Feature Card 4 — Sticky (#C8E6C9, full width, 100px):
    - "Results display: Table format with basic formatting" (bold)
    - "Effort: 3 days | Risk: Low | Value: High"
    - "Scope: Table output only. No charts for MVP."

  - Feature Card 5 — Sticky (#C8E6C9, full width, 80px):
    - "Query confidence score (displayed to user)" (bold)
    - "Effort: 2 days | Risk: Low | Value: High — builds trust"

  - Feature Card 6 — Sticky (#C8E6C9, full width, 80px):
    - "Generated SQL visible (toggle for power users)" (bold)
    - "Effort: 1 day | Risk: Low | Value: Medium — verification"

  - **NICE-TO-HAVE (v2 — Post-MVP)** — Section header (#78909C, bold):

  - Feature Card 7 — Sticky (#E0E0E0, full width, 70px):
    - "Auto-generated charts (bar, line, pie)" (strikethrough-style)
    - "Deferred to v2. Table output is sufficient for validation."

  - Feature Card 8 — Sticky (#E0E0E0, full width, 70px):
    - "BigQuery and Redshift connectors" (strikethrough-style)
    - "Deferred to v2. All 5 beta companies use Snowflake."

  - Feature Card 9 — Sticky (#E0E0E0, full width, 70px):
    - "Query history and saved queries" (strikethrough-style)
    - "Deferred to v2. Users can screenshot for now."

  - Feature Card 10 — Sticky (#E0E0E0, full width, 70px):
    - "Auto-detect semantic mappings from schema metadata" (strikethrough-style)
    - "Deferred to v2. Manual mapping is faster to build and good enough for 5 companies."

  - Feature Card 11 — Sticky (#E0E0E0, full width, 70px):
    - "Slack/Teams integration" (strikethrough-style)
    - "Deferred to v3. Web app only for MVP."

  - Scope note (#FFEBEE, full width, 60px): "RULE: If it doesn't directly test a critical assumption, it's not in the MVP. We can always add features. We can't get back wasted build time."

### Frame 5: Success Criteria

- **Position**: Bottom-left
- **Size**: 1700x1000px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Success Criteria — Go / No-Go Gates" (font size 20, bold, #1A1A2E)
  - Subtitle: "Quantitative thresholds that determine next steps" (font size 12, #6B7280)

  - **GO — Proceed to Beta Expansion** — Rectangle (#E8F5E9, full width, 200px):
    - "ALL of the following must be TRUE:" (bold, 14px, #2E7D32)
    - "[ ] Query accuracy >= 80% across all 100 test queries"
    - "[ ] User confidence score avg >= 3.5/5"
    - "[ ] >= 60% of queries lead to a user action/decision"
    - "[ ] Average onboarding time <= 4 hours"
    - "[ ] >= 15 of 20 beta users return in week 2"
    - "Result: Expand beta to 50 users, begin sales outreach, start v2 feature build."

  - **PIVOT — Adjust Approach** — Rectangle (#FFF8E1, full width, 200px):
    - "If 3 of 5 criteria are met but accuracy is below 80%:" (bold, 14px, #EF6C00)
    - "Pivot A: Narrow query scope to 'pre-built question templates' (structured options instead of free-form)"
    - "Pivot B: Add a human-in-the-loop verification step before showing results"
    - "Pivot C: Focus on a single use case (e.g., marketing reports only) where accuracy can exceed 90%"

  - **NO-GO — Stop and Reassess** — Rectangle (#FFEBEE, full width, 150px):
    - "If fewer than 3 criteria are met:" (bold, 14px, #C62828)
    - "Stop the current build. Conduct 10 additional customer interviews to reassess problem-solution fit."
    - "Reassess: Is the problem real (validated) but our solution approach wrong?"
    - "Timeline: 2-week reassessment sprint before committing resources to next cycle."

### Frame 6: Build Timeline

- **Position**: Bottom-center
- **Size**: 1700x1000px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Build Timeline — 6-Week Sprint" (font size 20, bold, #1A1A2E)

  - **Week 1 (March 10-14)** — Rectangle (#E3F2FD, full width, 100px):
    - "SETUP & FOUNDATIONS" (bold, #1565C0)
    - "Snowflake connector + basic NL-to-SQL pipeline. Set up beta infrastructure."
    - "Deliverable: Can generate SQL from text input (terminal-only, no UI)."
    - "Milestone: First query generates correct SQL."

  - **Week 2 (March 17-21)** — Rectangle (#E3F2FD, full width, 100px):
    - "SEMANTIC LAYER + UI SHELL" (bold, #1565C0)
    - "Build semantic mapping config. Basic web UI with input box and results table."
    - "Deliverable: Onboard first beta company."
    - "Milestone: Beta Company 1 runs their first real query."

  - **Week 3 (March 24-28)** — Rectangle (#E3F2FD, full width, 100px):
    - "ACCURACY TUNING + ONBOARDING" (bold, #1565C0)
    - "Tune prompts based on Company 1 feedback. Onboard Companies 2-3."
    - "Deliverable: Accuracy test begins (Experiment 1)."
    - "Milestone: 50 of 100 test queries completed."

  - **Week 4 (March 31 - April 4)** — Rectangle (#FFF8E1, full width, 100px):
    - "FULL BETA + USER TESTING" (bold, #EF6C00)
    - "All 5 companies onboarded. 20 users have access. Experiments 1-3 running."
    - "Deliverable: All 100 accuracy test queries completed."
    - "Milestone: Accuracy data available. Begin Experiment 2 (trust survey)."

  - **Week 5 (April 7-11)** — Rectangle (#FFF8E1, full width, 100px):
    - "OBSERVATION + DATA COLLECTION" (bold, #EF6C00)
    - "Observe real usage patterns. Collect trust survey data. Log query types."
    - "Deliverable: 2 weeks of beta usage data. Experiments 2 and 4 data in."
    - "Milestone: Enough data for go/no-go decision."

  - **Week 6 (April 14-18)** — Rectangle (#E8F5E9, full width, 100px):
    - "ANALYSIS + DECISION" (bold, #2E7D32)
    - "Compile all experiment results. Run go/no-go assessment. Plan next cycle."
    - "Deliverable: MVP Results Report with go/pivot/no-go recommendation."
    - "Milestone: GO/NO-GO DECISION — April 18, 2026."

### Frame 7: Learning Goals

- **Position**: Bottom-right
- **Size**: 1700x1000px
- **Background**: #FFFFFF
- **Elements**:
  - Frame title: "Learning Goals" (font size 20, bold, #1A1A2E)
  - Subtitle: "What we want to learn and how each learning drives decisions" (font size 12, #6B7280)

  - Learning Goal 1 — Rectangle (#E8EAF6, full width, 150px):
    - "LEARNING: What accuracy level is 'good enough' for users?" (bold, 14px)
    - "We hypothesize 80%, but maybe 75% is acceptable if users can see the SQL. Or maybe 90% is the minimum because trust is fragile."
    - "How we'll use it: Sets the bar for query engine investment. If 75% is enough, we shift resources to UX. If 90% is required, we double down on ML."

  - Learning Goal 2 — Rectangle (#E8EAF6, full width, 150px):
    - "LEARNING: What types of questions do users actually ask?" (bold, 14px)
    - "We expect: 'show me revenue by X' style queries. Reality might be: 'why did revenue drop?' (causal) or 'what should I focus on?' (prescriptive)."
    - "How we'll use it: Shapes the product roadmap. If users want causal analysis, we need a fundamentally different engine."

  - Learning Goal 3 — Rectangle (#E8EAF6, full width, 130px):
    - "LEARNING: How long does the 'aha moment' take?" (bold, 14px)
    - "Time from first query to 'wow, this actually works' moment. Is it instant? After 3 queries? After a week?"
    - "How we'll use it: Informs onboarding design. If aha is slow, we need guided tours. If instant, we optimize for speed to first query."

  - Learning Goal 4 — Rectangle (#E8EAF6, full width, 130px):
    - "LEARNING: Does the data team support or resist this tool?" (bold, 14px)
    - "Data teams might see us as a threat to their jobs or as a relief from ad-hoc work. Which is it?"
    - "How we'll use it: Determines go-to-market motion. If data teams resist, we sell to business leaders. If they support, they become our champions."

  - Learning Goal 5 — Rectangle (#E8EAF6, full width, 130px):
    - "LEARNING: What's the minimum viable semantic layer?" (bold, 14px)
    - "How many business term mappings are needed for a company to get useful results? 10? 50? 500?"
    - "How we'll use it: Directly impacts onboarding time and scalability. If 50 mappings are enough, setup is hours. If 500, it's days."

  - Anti-learning note (#FFEBEE, full width, 60px): "REMINDER: We are NOT trying to learn if the product is 'good.' We are trying to learn if specific, falsifiable hypotheses are true. Every piece of data should support a decision."

## Connectors & Flow

- Arrows from Core Assumptions to Experiment Design (assumptions drive experiments).
- Arrows from Experiment Design to Success Criteria (experiments produce data for go/no-go).
- Arrows from Build Scope to Build Timeline (scope determines sprint plan).
- Arrows from Success Criteria to Learning Goals (criteria operationalize learning goals).
- Dashed lines from specific assumption cards to their corresponding experiment cards (1:1 mapping).
- Connector from Timeline Week 6 to Success Criteria (timeline culminates in go/no-go decision).
- Dotted lines from Learning Goals back to Core Assumptions (learning validates or invalidates assumptions).

## Example Content

All frames contain realistic pre-filled content for DataBridge's first MVP cycle, focused on validating the natural language query engine. The MVP is scoped to a 6-week build with 20 beta users from 5 companies, testing 6 core assumptions through 4 structured experiments.

**MVP Story**: The team has validated the problem (non-technical users can't access data) through customer interviews. Now they need to validate the solution: can an LLM-powered query engine be accurate enough, trusted enough, and quick enough to set up that it replaces the 3-5 day wait for a data analyst? The MVP tests this with the minimum possible build — a text box, Snowflake connector, semantic layer, and table output — and has clear go/pivot/no-go criteria.

## Variations

1. **Concierge MVP**: Replace Build Scope with a "Manual Service Design" frame. Instead of building the product, manually fulfill user queries (human behind the curtain) to test demand and understand query patterns before writing code.
2. **Landing Page MVP**: Replace Build Scope with "Landing Page Experiment." Feature cards become page sections. Success criteria focus on signup conversion rates, email captures, and waitlist growth. No code is built.
3. **Feature MVP (Within Existing Product)**: Scale down to a new feature within an existing product. Replace Core Assumptions with "Feature Hypotheses." Replace Build Timeline with "Feature Flag Rollout Plan." Add an A/B test design frame.

## Build Instructions

1. Set board background to #F5F7FA and dimensions to 5500x3500px.
2. Create the MVP Planning Header (5300x350px) at the top with #1565C0 background and core hypothesis callout.
3. Create a 3-column layout for the main area (each ~1700x1600px) with white backgrounds.
4. Build Core Assumptions as risk-ranked cards with color-coded borders (red=critical, orange=high, yellow=moderate).
5. Build Experiment Design with structured experiment cards including method, success criteria, and timeline.
6. Build Build Scope with green "must-have" stickies and gray "nice-to-have" stickies (visually deprioritized).
7. Create a 3-column bottom row (each ~1700x1000px): Success Criteria, Build Timeline, Learning Goals.
8. Build Success Criteria with green (go), yellow (pivot), and red (no-go) sections.
9. Build Timeline as weekly blocks with deliverables and milestones.
10. Build Learning Goals as question-formatted cards with "how we'll use it" rationale.
11. Add all connectors: arrows from assumptions to experiments to criteria, dotted lines for 1:1 mappings.

## Tips & Best Practices

- **The riskiest assumption is the only one that matters**: Test the assumption that, if wrong, kills the entire idea. Everything else can be fixed later.
- **Scope mercilessly**: The MVP is not the product. It is the smallest thing that tests the riskiest assumption. If a feature does not directly test a critical assumption, cut it.
- **Define success BEFORE building**: Write go/no-go criteria before writing a line of code. This prevents moving goalposts and confirmation bias.
- **Include a no-go path**: Teams that do not plan for failure end up throwing good money after bad. A clear no-go definition gives permission to pivot.
- **Learning is the deliverable, not the product**: The MVP's primary output is knowledge (validated or invalidated assumptions), not a product. Code is the medium, learning is the message.
- **Time-box ruthlessly**: If the MVP takes more than 6-8 weeks, it is not an MVP. The goal is speed to learning, not perfection.
- **Share learnings publicly**: Post MVP results to the whole team/company. This builds a culture of experimentation and transparent decision-making.
