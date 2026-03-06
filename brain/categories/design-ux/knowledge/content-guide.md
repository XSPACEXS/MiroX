# Design & UX Boards — Content Guide

## Overview

Design boards communicate through a blend of visual artifacts and supporting text. The
content challenge is unique: too much text overwhelms the visual work; too little text
leaves designs open to misinterpretation. This guide defines the content structure for
each design board type, provides copywriting guidelines for design annotations, and
includes real examples of effective design board content.

---

## Essential Sections by Board Type

### Wireframe Board — Essential Content

| Section           | Required?   | Key Questions Answered                               |
| ----------------- | ----------- | ---------------------------------------------------- |
| Design Context    | Required    | What problem are we solving? What constraints exist? |
| Screen Wireframes | Required    | What does each screen look like at low fidelity?     |
| Annotations       | Required    | What are the key interactions and behaviors?         |
| Screen Flow       | Recommended | How do screens connect? What is the user path?       |
| Responsive Notes  | Recommended | How does the design adapt across breakpoints?        |
| Design Decisions  | Recommended | Why did we choose this layout/approach?              |
| Open Questions    | Required    | What needs discussion or testing?                    |
| Version History   | Recommended | How has the design evolved?                          |

### User Flow — Essential Content

| Section         | Required?   | Key Questions Answered                       |
| --------------- | ----------- | -------------------------------------------- |
| Flow Context    | Required    | What user goal does this flow support?       |
| Entry Points    | Required    | How does the user arrive at this flow?       |
| Happy Path      | Required    | What is the ideal path from start to goal?   |
| Decision Points | Required    | Where does the user make choices?            |
| Error States    | Required    | What happens when things go wrong?           |
| Edge Cases      | Recommended | What are the unusual but possible paths?     |
| Exit Points     | Required    | Where and how does the user leave this flow? |
| Metrics         | Recommended | What do we measure at each step?             |

### Design System Board — Essential Content

| Section             | Required?   | Key Questions Answered                                 |
| ------------------- | ----------- | ------------------------------------------------------ |
| Design Principles   | Required    | What values guide design decisions?                    |
| Color Tokens        | Required    | What are the system colors and their semantic roles?   |
| Typography Scale    | Required    | What are the type sizes, weights, and line heights?    |
| Spacing Scale       | Required    | What are the standard spacing increments?              |
| Component Library   | Required    | What components exist with all their states?           |
| Usage Guidelines    | Required    | When and how should each component be used?            |
| Anti-Patterns       | Recommended | How should components NOT be used?                     |
| Accessibility Notes | Required    | What are the accessibility requirements per component? |

### Mood Board — Essential Content

| Section               | Required?   | Key Questions Answered                             |
| --------------------- | ----------- | -------------------------------------------------- |
| Creative Brief        | Required    | What is the project context and direction?         |
| Visual References     | Required    | What existing work inspires this direction?        |
| Color Direction       | Required    | What palette are we exploring?                     |
| Typography Direction  | Recommended | What typeface families feel right?                 |
| Texture/Material      | Recommended | What physical or digital textures convey the mood? |
| Descriptive Words     | Required    | What words describe this visual direction?         |
| Anti-Mood             | Recommended | What is this explicitly NOT?                       |
| Competitive Landscape | Optional    | What do competitors look like? How do we differ?   |

### UI Review Board — Essential Content

| Section         | Required?   | Key Questions Answered                           |
| --------------- | ----------- | ------------------------------------------------ |
| Review Context  | Required    | What are we reviewing? What stage is the design? |
| Design Options  | Required    | What options are we evaluating?                  |
| Trade-Offs      | Required    | What are the pros and cons of each option?       |
| Review Criteria | Recommended | What specific aspects should reviewers evaluate? |
| Feedback Zones  | Required    | Where do reviewers leave their input?            |
| Decision Log    | Required    | What was decided, by whom, and why?              |
| Next Steps      | Required    | What happens after this review?                  |

---

## Writing Guidelines for Design Content

### Annotation Writing

Design annotations are the most important text on a design board. They bridge the gap
between the visual design and the intent behind it.

**The three types of annotations**:

1. **Behavior annotations**: Describe what happens when the user interacts.
   - "Tapping the search icon expands the search field with a 200ms ease-out animation."
   - "Long-pressing a card reveals the contextual menu with Edit, Share, and Delete options."
   - "Scrolling past the hero section collapses the header to a compact 48px height."

2. **Rationale annotations**: Explain why a design decision was made.
   - "We use a bottom sheet instead of a modal because 73% of users are on mobile and
     bottom sheets are easier to dismiss with one hand."
   - "The empty state includes an illustration because onboarding research showed new
     users feel confused by blank screens."
   - "Cards are 320px minimum width to ensure readability of 14pt body text at 60-char
     line lengths."

3. **Constraint annotations**: Note technical or business limitations.
   - "Maximum 3 featured items — API limitation on the recommendations endpoint."
   - "Image must be 16:9 ratio — matches the CMS upload requirements."
   - "This section is server-rendered for SEO. Interactive elements load after hydration."

### Annotation Best Practices

- Keep each annotation to 1-3 sentences maximum
- Start with the interaction trigger ("When the user...", "On hover...", "On load...")
- Include specific values when relevant (pixel sizes, timing, breakpoints)
- Number annotations and link to the wireframe location
- Use present tense ("The modal appears" not "The modal will appear")

### Design Rationale Writing

For design decision descriptions and trade-off analyses:

**Template**:

```
Decision: [What was decided]
Options considered: [A, B, C]
Selected: [Option chosen]
Rationale: [Why this option was selected]
Trade-off: [What we are giving up]
Evidence: [Data, research, or principle that supports this]
```

**Example**:

```
Decision: Use tab navigation instead of hamburger menu on mobile
Options considered: (A) Hamburger menu, (B) Bottom tab bar, (C) Scrolling tab bar
Selected: (B) Bottom tab bar
Rationale: Bottom tabs provide persistent visibility of the 4 primary sections.
Research shows 87% of mobile users prefer visible navigation over hidden menus.
Trade-off: Limited to 5 items maximum — we must carefully curate what appears
in the tab bar. Secondary navigation moves to a "More" tab.
Evidence: Nielsen Norman Group study on mobile navigation patterns (2023);
our own analytics showing 43% of hamburger menu users never open it.
```

---

## Real Content Examples

### Example: Wireframe Annotations for a Dashboard

**Screen: Dashboard Home — Desktop (1440px)**

Annotations:

1. **Header bar** (48px height): Logo left-aligned, search input centered (expandable
   to 400px on focus), notification bell + avatar right-aligned. Notification badge shows
   count up to 99, then "99+".

2. **Sidebar navigation** (240px wide, collapsible to 64px): 6 primary sections with
   icons + labels. Active section highlighted with left border accent (4px, primary blue).
   Collapse trigger: chevron at bottom of sidebar.

3. **Main content area**: 3-column card grid with 24px gutters. Cards are auto-height
   based on content. Minimum card width: 300px. Below 300px per card, grid switches to
   2 columns, then 1 column.

4. **Quick actions bar** (below header, 56px): "Create New" button (primary CTA),
   "Import" button (secondary), filter dropdown (default: "All items"), sort dropdown
   (default: "Last modified"). Actions persist on scroll.

5. **Empty state**: When no items exist, the card area shows centered illustration (200px)
   with heading "No projects yet" (20pt), body text "Create your first project to get
   started" (14pt), and "Create Project" CTA button.

### Example: User Flow Description

**Flow: New User Onboarding (Sign Up to First Value)**

Entry point: Marketing landing page CTA "Start Free Trial" or Google OAuth button.

Step 1 — **Sign Up Form**:

- Fields: Email, Password (8+ chars, 1 uppercase, 1 number), Full Name
- Validation: Real-time inline validation as user types
- Error: "Email already registered" links to login page
- Success: Account created, verification email sent

Step 2 — **Email Verification**:

- Landing page: "Check your email — we sent a verification link to [email]"
- Resend option: Available after 30 seconds with "Resend email" link
- Timeout: If not verified in 24 hours, account is purged and user must re-register
- Success: Redirects to Profile Setup

Step 3 — **Profile Setup** (skippable):

- Fields: Job title (dropdown), Company name, Team size (dropdown), Primary use case
  (multi-select: Project Management, Design, Engineering, Marketing, Other)
- Skip: "Skip for now" link at bottom — goes directly to dashboard
- Purpose: Personalizes the onboarding experience in Step 4

Step 4 — **Guided Tour** (skippable):

- 4-step tooltip tour highlighting: (1) Create a project, (2) Invite team, (3) Add
  first item, (4) Explore templates
- Skip: "Skip tour" link on any tooltip
- Completion: Tour ends, confetti animation, "You are all set!" message for 3 seconds

Step 5 — **Dashboard (First-Time Experience)**:

- Shows 1 sample project pre-populated with demo data
- "Start from scratch" and "Explore templates" CTAs above the sample project
- Subtle help beacon on sidebar items (pulsing blue dot) for 3 sessions

### Example: Design System Token Documentation

**Color Tokens**:

| Token Name        | Value   | Usage                                    | Accessibility              |
| ----------------- | ------- | ---------------------------------------- | -------------------------- |
| color-primary-500 | #1976D2 | Primary buttons, links, active states    | WCAG AA on white (4.6:1)   |
| color-primary-700 | #1565C0 | Hover state for primary elements         | WCAG AAA on white (6.1:1)  |
| color-primary-100 | #BBDEFB | Selected backgrounds, light highlights   | Do not use for text        |
| color-error-500   | #D32F2F | Error messages, destructive actions      | WCAG AA on white (5.5:1)   |
| color-error-100   | #FFCDD2 | Error backgrounds, error field highlight | Do not use for text        |
| color-neutral-900 | #212121 | Primary text, headings                   | WCAG AAA on white (16.1:1) |
| color-neutral-600 | #757575 | Secondary text, captions                 | WCAG AA on white (4.6:1)   |
| color-neutral-200 | #EEEEEE | Borders, dividers, disabled backgrounds  | Do not use for text        |

**Spacing Scale**:

| Token    | Value | Usage                                             |
| -------- | ----- | ------------------------------------------------- |
| space-1  | 4px   | Tight padding (icon-to-text, badge internal)      |
| space-2  | 8px   | Compact padding (button internal, input internal) |
| space-3  | 12px  | Standard element margin                           |
| space-4  | 16px  | Standard content padding                          |
| space-6  | 24px  | Section padding, card padding                     |
| space-8  | 32px  | Between components in a group                     |
| space-12 | 48px  | Between sections                                  |
| space-16 | 64px  | Between major page zones                          |

### Example: Mood Board Descriptive Words

**Direction: "Serene Precision"**

Positive descriptors (what this IS):

- Serene — calm, unhurried, spacious
- Precise — intentional, measured, no excess
- Structured — organized, gridded, systematic
- Confident — bold type, clear hierarchy, no hesitation
- Professional — polished, refined, trustworthy
- Spacious — generous white space, breathing room

Negative descriptors (what this is NOT):

- NOT Playful — no rounded shapes, no bouncy animations, no primary colors
- NOT Loud — no gradients, no busy patterns, no competing focal points
- NOT Whimsical — no hand-drawn elements, no irregular layouts
- NOT Nostalgic — no retro typography, no vintage color palettes
- NOT Maximalist — if in doubt, remove it

---

## Data Visualization in Design Boards

### Research Data on Design Boards

When design decisions reference user research, present the data:

- **Usability test results**: "5/7 participants failed to find the search function"
  presented as a sticky with the test metric, not as a paragraph.
- **Analytics data**: "43% of users never open the hamburger menu" with source and date.
- **Survey results**: "NPS score: 32 (down from 45 last quarter)" with trend arrow.
- **Heatmap summaries**: Describe the pattern — "Heavy click clustering in top-left
  navigation; minimal engagement with bottom-right CTA."

### Component Usage Data

For design system boards, include usage metrics:

- Component adoption rate: "Button component used in 94% of pages"
- Variant distribution: "Primary: 60%, Secondary: 30%, Ghost: 10%"
- Accessibility compliance: "12/15 components pass WCAG AA"

---

## Questions Every Design Board Should Answer

### For Any Viewer (5-second scan)

1. What is being designed? (Product area, feature, screen)
2. What stage is the design? (Exploration, wireframe, high-fidelity, final)
3. What feedback or decisions are needed?

### For a Product Manager (30-second review)

4. Does this design solve the defined user problem?
5. Are all required user stories addressed?
6. What trade-offs were made and why?

### For a Developer (2-minute study)

7. What components and interactions need to be built?
8. What are the responsive behaviors?
9. What are the edge cases and error states?

### For a Design Peer (2-minute critique)

10. Does the visual hierarchy support the user's goal?
11. Is the design consistent with the design system?
12. Are there accessibility concerns?

### For a Stakeholder (10-second glance)

13. Does this look professional and aligned with brand?
14. Is the design scope appropriate for the timeline?
15. What needs my approval or input?
