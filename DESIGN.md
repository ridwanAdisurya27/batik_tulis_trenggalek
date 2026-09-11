# Design System: Batik Tulis Trenggalek & Kage Heritage

## 1. Visual Theme & Atmosphere
A contemplative, high-end artisanal sanctuary celebrating the centuries-old heritage of Indonesian Batik Tulis and Japanese aesthetic discipline. The visual atmosphere evokes a quiet moonlit gallery (*Kage* — 影) bathed in charred cypress, inkstone depths, and warm lantern amber. 
- **Density:** 4 (Artisanal Gallery Airy — generous breathing room, expansive negative space, disciplined margins).
- **Variance:** 6 (Offset Asymmetric — dynamic split layouts, rhythmic visual pacing, tactile editorial card hierarchies).
- **Motion:** 6 (Fluid Organic Motion — spring physics `stiffness: 100, damping: 20`, subtle grain, hover depth transformations, no jarring animations).

The interface shuns commercial marketplace noise in favor of museum-grade reverence for every hand-drawn wax line (*mencanting*), natural dye graduation, and philosophical motif.

---

## 2. Color Palette & Roles
Every color is anchored in natural dye minerals, soot ink, and aged heritage cotton:

| Descriptive Token | Hex / RGBA | Functional Role |
|---|---|---|
| **Deep Inkstone Canvas** | `#05070a` | Primary background canvas surface, deep soot black (never pure `#000000`) |
| **Raised Lacquer Surface** | `#0a0e12` | Elevated cards, navigation wash, and modal container surface |
| **Aged Bone Sage** | `#dfe7e0` | Primary typography, headers, high-contrast brand wordmark |
| **Pale Sage Dim** | `#aab4ad` | Secondary typography, standfirsts, active filters |
| **Muted Patina** | `#78837c` | Micro-labels, metadata, timestamps, search input placeholders |
| **Whisper Hairline** | `rgba(223, 231, 224, 0.13)` | 1px architectural divider lines, card borders, subtle grid outlines |
| **Soft Hairline** | `rgba(223, 231, 224, 0.06)` | Secondary dividers, background grid guides |
| **Vermilion Ember (Accent)** | `#e0231c` | Singular primary accent: status indicator dots, active borders, canting fire motifs |
| **Heirloom Sogan Gold** | `#c9a24a` | Secondary artisanal seal: authentic Batik Tulis badge, pricing accents |

**Mandatory Constraints:**
- Single dominant accent (`#e0231c` Vermilion), with `#c9a24a` reserved strictly for craft certification badges.
- Neon glows, purple/blue gradients, and oversaturated tech accents are **strictly banned**.
- No pure black (`#000000`) anywhere.

---

## 3. Typographic Architecture
A refined pairing of contemporary geometric sans with cultural glyph dignity:

- **Primary Display & Headlines:** `'Onest', system-ui, -apple-system, sans-serif`
  - Track-tight (`letter-spacing: -0.015em`), controlled scale, weight-driven hierarchy (`font-weight: 400` to `500`).
  - Dignified lowercase and small-caps eyebrows (`letter-spacing: 0.22em`, `font-size: 10px` to `11px`).
- **Heritage & Accents:** `'NotoJP', 'Onest', Georgia, serif`
  - Used for philosophical subtext, chapter kanji (`影`, `手業`, `庭園`), and cultural provenance callouts.
- **Body & Standfirst:** `'Onest', sans-serif`
  - `font-size: 14px - 16px`, relaxed line-height (`1.65 - 1.72`), maximum 65 characters per line (`max-width: 65ch`).
- **Numerics & Currency:** Tabular figures (`font-variant-numeric: tabular-nums; font-family: 'Onest', sans-serif; font-weight: 400;`).
- **Banned Typography:**
  - `Inter`, `Roboto`, `Arial`, standard `Times New Roman`, and generic AI tech fonts are strictly banned.

---

## 4. Component Stylings

### A. Search & Filter Bar
- **Input Field:** Deep lacquer fill (`#0a0e12`), 1px whisper border (`rgba(223, 231, 224, 0.13)`), softly rounded corners (`12px`).
- **State Feedback:** Focus transition to `rgba(224, 35, 28, 0.45)` border with subtle 1px ring; no harsh glowing shadows.
- **Clear & Icon Actions:** Tactile SVG icons tinted in Muted Patina (`#78837c`), shifting to Bone (`#dfe7e0`) on hover.
- **Filter Chips:** Capsule pills (`rounded-full`) with border-only default state. Active state fills with subtle tint (`rgba(223, 231, 224, 0.08)`) and Vermilion indicator dot.

### B. Batik Showcase Card
- **Structure:** Clean vertical card with generous interior padding (`16px - 20px`), wrapped in a 1px whisper border.
- **Image Presentation:** 
  - Aspect ratio `4:3` or `1:1` macro view with deep edge vignetting.
  - Image scaling `transform: scale(1.03)` with `0.6s cubic-bezier(0.16, 1, 0.3, 1)` on container hover.
  - Subtle noise texture overlay and dark gradient scrim on base to guarantee text contrast.
- **Badging:** Artisanal craft chip (`Batik Tulis Halus`, `Trenggalek Authentic`) rendered in 9px tracked small-caps with Heirloom Sogan Gold accent.
- **Typography:**
  - Motif Name: Medium display weight (`font-size: clamp(16px, 1.4vw, 20px)`).
  - Price: Prominent tabular numeral formatted in Indonesian Rupiah (`Rp 999.999`) in Bone Sage.
  - Excerpt: 2-line clamped summary of cultural provenance.
- **CTA:** Tactile "Eksplorasi Motif" link with micro-arrow hover animation (`translate3d(4px, 0, 0)`).

### C. Modal / Philosophical Detail Drawer
- **Backdrop:** Deep soot ink scrim (`rgba(5, 7, 10, 0.85)`) with backdrop blur (`16px`).
- **Sheet Architecture:** Centered high-density modal (`max-width: 860px`) featuring split layout:
  - High-resolution batik fabric texture viewer on left.
  - Historical backstory, origin village, cultural philosophy, and specifications on right.
- **Close Button:** Minimalist tactile circle button with smooth rotational transition.

### D. Empty State
- Composed cultural composition featuring a stylized canting wax illustration, reassuring message, and suggestion chips to reset queries. No blank or jarring "No Data" text.

---

## 5. Layout Principles
- **Grid Architecture:** 
  - Desktop: Asymmetric multi-column CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`, max 3-4 columns with variable rhythm).
  - Tablet (768px - 1024px): 2-column balanced grid.
  - Mobile (< 768px): Strict 1-column collapse with horizontal swipeable filter row.
- **Spacing Scale:**
  - Container maximum width: `1400px` centered with clamp padding (`clamp(20px, 4vw, 64px)`).
  - Vertical section margins: `clamp(48px, 8vh, 96px)`.
  - Element rhythm based on 4px/8px incremental grid.
- **Full Viewport Safety:**
  - Hero and full containers use `min-h-[100dvh]` to prevent iOS Safari address-bar jumps.

---

## 6. Motion & Micro-Interactions
- **Physics Engine:** Cubic bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`) and spring constants (`stiffness: 100, damping: 20`).
- **Staggered Cascade:** Batik cards reveal with an 80ms incremental stagger delay when filters change or page loads.
- **Perpetual Micro-Interactions:**
  - Active search pulse indicator.
  - Authentic badge subtle ambient shimmer.
  - Noise grain backdrop (`mix-blend-mode: overlay`, `opacity: 0.055`).
- **Performance Rule:** Animations restricted to `transform` and `opacity` to maintain 60-120fps hardware acceleration.

---

## 7. Anti-Patterns (Forbidden AI Clichés)
1. ❌ **NO Emojis** anywhere in the interface. Use custom fine-line SVG iconography.
2. ❌ **NO Pure Black (`#000000`)**. Only nuanced deep soot ink tones (`#05070a`, `#0a0e12`).
3. ❌ **NO AI Neon Glows** or cyberpunk cyan/magenta drop shadows.
4. ❌ **NO Generic Marketplace Slop:** No fake countdown timers, no "99% OFF", no blinking stars.
5. ❌ **NO Generic Sans:** Banned `Inter`, `Roboto`, `Helvetica` default clones.
6. ❌ **NO AI Copywriting Clichés:** Never use "Elevate your style", "Unleash the beauty", "Seamless experience", or "Next-gen batik".
7. ❌ **NO Overlapping Text/Images:** Every element must live in a deliberate, measured spatial zone.
8. ❌ **NO Broken Placeholders:** All data linked directly to `database_batik.json` and local verified photography.
