# Decision Tree

## Overview

- **Purpose**: A visual decision tree that maps complex decisions as branching paths with criteria nodes, outcome scenarios, risk indicators, and recommendation highlights. Each decision point is a fork in the road with clear criteria for choosing a path. Terminal nodes show outcomes with probability estimates, impact assessments, and risk flags. The tree structure makes the logic of complex decisions transparent, debatable, and documentable — turning gut feelings into structured analysis that teams can evaluate together.
- **Best For**: Product teams making build-vs-buy decisions, leadership teams evaluating strategic options, engineering teams choosing technology stacks, operations teams designing escalation procedures, any team facing a multi-factor decision with cascading consequences.
- **Complexity**: Advanced
- **Board Size**: 5000 x 3500px

## Color Scheme

| Role             | Color          | Hex     |
| ---------------- | -------------- | ------- |
| Primary          | Deep Violet    | #6C5CE7 |
| Secondary        | Aqua Teal      | #00CEC9 |
| Accent           | Hot Pink       | #FD79A8 |
| Decision Node    | Deep Violet    | #6C5CE7 |
| Criteria Branch  | Slate Blue     | #636E72 |
| Positive Outcome | Emerald Green  | #00B894 |
| Negative Outcome | Coral Red      | #FF7675 |
| Neutral Outcome  | Golden Yellow  | #FDCB6E |
| Risk Indicator   | Warning Orange | #E17055 |
| Recommended Path | Bright Teal    | #00CEC9 |
| Connector Lines  | Medium Gray    | #B2BEC3 |
| Background       | Soft White     | #F8F9FA |
| Text             | Charcoal       | #2D3436 |

## Board Layout

```
+-----------------------------------------------------------------------+
|                    [ DECISION TREE ]                                   |
|       "Should we build or buy our analytics engine?"                  |
+-----------------------------------------------------------------------+
|                                                                        |
|                        [ ROOT DECISION ]                              |
|                       /        |         \                             |
|                      /         |          \                            |
|               [BUILD]    [BUY/LICENSE]    [HYBRID]                    |
|              /     \        /     \        /     \                     |
|          [Full]  [MVP]  [Vendor] [OSS]  [Core]  [Edge]               |
|            |       |       |       |       |       |                  |
|         [Outcome][Outcome][Outcome][Outcome][Outcome][Outcome]        |
|                                                                        |
|  [ CRITERIA MATRIX ]    [ RISK REGISTER ]    [ RECOMMENDATION ]      |
+-----------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Decision Context Banner

- **Size**: 4800 x 400px | **Background**: Deep Violet (#6C5CE7)
- Title: "Decision Tree — Analytics Engine Strategy" (48pt, white)
- Decision statement: "Should we build, buy, or create a hybrid solution for our product analytics engine?" (22pt, Aqua Teal)
- Context: "Current state: Using a patchwork of 3 tools costing $14K/month with data fragmentation. Need: Unified analytics serving 48K users with <5s query times and custom event tracking."
- Decision makers: "CPO (owner), CTO, VP Engineering, VP Product, Head of Data | Deadline: March 20, 2026"
- Sticky: "This decision has $500K+ annual cost implications and affects 4 engineering teams"

### Frame 2: Root Decision Node

- **Size**: 600 x 300px | **Background**: Deep Violet (#6C5CE7), centered at top of tree
- Shape: Large diamond
- Text: "Build vs Buy vs Hybrid?" (24pt, white, bold)
- Sub-text: "Evaluate against: Cost, Time-to-value, Customizability, Maintenance burden, Team capability" (12pt, Aqua Teal)
- Three branches emerging downward with criteria labels

### Frame 3: Branch A — Build In-House

- **Size**: 1500 x 800px | **Background**: Soft blue tint
- Branch label: "BUILD" (28pt, Deep Violet) — "Custom analytics engine from scratch"
- Decision sub-node A1: "Full Build"
  - Diamond shape: "Build complete stack?"
  - Criteria: "If team has 4+ data engineers AND 12+ months timeline acceptable"
  - Path leads to Outcome A1
- Decision sub-node A2: "MVP Build"
  - Diamond shape: "Build MVP first?"
  - Criteria: "If team has 2+ data engineers AND can validate with subset of users in 3 months"
  - Path leads to Outcome A2
- Evidence sticky: "Team assessment: 2 senior data engineers, 1 junior. Pipeline experience: strong. Frontend analytics: weak."
- Risk flag (orange triangle): "Key person risk — 50% of analytics knowledge in one engineer"

### Frame 4: Branch B — Buy / License

- **Size**: 1500 x 800px | **Background**: Soft green tint
- Branch label: "BUY" (28pt, Deep Violet) — "License existing analytics platform"
- Decision sub-node B1: "Enterprise Vendor"
  - Diamond: "Go with Amplitude/Mixpanel?"
  - Criteria: "If budget > $8K/month AND customization needs are standard AND SOC2 required"
  - Path leads to Outcome B1
- Decision sub-node B2: "Open Source"
  - Diamond: "Self-host PostHog/Plausible?"
  - Criteria: "If team can maintain infra AND customization needs are high AND cost sensitivity is primary"
  - Path leads to Outcome B2
- Evidence sticky: "RFP results: Amplitude ($9,200/mo), Mixpanel ($7,800/mo), PostHog self-hosted ($2,400/mo infra)"
- Risk flag: "Vendor lock-in — data export limitations, pricing increases at renewal"

### Frame 5: Branch C — Hybrid Approach

- **Size**: 1500 x 800px | **Background**: Soft purple tint
- Branch label: "HYBRID" (28pt, Deep Violet) — "Vendor for core + custom for differentiation"
- Decision sub-node C1: "Core Vendor + Custom Edge"
  - Diamond: "Vendor for standard analytics, custom for product-specific?"
  - Criteria: "If standard analytics covers 70%+ of needs AND remaining 30% is truly unique"
  - Path leads to Outcome C1
- Decision sub-node C2: "OSS Core + Custom Extensions"
  - Diamond: "Open source foundation + proprietary plugins?"
  - Criteria: "If team can contribute to OSS AND extension API is mature"
  - Path leads to Outcome C2
- Evidence sticky: "Assessment: 65% of our analytics needs are standard (page views, funnels). 35% is product-specific (board collaboration patterns)."
- Recommended path indicator (bright teal highlight): "Team leans toward this branch"

### Frame 6: Outcome Nodes

- **Size**: 4800 x 600px | **Background**: Light gray
- Six outcome rectangles with traffic-light borders:
  - **Outcome A1 — Full Build**: Red border | Cost: $680K first year | Timeline: 14 months | Risk: High | Customization: Maximum | Maintenance: 2 FTE ongoing
  - **Outcome A2 — MVP Build**: Yellow border | Cost: $280K first year | Timeline: 5 months | Risk: Medium | Customization: High (limited scope) | Maintenance: 1 FTE
  - **Outcome B1 — Enterprise Vendor**: Green border | Cost: $110K first year | Timeline: 2 months | Risk: Low | Customization: Limited | Maintenance: 0.25 FTE
  - **Outcome B2 — Self-Host OSS**: Yellow border | Cost: $65K first year | Timeline: 4 months | Risk: Medium | Customization: High | Maintenance: 1 FTE
  - **Outcome C1 — Vendor + Custom Edge**: Green border (RECOMMENDED) | Cost: $145K first year | Timeline: 4 months | Risk: Low-Medium | Customization: High for unique needs | Maintenance: 0.5 FTE
  - **Outcome C2 — OSS + Extensions**: Yellow border | Cost: $95K first year | Timeline: 6 months | Risk: Medium | Customization: High | Maintenance: 1 FTE
- Each outcome has a "probability of success" estimate and a "reversibility" rating

### Frame 7: Criteria Evaluation Matrix

- **Size**: 2200 x 700px | **Background**: White
- Header: "Weighted Criteria Matrix" (24pt, Deep Violet)
- Table with criteria rows and option columns:
  - Criteria (weighted): Cost (25%), Time-to-value (20%), Customizability (20%), Maintenance (15%), Team capability (10%), Risk (10%)
  - Scores (1-5) for each of the 6 outcomes
  - Weighted total at bottom
  - Color coding: Best score per row highlighted in teal
- Winner highlight: "C1 — Vendor + Custom Edge scores highest at 4.1/5.0 weighted"
- Sticky: "Scoring completed by all 5 decision makers independently, then averaged"

### Frame 8: Risk Register

- **Size**: 1500 x 700px | **Background**: Warning Orange at 6%
- Header: "Risk Register" (24pt, Warning Orange)
- Risk cards (ordered by severity):
  - R1: "Vendor price increase at renewal (Buy)" — Likelihood: High | Impact: Medium | Mitigation: Negotiate multi-year contract
  - R2: "Key engineer leaves mid-build (Build)" — Likelihood: Medium | Impact: High | Mitigation: Documentation and pair programming
  - R3: "Custom component scope creep (Hybrid)" — Likelihood: Medium | Impact: Medium | Mitigation: Define clear boundary between vendor and custom
  - R4: "Integration complexity underestimated (All)" — Likelihood: High | Impact: Medium | Mitigation: Proof of concept in first 2 weeks
  - R5: "Data migration challenges (Buy)" — Likelihood: Medium | Impact: High | Mitigation: Run parallel systems for 60 days
- Each risk has a RAG status indicator (Red/Amber/Green)

### Frame 9: Recommendation & Next Steps

- **Size**: 4800 x 500px | **Background**: Aqua Teal at 8%
- Header: "Recommendation" (32pt, Bright Teal)
- Recommended path highlighted: "C1 — Vendor (Amplitude) for standard analytics + Custom micro-service for collaboration-specific metrics"
- Rationale: "Best balance of speed (4 months), cost ($145K), and customization where it matters. Standard analytics covers 65% of needs immediately. Custom 35% is our competitive advantage and should be owned."
- Next steps table:
  - "Sign Amplitude annual contract" | Owner: CTO | By: March 15
  - "Define custom analytics API spec" | Owner: VP Engineering | By: March 22
  - "Hire senior data engineer for custom component" | Owner: Hiring Manager | By: April 15
  - "POC integration: Amplitude + custom service" | Owner: Tech Lead | By: April 30
  - "Full rollout to production" | Owner: VP Product | By: June 30
- Decision record: "Decision made: March 10, 2026 | Approved by: CPO | Review date: September 2026"

## Connectors & Flow

1. Root Decision --> Build Branch (solid gray line, labeled "If team capacity is high")
2. Root Decision --> Buy Branch (solid gray line, labeled "If speed is priority")
3. Root Decision --> Hybrid Branch (solid gray line, labeled "If balanced approach needed")
4. Each sub-decision --> Outcome (lines with criteria labels)
5. Recommended path: Thicker bright teal line from Root --> Hybrid --> C1 --> Outcome C1 --> Recommendation
6. All Outcomes --> Criteria Matrix (thin dashed lines)
7. Risk Register connected to relevant branches (dashed orange lines)

## Example Content

A product analytics build-vs-buy decision for a collaborative workspace SaaS company (FlowBoard). The tree evaluates 6 possible outcomes across 3 main approaches, scored against 6 weighted criteria, with 5 identified risks. The recommended path is a hybrid approach: enterprise vendor for standard analytics + custom micro-service for product-specific collaboration metrics.

## Variations

1. **Technology Stack Decision Tree**: "Which frontend framework?" — React vs Vue vs Svelte with sub-decisions for SSR, state management, build tools
2. **Hiring Decision Tree**: "Should we hire, promote, or contract?" — with nodes for budget, timeline, skill availability, team dynamics
3. **Market Entry Decision Tree**: "Which market to enter next?" — with nodes for market size, competition, regulatory, go-to-market strategy
4. **Escalation Decision Tree**: "How to handle a customer complaint?" — for support teams with severity levels, response paths, and SLA requirements

## Build Instructions

1. Create board at 5000x3500px with Soft White background
2. Place the Decision Context banner at top
3. Create the Root Decision diamond, centered horizontally, below the banner
4. Branch into 3 main paths (Build, Buy, Hybrid) flowing downward
5. Each main branch splits into 2 sub-decisions (6 total paths)
6. Place 6 outcome rectangles at the bottom of the tree
7. Add Criteria Matrix, Risk Register, and Recommendation as panels below the tree
8. Draw all connector lines — thicken and color the recommended path in teal
9. Add risk flags (orange triangles) at relevant decision nodes
10. Add evidence stickies near decision points with supporting data

## Tips & Best Practices

- Start with the decision statement, not the options — frame the problem before exploring solutions
- Every decision node must have clear, testable criteria — if you can't write the "if/then", the decision is not structured enough
- Include a "reversibility" rating on each outcome — irreversible decisions deserve more analysis
- The recommended path should be visually obvious — use color, thickness, and labels
- Record who made the decision and when — future teams will want to understand the context
- Set a review date — decisions should be revisited when assumptions change
- Share the board BEFORE the decision meeting — let people process the options asynchronously
- After the decision is made, lock the board and add a "DECIDED" watermark — prevent retroactive editing
- Use this tree as a template for future decisions — the structure is reusable even when content changes
