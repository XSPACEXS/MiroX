# Layout Patterns — Event Guide Immersive Isometric

## Pattern Overview

Event Guide Immersive Isometric boards demand the most sophisticated layout patterns in the MiRoX Brain. They combine spatial world-building with functional event information, requiring layouts that are simultaneously beautiful at full zoom-out and practical at detail zoom. These patterns create the illusion of a 3D isometric world using Miro's 2D canvas tools.

---

## Pattern 1: The Isometric Conference Campus

The flagship layout pattern. An isometric bird's-eye view of a conference venue with distinct zones connected by pathways. This is the pattern used by Miro's original Event Guide showcase.

### Structure

```
+-----------------------------------------------------------------------+
|                  [ EVENT TITLE BANNER ]                                |
|         ☁️        ☁️          ☁️        ☁️                            |
+-----------------------------------------------------------------------+
|                                                                        |
|    +-----------+     🌳🌳     +----------+      🌳                    |
|   /REGISTRATION\    ====    / SPEAKERS  \     ====                    |
|  (    ZONE      )--[PATH]--(  SHOWCASE   )--[PATH]--+                |
|   \ (Welcome)  /    ====    \ (Gallery)  /     ==== |                 |
|    +-----------+     🌳🌳     +----------+      🌳  |                 |
|         |                         |                   |                |
|      [PATH]                    [PATH]              [PATH]             |
|         |                         |                   |                |
|    +-----------+            +----------+        +----------+          |
|   / MAIN       \          / COMMUNITY \      / LIGHTNING  \          |
|  (   STAGE      )        (    HUB      )    (   TALKS     )          |
|   \ (Keynotes) /          \ (Network) /      \ (Arena)   /           |
|    +-----------+            +----------+        +----------+          |
|         |                         |                   |                |
|      [PATH]                    [PATH]              [PATH]             |
|         |                         |                   |                |
|    +-----------+     🌳🌳     +----------+                            |
|   / EXPO       \    ====    / AGENDA    \                             |
|  (   HALL       )--[PATH]--(  OVERVIEW   )                            |
|   \ (Booths)  /    ====    \ (Schedule) /                             |
|    +-----------+     🌳🌳     +----------+                            |
|                                                                        |
|  ☁️   [ COMPANION ZONE ]    [ SPONSORS ]    ☁️                       |
+-----------------------------------------------------------------------+
```

### Zone Placement Grid (for a 5000x3500px board)

| Zone             | Position (x, y) | Size (w x h) | Color               |
| ---------------- | --------------- | ------------ | ------------------- |
| Title Banner     | (100, 50)       | (4800, 400)  | Deep Slate #2C3E50  |
| Registration     | (200, 550)      | (1200, 700)  | Teal #1ABC9C        |
| Speaker Showcase | (1600, 550)     | (1400, 700)  | Royal Blue #2980B9  |
| Main Stage       | (200, 1400)     | (1400, 800)  | Deep Blue #1A237E   |
| Community Hub    | (1800, 1400)    | (1200, 700)  | Emerald #27AE60     |
| Lightning Talks  | (3200, 1400)    | (1200, 700)  | Coral #E67E22       |
| Expo Hall        | (200, 2400)     | (1400, 700)  | Deep Purple #8E44AD |
| Agenda Overview  | (1800, 2400)    | (1400, 600)  | Warm Gold #F1C40F   |
| Companion Zone   | (3400, 2400)    | (1200, 500)  | Light gray          |
| Sponsor Strip    | (200, 3200)     | (4800, 250)  | White               |

### Pathway Network

Main pathways (5px, golden yellow #F1C40F):

1. Registration --> Speaker Showcase (horizontal, top row)
2. Registration --> Main Stage (vertical, left column)
3. Speaker Showcase --> Community Hub (vertical, center column)
4. Main Stage --> Expo Hall (vertical, left column)
5. Community Hub --> Agenda Overview (vertical, center)
6. Lightning Talks --> Agenda (diagonal)

Secondary pathways (2px, light gray #BDC3C7):

- Speaker Showcase --> Lightning Talks (horizontal)
- Main Stage --> Community Hub (horizontal)
- Expo Hall --> Agenda Overview (horizontal)

---

## Pattern 2: The Floating Islands Layout

Used for distributed events, virtual conferences, or multi-track events. Each track or venue is a "floating island" suspended in space, connected by bridges or ethereal pathways.

### Structure

```
+-----------------------------------------------------------------------+
|            ☁️            ☁️            ☁️            ☁️                |
|                    [ EVENT TITLE ]                                     |
|                                                                        |
|        +-----------+         +-----------+                             |
|       /  KEYNOTE    \  ===  /  WORKSHOP   \                           |
|      (   ISLAND     )======(   ISLAND     )                           |
|       \  🌴🌴🌴   /  ===  \  🔧🔧🔧   /                            |
|        +-----------+         +-----------+                             |
|              \\                    //                                   |
|               \\                  //                                    |
|                \\    +------+   //                                     |
|                 \\  / HUB   \ //                                      |
|                  ==(  ISLAND )==                                       |
|                 //  \ 🏠🏠 / \\                                       |
|                //    +------+   \\                                     |
|               //                  \\                                    |
|        +-----------+         +-----------+                             |
|       /  EXPO       \  ===  /  SOCIAL     \                           |
|      (   ISLAND     )======(   ISLAND     )                           |
|       \  🎪🎪🎪   /  ===  \  🎵🎵🎵   /                            |
|        +-----------+         +-----------+                             |
|                                                                        |
|            ☁️            ☁️            ☁️            ☁️                |
+-----------------------------------------------------------------------+
```

### Floating Island Design

- **Island shape**: Rounded rectangle with irregular bottom edge (simulating floating rock). Use overlapping shapes to create the floating effect.
- **Island shadow**: A soft gray ellipse (40% opacity) directly below each island, offset down by 30-50px
- **Bridge connectors**: Thick decorative lines or chain-link patterns connecting islands
- **Sky background**: Gradient from light blue (top) to deeper blue (bottom), or dark navy with stars for a space theme
- **Cloud placement**: Between and around islands, at varying sizes (3-5 clouds, white at 25% opacity)
- **Island size hierarchy**: Hub island is 20% larger than others to draw focus

### When to Use

- Multi-venue or multi-city distributed events
- Virtual conferences with distinct "rooms" or "worlds"
- Multi-day events where each day is conceptually separate
- Events with distinct tracks that operate independently

---

## Pattern 3: The Split-World Layout (Hybrid Events)

Divides the board into two mirrored worlds — physical and virtual — connected by a bridge layer in the center.

### Structure

```
+-----------------------------------------------------------------------+
| [ EVENT TITLE — "Two Worlds. One Experience." ]                       |
+-----------------------------------------------------------------------+
|                    |                    |                               |
|  PHYSICAL WORLD    |    THE BRIDGE      |    VIRTUAL WORLD             |
|  [Warm tones]      |  [Golden/amber]    |    [Cool tones]              |
|                    |                    |                               |
|  +----------+      |    +--------+      |      +----------+            |
|  |Main Stage|----->|    |Cameras |----->|      |Livestream|            |
|  +----------+      |    +--------+      |      +----------+            |
|                    |                    |                               |
|  +----------+      |    +--------+      |      +----------+            |
|  |Expo Hall |----->|    |QR Sync |----->|      |Digi Expo |            |
|  +----------+      |    +--------+      |      +----------+            |
|                    |                    |                               |
|  +----------+      |    +--------+      |      +----------+            |
|  |Networking|----->|    |Hybrid  |----->|      |Video Net |            |
|  +----------+      |    |Mixer   |      |      +----------+            |
|                    |    +--------+      |                               |
+--------------------+--------------------+------------------------------+
| [ ENGAGEMENT METRICS — Side by Side Comparison ]                      |
+-----------------------------------------------------------------------+
```

### Split-World Specifications

- **Physical world (left 35%)**: Warm color tones (terracotta, coral, warm yellow backgrounds). Shows venue layout, room capacities, AV setup.
- **Bridge layer (center 20%)**: Golden/amber tones. Shows technology infrastructure connecting the two worlds: cameras, streams, chat bridges, polling, QR synchronization.
- **Virtual world (right 35%)**: Cool color tones (cyan, teal, cool blue backgrounds). Shows platform features: livestream, chat, virtual booths, networking tools.
- **Metrics footer (bottom 10%)**: Full width. Side-by-side comparison of physical vs virtual engagement metrics.

### Visual Mirroring

Each zone in the physical world has a corresponding zone in the virtual world, connected through the bridge:

- Physical Main Stage <--[Camera Bridge]--> Virtual Livestream Stage
- Physical Expo Hall <--[QR Bridge]--> Virtual Digital Expo
- Physical Networking <--[Hybrid Mixer Bridge]--> Virtual Networking Rooms

This mirroring creates visual symmetry that communicates "these are two sides of the same experience."

---

## Pattern 4: The Festival Campus Layout

An organic, park-like layout for multi-day outdoor festivals or campus-style events. Zones are arranged like areas of a park rather than on a rigid grid.

### Structure

```
+-----------------------------------------------------------------------+
|                  [ FESTIVAL CAMPUS MAP ]                               |
|  🌳    🌳              🌳    🌳         🌳    🌳                     |
+-----------------------------------------------------------------------+
|                                                                        |
|       +~~~~~~~~~+                    +~~~~~~~~~+                      |
|      ( MAIN      )     ====        ( TECH      )                     |
|      ( STAGE     )==[PATH]=======( TENT       )                      |
|       (  🎤🎤   )     ====        (  💻💻    )                      |
|       +~~~~~~~~~+                    +~~~~~~~~~+                      |
|            |                              |                            |
|         [PATH]     +~~~~~~~~~+         [PATH]                         |
|            |      ( FOOD      )          |                             |
|       +~~~~~~~~~+( COURT     )+~~~~~~~~~+                             |
|      ( WORKSHOP  )( 🍕🍔🌮  )( WELLNESS  )                          |
|      ( VILLAGE   )+~~~~~~~~~+( GARDEN    )                            |
|       (  📝📝   )     |      (  🧘🧘    )                           |
|       +~~~~~~~~~+   [PATH]   +~~~~~~~~~+                              |
|                       |                                                |
|              +~~~~~~~~~+    +~~~~~~~~~+                                |
|             ( INNOVATION ) ( CHILL     )                               |
|             (  LAB       ) ( LOUNGE    )                               |
|              (  🔬🔬    ) (  🎮🎮    )                               |
|              +~~~~~~~~~+    +~~~~~~~~~+                                |
|                                                                        |
|  🌳    🌳    [ SCHEDULE ]    [ INFO & SAFETY ]    🌳    🌳           |
+-----------------------------------------------------------------------+
```

### Organic Layout Principles

- **No straight lines between zones**: Pathways should be gentle curves (use Miro curved connectors or approximate with multiple short segments)
- **Irregular spacing**: Unlike grid layouts, zones are NOT equidistant. Some zones cluster together (food court near multiple zones), others are further apart (wellness garden is intentionally distant from the loud main stage)
- **Green spaces between zones**: Fill inter-zone spaces with tree clusters, grass patches, and decorative landscape elements
- **Natural gathering points**: The food court is positioned centrally as a hub, mirroring real festival layout where food areas attract foot traffic from all directions
- **Walking time labels**: Every pathway is labeled with estimated walking time between zones (e.g., "5 min walk")

---

## Pattern 5: The Companion Panel Layout

A supplementary pattern used alongside any of the above patterns. A floating panel that provides real-time event information.

### Structure

```
+-----------------------------------+
| COMPANION ZONE — LIVE             |
+-----------------------------------+
| NOW: Main Stage                   |
| "The Future of AI" — Dr. Chen    |
| ████████████░░░░░ 65% (35 min)   |
+-----------------------------------+
| NEXT UP:                          |
| 10:30 — "Building Products..."   |
| Room: Main Stage                  |
| 11:00 — "Workshop: API..."       |
| Room: Lab 2 (pre-reg required)   |
+-----------------------------------+
| QUICK LINKS:                      |
| 📶 WiFi: EventNet2026 / Pass123  |
| 🚑 First Aid: Near Registration  |
| 📱 App: innovatesummit.com/app   |
| 📋 Feedback: Rate this session   |
+-----------------------------------+
| LIVE POLL:                        |
| "Favorite session so far?"       |
| 🟦 AI Keynote    (42%)          |
| 🟩 Workshop      (31%)          |
| 🟧 Expo          (27%)          |
+-----------------------------------+
```

### Companion Panel Specifications

- **Position**: Top-right corner of the board, outside the main world layout
- **Size**: 800-1000px wide, 1200-1600px tall
- **Background**: White with subtle gray border, or dark overlay for contrast
- **Sections**: Now Playing, Up Next, Quick Links, Live Poll/Social
- **Update frequency**: Every 15-30 minutes during the event (or real-time if managed by a dedicated person)
- **Mobile-friendly**: This panel should be readable even on mobile zoom levels — use 16pt+ font

---

## Advanced Technique: Isometric Depth Construction

Creating the illusion of 3D depth in a 2D Miro canvas.

### The Three-Face Method

Each "building" in the isometric world is constructed from three shapes:

```
        +-------+
       /  TOP   /|
      / (light)/  |
     +-------+   |
     |        |   |
     | FRONT  |  / RIGHT
     | (med)  | / (dark)
     |        |/
     +--------+
```

1. **Top face**: A parallelogram shape, lightest shade of the zone color. Rotated to suggest a 30-degree isometric angle.
2. **Front face**: A rectangle, medium shade of the zone color. This is where the building label and description go.
3. **Right face**: A parallelogram, darkest shade of the zone color. Creates the shadow/depth effect.

In Miro, approximate this with:

- A rectangle for the front face (main content area)
- A small parallelogram-shaped shape at the top (or use a triangle + rectangle combo)
- A slightly darker rectangle on the right side (or use shadow effect)

### Shadow and Grounding

- Every "building" has a shadow: a dark gray ellipse or rectangle (15-20% opacity) offset 20-30px down and 10-20px right from the building base
- Ground texture: A light-colored rectangle beneath the building extending slightly beyond its edges, suggesting a foundation or lawn
- Pathways appear to be ON the ground: They go behind buildings (lower z-order) and have subtle shadows

### Atmospheric Perspective

Elements further from the "camera" (higher on the board = more distant):

- Slightly smaller
- Slightly less saturated colors
- Slightly more transparent
- Less detail in content

Elements closer (lower on the board = nearer):

- Full size
- Full saturation
- Full opacity
- Maximum detail

This graduated treatment creates the illusion of a receding landscape.

---

## Pattern 6: The Timeline Agenda Overlay

A flat (non-isometric) reference panel that sits alongside or below the main isometric world, providing the practical schedule information.

### Structure

```
+-----------------------------------------------------------------------+
| DAY 1: MARCH 18                                                       |
+-----------------------------------------------------------------------+
| TIME     | MAIN STAGE  | ROOM A     | ROOM B     | EXPO HALL        |
+----------+-------------+------------+------------+------------------+
| 9:00 AM  | ██ KEYNOTE  |            |            | ██ OPEN          |
|          | Dr. Chen    |            |            |                  |
+----------+-------------+------------+------------+------------------+
| 10:00 AM | ██ BREAK    | ██ BREAK   | ██ BREAK   | ██ OPEN          |
+----------+-------------+------------+------------+------------------+
| 10:30 AM | ██ TALK     | ██ WORKSHOP| ██ PANEL   | ██ DEMOS         |
|          | Rivera      | API Lab    | SaaS 2026  | Booth tours      |
+----------+-------------+------------+------------+------------------+
| 12:00 PM | ██ LUNCH    | ██ LUNCH   | ██ LUNCH   | ██ LUNCH         |
+----------+-------------+------------+------------+------------------+
```

### Timeline Specifications

- **Position**: Below the isometric world, or as a linked separate frame accessible via Miro navigation
- **Color coding**: Session blocks colored to match their zone in the isometric world (Main Stage sessions = Deep Blue, Expo = Purple, etc.)
- **Now indicator**: During the event, a horizontal red line marking the current time, with the current session row highlighted
- **Clickable links**: Each session block links to the corresponding zone in the isometric world above

---

## Decorative Element Placement Guide

### Cloud Placement

| Cloud Size         | Position             | Opacity | Quantity |
| ------------------ | -------------------- | ------- | -------- |
| Large (400x200px)  | Top corners of board | 20%     | 2-3      |
| Medium (250x120px) | Between upper zones  | 25%     | 3-4      |
| Small (150x80px)   | Scattered, mid-board | 30%     | 4-6      |

### Tree Placement

- Along pathways: Every 200-300px along main pathways
- Near zone entrances: 1-2 trees flanking each zone entrance
- In clusters: 3-5 trees in "park" areas between zones
- Size: Small (30x50px icons or simple triangles on sticks)

### Human Figure Placement

- Walking along pathways: 2-3 tiny figures per main pathway
- Near zone entrances: 1-2 figures entering or exiting
- In groups near community areas: 3-5 figures in networking zones
- Size: Very small (15x30px simple shapes)

### Stars and Sparkles

- For boards with dark backgrounds (night theme): Scatter 10-15 small star shapes across the sky area
- Size: Tiny (10x10px to 20x20px)
- Color: White or pale yellow at 40-60% opacity
- Distribution: Random but avoiding overlap with text or functional elements

---

## Layout Composition Checklist

Before finalizing an Event Guide Immersive Isometric layout, verify:

- [ ] The isometric perspective is consistent across all zones
- [ ] Golden pathways connect all major zones
- [ ] Every zone has a unique color from the palette
- [ ] The title banner is visible and impressive at full zoom-out
- [ ] Decorative elements enhance atmosphere without obscuring information
- [ ] The schedule/agenda is accessible (either integrated or linked)
- [ ] Companion zone is positioned for real-time updates
- [ ] Speaker information is findable within 2 clicks/zooms
- [ ] The board works at mobile zoom levels (zones large enough to tap)
- [ ] Walking time labels are on all pathways
- [ ] Emergency information is clearly marked
- [ ] The board looks like a "world" at full zoom-out, not a spreadsheet
- [ ] Each zone rewards exploration with rich content at close zoom
