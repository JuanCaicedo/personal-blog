---
name: blog-redesign-requirements
description: Visual redesign of juancaicedo.com — pastel blue-lavender-cyan gradient background with dark indigo text, inspired by Trippy Pineapple Club's vibrant personality
metadata:
  type: project
---

# Blog Redesign Requirements

## Goal

Redesign the entire personal blog (juancaicedo.com) to add visual personality while keeping its simple, text-focused layout. No content changes — purely visual.

**Inspiration:** Trippy Pineapple Club's vibrant, playful energy — adapted to a reading-friendly pastel gradient palette.

## Scope

- All pages: home, blog index, individual posts, now page, garden pages, 404
- Global styles (`styles/globals.css`, `tailwind.config.js`)
- Shared components: `components/Layout.js`, `components/Nav.js`, `components/Card.js`

## Non-Goals

- No content or copy changes
- No layout restructuring (keep max-w-3xl centered)
- No new pages
- No comic-specific elements (no halftone, thick black borders, speech bubbles)

## Design Decisions

### Color Palette

**Page background:**
```css
background: linear-gradient(135deg, #dbeafe 0%, #ede9fe 50%, #cffafe 100%);
/* blue-100 → violet-100 → cyan-100 */
```

**Text:**
- Body: `#1e1b4b` (dark indigo)
- Headings: same or a slightly darker shade for contrast

**Links:**
- Default: a medium indigo or violet (e.g. `#4f46e5`) — visible against pastel bg
- Hover: deeper indigo or complementary blue (`#1d4ed8`)

**Cards** (replacing current `bg-yellow-400`):
- White or very-light-indigo (`#f5f3ff`) with a soft colored border
- Or: a slightly more saturated slice of the gradient (e.g. `#c7d2fe` indigo-200)

**Nav:**
- Slightly elevated from the page (white or frosted-glass effect, or a deeper tint of the gradient)

### Typography

- Body font: keep current sans-serif stack (readable, no change needed)
- Headings: introduce a distinctive display font for personality — e.g. **Space Grotesk** or **Plus Jakarta Sans** via Google Fonts
- The font choice is a design decision left open for implementation — pick whichever feels most alive against the pastel palette

### Gradient Coverage

- The gradient applies to `html`/`body` — full page, not just the header
- Note: `globals.css` currently applies `@apply h-full` on `html, body` — this must be changed to `min-h-screen` so the gradient covers the full viewport on short pages (home, 404, now)
- On long blog post pages, the gradient should tile/repeat gracefully or be `background-attachment: fixed` for a paralax feel
- Content itself sits directly on the gradient (no white content wrapper needed)

## Success Criteria

- Every page has the blue-lavender-cyan pastel gradient as its background
- Text is dark indigo and readable throughout
- Cards no longer use yellow — replaced with something that harmonizes with the gradient
- Nav feels intentional and cohesive with the new palette
- The site feels noticeably more distinctive and alive compared to the current plain-white design
- No content has changed — only styles

## Files to Change

| File | Change |
|------|--------|
| `styles/globals.css` | Set gradient on `html, body`; change `h-full` to `min-h-screen` on `html, body`; update link colors (replacing `#3182CE` default and `#C65B7D` pink hover with the new indigo values); update body text color to `#1e1b4b` |
| `tailwind.config.js` | Add custom indigo/blue palette tokens |
| `components/Card.js` | Replace `bg-yellow-400` with harmonious treatment |
| `components/Nav.js` | Style nav with glass or tinted treatment |
| `components/Layout.js` | Change `h-full` to `min-h-screen` on the root wrapper div (the div has no `bg-white` — that lives in `globals.css`) |
| `pages/_document.js` | Add Google Fonts link for display font |
