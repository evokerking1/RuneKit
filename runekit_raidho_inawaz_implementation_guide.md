# RuneKit Design System
## Multi-Variant Implementation Guide for AI Agents

---

# 0. Overview

RuneKit is a symbolic design system built around geometric semantics, encoded interactions, modular glyph language, and atmospheric UI composition.

The system contains two primary variants:

| Variant | Purpose | Mood |
|---|---|---|
| Raidho | Mystical / ceremonial / immersive | Arcane machine ritual |
| Inawaz | Structured / industrial / analytical | Symbolic operating system |

Both variants inherit the same foundational design grammar.

The system is intended for:
- React applications
- Desktop software
- Dashboards
- Sci-fi interfaces
- Game tooling
- Developer systems
- Monitoring panels
- Terminal-inspired experiences

---

# 1. Core RuneKit Principles

These rules apply to ALL variants.

## 1.1 Symbolic Geometry

Every primitive shape has semantic meaning.

| Shape | Meaning |
|---|---|
| Triangle | Action / initiation |
| Circle | Passive state / information |
| Diamond | System entity / node |
| Split Line | Async process |
| Hollow Shape | Disabled / unavailable |
| Rotating Shape | Live process |
| Vertical Bars | Signal strength / energy |
| Hexagonal Frame | Critical interaction |

These semantics must NEVER change between variants.

---

## 1.2 Interaction Philosophy

Interactions must feel intentional.

Rules:
- Avoid instant pop-in transitions.
- Components should emerge, phase, slide, or materialize.
- Motion should communicate state.
- Hover states should reveal latent energy.
- Focus states should illuminate internal structure.

---

## 1.3 Layout Philosophy

All layouts use:
- Strong grid alignment
- Large negative space
- Section framing
- Hierarchical information zoning
- Explicit visual rhythm

Avoid:
- Random spacing
- Floating isolated widgets
- Inconsistent margins
- Dense clutter without framing

---

## 1.4 Border Logic

Borders are structural.

Rules:
- Use subtle edge illumination.
- Corners may contain glyph marks.
- Important panels may contain corner anchors.
- Borders should imply containment fields.

---

## 1.5 Typography System

### Headings
- Geometric uppercase
- High tracking
- Thin or semi-thin weight
- Slight rune-inspired cuts

### Body Text
- Highly readable
- Minimal stylistic distortion
- Medium contrast

### Numeric Data
- Monospaced
- Tight vertical rhythm
- Tabular alignment

---

# 2. Architecture

## 2.1 Token Structure

Implementation should use tokenized variables.

Recommended structure:

```txt
/tokens
  /core
  /raidho
  /inawaz
/components
/primitives
/layouts
/motion
/glyphs
```

---

## 2.2 Token Categories

Required token categories:

```txt
color
surface
border
radius
spacing
motion
glow
typography
opacity
shadow
z-index
```

---

## 2.3 Component Layers

Every component should support:

```txt
base
hover
focus
active
disabled
loading
critical
success
warning
```

---

# 3. Core Component Definitions

## 3.1 Buttons

### Structure

```txt
Button
├── Frame
├── Glyph
├── Label
├── Energy Layer
└── Interaction State
```

### Shared Rules

- Include glyph indicators where possible.
- Avoid overly rounded buttons.
- Maintain precise internal spacing.
- Labels should be uppercase.

### Variants

| Type | Purpose |
|---|---|
| Primary | Main action |
| Ghost | Secondary subtle action |
| Danger | Destructive action |
| Ritual | High significance action |
| Node | Context action |

---

## 3.2 Cards

Cards represent containers or entities.

Structure:

```txt
Card
├── Border Frame
├── Corner Anchors
├── Glyph Icon
├── Heading
├── Metadata
└── Action Region
```

Cards should never feel generic.

They should resemble:
- archived artifacts
- machine modules
- encrypted records
- ritual tablets

---

## 3.3 Inputs

Inputs should feel like channels.

Rules:
- Thin illuminated borders
- Focus state intensifies glow
- Invalid states fracture or distort slightly
- Placeholder text remains dim

Optional:
- Left-side glyph indicators
- Channel activation animations

---

## 3.4 Navigation

Navigation is symbolic.

Rules:
- Each nav item includes a semantic icon.
- Active state should illuminate.
- Hover should reveal energy traces.
- Current section should feel "locked in."

---

## 3.5 Tables

Tables are data archives.

Rules:
- High readability
- Thin separators
- Semantic status glyphs
- Monospaced IDs
- Structured row rhythm

Never use loud alternating row colors.

---

# 4. Motion System

## 4.1 Shared Motion Rules

Animations must:
- communicate state
- avoid excessive bounce
- avoid cartoon motion
- maintain precision

---

## 4.2 Motion Types

| Motion | Purpose |
|---|---|
| Phase In | Entry |
| Pulse | Activity |
| Drift | Ambient energy |
| Rotate | Live processing |
| Trace | Data flow |
| Bloom | Focus state |
| Collapse | Dismissal |

---

## 4.3 Timing Scale

```txt
instant: 80ms
fast: 140ms
normal: 220ms
slow: 400ms
ritual: 900ms
```

---

# 5. Glyph System

## 5.1 Glyph Philosophy

Glyphs are not decoration.

They communicate:
- state
- authority
- action
- risk
- process
- containment

---

## 5.2 Glyph Construction Rules

- Use straight segments.
- Avoid organic curves.
- Prefer symmetry.
- Use modular construction.
- Maintain line consistency.
- Design on square grids.

---

## 5.3 Glyph Categories

```txt
system
archive
warning
energy
sync
channel
ritual
observer
construct
```

---

# 6. Raidho Variant

## 6.1 Identity

Raidho is the ceremonial expression of RuneKit.

Inspired by:
- ritual machinery
- arcane interfaces
- cosmic control systems
- symbolic energy
- glowing observatories

Mood:
"An ancient intelligence conducting digital rites."

---

## 6.2 Color System

Primary colors:

| Role | Color Direction |
|---|---|
| Background | Deep midnight blue |
| Surface | Soft dark indigo |
| Accent | Violet |
| Secondary Accent | Cyan |
| Warning | Ember red |
| Success | Ethereal green |

Characteristics:
- High glow
- Atmospheric gradients
- Soft bloom
- Layered luminosity

---

## 6.3 Surfaces

Raidho surfaces should feel:
- holographic
- slightly translucent
- infused with energy

Use:
- blur layers
- subtle noise
- internal glow
- edge illumination

Avoid:
- harsh industrial textures
- rigid flatness

---

## 6.4 Motion

Raidho motion is flowing.

Characteristics:
- delayed easing
- soft acceleration
- ambient drift
- ceremonial pacing

Examples:
- cards phase into existence
- glyphs slowly rotate
- highlights ripple outward

---

## 6.5 Typography

Raidho typography is elegant and mystical.

Rules:
- Wider tracking
- Thin lettering
- Rune-inspired cuts
- Ethereal spacing

Headings should feel ancient but technological.

---

## 6.6 Lighting

Raidho relies heavily on lighting.

Use:
- bloom
- neon edge glow
- subtle volumetric feel
- layered translucency

Important:
Light should appear INTERNAL.

Avoid external cartoon glow.

---

## 6.7 Card Design

Raidho cards should resemble:
- relic tablets
- encoded artifacts
- ritual containers

Include:
- corner sigils
- energy seams
- glowing centers
- symbolic framing

---

## 6.8 Recommended Use Cases

- Game interfaces
- Lore systems
- Immersive dashboards
- AI control systems
- Creative tools
- Sci-fi applications

---

# 7. Inawaz Variant

## 7.1 Identity

Inawaz is the analytical expression of RuneKit.

Inspired by:
- classified operating systems
- cybernetic archives
- intelligence terminals
- industrial symbolic infrastructure

Mood:
"A machine civilization's operating environment."

---

## 7.2 Color System

Primary colors:

| Role | Color Direction |
|---|---|
| Background | Near-black slate |
| Surface | Cold graphite |
| Accent | Electric blue |
| Secondary Accent | Cyan-white |
| Warning | Amber |
| Error | Deep orange-red |

Characteristics:
- restrained glow
- high clarity
- strong readability
- controlled illumination

---

## 7.3 Surfaces

Inawaz surfaces should feel:
- machined
- engineered
- deliberate
- stable

Use:
- precise paneling
- minimal blur
- hard alignment
- clean spacing

Avoid:
- excessive bloom
- atmospheric haze
- dreamy gradients

---

## 7.4 Motion

Inawaz motion is efficient.

Characteristics:
- fast response
- clean transitions
- precise movement
- minimal overshoot

Examples:
- instant navigation lock
- subtle scan animations
- efficient fade transitions

---

## 7.5 Typography

Inawaz typography is systematic.

Rules:
- tighter spacing
- geometric precision
- technical readability
- operational clarity

Numeric data should dominate strongly.

---

## 7.6 Lighting

Inawaz uses controlled illumination.

Use:
- thin highlights
- subtle edge glow
- focused accents
- restrained bloom

Avoid:
- magical glow
- heavy fog effects
- diffuse light clouds

---

## 7.7 Card Design

Inawaz cards should resemble:
- archive records
- security modules
- classified containers
- system partitions

Include:
- structured metadata
- alignment precision
- technical framing
- dense informational hierarchy

---

## 7.8 Recommended Use Cases

- Dev tools
- Monitoring systems
- Infrastructure dashboards
- Cybersecurity interfaces
- Terminal overlays
- Administrative software

---

# 8. Variant Comparison

| Feature | Raidho | Inawaz |
|---|---|---|
| Motion | Flowing | Precise |
| Glow | Strong | Restrained |
| Mood | Mystical | Operational |
| Spacing | Spacious | Dense |
| Surfaces | Atmospheric | Structured |
| Typography | Ceremonial | Technical |
| Lighting | Internal bloom | Edge precision |
| Use Cases | Immersive | Analytical |

---

# 9. Recommended Technical Stack

## Frontend

Preferred:
- React
- TypeScript
- TailwindCSS
- Framer Motion

Optional:
- Radix UI
- Motion One
- Zustand

---

## Styling Strategy

Recommended:

```txt
CSS variables + Tailwind tokens
```

Theme switching should occur at:

```txt
html[data-theme="raidho"]
html[data-theme="inawaz"]
```

---

# 10. Example Token Definitions

## Raidho

```css
--bg: #070B14;
--surface: #111827;
--primary: #9B5CFF;
--secondary: #3DD9FF;
--success: #4FFFB0;
--warning: #FF5A5A;
--glow-strength: 0.8;
--radius: 14px;
```

---

## Inawaz

```css
--bg: #090B0F;
--surface: #12161D;
--primary: #2D7CFF;
--secondary: #8FD6FF;
--success: #4FD2A0;
--warning: #FFB347;
--glow-strength: 0.25;
--radius: 8px;
```

---

# 11. Accessibility Rules

Mandatory:
- AA contrast compliance
- Keyboard navigation
- Reduced motion support
- Visible focus states
- Semantic labels
- Screen reader compatibility

Do NOT sacrifice usability for atmosphere.

---

# 12. Audio Philosophy (Optional)

Raidho:
- resonant
- atmospheric
- harmonic
- soft crystalline tones

Inawaz:
- precise
- synthetic
- restrained
- signal-based confirmation tones

---

# 13. Future Expansion

Potential future variants:

| Variant | Direction |
|---|---|
| Ember | Industrial heat / forge aesthetic |
| Void | Minimal black operations UI |
| Solaris | Celestial gold interface |
| Obsidian | Heavy brutalist infrastructure |
| Echo | Ghosted holographic overlays |

---

# 14. Final Design Rule

RuneKit is NOT decorative cyberpunk.

Every visual choice must:
- communicate meaning
- reinforce symbolic structure
- maintain intentionality
- support atmosphere through system logic

The UI should feel like:
"a real interface from a civilization with symbolic computational traditions."

---

# 15. TailwindCSS Integration

## 15.1 Tailwind Philosophy

RuneKit should use TailwindCSS as the primary styling layer.

Reasons:
- token compatibility
- rapid iteration
- variant scalability
- utility-driven composition
- strong component abstraction
- design token integration

Tailwind utilities should represent:
- spacing rhythm
- symbolic sizing
- glow intensity
- surface hierarchy
- typography scale

Avoid excessive inline styles.

---

## 15.2 Recommended Stack

```txt
React
TypeScript
TailwindCSS
Framer Motion
Storybook
clsx
tailwind-merge
Radix UI
```

---

## 15.3 Recommended Directory Structure

```txt
/src
  /components
    /primitives
    /composites
    /layouts
  /tokens
    /core
    /raidho
    /inawaz
  /glyphs
  /motion
  /hooks
  /utils
  /stories
  /styles
```

---

## 15.4 Tailwind Configuration

Recommended strategy:

```txt
Use CSS variables for theming.
Use Tailwind semantic aliases.
```

Example:

```js
colors: {
  bg: 'rgb(var(--rk-bg) / <alpha-value>)',
  surface: 'rgb(var(--rk-surface) / <alpha-value>)',
  primary: 'rgb(var(--rk-primary) / <alpha-value>)',
  secondary: 'rgb(var(--rk-secondary) / <alpha-value>)',
}
```

---

## 15.5 Theme Switching

Themes should switch using:

```html
<html data-theme="raidho">
<html data-theme="inawaz">
```

OR:

```html
<body class="theme-raidho">
<body class="theme-inawaz">
```

---

## 15.6 Tailwind Utility Philosophy

Utilities should prioritize:
- composability
- semantic consistency
- predictable spacing
- reusable interaction logic

Recommended abstractions:

```txt
rk-panel
rk-border
rk-glow
rk-glyph
rk-grid
rk-surface
rk-node
rk-frame
```

---

## 15.7 Recommended Tailwind Plugin Features

Custom plugin should support:

| Feature | Purpose |
|---|---|
| Glow utilities | Atmospheric lighting |
| Symbolic borders | Framed containment |
| Grid overlays | Structural rhythm |
| Glyph spacing | Symbol alignment |
| Ritual transitions | Motion consistency |
| Data density modes | Compact vs spacious layouts |

---

## 15.8 Example Utility Classes

### Raidho

```txt
rk-glow-ritual
rk-phase-in
rk-sigil-border
rk-energy-surface
rk-astral-grid
```

### Inawaz

```txt
rk-panel-ops
rk-scanline
rk-node-active
rk-archive-surface
rk-grid-lock
```

---

# 16. Storybook Integration

## 16.1 Storybook Philosophy

Storybook is REQUIRED.

Storybook serves as:
- documentation
- visual testing system
- interaction archive
- component registry
- symbolic grammar reference

Storybook is not optional.

It is the living codex of RuneKit.

---

## 16.2 Storybook Requirements

Every component MUST include:

| Requirement | Purpose |
|---|---|
| Default Story | Baseline state |
| Variant Stories | Theme coverage |
| Interaction Stories | Hover/focus/loading |
| Accessibility Notes | Compliance |
| Usage Guidelines | Implementation rules |
| Motion Examples | Animation behavior |
| Token References | Visual consistency |

---

## 16.3 Story Naming Convention

Use:

```txt
RuneKit/Category/Component
```

Examples:

```txt
RuneKit/Primitives/Button
RuneKit/Primitives/Input
RuneKit/Data/Table
RuneKit/Layout/Sidebar
RuneKit/Feedback/Dialog
```

---

## 16.4 Storybook Theme Switching

Storybook must support runtime switching between:

- Raidho
- Inawaz

Preferred implementation:

```txt
Global toolbar theme switcher
```

---

## 16.5 Storybook Visual Rules

Storybook itself should visually inherit RuneKit.

Requirements:
- custom dark backgrounds
- symbolic section headers
- atmospheric framing
- themed documentation pages
- custom preview chrome

Avoid default plain Storybook appearance.

---

## 16.6 Story Categories

Required categories:

```txt
Foundations
Typography
Colors
Motion
Glyphs
Primitives
Composites
Data Display
Navigation
Feedback
Layouts
Experimental
```

---

## 16.7 Component Story Requirements

Each component story should demonstrate:

### States

```txt
idle
hover
focus
active
disabled
loading
success
warning
critical
```

---

### Density Modes

```txt
compact
default
expanded
```

---

### Theme Variants

```txt
raidho
inawaz
```

---

## 16.8 Motion Documentation

Every animated component should include:

- duration
- easing
- symbolic meaning
- reduced motion fallback

Motion should be documented as behavioral language.

---

## 16.9 Accessibility Stories

Storybook should include dedicated accessibility stories:

```txt
High Contrast
Keyboard Navigation
Reduced Motion
Screen Reader Structure
Focus Traversal
```

---

## 16.10 Storybook Testing

Recommended integrations:

| Tool | Purpose |
|---|---|
| Chromatic | Visual regression |
| Storybook Test Runner | Interaction tests |
| Axe | Accessibility validation |
| Playwright | UI automation |

---

## 16.11 AI Agent Storybook Rules

AI agents generating components MUST:

- automatically create stories
- include all states
- include both variants
- include accessibility metadata
- include token references
- include interaction examples

No component is complete without Storybook coverage.

---

# 17. Component Engineering Standards

## 17.1 Primitive-First Architecture

Components should build upward from primitives.

Example:

```txt
Primitive Button
→ Ritual Button
→ Command Button
→ Navigation Button
→ Panel Action Button
```

---

## 17.2 Composition Rules

Prefer:
- composition
- slots
- token injection
- reusable layouts

Avoid:
- giant monolithic components
- duplicated variants
- hardcoded colors

---

## 17.3 Animation Engineering

Animations should use:

```txt
transform
opacity
filter
clip-path
```

Avoid:
- layout thrashing
- excessive blur recalculation
- expensive repaint patterns

---

## 17.4 Performance Philosophy

RuneKit should feel advanced but efficient.

Rules:
- maintain responsive interaction
- avoid excessive particle effects
- optimize glow rendering
- virtualize dense data tables
- lazy load heavy visual layers

---

# 18. Documentation Philosophy

Documentation should read like:
- technical architecture
- symbolic doctrine
- interface engineering manual

Avoid:
- overly corporate language
- generic placeholder examples
- flavorless component descriptions

Every section should reinforce:
- symbolic computation
- encoded interaction
- atmospheric intentionality

---

# 19. Long-Term Vision

RuneKit should evolve into:

- a full component ecosystem
- a symbolic interaction language
- a design grammar
- a motion philosophy
- a recognizable visual identity

The ultimate goal:

A user should recognize RuneKit instantly even without seeing its logo.

