# Design & UX Boards — Variations

## Overview

Design boards must adapt to wildly different contexts — a SaaS startup's wireframe board
looks nothing like a healthcare enterprise's design system documentation. The audience,
regulatory environment, design maturity, and cultural expectations all shape what belongs
on the board and how it should be presented. This guide provides adaptation guidelines
for every major context.

---

## Industry Variations

### SaaS / Cloud Products

**Characteristics**: Rapid iteration, feature flags, data-driven design, multi-tenant
with customization layers, freemium conversion funnels.

**Adaptations**:

- **Wireframe boards** should include empty states, loading states, and onboarding states
  for every screen — these are critical for SaaS conversion
- **User flows** should show the free-to-paid conversion path as a distinct flow with
  conversion metrics at each step
- **Design systems** should document dark mode variants if the product supports theme
  switching
- **Mood boards** should reference competitor SaaS products (Slack, Notion, Linear) as
  part of the competitive landscape
- Include "Feature Flag" annotations on wireframes: "This section only visible when
  `new_dashboard` flag is enabled"

### E-Commerce / Retail

**Characteristics**: Conversion-focused, mobile-heavy, seasonal redesigns, trust-critical
checkout flows, product photography integration.

**Adaptations**:

- **Wireframe boards** must include product image placeholder ratios (1:1 for grid, 4:3
  for detail, 16:9 for hero) — these are not generic gray boxes
- **User flows** should map the complete purchase funnel: Browse → Product → Cart →
  Checkout → Confirmation → Post-purchase, with metrics at every step
- **Design systems** need a "Commerce Components" section: product cards, price displays,
  size selectors, inventory indicators, trust badges
- **UI reviews** should evaluate mobile layouts first — 70%+ of e-commerce traffic is mobile
- Include seasonal variant documentation: How do components adapt for Black Friday,
  holiday themes, or sale events?

### Healthcare / Medical

**Characteristics**: HIPAA compliance, accessibility-critical (Section 508), clinical
workflow complexity, high-stakes user errors, diverse user literacy levels.

**Adaptations**:

- **All boards** must include an "Accessibility Audit" section documenting WCAG AA
  compliance for every screen
- **Wireframe boards** should annotate PHI (Protected Health Information) fields:
  "This field displays patient name — HIPAA requires audit logging of every access"
- **User flows** should include clinical safety checks: "Medication dosage confirmation
  requires manual re-entry (not auto-fill) per FDA guidance"
- **Design systems** must use high-contrast color tokens that pass WCAG AAA (not just AA)
  because many medical users work in challenging lighting conditions
- Error states are life-critical: "Error messages for medication interactions must display
  within 500ms and use red background with 8:1 contrast ratio"

### Fintech / Banking

**Characteristics**: Trust-critical, compliance-heavy, multi-step verification flows,
data visualization-intensive, multi-currency/multi-language.

**Adaptations**:

- **Wireframe boards** must show all verification and security steps explicitly — 2FA
  screens, identity verification, document upload flows
- **User flows** must include compliance checkpoints: KYC verification, anti-money
  laundering checks, transaction limits
- **Design systems** need specialized financial components: currency displays with
  locale-specific formatting, transaction tables, account balance cards with masking
  options
- **Mood boards** should emphasize trust signals: secure iconography, professional color
  palettes (blues, grays), clear typography hierarchies
- Include localization annotations: "Currency: $1,234.56 (US) vs 1.234,56 EUR (DE)"

### Developer Tools / APIs

**Characteristics**: Code-centric, terminal/CLI workflows, developer documentation,
syntax highlighting, technical audiences who value efficiency over aesthetics.

**Adaptations**:

- **Wireframe boards** must include code block components with syntax highlighting
  specifications
- **Design systems** need monospace typography tokens, code block styling, terminal/CLI
  component specifications, and API response display components
- **User flows** should document CLI and API workflows alongside GUI flows — developers
  often switch between interfaces
- **Mood boards** should reference developer-loved tools (VS Code, GitHub, Linear, Vercel)
  as aesthetic benchmarks
- Dark mode is not optional — it should be the primary design mode with light mode as
  the variant

---

## Team Size and Maturity Variations

### Solo Designer / Early Startup

**Adaptations**:

- **Combine boards**: A single "Design Hub" board that includes wireframes, a mini
  user flow, and key component specifications. No need for separate boards.
- **Skip the mood board**: At this stage, visual direction is in the designer's head.
  Document it directly in the wireframe board's design context section.
- **Lightweight design system**: Document only the 5-8 most-used components. Add more
  as the product grows.
- **Focus on speed**: Use low-fidelity wireframes exclusively. High-fidelity mockups
  go directly into Figma, not onto the Miro board.

### Small Design Team (2-5 designers)

**Adaptations**:

- **Shared design system board**: The team needs a single source of truth for components.
  This becomes the most important board.
- **UI review boards for every major design decision**: With 2-5 people, every voice
  matters and structured reviews prevent dominant personalities from controlling direction.
- **Wireframe boards include design rationale**: Since designers hand off to each other,
  the reasoning behind decisions must be documented, not assumed.

### Large Design Org (10+ designers)

**Adaptations**:

- **Design system as a dedicated program**: The design system board becomes a suite
  of boards — one for tokens, one per component category, one for patterns, one for
  accessibility guidelines
- **Standardized wireframe templates**: All designers use the same board template for
  wireframes to ensure consistency across the product
- **Formal review boards with role-based feedback**: Design reviews include structured
  feedback from design peers, design leadership, and cross-functional partners
- **Mood boards require approval**: Visual direction changes affect the entire product.
  Mood board reviews become formal milestone gates.
- **Design system governance board**: A meta-board tracking component proposals, reviews,
  and deprecation schedules

---

## Complexity Variations

### Simple Screen (Single View, No Interaction)

- Single frame with the wireframe + 3-4 annotations
- No separate flow needed
- Minimal context (1-2 sentences of design intent)
- Size: 2000x1500px

### Standard Feature (3-8 Screens)

- Screen Gallery with annotation sidecars for each screen
- Mini flow diagram showing screen sequence
- Context section with user problem and design goal
- Responsive notes for key breakpoints
- Size: 5000x3500px

### Complex System (15+ Screens, Multi-Path)

- Dedicated user flow board + separate wireframe board + design decision board
- The user flow board maps all paths with decision points
- The wireframe board shows each screen in detail with full annotations
- The design decision board documents trade-offs and chosen directions
- Total size: 3 boards at 5000x4000px each, linked together

### Design System (Enterprise-Scale)

- Board-of-boards architecture:
  - Hub board: Overview with links to all sub-boards
  - Token board: Colors, typography, spacing, shadows, radius
  - Component boards: One per category (Forms, Navigation, Feedback, Data Display)
  - Pattern board: Page-level patterns, layout templates, responsive strategies
  - Accessibility board: WCAG requirements, testing procedures, compliance status

---

## Cultural and Organizational Considerations

### Design-Forward Organizations (Apple, Airbnb Model)

- Mood boards are taken seriously and reviewed by senior leadership
- Design system boards are maintained as rigorously as the codebase
- UI review boards include sophisticated critique structures with design principles as
  evaluation criteria
- Wireframe boards may include high-fidelity elements even at the wireframe stage because
  the culture expects polish

### Engineering-Forward Organizations (Google, Meta Model)

- Wireframe boards should include more technical annotations (API endpoints, component
  library references, performance considerations)
- Design system boards should include code snippets alongside visual specimens
- User flow boards should reference technical architecture (where are the API calls?
  which screens are server-rendered vs client-rendered?)
- Focus on functional clarity over aesthetic polish

### Research-Forward Organizations (IDEO, IBM Design Model)

- All design boards should include a "Research Foundation" section with user quotes,
  usability test results, and analytics data
- Mood boards should reference ethnographic research and cultural insights, not just
  visual references
- UI review boards should include "Research Evidence" alongside trade-offs
- User flow boards should annotate known usability issues with severity ratings

### Remote-First Teams

- Add "How to Navigate This Board" instructions in the top-right corner
- Use Miro's presentation mode frames for async review sessions
- Increase annotation density — things that might be explained verbally in person need
  to be written on the board
- Include a "Questions & Discussion" frame for async feedback with response tracking
- Add video recording links for design walkthrough explanations

---

## Cross-References

### Related Category Boards

| Need                                     | Related Category          | Board Type                 |
| ---------------------------------------- | ------------------------- | -------------------------- |
| User research input for design decisions | 09-Customer-Journey       | Persona Board, Empathy Map |
| Feature context for wireframes           | 05-Product-Development    | Feature Planning Board     |
| Design critique frameworks               | 08-Workshops              | Design Thinking Workshop   |
| Brand guidelines for mood boards         | 04-Marketing              | Brand Guidelines Board     |
| Technical constraints for wireframes     | 21-Technical-Architecture | System Diagram             |
| Product vision for design direction      | 03-Strategy-Planning      | Vision Board               |

### When to Combine Boards

- **Discovery Workshop Board**: Combines Persona Board (09) + Mood Board (06) + User Flow
  (06) + Wireframe sketches (06). Use: Design sprint or discovery workshop.
- **Design Handoff Board**: Combines Wireframe Board (06) + Design System reference (06) +
  Feature Spec (05). Use: Handing off designs to engineering.
- **Design Retrospective**: Combines UI Review (06) + version comparisons + Retrospective
  format (08). Use: Post-launch design reflection.
