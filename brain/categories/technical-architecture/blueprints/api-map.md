# API Endpoint Map

## Overview

- **Purpose**: Provide a visual directory of all API endpoints organized by domain/resource, showing HTTP methods, route patterns, request/response schemas, authentication requirements, rate limits, and versioning strategy. This template serves as the single source of truth for frontend developers, mobile engineers, and third-party integration partners.
- **Best For**: Full-stack teams documenting REST APIs, backend engineers planning new endpoints, API product managers designing developer experience, technical writers building API reference docs
- **Complexity**: Medium
- **Board Size**: 5000x3500px (wide landscape to display endpoint tables horizontally)

## Color Scheme

| Role                | Color       | Hex     |
| ------------------- | ----------- | ------- |
| Primary (Headers)   | Dark Teal   | #004D40 |
| GET Endpoints       | Green       | #2E7D32 |
| POST Endpoints      | Blue        | #1565C0 |
| PUT/PATCH Endpoints | Amber       | #F9A825 |
| DELETE Endpoints    | Red         | #C62828 |
| Auth Section        | Purple      | #6A1B9A |
| Request Schema      | Light Green | #E8F5E9 |
| Response Schema     | Light Blue  | #E3F2FD |
| Error Schema        | Light Red   | #FFEBEE |
| Background          | Warm Gray   | #F5F5F0 |
| Text                | Charcoal    | #212121 |
| Connector Lines     | Slate       | #546E7A |

## Board Layout

The board uses a grid layout with API resource domains arranged as columns and endpoint details stacked vertically within each column.

```
                    [API Overview & Auth]
                           |
  +-----------+-----------+-----------+-----------+
  |   Users   |   Orders  | Products  | Payments  |
  |  /api/v1/ |  /api/v1/ |  /api/v1/ |  /api/v1/ |
  |   users   |   orders  | products  | payments  |
  |           |           |           |           |
  | GET  list | GET  list | GET  list | GET  list |
  | GET  :id  | GET  :id  | GET  :id  | POST new  |
  | POST new  | POST new  | POST new  | POST rfnd |
  | PUT  upd  | PUT  upd  | PUT  upd  | GET  stat |
  | DEL  :id  | DEL cancel| DEL  :id  |           |
  +-----------+-----------+-----------+-----------+
                           |
                  [Error Codes & Webhooks]

Approximate positions:
  Auth Frame:         (1200, 50) - 2600x500
  Users Column:       (100, 650) - 1100x2000
  Orders Column:      (1300, 650) - 1100x2000
  Products Column:    (2500, 650) - 1100x2000
  Payments Column:    (3700, 650) - 1100x2000
  Errors Frame:       (100, 2800) - 4800x600
```

## Frames & Sections

### Frame 1: API Overview & Authentication

- **Position**: (1200, 50)
- **Size**: 2600x500px
- **Background**: Purple tint (#F3E5F5)
- **Elements**:
  - Header text: "API Overview & Authentication" (font size 28, bold, #6A1B9A)
  - Text block: "Base URL: https://api.shopflow.io/v1" (font size 18, monospace, #212121)
  - Text block: "Versioning: URL path (/v1/, /v2/)" (font size 14, #546E7A)
  - Shape: Rectangle "OAuth2 Flow" at (1250, 200), 500x200, fill #6A1B9A, text white
    - Text: "1. POST /auth/token (client_credentials) 2. Bearer token in Authorization header 3. Token TTL: 1 hour 4. Refresh via POST /auth/refresh"
  - Shape: Rectangle "API Key Auth" at (1850, 200), 500x200, fill #6A1B9A, text white
    - Text: "X-API-Key header, Scopes: read/write/admin, Rate limit by key tier, Rotation every 90 days"
  - Sticky note: "All endpoints require HTTPS. HTTP requests return 301 redirect." at (2450, 200), 280x150, fill #FFF9C4
  - Sticky note: "Content-Type: application/json for all requests and responses." at (2450, 380), 280x100, fill #FFF9C4

### Frame 2: Users API

- **Position**: (100, 650)
- **Size**: 1100x2000px
- **Background**: White (#FFFFFF), border #004D40
- **Elements**:
  - Header text: "Users API" (font size 24, bold, #004D40)
  - Text: "/api/v1/users" (font size 16, monospace, #546E7A)
  - Endpoint card "GET /users" at (150, 780):
    - Shape: Rectangle, 1000x180, fill #E8F5E9, border #2E7D32
    - Method badge: "GET" pill, fill #2E7D32, text white
    - Text: "List all users (paginated)"
    - Text: "Query: ?page=1&limit=20&role=admin&search=john"
    - Text: "Response: { data: User[], meta: { total, page, limit } }"
    - Text: "Auth: Bearer token (scope: read)"
  - Endpoint card "GET /users/:id" at (150, 990):
    - Shape: Rectangle, 1000x160, fill #E8F5E9, border #2E7D32
    - Method badge: "GET" pill, fill #2E7D32, text white
    - Text: "Get user by ID"
    - Text: "Params: :id (UUID)"
    - Text: "Response: { data: User }"
    - Text: "Auth: Bearer token (scope: read)"
  - Endpoint card "POST /users" at (150, 1180):
    - Shape: Rectangle, 1000x200, fill #E3F2FD, border #1565C0
    - Method badge: "POST" pill, fill #1565C0, text white
    - Text: "Create new user"
    - Text: "Body: { email, name, role, teamId? }"
    - Text: "Response: 201 { data: User }"
    - Text: "Validation: email (unique), name (2-100 chars)"
    - Text: "Auth: Bearer token (scope: write)"
  - Endpoint card "PUT /users/:id" at (150, 1410):
    - Shape: Rectangle, 1000x180, fill #FFF8E1, border #F9A825
    - Method badge: "PUT" pill, fill #F9A825, text white
    - Text: "Update user profile"
    - Text: "Body: { name?, avatar?, preferences? }"
    - Text: "Response: { data: User }"
    - Text: "Auth: Bearer token (scope: write, owner or admin)"
  - Endpoint card "DELETE /users/:id" at (150, 1620):
    - Shape: Rectangle, 1000x160, fill #FFEBEE, border #C62828
    - Method badge: "DELETE" pill, fill #C62828, text white
    - Text: "Soft-delete user account"
    - Text: "Response: 204 No Content"
    - Text: "Auth: Bearer token (scope: admin)"
    - Text: "Side effects: cancels active subscriptions"
  - Sticky note: "User schema: { id, email, name, role, avatar, teamId, createdAt, updatedAt }" at (150, 1820), 500x150, fill #FFF9C4

### Frame 3: Orders API

- **Position**: (1300, 650)
- **Size**: 1100x2000px
- **Background**: White (#FFFFFF), border #004D40
- **Elements**:
  - Header text: "Orders API" (font size 24, bold, #004D40)
  - Text: "/api/v1/orders" (font size 16, monospace, #546E7A)
  - Endpoint card "GET /orders" at (1350, 780):
    - Shape: Rectangle, 1000x180, fill #E8F5E9, border #2E7D32
    - Method badge: "GET" pill, fill #2E7D32, text white
    - Text: "List orders (paginated, filterable)"
    - Text: "Query: ?status=pending&from=2026-01-01&to=2026-03-01&userId=uuid"
    - Text: "Response: { data: Order[], meta: { total, page } }"
    - Text: "Auth: Bearer token (scope: read)"
  - Endpoint card "GET /orders/:id" at (1350, 990):
    - Shape: Rectangle, 1000x160, fill #E8F5E9, border #2E7D32
    - Method badge: "GET" pill, fill #2E7D32, text white
    - Text: "Get order with line items"
    - Text: "Includes: items, shipping, payment status"
    - Text: "Response: { data: Order }"
  - Endpoint card "POST /orders" at (1350, 1180):
    - Shape: Rectangle, 1000x220, fill #E3F2FD, border #1565C0
    - Method badge: "POST" pill, fill #1565C0, text white
    - Text: "Create new order"
    - Text: "Body: { items: [{productId, qty}], shippingAddress, couponCode? }"
    - Text: "Response: 201 { data: Order }"
    - Text: "Side effects: reserves inventory, creates payment intent"
    - Text: "Async: publishes order.created event"
  - Endpoint card "PUT /orders/:id" at (1350, 1430):
    - Shape: Rectangle, 1000x180, fill #FFF8E1, border #F9A825
    - Method badge: "PUT" pill, fill #F9A825, text white
    - Text: "Update order (address, add items)"
    - Text: "Only while status = 'pending'"
    - Text: "Body: { shippingAddress?, items? }"
    - Text: "Auth: Bearer (scope: write, owner)"
  - Endpoint card "POST /orders/:id/cancel" at (1350, 1640):
    - Shape: Rectangle, 1000x180, fill #FFEBEE, border #C62828
    - Method badge: "POST" pill, fill #C62828, text white
    - Text: "Cancel order"
    - Text: "Only while status in [pending, confirmed]"
    - Text: "Response: { data: Order, refundId? }"
    - Text: "Side effects: releases inventory, triggers refund"
  - Sticky note: "Order statuses: pending -> confirmed -> shipped -> delivered | cancelled | refunded" at (1350, 1860), 500x120, fill #FFF9C4

### Frame 4: Products API

- **Position**: (2500, 650)
- **Size**: 1100x2000px
- **Background**: White (#FFFFFF), border #004D40
- **Elements**:
  - Header text: "Products API" (font size 24, bold, #004D40)
  - Text: "/api/v1/products" (font size 16, monospace, #546E7A)
  - Endpoint card "GET /products" at (2550, 780):
    - Shape: Rectangle, 1000x180, fill #E8F5E9, border #2E7D32
    - Method badge: "GET" pill, fill #2E7D32, text white
    - Text: "List products with search and filters"
    - Text: "Query: ?q=shoes&category=footwear&minPrice=20&maxPrice=100&sort=price:asc"
    - Text: "Response: { data: Product[], meta: { total, facets } }"
    - Text: "Backed by Elasticsearch for full-text search"
  - Endpoint card "GET /products/:id" at (2550, 990):
    - Shape: Rectangle, 1000x160, fill #E8F5E9, border #2E7D32
    - Method badge: "GET" pill, fill #2E7D32, text white
    - Text: "Get product with variants and reviews"
    - Text: "Includes: variants[], reviews[], inventory count"
    - Text: "Cache: CDN 5min, API 60s"
  - Endpoint card "POST /products" at (2550, 1180):
    - Shape: Rectangle, 1000x200, fill #E3F2FD, border #1565C0
    - Method badge: "POST" pill, fill #1565C0, text white
    - Text: "Create product listing"
    - Text: "Body: { name, description, price, category, images[], variants[] }"
    - Text: "Response: 201 { data: Product }"
    - Text: "Auth: Bearer (scope: write, role: merchant)"
  - Endpoint card "PUT /products/:id" at (2550, 1410):
    - Shape: Rectangle, 1000x180, fill #FFF8E1, border #F9A825
    - Method badge: "PUT" pill, fill #F9A825, text white
    - Text: "Update product details"
    - Text: "Body: { name?, price?, inventory?, status? }"
    - Text: "Invalidates CDN cache on update"
    - Text: "Auth: Bearer (scope: write, owner)"
  - Endpoint card "DELETE /products/:id" at (2550, 1620):
    - Shape: Rectangle, 1000x160, fill #FFEBEE, border #C62828
    - Method badge: "DELETE" pill, fill #C62828, text white
    - Text: "Archive product (soft delete)"
    - Text: "Active orders block deletion"
    - Text: "Auth: Bearer (scope: admin)"
  - Sticky note: "Product schema: { id, name, description, price, category, images[], variants[], rating, reviewCount, inventory, status }" at (2550, 1820), 500x150, fill #FFF9C4

### Frame 5: Payments API

- **Position**: (3700, 650)
- **Size**: 1100x2000px
- **Background**: White (#FFFFFF), border #004D40
- **Elements**:
  - Header text: "Payments API" (font size 24, bold, #004D40)
  - Text: "/api/v1/payments" (font size 16, monospace, #546E7A)
  - Endpoint card "GET /payments" at (3750, 780):
    - Shape: Rectangle, 1000x180, fill #E8F5E9, border #2E7D32
    - Method badge: "GET" pill, fill #2E7D32, text white
    - Text: "List payment transactions"
    - Text: "Query: ?orderId=uuid&status=completed&from=date&to=date"
    - Text: "Response: { data: Payment[], meta: { total, sum } }"
    - Text: "Auth: Bearer (scope: read, role: admin or owner)"
  - Endpoint card "POST /payments" at (3750, 990):
    - Shape: Rectangle, 1000x220, fill #E3F2FD, border #1565C0
    - Method badge: "POST" pill, fill #1565C0, text white
    - Text: "Create payment intent"
    - Text: "Body: { orderId, method: card|bank, currency: USD }"
    - Text: "Response: 201 { data: { paymentId, clientSecret, status } }"
    - Text: "Stripe PaymentIntent created server-side"
    - Text: "Async: publishes payment.initiated event"
  - Endpoint card "POST /payments/:id/refund" at (3750, 1240):
    - Shape: Rectangle, 1000x200, fill #E3F2FD, border #1565C0
    - Method badge: "POST" pill, fill #1565C0, text white
    - Text: "Initiate refund"
    - Text: "Body: { amount?, reason: requested|defective|other }"
    - Text: "Partial refunds supported (amount less than original)"
    - Text: "Response: { data: { refundId, status, amount } }"
    - Text: "Auth: Bearer (scope: write, role: admin)"
  - Endpoint card "GET /payments/:id/status" at (3750, 1470):
    - Shape: Rectangle, 1000x160, fill #E8F5E9, border #2E7D32
    - Method badge: "GET" pill, fill #2E7D32, text white
    - Text: "Check payment status"
    - Text: "Response: { status, amount, method, lastUpdated }"
    - Text: "Webhook: payment.updated sent on status change"
  - Endpoint card "POST /webhooks/stripe" at (3750, 1660):
    - Shape: Rectangle, 1000x180, fill #F3E5F5, border #6A1B9A
    - Method badge: "WEBHOOK" pill, fill #6A1B9A, text white
    - Text: "Stripe webhook receiver"
    - Text: "Events: payment_intent.succeeded, charge.refunded, dispute.created"
    - Text: "Signature verification via Stripe-Signature header"
    - Text: "Idempotent processing via event ID"
  - Sticky note: "Payment statuses: initiated -> processing -> completed | failed | refunded | disputed" at (3750, 1880), 500x120, fill #FFF9C4

### Frame 6: Error Codes & Rate Limits

- **Position**: (100, 2800)
- **Size**: 4800x600px
- **Background**: Light Red (#FFEBEE)
- **Elements**:
  - Header text: "Error Codes & Rate Limits" (font size 24, bold, #C62828)
  - Shape: Rectangle "400 Bad Request" at (150, 2920), 550x100, fill #FFFFFF, border #C62828
    - Text: "Invalid request body or query params. Details in errors[] array."
  - Shape: Rectangle "401 Unauthorized" at (800, 2920), 550x100, fill #FFFFFF, border #C62828
    - Text: "Missing or expired token. Refresh via /auth/refresh."
  - Shape: Rectangle "403 Forbidden" at (1450, 2920), 550x100, fill #FFFFFF, border #C62828
    - Text: "Valid token but insufficient scope or role."
  - Shape: Rectangle "404 Not Found" at (2100, 2920), 550x100, fill #FFFFFF, border #C62828
    - Text: "Resource does not exist or has been soft-deleted."
  - Shape: Rectangle "429 Too Many Requests" at (2750, 2920), 550x100, fill #FFFFFF, border #C62828
    - Text: "Rate limit exceeded. Retry-After header included."
  - Shape: Rectangle "500 Server Error" at (3400, 2920), 550x100, fill #FFFFFF, border #C62828
    - Text: "Internal error. Sentry alert triggered. Correlation ID in response."
  - Sticky note: "Rate limits: Free 100 req/min, Pro 1000 req/min, Enterprise 10K req/min. Headers: X-RateLimit-Remaining, X-RateLimit-Reset" at (4100, 2920), 400x200, fill #FFF9C4

## Connectors & Flow

1. **Auth Frame --> Users API**: solid, #546E7A, 2px, label "JWT required"
2. **Auth Frame --> Orders API**: solid, #546E7A, 2px, label "JWT required"
3. **Auth Frame --> Products API**: solid, #546E7A, 2px, label "JWT required"
4. **Auth Frame --> Payments API**: solid, #546E7A, 2px, label "JWT required"
5. **Orders POST --> Payments POST**: dashed, #1565C0, 2px, label "Creates payment intent"
6. **Orders Cancel --> Payments Refund**: dashed, #C62828, 2px, label "Triggers refund"
7. **Products GET --> Orders POST**: dashed, #546E7A, 1px, label "Validates product availability"
8. **Payments Webhook --> Orders PUT**: dashed, #6A1B9A, 2px, label "Updates order status"

## Example Content

**API Name**: "ShopFlow REST API v1"

**Base URL**: https://api.shopflow.io/v1

**Example Request** (shown in a text block sticky note):

POST /api/v1/orders with Authorization Bearer token, Content-Type application/json. Body includes items array with productId and quantity, shippingAddress with line1/city/state/zip, and optional couponCode.

**Example Response**: 201 Created with data object containing id, status (pending), total (149.99), items array, paymentIntentId, and createdAt timestamp.

## Variations

1. **GraphQL API Map**: Replace REST endpoint cards with Query/Mutation blocks. Show the schema with types, fields, and resolvers. Add a Subscriptions section for real-time updates.

2. **Internal Microservice API**: Remove public auth section. Add service-to-service auth (mTLS or internal tokens). Show gRPC endpoints with protobuf message definitions.

3. **Webhook Registry**: Focus on outbound webhooks. Show event types, payload schemas, retry policies, and delivery status dashboard.

4. **API Versioning Migration**: Show v1 endpoints on the left and v2 on the right with migration arrows. Highlight breaking changes, deprecated fields, and sunset dates.

## Build Instructions

1. **Create the board**: Set canvas to 5000x3500px with background color #F5F5F0.
2. **Place auth frame**: Create the authentication overview frame centered at the top with OAuth2 and API Key sections.
3. **Create resource columns**: Build 4 vertical frames side by side, each 1100px wide and 2000px tall. Label each with the resource name and base path.
4. **Build endpoint cards**: Within each column, stack endpoint cards vertically. Color-code by HTTP method (green=GET, blue=POST, amber=PUT, red=DELETE).
5. **Add method badges**: Place small colored pill shapes with the HTTP method text at the top-left of each endpoint card.
6. **Write request/response details**: Add monospace text for routes, query params, body schemas, and response shapes.
7. **Add auth requirements**: Note the required scope and role on each endpoint card.
8. **Build error reference**: Create the bottom frame with error code rectangles in a horizontal row.
9. **Draw connectors**: Connect the auth frame to each resource column. Add dashed lines between endpoints that trigger each other.
10. **Add sticky notes**: Place schema definitions, rate limit info, and example payloads as sticky notes.
11. **Final review**: Ensure all endpoints are documented, HTTP methods are color-consistent, and the auth flow is clear.

## Tips & Best Practices

- **Color-code HTTP methods consistently**: Green for GET, blue for POST, amber for PUT/PATCH, red for DELETE. This makes scanning the map instant.
- **Show real payloads**: Developers trust documentation more when examples use realistic data, not placeholder text.
- **Document side effects**: If a POST triggers async events, note them explicitly. Hidden side effects cause bugs.
- **Include rate limits on every endpoint**: Different endpoints may have different limits. Do not make developers guess.
- **Version your API map**: Add a "Last Updated" date and API version number. Stale docs are worse than no docs.
- **Link to Postman/Bruno collection**: Add a QR code or link to an importable API collection for quick testing.
