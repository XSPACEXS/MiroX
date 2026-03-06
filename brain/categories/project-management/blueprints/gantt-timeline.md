# Gantt Timeline

## Overview

- **Purpose**: Provide a precise, time-based project schedule showing task durations, start/end dates, dependencies between tasks, resource assignments, and milestone markers. The Gantt chart is the most detailed project management view, translating a project plan into a day-by-day or week-by-week visual timeline. It answers: "What needs to happen, in what order, by whom, and by when?"
- **Best For**: Project managers building detailed schedules, construction and engineering projects with hard dependencies, client-facing project timelines with contractual deadlines, program managers coordinating multiple parallel workstreams
- **Complexity**: Advanced
- **Board Size**: 6000x4000px (extra-wide to show 12-week timeline with task detail)

## Color Scheme

| Role                | Color           | Hex     |
| ------------------- | --------------- | ------- |
| Primary             | Navy Blue       | #0D47A1 |
| Phase 1: Foundation | Teal            | #00796B |
| Phase 2: Core Build | Steel Blue      | #1565C0 |
| Phase 3: Polish     | Amber           | #F9A825 |
| Phase 4: Launch     | Coral           | #E64A19 |
| Milestone           | Violet          | #6A1B9A |
| Critical Path       | Crimson         | #C62828 |
| Completed           | Emerald         | #2E7D32 |
| Resource Overload   | Orange          | #EF6C00 |
| Background          | Off-White       | #FAFAFA |
| Grid Lines          | Light Gray      | #E0E0E0 |
| Text                | Charcoal        | #212121 |
| Weekend Shading     | Very Light Gray | #F5F5F5 |

## Board Layout

The board has a task list panel on the left and a timeline grid on the right. A resource allocation heatmap sits below the main chart. A legend panel is in the top-right.

```
+-------------------+-----------------------------------------------------------+
|    TASK LIST      |                    TIMELINE GRID                          |
|    (Name, Owner,  |   W1  |  W2  |  W3  |  W4  |  W5  |  W6  |  W7  | ...  |
|     Duration)     |       |      |      |      |      |      |      |      |
+-------------------+-------+------+------+------+------+------+------+------+
| Phase 1 header    |  [======task bar======]                                  |
|   Task 1.1        |  [====]                                                  |
|   Task 1.2        |       [====]                                             |
|   Task 1.3        |            [====]  *milestone                            |
+-------------------+-------+------+------+------+------+------+------+------+
| Phase 2 header    |                    [===========task bars============]    |
|   Task 2.1        |                    [=====]                               |
|   Task 2.2        |                          [=====]                         |
+-------------------+-------+------+------+------+------+------+------+------+
| RESOURCE HEATMAP  |  [load indicators per week per resource]                |
+-------------------+-----------------------------------------------------------+

Positions:
  Task List:       (50, 200) to (1400, 3200)
  Timeline Grid:   (1450, 200) to (5950, 3200)
  Resource Heatmap: (50, 3300) to (5950, 3950)
  Title Bar:       (50, 50) to (5950, 190)
  Legend:           (4500, 50) to (5950, 190)
```

## Frames & Sections

### Frame 0: Title Bar & Legend

- **Position**: Top, full width
- **Size**: 5900x140px
- **Background**: Navy Blue (#0D47A1)
- **Elements**:
  - Project name: "Customer Portal Redesign — Detailed Schedule" (font 22, bold, white)
  - Date range: "April 1 — June 26, 2026 (12 weeks)" (font 14, white)
  - Legend (right section):
    - Teal bar: "Phase 1: Foundation"
    - Blue bar: "Phase 2: Core Build"
    - Amber bar: "Phase 3: Polish"
    - Coral bar: "Phase 4: Launch"
    - Violet diamond: "Milestone"
    - Red dotted line: "Critical Path"
    - Green checkmark: "Complete"

### Frame 1: Task List Panel

- **Position**: Left column
- **Size**: 1350x3000px
- **Background**: White with subtle grid lines
- **Elements**:
  - Column headers: "Task | Owner | Duration | Status" (font 12, bold, Navy)
  - **Phase 1: Foundation** (Teal header bar, font 14, bold, white):
    1. "1.1 Project kickoff & team alignment" | Jordan | 2d | Complete
    2. "1.2 Requirements finalization" | Jordan + Lisa | 5d | Complete
    3. "1.3 Architecture design review" | Priya | 3d | Complete
    4. "1.4 Development environment setup" | Maria | 3d | Complete
    5. "1.5 Design system audit & updates" | Sarah | 4d | In Progress
    - MILESTONE: "Foundation Complete" | Apr 14
  - **Phase 2: Core Build** (Steel Blue header bar): 6. "2.1 Subscription API — plan details endpoint" | Priya | 5d | Not Started 7. "2.2 Subscription API — upgrade/downgrade" | Jordan | 8d | Not Started 8. "2.3 Subscription API — cancellation flow" | Priya | 5d | Not Started 9. "2.4 Payment integration — Stripe v3" | Jordan | 5d | Not Started 10. "2.5 Frontend — plan details page" | Alex | 5d | Not Started 11. "2.6 Frontend — upgrade/downgrade flow" | Alex + Ravi | 8d | Not Started 12. "2.7 Frontend — cancellation experience" | Ravi | 5d | Not Started 13. "2.8 Email notification templates" | Maria | 3d | Not Started 14. "2.9 Integration testing suite" | Maria + Priya | 5d | Not Started
    - MILESTONE: "Feature Complete" | May 22
  - **Phase 3: Polish** (Amber header bar): 15. "3.1 Usability testing (8 participants)" | Sarah + Wei | 5d | Not Started 16. "3.2 Bug fixes from usability testing" | Alex + Ravi | 5d | Not Started 17. "3.3 Performance optimization" | Priya + Maria | 5d | Not Started 18. "3.4 Accessibility audit & remediation" | Ravi | 5d | Not Started 19. "3.5 Security review & penetration testing" | Maria | 3d | Not Started
    - MILESTONE: "Release Candidate" | Jun 12
  - **Phase 4: Launch** (Coral header bar): 20. "4.1 Staging deployment & smoke testing" | Maria | 2d | Not Started 21. "4.2 Customer support training" | Lisa | 3d | Not Started 22. "4.3 Marketing launch preparation" | Mike + Dana | 5d | Not Started 23. "4.4 Beta rollout (10% of users)" | Jordan + Maria | 5d | Not Started 24. "4.5 Monitor metrics & resolve issues" | All | 3d | Not Started 25. "4.6 Full production rollout" | Maria + Jordan | 2d | Not Started
    - MILESTONE: "GA Launch" | Jun 26

### Frame 2: Timeline Grid

- **Position**: Right of task list
- **Size**: 4500x3000px
- **Background**: White with grid overlay
- **Elements**:
  - **Time header** (top row):
    - 12 weekly columns: "W1 (Apr 1)" through "W12 (Jun 22)"
    - Day markers within each week (M/T/W/T/F — weekdays only)
    - Weekend columns shaded Very Light Gray (#F5F5F5)
  - **Task bars** (horizontal colored rectangles aligned to task list rows):
    - Phase 1 bars (Teal #00796B):
      - 1.1: W1 Mon-Tue (2d, filled green = complete)
      - 1.2: W1 Wed - W2 Tue (5d, filled green = complete)
      - 1.3: W2 Wed - W2 Fri (3d, filled green = complete)
      - 1.4: W2 Wed - W3 Tue (3d, parallel with 1.3, filled green = complete)
      - 1.5: W3 Wed - W4 Mon (4d, partially filled = in progress, 60%)
    - Phase 2 bars (Steel Blue #1565C0):
      - 2.1: W4 Tue - W5 Mon (5d) — depends on 1.5
      - 2.2: W5 Tue - W6 Thu (8d) — depends on 2.1
      - 2.3: W6 Fri - W7 Thu (5d) — depends on 2.1, parallel with 2.2
      - 2.4: W6 Fri - W7 Thu (5d) — depends on 2.2, CRITICAL PATH
      - 2.5: W5 Tue - W5 Fri + W6 Mon (5d) — depends on 2.1 + design ready
      - 2.6: W6 Tue - W7 Thu (8d) — depends on 2.2 + 2.5
      - 2.7: W7 Fri - W8 Thu (5d) — depends on 2.3
      - 2.8: W7 Fri - W8 Tue (3d) — depends on 2.2 + 2.3
      - 2.9: W8 Wed - W9 Tue (5d) — depends on 2.4-2.8
    - Phase 3 bars (Amber #F9A825):
      - 3.1: W9 Wed - W10 Tue (5d) — depends on 2.9
      - 3.2: W10 Wed - W11 Tue (5d) — depends on 3.1
      - 3.3: W10 Wed - W11 Tue (5d) — parallel with 3.2
      - 3.4: W11 Wed - W12 Tue (5d) — depends on 3.2
      - 3.5: W11 Wed - W11 Fri (3d) — parallel with 3.4
    - Phase 4 bars (Coral #E64A19):
      - 4.1: W10 Wed - W10 Thu (2d) — depends on 3.3 + 3.5
      - 4.2: W10 Fri - W11 Tue (3d) — parallel
      - 4.3: W10 Wed - W11 Tue (5d) — parallel
      - 4.4: W11 Wed - W12 Tue (5d) — depends on 4.1
      - 4.5: W12 Wed - W12 Fri (3d) — depends on 4.4
      - 4.6: W12 Thu - W12 Fri (2d) — depends on 4.5

  - **Milestone markers** (Violet diamonds on timeline):
    - Apr 14 (end of W2): "Foundation Complete" (diamond)
    - May 22 (end of W8): "Feature Complete" (diamond)
    - Jun 12 (end of W10+): "Release Candidate" (diamond)
    - Jun 26 (end of W12): "GA Launch" (diamond, larger)

  - **Dependency arrows** (thin lines with arrowheads between task bars):
    - 1.5 --> 2.1 (finish-to-start)
    - 2.1 --> 2.2, 2.3, 2.5 (fan-out)
    - 2.2 --> 2.4, 2.6 (finish-to-start)
    - 2.3 --> 2.7, 2.8 (finish-to-start)
    - 2.4 through 2.8 --> 2.9 (fan-in)
    - 2.9 --> 3.1 (finish-to-start)
    - 3.1 --> 3.2 (finish-to-start)
    - 3.2 --> 3.4 (finish-to-start)
    - (and so on through Phase 4)

  - **Critical path highlighting** (red dotted outline on critical path tasks):
    - 1.5 --> 2.1 --> 2.2 --> 2.4 --> 2.9 --> 3.1 --> 3.2 --> 3.4 --> 4.4 --> 4.5 --> 4.6
    - These tasks have zero float; any delay pushes the launch date

  - **Today marker** (vertical dashed line at current date, red, labeled "TODAY — Apr 8")

### Frame 3: Resource Allocation Heatmap

- **Position**: Bottom, full width
- **Size**: 5900x650px
- **Background**: White with Navy top border (3px)
- **Elements**:
  - Header: "Resource Allocation" (font 18, bold, Navy #0D47A1)
  - **Resource rows** (one per team member, aligned to timeline grid):
    - **Priya**: W1-W2: [80%], W3: [40%], W4-W5: [100%], W6-W7: [100%], W8-W9: [80%], W10-W11: [60%]
      - Color coding: Green (<=80%), Amber (80-100%), Red (>100%)
    - **Jordan**: W1-W2: [100%], W3: [20%], W4: [40%], W5-W7: [100%], W8: [60%], W9-W12: [80%]
    - **Sarah**: W1-W2: [40%], W3-W4: [80%], W5-W8: [20%], W9-W10: [100%], W11-W12: [40%]
    - **Alex**: W1-W4: [20%], W5-W7: [100%], W8-W9: [60%], W10-W11: [100% RED - OVERLOADED], W12: [40%]
    - **Ravi**: W1-W4: [20%], W5: [40%], W6-W8: [100%], W9: [40%], W10-W12: [80%]
    - **Maria**: W2-W3: [100%], W4-W6: [40%], W7-W8: [80%], W9: [60%], W10-W12: [100%]
  - **Overload alerts** (orange warning badges):
    - "Alex: W10-W11 overloaded (bug fixes + accessibility). Suggest shifting 3.4 to Sarah."
    - "Maria: W10-W12 fully loaded (deployment + monitoring). Confirm no other commitments."
  - **Utilization summary** (bottom row):
    - Average team utilization: 72% | Peak week: W6 (89%) | Lowest week: W3 (48%)

## Connectors & Flow

**Task dependencies** (thin gray arrows between task bars in the timeline, 1px):

- All finish-to-start dependencies as described in the task bars section
- Total: 22 dependency connections

**Critical path** (red dotted overlay on critical path task bars and their dependency arrows):

- Highlighted chain: 1.5 --> 2.1 --> 2.2 --> 2.4 --> 2.9 --> 3.1 --> 3.2 --> 3.4 --> 4.4 --> 4.5 --> 4.6
- Critical path length: 52 working days (10.4 weeks)
- Total float on non-critical tasks: ranges from 2 to 8 days

**Milestone connections** (Violet vertical dashed lines from milestone diamonds down to resource heatmap):

- Shows which resources are most loaded at each milestone

## Example Content

The Gantt chart details the execution plan for "Customer Portal Redesign" — the same project shown at a higher level in the Roadmap template. This is the detailed execution schedule for Q2 2026 (April 1 through June 26).

**Project parameters**:

- Duration: 12 weeks (60 working days)
- Team: 6 people
- Total effort: ~280 person-days
- Average utilization target: 75-80%
- Critical path: 52 days (4 days of total float before deadline)

**Key scheduling decisions**:

- Phase 1 tasks 1.3 and 1.4 run in parallel (different owners)
- Phase 2 frontend work starts 1 week after backend (staggered dependency)
- Phase 3 usability testing and performance optimization run in parallel
- Phase 4 beta rollout includes a built-in 3-day monitoring buffer
- No work scheduled during company all-hands (Week 6, Friday)

**Risk areas identified by the schedule**:

- Critical path has only 4 days of float — any delay to Stripe integration (task 2.4) directly impacts launch date
- Alex is overloaded in weeks 10-11 — need to redistribute or adjust timelines
- Security review (task 3.5) is on the critical path but depends on external penetration testing vendor availability

## Variations

1. **Software Development Gantt**: Replace phases with SDLC stages (Design, Development, Testing, Deployment). Add automated CI/CD checkpoints as milestones. Include code review dependencies between tasks.

2. **Construction Project Gantt**: Phases become site prep, foundation, framing, MEP, finishing. Resources include subcontractors. Add weather delay buffers. Include material delivery lead times as predecessor tasks.

3. **Event Planning Gantt**: Phases become venue, content, marketing, logistics, day-of. Milestones are booking deadlines, content lock dates, and registration targets. Resources include vendors and internal staff.

4. **Simplified 4-Week Gantt**: Reduce to 20 working days for a short sprint-level view. Show only 8-12 tasks. Remove resource heatmap. Useful for small team projects or proof-of-concepts.

## Build Instructions

1. **Create canvas**: 6000x4000px, background #FAFAFA.
2. **Build title bar**: Full-width frame (5900x140px). Navy background. Add project name, date range, and legend.
3. **Create task list panel**: Left frame (1350x3000px). Build a table structure with phase header rows (colored bars) and task rows (white with alternating gray stripes). Add task names, owners, durations, and status indicators.
4. **Create timeline grid**: Right frame (4500x3000px). Draw weekly column dividers with day subdivisions. Shade weekends. Add week labels at top.
5. **Draw task bars**: For each task, create a horizontal rectangle positioned according to start/end dates. Color by phase. For completed tasks, fill with green. For in-progress tasks, show partial fill.
6. **Add dependency arrows**: Draw thin arrows from the end of predecessor tasks to the start of successor tasks. Use a routing algorithm to avoid overlap.
7. **Highlight critical path**: Add a red dotted border to all critical path task bars. Make their dependency arrows red.
8. **Place milestones**: Add Violet diamond shapes at milestone dates. Draw vertical dashed lines from diamonds through the timeline.
9. **Build resource heatmap**: Bottom frame (5900x650px). Create a row for each team member with weekly cells. Color cells by utilization percentage (green/amber/red). Add overload alerts.
10. **Add today marker**: Red dashed vertical line at the current date position.
11. **Review**: Verify all dependencies are logically correct (no circular dependencies). Check that the critical path calculation is accurate. Confirm resource allocations don't exceed 100% without flagging. Validate that milestone dates align with task completions.

## Tips & Best Practices

- **Identify the critical path first**: This is the longest chain of dependent tasks. All schedule optimization efforts should focus here. Shortening a non-critical task does nothing for the launch date.
- **Build in buffers, not padding**: Don't inflate task estimates. Instead, add explicit buffer tasks at the end of each phase (e.g., "Phase 2 buffer: 3 days"). This is transparent and manageable.
- **Update weekly**: Move the "Today" marker. Update task completion percentages. Re-assess the critical path. A Gantt chart that isn't updated weekly is a decoration, not a tool.
- **Resource leveling is essential**: The heatmap reveals overloaded team members. Resolve these BEFORE the sprint starts, not when someone burns out mid-project.
- **Limit to 25-30 tasks**: A Gantt with 100+ tasks is unreadable. If your project is that large, break it into sub-project Gantt charts and use the Roadmap for the combined view.
- **Use finish-to-start dependencies by default**: Start-to-start and finish-to-finish dependencies add complexity. Only use them when genuinely needed (e.g., "testing starts when development starts, not when it finishes").
- **Show the critical path to stakeholders**: When someone asks "why can't we launch earlier?", point to the critical path. It's an objective answer, not an opinion.
- **Track actual vs. planned**: Add a second, thinner bar below each task showing actual progress. The gap between planned and actual is the project's drift.
