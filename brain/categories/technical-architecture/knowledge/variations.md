# Technical Architecture — Variations

## Overview

A technical architecture board is not a one-size-fits-all artifact. The same underlying principles — tiered structure, visual consistency, flow clarity — must adapt to wildly different industries, team sizes, system scales, and organizational contexts. This guide covers the key variations and how to customize architecture boards for each.

---

## Variation by Cloud Provider

### AWS-Focused Architecture

**Visual customization**:

- Use orange (#FF9900) as the cloud provider accent color
- AWS service icons (or named rectangles in absence of icons): EC2, ECS, Lambda, RDS, S3, SQS, SNS, CloudFront, Route 53, API Gateway, DynamoDB, ElastiCache
- Region naming: "us-east-1", "eu-west-1"
- VPC/subnet notation with CIDR blocks

**Content emphasis**:

- IAM role boundaries and permissions
- Security group rules at subnet boundaries
- Cost optimization annotations (Reserved Instances, Savings Plans, Spot)
- AWS Well-Architected Framework pillars (Operational Excellence, Security, Reliability, Performance, Cost Optimization, Sustainability)

**Specific services to include**:

```
Compute: EC2, ECS/Fargate, Lambda, App Runner
Storage: S3, EBS, EFS, Glacier
Database: RDS, DynamoDB, ElastiCache, DocumentDB
Networking: VPC, ALB/NLB, CloudFront, Route 53, API Gateway
Security: IAM, KMS, Secrets Manager, WAF, Shield
Monitoring: CloudWatch, X-Ray, CloudTrail
CI/CD: CodePipeline, CodeBuild, CodeDeploy (or GitHub Actions + ECR)
Messaging: SQS, SNS, EventBridge, Kinesis
```

### GCP-Focused Architecture

**Visual customization**:

- Use blue (#4285F4) as the cloud provider accent color
- GCP service names: Cloud Run, GKE, Cloud SQL, Cloud Storage, Pub/Sub, BigQuery, Cloud Functions, Firebase
- Region naming: "us-central1", "europe-west1"
- Project-based organization (replace AWS account with GCP project)

**Content emphasis**:

- GCP project and folder hierarchy
- VPC networking with shared VPCs
- BigQuery as the analytics backbone
- Firebase integration for mobile backends
- Anthos for hybrid/multi-cloud

### Azure-Focused Architecture

**Visual customization**:

- Use blue (#0078D4) as the cloud provider accent color
- Azure service names: App Service, AKS, Azure SQL, Blob Storage, Service Bus, Azure Functions, Cosmos DB, Front Door
- Region naming: "East US", "West Europe"
- Resource Group based organization

**Content emphasis**:

- Azure AD integration (identity backbone)
- Resource Group boundaries on the board
- Azure DevOps pipeline integration
- Enterprise features (ExpressRoute, Azure Arc)
- Compliance certifications (SOC 2, HIPAA)

### Multi-Cloud Architecture

**Visual customization**:

- Use distinct colors per provider: Orange (AWS), Blue (GCP), Cyan (Azure)
- Draw provider boundaries as major frames
- Highlight cross-cloud connectors with special styling (thick, red)

**Content emphasis**:

- Data transfer costs between providers
- Latency between cloud regions
- Identity federation across providers
- Terraform/Pulumi as infrastructure-as-code layer
- Monitoring aggregation (Datadog, Grafana Cloud)

---

## Variation by System Scale

### Startup MVP (3-5 Services)

**Board adjustments**:

- Smaller board: 3000x2500px
- Simpler tier structure (Client, API, Database — 3 tiers only)
- Single database is common and acceptable
- Monolithic backend with modular architecture is normal
- Focus on speed and simplicity over distributed perfection

**Content focus**:

- MVP scope boundaries
- "Good enough for now" annotations
- Growth triggers: "When DAU > 10K, split into separate services"
- Cost-per-month annotations (critical for startups)
- Third-party services replacing custom builds (Auth0, Stripe, SendGrid)

**Example startup architecture**:

```
[React SPA] → [Node.js API (Express)] → [PostgreSQL]
                     │                         │
              [Auth0 (SSO)]            [Redis (sessions)]
                     │
              [Stripe] [SendGrid] [S3]
```

### Growth Stage (10-25 Services)

**Board adjustments**:

- Standard board: 5000x4000px
- Full tiered stack with 5 tiers
- Service mesh or API gateway is necessary
- Multiple databases per domain
- Message queue for async processing

**Content focus**:

- Service ownership boundaries (which team owns which service)
- API versioning strategy
- Database migration strategy
- Monitoring and alerting coverage
- On-call rotation boundaries

### Enterprise Scale (50+ Services)

**Board adjustments**:

- Multi-board strategy required
- Master board: C4 Level 1 (systems only), 4000x3000px
- Domain boards: One per business domain, 5000x4000px each
- Infrastructure board: Separate from application architecture
- Data platform board: Separate for analytics/ML infrastructure

**Content focus**:

- Cross-domain API contracts
- Event schema registry
- Compliance and regulatory boundaries
- Data residency requirements
- Enterprise service bus or mesh
- Service catalog integration (Backstage, ServiceNow)

---

## Variation by Industry

### FinTech / Banking

**Additional elements**:

- PCI DSS compliance boundary (red dashed frame)
- Encryption at rest/in transit indicators on every data store
- Audit log service (mandatory)
- Dual authorization paths for financial transactions
- Regulatory reporting pipeline

**Color additions**:

- Red border (#C62828) for PCI scope boundary
- Gold (#FF8F00) for financial transaction paths
- Gray (#9E9E9E) for regulatory reporting components

**Required annotations**:

- "PCI Scope" label on all services handling card data
- Transaction per second (TPS) metrics
- Reconciliation schedule
- Fraud detection pipeline latency
- SOX compliance indicators

### Healthcare / MedTech

**Additional elements**:

- HIPAA compliance boundary
- PHI (Protected Health Information) data flow highlighting
- Consent management service
- HL7/FHIR integration endpoints
- BAA (Business Associate Agreement) indicators on external services

**Color additions**:

- Red (#C62828) for PHI data flow paths
- Purple (#6A1B9A) for consent-gated access
- Green (#2E7D32) for de-identified data paths

**Required annotations**:

- "PHI" label on all services accessing protected health data
- Encryption standards (AES-256 at rest, TLS 1.3 in transit)
- Audit access log retention (minimum 6 years for HIPAA)
- Break-glass emergency access mechanism

### E-Commerce / Retail

**Additional elements**:

- Product catalog service with search integration
- Cart and checkout flow (critical path highlighting)
- Inventory management with real-time sync
- Recommendation engine (ML pipeline)
- Payment processing with PCI scope
- Fulfillment and shipping integration

**Required annotations**:

- Orders per second (peak: Black Friday, Cyber Monday)
- Cart abandonment tracking
- Inventory sync latency
- CDN cache hit ratio for product images
- A/B testing infrastructure

### SaaS / B2B Platform

**Additional elements**:

- Multi-tenancy architecture (tenant isolation model)
- Tenant provisioning pipeline
- Feature flag service
- Usage metering and billing
- SSO/SAML integration
- Audit trail service

**Required annotations**:

- Tenant count and growth rate
- Per-tenant data isolation verification
- Feature flag rollout percentages
- Usage-based billing accuracy
- Compliance certifications (SOC 2, ISO 27001)

### Media / Streaming

**Additional elements**:

- Content ingestion pipeline
- Transcoding farm (FFmpeg/MediaConvert)
- CDN distribution (multi-CDN strategy)
- DRM / content protection
- Real-time analytics (viewer count, buffer ratio)
- Recommendation ML pipeline

**Required annotations**:

- Transcoding throughput (hours of video/hour)
- Stream start time (< 2 seconds target)
- Buffer ratio (< 1% target)
- CDN cache hit ratio
- Concurrent viewer capacity

### IoT / Embedded

**Additional elements**:

- Device fleet management
- MQTT/CoAP broker
- Edge computing nodes
- Device shadow/twin service
- OTA (Over-The-Air) update pipeline
- Time-series database (InfluxDB, TimescaleDB)

**Required annotations**:

- Device count and growth
- Message throughput (messages/second)
- Edge-to-cloud latency
- Device firmware version distribution
- Battery/power budget impact

---

## Variation by Audience

### For Engineering Teams (Detailed View)

**What to include**:

- Full service detail (responsibilities, tech stack, ports)
- All connector labels with protocols and topics
- Performance metrics at p50, p95, p99
- Index strategies and query patterns
- Deployment configuration details
- Error handling and retry strategies

**What to adjust**:

- Use technical vocabulary freely
- Include code-level references (package names, class names)
- Show infrastructure details (instance types, CIDR blocks)
- Add runbook links for critical services

### For Product/PM Teams (Strategic View)

**What to include**:

- Service clusters by business capability (not technical implementation)
- User journey flows highlighted
- Feature ownership mapping
- Performance metrics in business terms ("checkout takes < 2 seconds")
- Upcoming changes with timeline

**What to adjust**:

- Simplify technical details (no ports, no instance types)
- Use business language ("Payment Processing" not "Stripe Adapter Service")
- Highlight user-facing performance
- Show dependencies that affect feature delivery

### For Executive/Board Presentations

**What to include**:

- High-level system blocks (5-8 major components)
- Key business metrics tied to architecture
- Investment areas highlighted
- Competitive advantages of the architecture
- Risk summary (no detailed technical risks)

**What to adjust**:

- Maximum 10-15 elements on the board
- Large text, minimal detail
- Focus on capabilities, not implementation
- Include cost context
- Highlight scalability story

### For New Engineer Onboarding

**What to include**:

- Complete system architecture with all services
- Numbered flow paths for key user journeys
- "Start here" indicator
- Links to documentation, repos, and runbooks
- Team contact information
- Glossary of system-specific terms

**What to adjust**:

- Add explanatory annotations that experienced engineers would skip
- Number the flow steps explicitly (Step 1, Step 2, ...)
- Include a "first tasks" section linking to beginner-friendly services
- Add reading order guidance (start with tier 0, work down)

---

## Variation by Development Methodology

### Monolith Architecture

**Board adjustments**:

- Single large service block instead of multiple microservices
- Internal module boundaries shown within the monolith
- Shared database is expected
- Focus on module dependencies and coupling

```
[Client] → [Monolith Application]
              ├── Auth Module
              ├── User Module
              ├── Order Module
              ├── Payment Module
              └── Admin Module
                     │
              [PostgreSQL (shared)]
```

### Serverless Architecture

**Board adjustments**:

- Replace service nodes with Lambda/Function nodes
- Show event triggers (API Gateway, S3, DynamoDB Streams, EventBridge)
- No persistent compute — emphasis on event-driven flow
- Step Functions for orchestration

```
[API Gateway] → [Lambda: createOrder] → [DynamoDB]
                                               │
                                        [DynamoDB Stream]
                                               │
                                  [Lambda: processPayment]
                                               │
                                        [SQS: notify]
                                               │
                                  [Lambda: sendEmail] → [SES]
```

### Kubernetes-Native Architecture

**Board adjustments**:

- Show cluster, namespace, and pod hierarchy
- Include Ingress controller, service mesh (Istio/Linkerd)
- Show Helm charts or Kustomize overlays
- Include operators and CRDs

```
[K8s Cluster]
├── Namespace: production
│   ├── [Ingress (NGINX)]
│   ├── [Service Mesh (Istio)]
│   ├── [Pod: user-service (3 replicas)]
│   ├── [Pod: order-service (3 replicas)]
│   └── [StatefulSet: PostgreSQL]
├── Namespace: monitoring
│   ├── [Prometheus]
│   ├── [Grafana]
│   └── [AlertManager]
└── Namespace: ci-cd
    └── [ArgoCD]
```

---

## Variation by Time Horizon

### Current State Architecture

**Focus**: What is deployed and running today.

- All elements are solid-bordered
- Include known tech debt and risks
- Show actual metrics (not targets)
- Include legacy components with "DEPRECATED" badges

### Target State Architecture

**Focus**: Where the system should be in 6-12 months.

- Planned components have dashed borders
- Removed components have strikethrough
- Migration paths shown with numbered steps
- Timeline annotations on each planned change

### Migration Plan Board

**Focus**: How to get from current to target state.

- Side-by-side or overlay view
- Phase markers (Phase 1, Phase 2, Phase 3)
- Dependencies between migration steps
- Rollback plan annotations
- Risk assessment per phase

---

## Combining Variations

Real boards often combine multiple variations. A FinTech startup on AWS building a SaaS platform for banking clients would combine:

- **Cloud**: AWS-focused (orange accents, AWS service names)
- **Scale**: Growth stage (10-25 services)
- **Industry**: FinTech (PCI scope, audit trails, transaction metrics)
- **Industry**: SaaS (multi-tenancy, feature flags)
- **Audience**: Engineering team (full detail) with an executive summary board

The knowledge files provide the building blocks; the builder combines them based on the specific context.

---

## Summary

No two architecture boards should look identical because no two systems operate in identical contexts. The variations described here — by cloud provider, system scale, industry, audience, methodology, and time horizon — provide the adaptation layer that transforms generic architecture templates into precise, contextual engineering documents. Always start with the core principles (tiered structure, visual consistency, flow clarity) and then apply the relevant variations for the specific system being documented.
