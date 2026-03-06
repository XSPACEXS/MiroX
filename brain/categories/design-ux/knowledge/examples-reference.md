# Design & UX Boards — Examples & Reference

## Overview

This document provides detailed breakdowns of exemplary design and UX boards, anti-
patterns to avoid, before/after comparisons, and specific design elements worth
borrowing. Design boards are judged more harshly than other board types because they
represent the design team's own standards — every example here demonstrates the level
of craft expected.

---

## Example 1: The Model Wireframe Board

### Board: "Dashboard Redesign — Wireframes v2.1"

**Why it is great**:

This wireframe board uses the Screen Gallery pattern with 8 desktop screens and 5 mobile
screens, each with annotation sidecars.

1. **Context section leads the board**: Before any wireframe appears, a 600px-tall context
   frame explains the user problem ("Dashboard load time perceived as slow because users
   cannot find their most-used features quickly"), the design goal ("Reduce time to first
   meaningful action from 12 seconds to under 5"), and the constraints ("Must use existing
   component library; no new components for v1").

2. **Wireframes use realistic content**: No lorem ipsum anywhere. The dashboard shows
   "Revenue: $247,500 (up 12%)", real project names ("Q2 Marketing Campaign"), and actual
   navigation labels ("Dashboard", "Projects", "Team", "Settings"). This makes the design
   evaluable — you can assess whether the hierarchy is right for real content.

3. **Annotations are precise and numbered**: Each screen has 3-6 numbered annotations.
   Annotation #3 on Screen 1: "Search field auto-expands to 400px on focus. Results appear
   as a dropdown after 200ms debounce. Minimum 2 characters to trigger search." This is
   specific enough for a developer to build from.

4. **Responsive behavior is documented**: Below the desktop gallery, a "Responsive Notes"
   frame shows how the layout adapts: "At 768px: Sidebar collapses to icon-only (64px).
   At 480px: Sidebar becomes bottom tab bar with 5 items. Card grid switches from 3-col
   to 1-col."

5. **A version comparison section**: At the bottom, a "v1 vs v2" comparison shows key
   screens side by side at reduced scale (50%). Annotations highlight what changed and why:
   "v2 moves the quick-actions bar above the fold — analytics showed 78% of users never
   scrolled to reach it in v1."

**Design elements to steal**:

- Context frame with user problem, design goal, and constraints — sets up every wireframe
- Realistic UI copy in wireframes — enables genuine design evaluation
- Numbered annotations with a separate annotation panel per screen
- Responsive behavior documented as a dedicated section with breakpoint specifications
- Version comparison at the bottom showing evolution with change rationale

### Metrics of Excellence

| Dimension                | Score (1-5) | Notes                                                      |
| ------------------------ | ----------- | ---------------------------------------------------------- |
| Context and rationale    | 5           | Problem, goal, constraints all present                     |
| Content realism          | 5           | All wireframes use realistic data and copy                 |
| Annotation quality       | 5           | Precise, numbered, developer-actionable                    |
| Responsive documentation | 5           | All breakpoints documented with behavior changes           |
| Review readiness         | 4           | Good feedback zones but could add explicit review criteria |

---

## Example 2: The Comprehensive User Flow

### Board: "Onboarding Flow — New User to First Value"

**Why it is great**:

This user flow uses the Flow Canvas pattern to map the entire onboarding journey from
landing page to dashboard, including all error paths and edge cases.

1. **Happy path is visually dominant**: The primary flow uses 3px connectors in the primary
   blue color, while alternate paths use 1.5px dashed connectors in gray. Your eye
   naturally follows the happy path first, then discovers the branches.

2. **Every decision point is labeled with real criteria**: The diamond at "Email verified?"
   does not just say yes/no — it says "Verified within 24h → Profile Setup" and "Not
   verified after 24h → Account purged, redirect to Sign Up with message."

3. **Metrics are embedded at key steps**: Small metric badges show real drop-off data:
   "Sign Up → Email Verification: 14% drop-off" and "Profile Setup → Dashboard: 8%
   skip rate." This connects the flow diagram to analytics and prioritizes which steps
   need the most design attention.

4. **Error states are fully specified**: Each error path shows the error message, the
   recovery action, and the destination. "Payment Error: 'Your card was declined. Please
   try a different payment method.' → 'Try Again' returns to Payment form with fields
   preserved. 'Use a different card' clears the form."

5. **A "Flow Summary" sidebar**: A vertical sidebar on the right lists every path through
   the flow with estimated time: "Happy path: 4 min. With profile skip: 2 min. With
   email delay: up to 24h. With payment error: +1 min per retry."

**Design elements to steal**:

- Metric badges embedded at flow steps showing conversion/drop-off data
- Fully specified error states with messages, recovery actions, and destinations
- Flow summary sidebar listing all paths with time estimates
- Decision diamonds with specific criteria (not just yes/no)
- Color-coded connectors: blue for happy path, gray for alternate, red for error

---

## Example 3: The Definitive Design System Board

### Board: "DesignKit 2.0 — Component Library & Design Tokens"

**Why it is great**:

This design system board uses the Component Grid pattern to document 22 components
across 6 categories, plus a complete design token system.

1. **Tokens come first**: The top 800px of the board is dedicated to design tokens —
   colors, typography, spacing, radius, shadows. Every component below references these
   tokens by name, creating a traceable system: "Button padding: space-4 (16px)."

2. **Components show every state**: Each component frame shows Default, Hover, Active,
   Focus, Disabled, Loading, and Error states where applicable. Nothing is assumed.
   The Button component shows 7 variants (Primary, Secondary, Ghost, Danger, Icon-only,
   Icon+Text, Full-width) x 5 states each = 35 specimens.

3. **Usage guidelines are embedded**: Below each component, a "When to use" and "When NOT
   to use" section provides guardrails: "When to use Primary Button: For the single most
   important action on a page. Maximum 1 per viewport. When NOT to use: For secondary
   actions, navigation, or low-commitment actions — use Secondary or Ghost instead."

4. **Anti-patterns are shown visually**: A red-bordered "Don't" section shows common
   misuses: "Don't: Multiple primary buttons in the same section. Don't: Primary button
   for 'Cancel' — use Secondary or Ghost. Don't: Icon-only button without tooltip."

5. **Accessibility requirements per component**: Each component includes its WCAG
   requirements: "Button: Minimum touch target 44x44px. Focus ring visible (3px, offset
   2px). Color contrast 4.5:1 for text. Keyboard navigable via Tab key."

**Design elements to steal**:

- Token-first architecture — tokens at the top, components reference tokens by name
- Exhaustive state documentation for every variant of every component
- Embedded usage guidelines with "When to use" and "When NOT to use"
- Visual anti-patterns in red-bordered "Don't" sections
- Per-component accessibility requirements
- Versioning: component version numbers (Button v2.1) with changelog links

---

## Example 4: The Evocative Mood Board

### Board: "Project Nova — Visual Direction: Serene Precision"

**Why it is great**:

This mood board uses the Mood Cluster pattern with five visual clusters plus descriptive
text to establish a visual direction for a B2B analytics dashboard.

1. **The creative brief is concise and specific**: "We need a visual language for a B2B
   analytics dashboard used by data analysts who spend 6+ hours daily in the product.
   The mood should feel calm and professional — a space for focused work, not a consumer
   app that demands attention."

2. **Color palette has rationale**: Not just hex codes but reasoning: "Primary Blue
   (#1976D2): Professional, trustworthy, reduces visual fatigue during extended use.
   Accent Amber (#FF8F00): Warm counterpoint to the cool palette — used sparingly for
   alerts and calls to action that need warmth."

3. **Anti-mood section is as detailed as the mood**: "NOT: Vibrant neon dashboards (Stripe,
   Linear). NOT: Dense, dark-mode-only interfaces (Bloomberg Terminal). NOT: Playful,
   illustrated styles (Notion, Figma). NOT: Minimal to the point of emptiness (iA Writer)."

4. **Typography specimens show hierarchy, not just fonts**: Instead of just showing the
   font name, the mood board shows a complete hierarchy rendered in the proposed typeface:
   "Dashboard Overview" at 32pt Bold, "Revenue by Channel" at 20pt Semi-bold, "This chart
   shows monthly recurring revenue segmented by acquisition channel" at 14pt Regular.

5. **Reference screenshots are annotated**: Each competitive/inspiration screenshot has
   a sticky note explaining what to take from it: "From Linear: the clean data table
   with minimal borders. NOT from Linear: the dark mode default or the bold accent colors."

**Design elements to steal**:

- Creative brief at the top with specific context and constraints
- Color swatches with rationale explaining WHY each color was chosen
- Anti-mood section with specific competitive references
- Typography specimens showing a complete hierarchy, not just font names
- Annotated reference screenshots ("Take THIS, not THAT")

---

## Example 5: The Structured UI Review

### Board: "Checkout Flow Redesign — Design Review Session"

**Why it is great**:

This UI review board uses the Review Wall pattern with three design options presented
for team evaluation.

1. **Review criteria are defined upfront**: Before the options are shown, a "Review
   Criteria" section lists exactly what to evaluate: "(1) Does the flow minimize steps
   to purchase? (2) Is the trust signal placement effective? (3) Can users easily edit
   cart contents? (4) Is the mobile experience equivalent to desktop?" This prevents
   unfocused feedback.

2. **Each option has explicit trade-offs**: Option A: "+ Fewest steps (3) / - Less cart
   visibility during checkout." Option B: "+ Best cart editing experience / - One
   additional step." Option C: "+ Strongest trust signals / - More cognitive load per step."

3. **Feedback is structured by reviewer role**: Stickies are color-coded: Pink = Design
   feedback, Blue = Engineering feedback, Green = PM feedback, Yellow = General. This
   prevents the "loudest voice wins" problem.

4. **Vote counts and decision are recorded**: "Vote tally: Option A = 2, Option B = 5,
   Option C = 1. Decision: Option B selected (March 7). Decision maker: Sarah K.
   Rationale: Engineering team confirmed step count is equivalent to A with lazy loading.
   PM confirmed cart editing is the #1 user request."

5. **Next steps are actionable**: "Next: (1) Refine Option B with feedback from eng —
   deadline Mar 12. (2) Add mobile wireframes — deadline Mar 14. (3) Usability test
   with 5 users — scheduled Mar 19. (4) Final review — Mar 21."

**Design elements to steal**:

- Upfront review criteria that focus feedback on what matters
- Role-coded feedback stickies (pink = design, blue = eng, green = PM)
- Explicit trade-off descriptions per option
- Vote tally + named decision-maker + rationale
- Actionable next steps with deadlines

---

## Anti-Patterns

### Anti-Pattern 1: The Figma Screenshot Dump

**What it looks like**: 20-30 screenshots from Figma pasted at random sizes across the
board. Some overlap. No annotations. No flow connections. No context.

**Why it fails**: Viewers have no idea what they are looking at, what order to read in,
what stage the design is, or what feedback is needed. The board is useless for anyone
who was not in the original design session.

**Fix**: Add screen labels, numbered annotations, flow connectors, a context section,
and feedback zones. Every screen needs at minimum a name, its place in the flow, and
1-2 annotations about key interactions.

### Anti-Pattern 2: The Premature High-Fidelity Board

**What it looks like**: Pixel-perfect mockups with final colors, typography, and imagery
presented during the wireframe phase of design.

**Why it fails**: Reviewers fixate on visual details ("I don't like that shade of blue")
instead of structural issues ("This flow has too many steps"). High fidelity signals
"this is finished" and discourages structural feedback.

**Fix**: Match fidelity to confidence. During exploration, use grayscale wireframes.
Save color and polish for the refinement phase. When presenting wireframes, explicitly
label them: "These are LOW FIDELITY — please focus on flow and layout, not visuals."

### Anti-Pattern 3: The Mood Board Without Direction

**What it looks like**: 50 beautiful images with no descriptive words, no anti-mood, no
creative brief, and no color extraction. It is a Pinterest board on a Miro canvas.

**Why it fails**: Beautiful images without synthesis do not provide design direction. Two
designers looking at the same image board will draw completely different conclusions about
the visual direction.

**Fix**: Add (1) a creative brief explaining the context, (2) descriptive words
synthesizing the mood, (3) an anti-mood section explaining what this is NOT, and (4)
extracted color palettes and typography directions.

### Anti-Pattern 4: The Incomplete Design System

**What it looks like**: A design system board that documents buttons and inputs but
ignores feedback components (toasts, modals), navigation patterns, layout systems,
and accessibility requirements.

**Why it fails**: An incomplete design system is worse than no design system because
it creates a false sense of coverage. Developers build the documented components
consistently but improvise everything else, creating inconsistency where it matters most.

**Fix**: Audit the product for every component in use. Document them all, even if some
are brief. Prioritize based on usage frequency, but ensure every component has at least
a basic entry.

---

## Design Elements Library

### Reusable Elements Across All Design Boards

1. **Version Badge**: Small rounded rectangle (80x28px), positioned top-right of a frame.
   "v2.1" in 12pt, white text on primary-color background. Shows which iteration this is.

2. **Design Stage Badge**: Pill shape (120x28px) next to the board title. "WIREFRAME" /
   "HIGH-FIDELITY" / "APPROVED" in 12pt ALL CAPS. Color: gray for draft, blue for review,
   green for approved.

3. **Annotation Marker System**: Numbered circles (28-32px diameter, amber fill, white
   number). Placed on the wireframe at the interaction point. Corresponding note in the
   annotation sidecar references the number.

4. **Feedback Zone Template**: Dashed-border frame (400x300px minimum), labeled "Feedback
   Zone" at the top, with light yellow background. Contains prompting text: "What works?
   What concerns you? What would you change?"

5. **Decision Log Entry**: Horizontal card (full width, 60px tall). Format: "[Date] |
   [Decision] | [Decided by] | [Rationale]". Green left-border for approved decisions,
   red for rejected alternatives, gray for deferred.

6. **Responsive Breakpoint Indicator**: Vertical line spanning the full height of a
   wireframe with a label badge at the top: "768px — Tablet" or "480px — Mobile."
   Color: secondary blue.

7. **Change Highlight**: A semi-transparent colored overlay (20% opacity accent color)
   around the area that changed between versions. Labeled: "CHANGED in v2.1."

8. **Figma Link Card**: Small card (180x60px) with Figma logo icon, file name, and a
   "Open in Figma" label. Positioned near the relevant wireframe. Linked to the actual
   Figma file.
