# Build Process — Education Boards

## Overview

Education boards require a unique build process because their content comes from pedagogical expertise, not just data. The process must honor curriculum standards, learning science principles, and the practical realities of classroom time. This guide walks through the six-phase process optimized for educational rigor and visual clarity.

---

## Phase 1: Discovery

### Gather Pedagogical Inputs

**For Lesson Plans**:

- Curriculum standards (NGSS, Common Core, state standards)
- Textbook or curriculum guide (scope and sequence)
- Student assessment data (what do they already know?)
- Available materials and technology
- Classroom logistics (time, room setup, group sizes)
- IEP/504 accommodations required

**For Course Curricula**:

- Institutional learning outcomes
- Department curriculum map
- Prerequisite course outcomes
- Textbook and supplementary materials
- Academic calendar (breaks, exam periods)
- Accreditation requirements

**For Research Boards**:

- Research question and hypothesis
- Literature database search results (20-50 initial sources)
- Methodology references and precedents
- IRB requirements and ethical guidelines
- Available data collection instruments
- Timeline constraints (grant period, dissertation deadline)

**For Study Maps**:

- Course syllabus and learning objectives
- Textbook table of contents
- Lecture notes and slides
- Previous exam questions
- Known prerequisite gaps

### Define Scope

1. **What is the time frame?** (50 minutes, 14 weeks, 4-year program)
2. **Who are the learners?** (Age, level, background, accommodations)
3. **What must they learn?** (Standards, objectives, competencies)
4. **How will we know they learned?** (Assessment strategy)
5. **What constraints exist?** (Materials, technology, time, budget)

---

## Phase 2: Structure

### Step 1: Set Up the Board

```
Lesson plan:      4000 x 2800px, background #FFFDE7
Study map:        4200 x 3500px, background #FAFAFA
Course curriculum: 5500 x 3000px, background #FAFAFA
Research board:   4500 x 3500px, background #FAFAFA
```

### Step 2: Create Frame Skeleton

**Lesson Plan skeleton**:

1. Header frame (full width)
2. Left sidebar frame (objectives, materials, differentiation key)
3. Activity timeline frames (one per activity segment)
4. Layer row frames within each activity (notes, assessment, differentiation)

**Course Curriculum skeleton**:

1. Header frame (full width)
2. Week column frames (15 equal columns)
3. Row label frame (left column)
4. Bottom panel frames (objectives, grading, key dates)

### Step 3: Verify Time Proportions

For lesson plans, calculate activity widths:

```
Total available width: 2700px (after sidebar)
Total lesson time: 50 minutes
Width per minute: 2700/50 = 54px

Hook (5 min):           270px
Direct Instruction (15): 810px
Guided Practice (10):    540px
Independent Work (10):   540px
Closing (5):            270px
Assessment (5):         270px
```

Verify these widths before proceeding to content.

---

## Phase 3: Content Population

### Step 1: Objectives First

Always start with learning objectives. They drive everything else.

- Write 2-4 measurable objectives using Bloom's verbs
- Align each to curriculum standards
- Note the Bloom's level explicitly (Remember, Understand, Apply, Analyze, Evaluate, Create)
- Place in the left sidebar with green highlighting

### Step 2: Assessment Second

Before designing activities, define how you will assess each objective:

- Formative checks (during the lesson)
- Summative assessment (exit ticket, quiz, project)
- Map each assessment to its corresponding objective
- Place assessment elements in the assessment row of the timeline

### Step 3: Activities Third

Now design activities that bridge objectives and assessments:

- For each objective, design at least one activity that practices the skill
- Sequence activities from lower to higher Bloom's levels
- Time each activity realistically
- Place in the activity row of the timeline, proportionally sized

### Step 4: Teacher Notes

Add facilitation guidance:

- Key questions to ask during each activity
- Transition instructions between activities
- Anticipated student responses and how to handle them
- Common misconceptions and how to address them
- Timing cues ("If this takes more than 10 minutes...")

### Step 5: Differentiation

For each major activity, add:

- Scaffold version (for students who need more support)
- Extension version (for students who need more challenge)
- Alternative modalities (visual, auditory, kinesthetic options)

### Step 6: Materials and Resources

Fill the materials section:

- Physical items with quantities
- Digital resources with links or locations
- Preparation checklist with timing ("print diagrams night before")

---

## Phase 4: Visual Polish

### Step 1: Alignment Verification

Check that every element chain is connected:

- Each objective → at least one activity → an assessment
- No activity exists without an objective connection
- No assessment measures something that was not taught

Use connector lines or color coding to make alignment visible.

### Step 2: Bloom's Progression Check

Read the timeline left to right and verify:

- Activities start at lower Bloom's levels (Remember, Understand)
- Activities progress to higher levels (Apply, Analyze, Evaluate, Create)
- Assessment matches or exceeds the highest Bloom's level practiced
- Add Bloom's level badges to each activity

### Step 3: Color Consistency

Verify the color system:

- All input/instruction elements: Blue family
- All active learning elements: Orange family
- All assessment elements: Purple family
- All outcome/objective elements: Green family
- All teacher notes: Gray, italic

### Step 4: Time Verification

Check that the total of all activity durations equals the class period:

- Sum all activity times
- Include transition time (1-2 minutes between activities)
- Verify no activity is unrealistically short or long
- Add a timer bar if using

### Step 5: Typography and Readability

- Header: 28pt+ bold, white on primary
- Section titles: 22pt bold
- Objectives: 14pt semi-bold, green
- Activity text: 12-13pt regular
- Teacher notes: 12pt italic, gray
- Metadata: 11pt, muted

---

## Phase 5: Review

### Pedagogical Review Checklist

| Check           | Question                                         | Pass? |
| --------------- | ------------------------------------------------ | ----- |
| Objectives      | Are objectives measurable with Bloom's verbs?    |       |
| Alignment       | Does every activity connect to an objective?     |       |
| Assessment      | Does every objective have an assessment?         |       |
| Bloom's         | Do activities progress up Bloom's taxonomy?      |       |
| Differentiation | Are scaffold and extension options included?     |       |
| Time            | Do activity times sum to the class period?       |       |
| Materials       | Are all materials listed with prep instructions? |       |
| Standards       | Are standards cited for all objectives?          |       |
| Student Voice   | Are anticipated student responses included?      |       |
| Pacing          | Is there time for transitions and reflection?    |       |

### Peer Review

Share the board with a colleague and ask:

1. "Could you teach this lesson from this board alone?"
2. "Can you trace from each objective to its assessment?"
3. "Are there any pacing concerns?"
4. "Would you add any differentiation?"

---

## Phase 6: Miro API Translation

### Coordinate Calculation for Lesson Plan

```
Header:           x=2000, y=80,   w=3900, h=160
Sidebar:          x=550,  y=1480, w=1100, h=2200
Activity 1 (Hook): x=1320, y=650,  w=270,  h=per_layer
Activity 2 (DI):   x=1605, y=650,  w=810,  h=per_layer
Activity 3 (GP):   x=2430, y=650,  w=540,  h=per_layer
Activity 4 (IW):   x=2985, y=650,  w=540,  h=per_layer
Activity 5 (Close): x=3540, y=650,  w=270,  h=per_layer
```

### Element Mapping

| Board Element | Miro Type                 | Properties                        |
| ------------- | ------------------------- | --------------------------------- |
| Header        | Frame + Text              | Blue background, white text       |
| Objective     | Sticky note (green)       | Semi-bold text, checkbox          |
| Activity      | Sticky note (blue/orange) | Duration label, Bloom's badge     |
| Teacher note  | Sticky note (yellow)      | Italic text                       |
| Assessment    | Sticky note (purple)      | Connected to objective            |
| Timer bar     | Shape (rectangle)         | Proportional width, fill gradient |
| Bloom's badge | Shape (rounded rect)      | Small, colored per level          |
| Connector     | Line                      | Dashed, 1px, primary color        |

### Build Order

1. Create board with background color
2. Create all frames (header, sidebar, activity columns, layers)
3. Add header text
4. Add objectives to sidebar
5. Add activity sticky notes (proportionally positioned)
6. Add teacher notes layer
7. Add assessment layer
8. Add differentiation layer
9. Add connector lines (objective → activity → assessment)
10. Add Bloom's badges and timer bars

---

## Common Pitfalls

### 1. Activities Before Objectives

Never design activities before writing objectives. Activities serve objectives, not the other way around. Start with what students should learn, then design how.

### 2. Unrealistic Timing

New teachers underestimate transition time and overestimate activity efficiency. Add 20% buffer to activity time estimates. A "10-minute activity" typically takes 12-15 minutes in practice.

### 3. Assessment Afterthought

If assessment is designed last, it often does not align with what was actually taught. Design assessment SECOND (after objectives, before activities) to ensure alignment.

### 4. Missing Differentiation

A lesson plan without differentiation is a plan for the "average" student who does not exist. Include scaffold and extension options for at least the main activities.

### 5. Invisible Alignment

If you cannot visually trace from an objective through an activity to an assessment, the alignment is invisible and may be accidental. Make it explicit with connectors or color coding.

### 6. Bloom's Plateau

A lesson where all activities are at the same Bloom's level (usually "Remember" or "Understand") does not promote deep learning. Ensure progression from lower to higher cognitive levels.
