# Structured Brainstorm Session

## Overview

- **Purpose**: A facilitated brainstorming board that takes teams from a clearly defined problem statement through silent ideation, idea clustering, dot voting, and into a concrete action plan. This template prevents the common brainstorm failure modes — loudest voice wins, ideas lost in chaos, no follow-through — by imposing structure without killing creativity.
- **Best For**: Product managers, design leads, and innovation teams who need to generate, evaluate, and prioritize ideas for features, campaigns, or solutions with 5-15 participants.
- **Complexity**: Medium
- **Board Size**: 4000 x 2500px

## Color Scheme

| Role       | Color         | Hex     |
| ---------- | ------------- | ------- |
| Primary    | Deep Purple   | #4A148C |
| Secondary  | Bright Coral  | #FF5252 |
| Accent     | Electric Blue | #2979FF |
| Background | Warm White    | #FFF8E1 |
| Text       | Dark Grey     | #212121 |

## Board Layout

The board flows left to right through five phases: Problem Definition, Silent Ideation, Clustering, Voting, and Action Plan. Each phase is a distinct frame with clear instructions. A facilitator timeline runs along the top.

```
+----------------------------------------------------------------------+
| [ BRAINSTORM TITLE ]   [ FACILITATOR TIMELINE: 60 min total ]        |
+----------------------------------------------------------------------+
|                                                                        |
| +-----------+ +-----------+ +-----------+ +-----------+ +-----------+ |
| | PROBLEM   | | SILENT    | | CLUSTER   | | VOTE &    | | ACTION    | |
| | STATEMENT | | IDEATION  | | & THEME   | | RANK      | | PLAN      | |
| | (5 min)   | | (10 min)  | | (10 min)  | | (10 min)  | | (15 min)  | |
| +-----------+ +-----------+ +-----------+ +-----------+ +-----------+ |
|                                                                        |
| [ RULES & GUIDELINES ]                  [ PARKING LOT ]               |
+----------------------------------------------------------------------+
```

## Frames & Sections

### Frame 1: Session Title & Timeline

- **Position**: Top, full width
- **Size**: 3900 x 300px
- **Background**: Deep Purple (#4A148C)
- **Elements**:
  - Text block: "Brainstorm: How Might We Reduce User Onboarding Drop-Off?" — font size 36, bold, white
  - Text block: "Product Team | March 10, 2026 | Facilitator: Priya Mehta | 12 participants" — font size 18, pale mint
  - Shape: Timeline bar (horizontal), 5 segments with labels:
    - Segment 1 (green): "Problem (5 min)"
    - Segment 2 (yellow): "Ideation (10 min)"
    - Segment 3 (blue): "Cluster (10 min)"
    - Segment 4 (orange): "Vote (10 min)"
    - Segment 5 (red): "Action (15 min)"
  - Text block: "Buffer: 10 min for setup & wrap-up" — font size 12, white

### Frame 2: Problem Statement

- **Position**: Far left
- **Size**: 700 x 1600px
- **Background**: Bright Coral (#FF5252) with 10% opacity
- **Elements**:
  - Text block: "Problem Statement" — font size 28, bold, Deep Purple
  - Text block: "5 minutes — Facilitator presents, team asks clarifying questions" — font size 12, Electric Blue
  - Shape: Large rounded rectangle, white fill, containing:
    - Text block: "How might we reduce the 62% drop-off rate during user onboarding (steps 3-5) while maintaining data quality for our enterprise clients?" — font size 20, bold, Dark Grey
  - Text block: "Context:" — font size 16, bold
  - Sticky note (yellow): "Current onboarding has 7 steps. Drop-off spikes at Step 3 (company profile) and Step 5 (integration setup)."
  - Sticky note (yellow): "Enterprise clients need detailed company profiles for compliance. Removing fields is not an option."
  - Sticky note (yellow): "Competitor X has 3-step onboarding but lower data quality — their churn at 90 days is 2x ours."
  - Sticky note (yellow): "Mobile onboarding is 40% of traffic but the flow is not optimized for small screens."
  - Text block: "Success metric: Reduce drop-off from 62% to under 40% within 90 days of launch" — font size 14, bold, Deep Purple
  - Text block: "Constraints:" — font size 14, bold
  - Sticky note (pink, #F8BBD0): "Cannot remove required fields for enterprise tier"
  - Sticky note (pink, #F8BBD0): "Must maintain SOC2 compliance for data handling"
  - Sticky note (pink, #F8BBD0): "Engineering capacity: 2 sprints (4 weeks) max"

### Frame 3: Silent Ideation Zone

- **Position**: Center-left
- **Size**: 1200 x 1600px
- **Background**: Soft Yellow (#FFF9C4) with 50% opacity
- **Elements**:
  - Text block: "Silent Ideation" — font size 28, bold, Deep Purple
  - Text block: "10 minutes — Write one idea per sticky note. No discussion. Quantity over quality." — font size 14, Electric Blue
  - Text block: "Rules: No talking | No judging | One idea per sticky | Aim for 5+ ideas each" — font size 12, italic, grey
  - Shape: Dotted rectangle border — "Drop your sticky notes here"
  - Pre-filled example sticky notes (representing 12 participants' ideas):
  - Sticky note (yellow): "Progressive profiling: collect only essential fields upfront, ask for rest later during first week"
  - Sticky note (yellow): "Add a progress bar with time estimates — 'Step 3 of 7, ~2 min left'"
  - Sticky note (yellow): "Allow users to skip optional steps and complete later from dashboard"
  - Sticky note (yellow): "Pre-fill company data using Clearbit/domain lookup — reduce manual typing by 60%"
  - Sticky note (yellow): "Add a 'Save & Continue Later' feature with email reminder after 24 hours"
  - Sticky note (yellow): "Gamify: show a completion percentage badge on their profile"
  - Sticky note (yellow): "Video walkthrough option: 90-second explainer for each step"
  - Sticky note (yellow): "Split Step 5 (integration) into a separate post-onboarding wizard"
  - Sticky note (yellow): "In-app chat support triggered if user is idle for 30+ seconds on a step"
  - Sticky note (yellow): "Mobile-first redesign: swipeable cards instead of long forms"
  - Sticky note (yellow): "Social proof: show 'Join 5,000+ companies who completed setup' message"
  - Sticky note (yellow): "Template-based setup: 'Pick your industry' and auto-fill common configurations"
  - Sticky note (yellow): "Offer a 'set up for me' concierge service for enterprise clients"
  - Sticky note (yellow): "A/B test: 3-step vs 7-step flow and measure 90-day retention, not just completion"
  - Sticky note (yellow): "Remove Step 4 (team invites) from onboarding — make it a Day 2 prompt instead"
  - Text block: "15 ideas generated by 12 participants" — font size 12, green

### Frame 4: Clustering & Themes

- **Position**: Center
- **Size**: 1000 x 1600px
- **Background**: Pale Mint (#E0F2F1)
- **Elements**:
  - Text block: "Cluster & Theme" — font size 28, bold, Deep Purple
  - Text block: "10 minutes — Group similar ideas. Name each cluster. Facilitator guides." — font size 14, Electric Blue
  - **Cluster 1**: Shape: Rounded rectangle, green border, labeled "Reduce Friction"
    - Sticky note: "Progressive profiling"
    - Sticky note: "Pre-fill with Clearbit"
    - Sticky note: "Skip optional steps"
    - Sticky note: "Remove team invites from flow"
  - **Cluster 2**: Shape: Rounded rectangle, blue border, labeled "Guide & Support"
    - Sticky note: "Progress bar with time estimates"
    - Sticky note: "Video walkthrough per step"
    - Sticky note: "In-app chat support on idle"
    - Sticky note: "Concierge service for enterprise"
  - **Cluster 3**: Shape: Rounded rectangle, orange border, labeled "Motivation & Nudges"
    - Sticky note: "Gamification badge"
    - Sticky note: "Social proof messaging"
    - Sticky note: "Save & Continue Later with email nudge"
  - **Cluster 4**: Shape: Rounded rectangle, pink border, labeled "Redesign Flow"
    - Sticky note: "Mobile-first swipeable cards"
    - Sticky note: "Split integration into post-onboarding wizard"
    - Sticky note: "Template-based industry setup"
    - Sticky note: "A/B test 3-step vs 7-step"
  - Text block: "4 themes identified from 15 ideas" — font size 12

### Frame 5: Vote & Rank

- **Position**: Center-right
- **Size**: 700 x 1600px
- **Background**: Light blue (#E3F2FD)
- **Elements**:
  - Text block: "Vote & Rank" — font size 28, bold, Deep Purple
  - Text block: "10 minutes — Each person gets 3 votes (blue dots). Vote on clusters OR individual ideas." — font size 14, Electric Blue
  - Text block: "Consider: Impact on drop-off rate x Feasibility within 4 weeks" — font size 12, italic
  - Shape: 2x2 matrix (Impact vs Effort) with clusters placed:
    - High Impact / Low Effort (top-left, green): "Reduce Friction — 18 votes"
    - High Impact / High Effort (top-right, yellow): "Redesign Flow — 12 votes"
    - Low Impact / Low Effort (bottom-left, blue): "Motivation & Nudges — 8 votes"
    - Low Impact / High Effort (bottom-right, red): "Guide & Support — 6 votes"
  - Text block: "Ranking:" — font size 16, bold
  - Text block: "1. Reduce Friction (18 votes) — DO FIRST" — font size 14, bold, green
  - Text block: "2. Redesign Flow (12 votes) — PLAN NEXT" — font size 14, amber
  - Text block: "3. Motivation & Nudges (8 votes) — QUICK WINS" — font size 14, blue
  - Text block: "4. Guide & Support (6 votes) — BACKLOG" — font size 14, grey
  - Text block: "36 total votes from 12 participants" — font size 12

### Frame 6: Action Plan

- **Position**: Far right
- **Size**: 700 x 1600px
- **Background**: White with Bright Coral (#FF5252) border (3px)
- **Elements**:
  - Text block: "Action Plan" — font size 28, bold, Deep Purple
  - Text block: "15 minutes — Define next steps for the top-voted themes" — font size 14, Electric Blue
  - Text block: "Sprint 15 (March 10-24):" — font size 18, bold, Deep Purple
  - Sticky note (green, #C8E6C9): "Action 1: Implement progressive profiling — collect name, email, company name only at signup. Move all other fields to a 'Complete Your Profile' prompt shown after first login. Owner: Backend team (Jake). Due: March 17."
  - Sticky note (green, #C8E6C9): "Action 2: Integrate Clearbit API for company domain lookup — auto-fill industry, size, and HQ location on Step 3. Owner: Integration team (Mika). Due: March 20."
  - Sticky note (green, #C8E6C9): "Action 3: Add 'Skip for Now' button on Steps 4 and 5 for non-enterprise tiers. Show a dashboard reminder card instead. Owner: Frontend team (Lin). Due: March 17."
  - Text block: "Sprint 16 (March 24 - April 7):" — font size 18, bold, Deep Purple
  - Sticky note (blue, #BBDEFB): "Action 4: Design mobile-first onboarding prototype — swipeable card format. Owner: Design (Priya). Due: March 28 (design), April 4 (dev)."
  - Sticky note (blue, #BBDEFB): "Action 5: Set up A/B test framework — 3-step flow (progressive) vs current 7-step flow. Measure: completion rate + 90-day retention. Owner: Data (Sofia). Due: April 1."
  - Text block: "Backlog (no date yet):" — font size 16, bold
  - Sticky note (grey, #E0E0E0): "Gamification, social proof, and in-app chat — prioritize in Q2 planning"
  - Text block: "5 committed actions | 3 owners | 2 sprints" — font size 12, green

### Frame 7: Rules & Guidelines

- **Position**: Bottom-left
- **Size**: 1200 x 400px
- **Background**: Deep Purple (#4A148C) with 10% opacity
- **Elements**:
  - Text block: "Brainstorm Rules" — font size 22, bold, Deep Purple
  - Sticky note (pale mint): "1. Defer judgment — all ideas are welcome during ideation"
  - Sticky note (pale mint): "2. Go for quantity — aim for volume, not perfection"
  - Sticky note (pale mint): "3. Build on others' ideas — 'Yes, and...' not 'No, but...'"
  - Sticky note (pale mint): "4. One conversation at a time during discussion rounds"
  - Sticky note (pale mint): "5. Stay visual — draw, sketch, use images when possible"
  - Sticky note (pale mint): "6. Be bold — wild ideas are encouraged, they spark practical ones"

### Frame 8: Parking Lot

- **Position**: Bottom-right
- **Size**: 1200 x 400px
- **Background**: Soft Yellow (#FFF9C4)
- **Elements**:
  - Text block: "Parking Lot" — font size 22, bold
  - Text block: "Good ideas that are out of scope for this session" — font size 12, grey
  - Sticky note (yellow): "Revisit entire onboarding flow in Q3 with a design sprint — too big for this brainstorm"
  - Sticky note (yellow): "Explore partnership with Segment for event-based onboarding analytics"
  - Sticky note (yellow): "Customer interview round needed — we are assuming reasons for drop-off without qualitative data"

## Connectors & Flow

- Large arrow from Problem Statement to Silent Ideation (labeled "Generate")
- Arrow from Silent Ideation to Clustering (labeled "Organize")
- Arrow from Clustering to Vote & Rank (labeled "Prioritize")
- Arrow from Vote & Rank to Action Plan (labeled "Commit")
- Dashed arrows from top-voted clusters in Vote frame to corresponding action items in Action Plan
- Timeline bar at top connects all 5 phases with time markers

## Example Content

The brainstorm is fully pre-filled for a product team tackling user onboarding drop-off:

- **Problem**: 62% drop-off at Steps 3-5 of a 7-step onboarding flow
- **15 ideas generated** across progressive profiling, auto-fill, skip options, gamification, mobile redesign, and more
- **4 thematic clusters**: Reduce Friction, Guide & Support, Motivation & Nudges, Redesign Flow
- **Voting results**: 36 votes from 12 participants, Reduce Friction wins with 18 votes
- **5 action items** with owners, due dates, and sprint assignments
- **Constraints honored**: SOC2 compliance maintained, enterprise fields preserved, fits in 2 sprints
- **3 parking lot items** for future exploration

## Variations

1. **Rapid Brainstorm (30 min)**: Reduce to 3 phases — Problem (3 min), Silent Ideation (10 min), Vote & Top 3 Actions (15 min). Skip clustering.
2. **Crazy Eights**: Replace Silent Ideation with a Crazy Eights exercise — each person folds paper into 8 panels and sketches 8 ideas in 8 minutes.
3. **How Might We (HMW)**: Start with a broader HMW question. Use sticky notes to generate multiple HMW reframes before ideating on the best one.
4. **Reverse Brainstorm**: Ask "How might we make onboarding WORSE?" then flip each bad idea into a positive solution. Good for breaking creative blocks.
5. **Async Brainstorm**: Extend the ideation phase to 24-48 hours. Participants add sticky notes on their own time. Then reconvene for clustering and voting.

## Build Instructions

1. Create board at 4000 x 2500px with Warm White (#FFF8E1) background.
2. Place the title banner (3900 x 300px) at the top with Deep Purple background and timeline bar.
3. Create 5 vertical frames arranged left to right, each approximately 700-1200px wide and 1600px tall.
4. Frame 1 (Problem): Coral-tinted background, problem statement card, context sticky notes, constraints.
5. Frame 2 (Ideation): Yellow-tinted background, large empty zone with dotted border, pre-filled example sticky notes.
6. Frame 3 (Clustering): Mint background, 4 cluster groups with themed borders and grouped sticky notes.
7. Frame 4 (Voting): Blue-tinted background, 2x2 Impact/Effort matrix, ranking list.
8. Frame 5 (Action Plan): White with coral border, sprint-organized action items.
9. Add bottom-row frames: Rules (left, 1200 x 400px) and Parking Lot (right, 1200 x 400px).
10. Draw flow arrows between all 5 phases.
11. Lock problem statement, rules, and phase headers. Leave ideation zone, clusters, and action items editable.

## Tips & Best Practices

- The problem statement is the most important element — spend time crafting it before the session. A vague problem yields vague ideas.
- Silent ideation is non-negotiable. Without it, extroverts dominate and introverts disengage.
- During clustering, let participants move their own sticky notes. The facilitator names themes but does not decide placement.
- Use the Impact/Effort matrix to prevent the team from chasing high-effort, low-impact ideas.
- Limit the action plan to what can start in the next sprint. Everything else goes to the backlog.
- Photograph or screenshot the board immediately after the session — boards get modified later and the original state is lost.
- Follow up within 48 hours with a summary email linking to the board and listing committed actions.
- Run a quick retrospective on the brainstorm itself — "Was this session useful? What would you change?" — to improve future sessions.
