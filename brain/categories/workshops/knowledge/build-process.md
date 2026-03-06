# Workshop Boards — Build Process

## Overview

Building workshop boards follows a different creative process than other board types.
Workshop boards are built BEFORE a session and used DURING a session. The build process
must therefore anticipate how participants will interact with the board in real time —
what they will see, where they will contribute, and how the facilitator will navigate
them through the process. This guide covers the complete workflow for building any
workshop board from scratch.

---

## The Five-Phase Build Process

### Phase 1: Session Design (15-20 minutes)

**Goal**: Define the workshop structure before touching the board.

**Questions to determine**:

1. What is the workshop objective? (Generate ideas, reflect, decide, learn, bond)
2. How many participants? (5, 10, 20, 40)
3. How long is the session? (30 min, 60 min, 2 hours, half-day)
4. What facilitation framework? (Brainstorm, retrospective, design thinking, world cafe, icebreaker)
5. What activities will the workshop include? (Silent writing, discussion, voting, clustering, prototyping)
6. Who is the facilitator? (Experienced or first-time)
7. Is this remote, in-person, or hybrid?
8. What is the expected output? (Action items, prioritized ideas, prototype, insights)

**Session design outputs**:

- Workshop type and framework selected
- Activity sequence with timing for each phase
- Participant count (affects zone sizing)
- Board template selected (Phase Flow, Metaphor Canvas, Circular Table, Activity Grid)
- Color palette selected (Workshop Purple, Warm Collaboration, Strategic Grey, Innovation Green)
- Content outline: what pre-filled content is needed for each phase

### Phase 2: Board Structure (15-25 minutes)

**Goal**: Create the spatial framework — all frames, zones, and flow indicators.

**Steps**:

1. **Set board dimensions**: Based on workshop type:

   | Workshop Type   | Board Size    | Phase Count        |
   | --------------- | ------------- | ------------------ |
   | Brainstorm      | 4000 x 2500px | 5 phases           |
   | Retrospective   | 3500 x 2500px | 7-9 frames         |
   | Design Thinking | 5000 x 3000px | 5 phases           |
   | World Cafe      | 5000 x 3500px | 4 tables + harvest |
   | Icebreaker      | 3000 x 2500px | 4 activities       |

2. **Place the title banner**: Full-width, 300-400px tall, primary color background.
   Include: workshop name, date, facilitator, participant count, duration.

3. **Create phase/zone frames**: Place frames at planned positions following the
   selected layout pattern. For Phase Flow: left-to-right. For Metaphor Canvas:
   quadrant arrangement. For Circular Table: row of tables plus harvest wall.

4. **Add flow arrows**: Draw large arrows (60-80px) between sequential phases.
   Label arrows with transition words: "Generate" -> "Organize" -> "Prioritize" -> "Commit".

5. **Create support frames**: Parking lot (bottom-left or bottom-right), facilitator
   guide (bottom corner), ground rules (near title or bottom).

6. **Set background color**: Apply the palette background color to the board.

**Structure checkpoint**: Zoom out to 25%. The board should look like a complete
workshop framework — all phases present, flow direction clear, support zones visible.
No content yet, but the skeleton is there.

### Phase 3: Facilitation Content (15-25 minutes)

**Goal**: Add all facilitator-written content — instructions, prompts, templates, rules.

**Content population order**:

1. **Title banner**: Workshop name, date, facilitator name, participant count,
   duration, and (optionally) the core question or challenge statement.

2. **Phase titles and instructions**: For each phase frame:
   - Phase title: "1. SILENT IDEATION" (28-32pt, bold, primary color)
   - Purpose statement: "Write one idea per sticky note. Quantity over quality." (14pt, italic)
   - Duration: "10 minutes" (12pt, accent color)
   - Rules: "No talking. No judging. Aim for 5+ ideas." (12pt, accent)

3. **Problem statement / Central question**: The core content that drives the workshop.
   This must be carefully crafted — it is the most important text on the board.

4. **Activity-specific templates**: Empathy maps, persona cards, storyboard panels,
   2x2 matrices, Crazy Eights grids — whatever templates participants will fill in.

5. **Ground rules**: 5-6 rules posted visually:
   - "Defer judgment — all ideas welcome during ideation"
   - "One conversation at a time during discussion"
   - "Silent writing before discussion"
   - "Build on ideas — 'Yes, and...' not 'No, but...'"
   - "Stay on time — the facilitator manages the clock"

6. **Facilitator guide**: Locked frame with full agenda, timing, transition phrases,
   probing questions, and contingency plan.

7. **Previous session follow-up** (for recurring workshops like retrospectives):
   Action items from the previous session with status indicators.

### Phase 4: Example Content (10-20 minutes)

**Goal**: Pre-fill realistic example content to show participants what good
contributions look like.

**Why example content matters**: An empty workshop board intimidates participants.
"Write your ideas here" on a blank canvas produces anxiety. But 3-4 pre-filled
example sticky notes show what a good contribution looks like and break the
blank-canvas fear.

**Example content guidelines**:

1. Include 3-6 example sticky notes per zone (enough to demonstrate, not so many
   that participants feel the work is already done)
2. Make examples realistic and domain-specific — generic examples feel hollow
3. Vary the quality of examples: include one obvious idea, one creative idea, and
   one provocative idea to signal that all types are welcome
4. Label examples clearly if they are examples vs. actual contributions
5. For retrospectives: pre-fill the "Previous Retro Actions" section with realistic
   follow-up items

### Phase 5: Polish and Lock (10-15 minutes)

**Goal**: Finalize the board for workshop use.

**Polish steps**:

1. **Verify zoom levels**: Check the board at 25% (overview), 50% (activity), and
   100% (detail) zoom. All text should be readable at its intended zoom level.

2. **Lock facilitator elements**: Lock all frames, headers, instructions, rules,
   and templates. Only participant zones (sticky note areas, voting zones, action
   tables) should be editable.

3. **Test participant flow**: Navigate the board as a participant would — can you
   clearly identify each phase, understand the instructions, and find where to
   contribute?

4. **Check timing math**: Add up all phase durations plus transitions. Ensure the
   total matches the session duration. Build in 5-10 minutes of buffer.

5. **Verify color consistency**: Same color means the same thing everywhere on the
   board. Phase colors are consistent. Sticky note colors follow the system.

6. **Add summary placeholders**: In the Action Plan zone, add empty rows or
   placeholder text ("Owner | Action | Due Date | Status") to structure the output.

7. **Final alignment check**: All frames are aligned and evenly spaced. The board
   looks professional and intentional.

**Polish checklist**:

- [ ] Title banner has all required information
- [ ] Every phase has a title, instructions, duration, and participant zone
- [ ] Ground rules are posted and visible
- [ ] Facilitator guide is present and locked
- [ ] Flow arrows connect all phases
- [ ] Parking lot is present
- [ ] Example sticky notes are pre-filled (3-6 per zone)
- [ ] All facilitator elements are locked
- [ ] All participant zones are unlocked
- [ ] Timing adds up to the session duration (with buffer)
- [ ] Board works at 25%, 50%, and 100% zoom
- [ ] Color coding is consistent throughout

---

## Miro API Translation for Workshop Elements

### Creating Phase Frames

```
POST /v2/boards/{board_id}/frames
{
  "data": { "title": "1. SILENT IDEATION", "format": "custom" },
  "style": { "fillColor": "#FFF9C4" },
  "position": { "x": 1200, "y": 800 },
  "geometry": { "width": 1200, "height": 1600 }
}
```

### Creating Sticky Notes

```
POST /v2/boards/{board_id}/sticky_notes
{
  "data": { "content": "Progressive profiling: collect only essential fields upfront, ask for rest later during first week", "shape": "square" },
  "style": { "fillColor": "yellow", "textAlign": "left", "textAlignVertical": "top" },
  "position": { "x": 1300, "y": 900 },
  "geometry": { "width": 200, "height": 200 }
}
```

### Creating Instruction Text

```
POST /v2/boards/{board_id}/texts
{
  "data": { "content": "10 minutes — Write one idea per sticky note. No discussion. Quantity over quality." },
  "style": { "color": "#2979FF", "fontSize": "14", "textAlign": "left" },
  "position": { "x": 1200, "y": 650 }
}
```

### Creating Flow Arrows (using shapes)

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "Generate", "shape": "right_arrow" },
  "style": { "fillColor": "#4A148C", "fontColor": "#FFFFFF", "fontSize": "12" },
  "position": { "x": 1850, "y": 1200 },
  "geometry": { "width": 100, "height": 60 }
}
```

### Creating Title Banner

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "Brainstorm: How Might We Reduce User Onboarding Drop-Off?\n\nProduct Team | March 10, 2026 | Facilitator: Priya Mehta | 12 participants", "shape": "rectangle" },
  "style": { "fillColor": "#4A148C", "fontColor": "#FFFFFF", "fontSize": "24", "textAlign": "center" },
  "position": { "x": 2000, "y": 200 },
  "geometry": { "width": 3900, "height": 300 }
}
```

### Creating Timeline Bar

```
// Create 5 segments as individual shapes, positioned sequentially
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "Problem (5 min)", "shape": "round_rectangle" },
  "style": { "fillColor": "#4CAF50", "fontColor": "#FFFFFF", "fontSize": "11" },
  "position": { "x": 500, "y": 350 },
  "geometry": { "width": 200, "height": 40 }
}
// Repeat for each segment with appropriate colors and positions
```

### Creating the Parking Lot

```
POST /v2/boards/{board_id}/frames
{
  "data": { "title": "Parking Lot", "format": "custom" },
  "style": { "fillColor": "#FFF9C4" },
  "position": { "x": 3200, "y": 2200 },
  "geometry": { "width": 1200, "height": 400 }
}
```

### Creating Vote Dot Placeholders

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "", "shape": "circle" },
  "style": { "fillColor": "#2979FF", "borderWidth": "0" },
  "position": { "x": 1400, "y": 1100 },
  "geometry": { "width": 16, "height": 16 }
}
```

### Creating Action Item Table Structure

```
POST /v2/boards/{board_id}/shapes
{
  "data": { "content": "Owner | Action | Category | Due Date | Status\n------|--------|----------|----------|-------\n      |        |          |          | To Do", "shape": "round_rectangle" },
  "style": { "fillColor": "#FFFFFF", "borderColor": "#4A148C", "borderWidth": "3.0", "fontSize": "14", "textAlign": "left" },
  "position": { "x": 2000, "y": 2000 },
  "geometry": { "width": 3400, "height": 400 }
}
```

---

## Common Pitfalls

### Pitfall 1: No Silent Writing Phase

**The mistake**: The brainstorm or retro goes straight to group discussion without
individual writing time.

**Why it fails**: Research consistently shows that individual brainstorming produces
more ideas, more diverse ideas, and more equitable participation than group
brainstorming. Without silent writing, extroverts dominate, introverts disengage,
and production blocking reduces total output.

**Fix**: Every workshop board must include at least one "Silent Ideation" or "Silent
Writing" phase before any group discussion. This is the single highest-impact
facilitation technique and must be structurally built into the board.

### Pitfall 2: No Action Items

**The mistake**: The workshop ends with a cluster of interesting ideas but no
committed next steps.

**Why it fails**: A workshop without action items is a conversation, not a decision.
Participants leave energized but nothing changes. Within 48 hours, the energy fades
and the insights are forgotten.

**Fix**: Every workshop board must include an Action Plan zone with the SMART format
(Specific, Measurable, Assignable, Realistic, Time-bound). This zone should be
visually prominent — it is the reason the workshop exists.

### Pitfall 3: Over-Filling the Board Before the Workshop

**The mistake**: The facilitator fills every zone with pre-written content, leaving
little room for participant contributions.

**Why it fails**: Participants feel like the answers are already decided. The workshop
feels performative rather than participatory. The IKEA Effect is lost — people do
not feel ownership of outcomes they did not co-create.

**Fix**: Follow the 60/40 rule. At least 60% of participant zones should be EMPTY
when the workshop begins. Pre-fill only 3-6 example sticky notes per zone, and
clearly label them as examples.

### Pitfall 4: Missing Timing

**The mistake**: Phase frames have titles and instructions but no duration labels.

**Why it fails**: Without visible timing, the facilitator loses track, participants
do not know how to pace themselves, and the workshop either rushes or drags. Time
pressure is a facilitation tool — it creates urgency and prevents overthinking.

**Fix**: Every phase frame must display its duration in accent color: "10 minutes" or
"5 min silent writing | 5 min sharing." The timeline bar at the top should show the
full session at a glance.

### Pitfall 5: No Facilitator Guide

**The mistake**: The board has participant-facing content but no facilitator reference.

**Why it fails**: Even experienced facilitators benefit from a written guide. Without
one, the facilitator must memorize the agenda, improvise transitions, and guess at
probing questions. This leads to inconsistent facilitation and missed opportunities.

**Fix**: Include a locked facilitator guide frame (usually in a bottom corner) with
the full agenda, timing, transition phrases, probing questions, and contingency
plans. This element is invisible to participants but essential for the facilitator.

### Pitfall 6: Disconnected Parking Lot

**The mistake**: No parking lot exists, or it exists but is never used.

**Why it fails**: Without a parking lot, valuable tangential ideas either derail the
session (someone insists on discussing them now) or are lost forever (no one captures
them). Both outcomes are wasteful.

**Fix**: Include a clearly labeled parking lot frame with instructions: "Good ideas
that are out of scope for this session — we will review them later." The facilitator
should actively use it: "Great point — let me capture that in the parking lot so
we do not lose it, and we will come back to it."

### Pitfall 7: Inconsistent Color Coding

**The mistake**: Green sticky notes mean "positive" in one zone and "go/action" in
another. Blue means "vision" here and "learning" there.

**Why it fails**: Participants unconsciously interpret color as meaning. Inconsistent
color coding creates confusion and forces participants to re-learn the system in
each zone.

**Fix**: Define the color system once (in the visual guide) and apply it consistently
across the entire board. Green always means positive/done. Red always means negative/blocked.
Blue always means aspirational. Orange always means cautionary.

---

## Build Time Estimates

| Board Type                | Session Design | Structure | Content | Examples | Polish | Total    |
| ------------------------- | -------------- | --------- | ------- | -------- | ------ | -------- |
| Brainstorm Session        | 15 min         | 20 min    | 20 min  | 15 min   | 10 min | ~1.3 hrs |
| Sprint Retrospective      | 10 min         | 15 min    | 20 min  | 15 min   | 10 min | ~1.2 hrs |
| Design Thinking Workshop  | 20 min         | 25 min    | 25 min  | 20 min   | 15 min | ~1.8 hrs |
| World Cafe Discussion     | 20 min         | 25 min    | 20 min  | 15 min   | 10 min | ~1.5 hrs |
| Icebreaker Collection     | 10 min         | 15 min    | 15 min  | 15 min   | 10 min | ~1.1 hrs |
| Custom Workshop (complex) | 25 min         | 30 min    | 30 min  | 20 min   | 15 min | ~2.0 hrs |

Note: Recurring workshops (retrospectives) get faster after the first build because
the template can be duplicated and adapted. After 3-4 iterations, a retro board can
be prepared in 20-30 minutes.
