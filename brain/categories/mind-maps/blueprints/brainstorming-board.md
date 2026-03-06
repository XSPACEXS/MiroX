# Brainstorming Board

## Overview

- **Purpose**: Facilitate free-form ideation sessions where a team generates, captures, and organizes ideas radiating outward from a central topic. The radial layout encourages divergent thinking and ensures every participant's contributions are visible and connected.
- **Best For**: Product teams running feature ideation sprints, marketing teams generating campaign concepts, startup founders exploring business pivots, educators facilitating classroom brainstorms
- **Complexity**: Simple
- **Board Size**: 4000x4000px (square to support radial expansion in all directions)

## Color Scheme

| Role              | Color        | Hex     |
| ----------------- | ------------ | ------- |
| Primary (Center)  | Deep Indigo  | #1A237E |
| Branch: Product   | Teal         | #00796B |
| Branch: Marketing | Amber        | #F9A825 |
| Branch: Technical | Coral        | #E64A19 |
| Branch: Customer  | Royal Blue   | #1565C0 |
| Branch: Revenue   | Forest Green | #2E7D32 |
| Branch: Wildcard  | Magenta      | #AD1457 |
| Background        | Warm Gray    | #F5F5F0 |
| Text              | Charcoal     | #212121 |
| Connector Lines   | Slate        | #546E7A |

## Board Layout

The board uses a radial layout with the central topic at the exact center and six primary branches radiating outward like spokes of a wheel. Each branch terminates in a cluster zone where sub-ideas are grouped.

```
                        [Marketing]
                       /
              [Product]  ---- [Technical]
               /                    \
 [Central Topic]                    [Customer]
               \                    /
              [Revenue] ---- [Wildcard]
                       \
                        [Sub-ideas cluster]

Approximate positions (center = 2000,2000):
  Center:     (1800,1800) to (2200,2200) — Central topic frame
  Product:    (600,600) to (1400,1200) — upper-left
  Marketing:  (1600,200) to (2400,800) — top-center
  Technical:  (2600,600) to (3400,1200) — upper-right
  Customer:   (2600,2800) to (3400,3400) — lower-right
  Revenue:    (1600,3200) to (2400,3800) — bottom-center
  Wildcard:   (600,2800) to (1400,3400) — lower-left
```

## Frames & Sections

### Frame 1: Central Topic

- **Position**: Center of board
- **Size**: 400x400px
- **Background**: Deep Indigo (#1A237E)
- **Elements**:
  - Text block: "How might we improve the onboarding experience for new SaaS users?" (font size 28, bold, white #FFFFFF, centered)
  - Subtitle text: "Q2 2026 Brainstorm — Product Team" (font size 16, regular, light gray #B0BEC5, centered below title)
  - Shape: Rounded rectangle border with 4px white stroke enclosing the text
  - Icon: Lightbulb emoji placeholder in top-left corner

### Frame 2: Product Ideas Branch

- **Position**: Upper-left
- **Size**: 800x600px
- **Background**: Teal tint (#E0F2F1)
- **Elements**:
  - Header text: "Product Ideas" (font size 22, bold, Teal #00796B)
  - Sticky notes (Soft Yellow #FFF9C4, 7 stickies):
    1. "Interactive product tour with tooltips that highlight key features on first login"
    2. "Personalized dashboard setup wizard — ask user role and customize layout"
    3. "Gamified checklist: reward users with badges for completing setup steps"
    4. "Template gallery shown immediately after signup so users start with structure"
    5. "Video walkthrough library embedded in empty states"
    6. "Smart defaults: pre-fill settings based on company size and industry"
    7. "Buddy system: pair new users with experienced team members"
  - Shape: Teal (#00796B) circle with label "Product" at the connection point to center

### Frame 3: Marketing Ideas Branch

- **Position**: Top-center
- **Size**: 800x600px
- **Background**: Amber tint (#FFF8E1)
- **Elements**:
  - Header text: "Marketing & Messaging" (font size 22, bold, Amber #F9A825)
  - Sticky notes (Soft Blue #BBDEFB, 6 stickies):
    1. "Welcome email drip series: Day 1 quick win, Day 3 power feature, Day 7 success story"
    2. "In-app announcement banner for new users pointing to getting-started guide"
    3. "Community Slack channel invite during onboarding to boost engagement"
    4. "Case study cards: show how similar companies succeeded in first 30 days"
    5. "SMS/push notification for users who haven't logged in within 48 hours"
    6. "Webinar series: Live onboarding Q&A every Tuesday"
  - Shape: Amber (#F9A825) circle with label "Marketing" at connection point

### Frame 4: Technical Ideas Branch

- **Position**: Upper-right
- **Size**: 800x600px
- **Background**: Coral tint (#FBE9E7)
- **Elements**:
  - Header text: "Technical & UX" (font size 22, bold, Coral #E64A19)
  - Sticky notes (Soft Green #C8E6C9, 6 stickies):
    1. "Progressive disclosure: show basic features first, unlock advanced over time"
    2. "API quickstart sandbox with pre-loaded sample data"
    3. "SSO auto-detection: if user email domain has SSO, skip password setup"
    4. "Real-time progress bar showing onboarding completion percentage"
    5. "Contextual help chatbot that answers questions based on current screen"
    6. "Mobile-first onboarding flow optimized for quick setup on the go"
  - Shape: Coral (#E64A19) circle with label "Technical" at connection point

### Frame 5: Customer Insights Branch

- **Position**: Lower-right
- **Size**: 800x600px
- **Background**: Blue tint (#E3F2FD)
- **Elements**:
  - Header text: "Customer Insights" (font size 22, bold, Royal Blue #1565C0)
  - Sticky notes (Soft Pink #F8BBD0, 5 stickies):
    1. "Exit survey for users who churn in first 14 days — capture friction points"
    2. "NPS micro-survey at end of onboarding flow to gauge experience"
    3. "User interviews: schedule 15-min calls with 10 new signups per month"
    4. "Session recording analysis — identify where users get stuck in setup"
    5. "Support ticket clustering: what are top 5 onboarding questions?"
  - Shape: Royal Blue (#1565C0) circle with label "Customer" at connection point

### Frame 6: Revenue Impact Branch

- **Position**: Bottom-center
- **Size**: 800x600px
- **Background**: Green tint (#E8F5E9)
- **Elements**:
  - Header text: "Revenue & Conversion" (font size 22, bold, Forest Green #2E7D32)
  - Sticky notes (Soft Yellow #FFF9C4, 5 stickies):
    1. "Free trial extension offer if user completes 80% of onboarding checklist"
    2. "In-app upsell prompt after users hit usage threshold during trial"
    3. "ROI calculator tool: show projected value based on user's inputs during setup"
    4. "Referral program prompt at end of successful onboarding"
    5. "Premium onboarding concierge for enterprise-tier signups"
  - Shape: Forest Green (#2E7D32) circle with label "Revenue" at connection point

### Frame 7: Wildcard Ideas Branch

- **Position**: Lower-left
- **Size**: 800x600px
- **Background**: Magenta tint (#FCE4EC)
- **Elements**:
  - Header text: "Wildcard & Moonshots" (font size 22, bold, Magenta #AD1457)
  - Sticky notes (Soft Yellow #FFF9C4, 5 stickies):
    1. "AI-powered onboarding that adapts flow based on user behavior in real time"
    2. "VR office tour: show users a virtual tour of your team and culture"
    3. "Onboarding game: users compete to set up workspace fastest with leaderboard"
    4. "Reverse onboarding: let users set goals first, then build features around them"
    5. "Partner ecosystem onboarding: connect integrations during signup flow"
  - Shape: Magenta (#AD1457) circle with label "Wildcard" at connection point

## Connectors & Flow

All connectors radiate from the Central Topic frame outward to each branch:

1. **Center --> Product**: Curved line, Slate #546E7A, 3px width, arrow at Product end
2. **Center --> Marketing**: Curved line, Slate #546E7A, 3px width, arrow at Marketing end
3. **Center --> Technical**: Curved line, Slate #546E7A, 3px width, arrow at Technical end
4. **Center --> Customer**: Curved line, Slate #546E7A, 3px width, arrow at Customer end
5. **Center --> Revenue**: Curved line, Slate #546E7A, 3px width, arrow at Revenue end
6. **Center --> Wildcard**: Curved line, Slate #546E7A, 3px width, arrow at Wildcard end

Cross-branch connections (dashed lines, 2px, lighter gray #90A4AE):

- Product sticky "Gamified checklist" --> Revenue sticky "Free trial extension" (labeled "drives conversion")
- Technical sticky "Contextual help chatbot" --> Customer sticky "Support ticket clustering" (labeled "reduces tickets")
- Marketing sticky "Welcome email drip" --> Customer sticky "NPS micro-survey" (labeled "measure effectiveness")

## Example Content

**Central Question**: "How might we improve the onboarding experience for new SaaS users?"

**Context note** (small text below center): "Our current onboarding has a 34% completion rate. Goal: reach 60% by end of Q3. 2,400 new signups per month. Average time-to-value is 11 days — target is 3 days."

**Voting dots** (post-brainstorm): Each sticky can display 0-5 colored dots indicating team votes. Top-voted items:

- "Interactive product tour with tooltips" — 5 votes (green dots)
- "Personalized dashboard setup wizard" — 4 votes
- "Progressive disclosure" — 4 votes
- "Welcome email drip series" — 3 votes
- "AI-powered onboarding" — 3 votes

**Parking lot** (small area bottom-right corner, 300x200px, light gray background):

- "Discuss: should onboarding differ by pricing tier?"
- "Need data: what percentage of users access mobile vs desktop?"
- "Follow up: review competitor onboarding flows next week"

## Variations

1. **Product Feature Brainstorm**: Replace the central question with a specific feature area (e.g., "How might we reimagine our reporting dashboard?"). Keep the same six branches but rename them to: Core Features, Data Visualization, User Requests, Technical Feasibility, Competitive Edge, Moonshots.

2. **Marketing Campaign Ideation**: Central topic becomes the campaign brief. Branches become: Channel Ideas, Messaging Angles, Audience Segments, Creative Formats, Budget Options, Timeline Options. Use marketing-specific colors (more vibrant palette).

3. **Retrospective Brainstorm**: Central topic is the sprint/quarter being reviewed. Branches become: What Went Well, What Didn't Work, What Surprised Us, Ideas for Next Time, Shoutouts, Action Items. Use green/red/yellow color coding.

4. **Solo Brainstorm (Individual)**: Reduce to 4 branches. Remove voting dots. Add a "Priority Matrix" frame in the corner for self-ranking ideas by effort vs. impact.

## Build Instructions

1. **Create the board**: Set canvas to 4000x4000px with background color #F5F5F0.
2. **Place the center frame**: Create a 400x400px frame at position (1800, 1800). Set background to #1A237E. Add the central question as white bold text (28px). Add subtitle below (16px, light gray).
3. **Create branch frames**: For each of the 6 branches, create an 800x600px frame at the specified position. Set the background to the tint color. Add the header text in the branch color.
4. **Add sticky notes**: Within each branch frame, arrange sticky notes in a loose grid (3 columns, 2-3 rows). Use the specified colors. Write the example text on each sticky.
5. **Add connection circles**: At the edge of each branch frame closest to center, place a small colored circle (60px diameter) with the branch label in white text.
6. **Draw connectors**: Create curved lines from the center frame to each branch circle. Use 3px Slate lines with arrowheads.
7. **Add cross-branch connections**: Draw dashed lines between the specified stickies with labels.
8. **Add voting dots**: Place small colored circles (12px) on top-voted stickies.
9. **Create parking lot**: Add a small frame in the bottom-right with light gray background and 3 text items.
10. **Final review**: Ensure all text is readable, connectors are properly anchored, and the radial symmetry feels balanced.

## Tips & Best Practices

- **Timebox each branch**: Give teams 5 minutes per branch to keep energy high and prevent overthinking.
- **No judgment during generation**: Encourage wild ideas in the Wildcard branch — they often spark practical innovations.
- **Vote after all branches are filled**: Prevents anchoring bias from early popular ideas.
- **Limit to 5-7 stickies per branch**: More than this becomes overwhelming. If a branch overflows, it may need to be split into two.
- **Use the parking lot actively**: Any idea that sparks debate should be parked immediately to keep brainstorming flowing.
- **Color consistency matters**: Stick to one color per branch so scanning the board is instant.
- **Photograph / export after voting**: The board state after voting is the most valuable artifact for follow-up meetings.
