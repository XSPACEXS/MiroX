# User Flow Diagram Board

## Overview

- **Purpose**: Map the complete user journey through a feature or product, showing entry points, decision nodes, screens, actions, and exit points with branching paths for both happy paths and error/edge cases. Helps designers, developers, and PMs see every possible path a user can take and identify gaps or friction points.
- **Best For**: UX designers mapping interaction patterns, product managers validating feature scope, QA engineers identifying test scenarios, and developers understanding the state machine behind a feature.
- **Complexity**: Medium
- **Board Size**: 5600x3000px

## Color Scheme

| Role       | Color    | Hex     |
| ---------- | -------- | ------- |
| Primary    | Cerulean | #0288D1 |
| Secondary  | Hot Pink | #E91E63 |
| Accent     | Teal     | #00BFA5 |
| Background | Canvas   | #FAFAFA |
| Text       | Ink      | #1B1B1B |

## Board Layout

The flow diagram reads left-to-right with entry points on the far left and exit/completion points on the far right. Decision diamonds create vertical branches. A legend and analytics panel sit below the flow.

```
+--------------------------------------------------------------+
|  USER FLOW — New User Onboarding to First Sprint             |
|                                                              |
|  [Entry] -> [Screen] -> <Decision> -> [Screen] -> [Exit]    |
|                             |                                |
|                             v                                |
|                         [Alt Path]                           |
|                                                              |
|  +------------------------------------------------------+   |
|  | Flow Legend & Drop-Off Analytics                       |   |
|  +------------------------------------------------------+   |
+--------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Flow Header

- **Position**: top full-width
- **Size**: 5500x200px
- **Background**: #0288D1
- **Elements**:
  - Text block: "User Flow: New User Onboarding to First Sprint" (font size 36, bold, #FFFFFF)
  - Text block: "Mapping: Sign-up through first sprint creation and AI task assignment | Designer: Priya Tandon | Date: March 5, 2026" (font size 14, #B3E5FC)

### Frame 2: Main Flow Diagram

- **Position**: center
- **Size**: 5500x2200px
- **Background**: #FAFAFA
- **Elements**:
  - **Entry Points (left edge):**
  - Shape (rounded rectangle, #00BFA5, 200x80): **EP1**: "Marketing website CTA" (text #FFFFFF)
  - Shape (rounded rectangle, #00BFA5, 200x80): **EP2**: "Product Hunt" (text #FFFFFF)
  - Shape (rounded rectangle, #00BFA5, 200x80): **EP3**: "Direct URL /signup" (text #FFFFFF)
  - Shape (rounded rectangle, #00BFA5, 200x80): **EP4**: "Team invite email link" (text #FFFFFF)
  - Connector: All entry points converge to first screen node

  - **Node 1: Sign-Up Screen**
  - Shape (rectangle, #FFFFFF, 240x140, border #0288D1 2px, rounded 8px, shadow):
    - Text: "Sign Up" (bold)
    - Text: "Name, email, password"
    - Text: "OR Google SSO button"
  - Connector: Arrow to Decision 1 (solid, #0288D1, 2px)

  - **Decision 1: Sign-up Method**
  - Shape (diamond, #FFF9C4, 160x160, border #FFC400 2px):
    - Text: "Email or SSO?"
  - Connector (right): "Email" -> Node 2a
  - Connector (down): "Google SSO" -> Node 2b

  - **Node 2a: Email Verification**
  - Shape (rectangle, #FFFFFF, 240x120, border #0288D1 2px, rounded 8px):
    - Text: "Check Your Email" (bold)
    - Text: "Verification link sent"
  - Connector: Arrow to Decision 2a

  - **Decision 2a: Email Verified?**
  - Shape (diamond, #FFF9C4, 140x140, border #FFC400 2px):
    - Text: "Verified?"
  - Connector (right): "Yes" -> Node 3
  - Connector (down): "No (24h)" -> Exit: "Abandoned" (red)

  - **Node 2b: Google OAuth**
  - Shape (rectangle, #FFFFFF, 240x100, border #0288D1 2px, rounded 8px):
    - Text: "Google OAuth" (bold)
    - Text: "Consent screen -> auto-create account"
  - Connector: Arrow to Node 3

  - **Node 3: Onboarding Wizard — Step 1**
  - Shape (rectangle, #E3F2FD, 240x140, border #0288D1 2px, rounded 8px):
    - Text: "Onboarding 1/3" (bold)
    - Text: "'What is your role?'"
    - Text: "Options: Manager, IC, Exec, Other"
  - Connector: Arrow to Node 4

  - **Node 4: Onboarding Wizard — Step 2**
  - Shape (rectangle, #E3F2FD, 240x140, border #0288D1 2px, rounded 8px):
    - Text: "Onboarding 2/3" (bold)
    - Text: "'How big is your team?'"
    - Text: "Options: 1-5, 6-20, 21-50, 50+"
  - Connector: Arrow to Node 5

  - **Node 5: Onboarding Wizard — Step 3**
  - Shape (rectangle, #E3F2FD, 240x140, border #0288D1 2px, rounded 8px):
    - Text: "Onboarding 3/3" (bold)
    - Text: "'What tool do you use today?'"
    - Text: "Options: Asana, Jira, Monday, Trello, Spreadsheets, None"
  - Connector: Arrow to Decision 3

  - **Decision 3: Invite Team?**
  - Shape (diamond, #FFF9C4, 160x160, border #FFC400 2px):
    - Text: "Invite team now?"
  - Connector (right): "Yes" -> Node 6a
  - Connector (down): "Skip" -> Node 7

  - **Node 6a: Team Invite Screen**
  - Shape (rectangle, #FFFFFF, 240x120, border #0288D1 2px, rounded 8px):
    - Text: "Invite Team" (bold)
    - Text: "Enter emails (up to 20)"
    - Text: "[Send Invites] [Skip for now]"
  - Connector: Arrow to Node 7

  - **Node 7: Create First Project**
  - Shape (rectangle, #FFFFFF, 240x140, border #0288D1 2px, rounded 8px):
    - Text: "Create Project" (bold)
    - Text: "Name, dates"
    - Text: "Choose template or blank"
  - Connector: Arrow to Decision 4

  - **Decision 4: Use Template?**
  - Shape (diamond, #FFF9C4, 140x140, border #FFC400 2px):
    - Text: "Template?"
  - Connector (right): "Yes" -> Node 8a (pre-populated tasks)
  - Connector (down): "Blank" -> Node 8b (empty project)

  - **Node 8a: Template Project (Pre-Populated)**
  - Shape (rectangle, #E8F5E9, 240x100, border #00BFA5 2px, rounded 8px):
    - Text: "Project with sample tasks" (bold)
    - Text: "12 tasks pre-loaded from template"
  - Connector: Arrow to Node 9

  - **Node 8b: Blank Project**
  - Shape (rectangle, #FFFFFF, 240x100, border #0288D1 2px, rounded 8px):
    - Text: "Empty project" (bold)
    - Text: "Prompt: 'Add your first task'"
  - Connector: Arrow to Node 9

  - **Node 9: Sprint Creation**
  - Shape (rectangle, #FFFFFF, 240x140, border #0288D1 2px, rounded 8px):
    - Text: "Create Sprint" (bold)
    - Text: "Name, start/end dates"
    - Text: "Drag tasks from backlog"
  - Connector: Arrow to Node 10

  - **Node 10: AI Task Routing**
  - Shape (rectangle, #E8EAF6, 240x140, border #7C4DFF 2px, rounded 8px):
    - Text: "AI Suggestions" (bold)
    - Text: "3 assignee suggestions per task"
    - Text: "[Approve] [Dismiss]"
  - Connector: Arrow to Decision 5

  - **Decision 5: All Tasks Assigned?**
  - Shape (diamond, #FFF9C4, 140x140, border #FFC400 2px):
    - Text: "All assigned?"
  - Connector (right): "Yes" -> Node 11
  - Connector (down): "No" -> loop back to Node 10

  - **Node 11: Sprint Dashboard**
  - Shape (rectangle, #E8F5E9, 240x120, border #00BFA5 2px, rounded 8px):
    - Text: "Sprint Active" (bold)
    - Text: "Dashboard: progress, burndown"
    - Text: "Onboarding complete!"
  - Connector: Arrow to Exit Success

  - **Exit Points (right edge):**
  - Shape (rounded rectangle, #00BFA5, 200x60): **Success**: "Sprint active, onboarding complete" (text #FFFFFF)
  - Shape (rounded rectangle, #E91E63, 200x60): **Abandoned**: "Email not verified (24h timeout)" (text #FFFFFF)
  - Shape (rounded rectangle, #E91E63, 200x60): **Drop-off**: "Left during onboarding wizard" (text #FFFFFF)
  - Shape (rounded rectangle, #FFC400, 200x60): **Partial**: "Project created but no sprint" (text #1B1B1B)

### Frame 3: Flow Legend & Drop-Off Analytics

- **Position**: full-width bottom
- **Size**: 5500x500px
- **Background**: #FAFAFA with #0288D1 top border (4px)
- **Elements**:
  - Text block: "Flow Legend" (font size 24, bold, #1B1B1B)
  - Shape (rounded rectangle, #00BFA5, 80x40): "Entry/Exit Point"
  - Shape (rectangle, #FFFFFF, 80x50, border #0288D1 2px): "Screen/Page"
  - Shape (rectangle, #E3F2FD, 80x50, border #0288D1 2px): "Wizard Step"
  - Shape (rectangle, #E8EAF6, 80x50, border #7C4DFF 2px): "AI Feature"
  - Shape (diamond, #FFF9C4, 60x60): "Decision Point"
  - Shape (arrow, #0288D1): "Happy Path"
  - Shape (arrow, #E91E63, dashed): "Error/Drop-off Path"
  - Text block: "Drop-Off Analytics (Target vs Actual)" (font size 24, bold, #1B1B1B)
  - Shape (table, 3000x250):
    - Header: "Step | Users Entering | Users Completing | Drop-Off Rate | Target | Status"
    - Row: "Sign Up | 5,000 | 4,200 | 16% | <20% | On Target"
    - Row: "Email Verification | 2,800 | 2,520 | 10% | <15% | On Target"
    - Row: "Onboarding Wizard | 4,200 (incl SSO) | 3,780 | 10% | <12% | On Target"
    - Row: "Team Invite | 3,780 | 2,646 (invited) / 1,134 (skipped) | 0% (optional) | — | N/A"
    - Row: "Create Project | 3,780 | 3,402 | 10% | <15% | On Target"
    - Row: "Create Sprint | 3,402 | 2,722 | 20% | <25% | On Target"
    - Row: "AI Assignment + Sprint Active | 2,722 | 2,450 | 10% | <15% | On Target"
  - Text block: "Overall onboarding completion: 49% (2,450 / 5,000 sign-ups). Target: 45%. Status: Above Target." (font size 16, bold, #00BFA5)

## Connectors & Flow

- All primary flow connectors: solid arrows, #0288D1, 2px, with arrowheads
- Decision branch labels on each connector line (e.g., "Yes," "No," "Email," "SSO")
- Error/drop-off paths: dashed arrows, #E91E63, 2px
- Loop-back arrow from Decision 5 ("No") to Node 10: curved dashed arrow, #FFC400
- Convergence points where multiple paths merge use a small circle node (#0288D1, filled, 16px diameter)

## Example Content

The flow maps the complete new-user onboarding journey for AutoPilot 3.0, from 4 entry points through sign-up, email verification, 3-step onboarding wizard, team invite, project creation, sprint creation, and AI task assignment to a successful sprint dashboard. It includes 5 decision diamonds with branching paths, 4 exit points (success, abandoned, drop-off, partial), and a drop-off analytics table with real conversion data at each step.

## Variations

1. **Feature-Specific Flow (Narrow)**: Map just one feature interaction (e.g., "AI Task Routing: unassigned task -> suggestions -> approve/dismiss -> assigned"). Fewer nodes, more detail per node.
2. **Multi-Persona Flow**: Color-code paths by persona (e.g., blue for managers, green for ICs, purple for admins). Show where paths diverge and converge.
3. **Service Blueprint**: Extend the flow diagram with a second "backstage" row showing backend processes, API calls, and data events that correspond to each user-facing step.

## Build Instructions

1. Create board at 5600x3000px with background #FAFAFA.
2. Place Frame 1 (Header) at (50, 50), size 5500x200, background #0288D1.
3. Place Frame 2 (Flow Diagram) at (50, 280), size 5500x2200. This is the main canvas.
4. Place Frame 3 (Legend + Analytics) at (50, 2500), size 5500x500.
5. Start by placing entry points on the far left, evenly spaced vertically.
6. Place screen nodes left-to-right following the happy path. Use consistent spacing (100px gap between nodes).
7. Place decision diamonds between screens where branching occurs.
8. Draw solid arrows for happy path, dashed arrows for error/alt paths.
9. Label every connector with the condition or action.
10. Place exit points on the far right, color-coded by outcome.
11. Build the legend with shape examples and the analytics table in Frame 3.
12. Group the entire flow diagram for easy panning.

## Tips & Best Practices

- Always start with entry points — users do not magically appear at step 1. Where they come from affects their expectations and context.
- Every decision diamond should have exactly 2 or 3 outgoing paths, each clearly labeled. Ambiguous decisions create ambiguous implementations.
- Map error and edge-case paths explicitly. "What happens if verification fails?" "What if the user closes the browser mid-wizard?" These paths are where bugs live.
- Pair this flow with the wireframe-board.md — every screen node in the flow should have a corresponding wireframe.
- Use the drop-off analytics section after launch to identify where users actually get stuck. Update the flow diagram with real data quarterly.
