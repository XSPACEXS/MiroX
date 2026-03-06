# Speaker Showcase Board

## Overview

- **Purpose**: A visual directory of all event speakers, featuring profile cards with photos, bios, talk titles, time slots, social links, and topic tags. This board serves triple duty: internal planning reference for the event team, promotional asset for marketing, and on-site reference for attendees.
- **Best For**: Event program managers curating speaker lineups, marketing teams creating promotional materials, and attendees browsing the speaker roster before or during the event.
- **Complexity**: Medium
- **Board Size**: 4000 x 3000px

## Color Scheme

| Role       | Color        | Hex     |
| ---------- | ------------ | ------- |
| Primary    | Deep Indigo  | #1A237E |
| Secondary  | Vibrant Teal | #00897B |
| Accent     | Warm Amber   | #FF8F00 |
| Background | Soft Ivory   | #FAFAFA |
| Text       | Charcoal     | #212121 |

## Board Layout

The board features a title section at the top, followed by a grid of speaker profile cards organized by speaker tier (Keynote, Featured, Lightning Talk). A sidebar on the right contains topic tag filters and schedule cross-references. A footer contains speaker logistics information.

```
+------------------------------------------------------------------+
|                  [ SPEAKER SHOWCASE TITLE ]                        |
+------------------------------------------------------------------+
|                                                                    |
|  +-----KEYNOTE SPEAKERS (large cards)----+   +--TOPIC TAGS-----+ |
|  | [Card] [Card] [Card]                  |   | #AI  #Design    | |
|  +---------------------------------------+   | #Engineering    | |
|                                              | #Leadership     | |
|  +-----FEATURED SPEAKERS (medium cards)--+   | #Data           | |
|  | [Card] [Card] [Card]                  |   | #Product        | |
|  | [Card] [Card] [Card]                  |   +--SCHEDULE LINK--+ |
|  +---------------------------------------+   | Quick ref table | |
|                                              +-----------------+ |
|  +-----LIGHTNING TALK SPEAKERS (compact)-+                       |
|  | [Card] [Card] [Card] [Card] [Card]    |                       |
|  | [Card] [Card] [Card] [Card] [Card]    |                       |
|  +---------------------------------------+                       |
|                                                                    |
|  +-----SPEAKER LOGISTICS FOOTER----------+                       |
+------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Title Section

- **Position**: Top, full width
- **Size**: 3900 x 350px
- **Background**: Deep Indigo (#1A237E)
- **Elements**:
  - Text block: "Speaker Showcase" — font size 56, bold, white (#FFFFFF), centered
  - Text block: "InnovateTech Summit 2026 | 42 Speakers | 3 Days" — font size 22, Light Lavender (#E8EAF6), centered
  - Text block: "Keynotes | Featured Sessions | Lightning Talks | Panels" — font size 16, Warm Amber (#FF8F00), centered
  - Shape: Decorative horizontal line, 3000px wide, amber, 2px

### Frame 2: Keynote Speakers

- **Position**: Below title, left side
- **Size**: 3000 x 800px
- **Background**: White (#FFFFFF) with subtle indigo border (2px)
- **Elements**:
  - Text block: "Keynote Speakers" — font size 32, bold, Deep Indigo, with star icon
  - 3 large speaker cards arranged horizontally (each 900 x 650px):

  - **Card 1 — Dr. Amara Chen**:
    - Shape: Rounded rectangle, white fill, soft shadow
    - Shape: Circle (120px diameter), grey fill — photo placeholder, labeled "Photo"
    - Text block: "Dr. Amara Chen" — font size 24, bold, Charcoal
    - Text block: "VP of Product, NovaTech" — font size 16, Slate Grey
    - Text block: "Talk: 'AI-Native Product Design: Beyond the Hype'" — font size 16, bold, Deep Indigo
    - Text block: "Day 1 | 9:00 AM | Main Stage (Hall 1)" — font size 14, Teal
    - Text block: "Dr. Chen has spent 15 years at the intersection of AI and product development. Previously at DeepMind and Meta AI, she now leads product strategy at NovaTech, where her team has shipped 3 AI-native products reaching 50M+ users. Her talk explores how product teams can move beyond AI-as-feature to AI-as-foundation." — font size 12, Charcoal, max 4 lines
    - Sticky note (small, teal): "#AI"
    - Sticky note (small, teal): "#Product"
    - Sticky note (small, teal): "#Strategy"
    - Text block: "@amarachen | linkedin.com/in/amarachen" — font size 11, Slate Grey
    - Shape: Twitter/X icon + LinkedIn icon (small, clickable area)

  - **Card 2 — Marcus Rivera**:
    - Shape: Rounded rectangle, white fill, soft shadow
    - Shape: Circle (120px), grey — photo placeholder
    - Text block: "Marcus Rivera" — font size 24, bold
    - Text block: "CTO, BuildScale" — font size 16, Slate Grey
    - Text block: "Talk: 'Scaling Engineering Culture: People, Process, Platform'" — font size 16, bold, Deep Indigo
    - Text block: "Day 2 | 9:00 AM | Main Stage (Hall 1)" — font size 14, Teal
    - Text block: "Marcus grew BuildScale's engineering org from 12 to 400 in 3 years while maintaining a 4.8/5 Glassdoor rating. A former Staff Engineer at Netflix, he is known for his frameworks on engineering leadership, IC growth paths, and building platform teams. His keynote shares the hard-won lessons of scaling without losing soul." — font size 12
    - Sticky note (small, amber): "#Engineering"
    - Sticky note (small, amber): "#Leadership"
    - Sticky note (small, amber): "#Culture"
    - Text block: "@marcusrivera | buildscale.dev/marcus" — font size 11

  - **Card 3 — Sofia Nguyen**:
    - Shape: Rounded rectangle, white fill, soft shadow
    - Shape: Circle (120px), grey — photo placeholder
    - Text block: "Sofia Nguyen" — font size 24, bold
    - Text block: "CEO & Co-founder, DataMesh" — font size 16, Slate Grey
    - Text block: "Talk: 'Real-Time Analytics at Petabyte Scale'" — font size 16, bold, Deep Indigo
    - Text block: "Day 2 | 1:00 PM | Main Stage (Hall 1)" — font size 14, Teal
    - Text block: "Sofia founded DataMesh after a decade at Snowflake and Databricks. Her company processes 2PB of real-time data daily for Fortune 100 clients. A Stanford CS PhD, she bridges the gap between data science theory and production reality. Her session demystifies real-time architectures for teams of any size." — font size 12
    - Sticky note (small, purple): "#Data"
    - Sticky note (small, purple): "#Analytics"
    - Sticky note (small, purple): "#Architecture"
    - Text block: "@sofnguyen | datamesh.io/team" — font size 11

### Frame 3: Featured Speakers

- **Position**: Below keynotes, left side
- **Size**: 3000 x 1200px
- **Background**: Light Lavender (#E8EAF6) with 50% opacity
- **Elements**:
  - Text block: "Featured Speakers" — font size 28, bold, Deep Indigo
  - 6 medium speaker cards (2 rows x 3 columns, each 900 x 450px):

  - **Card 4 — Yuki Tanaka**: Design Director, Figma | "Design Systems at Scale: From Tokens to Components" | Day 1, 10:30 AM, Room 201 | "Yuki leads Figma's own design system team and has consulted for Airbnb, Spotify, and Shopify on scaling design tokens across platforms. Her workshop is hands-on — bring your laptop and a Figma account." | Tags: #Design #Systems #Figma | @yukitanaka

  - **Card 5 — Fatima Al-Rashid**: Head of UX Research, Google | "Designing for 1 Billion Users" | Day 1, 1:00 PM, Main Stage | "Fatima leads a 60-person UXR team at Google, focusing on emerging markets. Her research has directly influenced Google Maps, Pay, and Classroom for low-bandwidth environments." | Tags: #UXR #Research #Inclusive | @fatima_uxr

  - **Card 6 — James O'Brien**: Staff Engineer, Stripe | "Platform Engineering: Build vs. Buy in 2026" | Day 1, 1:00 PM, Room 202 | "James has spent 8 years building internal platforms at Stripe, Shopify, and GitHub. He'll present a decision framework for when to build custom tooling vs. adopting off-the-shelf platforms." | Tags: #Platform #Engineering #DevEx | @jamesobriendev

  - **Card 7 — Raj Patel**: Principal Engineer, Vercel | "Why We Ditched Microservices" (Lightning) + Workshop TBD | Day 1, 2:50 PM, Main Stage | "Raj led Vercel's architecture migration from microservices back to a modular monolith, reducing deployment time by 70%. Controversial but data-driven." | Tags: #Architecture #Monolith #DevOps | @rajpatel_eng

  - **Card 8 — Nadia Ibrahim**: Accessibility Lead, Microsoft | "Accessible by Default" (Lightning) + "Accessibility Audit Workshop" | Day 2, 1:00 PM, Room 201 | "Nadia has championed accessibility across Microsoft 365 products. She'll run an audit workshop where attendees evaluate their own products live." | Tags: #A11y #Inclusive #Workshop | @nadiaibrahim

  - **Card 9 — Derek Cho**: VP Growth, Amplitude | "The One Metric That Matters" (Lightning) + "Hiring in a Post-AI Market" (Panel) | Day 1 & 2 | "Derek has scaled growth teams at 3 unicorns. His lightning talk distills years of metric debates into one actionable framework." | Tags: #Growth #Metrics #Hiring | @derekcho

### Frame 4: Lightning Talk Speakers

- **Position**: Below featured speakers, left side
- **Size**: 3000 x 700px
- **Background**: Warm Amber (#FF8F00) with 8% opacity
- **Elements**:
  - Text block: "Lightning Talk Speakers" — font size 28, bold, Deep Indigo
  - Text block: "5-minute rapid-fire presentations | Day 1 & 2, 2:50 PM" — font size 16, italic
  - 6 compact speaker cards (1 row x 6, each 450 x 300px):

  - **Card 10 — Lin Wei**: Frontend Eng, Shopify | "CSS Container Queries Changed Everything" | Day 1 | Tags: #CSS #Frontend
  - **Card 11 — Alex Kim**: DevOps Lead, Notion | "From Figma to Production in 4 Hours" | Day 1 | Tags: #DevOps #Workflow
  - **Card 12 — Maria Santos**: SRE Manager, Datadog | "Observability for Startups" | Day 2 | Tags: #SRE #Observability
  - **Card 13 — Priya Mehta**: PM, Atlassian | "Async-First: Killing Meetings for Good" | Day 2 | Tags: #Process #Remote
  - **Card 14 — Tom Kowalski**: Backend Eng, Cloudflare | "Edge Computing for the Rest of Us" | Day 2 | Tags: #Edge #Infrastructure
  - **Card 15 — Aisha Johnson**: Design Researcher, Duolingo | "Gamification That Actually Works" | Day 2 | Tags: #Gamification #UX

### Frame 5: Topic Tags Sidebar

- **Position**: Right side, spanning vertically
- **Size**: 800 x 1500px
- **Background**: White with thin Indigo border
- **Elements**:
  - Text block: "Browse by Topic" — font size 24, bold, Deep Indigo
  - Tag cloud of sticky notes (various sizes based on frequency):
    - Sticky note (large, teal): "#AI — 8 speakers"
    - Sticky note (large, indigo): "#Engineering — 12 speakers"
    - Sticky note (large, amber): "#Design — 7 speakers"
    - Sticky note (medium, purple): "#Leadership — 5 speakers"
    - Sticky note (medium, green): "#Data — 4 speakers"
    - Sticky note (medium, teal): "#Product — 6 speakers"
    - Sticky note (small, pink): "#A11y — 3 speakers"
    - Sticky note (small, orange): "#DevOps — 4 speakers"
    - Sticky note (small, blue): "#UXR — 3 speakers"
    - Sticky note (small, grey): "#Growth — 2 speakers"
  - Text block: "Click a tag to filter speakers" — font size 12, italic, Slate Grey

### Frame 6: Schedule Quick Reference

- **Position**: Right side, below topic tags
- **Size**: 800 x 600px
- **Background**: Light Lavender (#E8EAF6)
- **Elements**:
  - Text block: "Schedule Quick Ref" — font size 20, bold
  - Table (text-based):
    - "Day 1, 9:00 AM — Keynote: Dr. Amara Chen"
    - "Day 1, 10:30 AM — Yuki Tanaka, Fatima (panel), James, Marcus"
    - "Day 1, 1:00 PM — Fatima, Yuki, James, Roundtable"
    - "Day 1, 2:50 PM — Lightning: Raj, Lin, Alex + 3 more"
    - "Day 2, 9:00 AM — Keynote: Marcus Rivera"
    - "Day 2, 10:30 AM — Yuki, Sofia, Mentorship Circles"
    - "Day 2, 1:00 PM — Sofia, Nadia, Alex, CEO Roundtable"
    - "Day 2, 2:50 PM — Lightning: Maria, Derek, Nadia + 3 more"
    - "Day 3, 9:00 AM — Masterclass + Hackathon"
  - Connector: Link arrow to full Agenda Board

### Frame 7: Speaker Logistics Footer

- **Position**: Bottom, full width
- **Size**: 3900 x 400px
- **Background**: Deep Indigo (#1A237E) with 90% opacity
- **Elements**:
  - Text block: "Speaker Information" — font size 24, bold, white
  - Sticky note (yellow): "Green Room: Room 105, open 7:30 AM - 6:00 PM | Coffee, snacks, quiet space"
  - Sticky note (yellow): "AV Check: Speakers must check in with AV team 30 min before their slot"
  - Sticky note (yellow): "Slide Upload: Submit decks to speakers@innovatetech.com by March 15"
  - Sticky note (yellow): "Speaker Dinner: March 17, 7:00 PM, The Waterfront Restaurant — RSVP required"
  - Sticky note (green): "Travel Reimbursement: Submit receipts within 30 days to finance@innovatetech.com"
  - Sticky note (green): "Hotel: Hilton SF Union Square — use code INNOVATE2026 for group rate"
  - Text block: "Speaker Liaison: Jordan Maxwell | jordan@innovatetech.com | +1 (415) 555-0192" — font size 14, white

## Connectors & Flow

- Thin connector lines from each keynote speaker card down to their Featured/Lightning appearances (showing speakers with multiple sessions)
- Dashed connector from Topic Tags to relevant speaker cards (conceptual grouping)
- Arrow from Schedule Quick Reference to the external Agenda Board
- Arrow from title section to each tier section (Keynote, Featured, Lightning) for navigation

## Example Content

All speaker profiles above are fully fleshed out for the InnovateTech Summit 2026:

- **3 Keynote speakers** with full bios (100+ words each), talk abstracts, time slots, and social links
- **6 Featured speakers** with condensed bios, session details, and topic tags
- **6 Lightning talk speakers** with compact profiles and talk titles
- **42 total speakers referenced** (15 detailed + 27 additional implied in the schedule)
- **10 topic tags** with speaker counts
- **Full logistics section** covering green room, AV, travel, and speaker liaison contact

## Variations

1. **Compact Version**: Show only keynotes and featured speakers. Move lightning talk speakers to the Agenda Board. Reduce to 3000 x 1500px.
2. **Marketing Export**: Remove logistics footer. Add event branding, ticket purchase CTA, and social media share buttons. Optimize card layout for 16:9 export.
3. **Internal Planning View**: Add status columns to each card (Confirmed / Pending / Declined), contract status, travel arrangements, and AV requirements. Add a notes section per speaker.
4. **Virtual Event**: Replace room assignments with streaming platform links. Add timezone labels. Include "Pre-recorded" vs "Live" badges.

## Build Instructions

1. Create the board at 4000 x 3000px. Set background to Soft Ivory.
2. Place the title banner (3900 x 350px) with Deep Indigo background at the top.
3. Create the Keynote Speakers frame (3000 x 800px) below the title. Build 3 large card templates as rounded rectangles with photo circles, text blocks, and tag sticky notes.
4. Create the Featured Speakers frame (3000 x 1200px). Build 6 medium cards in a 2x3 grid.
5. Create the Lightning Talk Speakers frame (3000 x 700px). Build 6 compact cards in a single row.
6. Place the Topic Tags sidebar (800 x 1500px) on the right side. Add sticky notes of varying sizes.
7. Place the Schedule Quick Reference (800 x 600px) below the sidebar.
8. Add the Speaker Logistics footer (3900 x 400px) at the bottom with Deep Indigo background.
9. Draw connector lines between speakers who appear in multiple sessions.
10. Add navigation arrows from title to each section.
11. Group each section into a named Miro frame.

## Tips & Best Practices

- Update speaker cards as confirmations come in — use a "Status" tag (green = confirmed, yellow = pending, red = declined).
- Link each speaker card to their submitted slide deck or talk abstract document.
- Use this board during speaker outreach — duplicate a blank card template and fill in details as you recruit.
- Export individual speaker cards as images for social media promotion.
- During the event, add a "Now Speaking" highlight to the active speaker card.
- After the event, add links to recorded sessions on each card for the post-event archive.
- Keep speaker bios under 100 words for readability — link to full bios externally if needed.
