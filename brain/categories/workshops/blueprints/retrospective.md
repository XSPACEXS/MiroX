# Sprint Retrospective — Sailboat Metaphor

## Overview

- **Purpose**: A structured sprint retrospective board using the Sailboat metaphor, where the team reflects on what propelled them forward (wind), what held them back (anchors), what risks lie ahead (rocks), and what destination they are sailing toward (island). Includes sections for action items, voting, and follow-up tracking from previous retros.
- **Best For**: Scrum Masters, Agile coaches, and engineering teams running end-of-sprint retrospectives with 4-12 participants.
- **Complexity**: Medium
- **Board Size**: 3500 x 2500px

## Color Scheme

| Role       | Color         | Hex     |
| ---------- | ------------- | ------- |
| Primary    | Deep Purple   | #4A148C |
| Secondary  | Bright Coral  | #FF5252 |
| Accent     | Electric Blue | #2979FF |
| Background | Warm White    | #FFF8E1 |
| Text       | Dark Grey     | #212121 |

## Board Layout

The board is organized around a central sailboat illustration (metaphorical, not literal art). The four quadrants of the metaphor radiate outward from the boat. An action items section sits at the bottom. Previous retro follow-up is at the top-right.

```
+------------------------------------------------------------------+
|  [ RETRO TITLE & SPRINT INFO ]          [ PREV RETRO FOLLOW-UP ] |
+------------------------------------------------------------------+
|                                                                    |
|  +--------+                 +----------+                          |
|  | WIND   |   [SAILBOAT]   | ISLAND   |                          |
|  | (What  |   [  center ]  | (Goals & |                          |
|  | helped)|                 | Vision)  |                          |
|  +--------+                 +----------+                          |
|                                                                    |
|  +--------+                 +----------+                          |
|  | ANCHOR |                 | ROCKS    |                          |
|  | (What  |                 | (Risks   |                          |
|  | slowed)|                 | Ahead)   |                          |
|  +--------+                 +----------+                          |
|                                                                    |
|  +--ACTION ITEMS-------------------------------------------+      |
|  | Owner | Action | Due Date | Status                      |      |
|  +----------------------------------------------------------+     |
|                                                                    |
|  [ PARKING LOT ]          [ FACILITATOR NOTES ]                   |
+------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Title & Sprint Information

- **Position**: Top-left, spanning 2/3 width
- **Size**: 2400 x 350px
- **Background**: Deep Purple (#4A148C)
- **Elements**:
  - Text block: "Sprint 14 Retrospective" — font size 42, bold, white
  - Text block: "Team: Platform Engineering | Sprint: Feb 17 - Mar 6, 2026" — font size 20, white, 80% opacity
  - Text block: "Facilitator: Sarah Chen | Participants: 8 | Duration: 45 min" — font size 16, pale mint (#E0F2F1)
  - Text block: "Sprint Goal: 'Ship the new billing API and migrate 3 enterprise clients'" — font size 16, italic, Bright Coral (#FF5252)
  - Shape: Horizontal line, white, 2px, full width
  - Sticky note (yellow, small): "Ground rules: One voice at a time | No blame | Focus on systems, not people | Vegas rule"

### Frame 2: Previous Retro Follow-Up

- **Position**: Top-right
- **Size**: 1000 x 350px
- **Background**: Pale Mint (#E0F2F1)
- **Elements**:
  - Text block: "Previous Retro Actions" — font size 22, bold, Deep Purple
  - Sticky note (green, #C8E6C9): "DONE: Set up automated deployment pipeline — completed by Marcus, Feb 20"
  - Sticky note (green, #C8E6C9): "DONE: Add Slack alerts for failed CI builds — completed by Lin, Feb 22"
  - Sticky note (orange, #FFE0B2): "IN PROGRESS: Reduce PR review time to < 24 hours — avg is now 18 hrs (was 36)"
  - Sticky note (red, #FFCDD2): "NOT STARTED: Document onboarding runbook — deferred due to sprint pressure"
  - Text block: "2 of 4 actions completed | 1 in progress | 1 deferred" — font size 12, grey

### Frame 3: Wind — What Helped Us Move Forward

- **Position**: Left side, middle
- **Size**: 1400 x 900px
- **Background**: Light green (#E8F5E9) with wind icon watermark
- **Elements**:
  - Text block: "Wind — What Helped Us" — font size 28, bold, Deep Purple
  - Text block: "What pushed us forward this sprint? What felt good?" — font size 14, italic, grey
  - Text block: "5 min silent writing | Then discuss" — font size 12, Electric Blue
  - Sticky note (green, #C8E6C9): "The new CI pipeline cut our deploy time from 45 min to 12 min — huge productivity boost"
  - Sticky note (green, #C8E6C9): "Pairing sessions between Marcus and the new hire (Priya) were incredibly effective for knowledge transfer"
  - Sticky note (green, #C8E6C9): "Product gave us clear, stable requirements this sprint — no mid-sprint scope changes for once"
  - Sticky note (green, #C8E6C9): "Daily standups were tight and focused — 10 min max, everyone prepared"
  - Sticky note (green, #C8E6C9): "The team lunch on Thursday boosted morale after the stressful billing migration"
  - Sticky note (green, #C8E6C9): "Slack channel for quick questions reduced meeting requests by ~30%"
  - Shape: 6 blue dots scattered on sticky notes (representing votes from dot-voting exercise)
  - Text block: "6 items | Top voted: CI pipeline improvement (4 votes)" — font size 12

### Frame 4: Island — Our Destination / Vision

- **Position**: Right side, middle
- **Size**: 1400 x 900px
- **Background**: Light blue (#E3F2FD) with island icon watermark
- **Elements**:
  - Text block: "Island — Where We Are Heading" — font size 28, bold, Deep Purple
  - Text block: "What does our ideal state look like? What are we sailing toward?" — font size 14, italic, grey
  - Sticky note (blue, #BBDEFB): "Zero-downtime deployments for all services by end of Q1"
  - Sticky note (blue, #BBDEFB): "All 12 enterprise clients migrated to the new billing API by April 15"
  - Sticky note (blue, #BBDEFB): "Full test coverage (>90%) on the billing service — currently at 72%"
  - Sticky note (blue, #BBDEFB): "Self-service onboarding: new engineers productive within 1 week, not 3"
  - Sticky note (blue, #BBDEFB): "Team health score > 4.0 (currently 3.6 on the Spotify Health Check)"
  - Text block: "5 goals identified | Aligned with Q1 OKRs" — font size 12

### Frame 5: Anchor — What Held Us Back

- **Position**: Left side, below wind
- **Size**: 1400 x 900px
- **Background**: Light red (#FFEBEE) with anchor icon watermark
- **Elements**:
  - Text block: "Anchor — What Slowed Us Down" — font size 28, bold, Deep Purple
  - Text block: "What dragged us? What frustrated the team?" — font size 14, italic, grey
  - Text block: "5 min silent writing | Then discuss" — font size 12, Electric Blue
  - Sticky note (red, #FFCDD2): "The billing API documentation was outdated — spent 2 days figuring out undocumented edge cases"
  - Sticky note (red, #FFCDD2): "PR reviews took too long on the migration PRs — 3 PRs sat for 2+ days without review"
  - Sticky note (red, #FFCDD2): "Flaky integration tests in the staging environment blocked deployments twice"
  - Sticky note (red, #FFCDD2): "Context switching between billing migration and ad-hoc support tickets for existing clients"
  - Sticky note (red, #FFCDD2): "The shared staging environment was down for 6 hours on Tuesday — no one was notified"
  - Sticky note (orange, #FFE0B2): "Sprint planning meeting ran over by 30 min — we spent too long estimating edge cases"
  - Shape: 5 blue dots on sticky notes (votes)
  - Text block: "6 items | Top voted: Flaky tests (5 votes), PR review delay (4 votes)" — font size 12

### Frame 6: Rocks — Risks Ahead

- **Position**: Right side, below island
- **Size**: 1400 x 900px
- **Background**: Light orange (#FFF3E0) with rocks icon watermark
- **Elements**:
  - Text block: "Rocks — Risks & Dangers Ahead" — font size 28, bold, Deep Purple
  - Text block: "What could sink us? What dangers do we see coming?" — font size 14, italic, grey
  - Sticky note (orange, #FFE0B2): "Only Marcus knows the billing reconciliation logic — single point of failure if he is out"
  - Sticky note (orange, #FFE0B2): "Enterprise client #4 (GlobalFinance) has custom requirements that could derail the standard migration path"
  - Sticky note (orange, #FFE0B2): "Q2 roadmap has 3 large features — if we do not finish the migration by April, we will be underwater"
  - Sticky note (orange, #FFE0B2): "Team is showing signs of fatigue — 2 people mentioned burnout in 1-on-1s"
  - Sticky note (orange, #FFE0B2): "Security audit scheduled for April 1 — billing service needs to pass PCI compliance"
  - Shape: 4 blue dots on sticky notes (votes)
  - Text block: "5 risks | Top voted: Single point of failure (5 votes), Burnout (3 votes)" — font size 12

### Frame 7: Action Items

- **Position**: Bottom, spanning full width
- **Size**: 3400 x 600px
- **Background**: White with Deep Purple border (3px)
- **Elements**:
  - Text block: "Action Items" — font size 28, bold, Deep Purple
  - Text block: "SMART actions: Specific, Measurable, Assignable, Realistic, Time-bound" — font size 14, italic, grey
  - Table with 5 columns: Owner | Action | Category | Due Date | Status
  - Row 1: "Lin | Fix the top 5 flaky integration tests in staging | Anchor | March 13 | To Do"
  - Row 2: "Sarah (SM) | Implement 24-hour SLA for PR reviews — add Slack bot reminder | Anchor | March 10 | To Do"
  - Row 3: "Marcus + Priya | Pair on billing reconciliation — Priya documents as she learns | Rock | March 20 | To Do"
  - Row 4: "Sarah (SM) | Schedule team wellness check-in and propose no-meeting Wednesday | Rock | March 9 | To Do"
  - Row 5: "Team | Celebrate CI pipeline win — team picks a fun activity | Wind | March 13 | To Do"
  - Sticky note (Electric Blue): "Review these actions at next retro — add to Sprint 15 backlog"
  - Text block: "5 actions committed | All assigned | All time-bound" — font size 12, green

### Frame 8: Parking Lot

- **Position**: Bottom-left corner
- **Size**: 800 x 400px
- **Background**: Soft Yellow (#FFF9C4)
- **Elements**:
  - Text block: "Parking Lot" — font size 20, bold
  - Text block: "Items to discuss later or escalate" — font size 12, grey
  - Sticky note (yellow): "Should we invest in a dedicated staging environment? Bring to eng-wide architecture review."
  - Sticky note (yellow): "Explore contract testing as alternative to integration tests — research spike for Sprint 16"
  - Sticky note (yellow): "Discuss with Product: Can we pause ad-hoc support tickets during migration sprints?"

### Frame 9: Facilitator Notes

- **Position**: Bottom-right corner
- **Size**: 800 x 400px
- **Background**: Deep Purple (#4A148C) with 15% opacity
- **Elements**:
  - Text block: "Facilitator Guide" — font size 20, bold, Deep Purple
  - Text block: "Agenda:" — font size 14, bold
  - Text block: "1. Check-in & set the stage (3 min)" — font size 12
  - Text block: "2. Review previous retro actions (5 min)" — font size 12
  - Text block: "3. Silent writing: Wind + Anchor + Rocks + Island (5 min)" — font size 12
  - Text block: "4. Share & discuss each quadrant (15 min — 4 min each)" — font size 12
  - Text block: "5. Dot voting: 3 votes per person (3 min)" — font size 12
  - Text block: "6. Define action items for top-voted themes (10 min)" — font size 12
  - Text block: "7. Close & check-out (4 min)" — font size 12
  - Text block: "Total: 45 minutes" — font size 14, bold, Bright Coral

## Connectors & Flow

- Curved arrows from Wind and Anchor quadrants converging on the central Sailboat area (metaphorical)
- Arrow from Island pointing forward (representing the goal)
- Arrows from Rocks pointing inward toward the boat (representing hazards)
- Dashed arrow from each quadrant's top-voted items to the Action Items table
- Arrow from Previous Retro Follow-Up to current retro title (continuity)

## Example Content

All content is pre-filled for Sprint 14 of a Platform Engineering team:

- **Sprint**: Feb 17 - Mar 6, 2026, 8-person team
- **Sprint Goal**: Ship billing API + migrate 3 enterprise clients
- **6 Wind items**: CI pipeline improvement, pairing sessions, stable requirements, focused standups, team lunch, async Slack channel
- **6 Anchor items**: Outdated docs, slow PR reviews, flaky tests, context switching, staging downtime, long planning meeting
- **5 Rock items**: Single point of failure, custom client requirements, roadmap pressure, burnout signs, security audit
- **5 Island items**: Zero-downtime deploys, client migration completion, test coverage, self-service onboarding, team health score
- **5 Action items**: All SMART — assigned, dated, categorized
- **3 Parking lot items**: Staging environment investment, contract testing, support ticket policy
- **Previous retro**: 4 actions tracked (2 done, 1 in progress, 1 not started)

## Variations

1. **Classic 3-Column Retro**: Replace the Sailboat with three columns: "What Went Well" (green), "What Didn't Go Well" (red), "Action Items" (blue). Simpler, faster, good for teams new to retros.
2. **Start / Stop / Continue**: Three columns focused on behavioral change: what to start doing, what to stop doing, what to keep doing. More forward-looking than retrospective.
3. **4Ls Retrospective**: Liked, Learned, Lacked, Longed For — four quadrants focusing on emotional and aspirational reflection.
4. **Mad / Sad / Glad**: Emotion-based retro format — three columns with face icons. Good for surfacing team sentiment.
5. **Remote-First Version**: Add a "Check-in" icebreaker frame at the top (e.g., "Share your energy level 1-5"), expand timer instructions, and add a "Virtual High-Five" area.

## Build Instructions

1. Create board at 3500 x 2500px with Warm White (#FFF8E1) background.
2. Place the title banner (2400 x 350px) at top-left with Deep Purple background.
3. Place Previous Retro Follow-Up frame (1000 x 350px) at top-right with Pale Mint background.
4. Create the 4 quadrant frames (each 1400 x 900px) arranged in a 2x2 grid with the sailboat concept in the center:
   - Top-left: Wind (green background)
   - Top-right: Island (blue background)
   - Bottom-left: Anchor (red background)
   - Bottom-right: Rocks (orange background)
5. Add quadrant titles, instruction text, and pre-filled example sticky notes.
6. Create the Action Items frame (3400 x 600px) spanning the bottom with white background and purple border.
7. Add the Parking Lot (800 x 400px) at bottom-left and Facilitator Notes (800 x 400px) at bottom-right.
8. Draw connector arrows between quadrants and the action items table.
9. Add dot-voting placeholder circles (blue, small) on sticky notes in each quadrant.
10. Lock frame borders, titles, and facilitator notes. Leave sticky notes and action items editable.

## Tips & Best Practices

- Start with a quick check-in (energy level, one word to describe the sprint) to set the tone.
- Enforce silent writing first (5 minutes) before discussion — this ensures introverts contribute equally.
- Use Miro's built-in voting feature instead of manual dot stickers for remote teams.
- Limit action items to 3-5 per retro — more than that and nothing gets done.
- Every action item must have an owner and a due date, or it will be forgotten.
- Rotate the facilitator role each sprint to build facilitation skills across the team.
- Archive completed retro boards in a shared folder — they become a valuable record of team growth.
- If the same issue appears in 3+ retros, escalate it — the team cannot solve it alone.
- End with appreciation: ask each person to thank one teammate for something specific this sprint.
