# Examples & Reference — Customer Journey Boards

## Overview

This document provides detailed breakdowns of exemplary customer journey boards, common anti-patterns with corrections, before/after transformations, and a catalog of design elements worth stealing. Each example is analyzed for what makes it work (or fail) and how to apply those lessons.

---

## Example 1: SaaS Customer Journey Map (The Gold Standard)

### Board Summary

**Product**: NovaPlan — a project management SaaS for mid-market teams (50-500 employees)
**Persona**: Rachel Torres, 34, Operations Manager, 150-person tech company
**Stages**: Problem Recognition → Vendor Research → Trial & Evaluation → Internal Advocacy → Purchase → Onboarding & Activation
**Board Size**: 5000 x 3000px
**Palette**: Ocean & Coral (Classic)

### What Makes It Exceptional

**1. The Persona Card Is a Story, Not a Stat Sheet**

The persona card does not just list demographics. It tells a micro-story:

- "Rachel manages 4 departments with spreadsheets and email. Every Monday, she spends 2 hours compiling status updates from 12 people into a master spreadsheet that's outdated by Tuesday."
- Her quote is devastating in its simplicity: "I just want one place where I can see everything without asking 10 people."
- Her photo placeholder uses her initials "RT" in a circle with a warm coral background — personal without being fake.

**Why it works**: By the time you finish reading the persona card, you care about Rachel. You want her to find a better tool. This emotional investment carries through the entire board.

**2. Each Stage Has a "Moment of Truth"**

Instead of treating all actions equally, each stage highlights one "moment of truth" — the critical interaction that determines whether Rachel progresses or drops off.

- **Vendor Research**: Rachel finds a competitor comparison page that lists NovaPlan as "#1 for mid-market teams." This single touchpoint gives her confidence to start a trial.
- **Trial & Evaluation**: Rachel imports her real project data (not test data) and sees the Gantt view for the first time. Her emotion score jumps from 3.0 to 4.5 in a single moment.
- **Internal Advocacy**: Rachel presents NovaPlan to her VP using a PDF she downloaded from the tool's "Convince Your Boss" page. The VP's first question — "Does it integrate with Jira?" — is answered on page 2.

These moments are highlighted with a gold border and a "MOMENT OF TRUTH" label, making them impossible to miss at any zoom level.

**3. The Emotion Curve Tells a Three-Act Story**

- Act 1 (stages 1-2): Cautious optimism rising to excitement — Rachel discovers the tool and thinks it might solve her problems
- Act 2 (stages 3-4): The dip — trial friction (import issues), internal politics (VP skepticism), procurement headaches
- Act 3 (stages 5-6): Resolution — purchase goes through, onboarding starts strong, first "aha moment" when her team adopts the tool

The curve visually resembles a classic story arc. This is not accidental — the best journey maps are narratives.

**4. Pain Points Include Business Impact**

Every pain point on this board includes a dollar figure or metric:

- "CSV import failure causes 23% of trial users to abandon on Day 1 — estimated $380K/year in lost deals"
- "No comparison page for Jira users — 31% of prospects ask for this in sales calls"
- "Procurement requires SOC 2 documentation; 15-day average delay to locate and send"

This transforms the board from a research artifact into a business case.

### Design Elements to Steal

- **Moment of Truth highlighting**: Gold border + label for the single most critical interaction per stage
- **Three-act emotion curve**: Structure the emotional arc as setup → conflict → resolution
- **Dollar-value pain points**: Attach estimated business impact to every critical pain point
- **Persona as micro-story**: Write the persona card as narrative, not bullet points

---

## Example 2: E-Commerce Empathy Map (The Deep Dive)

### Board Summary

**Product**: Artisan Home Goods — DTC e-commerce for handmade home decor
**Persona**: Sophie Laurent, 29, interior design enthusiast, Brooklyn, NY
**Context**: Sophie is decorating her first apartment and wants unique, non-mass-produced pieces
**Board Size**: 3500 x 2800px
**Palette**: Earth & Ember

### What Makes It Exceptional

**1. The "Says" Quadrant Uses Multiple Sources**

Rather than relying only on interview quotes, the Says quadrant draws from:

- **Instagram comments**: "Just moved into my new place and NEED that ceramic vase" (tagged photo)
- **Support chat**: "Is the blue one in the photo exactly that shade of blue? My wall is Benjamin Moore Hale Navy"
- **Product review**: "Took a risk on a $180 bowl I couldn't touch first. Glad I did — the texture is incredible."
- **Friends (overheard via research)**: "I'd rather have one beautiful thing than 10 generic things from Target."

This multi-source approach makes the empathy feel earned, not assumed.

**2. The "Thinks" and "Feels" Quadrants Show Tension**

The board explicitly surfaces contradictions between what Sophie thinks and feels:

- Thinks: "I should be more financially responsible. $180 for a bowl is objectively ridiculous."
- Feels: "But when I imagine it on my shelf, I feel a little thrill. I deserve beautiful things."
- Thinks: "I should compare prices across multiple sites."
- Feels: "I don't want to compare. I want this specific artisan's work. Comparison feels like betrayal."

These contradictions are connected with thin dashed lines across the quadrant divide, visually surfacing the tension.

**3. The Center Persona Uses a "Mood Collage"**

Instead of a standard photo placeholder, the center contains a small mood collage:

- A muted photo of a Brooklyn brownstone interior
- A color swatch (terracotta, sage green, cream)
- A small font sample of the handwritten text style she favors
- Her Instagram handle and follower count (she is an active design-content creator)

This transforms the center from "who is she?" to "what does her world look like?"

**4. The Insights Strip Connects to Product Decisions**

The bottom strip translates empathy into action:

- "Sophie needs to touch/see texture before buying → Launch 360-degree product videos with macro zoom"
- "Sophie feels guilt about price → Reframe pricing as 'artisan hours' not 'product cost' — 'This bowl took Marcus 6 hours to shape and fire'"
- "Sophie values authenticity over polish → Stop using lifestyle studio photography. Use artisan-workshop-shot photos with imperfections visible."

Each insight connects directly to a product, marketing, or content decision.

### Design Elements to Steal

- **Multi-source Says quadrant**: Pull from interviews, social, support, and reviews — not just one channel
- **Cross-quadrant tension lines**: Visually connect contradictions between Thinks and Feels
- **Mood collage center**: Replace the photo placeholder with a small collage that captures the persona's aesthetic world
- **Decision-linked insights**: Every insight in the bottom strip should name a specific product or business decision

---

## Example 3: Healthcare Touchpoint Analysis (The Data Engine)

### Board Summary

**Product**: Regional health system patient experience (4 hospitals, 28 clinics)
**Scope**: 8 channels x 6 journey stages = 48 intersection cells
**Data Source**: 12,000 patient satisfaction surveys (2025), 45,000 support interactions
**Board Size**: 4500 x 3000px
**Palette**: Monochrome & Signal

### What Makes It Exceptional

**1. The Heatmap Is Instantly Readable**

At 30% zoom, before reading any text, the heatmap tells a clear story:

- The "Phone" channel row is almost entirely orange and red — phone experience is consistently poor
- The "In-Person" row is almost entirely green — face-to-face interactions are the system's strength
- The "Onboarding" stage column is the most red — regardless of channel, new patient onboarding is a pain point
- The single brightest green cell is "In-Person + First Visit" (4.8/5) — the doctor visit itself is excellent

This immediate visual story is the mark of a well-designed touchpoint analysis.

**2. Every Cell Contains a "Why" Annotation**

The score alone (e.g., "2.1") is meaningless without context. Every cell in this board includes a 1-2 line annotation:

- Phone + Onboarding: 2.1 — "Average hold time 23 min. 67% of callers need to call back because they cannot reach the right department."
- Email + Follow-up: 3.2 — "Lab results sent via email within 48hrs but 41% of patients report not understanding the results."
- App + Billing: 2.8 — "Bill pay works, but estimated cost tool is inaccurate 30% of the time."

**3. The Priority Strip Uses Impact/Effort Scoring**

Below the matrix, improvements are ranked using a 2x2 impact/effort framework:

```
HIGH IMPACT + LOW EFFORT (Do First):
1. Reduce phone hold time with callback queue — Impact: 4.8, Effort: 2.1
2. Add plain-language explanations to emailed lab results — Impact: 4.2, Effort: 1.5

HIGH IMPACT + HIGH EFFORT (Plan):
3. Redesign patient onboarding portal — Impact: 4.9, Effort: 4.3
4. Implement AI-powered phone routing — Impact: 4.5, Effort: 3.8

LOW IMPACT + LOW EFFORT (Quick Wins):
5. Add estimated wait time to phone hold message — Impact: 2.1, Effort: 0.5
6. Include provider photo in appointment confirmation emails — Impact: 1.8, Effort: 0.3
```

This structure makes the action plan instantly prioritizable.

**4. Trend Arrows Show Direction**

Next to each score, a small arrow indicates whether the score improved, declined, or stayed flat compared to the previous measurement period:

- 3.2 (up arrow, green) — improving
- 2.1 (down arrow, red) — declining
- 4.0 (horizontal arrow, gray) — stable

This adds a temporal dimension to a snapshot-in-time board.

### Design Elements to Steal

- **30%-zoom readability**: The heatmap tells the story before any text is read
- **"Why" annotations in every cell**: Scores without context are meaningless
- **Impact/effort priority matrix**: Replaces subjective priority lists with structured ranking
- **Trend arrows**: Show whether things are getting better or worse

---

## Example 4: Multi-Persona Journey Comparison (The Advanced Board)

### Board Summary

**Product**: Enterprise collaboration platform
**Personas**: IT Admin (buyer), End User (daily user), Executive Sponsor (decision-maker)
**Approach**: Three horizontal journey maps stacked vertically, sharing the same stages but showing different perspectives
**Board Size**: 5000 x 4500px
**Palette**: Three-palette system (blue for IT Admin, green for End User, purple for Executive)

### What Makes It Exceptional

**1. Shared Stages, Different Experiences**

All three personas move through the same stages (Evaluation → Purchase → Deployment → Adoption → Renewal) but their experiences are radically different:

- **Evaluation stage**: IT Admin is conducting security audits. End User does not even know the tool exists yet. Executive Sponsor is reviewing the business case.
- **Deployment stage**: IT Admin is configuring SSO and permissions. End User is receiving a mandatory training email. Executive Sponsor is sending the "We're switching tools" announcement.

Seeing these different experiences aligned vertically in the same stage column reveals coordination gaps and misaligned expectations.

**2. Cross-Persona "Collision Points"**

The board highlights moments where personas interact with each other:

- IT Admin restricts a feature for security reasons → End User cannot access it → Support tickets spike → Executive Sponsor sees adoption metrics drop
- This causal chain is visualized with connector arrows crossing between the three journey rows

These collision points are often the root cause of systemic CX problems.

**3. Stage Columns Are Labeled with Three Emotion Scores**

Instead of one emotion curve, each stage header shows three emotion scores (one per persona):

```
DEPLOYMENT
IT Admin: 3.8 (Confident)
End User: 2.2 (Confused)
Executive: 4.0 (Optimistic)
```

The gap between these scores at any stage reveals a "perception gap" — moments where different stakeholders have wildly different experiences.

### Design Elements to Steal

- **Multi-persona stacking**: Same stages, different rows per persona, shared column alignment
- **Cross-persona collision arrows**: Visualize causal chains that cross persona boundaries
- **Three-score stage headers**: Show perception gaps between stakeholder groups

---

## Anti-Patterns

### Anti-Pattern 1: The Wall of Identical Stickies

**What it looks like**: Every stage has 8-10 sticky notes, all the same color, all the same size, with similar-length text. No visual hierarchy, no emphasis, no highlighted moments.

**Why it fails**: The eye has nowhere to land. Everything looks equally important, which means nothing feels important. Stakeholders scan and disengage.

**The fix**:

- Limit to 4-6 sticky notes per cell
- Use 2-3 sticky note colors within each cell (actions = blue, touchpoints = white, pain = pink)
- Highlight 1 critical item per stage with a gold border or larger size
- Remove duplicates and merge similar items

### Anti-Pattern 2: The Generic Journey

**What it looks like**: Stages are "Awareness → Consideration → Purchase → Retention." Actions are "Searches online." Touchpoints are "Website." Pain points are "Confusing navigation."

**Why it fails**: This board could apply to any product in any industry. It tells leadership nothing they didn't already know. No one will act on it because there is nothing specific to act on.

**The fix**:

- Replace every generic statement with a specific one, citing real data
- Name the exact website page, search query, email subject line
- Include time durations, conversion rates, and quote attributions
- Rename stages to match your actual customer journey, not textbook stages

### Anti-Pattern 3: The Emotions-Free Map

**What it looks like**: A journey map with detailed actions and touchpoints but no emotion curve, no thoughts row, no customer quotes, and no feelings data.

**Why it fails**: This is a process map, not a journey map. It shows what happens but not how it feels. Process maps drive operational improvement; journey maps drive experience improvement. Without emotion, you have the wrong tool.

**The fix**:

- Add the emotion curve as a non-negotiable element
- Include at least one direct customer quote per stage
- Add the "Thoughts" row showing internal monologue
- Use pain point severity indicators tied to emotional impact

### Anti-Pattern 4: The Beautiful Dead End

**What it looks like**: A gorgeously designed journey map with perfect typography, custom icons, and a stunning color palette. But the bottom of the board is empty. No actions. No owners. No priorities. No "what now?"

**Why it fails**: The board becomes a museum piece — admired but never referenced. Stakeholders nod appreciatively and return to their existing priorities.

**The fix**:

- Allocate 15-20% of the board area to the action/priority section
- Every pain point must have a corresponding opportunity
- Every opportunity must have an owner name and target date
- Review the action section quarterly and mark items as completed or re-prioritized

### Anti-Pattern 5: The Frankenstein Board

**What it looks like**: A board that tries to be a journey map, empathy map, touchpoint analysis, and persona board all at once. It has persona details scattered everywhere, empathy quadrants crammed into corners, journey stages running horizontally, and a touchpoint matrix squeezed at the bottom.

**Why it fails**: Each board type has a specific cognitive purpose and layout architecture. Combining them destroys the spatial logic that makes each one effective.

**The fix**:

- Create separate boards for each purpose
- Link them using Miro's board linking or frame linking features
- Start with the journey map as the "home board" and link to empathy maps and persona boards from the persona card

### Anti-Pattern 6: The Outdated Map

**What it looks like**: A journey map with "Last Updated: Q2 2024" in the corner. The product has since redesigned its onboarding, launched a mobile app, and changed pricing — none of which are reflected on the board.

**Why it fails**: Outdated journey maps are worse than no journey map. They give a false sense of understanding and lead to decisions based on obsolete data.

**The fix**:

- Include version number, date, and data sources prominently in the title banner
- Schedule quarterly reviews as a calendar event
- Designate a "board owner" responsible for updates
- Use Miro comments to flag sections that need updating

---

## Before / After Transformations

### Before: Generic SaaS Journey

```
| Awareness | Consideration | Purchase | Onboarding | Retention |
| Searches  | Compares     | Buys     | Sets up    | Uses      |
| online    | options      | product  | account    | product   |
```

### After: Specific SaaS Journey

```
| Problem Recognition     | Vendor Research        | Trial & Eval              |
| "Status meetings are    | Reads 3 G2 reviews     | Creates 'Test Project'    |
|  killing my Mondays"    | filtered to mid-market  | imports real team data     |
| Trigger: 3rd missed     | Downloads buyer guide   | Invites 2 direct reports  |
| deadline in a month     | Asks in Ops Slack group | Watches product tour 2x   |
|                         |                        |                           |
| Emotion: 2.5 Frustrated | Emotion: 3.5 Hopeful  | Emotion: 3.8 Cautiously   |
|                         |                        | optimistic (dips to 2.0   |
|                         |                        | at CSV import failure)    |
```

The after version is specific, emotional, data-backed, and actionable. The before version could be about any product ever made.

### Before: Flat Empathy Map

```
Says: "I want better tools"
Thinks: "This might help"
Does: "Tries the product"
Feels: "Hopeful"
```

### After: Rich Empathy Map

```
Says: "If I have to build one more VLOOKUP formula to track project
       status, I'm going to lose it." — Interview #7, Rachel Torres
       "Has anyone used NovaPlan? Is it actually good for teams over
       50 people?" — Ops Community Slack, Feb 14

Thinks: "My boss will ask about Jira integration. If I can't answer
        that, she'll shut this down before I get a chance to prove it."
        "The pricing page shows per-seat — at 150 people, that's
        $22,500/year. Can I justify that without a formal ROI analysis?"

Does: - Visits pricing page 3x (always Tuesdays, after team meetings)
      - Creates a private comparison spreadsheet with 12 evaluation criteria
      - Forwards the "Convince Your Boss" PDF to her VP with a personal note
      - Tests import by uploading her actual Q1 project tracker (847 rows)

Feels: - Cautious optimism when she first sees the Gantt view (4.5/5)
       - Anxiety about being the one who recommended a bad tool (2.0/5)
       - Frustration when the CSV import fails and she loses 20 minutes (1.5/5)
       - Pride when her VP says "This looks promising" after the demo (4.0/5)
```

The after version is a window into a real person's experience. The before version is a template placeholder.

---

## Design Elements Catalog

### Elements Worth Stealing

| Element                        | Source Pattern | How to Use It                                                         |
| ------------------------------ | -------------- | --------------------------------------------------------------------- |
| Moment of Truth marker         | Example 1      | Gold border + label on the single most critical interaction per stage |
| Three-act emotion curve        | Example 1      | Structure emotional arc as setup → conflict → resolution              |
| Multi-source Says              | Example 2      | Pull from 4+ channels: interviews, social, support, reviews           |
| Cross-quadrant tension lines   | Example 2      | Dashed lines connecting contradictions between Thinks and Feels       |
| Mood collage center            | Example 2      | Small visual collage capturing persona aesthetic instead of photo     |
| 30%-zoom heatmap readability   | Example 3      | Ensure color alone tells the story at low zoom                        |
| Cell-level "Why" annotations   | Example 3      | Every score includes a 1-2 line explanation                           |
| Impact/effort priority matrix  | Example 3      | 2x2 framework for prioritizing improvements                           |
| Trend arrows                   | Example 3      | Small directional indicators showing improvement or decline           |
| Multi-persona stacking         | Example 4      | Same stages, vertically stacked persona rows                          |
| Cross-persona collision arrows | Example 4      | Connector lines showing causal chains across personas                 |
| Three-score stage headers      | Example 4      | Show perception gaps between stakeholder groups                       |
| Dollar-value pain points       | Example 1      | Attach revenue/cost estimates to every critical pain point            |
| Decision-linked insights       | Example 2      | Every insight names a specific business or product decision           |

---

## Cross-References

- **04-Marketing/examples-reference.md**: Funnel mapping examples share horizontal flow patterns
- **06-Design-UX/examples-reference.md**: User flow board examples for interface-level journey detail
- **08-Workshops/examples-reference.md**: Design Thinking workshop outputs that feed into journey maps
- **13-Sales/examples-reference.md**: Sales pipeline boards showing the organization's view of the same journey
