# Product Development Boards — Variations

## Overview

No two product teams work the same way. Industry, team size, organizational maturity,
and cultural context all influence what a product development board should look like.
This guide provides specific adaptation guidelines for different contexts, ensuring
that the core principles remain intact while the execution adapts.

---

## Industry Variations

### SaaS / Cloud Software

**Characteristics**: Continuous delivery, feature flags, A/B testing, usage analytics,
multi-tenant architecture, subscription metrics.

**Adaptations**:

- **Roadmaps** should include a "Feature Flag" column showing which items ship behind
  flags vs. to all users immediately
- **Feature specs** should include a "Rollout Plan" section: percentage ramp (1% → 10%
  → 50% → 100%), rollback criteria, and monitoring dashboards
- **Success metrics** should reference SaaS-specific KPIs: activation rate, retention
  rate, expansion revenue, NRR (Net Revenue Retention)
- **Release plans** should replace "launch date" with "flag-on date" and "GA date"
- Add a "Telemetry" section to feature specs specifying what events to track

### E-Commerce / Marketplace

**Characteristics**: Seasonal peaks, conversion funnels, inventory constraints, multi-
sided marketplace dynamics, payment and compliance requirements.

**Adaptations**:

- **Roadmaps** should include a seasonal calendar layer showing Black Friday, Prime Day,
  holiday freeze periods, and post-holiday roadmap resets
- **Feature specs** for checkout or payment flows must include a "Compliance" section
  (PCI DSS, GDPR, regional tax requirements)
- **Prioritization** should weight revenue impact more heavily — include estimated GMV
  (Gross Merchandise Value) lift per feature
- **Release plans** must include a "Freeze Period" marker where deployments are halted
  during peak traffic seasons
- Success metrics should reference conversion rate, AOV (Average Order Value), cart
  abandonment rate, and seller/buyer satisfaction

### Healthcare / Regulated Industries

**Characteristics**: Compliance requirements (HIPAA, FDA, SOC 2), audit trails, long
approval cycles, patient safety considerations, change control boards.

**Adaptations**:

- **Feature specs** must include a "Regulatory Impact" section: does this feature touch
  PHI (Protected Health Information)? Is a security review required? Does it change
  the product's FDA classification?
- **Acceptance criteria** must include compliance criteria: "Data is encrypted at rest
  and in transit per HIPAA 164.312"
- **Release plans** must include a "Change Control Board Approval" milestone and a
  "Validation Protocol" phase before deployment
- **Risk sections** should include a "Patient Safety Impact" assessment
- All boards should include version history and audit trail metadata

### Fintech / Financial Services

**Characteristics**: Regulatory compliance (SOX, PSD2, KYC/AML), transaction integrity,
extreme performance requirements, risk management, multi-currency support.

**Adaptations**:

- **Feature specs** for transaction-related features must include a "Reconciliation"
  section explaining how the feature maintains financial integrity
- **Technical requirements** should include formal SLAs: uptime (99.99%), latency (< 50ms
  for transactions), data consistency guarantees
- **Risk sections** must include financial risk: "What is the maximum financial exposure
  if this feature fails?" with dollar amounts
- **Prioritization** should include a "Regulatory Mandate" override: features required by
  regulation are automatically highest priority regardless of scoring

### Developer Tools / API Products

**Characteristics**: Backward compatibility, versioning, developer experience, SDK
support, documentation-as-feature, community feedback loops.

**Adaptations**:

- **Feature specs** should include an "API Contract" section: endpoints, request/response
  schemas, authentication, rate limits, and versioning strategy
- **Roadmaps** should include a "Developer Experience" swimlane covering documentation,
  SDK updates, and developer portal improvements
- **Release plans** must include "Deprecation Notice" timelines for breaking changes
  (typically 6-12 months)
- **User stories** should be written from the developer's perspective: "As a developer
  integrating the payments API, I want clear error codes so I can handle failures
  gracefully in my application"
- Include a "Migration Guide" section in release plans for breaking changes

---

## Team Size Variations

### Small Team (2-5 people)

**Characteristics**: Everyone knows everything. Communication is synchronous. Roles
are fluid. Process overhead is the enemy.

**Adaptations**:

- **Reduce board count**: Combine the roadmap and feature spec into a single board.
  A small team does not need separate strategic and tactical views.
- **Simplify structure**: Use 3-4 frames instead of 7. Problem → Stories → Plan is
  enough. Skip the formal Dependencies frame (mention dependencies in-line).
- **Informal content**: User stories can be shorter. Skip formal acceptance criteria
  for straightforward features — a verbal handshake suffices.
- **Board size**: 3000x2000px is sufficient. No need for a 5000px canvas.
- **Update cadence**: The board is updated in real-time during conversations, not in
  scheduled planning ceremonies.

### Medium Team (6-15 people)

**Characteristics**: Sub-teams form. Communication starts to require structure. Roles
become defined. Some process is needed for alignment.

**Adaptations**:

- **Standard board structure**: Use the full layout patterns with all frames. The team
  needs the structure to stay aligned across sub-groups.
- **Swimlanes by sub-team**: Roadmaps and release plans should have swimlanes for each
  sub-team (Frontend, Backend, Design, QA).
- **Formal user stories with acceptance criteria**: Write them properly — the sub-teams
  need clarity since they cannot rely on hallway conversations.
- **Owner fields**: Every item needs an explicit owner. "The team" is not an owner.
- **Weekly board review**: The board is updated weekly in a standing meeting.

### Large Team (16-50 people)

**Characteristics**: Multiple product managers. Engineering leads manage sub-teams.
Design has its own workstream. Cross-team dependencies are constant. Political
dynamics emerge.

**Adaptations**:

- **Board hierarchy**: Create a board-of-boards architecture:
  - Level 1: Product-level roadmap (executive view, all themes)
  - Level 2: Theme-level feature boards (one per strategic theme)
  - Level 3: Feature-level spec boards (one per feature)
  - Use Miro card links to navigate between levels
- **Dependency boards**: Create a dedicated cross-team dependency board that shows all
  inter-team handoffs, blockers, and coordination points
- **Standardized templates**: Every feature spec and release plan must use the same
  template to ensure consistency across teams
- **Audience layering**: The same board may need an executive summary frame at the top
  and detailed implementation frames below
- **Board governance**: Assign a board owner responsible for keeping each board current

### Enterprise (50+ people / Multi-Product)

**Characteristics**: Portfolio management. Program-level coordination. OKR cascading.
Quarterly business reviews. Organizational change management.

**Adaptations**:

- **Portfolio-level roadmap**: A high-level board showing all products on a single
  timeline with interdependencies
- **Program increment (PI) planning boards**: SAFe-style boards for quarterly planning
  across multiple teams
- **Standardized status reporting**: Every board must include a status dashboard that
  rolls up to portfolio-level dashboards
- **Access-controlled boards**: Different audiences get different boards — executives
  see the portfolio view, teams see their feature specs
- **Board templates as organizational standards**: Publish templates to a shared Miro
  library that all teams must use

---

## Complexity Variations

### Simple Feature (1-2 sprint effort)

- Skip the full feature spec — use a single-frame "Feature Card" with: problem (2
  sentences), solution (3 sentences), 2-3 user stories, estimated effort, and owner.
- Size: 1500x800px single frame with colored header.
- No wireframes, no dependency section, no timeline (it fits in one sprint).

### Medium Feature (3-6 sprint effort)

- Use the full Feature Spec Canvas but with lighter sections. 3-5 user stories with
  brief acceptance criteria. 1-2 wireframe descriptions. Technical requirements as a
  bullet list rather than stickies. A simple timeline with 3-4 rows.
- Size: 4000x3000px.

### Complex Feature (7+ sprint effort, cross-team)

- Full Feature Spec Canvas with maximum detail. 5-10 user stories with exhaustive
  acceptance criteria. Multiple wireframe screens. Detailed technical architecture.
  Formal dependency and risk analysis. Phased delivery timeline with review checkpoints.
- Consider splitting into a "Strategy" board (problem, vision, success metrics) and an
  "Execution" board (stories, wireframes, tech reqs, timeline).
- Size: 5000x3600px or larger.

### Platform / Infrastructure (No UI)

- Replace "Wireframes" with "API Contract / System Design" frame.
- Replace "User Stories" with "Engineering Stories" using "As a [consuming service], I
  need [capability], so that [downstream outcome]" format.
- Add a "Backward Compatibility" frame: what existing behavior must be preserved?
- Add a "Migration Plan" frame: how do existing systems transition to the new platform?
- Success metrics focus on technical KPIs: latency, throughput, error rate, uptime.

---

## Cultural and Organizational Considerations

### Remote-First Teams

- Add explicit instructions on board: "How to navigate this board" text block in the
  top-right corner with numbered steps.
- Use Miro's presentation mode frames to guide async viewers through the board in the
  intended order.
- Add a "Discussion Log" frame where remote team members can leave async comments and
  questions with timestamps.
- Increase font sizes by 1 level (read in screen shares on laptops with small screens).

### Agile / Scrum Teams

- Align board structure with sprint ceremonies:
  - User story map → Sprint planning input
  - Release plan → Sprint review artifact
  - Roadmap → Sprint planning context
- Include sprint identifiers on story stickies ("Sprint 14", "Sprint 15")
- Add "Definition of Done" checklist on release plan boards
- Use velocity data in timeline estimations

### Design-Heavy Organizations

- Expand the "Wireframes" section to include: low-fi sketches, hi-fi mockups, interactive
  prototype links (Figma/Principle), and design review feedback
- Add a "Design Tokens" section referencing the design system components needed
- Include a "Design Review" milestone in the delivery timeline
- Color palette should align with the organization's design system

### Data-Driven Organizations

- Expand "Success Metrics" into a full "Measurement Plan" section with: metric definitions,
  data sources, dashboard locations, baseline dates, and measurement frequency
- Add an "Experiment Plan" section for A/B test design, sample size calculations, and
  success criteria
- Include "Data Engineering Requirements" alongside technical requirements

---

## Cross-References

### Related Category Boards

| Need                                | Related Category          | Board Type                      |
| ----------------------------------- | ------------------------- | ------------------------------- |
| User journey context for story maps | 09-Customer-Journey       | Journey Map, Persona Board      |
| Design details for feature specs    | 06-Design-UX              | Wireframe Board, User Flow      |
| Strategic context for roadmaps      | 03-Strategy-Planning      | OKR Planning, Vision Board      |
| Sprint-level execution              | 02-Project-Management     | Kanban Board, Sprint Planning   |
| Go-to-market coordination           | 04-Marketing              | GTM Strategy, Campaign Planning |
| Technical architecture              | 21-Technical-Architecture | System Diagram, API Map         |
| Startup-specific product boards     | 15-Startup                | MVP Planning, Lean Canvas       |

### When to Combine Boards

Some use cases call for hybrid boards that blend elements from multiple categories:

- **Product Launch Board**: Combines Release Plan (05) + GTM Strategy (04) + Campaign
  Planning (04). Use: Coordinating product and marketing for a major launch.
- **Discovery Board**: Combines Persona Board (09) + User Story Map (05) + Wireframe
  Board (06). Use: Early-stage product discovery before committing to a roadmap.
- **Quarterly Planning Board**: Combines OKR Planning (03) + Product Roadmap (05) +
  Prioritization Matrix (05). Use: Quarterly planning offsite where strategy meets
  execution.
