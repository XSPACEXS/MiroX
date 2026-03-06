# User Story Mapping Board

## Overview

- **Purpose**: Organize the user experience into a two-dimensional map where user activities run horizontally (the narrative flow) and user stories are stacked vertically by priority (MVP at top, future releases below). This helps teams see the big picture, identify gaps in the user journey, and make informed scope decisions.
- **Best For**: Product managers defining scope, development teams planning releases, and stakeholders aligning on what gets built first.
- **Complexity**: Medium
- **Board Size**: 6000x3200px

## Color Scheme

| Role       | Color          | Hex     |
| ---------- | -------------- | ------- |
| Primary    | Deep Purple    | #6200EA |
| Secondary  | Indigo         | #304FFE |
| Accent     | Pink           | #F50057 |
| Background | Light Lavender | #EDE7F6 |
| Text       | Dark Gray      | #37474F |

## Board Layout

The board is a matrix. The top row contains user activities (the "backbone"). The second row contains user tasks under each activity. Below that, horizontal swim lanes represent release priorities: MVP, v2.0, v3.0, and Icebox.

```
+--------------------------------------------------------------+
|  USER STORY MAP — AutoPilot Onboarding Flow                  |
|                                                              |
|  Activity:  [Sign Up]  [Set Up Team] [Create Project] [Plan] |
|  Tasks:     ........   ............  ...............  ......  |
|  ─────────────────────────────────────────────────────────────|
|  MVP:       stories    stories       stories         stories |
|  ─────────────────────────────────────────────────────────────|
|  v2.0:      stories    stories       stories         stories |
|  ─────────────────────────────────────────────────────────────|
|  v3.0:      stories    stories       stories         stories |
|  ─────────────────────────────────────────────────────────────|
|  Icebox:    stories    stories       stories         stories |
+--------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Board Header

- **Position**: top full-width
- **Size**: 5900x200px
- **Background**: #6200EA
- **Elements**:
  - Text block: "User Story Map: AutoPilot Onboarding Flow" (font size 36, bold, #FFFFFF)
  - Text block: "Mapping the new user experience from sign-up through first successful sprint plan | Owner: Jake Reynolds (PM) | Updated: Mar 5, 2026" (font size 14, #D1C4E9)

### Frame 2: Activity Backbone

- **Position**: row below header
- **Size**: 5900x200px
- **Background**: #D1C4E9
- **Elements**:
  - Text block: "USER ACTIVITIES (Left to Right = Narrative Flow)" (font size 14, bold, #6200EA)
  - Shape (rounded rectangle, #6200EA, 350x120): **Activity 1**: "Sign Up & Onboard" (text #FFFFFF, bold)
  - Shape (rounded rectangle, #6200EA, 350x120): **Activity 2**: "Set Up Team" (text #FFFFFF, bold)
  - Shape (rounded rectangle, #6200EA, 350x120): **Activity 3**: "Create First Project" (text #FFFFFF, bold)
  - Shape (rounded rectangle, #6200EA, 350x120): **Activity 4**: "Plan First Sprint" (text #FFFFFF, bold)
  - Shape (rounded rectangle, #6200EA, 350x120): **Activity 5**: "Execute & Track" (text #FFFFFF, bold)
  - Shape (rounded rectangle, #6200EA, 350x120): **Activity 6**: "Review & Iterate" (text #FFFFFF, bold)
  - Horizontal connectors between each activity (solid arrow, #7C4DFF, 2px)

### Frame 3: User Tasks Row

- **Position**: row below activities
- **Size**: 5900x250px
- **Background**: #EDE7F6
- **Elements**:
  - Text block: "USER TASKS" (font size 14, bold, #6200EA)
  - Under Activity 1:
    - Sticky note (light purple #E1BEE7, 160x80): "Create account (email or SSO)"
    - Sticky note (light purple #E1BEE7, 160x80): "Verify email"
    - Sticky note (light purple #E1BEE7, 160x80): "Complete onboarding wizard"
  - Under Activity 2:
    - Sticky note (light purple #E1BEE7, 160x80): "Invite team members"
    - Sticky note (light purple #E1BEE7, 160x80): "Set roles & permissions"
    - Sticky note (light purple #E1BEE7, 160x80): "Configure skill tags"
  - Under Activity 3:
    - Sticky note (light purple #E1BEE7, 160x80): "Name project & set dates"
    - Sticky note (light purple #E1BEE7, 160x80): "Choose template or blank"
    - Sticky note (light purple #E1BEE7, 160x80): "Add tasks"
  - Under Activity 4:
    - Sticky note (light purple #E1BEE7, 160x80): "Define sprint length"
    - Sticky note (light purple #E1BEE7, 160x80): "Drag tasks to sprint"
    - Sticky note (light purple #E1BEE7, 160x80): "Review AI suggestions"
  - Under Activity 5:
    - Sticky note (light purple #E1BEE7, 160x80): "Update task status"
    - Sticky note (light purple #E1BEE7, 160x80): "View dashboard"
    - Sticky note (light purple #E1BEE7, 160x80): "Receive notifications"
  - Under Activity 6:
    - Sticky note (light purple #E1BEE7, 160x80): "Run retrospective"
    - Sticky note (light purple #E1BEE7, 160x80): "Review sprint metrics"
    - Sticky note (light purple #E1BEE7, 160x80): "Plan next sprint"

### Frame 4: MVP Release Lane

- **Position**: swim lane row 1
- **Size**: 5900x500px
- **Background**: #FFFFFF with left label bar (#00C853, 40px wide, text "MVP")
- **Elements**:
  - Text block: "MVP — Launch April 8, 2026" (font size 20, bold, #00C853)
  - Under Activity 1 (Sign Up):
    - Sticky note (green #C8E6C9, 200x120): "Email sign-up with email verification flow. Fields: name, email, password, company name."
    - Sticky note (green #C8E6C9, 200x120): "Google SSO sign-up (one-click). Auto-populate name and email from Google profile."
    - Sticky note (green #C8E6C9, 200x120): "3-step onboarding wizard: (1) 'What is your role?' (2) 'How big is your team?' (3) 'What do you use today?'"
  - Under Activity 2 (Set Up Team):
    - Sticky note (green #C8E6C9, 200x120): "Invite via email — bulk invite up to 20 addresses. Invited users receive link to join workspace."
    - Sticky note (green #C8E6C9, 200x120): "Basic roles: Admin and Member. Admin can manage billing and settings."
  - Under Activity 3 (Create Project):
    - Sticky note (green #C8E6C9, 200x120): "Create project: name, description, start/end dates. List view as default."
    - Sticky note (green #C8E6C9, 200x120): "Add tasks: title, description, assignee, due date, priority (Low/Medium/High)."
    - Sticky note (green #C8E6C9, 200x120): "3 starter templates: Software Sprint, Marketing Campaign, General Project."
  - Under Activity 4 (Plan Sprint):
    - Sticky note (green #C8E6C9, 200x120): "Sprint creation: set start/end date, drag tasks from backlog to sprint."
    - Sticky note (green #C8E6C9, 200x120): "AI task routing: show top 3 suggested assignees per unassigned task with approve/dismiss."
  - Under Activity 5 (Execute):
    - Sticky note (green #C8E6C9, 200x120): "Kanban board: To Do / In Progress / Done columns. Drag to update status."
    - Sticky note (green #C8E6C9, 200x120): "Basic dashboard: task completion %, sprint burndown chart."
  - Under Activity 6 (Review):
    - Sticky note (green #C8E6C9, 200x120): "Sprint summary: completed vs planned tasks, velocity chart."

### Frame 5: v2.0 Release Lane

- **Position**: swim lane row 2
- **Size**: 5900x500px
- **Background**: #FFFFFF with left label bar (#2979FF, 40px wide, text "v2.0")
- **Elements**:
  - Text block: "v2.0 — Target Q3 2026" (font size 20, bold, #2979FF)
  - Under Activity 1:
    - Sticky note (blue #BBDEFB, 200x120): "Microsoft SSO and SAML SSO for enterprise customers."
    - Sticky note (blue #BBDEFB, 200x120): "Personalized onboarding path based on role selected in wizard."
  - Under Activity 2:
    - Sticky note (blue #BBDEFB, 200x120): "Team skill tags: predefined taxonomy with custom tags. Used by AI routing."
    - Sticky note (blue #BBDEFB, 200x120): "Guest roles for external collaborators (view-only, limited edit)."
    - Sticky note (blue #BBDEFB, 200x120): "Organization-level settings: default time zone, working hours, notification preferences."
  - Under Activity 3:
    - Sticky note (blue #BBDEFB, 200x120): "Board view and Timeline (Gantt) view in addition to list view."
    - Sticky note (blue #BBDEFB, 200x120): "Task dependencies: 'blocked by' and 'blocks' relationships with visual indicators."
    - Sticky note (blue #BBDEFB, 200x120): "Custom fields: dropdown, number, date, text — user-defined per project."
  - Under Activity 4:
    - Sticky note (blue #BBDEFB, 200x120): "Capacity planning: workload view showing hours per team member per sprint."
    - Sticky note (blue #BBDEFB, 200x120): "Sprint goals: define a sprint goal statement, track % progress toward it."
  - Under Activity 5:
    - Sticky note (blue #BBDEFB, 200x120): "Time tracking: start/stop timer on tasks, manual time entry, weekly timesheet view."
    - Sticky note (blue #BBDEFB, 200x120): "Advanced notifications: configurable per-project, @mentions, smart digest."
  - Under Activity 6:
    - Sticky note (blue #BBDEFB, 200x120): "Built-in retrospective: What went well / What to improve / Action items."
    - Sticky note (blue #BBDEFB, 200x120): "Sprint comparison: side-by-side metrics across last 4 sprints."

### Frame 6: v3.0 Release Lane

- **Position**: swim lane row 3
- **Size**: 5900x400px
- **Background**: #FFFFFF with left label bar (#FF6D00, 40px wide, text "v3.0")
- **Elements**:
  - Text block: "v3.0 — Target Q1 2027" (font size 20, bold, #FF6D00)
  - Under Activity 1:
    - Sticky note (orange #FFE0B2, 200x120): "Self-serve domain claiming for enterprise SSO setup."
  - Under Activity 2:
    - Sticky note (orange #FFE0B2, 200x120): "SCIM provisioning: auto-sync users from identity providers (Okta, Azure AD)."
    - Sticky note (orange #FFE0B2, 200x120): "Hierarchical teams: departments > teams > sub-teams with nested permissions."
  - Under Activity 3:
    - Sticky note (orange #FFE0B2, 200x120): "Project templates marketplace: community-contributed templates."
    - Sticky note (orange #FFE0B2, 200x120): "Cross-project dependencies: link tasks across different projects."
  - Under Activity 4:
    - Sticky note (orange #FFE0B2, 200x120): "AI sprint planning: auto-suggest sprint scope based on team velocity and backlog priority."
  - Under Activity 5:
    - Sticky note (orange #FFE0B2, 200x120): "Automation rules: 'When status changes to Done, notify stakeholder and update parent task.'"
    - Sticky note (orange #FFE0B2, 200x120): "Public API: REST API for integrations with Slack, Jira, GitHub, Zapier."
  - Under Activity 6:
    - Sticky note (orange #FFE0B2, 200x120): "OKR tracking: link sprint outcomes to company-level objectives and key results."

### Frame 7: Icebox Lane

- **Position**: swim lane row 4
- **Size**: 5900x300px
- **Background**: #F5F5F5 with left label bar (#9E9E9E, 40px wide, text "ICEBOX")
- **Elements**:
  - Text block: "Icebox — Unscheduled / Needs Validation" (font size 20, bold, #9E9E9E)
  - Sticky note (gray #ECEFF1, 200x100): "Offline mode for mobile app"
  - Sticky note (gray #ECEFF1, 200x100): "AI-generated task descriptions from meeting transcripts"
  - Sticky note (gray #ECEFF1, 200x100): "Gamification: achievement badges for team milestones"
  - Sticky note (gray #ECEFF1, 200x100): "White-label option for agencies"
  - Sticky note (gray #ECEFF1, 200x100): "Built-in video chat for stand-ups"
  - Sticky note (gray #ECEFF1, 200x100): "Natural language task creation ('Create a high-priority bug for Leo due Friday')"

## Connectors & Flow

- Horizontal arrows between activities in the backbone (solid, #7C4DFF, 2px): representing narrative flow
- Vertical dashed lines from each activity column extending down through all swim lanes (dashed, #E0E0E0, 1px): visual alignment guides
- Horizontal dashed lines separating swim lanes (dashed, #BDBDBD, 2px): release boundaries
- The left label bars (colored vertical strips) serve as quick visual identifiers for each release tier

## Example Content

The board maps the complete onboarding flow for new users of AutoPilot, from sign-up through their first sprint review. Six activities form the backbone. Each activity has 2-3 specific user tasks. The MVP lane contains 13 stories covering the minimum viable onboarding experience. The v2.0 lane adds 11 stories for power users and enterprise needs. The v3.0 lane includes 8 stories for advanced automation and scale. The Icebox holds 6 speculative ideas that need further validation.

## Variations

1. **E-commerce Story Map**: Activities become shopping stages (Browse, Search, Product Detail, Cart, Checkout, Post-Purchase). Stories cover features like filters, recommendations, saved carts, and returns.
2. **Mobile App Story Map**: Activities follow mobile-specific patterns (Onboard, Home Feed, Create Content, Engage, Notifications, Profile). Add platform-specific considerations in each lane.
3. **Internal Tool Story Map**: Activities follow employee workflows. Replace "Icebox" with "Tech Debt" lane for engineering-requested improvements.

## Build Instructions

1. Create board at 6000x3200px with background #EDE7F6.
2. Place Frame 1 (Header) at (50, 50), size 5900x200.
3. Place Frame 2 (Activity Backbone) at (50, 270), size 5900x200. Space 6 activity cards evenly across the width.
4. Place Frame 3 (User Tasks) at (50, 490), size 5900x250. Align task sticky notes under their parent activity.
5. Place Frame 4 (MVP) at (50, 760), size 5900x500. Add green sticky notes under each activity column.
6. Place Frame 5 (v2.0) at (50, 1280), size 5900x500. Add blue sticky notes.
7. Place Frame 6 (v3.0) at (50, 1800), size 5900x400. Add orange sticky notes.
8. Place Frame 7 (Icebox) at (50, 2220), size 5900x300. Add gray sticky notes.
9. Draw vertical alignment guides from each activity column down through all lanes.
10. Add colored left label bars for each swim lane.
11. Draw horizontal dashed dividers between lanes.
12. Add horizontal arrows between activities in the backbone.

## Tips & Best Practices

- Read the map left-to-right to understand the user narrative, top-to-bottom to understand release priority.
- The backbone should never have more than 8-10 activities — if it does, you are mapping too granularly. Zoom out.
- Keep MVP as thin as possible. If a story is not critical to the first usable experience, move it to v2.0.
- During story mapping workshops, use a timer: 5 minutes per activity to brainstorm stories, then 10 minutes to prioritize across lanes.
- Revisit the map at the start of each quarter to promote v2.0 stories to MVP (if you are building v2.0 next) and refresh the Icebox.
