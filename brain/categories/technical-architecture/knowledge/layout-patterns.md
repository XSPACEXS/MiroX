# Technical Architecture — Layout Patterns

## Overview

Layout is the skeleton of a technical architecture board. Before a single label is written or a color is chosen, the spatial arrangement of elements determines whether the board will communicate or confuse. This guide covers the fundamental layout patterns used in technical architecture visualization, with precise spatial specifications for Miro board construction.

---

## Pattern 1: The Tiered Stack (Top-to-Bottom)

The most common and universally understood layout for system architecture. Layers stack vertically, mirroring the conceptual depth of a software system from client to data.

### When to Use

- Full system architecture overviews
- Request lifecycle diagrams
- Any board where "depth" is the primary narrative

### ASCII Diagram

```
┌─────────────────────────────────────────────────────────┐
│  TIER 0: CLIENTS & CDN                        y: 0-500 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌──────────┐  │
│  │ Web App │  │ Mobile  │  │ Admin   │  │ 3rd Party│  │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬─────┘  │
│       └──────────┬──┴───────────┘             │        │
├──────────────────┼────────────────────────────┼────────┤
│  TIER 1: GATEWAY & LOAD BALANCING    y: 600-1100       │
│              ┌───┴───────────────────┐        │        │
│              │  API Gateway / ALB    │◄───────┘        │
│              │  Rate Limiter / Auth  │                  │
│              └───┬───────────────────┘                  │
│                  │                                      │
├──────────────────┼──────────────────────────────────────┤
│  TIER 2: APPLICATION SERVICES          y: 1200-2400    │
│  ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐   │
│  │ Auth  │ │ User  │ │ Order │ │ Pymt  │ │ Notif │   │
│  │Service│ │Service│ │Service│ │Service│ │Service│   │
│  └───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘ └───┬───┘   │
│      │         │         │         │         │        │
├──────┼─────────┼─────────┼─────────┼─────────┼────────┤
│  TIER 3: MIDDLEWARE & INFRASTRUCTURE   y: 2500-3200    │
│      │    ┌────┴─────┐   │    ┌────┴─────┐   │        │
│      │    │  Cache    │   │    │  Message │   │        │
│      │    │  (Redis)  │   │    │  Queue   │   │        │
│      │    └──────────┘   │    └──────────┘   │        │
├──────┼───────────────────┼───────────────────┼────────┤
│  TIER 4: DATA PERSISTENCE              y: 3300-4000    │
│  ┌────┴────┐ ┌─────────┐ ┌────┴────┐ ┌──────┴──────┐  │
│  │PostgreSQL│ │ MongoDB │ │  S3     │ │ Elasticsearch│  │
│  └─────────┘ └─────────┘ └─────────┘ └─────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Spatial Specifications

| Tier           | Y-Start | Y-End | Height | Purpose                               |
| -------------- | ------- | ----- | ------ | ------------------------------------- |
| 0 - Clients    | 50      | 550   | 500px  | Client applications, CDN              |
| 1 - Gateway    | 650     | 1100  | 450px  | Load balancers, API gateway, auth     |
| 2 - Services   | 1200    | 2400  | 1200px | Core application microservices        |
| 3 - Middleware | 2500    | 3200  | 700px  | Cache, queues, search engines         |
| 4 - Data       | 3300    | 4000  | 700px  | Databases, object storage, data lakes |

**Spacing rules**:

- Minimum 100px gap between tiers (visual breathing room)
- Services within a tier: 150px horizontal spacing
- Each service node: 400-600px wide, 200-350px tall
- Full board width: 4800-5200px
- Full board height: 3800-4200px

### Tier Background Colors

Apply subtle background tints to each tier's frame to reinforce the layered structure:

| Tier       | Background Tint        |
| ---------- | ---------------------- |
| Clients    | #E3F2FD (light blue)   |
| Gateway    | #E0F2F1 (light teal)   |
| Services   | #E8EAF6 (light indigo) |
| Middleware | #FFF8E1 (light amber)  |
| Data       | #FBE9E7 (light orange) |

---

## Pattern 2: The Domain Grid (Service Mesh)

Arranges services by domain/team ownership in a grid format. Best for microservice architectures where team boundaries matter more than request depth.

### When to Use

- Domain-driven design visualization
- Team ownership maps
- Service dependency analysis

### ASCII Diagram

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  USER DOMAIN     │  │  ORDER DOMAIN    │  │  PAYMENT DOMAIN  │
│  ┌──────────┐    │  │  ┌──────────┐    │  │  ┌──────────┐    │
│  │ User API │    │  │  │ Order API│    │  │  │Payment API│   │
│  └────┬─────┘    │  │  └────┬─────┘    │  │  └────┬─────┘    │
│  ┌────┴─────┐    │  │  ┌────┴─────┐    │  │  ┌────┴─────┐    │
│  │ Profile  │    │  │  │ Cart Svc │    │  │  │ Billing  │    │
│  │ Service  │    │  │  └──────────┘    │  │  │ Service  │    │
│  └────┬─────┘    │  │  ┌──────────┐    │  │  └────┬─────┘    │
│  ┌────┴─────┐    │  │  │Inventory │    │  │  ┌────┴─────┐    │
│  │ User DB  │    │  │  │ Service  │    │  │  │ Ledger   │    │
│  │(Postgres)│    │  │  └────┬─────┘    │  │  │(Postgres)│    │
│  └──────────┘    │  │  ┌────┴─────┐    │  │  └──────────┘    │
│                  │  │  │ Order DB │    │  │                  │
│  Team: Identity  │  │  │(Postgres)│    │  │  Team: Payments  │
└──────────────────┘  │  └──────────┘    │  └──────────────────┘
                      │  Team: Commerce  │
                      └──────────────────┘
      ▲                       ▲                      ▲
      │                       │                      │
      └──────── Shared: [Event Bus (Kafka)] ─────────┘
```

### Spatial Specifications

| Element       | Width                    | Height            | Spacing                   |
| ------------- | ------------------------ | ----------------- | ------------------------- |
| Domain column | 1200-1500px              | Full board height | 200px between columns     |
| Service node  | 400x200px                | —                 | 100px vertical spacing    |
| Database node | 400x180px                | —                 | Anchored at column bottom |
| Event bus     | Full width x 120px       | —                 | Below all columns         |
| Domain header | Full column width x 80px | —                 | Top of column             |

**Grid layout formula** for N domains:

- Column width = (Board width - (N+1)\*200) / N
- For 3 domains on 5000px board: (5000 - 800) / 3 = 1400px per column
- For 4 domains on 5000px board: (5000 - 1000) / 4 = 1000px per column

---

## Pattern 3: The Pipeline Flow (Left-to-Right)

Horizontal flow for data processing pipelines, ETL workflows, CI/CD pipelines, and event-driven architectures.

### When to Use

- Data pipelines (ETL/ELT)
- CI/CD deployment flows
- Event processing architectures
- Workflow/state machine visualization

### ASCII Diagram

```
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ INGEST  │───▶│TRANSFORM│───▶│ ENRICH  │───▶│  STORE  │───▶│ SERVE   │
│         │    │         │    │         │    │         │    │         │
│ Kafka   │    │ Spark   │    │ ML Model│    │ Data    │    │ API /   │
│ Connect │    │ Jobs    │    │ Pipeline│    │ Lake    │    │ BI Tool │
│         │    │         │    │         │    │ (S3)    │    │         │
│ Sources:│    │ Clean,  │    │ Feature │    │ Parquet │    │ Tableau │
│ - MySQL │    │ Dedupe, │    │ Scoring │    │ Format  │    │ Looker  │
│ - S3    │    │ Flatten │    │ Geo     │    │ + Delta │    │ Custom  │
│ - API   │    │         │    │ Lookup  │    │ Lake    │    │ Dash    │
└─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘
     │              │              │              │              │
     ▼              ▼              ▼              ▼              ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    MONITORING & OBSERVABILITY                       │
│  Metrics: Datadog  │  Logs: ELK Stack  │  Alerts: PagerDuty       │
└─────────────────────────────────────────────────────────────────────┘
```

### Spatial Specifications

| Element            | Width            | Height    | Position                        |
| ------------------ | ---------------- | --------- | ------------------------------- |
| Pipeline stage     | 800-1000px       | 600-800px | Evenly distributed horizontally |
| Stage connector    | Arrow, 100px gap | —         | Between stages                  |
| Monitoring bar     | Full width       | 250px     | Bottom of board                 |
| Stage number/label | Above stage box  | 40px font | Centered above each stage       |

**Stage spacing formula** for N stages:

- Stage width = (Board width - (N+1)\*100) / N
- For 5 stages on 5000px: (5000 - 600) / 5 = 880px per stage

**Connector rules**:

- Main flow: Thick (4px) solid arrows, left-to-right
- Error/retry: Dashed lines curving back to previous stage
- Dead letter queue: Red dashed line to a separate element below

---

## Pattern 4: The Hub and Spoke (Centralized Architecture)

Central component (API gateway, event bus, orchestrator) with dependent services radiating outward.

### When to Use

- API gateway architectures
- Event-driven systems with central broker
- Monolith-to-microservices migration (monolith at center)
- Service mesh visualization

### ASCII Diagram

```
                    ┌──────────┐
                    │  Web UI  │
                    └────┬─────┘
                         │
        ┌────────┐  ┌────┴─────┐  ┌────────┐
        │ Mobile │──│          │──│ Partner│
        │  App   │  │   API    │  │  API   │
        └────────┘  │ GATEWAY  │  └────────┘
                    │  (Kong)  │
        ┌────────┐  │          │  ┌────────┐
        │ Auth   │──│          │──│ Search │
        │Service │  └────┬─────┘  │Service │
        └────────┘       │        └────────┘
                    ┌────┴─────┐
        ┌────────┐  │  Event   │  ┌────────┐
        │ User   │──│   Bus    │──│ Order  │
        │Service │  │ (Kafka)  │  │Service │
        └────────┘  └────┬─────┘  └────────┘
                         │
                    ┌────┴─────┐
                    │ Payment  │
                    │ Service  │
                    └──────────┘
```

### Spatial Specifications

| Element         | Size      | Position Rule                               |
| --------------- | --------- | ------------------------------------------- |
| Central hub     | 600x400px | Exact center of board                       |
| Spoke services  | 350x200px | Radial distance 600-800px from center       |
| Connector lines | —         | Straight lines from hub to each spoke       |
| Spoke labels    | —         | Outside edge of spoke, facing away from hub |

**Radial placement formula**:

- For N spokes, angle = 360/N degrees between each
- Spoke center position: (cx + r*cos(angle), cy + r*sin(angle))
- Typical radius r = 700px from center hub
- For 8 spokes: place at 0, 45, 90, 135, 180, 225, 270, 315 degrees

---

## Pattern 5: The Network Topology (Infrastructure View)

Shows cloud regions, availability zones, VPCs, subnets, and the network path between them. Essential for infrastructure overview boards.

### When to Use

- Cloud infrastructure architecture
- Network security and segmentation
- Multi-region deployment visualization
- Disaster recovery planning

### ASCII Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│  CLOUD PROVIDER: AWS                                                │
│                                                                     │
│  ┌─────────────────────────────────┐  ┌────────────────────────────┐│
│  │  REGION: us-east-1              │  │  REGION: eu-west-1         ││
│  │  ┌───────────────────────────┐  │  │  ┌──────────────────────┐  ││
│  │  │  VPC: 10.0.0.0/16        │  │  │  │  VPC: 10.1.0.0/16   │  ││
│  │  │  ┌─────────┐┌─────────┐  │  │  │  │  ┌──────────────┐   │  ││
│  │  │  │Public   ││Private  │  │  │  │  │  │ Private      │   │  ││
│  │  │  │Subnet   ││Subnet   │  │  │  │  │  │ Subnet       │   │  ││
│  │  │  │10.0.1.0 ││10.0.2.0 │  │  │  │  │  │ 10.1.1.0     │   │  ││
│  │  │  │         ││         │  │  │  │  │  │              │   │  ││
│  │  │  │ [ALB]   ││ [EC2]   │  │  │  │  │  │ [EC2] [RDS]  │   │  ││
│  │  │  │ [NAT]   ││ [RDS]   │  │  │  │  │  │              │   │  ││
│  │  │  └─────────┘└─────────┘  │  │  │  │  └──────────────┘   │  ││
│  │  └───────────────────────────┘  │  │  └──────────────────────┘  ││
│  └─────────────────────────────────┘  └────────────────────────────┘│
│                         ▲                          ▲                │
│                         └──── VPC Peering ─────────┘                │
└─────────────────────────────────────────────────────────────────────┘
              │                                       │
         ┌────┴────┐                            ┌─────┴────┐
         │  Users  │                            │  CDN     │
         │(Internet)│                           │(CloudFront)│
         └─────────┘                            └──────────┘
```

### Spatial Specifications

| Element              | Size                               | Notes                           |
| -------------------- | ---------------------------------- | ------------------------------- |
| Cloud provider frame | Full board                         | Outermost container             |
| Region frame         | (Board width - 300) / 2 per region | Side by side for multi-region   |
| VPC frame            | Region width - 200                 | Nested inside region            |
| Subnet frame         | (VPC width - 150) / 2              | Side by side for public/private |
| Compute instance     | 200x120px                          | Inside subnet                   |
| Database instance    | 200x120px (cylinder shape)         | Inside private subnet           |
| Load balancer        | 250x80px                           | Inside public subnet            |

**Nesting depth rule**: Maximum 4 levels of nesting (provider > region > VPC > subnet). Beyond that, use separate linked boards.

---

## Pattern 6: The Sequence Lane (Swimlane)

Horizontal lanes per service/actor with vertical time progression showing request flows.

### When to Use

- Request lifecycle tracing
- Authentication flows
- Checkout/payment sequences
- Error handling and retry flows

### ASCII Diagram

```
         Client          Gateway         Auth Svc        User Svc        DB
           │                │               │               │             │
    ──────►│ POST /login    │               │               │             │
           │───────────────►│               │               │             │
           │                │──validate──►  │               │             │
           │                │               │──lookup───────►             │
           │                │               │               │──SELECT────►│
           │                │               │               │◄────rows────│
           │                │               │◄──user obj────│             │
           │                │◄──JWT token───│               │             │
           │◄──200 + token──│               │               │             │
           │                │               │               │             │
    ──────►│ GET /profile   │               │               │             │
           │───────────────►│               │               │             │
           │                │──verify JWT──►│               │             │
           │                │◄──valid───────│               │             │
           │                │──get user────────────────────►│             │
           │                │               │               │──SELECT────►│
           │                │◄──────────────────user data───│◄────rows────│
           │◄──200 + data───│               │               │             │
```

### Spatial Specifications

| Element                   | Size                           | Notes                               |
| ------------------------- | ------------------------------ | ----------------------------------- |
| Lane header               | 300x80px                       | Fixed at top, one per actor/service |
| Lane width                | 300px                          | Per actor                           |
| Lane separator            | 1px dashed vertical line       | Full board height                   |
| Message arrow             | Horizontal, spanning lanes     | Label above arrow                   |
| Time gap between messages | 80-120px vertical              | Consistent spacing                  |
| Self-call (loop)          | Curved arrow back to same lane | 150px height                        |

**Lane spacing formula**:

- N actors: Board width = N \* 300 + 200 (margins)
- For 5 actors: 1700px width minimum

---

## Pattern 7: The C4 Model Layout

Based on Simon Brown's C4 architecture model: Context, Containers, Components, Code. Each level zooms deeper.

### When to Use

- Documenting architecture at multiple abstraction levels
- Enterprise architecture with many systems
- Communicating with mixed audiences (executives + engineers)

### ASCII Diagram — Level 1 (Context)

```
┌──────────────────────────────────────────────┐
│              SYSTEM CONTEXT                   │
│                                              │
│   [Customer]          [Admin]                │
│       │                  │                   │
│       ▼                  ▼                   │
│  ┌───────────────────────────┐               │
│  │    E-Commerce System      │               │
│  │    <<Software System>>    │               │
│  └───────────┬───────────────┘               │
│              │                               │
│    ┌─────────┼─────────┐                     │
│    ▼         ▼         ▼                     │
│ [Payment  [Email    [Shipping               │
│  Gateway]  Service]  Provider]               │
│                                              │
│ <<External System>>  <<External System>>     │
└──────────────────────────────────────────────┘
```

### ASCII Diagram — Level 2 (Container)

```
┌──────────────────────────────────────────────────────────┐
│              CONTAINER DIAGRAM                            │
│                                                          │
│  ┌──────────┐  ┌──────────┐                              │
│  │ Web App  │  │ Mobile   │                              │
│  │ (React)  │  │(Flutter) │                              │
│  └────┬─────┘  └────┬─────┘                              │
│       └──────┬───────┘                                   │
│              ▼                                           │
│  ┌───────────────────┐  ┌────────────┐  ┌────────────┐  │
│  │  API Application  │  │  Worker    │  │  Admin     │  │
│  │  (Node.js)        │──│  Service   │  │  Portal    │  │
│  └───────┬───────────┘  │  (Python)  │  │  (Next.js) │  │
│          │              └─────┬──────┘  └────────────┘  │
│          ▼                    ▼                          │
│  ┌───────────────┐  ┌────────────────┐                  │
│  │  PostgreSQL   │  │  Redis Cache   │                  │
│  │  Database     │  │                │                  │
│  └───────────────┘  └────────────────┘                  │
└──────────────────────────────────────────────────────────┘
```

### Spatial Specifications for C4

| Level           | Board Size  | Element Size                        | Notes                |
| --------------- | ----------- | ----------------------------------- | -------------------- |
| L1 Context      | 3000x2500px | System: 600x300px, Actor: 200x200px | Minimal detail       |
| L2 Container    | 4000x3000px | Container: 500x250px                | Technology labels    |
| L3 Component    | 5000x4000px | Component: 400x200px                | Interface details    |
| Drill-down link | —           | Place on container box              | Links L1 to L2 to L3 |

---

## Cross-Cutting Layout Concerns

### Legend Placement

Every architecture board needs a legend. Placement options:

```
Option A: Top-right corner (preferred)          Option B: Bottom-left
┌────────────────────────────┐                  ┌────────────────────────┐
│                   ┌──────┐ │                  │                        │
│                   │LEGEND│ │                  │                        │
│                   └──────┘ │                  │  ┌──────┐              │
│     [Main Board]           │                  │  │LEGEND│  [Board]    │
│                            │                  │  └──────┘              │
└────────────────────────────┘                  └────────────────────────┘
```

**Legend size**: 400-600px wide, 300-500px tall
**Legend contents**: Connector types, color meanings, shape meanings, status indicators

### Title Block Placement

Always top-left. Contains:

- Board title (28-36px font)
- Version number
- Last updated date
- Owner/team
- Status (draft/review/approved)

**Title block size**: 600x200px minimum

### Annotation Zones

Reserve dedicated space for annotations:

```
┌──────────────────────────────────────────┐
│ [Title]                         [Legend] │
│                                         │
│              [Main Board]               │
│                                         │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│ [Notes Zone: Tech Debt, TODOs, Links]   │
└─────────────────────────────────────────┘
```

**Notes zone height**: 300-400px at bottom of board

---

## Element Shape Standards

Maintain consistent shape conventions across all technical architecture boards:

| Element Type       | Shape                                  | Standard Size | Example        |
| ------------------ | -------------------------------------- | ------------- | -------------- |
| Microservice       | Rounded rectangle                      | 400x200px     | "User Service" |
| Database           | Cylinder                               | 300x180px     | "PostgreSQL"   |
| Message queue      | Parallelogram or rectangle with zigzag | 350x150px     | "Kafka"        |
| Cache              | Rectangle with dotted border           | 300x150px     | "Redis"        |
| Load balancer      | Hexagon or trapezoid                   | 300x120px     | "AWS ALB"      |
| External service   | Rectangle with double border           | 350x180px     | "Stripe API"   |
| Client application | Rounded rectangle (distinct color)     | 350x180px     | "React SPA"    |
| CDN                | Cloud shape                            | 250x150px     | "CloudFront"   |
| Container/Pod      | Rectangle with dashed border           | 500x400px     | "K8s Pod"      |
| Decision point     | Diamond                                | 150x150px     | "Auth Check"   |
| User/Actor         | Stick figure or circle                 | 120x120px     | "Admin User"   |

---

## Responsive Layout Strategies

### Small System (5-10 services)

- Use single-board tiered stack
- All services visible without scrolling at 100% zoom
- Board size: 3000x2500px

### Medium System (10-25 services)

- Use tiered stack with horizontal sub-grouping within tiers
- Board size: 5000x4000px
- Some scrolling required at 100% zoom

### Large System (25-50 services)

- Use domain grid pattern with collapsed detail
- Each domain shows only its API surface and primary database
- Drill-down links to domain-specific boards
- Board size: 6000x5000px

### Enterprise System (50+ services)

- Use C4 Level 1 as master board
- Each system bubble links to its own architecture board
- Separate boards for cross-cutting concerns (networking, monitoring, CI/CD)
- Master board size: 4000x3000px (deliberately compact)

---

## Connector Routing Guidelines

### Rule 1: Minimize Crossings

Rearrange elements before accepting a crossing. If crossings are unavoidable, use one of these strategies:

- **Bridge**: Small arc where one line crosses another
- **Color differentiation**: Crossing lines use different colors
- **Z-order**: One line appears to pass "behind" a small gap

### Rule 2: Orthogonal Routing

Use right-angle (Manhattan-style) routing for connector lines, not diagonal lines. This creates cleaner, more professional diagrams.

```
Good:                       Bad:
  A ──────┐                   A
          │                    \
          └────── B              \──── B
```

### Rule 3: Consistent Direction

All primary flow arrows should go in the same direction (top-to-bottom or left-to-right). Reverse arrows (error flows, callbacks) should be visually distinct (dashed, different color).

### Rule 4: Label Every Connector

Every line gets a label. At minimum: protocol. Ideally: protocol + key detail.

```
  ────── REST/HTTPS ──────▶
  - - - Kafka: order.created - - -▶
  ══════ gRPC/mTLS ══════▶
```

---

## Alignment and Grid System

### Base Grid

Use an invisible 50px grid for aligning all elements. This ensures:

- Consistent spacing between elements
- Clean connector routing
- Professional appearance

### Alignment Rules

1. All elements in a tier share the same Y-coordinate for their top edge
2. All elements in a column share the same X-coordinate for their left edge
3. Connectors attach to element edges at midpoints (center of top/bottom/left/right edge)
4. Labels are centered within their elements
5. Frame titles are consistently positioned (top-left of frame, 20px padding)

### Whitespace Rules

- Minimum 50px between any two elements
- Minimum 100px between a frame boundary and its innermost element
- Minimum 150px between major tier frames
- Maximum 30% of board area should be whitespace (density balance)

---

## Summary

The right layout pattern depends on the story the board tells. Choose tiered stacks for depth, domain grids for ownership, pipelines for flow, hub-and-spoke for centralization, network topology for infrastructure, swimlanes for sequences, and C4 for multi-level abstraction. Always maintain consistent spacing, shape conventions, and connector routing to create boards that are not just accurate, but instantly readable.
