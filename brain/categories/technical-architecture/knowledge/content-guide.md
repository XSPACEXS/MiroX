# Technical Architecture — Content Guide

## Overview

The content on a technical architecture board is engineering truth made visible. Unlike marketing boards where creativity leads, technical boards demand precision. Every label, every metric, every annotation must reflect real system state — or clearly indicate it is a target, a plan, or a question. This guide covers the domain knowledge, vocabulary, content structures, and example content that make architecture boards authoritative and useful.

---

## Domain Knowledge: Core Concepts

### Microservices Architecture

A microservices architecture decomposes a system into independently deployable services, each owning a bounded context of business logic and data. Key concepts for board content:

**Service Properties to Document**:

- Service name (must match deployment name)
- Primary responsibility (1-2 sentence description)
- Technology stack (language, framework)
- Port number and protocol
- Owning team
- Repository URL or path
- Current version
- Health check endpoint
- SLA/SLO targets

**Communication Patterns**:

- Synchronous: REST over HTTPS, gRPC with mTLS, GraphQL
- Asynchronous: Message queues (Kafka, RabbitMQ, SQS), event streams, webhooks
- Hybrid: CQRS (Command Query Responsibility Segregation) patterns

**Service Boundaries**:

- Bounded context (DDD terminology)
- Data ownership — each service owns its database
- API contracts — OpenAPI specs, protobuf definitions
- Shared nothing architecture vs. shared libraries

### API Design

Content for API endpoint maps requires precise technical detail:

**Endpoint Documentation Format**:

```
Method: GET | POST | PUT | PATCH | DELETE
Path: /api/v1/resource/:id/sub-resource
Auth: Bearer token (scope: read:resource)
Rate Limit: 1000 req/min
Request Body: { field: type, field: type }
Response: { data: ResourceType, meta: { pagination } }
Error Codes: 400, 401, 403, 404, 429, 500
```

**API Versioning Strategies**:

- URL path versioning: `/api/v1/`, `/api/v2/`
- Header versioning: `Accept: application/vnd.api.v1+json`
- Query parameter: `?version=1`

**Authentication Flows to Diagram**:

- OAuth2 Authorization Code (for user-facing apps)
- OAuth2 Client Credentials (for service-to-service)
- API Key (for third-party integrations)
- JWT with refresh tokens
- mTLS (mutual TLS for internal services)

### Database Design

Content for database schema boards:

**Table Documentation Format**:

```
Table: users
Primary Key: id (UUID, auto-generated)
Columns:
  - id: UUID NOT NULL DEFAULT gen_random_uuid()
  - email: VARCHAR(255) UNIQUE NOT NULL
  - password_hash: VARCHAR(255) NOT NULL
  - display_name: VARCHAR(100)
  - role: ENUM('admin', 'member', 'viewer') DEFAULT 'member'
  - created_at: TIMESTAMP WITH TIME ZONE DEFAULT NOW()
  - updated_at: TIMESTAMP WITH TIME ZONE DEFAULT NOW()
Indexes:
  - idx_users_email (UNIQUE on email)
  - idx_users_role (on role)
Foreign Keys: none (root entity)
Estimated Rows: 500K
Growth Rate: ~5K/month
```

**Relationship Types**:

- One-to-One: User -> UserProfile (1:1)
- One-to-Many: User -> Orders (1:N)
- Many-to-Many: Products <-> Tags via product_tags junction table (M:N)
- Self-referential: Employee -> Manager (tree structure)

**Database Engine Properties**:

- PostgreSQL: ACID, relational, JSON support, full-text search
- MongoDB: Document store, flexible schema, horizontal scaling
- Redis: In-memory, sub-millisecond latency, TTL-based caching
- Elasticsearch: Full-text search, analytics, log aggregation
- DynamoDB: Key-value, serverless, auto-scaling, single-digit ms latency

### Cloud Infrastructure

Content for infrastructure overview boards:

**Compute Resources**:

```
Service: User Service
Instance Type: t3.medium (2 vCPU, 4 GB RAM)
Auto-scaling: min 2, max 10, target CPU 70%
Container: Docker (node:18-alpine)
Orchestration: ECS Fargate / EKS
Health Check: GET /health, interval 30s, threshold 3
```

**Networking**:

```
VPC: 10.0.0.0/16
Public Subnet: 10.0.1.0/24 (NAT Gateway, ALB)
Private Subnet: 10.0.2.0/24 (Application services)
Database Subnet: 10.0.3.0/24 (RDS, ElastiCache)
Security Groups:
  - web-sg: 80, 443 from 0.0.0.0/0
  - app-sg: 8080 from web-sg
  - db-sg: 5432 from app-sg
```

**Storage**:

```
S3 Buckets:
  - assets.example.com (public, CDN-backed, lifecycle: 90 days to IA)
  - backups.example.com (private, versioned, lifecycle: 30 days to Glacier)
  - logs.example.com (private, lifecycle: 7 days to IA, 90 days delete)
EBS Volumes: 100 GB gp3, 3000 IOPS
RDS Storage: 500 GB gp3, automated backups 7 days
```

**CI/CD Pipeline**:

```
Source: GitHub (main branch)
Build: GitHub Actions
  - lint -> test -> build -> docker push
  - ~4 min total build time
Registry: ECR (us-east-1)
Deploy: ArgoCD / ECS rolling update
  - Canary: 10% traffic for 5 min
  - Full rollout if no errors
  - Automatic rollback on 5xx spike
Environments: dev -> staging -> production
```

---

## Content Structures by Board Type

### System Architecture Diagram Content

**Required content per service node**:

1. Service name (bold, 18px)
2. 3-5 bullet responsibilities
3. Technology badge (language/framework)
4. Port number
5. Team ownership label
6. At least one performance annotation nearby

**Required content for connectors**:

1. Protocol label (REST/HTTPS, gRPC, Kafka, etc.)
2. Direction arrow
3. Key topic/route (e.g., "Kafka: order.created")

**Required board-level content**:

1. Board title with version and date
2. Legend explaining shapes, colors, line styles
3. At least 3 performance annotations (req/s, latency, throughput)
4. At least 2 risk/debt callouts
5. Environment indicator (Production / Staging / etc.)

**Example service node content**:

```
Auth Service
- JWT token issuance & refresh
- OAuth2 (Google, GitHub, SAML)
- RBAC permission engine
- Session management & revocation
- MFA enforcement

[Go]  Port: 8001
Team: Identity
SLO: 99.95% uptime, <50ms p99
```

### API Endpoint Map Content

**Required content per endpoint card**:

1. HTTP method badge (colored pill)
2. Route path (monospace)
3. Description (1 line)
4. Query parameters or request body summary
5. Response schema summary
6. Auth requirement
7. Rate limit (if applicable)

**Example endpoint card**:

```
[POST] /api/v1/orders
Create a new order from cart
Body: { cart_id: UUID, shipping_address_id: UUID, payment_method_id: UUID }
Response: { data: Order, meta: { estimated_delivery: ISO8601 } }
Auth: Bearer token (scope: write:orders)
Rate: 100 req/min per user
Side effects: Emits order.created event, reserves inventory
```

**Required board-level content**:

1. Base URL and versioning strategy
2. Authentication overview (all auth methods supported)
3. Global error response format
4. Rate limiting policy
5. Webhook configuration (if applicable)
6. Pagination convention

### Database Schema Diagram Content

**Required content per table**:

1. Table name (bold header)
2. All columns with data types
3. Primary key indicator (gold icon or PK label)
4. Foreign key indicators (purple with arrow to referenced table)
5. Indexes (teal indicator)
6. Constraints (NOT NULL, UNIQUE, CHECK)
7. Estimated row count

**Example table content**:

```
┌─────────────────────────────────────┐
│ orders                              │
├─────────────────────────────────────┤
│ 🔑 id          UUID           PK   │
│ FK user_id     UUID           NN   │
│    status      ENUM           NN   │
│    total       DECIMAL(10,2)  NN   │
│    currency    VARCHAR(3)     NN   │
│    notes       TEXT                 │
│ 📅 created_at  TIMESTAMPTZ    NN   │
│ 📅 updated_at  TIMESTAMPTZ    NN   │
├─────────────────────────────────────┤
│ IDX: idx_orders_user_id             │
│ IDX: idx_orders_status              │
│ IDX: idx_orders_created_at          │
│ FK: user_id -> users.id             │
│ CHECK: total >= 0                   │
│ Rows: ~2.5M | Growth: ~50K/mo      │
└─────────────────────────────────────┘
```

**Relationship line labels**:

```
users ──(1:N)──► orders     "A user places many orders"
orders ──(1:N)──► order_items  "An order contains many items"
products ◄──(M:N)──► tags   via product_tags junction
users ──(1:1)──► user_profiles  "Each user has one profile"
```

### Infrastructure Overview Content

**Required content per compute resource**:

1. Service/resource name
2. Instance type or container spec
3. Auto-scaling configuration
4. Region/AZ placement
5. Cost estimate (monthly)

**Required content per network element**:

1. CIDR block
2. Public/private designation
3. Key security group rules
4. Route table highlights

**Example compute block**:

```
ECS Cluster: production
  Service: user-service
  Task Definition: user-service:42
  Container: node:18-alpine
  CPU: 512 units | Memory: 1024 MB
  Desired: 3 | Min: 2 | Max: 8
  Target: CPU 70%
  Health: /health (30s interval)
  Cost: ~$180/mo (3 tasks avg)
```

**Example networking block**:

```
VPC: prod-vpc (10.0.0.0/16)
├── Public Subnet A (10.0.1.0/24) — us-east-1a
│   ├── ALB (application load balancer)
│   ├── NAT Gateway
│   └── Bastion Host (t3.micro)
├── Private Subnet A (10.0.2.0/24) — us-east-1a
│   ├── ECS Tasks (user, order, payment services)
│   └── ElastiCache (Redis cluster)
├── Private Subnet B (10.0.3.0/24) — us-east-1b
│   ├── ECS Tasks (replica set)
│   └── ElastiCache (Redis replica)
└── Database Subnet (10.0.4.0/24) — Multi-AZ
    ├── RDS PostgreSQL (primary)
    └── RDS PostgreSQL (standby — us-east-1b)
```

---

## Essential Vocabulary

### Architecture Terms

| Term            | Definition                                                    | Board Usage                              |
| --------------- | ------------------------------------------------------------- | ---------------------------------------- |
| Microservice    | Independently deployable service with bounded context         | Label on service node                    |
| API Gateway     | Entry point for all external requests                         | Prominent element in gateway tier        |
| Load Balancer   | Distributes traffic across service instances                  | Shape in gateway tier                    |
| Service Mesh    | Infrastructure layer for service-to-service communication     | Overlay on service tier                  |
| Circuit Breaker | Pattern that prevents cascading failures                      | Annotation on service connections        |
| Saga            | Distributed transaction pattern across services               | Flow annotation across multiple services |
| CQRS            | Separate read and write models                                | Split service node or annotation         |
| Event Sourcing  | Store state changes as sequence of events                     | Annotation on event store database       |
| Sidecar         | Co-deployed helper process (logging, proxy)                   | Small attached node on service           |
| Idempotency     | Operation that produces same result if applied multiple times | Annotation on write endpoints            |

### Infrastructure Terms

| Term           | Definition                                      | Board Usage                     |
| -------------- | ----------------------------------------------- | ------------------------------- |
| VPC            | Virtual Private Cloud — isolated network        | Container frame                 |
| Subnet         | IP address range within VPC                     | Sub-container frame             |
| Security Group | Virtual firewall rules                          | Annotation on subnet boundaries |
| NAT Gateway    | Allows private instances to access internet     | Element in public subnet        |
| Route 53       | AWS DNS service                                 | Element at top of board         |
| CloudFront     | CDN for static assets and API caching           | Element near client tier        |
| Auto-scaling   | Automatic capacity adjustment                   | Annotation on compute resources |
| Blue/Green     | Deploy strategy with two identical environments | Annotation on deploy pipeline   |
| Canary         | Deploy strategy with gradual traffic shift      | Annotation on deploy pipeline   |
| Multi-AZ       | Resources spread across availability zones      | Container grouping              |

### Database Terms

| Term            | Definition                                  | Board Usage                                  |
| --------------- | ------------------------------------------- | -------------------------------------------- |
| Primary Key     | Unique identifier for a row                 | Gold/highlighted column in table             |
| Foreign Key     | Reference to another table's primary key    | Purple column with arrow connector           |
| Index           | Performance optimization structure          | Teal indicator on column                     |
| Partition       | Horizontal data division for scale          | Annotation on table                          |
| Replica         | Read-only copy of database                  | Separate node with dashed connector          |
| Migration       | Schema change script                        | Annotation in notes zone                     |
| Sharding        | Distributing data across multiple databases | Multiple database nodes with shard key label |
| Connection Pool | Reusable database connections               | Annotation between service and database      |

---

## Metrics and Performance Content

### What to Annotate

Every architecture board should include real or realistic performance data. If exact numbers are unknown, use industry-standard estimates:

**Traffic Metrics**:

- Daily Active Users (DAU): "~50K DAU"
- Requests per second (peak): "3K req/s peak"
- Requests per second (average): "800 req/s avg"
- Bandwidth: "~2 GB/hour outbound"

**Latency Metrics**:

- API response time p50: "45ms p50"
- API response time p99: "200ms p99"
- Database query time: "5ms avg query"
- Cache hit rate: "94% cache hit rate"
- End-to-end latency: "120ms E2E p50"

**Reliability Metrics**:

- Uptime SLO: "99.95% uptime SLO"
- Error rate: "0.1% 5xx error rate"
- Mean Time to Recovery: "MTTR: 15 min"
- Deployment frequency: "10 deploys/day"

**Storage Metrics**:

- Database size: "PostgreSQL: 250 GB"
- Cache memory: "Redis: 8 GB allocated"
- Object storage: "S3: 2 TB total"
- Log volume: "500 GB/month logs"

### Metric Placement Rules

1. Place traffic metrics on the client/gateway tier (where traffic enters)
2. Place latency metrics on the service tier (where computation happens)
3. Place storage metrics on the data tier (where data lives)
4. Place reliability metrics in the notes zone or as service-level annotations
5. Use sticky notes for all metrics — yellow background for standard, pink for concerning numbers

---

## Content for Risk and Technical Debt

### Risk Callout Format

```
⚠️ RISK: Single Point of Failure
The auth service has no redundancy.
If it fails, all authenticated requests fail.
Mitigation: Add secondary instance (Q2 priority)
Owner: Team Identity
```

### Technical Debt Callout Format

```
🔧 TECH DEBT: Legacy Payment Adapter
The payment service still uses the v1 Stripe API.
Migration to v3 blocked by custom webhook handling.
Impact: Cannot use Stripe Checkout or Payment Links.
Effort: ~3 sprints
Priority: P2
```

### Planned Change Callout Format

```
🔮 PLANNED: Event-Driven Inventory
Replace synchronous inventory checks with
Kafka events (inventory.reserved, inventory.released).
Timeline: Q3 2025
Status: RFC approved, awaiting capacity
```

---

## Content Quality Checklist

Before a board is complete, verify:

- [ ] Every service has a name, responsibility description, and tech stack
- [ ] Every database has a technology label and approximate size
- [ ] Every connector has a protocol label
- [ ] At least 3 performance metrics are visible
- [ ] At least 1 risk or tech debt callout exists
- [ ] Team ownership is labeled for all major services
- [ ] The board title includes version number and date
- [ ] A legend explains all visual conventions
- [ ] No service node is orphaned (no connections)
- [ ] Port numbers are consistent with actual deployment
- [ ] Authentication flow is documented or referenced
- [ ] The board answers: "How does a request get from client to database?"

---

## Industry-Specific Content Variations

### E-Commerce

Focus content on: Product catalog service, cart/checkout flow, payment processing, inventory management, order fulfillment, recommendation engine, search (Elasticsearch/Algolia)

Key metrics: Orders per second, cart conversion rate, payment processing time, inventory sync latency

### SaaS Platform

Focus content on: Multi-tenancy architecture, tenant isolation, billing/subscription service, feature flags, usage metering, SSO/SAML integration

Key metrics: Tenant count, API calls per tenant, data isolation verification, subscription churn signals

### FinTech

Focus content on: Ledger service, double-entry bookkeeping, PCI compliance boundaries, fraud detection pipeline, regulatory reporting, audit trail

Key metrics: Transaction processing time, reconciliation accuracy, fraud detection rate, regulatory report generation time

### Healthcare

Focus content on: HIPAA compliance boundaries, PHI data flow, consent management, HL7/FHIR integration, audit logging, encryption at rest/in transit

Key metrics: PHI access audit count, consent verification time, FHIR resource response time

### Media/Streaming

Focus content on: Content ingestion pipeline, transcoding farm, CDN distribution, recommendation ML pipeline, real-time analytics, DRM/content protection

Key metrics: Transcoding throughput, CDN cache hit ratio, stream start time, buffer ratio

---

## Summary

Content on a technical architecture board must be precise, complete, and current. Every service gets a name, a purpose, and a tech stack. Every connection gets a protocol. Every tier gets performance context. The board is not a decoration — it is an engineering artifact that teams use to make decisions. Treat its content with the same rigor you would apply to production code.
