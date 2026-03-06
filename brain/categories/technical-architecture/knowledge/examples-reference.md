# Technical Architecture — Examples & Reference

## Overview

This reference guide provides detailed breakdowns of excellent technical architecture boards, common anti-patterns to avoid, and real-world case studies that demonstrate the principles from the design philosophy, layout patterns, and visual guide in action. Use these examples as templates for judgment — when building a new board, ask "does my board have the qualities described in the great examples, and does it avoid the anti-patterns?"

---

## Great Board Breakdown #1: E-Commerce Platform Architecture

### What Makes It Excellent

This board maps a complete e-commerce platform serving 100K+ DAU with 15 microservices, 4 databases, and 8 external integrations.

**Layout**: Tiered stack, 5000x4000px, top-to-bottom flow.

```
TIER 0: Clients
┌─────────────────────────────────────────────────────────────┐
│ [Web SPA (React)]  [Mobile (React Native)]  [Admin (Next)] │
│                     CDN (CloudFront)                        │
└──────────────────────────┬──────────────────────────────────┘
                           │
TIER 1: Gateway
┌──────────────────────────┴──────────────────────────────────┐
│    [AWS ALB]  →  [Kong Gateway]  →  [Rate Limiter]         │
│    Auth check (JWT validation) on every request             │
└──────────────────────────┬──────────────────────────────────┘
                           │
TIER 2: Services (the heart of the board)
┌─────────────────────────────────────────────────────────────┐
│  [Auth]  [User]  [Product]  [Cart]  [Order]  [Payment]     │
│  [Inventory]  [Search]  [Notification]  [Analytics]         │
│  [Recommendation]  [Shipping]  [Review]  [Admin]  [Report]  │
└──────────────────────────┬──────────────────────────────────┘
                           │
TIER 3: Middleware
┌──────────────────────────┴──────────────────────────────────┐
│  [Kafka (8 topics)]  [Redis Cluster]  [Elasticsearch]       │
│  [Celery Workers]                                           │
└──────────────────────────┬──────────────────────────────────┘
                           │
TIER 4: Data
┌──────────────────────────┴──────────────────────────────────┐
│  [PostgreSQL Primary]  [PostgreSQL Read Replica]             │
│  [MongoDB (products)]  [S3 (assets)]  [DynamoDB (sessions)] │
└─────────────────────────────────────────────────────────────┘
```

**Why it works**:

1. **Clear tier separation** — A viewer instantly knows which layer they are looking at
2. **Consistent service nodes** — Every service is the same size (500x280px) with the same layout: name, bullets, tech badge, port
3. **Color-coded connections** — Blue solid for REST, amber dashed for Kafka, purple dotted for Redis
4. **Rich annotations** — Yellow sticky notes show: "~100K DAU," "3K req/s peak," "45ms p50 latency"
5. **Risk callouts** — Pink sticky on the payment service: "PCI compliance boundary — all card data handled by Stripe, no card numbers stored"
6. **Legend** — Top-right, 450x500px, explains all shapes, colors, and line styles
7. **Team labels** — Every service cluster has italic team name below

**Key metrics displayed**:

- Client tier: "100K DAU, ~3K req/s peak, 50ms CDN cache hit"
- Gateway tier: "Rate limit: 1000 req/min per user, JWT validation: 2ms"
- Service tier: "Order Service: 45ms p50, 200ms p99" and "Search: 30ms avg query"
- Data tier: "PostgreSQL: 500GB, 3 replicas" and "Redis: 16GB, 94% hit rate"

---

## Great Board Breakdown #2: API Endpoint Map for a FinTech Platform

### What Makes It Excellent

This board documents 48 API endpoints across 6 resource domains for a payment processing platform.

**Layout**: Column grid, 5000x3500px, resource domains as vertical columns.

```
[API Overview & Authentication]
     Base URL: https://api.finpay.io/v2
     Auth: OAuth2 (client_credentials) + API Key
     Rate: Tier-based (100/1K/10K req/min)

┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐
│ Accounts │ │Transfers │ │ Payments │ │ Webhooks │ │  Users   │ │ Reports  │
│ /accounts│ │/transfers│ │/payments │ │/webhooks │ │ /users   │ │/reports  │
│          │ │          │ │          │ │          │ │          │ │          │
│ GET list │ │ GET list │ │ GET list │ │ GET list │ │ GET list │ │ GET list │
│ GET :id  │ │ GET :id  │ │ GET :id  │ │ GET :id  │ │ GET :id  │ │ POST gen │
│ POST new │ │ POST new │ │ POST new │ │ POST reg │ │ POST new │ │ GET :id  │
│ PUT upd  │ │ POST rev │ │ POST rfn │ │ PUT upd  │ │ PUT upd  │ │ GET csv  │
│ GET bal  │ │ GET stat │ │ GET stat │ │ DEL :id  │ │ DEL :id  │ │          │
│ GET txns │ │          │ │ POST cap │ │ GET logs │ │ GET perm │ │          │
└──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘

[Error Codes & Rate Limiting & Pagination]
```

**Why it works**:

1. **Scan-friendly layout** — Each column is a complete API domain; a developer can find their endpoint in seconds
2. **HTTP method color coding** — GET (green), POST (blue), PUT (amber), DELETE (red) — instantly recognizable
3. **Complete endpoint cards** — Each card shows: method badge, path, description, request/response summary, auth, rate limit
4. **Authentication section prominently placed** — Top of board, impossible to miss
5. **Error section at bottom** — Consistent error format documented once, referenced by all endpoints
6. **Versioning clarity** — "v2" in the base URL, with a note about v1 deprecation timeline

---

## Great Board Breakdown #3: Database Schema for a SaaS Platform

### What Makes It Excellent

This board maps 18 tables for a multi-tenant SaaS project management tool.

**Layout**: Clustered entity-relationship, 5000x4000px.

```
          [organizations]
               │ 1:N
    ┌──────────┼──────────┐
    │          │          │
[org_members] [teams]  [projects]
    │          │          │ 1:N
    │     [team_members]  ├──────────┐
    │                     │          │
                     [boards]    [milestones]
                         │ 1:N
                    [columns]
                         │ 1:N
                     [tasks]
                    /    │    \
              [labels] [comments] [attachments]
                         │
                    [activity_log]
```

**Why it works**:

1. **Hierarchical clustering** — Core entities (organizations, projects, tasks) form a clear spine; supporting entities radiate outward
2. **Relationship clarity** — Every foreign key relationship is a visible line with cardinality labels (1:1, 1:N, M:N)
3. **Color-coded table types** — Core tables (blue), junction tables (amber), lookup tables (green), audit tables (gray)
4. **Complete column detail** — Every table shows all columns with data types, constraints, and indexes
5. **Index strategy annotations** — Yellow sticky notes explain WHY certain indexes exist: "idx_tasks_board_id_position — used for drag-and-drop reordering"
6. **Migration notes** — Blue sticky notes mark recent schema changes: "Added tasks.priority column (migration 047, 2025-01-15)"
7. **Query patterns** — Annotations show the 5 most frequent query patterns and which indexes serve them

---

## Great Board Breakdown #4: AWS Infrastructure Overview

### What Makes It Excellent

This board maps a production AWS infrastructure across 2 regions with complete networking, compute, storage, and monitoring.

**Layout**: Network topology (nested), 5200x4500px.

```
┌─────────────────────────────────────────────────────────────┐
│ AWS Account: production (123456789012)                       │
│                                                              │
│ ┌──────────────────────────┐ ┌───────────────────────────┐  │
│ │ us-east-1 (PRIMARY)      │ │ eu-west-1 (DR)            │  │
│ │ ┌──────────────────────┐ │ │ ┌───────────────────────┐ │  │
│ │ │ VPC: 10.0.0.0/16     │ │ │ │ VPC: 10.1.0.0/16      │ │  │
│ │ │ ┌────────┐┌────────┐ │ │ │ │ ┌────────┐┌────────┐  │ │  │
│ │ │ │Public  ││Private │ │ │ │ │ │Public  ││Private │  │ │  │
│ │ │ │ ALB    ││ ECS    │ │ │ │ │ │ ALB    ││ ECS    │  │ │  │
│ │ │ │ NAT    ││ Redis  │ │ │ │ │ │ NAT    ││ Redis  │  │ │  │
│ │ │ └────────┘│ RDS    │ │ │ │ │ └────────┘│ RDS    │  │ │  │
│ │ │           └────────┘ │ │ │ │           └────────┘  │ │  │
│ │ └──────────────────────┘ │ │ └───────────────────────┘ │  │
│ └──────────────────────────┘ └───────────────────────────┘  │
│                    VPC Peering                               │
│                                                              │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ SHARED SERVICES                                         │  │
│ │ [Route 53] [CloudFront] [S3] [ECR] [CloudWatch]        │  │
│ │ [Secrets Manager] [KMS] [IAM] [Config] [CloudTrail]    │  │
│ └────────────────────────────────────────────────────────┘  │
│                                                              │
│ ┌────────────────────────────────────────────────────────┐  │
│ │ CI/CD PIPELINE                                          │  │
│ │ GitHub → Actions → Build → ECR Push → ArgoCD → ECS     │  │
│ │ Canary 10% → Monitor 5min → Full rollout or Rollback   │  │
│ └────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

**Why it works**:

1. **Visual nesting matches infrastructure nesting** — Account > Region > VPC > Subnet > Resource
2. **Multi-region is side-by-side** — Primary and DR region are visually comparable
3. **Shared services separated** — Global resources that span regions get their own section
4. **CI/CD pipeline shown** — The deployment path from code to production is clear
5. **Cost annotations** — Yellow sticky notes with monthly cost estimates per section
6. **Security annotations** — Pink sticky notes at trust boundaries: "All traffic encrypted in transit (TLS 1.3)"
7. **Scaling annotations** — Green sticky notes on auto-scaling groups: "Min 2, Max 10, Target CPU 70%"

---

## Anti-Pattern #1: The Spaghetti Board

### What Goes Wrong

Every element connects to every other element with no visual hierarchy. The board looks like a bowl of spaghetti.

**Symptoms**:

- More than 10 line crossings visible at once
- No clear flow direction
- Connectors are all the same style (no sync/async distinction)
- No tier structure — services, databases, and external APIs are all on the same level
- No color coding — everything is gray or default blue

**Root cause**: Building the board by adding connections as they are discovered, without planning the layout first.

**Fix**:

1. Establish tiers BEFORE drawing any connectors
2. Group related services to minimize cross-tier connections
3. Use an event bus or API gateway as a natural hub to reduce point-to-point connections
4. Differentiate sync vs. async visually
5. If you have more than 20 direct connections, consider using a domain grid layout instead

---

## Anti-Pattern #2: The Museum Board

### What Goes Wrong

The board shows every component correctly but has zero annotations. It is technically accurate but practically useless because it does not answer "so what?" There are no metrics, no risks, no team labels, no technology decisions.

**Symptoms**:

- Service nodes have names but no descriptions
- Connectors have no protocol labels
- No sticky notes anywhere on the board
- No legend
- No version or date
- The board could represent any company's system — nothing is specific

**Root cause**: Treating the board as a static diagram instead of a living engineering document.

**Fix**:

1. Add 3-5 responsibility bullets to every service node
2. Label every connector with its protocol
3. Add at least 5 performance annotations (yellow stickies)
4. Add at least 2 risk callouts (pink stickies)
5. Add team ownership labels
6. Include a version, date, and status indicator

---

## Anti-Pattern #3: The Monolith Diagram

### What Goes Wrong

The board tries to show EVERYTHING at maximum detail: every endpoint, every database column, every environment variable. It is comprehensive but incomprehensible — a 10,000x8,000px board with 200+ elements.

**Symptoms**:

- Board takes more than 5 seconds to load
- You must zoom to 25% to see the whole board, at which point no text is readable
- Elements are so small they look like dots at overview zoom
- Scrolling is required in every direction
- No one refers to the board because finding anything takes too long

**Root cause**: Failing to choose an abstraction level. Trying to be both the satellite view and the street view.

**Fix**:

1. Split into multiple boards with drill-down links
2. Master board: Show service clusters, not individual services
3. Domain boards: Show services within one domain
4. Detail boards: Show specific flows, schemas, or configurations
5. Each board should have no more than 30 unique elements

---

## Anti-Pattern #4: The Flatland Board

### What Goes Wrong

All elements are placed on a single plane with no visual hierarchy. Services, databases, external APIs, and infrastructure components are all the same shape, same size, and same color.

**Symptoms**:

- Cannot distinguish a microservice from a database from an external API at a glance
- No tier or section structure
- All text is the same size
- The board looks like a random scatter plot with lines connecting dots
- The five-second test fails completely

**Root cause**: Using Miro's default shapes without establishing a visual language.

**Fix**:

1. Establish shape conventions: rounded rectangles for services, cylinders for databases, double-bordered rectangles for external services
2. Apply tier background tints to group elements by architectural layer
3. Use the font hierarchy: H1 for board title, H2 for tiers, H3 for frames, H4 for service names
4. Apply color coding consistently
5. Build a legend and reference it

---

## Anti-Pattern #5: The Wishful Thinking Board

### What Goes Wrong

The board shows the target architecture without indicating what currently exists versus what is planned. Viewers cannot tell if a service is in production or on a roadmap.

**Symptoms**:

- New engineers try to call APIs that do not exist yet
- Infrastructure team provisions resources for services still in planning
- No visual distinction between current and planned components
- The board looks "too clean" for a real system (no tech debt, no legacy)

**Root cause**: Using the architecture board for aspirational design without marking the difference from current reality.

**Fix**:

1. Use solid borders for existing components, dashed borders for planned
2. Add "PLANNED" badges (light blue pill) to future components
3. Add "DEPRECATED" badges (gray pill) to components being removed
4. Include timeline annotations: "Target: Q3 2025"
5. Consider maintaining two boards: "Current State" and "Target State" side by side

---

## Reference Architecture Patterns

### Pattern: API Gateway + Microservices

The most common modern web architecture:

```
Clients → CDN → Load Balancer → API Gateway → [Services] → [Databases]
                                     │
                                 [Auth Service]
                                     │
                              [Event Bus (Kafka)]
                                     │
                              [Async Workers]
```

**Key design decisions to annotate**:

- Why API Gateway over direct service calls
- Authentication strategy (JWT vs. session)
- Service discovery mechanism
- Circuit breaker configuration
- Database-per-service vs. shared database

### Pattern: Event-Driven Architecture

For systems where asynchronous processing dominates:

```
Producers → [Event Bus] → Consumers
              │
         [Event Store]
              │
         [Projections] → [Read Models]
```

**Key design decisions to annotate**:

- Event schema versioning strategy
- Exactly-once vs. at-least-once delivery
- Partition strategy for ordering guarantees
- Dead letter queue handling
- Event replay capability

### Pattern: Data Pipeline

For analytics and ML platforms:

```
Sources → [Ingest] → [Transform] → [Store] → [Serve]
             │            │            │          │
         [Schema      [Quality     [Catalog]  [Access
          Registry]    Checks]                 Control]
```

**Key design decisions to annotate**:

- Batch vs. streaming processing
- Schema evolution strategy
- Data quality validation rules
- Retention and lifecycle policies
- Compliance and PII handling

### Pattern: Multi-Tenant SaaS

For B2B platforms with tenant isolation:

```
[Tenant A] ─┐
[Tenant B] ─┼→ [API Gateway] → [Services] → [Tenant-Aware DB]
[Tenant C] ─┘       │
                 [Tenant       [Shared DB]
                  Resolver]         │
                     │         [Per-Tenant
                 [Feature      Partitions]
                  Flags]
```

**Key design decisions to annotate**:

- Tenant isolation model (shared DB with tenant_id vs. separate schemas vs. separate databases)
- Tenant-aware routing
- Data segregation compliance
- Per-tenant rate limiting
- Feature flag per-tenant configuration

---

## Checklist: Does Your Board Match Great Examples?

Score your board against these criteria (1 point each, target: 15+):

| #   | Criterion                                             | Points |
| --- | ----------------------------------------------------- | ------ |
| 1   | Clear tier/section structure visible at 25% zoom      | /1     |
| 2   | Consistent service node size and layout within a tier | /1     |
| 3   | All connectors labeled with protocol                  | /1     |
| 4   | Sync vs. async visually distinct                      | /1     |
| 5   | At least 3 performance annotations                    | /1     |
| 6   | At least 1 risk/debt callout                          | /1     |
| 7   | Team ownership labeled                                | /1     |
| 8   | Technology badges on services and databases           | /1     |
| 9   | Legend present and complete                           | /1     |
| 10  | Title block with version and date                     | /1     |
| 11  | Font hierarchy followed consistently                  | /1     |
| 12  | Color coding consistent and semantic                  | /1     |
| 13  | No more than 5 line crossings visible at once         | /1     |
| 14  | Whitespace between elements is balanced               | /1     |
| 15  | A user journey can be traced end-to-end               | /1     |
| 16  | Board passes the 5-second test                        | /1     |
| 17  | Elements use correct shapes (cylinders for DB, etc.)  | /1     |
| 18  | No orphaned elements (everything is connected)        | /1     |

**Scoring**:

- 15-18: Excellent — reference-quality board
- 11-14: Good — usable, needs minor polish
- 7-10: Adequate — communicates basics but lacks depth
- Below 7: Needs significant rework

---

## Summary

Great architecture boards share common traits: clear spatial hierarchy, consistent visual language, rich annotations, and end-to-end traceability. Anti-pattern boards share common failures: flat layouts, missing annotations, visual chaos, or wrong abstraction level. Use the breakdowns and checklists in this reference to evaluate and improve every board you build.
