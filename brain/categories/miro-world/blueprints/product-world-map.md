# Product World Map

## Overview

- **Purpose**: Present an entire product ecosystem as an isometric city-style visual map where each "building" or "district" represents a product area. Teams, features, roadmap items, and cross-functional dependencies are visualized as architectural elements — towers for flagship features, bridges for integrations, parks for innovation zones, and roads for user flows. This creates a memorable, navigable overview that stakeholders can explore spatially.
- **Best For**: Product leadership presenting portfolio overviews, CPOs mapping multi-product strategy, engineering teams visualizing system architecture as a city, all-hands meetings where you want to make the product feel tangible and explorable.
- **Complexity**: Advanced
- **Board Size**: 5000 x 3500px

## Color Scheme

| Role                 | Color         | Hex     |
| -------------------- | ------------- | ------- |
| Primary (Sky/BG)     | Deep Navy     | #1A1A2E |
| Secondary (Pathways) | Golden Yellow | #FFD166 |
| Accent (Highlights)  | Mint Green    | #06D6A0 |
| Zone: Core Platform  | Electric Blue | #118AB2 |
| Zone: Growth         | Coral Red     | #EF476F |
| Zone: Integrations   | Purple        | #7B2CBF |
| Zone: Analytics      | Teal          | #0DB39E |
| Zone: Community      | Warm Orange   | #F78C6B |
| Text on Dark         | White         | #FFFFFF |
| Text on Light        | Charcoal      | #212121 |
| Ground/Base          | Soft Slate    | #E8E8E8 |

## Board Layout

The board depicts a bird's-eye isometric city. A large title banner runs across the top. Below it, five major "districts" are arranged like a city campus with roads (connectors) between them. A central plaza acts as the product hub. Decorative elements (clouds, trees, small icons) fill the gaps.

```
+-----------------------------------------------------------------------+
|                 [ PRODUCT WORLD MAP — ACME PLATFORM ]                  |
|           "Navigate the entire product ecosystem at a glance"          |
+-----------------------------------------------------------------------+
|                                                                        |
|    +------------------+          +-----------+                         |
|    | CORE PLATFORM    |  <road>  | GROWTH &  |                        |
|    | DISTRICT         |          | MARKETING |                        |
|    | (Auth, API,      |          | DISTRICT  |                        |
|    |  Dashboard, DB)  |          |           |                        |
|    +------------------+          +-----------+                         |
|             |                         |                                |
|          <road>                    <road>                              |
|             |                         |                                |
|    +------------------+    +---------------------+                    |
|    |  CENTRAL PLAZA   |    | ANALYTICS &         |                    |
|    |  (Product Hub,   |    | INTELLIGENCE        |                    |
|    |   Roadmap Tower) |    | DISTRICT            |                    |
|    +------------------+    +---------------------+                    |
|             |                         |                                |
|          <road>                    <road>                              |
|             |                         |                                |
|    +------------------+    +---------------------+                    |
|    | INTEGRATIONS     |    | COMMUNITY &         |                    |
|    | BRIDGE DISTRICT  |    | ECOSYSTEM PARK      |                    |
|    +------------------+    +---------------------+                    |
|                                                                        |
|    [ Legend ]  [ Version: Q1 2026 ]  [ Last updated: March 6, 2026 ]  |
+-----------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Title Banner — The Skyline

- **Position**: Top of board, full width
- **Size**: 4800 x 450px
- **Background**: Deep Navy (#1A1A2E)
- **Elements**:
  - Text block: "Product World Map" — font size 64, bold, White (#FFFFFF), centered
  - Text block: "ACME Platform — Q1 2026 Product Ecosystem" — font size 28, regular, Golden Yellow (#FFD166), centered below title
  - Text block: "Navigate the entire product landscape. Each district = a product area. Click any building to explore." — font size 18, italic, Mint Green (#06D6A0), centered below subtitle
  - Shape: Horizontal decorative line, 3800px wide, 2px, Golden Yellow (#FFD166)
  - Sticky note (dark, #2D2D44): "Board Owner: Product Team | 47 features mapped | 6 teams represented"
  - Shape: Small cloud shapes (3x) along top edge, white with 20% opacity, purely decorative

### Frame 2: Core Platform District

- **Position**: Upper-left zone
- **Size**: 1500 x 1000px
- **Background**: Electric Blue (#118AB2) at 12% opacity
- **Elements**:
  - Text block: "Core Platform District" — font size 36, bold, Electric Blue (#118AB2)
  - Text block: "The foundation — authentication, API gateway, database layer, and admin dashboard" — font size 14, Charcoal
  - Shape: Large rectangle "Authentication Tower" — (#118AB2), labeled "SSO, MFA, OAuth 2.0 | Team: Identity | Status: Stable"
  - Shape: Rectangle "API Gateway" — (#1B98A8), labeled "REST + GraphQL | 12ms avg latency | 99.97% uptime"
  - Shape: Rectangle "Admin Dashboard" — (#1590A8), labeled "User management, billing, audit logs | v3.2 released"
  - Shape: Rectangle "Database Layer" — (#0E7490), labeled "PostgreSQL primary, Redis cache, Elasticsearch | Team: Infra"
  - Sticky note (light blue, #BBDEFB): "Q2 Priority: Migrate to connection pooling — 40% latency reduction expected"
  - Sticky note (light blue, #BBDEFB): "New: API v4 beta with streaming endpoints — 23 early adopters testing"
  - Sticky note (yellow, #FFF9C4): "Risk: Auth service single point of failure — HA cluster planned Q2"
  - Sticky note (green, #C8E6C9): "Shipped: Dashboard redesign — NPS jumped from 32 to 58"
  - Shape: Small "building" icon in top-left corner of frame
  - Text block: "Team Lead: Sarah Chen | 8 engineers | Sprint velocity: 42 pts/sprint" — font size 12, Slate Grey

### Frame 3: Growth & Marketing District

- **Position**: Upper-right zone
- **Size**: 1400 x 1000px
- **Background**: Coral Red (#EF476F) at 10% opacity
- **Elements**:
  - Text block: "Growth & Marketing District" — font size 36, bold, Coral Red (#EF476F)
  - Text block: "Acquisition, onboarding, engagement loops, and marketing automation" — font size 14, Charcoal
  - Shape: Rectangle "Onboarding Flow" — (#EF476F), labeled "7-step wizard | 67% completion rate | Target: 80%"
  - Shape: Rectangle "Email Engine" — (#E0456F), labeled "Drip campaigns, transactional, newsletters | 340K monthly sends"
  - Shape: Rectangle "Growth Experiments" — (#D63A5F), labeled "A/B testing framework | 12 active experiments"
  - Shape: Rectangle "Referral Program" — (#CC2F4F), labeled "2-sided rewards | 18% of new signups from referrals"
  - Sticky note (pink, #F8BBD0): "Q2 Priority: Rebuild onboarding for enterprise segment — 3x longer setup"
  - Sticky note (pink, #F8BBD0): "New: In-app product tours using Shepherd.js — reduces support tickets 25%"
  - Sticky note (pink, #F8BBD0): "Experiment winner: Social proof on pricing page +14% conversion"
  - Sticky note (yellow, #FFF9C4): "Blocked: Email deliverability issues with Gmail — investigating SPF/DKIM"
  - Shape: Small "megaphone" icon
  - Text block: "Team Lead: Marcus Rivera | 5 engineers, 2 designers | MRR impact: +$45K/mo" — font size 12

### Frame 4: Central Plaza — Product Hub

- **Position**: Center of board
- **Size**: 1200 x 800px
- **Background**: White (#FFFFFF) with Golden Yellow (#FFD166) 4px border
- **Elements**:
  - Text block: "Central Plaza" — font size 42, bold, Deep Navy (#1A1A2E)
  - Text block: "The heart of the product — where all districts connect" — font size 16, italic, Charcoal
  - Shape: Diamond "Product Vision" — Golden Yellow (#FFD166), large, labeled "Become the #1 collaborative workspace for distributed teams by 2027"
  - Shape: Rectangle "Roadmap Tower" — Mint Green (#06D6A0), labeled "Q1: 8 shipped | Q2: 14 planned | Q3: 9 in discovery"
  - Shape: Rectangle "North Star Metric" — (#FFD166), labeled "Weekly Active Collaborators: 124,000 (+22% QoQ)"
  - Sticky note (green, #C8E6C9): "OKR Status: 3 of 5 key results on track | 1 at risk | 1 behind"
  - Sticky note (mint, #B2DFDB): "Next all-hands demo: March 15 — featuring Analytics District v2 launch"
  - Shape: Circle "Product Council" — Deep Navy, white text, labeled "Meets biweekly — prioritization decisions"
  - Text block: "CPO: Yuki Tanaka | Product Managers: 6 | Total headcount across districts: 52" — font size 12

### Frame 5: Analytics & Intelligence District

- **Position**: Middle-right zone
- **Size**: 1400 x 900px
- **Background**: Teal (#0DB39E) at 10% opacity
- **Elements**:
  - Text block: "Analytics & Intelligence District" — font size 36, bold, Teal (#0DB39E)
  - Text block: "Data pipelines, dashboards, ML models, and business intelligence" — font size 14, Charcoal
  - Shape: Rectangle "Data Pipeline" — (#0DB39E), labeled "ETL: Airflow + dbt | 2.3TB daily processed | 99.9% SLA"
  - Shape: Rectangle "BI Dashboard" — (#0CA38E), labeled "Looker + custom dashboards | 340 daily active users"
  - Shape: Rectangle "ML Models" — (#0B937E), labeled "Churn prediction (87% acc), Lead scoring (72% acc), Usage anomaly detection"
  - Shape: Rectangle "Event Tracking" — (#0A836E), labeled "Segment + Amplitude | 450 events tracked | 12M events/day"
  - Sticky note (teal, #B2DFDB): "Q2 Priority: Real-time analytics dashboard — <5 second data freshness"
  - Sticky note (teal, #B2DFDB): "New: AI-powered insight summaries — auto-generates weekly product reports"
  - Sticky note (teal, #B2DFDB): "Shipped: Cohort analysis builder — adopted by 89% of CSMs in first week"
  - Sticky note (yellow, #FFF9C4): "Tech debt: Legacy Redshift cluster — migration to BigQuery in progress"
  - Text block: "Team Lead: James O'Brien | 6 engineers, 2 data scientists | Data freshness: 15 min" — font size 12

### Frame 6: Integrations Bridge District

- **Position**: Lower-left zone
- **Size**: 1500 x 900px
- **Background**: Purple (#7B2CBF) at 10% opacity
- **Elements**:
  - Text block: "Integrations Bridge District" — font size 36, bold, Purple (#7B2CBF)
  - Text block: "Connecting ACME to the tools teams already use — bridges between worlds" — font size 14, Charcoal
  - Shape: Rectangle "Slack Integration" — (#7B2CBF), labeled "Real-time notifications, /acme commands | 8,200 workspaces connected"
  - Shape: Rectangle "Jira Sync" — (#6B1CAF), labeled "2-way sync: tickets, statuses, comments | 3,100 projects linked"
  - Shape: Rectangle "GitHub Bridge" — (#5B0C9F), labeled "PR previews, commit linking, deploy status | 1,900 repos connected"
  - Shape: Rectangle "Zapier & Webhooks" — (#4B008F), labeled "420 Zap templates | Custom webhooks: 12K active"
  - Shape: Rectangle "API Marketplace" — (#8B3CCF), labeled "Public API: 2,300 registered developers | 67 published apps"
  - Sticky note (lavender, #E1BEE7): "Q2 Priority: Salesforce integration — top requested feature (340 votes)"
  - Sticky note (lavender, #E1BEE7): "New: Figma plugin for design-to-board sync — beta with 45 design teams"
  - Sticky note (lavender, #E1BEE7): "Shipped: Microsoft Teams integration — 1,200 installs in first 2 weeks"
  - Sticky note (yellow, #FFF9C4): "Partner program: 12 certified integration partners, 8 more in pipeline"
  - Text block: "Team Lead: Priya Sharma | 7 engineers | Integrations: 24 native + 420 via Zapier" — font size 12

### Frame 7: Community & Ecosystem Park

- **Position**: Lower-right zone
- **Size**: 1400 x 900px
- **Background**: Warm Orange (#F78C6B) at 10% opacity
- **Elements**:
  - Text block: "Community & Ecosystem Park" — font size 36, bold, Warm Orange (#F78C6B)
  - Text block: "The green space — community, templates, education, and the user ecosystem" — font size 14, Charcoal
  - Shape: Rectangle "Template Library" — (#F78C6B), labeled "342 templates | 28 new this quarter | Top: Project Kickoff (12K uses)"
  - Shape: Rectangle "Community Forum" — (#E77C5B), labeled "14,000 members | 890 posts/month | 92% response rate within 24h"
  - Shape: Rectangle "Academy" — (#D76C4B), labeled "Learning paths: 8 | Certified users: 2,340 | Course completion: 74%"
  - Shape: Rectangle "Developer Hub" — (#C75C3B), labeled "API docs, SDKs (JS, Python, Go), sandbox environment"
  - Sticky note (orange, #FFE0B2): "Q2 Priority: Launch community-created template marketplace with revenue sharing"
  - Sticky note (orange, #FFE0B2): "New: 'Build with ACME' YouTube series — 12 episodes, 45K total views"
  - Sticky note (orange, #FFE0B2): "Event: ACMEconf 2026 — June 12-14, Austin TX — 2,000 expected attendees"
  - Sticky note (green, #C8E6C9): "Milestone: Community forum hit 14K members — up 3x from last year"
  - Text block: "Team Lead: Derek Cho | 4 engineers, 2 community managers, 1 content writer" — font size 12

### Frame 8: Legend & Meta Information

- **Position**: Bottom strip
- **Size**: 4800 x 300px
- **Background**: Soft Slate (#E8E8E8)
- **Elements**:
  - Text block: "Legend" — font size 24, bold, Charcoal
  - Shape: Small square Electric Blue + label "Core Platform"
  - Shape: Small square Coral Red + label "Growth & Marketing"
  - Shape: Small square Teal + label "Analytics & Intelligence"
  - Shape: Small square Purple + label "Integrations"
  - Shape: Small square Warm Orange + label "Community & Ecosystem"
  - Shape: Small circle Golden Yellow + label "Strategic / Cross-cutting"
  - Text block: "Status colors: Green = Shipped | Yellow = At Risk | Pink = Blocked | Blue = In Progress" — font size 14
  - Text block: "Version: Q1 2026 | Last updated: March 6, 2026 | Next review: March 20, 2026" — font size 12, Slate Grey

## Connectors & Flow

Main pathways (styled as "roads" — thick Golden Yellow lines):

1. **Core Platform --> Central Plaza**: Thick line, Golden Yellow (#FFD166), 5px width, bidirectional arrows, labeled "Foundation feeds Hub"
2. **Growth District --> Central Plaza**: Thick line, Golden Yellow (#FFD166), 5px width, bidirectional arrows, labeled "Growth metrics to Hub"
3. **Central Plaza --> Analytics District**: Thick line, Golden Yellow (#FFD166), 5px width, arrow to Analytics, labeled "Data flows to Intelligence"
4. **Central Plaza --> Integrations Bridge**: Thick line, Golden Yellow (#FFD166), 5px width, arrow to Integrations, labeled "Core APIs power bridges"
5. **Integrations Bridge --> Community Park**: Thick line, Golden Yellow (#FFD166), 5px width, arrow to Community, labeled "Integrations serve ecosystem"
6. **Analytics District --> Growth District**: Thick line, Golden Yellow (#FFD166), 5px width, arrow to Growth, labeled "Insights drive experiments"

Cross-district connections (dashed lines, 2px, Mint Green #06D6A0):

- Core Platform "API Gateway" --> Integrations "API Marketplace" (labeled "powers partner apps")
- Growth "Onboarding Flow" --> Community "Template Library" (labeled "templates accelerate onboarding")
- Analytics "ML Models" --> Growth "Growth Experiments" (labeled "predictions inform experiments")
- Community "Developer Hub" --> Integrations "Zapier & Webhooks" (labeled "docs enable custom integrations")

## Example Content

The board maps the fictitious "ACME Platform" — a collaborative workspace SaaS product. Key metrics embedded throughout:

- **Total features mapped**: 47 across 6 districts
- **Total headcount**: 52 people across all product teams
- **Key metric**: 124,000 Weekly Active Collaborators (+22% QoQ)
- **Integrations**: 24 native + 420 via Zapier
- **Community**: 14,000 forum members, 342 templates
- **Infrastructure**: 99.97% API uptime, 2.3TB daily data processed

## Variations

1. **Startup Product Map**: Reduce to 3 districts (Core, Growth, Community). Smaller board (3500 x 2500px). Focus on MVP features and immediate roadmap.
2. **Enterprise Portfolio Map**: Expand to 8+ districts. Add districts for Security & Compliance, Enterprise Admin, and Professional Services. Include SLA indicators on each building.
3. **Technical Architecture City**: Replace product-centric labels with technical architecture — microservices as buildings, message queues as roads, databases as warehouses, CDN as broadcast towers.
4. **Quarterly Review Map**: Same districts but add "Q1 Scorecard" overlay on each — green/yellow/red status, key wins, misses, and Q2 commitments.

## Build Instructions

1. Create the board at 5000 x 3500px with Deep Navy (#1A1A2E) background.
2. Place the title banner frame (4800 x 450px) at the top. Set background to Deep Navy. Add title in white 64pt, subtitle in golden yellow 28pt, description in mint green 18pt. Add decorative cloud shapes.
3. Create the Core Platform District frame (1500 x 1000px) at upper-left. Set background to Electric Blue at 12% opacity. Add the header, building rectangles, sticky notes, and team info.
4. Create the Growth & Marketing District frame (1400 x 1000px) at upper-right. Set background to Coral Red at 10% opacity. Populate with growth-focused buildings and experiment stickies.
5. Place the Central Plaza frame (1200 x 800px) at board center. Use white background with golden yellow border. Add the Product Vision diamond, Roadmap Tower, and North Star Metric.
6. Create the Analytics & Intelligence District (1400 x 900px) at middle-right. Teal tinted background. Add data pipeline buildings and ML model blocks.
7. Create the Integrations Bridge District (1500 x 900px) at lower-left. Purple tinted background. Add integration rectangles with real connection counts.
8. Create the Community & Ecosystem Park (1400 x 900px) at lower-right. Warm orange tinted background. Add community metrics and ecosystem elements.
9. Place the Legend & Meta frame (4800 x 300px) at the bottom strip. Add color-coded legend squares and status key.
10. Draw all "road" connectors between districts using 5px Golden Yellow lines with bidirectional arrows.
11. Add cross-district dashed connections in Mint Green for dependency relationships.
12. Add decorative elements: small tree shapes between districts, cloud shapes at top, small star shapes scattered.
13. Lock all frame backgrounds and decorative elements. Leave sticky notes and status indicators unlocked for live updates.

## Tips & Best Practices

- Use Miro's presentation mode to "fly through" the city district by district during all-hands meetings.
- Assign each district to a Product Manager who keeps their zone updated weekly.
- Use the sticky note colors consistently: green = shipped, yellow = risk, pink = blocked, blue = in progress.
- Add Miro links on each building shape that jump to detailed sub-boards for that product area.
- Export as a poster-sized print for the office wall — teams love having a physical map of the product.
- During quarterly planning, duplicate the board and update districts to reflect the new quarter's priorities.
- Use Miro comments on specific buildings to capture async feedback from leadership.
