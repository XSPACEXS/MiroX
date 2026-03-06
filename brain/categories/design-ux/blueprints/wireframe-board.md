# Wireframe Board

## Overview

- **Purpose**: Create low-fidelity wireframe layouts for both mobile and desktop screens, with component annotations, interaction notes, and responsive behavior documentation. Provides a shared canvas for designers, developers, and PMs to align on layout and functionality before high-fidelity design begins.
- **Best For**: UX designers sketching initial layouts, product managers validating feature scope through visual reference, and developers understanding layout intent and interaction patterns.
- **Complexity**: Medium
- **Board Size**: 5400x3600px

## Color Scheme

| Role       | Color    | Hex     |
| ---------- | -------- | ------- |
| Primary    | Slate    | #455A64 |
| Secondary  | Hot Pink | #E91E63 |
| Accent     | Cerulean | #0288D1 |
| Background | Canvas   | #FAFAFA |
| Text       | Ink      | #1B1B1B |

## Board Layout

The board is divided into a desktop wireframe area (left), a mobile wireframe area (center), and an annotation/notes panel (right). A header spans the top with project context.

```
+--------------------------------------------------------------+
|  WIREFRAMES — AutoPilot Sprint Planning Feature              |
|                                                              |
|  +-------------------+  +-------------+  +----------------+  |
|  | Desktop Wireframes|  | Mobile      |  | Annotations &  |  |
|  | (3 screens)       |  | Wireframes  |  | Interaction    |  |
|  |                   |  | (3 screens) |  | Notes          |  |
|  |                   |  |             |  |                |  |
|  +-------------------+  +-------------+  +----------------+  |
|                                                              |
|  +------------------------------------------------------+   |
|  | Component Legend & Responsive Behavior                 |   |
|  +------------------------------------------------------+   |
+--------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Project Header

- **Position**: top full-width
- **Size**: 5300x250px
- **Background**: #455A64
- **Elements**:
  - Text block: "Wireframes: Sprint Planning Feature" (font size 36, bold, #FFFFFF)
  - Text block: "Project: AutoPilot 3.0 | Feature: Sprint Planning with AI Suggestions | Designer: Priya Tandon | Date: March 5, 2026 | Status: Draft v2" (font size 14, #B0BEC5)
  - Text block: "Scope: 3 desktop screens + 3 mobile screens covering sprint creation, task assignment, and workload view" (font size 14, #CFD8DC)

### Frame 2: Desktop Wireframes

- **Position**: left
- **Size**: 2400x2400px
- **Background**: #FAFAFA with #455A64 top border (4px)
- **Elements**:
  - Text block: "Desktop (1440px viewport)" (font size 24, bold, #1B1B1B)
  - **Screen D1: Sprint Creation**
  - Shape (rectangle, #FFFFFF, 1100x700, border #455A64 1px): Desktop frame
    - Shape (rectangle, #ECEFF1, 1100x60): Top nav bar — "AutoPilot logo | Projects | Sprints | Dashboard | [avatar]"
    - Shape (rectangle, #F5F5F5, 240x640): Left sidebar — "Project list, Sprint list (collapsed), Settings"
    - Shape (rectangle, #FFFFFF, 860x580): Main content area
      - Text block: "Create New Sprint" (font size 18, bold, wireframe style)
      - Shape (rectangle, #ECEFF1, 400x40): "Sprint Name [text input]"
      - Shape (rectangle, #ECEFF1, 200x40): "Start Date [date picker]"
      - Shape (rectangle, #ECEFF1, 200x40): "End Date [date picker]"
      - Shape (rectangle, #ECEFF1, 780x40): "Sprint Goal [text area]"
      - Shape (rectangle, #E3F2FD, 780x200): "Backlog Tasks (drag to add)" — 4 task card placeholders stacked
      - Shape (rectangle, #0288D1, 120x40): "[Create Sprint]" button
    - Text (annotation, #E91E63, callout): "A1: Date picker defaults to 2-week sprint from today"
    - Text (annotation, #E91E63, callout): "A2: Backlog section supports drag-and-drop from sidebar task list"
  - **Screen D2: Sprint Board with AI Suggestions**
  - Shape (rectangle, #FFFFFF, 1100x700, border #455A64 1px): Desktop frame
    - Shape (rectangle, #ECEFF1, 1100x60): Top nav bar
    - Shape (rectangle, #F5F5F5, 240x640): Left sidebar
    - Shape (rectangle, #FFFFFF, 860x580): Main content
      - Text block: "Sprint: Q2 Week 1 (Apr 7-18)" (font size 18, bold)
      - Shape (rectangle, #ECEFF1, 270x500): "TO DO" column — 3 task cards
      - Shape (rectangle, #FFF8E1, 270x500): "IN PROGRESS" column — 2 task cards
      - Shape (rectangle, #E8F5E9, 270x500): "DONE" column — 1 task card
      - Shape (rectangle, #E8EAF6, 250x120): **AI Suggestion Overlay** on task card
        - Text: "Suggested: Aisha K. (92% match)"
        - Shape (rectangle, #00BFA5, 60x24): "[Approve]"
        - Shape (rectangle, #ECEFF1, 60x24): "[Dismiss]"
    - Text (annotation, #E91E63, callout): "A3: AI suggestion overlay appears on unassigned task hover"
    - Text (annotation, #E91E63, callout): "A4: Approve assigns + sends notification; Dismiss shows next suggestion"
  - **Screen D3: Workload Dashboard**
  - Shape (rectangle, #FFFFFF, 1100x700, border #455A64 1px): Desktop frame
    - Shape (rectangle, #ECEFF1, 1100x60): Top nav bar
    - Shape (rectangle, #FFFFFF, 1100x640): Full-width content (no sidebar)
      - Text block: "Team Workload — Sprint Q2 Week 1" (font size 18, bold)
      - Shape (table wireframe, 1020x400): Team member rows
        - Row: "[avatar] Aisha K. | [===========] 85% | 6 tasks | 28h estimated"
        - Row: "[avatar] Leo C. | [========] 65% | 4 tasks | 22h estimated"
        - Row: "[avatar] Marcus W. | [==============] 100% | 8 tasks | 40h estimated" (red highlight)
        - Row: "[avatar] Noor A. | [=====] 45% | 3 tasks | 16h estimated"
      - Shape (rectangle, #ECEFF1, 500x200): Burndown chart placeholder
      - Shape (rectangle, #ECEFF1, 500x200): Velocity chart placeholder
    - Text (annotation, #E91E63, callout): "A5: Red highlight on team members at >95% capacity"
    - Text (annotation, #E91E63, callout): "A6: Clicking a team member row expands to show their task breakdown"

### Frame 3: Mobile Wireframes

- **Position**: center
- **Size**: 1400x2400px
- **Background**: #FAFAFA with #455A64 top border (4px)
- **Elements**:
  - Text block: "Mobile (375px viewport)" (font size 24, bold, #1B1B1B)
  - **Screen M1: Sprint List**
  - Shape (rectangle, #FFFFFF, 375x812, border #455A64 1px, rounded corners 20px): iPhone frame
    - Shape (rectangle, #ECEFF1, 375x60): Mobile header — "Sprints | [hamburger] | [+]"
    - Shape (rectangle, #FFFFFF, 375x100): Sprint card — "Q2 Week 1 | Apr 7-18 | 12 tasks | 3 completed"
    - Shape (rectangle, #FFFFFF, 375x100): Sprint card — "Q2 Week 2 | Apr 21-May 2 | 8 tasks | 0 completed"
    - Shape (rectangle, #F5F5F5, 375x100): Sprint card (draft) — "Q2 Week 3 | Draft | [Edit]"
    - Shape (rectangle, #0288D1, 56x56, circle): FAB "+" button bottom-right
  - Text (annotation, #E91E63, callout): "M1: Swipe left on sprint card to archive"
  - **Screen M2: Task Card with AI Suggestion**
  - Shape (rectangle, #FFFFFF, 375x812, border #455A64 1px, rounded corners 20px): iPhone frame
    - Shape (rectangle, #ECEFF1, 375x60): Header — "< Back | Task Detail"
    - Text block: "Fix login timeout bug" (font size 16, bold)
    - Text block: "Priority: High | Due: Apr 10 | Project: Core Platform" (font size 12)
    - Shape (rectangle, #ECEFF1, 340x60): "Description: Users are logged out after 5 minutes of inactivity..."
    - Shape (rectangle, #E8EAF6, 340x140): **AI Suggestion Card**
      - Text: "Suggested Assignee"
      - Text: "Aisha K. — 92% match | 6 tasks in progress"
      - Shape (rectangle, #00BFA5, 150x36): "[Approve]"
      - Shape (rectangle, #ECEFF1, 150x36): "[See Others]"
    - Shape (rectangle, #ECEFF1, 340x40): "Add Comment..."
  - Text (annotation, #E91E63, callout): "M2: 'See Others' opens a bottom sheet with top 3 suggestions"
  - **Screen M3: Workload View (Simplified)**
  - Shape (rectangle, #FFFFFF, 375x812, border #455A64 1px, rounded corners 20px): iPhone frame
    - Shape (rectangle, #ECEFF1, 375x60): Header — "< Back | Team Workload"
    - Shape (rectangle, #FFFFFF, 340x80): "Aisha K. | [=======] 85% capacity"
    - Shape (rectangle, #FFFFFF, 340x80): "Leo C. | [=====] 65% capacity"
    - Shape (rectangle, #FFEBEE, 340x80): "Marcus W. | [==========] 100% capacity" (red)
    - Shape (rectangle, #FFFFFF, 340x80): "Noor A. | [===] 45% capacity"
    - Shape (rectangle, #ECEFF1, 340x200): Simplified burndown chart
  - Text (annotation, #E91E63, callout): "M3: Tap team member to see their assigned tasks"

### Frame 4: Annotations & Interaction Notes

- **Position**: right
- **Size**: 1300x2400px
- **Background**: #FAFAFA with #E91E63 left border (4px)
- **Elements**:
  - Text block: "Interaction Notes" (font size 24, bold, #1B1B1B)
  - Text block: "Navigation" (font size 18, bold, #455A64)
  - Sticky note (pink #FCE4EC, 600x100): "Desktop: Persistent left sidebar with collapsible sections. Sprint list is a sub-nav under the active project."
  - Sticky note (pink #FCE4EC, 600x100): "Mobile: Bottom tab bar replaces sidebar. Sprints, Tasks, Dashboard, Profile. Hamburger menu for settings."
  - Text block: "AI Suggestion Behavior" (font size 18, bold, #455A64)
  - Sticky note (blue #E3F2FD, 600x100): "Suggestions appear automatically for unassigned tasks. On desktop: inline overlay on hover. On mobile: embedded card in task detail view."
  - Sticky note (blue #E3F2FD, 600x100): "If all suggestions are dismissed, show: 'No more suggestions. Assign manually?' with a people picker."
  - Sticky note (blue #E3F2FD, 600x100): "Suggestion confidence score visible to managers only. Team members see 'Suggested for you' without the percentage."
  - Text block: "Loading & Empty States" (font size 18, bold, #455A64)
  - Sticky note (gray #ECEFF1, 600x100): "Sprint list empty state: illustration + 'No sprints yet. Create your first sprint to get started.' + [Create Sprint] CTA."
  - Sticky note (gray #ECEFF1, 600x100): "Workload dashboard loading: skeleton UI (shimmer effect on rows and charts). Load time target: <3s."
  - Sticky note (gray #ECEFF1, 600x100): "AI suggestions loading: 'Finding the best match...' spinner on the suggestion card. Timeout after 5s: 'Suggestions unavailable. Assign manually.'"
  - Text block: "Error States" (font size 18, bold, #455A64)
  - Sticky note (red #FFEBEE, 600x100): "Sprint creation fails: inline error banner — 'Could not create sprint. Please check your dates and try again.' Retry button."
  - Sticky note (red #FFEBEE, 600x100): "AI routing service unavailable: suggestion card shows 'AI routing is temporarily unavailable. You can assign tasks manually.' No retry — graceful degradation."
  - Text block: "Accessibility" (font size 18, bold, #455A64)
  - Sticky note (green #E8F5E9, 600x100): "All interactive elements must be keyboard-navigable. Tab order follows visual reading order. Approve/Dismiss buttons have aria-labels."
  - Sticky note (green #E8F5E9, 600x100): "Capacity percentage bar uses color + text label (not color alone) for colorblind accessibility. Red bar also shows '100%' text."

### Frame 5: Component Legend & Responsive Behavior

- **Position**: full-width bottom
- **Size**: 5300x600px
- **Background**: #FAFAFA with #455A64 top border (4px)
- **Elements**:
  - Text block: "Component Legend" (font size 24, bold, #1B1B1B)
  - Shape (rectangle, #ECEFF1, 200x40, border #455A64 1px): "Text Input" (labeled)
  - Shape (rectangle, #ECEFF1, 200x40, rounded, border #0288D1 2px): "Primary Button" (labeled)
  - Shape (rectangle, #FFFFFF, 200x80, border #455A64 1px, shadow): "Card Component" (labeled)
  - Shape (rectangle, #E8EAF6, 200x80, border #7C4DFF 1px): "AI Suggestion Card" (labeled)
  - Shape (line, #E91E63, 40px): "Annotation callout line" (labeled)
  - Shape (rectangle, #ECEFF1, 200x100): "Placeholder / Skeleton" (labeled)
  - Text block: "Responsive Behavior" (font size 24, bold, #1B1B1B)
  - Shape (table, 3000x300):
    - Header: "Component | Desktop (>1024px) | Tablet (768-1024px) | Mobile (<768px)"
    - Row: "Sidebar | Persistent, 240px wide | Collapsible overlay | Hidden, replaced by bottom tabs"
    - Row: "Sprint Board | 3-column Kanban | 3-column (narrower) | Single column, swipe between"
    - Row: "Workload Table | Full table with charts | Table only, charts below | Stacked cards, no table"
    - Row: "AI Suggestion | Inline hover overlay | Inline hover overlay | Embedded in task detail"
    - Row: "Task Cards | 260px wide | 220px wide | Full width (340px)"

## Connectors & Flow

- Pink annotation callout lines connect annotation labels (A1-A6, M1-M3) to their corresponding wireframe elements
- Dashed arrows between desktop screen D2 and mobile screen M2 (dashed, #0288D1, 1px): labeled "Same feature, responsive adaptation"
- No flow arrows between screens — this board shows individual screen layouts, not user flow (see user-flow.md for that)

## Example Content

The board contains 6 wireframe screens (3 desktop, 3 mobile) for the Sprint Planning feature of AutoPilot 3.0. Each screen includes realistic layout elements: navigation, content areas, form inputs, task cards, AI suggestion overlays, and data visualizations. Annotations are numbered and color-coded in pink. Interaction notes cover navigation, AI behavior, loading states, error states, and accessibility. The responsive behavior table maps component adaptations across 3 breakpoints.

## Variations

1. **High-Fidelity Wireframes**: Replace gray boxes with styled components from the design system. Add real typography, icons, and brand colors. Keep annotations but add visual specs (spacing, sizes).
2. **User Testing Wireframes**: Add a "Test Tasks" frame listing scenarios for usability testing (e.g., "Create a new 2-week sprint," "Approve an AI suggestion," "Find who is overloaded").
3. **Prototype Storyboard**: Arrange screens in sequential order showing a task flow. Add numbered steps and transition annotations between screens.

## Build Instructions

1. Create board at 5400x3600px with background #FAFAFA.
2. Place Frame 1 (Header) at (50, 50), size 5300x250, background #455A64.
3. Place Frame 2 (Desktop) at (50, 350), size 2400x2400. Place Frame 3 (Mobile) at (2500, 350), size 1400x2400. Place Frame 4 (Annotations) at (3950, 350), size 1300x2400.
4. Place Frame 5 (Legend) at (50, 2800), size 5300x600.
5. Draw wireframe screens as nested rectangles with 1px gray borders. Use light gray fills for UI regions.
6. Add pink annotation callout lines and labels.
7. Populate interaction notes as color-coded sticky notes in Frame 4.
8. Build the component legend with example shapes and the responsive behavior table in Frame 5.
9. Group elements within each screen for easy moving/copying.

## Tips & Best Practices

- Keep wireframes intentionally ugly — the point is layout and behavior, not visual polish. Gray boxes and simple text prevent stakeholders from giving color/font feedback too early.
- Number every annotation and reference them in design specs and user stories. "See wireframe annotation A3" is more precise than "the thing that appears on hover."
- Always include mobile wireframes even if mobile is not the primary platform — it forces you to prioritize content and simplify interactions.
- Document loading, empty, and error states now. These are often forgotten until development and then designed hastily. Getting them right in wireframes saves significant rework.
- Use this board alongside the feature-planning.md board — wireframes here should map 1:1 to user stories there.
