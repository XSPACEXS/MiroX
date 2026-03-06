# Project Overview & Launch GTM — Examples & Reference

## Introduction

This reference provides detailed breakdowns of god-level Launch GTM boards across different contexts: feature launches, product launches, campaign launches, and quarterly reviews. Each example analyzes the board's structure, content quality, cross-functional coordination, and what elevates it beyond mediocrity. The anti-patterns section documents the most common failure modes.

---

## Example 1: SaaS Feature Launch — "Onboarding Redesign"

### Context

A B2B SaaS company (DataSight) is launching a redesigned onboarding experience to reduce the 67% drop-off rate at Step 3 of their setup flow. The launch involves Engineering, Design, Marketing, Sales, and Support. Target launch: March 15, 2026. Team size: 14 people across 5 teams.

### Board Specifications

- **Board Type**: 2x2 Launch Command Center
- **Board Size**: 6000 x 3800px
- **Palette**: Command Center (Primary)
- **Phase**: Build (Week 6 of 10)

### What Makes It God-Level

1. **Insight-to-execution traceability**: Every task in the Tasks quadrant links back to a specific insight. "Task 2.3: Implement wizard frontend" links to "Insight #2: 67% onboarding drop-off" and "Journey Stage 3: Onboarding pain point #1." You can trace any piece of work back to the research that justified it.

2. **Readiness dashboard shows the real picture**: The header does not just show project status — it shows launch readiness per team. "ENG: GREEN, DESIGN: GREEN, MKTG: AMBER (social calendar pending), SALES: GREEN, SUPPORT: RED (training not complete)." This immediately tells leadership where to focus attention.

3. **The Mapping quadrant tells the customer story**: Not just a list of features, but a current-state journey showing how onboarding currently takes 43 minutes with 14 configuration steps, and a future-state journey showing the guided wizard reducing it to 8-12 minutes with 5 steps. The pain points are marked with metrics (33% drop-off, 2.8/5 satisfaction).

4. **Blockers are managed, not just listed**: The Tasks quadrant has a dedicated BLOCKED column with detailed blocker cards that include: what is blocked, who is blocking it, when it will be resolved, what happens if it is not resolved, and who owns the resolution. This transforms blockers from complaints into managed risks.

5. **Design quadrant shows evolution, not just current state**: The Design quadrant shows Onboarding Wizard v1, v2, and v3 with annotations showing what changed between versions and why. This creates a design decision log that prevents revisiting already-decided questions.

### Key Takeaway

This board works because it is not just a project tracker — it is a cross-functional command center that connects customer understanding to execution to deliverables. Any stakeholder can understand why any piece of work exists.

---

## Example 2: Product Launch — "Mobile App v1"

### Context

A mid-market company (FlowTrack) is launching their first mobile application. The mobile app extends their web-based project management tool to phones and tablets. The launch involves 6 teams over 16 weeks. This is a P0 (critical) launch tied to a board commitment and a conference keynote.

### Board Specifications

- **Board Type**: Cross-Functional Swim Lane Board
- **Board Size**: 5800 x 3800px
- **Palette**: Enterprise Launch
- **Milestones**: Beta Start (Week 8), TestFlight/Play Store (Week 12), Conference Keynote (Week 14), Public Launch (Week 16)

### What Makes It God-Level

1. **Swim lanes reveal the coordination complexity**: Five teams (ENG, DESIGN, MKTG, SALES, CS) each have their own swim lane with tasks sequenced against shared milestones. The visual immediately shows that Marketing cannot start the campaign until Engineering delivers the TestFlight build, and Customer Success cannot train until Design finalizes the help center content.

2. **Dependencies are explicit and cross-lane**: Red dashed connectors cross swim lanes to show 8 cross-team dependencies. Each dependency is labeled: "MKTG campaign blocked by ENG TestFlight build (due Week 12)." These connectors are the most important element on the board — they surface the coordination risks.

3. **Risk register is quantified**: The dependency section includes a risk register with impact assessment: "Risk #1: TestFlight build delayed by 1 week. Impact: Marketing campaign shifts from Week 13 to Week 14. Conference keynote demo at risk. Mitigation: Parallel marketing asset creation using staging build. Contingency: Pre-recorded demo for keynote."

4. **Conference keynote is tracked as a separate workstream**: A dedicated section within the Marketing swim lane tracks keynote preparation: slide deck, demo script, rehearsal schedule, AV requirements, and backup plans. This recognizes that the keynote is a fixed-date deliverable that cannot slip.

5. **The "Definition of Done" is team-specific**: Each team has a visible Definition of Done: Engineering (all P0 bugs fixed, crash rate < 0.1%, app store screenshot approved), Marketing (blog published, social scheduled, press embargo lifted), Sales (demo script tested, battlecard updated, territory plan confirmed).

### Key Takeaway

The swim lane layout excels when coordination between teams is the primary challenge. The cross-lane dependencies are the heart of the board — they make invisible coordination risks visible.

---

## Example 3: Campaign Launch — "Annual Customer Conference"

### Context

A SaaS company is planning their annual customer conference (2,000 attendees). The launch board coordinates content (keynote, breakout sessions, workshops), logistics (venue, catering, AV), marketing (promotion, registration, follow-up), and sales (pipeline meetings, demos, executive dinners). 8 workstreams, 25 people, 12-week timeline.

### Board Specifications

- **Board Type**: 2x2 Launch Command Center (adapted)
- **Board Size**: 6000 x 4200px (extended height)
- **Palette**: Command Center
- **Quadrant Adaptation**: Insights (attendee research), Mapping (attendee journey), Tasks (workstream tracking), Design (event branding)

### What Makes It God-Level

1. **Insights quadrant contains attendee research**: Not just "we expect 2,000 attendees" but segmented analysis: "42% are existing customers (expansion opportunity), 28% are prospects (pipeline opportunity), 18% are partners (ecosystem play), 12% are press/analysts (coverage opportunity)." Each segment has tailored experience goals.

2. **Mapping quadrant shows the attendee journey**: Pre-event (invitation, registration, travel planning) → Arrival (check-in, welcome reception) → Day 1 (keynote, breakouts, networking) → Day 2 (workshops, demos, executive meetings) → Post-event (follow-up, content, pipeline). Pain points from last year's conference are marked at each stage.

3. **Tasks quadrant uses sub-kanban boards per workstream**: Instead of one kanban for all 8 workstreams, each workstream has its own mini-kanban (3 columns, compact). Content, Logistics, Marketing, Sales, Sponsorships, AV/Tech, Catering, Registration. This prevents a single massive kanban from becoming unmanageable.

4. **Design quadrant includes event branding and environmental design**: Not just digital assets but physical space design: stage layout, signage placement, booth configuration, badge design, swag design, and digital experience (event app, digital signage).

5. **Post-event follow-up is planned before the event**: The Mapping quadrant includes the post-event journey with specific follow-up actions: "Day+1: Thank you email with session recordings. Day+3: NPS survey. Day+7: Sales follow-up on pipeline meetings. Day+14: Content publication (blog posts from sessions). Day+30: ROI analysis." This ensures the conference investment is maximized.

### Key Takeaway

Event launches require the same cross-functional coordination as product launches. The attendee journey map is the connective tissue that aligns all workstreams around a shared experience goal.

---

## Example 4: Quarterly Review Dashboard — "Q1 2026"

### Context

A product team is presenting their Q1 2026 results to the leadership team. The review covers 3 OKRs, 2 major launches, key metrics, lessons learned, and Q2 planning. The board serves as both the presentation artifact and the team's retrospective document.

### Board Specifications

- **Board Type**: Quarterly Review Dashboard
- **Board Size**: 5800 x 3400px
- **Palette**: Enterprise Launch
- **Audience**: VP-level leadership team

### What Makes It God-Level

1. **OKR scorecard is honest**: Not "3 out of 3 OKRs achieved!" but a nuanced assessment: "O1: Improve onboarding (73% — met KR1 and KR3, missed KR2). O2: Launch mobile app (89% — on track for public launch, missed beta date by 2 weeks). O3: Reduce churn (45% — missed significantly, root cause identified)." The missed OKR is not hidden — it is highlighted with a root cause analysis.

2. **Launch outcomes include impact metrics, not just completion**: "Launch 1 (Onboarding Redesign): DEPLOYED. Impact: Onboarding time reduced from 43 min to 11 min. Drop-off rate reduced from 33% to 9%. NPS improved from 2.8 to 4.1. Revenue impact: Estimated $180K additional ARR from improved activation." Not "We shipped it" but "Here is what it did."

3. **Key metrics include quarter-over-quarter comparison**: Each metric card shows: current value, Q4 value, change, and status vs. target. "MRR: $142K (Q4: $118K, +20.3%, Target: $130K — EXCEEDED)." Context makes numbers meaningful.

4. **Retrospective is structured, not free-form**: Three categories with equal weight: "What Worked" (3-5 sticky notes), "What Didn't Work" (3-5 sticky notes), "Key Decisions for Q2" (3-5 sticky notes). Each sticky note is a specific, actionable item, not a vague sentiment: "WORKED: Dedicated Design Sprint in Week 3 saved 2 weeks of iteration" rather than "Good collaboration."

5. **Q2 planning connects to Q1 learnings**: Each Q2 OKR includes a reference to the Q1 learning that informed it: "Q2 O1: Reduce churn by 15%. Informed by: Q1 O3 miss — identified that churn is driven by lack of onboarding follow-up at Day 14. Q2 action: Build automated Day 14 check-in flow."

### Key Takeaway

A quarterly review board is not a report card — it is a learning and planning document. The connection between Q1 outcomes, lessons learned, and Q2 plans creates a continuous improvement loop that is visible and auditable.

---

## Example 5: Insights-to-Execution Flow — "Pricing Redesign"

### Context

A SaaS company discovered through research that their pricing page is the #1 source of customer confusion. The Insights-to-Execution board traces from research findings through customer experience analysis to the task breakdown and deliverables for a pricing redesign.

### Board Specifications

- **Board Type**: Insights-to-Execution Flow
- **Board Size**: 6000 x 3200px
- **Palette**: Command Center

### What Makes It God-Level

1. **The left-to-right flow tells a clear story**: Column 1 (Insights): "3 research findings about pricing confusion." Column 2 (Journey Map): "The pricing evaluation journey with pain points at each step." Column 3 (Tasks): "5 epics addressing each pain point." Column 4 (Deliverables): "New pricing page, updated FAQ, sales battlecard, support documentation." The causal chain is unbroken.

2. **Connectors explicitly show derivation**: Dashed purple lines connect Insight #1 (pricing tier confusion) to Journey Gap #1 (comparison difficulty) to Epic 1 (pricing page redesign) to Deliverable 1 (new pricing page). A viewer can follow the line from research to output.

3. **The traceability matrix at the bottom provides the reference**: "Insight A → Gap 1 → Epic 1 → Pricing Page. Insight B → Gap 2 → Epic 3 → Sales Battlecard. Insight C → Gap 3 → Epic 5 → Support FAQ." This matrix is the audit trail that proves every piece of work is justified by research.

4. **Insights include contradictory evidence**: Not just "users are confused" but "78% of prospects said pricing was unclear (survey, n=500), but 92% of existing customers said pricing was fair (NPS survey, n=1,200). Implication: The pricing structure may be fine — the presentation is the problem." This nuance prevents the team from over-engineering the solution.

5. **Deliverables include success criteria**: Each deliverable card includes: what it is, when it is due, who owns it, and how success will be measured. "New Pricing Page: Due March 20. Owner: @design_lead. Success: Pricing page bounce rate < 40% (currently 62%). Conversion to trial: > 8% (currently 5.2%)."

### Key Takeaway

The Insights-to-Execution Flow is the clearest demonstration of evidence-based product development. Every deliverable traces back to a specific customer insight, making the "why" behind every piece of work visible and defensible.

---

## Anti-Patterns and Fixes

### Anti-Pattern 1: The Task Tracker Masquerading as a Launch Board

**Description**: A board that is just a kanban task tracker with no insights, no journey map, and no design review. It answers "what is the status?" but not "why are we doing this?" or "what does the customer experience look like?"

**What It Looks Like**: A single kanban board with 50+ task cards, no quadrant structure, no research context, no design artifacts.

**Why It Fails**: It is a glorified Jira board. The team tracks tasks but loses sight of the customer insight that drove them. When priorities need to shift, there is no strategic context to inform the decision.

**Fix**: Add the three missing quadrants. Even 3 insight cards, a simple journey map, and 2 design screenshots transform a task tracker into a launch board.

### Anti-Pattern 2: The Beautiful Dashboard Nobody Updates

**Description**: A polished, visually stunning board that was created during a kickoff workshop and never updated. The readiness indicators show "NOT STARTED" for everything, the tasks are from 6 weeks ago, and the timeline marker is in the wrong phase.

**Why It Fails**: A stale board is worse than no board — it gives false information and erodes trust in the board as a tool.

**Fix**: Assign update ownership to specific people. PM updates readiness and timeline. Team leads update their tasks. Design lead updates the design section. Build a 10-minute daily update habit.

### Anti-Pattern 3: The Silo Board

**Description**: Separate sections for each team with no cross-references, no dependencies, no shared timeline. Engineering has their section. Marketing has theirs. They do not connect.

**Why It Fails**: The entire point of a Launch GTM board is cross-functional alignment. Siloed sections create a false sense of coordination — each team knows their status but not how it affects other teams.

**Fix**: Add cross-quadrant connectors. Add a shared timeline. Add a dependency section. Add readiness indicators that force cross-functional assessment. The board should make it impossible to miss a cross-team dependency.

### Anti-Pattern 4: The Information Overload Board

**Description**: Every research finding (all 47), every design iteration (all 12 versions), every task (all 200+), every meeting note, every stakeholder comment — all on one board. The board is 15,000px wide and takes 30 seconds to render.

**Why It Fails**: It violates progressive disclosure. No audience can find what they need. Executives are overwhelmed. Team members cannot find their tasks. The board becomes a warehouse, not a workspace.

**Fix**: Apply the 3-5 rule: 3-5 key insights, 5-6 journey stages, top 20-30 active tasks, current design versions only. Link to detailed repositories (research repo, Figma, Jira) for depth. The board shows the synthesized view.

### Anti-Pattern 5: Missing the "Are We Ready?" Question

**Description**: A board that tracks progress per team but never synthesizes it into a launch readiness assessment. Each team section says "on track" but nobody asks "Are we actually ready to launch?"

**Why It Fails**: Individual team status does not equal launch readiness. Marketing might be GREEN but blocked by Engineering's unfinished feature. The board tracks trees but misses the forest.

**Fix**: Add a Launch Readiness header with per-team RAG indicators and an overall go/no-go assessment. This section should be the FIRST thing visible and should be updated daily in the final 2 weeks before launch.

---

## Board Type Selection Guide

| Situation                                    | Recommended Board            | Key Focus                       |
| -------------------------------------------- | ---------------------------- | ------------------------------- |
| Feature launch (3-5 teams, 6-12 weeks)       | 2x2 Launch Command Center    | Four quadrants, traceability    |
| Product launch (5+ teams, 12+ weeks)         | Cross-Functional Swim Lane   | Swim lanes, dependencies        |
| Research-driven initiative                   | Insights-to-Execution Flow   | Causal chain, traceability      |
| End-of-quarter review                        | Quarterly Review Dashboard   | OKRs, outcomes, planning        |
| Final launch prep (2-4 weeks before launch)  | Launch Readiness Checklist   | Checklists, blockers, go/no-go  |
| Campaign or event launch                     | 2x2 (adapted for event)      | Attendee journey, workstreams   |
| Simple feature update (1-2 teams, 2-4 weeks) | Simplified 2x2 (2 quadrants) | Tasks + Design only             |
| Multi-product launch                         | Hub + Individual boards      | Hub links to per-product boards |

---

## Presentation Frame Sequence

For boards presented in executive review meetings, configure Miro presentation mode frames in this order:

| Frame | Content                         | Duration | Audience Action           |
| ----- | ------------------------------- | -------- | ------------------------- |
| 1     | Launch Readiness Dashboard      | 2 min    | Go/no-go assessment       |
| 2     | Key Insights (top 3)            | 3 min    | Understand the "why"      |
| 3     | Customer Journey (before/after) | 3 min    | Understand the experience |
| 4     | Execution Status (Tasks)        | 3 min    | Review progress, blockers |
| 5     | Design Preview                  | 2 min    | See the deliverables      |
| 6     | Timeline and Next Steps         | 2 min    | Align on schedule         |

Total presentation time: ~15 minutes.
