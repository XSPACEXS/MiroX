# Marketing — Layout Patterns

## Overview

Marketing boards follow distinct layout patterns that reflect the underlying marketing framework being used. Unlike strategy boards where frameworks are academic (SWOT, BMC), marketing frameworks are operational — they show how marketing activities flow, when they happen, what they cost, and what they produce. Each layout pattern maps to a specific marketing need and enforces the thinking required to execute effective marketing.

---

## Pattern 1: Campaign Planning Board (Multi-Channel Campaign View)

A structured layout showing a single campaign's strategy, channels, timeline, budget, and KPIs. This is the most common marketing board — a comprehensive plan for one cohesive campaign.

### When to Use

- Product launch campaigns
- Seasonal marketing campaigns (Black Friday, back-to-school, Q4 push)
- Integrated marketing campaigns spanning multiple channels
- Event-driven campaigns (conference, webinar, sponsorship)

### ASCII Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│               [CAMPAIGN NAME & OBJECTIVE]                         │
│               "Launch ComplianceAI Mobile App"                    │
│               Goal: 5,000 downloads in 30 days                   │
├──────────────┬───────────────────────────────────────────────────┤
│              │                                                    │
│  TARGET      │         CHANNEL PLAN                              │
│  AUDIENCE    │                                                    │
│              │  ┌─────────┬─────────┬─────────┬────────┐        │
│  ┌────────┐  │  │ EMAIL   │ SOCIAL  │ CONTENT │ PAID   │        │
│  │Persona │  │  │         │         │         │        │        │
│  │  1     │  │  │ ┌─────┐ │ ┌─────┐ │ ┌─────┐ │ ┌────┐ │        │
│  └────────┘  │  │ │Item │ │ │Item │ │ │Item │ │ │Item│ │        │
│  ┌────────┐  │  │ └─────┘ │ └─────┘ │ └─────┘ │ └────┘ │        │
│  │Persona │  │  │ ┌─────┐ │ ┌─────┐ │ ┌─────┐ │ ┌────┐ │        │
│  │  2     │  │  │ │Item │ │ │Item │ │ │Item │ │ │Item│ │        │
│  └────────┘  │  │ └─────┘ │ └─────┘ │ └─────┘ │ └────┘ │        │
│              │  └─────────┴─────────┴─────────┴────────┘        │
├──────────────┴───────────────────────────────────────────────────┤
│                       TIMELINE                                    │
│  PRE-LAUNCH ──────── LAUNCH ──────── POST-LAUNCH ───── REVIEW   │
│  Week -2             Day 0           Week 1-4           Week 5   │
├──────────────────────────────────────────────────────────────────┤
│  BUDGET: $45K        │  KPIs: Downloads, CAC, Activation Rate   │
└──────────────────────┴───────────────────────────────────────────┘
```

### Spatial Rules

**Board Dimensions**: 8000-10000px wide, 5000-7000px tall

**Header Zone** (full width, 160-200px):

- Campaign name: 36px, Bold, primary brand color
- Campaign objective: 18px, Regular, secondary text color
- Target metric: 20px, Semi-Bold, accent color (the number that matters most)
- Campaign dates: 16px, Regular, right-aligned

**Target Audience Section** (15-20% width, left side):

- Persona cards: 300x400px each, stacked vertically
- Each persona includes: name, role, pain point, preferred channels
- Visual: Persona icon or avatar placeholder at top of each card

**Channel Plan Section** (60-70% width, center):

- Columns per channel, each 15-25% of section width
- Column headers: Channel icon + channel name + budget allocation
- Cards within columns: Individual content pieces or activities
- Card content: Title, format, date, status indicator

**Timeline Section** (full width, 400-600px):

- Horizontal timeline with phase markers: Pre-Launch, Launch Day, Post-Launch, Review
- Activity markers positioned along the timeline
- Milestone diamonds at key dates
- Color gradient: Cool (preparation) to Warm (execution) to Green (measurement)

**Budget & KPI Footer** (full width, 150-200px):

- Budget breakdown: Total + per-channel allocation
- KPI targets: 3-5 primary metrics with targets and actuals
- Two-column layout: Budget left, KPIs right

---

## Pattern 2: Content Calendar (Editorial Grid)

A calendar-based layout showing content production and publication across a time period (typically monthly or quarterly). This pattern treats content as an editorial operation — planned, produced, reviewed, and published on a schedule.

### When to Use

- Monthly/quarterly content planning
- Social media content scheduling
- Blog and newsletter editorial calendars
- Multi-channel content coordination

### ASCII Diagram

```
┌──────────────────────────────────────────────────────────────┐
│  CONTENT CALENDAR — March 2026                                │
│  Theme: "Compliance Automation Month"                         │
├────────┬────────┬────────┬────────┬────────┬────────┬───────┤
│  MON   │  TUE   │  WED   │  THU   │  FRI   │  SAT   │ SUN  │
├────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│        │        │ ┌────┐ │        │ ┌────┐ │        │       │
│        │        │ │Blog│ │        │ │News│ │        │       │
│        │        │ │Post│ │        │ │lttr│ │        │       │
│        │        │ └────┘ │        │ └────┘ │        │       │
│ ┌────┐ │        │        │ ┌────┐ │        │        │       │
│ │Soc.│ │        │        │ │Soc.│ │        │        │       │
│ └────┘ │        │        │ └────┘ │        │        │       │
├────────┼────────┼────────┼────────┼────────┼────────┼───────┤
│        │ ┌────┐ │        │        │ ┌────┐ │        │       │
│        │ │Case│ │        │        │ │Webi│ │        │       │
│        │ │Stdy│ │        │        │ │nar │ │        │       │
│        │ └────┘ │        │        │ └────┘ │        │       │
├────────┴────────┴────────┴────────┴────────┴────────┴───────┤
│  CONTENT MIX: Blog (4) | Social (12) | Email (4) | Video (2)│
│  FUNNEL COVERAGE: TOFU 40% | MOFU 35% | BOFU 25%            │
└──────────────────────────────────────────────────────────────┘
```

### Spatial Rules

**Board Dimensions**: 8000-12000px wide, 6000-8000px tall

**Calendar Grid**:

- 7 columns (Mon-Sun), each approximately (board width - padding) / 7
- Row height: 600-800px per week (enough for 3-4 content cards stacked)
- Cell background: Alternating very subtle tints (white and 3% gray)
- Weekend columns: Slightly different background if the organization does not publish on weekends
- Day headers: 16px, Bold, centered at top of each column

**Content Cards Within Cells**:

- Size: 150x100px (compact) or 180x120px (standard)
- Color coded by content type:
  - Blog post: Blue (#1565C0)
  - Social media: Teal (#00897B)
  - Email/newsletter: Orange (#E65100)
  - Video: Purple (#7B1FA2)
  - Webinar: Green (#2E7D32)
  - Podcast: Red (#C62828)
  - Whitepaper: Gray (#455A64)
- Card content: Title (12-14px), channel icon, status dot, author initials
- Status dot: Green (published), Yellow (in review), Blue (in production), Gray (planned)

**Monthly Theme Banner** (full width, 80px, above the calendar grid):

- Displayed below the header: "Theme: Compliance Automation Month"
- Background: Primary brand color at 10% opacity
- This ensures all content aligns to a cohesive monthly narrative

**Content Mix Footer** (full width, 200px):

- Content type distribution: "Blog (4) | Social (12) | Email (4) | Video (2)"
- Funnel stage distribution: "TOFU 40% | MOFU 35% | BOFU 25%"
- Channel performance from previous month (if available): "Blog drove 2,400 visits | Email: 45% open rate"

---

## Pattern 3: Marketing Funnel Board (Conversion Funnel)

A vertical or horizontal funnel showing how prospects move through stages from awareness to purchase, with metrics, activities, and optimization tactics at each stage.

### When to Use

- Marketing-sales funnel analysis
- Conversion rate optimization
- Customer journey mapping (marketing-focused)
- Growth marketing planning

### ASCII Diagram

```
┌──────────────────────────────────────────────────┐
│           MARKETING FUNNEL — Q2 2026              │
├──────────────────────────────────────────────────┤
│                                                   │
│  ┌───────────────────────────────────────────┐   │
│  │          AWARENESS                         │   │
│  │   Traffic: 125,000/mo | Sources: SEO 45%, │   │
│  │   Social 25%, Paid 20%, Direct 10%        │   │
│  └────────────────────┬──────────────────────┘   │
│                       │  Conv: 4.2%               │
│     ┌─────────────────┴─────────────────┐        │
│     │         INTEREST                   │        │
│     │  Leads: 5,250/mo | Blog subs,     │        │
│     │  content downloads, webinar regs   │        │
│     └───────────────┬───────────────────┘        │
│                     │  Conv: 18%                  │
│       ┌─────────────┴───────────┐                │
│       │      CONSIDERATION       │                │
│       │  MQLs: 945/mo | Demo     │                │
│       │  requests, pricing page  │                │
│       └──────────┬──────────────┘                │
│                  │  Conv: 32%                     │
│         ┌────────┴────────┐                      │
│         │   DECISION       │                      │
│         │  SQLs: 302/mo    │                      │
│         │  Sales meetings  │                      │
│         └──────┬──────────┘                      │
│                │  Conv: 25%                       │
│           ┌────┴────┐                            │
│           │ PURCHASE │                            │
│           │ 76 new   │                            │
│           │customers │                            │
│           └─────────┘                            │
│                                                   │
│  ┌───────────────────────────────────────────┐   │
│  │  KEY INSIGHT: Blog-to-MQL path has 2x      │   │
│  │  higher conversion than paid-to-MQL.       │   │
│  │  Recommendation: Shift 20% of paid budget  │   │
│  │  to content marketing.                     │   │
│  └───────────────────────────────────────────┘   │
└──────────────────────────────────────────────────┘
```

### Spatial Rules

**Board Dimensions**: 5000-7000px wide, 7000-9000px tall (portrait orientation for vertical funnel)

**Funnel Shape**:

- Each stage is a trapezoid or rectangle, wider at top, narrower at bottom
- Width decreases proportionally to conversion rate (if 4.2% convert from Awareness to Interest, the Interest stage is visually narrower)
- Stage height: 300-500px each
- Gap between stages: 80-120px (occupied by conversion rate indicator)

**Stage Content**:

- Stage name: 22-28px, Bold, white text on colored background
- Key metric: 18-20px, Semi-Bold (e.g., "125,000/mo")
- Activity description: 14-16px, Regular
- Each stage has a colored background that darkens as you go down the funnel (light blue at top, dark blue at bottom) or follows the warm-cool spectrum

**Conversion Arrows**:

- Between each stage, a downward arrow with the conversion rate displayed
- Arrow color: Green if above benchmark, Red if below, Yellow if at benchmark
- Arrow width: Proportional to the volume passing through

**Side Panels** (optional, flanking the funnel):

- Left side: Activities/tactics that drive each stage
- Right side: Metrics and optimization opportunities for each stage
- These panels connect to the funnel stages via horizontal dotted lines

**Insight Zone** (below the funnel, full width, 200-300px):

- Key insight callout with gold accent bar
- Recommendation based on funnel analysis
- This is the "So What?" of the funnel — what action does the data suggest?

---

## Pattern 4: Go-to-Market Launch Board

A specialized campaign board designed for product or feature launches, organized around the launch timeline with pre-launch, launch, and post-launch phases.

### When to Use

- New product launches
- Major feature releases
- Market expansion (new geography, new segment)
- Rebranding or repositioning launches

### ASCII Diagram

```
┌────────────────────────────────────────────────────────────────┐
│              GO-TO-MARKET: Mobile App Launch                     │
│              Target: 5,000 downloads, 60+ NPS, $50K pipeline    │
├──────────┬────────────────┬─────────────┬─────────────────────┤
│          │                │             │                      │
│ POSITION │  PRE-LAUNCH    │   LAUNCH    │  POST-LAUNCH         │
│ & MSG    │  (Week -4 to   │   (Week 0)  │  (Week 1-8)         │
│          │   Week -1)     │             │                      │
│ ┌──────┐ │ ┌────────────┐ │ ┌─────────┐ │ ┌────────────────┐  │
│ │Value │ │ │Teaser camp.│ │ │Launch   │ │ │Nurture sequence│  │
│ │Props │ │ │Beta access │ │ │event    │ │ │Onboarding flow │  │
│ │      │ │ │Press kits  │ │ │PR blast │ │ │User feedback   │  │
│ │Diff. │ │ │Influencer  │ │ │Product  │ │ │Feature requests│  │
│ │points│ │ │outreach    │ │ │Hunt     │ │ │Expansion camp. │  │
│ └──────┘ │ └────────────┘ │ └─────────┘ │ └────────────────┘  │
│          │                │             │                      │
├──────────┴────────────────┴─────────────┴─────────────────────┤
│  CHANNELS: Email | Social | PR | Paid | Product Hunt | Events  │
├────────────────────────────────────────────────────────────────┤
│  METRICS DASHBOARD                                              │
│  Downloads: ___/5000 | NPS: ___/60 | Pipeline: $___/$50K      │
└────────────────────────────────────────────────────────────────┘
```

### Spatial Rules

**Board Dimensions**: 10000-14000px wide, 5000-7000px tall

**Four Main Columns**:

1. **Positioning & Messaging** (15% width): Value propositions, differentiation, key messages, audience definition
2. **Pre-Launch** (30% width): Teaser campaigns, beta programs, press outreach, influencer engagement, internal enablement
3. **Launch** (20% width): Launch day activities, PR coordination, product launch platforms, promotional events
4. **Post-Launch** (35% width): Nurture sequences, user onboarding, feedback collection, iteration planning, expansion campaigns

**Phase Transitions**:

- Vertical dividers between phases: 3px, dashed, neutral gray
- Phase headers: 24px Bold, with date ranges beneath
- Milestone diamonds at phase boundaries (e.g., "Beta closes," "Launch Day," "30-day review")

**Channel Strip** (full width, 200px, below the main columns):

- Horizontal strip showing which channels are active in each phase
- Channel activity mapped to the timeline above
- Heat map coloring: darker = more activity in that channel during that phase

**Metrics Dashboard** (full width, 250px, bottom):

- Large metric displays: Target vs. Actual for 3-5 key metrics
- Progress bars or gauge visualizations
- Updated in real-time as campaign data comes in

---

## Pattern 5: Brand Guidelines Board

A visual reference board containing the brand's identity system — logo usage, color palette, typography, voice and tone, imagery style, and application examples.

### When to Use

- Brand identity documentation
- Agency or freelancer onboarding
- Internal team brand alignment
- Brand refresh or evolution tracking

### ASCII Diagram

```
┌──────────────────────────────────────────────────────────────┐
│               BRAND GUIDELINES — ComplianceAI                  │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌──────────┐  ┌──────────────┐  ┌─────────────────────┐    │
│  │  LOGO    │  │  COLOR       │  │  TYPOGRAPHY          │    │
│  │  USAGE   │  │  PALETTE     │  │                      │    │
│  │          │  │              │  │  Heading: Inter Bold  │    │
│  │  ☑ Do    │  │  ■ #4A148C  │  │  Body: Inter Regular  │    │
│  │  ☒ Don't │  │  ■ #00695C  │  │  Data: JetBrains Mono│    │
│  │          │  │  ■ #F9A825  │  │                      │    │
│  └──────────┘  └──────────────┘  └─────────────────────┘    │
│                                                               │
│  ┌─────────────────────┐  ┌──────────────────────────────┐  │
│  │  VOICE & TONE       │  │  IMAGERY & ICONOGRAPHY       │  │
│  │                      │  │                               │  │
│  │  We are: Clear,      │  │  ✓ Clean, minimal photos     │  │
│  │  Confident, Helpful  │  │  ✓ Geometric illustrations   │  │
│  │  We avoid: Jargon,   │  │  ✗ Stock photos with people  │  │
│  │  Passive voice       │  │  ✗ Overly abstract imagery   │  │
│  └─────────────────────┘  └──────────────────────────────┘  │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐    │
│  │  APPLICATION EXAMPLES                                 │    │
│  │  [Website] [Email] [Social] [Presentation] [Print]   │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

### Spatial Rules

**Board Dimensions**: 8000-10000px wide, 6000-8000px tall

**Grid Layout**: 2-3 columns, 3-4 rows of content sections

**Section Structure** (each section is a framed zone):

1. **Logo Usage** (30% width, 40% height): Logo versions, clear space rules, minimum sizes, approved and prohibited usage examples
2. **Color Palette** (30% width, 40% height): Primary, secondary, accent colors with hex codes, RGB, and CMYK values. Usage ratios (60% primary, 30% secondary, 10% accent)
3. **Typography** (40% width, 40% height): Font families, weights, sizes, line heights. Heading, body, data, and caption styles with examples
4. **Voice & Tone** (50% width, 30% height): Brand personality attributes, writing dos and don'ts, tone spectrum (formal to casual, serious to playful)
5. **Imagery & Iconography** (50% width, 30% height): Photography style, illustration style, icon system, approved and prohibited visual approaches
6. **Application Examples** (100% width, 30% height): Real examples of the brand system applied to website, email, social media, presentations, and print materials

---

## Universal Layout Principles for Marketing Boards

### The Marketing Hierarchy

Every marketing board should visually communicate this hierarchy:

1. **Strategy** (why): Positioning, audience, objectives — the strategic foundation
2. **Tactics** (what): Campaigns, content, channels — the execution plan
3. **Metrics** (how well): KPIs, conversion rates, ROI — the measurement layer

Place Strategy at the top or left (foundational), Tactics in the center (the bulk of the board), and Metrics at the bottom or right (the accountability layer).

### Channel Color Consistency

Across all marketing boards in an organization, use consistent colors for channels:

| Channel           | Suggested Color       | Icon             |
| ----------------- | --------------------- | ---------------- |
| Email             | #E65100 (Deep Orange) | Envelope         |
| Social Media      | #1565C0 (Blue)        | Globe/share      |
| Content/Blog      | #2E7D32 (Green)       | Document         |
| Paid/Advertising  | #F9A825 (Gold)        | Dollar/megaphone |
| PR/Communications | #7B1FA2 (Purple)      | Microphone       |
| Events            | #C62828 (Red)         | Calendar         |
| SEO               | #00695C (Teal)        | Search           |
| Video             | #AD1457 (Pink)        | Play button      |
| Partnerships      | #37474F (Dark Gray)   | Handshake        |

### Funnel Stage Indicators

Tag every marketing activity with its funnel stage:

- **TOFU** (Top of Funnel / Awareness): Light blue badge
- **MOFU** (Middle of Funnel / Consideration): Medium blue badge
- **BOFU** (Bottom of Funnel / Decision): Dark blue badge
- **Retention**: Green badge
- **Advocacy**: Gold badge

### Date and Urgency Markers

Marketing is time-sensitive. Every board should include:

- Launch dates on campaign cards
- Deadlines with countdown indicators (days remaining)
- Status markers: Planned (gray), In Progress (blue), Live (green), Complete (dark green), Paused (yellow), Cancelled (red)

---

## Choosing the Right Pattern

```
What marketing challenge are you solving?

├── "We need to plan a campaign across multiple channels"
│   └── Pattern 1: Campaign Planning Board
│
├── "We need to organize our content production schedule"
│   └── Pattern 2: Content Calendar
│
├── "We need to understand where we lose prospects"
│   └── Pattern 3: Marketing Funnel Board
│
├── "We are launching a new product and need GTM coordination"
│   └── Pattern 4: Go-to-Market Launch Board
│
└── "We need to document and share our brand identity"
    └── Pattern 5: Brand Guidelines Board
```

### Pattern Compatibility Matrix

| Marketing Need            | Best Pattern              | Good Alternative             |
| ------------------------- | ------------------------- | ---------------------------- |
| Campaign planning         | Campaign Board            | GTM Launch Board             |
| Content scheduling        | Content Calendar          | Campaign Board               |
| Funnel optimization       | Funnel Board              | Campaign Board + metrics     |
| Product launch            | GTM Launch Board          | Campaign Board               |
| Brand documentation       | Brand Guidelines          | N/A (specialized)            |
| Annual marketing plan     | Campaign Board (expanded) | Content Calendar (quarterly) |
| Channel strategy          | Funnel Board              | Campaign Board               |
| Marketing-sales alignment | Funnel Board              | GTM Launch Board             |
