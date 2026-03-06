# Technical Architecture — Build Process

## Overview

Building a technical architecture board is a structured, multi-phase process. Unlike creative boards where you might start with inspiration, architecture boards start with inventory — cataloging what exists, what connects to what, and what the system actually does. This guide walks through the complete build workflow, from initial requirements gathering to final review.

---

## Phase 1: Requirements & Scope (Before Touching Miro)

### Step 1.1: Identify the Board Type

Determine which template to use based on the user's request:

| User Says                                                    | Board Type                  | Template                |
| ------------------------------------------------------------ | --------------------------- | ----------------------- |
| "System architecture," "service map," "how our system works" | System Architecture Diagram | system-diagram          |
| "API documentation," "endpoint map," "API reference"         | API Endpoint Map            | api-map                 |
| "Database diagram," "ERD," "data model," "schema"            | Database Schema Diagram     | database-schema         |
| "Infrastructure," "cloud setup," "deployment," "DevOps"      | Infrastructure Overview     | infrastructure-overview |

### Step 1.2: Gather System Information

Extract from the user's description or ask for:

**For System Architecture**:

- What are the main services/components?
- What databases are used?
- What message queues or event systems exist?
- What external services are integrated?
- What is the technology stack (languages, frameworks)?
- What is the expected traffic volume?
- How many engineering teams work on this?

**For API Map**:

- What are the main API resources/domains?
- What authentication methods are used?
- What is the base URL and versioning strategy?
- How many endpoints (approximate)?
- Are there webhooks or real-time features?

**For Database Schema**:

- What are the main entities?
- What database engine(s) are used?
- Approximate data volume?
- Key relationships between entities?
- Are there any complex queries to optimize for?

**For Infrastructure Overview**:

- Which cloud provider(s)?
- How many environments (dev/staging/prod)?
- Multi-region or single region?
- Container orchestration (ECS, EKS, bare EC2)?
- CI/CD tooling?
- Monitoring stack?

### Step 1.3: Determine Complexity Level

| Complexity | Service Count  | Board Size   | Build Time            |
| ---------- | -------------- | ------------ | --------------------- |
| Simple     | 3-5 services   | 3000x2500px  | 15-20 min             |
| Medium     | 6-12 services  | 4000x3200px  | 25-35 min             |
| Advanced   | 13-25 services | 5000x4000px  | 40-60 min             |
| Enterprise | 25+ services   | 6000x5000px+ | 60+ min (multi-board) |

---

## Phase 2: Structure Planning

### Step 2.1: Choose Layout Pattern

Based on the board type and system characteristics, select a layout pattern:

| Board Type          | Default Pattern                   | Alternative                           |
| ------------------- | --------------------------------- | ------------------------------------- |
| System Architecture | Tiered Stack (top-to-bottom)      | Domain Grid (for DDD systems)         |
| API Map             | Column Grid (by resource)         | Tiered (auth on top, resources below) |
| Database Schema     | Entity-Relationship (clustered)   | Domain-grouped (for large schemas)    |
| Infrastructure      | Network Topology (nested regions) | Tiered (compute/network/storage)      |

### Step 2.2: Define Tiers/Sections

Map the system's components to spatial sections:

**Example for a Tiered System Architecture**:

```
Tier 0 (y: 0-500):     Client Applications
Tier 1 (y: 600-1050):  API Gateway & Auth
Tier 2 (y: 1150-2350): Core Services
Tier 3 (y: 2450-3050): Middleware (Cache, Queue, Search)
Tier 4 (y: 3150-3900): Data Layer (Databases, Storage)
```

### Step 2.3: Inventory All Elements

Create a complete list before building:

```
Services: [Auth, User, Order, Payment, Notification, Search]
Databases: [PostgreSQL (users, orders), MongoDB (products), Redis (cache)]
Queues: [Kafka (events), SQS (email queue)]
External: [Stripe, SendGrid, CloudFront, S3]
Clients: [Web App, Mobile App, Admin Dashboard]
Infrastructure: [ALB, API Gateway, NAT Gateway]
```

### Step 2.4: Map Connections

Document every connection before drawing:

```
Web App -> ALB: HTTPS
ALB -> API Gateway: HTTP (internal)
API Gateway -> Auth Service: REST/HTTPS (every request)
API Gateway -> User Service: REST/HTTPS
API Gateway -> Order Service: REST/HTTPS
Order Service -> Payment Service: REST/HTTPS (sync)
Order Service -> Kafka: order.created (async)
Kafka -> Notification Service: order.created (consumer)
Notification Service -> SendGrid: REST/HTTPS
User Service -> PostgreSQL: TCP/5432
Order Service -> PostgreSQL: TCP/5432
Payment Service -> Stripe: REST/HTTPS
Search Service -> Elasticsearch: TCP/9200
All Services -> Redis: TCP/6379 (cache)
```

---

## Phase 3: Board Construction (In Miro)

### Step 3.1: Set Up the Canvas

1. Create the board with the correct dimensions
2. Set the background color (#F5F5F0 warm gray)
3. Create the title block in the top-left corner:
   - Board title (36px bold, navy #0D47A1)
   - Version: "v1.0"
   - Date: current date
   - Status: "Draft" or "Review"
   - Owner team name

### Step 3.2: Build Tier Frames

Working top-to-bottom (for tiered stack):

1. Create each tier as a Miro frame
2. Set the frame background to the tier's tint color
3. Add the tier header text (28px bold)
4. Position frames with 100-150px gaps between them

**Construction order**:

```
1. Tier 0 frame (Clients)       → position, size, background, header
2. Tier 1 frame (Gateway)       → position, size, background, header
3. Tier 2 frame (Services)      → position, size, background, header
4. Tier 3 frame (Middleware)     → position, size, background, header
5. Tier 4 frame (Data)          → position, size, background, header
```

### Step 3.3: Place Elements Within Frames

For each tier, place elements left-to-right:

**Service Node Construction** (repeat for each service):

1. Create rounded rectangle (500x280px, white fill, 2px border in tier color)
2. Add service name text (18px bold, centered at top)
3. Add 3-5 responsibility bullets (14px regular, left-aligned)
4. Add technology badge (pill shape, bottom-right, tech-specific color)
5. Add port number text (12px monospace, slate, bottom-left)
6. Add team label (12px italic, slate, below service node)

**Database Node Construction**:

1. Create cylinder shape (350x200px, peach fill #FBE9E7, 2px border #E64A19)
2. Add database name (16px bold, centered)
3. Add engine name and version (14px, centered)
4. Add size/stats annotation (12px, #546E7A)

**External Service Construction**:

1. Create rectangle with double border (400x180px, mint fill #E8F5E9, 3px double border #2E7D32)
2. Add service name (16px bold)
3. Add integration detail (14px)

### Step 3.4: Draw Connectors

Draw connectors in order of importance:

**Pass 1 — Primary request flow** (client to database):

1. Client -> Gateway (thick solid line, blue #1565C0)
2. Gateway -> Each core service (solid line, blue #1565C0)
3. Core services -> Databases (solid line, blue #1565C0)
4. Label each with protocol

**Pass 2 — Async communication**: 5. Services -> Message queues (dashed line, amber #F9A825) 6. Message queues -> Consumer services (dashed line, amber #F9A825) 7. Label each with topic name

**Pass 3 — Supporting connections**: 8. Services -> Cache (dotted line, purple #7B1FA2) 9. Services -> External APIs (solid line, green #2E7D32) 10. Services -> Search engines (solid line, teal #00897B)

**Pass 4 — Monitoring (optional)**: 11. All services -> Monitoring/logging (thin lines, red #C62828)

### Step 3.5: Add Annotations

1. **Performance sticky notes** (yellow #FFF9C4):
   - Place 1-2 on client tier (DAU, peak traffic)
   - Place 1-2 on service tier (latency, throughput)
   - Place 1 on data tier (database size, query performance)

2. **Risk sticky notes** (pink #FCE4EC):
   - Identify single points of failure
   - Note missing redundancy
   - Flag technical debt

3. **Context sticky notes** (blue #E3F2FD):
   - Technology decision rationale
   - Historical context
   - Team ownership notes

### Step 3.6: Build the Legend

Create the legend frame in the top-right corner:

1. Frame: 450x500px, white fill, 1px border #90A4AE
2. Title: "LEGEND" (16px bold)
3. Shape key: List each shape type with a small example
4. Connector key: List each line style with meaning
5. Color key: List each color's meaning
6. Status key: List badge meanings

---

## Phase 4: Review & Refinement

### Step 4.1: Visual Scan

Zoom out to 25% and verify:

- [ ] Tier structure is clearly visible
- [ ] Flow direction is apparent (top-to-bottom)
- [ ] No element clusters are too dense
- [ ] Whitespace is balanced

### Step 4.2: Content Verification

Zoom in to 100% and verify per element:

- [ ] Every service has name + tech stack + responsibilities
- [ ] Every database has engine + size
- [ ] Every connector has a protocol label
- [ ] Every external service has integration details
- [ ] Port numbers are consistent and realistic
- [ ] Team ownership is assigned

### Step 4.3: Flow Tracing

Trace at least 3 user journeys through the board:

**Journey 1: User Login**
Client -> ALB -> Gateway -> Auth Service -> User DB -> (JWT issued) -> Client

**Journey 2: Place Order**
Client -> ALB -> Gateway -> Order Service -> Payment Service -> Stripe -> Order DB -> Kafka -> Notification Service -> SendGrid

**Journey 3: Search Products**
Client -> ALB -> Gateway -> Search Service -> Elasticsearch -> (results) -> Client

If any journey cannot be traced end-to-end, the board has a gap.

### Step 4.4: Connector Cleanup

1. Check for crossing lines — rearrange elements if possible
2. Verify all lines use orthogonal (right-angle) routing
3. Ensure no connector labels overlap
4. Verify arrow directions are correct
5. Check that sync vs. async distinction is visually clear

### Step 4.5: Final Polishing

1. Align all elements to the grid
2. Verify consistent spacing between elements
3. Check font sizes are consistent per hierarchy level
4. Ensure all sticky notes are adjacent to (not overlapping) their target elements
5. Add version number and date to the title block
6. Set status to "Review" or "Approved"

---

## Phase 5: Delivery

### Step 5.1: Board Metadata

Ensure the board has:

- Clear title visible at all zoom levels
- Version number (start at v1.0)
- Creation date
- Last updated date
- Author/owner
- Status indicator

### Step 5.2: Presentation Preparation

If the board will be presented:

1. Create a navigation path using Miro frames (for frame-by-frame presentation)
2. Order frames: Title -> Overview (zoomed out) -> Tier 0 -> Tier 1 -> ... -> Notes
3. Add speaker notes as hidden sticky notes or in a separate notes frame

### Step 5.3: Export Options

- **For documentation**: Export as PNG at 2x resolution
- **For embedding**: Use Miro embed link
- **For versioning**: Export as JSON backup
- **For offline**: Export as PDF with multiple zoom levels

---

## Build Time Estimates

| Board Type              | Simple | Medium | Advanced |
| ----------------------- | ------ | ------ | -------- |
| System Architecture     | 20 min | 35 min | 55 min   |
| API Endpoint Map        | 15 min | 30 min | 50 min   |
| Database Schema         | 15 min | 30 min | 45 min   |
| Infrastructure Overview | 20 min | 40 min | 60 min   |

These estimates assume all system information is available upfront. Add 50% if information needs to be discovered during the build.

---

## Common Build Mistakes

1. **Starting with connectors**: Always place all elements first, THEN draw connectors. Moving connected elements breaks line routing.

2. **Inconsistent service node sizes**: All service nodes in the same tier should be the same size. Use Miro's distribute/align tools.

3. **Forgetting the legend**: Without a legend, viewers cannot decode the visual language. Build it alongside the board, not as an afterthought.

4. **Over-annotating**: More than 2 sticky notes per service node creates visual noise. Consolidate or move details to a notes zone.

5. **Ignoring whitespace**: Dense boards are unreadable. If elements are too crowded, increase the board size rather than shrinking elements.

6. **Missing async indicators**: If all lines look the same, the viewer cannot distinguish sync from async communication — a critical architectural distinction.

7. **No performance context**: A board without metrics is a static inventory. Add real or estimated performance numbers to make it useful for capacity planning.

8. **Inconsistent depth**: If one service has 5 bullets of detail and another has just a name, the board feels incomplete. Maintain consistent depth across all elements.

---

## Summary

The build process for technical architecture boards follows a clear sequence: gather information, plan the structure, construct the canvas, place elements, draw connectors, annotate, and review. Rushing through any phase creates boards that look professional but communicate poorly. Take the time to inventory every element and connection before placing the first shape, and the board will come together cleanly and completely.
