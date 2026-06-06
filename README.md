# SDW.hub — Santos Digital Week · Design System

> The visual + verbal language for **Santos Digital Week (SDW.hub)** — the largest
> business, innovation and technology event in the Baixada Santista region (Brazil).

This repository is a **design system / brand kit**. It gives any design agent (or
designer) the foundations, assets and components needed to produce on-brand
interfaces and marketing material for SDW.hub — from landing pages to slides.

---

## 1 · Company / product context

**Santos Digital Week (SDW.hub)** is positioned as *"o maior evento de negócios,
inovação e tecnologia da Baixada Santista"* — a regional flagship gathering for an
audience of **empreendedores, profissionais liberais, empresários, líderes e
autônomos** (entrepreneurs, independent professionals, business owners, leaders and
freelancers).

The brand reads as **the `.hub`** — a meeting point. The wordmark is the lowercase
**`sdw`** in a heavy, rounded geometric cut, paired with **`hub`** set in a friendly
handwritten italic. The pairing of *serious geometric monogram* + *human script* is
the core brand tension: **credible but warm, ambitious but regional.**

Primary surface of this kit: **the event marketing landing page** (see
`landing-pages/`). Tone requested by the client: **profissional** (professional),
written in **Brazilian Portuguese**.

### Sources provided
- Brand logos (uploaded): `sdw-logo-color.jpeg`, `sdw-logo-gold.png`,
  `sdw-logo-purple.png`, `sdw-logo-white.png` → copied into `assets/`.
- Brand fonts: **Poppins** (display + sans) — self-hosted from uploaded `.ttf`
  files in `fonts/` via `fonts/poppins.css` (Thin→Black, roman + italic).
- Brand palette: "Paleta SDW.hub 2026 (Gradients.app)" — see `colors_and_type.css`.
- Inspiration references (energy only, **not** to be copied):
  - https://lp.santosdigitalweek.com.br/belo-horizonte
  - https://lp.santosdigitalweek.com.br/bh
  - https://lp.santosdigitalweek.com.br
  - https://lp.santosdigitalweek.com.br/v2
  These are sophisticated, dark, editorial Brazilian professional-services sites —
  calm authority, generous whitespace, gold-on-dark accents, refined type.

> ⚠️ No website codebase or Figma file was provided. Foundations below are derived
> from the supplied logos, palette and font spec, plus the stated tone and audience.
> Event specifics (dates, venue, speakers, pricing, testimonials) were **not**
> supplied — anything concrete in the landing pages is a realistic **placeholder**
> to be replaced. These are flagged in the delivery notes.

---

## 2 · Content fundamentals (voice & tone)

**Language:** Brazilian Portuguese. **Register:** professional but not stiff —
confident, direct, business-forward. Think "evento que gera negócio", not corporate
jargon and not startup hype.

- **Person:** speak to the reader as **"você"**; the event speaks as **"nós / a SDW"**.
  Lead with the attendee's outcome ("o seu próximo nível", "as conexões que você
  precisa"), not the organizer's features.
- **Casing:** Sentence case for headlines and body. The wordmark stays **lowercase
  (`sdw`)** always. ALL-CAPS only for small kickers/labels with wide tracking
  (e.g. `NEGÓCIOS · INOVAÇÃO · TECNOLOGIA`).
- **Headlines:** short, punchy, benefit-led. One strong idea per headline.
  Examples of the right angle:
  - *"O maior palco de negócios da Baixada Santista."* (authority)
  - *"Três dias que aceleram o seu próximo nível."* (transformation)
  - *"Onde conexão vira negócio."* (ROI)
- **Sub-headline:** a single clarifying line — who it's for + what they leave with.
- **CTAs:** action + value, never bare. Prefer *"Garanta seu ingresso"*,
  *"Quero participar"*, *"Seja patrocinador"* over "Saiba mais" / "Clique aqui".
- **Numbers as proof:** edição, +palestras, +participantes, dias — use real,
  rounded figures when available; otherwise leave bracketed placeholders.
- **Emoji:** **not used.** The brand carries warmth through the gold + script accent,
  not emoji. Unicode is used only for tasteful separators (·, —, →).
- **Vibe:** ambitious regional pride. "A Baixada merece um evento desse porte."

---

## 3 · Visual foundations

### Color
A **jewel-toned, warm-on-dark** system. The hero ground is the deep indigo
`--color-brand-dark-blue (#1b193c)` or the brand gradient; **gold/cream
`#f0c68c`** is the single hero accent (CTAs, highlights, the "hub" script). Purple,
rose and cyan are supporting fills used mostly inside the signature gradient. On
light surfaces, the page is a **warm off-white `#fbf8f3`** (never pure-white walls)
with indigo ink. Avoid cold greys — neutrals lean warm.

Signature gradients (in `colors_and_type.css`):
`--grad-brand` (purple→rose→cyan, the logo gradient), `--grad-aurora` (deep radial
indigo for dark heroes), `--grad-warm`, `--grad-gold`, `--grad-cyan-purple`.

### Type
**Poppins** throughout — geometric, friendly, rounded. Display headings use **800
(extrabold)** with tight negative tracking (`-0.03em`); body is **400** at
1.65 leading. The brand's signature script ("hub") is emulated with **Poppins
italic 500** in gold (`.sdw-script`) — used sparingly, once per view, to echo the
logo. Small kickers are **600 uppercase** with wide `0.18em` tracking.

### Spacing & layout
8px base scale. Sections breathe — vertical rhythm of `--space-9/--space-10`
(96–128px) between blocks. Content max-width ~1200px; text columns ~640px.
Generous whitespace is part of the "professional" promise.

### Backgrounds
Three treatments: (1) **deep indigo / aurora gradient** dark sections;
(2) **warm paper** light sections; (3) **full brand-gradient** statement blocks
(hero or final CTA). Optional subtle grain/noise overlay on dark grounds for depth.
No busy patterns. Imagery, when present, skews **warm and slightly saturated**
(event/crowd energy) and is masked into rounded frames; placeholders here use the
brand gradient with a clear label.

### Corner radius & cards
Friendly but not bubbly. Cards: `--radius-lg (24px)`; pills/buttons:
`--radius-pill`; media frames: `--radius-xl (36px)`. Cards on light use a hairline
`--color-line` + soft warm `--shadow-md`; cards on dark use a `--color-line-dark`
gold hairline + inner-glow. **No** "rounded card with a single colored left border."

### Elevation & shadows
Warm-tinted, indigo-based shadows (`--shadow-sm/md/lg`). The gold CTA gets a
colored glow `--shadow-gold`. Dark cards get `--shadow-glow` (gold ring + purple
cast). Shadows are soft and diffuse, never hard.

### Motion
Calm and premium. Entrances are **fade + 12–20px rise**, `--ease-out`, 280–520ms,
gently staggered. Hover: gold buttons lighten slightly + lift 2px + grow the glow;
ghost/links shift to gold. Press: scale `0.98`, shadow collapses. Reduced-motion is
honored. No bounces, no infinite decorative loops on content.

### Transparency & blur
Sticky nav uses a translucent indigo with `backdrop-filter: blur()`. Glass cards on
gradient grounds use low-alpha white + blur + gold hairline. Used purposefully, not
everywhere.

---

## 4 · Iconography

The brand icon system is **[Phosphor Icons](https://phosphoricons.com)**. Approach:
- **Phosphor, Regular weight** — its rounded, friendly-geometric line style matches
  Poppins. In **production** use `@phosphor-icons/react` (main module
  `@phosphor-icons/react/dist/csr/`, e.g.
  `import { ArrowRight } from "@phosphor-icons/react/dist/csr"`). In **static HTML
  prototypes** load the Phosphor web font via CDN
  (`https://unpkg.com/@phosphor-icons/web` → `<i class="ph ph-arrow-right"></i>`).
- Icons inherit `currentColor`; gold on dark, indigo on light. Keep icons sparse —
  the brand prefers type + the script accent over decorative icons.
- **Emoji: not used.** Unicode separators (`·`, `—`, `→`) are allowed as type, not
  as icons.
- Logos live in `assets/` (see below) — use the **gold** mark on dark grounds, the
  **purple** mark on light grounds, **white** mark on photos/gradient, and the
  **color** lockup only where the full `sdw.hub` signature is wanted.

---

## 5 · Assets

In `assets/`:
| File | Use |
|---|---|
| `sdw-logo-color.jpeg` | Full `sdw.hub` lockup on its native gradient tile (social/avatars). |
| `sdw-logo-gold.png` | Gold `sdw` wordmark — **for dark grounds.** |
| `sdw-logo-purple.png` | Purple `sdw` wordmark — **for light grounds.** |
| `sdw-logo-white.png` | White `sdw` wordmark — for photos / busy gradient. |

> Transparent PNGs are 1278×614. There is **no standalone `.hub` script asset** —
> recreate "hub" with `.sdw-script` (Poppins italic, gold) when a lockup is needed.

---

## 6 · Index / manifest

- **`colors_and_type.css`** — all design tokens (color, gradients, type scale,
  spacing, radii, elevation, motion) + semantic helper classes.
- **`README.md`** — this file.
- **`SKILL.md`** — Agent-Skills-compatible entry point.
- **`assets/`** — logos (see §5).
- **`preview/`** — Design System tab cards (swatches, type specimens, components).
- **`landing-pages/`** — the deliverable UI kit: `index.html` gallery + 5 distinct
  landing-page variations (`v1`…`v5`). Each is a full, responsive, on-brand page.
# sdwhub-lp-acesso
