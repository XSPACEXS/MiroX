# Project Overview & Launch GTM — Content Guide

## Introduction

Launch GTM board content must serve the most diverse audience of any board type: executives who need a 30-second status read, PMs who need cross-functional coordination details, engineers who need technical requirements, marketers who need campaign briefs, and sales teams who need enablement materials. The content must be precise enough to drive action, concise enough to maintain readability, and connected enough to show the causal chain from insight to execution.

---

## Insights Quadrant Content

### Essential Content Elements

The Insights quadrant answers: "What do we know, and how do we know it?"

**Required elements**:

- 3-5 key research findings (not raw data — synthesized insights)
- Data source and methodology for each finding
- Competitive intelligence summary
- Market data or sizing relevant to the launch
- Customer quotes or voice-of-customer data

### Insight Card Content

Each insight card should follow this structure:

**God-level example**:

```
KEY FINDING #2: Onboarding Drop-Off

"67% of users abandon the onboarding flow at Step 3
(data connection), citing 'too many configuration options'
as the primary reason."

Source: User Research Study, Feb 2026 (n=340 new users)
Method: Funnel analysis + 12 post-abandonment interviews
Confidence: High (large sample, consistent qualitative themes)

Implication: Simplify Step 3 to a guided wizard with
sensible defaults. Reduce configuration options from 14 to 5.

Links to: Journey Map Stage 2 (Consideration → Onboarding)
          Task: Epic 2 — Onboarding Redesign
```

**Mediocre example** (avoid):

```
Finding: Users drop off during onboarding
Action: Fix onboarding
```

### Competitive Intelligence Content

```
COMPETITIVE LANDSCAPE

PRIMARY COMPETITOR: Competitor A
• Recently launched similar feature (Jan 2026)
• Pricing: $49/mo (vs. our $29/mo)
• Weakness: No mobile support, poor documentation
• Threat level: MEDIUM — similar feature, different positioning

SECONDARY COMPETITOR: Competitor B
• Announced feature on roadmap (Q2 2026)
• Pricing: Enterprise only ($500/mo+)
• Weakness: Too expensive for SMB
• Threat level: LOW — different market segment

IMPLICATIONS FOR LAUNCH:
• Position on price advantage vs. Competitor A
• Launch before Competitor B announces (timing advantage)
• Emphasize mobile support as differentiator
• Update battlecard for sales team
```

### Market Data Content

```
MARKET CONTEXT

TAM: $4.2B (source: Gartner, 2025 report)
SAM: $890M (mid-market SaaS companies, US + EU)
SOM: $45M (companies with 100-500 employees using
     competing solutions or manual processes)

GROWTH RATE: 23% CAGR (source: IDC Market Analysis)

KEY TREND: 62% of mid-market companies plan to
consolidate their tool stack in 2026 (source: Forrester)

IMPLICATION: Position this launch as consolidation play —
"Replace 3 tools with 1"
```

---

## Mapping Quadrant Content

### Essential Content Elements

The Mapping quadrant answers: "What is the customer's experience, and where are the gaps?"

**Required elements**:

- Current-state customer journey map (how it works today)
- Pain points at each journey stage
- Future-state journey map (how it will work after launch)
- Experience gaps between current and future state
- Personas or user segments involved in the journey

### Journey Stage Content

Each journey stage should contain:

**God-level example**:

```
STAGE 3: ONBOARDING

Current State:
User signs up → lands on empty dashboard → must configure
14 settings manually → connect data sources (avg 3 sources)
→ wait for initial sync (avg 22 minutes) → first report

Duration: 43 minutes average (target: <15 minutes)
Drop-off Rate: 33% abandon at this stage
Satisfaction: 2.8/5 (from in-app survey, n=120)

Pain Points:
⚠ Too many configuration options (14 settings)
⚠ No guidance on which settings matter
⚠ Sync wait time feels unproductive
⚠ First report is empty until all sources connected

Future State (Post-Launch):
User signs up → guided wizard (5 steps) → smart defaults
pre-configured → connect primary data source (1 click) →
instant preview report → background sync remaining sources

Expected Duration: 8-12 minutes
Target Drop-off: <10%
Target Satisfaction: 4.2/5
```

### Persona Content

```
PRIMARY PERSONA: "Hands-On Hannah"

Role: VP of Operations, mid-market SaaS (200 employees)
Age: 34-42
Technical Comfort: Moderate (uses tools daily, does not code)
Decision Authority: Yes (up to $500/mo without approval)

Goals:
• Reduce time spent compiling weekly reports (currently 6 hrs)
• Get real-time visibility into operational metrics
• Impress leadership with data-driven decisions

Frustrations:
• "I spend my Mondays in spreadsheet hell"
• "By the time the report is ready, the data is stale"
• "I know the data exists, I just can't get to it fast enough"

Behaviors:
• Researches solutions via peer communities and review sites
• Values ease of setup over feature richness
• Will champion the tool internally if onboarding goes smoothly
• Uses mobile for quick status checks

Quote: "I don't need a data warehouse. I need my numbers
in front of me by Monday morning."
```

---

## Tasks Quadrant Content

### Essential Content Elements

The Tasks quadrant answers: "What needs to be done, who is doing it, and what is the status?"

**Required elements**:

- Task cards organized by status (To Do / In Progress / Done / Blocked)
- Each task linked to the insight or journey gap that generated it
- Owner, due date, and dependencies for each task
- Cross-functional team labels
- Blocked items with blocker description and resolution path

### Task Card Content

**God-level example**:

```
TASK: Redesign Onboarding Wizard

Team: DESIGN + ENG
Owner: @sarah_design (design), @mike_eng (implementation)
Due: March 8, 2026
Status: ● IN PROGRESS (design complete, eng Sprint 5)

Description:
Replace the 14-setting configuration page with a 5-step
guided wizard. Include smart defaults based on company
size and industry. Add progress indicator.

Acceptance Criteria:
☑ Wizard reduces steps from 14 to 5
☑ Smart defaults pre-fill based on sign-up data
☐ Progress bar shows completion percentage
☐ "Skip for now" option available at each step
☐ Time-to-first-report < 15 minutes in testing

Linked to:
← Insight #2: 67% onboarding drop-off
← Journey Stage 3: Onboarding pain points
→ Design: Onboarding Wizard Mockup v3

Dependencies:
• BLOCKED BY: Data schema migration (ENG, due March 5)
• BLOCKS: Marketing landing page (needs new screenshots)

Notes:
• Design approved in review March 1
• Eng estimates 2 sprints remaining
• Mobile version deferred to v2
```

### Epic-Level Content

```
EPIC 2: ONBOARDING REDESIGN

Summary: Reduce onboarding time from 43 min to <15 min
by replacing manual configuration with a guided wizard

Scope: 6 tasks, 3 teams (Design, Eng, Marketing)
Timeline: Feb 24 — March 12 (3 weeks)
Status: ● IN PROGRESS (4 of 6 tasks started)

Tasks:
  2.1 ☑ User research on onboarding pain points [DESIGN]
  2.2 ☑ Design onboarding wizard mockup [DESIGN]
  2.3 ● Implement wizard frontend [ENG — Sprint 5]
  2.4 ● Data schema migration for defaults [ENG — Sprint 5]
  2.5 ☐ Update help center documentation [SUPPORT]
  2.6 ☐ Update landing page screenshots [MKTG]

Dependencies Map:
  2.3 depends on 2.2 (design) ✓ complete
  2.3 depends on 2.4 (schema) — in progress, due Mar 5
  2.6 depends on 2.3 (need real screenshots)
  2.5 depends on 2.3 (need final UI for docs)

Risk: If 2.4 slips past March 5, the entire onboarding
redesign misses the March 15 launch window.
Mitigation: Eng lead has flagged this as top priority.
```

### Blocked Items Content

```
BLOCKER: Data Schema Migration

Blocked Task: Onboarding Wizard Implementation (Task 2.3)
Blocking Team: ENGINEERING
Blocker Owner: @david_eng
Original Due: March 3 → Revised: March 5 (2 days late)

Reason: Legacy schema requires migration of 4 tables.
Migration script passes for 98% of records but fails on
200 edge cases (accounts created before 2024).

Resolution Plan:
1. Edge case handling script (March 4)
2. Staging migration test (March 4 evening)
3. Production migration (March 5 morning)
4. Unblock Task 2.3 by March 5 EOD

Impact if Not Resolved by March 5:
• Onboarding wizard cannot use smart defaults
• Fallback: Launch wizard without smart defaults (degraded UX)
• Marketing screenshots delayed by 2 days
• Overall launch risk: MEDIUM (functional but suboptimal)

Escalation: VP Engineering aware. No additional resources needed.
```

---

## Design Quadrant Content

### Essential Content Elements

The Design quadrant answers: "What does it look like, and is it ready?"

**Required elements**:

- Current design mockups or screenshots (thumbnail + link to Figma)
- Design review status and feedback
- Revision history (version tracking)
- Design system compliance notes
- Mobile/responsive considerations

### Design Review Card Content

```
DESIGN: Onboarding Wizard v3

[Thumbnail Image: 400x250px]
Full design: [Link to Figma]

Version: v3 (March 1, 2026)
Status: APPROVED
Reviewer: @product_lead, @eng_lead
Approved: March 2, 2026

Review Feedback (v2 → v3 changes):
✓ Step indicator added (was missing in v2)
✓ "Skip for now" button added per user feedback
✓ Color contrast fixed for accessibility (4.5:1 ratio)
⚠ Icon set updated — verify icons render on all browsers
✗ Mobile layout deferred to v2 (accepted)

Design System Compliance:
✓ Uses standard button components
✓ Typography follows system hierarchy
✓ Colors from approved palette
✓ Spacing follows 8px grid

Handoff Notes:
• CSS variables defined in design-tokens.json
• All assets exported at 1x, 2x, 3x
• Animation specs: 300ms ease-in-out for step transitions
• Figma developer mode enabled with measurements
```

### Marketing Asset Content

```
MARKETING ASSETS — Launch Campaign

Asset 1: Landing Page Hero Image
Status: ● IN PROGRESS
Owner: @creative_lead
Due: March 10
Specs: 1920x1080px, dark background, product screenshot
Notes: Waiting for final onboarding wizard screenshots (dep: Task 2.3)

Asset 2: Launch Blog Post Header
Status: ☑ COMPLETE
Owner: @content_writer
Delivered: March 4
Specs: 1200x630px, social-share optimized
Link: [Google Drive link]

Asset 3: Demo Video (90 seconds)
Status: ☐ NOT STARTED
Owner: @video_producer
Due: March 12
Specs: 1080p, horizontal, with captions
Script: [Link to script doc]
Dependencies: Onboarding wizard must be on staging

Asset 4: Sales Deck Update (Slides 4-6)
Status: ☐ NOT STARTED
Owner: @sales_enablement
Due: March 11
Specs: Match current deck template
Notes: Focus on before/after onboarding comparison
```

---

## Launch Readiness Content

### Readiness Assessment Content

```
LAUNCH READINESS ASSESSMENT — March 15, 2026

ENGINEERING: ● GREEN
All features deployed to staging. Unit tests: 100% pass.
Integration tests: 98% pass (2 flaky tests under investigation).
Performance: Load tested at 2x expected traffic. Rollback plan documented.
Owner: @eng_lead | Updated: March 12

DESIGN: ● GREEN
All mockups approved. Assets delivered. Help center screenshots updated.
Mobile layout deferred to v2 (accepted by PM).
Owner: @design_lead | Updated: March 11

MARKETING: ● AMBER (2 items pending)
Blog post: DONE. Email sequence: DONE. Social calendar: PENDING (waiting
on final screenshots from eng staging). Press outreach: PENDING (embargoed
until March 14).
Owner: @mktg_lead | Updated: March 12

SALES: ● GREEN
Updated pitch deck delivered. Battlecard updated with competitive
positioning. Demo script tested in 3 mock demos. Territory assignments
confirmed.
Owner: @sales_lead | Updated: March 11

SUPPORT: ● RED (training not complete)
KB articles: 8 of 12 published. Training: 0 of 3 sessions complete.
Escalation path: NOT DEFINED.
Blocker: Cannot train until onboarding wizard is on staging.
ETA for resolution: March 13 (if wizard deploys March 12 as planned).
Owner: @support_lead | Updated: March 12

OVERALL: NOT READY — 3 of 5 GREEN, 1 AMBER, 1 RED
DECISION: CONDITIONAL GO
Condition: Support training must complete by March 13 EOD.
If not met: Delay launch to March 22 (next window).
Decision maker: VP Product
Decision deadline: March 13, 5:00 PM
```

---

## Cross-Reference and Traceability Content

### Traceability Matrix

Every Launch GTM board should include a traceability matrix that connects insights to actions:

```
TRACEABILITY MATRIX

Insight                     → Journey Gap        → Epic/Task              → Deliverable
─────────────────────────────────────────────────────────────────────────────────────────
Insight #1: Price confusion → Stage 2 pain pt #1 → Epic 1: Pricing redesign → New pricing page
Insight #2: Onboarding     → Stage 3 pain pt #1 → Epic 2: Wizard redesign  → Wizard UI + docs
  drop-off
Insight #3: Mobile usage   → Stage 5 gap #2     → Epic 4: Mobile optim.    → Responsive layouts
  growing 40%
Insight #4: Competitor A   → Competitive threat  → Epic 3: Battlecard      → Sales enablement
  launched similar feature                         update + positioning       kit
```

### Cross-Quadrant Reference Format

When content in one quadrant references content in another:

```
← Insight #2: "67% onboarding drop-off" (Insights Quadrant)
↔ Journey Stage 3: Onboarding pain points (Mapping Quadrant)
→ Task 2.3: Implement wizard frontend (Tasks Quadrant)
→ Design: Onboarding Wizard v3 (Design Quadrant)
```

Use arrow direction to show the flow of causation:

- ← means "derived from" (this task was derived from that insight)
- → means "produces" (this task produces that deliverable)
- ↔ means "corresponds to" (this task addresses that journey gap)

---

## Content Copywriting Principles

### Launch GTM Writing Rules

1. **Action-oriented**: Every card should end with or imply a clear action. "67% drop-off at Step 3" is data. "67% drop-off at Step 3 → Simplify to guided wizard" is actionable.

2. **Source everything**: Every data point should cite its source. "Users abandon onboarding" is a claim. "67% of users abandon onboarding at Step 3 (User Research Study, Feb 2026, n=340)" is evidence.

3. **Use consistent team abbreviations**: ENG, DESIGN, MKTG, SALES, CS/SUPPORT, PM, LEGAL. Spell out on first use in the header, use abbreviations on cards.

4. **Date format**: Always use "March 15, 2026" or "Mar 15" format. Never use ambiguous formats like "3/15" or "15/3."

5. **Status language**: Use active present tense for status. "In Progress" not "Being Worked On." "Blocked" not "Waiting." "Complete" not "Has Been Done."

6. **Dependency language**: "Task A BLOCKED BY Task B (Team, due date)" — always name the blocking team and expected resolution date.

7. **Readiness language**: Use definitive assessments. "GREEN / Ready" means unconditionally ready. "AMBER / At Risk" means ready if [condition]. "RED / Blocked" means not ready because [reason].

### Number Formatting

| Type        | Format         | Example                     |
| ----------- | -------------- | --------------------------- |
| Percentages | X%             | 67%, 12%, 98%               |
| Durations   | X minutes/days | 43 minutes, 12 days         |
| Counts      | X              | 340 users, 6 tasks, 3 teams |
| Dates       | Month Day      | March 15, March 22          |
| Currency    | $X.XK / $X.XM  | $4.2B, $890M, $45M          |
| Ratings     | X.X/5          | 2.8/5, 4.2/5                |
| Versions    | vX             | v3, v2.1                    |

### Section Header Standards

| Quadrant  | Header Style                                      |
| --------- | ------------------------------------------------- |
| Insights  | Caps label: "KEY FINDING #1", "COMPETITIVE INTEL" |
| Mapping   | Title Case: "Stage 3: Onboarding", "Pain Points"  |
| Tasks     | Caps label: "EPIC 2", "BLOCKER"                   |
| Design    | Title Case: "Onboarding Wizard v3", "Assets"      |
| Readiness | Caps label: "ENGINEERING: GREEN", "OVERALL"       |

---

## Common Content Mistakes

1. **No traceability**: Tasks exist without connection to the insights that generated them. "Build new pricing page" exists in the Tasks quadrant but the Insights quadrant does not mention pricing confusion.
   **Fix**: Every epic or major task should link back to a specific insight or journey gap.

2. **Status without context**: "Marketing: AMBER" without explanation. What is amber? Why? When will it be resolved?
   **Fix**: Every status indicator includes a 1-line explanation and expected resolution date.

3. **Stale content**: The board was set up at project kickoff and not updated during execution. Insights are from 3 months ago. Tasks show status from 2 weeks ago.
   **Fix**: Include "Last Updated" timestamps on every section. Establish a weekly update cadence.

4. **Design section as image dump**: The Design quadrant is just a collection of screenshots with no context, version info, or review status.
   **Fix**: Every design artifact includes version number, review status, feedback summary, and link to the source file.

5. **No launch readiness view**: The board tracks progress by team but never synthesizes it into a cross-functional "Are we ready?" assessment.
   **Fix**: Add a Launch Readiness section at the top with RAG indicators per team and an overall go/no-go assessment with decision criteria.
