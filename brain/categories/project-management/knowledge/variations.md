# Project Management — Variations

## Overview

Project management boards must adapt to wildly different contexts — a startup's 3-person sprint board bears little resemblance to an enterprise program tracker, yet both need the same core principles applied thoughtfully. This document covers how to adapt PM boards across industries, team sizes, complexity levels, cultural contexts, and integrations with other board types.

---

## Industry Adaptations

### SaaS / Software

**Workflow columns**: Backlog, Refined, Sprint Ready, In Dev, Code Review, QA, Staging, Released
**Card metadata**: Story points, sprint assignment, epic, PR link, CI/CD status
**Unique elements**:

- CI/CD status badge on cards (Build Passing / Failing)
- Environment indicators: Dev, Staging, Prod
- Technical debt swim lane alongside feature work
- Release train timeline showing deployment windows
- Feature flag status on cards (behind flag / publicly available)

**Metrics emphasis**: Velocity, cycle time, deployment frequency, DORA metrics (lead time, change failure rate, time to restore)

### E-Commerce / Retail

**Workflow columns**: Idea, Approved, Design, Development, UAT, Staged for Launch, Live
**Card metadata**: Revenue impact estimate, affected product categories, seasonal priority
**Unique elements**:

- Seasonal markers: Holiday rush, Black Friday prep, Summer sale
- Revenue impact badges on cards: "$50K/month estimated"
- Inventory integration: Cards for stock management tasks
- A/B test tracking: Variation cards linked to test results
- Promotional calendar overlay on timeline views

**Metrics emphasis**: Revenue per feature, conversion impact, time to market, seasonal readiness

### Healthcare / Biotech

**Workflow columns**: Proposed, Compliance Review, Approved, In Progress, Validation, Documented, Complete
**Card metadata**: Regulatory status (FDA, HIPAA, IRB), patient safety flag, evidence level
**Unique elements**:

- Compliance checkpoint columns (work cannot proceed without approval)
- Patient safety indicators (red triangles) on relevant cards
- Audit trail zone showing who changed what and when
- Regulatory deadline markers on timelines (non-negotiable)
- Data privacy badges on cards handling PHI/PII

**Metrics emphasis**: Compliance rate, audit findings, time to regulatory approval, incident count

### Construction / Engineering

**Workflow columns**: Planned, Permitted, In Progress, Inspection, Punch List, Complete
**Card metadata**: Subcontractor, permit status, inspection date, weather dependency
**Unique elements**:

- Weather dependency flags on outdoor tasks
- Permit status tracking (Applied, In Review, Approved, Expired)
- Material delivery timeline alongside task timeline
- Photo documentation links on completed tasks
- Safety incident zone (always visible, always zero-targeted)

**Metrics emphasis**: Schedule variance, budget burn rate, safety incident rate, inspection pass rate

### Agency / Professional Services

**Workflow columns**: Brief, Creative Development, Internal Review, Client Review, Revisions, Approved, Delivered
**Card metadata**: Client name, project code, billable hours, revision count
**Unique elements**:

- Client review status prominently displayed (Pending, Feedback Received, Approved)
- Revision counter on cards (Rev 1, Rev 2, Rev 3 — escalating warning colors)
- Billable hours tracker per project/client
- Multi-client board with client-coded swim lanes
- Scope change alerts when revisions exceed the contracted amount

**Metrics emphasis**: Utilization rate, billable hours, revision rate, client satisfaction, margin per project

### Education / Academic

**Workflow columns**: Planning, Content Development, Peer Review, Pilot, Published, Archived
**Card metadata**: Course/subject, learning objective alignment, accessibility status
**Unique elements**:

- Academic calendar overlay (semesters, exam periods, breaks)
- Learning objective tags on every content card
- Accessibility compliance checklist on cards
- Student feedback integration in the pilot column
- Cross-course dependency tracking

**Metrics emphasis**: Content coverage, accessibility score, student satisfaction, time to publish

---

## Team Size Adaptations

### Solo (1 person)

**Board simplification**:

- 3 columns only: To Do, Doing, Done
- No swim lanes needed
- Cards need only title and due date (you know who is assigned)
- Skip WIP limits (self-discipline replaces process)
- Board size: 3000x2000px

**Unique to solo**:

- Personal energy tracking: Mark tasks as "deep work" vs. "shallow work"
- Time blocking: Assign tasks to specific days/time slots
- Weekly review zone: What was accomplished, what to focus on next week
- Learning tasks mixed with delivery tasks (solo practitioners wear all hats)

### Small Team (3-5 people)

**Standard setup**:

- 5 columns with WIP limits
- Assignee on every card (visible at medium zoom)
- Optional swim lanes by person or by project
- Daily standup reference format
- Board size: 5000x3500px

**Unique to small teams**:

- Pair work indicators (two assignees on collaborative tasks)
- "Help Wanted" tag for tasks that need assistance from another person
- Shared context: Brief descriptions on cards since not everyone was in every meeting
- Cross-training indicators: Tasks assigned to stretch someone's skills

### Large Team (10-20 people)

**Enhanced structure**:

- Swim lanes by squad or discipline (Engineering, Design, QA)
- Team lead review column between individual columns
- Sub-boards for each squad linked to the master board
- Board size: 8000x6000px

**Unique to large teams**:

- Dependency tracking between squads becomes critical
- Capacity dashboard showing per-squad utilization
- Integration/merge planning zone for work that crosses squad boundaries
- Escalation indicators for cross-team blockers
- Communication protocol: Board includes "How to flag blockers" instructions

### Organization-Wide (50+ people)

**Portfolio structure**:

- Multiple project boards linked through a master dashboard
- Roadmap view showing cross-project dependencies
- Resource allocation view across all projects
- Board size: 12000x8000px (or multiple linked boards)

**Unique to org-wide**:

- Executive summary dashboard with project health scores
- Resource conflict detection (same person assigned to conflicting tasks across projects)
- Strategic alignment tags linking tasks to company OKRs
- Change management tracking for organizational initiatives
- Governance gates where leadership must approve progression

---

## Complexity Levels

### Quick / Simple (15 minutes to build)

**Specifications**:

- Board size: 3000x2500px
- 3-4 columns
- 10-20 cards total
- No swim lanes, no dependencies, no metrics
- Simple card design: title + assignee only
- Default Miro sticky note colors

**When to use**: Quick team sync, personal task management, simple project kickoff

**Design shortcuts**:

- Use Miro sticky notes directly as cards
- Column headers are text blocks (no custom styling)
- No footer legend (self-evident)
- No header (title in a text block above the columns)

### Standard (30 minutes to build)

**Specifications**:

- Board size: 5500x4000px
- 5 columns with WIP limits
- 20-50 cards
- Optional swim lanes
- Rich card design: title, assignee, priority, due date, tags
- Custom color palette applied

**When to use**: Sprint planning, ongoing team project, client deliverable

**Design approach**:

- Styled column headers with status colors
- Cards with left-border priority indicators
- Sprint/project header zone
- Footer with status legend
- Basic metrics (task count per column)

### Advanced (1+ hours to build)

**Specifications**:

- Board size: 8000-12000px per side
- Multiple view types (Kanban + Timeline + Dashboard)
- 50-150 cards
- Swim lanes, dependencies, milestones
- Full card design with all metadata fields
- Dashboard with metrics widgets

**When to use**: Enterprise projects, multi-team programs, stakeholder presentations, long-running initiatives

**Design approach**:

- All five layout patterns may be used together
- Comprehensive dependency mapping
- Planned vs. actual overlays on timelines
- Resource utilization tracking
- Risk register and decision log zones
- Navigation links between related boards
- Export-ready visual quality

---

## Cultural Considerations

### Distributed / Remote Teams

- Include timezone indicators on assignee information
- Add "async update" zones where team members post daily updates in text
- Ensure the board is self-documenting (no verbal context required)
- Use explicit naming conventions (no acronyms without definitions)
- Include a "How to Use This Board" frame for new joiners

### Japanese / Lean Manufacturing Context

- Use the term "Kanban" correctly and honor its manufacturing origins
- Include explicit "Pull" indicators (team members pull work, not get assigned)
- Emphasize Kaizen (continuous improvement) with a retrospective zone
- Respect Genchi Genbutsu (go and see) — link tasks to real evidence/data
- Value signal visualization (andon) — blocked items should trigger immediate team attention

### European / GDPR-Aware Context

- Avoid displaying personal data on boards visible to unauthorized viewers
- Use initials or role names instead of full names if the board is public
- Include a data classification note if the board contains client information
- Ensure archived data is handled per retention policies

### Agile-Resistant Cultures

Some teams are mandated to use boards but resist the methodology:

- Start with 3 columns only (minimal process overhead)
- Avoid Scrum jargon (use "Task" instead of "Story," "Period" instead of "Sprint")
- Focus the board on visibility rather than process compliance
- Let the team customize column names to match their language
- Demonstrate value through bottleneck detection, not ceremony enforcement

---

## Integration with Other Board Types

### PM Board to Mind Map

**Transition point**: When a project needs creative problem-solving (brainstorming features, exploring technical approaches)
**How to connect**: Export the project's key challenge as a mind map central topic. Branch structure maps to project workstreams. Brainstorm output feeds back into the sprint backlog.

**Mapping**:

- Project challenge becomes mind map central topic
- PM swim lanes become mind map branches
- Brainstorm ideas become new backlog cards

### PM Board to SWOT Analysis

**Transition point**: During project retrospective or risk assessment
**How to connect**: Project strengths (what's going well) map to SWOT Strengths. Risks and blockers map to Threats. Team capabilities map to Opportunities.

### PM Board to OKR Planning

**Transition point**: When connecting project work to company objectives
**How to connect**: Each sprint goal or roadmap initiative references a specific OKR. Cards tagged with the OKR they support. Dashboard shows OKR contribution metrics.

**Mapping**:

- Company OKR becomes a roadmap swim lane or tag
- Sprint stories tagged with contributing OKR
- Dashboard metric shows "X% of sprint work aligned to Q2 OKRs"

### PM Board to Competitive Analysis

**Transition point**: When feature prioritization needs market context
**How to connect**: Competitive analysis findings inform roadmap priority. Cards can reference competitive gaps ("Gap vs. Competitor X: No bulk import feature").

### PM Board to Campaign Planning

**Transition point**: When a product launch requires marketing coordination
**How to connect**: Product roadmap milestones trigger marketing campaign timelines. Launch dates sync between PM and marketing boards. Dependencies cross from "Feature Complete" to "Launch Campaign Starts."

### PM Board to Funnel Mapping

**Transition point**: When tracking feature impact on customer acquisition/retention
**How to connect**: Features mapped to funnel stages they impact. Sprint cards tagged with funnel stage ("Activation" or "Retention"). Dashboard shows feature impact by funnel stage.

---

## Cross-Reference Quick Guide

| Starting Board | Target Board             | Trigger                      | What Transfers                    |
| -------------- | ------------------------ | ---------------------------- | --------------------------------- |
| Sprint Board   | Mind Map                 | Need to brainstorm solutions | Challenge statement, context      |
| Kanban         | Timeline / Gantt         | Need to see timing           | Tasks with dates, dependencies    |
| Roadmap        | Sprint Board             | Initiatives break into tasks | Initiative details become stories |
| Dashboard      | Kanban + Timeline        | Need to investigate a metric | Drill-down from summary to detail |
| Sprint Board   | OKR Planning             | Aligning work to objectives  | Story tags, sprint goals          |
| PM Board       | Campaign Planning        | Product launch coordination  | Release dates, feature list       |
| PM Board       | Competitive Analysis     | Prioritizing against market  | Feature gaps, competitor data     |
| PM Board       | Retrospective (Mind Map) | Sprint retrospective         | What worked, what didn't          |
