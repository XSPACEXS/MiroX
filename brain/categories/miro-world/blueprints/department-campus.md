# Department Campus

## Overview

- **Purpose**: Visualize an organization's departments as buildings on a university campus, with rooms for teams, courtyards for cross-functional projects, pathways between buildings representing collaboration flows, and a central administration quad. This metaphor makes organizational structure feel tangible and navigable, revealing how teams connect, where bottlenecks exist, and how information flows between departments.
- **Best For**: HR and People teams presenting org structure, COOs mapping operational flows, new employee onboarding to understand the company, leadership offsites discussing organizational design, mergers and acquisitions planning team integration.
- **Complexity**: Advanced
- **Board Size**: 5000 x 3500px

## Color Scheme

| Role                  | Color        | Hex     |
| --------------------- | ------------ | ------- |
| Primary (Ground)      | Campus Green | #E8F5E9 |
| Secondary (Paths)     | Warm Brick   | #D4845A |
| Accent (Highlights)   | Royal Blue   | #1565C0 |
| Building: Engineering | Steel Blue   | #37474F |
| Building: Product     | Teal         | #00796B |
| Building: Marketing   | Amber        | #F9A825 |
| Building: Sales       | Coral        | #E64A19 |
| Building: Operations  | Purple       | #6A1B9A |
| Building: Admin/HQ    | Navy         | #1A237E |
| Text                  | Charcoal     | #212121 |
| Text on Dark          | White        | #FFFFFF |

## Board Layout

```
+-----------------------------------------------------------------------+
|                     [ WELCOME GATE — CAMPUS MAP ]                      |
+-----------------------------------------------------------------------+
|     +----------+            +----------+           +-----------+       |
|     |ENGINEERING|           |  PRODUCT  |          | MARKETING  |      |
|     +----------+            +----------+           +-----------+       |
|                   +-----------+         +-----------+                   |
|                   |    HQ     |         | COURTYARD |                  |
|                   +-----------+         +-----------+                   |
|     +----------+                     +-----------+                     |
|     |  SALES   |                     | OPERATIONS |                    |
|     +----------+                     +-----------+                     |
|   [ CAMPUS DIRECTORY ]                                                 |
+-----------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Welcome Gate

- **Size**: 4800 x 400px | **Background**: Navy (#1A237E)
- Title: "NovaTech Department Campus" (56pt, white), subtitle about 320 employees across 6 departments

### Frame 2: Engineering Building

- **Size**: 1500 x 1000px | **Background**: Steel Blue at 10% opacity
- Teams: Backend (22 eng, Rust+Go), Frontend (18, React+TS), Platform (15, AWS/K8s), Mobile (10, Swift+Kotlin), AI/ML (12, PyTorch)
- VP Engineering: Raj Patel | Budget: $18M | 120 total engineers

### Frame 3: Product Building

- **Size**: 1300 x 1000px | **Background**: Teal at 10% opacity
- Teams: Core PMs (6), Design (8), Research (4), Product Ops (3), Analytics (5)
- CPO: Yuki Tanaka | Budget: $4.5M | 32 people

### Frame 4: Marketing Building

- **Size**: 1300 x 1000px | **Background**: Amber at 10% opacity
- Teams: Growth (10), Product Marketing (6), Brand (8), Content (7), Demand Gen (5)
- CMO: Sofia Nguyen | Budget: $8M | 45 people

### Frame 5: HQ / Admin Building

- **Size**: 1200 x 800px | **Background**: Navy at 12% opacity
- Company Vision diamond, Executive Team block, All-Hands circle
- CEO: Lin Wei | $42M ARR | 67% YoY growth

### Frame 6: Sales Building

- **Size**: 1400 x 900px | **Background**: Coral at 10% opacity
- Teams: Enterprise (15 AEs, $85K ACV), Mid-Market (12, $24K ACV), SDR (18), Sales Engineering (6), RevOps (7)
- Q1: 108% of quota

### Frame 7: Operations Building

- **Size**: 1400 x 900px | **Background**: Purple at 10% opacity
- Teams: Customer Success (20 CSMs), Support (15), Finance (10), HR (8), IT/Security (7), Facilities (5)
- NRR: 118% | COO: Priya Sharma

### Frame 8: Cross-Functional Courtyard

- **Size**: 1000 x 600px | **Background**: Campus Green with brick border
- GTM Launch Team, Tiger Team, Hackathon, Customer Advisory Board, DEIB Council

### Frame 9: Campus Directory

- **Size**: 4800 x 300px | Headcounts, open roles, careers link

## Connectors & Flow

1. All buildings connect to HQ via Warm Brick (#D4845A) 4px bidirectional lines
2. Engineering-Product-Marketing-Sales-Operations chain via Royal Blue (#1565C0) 3px lines
3. Dashed lines from each building to the Cross-Functional Courtyard

## Example Content

NovaTech Inc. -- $42M ARR SaaS, 320 employees, Series C at $1.2B, remote-first across 45 countries.

## Variations

1. **Startup Campus**: 3 buildings, smaller board
2. **Enterprise Campus**: 10+ buildings with regional sub-campuses
3. **Remote-First Campus**: Virtual rooms replacing physical buildings
4. **M&A Integration**: Two campuses side-by-side with bridge connectors

## Build Instructions

1. Create board at 5000x3500px, Campus Green background
2. Place Welcome Gate banner at top
3. Create department buildings in upper row (Eng, Product, Marketing) and lower row (Sales, Operations)
4. Place HQ centrally with Cross-Functional Courtyard adjacent
5. Draw brick pathway connectors and blue collaboration lines
6. Add campus directory footer

## Tips & Best Practices

- Walk new employees through the campus during onboarding
- Link each building to detailed team sub-boards
- Update headcounts monthly as single source of truth
- Duplicate for reorg planning exercises
- Color pathways by collaboration health: green/yellow/red
