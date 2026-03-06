# Technical Architecture — Visual Guide

## Overview

The visual language of a technical architecture board is a precision instrument. Every color, font size, shape, and shadow carries semantic weight. This guide defines the complete visual vocabulary for technical architecture boards — the palette, typography hierarchy, iconography conventions, and visual effects that transform a diagram from a mess of boxes into a board that engineers trust and reference daily.

---

## Master Color System

### Primary Palette

The technical architecture color system is built on cool, professional tones with high-contrast semantic accents. The palette must feel engineered — precise, clean, trustworthy.

| Role           | Color Name | Hex     | RGB           | Usage                                       |
| -------------- | ---------- | ------- | ------------- | ------------------------------------------- |
| Primary        | Navy Blue  | #0D47A1 | 13, 71, 161   | Main headers, frame borders, primary labels |
| Secondary      | Indigo     | #1A237E | 26, 35, 126   | Service tier headers, secondary emphasis    |
| Accent         | Teal       | #00897B | 0, 137, 123   | Gateway elements, accent highlights         |
| Background     | Warm Gray  | #F5F5F0 | 245, 245, 240 | Board background, neutral space             |
| Text Primary   | Charcoal   | #212121 | 33, 33, 33    | Body text, labels                           |
| Text Secondary | Slate      | #546E7A | 84, 110, 122  | Descriptions, secondary labels, annotations |
| Text Tertiary  | Cool Gray  | #90A4AE | 144, 164, 174 | Metadata, port numbers, version labels      |

### Tier Background Tints

Each architectural tier gets a unique, very subtle background tint applied to its frame. These tints must be desaturated enough that dark text remains readable but distinct enough that tiers are visually separate.

| Tier                 | Tint Color | Hex     | Opacity |
| -------------------- | ---------- | ------- | ------- |
| Client / Frontend    | Ice Blue   | #E3F2FD | 100%    |
| Gateway / API Layer  | Seafoam    | #E0F2F1 | 100%    |
| Application Services | Lavender   | #E8EAF6 | 100%    |
| Middleware / Infra   | Cream      | #FFF8E1 | 100%    |
| Data / Persistence   | Peach      | #FBE9E7 | 100%    |
| External Services    | Mint       | #E8F5E9 | 100%    |
| Monitoring / Ops     | Rose       | #FFEBEE | 100%    |

### Semantic Colors for Protocols & Status

| Meaning               | Color      | Hex     | Application                      |
| --------------------- | ---------- | ------- | -------------------------------- |
| Synchronous / REST    | Blue       | #1565C0 | Solid connector lines            |
| Asynchronous / Events | Amber      | #F9A825 | Dashed connector lines           |
| Streaming / WebSocket | Teal       | #00897B | Dotted connector lines           |
| gRPC                  | Purple     | #6A1B9A | Solid connector lines            |
| Healthy / Active      | Green      | #2E7D32 | Status badges, active elements   |
| Warning / Degraded    | Orange     | #E65100 | Warning badges, at-risk elements |
| Critical / Down       | Red        | #C62828 | Error states, critical paths     |
| Deprecated / Legacy   | Gray       | #9E9E9E | Grayed-out elements              |
| Planned / Future      | Light Blue | #90CAF9 | Dashed outlines                  |

### HTTP Method Colors

For API map boards, each HTTP method has a fixed color:

| Method      | Color | Hex     | Background |
| ----------- | ----- | ------- | ---------- |
| GET         | Green | #2E7D32 | #E8F5E9    |
| POST        | Blue  | #1565C0 | #E3F2FD    |
| PUT / PATCH | Amber | #F9A825 | #FFF8E1    |
| DELETE      | Red   | #C62828 | #FFEBEE    |
| WebSocket   | Teal  | #00897B | #E0F2F1    |

### Technology Stack Badge Colors

Small pill-shaped badges indicating the tech stack of a service:

| Technology    | Badge Color | Hex     |
| ------------- | ----------- | ------- |
| Node.js       | Green       | #339933 |
| Python        | Blue        | #3776AB |
| Go            | Cyan        | #00ADD8 |
| Java          | Orange      | #ED8B00 |
| Rust          | Brown       | #DEA584 |
| Ruby          | Red         | #CC342D |
| .NET          | Purple      | #512BD4 |
| TypeScript    | Blue        | #3178C6 |
| PostgreSQL    | Blue        | #336791 |
| MongoDB       | Green       | #47A248 |
| Redis         | Red         | #DC382D |
| Kafka         | Black       | #231F20 |
| Elasticsearch | Teal        | #005571 |
| Docker        | Blue        | #2496ED |
| Kubernetes    | Blue        | #326CE5 |
| AWS           | Orange      | #FF9900 |
| GCP           | Blue        | #4285F4 |
| Azure         | Blue        | #0078D4 |

---

## Typography System

### Font Hierarchy

All text on technical architecture boards follows this strict hierarchy. Consistency in font sizing creates visual order in information-dense boards.

| Level    | Purpose                       | Font Size | Weight    | Color                  | Line Height |
| -------- | ----------------------------- | --------- | --------- | ---------------------- | ----------- |
| H1       | Board title                   | 36px      | Bold      | #0D47A1                | 1.2         |
| H2       | Tier/section headers          | 28px      | Bold      | #0D47A1                | 1.2         |
| H3       | Frame titles                  | 24px      | Bold      | Tier-specific primary  | 1.3         |
| H4       | Service/component names       | 18px      | Bold      | #212121                | 1.3         |
| Body     | Descriptions, annotations     | 14px      | Regular   | #212121                | 1.5         |
| Detail   | Tech details, ports, versions | 12px      | Regular   | #546E7A                | 1.4         |
| Metadata | Timestamps, IDs               | 10px      | Regular   | #90A4AE                | 1.3         |
| Code     | Endpoints, config snippets    | 14px      | Monospace | #212121                | 1.4         |
| Badge    | Tech stack labels             | 11px      | Bold      | White (on badge color) | 1.0         |

### Text Formatting Rules

1. **Service names**: Always title case, bold, 18px. Example: "User Service"
2. **Technology labels**: Inside a colored pill badge. Example: [Go] [PostgreSQL]
3. **Port numbers**: Monospace, 12px, slate color. Example: `:8080`
4. **URL paths**: Monospace, 14px. Example: `/api/v1/users`
5. **Metrics**: Bold the number, regular the unit. Example: "**3,200** req/s"
6. **Team names**: Italic, 12px, in a subtle container. Example: _Team Atlas_

### Text Placement Rules

- **Center-align**: Service names within service boxes, frame titles
- **Left-align**: Descriptions, bullet lists within service detail blocks
- **Right-align**: Metrics and stats in annotation blocks
- **Vertical text**: Never use vertical text on architecture boards — it destroys readability

---

## Shape Language

### Service Nodes

```
Standard Service:
┌──────────────────────────────┐
│  [Tech Badge]    Service Name│  ← 18px bold, #212121
│                              │
│  - Responsibility 1          │  ← 14px regular, #212121
│  - Responsibility 2          │
│  - Responsibility 3          │
│                              │
│  Port: 8001    Team: Atlas   │  ← 12px, #546E7A
└──────────────────────────────┘
   Size: 500-600px x 250-350px
   Fill: White (#FFFFFF)
   Border: 2px solid, tier primary color
   Corner radius: 8px
```

### Database Nodes

```
Database:
  ╭──────────────────────╮
  │      users_db        │  ← Cylinder shape
  │   ┌──────────────┐   │
  │   │ PostgreSQL   │   │  ← 14px, #212121
  │   │ 500 GB       │   │  ← 12px, #546E7A
  │   │ 3 replicas   │   │
  │   └──────────────┘   │
  ╰──────────────────────╯
   Size: 300-400px x 180-220px
   Fill: #FBE9E7 (peach tint)
   Border: 2px solid #E64A19
```

### External Service Nodes

```
External Service:
╔══════════════════════════════╗
║  Stripe API                  ║  ← Double border indicates external
║  Payment processing          ║
║  Rate limit: 100 req/s       ║
╚══════════════════════════════╝
   Size: 350-450px x 150-200px
   Fill: #E8F5E9 (mint tint)
   Border: 3px double #2E7D32
```

### Queue / Message Broker Nodes

```
Message Queue:
┌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┐
╎  Kafka                      ╎  ← Dashed or zigzag border
╎  Topics: order.*, payment.* ╎
╎  Partitions: 12             ╎
╎  Retention: 7 days          ╎
└╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┘
   Size: 400-500px x 150-200px
   Fill: #FFF8E1 (cream tint)
   Border: 2px dashed #F9A825
```

### Cache Nodes

```
Cache:
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┐
  Redis
  Cluster mode: 3 shards
  TTL: 1 hour
└ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┘
   Size: 300-400px x 120-170px
   Fill: #F3E5F5 (light purple)
   Border: 2px dotted #7B1FA2
```

### Load Balancer / Gateway

```
Load Balancer:
    ┌─────────────────────┐
   /  AWS ALB             /
  /   SSL Termination    /
 /    Path-based routing/
└─────────────────────┘
   Shape: Trapezoid or hexagon
   Size: 350-400px x 100-140px
   Fill: Tier primary color
   Text: White
```

---

## Connector Visual Language

### Line Styles

| Pattern               | Meaning                             | Miro Implementation             |
| --------------------- | ----------------------------------- | ------------------------------- |
| ────── (solid, 2px)   | Synchronous call (HTTP, gRPC)       | Solid line, blue #1565C0        |
| - - - - (dashed, 2px) | Asynchronous message (event, queue) | Dashed line, amber #F9A825      |
| ...... (dotted, 2px)  | Optional / degraded path            | Dotted line, gray #9E9E9E       |
| ====== (solid, 4px)   | High-throughput / critical path     | Thick solid line, primary color |
| ━━━━━━ (solid, 1px)   | Low-throughput / ancillary          | Thin solid line, slate #546E7A  |

### Arrow Styles

| Arrow    | Meaning                             |
| -------- | ----------------------------------- |
| ──────▶  | One-directional request             |
| ◀──────▶ | Bidirectional (WebSocket, peer)     |
| ──────▷  | Response (hollow arrowhead)         |
| ──────●  | Publish (filled circle = broadcast) |
| ──────◇  | Subscribe (diamond = listener)      |

### Connector Labels

Every connector label follows this format:

```
Protocol / Method
────── REST/HTTPS ──────▶
────── gRPC/mTLS ──────▶
- - - Kafka: order.created - -▶
- - - SQS: email-queue - -▶
```

Label placement: centered above the connector line, 12px font, same color as the connector line.

---

## Visual Hierarchy Techniques

### Depth Through Shadows

Add subtle shadows to create a sense of layering:

| Element       | Shadow                                 | Effect                           |
| ------------- | -------------------------------------- | -------------------------------- |
| Service nodes | 2px offset, 4px blur, rgba(0,0,0,0.08) | Slight lift off background       |
| Tier frames   | No shadow                              | Frames are background containers |
| Sticky notes  | 3px offset, 6px blur, rgba(0,0,0,0.12) | Floating annotation feel         |
| Title block   | 2px offset, 4px blur, rgba(0,0,0,0.1)  | Distinct from board content      |

### Emphasis Techniques

| Technique                  | When to Use                                 | How                                                   |
| -------------------------- | ------------------------------------------- | ----------------------------------------------------- |
| Bold border (4px)          | Critical service / single point of failure  | Increase border width                                 |
| Glowing outline            | Currently selected / in-focus during review | Add second border with 50% opacity, 6px offset        |
| Grayed-out + strikethrough | Deprecated service                          | Fill #F5F5F5, text #9E9E9E, strikethrough on name     |
| Pulsing badge              | Active incident                             | Red badge with "INCIDENT" text                        |
| Dashed outline             | Planned / future service                    | Dashed border, fill #F5F5F5                           |
| Highlighted path           | Trace a specific request                    | Thick (4px) colored path overlaying normal connectors |

### Z-Order (Layering)

Maintain this z-order from back to front:

1. Board background (warm gray #F5F5F0)
2. Tier frame backgrounds (tinted rectangles)
3. Connector lines (below elements to avoid obscuring shapes)
4. Service nodes, database nodes, and other elements
5. Connector arrowheads and labels (above lines)
6. Sticky notes and annotations (topmost layer)
7. Legend and title block (fixed position, always visible)

---

## Badge and Tag System

### Status Badges

Small pill shapes attached to the top-right corner of service nodes:

| Status      | Badge Color      | Text    | Size    |
| ----------- | ---------------- | ------- | ------- |
| Healthy     | #2E7D32 (green)  | "LIVE"  | 60x24px |
| Degraded    | #E65100 (orange) | "WARN"  | 60x24px |
| Down        | #C62828 (red)    | "DOWN"  | 60x24px |
| Maintenance | #F9A825 (amber)  | "MAINT" | 70x24px |
| Deprecated  | #9E9E9E (gray)   | "DEPR"  | 60x24px |
| Beta        | #1565C0 (blue)   | "BETA"  | 60x24px |
| New         | #00897B (teal)   | "NEW"   | 50x24px |

### Technology Badges

Small pill shapes inside service nodes, bottom-right corner:

```
Size: 70-100px x 22px
Corner radius: 11px (fully rounded)
Fill: Technology color (see palette above)
Text: White, 11px, bold, centered
```

### Traffic/Load Badges

Circular badges showing relative load:

```
Size: 40x40px circle
Fill: Green (#2E7D32) for low, Amber (#F9A825) for medium, Red (#C62828) for high
Text: "L" / "M" / "H" centered, white, 14px bold
```

---

## Sticky Note Visual Standards

### Color Coding for Sticky Notes

| Purpose               | Sticky Color     | Text Color |
| --------------------- | ---------------- | ---------- |
| Performance metric    | Yellow (#FFF9C4) | #212121    |
| Technical decision    | Blue (#E3F2FD)   | #0D47A1    |
| Risk / warning        | Pink (#FCE4EC)   | #C62828    |
| TODO / action item    | Green (#E8F5E9)  | #2E7D32    |
| Question / discussion | Purple (#F3E5F5) | #6A1B9A    |
| Historical context    | Gray (#F5F5F5)   | #546E7A    |

### Sticky Note Sizing

| Content Type                     | Size      |
| -------------------------------- | --------- |
| Single metric (e.g., "3K req/s") | 200x100px |
| Short annotation (1-2 lines)     | 250x120px |
| Detailed note (3-5 lines)        | 300x180px |
| Extended context (paragraph)     | 350x250px |

### Sticky Note Placement Rules

1. Place sticky notes **adjacent to** the element they annotate, not overlapping it
2. Maximum 2 sticky notes per service node to prevent clutter
3. Cluster related sticky notes together with consistent spacing (20px gap)
4. For board-level annotations, use the dedicated notes zone at the board bottom

---

## Legend Design

Every technical architecture board requires a legend. The legend is a framed rectangle placed in the top-right corner.

### Legend Layout

```
┌─────────────────────────────────────┐
│  LEGEND                              │
│                                      │
│  Shapes:                             │
│  ┌───┐ Internal service              │
│  ╔═══╗ External service              │
│  (===) Database                      │
│  ┌╌╌╌┐ Message queue                 │
│  ◇    Decision point                 │
│                                      │
│  Connectors:                         │
│  ────▶  Sync (HTTP/gRPC)            │
│  - - ▶  Async (event/queue)         │
│  ····▶  Optional/degraded           │
│                                      │
│  Status:                             │
│  🟢 Healthy  🟡 Degraded  🔴 Down   │
│                                      │
│  Protocols:                          │
│  Blue = REST  Amber = Kafka          │
│  Purple = gRPC  Teal = WebSocket     │
└─────────────────────────────────────┘
```

### Legend Specifications

- **Size**: 450x500px (adjustable based on content)
- **Position**: Top-right corner, 50px from board edge
- **Background**: White (#FFFFFF)
- **Border**: 1px solid #90A4AE
- **Title**: "LEGEND" — 16px bold, #212121
- **Content text**: 12px regular, #546E7A

---

## Visual Anti-Patterns

### Do NOT:

1. **Rainbow boards** — Using more than 10 distinct colors creates chaos. Stick to the defined palette.
2. **Inconsistent shapes** — If databases are cylinders in one place, they must be cylinders everywhere.
3. **Tiny text** — Nothing below 10px. If you need that much detail, create a sub-board.
4. **Crossed connectors without differentiation** — If lines cross, they MUST be visually distinct.
5. **Decorative gradients** — Gradients add no information in architecture diagrams. Use flat fills.
6. **Drop shadows everywhere** — Subtle shadows on key elements only. Over-shadowing looks dated.
7. **Icon overload** — Use standard shapes. Custom icons require learning; shapes are universal.
8. **Unlabeled connectors** — Every line must have a protocol/purpose label.
9. **Orphaned elements** — Every element must have at least one connection. If it is standalone, question why it is on the board.
10. **Background images** — Never use background images on technical boards. They destroy readability.

---

## Responsive Visual Scaling

### Zoom Level Design

Design elements to be readable at multiple zoom levels:

| Zoom Level                | What Should Be Visible                                 |
| ------------------------- | ------------------------------------------------------ |
| 25% (full board overview) | Tier structure, major service clusters, flow direction |
| 50% (section level)       | Service names, connection types, tier labels           |
| 75% (working level)       | Service details, technology badges, key annotations    |
| 100% (detail level)       | All text, port numbers, metrics, full sticky notes     |

### Minimum Sizes for Zoom Readability

| Element           | Min Size (for 50% zoom readability) |
| ----------------- | ----------------------------------- |
| Service name text | 18px (appears as 9px at 50%)        |
| Connector label   | 14px (appears as 7px at 50%)        |
| Frame title       | 24px (appears as 12px at 50%)       |
| Badge text        | 11px (visible only at 75%+)         |

---

## Dark Mode Considerations

If the board may be viewed in dark mode or projected in dim environments, prepare an inverted palette:

| Element        | Light Mode       | Dark Mode                      |
| -------------- | ---------------- | ------------------------------ |
| Background     | #F5F5F0          | #1E1E1E                        |
| Text primary   | #212121          | #E0E0E0                        |
| Text secondary | #546E7A          | #90A4AE                        |
| Service fill   | #FFFFFF          | #2D2D2D                        |
| Service border | Tier color       | Tier color (brighter 20%)      |
| Tier tints     | Pastel (#E3F2FD) | Deep (#1A237E at 20% opacity)  |
| Connectors     | Standard colors  | Standard colors (brighter 15%) |

Note: Most Miro boards are viewed in light mode. Only prepare dark mode variants if specifically requested.

---

## Summary

The visual system for technical architecture boards serves one purpose: making invisible systems visible and comprehensible. Every color encodes meaning. Every font size establishes hierarchy. Every shape identifies a type. Every connector style describes a relationship. When the visual system is consistent, engineers stop thinking about the diagram and start thinking about the architecture — which is exactly the point.
