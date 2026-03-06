# Technical Architecture — Design Philosophy

## The Core Purpose

Technical architecture boards exist at the intersection of engineering precision and visual communication. They translate invisible complexity — distributed systems, network topologies, data flows, deployment pipelines — into spatial maps that the human mind can navigate in seconds. A well-crafted architecture board does not merely document a system; it reveals the system's soul: its boundaries, its tensions, its trade-offs, and its evolutionary path.

The fundamental philosophy is **clarity through structured abstraction**. Every distributed system is infinitely complex at the lowest level. The architecture board's job is to present the _right_ level of abstraction for the _right_ audience at the _right_ moment. A CTO reviewing strategy needs different detail than a backend engineer debugging a latency spike. The board must serve both.

---

## Why Architecture Boards Matter

### The Problem They Solve

Software systems are invisible. You cannot walk through a microservices mesh the way you walk through a building. Yet engineering teams make daily decisions based on their mental model of the system — routing a request, adding an index, choosing where to deploy a new service. When mental models diverge across a team, chaos follows: duplicated services, inconsistent data flows, conflicting assumptions about ownership.

Architecture boards create a **shared spatial model** that:

1. **Aligns understanding** — Every engineer, PM, and stakeholder sees the same picture
2. **Reveals gaps** — Empty spaces on the board expose missing services, unmonitored paths, single points of failure
3. **Accelerates onboarding** — A new engineer can comprehend the system in 20 minutes instead of 20 days
4. **Enables planning** — You can draw the future state alongside the current state and see the migration path
5. **Facilitates incident response** — During outages, the board becomes a war map for tracing failures

### What Makes Them Different from Code Documentation

Code documentation is linear — it reads top to bottom. Architecture boards are spatial — they show relationships, proximity, and flow simultaneously. A diagram communicates topology in a way that 10,000 words of README cannot. The board leverages the brain's visual processing system, which operates at a bandwidth far exceeding textual comprehension.

---

## Foundational Design Principles

### Principle 1: Layered Abstraction (The Tiered Stack)

Every system has natural horizontal tiers: client, gateway, application logic, middleware/infrastructure, data persistence, external integrations. The board must respect these tiers because engineers think in terms of "which layer am I working in?"

**Rule**: Arrange elements top-to-bottom or left-to-right following the request lifecycle. The user/client is always at the top or left edge. Data storage is at the bottom or right edge. This mirrors how engineers trace a request through the system.

**Anti-pattern**: Scattering database nodes among application services. This destroys the reader's ability to quickly identify "where does data live?"

### Principle 2: Explicit Boundaries

In distributed systems, the most important information is often _between_ services — the boundaries, contracts, and protocols. The board must make boundaries visually prominent:

- **Network boundaries** (VPC, subnet, public/private) should be visible containers
- **Service boundaries** should use distinct shapes or colors per domain
- **Data ownership boundaries** should be crystal clear — which service owns which database?
- **Trust boundaries** — where does authentication happen? Where does encryption terminate?

**Rule**: If two components communicate across a network, there must be a visible boundary between them. Never make it look like two services share the same process when they do not.

### Principle 3: Flow Over Static Structure

An architecture board that only shows boxes and labels is a glorified list. The _flows_ — request paths, data pipelines, event propagation, deployment sequences — are what bring the board to life.

**Rule**: Every board must have at least one clearly marked flow path. Use directional connectors with labels explaining the protocol (HTTP, gRPC, AMQP, WebSocket). Differentiate synchronous vs. asynchronous communication visually (solid lines vs. dashed lines).

### Principle 4: Information Density Gradient

Not every part of the board needs the same level of detail. Apply a density gradient:

- **Hero zone** (center or main focus): High detail — individual services, ports, tech stacks, metrics
- **Context zone** (periphery): Medium detail — service names, relationship arrows, key properties
- **Reference zone** (edges): Low detail — external services, third-party integrations, future-state indicators

This creates a natural reading path: the eye enters at the hero zone and explores outward as needed.

### Principle 5: Color as Semantic Layer

Color is not decoration in architecture boards — it is a data channel. Each color must encode consistent meaning across the entire board:

- **Service domain colors** — All user-related services share one hue, all payment-related services share another
- **Status colors** — Green for healthy/existing, amber for degraded/planned, red for critical/deprecated
- **Protocol colors** — Blue for sync HTTP, amber for async messaging, green for streaming
- **Tier colors** — Subtle background tints that reinforce the layered structure

**Rule**: Never use more than 8-10 semantic colors. The human eye cannot reliably distinguish more than that on a dense board. Establish a legend and maintain strict consistency.

### Principle 6: Annotation as First-Class Content

Sticky notes, callouts, and margin annotations are not afterthoughts — they are critical content. The shapes and connectors show WHAT the system is; the annotations explain WHY it is designed that way.

Essential annotations include:

- **Performance metrics** — "~50K DAU, 3K req/s peak"
- **Technology choices** — "Chose Kafka over RabbitMQ for partition-based ordering"
- **Known risks** — "Single point of failure — no failover configured yet"
- **Ownership** — "Team Atlas owns this service cluster"
- **History** — "Migrated from monolith Q3 2024"

### Principle 7: Evolution-Ready Layout

Systems change. The board must accommodate growth without requiring a complete redraw. This means:

- **Leave whitespace** — Intentional gaps between service clusters where future services can be inserted
- **Modular grouping** — Group related services into bounded frames that can be moved as a unit
- **Version indicators** — Mark components with version numbers or deployment stages (v1, v2-beta)
- **Ghost elements** — Use light outlines or dashed borders to indicate planned-but-not-yet-built components

---

## The Psychology of Technical Visualization

### Engineers Read Diagrams Differently

Engineers are pattern-matching machines. When they look at an architecture board, they are not reading labels sequentially — they are scanning for:

1. **Symmetry and asymmetry** — Balanced architectures feel reliable; lopsided ones trigger suspicion
2. **Connection density** — A service with 15 inbound connections is a risk center
3. **Isolation** — Components that sit alone with one connection are either well-encapsulated or neglected
4. **Depth** — How many hops does a request traverse? Depth = latency and complexity

Design the board to reward this scanning behavior. Make symmetry visible. Make hotspots obvious. Make depth countable at a glance.

### The "Five-Second Test"

A well-designed architecture board passes the five-second test: an engineer who has never seen the system should be able to answer these questions after five seconds of looking:

1. What kind of system is this? (Web app, data pipeline, IoT platform, etc.)
2. How many major components are there?
3. What is the general flow direction?
4. Where does data live?
5. What is the most complex part?

If the board fails this test, it needs simplification, better visual hierarchy, or a clearer layout.

### Cognitive Load Management

Architecture boards are inherently information-dense. Managing cognitive load is essential:

- **Progressive disclosure** — Use Miro's zooming to show overview at distance and detail up close
- **Visual chunking** — Group related elements into frames with shared backgrounds
- **Consistent iconography** — Use the same shape for the same type of element everywhere (circles for external services, rectangles for internal services, cylinders for databases, diamonds for decision points)
- **Reduce line crossings** — Every line crossing is a cognitive speed bump. Rearrange elements to minimize crossings

---

## Board Types and Their Design Intent

### System Architecture Diagram

**Intent**: Show the complete system topology — every service, every database, every external integration, and how they connect. This is the "master map" of the system.
**Design priority**: Completeness and navigability. Every engineer should be able to find their service on this board.

### API Endpoint Map

**Intent**: Provide a developer-facing reference for all API endpoints, their methods, schemas, and authentication. This is a functional reference, not a topological map.
**Design priority**: Scanability and lookup speed. A frontend developer should find the endpoint they need in under 10 seconds.

### Database Schema Diagram

**Intent**: Visualize the data model — tables, columns, relationships, indexes. This is the "truth about data" board.
**Design priority**: Relationship clarity. The eye must instantly trace foreign key relationships between entities.

### Infrastructure Overview

**Intent**: Map the cloud/physical infrastructure — compute, networking, storage, CI/CD, monitoring. This is the "ops team's map."
**Design priority**: Layered organization (compute/network/storage tiers) and operational context (regions, availability zones, scaling policies).

---

## Design Decisions That Shape Everything

### Horizontal vs. Vertical Flow

- **Vertical (top-to-bottom)**: Best for request lifecycle diagrams where the user is at the top and the database is at the bottom. Mirrors the mental model of "depth" in a system stack.
- **Horizontal (left-to-right)**: Best for data pipeline diagrams where data flows through transformation stages. Mirrors timeline reading direction.
- **Hybrid**: Use vertical for the main stack and horizontal sub-flows within a tier for parallel services.

Choose based on the primary story the board tells. If it is about "how a request flows," go vertical. If it is about "how data transforms," go horizontal.

### Connector Semantics

Connectors are the most information-dense element on an architecture board. Establish clear conventions:

| Connector Style     | Meaning                                               |
| ------------------- | ----------------------------------------------------- |
| Solid line, arrow   | Synchronous request (HTTP, gRPC)                      |
| Dashed line, arrow  | Asynchronous message (Kafka, RabbitMQ, SQS)           |
| Thick line          | High-throughput path                                  |
| Thin line           | Low-frequency path                                    |
| Red line            | Error/fallback path                                   |
| Bidirectional arrow | Bidirectional communication (WebSocket, peer-to-peer) |

Always label connectors with protocol and key details: "REST/HTTPS," "gRPC/mTLS," "Kafka topic: orders.created."

### When to Use Sub-Boards

A single board should not exceed ~30 unique service nodes. Beyond that, create linked sub-boards:

- **Master board**: Shows service clusters as single nodes with drill-down links
- **Domain boards**: Show detailed architecture within one domain (e.g., "Payment Domain Architecture")
- **Sequence boards**: Show specific request flows as sequence-diagram-style boards

This creates a navigable hierarchy similar to how code is organized into modules and packages.

---

## The Miro-Specific Advantage

Miro adds unique capabilities that static diagramming tools lack:

1. **Infinite canvas** — No page boundaries forcing awkward breaks
2. **Zoom levels** — Design for multiple zoom distances (overview, section, detail)
3. **Collaboration** — Multiple engineers can annotate simultaneously during reviews
4. **Sticky notes** — Perfect for transient annotations (questions, TODOs, incident notes)
5. **Frames** — Natural containers for architectural boundaries
6. **Links** — Connect to external documentation, Jira tickets, runbooks

Design every board to exploit these capabilities. A Miro architecture board should feel alive — a workspace, not a static poster.

---

## Quality Criteria for Technical Architecture Boards

A board is excellent when:

- [ ] An engineer can trace any request from client to database in under 30 seconds
- [ ] Every service has a visible owner (team label)
- [ ] Every database has visible technology (PostgreSQL, MongoDB, Redis, etc.)
- [ ] Every connector has a labeled protocol
- [ ] Performance annotations exist for critical paths
- [ ] Known risks and technical debt are called out visually
- [ ] The board passes the five-second test for new viewers
- [ ] Color usage is semantically consistent throughout
- [ ] There is room to add 2-3 new services without redesigning
- [ ] The board has a clear title, date, version, and legend

---

## Summary

Technical architecture boards are the maps by which engineering teams navigate invisible complexity. They succeed when they make the implicit explicit, the invisible visible, and the complex comprehensible. Every design decision — from color choice to connector style to layout direction — must serve the singular goal of **rapid, accurate comprehension** by the people who build, operate, and evolve the system.

Build these boards as if every engineer's next decision depends on reading them correctly — because it does.
