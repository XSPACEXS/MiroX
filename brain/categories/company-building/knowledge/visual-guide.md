# Company Building — Visual Guide

## Overview

The visual language of company building boards must balance professionalism with personality, data with emotion, and structure with warmth. Unlike technical boards where precision dominates, company building boards need to feel human — they represent people, aspirations, and culture. This guide defines the complete visual vocabulary for boards that communicate organizational identity, strategy, growth, and investor narratives.

---

## Master Color System

### Default Palette (Brand-Agnostic)

When the company's brand colors are unknown, use this professional default palette:

| Role           | Color Name   | Hex     | RGB           | Usage                          |
| -------------- | ------------ | ------- | ------------- | ------------------------------ |
| Primary        | Deep Navy    | #1A237E | 26, 35, 126   | Main headers, section borders  |
| Secondary      | Slate Blue   | #37474F | 55, 71, 79    | Subheaders, supporting text    |
| Accent         | Coral        | #FF6B6B | 255, 107, 107 | Highlights, CTAs, emphasis     |
| Success        | Forest Green | #2E7D32 | 46, 125, 50   | Positive metrics, achievements |
| Warning        | Amber        | #F9A825 | 249, 168, 37  | Caution, attention needed      |
| Danger         | Crimson      | #C62828 | 198, 40, 40   | Negative metrics, risks        |
| Background     | Off-White    | #FAFAFA | 250, 250, 250 | Board background               |
| Surface        | White        | #FFFFFF | 255, 255, 255 | Card/frame backgrounds         |
| Text Primary   | Near Black   | #1B1B1B | 27, 27, 27    | Headlines, body text           |
| Text Secondary | Dark Gray    | #616161 | 97, 97, 97    | Descriptions, metadata         |
| Text Tertiary  | Medium Gray  | #9E9E9E | 158, 158, 158 | Timestamps, labels             |
| Divider        | Light Gray   | #E0E0E0 | 224, 224, 224 | Section separators, borders    |

### Brand Adaptation Protocol

When the company's brand colors are known, adapt the palette:

1. **Primary**: Use the brand's primary color for headers and section borders
2. **Secondary**: Derive from primary (darken 20% or use brand's secondary)
3. **Accent**: Use the brand's accent/CTA color for highlights
4. **Background**: Use a 5% tint of the primary color (or stay with off-white)
5. **Success/Warning/Danger**: Keep universal green/amber/red for metrics (do not rebrand these)

### Section Background Tints

| Board Section      | Background      | Hex             |
| ------------------ | --------------- | --------------- |
| Vision / Mission   | Primary 8% tint | Brand-dependent |
| Values / Culture   | Warm neutral    | #FFF8F0         |
| Strategy / Pillars | Cool neutral    | #F0F4FF         |
| Metrics / KPIs     | White           | #FFFFFF         |
| Team / Org         | Soft green      | #F0FFF0         |
| Challenges / Risks | Soft pink       | #FFF0F0         |
| Investor Ask       | Accent 8% tint  | Brand-dependent |
| Notes / Context    | Light gray      | #F5F5F5         |

---

## Typography System

### Font Hierarchy

Company building boards use a typography hierarchy that ranges from commanding headlines to intimate details:

| Level        | Purpose            | Font Size | Weight             | Color             | Example                          |
| ------------ | ------------------ | --------- | ------------------ | ----------------- | -------------------------------- |
| Display      | Vision statement   | 48px      | Bold               | Primary           | "Democratize financial literacy" |
| H1           | Board title        | 36px      | Bold               | Primary           | "Company Vision 2025"            |
| H2           | Section headers    | 28px      | Bold               | Primary           | "Our Values"                     |
| H3           | Card/block titles  | 22px      | Semibold           | Text Primary      | "Customer First"                 |
| H4           | Subsection titles  | 18px      | Semibold           | Text Primary      | "What This Means"                |
| Body         | Descriptions       | 16px      | Regular            | Text Primary      | "We believe in..."               |
| Body Small   | Supporting text    | 14px      | Regular            | Text Secondary    | "Updated Q4 2025"                |
| Metric Value | Big numbers        | 42px      | Bold               | Context-dependent | "$2.4M"                          |
| Metric Label | Metric names       | 12px      | Uppercase, Regular | Text Tertiary     | "ANNUAL RECURRING REVENUE"       |
| Metric Delta | Change indicators  | 14px      | Semibold           | Green/Red         | "+24% MoM"                       |
| Quote        | Attributed quotes  | 18px      | Italic             | Text Secondary    | "Speed over perfection"          |
| Caption      | Photo/image labels | 12px      | Regular            | Text Tertiary     | "Q4 2025 team offsite"           |

### Text Formatting Conventions

1. **Vision statements**: Display size, centered, with generous padding above and below. The vision should feel monumental.
2. **Value names**: H3 size, bold, often with an icon or number prefix. Example: "01 — Customer First"
3. **Value descriptions**: Body size, regular weight, 2-3 sentences maximum per value.
4. **Metric values**: Large (42px), bold, immediately followed by the metric label in smaller uppercase text.
5. **Trend indicators**: Adjacent to metric value, color-coded (green up, red down), with percentage.
6. **Quotes**: Italic, with attribution. Use quotes from team members, customers, or founders.
7. **Calls to action**: Bold, accent color, in a distinct container.

---

## Shape Language

### Metric Cards

```
┌─────────────────────────┐
│  ARR                    │  ← 12px uppercase, text tertiary
│                         │
│  $2.4M                  │  ← 42px bold, primary color
│  ↑ 24% MoM             │  ← 14px semibold, green
│                         │
│  ▂▃▅▆▇█                │  ← Sparkline (optional)
│                         │
│  Target: $3M by Q4      │  ← 12px, text secondary
└─────────────────────────┘
Size: 350x250px
Fill: White (#FFFFFF)
Border: 1px solid #E0E0E0
Corner radius: 12px
Shadow: 2px offset, 8px blur, rgba(0,0,0,0.06)
```

### Value Block

```
┌─────────────────────────────────────┐
│                                     │
│  ◉  CUSTOMER FIRST                  │  ← Icon + H3, bold
│  ─────────────────                  │
│                                     │
│  We make decisions by asking        │  ← Body, 16px
│  "how does this help the customer?" │
│  before "how does this help us?"    │
│                                     │
│  ✓ We do:                           │  ← 14px, green
│    • Call 5 customers a week        │
│    • Share NPS in every all-hands   │
│    • Ship customer fixes in <24hr   │
│                                     │
│  ✗ We don't:                        │  ← 14px, red
│    • Hide behind support tickets    │
│    • Prioritize internal over user  │
│                                     │
│  "The customer is the source of     │  ← 18px italic
│   all truth." — Founder             │
│                                     │
└─────────────────────────────────────┘
Size: 1200-1400px x 500-700px
Fill: White (#FFFFFF) or brand-tinted
Border: 2px solid, primary color
Corner radius: 16px
Shadow: 3px offset, 12px blur, rgba(0,0,0,0.08)
```

### Strategic Pillar Card

```
┌─────────────────────────────────────┐
│  ┌─────┐                            │
│  │ 01  │  PRODUCT-LED GROWTH        │  ← Number badge + H3
│  └─────┘                            │
│                                     │
│  Build a product so good that       │  ← Body description
│  users become our best salesforce   │
│                                     │
│  Key Results:                       │  ← H4, semibold
│  • 40% of new users from referrals  │
│  • NPS > 60                         │
│  • Time to value < 5 minutes        │
│                                     │
│  Owner: VP Product                  │  ← 12px, text secondary
│  Status: On Track ●                 │  ← Green dot = on track
└─────────────────────────────────────┘
Size: 1400x400px
Fill: Section background tint
Border: 2px solid, primary color (left border only for accent)
Corner radius: 8px
```

### Team Member Card

```
┌──────────────────────────────┐
│  ┌──────┐                    │
│  │Photo │  Sarah Chen        │  ← Photo circle + name (18px bold)
│  │  or  │  VP Engineering    │  ← Role (14px, text secondary)
│  │Initials│                  │
│  └──────┘  Joined: Jan 2024  │  ← 12px, text tertiary
│            Reports to: CTO   │
│                              │
│  Focus: Platform & Infra     │  ← 14px
│  Team: 8 engineers           │
└──────────────────────────────┘
Size: 400x250px
Photo: 80x80px circle
Fill: White
Border: 1px solid #E0E0E0
Corner radius: 12px
```

### Timeline Milestone

```
              ●  SERIES A CLOSED
              │  $8M raised
              │  Lead: Acme Ventures
              │  March 2025
              │
              ●  PRODUCT v2.0 LAUNCH
              │  10K users milestone
              │  May 2025
              │
              ●  EU MARKET ENTRY
              │  3 enterprise customers
              │  August 2025
              │
              ○  SERIES B (PLANNED)
                 $25M target
                 Q1 2026

● = Completed milestone (filled circle, green #2E7D32)
○ = Future milestone (empty circle, gray #9E9E9E)
Line: 2px solid, #E0E0E0
```

---

## Color Psychology and Application

### Board Type Color Strategies

**Vision Board**:

- Dominant: Primary brand color (headers, borders)
- Background: Subtle brand tint
- Accents: Warm accent for emphasis
- Feel: Bold, aspirational, clean

**Culture Canvas**:

- Dominant: Warm palette (earth tones, amber, warm gray)
- Background: Warm off-white (#FFF8F0)
- Accents: Varied per value (each value can have its own accent)
- Feel: Human, approachable, authentic

**Org Growth Plan**:

- Dominant: Structured blue/gray palette
- Background: Cool neutral (#F0F4FF)
- Accents: Green for growth, amber for planned hires
- Feel: Organized, forward-looking, professional

**Investor Update**:

- Dominant: Professional navy/charcoal
- Background: White (maximum readability)
- Accents: Green for wins, red for challenges, blue for neutral
- Feel: Confident, transparent, data-driven

### Metric Color Rules

| Context                  | Positive      | Negative      | Neutral       |
| ------------------------ | ------------- | ------------- | ------------- |
| Revenue (up = good)      | Green #2E7D32 | Red #C62828   | Gray #616161  |
| Churn (down = good)      | Green #2E7D32 | Red #C62828   | Gray #616161  |
| Headcount (up = planned) | Blue #1565C0  | Amber #F9A825 | Gray #616161  |
| Burn rate (down = good)  | Green #2E7D32 | Red #C62828   | Gray #616161  |
| NPS (up = good)          | Green #2E7D32 | Red #C62828   | Gray #616161  |
| Runway (>12mo = good)    | Green #2E7D32 | Red #C62828   | Amber #F9A825 |

---

## Sticky Note Standards for Company Boards

### Purpose-Based Sticky Colors

| Purpose                 | Color  | Hex     | Text Color |
| ----------------------- | ------ | ------- | ---------- |
| Win / Achievement       | Green  | #E8F5E9 | #2E7D32    |
| Challenge / Risk        | Pink   | #FCE4EC | #C62828    |
| Action item / Next step | Blue   | #E3F2FD | #1565C0    |
| Decision needed         | Amber  | #FFF8E1 | #E65100    |
| Team feedback / Quote   | Purple | #F3E5F5 | #6A1B9A    |
| Context / History       | Gray   | #F5F5F5 | #616161    |
| Investor ask            | Coral  | #FFF0F0 | #C62828    |

### Sticky Note Sizing

| Content                 | Size      |
| ----------------------- | --------- |
| Single stat or headline | 200x100px |
| Brief note (1-2 lines)  | 250x120px |
| Detailed annotation     | 300x180px |
| Extended narrative      | 400x250px |

---

## Visual Hierarchy for Emphasis

### Hero Moments

Create visual "hero moments" for the most important content on the board:

**Vision Statement Hero**:

```
┌─────────────────────────────────────────────────┐
│                                                  │
│  ┌──────────────────────────────────────────┐   │
│  │                                          │   │
│  │   "Democratize financial literacy        │   │
│  │    for the next billion internet users"  │   │
│  │                                          │   │
│  └──────────────────────────────────────────┘   │
│                                                  │
│  Background: Primary color at 10% opacity       │
│  Text: 48px bold, primary color, centered       │
│  Container: Extra padding (60px all sides)      │
│  Subtle border or shadow for lift               │
│                                                  │
└─────────────────────────────────────────────────┘
```

**Metric Achievement Hero**:

```
┌──────────────────────────┐
│                          │
│    ★  $1M ARR            │  ← Star icon, large text
│       MILESTONE          │
│       ACHIEVED           │
│                          │
│    December 2025         │
│                          │
└──────────────────────────┘
Background: Gold gradient or warm accent
Border: 3px solid accent color
Size: 500x300px
```

### De-Emphasis for Supporting Content

- **Notes and context**: Smaller font (12-14px), lighter color (#9E9E9E), placed in margin areas
- **Historical data**: Slightly faded (0.7 opacity) compared to current data
- **Draft/tentative content**: Dashed borders, lighter fills, italic text
- **Confidential markers**: Small red banner, does not dominate

---

## Photo and Image Guidelines

### Team Photos

- **Format**: Circular crop, 80x80px or 120x120px
- **Border**: 3px solid, white or brand color
- **Fallback**: If no photo, use initials in a colored circle (brand primary background, white text)
- **Grouping**: Arrange team photos in rows by department or reporting structure
- **Caption**: Name (14px bold), role (12px regular), below the photo

### Company Imagery

- **Brand photos**: Use in the vision/mission section as background or hero image
- **Product screenshots**: Use in the product roadmap section, sized 300-500px wide
- **Office/team photos**: Use in the culture section to humanize the board
- **Placement rule**: Never let images overlap text. Use images as backgrounds only with sufficient opacity reduction (30-40% opacity).

### Icon Usage

- **Value icons**: 48-64px, simple line icons or filled icons in brand color
- **Section icons**: 32px, placed before section headers
- **Metric trend arrows**: 16px, inline with metric values
- **Status dots**: 12px circles (green/amber/red) for status indicators

---

## Visual Anti-Patterns

### Do NOT:

1. **Stock photo overload** — Generic handshake/meeting photos feel fake. Use actual team photos or skip imagery.
2. **Rainbow values** — Each value in a different rainbow color looks like a children's poster. Use variations of 2-3 brand colors.
3. **Wall of text** — If any section has more than 5 lines of continuous text, it needs restructuring into bullets, cards, or visuals.
4. **Tiny metrics** — Metrics should be the largest text on the board after the title. Never shrink them to fit more on screen.
5. **Clip art** — Never use clip art. Use professional icons or no icons at all.
6. **Inconsistent card sizes** — All value blocks should be the same size. All metric cards should be the same size. Inconsistency feels sloppy.
7. **Missing brand colors** — Using only gray and black when the company has a vibrant brand palette wastes an opportunity for emotional connection.
8. **Over-designed** — Company boards should feel clean and substantive, not like a marketing brochure. Substance over style.
9. **Hidden narrative** — If the viewer cannot understand the board's story in 3 minutes, the visual hierarchy is failing.
10. **Stale dates** — A company board showing "Q2 2024" as the latest update in Q1 2026 screams neglect.

---

## Responsive Design

### Zoom Level Content Visibility

| Zoom Level          | What Should Be Visible                                      |
| ------------------- | ----------------------------------------------------------- |
| 25% (full board)    | Section structure, vision statement, major metric values    |
| 50% (section level) | Section headers, metric cards, value titles, team structure |
| 75% (working level) | Value descriptions, metric details, team member names       |
| 100% (detail level) | All text, supporting annotations, dates, fine print         |

### Minimum Text Sizes for Readability

| Element          | Min Font Size | Reason                       |
| ---------------- | ------------- | ---------------------------- |
| Vision statement | 48px          | Must be readable at 25% zoom |
| Section headers  | 28px          | Must be readable at 50% zoom |
| Metric values    | 42px          | Must stand out at 50% zoom   |
| Card titles      | 22px          | Must be readable at 50% zoom |
| Body text        | 16px          | Readable at 75% zoom         |
| Labels/captions  | 12px          | Readable at 100% zoom only   |

---

## Summary

The visual system for company building boards serves the dual purpose of communicating organizational substance and evoking organizational personality. Colors carry brand identity and emotional weight. Typography establishes authority and hierarchy. Shapes and cards create scannable, modular content. Every visual decision must support the board's core goal: making abstract organizational concepts — vision, values, strategy, growth — feel tangible, inspiring, and real.
