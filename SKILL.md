---
name: sdw-hub-design
description: Use this skill to generate well-branded interfaces and assets for SDW.hub (Santos Digital Week) — the largest business, innovation and technology event in the Baixada Santista region, Brazil. Use for production work or throwaway prototypes/mocks/landing pages. Contains brand guidelines, colors, type, fonts, logos, and ready-made landing-page components.
user-invocable: true
---

# SDW.hub — Santos Digital Week · Design Skill

Read **`README.md`** first — it holds the full brand context, voice & tone,
visual foundations, iconography and a file index. Then explore the other files:

- **`colors_and_type.css`** — all design tokens (color, gradients, Poppins type
  scale, spacing, radii, warm elevation, motion). Import or copy these vars.
- **`assets/`** — the `sdw` logos: `*-gold.png` (dark grounds), `*-purple.png`
  (light grounds), `*-white.png` (photos/gradient), `*-color.jpeg` (full lockup).
- **`preview/`** — Design System cards (swatches, type, components) to eyeball the
  system quickly.
- **`landing-pages/`** — five complete, on-brand landing-page variations plus an
  `index.html` gallery. Use these as reference components / starting points.

## How to work with this brand
- **Language:** Brazilian Portuguese. **Tone:** professional, confident, benefit-led.
  Speak to the reader as *você*; lead with their outcome. No emoji.
- **Type:** Poppins everywhere. Display = ExtraBold 800, tight tracking. The "hub"
  script accent = Poppins *italic 500* in gold — use once per view.
- **Color:** warm-on-dark. Deep indigo `#1b193c` or the brand gradient as ground;
  **gold `#f0c68c`** is the single hero accent. Warm off-white `#fbf8f3` on light.
  Avoid cold greys and bluish-purple "AI" gradients that aren't in the palette.
- **Icons:** [Phosphor Icons](https://phosphoricons.com). In production use
  `@phosphor-icons/react` (main module `@phosphor-icons/react/dist/csr/`). In static
  HTML prototypes load the Phosphor web font via CDN
  (`<link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css">`
  → `<i class="ph ph-arrow-right"></i>`). Regular weight, `currentColor`, used sparingly.

## Stack

For production code in this project, use:

- **React Latest Version** (sem `forwardRef`) e Latest Version
- **Next.js Latest Version** (sem `forwardRef`) e Latest Version
- **TypeScript** strict e Latest Version
- **Tailwind CSS v4 Latest Version** com `@theme` e CSS variables e Latest Version
- **Base UI React** (`@base-ui/react`) para componentes headless e Latest Version
- **Tailwind Variants** (`tailwind-variants`) para variantes e Latest Version
- **Tailwind Merge** (`tailwind-merge`) para merge de classes e Latest Version
- **Phosphor Icons** (`@phosphor-icons/react`) para ícones — utilize o main module (`@phosphor-icons/react/dist/csr/`) para evitar tree-shaking de ícones em produção - todos os ícones estão com os nomes alterados, foram atualizados e estão terminando com `Icon` para evitar conflitos de nome com outros ícones ou componentes. Exemplo: `ArrowRightIcon`. - Latest Version

> Ícones: **Phosphor** em todo lugar. Em produção use `@phosphor-icons/react/dist/csr/`;
> em protótipos HTML estáticos use o web font do Phosphor via CDN (classe `.ph .ph-*`).

## When invoked
If creating visual artifacts (slides, mocks, landing pages, throwaway prototypes),
**copy the assets you need out of this folder** and produce self-contained static
HTML for the user to view. If working on production code, copy assets and apply the
rules here to design natively in the brand.

If invoked without guidance, ask the user what they want to build, ask a few focused
questions (surface, audience, content, variations), then act as an expert designer
who outputs polished HTML artifacts **or** production code, as the need dictates.
