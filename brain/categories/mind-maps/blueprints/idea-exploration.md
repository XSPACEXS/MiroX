# Idea Exploration

## Overview

- **Purpose**: Provide a structured deep-dive framework for thoroughly evaluating a single idea before committing resources. The board guides teams through understanding the idea, assessing feasibility, mapping risks and opportunities, and arriving at a go/no-go recommendation. Unlike brainstorming boards that generate many ideas, this template is about depth over breadth.
- **Best For**: Product managers evaluating a feature proposal, startup founders assessing a pivot, business analysts building a business case, innovation teams vetting R&D concepts, leadership teams evaluating strategic initiatives
- **Complexity**: Medium
- **Board Size**: 4500x3000px (wide landscape to accommodate sequential exploration frames)

## Color Scheme

| Role               | Color         | Hex     |
| ------------------ | ------------- | ------- |
| Primary            | Deep Indigo   | #1A237E |
| Pros / Opportunity | Emerald Green | #2E7D32 |
| Cons / Risk        | Crimson Red   | #C62828 |
| Neutral / Analysis | Steel Blue    | #1565C0 |
| Decision           | Amber Gold    | #F9A825 |
| Background         | Warm Gray     | #F5F5F0 |
| Text               | Charcoal      | #212121 |
| Highlight          | Magenta       | #AD1457 |
| Divider Lines      | Light Gray    | #BDBDBD |

## Board Layout

The board uses a sequential left-to-right flow with five major frames, starting with the Idea Definition on the left and ending with the Decision Gate on the right. A horizontal connector line ties the frames together.

```
+------------------+  +------------------+  +------------------+  +------------------+  +------------------+
|                  |  |                  |  |                  |  |                  |  |                  |
|  IDEA DEFINITION |->|  PROS & BENEFITS |->|  CONS & COSTS   |->|  RISKS & OPPS    |->|  DECISION GATE   |
|                  |  |                  |  |                  |  |                  |  |                  |
+------------------+  +------------------+  +------------------+  +------------------+  +------------------+

Positions:
  Frame 1: (50, 200) to (850, 2800)   — Idea Definition
  Frame 2: (950, 200) to (1750, 2800)  — Pros & Benefits
  Frame 3: (1850, 200) to (2650, 2800) — Cons & Costs
  Frame 4: (2750, 200) to (3550, 2800) — Risks & Opportunities
  Frame 5: (3650, 200) to (4450, 2800) — Decision Gate
  Title bar: (50, 50) to (4450, 180)   — Board title spanning full width
```

## Frames & Sections

### Frame 0: Title Bar

- **Position**: Top, spanning full width
- **Size**: 4400x130px
- **Background**: Deep Indigo (#1A237E)
- **Elements**:
  - Text block: "Idea Deep-Dive: AI-Powered Customer Support Chatbot" (font size 28, bold, white #FFFFFF)
  - Subtitle: "Exploration Board | Product Team | March 2026" (font size 14, #B0BEC5, right-aligned)
  - Progress indicator: 5 circles in a row (filled circles for completed sections, hollow for remaining)

### Frame 1: Idea Definition

- **Position**: Left column
- **Size**: 800x2600px
- **Background**: White (#FFFFFF) with Deep Indigo left border (6px)
- **Elements**:
  - Section header: "The Idea" (font 22, bold, Deep Indigo #1A237E)
  - **Idea Statement** (text block, font 16, bold):
    "Build an AI-powered customer support chatbot that handles Tier 1 support queries (password resets, billing questions, feature how-tos) using our existing knowledge base, reducing support ticket volume by 40% within 6 months."
  - **Problem Being Solved** (subheader font 14, bold; body font 13):
    "Our support team handles 3,200 tickets/month. 58% are repetitive Tier 1 questions. Average first-response time is 4.2 hours. Customer satisfaction for support is 3.1/5. Team is at capacity and hiring is frozen through Q4."
  - **Target Users** (sticky notes, Soft Blue #BBDEFB, 3 stickies):
    1. "Self-serve customers who prefer instant answers over waiting for email replies"
    2. "International users in time zones where our support team is offline"
    3. "Free-tier users who currently get deprioritized in the support queue"
  - **Success Metrics** (numbered list in a bordered box):
    1. "Reduce Tier 1 ticket volume from 1,856/month to 1,114/month (40% reduction)"
    2. "Achieve chatbot resolution rate of 75% without human escalation"
    3. "Maintain or improve CSAT score (target: 3.5/5 or higher)"
    4. "First-response time for chatbot queries: under 30 seconds"
  - **Scope Boundaries** (text block with red left border):
    "IN: English language only. Tier 1 queries. Web and mobile app. OUT: Phone support. Multi-language. Tier 2/3 technical issues. Billing disputes requiring account access."

### Frame 2: Pros & Benefits

- **Position**: Second column
- **Size**: 800x2600px
- **Background**: Emerald Green tint (#E8F5E9) with green left border (6px, #2E7D32)
- **Elements**:
  - Section header: "Pros & Benefits" (font 22, bold, Emerald Green #2E7D32)
  - **For Customers** (subheader, 4 sticky notes, Soft Green #C8E6C9):
    1. "Instant answers 24/7 — no more waiting 4+ hours for a human response"
    2. "Consistent answer quality — chatbot always gives the correct, up-to-date procedure"
    3. "No more bouncing between help docs — chatbot synthesizes multiple articles into one answer"
    4. "Reduced frustration for simple issues — password reset in 30 seconds vs. 4 hours"
  - **For the Business** (subheader, 4 sticky notes, Soft Yellow #FFF9C4):
    1. "Save approximately $14,400/month in support labor costs (1,856 fewer tickets x $7.76 avg cost per ticket)"
    2. "Free up support team to focus on complex Tier 2/3 issues that drive retention"
    3. "Scalable: handles 10x volume without additional headcount during product launches"
    4. "Data goldmine: chatbot logs reveal top user pain points for product improvement"
  - **For Engineering** (subheader, 3 sticky notes, Soft Blue #BBDEFB):
    1. "Leverage existing knowledge base — no need to create new content from scratch"
    2. "Modern RAG architecture can be reused for internal tools (sales enablement, onboarding)"
    3. "Reduces on-call support burden for engineers who currently handle escalated Tier 1 tickets"
  - **Quantified Impact** (bordered summary box, green border):
    - "Annual cost savings: ~$172,800"
    - "Support team capacity freed: ~23 hours/week"
    - "Projected CSAT improvement: +0.4 points"

### Frame 3: Cons & Costs

- **Position**: Third column
- **Size**: 800x2600px
- **Background**: Crimson tint (#FFEBEE) with red left border (6px, #C62828)
- **Elements**:
  - Section header: "Cons & Costs" (font 22, bold, Crimson Red #C62828)
  - **Development Costs** (subheader, 3 sticky notes, Soft Pink #F8BBD0):
    1. "Engineering effort: estimated 3 sprints (6 weeks) for MVP with 2 senior engineers"
    2. "Third-party AI API costs: ~$2,100/month for GPT-4 API usage at projected volume"
    3. "Knowledge base cleanup required: 340 articles need review and tagging before chatbot can use them"
  - **Operational Concerns** (subheader, 4 sticky notes, Soft Pink #F8BBD0):
    1. "Hallucination risk: AI may generate confident but incorrect answers, damaging trust"
    2. "Maintenance overhead: model needs retraining/prompt updates as product evolves"
    3. "Escalation bottleneck: if chatbot fails, users may be MORE frustrated than with current system"
    4. "Support team morale: existing agents may feel threatened or undervalued"
  - **User Experience Risks** (subheader, 3 sticky notes, Soft Pink #F8BBD0):
    1. "Some users strongly prefer human interaction — chatbot-first may feel impersonal"
    2. "Complex edge cases may loop users in unhelpful chatbot conversations"
    3. "Accessibility concerns: chatbot interface must meet WCAG 2.1 AA standards"
  - **Total Cost Estimate** (bordered summary box, red border):
    - "Development: $78,000 (6 weeks x 2 engineers)"
    - "Monthly operating: $2,100 API + $500 monitoring"
    - "Knowledge base prep: $12,000 (contractor for 340 articles)"
    - "Total Year 1: $121,200 | Payback period: ~8.4 months"

### Frame 4: Risks & Opportunities

- **Position**: Fourth column
- **Size**: 800x2600px
- **Background**: Steel Blue tint (#E3F2FD) with blue left border (6px, #1565C0)
- **Elements**:
  - Section header: "Risks & Opportunities" (font 22, bold, Steel Blue #1565C0)
  - **Risk Matrix** (2x2 grid within the frame):
    - High Impact / High Probability (top-right, red background):
      - "AI hallucination causes incorrect billing advice leading to customer disputes"
    - High Impact / Low Probability (top-left, orange background):
      - "Major AI provider outage leaves chatbot unavailable during peak hours"
    - Low Impact / High Probability (bottom-right, yellow background):
      - "Chatbot fails on 25% of edge-case queries, requiring human takeover"
    - Low Impact / Low Probability (bottom-left, green background):
      - "Competitor launches a similar feature, reducing our differentiation window"
  - **Mitigation Strategies** (numbered list):
    1. "Implement confidence scoring: only show answers above 85% confidence, escalate others"
    2. "Build fallback to static FAQ if AI API is unreachable (graceful degradation)"
    3. "A/B test with 10% of users first, monitor CSAT before full rollout"
    4. "Weekly review of chatbot transcripts by support lead for quality assurance"
  - **Upside Opportunities** (sticky notes, Soft Green #C8E6C9):
    1. "If successful, expand to sales prospecting chatbot (upsell/cross-sell during support)"
    2. "Chatbot interaction data feeds directly into product analytics — new insight stream"
    3. "Marketing angle: 'Instant support, any time' becomes a competitive selling point"
    4. "Internal reuse: same RAG pipeline powers employee onboarding assistant"

### Frame 5: Decision Gate

- **Position**: Right column
- **Size**: 800x2600px
- **Background**: Amber Gold tint (#FFF8E1) with gold left border (6px, #F9A825)
- **Elements**:
  - Section header: "Decision Gate" (font 22, bold, Amber Gold #F9A825)
  - **Recommendation** (large text block, bordered, bold):
    "PROCEED TO MVP — with phased rollout and confidence scoring safeguards"
  - **Confidence Level** (visual indicator):
    - 4 out of 5 filled circles (Amber Gold)
    - Label: "High confidence (80%)"
  - **Conditions for Proceeding** (checklist with checkboxes):
    - [x] "Knowledge base cleanup completed before development starts"
    - [x] "Confidence scoring threshold agreed upon (85%)"
    - [x] "A/B test plan approved by product and support leads"
    - [ ] "Legal review of AI-generated content liability (pending)"
    - [ ] "Accessibility audit of chatbot UI (pending)"
  - **Next Steps** (numbered action items with owners and dates):
    1. "Complete knowledge base audit — Sarah (Support Lead) — by March 20"
    2. "Legal review of AI content liability — James (Legal) — by March 25"
    3. "Architecture design doc — Priya (Engineering) — by March 28"
    4. "Sprint planning for MVP — Alex (PM) — Sprint 14 kickoff April 1"
    5. "A/B test design — Maria (Data) — by April 5"
  - **Kill Criteria** (red-bordered box):
    "Stop the project if: (1) A/B test shows CSAT drops below 2.8/5, (2) hallucination rate exceeds 5% of responses, (3) monthly API costs exceed $4,000 at projected scale"
  - **Stakeholder Sign-off** (signature lines):
    - "Product: Alex Chen — Approved"
    - "Engineering: Priya Sharma — Approved"
    - "Support: Sarah Williams — Approved with conditions"
    - "Legal: James Park — Pending review"

## Connectors & Flow

**Primary flow** (horizontal arrows between frames, Slate #546E7A, 3px, solid):

1. Idea Definition --> Pros & Benefits (labeled "evaluate upside")
2. Pros & Benefits --> Cons & Costs (labeled "evaluate downside")
3. Cons & Costs --> Risks & Opportunities (labeled "assess risk/reward")
4. Risks & Opportunities --> Decision Gate (labeled "decide")

**Feedback loops** (dashed curved lines, Magenta #AD1457, 2px):

1. Decision Gate --> Idea Definition (labeled "refine scope if conditional approval")
2. Risks/Opportunities mitigation strategies --> Cons/Costs (labeled "mitigations reduce these cons")

**Cross-references** (dotted lines, Light Gray #BDBDBD, 1px):

1. Pros "Annual cost savings: $172,800" --> Cons "Total Year 1: $121,200" (labeled "ROI calculation")
2. Cons "Hallucination risk" --> Risks "High Impact/High Probability" cell (labeled "top risk")

## Example Content

The entire board is pre-filled with a realistic example evaluating an "AI-Powered Customer Support Chatbot" for a mid-size SaaS company. All numbers, names, and timelines are realistic and internally consistent:

- Company context: SaaS product with 15,000 active users, 8-person support team, Series B funding
- The idea has specific, measurable success criteria
- Financial analysis includes real cost estimates and payback calculations
- Risk matrix uses probability/impact framework common in enterprise decision-making
- Decision gate includes named stakeholders, specific dates, and clear kill criteria

## Variations

1. **Feature Evaluation**: Replace the general idea with a specific product feature. Add a "Technical Feasibility" sub-section in Frame 1 with architecture considerations. Add a "User Research Evidence" section with interview quotes and survey data.

2. **Investment Decision**: Frame 1 becomes "Investment Thesis." Pros become "Expected Returns." Cons become "Investment Risks." Frame 4 adds "Market Analysis" with TAM/SAM/SOM. Decision Gate includes funding amount, terms, and board vote.

3. **Hiring Decision**: Evaluate whether to hire for a new role. Frame 1 = Role Definition. Frame 2 = Benefits of hiring. Frame 3 = Costs and alternatives (contractor, automation). Frame 4 = Market conditions and timing. Frame 5 = Approval and job posting plan.

4. **Technology Choice**: Evaluating a new technology adoption (e.g., migrating to Kubernetes). Frame 1 = Technology overview. Frame 2 = Benefits. Frame 3 = Migration costs and risks. Frame 4 = Vendor comparison. Frame 5 = Migration plan approval.

## Build Instructions

1. **Create canvas**: Set to 4500x3000px with background #F5F5F0.
2. **Build title bar**: Full-width frame at top (4400x130px). Deep Indigo background. White title text. Add progress indicator circles.
3. **Create 5 column frames**: Each 800x2600px, evenly spaced with 100px gaps. Apply the specified background tint and colored left borders.
4. **Add section headers**: Top of each frame, using the frame's accent color for the header text.
5. **Populate Frame 1**: Add Idea Statement as a large text block. Add Problem, Target Users stickies, Success Metrics list, and Scope Boundaries.
6. **Populate Frame 2**: Add three sub-sections (Customers, Business, Engineering) each with colored sticky notes. Add the Quantified Impact summary box.
7. **Populate Frame 3**: Add three sub-sections with pink sticky notes. Add the Total Cost Estimate summary box with red border.
8. **Populate Frame 4**: Create a 2x2 risk matrix grid with colored cells. Add mitigation strategies as a numbered list. Add opportunity sticky notes.
9. **Populate Frame 5**: Add recommendation text, confidence indicator, conditions checklist, next steps with owners/dates, kill criteria box, and stakeholder sign-off lines.
10. **Draw connectors**: Horizontal arrows between frames. Add dashed feedback loops and dotted cross-references.
11. **Review**: Ensure all financial numbers are consistent. Verify that risks map to mitigations. Check that conditions in Decision Gate address concerns raised in Cons/Risks.

## Tips & Best Practices

- **Fill in the Idea Definition first and completely**: A vague idea definition leads to vague pros/cons. Invest time in making Frame 1 specific and measurable.
- **Be honest in the Cons section**: The value of this board is destroyed if teams sugarcoat the downsides. Assign a "devil's advocate" to own Frame 3.
- **Quantify wherever possible**: "It will cost money" is useless. "$121,200 in Year 1 with 8.4-month payback" drives decisions.
- **Kill criteria are essential**: Without clear stop conditions, sunk cost fallacy kicks in. Define kill criteria BEFORE starting work.
- **Revisit after 90 days**: Schedule a review to compare actual results against the predictions on this board. This builds organizational learning.
- **Use this board as a living document**: Update the stickies as new information emerges during development. The Decision Gate should be re-evaluated at each milestone.
- **Share with stakeholders before the decision meeting**: Let people read the board asynchronously so the meeting focuses on discussion, not presentation.
