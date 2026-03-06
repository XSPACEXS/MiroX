# SWOT Analysis

## Overview

- **Purpose**: Conduct a structured strategic assessment using the classic 2x2 SWOT framework (Strengths, Weaknesses, Opportunities, Threats). Teams collaboratively fill each quadrant with color-coded sticky notes, then synthesize findings into strategic priorities. This template adds an action-planning section that bridges analysis to execution, making it more than just an inventory exercise.
- **Best For**: Leadership teams running quarterly strategy reviews, product managers assessing market position, consultants conducting client workshops, project teams evaluating go/no-go decisions, educators teaching strategic thinking frameworks
- **Complexity**: Simple
- **Board Size**: 3500x3000px (near-square to accommodate the 2x2 grid cleanly)

## Color Scheme

| Role                 | Color         | Hex     |
| -------------------- | ------------- | ------- |
| Primary              | Deep Navy     | #0D47A1 |
| Strengths            | Emerald Green | #2E7D32 |
| Weaknesses           | Crimson Red   | #C62828 |
| Opportunities        | Teal          | #00796B |
| Threats              | Orange        | #EF6C00 |
| Background           | Warm Gray     | #F5F5F0 |
| Text                 | Charcoal      | #212121 |
| Action Items         | Violet        | #6A1B9A |
| Sticky Strengths     | Light Green   | #C8E6C9 |
| Sticky Weaknesses    | Light Pink    | #FFCDD2 |
| Sticky Opportunities | Light Teal    | #B2DFDB |
| Sticky Threats       | Light Orange  | #FFE0B2 |

## Board Layout

The board centers on a 2x2 grid. Above it sits a context header. Below it sits a strategic actions bar. The grid is divided by a thick cross into four equal quadrants.

```
+------------------------------------------------------------+
|                    CONTEXT HEADER                           |
+------------------------------------------------------------+
|                         |                                   |
|     STRENGTHS           |       WEAKNESSES                  |
|     (Internal +)        |       (Internal -)                |
|                         |                                   |
+-----------+-------------+-------------------+---------------+
|                         |                                   |
|     OPPORTUNITIES       |       THREATS                     |
|     (External +)        |       (External -)                |
|                         |                                   |
+------------------------------------------------------------+
|               STRATEGIC ACTIONS BAR                         |
+------------------------------------------------------------+

Positions:
  Context Header:  (50, 50) to (3450, 220)
  Strengths:       (50, 250) to (1725, 1350)
  Weaknesses:      (1775, 250) to (3450, 1350)
  Opportunities:   (50, 1400) to (1725, 2500)
  Threats:         (1775, 1400) to (3450, 2500)
  Actions Bar:     (50, 2550) to (3450, 2950)
  Center labels:   Cross intersection at (1750, 1375)
```

## Frames & Sections

### Frame 0: Context Header

- **Position**: Top, full width
- **Size**: 3400x170px
- **Background**: Deep Navy (#0D47A1)
- **Elements**:
  - Title: "SWOT Analysis — CloudSync Pro" (font 24, bold, white)
  - Context: "B2B project management SaaS | Series B | 450 customers | $8M ARR | Q1 2026 Strategy Review" (font 13, #B0BEC5)
  - Axis labels (positioned at top of grid area):
    - Left column label: "INTERNAL FACTORS" (centered, font 11, uppercase, #757575)
    - Top row label: "HELPFUL" (font 11, uppercase, #757575)
    - Bottom row label: "HARMFUL" (font 11, uppercase, #757575)
    - Right side: "EXTERNAL FACTORS" (font 11, uppercase, #757575)

### Frame 1: Strengths (Top-Left)

- **Position**: Top-left quadrant
- **Size**: 1675x1100px
- **Background**: Emerald Green tint (#E8F5E9) with Emerald left and top border (4px, #2E7D32)
- **Elements**:
  - Quadrant header: "STRENGTHS" (font 22, bold, Emerald #2E7D32)
  - Subheader: "Internal advantages that give us an edge" (font 11, italic, #616161)
  - Sticky notes (Light Green #C8E6C9, 7 stickies):
    1. "Strong product-market fit: 92% of customers renew annually (industry avg: 78%)"
    2. "Engineering team velocity: consistently ship features 20% faster than competitors based on changelog comparison"
    3. "Deep integration ecosystem: 45 native integrations vs. competitor avg of 22"
    4. "Customer NPS of 62 — top quartile for B2B SaaS"
    5. "Low customer acquisition cost: $340 CAC vs. industry avg of $580"
    6. "Founder-led sales motion gives authentic product demos and high close rates (28%)"
    7. "Proprietary real-time collaboration engine — 3-year technical moat"
  - Category tags (small pills on select stickies): "Product", "Team", "Technology", "Sales"

### Frame 2: Weaknesses (Top-Right)

- **Position**: Top-right quadrant
- **Size**: 1675x1100px
- **Background**: Crimson tint (#FFEBEE) with Crimson right and top border (4px, #C62828)
- **Elements**:
  - Quadrant header: "WEAKNESSES" (font 22, bold, Crimson #C62828)
  - Subheader: "Internal limitations holding us back" (font 11, italic, #616161)
  - Sticky notes (Light Pink #FFCDD2, 7 stickies):
    1. "No mobile app: 34% of users access from mobile but only get a responsive web view"
    2. "Enterprise sales motion immature: only 3 enterprise deals closed, longest sales cycle was 11 months"
    3. "Technical debt in billing system: 4 major outages in last 12 months, avg 2.3 hours downtime"
    4. "Marketing team understaffed: 2 people covering content, demand gen, product marketing, and events"
    5. "No SOC 2 Type II certification — blockers for 8 enterprise prospects in pipeline"
    6. "Customer support response time: 4.2 hours avg vs. industry best practice of 1 hour"
    7. "Onboarding completion rate only 34% — users don't discover key features"
  - Category tags: "Product", "Sales", "Operations", "Security"

### Frame 3: Opportunities (Bottom-Left)

- **Position**: Bottom-left quadrant
- **Size**: 1675x1100px
- **Background**: Teal tint (#E0F2F1) with Teal left and bottom border (4px, #00796B)
- **Elements**:
  - Quadrant header: "OPPORTUNITIES" (font 22, bold, Teal #00796B)
  - Subheader: "External factors we can capitalize on" (font 11, italic, #616161)
  - Sticky notes (Light Teal #B2DFDB, 6 stickies):
    1. "AI integration wave: 67% of B2B buyers say AI features influence purchasing decisions (Gartner 2025)"
    2. "Remote work permanence: distributed teams need better async collaboration — our real-time engine can add async mode"
    3. "Competitor Basecamp restructuring: 15% of their customers are exploring alternatives (Reddit/Twitter sentiment)"
    4. "EU market expansion: GDPR-compliant architecture positions us for European entry with minimal engineering"
    5. "Partnership with Salesforce AppExchange could unlock 150,000+ potential customers"
    6. "Vertical SaaS opportunity: construction and legal verticals have underserved PM tool needs"
  - Category tags: "Technology", "Market", "Competitive", "Partnership"

### Frame 4: Threats (Bottom-Right)

- **Position**: Bottom-right quadrant
- **Size**: 1675x1100px
- **Background**: Orange tint (#FFF3E0) with Orange right and bottom border (4px, #EF6C00)
- **Elements**:
  - Quadrant header: "THREATS" (font 22, bold, Orange #EF6C00)
  - Subheader: "External risks that could hurt us" (font 11, italic, #616161)
  - Sticky notes (Light Orange #FFE0B2, 6 stickies):
    1. "Monday.com aggressive pricing: launched a free tier targeting our SMB segment, 30% of our revenue"
    2. "Economic uncertainty: 3 customers paused expansion plans citing budget freezes"
    3. "AI commoditization risk: if AI-powered PM features become table stakes, our competitive edge narrows"
    4. "Key engineer attrition risk: 2 senior engineers received competing offers at 30% premium"
    5. "Data privacy regulation changes: proposed US federal privacy law could require costly compliance updates"
    6. "Platform dependency: 78% of signups come through Google search — algorithm change could cut acquisition"
  - Category tags: "Competitive", "Economic", "Regulatory", "Talent"

### Frame 5: Strategic Actions Bar

- **Position**: Bottom, full width
- **Size**: 3400x400px
- **Background**: White with Violet top border (4px, #6A1B9A)
- **Elements**:
  - Header: "Strategic Actions" (font 20, bold, Violet #6A1B9A)
  - **Four action columns** (aligned with SWOT cross-strategy framework):
    1. **SO Strategies** (Strengths + Opportunities, Green-Teal gradient header):
       - "Leverage our collaboration engine to build AI-powered meeting summaries and task extraction — differentiation play"
       - "Use low CAC advantage to aggressively enter EU market before competitors"
    2. **WO Strategies** (Weaknesses + Opportunities, Pink-Teal gradient header):
       - "Launch mobile app to capture remote worker segment — address #1 weakness with #2 opportunity"
       - "Pursue Salesforce partnership while building out enterprise sales motion"
    3. **ST Strategies** (Strengths + Threats, Green-Orange gradient header):
       - "Use high NPS to build customer advocacy program countering Monday.com pricing pressure"
       - "Retain senior engineers with equity refresh and technical leadership roles"
    4. **WT Strategies** (Weaknesses + Threats, Pink-Orange gradient header):
       - "Fast-track SOC 2 certification before competitors lock in enterprise prospects"
       - "Hire 2 marketing roles to reduce platform dependency on Google (diversify acquisition)"

## Connectors & Flow

**Cross-quadrant insight lines** (dashed lines, Violet #6A1B9A, 2px):

1. Strength "Real-time collaboration engine" --> Opportunity "AI integration wave" (labeled "SO: Build AI features on our engine")
2. Weakness "No mobile app" --> Opportunity "Remote work permanence" (labeled "WO: Mobile app for remote teams")
3. Strength "High NPS" --> Threat "Monday.com pricing" (labeled "ST: Advocacy program")
4. Weakness "No SOC 2" --> Threat "Enterprise competitors" (labeled "WT: Certify fast")

**Quadrant-to-action connectors** (dotted lines from specific stickies to their action column):

- Each SO/WO/ST/WT action traces back to specific stickies in the relevant quadrants

## Example Content

The SWOT analysis is for "CloudSync Pro," a fictional B2B project management SaaS company at Series B stage. All data points are realistic and internally consistent with the Project Management templates in category 02.

**Session context**:

- Conducted during Q1 2026 leadership offsite
- Participants: CEO, CTO, VP Product, VP Sales, VP Marketing (5 people)
- Duration: 90-minute workshop
- Facilitator: VP Product (Jordan)
- Method: Silent brainstorming (10 min per quadrant), then discussion and voting

**Voting results** (after initial brainstorming, each participant gets 3 votes per quadrant):

- Top Strength: "Proprietary real-time collaboration engine" (5 votes)
- Top Weakness: "No mobile app" (4 votes)
- Top Opportunity: "AI integration wave" (5 votes)
- Top Threat: "Monday.com aggressive pricing" (4 votes)

## Variations

1. **Personal SWOT**: Replace business context with individual career assessment. Strengths = skills and experience. Weaknesses = development areas. Opportunities = market trends and roles. Threats = automation risk and competition. Actions = career development plan.

2. **Product SWOT**: Focus on a single product rather than the whole company. Strengths = feature advantages. Weaknesses = UX gaps. Opportunities = unmet user needs. Threats = competitive features. More tactical than strategic.

3. **TOWS Matrix Extension**: Replace the Strategic Actions bar with a full TOWS matrix (4x4 grid crossing all quadrant pairs). Each cell contains specific strategies. More comprehensive but requires a larger board.

4. **Comparative SWOT**: Two SWOT grids side by side — one for your company, one for your main competitor. The Actions bar identifies where you have asymmetric advantages. Useful for competitive positioning.

## Build Instructions

1. **Create canvas**: 3500x3000px, background #F5F5F0.
2. **Build context header**: Full-width frame at top (3400x170px). Navy background. Add title and context text.
3. **Create 2x2 grid**: Four equal quadrants with a thick cross divider (4px, #0D47A1). Apply tinted backgrounds and colored corner borders to each quadrant.
4. **Add quadrant headers**: Place header text and subheader in each quadrant's top-left corner.
5. **Add sticky notes**: Place color-coded stickies in each quadrant. Arrange in 2 columns for readability. Add category tag pills to selected stickies.
6. **Add axis labels**: Place "INTERNAL/EXTERNAL" and "HELPFUL/HARMFUL" labels along the grid axes using small rotated text.
7. **Build actions bar**: Full-width frame at bottom (3400x400px). Divide into 4 columns for SO/WO/ST/WT strategies. Add gradient headers and action text.
8. **Draw insight connectors**: Dashed Violet lines from specific stickies across quadrants to highlight key strategic intersections.
9. **Add voting dots**: Place colored dot indicators on top-voted items in each quadrant.
10. **Review**: Ensure all actions trace back to specific SWOT items. Verify the SO/WO/ST/WT framework is correctly applied (each strategy combines one internal and one external factor).

## Tips & Best Practices

- **Be specific, not generic**: "Good team" is useless. "Engineering team ships features 20% faster than competitors based on changelog comparison" is actionable. Every sticky should include a data point or specific example.
- **Use the INTERNAL vs. EXTERNAL axis honestly**: Strengths and weaknesses are things you CONTROL. Opportunities and threats are things that HAPPEN TO YOU. Misclassifying leads to wrong strategies.
- **Don't skip the Actions bar**: The SWOT grid is descriptive. The strategic actions are prescriptive. Without actions, the exercise is just a mirror, not a compass.
- **Time-box the brainstorming**: 10 minutes per quadrant keeps energy high. More time leads to overthinking and duplicates.
- **Vote to prioritize**: Not all items are equal. Use dot-voting to surface the 2-3 items per quadrant that matter most.
- **Update quarterly**: A SWOT from 6 months ago is outdated. External factors change rapidly. Schedule a refresh at the start of each quarter.
- **Cross-reference with data**: Back up sticky notes with actual metrics wherever possible. "Customer NPS of 62" is stronger than "customers like us."
