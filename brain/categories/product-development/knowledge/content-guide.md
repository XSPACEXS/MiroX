# Product Development Boards — Content Guide

## Overview

A beautifully designed board with empty frames is a skeleton. Content is the muscle,
blood, and brain. This guide covers what content belongs on every type of product
development board, how to write it, what questions it should answer, and how to populate
boards with realistic, useful examples that teach teams how to think — not just fill
in blanks.

---

## Essential Sections by Board Type

### Feature Planning Board — Essential Content

| Section                | Required?   | Key Questions Answered                                |
| ---------------------- | ----------- | ----------------------------------------------------- |
| Problem Statement      | Required    | Why does this feature exist? What pain does it solve? |
| Success Metrics        | Required    | How will we know it worked? What numbers move?        |
| User Stories           | Required    | Who needs what, and why?                              |
| Acceptance Criteria    | Required    | How do we know when a story is done?                  |
| Wireframes/Mockups     | Recommended | What does the user see?                               |
| Technical Requirements | Required    | Architecture, APIs, data, performance constraints     |
| Dependencies           | Required    | What must happen first? Who else is involved?         |
| Risks                  | Required    | What could go wrong? What is our mitigation?          |
| Edge Cases             | Recommended | What are the boundary conditions and failure modes?   |
| Open Questions         | Required    | What do we not know yet? Who needs to decide?         |
| Delivery Timeline      | Required    | Phases, dates, owners, status                         |
| Scope (In/Out)         | Required    | What is explicitly not in this version?               |

### User Story Map — Essential Content

| Section                    | Required?   | Key Questions Answered                                 |
| -------------------------- | ----------- | ------------------------------------------------------ |
| User Activities (Backbone) | Required    | What are the major steps in the user journey?          |
| User Tasks                 | Required    | What specific actions does the user take per activity? |
| User Stories               | Required    | What discrete capabilities support each task?          |
| Release Boundaries         | Required    | Which stories ship in which release?                   |
| Persona Reference          | Recommended | Who is the user we are mapping for?                    |
| Pain Points                | Recommended | Where in the journey does the user struggle today?     |
| Opportunity Notes          | Optional    | Where do we see the biggest potential for improvement? |

### Product Roadmap — Essential Content

| Section                 | Required?   | Key Questions Answered                          |
| ----------------------- | ----------- | ----------------------------------------------- |
| Vision Statement        | Required    | Where is the product going? (1 sentence)        |
| Time Horizon            | Required    | What time period does this roadmap cover?       |
| Themes/Swimlanes        | Required    | What are the 3-5 strategic themes?              |
| Feature Items           | Required    | What are we building in each time period?       |
| Confidence Levels       | Required    | How committed are we to each item?              |
| Milestones              | Required    | What are the key dates and checkpoints?         |
| Dependencies            | Recommended | What cross-team or external dependencies exist? |
| Assumptions             | Recommended | What must be true for this roadmap to hold?     |
| Metrics/Goals per Theme | Recommended | What outcome does each theme drive?             |

### Release Planning Board — Essential Content

| Section                 | Required?   | Key Questions Answered                                |
| ----------------------- | ----------- | ----------------------------------------------------- |
| Release Identity        | Required    | Name, version, target date, owner                     |
| Feature List            | Required    | What is in this release?                              |
| Phase Columns           | Required    | Status of each feature (scoping, dev, QA, ready)      |
| Cross-Cutting Concerns  | Required    | QA plan, deployment, docs, comms — are they on track? |
| Dependencies & Blockers | Required    | What is at risk? Who is waiting on whom?              |
| Launch Checklist        | Required    | Binary go/no-go items that must be true before launch |
| Rollback Plan           | Recommended | What do we do if things go wrong?                     |
| Communication Plan      | Recommended | Who needs to know, when, through what channel?        |

### Prioritization Matrix — Essential Content

| Section           | Required?   | Key Questions Answered                               |
| ----------------- | ----------- | ---------------------------------------------------- |
| Axis Definitions  | Required    | What do "impact" and "effort" mean, specifically?    |
| Feature Items     | Required    | What items are we evaluating?                        |
| Scoring Framework | Required    | RICE, ICE, MoSCoW, or custom — how are items scored? |
| Quadrant Labels   | Required    | What action is recommended per quadrant?             |
| Scoring Table     | Recommended | Detailed scores for transparency and traceability    |
| Decision Log      | Recommended | Which items were selected and why?                   |

---

## Writing Guidelines

### The Voice of Product Boards

Product board content should be:

- **Specific, not vague**: "Reduce sprint planning time from 6 hours to 3.5 hours" not
  "Make sprint planning faster"
- **Outcome-oriented, not output-oriented**: "Increase user activation rate by 15%" not
  "Build onboarding flow"
- **User-centered, not system-centered**: "As a manager, I want to..." not "The system
  shall..."
- **Confident but honest**: State commitments clearly but flag uncertainty explicitly
- **Concise**: Every word must earn its place. Stickies are not essays.

### User Story Writing Formula

The standard user story format:

```
As a [user role],
I want to [action/capability],
so that [benefit/outcome].
```

**Examples of well-written stories**:

```
As an engineering manager,
I want to see AI-suggested assignees for each unassigned task,
so that I can plan sprints in less time.
```

```
As a mobile user,
I want to receive push notifications for overdue tasks,
so that I can take action even when I am not at my desk.
```

```
As a product analyst,
I want to export routing accuracy metrics to CSV,
so that I can analyze trends in our weekly ops review.
```

**Common story anti-patterns**:

| Anti-Pattern                | Example                                         | Why It Fails                   |
| --------------------------- | ----------------------------------------------- | ------------------------------ |
| Too vague                   | "As a user, I want better search"               | No specific capability defined |
| Too technical               | "As a user, I want Elasticsearch indexing"      | Implementation, not need       |
| No benefit                  | "As a user, I want to filter by date"           | Missing the "so that"          |
| Multiple stories crammed in | "As a user, I want to filter, sort, and export" | Split into 3 stories           |
| System-centric              | "The system shall paginate results"             | Not from a user perspective    |

### Acceptance Criteria Writing Formula

Each acceptance criterion should be:

- **Testable**: A QA engineer can verify it with a clear yes/no
- **Specific**: Numbers, behaviors, edge cases are defined
- **Independent**: Each criterion can be verified independently

**Format**:

```
Given [context/precondition],
When [action occurs],
Then [expected outcome].
```

**Examples**:

```
AC1: Given an unassigned task, when the routing engine runs,
then the system displays up to 3 suggested assignees ranked by fit score.

AC2: Given a suggested assignee, when the manager clicks "Approve",
then the task is assigned to that person and a Slack notification is sent within 5 seconds.

AC3: Given all team members are at >100% capacity,
then a warning banner is shown: "All team members are at full capacity."
```

### Problem Statement Formula

A good problem statement follows this structure:

```
[User role] currently [painful behavior/workaround].
This causes [negative outcome: time wasted, errors, frustration, revenue loss].
[Quantify if possible: "4-6 hours per week", "23% task reassignment rate"].
```

**Example**:

```
Engineering managers currently spend 4-6 hours per week manually assigning tasks
to team members. They rely on mental models of who has capacity and relevant
skills, leading to uneven workload distribution, bottlenecked specialists,
and an average of 23% task reassignment rate per sprint.
```

### Success Metrics Formula

Use the SMART framework adapted for product metrics:

```
Primary: [Metric name] moves from [current baseline] to [target] within [timeframe].
Secondary: [Supporting metric] changes from [baseline] to [target].
Guardrail: [Metric that must not degrade] stays above/below [threshold].
```

**Example**:

```
Primary: Reduce average sprint planning time from 6.0 hours to 3.5 hours
within 8 weeks of launch.

Secondary: Decrease task reassignment rate from 23% to 8% within 12 weeks.

Guardrail: Developer satisfaction score must not drop below 4.0/5.0
(current: 4.3/5.0).
```

---

## Real Content Examples

### Example: Roadmap Theme Descriptions

**Theme: AI-Powered Productivity**
"Integrate machine learning into core workflows to automate routine decisions, suggest
next actions, and surface insights. Driven by customer research showing 67% of managers
want AI assistance with task management. Measured by: time saved per user per week."

**Theme: Platform Scalability**
"Upgrade infrastructure to support 10x current load — from 50K to 500K concurrent users —
while maintaining sub-200ms response times. Required to support enterprise tier launch
in Q3 and projected 3x user growth from the partnership channel."

**Theme: Mobile-First Experience**
"Redesign the mobile app from feature parity with web to mobile-native workflows
optimized for on-the-go task management. Driven by 42% of active users accessing the
product via mobile but only 18% completing core workflows on mobile."

### Example: Risk Descriptions

**RISK-1 (High): AI model accuracy in cold-start scenario**
"The routing engine will have low suggestion accuracy during the first 2 weeks for new
teams because it lacks historical assignment data. Mitigation: Seed the model with 6
months of historical task assignment data from the existing database. Fallback: If
accuracy is below 60% for a team, disable AI suggestions and show manual assignment
with a message: 'AI suggestions will improve as we learn your team patterns.'"

**RISK-2 (Medium): Manager trust and adoption**
"Managers may distrust AI suggestions and default to manual assignment, undermining ROI.
Mitigation: (1) Show confidence scores alongside each suggestion, (2) Add a feedback
loop where managers can mark suggestions as helpful/unhelpful, (3) Share a weekly
'AI accuracy report' showing how suggestion quality improves over time."

### Example: Dependency Descriptions

**DEP-1: Calendar API Integration**
"The routing engine requires real-time availability data from Google Calendar and Outlook.
Owner: Integrations team (Lead: Aisha K.). ETA: March 20. Risk: If delayed, the routing
engine will fall back to workload-only scoring (no availability signal). Current status:
API contracts finalized, implementation at 40%."

### Example: Edge Case Descriptions

**EC-1: Team member has no skill tags**
"If a team member has not set any skill tags, they cannot be matched by skill. Behavior:
Exclude them from skill-based suggestions but include them in workload-based fallback
ranking. Show a prompt on their profile: 'Add skills to your profile to receive
AI-routed tasks.' Notify their manager after 2 weeks if tags are still empty."

---

## Data Visualization in Product Boards

### When to Show Numbers

Product boards should include quantitative data when:

- Defining success metrics (baselines and targets)
- Showing progress (percentage complete, items remaining)
- Making trade-offs (RICE scores, effort estimates)
- Presenting context (user counts, revenue impact, time savings)

### How to Present Numbers

| Data Type  | Presentation          | Example                                    |
| ---------- | --------------------- | ------------------------------------------ | ----------- | -------- |
| Percentage | Large number + label  | "72% complete" in 32pt with a progress bar |
| Count      | Number + context      | "14 features                               | 3 teams     | 6 weeks" |
| Comparison | Side-by-side          | "Before: 6.0 hrs → After: 3.5 hrs"         |
| Score      | Number + scale        | "RICE Score: 1,500 (Threshold: 500)"       |
| Trend      | Direction + magnitude | "Task reassignment: 23% → 8% (down 65%)"   |
| Timeline   | Date + milestone      | "Beta: Apr 8                               | GA: Apr 22" |

### Chart Types in Miro

Miro does not natively support complex charts, but you can approximate:

- **Progress bars**: Rectangle shapes with two fills (completed in green, remaining in gray)
- **Bar charts**: Stacked rectangles of varying height with labels
- **Pie/donut indicators**: Circle shapes with colored segments (or use percentage text)
- **Sparklines**: Small rectangles arranged in a line to suggest trends
- **Heat maps**: Grid of colored cells (green-yellow-red) for multi-dimensional scoring

For complex data visualization, link to external dashboards (Looker, Tableau, Google
Sheets) using Miro card links rather than trying to recreate the chart on the board.

---

## Content Density Guidelines

### The Goldilocks Principle

Product boards must be dense enough to be useful but sparse enough to be readable.

| Board Type            | Target Content Density       | Stickies Per Frame           |
| --------------------- | ---------------------------- | ---------------------------- |
| Feature Spec          | High (working document)      | 5-12 per section             |
| User Story Map        | High (comprehensive backlog) | 4-8 per column               |
| Product Roadmap       | Medium (overview)            | 3-6 per swimlane per quarter |
| Release Plan          | Medium-High (checklist)      | 4-8 per phase column         |
| Prioritization Matrix | Medium (analysis)            | 8-15 per quadrant            |

### When to Split a Board

If any of these conditions are true, split into multiple linked boards:

- The board requires scrolling for more than 3 screen-widths in any direction
- A single frame contains more than 15 stickies
- The board serves two distinct audiences with different detail needs
- You find yourself adding "see also" notes pointing to other sections

**Split strategy**:

- Keep the overview board as the hub with links to detail boards
- Each sub-board should be self-contained (it makes sense without the parent)
- Use consistent naming: "AutoPilot 3.0 — Roadmap" / "AutoPilot 3.0 — Feature: AI Routing"

---

## Content Lifecycle

### Phase 1: Discovery (Pre-Planning)

Content is rough, exploratory, and incomplete:

- Bullet-point problem statements
- Rough feature descriptions (1-2 sentences)
- Estimated effort (T-shirt sizes: S/M/L/XL)
- "What if" questions and hypotheses

### Phase 2: Definition (Planning)

Content becomes structured and specific:

- Formal user stories with acceptance criteria
- Wireframe descriptions or linked mockups
- Technical requirements with architecture decisions
- Scored prioritization with documented rationale

### Phase 3: Execution (In Progress)

Content shifts to tracking and coordination:

- Status updates on feature cards
- Blocker descriptions and resolution plans
- Progress percentages and burndown data
- Meeting notes and decision records

### Phase 4: Review (Post-Launch)

Content becomes retrospective:

- Actual vs. planned metrics
- Lessons learned stickies
- What to carry forward to the next cycle
- Archive notes and links to documentation

Each phase should be visually distinct on the board — use opacity (100% for current phase,
50% for completed phases) or position (completed phases move to a "done" column or
bottom section).

---

## Copywriting for Headers and Labels

### Section Header Formula

Use verb-noun pairs for action-oriented headers:

| Instead of     | Use                           |
| -------------- | ----------------------------- |
| "Features"     | "What We Are Building"        |
| "Timeline"     | "When It Ships"               |
| "Risks"        | "What Could Go Wrong"         |
| "Dependencies" | "What We Are Waiting On"      |
| "Metrics"      | "How We Will Measure Success" |
| "Questions"    | "What We Need to Decide"      |

### Board Title Formula

```
[Product/Project Name] — [Board Type]
```

Examples:

- "AutoPilot 3.0 — Feature Spec: AI Task Routing"
- "AutoPilot 3.0 — Product Roadmap Q1-Q4 2026"
- "AutoPilot 3.0 — Release Plan: April 22"
- "AutoPilot 3.0 — Prioritization: Q2 Features"

### Subtitle/Tagline Formula

One sentence that captures the board's purpose:

- "Everything you need to know about what we are shipping, when, and why."
- "From user problem to production code — the complete feature specification."
- "The single source of truth for our Q2 product direction."

---

## Questions Every Product Board Should Answer

### For Any Stakeholder (5-second scan)

1. What product/project is this about?
2. What is the current status? (On track / At risk / Blocked)
3. When is the next major milestone?

### For a Product Manager (30-second review)

4. What is the strategic context? (Vision, goals, metrics)
5. What are the key decisions that need to be made?
6. What are the top risks and dependencies?

### For an Engineer (2-minute dive)

7. What exactly are we building? (User stories, acceptance criteria)
8. What is the technical architecture? (APIs, data, integrations)
9. What are the edge cases and constraints?

### For a Designer (2-minute dive)

10. What are the user flows and interactions?
11. What wireframes or mockups exist?
12. What design system components are needed?

### For an Executive (10-second glance)

13. Are we on schedule?
14. What is the expected business impact?
15. Do we need to make any trade-offs?
