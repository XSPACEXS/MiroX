# Launch GTM Overview Board

## Overview

- **Purpose**: Comprehensive 2x2 project overview dashboard that unites Insights (research and data), Mapping (customer journey flows), Tasks (kanban execution tracking), and Design (wireframes and visual review) into a single cross-functional command center for product launches and go-to-market initiatives.
- **Best For**: Product managers, project leads, cross-functional launch teams, and leadership stakeholders who need a single visual artifact connecting customer understanding to execution to deliverables.
- **Complexity**: Advanced
- **Board Size**: 6000 x 3800px

## Color Scheme

| Role           | Color         | Hex     |
| -------------- | ------------- | ------- |
| Primary        | Command Blue  | #1565C0 |
| Secondary      | Slate         | #37474F |
| Accent         | Teal          | #00897B |
| Insight Accent | Deep Purple   | #7B1FA2 |
| Design Accent  | Bright Orange | #EF6C00 |
| RAG Green      | Forest Green  | #2E7D32 |
| RAG Amber      | Amber         | #F9A825 |
| RAG Red        | Signal Red    | #C62828 |
| Background     | Near White    | #FAFAFA |
| Text           | Dark Slate    | #37474F |

## Board Layout

The board is structured as a 2x2 grid with a full-width header (launch readiness dashboard) at the top and a full-width timeline bar at the bottom. The four quadrants occupy the center with balanced visual weight.

```
+------------------------------------------------------------------+
|                 LAUNCH COMMAND CENTER                              |
| [Project Name] [Launch Date: March 15, 2026] [Phase: BUILD]      |
| [ENG: ● GREEN] [DESIGN: ● GREEN] [MKTG: ● AMBER]               |
| [SALES: ● GREEN] [SUPPORT: ● RED]                                |
| Overall: NOT READY — 3/5 GREEN | Decision: CONDITIONAL GO        |
+------------------------------------------------------------------+
|                              |                                    |
|  INSIGHTS                    |  MAPPING                           |
|  (Research & Data)           |  (Customer Journey)                |
|                              |                                    |
|  Key Finding #1              |  AWARENESS → CONSIDERATION →       |
|  Key Finding #2              |  ONBOARDING → USAGE → EXPANSION    |
|  Key Finding #3              |                                    |
|  Competitive Intel           |  [Current state with pain points]  |
|  Market Data                 |  [Future state with improvements]  |
|                              |  [Persona Cards]                   |
+------------------------------+------------------------------------+
|                              |                                    |
|  TASKS                       |  DESIGN                            |
|  (Execution Kanban)          |  (Creative & Review)               |
|                              |                                    |
|  TO DO | IN PROG | DONE     |  [Mockup: Onboarding Wizard v3]    |
|  [task] | [task]  | [task]  |  [Mockup: Pricing Page v2]         |
|  [task] | [task]  | [task]  |  [Marketing Assets Status]         |
|  BLOCKED: [task]            |  [Design Review Feedback]          |
|                              |                                    |
+------------------------------+------------------------------------+
|              SHARED TIMELINE                                      |
| RESEARCH → PLANNING → BUILD → TEST → LAUNCH → RETROSPECTIVE     |
| Jan 6-17   Jan 20-31  Feb 3-28  Mar 3-7  Mar 10-15  Mar 17-21  |
|                         ▲ WE ARE HERE                            |
+------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Launch Readiness Dashboard (Header)

- **Position**: Top, full width
- **Size**: 6000 x 350px
- **Background**: #1565C0
- **Elements**:
  - Text block: "LAUNCH COMMAND CENTER — [Project Name]" (font size 36, bold, #FFFFFF)
  - Text block: "Target Launch: March 15, 2026 | Phase: BUILD | Owner: @product_lead" (font size 14, #BBDEFB)
  - Shape row: RAG indicator per team (rounded rectangles, 120x60px each)
    - ENG: #2E7D32 background, "ENG\nGREEN" (12px bold, #FFFFFF)
    - DESIGN: #2E7D32 background, "DESIGN\nGREEN" (12px bold, #FFFFFF)
    - MKTG: #F9A825 background, "MKTG\nAMBER" (12px bold, #1A1A2E)
    - SALES: #2E7D32 background, "SALES\nGREEN" (12px bold, #FFFFFF)
    - SUPPORT: #C62828 background, "SUPPORT\nRED" (12px bold, #FFFFFF)
  - Text block: "OVERALL: NOT READY — 3 of 5 teams GREEN" (font size 18, bold, #FFFFFF)
  - Text block: "DECISION: Conditional Go — Support training must complete by March 13" (font size 14, #FFE0B2)

### Frame 2: Insights Quadrant (Top-Left)

- **Position**: Below header, left side
- **Size**: 2700 x 1500px
- **Background**: #FAFAFA with left border 4px #7B1FA2
- **Elements**:
  - Text block: "INSIGHTS" (font size 28, bold, #7B1FA2)
  - Text block: "Research & Data" (font size 14, #78909C)
  - Card: Key Finding #1
    - Title: "Pricing Page Confusion" (font size 18, bold)
    - Content: "78% of trial users report confusion when comparing pricing tiers. Primary issue: too many options without clear differentiation." (font size 14)
    - Footer: "Source: User Survey, Jan 2026 (n=500) | Confidence: High" (font size 12, #78909C)
    - Background: #F3E5F5 | Left border: 4px #7B1FA2
  - Card: Key Finding #2
    - Title: "Onboarding Drop-Off" (font size 18, bold)
    - Content: "67% of users abandon onboarding at Step 3 (data connection). 'Too many configuration options' cited by 71% of drop-offs." (font size 14)
    - Footer: "Source: Funnel Analysis + Interviews (n=340) | Confidence: High" (font size 12, #78909C)
    - Background: #F3E5F5 | Left border: 4px #7B1FA2
  - Card: Key Finding #3
    - Title: "Mobile Usage Growing" (font size 18, bold)
    - Content: "Mobile sessions increased 40% QoQ. 62% of quick-check usage (status, notifications) happens on mobile. Current mobile experience: no responsive design." (font size 14)
    - Footer: "Source: Product Analytics, Feb 2026 | Confidence: High" (font size 12, #78909C)
  - Card: Competitive Intel
    - Title: "COMPETITIVE INTEL" (font size 16, bold)
    - Content: "Competitor A launched similar onboarding wizard Jan 2026. Priced at $49/mo (vs. our $29). No mobile support. Market window: launch before Competitor B (Q2 roadmap)." (font size 14)
    - Background: #FFF3E0 | Left border: 4px #EF6C00

### Frame 3: Mapping Quadrant (Top-Right)

- **Position**: Below header, right side
- **Size**: 2900 x 1500px
- **Background**: #FAFAFA with left border 4px #1565C0
- **Elements**:
  - Text block: "MAPPING" (font size 28, bold, #1565C0)
  - Text block: "Customer Journey" (font size 14, #78909C)
  - Journey Map (horizontal flow using shapes and connectors):
    - Stage 1: "AWARENESS" — Shape (rounded rect, 350x200px, #E3F2FD)
      - Content: "Touchpoints: Blog, social, referral\nConversion: 4.2% to sign-up\nPain: Low brand awareness in mid-market"
    - Stage 2: "CONSIDERATION" — Shape (350x200px, #E3F2FD)
      - Content: "Touchpoints: Pricing page, free trial\nConversion: 12% → 8% (declining)\nPain: Pricing confusion (Insight #1)"
      - Pain point marker: Red sticky (#FFCDD2) "⚠ 78% report pricing confusion"
    - Stage 3: "ONBOARDING" — Shape (350x200px, #E3F2FD)
      - Content: "Touchpoints: Setup wizard, data connection\nDrop-off: 33% at this stage\nPain: Too many config options (Insight #2)"
      - Pain point marker: Red sticky (#FFCDD2) "⚠ 67% abandon at Step 3"
    - Stage 4: "USAGE" — Shape (350x200px, #E3F2FD)
      - Content: "Touchpoints: Dashboard, reports, mobile\nEngagement: 3.2 sessions/week\nPain: No mobile experience (Insight #3)"
    - Stage 5: "EXPANSION" — Shape (350x200px, #E3F2FD)
      - Content: "Touchpoints: Upgrade prompt, team invite\nConversion: 8% to paid\nOpportunity: Team plan undermarketed"
  - Connectors: Solid #1565C0 arrows between stages (2px)
  - Persona Card: "Hands-On Hannah" sticky note (#BBDEFB, positioned above journey)
    - "VP Operations, 200-person SaaS, moderate technical comfort, values ease of setup"

### Frame 4: Tasks Quadrant (Bottom-Left)

- **Position**: Below Insights quadrant
- **Size**: 2700 x 1400px
- **Background**: #FAFAFA with left border 4px #00897B
- **Elements**:
  - Text block: "TASKS" (font size 28, bold, #00897B)
  - Text block: "Execution Tracking" (font size 14, #78909C)
  - Kanban columns (4 columns within the frame):
    - **TO DO** column (550px wide):
      - Card: "Update help center docs" (SUPPORT, due Mar 11, @support_lead)
      - Card: "Create sales battlecard" (SALES, due Mar 10, @sales_enablement)
      - Card: "Landing page screenshots" (MKTG, due Mar 12, @mktg_lead)
    - **IN PROGRESS** column (550px wide):
      - Card: "Implement onboarding wizard" (ENG, Sprint 5, @mike_eng) [border: #00897B]
      - Card: "Data schema migration" (ENG, due Mar 5, @david_eng) [border: #C62828 — blocker]
      - Card: "Email campaign sequence" (MKTG, due Mar 8, @email_lead) [border: #00897B]
    - **DONE** column (550px wide):
      - Card: "User research study" (DESIGN, completed Feb 20) [dimmed]
      - Card: "Onboarding wizard design v3" (DESIGN, completed Mar 2) [dimmed]
      - Card: "Blog post draft" (MKTG, completed Mar 4) [dimmed]
    - **BLOCKED** column (550px wide, background: #FFCDD2 at 20%):
      - Card: "Schema migration — edge case handling" (ENG, blocker for wizard, ETA Mar 5)
        - Red border, detailed blocker notes
  - Dependency connector: Dashed #C62828 line from "Schema migration" to "Implement wizard"

### Frame 5: Design Quadrant (Bottom-Right)

- **Position**: Below Mapping quadrant
- **Size**: 2900 x 1400px
- **Background**: #FAFAFA with left border 4px #EF6C00
- **Elements**:
  - Text block: "DESIGN" (font size 28, bold, #EF6C00)
  - Text block: "Creative & Review" (font size 14, #78909C)
  - Design Review Card 1: "Onboarding Wizard v3"
    - Thumbnail placeholder (400x250px, #F5F5F5 with "MOCKUP" text)
    - Status: "APPROVED" (green badge)
    - Reviewer: @product_lead
    - Changes: "Added step indicator, skip button, accessibility fixes"
    - Link text: "Full design: Figma → Onboarding Wizard"
  - Design Review Card 2: "Pricing Page Redesign v2"
    - Thumbnail placeholder (400x250px)
    - Status: "IN REVIEW" (amber badge)
    - Reviewer: @product_lead, @mktg_lead
    - Feedback: "CTA hierarchy good, needs competitor comparison table"
    - Link text: "Full design: Figma → Pricing Page"
  - Marketing Assets Section:
    - Text block: "MARKETING ASSETS" (font size 18, bold)
    - Checklist shape:
      - "☑ Blog post header image — COMPLETE"
      - "☑ Email template designs — COMPLETE"
      - "☐ Landing page hero — WAITING (needs wizard screenshots)"
      - "☐ Social media graphics — IN PROGRESS"
      - "☐ Demo video (90s) — NOT STARTED"

### Frame 6: Shared Timeline (Footer)

- **Position**: Bottom, full width
- **Size**: 6000 x 300px
- **Background**: #F5F5F5
- **Elements**:
  - Phase segments (6 rectangles spanning the width):
    - "RESEARCH" (Jan 6-17) — #7B1FA2 at 15% opacity
    - "PLANNING" (Jan 20-31) — #1565C0 at 15% opacity
    - "BUILD" (Feb 3-28) — #00897B at 100% opacity (current phase)
    - "TEST" (Mar 3-7) — #EF6C00 at 15% opacity
    - "LAUNCH" (Mar 10-15) — #2E7D32 at 15% opacity
    - "RETRO" (Mar 17-21) — #37474F at 15% opacity
  - "We Are Here" marker: Vertical line (#C62828, 3px) positioned at current date
  - Milestone diamonds: "Beta Start" (Mar 1), "Feature Freeze" (Mar 3), "Launch Day" (Mar 15)

## Connectors & Flow

| From                     | To                      | Style                | Label       |
| ------------------------ | ----------------------- | -------------------- | ----------- |
| Insight #1 (Pricing)     | Journey Stage 2 pain pt | Dashed, 2px, #7B1FA2 | "Drives"    |
| Insight #2 (Onboarding)  | Journey Stage 3 pain pt | Dashed, 2px, #7B1FA2 | "Drives"    |
| Journey Stage 3 gap      | Task: Implement wizard  | Solid, 2px, #1565C0  | "Generates" |
| Task: Implement wizard   | Design: Wizard v3       | Solid, 2px, #00897B  | "Produces"  |
| Schema migration blocker | Implement wizard task   | Dashed, 3px, #C62828 | "Blocks"    |
| Task: Landing page       | Design: Hero image      | Solid, 2px, #00897B  | "Needs"     |

## Example Content

All frames are pre-filled with the DataSight onboarding redesign example as shown above. The content demonstrates:

- Research-backed insights with source citations
- Customer journey with quantified pain points
- Tasks organized by status with cross-team dependencies
- Design artifacts with review feedback and version tracking
- Cross-quadrant traceability from insight to deliverable

## Variations

- **Simple Launch**: Remove Insights and Mapping quadrants for a 2-panel Tasks + Design board (3500 x 2000px)
- **Research-Heavy**: Expand Insights quadrant to 3500px wide, reduce Design to 2100px
- **Design-Heavy**: Expand Design quadrant to 3500px wide, reduce Insights to 2100px
- **Multi-Product**: Add a second 2x2 grid below the first for a second product/feature, sharing the same timeline

## Build Instructions

1. Create board at 6000 x 3800px
2. Place header frame (6000 x 350px) at top with #1565C0 background
3. Add RAG indicators as rounded rectangle shapes
4. Place four quadrant frames with accent borders (4px left border in quadrant color)
5. Add quadrant headers (28px bold, UPPERCASE)
6. Populate Insights with 3-5 finding cards
7. Build journey map in Mapping with 5 stage shapes and connectors
8. Set up kanban columns in Tasks (To Do | In Progress | Done | Blocked)
9. Add task cards with team labels, owners, and dates
10. Add design review cards in Design with thumbnails and status
11. Place timeline bar at bottom with phase segments and "We Are Here" marker
12. Add cross-quadrant connectors showing insight-to-task-to-design flow
13. Configure presentation mode frames: Header → Insights → Mapping → Tasks → Design → Timeline

## Tips

- Update the readiness dashboard DAILY during the final 2 weeks before launch
- Keep the Tasks quadrant to 20-30 active cards maximum — archive completed items weekly
- Design thumbnails should be small (400px wide) — link to Figma for full-size viewing
- The "We Are Here" marker on the timeline is the most important orientation element
- Configure presentation mode so the header (readiness dashboard) is Frame 1
