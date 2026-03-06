# Culture Canvas

## Overview

- **Purpose**: Define and visualize a company's culture — its core values, behavioral norms, decision-making principles, communication standards, and rituals. This board serves as the cultural constitution of the organization, referenced during onboarding, hiring, performance reviews, and strategic decisions. It answers: "How do we do things here?"
- **Best For**: Leadership teams codifying culture before scaling, HR teams building onboarding materials, founders establishing cultural foundations, teams creating team charters
- **Complexity**: Medium
- **Board Size**: 4800x3200px (wide landscape to display values grid prominently)

## Color Scheme

| Role              | Color         | Hex     |
| ----------------- | ------------- | ------- |
| Primary (Headers) | Deep Navy     | #1A237E |
| Value Border 1    | Coral         | #FF6B6B |
| Value Border 2    | Teal          | #00897B |
| Value Border 3    | Amber         | #F9A825 |
| Value Border 4    | Purple        | #6A1B9A |
| Value Border 5    | Blue          | #1565C0 |
| Do Behaviors      | Forest Green  | #2E7D32 |
| Don't Behaviors   | Crimson       | #C62828 |
| Anti-Values       | Warm Red Tint | #FFF0F0 |
| Background        | Warm White    | #FFF8F0 |
| Card Fill         | White         | #FFFFFF |
| Text Primary      | Near Black    | #1B1B1B |
| Text Secondary    | Dark Gray     | #616161 |
| Divider           | Light Gray    | #E0E0E0 |

## Board Layout

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  Our Culture — How We Work           [Updated Q1 25]│
│  "One-liner culture statement"                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │   VALUE 1    │ │   VALUE 2    │ │   VALUE 3    │        │
│  │   Icon       │ │   Icon       │ │   Icon       │        │
│  │   Statement  │ │   Statement  │ │   Statement  │        │
│  │   We Do:     │ │   We Do:     │ │   We Do:     │        │
│  │   We Don't:  │ │   We Don't:  │ │   We Don't:  │        │
│  │   Story:     │ │   Story:     │ │   Story:     │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
│                                                              │
│  ┌──────────────┐ ┌──────────────┐                          │
│  │   VALUE 4    │ │   VALUE 5    │                          │
│  │   ...        │ │   ...        │                          │
│  └──────────────┘ └──────────────┘                          │
│                                                              │
├──────────────────────────┬──────────────────────────────────┤
│  ANTI-VALUES             │  HOW WE DECIDE                   │
│  What we DON'T do:       │  Decision framework              │
│  • ...                   │  Escalation path                 │
│  • ...                   │  Speed expectations              │
├──────────────────────────┼──────────────────────────────────┤
│  HOW WE COMMUNICATE     │  OUR RITUALS                     │
│  Norms and channels      │  Weekly, monthly, quarterly      │
│  Meeting rules           │  Celebrations and traditions     │
└──────────────────────────┴──────────────────────────────────┘

Approximate positions:
  Header:               (50, 50) — 4700x120
  Values Grid:          (50, 220) — 4700x1500
  Anti-Values:          (50, 1770) — 2300x400
  Decision Framework:   (2400, 1770) — 2350x400
  Communication:        (50, 2220) — 2300x400
  Rituals:              (2400, 2220) — 2350x400
```

## Frames & Sections

### Frame 1: Culture Header

- **Position**: (50, 50)
- **Size**: 4700x120px
- **Background**: Deep Navy (#1A237E)
- **Elements**:
  - Company logo at (70, 60), 80x80px
  - Text: "Our Culture — How We Work" at (170, 75), 28px bold, white
  - Text: "Speed, transparency, and learners above all else" at (170, 110), 16px italic, #90CAF9
  - Text: "Updated Q1 2025 | v2.0" at (4300, 100), 12px, #90CAF9

### Frame 2: Values Grid

- **Position**: (50, 220)
- **Size**: 4700x1500px
- **Background**: Warm White (#FFF8F0)
- **Elements**:
  - Header: "Our Values" at (100, 240), 28px bold, #1A237E
  - Value Card 1 at (100, 300):
    - Rectangle 1450x600px, fill #FFFFFF, left border 4px #FF6B6B, corner radius 12px, shadow
    - Title: "01 — LEARNER FIRST" (22px bold, #1B1B1B)
    - Statement: "Every decision starts with 'how does this help the learner?' Not 'how does this help us?'" (16px, #1B1B1B)
    - Section "We Do:" (14px bold, #2E7D32):
      - "Call 5 learners every week to understand their experience"
      - "Share NPS scores in every all-hands — no hiding from feedback"
      - "Ship learner-reported bugs within 24 hours"
    - Section "We Don't:" (14px bold, #C62828):
      - "Hide behind support ticket queues"
      - "Prioritize internal tooling over learner-facing features"
    - Quote: "'The learner is the source of all truth.' — Maya, CEO" (16px italic, #616161)
  - Value Card 2 at (1600, 300):
    - Left border #00897B
    - Title: "02 — SPEED OVER PERFECTION"
    - Statement: "Ship fast, iterate faster. A good feature in learners' hands today beats a perfect feature next month."
    - We Do: "Ship MVPs in 2-week cycles", "Decide with 70% information", "Celebrate shipping, not planning"
    - We Don't: "Gold-plate before launching", "Require consensus before acting"
    - Quote: "'We shipped v2 with a known billing edge case. Fixed it Wednesday. 99% of users had the feature 2 weeks earlier.'"
  - Value Card 3 at (3100, 300):
    - Left border #F9A825
    - Title: "03 — RADICAL TRANSPARENCY"
    - Statement: "Share by default, not by request. Financial performance, decisions, and failures are visible to everyone."
    - We Do: "Share investor updates with the whole team", "Public blameless post-mortems", "Visible salary bands"
    - We Don't: "Hoard info in leadership meetings", "Sugarcoat financial challenges"
    - Quote: "'When we missed Q3 targets by 20%, we shared it same day. Zero attrition.'"
  - Value Card 4 at (100, 950):
    - Left border #6A1B9A
    - Title: "04 — BUILD TOGETHER"
    - Statement: "No hero culture. We win as teams. Cross-functional collaboration is the default, not the exception."
    - We Do: "Cross-functional project teams", "Pair programming for complex features", "Team retrospectives every sprint"
    - We Don't: "Celebrate individual heroics over team effort", "Silo information by department"
    - Quote: "'Our best features came from a designer and an engineer sitting together, not from a PRD.'"
  - Value Card 5 at (1600, 950):
    - Left border #1565C0
    - Title: "05 — LEARN & TEACH"
    - Statement: "We are a learning company building for learners. Every team member is both student and teacher."
    - We Do: "Weekly learning sessions (team members teach)", "Conference budget for everyone", "Document everything for the next person"
    - We Don't: "Gatekeep knowledge", "Skip documentation because 'I'll remember'"
    - Quote: "'Our Slack has more bookmarks to internal docs than to Stack Overflow.'"

### Frame 3: Anti-Values

- **Position**: (50, 1770)
- **Size**: 2300x400px
- **Background**: Warm Red Tint (#FFF0F0)
- **Elements**:
  - Header: "What We DON'T Do" at (100, 1790), 22px bold, #C62828
  - Bullet list (16px, #C62828):
    - "Presenteeism — we measure outcomes, not hours logged"
    - "Hero culture — sustainable pace over midnight heroics"
    - "'Just checking in' management — trust adults to manage their time"
    - "Building in stealth — if learners can't see it, why are we building it?"
    - "Meeting marathons — if it can be a Loom, don't schedule a meeting"

### Frame 4: How We Decide

- **Position**: (2400, 1770)
- **Size**: 2350x400px
- **Background**: Cool Blue (#F0F4FF)
- **Elements**:
  - Header: "How We Decide" at (2450, 1790), 22px bold, #1A237E
  - Decision framework (16px, #1B1B1B):
    - "Model: Owner decides after consultation (not consensus)"
    - "Every decision has ONE owner who makes the final call"
    - "Disagreements: Disagree and commit — voice concern, then execute"
    - "Escalation: Direct report → Manager → CEO (rare)"
    - "Speed target: Most decisions in <48 hours"
    - "Reversible decisions: Bias toward action"
    - "Irreversible decisions: Require CEO + 1 VP alignment"

### Frame 5: How We Communicate

- **Position**: (50, 2220)
- **Size**: 2300x400px
- **Background**: White (#FFFFFF), border 1px #E0E0E0
- **Elements**:
  - Header: "How We Communicate" at (100, 2240), 22px bold, #1A237E
  - Norms list (16px, #1B1B1B):
    - "Async-first: Write it down before scheduling a call"
    - "Loom for demos and walkthroughs"
    - "Slack for quick questions (expect response within 4 hours)"
    - "Linear for tasks and projects"
    - "Notion for documentation and decisions"
    - "Meetings: Agenda required, 25-min default, notes shared after"
    - "Feedback: Direct, specific, and timely — never saved for reviews"

### Frame 6: Our Rituals

- **Position**: (2400, 2220)
- **Size**: 2350x400px
- **Background**: White (#FFFFFF), border 1px #E0E0E0
- **Elements**:
  - Header: "Our Rituals" at (2450, 2240), 22px bold, #1A237E
  - Rituals grid (16px, #1B1B1B):
    - "Monday: Async kickoff doc (team goals for the week)"
    - "Wednesday: Optional social call (no work talk)"
    - "Friday: Ship log — what went live this week"
    - "Biweekly: Sprint retro (what worked, what didn't)"
    - "Monthly: All-hands (metrics, wins, challenges, Q&A)"
    - "Quarterly: In-person offsite (strategy + team bonding)"
    - "Annual: Hackathon week (build anything, present Friday)"
  - Sticky note: "We ring a virtual bell in Slack when something ships" at (4200, 2450), 250x100, fill #E8F5E9

## Connectors & Flow

No explicit connectors — the grid layout is self-explanatory. Values are the main content; supporting sections provide operational context.

## Variations

1. **Onboarding version**: Add "Your First Week" section with links to key docs, people to meet, first tasks
2. **Recruiting version**: Remove internal details, add "Why Join Us" section, team photos, benefits
3. **Remote-first emphasis**: Expand communication norms, add timezone expectations, async tool stack
4. **Enterprise version**: More formal language, add compliance/ethics section, manager guidelines
5. **Minimal version**: Values only (3 cards), skip supporting sections — for quick reference

## Build Instructions

1. Create board (4800x3200px, background #FFF8F0)
2. Build header with logo, title, culture one-liner, and update date
3. Create value cards (5 cards in 3+2 grid layout)
4. For each value: name, statement, "we do" behaviors, "we don't" behaviors, illustrative quote
5. Create anti-values section (red tint, explicit rejections)
6. Create decision framework section (how we make decisions)
7. Create communication norms section (channels, expectations, meeting rules)
8. Create rituals section (weekly, monthly, quarterly cadence)
9. Review: Would a new hire know how to behave after reading this?
10. Verify values are specific enough that they could NOT apply to a random company

## Tips & Best Practices

- Values must be behavioral, not aspirational. "We ship fast" is behavioral. "We value innovation" is not.
- Include real stories. Abstract values become concrete when illustrated with actual incidents.
- Anti-values are as important as values. They define the cultural boundary.
- Update the board when culture actually evolves (new rituals, refined values) — not just on a schedule.
- Test the board: show it to a candidate and ask "does this feel like a real company?" If they say it feels generic, rewrite.
- Each value should have a tension or trade-off. If a value costs nothing, it is not a value — it is a platitude.
