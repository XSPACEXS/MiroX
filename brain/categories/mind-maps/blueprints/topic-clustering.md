# Topic Clustering

## Overview

- **Purpose**: Organize a large number of unstructured ideas, observations, or data points into meaningful themed clusters using an affinity diagram approach. Teams start with scattered sticky notes, then collaboratively group them by natural themes, label each cluster, and identify patterns. This is the go-to method for synthesizing qualitative research, workshop outputs, or brainstorming results.
- **Best For**: UX researchers synthesizing user interviews, product teams organizing feature requests, workshop facilitators processing brainstorm outputs, consultants analyzing stakeholder feedback, design thinking practitioners in the "define" phase
- **Complexity**: Medium
- **Board Size**: 5000x4000px (extra large to accommodate many scattered stickies before and after clustering)

## Color Scheme

| Role                   | Color        | Hex     |
| ---------------------- | ------------ | ------- |
| Primary                | Deep Indigo  | #1A237E |
| Cluster A: Usability   | Teal         | #00796B |
| Cluster B: Performance | Amber        | #F9A825 |
| Cluster C: Pricing     | Coral        | #E64A19 |
| Cluster D: Onboarding  | Royal Blue   | #1565C0 |
| Cluster E: Integration | Forest Green | #2E7D32 |
| Unclustered            | Light Gray   | #E0E0E0 |
| Summary Labels         | Magenta      | #AD1457 |
| Background             | Off-White    | #FAFAFA |
| Text                   | Charcoal     | #212121 |

## Board Layout

The board is divided into two main zones. The left third is the "Unsorted Pool" where raw stickies start. The right two-thirds contains the "Clustering Workspace" where stickies are grouped into themed clusters. A "Synthesis Strip" runs along the bottom for summary insights.

```
+-------------------+  +----------------------------------------------------+
|                   |  |                                                    |
|   UNSORTED POOL   |  |              CLUSTERING WORKSPACE                  |
|                   |  |                                                    |
|  (scattered raw   |  |   [Cluster A]   [Cluster B]   [Cluster C]         |
|   stickies await  |  |                                                    |
|   grouping)       |  |   [Cluster D]   [Cluster E]   [Outliers]          |
|                   |  |                                                    |
+-------------------+  +----------------------------------------------------+
+------------------------------------------------------------------------+
|                     SYNTHESIS STRIP                                      |
|  [Key Themes]  [Priority Ranking]  [Action Items]                       |
+------------------------------------------------------------------------+

Positions:
  Unsorted Pool:    (50, 50) to (1500, 3200)
  Cluster A:        (1650, 50) to (2850, 1500)
  Cluster B:        (2950, 50) to (4150, 1500)
  Cluster C:        (4250, 50) to (4950, 1500)
  Cluster D:        (1650, 1600) to (2850, 3200)
  Cluster E:        (2950, 1600) to (4150, 3200)
  Outliers:         (4250, 1600) to (4950, 3200)
  Synthesis Strip:  (50, 3350) to (4950, 3950)
```

## Frames & Sections

### Frame 1: Unsorted Pool

- **Position**: Left column
- **Size**: 1450x3150px
- **Background**: Light Gray (#F5F5F5) with dashed border (2px, #BDBDBD)
- **Elements**:
  - Header: "Unsorted Ideas" (font 22, bold, #757575)
  - Instruction text: "Drag stickies from here into the clusters on the right. If a sticky doesn't fit any cluster, move it to Outliers." (font 12, italic, #9E9E9E)
  - Sticky notes (all Light Gray #E0E0E0 with dark text, scattered randomly — 30 stickies total representing raw user interview quotes):
    1. "I couldn't find the export button for 10 minutes"
    2. "The dashboard takes 8 seconds to load every morning"
    3. "Your pricing page doesn't explain what's in each tier"
    4. "I wish the onboarding showed me how to set up integrations"
    5. "The search bar doesn't find anything unless I use exact names"
    6. "Page load times are killing my productivity"
    7. "I had no idea there was a mobile app until month 3"
    8. "The Zapier integration keeps breaking every week"
    9. "Your competitor charges half the price for similar features"
    10. "First time I logged in, I had no idea where to start"
    11. "The filter system is confusing — too many options"
    12. "Reports take forever to generate for large datasets"
    13. "I can't tell the difference between Pro and Business plans"
    14. "The setup wizard skipped important steps"
    15. "Would love a Salesforce integration"
    16. "The notification system is overwhelming — too many emails"
    17. "Bulk editing is so slow it times out on 100+ items"
    18. "I signed up for the trial but had no guidance"
    19. "The API documentation is outdated"
    20. "Navigation menus are nested 4 levels deep"
    21. "Annual pricing should offer more than 10% discount"
    22. "My team couldn't figure out sharing permissions"
    23. "The Slack integration only syncs every 30 minutes"
    24. "Loading spinners appear on almost every click"
    25. "I didn't discover the keyboard shortcuts for weeks"
    26. "HubSpot integration would save us hours"
    27. "The free tier is too limited to evaluate properly"
    28. "File upload limit of 10MB is too small"
    29. "Onboarding emails were helpful but came too late"
    30. "The calendar view crashes on Safari"

### Frame 2: Cluster A — Usability Issues

- **Position**: Top row, left
- **Size**: 1200x1450px
- **Background**: Teal tint (#E0F2F1) with solid Teal top border (4px, #00796B)
- **Elements**:
  - Cluster label (Magenta #AD1457 rounded rectangle): "USABILITY ISSUES" (font 18, bold, white)
  - Count badge: "8 items" (small pill, Teal #00796B, white text)
  - Clustered sticky notes (Teal-tinted #B2DFDB, arranged in 2 columns):
    1. "I couldn't find the export button for 10 minutes"
    2. "The search bar doesn't find anything unless I use exact names"
    3. "The filter system is confusing — too many options"
    4. "Navigation menus are nested 4 levels deep"
    5. "My team couldn't figure out sharing permissions"
    6. "I didn't discover the keyboard shortcuts for weeks"
    7. "The notification system is overwhelming — too many emails"
    8. "The calendar view crashes on Safari"
  - Summary note (white sticky with Teal left border): "Core theme: Users struggle with discoverability and navigation. The interface has powerful features that are hidden behind complex menus."

### Frame 3: Cluster B — Performance Problems

- **Position**: Top row, center
- **Size**: 1200x1450px
- **Background**: Amber tint (#FFF8E1) with solid Amber top border (4px, #F9A825)
- **Elements**:
  - Cluster label (Magenta rounded rectangle): "PERFORMANCE PROBLEMS" (font 18, bold, white)
  - Count badge: "6 items" (pill, Amber #F9A825)
  - Clustered sticky notes (Amber-tinted #FFECB3):
    1. "The dashboard takes 8 seconds to load every morning"
    2. "Page load times are killing my productivity"
    3. "Reports take forever to generate for large datasets"
    4. "Bulk editing is so slow it times out on 100+ items"
    5. "Loading spinners appear on almost every click"
    6. "File upload limit of 10MB is too small"
  - Summary note: "Core theme: Speed is a top pain point. Both data-heavy operations and everyday interactions feel sluggish."

### Frame 4: Cluster C — Pricing Confusion

- **Position**: Top row, right
- **Size**: 700x1450px
- **Background**: Coral tint (#FBE9E7) with solid Coral top border (4px, #E64A19)
- **Elements**:
  - Cluster label (Magenta rounded rectangle): "PRICING CONFUSION" (font 18, bold, white)
  - Count badge: "4 items" (pill, Coral #E64A19)
  - Clustered sticky notes (Coral-tinted #FFCCBC):
    1. "Your pricing page doesn't explain what's in each tier"
    2. "Your competitor charges half the price for similar features"
    3. "I can't tell the difference between Pro and Business plans"
    4. "Annual pricing should offer more than 10% discount"
  - Summary note: "Core theme: Pricing transparency and perceived value. Users struggle to understand tier differences and feel the value proposition is unclear."

### Frame 5: Cluster D — Onboarding Gaps

- **Position**: Bottom row, left
- **Size**: 1200x1600px
- **Background**: Blue tint (#E3F2FD) with solid Blue top border (4px, #1565C0)
- **Elements**:
  - Cluster label (Magenta rounded rectangle): "ONBOARDING GAPS" (font 18, bold, white)
  - Count badge: "7 items" (pill, Royal Blue #1565C0)
  - Clustered sticky notes (Blue-tinted #BBDEFB):
    1. "I wish the onboarding showed me how to set up integrations"
    2. "I had no idea there was a mobile app until month 3"
    3. "First time I logged in, I had no idea where to start"
    4. "The setup wizard skipped important steps"
    5. "I signed up for the trial but had no guidance"
    6. "Onboarding emails were helpful but came too late"
    7. "The free tier is too limited to evaluate properly"
  - Summary note: "Core theme: The first-run experience leaves users lost. Key features and setup steps are missed, leading to underutilization and churn risk."

### Frame 6: Cluster E — Integration Needs

- **Position**: Bottom row, center
- **Size**: 1200x1600px
- **Background**: Green tint (#E8F5E9) with solid Green top border (4px, #2E7D32)
- **Elements**:
  - Cluster label (Magenta rounded rectangle): "INTEGRATION NEEDS" (font 18, bold, white)
  - Count badge: "5 items" (pill, Forest Green #2E7D32)
  - Clustered sticky notes (Green-tinted #C8E6C9):
    1. "The Zapier integration keeps breaking every week"
    2. "Would love a Salesforce integration"
    3. "The API documentation is outdated"
    4. "The Slack integration only syncs every 30 minutes"
    5. "HubSpot integration would save us hours"
  - Summary note: "Core theme: Integrations are both desired and unreliable. Existing integrations need stability improvements; new integrations (Salesforce, HubSpot) are frequently requested."

### Frame 7: Outliers

- **Position**: Bottom row, right
- **Size**: 700x1600px
- **Background**: White (#FFFFFF) with dashed gray border (2px, #BDBDBD)
- **Elements**:
  - Header: "Outliers / Unclustered" (font 16, bold, #757575)
  - Sticky notes (Light Gray #E0E0E0, 0 items after clustering):
    - (Empty — all 30 stickies were successfully clustered in this example)
  - Note text: "No orphan items in this session. All observations fit a cluster." (font 12, italic, #9E9E9E)

### Frame 8: Synthesis Strip

- **Position**: Bottom, spanning full width
- **Size**: 4900x600px
- **Background**: White (#FFFFFF) with Deep Indigo top border (4px, #1A237E)
- **Elements**:
  - **Key Themes** (left third):
    - Header: "Key Themes by Frequency" (font 16, bold, #1A237E)
    - Horizontal bar chart (text-based representation):
      - Usability Issues: ████████ (8)
      - Onboarding Gaps: ███████ (7)
      - Performance: ██████ (6)
      - Integration: █████ (5)
      - Pricing: ████ (4)
  - **Priority Ranking** (center third):
    - Header: "Priority by Impact x Frequency" (font 16, bold, #1A237E)
    - Ranked list:
      1. "Onboarding Gaps — HIGH (impacts activation + retention)"
      2. "Performance Problems — HIGH (impacts daily usage + satisfaction)"
      3. "Usability Issues — MEDIUM (impacts efficiency but workarounds exist)"
      4. "Integration Needs — MEDIUM (impacts specific user segments)"
      5. "Pricing Confusion — LOW-MEDIUM (impacts conversion, not retention)"
  - **Action Items** (right third):
    - Header: "Recommended Actions" (font 16, bold, #1A237E)
    - Action cards:
      1. "Launch onboarding redesign project — Q2 Sprint 1 — Owner: Product"
      2. "Performance audit and optimization sprint — Q2 Sprint 2 — Owner: Engineering"
      3. "UX audit with heuristic evaluation — Q2 Sprint 3 — Owner: Design"
      4. "Integration reliability fix sprint — Q3 Sprint 1 — Owner: Platform"
      5. "Pricing page redesign with A/B test — Q3 Sprint 2 — Owner: Marketing"

## Connectors & Flow

**Clustering arrows** (thin gray lines from Unsorted Pool to clusters — shown only during the clustering process, then hidden):

- Arrows from each sticky in the pool to its destination cluster, animated during the grouping phase

**Cluster-to-synthesis connectors** (solid lines, Slate #546E7A, 2px, arrows pointing down to Synthesis Strip):

1. Cluster A (Usability) --> Priority Ranking item 3
2. Cluster B (Performance) --> Priority Ranking item 2
3. Cluster C (Pricing) --> Priority Ranking item 5
4. Cluster D (Onboarding) --> Priority Ranking item 1
5. Cluster E (Integration) --> Priority Ranking item 4

**Cross-cluster relationships** (dashed Magenta lines, 2px):

1. Cluster D (Onboarding) <--> Cluster E (Integration): "Onboarding should include integration setup"
2. Cluster A (Usability) <--> Cluster D (Onboarding): "Discoverability problems start at onboarding"
3. Cluster B (Performance) <--> Cluster A (Usability): "Slow performance exacerbates usability frustrations"

## Example Content

The board uses a realistic scenario: synthesizing feedback from 15 user interviews conducted for a B2B SaaS project management tool. The 30 sticky notes represent direct quotes and observations from interviews, organized into 5 natural clusters.

**Session metadata** (small text in top-right corner):

- "Research: Q1 2026 User Interviews"
- "Participants: 15 users (5 Admin, 6 Power User, 4 Casual)"
- "Facilitator: Maya Rodriguez, UX Research"
- "Date: February 28, 2026"

**Cluster sizing insight**: The largest cluster (Usability, 8 items) is not necessarily the highest priority. The Synthesis Strip shows that Onboarding (7 items) ranks higher because it impacts activation metrics, which have a multiplicative effect on all other metrics.

## Variations

1. **Customer Feedback Synthesis**: Replace interview quotes with support ticket excerpts, NPS comments, or app store reviews. Add a "Sentiment" color overlay (green = positive, yellow = neutral, red = negative) to each sticky. Add a sentiment summary to the Synthesis Strip.

2. **Workshop Output Organization**: Start with stickies from a live brainstorming session. Use participant name tags on each sticky. Add a "Voting" round where team members dot-vote on clusters to determine priority. Include a "Dot Vote Results" section in the Synthesis Strip.

3. **Research Literature Review**: Replace quotes with paper summaries or key findings. Clusters become research themes. Add citation information to each sticky. The Synthesis Strip becomes a "Research Gaps" identification section.

4. **Competitive Intelligence**: Each sticky represents a competitive observation (feature, pricing move, hiring signal). Clusters become competitive themes. Add a "Threat Level" assessment to each cluster. The Synthesis Strip includes strategic recommendations.

## Build Instructions

1. **Create canvas**: 5000x4000px, background #FAFAFA.
2. **Build Unsorted Pool**: Create a 1450x3150px frame on the left with dashed border. Add header and instruction text. Place 30 gray sticky notes scattered randomly within the frame.
3. **Create cluster frames**: Build 5 cluster frames (A through E) in a 2-row layout as specified. Apply tint backgrounds and colored top borders. Add empty cluster labels.
4. **Create Outliers frame**: Smaller frame in bottom-right with dashed border.
5. **Simulate clustering**: Move stickies from the Unsorted Pool to their respective clusters. Change sticky colors to match the cluster's tint. Arrange them in neat columns within each cluster.
6. **Add cluster labels**: Place Magenta rounded rectangles at the top of each cluster with the theme name. Add count badges.
7. **Write summary notes**: Add a white sticky with colored left border to each cluster summarizing the theme.
8. **Build Synthesis Strip**: Create a full-width frame at the bottom with Deep Indigo top border. Add three sections: Key Themes bar chart, Priority Ranking, and Action Items.
9. **Draw connectors**: Add Slate lines from clusters to synthesis items. Add dashed Magenta cross-cluster relationship lines.
10. **Add metadata**: Place session information in the top-right corner.
11. **Review**: Ensure all 30 stickies are accounted for (clustered + outliers = 30). Verify cluster summaries accurately reflect their contents.

## Tips & Best Practices

- **Start with individual silent sorting**: Have each team member cluster independently for 5 minutes before discussing as a group. This prevents groupthink.
- **Let clusters emerge naturally**: Don't predetermine cluster names. Group first, label second. Forced categories lead to artificial groupings.
- **Aim for 4-7 clusters**: Fewer than 4 means the data isn't differentiated enough. More than 7 becomes unwieldy. If you have 8+, look for clusters that can be merged.
- **Keep outliers visible**: Don't hide items that don't fit. They often represent emerging themes that become important later.
- **Write cluster summaries in "Core theme:" format**: This forces synthesis rather than just labeling. "Usability Issues" is a label; "Users struggle with discoverability and navigation" is a synthesis.
- **Use the Synthesis Strip for decisions**: The clusters are descriptive; the synthesis should be prescriptive. Always end with prioritized action items.
- **Source your stickies**: Note which interview, survey, or session each sticky came from. This enables traceability when stakeholders question a finding.
- **Re-cluster if needed**: It is normal to reorganize clusters 2-3 times before the grouping feels right. Don't settle on the first pass.
