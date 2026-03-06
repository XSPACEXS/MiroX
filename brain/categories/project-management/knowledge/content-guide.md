# Project Management — Content Guide

## Overview

The content on a project management board is the project itself — every task, every deadline, every assignment, every dependency. Unlike creative boards where content is brainstormed, PM board content is operational. It must be accurate, current, and actionable. This guide covers what content goes on each type of PM board, how to write effective task descriptions, and how to structure information for maximum clarity.

---

## Essential Sections by Board Type

### Kanban Board Sections

**Column set (workflow stages)**:
Every Kanban board needs a minimum workflow:

1. **Backlog** — Unscheduled work that has been captured but not committed to
2. **To Do** — Committed work ready to start (usually limited to current sprint/week)
3. **In Progress** — Work actively being done
4. **In Review** — Work completed by the doer, awaiting review/approval
5. **Done** — Work completed and verified

Advanced columns (add when the team's workflow demands them):

- **Triage/Inbox** — Newly submitted work before prioritization
- **Blocked** — Dedicated column for blocked items (makes blockers impossible to ignore)
- **Deployed/Released** — Work that has shipped to production
- **Won't Do** — Decided against, preserved for historical record

**WIP limits by column**:
| Column | Recommended WIP Limit | Reasoning |
|--------|----------------------|-----------|
| Backlog | No limit | Capture everything |
| To Do | Team size x 2 | 2 ready tasks per person |
| In Progress | Team size x 1 | 1 active task per person |
| In Review | Team size x 0.5 | Fast reviews, no bottleneck |
| Done | No limit | Celebrate freely |

### Sprint Board Sections

**Sprint header information**:

- Sprint name and number (Sprint 8, "Phoenix")
- Date range (March 18 - March 29, 2026)
- Sprint goal (one sentence: "Complete payment integration MVP")
- Capacity: Total story points available (based on team velocity)
- Committed: Points committed to this sprint
- Progress: Points completed so far
- Burndown indicator: On track / Behind / Ahead

**Cards within sprints**:

- User stories or tasks from the sprint backlog
- Sorted by priority (highest at top) or by status
- Each card shows: title, story points, assignee, status, tags

**Supporting zones**:

- Sprint Goals frame: 1-3 objectives for the sprint
- Sprint Risks frame: Known risks and mitigations
- Carry-over zone: Items from the previous sprint that weren't completed
- Sprint Retrospective zone: What went well, what to improve (after sprint ends)

### Timeline/Gantt Sections

**Time header**:

- Top row: Months or quarters
- Bottom row: Weeks or days
- Current date indicator ("Today" line)
- Key dates: Project start, milestones, deadline

**Swim lane categories**:

- By team/department (Engineering, Design, QA, Marketing)
- By workstream (Frontend, Backend, Infrastructure, Documentation)
- By individual (Alice, Bob, Carol — for small teams)
- By phase (Design Phase, Build Phase, Test Phase, Launch Phase)

**Task bars contain**:

- Task name
- Assignee
- Start and end dates
- Percent complete (visual progress overlay)
- Dependencies (arrows to/from other tasks)

**Milestone markers**:

- Key deliverables or checkpoints
- Decision gates
- External deadlines (regulatory, contractual, event-driven)
- Launch/release dates

### Roadmap Sections

**Time columns**: Quarters (Q1, Q2, Q3, Q4) or months
**Category rows**: Product areas, teams, or strategic themes
**Initiative cards**: Major projects or features spanning weeks/months
**Dependencies**: Arrows between initiatives that depend on each other

**Essential roadmap metadata**:

- Roadmap title and scope (e.g., "2026 Product Roadmap — CloudSync Pro")
- Owner/team
- Last updated date
- Confidence level (Committed / Planned / Exploratory)
- Status indicator on each initiative

### Dashboard Sections

**Widgets to include**:

1. Overall status badge (On Track / At Risk / Off Track)
2. Sprint or phase progress bar
3. Task distribution (To Do: X, In Progress: Y, Done: Z)
4. Team capacity utilization
5. Top 3-5 risks with severity
6. Upcoming milestones (next 3-4)
7. Key metrics (velocity, cycle time, scope change percentage)
8. Recent decisions or changes

---

## Writing Effective Task Titles

### The Golden Rules

1. **Start with a verb**: "Implement," "Design," "Review," "Write," "Fix," "Test," "Deploy"
2. **Be specific**: "Implement Stripe payment webhook handler" not "Payment stuff"
3. **Include scope**: "Design onboarding flow for enterprise users (3 screens)" not "Design onboarding"
4. **Reference the system**: "Fix login timeout on mobile app (iOS)" not "Fix bug"
5. **Keep it scannable**: 5-12 words maximum, front-load the important words

### Good vs. Bad Task Titles

| Bad Title           | Why It Fails         | Good Title                                                       |
| ------------------- | -------------------- | ---------------------------------------------------------------- |
| "Bug fix"           | Which bug? Where?    | "Fix cart total calculation error on checkout page"              |
| "Design"            | Design what?         | "Design user settings page — profile and notifications tabs"     |
| "API work"          | Meaninglessly vague  | "Implement REST API endpoints for user management (CRUD)"        |
| "Meeting follow-up" | Not actionable       | "Create proposal document from client meeting notes (Acme Corp)" |
| "Research"          | Research about what? | "Research SSO providers — compare Okta, Auth0, and AWS Cognito"  |
| "Updates"           | Updates to what?     | "Update pricing page copy to reflect new enterprise tier"        |

### Task Description Best Practices

When cards need more detail (acceptance criteria, context, links), structure the description consistently:

```
CONTEXT: Why this task exists
- Linked to user story US-234
- Requested by enterprise customer Acme Corp
- Blocking Q2 launch milestone

ACCEPTANCE CRITERIA:
- [ ] Payment form validates card number in real-time
- [ ] Error messages display inline below the field
- [ ] Successfully processes test transactions in Stripe sandbox
- [ ] Loading state shown during API call

TECHNICAL NOTES:
- Use Stripe Elements for PCI compliance
- Reference the existing PaymentService class
- API docs: https://stripe.com/docs/payments/elements

DEFINITION OF DONE:
- [ ] Code reviewed and approved
- [ ] Unit tests passing (>80% coverage)
- [ ] QA verified on staging environment
- [ ] Documentation updated
```

---

## Data and Metrics on PM Boards

### Sprint Metrics

| Metric                 | Definition                        | Where to Display                | Target               |
| ---------------------- | --------------------------------- | ------------------------------- | -------------------- |
| Velocity               | Story points completed per sprint | Sprint header, dashboard        | Stable or increasing |
| Burndown               | Points remaining over time        | Dashboard widget, sprint header | Tracking ideal line  |
| Cycle Time             | Days from start to done per task  | Dashboard metric                | Decreasing           |
| Lead Time              | Days from creation to done        | Dashboard metric                | Decreasing           |
| WIP Count              | Tasks currently in progress       | Column header                   | Below WIP limit      |
| Sprint Goal Completion | Percent of sprint goals met       | Sprint retrospective zone       | >80%                 |
| Carry-over Rate        | Tasks carried to next sprint      | Sprint header                   | <15%                 |

### Project Health Metrics

| Metric             | How to Calculate                                  | Display                   |
| ------------------ | ------------------------------------------------- | ------------------------- |
| Schedule Variance  | (Planned End - Forecast End) / Planned Duration   | Days ahead/behind + color |
| Scope Creep        | (Current Scope - Original Scope) / Original Scope | Percentage + trend arrow  |
| Budget Utilization | Spent / Budget                                    | Percentage + progress bar |
| Risk Score         | Sum(Risk Probability x Impact)                    | Number + color badge      |
| Team Utilization   | Assigned Points / Available Points                | Percentage per person     |
| Defect Rate        | Bugs Found / Features Delivered                   | Ratio + trend             |

### Roadmap Metrics

| Metric                       | Where to Display | Format                                   |
| ---------------------------- | ---------------- | ---------------------------------------- |
| Initiative count per quarter | Quarter header   | "8 initiatives"                          |
| Confidence level             | Initiative card  | Badge: Committed / Planned / Exploratory |
| Dependencies count           | Initiative card  | "3 dependencies" with warning if >5      |
| Resource allocation          | Swim lane header | "4 engineers, 2 designers"               |
| Strategic alignment          | Initiative card  | OKR reference: "Supports O2-KR3"         |

---

## Real-World Content Examples

### Example: SaaS Sprint Board

**Sprint 8 — "Payments Integration Sprint"**

- Date: March 18-29, 2026
- Team: 6 engineers, 1 designer, 1 PM
- Velocity: 42 points/sprint
- Sprint Goal: "Complete Stripe payment integration for individual plan billing"

**Cards**:

1. "Implement Stripe Elements checkout form" — 8 pts — Alice — In Progress
2. "Design payment confirmation email template" — 3 pts — Bob (Design) — In Review
3. "Build webhook handler for payment events (success, failure, refund)" — 8 pts — Carol — To Do
4. "Write unit tests for PaymentService class" — 5 pts — Dave — To Do
5. "Create admin dashboard for payment monitoring" — 8 pts — Eve — To Do
6. "Set up Stripe test environment with fixture data" — 3 pts — Alice — Done
7. "Update API documentation for /billing endpoints" — 2 pts — Frank — To Do
8. "Load test payment flow for 1000 concurrent users" — 5 pts — Dave — To Do

### Example: Roadmap Initiative Cards

**Q2 2026 — Platform Team**:

- "API v3.0 Migration" — Committed — On Track — 3 engineers, 8 weeks — "Migrate all REST endpoints to new versioned API structure. Backward compatible with v2."
- "GraphQL Support (Beta)" — Planned — At Risk — 2 engineers, 6 weeks — "Enable GraphQL queries for top 10 most-used endpoints. Internal beta only."

**Q2 2026 — Security Team**:

- "SOC2 Type II Certification" — Committed — On Track — Cross-functional, 12 weeks — "Complete evidence collection and auditor review for SOC2 Type II. Required for Acme Corp contract."

### Example: Dashboard Metrics

```
OVERALL STATUS: ON TRACK (Green)

Sprint 8 Progress:     ████████░░░░ 67% (18/27 stories)
Schedule:              3 days ahead of plan
Budget:                92% utilized ($184K of $200K)
Scope:                 +12% from original (4 stories added)
Quality:               97% (2 bugs found, 1 resolved)

Team Capacity:
  Alice    ████░  80%  (16/20 pts)
  Bob      █████  100% (5/5 pts — design only)
  Carol    ███░░  60%  (8/13 pts available)
  Dave     ████░  77%  (10/13 pts)
  Eve      ██░░░  40%  (8/20 pts — just started)
  Frank    ██░░░  40%  (2/5 pts)

Top Risks:
  1. [RED] API latency in staging (p95: 340ms, target: <100ms)
  2. [YELLOW] Stripe sandbox rate limits affecting testing
  3. [YELLOW] Designer Bob out sick next week — email template may slip
```

---

## Content Volume Guidelines

### How Much Detail Per Card

| Board Type        | Card Title            | Card Description              | Metadata                         |
| ----------------- | --------------------- | ----------------------------- | -------------------------------- |
| Quick Kanban      | 5-10 words            | None needed                   | Assignee only                    |
| Standard Sprint   | 8-15 words            | 2-5 acceptance criteria       | Assignee, points, due date, tags |
| Detailed Project  | 8-15 words            | Full criteria + notes + links | All metadata fields              |
| Executive Roadmap | 5-10 words + subtitle | 1-2 sentence description      | Status, confidence, timeline     |
| Dashboard         | N/A (metrics)         | N/A                           | N/A                              |

### Maximum Items per Section

| Section            | Maximum Before Splitting | Action When Exceeded                   |
| ------------------ | ------------------------ | -------------------------------------- |
| Kanban column      | 12-15 cards              | Add swim lanes or sub-columns          |
| Sprint backlog     | 15-20 stories            | Reduce sprint scope                    |
| Timeline swim lane | 8-10 task bars           | Nest sub-tasks or create sub-lanes     |
| Roadmap quarter    | 6-8 initiatives          | Prioritize, defer lower-priority items |
| Dashboard risks    | 5-7 items                | Show top risks only, link to full list |

---

## Copywriting for PM Boards

### Status Update Writing

Status updates should be factual, specific, and forward-looking:

**Bad**: "Things are going OK, we had some issues but we're working on them"
**Good**: "Sprint 8: 67% complete (18/27 stories). Payment webhook blocked by Stripe sandbox rate limits — workaround in progress, expected resolution by March 20."

### Risk Description Format

Every risk should follow this structure:

```
RISK: [What could go wrong]
PROBABILITY: [High / Medium / Low]
IMPACT: [High / Medium / Low]
STATUS: [Mitigated / Monitoring / Open / Closed]
OWNER: [Who is responsible for this risk]
MITIGATION: [What we are doing about it]
```

Example:

```
RISK: API latency exceeds 100ms SLA in production
PROBABILITY: Medium
IMPACT: High (affects all payment transactions)
STATUS: Monitoring
OWNER: Carol (Backend Lead)
MITIGATION: Implementing edge caching for static API responses.
Fallback: Scale API servers from 3 to 6 instances.
```

### Milestone Naming

Milestones should be named for what is achieved, not what activity occurs:

- Bad: "Testing Phase" (activity, not achievement)
- Good: "All Critical Path Tests Passed" (verifiable achievement)
- Bad: "Design Review" (event, not deliverable)
- Good: "Design Approved by Stakeholders" (decision outcome)
- Bad: "Launch Prep" (vague activity)
- Good: "Production Environment Validated and Approved for Release" (verifiable state)

---

## Questions the Board Should Answer

### For the PM

1. What is the overall project status? (10 seconds)
2. What are the top risks right now? (30 seconds)
3. Is the team on track for the sprint/milestone? (30 seconds)
4. Who is overloaded and who has capacity? (1 minute)
5. What decisions need to be made this week? (1 minute)

### For the Team Member

1. What should I work on next? (10 seconds)
2. Is anything I depend on blocked? (30 seconds)
3. How does my work fit into the sprint goal? (1 minute)
4. What have I completed this sprint? (1 minute)

### For the Stakeholder

1. Will the project deliver on time? (10 seconds)
2. What are the biggest risks? (30 seconds)
3. What has been accomplished since last update? (1 minute)
4. Is the scope changing? By how much? (1 minute)

### For the Executive

1. Red, yellow, or green? (3 seconds)
2. On budget? On schedule? (10 seconds)
3. What needs my attention? (30 seconds)
