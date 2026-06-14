# NVIDIA Design System

A faithful, token-driven recreation of NVIDIA's marketing design language: engineering
documentation that learned graphic design. Dense, factual content on a paper-white grid,
bracketed top and bottom by deep-black hero/footer chapters, with **exactly one accent
color** — NVIDIA Green (`#76b900`) — doing all the work.

> **Sources.** This system was built from a written brand specification describing
> NVIDIA's public marketing pages (`/tr-tr/` homepage, `/en-eu/industries/healthcare-life-sciences/`,
> `/en-eu/solutions/ai/`, `/en-eu/ai/foundry/`). No codebase or Figma file was provided —
> components are original implementations of the documented tokens and component specs, not
> copied production source. The chrome palette is identical across all four reference pages;
> only photography and copy vary.

---

## Brand character

NVIDIA's system reads as **engineering-grade rather than consumer-friendly**. Its identity
comes from three disciplines held simultaneously:

1. **Single-accent restraint.** Green is a precious resource — every primary CTA, active
   tab, link affordance on dark, and the decorative corner square. Nothing else competes.
   The rest of the system is monochrome black / white / gray.
2. **Hyper-angular geometry.** Every interactive element uses a 2px radius (`--radius-sm`).
   No pill buttons, no rounded cards, no soft chrome. 2px softens optical aliasing on a
   sharp edge without ever reading as friendly.
3. **Two-mode surface architecture.** Black hero/footer "chapters" frame white-canvas body
   sections, alternating in a predictable rhythm down the page. Depth comes from
   photography and 3D renders, **not** from CSS shadows — cards are flat rectangles with
   hairline borders.

---

## Content fundamentals

**Tone.** Technical, declarative, benefit-forward. Copy reads like a spec sheet that has
been art-directed: confident product claims backed by hard numbers ("4× faster training",
"60% lower cost per inference"). No hype words without a figure attached.

**Voice & person.** Largely impersonal and product-centric ("NVIDIA H200 supercharges
generative AI"). Second person ("you") appears in CTAs and onboarding moments ("Get
started", "Build your first agent"). First-person plural is rare and reserved for
company/about copy.

**Casing.** Sentence case for headlines and body. **UPPERCASE** is a deliberate signal,
used for: eyebrows over section headings, document-type badges ("WHITE PAPER", "WEBINAR"),
ghost-link arrows ("LEARN MORE →"), and legal fine-print. Product names keep their official
casing (NVIDIA, CUDA, Tensor Core, DGX).

**Emoji.** None. The system is emoji-free. Iconography is line/solid glyphs from Font
Awesome, never emoji or decorative unicode in chrome.

**Vibe.** Authoritative, precise, a little austere. Marketing copy carries an editorial
newspaper feel because hierarchy is built from weight and size, not color or ornament.
Examples: hero — "The Engine of AI." · section — "Explore Our AI Solutions" · CTA bridge —
"Ready to get started?" · card — "NVIDIA H200 Tensor Core GPU / Supercharged for
generative AI and HPC."

---

## Visual foundations

**Color.** One accent (`--color-primary` `#76b900`) plus a monochrome scale. Pressed green
drops to `--color-primary-dark` `#5a8d00`. Editorial purples/yellows exist but appear only
inside long-form content, never on chrome. The single blue (`--color-link-blue` `#0046a4`)
is reserved exclusively for inline prose hyperlinks on light canvas.

**Type.** NVIDIA-EMEA (proprietary) at weights 400 / 700 only — no serif, no mono, no
italic, no display cut. A flat 12-tier scale (10px → 48px) where most chrome and body roles
share line-heights of 1.25–1.5; **weight contrast does the work that size jumps do
elsewhere.** Substitute: **Inter** (see Fonts caveat below).

**Spacing.** 8px base. `--space-section` (64px) is the universal vertical rhythm between
major blocks; card grids use 24px gutters; in-card padding is 24–32px. Whitespace is
*structural, not atmospheric* — sections butt against each other with no decorative
dividers or empty breathing bands. The sense of air comes from black chapters sandwiching
white body, not from generous internal padding.

**Backgrounds.** No gradients-as-decoration, no patterns, no textures. Backgrounds are
solid: white canvas, soft `#f7f7f7` for sub-nav / alternating rows, pure black for
chapters. The only gradient permitted is a dark legibility overlay on full-bleed hero
photography.

**Imagery.** Full-bleed photographic or 3D-rendered scenes (data-center hardware,
neural-net visualizations, microscopy). Cool-to-neutral, high-fidelity, never warm or
grainy. Hero imagery is 16:9 on desktop, art-direction-cropped to 4:5 portrait on mobile.
Card imagery is fixed-aspect (16:9 resource, 1:1 product, 3:2 editorial) and scales rather
than re-crops.

**Borders, shadow & elevation.** Hairline `#cccccc` (1px) separates cards and table cells;
`#5e5e5e` divides on dark. There is effectively **no drop-shadow elevation** — the only
shadow in the system is a 5px ambient (`0 0 5px 0 rgba(0,0,0,.3)`) on *sticky chrome bars*
when scrolled. Cards never lift.

**Corner radius.** 0 on chapters/nav/footer; 2px on every interactive element; `full` only
for avatars and social-icon dots. Nothing between 2px and `full`.

**Cards.** Flat rectangle · `--color-canvas` background · 1px `--color-hairline` border ·
2px radius · 24–32px padding · **no shadow** · a 12px green corner square anchored to one
corner as the identity tag.

**Animation.** Minimal and functional — short linear color transitions on interactive
state (~120ms). No bounces, no parallax-as-decoration, no infinite loops. Motion serves
legibility, not delight.

**States.** Per system policy, **hover states are not documented** — specs cover Default and
Active/Pressed only. Pressed primary drops green one notch to `--color-primary-dark`. Focus
on inputs is signalled solely by the green 2px border (no glow). Disabled is flat gray
(`--color-surface-soft` fill, `--color-ash` text).

**Transparency & blur.** Used sparingly: `--color-on-dark-mute` (70% white) for secondary
text on dark; the hero gradient overlay. No frosted-glass / backdrop-blur chrome.

---

## Iconography

- **System:** Font Awesome 6 Pro + Font Awesome 6 Sharp, used exclusively for glyphs
  (chevrons, social icons, breadcrumb separators, search/menu) at **14–22px**. Feature-card
  icons render larger (22–24px) in `--color-primary`.
- **Format:** glyph font, not individual SVG/PNG assets. The token `--font-icon` points at
  `"Font Awesome 6 Pro"`; until a license file is uploaded it falls back through the stack.
  In the UI kit and cards, link Font Awesome from CDN, or substitute a same-weight CDN set.
- **No emoji, no decorative unicode** anywhere in chrome.
- **Brand mark:** the green corner square is treated as a brand glyph in its own right.
  See the Fonts / brand caveat about the official logotype below.

> **Iconography substitution flag.** Font Awesome 6 *Pro* is a paid font and is not bundled.
> Cards/kits here use Font Awesome 6 *Free* (CDN) or simple glyph stand-ins where Pro-only
> icons would be required. Swap in the licensed Pro kit for production.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this); `@import` manifest only.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `shapes.css`, `fonts.css`.
- `assets/` — `wordmark-black.svg`, `wordmark-white.svg` (typographic stand-ins).
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.

**Components** (`components/`) — `window.NVIDIADesignSystem_73d77d.*`
- `core/` — **Button** (primary / outline / outline-on-dark / ghost-link / disabled · lg/md/sm),
  **Badge** (tag / accent / outline).
- `forms/` — **Input** (text / search / focused / invalid / disabled).
- `navigation/` — **PillTabs** (inverting segmented filter strip).
- `surfaces/` — **Card** (flat hairline + corner square), **CornerSquare**, **StatCallout**.

**Foundation cards** (`guidelines/`) — render in the Design System tab: color (brand,
surface, text, semantic, editorial), type (display, body, captions), spacing (scale,
radius, elevation), brand (wordmark).

**UI kit** (`ui_kits/marketing/`) — interactive marketing-page recreation: dark hero
chapter, feature/product/resource card grids, stat callouts, dark CTA bridge, multi-column
footer.

---

## Caveats

- **Fonts — substitution.** NVIDIA-EMEA is proprietary and cannot be redistributed. Per the
  brand spec, **Inter** (400/700) stands in — its metrics match within ~2% at body sizes;
  Arial is the documented fallback. Drop licensed NVIDIA-EMEA `.woff2` files into
  `assets/fonts/` and replace the `@import` in `tokens/fonts.css` to go exact.
- **Brand mark — placeholder.** The wordmark SVGs are a *typographic stand-in* (bold
  wordmark + green corner square), **not** NVIDIA's official logotype or eye mark. Replace
  with licensed brand assets for any real use.
- **Icons.** Font Awesome 6 Pro is paid; Free / glyph stand-ins are used here. See above.
- **Undocumented by source:** hover states, dialog/modal styling, full form-field styling,
  and authenticated chrome were not in the captured surfaces and are not specified.
