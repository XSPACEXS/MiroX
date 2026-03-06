# System Architecture Diagram

## Overview

- **Purpose**: Provide a comprehensive visual representation of a distributed system's architecture, showing how microservices, databases, message queues, load balancers, and external services interconnect. This template helps engineering teams align on system boundaries, data flows, and deployment topology during design reviews, incident response, and onboarding.
- **Best For**: Backend engineering teams designing or documenting microservice architectures, platform teams communicating infrastructure decisions, CTOs presenting technical strategy to stakeholders, new engineers learning the system landscape
- **Complexity**: Advanced
- **Board Size**: 5000x4000px (wide landscape to accommodate horizontal service tiers)

## Color Scheme

| Role              | Color        | Hex     |
| ----------------- | ------------ | ------- |
| Primary (Headers) | Navy Blue    | #0D47A1 |
| Client Tier       | Light Blue   | #E3F2FD |
| API Gateway       | Teal         | #00897B |
| Services Tier     | Indigo       | #1A237E |
| Service Nodes     | Soft Indigo  | #E8EAF6 |
| Database Tier     | Deep Orange  | #E64A19 |
| Database Nodes    | Soft Orange  | #FBE9E7 |
| Message Queue     | Amber        | #F9A825 |
| Cache Layer       | Purple       | #7B1FA2 |
| External Services | Forest Green | #2E7D32 |
| Monitoring        | Red          | #C62828 |
| Background        | Warm Gray    | #F5F5F0 |
| Text              | Charcoal     | #212121 |
| Connector Lines   | Slate        | #546E7A |
| Sync Connectors   | Blue         | #1565C0 |
| Async Connectors  | Amber Dash   | #F9A825 |

## Board Layout

The board uses a top-to-bottom tiered layout representing the flow of requests from clients through the system stack down to data persistence and external integrations.

```
Tier 0 (y: 0-600):       [Clients & CDN]
                               |
Tier 1 (y: 700-1200):    [Load Balancer / API Gateway]
                               |
Tier 2 (y: 1300-2400):   [Microservices Layer]
                          [Auth] [User] [Order] [Payment] [Notification]
                               |           |          |
Tier 3 (y: 2500-3200):   [Message Queue]  [Cache]  [Search]
                               |
Tier 4 (y: 3300-4000):   [Databases & External Services]
                          [PostgreSQL] [MongoDB] [Redis] [S3] [Stripe] [SendGrid]

Approximate positions:
  Clients Frame:        (100, 50) — 4800x500
  Gateway Frame:        (1200, 700) — 2600x450
  Services Frame:       (100, 1300) — 4800x1100
  Middleware Frame:     (100, 2500) — 4800x650
  Data Frame:           (100, 3300) — 4800x650
```

## Frames & Sections

### Frame 1: Client Tier

- **Position**: (100, 50)
- **Size**: 4800x500px
- **Background**: Light Blue (#E3F2FD)
- **Elements**:
  - Header text: "Client Tier" (font size 28, bold, Navy #0D47A1)
  - Shape: Rounded rectangle "Web App (React SPA)" at (200, 150), 400x200, fill #FFFFFF, border #1565C0, 2px
  - Shape: Rounded rectangle "Mobile App (React Native)" at (750, 150), 400x200, fill #FFFFFF, border #1565C0, 2px
  - Shape: Rounded rectangle "Admin Dashboard (Next.js)" at (1300, 150), 400x200, fill #FFFFFF, border #1565C0, 2px
  - Shape: Rounded rectangle "Third-Party Integrations" at (1850, 150), 400x200, fill #FFFFFF, border #1565C0, 2px
  - Shape: Circle "CDN (CloudFront)" at (2500, 200), 160x160, fill #E8F5E9, border #2E7D32
  - Text: "Static assets, images, JS bundles" below CDN (font size 12, #546E7A)
  - Sticky note: "~50K DAU, peak 3K req/s" at (3200, 150), 250x150, fill #FFF9C4

### Frame 2: API Gateway & Load Balancer

- **Position**: (1200, 700)
- **Size**: 2600x450px
- **Background**: Teal tint (#E0F2F1)
- **Elements**:
  - Header text: "API Gateway & Load Balancing" (font size 24, bold, Teal #00897B)
  - Shape: Rectangle "AWS ALB" at (1300, 800), 350x120, fill #00897B, text white
  - Shape: Rectangle "Kong API Gateway" at (1800, 800), 400x120, fill #00897B, text white
  - Shape: Rectangle "Rate Limiter" at (2350, 800), 300x120, fill #00897B, text white
  - Text: "SSL termination, path-based routing, JWT validation" at (1400, 950), font size 14, #546E7A
  - Sticky note: "Rate limit: 1000 req/min per user, 10K req/min per org" at (2800, 800), 300x150, fill #FFF9C4
  - Shape: Diamond "Auth Check" at (1550, 1000), 150x100, fill #FFFFFF, border #00897B

### Frame 3: Microservices Layer

- **Position**: (100, 1300)
- **Size**: 4800x1100px
- **Background**: Soft Indigo (#E8EAF6)
- **Elements**:
  - Header text: "Microservices Layer" (font size 28, bold, Indigo #1A237E)
  - Service block "Auth Service" at (200, 1450):
    - Rectangle 600x350, fill #FFFFFF, border #1A237E, 2px
    - Title: "Auth Service" (bold, 18px, #1A237E)
    - Text: "- JWT token issuance & refresh\n- OAuth2 (Google, GitHub)\n- RBAC permission engine\n- Session management"
    - Badge shape: "Go" at bottom-right, small pill, fill #00ADD8
    - Text: "Port: 8001" (12px, #90A4AE)
  - Service block "User Service" at (950, 1450):
    - Rectangle 600x350, fill #FFFFFF, border #1A237E, 2px
    - Title: "User Service" (bold, 18px, #1A237E)
    - Text: "- Profile CRUD\n- Team management\n- Preferences & settings\n- Avatar upload (S3)"
    - Badge: "Node.js" pill, fill #68A063
    - Text: "Port: 8002"
  - Service block "Order Service" at (1700, 1450):
    - Rectangle 600x350, fill #FFFFFF, border #1A237E, 2px
    - Title: "Order Service" (bold, 18px, #1A237E)
    - Text: "- Order lifecycle (create/update/cancel)\n- Inventory reservation\n- Pricing engine\n- Discount application"
    - Badge: "Python" pill, fill #3776AB
    - Text: "Port: 8003"
  - Service block "Payment Service" at (2450, 1450):
    - Rectangle 600x350, fill #FFFFFF, border #1A237E, 2px
    - Title: "Payment Service" (bold, 18px, #1A237E)
    - Text: "- Stripe integration\n- Invoice generation\n- Refund processing\n- Webhook handling"
    - Badge: "Go" pill, fill #00ADD8
    - Text: "Port: 8004"
  - Service block "Notification Service" at (3200, 1450):
    - Rectangle 600x350, fill #FFFFFF, border #1A237E, 2px
    - Title: "Notification Service" (bold, 18px, #1A237E)
    - Text: "- Email (SendGrid)\n- Push (Firebase)\n- In-app notifications\n- Template engine"
    - Badge: "Node.js" pill, fill #68A063
    - Text: "Port: 8005"
  - Service block "Analytics Service" at (3950, 1450):
    - Rectangle 600x350, fill #FFFFFF, border #1A237E, 2px
    - Title: "Analytics Service" (bold, 18px, #1A237E)
    - Text: "- Event ingestion\n- Funnel tracking\n- Cohort analysis\n- Data export API"
    - Badge: "Python" pill, fill #3776AB
    - Text: "Port: 8006"
  - Sticky note: "All services containerized (Docker), orchestrated via Kubernetes" at (200, 1850), 350x150, fill #C8E6C9

### Frame 4: Middleware Layer (Queues, Cache, Search)

- **Position**: (100, 2500)
- **Size**: 4800x650px
- **Background**: Amber tint (#FFF8E1)
- **Elements**:
  - Header text: "Middleware & Infrastructure Services" (font size 24, bold, Amber #F9A825)
  - Shape: Rectangle "RabbitMQ" at (300, 2650), 500x250, fill #FF6F00, text white
    - Text inside: "Exchanges: order.events, payment.events, notification.events\nQueues: order.created, payment.completed, email.send"
  - Shape: Rectangle "Redis Cache" at (1000, 2650), 500x250, fill #7B1FA2, text white
    - Text inside: "Session store\nRate limit counters\nAPI response cache (TTL: 60s)\nLeaderboard sorted sets"
  - Shape: Rectangle "Elasticsearch" at (1700, 2650), 500x250, fill #FDD835, text #212121
    - Text inside: "Product search index\nLog aggregation\nFull-text search\nAuto-suggest"
  - Shape: Rectangle "Kafka" at (2400, 2650), 500x250, fill #231F20, text white
    - Text inside: "Event streaming\nTopics: user-activity, order-events\nRetention: 7 days\nConsumer groups: analytics, audit"
  - Sticky note: "RabbitMQ for command-style async, Kafka for event streaming" at (3200, 2650), 300x150, fill #FFF9C4
  - Sticky note: "Redis cluster: 3 nodes, 16GB each" at (3600, 2650), 300x150, fill #FFF9C4

### Frame 5: Data & External Services Layer

- **Position**: (100, 3300)
- **Size**: 4800x650px
- **Background**: Soft Orange (#FBE9E7)
- **Elements**:
  - Header text: "Data Persistence & External Services" (font size 24, bold, Deep Orange #E64A19)
  - Shape: Cylinder "PostgreSQL (Primary)" at (200, 3450), 400x250, fill #336791, text white
    - Text: "Users, Orders, Payments\nRead replicas: 2\nPgBouncer connection pool"
  - Shape: Cylinder "MongoDB" at (750, 3450), 400x250, fill #4DB33D, text white
    - Text: "Product catalog\nUser preferences\nNotification logs"
  - Shape: Cylinder "Redis (Persistent)" at (1300, 3450), 400x250, fill #D32F2F, text white
    - Text: "Session store\nJob queues\nAOF persistence"
  - Shape: Rectangle "AWS S3" at (1850, 3450), 350x250, fill #FF9900, text white
    - Text: "File uploads\nStatic assets\nBackups\nData exports"
  - Shape: Rectangle "Stripe" at (2350, 3450), 350x250, fill #635BFF, text white
    - Text: "Payment processing\nSubscription billing\nWebhooks"
  - Shape: Rectangle "SendGrid" at (2850, 3450), 350x250, fill #1A82E2, text white
    - Text: "Transactional email\nMarketing campaigns\nEmail analytics"
  - Shape: Rectangle "Firebase" at (3350, 3450), 350x250, fill #FFCA28, text #212121
    - Text: "Push notifications\nRemote config\nCrashlytics"
  - Sticky note: "Daily backups to S3, 30-day retention, cross-region replication" at (3850, 3450), 350x150, fill #FFF9C4

### Frame 6: Monitoring & Observability (Sidebar)

- **Position**: (4200, 700)
- **Size**: 700x1100px
- **Background**: Red tint (#FFEBEE)
- **Elements**:
  - Header text: "Monitoring & Observability" (font size 20, bold, Red #C62828)
  - Shape: Rectangle "Datadog APM" at (4250, 850), 600x120, fill #632CA6, text white
  - Shape: Rectangle "Grafana + Prometheus" at (4250, 1000), 600x120, fill #E6522C, text white
  - Shape: Rectangle "PagerDuty" at (4250, 1150), 600x120, fill #06AC38, text white
  - Shape: Rectangle "Sentry" at (4250, 1300), 600x120, fill #362D59, text white
  - Shape: Rectangle "ELK Stack" at (4250, 1450), 600x120, fill #005571, text white
  - Text: "SLO: 99.95% uptime\nP99 latency < 200ms\nError budget: 0.05%" at (4250, 1600), font size 14, #C62828

## Connectors & Flow

### Synchronous (solid lines, blue #1565C0, 2px, arrows):

1. **Web App --> ALB**: solid, label "HTTPS"
2. **Mobile App --> ALB**: solid, label "HTTPS"
3. **Admin Dashboard --> ALB**: solid, label "HTTPS"
4. **ALB --> Kong Gateway**: solid, label "Route"
5. **Kong Gateway --> Auth Service**: solid, label "Token validation"
6. **Kong Gateway --> User Service**: solid, label "/api/users/\*"
7. **Kong Gateway --> Order Service**: solid, label "/api/orders/\*"
8. **Kong Gateway --> Payment Service**: solid, label "/api/payments/\*"
9. **User Service --> PostgreSQL**: solid, label "Read/Write"
10. **Order Service --> PostgreSQL**: solid, label "Read/Write"
11. **Payment Service --> Stripe**: solid, label "API calls"
12. **Order Service --> Redis Cache**: solid, label "Cache reads"
13. **Auth Service --> Redis Cache**: solid, label "Session lookup"

### Asynchronous (dashed lines, amber #F9A825, 2px, arrows):

14. **Order Service --> RabbitMQ**: dashed, label "order.created"
15. **Payment Service --> RabbitMQ**: dashed, label "payment.completed"
16. **RabbitMQ --> Notification Service**: dashed, label "email.send"
17. **Notification Service --> SendGrid**: dashed, label "Send email"
18. **Notification Service --> Firebase**: dashed, label "Push"
19. **All Services --> Kafka**: dashed, label "Events"
20. **Kafka --> Analytics Service**: dashed, label "Consume"
21. **Analytics Service --> MongoDB**: solid, label "Write"

### Monitoring (dotted lines, red #C62828, 1px):

22. **All Services --> Datadog**: dotted, label "Metrics"
23. **All Services --> Sentry**: dotted, label "Errors"

## Example Content

**System Name**: "ShopFlow — E-Commerce Platform"

**Architecture Style**: Microservices with event-driven communication

**Key Metrics Box** (top-right corner, 400x200):

- Daily Active Users: 50,000
- Peak requests/sec: 3,200
- Average response time: 45ms (P50), 180ms (P99)
- Services: 6 core, 4 infrastructure
- Database size: 2.4TB total
- Monthly AWS bill: $18,400

**Service Registry Note**: "All services register with Consul for discovery. Health checks every 10s. Circuit breaker pattern via Hystrix."

**Deployment Note**: "Blue-green deployments via ArgoCD. Canary releases for payment service. Feature flags via LaunchDarkly."

## Variations

1. **Monolith-to-Microservices Migration**: Show the existing monolith as a large block on the left, with arrows pointing to the new microservices on the right. Add a "Strangler Fig" pattern overlay showing which modules have been extracted.

2. **Serverless Architecture**: Replace service rectangles with Lambda function icons. Add API Gateway (AWS), Step Functions for orchestration, DynamoDB for data, and SQS for messaging. Adjust the tier layout to show event-driven flows.

3. **Data-Intensive System**: Emphasize the data layer. Add data warehouse (Snowflake/BigQuery), ETL pipelines (Airflow), data lake (S3/GCS), streaming (Kafka), and ML model serving. Reduce the services tier to 2-3 core services.

4. **Simple Three-Tier**: Collapse into Client, Server (single service), Database. Ideal for early-stage startups or internal tools. Remove message queues and caching layers.

## Build Instructions

1. **Create the board**: Set canvas to 5000x4000px with background color #F5F5F0.
2. **Create tier frames**: Build 5 horizontal frames spanning the board width, stacked vertically with 50px gaps between them.
3. **Place client nodes**: In Tier 0, create rounded rectangles for each client app. Add the CDN circle on the right side.
4. **Build the gateway**: In Tier 1, place the ALB, Kong Gateway, and Rate Limiter rectangles centered horizontally.
5. **Create service blocks**: In Tier 2, lay out 6 service rectangles in a row with consistent spacing (~150px gaps). Each service gets a title, description text, tech badge, and port number.
6. **Add middleware**: In Tier 3, place RabbitMQ, Redis, Elasticsearch, and Kafka rectangles evenly spaced.
7. **Place data stores**: In Tier 4, lay out databases as cylinders and external services as rectangles.
8. **Add monitoring sidebar**: Create a vertical frame on the right side spanning Tiers 1-2 with monitoring tool rectangles stacked.
9. **Draw synchronous connectors**: Use solid blue lines with arrows for all request-response flows.
10. **Draw async connectors**: Use dashed amber lines for all event/message flows.
11. **Draw monitoring connectors**: Use dotted red lines from services to monitoring tools.
12. **Add sticky notes**: Place annotation stickies with deployment notes, scaling info, and key decisions.
13. **Add key metrics box**: Place a summary card in the top-right corner with system-level KPIs.
14. **Final review**: Ensure all connectors are properly anchored, labels are readable, and the visual hierarchy clearly shows the tier progression.

## Tips & Best Practices

- **Keep services at the same level of abstraction**: Don't mix high-level services ("Order Service") with low-level utilities ("String Parser") in the same diagram.
- **Use color consistently**: Blue for sync, amber for async, red for monitoring. This makes the diagram scannable at a glance.
- **Show failure modes**: Add small red shapes or notes at critical points (single points of failure, circuit breakers, fallback paths).
- **Version the diagram**: Include a date and version number in the corner. Architecture diagrams go stale quickly.
- **Link to runbooks**: Add small link icons on services that point to their operational runbooks or wiki pages.
- **Don't show everything**: Omit internal service details (class diagrams, function calls) — those belong in service-level docs, not the system diagram.
- **Review with the team**: Architecture diagrams are most valuable when the whole team agrees they're accurate. Schedule quarterly reviews.
