# Company Building — Build Process

## Overview

Building a company building board requires a different mindset than technical or project boards. The information is often scattered, subjective, and evolving. The builder must extract organizational identity from conversations, documents, and artifacts, then synthesize it into a coherent visual narrative. This guide walks through the complete build workflow for each board type.

---

## Phase 1: Discovery & Information Gathering

### Step 1.1: Identify the Board Type

| User Says                                                         | Board Type            | Template              |
| ----------------------------------------------------------------- | --------------------- | --------------------- |
| "Company vision," "mission board," "strategic plan," "north star" | Company Vision Board  | company-vision-board  |
| "Culture," "values," "how we work," "team charter"                | Culture Canvas        | culture-canvas        |
| "Org chart," "hiring plan," "team growth," "scaling plan"         | Org Growth Plan       | org-growth-plan       |
| "Investor update," "board meeting," "quarterly report"            | Investor Update Board | investor-update-board |

### Step 1.2: Gather Information by Board Type

**For Company Vision Board** — ask or extract:

- What is the company's one-sentence vision?
- What is the mission (what, for whom, how)?
- What are the 3-4 strategic pillars for the next 12 months?
- What are the company's key metrics (ARR, users, growth rate)?
- What milestones have been achieved and what is planned?
- What is the company's brand (colors, tone, personality)?
- Who is the primary audience for this board?

**For Culture Canvas** — ask or extract:

- What are the company's 3-5 core values?
- For each value: what specific behaviors demonstrate it?
- What does the company explicitly reject (anti-values)?
- How are decisions made (consensus, owner decides, etc.)?
- What communication norms exist (async-first, meeting culture)?
- What rituals or traditions define the team?
- Any real stories that illustrate values in action?

**For Org Growth Plan** — ask or extract:

- Current headcount and department breakdown
- Current org chart (who reports to whom)
- Planned hires for next 6-12 months (in priority order)
- Team topology model (functional, squad, matrix)
- Leadership pipeline (promotions, external hires needed)
- Budget constraints or burn rate context
- Any upcoming reorgs or structural changes

**For Investor Update Board** — ask or extract:

- Reporting period (which quarter/month)
- Key metrics: ARR, MRR, growth rate, churn, users, runway
- 3-5 wins this period
- 2-3 challenges with root cause and plan
- Product updates (shipped and planned)
- Team updates (hires, departures, key roles)
- Financial summary (revenue, expenses, cash)
- 2-3 specific asks for investors

### Step 1.3: Determine Brand & Tone

| Question                   | Options                                             | Impact                       |
| -------------------------- | --------------------------------------------------- | ---------------------------- |
| What is the company stage? | Pre-seed / Seed / Series A / B / Growth             | Formality level              |
| What is the company vibe?  | Playful / Professional / Technical / Mission-driven | Color warmth, language style |
| What are the brand colors? | Primary, secondary, accent hex codes                | Board color palette          |
| Who is the audience?       | Team / Investors / Board / Candidates               | Content depth and tone       |

---

## Phase 2: Content Drafting

### Step 2.1: Write Core Content

Before opening Miro, write all text content:

**Vision Board draft**:

```
Vision: [1 sentence]
Mission: [2-3 sentences]
Purpose: [1 sentence]

Pillar 1: [Name] — [Description] — KRs: [1, 2, 3] — Owner: [Name]
Pillar 2: [Name] — [Description] — KRs: [1, 2, 3] — Owner: [Name]
Pillar 3: [Name] — [Description] — KRs: [1, 2, 3] — Owner: [Name]

Metrics: ARR=$X, Users=Y, Growth=Z%, NPS=N, Runway=Nmo
North Star: [Metric name]: [Value] ([Trend])

Milestones: [List of past and future milestones with dates]
```

**Culture Canvas draft**:

```
Value 1: [Name] — [Statement]
  Do: [3 behaviors]
  Don't: [2 behaviors]
  Story: [1 example]

[Repeat for each value]

Anti-values: [3-5 things we reject]
Decision-making: [How we decide]
Communication: [How we communicate]
Rituals: [Regular practices]
```

### Step 2.2: Review Content Quality

Before building, check:

- [ ] Vision is under 20 words and inspires
- [ ] Mission clearly says what, for whom, how
- [ ] Each value is specific and behavioral (not generic)
- [ ] Metrics include current value AND trend
- [ ] Content is company-specific (not applicable to any company)

---

## Phase 3: Board Construction

### Step 3.1: Canvas Setup

1. Create the board with appropriate dimensions:
   - Vision Board: 4800x3400px
   - Culture Canvas: 4800x3200px
   - Org Growth Plan: 5000x3500px
   - Investor Update: 4200x3000px

2. Set background color:
   - Brand-tinted: 5% tint of primary brand color
   - Default: Off-white #FAFAFA

3. Place the header block:
   - Company logo (top-left, 100x100px)
   - Board title (adjacent to logo, H1 font, primary color)
   - Subtitle/date (below title, body small, text secondary)
   - Confidentiality badge (top-right, if investor-facing)

### Step 3.2: Build Section Frames (Top-to-Bottom)

**Vision Board frame order**:

```
1. Vision & Mission frame      (full width, 350px tall)
2. Values frame                (full width, 400px tall)
3. Strategic Pillars frame     (full width, 800px tall)
4. Metrics frame               (full width, 600px tall)
5. Timeline frame              (full width, 600px tall)
```

**Culture Canvas frame order**:

```
1. Culture Header frame        (full width, 150px tall)
2. Values Grid frame           (full width, 1200-1400px tall)
3. Anti-Values frame           (full width, 300px tall)
4. Decision-Making frame       (half width, 400px tall)
5. Communication frame         (half width, 400px tall)
6. Rituals frame               (full width, 300px tall)
```

**Org Growth Plan frame order**:

```
1. Current Snapshot frame      (full width, 800px tall)
2. Growth Timeline frame       (full width, 1200px tall)
3. Hiring Priorities frame     (full width, 600px tall)
4. Leadership Pipeline frame   (full width, 400px tall)
```

**Investor Update frame order**:

```
1. Header frame                (full width, 100px tall)
2. Metrics Dashboard frame     (full width, 300px tall)
3. Wins frame                  (half width, 400px tall)
4. Challenges frame            (half width, 400px tall)
5. Product Update frame        (half width, 350px tall)
6. Team Update frame           (half width, 350px tall)
7. Financial frame             (full width, 300px tall)
8. The Ask frame               (full width, 250px tall)
```

### Step 3.3: Populate Vision/Mission Section

1. Create a centered text block for the vision statement
   - 48px bold, primary color, centered
   - Generous padding (60px above and below)
   - Optional: Subtle background tint or border

2. Place the mission text below
   - 18px regular, text primary, centered
   - 2-3 sentences maximum

3. Optional: Add founder quote or purpose statement
   - 16px italic, text secondary
   - Attributed with founder name

### Step 3.4: Build Value Blocks

For each value (repeat):

1. Create a card (1200-1400px x 500-700px, white fill, brand-colored left border)
2. Place the value name (22px bold, with number prefix)
3. Add the value statement (16px regular, 2-3 sentences)
4. Add "We Do" list (14px, green text, 3 bullets)
5. Add "We Don't" list (14px, red text, 2 bullets)
6. Add illustrative quote (18px italic, text secondary)
7. Arrange in grid: 2 or 3 columns

### Step 3.5: Build Metric Cards

For each metric (repeat):

1. Create a card (350x250px, white fill, rounded corners, subtle shadow)
2. Place metric label (12px uppercase, text tertiary, top of card)
3. Place metric value (42px bold, context-colored)
4. Place trend indicator (14px semibold, green/red arrow + percentage)
5. Optional: Add sparkline or progress bar
6. Optional: Add target label (12px, text secondary, bottom)
7. Arrange in a row, evenly spaced

### Step 3.6: Build Strategic Pillar Cards

For each pillar (repeat):

1. Create a card (1400x400px, section tint fill, left border accent)
2. Place number badge (50x50px circle, primary color, white number)
3. Place pillar title (22px semibold)
4. Place description (16px regular, 2-3 sentences)
5. Place key results (14px, 3 bullet points)
6. Place owner and status (12px, bottom of card)
7. Add status dot (green/amber/red, 12px circle)

### Step 3.7: Build Timeline (if applicable)

1. Draw a horizontal or vertical line (2px, primary color)
2. For each milestone:
   - Place a circle on the line (filled green for past, empty gray for future)
   - Place milestone title (16px bold) adjacent to circle
   - Place date and detail (14px regular, text secondary)
3. Space milestones evenly along the line
4. Add "NOW" indicator with a distinct marker

---

## Phase 4: Review & Refinement

### Step 4.1: Narrative Flow Check

Read the board top-to-bottom (or left-to-right) and verify:

- [ ] The story flows: Vision → Identity → Strategy → Metrics → Future
- [ ] Each section builds on the previous one
- [ ] The viewer understands the company by the end of the board

### Step 4.2: Content Quality Check

- [ ] Vision is bold and memorable
- [ ] Values are specific (would fail if applied to a random company)
- [ ] Metrics include trends (not just snapshots)
- [ ] No section has more than 5 lines of continuous text
- [ ] The board answers: Who are we? Where are we going? How are we doing?

### Step 4.3: Visual Consistency Check

- [ ] All value blocks are the same size
- [ ] All metric cards are the same size
- [ ] Brand colors used consistently
- [ ] Font hierarchy followed (no random font sizes)
- [ ] Adequate whitespace between sections (80-100px minimum)
- [ ] Elements aligned to the grid

### Step 4.4: Audience Appropriateness Check

For team-facing boards:

- [ ] Feels authentic, not corporate
- [ ] Culture-specific language and inside references
- [ ] Growth metrics contextualized for employees

For investor-facing boards:

- [ ] Professional and clean
- [ ] Confidentiality banner present
- [ ] Specific ask section at the bottom
- [ ] No sensitive internal information (individual salaries, etc.)

---

## Phase 5: Delivery

### Step 5.1: Metadata

Ensure the board has:

- Company logo visible
- Board title and type
- Date or period (e.g., "Q4 2025")
- Version number
- Audience indicator (Team / Investors / Public)

### Step 5.2: Presentation Preparation

If presenting the board:

1. Create Miro frames for each major section
2. Order frames in narrative sequence
3. Test the frame-by-frame presentation mode
4. Add transition notes for the presenter

### Step 5.3: Update Schedule

Set expectations for when the board will be refreshed:

- Vision Board: Update quarterly or when strategy changes
- Culture Canvas: Update annually or when values evolve
- Org Growth Plan: Update monthly during rapid hiring
- Investor Update: Update monthly or quarterly per investor agreement

---

## Build Time Estimates

| Board Type            | Simple | Standard | Detailed |
| --------------------- | ------ | -------- | -------- |
| Company Vision Board  | 20 min | 35 min   | 50 min   |
| Culture Canvas        | 25 min | 40 min   | 60 min   |
| Org Growth Plan       | 20 min | 35 min   | 50 min   |
| Investor Update Board | 15 min | 30 min   | 45 min   |

Simple = Core content only. Standard = Full content + annotations. Detailed = Full content + illustrations + multiple audience frames.

---

## Common Build Mistakes

1. **Generic vision**: "Be the best company in our space" — this applies to every company. Make it specific.
2. **Platitude values**: "We value integrity" — everyone does. Define what integrity means specifically HERE.
3. **Metric-free boards**: A vision board without metrics is a poster, not a strategic document.
4. **Text walls**: Any section with more than 5 continuous lines needs restructuring.
5. **Missing brand**: Using default gray/blue when the company has vibrant brand colors.
6. **Stale content**: A board with last year's metrics destroys credibility.
7. **Investor boards without asks**: The ask section is the entire point of the update.
8. **Org charts without timeline**: An org chart that only shows today is a snapshot, not a plan.

---

## Summary

Building company building boards follows a sequence: discover the organizational truth, draft the content, build the visual structure, and refine for narrative coherence. The key insight is that content quality matters more than visual polish — a beautifully designed board with generic content fails, while a cleanly structured board with specific, honest content succeeds. Start with the content, then let the layout serve the narrative.
