# Variations — Customer Journey Boards

## Overview

No two customer journeys are identical. A healthcare patient navigating a chronic condition has a fundamentally different experience from a SaaS buyer evaluating enterprise software. This guide covers how to adapt customer journey board templates for different industries, team contexts, complexity levels, and special use cases.

---

## Industry Variations

### B2B SaaS / Enterprise Software

**Stage adaptations**:

- Replace "Awareness" with "Problem Recognition" — B2B buyers start with a problem, not a brand
- Add "Internal Advocacy" stage — the person who evaluates is rarely the person who approves
- Add "Procurement" as a distinct stage — enterprise buying involves legal, security, and finance reviews
- Replace "Retention" with "Expansion" — B2B success is measured by upsell and seat growth, not just renewal

**Content adaptations**:

- Persona should include company size, tech stack, and reporting structure
- Touchpoints should include sales calls, demo sessions, RFP processes, and peer communities
- Pain points should include internal stakeholders who block or delay decisions
- Metrics should include sales cycle length, CAC, LTV, and expansion revenue

**Layout note**: B2B journeys tend to be 6-8 stages (longer than B2C). Use a wider board (5500px+) or consolidate stages.

### E-Commerce / Direct-to-Consumer

**Stage adaptations**:

- Add "Browsing" as a distinct stage between Awareness and Consideration
- Split "Purchase" into "Cart" and "Checkout" — critical friction happens between these
- Add "Unboxing / First Use" after Delivery — the physical product experience matters
- Add "Post-Purchase Engagement" — returns, reviews, referrals, repeat purchases

**Content adaptations**:

- Emotions are especially important — e-commerce is driven by impulse and delight
- Touchpoints should include social media, influencer content, and packaging
- Pain points should include shipping anxiety, return complexity, and size/quality uncertainty
- Include AOV (average order value), cart abandonment rate, and repeat purchase rate

**Layout note**: E-commerce journeys benefit from richer emotion curves with more data points. Consider 8-10 stages for full detail.

### Healthcare / Patient Experience

**Stage adaptations**:

- Start with "Symptom Awareness" not "Awareness" — patients start with worry, not curiosity
- Include "Insurance/Financial" as a cross-cutting layer — it affects every stage
- Add "Caregiver Experience" as a parallel track — family members are often co-navigating
- End with "Ongoing Management" not "Loyalty" — chronic conditions have no endpoint

**Content adaptations**:

- Emotional data is paramount — anxiety, fear, hope, relief, and frustration dominate
- Touchpoints must include clinical, administrative, digital, and social support
- Accessibility is a design requirement, not an enhancement — patients have diverse abilities
- Regulatory/privacy constraints affect what data can be shown publicly

**Layout note**: Consider the Service Blueprint pattern with "Clinical Operations" as the backstage layer. Patient-facing touchpoints above the line of visibility, clinical workflows below.

### Financial Services / Banking

**Stage adaptations**:

- Start with "Life Event Trigger" — financial decisions are triggered by events (home purchase, retirement, business expansion)
- Include "Compliance & Verification" as a dedicated stage — KYC, AML, credit checks are friction-heavy
- Add "Ongoing Advisory" stage — the relationship does not end at account opening
- Include "Product Cross-Sell" as a stage — financial services revenue depends on multi-product relationships

**Content adaptations**:

- Trust signals are critical — security badges, regulatory compliance, human advisor access
- Pain points often involve documentation, waiting, and unexplained decisions (denied, approved, pending)
- Emotions range from anxiety (am I making the right choice?) to frustration (why do I need to submit my ID again?)
- Include regulatory requirements as a constraint layer

**Layout note**: Financial journey boards benefit from the touchpoint matrix pattern to compare digital vs. branch vs. phone vs. advisor experiences.

### Education / EdTech

**Stage adaptations**:

- Start with "Learning Need Recognition" — learners may not know what they need until prompted
- Include "Enrollment/Onboarding" as a distinct phase — especially for online courses
- Add "Learning Progression" with sub-stages (beginner, intermediate, advanced)
- End with "Certification/Completion" and "Ongoing Learning"

**Content adaptations**:

- Motivation and engagement are the primary emotional dimensions
- Pain points include content overload, unclear progression, isolation (for online learners)
- Touchpoints include LMS platforms, peer communities, instructor interactions, and physical materials
- Metrics include completion rate, engagement score, assessment performance, and NPS

**Layout note**: Consider a vertical journey format (top-to-bottom) for learning progression, as it matches the mental model of "climbing" or "advancing."

---

## Team Context Variations

### For Executive Audiences

**Simplify**:

- Remove the Thoughts row — executives want actions and outcomes, not internal monologue
- Collapse Pain Points and Opportunities into a single "Key Issues & Recommendations" row
- Enlarge metric callouts — executives scan for numbers first
- Ensure the Priority Actions section is 25% of the board area (larger than standard)
- Use the board title to frame the business question: "Why 47% of Trial Users Never Convert — and What To Do About It"

**Layout change**: Reduce from 6 layers to 3-4 layers. Increase font sizes across the board. The board should be fully comprehensible in a 10-minute presentation.

### For Product Teams

**Deepen**:

- Add a "Feature Requirements" row beneath Opportunities — map each opportunity to a specific feature or epic
- Include sprint or release targets for each opportunity
- Add a "Technical Constraints" annotation layer — notes about what is technically feasible
- Link to Jira tickets, PRDs, or design specs from opportunity sticky notes

**Layout change**: Add an extra row or a linked "detail board" for product specifications. The journey map becomes the strategic layer; the detail board becomes the tactical layer.

### For Workshop Participants

**Open up**:

- Start with empty cells (except stage headers and persona) — participants fill in during the workshop
- Use larger sticky notes (250x250px) with more writing space
- Reduce pre-populated content to stage definitions and persona only
- Add a "Parking Lot" frame for ideas that don't fit the current stage
- Include voting dots (small colored circles) for prioritization exercises

**Layout change**: Increase spacing between cells to accommodate workshop-generated sticky notes. Plan for 2x the content you expect — workshops generate more than you anticipate.

### For Cross-Functional Alignment

**Show ownership**:

- Add a "Department Owner" row beneath each stage showing which team owns that stage
- Use department color coding (Engineering = green, Marketing = orange, Support = blue)
- Highlight "handoff points" between departments with red warning icons
- Include a RACI indicator for each opportunity (Responsible, Accountable, Consulted, Informed)

**Layout change**: The Service Blueprint pattern works best here, with the backstage layer showing departmental responsibilities and handoff processes.

---

## Complexity Variations

### Simple (1-2 Hours to Build)

**Board type**: Empathy Map
**Scope**: Single persona, single context
**Stages/Sections**: 4 quadrants + persona + insights
**Content depth**: 4-6 items per quadrant
**Board size**: 3500 x 2800px
**Use case**: Quick empathy exercise, workshop output, stakeholder alignment

### Medium (4-8 Hours to Build)

**Board type**: Journey Map (Standard)
**Scope**: Single persona, 5-6 stages, 4 layers (actions, touchpoints, emotions, pain points)
**Content depth**: 3-5 items per cell
**Board size**: 5000 x 3000px
**Use case**: Product team alignment, CX improvement planning, research synthesis

### Advanced (1-2 Days to Build)

**Board type**: Journey Map + Touchpoint Analysis
**Scope**: Single persona, 6-7 stages, 6 layers including backstage
**Content depth**: 5-8 items per cell, full data citations
**Board size**: 5500 x 4000px (Service Blueprint pattern)
**Use case**: Enterprise CX transformation, service design initiatives, executive strategy boards

### Expert (3-5 Days to Build)

**Board type**: Multi-persona journey comparison + touchpoint matrix + persona boards
**Scope**: 2-3 personas, 6-7 shared stages, full depth
**Content depth**: Comprehensive with cross-references
**Board size**: 5000 x 6000px+ (multi-stacked)
**Use case**: Full CX program design, board-level presentations, agency deliverables

---

## Special Use Cases

### Pre/Post Experience Comparison

Show the customer journey before and after a major change (product redesign, process improvement, new feature launch):

```
+------------------------------------------------------+
|              BEFORE (Old Experience)                   |
| [Journey Map — dated Q2 2025]                         |
| Emotion avg: 2.8  |  NPS: 32  |  Churn: 8.2%        |
+======================================================+
|              INTERVENTION LAYER                        |
| [What changed: redesigned onboarding, added chat]     |
+======================================================+
|              AFTER (New Experience)                    |
| [Journey Map — dated Q1 2026]                         |
| Emotion avg: 3.6  |  NPS: 51  |  Churn: 5.1%        |
+------------------------------------------------------+
```

This layout is powerful for demonstrating the impact of CX investments.

### Competitor Journey Comparison

Map your journey alongside a competitor's for the same persona:

```
+------------------------------------------------------+
|       OUR JOURNEY (Blue palette)                      |
| [Full journey map — our product]                      |
+------------------------------------------------------+
|       COMPETITOR JOURNEY (Gray palette)               |
| [Full journey map — competitor product]               |
+------------------------------------------------------+
|       DELTA ANALYSIS                                  |
| [Stage-by-stage comparison: where we win/lose]        |
+------------------------------------------------------+
```

Use muted colors for the competitor journey to visually subordinate it.

### Journey Evolution Over Time

Track how the same journey has changed across multiple measurement periods:

```
Stage 1: Awareness
+------------------+------------------+------------------+
| Q1 2025          | Q3 2025          | Q1 2026          |
| Emotion: 3.0     | Emotion: 3.2     | Emotion: 3.8     |
| Drop-off: 45%    | Drop-off: 38%    | Drop-off: 28%    |
| Key change:      | Key change:      | Key change:      |
| Baseline         | Added blog series | Launched podcast |
+------------------+------------------+------------------+
```

This variation works best as a series of small multiples rather than a full journey map per period.

### Internal Service Journey

Map the employee experience interacting with internal services (IT help desk, HR processes, procurement):

- Replace "Customer" with "Employee"
- Replace "Touchpoints" with "Systems & Contacts"
- Add "Wait Time" as a tracked metric at each stage
- The backstage is the service team's process

This variation uses the same frameworks but applied to internal service design.

---

## Cross-Reference Map

| If You Are Building... | Also Reference...                                                  |
| ---------------------- | ------------------------------------------------------------------ |
| A customer journey map | `04-Marketing/layout-patterns.md` for funnel visualization         |
| An empathy map         | `08-Workshops/build-process.md` for workshop facilitation          |
| A persona board        | `06-Design-UX/content-guide.md` for UX persona patterns            |
| A touchpoint analysis  | `14-Data-Analytics/visual-guide.md` for dashboard patterns         |
| A service blueprint    | `02-Project-Management/layout-patterns.md` for process flows       |
| A B2B journey          | `13-Sales/content-guide.md` for sales pipeline alignment           |
| An e-commerce journey  | `04-Marketing/content-guide.md` for conversion funnel content      |
| A healthcare journey   | `11-Education/design-philosophy.md` for patient education patterns |
| A multi-persona board  | `12-Team-HR/layout-patterns.md` for multi-role visualization       |

---

## Adaptation Checklist

When adapting a standard template for a new context, verify:

1. **Stages match reality** — not textbook stages, but your actual customer journey stages
2. **Persona is grounded** — real data, real quotes, real frustrations for this specific industry/context
3. **Emotions are calibrated** — healthcare emotions are different from e-commerce emotions
4. **Metrics are relevant** — use industry-specific KPIs, not generic conversion rates
5. **Touchpoints are complete** — include industry-specific channels (branch visits, clinical encounters, in-store)
6. **Pain points reflect domain** — regulatory friction, physical limitations, trust barriers specific to the industry
7. **The audience shapes the depth** — executive boards are simpler, product boards are deeper, workshop boards are open
8. **The "So What?" is actionable** — priority actions must be relevant and achievable for the target team
