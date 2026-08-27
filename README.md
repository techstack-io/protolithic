# Protolithic — Next.js + TypeScript + Tailwind

Port of the Protolithic landing page. Next.js App Router, React 19, Tailwind CSS v4
(CSS-first config — no `tailwind.config.ts`; tokens live in `app/globals.css` under `@theme`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run typecheck
```

## Files

```
app/layout.tsx        fonts (Cormorant Garamond + Lora via next/font) + metadata
app/globals.css       Classical design tokens as @theme + base layer + utilities
app/page.tsx          the page — model, stages, studio, ventures, marks, quote, CTA
components/DomeGallery.tsx   the draggable 3D dome (client component)
components/Hero.tsx   dome + headline + the two legibility washes
components/Nav.tsx    sticky header
components/Marks.tsx  the four logo marks + wordmark lockup
components/ui/        Button, Card, Tag — the Classical component layer
lib/theses.ts         thesis plates, stages, ventures (typed data)
```

## Design tokens

Set in `@theme`, so every token is also a Tailwind utility:
`bg-bg`, `text-ink`, `border-divider`, `text-accent-700`, `bg-surface`,
`font-heading`, `font-body`. Custom utilities: `just` (justified + hyphens),
`tnum` (tabular figures), `kicker` (uppercase eyebrow).

Classical rules held here: outlined buttons and cards (never filled accent),
hairline dividers, justified body copy, photographs matted as plates,
`:focus-visible` accent ring.

## DomeGallery

Same prop surface as the reference component:

```tsx
<DomeGallery
  items={theses}
  fit={0.8}
  minRadius={600}
  maxVerticalRotationDeg={0}
  segments={34}
  dragDampening={2}
  grayscale
/>
```

Extra props: `rows`, `span` (tile grid density), `autorotate` (deg/frame idle
drift, `0` to hold still). Give plates images by adding `src` to items in
`lib/theses.ts`. Needs a positioned parent — it fills `absolute inset-0`.

## To do before shipping

- Add `public/studio.jpg` (the studio plate) or swap it for your own photograph.
- Point the CTA `form action` at a real handler (`app/api/subscribe/route.ts`).
- Pick one of the four marks and drop the rest from `components/Marks.tsx`.
