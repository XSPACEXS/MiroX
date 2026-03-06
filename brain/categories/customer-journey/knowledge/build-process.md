# Build Process — Customer Journey Boards

## Overview

Building a customer journey board is not a linear "design-then-fill" process. It is an iterative dialogue between data, structure, and visual design. This guide walks through the six-phase process from discovery to delivery, including Miro API translation strategies, common pitfalls, and quality checkpoints.

---

## Phase 1: Discovery (Before You Touch Miro)

### Gather Inputs

Before creating a single element, collect and organize the raw inputs:

**For Journey Maps**:

- User research transcripts (interviews, usability sessions)
- Analytics data (funnel metrics, drop-off rates, session recordings)
- Support data (ticket categories, CSAT scores, common complaints)
- NPS data with verbatim comments
- Internal stakeholder interviews (sales, support, product, marketing)
- Competitive intelligence (competitor journey experiences)

**For Empathy Maps**:

- 5-10 user interview transcripts for the target persona
- Social media posts and community forum comments
- Support ticket verbatims
- Sales call recordings or notes
- Observational research notes

**For Persona Boards**:

- Survey data (quantitative demographics, behaviors)
- Interview synthesis (qualitative goals, frustrations)
- Analytics segments (behavioral data)
- CRM data (company size, industry, deal size)
- Existing persona documents (to update, not replace)

**For Touchpoint Analysis**:

- Channel performance metrics (by stage if available)
- Customer satisfaction scores by channel
- Channel usage data (which channels at which stages)
- Support ticket routing data
- Customer effort scores

### Define Scope

Answer these questions before building:

1. **Who is the persona?** Name them. If you cannot name a specific person this board represents, the scope is too vague.
2. **What is the time horizon?** First interaction to when? 30 days? 12 months? Lifetime?
3. **What is the resolution?** Each stage = days? Weeks? Months?
4. **Who is the audience?** Who will view this board? Executives (summary focus), product teams (detail focus), entire company (narrative focus)?
5. **What decision should this board drive?** If the board does not drive a specific decision, it will become decoration.

### Create the Stage Framework

Draft the journey stages on paper or in a simple text document. Standard frameworks to start from:

**B2B SaaS (6 stages)**:
Problem Recognition → Vendor Research → Trial & Evaluation → Internal Advocacy → Purchase & Procurement → Onboarding & Activation

**E-Commerce (7 stages)**:
Awareness → Discovery → Consideration → Purchase → Fulfillment → Usage → Loyalty/Advocacy

**Healthcare (5 stages)**:
Symptom Awareness → Provider Search → First Visit → Treatment → Ongoing Management

**Financial Services (6 stages)**:
Life Event Trigger → Research & Compare → Application → Approval & Onboarding → Active Usage → Renewal/Expansion

Customize these to match your actual customer journey. Never use a generic framework without modification.

---

## Phase 2: Structure (The Skeleton)

### Step 1: Create the Board and Set Dimensions

```
Board size: 5000 x 3000px (journey map)
           3500 x 2800px (empathy map)
           3800 x 3200px (persona board)
           4500 x 3000px (touchpoint analysis)
Background: #F5F5F5 (or palette-appropriate neutral)
```

### Step 2: Place Major Frames

Create empty frames for every major section. Do not add content yet. This is the skeleton.

**Journey Map frame sequence**:

1. Title Banner — top, full width
2. Persona Card — left column
3. Stage columns (one frame per stage) — 6-7 columns
4. Bottom Summary Strip — full width

**Empathy Map frame sequence**:

1. Title Banner
2. Four quadrant frames (Says, Thinks, Does, Feels)
3. Center persona circle
4. Bottom Insights Strip

### Step 3: Establish the Grid

Within each stage frame, create sub-sections for each layer:

- Actions row
- Touchpoints row
- Emotion curve row
- Pain points row
- Opportunities row

Use light gray (#F5F5F5) background rectangles to define these zones before adding any content. The grid must be visible even when empty.

### Step 4: Add Stage Headers

Create the colored header banners for each stage:

- Rectangle: full column width, 50px tall
- Fill: Primary color
- Text: Stage name, 22pt bold, white, centered
- Sub-text: Duration and trigger, 11pt, light tint

This step confirms the horizontal rhythm is correct before investing in content.

---

## Phase 3: Content Population

### Step 1: Persona First

Always start with the persona card. It sets the emotional tone and grounds all subsequent content decisions. Fill in:

- Photo placeholder
- Name, age, role
- Company/context
- Top 3 goals
- Top 3 frustrations
- Tech profile
- Key quote

### Step 2: Actions Row (Left to Right)

Work through each stage sequentially, adding 3-5 customer actions per stage as sticky notes:

- Use sky blue (#E1F5FE) sticky notes
- Write specific, observable behaviors
- Include the channel and context
- Cite the data source when possible

### Step 3: Touchpoints Row

Below actions, add touchpoints:

- Use white (#FFFFFF) sticky notes
- Name the specific channel and platform
- Include small channel icons where possible
- Note whether touchpoint is initiated by customer or organization

### Step 4: Emotion Data

Plot the emotion curve:

- Determine the emotion score (1-5) at each stage
- Add small circles at the correct Y position
- Connect with a smooth line
- Label each point with the emotion word and score
- Color green above 3.0, coral below 3.0

### Step 5: Pain Points

Add pain points below the emotion curve:

- Use light pink (#FFEBEE) sticky notes
- Include severity classification
- Cite evidence (quote, metric, or observation)
- Add business impact where known

### Step 6: Opportunities

Add opportunities at the bottom of each stage:

- Use light gold (#FFF9C4) sticky notes
- Be specific about the improvement
- Reference the pain point it addresses
- Include expected impact and effort level

### Step 7: Bottom Summary Strip

Create the summary section:

- Left side: Key metrics dashboard (3-5 headline numbers)
- Right side: Priority action matrix (top 5-8 improvements, ranked)
- Include owners and target dates for each action

---

## Phase 4: Visual Polish

### Step 1: Color Consistency Audit

Walk through every element and verify:

- All stage banners use the same primary color
- All sticky notes follow the color coding system
- All text uses the correct hierarchy colors
- The emotion curve color changes are accurate
- No rogue colors that break the palette

### Step 2: Alignment Pass

Select all elements in each column and use Miro's alignment tools:

- Left-align all sticky notes within each cell
- Center stage headers within their banners
- Verify equal spacing between stages
- Ensure the persona card spans the full height

### Step 3: Typography Audit

Check every text element:

- Title: 42pt bold white
- Stage headers: 22pt bold primary
- Layer labels: 14pt bold dark gray
- Sticky note text: 12-13pt regular dark
- Metadata: 11pt regular gray
- No text smaller than 10pt

### Step 4: White Space Check

Zoom to 30% and evaluate:

- Is there breathing room between stages?
- Does the board feel cramped or airy?
- Can you identify the overall structure without reading text?
- Is the emotion curve visible and dramatic?

### Step 5: Decorative Elements

Add finishing touches:

- Stage transition markers between columns
- Duration labels between stages ("~2 weeks")
- The neutral line (3.0) on the emotion curve
- Key metric callout boxes at critical stages
- Legend/key in the bottom-right corner

---

## Phase 5: Review and Validation

### Self-Review Checklist

| Check         | Question                                                  | Pass? |
| ------------- | --------------------------------------------------------- | ----- |
| Persona       | Is the persona specific, named, and grounded in research? |       |
| Stages        | Are stages customized to this journey (not generic)?      |       |
| Actions       | Are actions observable and specific?                      |       |
| Touchpoints   | Are channels named specifically?                          |       |
| Emotions      | Is the emotion curve based on real data?                  |       |
| Pain Points   | Do pain points include severity and evidence?             |       |
| Opportunities | Are opportunities specific with owners?                   |       |
| Metrics       | Are key metrics included with benchmarks?                 |       |
| Zoom 30%      | Is the overall structure clear at low zoom?               |       |
| Zoom 100%     | Is all text readable at full zoom?                        |       |
| Color         | Does the color system follow the palette consistently?    |       |
| Hierarchy     | Are there clear visual levels (title > header > body)?    |       |
| Action        | Does the board end with prioritized next steps?           |       |

### Stakeholder Review

Before presenting broadly:

1. Share with 2-3 stakeholders who contributed data
2. Ask: "Does this accurately represent the customer experience you described?"
3. Look for: Missing stages, inaccurate emotions, wrong touchpoints
4. Iterate based on feedback before the broader reveal

---

## Phase 6: Miro API Translation

### Frame Creation Strategy

When building programmatically via the Miro API:

1. **Create frames first** — establish the spatial skeleton before adding content
2. **Use absolute positioning** — calculate X,Y coordinates based on the layout grid
3. **Create elements within frames** — use `parentId` to nest elements in their parent frames

### Coordinate Calculation

For a 5000x3000 board with 6 stages:

```
Title banner:   x=2500, y=150,  w=4900, h=300
Persona card:   x=325,  y=1450, w=600,  h=2200
Stage 1:        x=950,  y=1450, w=680,  h=2200
Stage 2:        x=1650, y=1450, w=680,  h=2200
Stage 3:        x=2350, y=1450, w=680,  h=2200
Stage 4:        x=3050, y=1450, w=680,  h=2200
Stage 5:        x=3750, y=1450, w=680,  h=2200
Stage 6:        x=4450, y=1450, w=680,  h=2200
Bottom strip:   x=2500, y=2800, w=4900, h=400
```

### Element Type Mapping

| Board Element   | Miro API Type                | Key Properties                                 |
| --------------- | ---------------------------- | ---------------------------------------------- |
| Title banner    | Frame + Text                 | background color, text content, font size      |
| Stage header    | Shape (rectangle) + Text     | fill color, text, centered alignment           |
| Sticky note     | Sticky Note                  | content, color (use Miro color enum), position |
| Persona card    | Frame + multiple Text blocks | nested elements within frame                   |
| Emotion curve   | Line                         | start/end points, color, stroke width          |
| Emotion point   | Shape (circle)               | position, fill color, size                     |
| Grid divider    | Line                         | start/end, 1px weight, light gray              |
| Score cell      | Shape (rounded rect)         | fill color based on score, text overlay        |
| Connector arrow | Connector                    | start/end item IDs, color                      |

### Build Order for API

1. Create the board (if not existing)
2. Create all frames (title, persona, stages, summary)
3. Add text blocks to frames (headers, labels)
4. Add sticky notes to stage frames (positioned within frame coordinates)
5. Add shapes (persona card elements, score circles)
6. Add lines (emotion curve, grid dividers)
7. Add connectors (if any causal links)

### API Pitfalls

- **Sticky note colors**: Miro API uses predefined color names (e.g., `light_blue`, `light_pink`), not arbitrary hex values. Map your palette to the closest Miro sticky note color.
- **Text in shapes**: Text within shapes requires setting `textAlign` and `fontSize` properties explicitly. Default alignment may not match your design.
- **Frame nesting**: Elements created with a `parentId` are positioned relative to the parent frame's top-left corner, not the board's origin.
- **Line curves**: The Miro API supports straight lines and basic curves but not complex bezier paths. For the emotion curve, approximate with multiple straight line segments or use polyline.
- **Z-ordering**: Elements are layered in creation order by default. If you need the emotion curve to appear above grid dividers, create dividers first.

---

## Common Pitfalls

### 1. Starting with Visual Design

The most common mistake is spending hours on colors and fonts before having any content. Content determines structure. Structure determines layout. Layout determines visual design. Inverting this order creates beautiful but empty boards.

### 2. Trying to Map Everything

A journey map that covers every possible customer path is not a map — it is a territory. Constrain to one persona, one journey, one time horizon. Complexity can be added in later versions.

### 3. Design by Committee

Journey boards built by committee tend to be comprehensive but dull. Designate one person as the "board owner" who makes final layout and content decisions. Others contribute data and review, but one person holds the design vision.

### 4. Ignoring Mobile Viewers

Many stakeholders will view the board on laptops, tablets, or even phones. Test your board at multiple zoom levels and ensure the most important elements (persona, emotion curve, priority actions) are visible at 50% zoom.

### 5. Perfection Paralysis

Version 1 does not need to be perfect. Ship a complete-but-rough board, gather feedback, then polish. A polished board with wrong content is worse than a rough board with right content.

### 6. No Clear "So What?"

If you build a beautiful journey map but do not include prioritized actions with owners and deadlines, you have created art, not a tool. The bottom strip with priority actions is the most important section on the board. Build it last but never skip it.
