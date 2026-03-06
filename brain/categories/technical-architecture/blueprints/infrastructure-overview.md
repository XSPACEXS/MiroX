# Infrastructure Overview

## Overview

- **Purpose**: Provide a comprehensive visual map of cloud infrastructure, showing compute resources, networking topology, storage services, CI/CD pipelines, monitoring stack, and security boundaries. This template helps DevOps/SRE teams communicate infrastructure decisions, plan capacity, audit security posture, and onboard new engineers to the operational landscape.
- **Best For**: Platform engineering teams documenting cloud infrastructure, SRE teams planning capacity and disaster recovery, CTOs presenting infrastructure strategy, security teams auditing network topology and access controls
- **Complexity**: Advanced
- **Board Size**: 5200x4500px (wide landscape to accommodate nested region/VPC/subnet hierarchy)

## Color Scheme

| Role               | Color        | Hex     |
| ------------------ | ------------ | ------- |
| Primary (Headers)  | Navy Blue    | #0D47A1 |
| AWS/Cloud Provider | Orange       | #FF9900 |
| Compute Resources  | Blue         | #1565C0 |
| Compute Fill       | Light Blue   | #E3F2FD |
| Networking         | Teal         | #00897B |
| Network Fill       | Light Teal   | #E0F2F1 |
| Storage            | Deep Orange  | #E64A19 |
| Storage Fill       | Light Orange | #FBE9E7 |
| Database           | Purple       | #6A1B9A |
| Database Fill      | Light Purple | #F3E5F5 |
| Security           | Red          | #C62828 |
| CI/CD Pipeline     | Green        | #2E7D32 |
| CI/CD Fill         | Light Green  | #E8F5E9 |
| Monitoring         | Amber        | #F9A825 |
| Monitoring Fill    | Light Amber  | #FFF8E1 |
| Background         | Warm Gray    | #F5F5F0 |
| Text               | Charcoal     | #212121 |
| Connector Lines    | Slate        | #546E7A |

## Board Layout

The board uses a nested topology layout with cloud account as the outermost container, regions side-by-side, and VPCs/subnets nested within. Shared services and CI/CD pipeline are positioned below the region containers.

```
┌─────────────────────────────────────────────────────────────────┐
│  [Title Block]                                      [Legend]     │
│                                                                  │
│  ┌──────────────────────────────┐ ┌────────────────────────────┐│
│  │  REGION: us-east-1 (Primary) │ │  REGION: eu-west-1 (DR)    ││
│  │  ┌────────────────────────┐  │ │  ┌──────────────────────┐  ││
│  │  │  VPC: prod-vpc         │  │ │  │  VPC: dr-vpc          │  ││
│  │  │  10.0.0.0/16           │  │ │  │  10.1.0.0/16          │  ││
│  │  │  ┌──────┐ ┌──────┐    │  │ │  │  ┌──────┐ ┌──────┐   │  ││
│  │  │  │Public│ │Private│   │  │ │  │  │Public│ │Private│  │  ││
│  │  │  │Subnet│ │Subnet │   │  │ │  │  │Subnet│ │Subnet │  │  ││
│  │  │  └──────┘ └──────┘    │  │ │  │  └──────┘ └──────┘   │  ││
│  │  └────────────────────────┘  │ │  └──────────────────────┘  ││
│  └──────────────────────────────┘ └────────────────────────────┘│
│                                                                  │
│  ┌──────────────────────────────────────────────────────────────┐│
│  │  SHARED SERVICES (Global)                                     ││
│  │  [Route 53] [CloudFront] [S3] [ECR] [IAM] [KMS]             ││
│  └──────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌──────────────────────────────────────────────────────────────┐│
│  │  CI/CD PIPELINE                                               ││
│  │  [GitHub] → [Actions] → [Build] → [ECR] → [Deploy] → [Prod] ││
│  └──────────────────────────────────────────────────────────────┘│
│                                                                  │
│  ┌──────────────────────────────────────────────────────────────┐│
│  │  MONITORING & OBSERVABILITY                                   ││
│  │  [CloudWatch] [Datadog] [PagerDuty] [ELK Stack]             ││
│  └──────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘

Approximate positions:
  Title Block:          (50, 50) — 600x150
  Legend:               (4700, 50) — 450x500
  Primary Region:       (50, 250) — 2500x1800
  DR Region:            (2650, 250) — 2500x1800
  Shared Services:      (50, 2150) — 5100x500
  CI/CD Pipeline:       (50, 2750) — 5100x500
  Monitoring:           (50, 3350) — 5100x500
  Notes Zone:           (50, 3950) — 5100x500
```

## Frames & Sections

### Frame 1: Title Block

- **Position**: (50, 50)
- **Size**: 600x150px
- **Background**: Navy Blue (#0D47A1)
- **Elements**:
  - Header text: "Infrastructure Overview" (font size 32, bold, white)
  - Text: "Production Environment — AWS" (font size 16, white)
  - Text: "v1.0 | March 2025 | Platform Team" (font size 12, #90CAF9)
  - Text: "Status: Approved" (font size 12, green badge #2E7D32, white text)

### Frame 2: Primary Region (us-east-1)

- **Position**: (50, 250)
- **Size**: 2500x1800px
- **Background**: Light Blue (#E3F2FD)
- **Elements**:
  - Header text: "Region: us-east-1 (Primary)" (font size 24, bold, #0D47A1)
  - Subtext: "3 Availability Zones | Primary production region" (font size 12, #546E7A)
  - VPC Container at (100, 350):
    - Rectangle 2350x1600, fill white, border 2px #00897B
    - Header: "VPC: prod-vpc (10.0.0.0/16)" (font size 18, bold, #00897B)
  - Public Subnet frame at (150, 450):
    - Rectangle 1050x700, fill #E0F2F1, border 1px #00897B
    - Header: "Public Subnet (10.0.1.0/24)" (font size 14, bold, #00897B)
    - Shape: Rectangle "Application Load Balancer" at (200, 530), 400x100, fill #00897B, text white
      - Text: "ALB: prod-alb | SSL termination | Path-based routing"
    - Shape: Rectangle "NAT Gateway" at (650, 530), 300x100, fill #00897B, text white
      - Text: "Elastic IP: 52.x.x.x"
    - Shape: Rectangle "Bastion Host" at (200, 680), 300x100, fill #E0F2F1, border #00897B
      - Text: "t3.micro | SSH jump box"
    - Sticky note: "Monthly cost: ~$180 (ALB) + $45 (NAT)" at (650, 680), 250x100, fill #FFF9C4
  - Private Subnet frame at (150, 1200):
    - Rectangle 1050x650, fill #E3F2FD, border 1px #1565C0
    - Header: "Private Subnet (10.0.2.0/24)" (font size 14, bold, #1565C0)
    - Shape: Rectangle "ECS Cluster: production" at (200, 1300), 450x250, fill #FFFFFF, border #1565C0
      - Text: "Services: user-svc (3), order-svc (3), payment-svc (2)"
      - Text: "Task CPU: 512 | Memory: 1024 MB"
      - Text: "Auto-scale: min 2, max 8, target CPU 70%"
      - Badge: "Fargate" pill, fill #1565C0, text white
    - Shape: Rectangle "ElastiCache" at (700, 1300), 350x120, fill #F3E5F5, border #6A1B9A
      - Text: "Redis 7.0 | Cluster mode | 3 shards"
      - Text: "r6g.large | 16 GB"
    - Sticky note: "Monthly cost: ~$850 (ECS) + $480 (Redis)" at (700, 1460), 300x100, fill #FFF9C4
  - Database Subnet frame at (1250, 450):
    - Rectangle 1150x1400, fill #F3E5F5, border 1px #6A1B9A
    - Header: "Database Subnet (10.0.3.0/24)" (font size 14, bold, #6A1B9A)
    - Shape: Cylinder "RDS PostgreSQL (Primary)" at (1300, 550), 500x200, fill #F3E5F5, border #6A1B9A
      - Text: "db.r6g.xlarge | 500 GB gp3"
      - Text: "PostgreSQL 15.4 | Multi-AZ: Yes"
      - Text: "Automated backups: 7 days"
      - Text: "IOPS: 3000 provisioned"
    - Shape: Cylinder "RDS PostgreSQL (Read Replica)" at (1300, 800), 500x180, fill #F3E5F5, border #6A1B9A, dashed
      - Text: "db.r6g.large | Read-only"
      - Text: "Replication lag: <1s"
    - Shape: Cylinder "MongoDB Atlas" at (1300, 1030), 500x180, fill #E8F5E9, border #47A248
      - Text: "M30 cluster | 100 GB"
      - Text: "Products & catalog data"
    - Shape: Rectangle "S3: prod-assets" at (1300, 1260), 500x150, fill #FBE9E7, border #E64A19
      - Text: "2 TB | CDN-backed via CloudFront"
      - Text: "Lifecycle: 90d → IA, 365d → Glacier"
    - Shape: Rectangle "S3: prod-backups" at (1300, 1450), 500x150, fill #FBE9E7, border #E64A19
      - Text: "500 GB | Versioned | Encrypted (KMS)"
      - Text: "Cross-region replication to eu-west-1"
    - Sticky note: "Monthly cost: ~$1,200 (RDS) + $300 (MongoDB) + $50 (S3)" at (1300, 1650), 350x100, fill #FFF9C4

### Frame 3: DR Region (eu-west-1)

- **Position**: (2650, 250)
- **Size**: 2500x1800px
- **Background**: #E8EAF6 (light indigo, slightly different from primary to distinguish)
- **Elements**:
  - Header text: "Region: eu-west-1 (Disaster Recovery)" (font size 24, bold, #1A237E)
  - Subtext: "2 Availability Zones | Warm standby | RPO: 1 hour, RTO: 30 min" (font size 12, #546E7A)
  - VPC Container at (2700, 350):
    - Rectangle 2350x1600, fill white, border 2px dashed #00897B
    - Header: "VPC: dr-vpc (10.1.0.0/16)" (font size 18, bold, #00897B)
  - Simplified subnet structure mirroring primary region but at reduced scale:
    - Public Subnet (10.1.1.0/24): ALB (standby), NAT Gateway
    - Private Subnet (10.1.2.0/24): ECS Cluster (scaled to min 1), ElastiCache (single node)
    - Database Subnet (10.1.3.0/24): RDS Read Replica (cross-region), S3 backup replica
  - Sticky note: "DR Monthly cost: ~$400 (warm standby)" at (3800, 1700), 300x100, fill #FFF9C4
  - Sticky note: "Failover procedure: Route 53 health check triggers automatic DNS failover" at (2750, 1700), 400x120, fill #FCE4EC

### Frame 4: VPC Peering & Cross-Region Connection

- **Position**: Between the two region frames
- **Elements**:
  - Bidirectional connector between primary VPC and DR VPC
  - Label: "VPC Peering | CIDR: 10.0.0.0/16 <-> 10.1.0.0/16"
  - Label: "Encrypted | Private network"
  - Sticky note: "Cross-region data transfer: ~$0.02/GB" at midpoint, 250x80, fill #FFF9C4

### Frame 5: Shared Services (Global)

- **Position**: (50, 2150)
- **Size**: 5100x500px
- **Background**: #E0F2F1 (light teal)
- **Elements**:
  - Header text: "Shared Services (Global)" (font size 24, bold, #00897B)
  - Shape: Rectangle "Route 53" at (100, 2250), 350x150, fill #FF9900, text white
    - Text: "DNS | Health checks | Failover routing"
    - Text: "Hosted zones: 3 | Records: 45"
  - Shape: Rectangle "CloudFront" at (500, 2250), 400x150, fill #FF9900, text white
    - Text: "CDN | 12 edge locations"
    - Text: "Cache hit ratio: 92% | ~500 GB/mo"
  - Shape: Rectangle "ECR" at (950, 2250), 300x150, fill #FF9900, text white
    - Text: "Container registry"
    - Text: "Images: 15 repos | Lifecycle: 30 tags"
  - Shape: Rectangle "IAM" at (1300, 2250), 300x150, fill #C62828, text white
    - Text: "Roles: 25 | Policies: 40"
    - Text: "SSO via Okta SAML"
  - Shape: Rectangle "KMS" at (1650, 2250), 300x150, fill #C62828, text white
    - Text: "CMK: 5 keys"
    - Text: "Automatic rotation: 365 days"
  - Shape: Rectangle "Secrets Manager" at (2000, 2250), 400x150, fill #C62828, text white
    - Text: "Secrets: 28 | Rotation: enabled"
    - Text: "DB credentials, API keys"
  - Shape: Rectangle "WAF" at (2450, 2250), 300x150, fill #C62828, text white
    - Text: "Web Application Firewall"
    - Text: "Rules: OWASP Top 10, rate limiting, geo-blocking"
  - Shape: Rectangle "CloudTrail" at (2800, 2250), 350x150, fill #F9A825, text #212121
    - Text: "Audit logging | All regions"
    - Text: "S3 storage | 90-day retention"

### Frame 6: CI/CD Pipeline

- **Position**: (50, 2750)
- **Size**: 5100x500px
- **Background**: #E8F5E9 (light green)
- **Elements**:
  - Header text: "CI/CD Pipeline" (font size 24, bold, #2E7D32)
  - Pipeline stages connected left-to-right with arrows:
  - Shape: Rectangle "GitHub" at (100, 2850), 350x150, fill #24292E, text white
    - Text: "Source: main branch"
    - Text: "PR required, 2 approvals"
  - Arrow → (solid, 3px, #2E7D32)
  - Shape: Rectangle "GitHub Actions" at (550, 2850), 400x150, fill #2E7D32, text white
    - Text: "Lint → Test → Build"
    - Text: "~4 min total | 95% pass rate"
  - Arrow →
  - Shape: Rectangle "Docker Build" at (1050, 2850), 350x150, fill #2496ED, text white
    - Text: "Multi-stage build"
    - Text: "node:18-alpine base"
  - Arrow →
  - Shape: Rectangle "ECR Push" at (1500, 2850), 300x150, fill #FF9900, text white
    - Text: "Tag: git SHA + latest"
    - Text: "Vulnerability scan"
  - Arrow →
  - Shape: Rectangle "ArgoCD" at (1900, 2850), 350x150, fill #EF6C00, text white
    - Text: "GitOps deploy"
    - Text: "Sync: automatic"
  - Arrow →
  - Shape: Rectangle "Canary Deploy" at (2350, 2850), 400x150, fill #2E7D32, text white
    - Text: "10% traffic → 5 min monitor"
    - Text: "Auto-rollback on 5xx spike"
  - Arrow →
  - Shape: Rectangle "Full Rollout" at (2850, 2850), 350x150, fill #2E7D32, text white
    - Text: "100% traffic"
    - Text: "~10 deploys/day"
  - Sticky note: "Deployment frequency: 10/day | MTTR: 15 min | Change fail rate: 3%" at (3300, 2850), 400x120, fill #FFF9C4

### Frame 7: Monitoring & Observability

- **Position**: (50, 3350)
- **Size**: 5100x500px
- **Background**: #FFF8E1 (light amber)
- **Elements**:
  - Header text: "Monitoring & Observability" (font size 24, bold, #F9A825)
  - Shape: Rectangle "CloudWatch" at (100, 3450), 400x150, fill #FF9900, text white
    - Text: "Metrics: CPU, memory, request count"
    - Text: "Alarms: 35 active | Dashboards: 8"
  - Shape: Rectangle "Datadog" at (550, 3450), 400x150, fill #632CA6, text white
    - Text: "APM: All services traced"
    - Text: "Custom metrics: 150 | Dashboards: 12"
  - Shape: Rectangle "ELK Stack" at (1000, 3450), 400x150, fill #005571, text white
    - Text: "Elasticsearch + Kibana"
    - Text: "Log retention: 30 days | ~500 GB"
  - Shape: Rectangle "PagerDuty" at (1450, 3450), 350x150, fill #06AC38, text white
    - Text: "On-call rotation: 3 teams"
    - Text: "Escalation: 5 min → 15 min → manager"
  - Shape: Rectangle "Sentry" at (1850, 3450), 350x150, fill #362D59, text white
    - Text: "Error tracking: All services"
    - Text: "Alert threshold: >10 errors/min"
  - Shape: Rectangle "Uptime Robot" at (2250, 3450), 350x150, fill #2E7D32, text white
    - Text: "External health checks"
    - Text: "Check interval: 1 min | 5 endpoints"

### Frame 8: Notes Zone

- **Position**: (50, 3950)
- **Size**: 5100x500px
- **Background**: White (#FFFFFF)
- **Elements**:
  - Header text: "Notes & Action Items" (font size 20, bold, #212121)
  - Sticky note: "TECH DEBT: Migrate from self-managed ELK to managed OpenSearch — estimated 2 sprints" at (100, 4050), 400x150, fill #FCE4EC
  - Sticky note: "PLANNED: Add us-west-2 region for West Coast latency optimization — Q3 2025" at (550, 4050), 400x150, fill #E3F2FD
  - Sticky note: "RISK: NAT Gateway is single-AZ. If AZ-a fails, private subnet loses internet access. Add NAT to AZ-b." at (1000, 4050), 400x150, fill #FCE4EC
  - Sticky note: "COST: Total infrastructure ~$3,500/mo. Target: reduce to $2,800/mo with Reserved Instances." at (1450, 4050), 400x150, fill #FFF9C4
  - Sticky note: "COMPLIANCE: SOC 2 Type II audit scheduled Q2 2025. All logging/encryption controls verified." at (1900, 4050), 400x150, fill #E8F5E9

## Connectors & Flow

1. **Internet → ALB**: Thick solid line from top of board to ALB in public subnet. Label: "HTTPS/443"
2. **ALB → ECS**: Solid line from ALB to ECS cluster in private subnet. Label: "HTTP/8080 (internal)"
3. **ECS → RDS**: Solid line from ECS to PostgreSQL. Label: "TCP/5432 (pg)"
4. **ECS → ElastiCache**: Dotted line from ECS to Redis. Label: "TCP/6379 (cache)"
5. **ECS → MongoDB**: Solid line from ECS to MongoDB Atlas. Label: "TCP/27017 (TLS)"
6. **ECS → S3**: Dashed line from ECS to S3. Label: "HTTPS (AWS SDK)"
7. **CloudFront → S3**: Solid line from CloudFront to S3 assets. Label: "Origin fetch"
8. **CloudFront → ALB**: Solid line from CloudFront to ALB. Label: "Dynamic origin"
9. **Route 53 → CloudFront**: Solid line. Label: "DNS CNAME"
10. **Route 53 → ALB (DR)**: Dashed line. Label: "Failover routing (health check)"
11. **GitHub → GitHub Actions**: Solid arrow. Label: "Push to main"
12. **ArgoCD → ECS**: Solid arrow. Label: "Rolling update"
13. **RDS Primary → RDS DR Replica**: Dashed line across regions. Label: "Async replication"
14. **S3 Primary → S3 DR**: Dashed line across regions. Label: "Cross-region replication"

## Security Annotations

- At the VPC boundary: "All ingress filtered by Security Groups + NACLs"
- At the ALB: "SSL/TLS termination | Certificate: ACM managed | TLS 1.2+ only"
- At the database subnet: "No direct internet access | Access only from app subnet SG"
- At IAM: "Principle of least privilege | No root account access | MFA enforced"
- At KMS: "All data encrypted at rest (AES-256) | Customer-managed keys"
- At S3: "Bucket policies enforce encryption | Public access blocked"

## Cost Summary (Sticky Notes)

| Component                          | Monthly Cost   |
| ---------------------------------- | -------------- |
| ECS Fargate (8 tasks avg)          | ~$850          |
| RDS PostgreSQL (Primary + Replica) | ~$1,200        |
| ElastiCache Redis                  | ~$480          |
| MongoDB Atlas                      | ~$300          |
| ALB + NAT Gateway                  | ~$225          |
| S3 + CloudFront                    | ~$100          |
| Monitoring (Datadog)               | ~$200          |
| DR Region (warm standby)           | ~$400          |
| **Total**                          | **~$3,755/mo** |

## Variations

1. **GCP Version**: Replace AWS services with GCP equivalents — Cloud Run for ECS, Cloud SQL for RDS, Memorystore for ElastiCache, Cloud Build for GitHub Actions, Cloud CDN for CloudFront
2. **Azure Version**: Replace with Azure equivalents — App Service/AKS for ECS, Azure SQL for RDS, Azure Cache for ElastiCache, Azure DevOps for CI/CD, Front Door for CloudFront
3. **Kubernetes-Native**: Replace ECS with EKS/GKE/AKS, show namespaces, Helm charts, service mesh (Istio), Ingress controller
4. **Serverless**: Replace ECS with Lambda functions, API Gateway, DynamoDB, Step Functions — remove compute management layer
5. **On-Premises/Hybrid**: Add on-prem datacenter frame, VPN/DirectConnect to cloud, hybrid DNS

## Build Instructions

1. Create the board (5200x4500px, background #F5F5F0)
2. Place title block (top-left) and legend (top-right)
3. Create primary region frame with VPC and 3 subnet sub-frames
4. Place compute resources in private subnet
5. Place databases and storage in database subnet
6. Place load balancer and NAT in public subnet
7. Create DR region frame (mirror structure at reduced scale)
8. Add VPC peering connector between regions
9. Create shared services bar below regions
10. Create CI/CD pipeline bar with left-to-right flow
11. Create monitoring bar
12. Add all connectors (network traffic flow)
13. Add security annotations at boundaries
14. Add cost sticky notes per section
15. Add notes zone with tech debt, risks, and planned changes
16. Review: trace a request from internet through to database and back

## Tips & Best Practices

- Keep the nesting depth to maximum 4 levels (account > region > VPC > subnet)
- Always show cost estimates — infrastructure without cost context is incomplete
- Mark security boundaries explicitly (trust boundaries, encryption points)
- Show both the happy path AND the disaster recovery path
- Include the CI/CD pipeline — deployment is part of infrastructure
- Add monitoring coverage — an unmonitored resource is an invisible risk
- Use dashed borders for DR/standby resources to distinguish from active production
- Include the "blast radius" annotation for critical failure scenarios
