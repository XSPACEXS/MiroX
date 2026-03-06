# Layout Patterns — Marketing Enablement Board

## Pattern Overview

Marketing Enablement Boards are the densest, most operationally complex boards in the MiRoX Brain. Their layout patterns prioritize information density, rapid findability, and clear status communication over visual flair. These boards use strict grid systems, standardized frame sizes, and consistent visual vocabularies to manage massive amounts of marketing operational data.

---

## Pattern 1: The War Room Grid

The primary layout pattern for marketing enablement. A strict grid of standardized frames covering the entire board surface, organized into rows by function.

### Structure

```
+-----------------------------------------------------------------------+
| [ HEADER: Campaign Name, Status, Key Metrics ]                        |
+-----------------------------------------------------------------------+
| [ CAMPAIGN    ] | [ CAMPAIGN    ] | [ CAMPAIGN    ] | [ CAMPAIGN    ] |
| [ TRACKER 1   ] | [ TRACKER 2   ] | [ TRACKER 3   ] | [ TRACKER 4   ] |
+---+---+---+-----+---+---+---+-----+---+---+---+-----+---+---+---+---+
| [ CONTENT PIPELINE ]                | [ DESIGN PIPELINE ]              |
| Backlog | Draft | Review | Published| Brief | Draft | Review | Live   |
+---+---+---+---+-+---+---+---+------+---+---+---+---+-+---+---+------+
| [ METRICS DASHBOARD ]                                                  |
| [Funnel] [Channels] [CAC] [LTV] [Conversion] [Attribution]           |
+-----------------------------------------------------------------------+
| [ ASSETS & RESOURCES ]              | [ CALENDAR ]                    |
+-----------------------------------------------------------------------+
```

### Grid Specifications

| Grid Property     | Value                     | Notes                         |
| ----------------- | ------------------------- | ----------------------------- |
| Board width       | 5000-6000px               | Allows 4 major columns        |
| Board height      | 4000-5000px               | Allows 4-5 major rows         |
| Column count      | 4 major columns           | 1150-1400px each              |
| Gutter width      | 40px                      | Consistent between all frames |
| Frame border      | 2px, light gray (#DFE6E9) | Subtle separation             |
| Header row height | 300-400px                 | Full board width              |
| Standard frame    | 1150 x 700px              | Quarter-width                 |
| Double frame      | 2340 x 700px              | Half-width                    |
| Full-width frame  | 4800 x 400-700px          | Metrics, calendar             |

### Row Organization

| Row   | Content                  | Height    | Priority                                     |
| ----- | ------------------------ | --------- | -------------------------------------------- |
| Row 0 | Header/Dashboard summary | 300-400px | Always visible — the "control tower"         |
| Row 1 | Active campaigns         | 600-800px | Primary workspace — where daily work happens |
| Row 2 | Content/Design pipelines | 500-700px | Production tracking                          |
| Row 3 | Metrics & analytics      | 400-600px | Performance monitoring                       |
| Row 4 | Assets & calendar        | 500-700px | Reference materials                          |

---

## Pattern 2: The Kanban Pipeline

The standard pattern for tracking marketing content and asset production. Multiple horizontal kanban lanes showing work items moving through stages.

### Structure

```
+-----------------------------------------------------------------------+
| CONTENT PIPELINE                                                       |
+-----------------------------------------------------------------------+
| BACKLOG     | BRIEF       | DRAFT       | REVIEW      | PUBLISHED    |
| (23 items)  | (5 items)   | (8 items)   | (4 items)   | (12 items)   |
+-------------+-------------+-------------+-------------+--------------+
| [sticky]    | [sticky]    | [sticky]    | [sticky]    | [sticky]     |
| [sticky]    | [sticky]    | [sticky]    | [sticky]    | [sticky]     |
| [sticky]    | [sticky]    | [sticky]    | [sticky]    |              |
| [sticky]    |             | [sticky]    |             |              |
| [sticky]    |             |             |             |              |
| +12 more    |             |             |             |              |
+-------------+-------------+-------------+-------------+--------------+
```

### Kanban Column Specifications

| Column               | Background Color       | Header Style     | Item Limit |
| -------------------- | ---------------------- | ---------------- | ---------- |
| Backlog              | Light gray (#F5F5F5)   | Gray header text | Unlimited  |
| Brief / Planning     | Light blue (#E3F2FD)   | Blue header      | 8 items    |
| In Draft / Creation  | Light yellow (#FFF8E1) | Amber header     | 6 items    |
| In Review            | Light purple (#F3E5F5) | Purple header    | 4 items    |
| Approved / Published | Light green (#E8F5E9)  | Green header     | Unlimited  |

### Sticky Note Format for Kanban Items

Each sticky note represents a content piece or asset and follows a standard format:

```
+---------------------------+
| [TYPE BADGE] Blog Post    |
| "10 Ways to Improve..."  |
| Owner: Sarah K.           |
| Due: Mar 15               |
| [STATUS DOT] On Track     |
+---------------------------+
```

- **Type badge**: Color-coded rectangle (Blog=blue, Email=purple, Social=pink, Landing Page=green, Video=red)
- **Title**: Content title or brief description
- **Owner**: Assigned team member
- **Due date**: Deadline
- **Status dot**: Green/Yellow/Red traffic light

---

## Pattern 3: The Funnel Metrics Layout

Visualizes the marketing funnel with conversion metrics at each stage. The funnel shape narrows from left to right (or top to bottom) showing audience drop-off.

### Horizontal Funnel Structure

```
+-----------------------------------------------------------------------+
| TRACTION FUNNEL — Q1 2026                                             |
+-----------------------------------------------------------------------+
|                                                                        |
| +---------+  +--------+  +-------+  +------+  +-----+  +----+       |
| |AWARENESS|  |INTEREST|  |CONSID |  |INTENT|  |EVAL |  |BUY |       |
| | 142,000 |->| 34,000 |->| 8,200 |->| 3,100|->|1,400|->|890 |       |
| | impress |  | visits  |  |signups|  |trials|  |demos|  |cust|       |
| +---------+  +--------+  +-------+  +------+  +-----+  +----+       |
|     |76%        |76%        |62%       |55%      |36%                 |
|     DROP        DROP        DROP       DROP      DROP                 |
|                                                                        |
| [ CHANNEL BREAKDOWN ]  [ CONVERSION ANALYSIS ]  [ TARGETS ]          |
+-----------------------------------------------------------------------+
```

### Funnel Design Specifications

- **Stage width**: Decreases proportionally to conversion rate (first stage is widest, last is narrowest)
- **Stage height**: Consistent (200-250px) for readability
- **Stage colors**: Gradient from cool (awareness = light blue) to warm (purchase = deep green)
- **Drop-off indicators**: Red/orange labels between stages showing % lost
- **Conversion arrows**: Thick connectors between stages with conversion rate labels
- **Below-funnel analysis**: Three equal frames beneath the funnel for channel breakdown, conversion analysis, and target comparison

### Vertical Funnel Alternative

For boards that flow top-to-bottom, the same funnel can be rotated 90 degrees:

```
+---+---+---+---+---+---+
|   AWARENESS (142K)     |
+---+---+---+---+---+---+
     |
  +---+---+---+---+
  |  INTEREST (34K)|
  +---+---+---+---+
       |
    +---+---+---+
    |CONSIDER (8K)|
    +---+---+---+
         |
      +---+---+
      |INTENT |
      | (3.1K)|
      +---+---+
           |
        +----+
        |BUY |
        |890 |
        +----+
```

---

## Pattern 4: The Landing Page Tracker Grid

Tracks multiple landing pages through their design and optimization lifecycle. A grid where each column is a landing page and each row is a dimension of tracking.

### Structure

```
+-----------------------------------------------------------------------+
| LANDING PAGE TRACKER                                                   |
+-----------------------------------------------------------------------+
|              | LP: Product  | LP: Demo    | LP: Pricing | LP: Free   |
|              | Tour         | Request     | Page        | Trial      |
+--------------+--------------+-------------+-------------+------------+
| WIREFRAME    | [v1 sketch]  | [v2 sketch] | [v1 sketch] | [v1]      |
+--------------+--------------+-------------+-------------+------------+
| DESKTOP      | [mockup v3]  | [mockup v2] | [mockup v1] | [v2]      |
| MOCKUP       | APPROVED     | IN REVIEW   | DRAFT       | LIVE      |
+--------------+--------------+-------------+-------------+------------+
| MOBILE       | [mockup v3]  | [mockup v1] | [concept]   | [v2]      |
| MOCKUP       | APPROVED     | DRAFT       | PLANNED     | LIVE      |
+--------------+--------------+-------------+-------------+------------+
| COPY         | Final v2     | Draft v1    | Outline     | Live v2   |
| VERSION      |              |             |             |            |
+--------------+--------------+-------------+-------------+------------+
| A/B TESTS    | Headline:    | CTA color:  | —           | Form      |
|              | +12% winner  | Running     |             | fields: -3|
+--------------+--------------+-------------+-------------+------------+
| CONVERSION   | 4.2%         | 2.8%        | —           | 6.1%      |
| RATE         | (+0.8% MoM)  | (-0.2% MoM)|             | (+1.2%)   |
+--------------+--------------+-------------+-------------+------------+
| TRAFFIC      | 12,000/mo    | 3,400/mo    | 28,000/mo   | 8,900/mo  |
+--------------+--------------+-------------+-------------+------------+
```

### Grid Specifications

- **Column width**: 1000-1200px per landing page
- **Row height**: Variable (wireframe rows taller for visual, metric rows shorter for data)
- **Cell styling**: Light gray borders, white fill, status-colored backgrounds for active cells
- **Mockup placement**: Embed images or draw wireframe-style rectangles showing page layout
- **Status badges**: Corner badges on each cell (Draft/Review/Approved/Live/Deprecated)

---

## Pattern 5: The Campaign War Room Layout

A dedicated layout for a single major campaign, showing all dimensions of the campaign on one board.

### Structure

```
+-----------------------------------------------------------------------+
| [ CAMPAIGN: Q2 Product Launch — "FlowBoard AI" ]                     |
| Status: IN PROGRESS | Launch: April 15 | Budget: $180K | Owner: VP Mkt|
+-----------------------------------------------------------------------+
|                         |                        |                     |
| [ STRATEGY ]            | [ CREATIVE ASSETS ]    | [ TIMELINE ]       |
| Goals, Audience,        | Landing pages,         | Gantt-style        |
| Messaging, Channels     | Emails, Ads, Social    | Countdown          |
|                         |                        |                     |
+-----------------------------------------------------------------------+
|                         |                        |                     |
| [ CONTENT CALENDAR ]    | [ BUDGET TRACKER ]     | [ APPROVAL STATUS ]|
| Daily content plan      | Budget vs Spend        | Stakeholder sign-  |
| by channel              | by category            | offs               |
|                         |                        |                     |
+-----------------------------------------------------------------------+
|                         |                        |                     |
| [ METRICS ]             | [ COMPETITIVE INTEL ]  | [ RISKS & ISSUES ] |
| KPIs, forecasts,        | What competitors       | Blockers, risks,   |
| actuals                 | are doing              | mitigations        |
|                         |                        |                     |
+-----------------------------------------------------------------------+
```

### War Room Frame Specifications

- **9-frame grid**: 3 columns x 3 rows of equal-sized frames (1550 x 800px each)
- **Header row**: Full-width campaign summary with key facts, status, and countdown timer
- **Frame backgrounds**: White with thin gray borders — no colored backgrounds (color is reserved for status indicators within frames)
- **Cross-references**: Dashed connectors between related elements across frames (e.g., budget line items connected to their campaign activities)

---

## Pattern 6: The Feature Bundle Display

Used for product marketing boards that organize features into marketable bundles with messaging frameworks.

### Structure

```
+-----------------------------------------------------------------------+
| FEATURE BUNDLE BOARD — FlowBoard Product Marketing                    |
+-----------------------------------------------------------------------+
|                                                                        |
| BUNDLE: "Collaboration Suite"  | BUNDLE: "AI Assistant"              |
| +---------------------------+  | +---------------------------+       |
| | Messaging Framework       |  | | Messaging Framework       |       |
| | Tagline: "Work together,  |  | | Tagline: "Your AI         |       |
| | anywhere"                 |  | | co-pilot for visual       |       |
| | Target: Team leads        |  | | thinking"                 |       |
| | Differentiator: Real-time |  | | Target: Power users       |       |
| +---------------------------+  | +---------------------------+       |
| | Feature: Real-time canvas |  | | Feature: AI generation    |       |
| | Feature: Video conferencing|  | | Feature: AI summarization |       |
| | Feature: Comments/threads |  | | Feature: Smart templates  |       |
| | Feature: Voting/reactions |  | | Feature: Action extraction|       |
| +---------------------------+  | +---------------------------+       |
| | Competitive Position      |  | | Competitive Position      |       |
| | vs Miro | vs FigJam       |  | | vs Notion AI | vs ChatGPT |       |
| +---------------------------+  | +---------------------------+       |
| | Sales Enablement          |  | | Sales Enablement          |       |
| | One-pager | Demo script   |  | | One-pager | Demo script   |       |
| | Objection handling        |  | | Objection handling        |       |
| +---------------------------+  | +---------------------------+       |
+-----------------------------------------------------------------------+
```

### Bundle Card Specifications

- **Card width**: 2200-2400px (half-board width for 2-column layout)
- **Card sections stacked vertically**: Messaging Framework (250px) -> Features List (300px) -> Competitive Position (200px) -> Sales Enablement (200px)
- **Feature items**: Small rectangular cards within the features section, color-coded by status (GA = green, Beta = yellow, Planned = blue)
- **Competitive matrix**: Mini comparison table within each bundle card

---

## Pattern 7: The Multi-Channel Calendar

A calendar-based layout showing marketing activities across multiple channels over time.

### Structure

```
+-----------------------------------------------------------------------+
| MARKETING CALENDAR — MARCH 2026                                       |
+-----------------------------------------------------------------------+
| CHANNEL  | Week 1      | Week 2      | Week 3      | Week 4          |
|          | Mar 2-8     | Mar 9-15    | Mar 16-22   | Mar 23-29       |
+----------+-------------+-------------+-------------+-----------------+
| Blog     | [post 1]    | [post 2]    | [post 3]    | [post 4]        |
|          |             | [post 2b]   |             |                 |
+----------+-------------+-------------+-------------+-----------------+
| Email    | [newsletter]|             | [nurture 3] | [product update]|
+----------+-------------+-------------+-------------+-----------------+
| Social   | [campaign A]| [campaign A]| [campaign B]| [campaign B]    |
|          | 5 posts     | 5 posts     | 3 posts     | 3 posts         |
+----------+-------------+-------------+-------------+-----------------+
| Paid     | [Google Ads]| [Google Ads]| [LinkedIn]  | [LinkedIn]      |
|          | $12K budget | $12K budget | $8K budget  | $8K budget      |
+----------+-------------+-------------+-------------+-----------------+
| Events   |             | [Webinar]   |             | [Conference]    |
+----------+-------------+-------------+-------------+-----------------+
| PR       | [Press rel.]|             |             | [Analyst brief] |
+----------+-------------+-------------+-------------+-----------------+
```

### Calendar Specifications

- **Channel column**: 300px wide, left-aligned, with channel icon and color
- **Week columns**: Equal width, filling remaining space
- **Cell content**: Sticky notes or small shapes representing activities
- **Color coding**: Each channel has its own color (Blog=blue, Email=purple, Social=pink, Paid=green, Events=orange, PR=gray)
- **Status indicators**: Small dots on each activity (green=published, yellow=in progress, red=delayed, blue=scheduled)
- **Cross-channel lines**: Dashed connectors linking related activities across channels (e.g., blog post and social promotion for the same topic)

---

## Advanced Technique: The Dashboard Header

Every Marketing Enablement Board should have a "Dashboard Header" — a full-width frame at the top that provides an at-a-glance summary of the most critical information.

### Dashboard Header Contents

```
+-----------------------------------------------------------------------+
| FlowBoard Marketing War Room | Q1 2026 | Last Updated: Mar 6         |
+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+---+------+
| MRR        | CAC          | Pipeline      | Campaigns  | Content     |
| $3.2M      | $142         | $890K         | 4 active   | 23 in pipe  |
| +22% QoQ   | -$18 MoM    | +$120K MoM    | 2 planned  | 8 published |
| [GREEN]    | [GREEN]      | [YELLOW]      | [GREEN]    | [GREEN]     |
+-----------------------------------------------------------------------+
```

- **Width**: Full board width (4800-5000px)
- **Height**: 250-350px
- **Metrics**: 4-6 key metrics, each with: current value, trend, and traffic light
- **Background**: Primary color (charcoal or dark navy) for visual prominence
- **Text**: White metric values, colored trend indicators
- **Update frequency**: Daily or real-time if connected to data source

---

## Layout Composition Checklist

Before finalizing a Marketing Enablement Board layout, verify:

- [ ] Dashboard header is present and shows key metrics
- [ ] Grid alignment is strict — all frames share edges cleanly
- [ ] Standard frame sizes are used consistently (no random dimensions)
- [ ] Color is used for status, not decoration
- [ ] Every section has a clear owner label
- [ ] Kanban columns have WIP limits displayed
- [ ] Funnel stages have conversion metrics
- [ ] Mockups have version numbers and status badges
- [ ] Calendar shows the current week highlighted
- [ ] No orphaned frames (every frame is part of the grid)
- [ ] Board is navigable using Miro frames (for presentation mode)
- [ ] Last-updated timestamps are visible on dynamic sections
