# Database Schema Diagram

## Overview

- **Purpose**: Visualize the complete entity-relationship model of a database, showing tables, columns, data types, primary/foreign keys, relationships, indexes, and constraints. This template helps engineering teams understand data structure, plan migrations, onboard new developers, and communicate schema decisions during design reviews.
- **Best For**: Backend engineers designing data models, DBAs optimizing schema performance, teams planning database migrations, new developers understanding the data layer
- **Complexity**: Advanced
- **Board Size**: 5000x4000px (wide landscape to accommodate many tables with relationship lines)

## Color Scheme

| Role               | Color       | Hex     |
| ------------------ | ----------- | ------- |
| Primary (Headers)  | Dark Blue   | #0D47A1 |
| Core Tables        | Blue        | #1565C0 |
| Core Table Fill    | Light Blue  | #E3F2FD |
| Junction Tables    | Amber       | #F9A825 |
| Junction Fill      | Light Amber | #FFF8E1 |
| Lookup Tables      | Green       | #2E7D32 |
| Lookup Fill        | Light Green | #E8F5E9 |
| Primary Key        | Gold        | #FF8F00 |
| Foreign Key        | Purple      | #6A1B9A |
| Index Indicator    | Teal        | #00897B |
| Relationship Lines | Slate       | #546E7A |
| Background         | Warm Gray   | #F5F5F0 |
| Text               | Charcoal    | #212121 |

## Board Layout

The board uses a structured layout with core entity tables in the center, junction/linking tables between related entities, and lookup/reference tables along the edges.

```
  [users]--------[teams]          [products]-------[categories]
     |               |                |                  |
     |          [team_members]        |            [product_tags]
     |               |                |
  [orders]-------[order_items]---[product_variants]
     |                                |
  [payments]     [addresses]     [inventory]
     |
  [refunds]      [audit_log]     [notifications]

Approximate positions:
  Users:            (100, 200) - 700x600
  Teams:            (1000, 200) - 700x450
  Team Members:     (1000, 750) - 700x350
  Orders:           (100, 1000) - 700x650
  Order Items:      (1000, 1200) - 700x500
  Payments:         (100, 1850) - 700x550
  Refunds:          (100, 2550) - 700x450
  Products:         (2000, 200) - 700x700
  Product Variants: (2000, 1050) - 700x500
  Categories:       (2900, 200) - 700x400
  Product Tags:     (2900, 700) - 700x350
  Inventory:        (2000, 1700) - 700x400
  Addresses:        (1000, 1850) - 700x450
  Audit Log:        (2900, 1200) - 700x500
  Notifications:    (2900, 1850) - 700x450
```

## Frames & Sections

### Frame 1: Core Domain Header

- **Position**: (100, 30)
- **Size**: 4800x120px
- **Background**: Dark Blue (#0D47A1)
- **Elements**:
  - Text: "ShopFlow Database Schema — PostgreSQL 16" (font size 32, bold, white)
  - Text: "Last updated: 2026-03-06 | 15 tables | 127 columns | 23 indexes" (font size 14, #B0BEC5)

### Table: users

- **Position**: (100, 200)
- **Size**: 700x600px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: Rectangle 700x50, fill #1565C0, text "users" white bold 18px
  - Column rows (alternating white/#F5F5F5):
    - "id UUID PK DEFAULT gen_random_uuid()" — gold key icon
    - "email VARCHAR(255) UNIQUE NOT NULL" — teal index icon
    - "name VARCHAR(100) NOT NULL"
    - "password_hash VARCHAR(255) NOT NULL"
    - "role ENUM('user','admin','merchant') DEFAULT 'user'"
    - "avatar_url TEXT NULL"
    - "team_id UUID FK -> teams.id NULL" — purple key icon
    - "email_verified BOOLEAN DEFAULT false"
    - "last_login_at TIMESTAMP NULL"
    - "created_at TIMESTAMP DEFAULT NOW()"
    - "updated_at TIMESTAMP DEFAULT NOW()"
    - "deleted_at TIMESTAMP NULL"
  - Footer: "Indexes: idx_users_email (UNIQUE), idx_users_team_id, idx_users_role"

### Table: teams

- **Position**: (1000, 200)
- **Size**: 700x450px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: "teams" fill #1565C0, text white
  - Columns:
    - "id UUID PK DEFAULT gen_random_uuid()"
    - "name VARCHAR(100) NOT NULL"
    - "slug VARCHAR(100) UNIQUE NOT NULL"
    - "owner_id UUID FK -> users.id NOT NULL"
    - "plan ENUM('free','pro','enterprise') DEFAULT 'free'"
    - "max_members INT DEFAULT 5"
    - "created_at TIMESTAMP DEFAULT NOW()"
    - "updated_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_teams_slug (UNIQUE), idx_teams_owner_id"

### Table: team_members (Junction)

- **Position**: (1000, 750)
- **Size**: 700x350px
- **Background**: Light Amber (#FFF8E1), border #F9A825, 2px
- **Elements**:
  - Header bar: "team_members" fill #F9A825, text white
  - Columns:
    - "id UUID PK"
    - "team_id UUID FK -> teams.id NOT NULL"
    - "user_id UUID FK -> users.id NOT NULL"
    - "role ENUM('member','editor','admin') DEFAULT 'member'"
    - "invited_at TIMESTAMP DEFAULT NOW()"
    - "joined_at TIMESTAMP NULL"
  - Footer: "Indexes: idx_team_members_unique (team_id, user_id) UNIQUE"

### Table: orders

- **Position**: (100, 1000)
- **Size**: 700x650px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: "orders" fill #1565C0, text white
  - Columns:
    - "id UUID PK DEFAULT gen_random_uuid()"
    - "user_id UUID FK -> users.id NOT NULL"
    - "status ENUM('pending','confirmed','shipped','delivered','cancelled','refunded') DEFAULT 'pending'"
    - "subtotal DECIMAL(10,2) NOT NULL"
    - "discount DECIMAL(10,2) DEFAULT 0"
    - "tax DECIMAL(10,2) DEFAULT 0"
    - "total DECIMAL(10,2) NOT NULL"
    - "shipping_address_id UUID FK -> addresses.id"
    - "coupon_code VARCHAR(50) NULL"
    - "notes TEXT NULL"
    - "confirmed_at TIMESTAMP NULL"
    - "shipped_at TIMESTAMP NULL"
    - "delivered_at TIMESTAMP NULL"
    - "created_at TIMESTAMP DEFAULT NOW()"
    - "updated_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_orders_user_id, idx_orders_status, idx_orders_created_at"

### Table: order_items (Junction)

- **Position**: (1000, 1200)
- **Size**: 700x500px
- **Background**: Light Amber (#FFF8E1), border #F9A825, 2px
- **Elements**:
  - Header bar: "order_items" fill #F9A825, text white
  - Columns:
    - "id UUID PK"
    - "order_id UUID FK -> orders.id NOT NULL"
    - "product_id UUID FK -> products.id NOT NULL"
    - "variant_id UUID FK -> product_variants.id NULL"
    - "quantity INT NOT NULL CHECK (quantity > 0)"
    - "unit_price DECIMAL(10,2) NOT NULL"
    - "total_price DECIMAL(10,2) NOT NULL"
    - "created_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_order_items_order_id, idx_order_items_product_id"

### Table: payments

- **Position**: (100, 1850)
- **Size**: 700x550px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: "payments" fill #1565C0, text white
  - Columns:
    - "id UUID PK"
    - "order_id UUID FK -> orders.id NOT NULL"
    - "stripe_payment_intent_id VARCHAR(255) UNIQUE"
    - "amount DECIMAL(10,2) NOT NULL"
    - "currency VARCHAR(3) DEFAULT 'USD'"
    - "method ENUM('card','bank','wallet') NOT NULL"
    - "status ENUM('initiated','processing','completed','failed') DEFAULT 'initiated'"
    - "paid_at TIMESTAMP NULL"
    - "created_at TIMESTAMP DEFAULT NOW()"
    - "updated_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_payments_order_id, idx_payments_stripe_id (UNIQUE), idx_payments_status"

### Table: refunds

- **Position**: (100, 2550)
- **Size**: 700x450px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: "refunds" fill #1565C0, text white
  - Columns:
    - "id UUID PK"
    - "payment_id UUID FK -> payments.id NOT NULL"
    - "stripe_refund_id VARCHAR(255) UNIQUE"
    - "amount DECIMAL(10,2) NOT NULL"
    - "reason ENUM('requested','defective','other') NOT NULL"
    - "status ENUM('pending','completed','failed') DEFAULT 'pending'"
    - "created_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_refunds_payment_id, idx_refunds_stripe_id"

### Table: products

- **Position**: (2000, 200)
- **Size**: 700x700px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: "products" fill #1565C0, text white
  - Columns:
    - "id UUID PK DEFAULT gen_random_uuid()"
    - "name VARCHAR(200) NOT NULL"
    - "slug VARCHAR(200) UNIQUE NOT NULL"
    - "description TEXT NULL"
    - "base_price DECIMAL(10,2) NOT NULL"
    - "category_id UUID FK -> categories.id"
    - "merchant_id UUID FK -> users.id NOT NULL"
    - "status ENUM('draft','active','archived') DEFAULT 'draft'"
    - "rating DECIMAL(2,1) DEFAULT 0"
    - "review_count INT DEFAULT 0"
    - "images JSONB DEFAULT '[]'"
    - "metadata JSONB DEFAULT '{}'"
    - "created_at TIMESTAMP DEFAULT NOW()"
    - "updated_at TIMESTAMP DEFAULT NOW()"
    - "deleted_at TIMESTAMP NULL"
  - Footer: "Indexes: idx_products_slug (UNIQUE), idx_products_category, idx_products_merchant, GIN idx_products_search (name, description)"

### Table: product_variants

- **Position**: (2000, 1050)
- **Size**: 700x500px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: "product_variants" fill #1565C0, text white
  - Columns:
    - "id UUID PK"
    - "product_id UUID FK -> products.id NOT NULL"
    - "sku VARCHAR(100) UNIQUE NOT NULL"
    - "name VARCHAR(100) NOT NULL"
    - "price_modifier DECIMAL(10,2) DEFAULT 0"
    - "attributes JSONB DEFAULT '{}'"
    - "is_default BOOLEAN DEFAULT false"
    - "created_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_variants_product_id, idx_variants_sku (UNIQUE)"

### Table: categories (Lookup)

- **Position**: (2900, 200)
- **Size**: 700x400px
- **Background**: Light Green (#E8F5E9), border #2E7D32, 2px
- **Elements**:
  - Header bar: "categories" fill #2E7D32, text white
  - Columns:
    - "id UUID PK"
    - "name VARCHAR(100) NOT NULL"
    - "slug VARCHAR(100) UNIQUE NOT NULL"
    - "parent_id UUID FK -> categories.id NULL"
    - "sort_order INT DEFAULT 0"
    - "created_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Self-referencing FK for nested categories. Indexes: idx_categories_slug, idx_categories_parent"

### Table: product_tags (Junction)

- **Position**: (2900, 700)
- **Size**: 700x350px
- **Background**: Light Amber (#FFF8E1), border #F9A825, 2px
- **Elements**:
  - Header bar: "product_tags" fill #F9A825, text white
  - Columns:
    - "id UUID PK"
    - "product_id UUID FK -> products.id NOT NULL"
    - "tag VARCHAR(50) NOT NULL"
    - "created_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_product_tags_unique (product_id, tag) UNIQUE, idx_product_tags_tag"

### Table: inventory

- **Position**: (2000, 1700)
- **Size**: 700x400px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: "inventory" fill #1565C0, text white
  - Columns:
    - "id UUID PK"
    - "variant_id UUID FK -> product_variants.id UNIQUE NOT NULL"
    - "quantity INT NOT NULL DEFAULT 0"
    - "reserved INT NOT NULL DEFAULT 0"
    - "warehouse VARCHAR(50) DEFAULT 'default'"
    - "low_stock_threshold INT DEFAULT 10"
    - "updated_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_inventory_variant_id (UNIQUE), idx_inventory_low_stock"

### Table: addresses

- **Position**: (1000, 1850)
- **Size**: 700x450px
- **Background**: Light Green (#E8F5E9), border #2E7D32, 2px
- **Elements**:
  - Header bar: "addresses" fill #2E7D32, text white
  - Columns:
    - "id UUID PK"
    - "user_id UUID FK -> users.id NOT NULL"
    - "label VARCHAR(50) DEFAULT 'home'"
    - "line1 VARCHAR(255) NOT NULL"
    - "line2 VARCHAR(255) NULL"
    - "city VARCHAR(100) NOT NULL"
    - "state VARCHAR(50) NOT NULL"
    - "postal_code VARCHAR(20) NOT NULL"
    - "country VARCHAR(2) DEFAULT 'US'"
    - "is_default BOOLEAN DEFAULT false"
  - Footer: "Indexes: idx_addresses_user_id"

### Table: audit_log

- **Position**: (2900, 1200)
- **Size**: 700x500px
- **Background**: Light Green (#E8F5E9), border #2E7D32, 2px
- **Elements**:
  - Header bar: "audit_log" fill #2E7D32, text white
  - Columns:
    - "id BIGSERIAL PK"
    - "table_name VARCHAR(50) NOT NULL"
    - "record_id UUID NOT NULL"
    - "action ENUM('INSERT','UPDATE','DELETE') NOT NULL"
    - "old_values JSONB NULL"
    - "new_values JSONB NULL"
    - "performed_by UUID FK -> users.id NULL"
    - "ip_address INET NULL"
    - "created_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Partitioned by created_at (monthly). Indexes: idx_audit_table_record, idx_audit_created_at"

### Table: notifications

- **Position**: (2900, 1850)
- **Size**: 700x450px
- **Background**: Light Blue (#E3F2FD), border #1565C0, 2px
- **Elements**:
  - Header bar: "notifications" fill #1565C0, text white
  - Columns:
    - "id UUID PK"
    - "user_id UUID FK -> users.id NOT NULL"
    - "type ENUM('order_update','payment','system','marketing') NOT NULL"
    - "title VARCHAR(200) NOT NULL"
    - "body TEXT NOT NULL"
    - "channel ENUM('email','push','in_app') NOT NULL"
    - "read_at TIMESTAMP NULL"
    - "sent_at TIMESTAMP NULL"
    - "created_at TIMESTAMP DEFAULT NOW()"
  - Footer: "Indexes: idx_notifications_user_id, idx_notifications_read_at"

## Connectors & Flow (Relationship Lines)

### One-to-Many (solid lines, #546E7A, 2px):

1. **users.id --> orders.user_id**: "1:N" label, crow's foot at orders end
2. **users.id --> addresses.user_id**: "1:N"
3. **users.id --> notifications.user_id**: "1:N"
4. **users.id --> products.merchant_id**: "1:N"
5. **teams.id --> users.team_id**: "1:N"
6. **teams.id --> team_members.team_id**: "1:N"
7. **users.id --> team_members.user_id**: "1:N"
8. **orders.id --> order_items.order_id**: "1:N"
9. **orders.id --> payments.order_id**: "1:1"
10. **payments.id --> refunds.payment_id**: "1:N"
11. **products.id --> product_variants.product_id**: "1:N"
12. **products.id --> order_items.product_id**: "1:N"
13. **products.id --> product_tags.product_id**: "1:N"
14. **product_variants.id --> inventory.variant_id**: "1:1"
15. **product_variants.id --> order_items.variant_id**: "N:1"
16. **categories.id --> products.category_id**: "1:N"
17. **categories.id --> categories.parent_id**: "1:N (self-ref)"
18. **addresses.id --> orders.shipping_address_id**: "1:N"

## Example Content

**Database**: ShopFlow PostgreSQL 16 on AWS RDS

**Stats**:

- 15 tables, 127 columns, 23 indexes
- Largest table: audit_log (42M rows, partitioned monthly)
- Most queried: products (GIN full-text index, ~8K queries/min)
- Total DB size: 2.4 TB (including replicas)
- Read replicas: 2 (us-east-1b, us-west-2a)

**Migration Note**: "Schema managed via Prisma Migrate. Migrations in /prisma/migrations/. Never modify production schema directly."

**Performance Notes**:

- orders table uses BRIN index on created_at for time-range queries
- products search uses GIN trigram index for ILIKE queries
- audit_log partitioned by month, auto-dropped after 12 months
- Connection pooling via PgBouncer (max 200 connections)

## Variations

1. **NoSQL Schema (MongoDB)**: Replace table rectangles with collection boxes. Show document shapes with nested objects. Use embedded vs. referenced relationships.

2. **Multi-Database Architecture**: Show PostgreSQL for transactional data, MongoDB for product catalog, Redis for sessions, Elasticsearch for search. Draw cross-database data flow arrows.

3. **Data Warehouse Schema (Star Schema)**: Center a fact table (orders_fact) with dimension tables radiating outward (dim_users, dim_products, dim_time, dim_geography).

4. **Migration Plan**: Show current schema on the left, target schema on the right, with migration steps numbered between them.

## Build Instructions

1. **Create the board**: Set canvas to 5000x4000px with background color #F5F5F0.
2. **Place the header**: Create a wide dark blue bar across the top with the database name and stats.
3. **Create table shapes**: For each table, create a rectangle with a colored header bar (blue for core, amber for junction, green for lookup). List columns with data types.
4. **Mark keys**: Use gold icons for primary keys, purple icons for foreign keys, teal icons for indexed columns.
5. **Draw relationships**: Connect tables with lines using crow's foot notation. Label each with cardinality (1:N, 1:1, N:M).
6. **Add junction tables**: Place them between the entities they connect. Use amber coloring to distinguish them.
7. **Add sticky notes**: Place notes about indexes, partitioning strategies, and performance considerations near relevant tables.
8. **Add legend**: Create a small legend frame explaining the color coding and key icons.
9. **Final review**: Trace every foreign key to ensure it has a corresponding relationship line. Check that all indexes are documented.

## Tips & Best Practices

- **Color-code table types**: Blue for core entities, amber for junction tables, green for lookups. This makes the schema scannable.
- **Show data types explicitly**: VARCHAR(255) is very different from TEXT. Be precise about types and constraints.
- **Include indexes**: Index information is critical for understanding query performance. Show them in the footer of each table.
- **Mark nullable columns**: Distinguish NOT NULL from nullable columns visually. Nullability decisions matter for data integrity.
- **Add row count estimates**: Include approximate row counts to give a sense of scale. This helps with capacity planning.
- **Document self-referencing FKs**: Hierarchical data (like categories) needs clear labeling of the self-join relationship.
- **Keep the diagram updated**: Schema diagrams go stale fast. Automate generation from the actual schema when possible.
