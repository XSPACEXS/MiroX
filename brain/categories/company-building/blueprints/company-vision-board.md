# Company Vision Board

## Overview

- **Purpose**: Create a comprehensive visual artifact that captures a company's vision, mission, values, strategic pillars, key metrics, and milestone trajectory. This board serves as the organizational North Star — the single reference that aligns teams, impresses investors, and onboards new employees into the company's identity and direction.
- **Best For**: Founders defining company direction, leadership teams aligning on strategy, all-hands presentations, investor pitch supplements, new employee onboarding
- **Complexity**: Medium
- **Board Size**: 4800x3400px (tall portrait to follow the strategic cascade narrative)

## Color Scheme

| Role                       | Color        | Hex     |
| -------------------------- | ------------ | ------- |
| Primary (Headers/Borders)  | Deep Navy    | #1A237E |
| Secondary (Subheaders)     | Slate Blue   | #37474F |
| Accent (Highlights/CTA)    | Coral        | #FF6B6B |
| Success (Positive metrics) | Forest Green | #2E7D32 |
| Warning (Attention)        | Amber        | #F9A825 |
| Danger (Negative metrics)  | Crimson      | #C62828 |
| Vision Background          | Navy Tint    | #E8EAF6 |
| Strategy Background        | Cool Blue    | #F0F4FF |
| Metrics Background         | White        | #FFFFFF |
| Board Background           | Off-White    | #FAFAFA |
| Text Primary               | Near Black   | #1B1B1B |
| Text Secondary             | Dark Gray    | #616161 |
| Divider                    | Light Gray   | #E0E0E0 |

## Board Layout

The board uses a strategic cascade layout: vision at top, strategy in the middle, metrics and timeline at the bottom. Each section flows naturally into the next.

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo] Company Name — Vision 2025           [v1.0 | Date] │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  VISION & MISSION                                           │
│  ┌──────────────────────────────────────────────────────┐   │
│  │  "Vision statement here — bold, aspirational, 20 words"│  │
│  │   Mission: what we do, for whom, how (2-3 sentences)  │  │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  OUR VALUES                                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐      │
│  │ Value 1  │ │ Value 2  │ │ Value 3  │ │ Value 4  │      │
│  │ Statement│ │ Statement│ │ Statement│ │ Statement│      │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘      │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  STRATEGIC PILLARS                                          │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐  │
│  │ 01 Pillar Name │ │ 02 Pillar Name │ │ 03 Pillar Name │  │
│  │ Description    │ │ Description    │ │ Description    │  │
│  │ KR1, KR2, KR3 │ │ KR1, KR2, KR3 │ │ KR1, KR2, KR3 │  │
│  │ Owner: VP X    │ │ Owner: VP Y    │ │ Owner: VP Z    │  │
│  │ Status: ●      │ │ Status: ●      │ │ Status: ●      │  │
│  └────────────────┘ └────────────────┘ └────────────────┘  │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  KEY METRICS                                                │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐        │
│  │ ARR │ │Users│ │ NRR │ │ NPS │ │ CAC │ │ Run │        │
│  │$2.4M│ │ 12K │ │115% │ │ 42  │ │$180 │ │18mo │        │
│  │↑24% │ │↑15% │ │↑3%  │ │↑8pt │ │↓12% │ │stbl │        │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘ └─────┘        │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│  MILESTONES & TIMELINE                                      │
│  ● Seed  ● v1.0  ● 1K Users  ● Series A  ○ 25K  ○ EU    │
│  Jan 24  Apr 24  Aug 24      Jan 25     Jun 25  Dec 25   │
└─────────────────────────────────────────────────────────────┘

Approximate positions:
  Header:            (50, 50) — 4700x80
  Vision Frame:      (50, 180) — 4700x350
  Values Frame:      (50, 580) — 4700x350
  Pillars Frame:     (50, 980) — 4700x800
  Metrics Frame:     (50, 1830) — 4700x400
  Timeline Frame:    (50, 2280) — 4700x300
```

## Frames & Sections

### Frame 1: Header

- **Position**: (50, 50)
- **Size**: 4700x80px
- **Background**: Deep Navy (#1A237E)
- **Elements**:
  - Shape: Company logo at (70, 55), 60x60px
  - Text: "FinLearn — Company Vision 2025" at (150, 65), 28px bold, white
  - Text: "v1.0 | January 2025 | Leadership Team" at (4200, 70), 12px, #90CAF9

### Frame 2: Vision & Mission

- **Position**: (50, 180)
- **Size**: 4700x350px
- **Background**: Navy Tint (#E8EAF6)
- **Elements**:
  - Text: "Democratize financial literacy for the next billion internet users" at center, 48px bold, #1A237E, centered
  - Horizontal divider line at y:380, 2000px wide, centered, 1px #1A237E
  - Text: "We build AI-powered learning tools that make financial concepts accessible to anyone with a smartphone. We partner with schools, employers, and governments to distribute financial literacy at scale." at center, 18px regular, #37474F, centered, max-width 3500px
  - Sticky note: "Why we exist: Financial illiteracy costs Americans $400B annually. We're building the solution." at (3800, 200), 350x120, fill #FFF8E1

### Frame 3: Our Values

- **Position**: (50, 580)
- **Size**: 4700x350px
- **Background**: Warm White (#FFF8F0)
- **Elements**:
  - Header: "Our Values" at (100, 600), 28px bold, #1A237E
  - Value card 1: "LEARNER FIRST" at (100, 660), 1050x250px
    - Fill #FFFFFF, left border 4px #FF6B6B
    - Title: "01 — Learner First" (22px bold)
    - Text: "Every decision starts with 'how does this help the learner?' We call 5 learners a week. We share NPS in every all-hands."
  - Value card 2: "SPEED OVER PERFECTION" at (1200, 660), 1050x250px
    - Fill #FFFFFF, left border 4px #FF6B6B
    - Title: "02 — Speed Over Perfection" (22px bold)
    - Text: "Ship fast, iterate faster. A good feature today beats a perfect one next month. We accept conscious tech debt."
  - Value card 3: "RADICAL TRANSPARENCY" at (2300, 660), 1050x250px
    - Fill #FFFFFF, left border 4px #FF6B6B
    - Title: "03 — Radical Transparency" (22px bold)
    - Text: "We share by default. Investor updates go to the whole team. Failures get public post-mortems."
  - Value card 4: "BUILD TOGETHER" at (3400, 660), 1050x250px
    - Fill #FFFFFF, left border 4px #FF6B6B
    - Title: "04 — Build Together" (22px bold)
    - Text: "No hero culture. Cross-functional teams. Celebrate team wins over individual achievement."

### Frame 4: Strategic Pillars

- **Position**: (50, 980)
- **Size**: 4700x800px
- **Background**: Cool Blue (#F0F4FF)
- **Elements**:
  - Header: "Strategic Pillars" at (100, 1000), 28px bold, #1A237E
  - Pillar 1 at (100, 1060):
    - Rectangle 1450x650px, fill #FFFFFF, left border 4px #1A237E, corner radius 8px
    - Badge: Circle "01" at (130, 1090), 50x50px, fill #1A237E, text white
    - Title: "PRODUCT-LED GROWTH" (22px semibold)
    - Description: "Build a product so compelling that users become our primary acquisition channel." (16px)
    - Key Results:
      - "40% new users from referrals (current: 18%)"
      - "Time-to-value < 5 min (current: 12 min)"
      - "NPS > 60 (current: 42)"
    - Owner: "VP Product" (12px, #616161)
    - Status: Green dot "On Track"
  - Pillar 2 at (1600, 1060):
    - Same structure, "ENTERPRISE EXPANSION"
    - "Land 20 enterprise accounts at $50K+ ACV"
    - KRs: "5 enterprise pilots → 3 conversions", "$500K enterprise ARR", "Enterprise NPS > 50"
    - Owner: "VP Sales"
    - Status: Amber dot "At Risk"
  - Pillar 3 at (3100, 1060):
    - Same structure, "PLATFORM PLAY"
    - "Open the platform for third-party content creators and institutional partners"
    - KRs: "API launched by Q2", "10 content partners onboarded", "20% of content from partners"
    - Owner: "CTO"
    - Status: Green dot "On Track"

### Frame 5: Key Metrics

- **Position**: (50, 1830)
- **Size**: 4700x400px
- **Background**: White (#FFFFFF)
- **Elements**:
  - Header: "Key Metrics" at (100, 1850), 28px bold, #1A237E
  - North Star highlight: "WEEKLY ACTIVE LEARNERS: 47,200 (+12% MoM)" at (100, 1890), 4500x60px, fill #E8EAF6, 18px bold, centered
  - Metric card row at y:1970, evenly spaced across 4700px:
    - Card "ARR": $2.4M, ↑24% QoQ, green
    - Card "MRR": $200K, ↑8% MoM, green
    - Card "Users": 12K, ↑15% MoM, green
    - Card "NRR": 115%, ↑3% QoQ, green
    - Card "NPS": 42, ↑8 points, amber (target: 60)
    - Card "Runway": 18 months, stable, green
  - Each card: 650x200px, white fill, 1px border #E0E0E0, corner radius 12px, subtle shadow

### Frame 6: Milestones & Timeline

- **Position**: (50, 2280)
- **Size**: 4700x300px
- **Background**: Off-White (#FAFAFA)
- **Elements**:
  - Header: "Milestones" at (100, 2300), 28px bold, #1A237E
  - Horizontal timeline line at y:2400, spanning full width, 2px solid #E0E0E0
  - Past milestones (filled green circles, 16px):
    - "Seed Round ($2M)" — Jan 2024
    - "v1.0 Launch" — Apr 2024
    - "1,000 Users" — Aug 2024
    - "Series A ($8M)" — Jan 2025
  - Future milestones (empty gray circles, 16px):
    - "25,000 Users" — Jun 2025
    - "EU Market Entry" — Sep 2025
    - "$5M ARR" — Dec 2025
    - "Series B" — Q1 2026
  - "NOW" marker: Red vertical line with label at current position on timeline

## Connectors & Flow

1. Visual flow is top-to-bottom through the cascade
2. No explicit connectors needed — the sectional layout implies flow
3. Optional: Subtle downward arrows between sections (decorative, not functional)

## Variations

1. **Pre-seed version**: Remove metrics section, expand vision/problem section, add team bios
2. **Investor version**: Add confidentiality banner, expand metrics, add financial summary
3. **All-hands version**: Add team shoutouts section, upcoming events, fun stats
4. **Hub-and-spoke version**: Place vision at center with pillars, values, and metrics radiating outward

## Build Instructions

1. Create board (4800x3400px, background #FAFAFA)
2. Build header bar with logo, title, version
3. Create vision frame with display-size vision text and mission text
4. Build value cards in a row (4 cards, evenly spaced)
5. Build pillar cards in a row (3 cards, each with number badge, KRs, owner, status)
6. Build metric cards in a row (6 cards with values, trends, and labels)
7. Build timeline with past (filled) and future (empty) milestones
8. Add North Star metric highlight above metric cards
9. Review: Does a new employee understand the company in 3 minutes?
10. Set version to v1.0 and add date

## Tips & Best Practices

- The vision statement should be readable at 25% zoom — make it large
- Use the company's actual brand colors (adapt the default palette)
- Update metrics quarterly — stale numbers destroy credibility
- The North Star metric should be the most visually prominent number on the board
- Include at least one "human" element — a founder quote, a team photo, a customer testimonial
- For investor presentations, use Miro's frame-based presentation mode to walk through sections
