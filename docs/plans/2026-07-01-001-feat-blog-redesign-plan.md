---
title: "feat: Pastel gradient blog redesign"
type: feat
status: active
date: 2026-07-01
origin: docs/brainstorms/blog-redesign-requirements.md
---

# feat: Pastel gradient blog redesign

## Overview

Restyle juancaicedo.com from its plain white design to a blue-lavender-cyan pastel gradient with dark indigo text, a restyled nav and cards, and a distinctive display font for headings. Purely visual — no content, copy, or layout-structure changes.

## Problem Frame

The site currently reads as plain and generic: white background, gray `#515151` body text, default blue links, and yellow cards. The origin brainstorm (see origin: `docs/brainstorms/blog-redesign-requirements.md`) calls for adding visual personality inspired by Trippy Pineapple Club's vibrant energy, adapted into a reading-friendly pastel gradient palette.

## Requirements Trace

**Color & surfaces**
- R1. Every page (home, blog index, posts, now, garden, 404, about, guatemala, medellin) has the blue-lavender-cyan pastel gradient background
- R2. Body text is dark indigo (`#1e1b4b`) and readable throughout
- R3. Cards no longer use `bg-yellow-400` — replaced with a treatment that harmonizes with the gradient

**Navigation**
- R4. Nav feels intentional and cohesive with the new palette (elevated or tinted)

**Typography**
- R5. Headings use a distinctive display font (Google Fonts) for personality

**Scope constraint**
- R6. No content changes — styles only; layout stays max-w-3xl centered

## Scope Boundaries

- No content or copy changes
- No layout restructuring (keep `max-w-3xl mx-auto` centering)
- No new pages
- No comic-specific elements (halftone, thick black borders, speech bubbles)
- No sticky/scroll nav behavior changes — nav stays static, only its visual treatment changes

## Context & Research

### Relevant Code and Patterns

- `styles/globals.css` — link colors `#3182CE` / hover `#C65B7D`, `html, body { @apply h-full bg-white; color: #515151 }`. This is where the gradient, text color, and link colors live.
- `styles/blog.css` — markdown typography for `.juan-blog`; contains a global `html * { font-size: 1rem }` override that wins the cascade over element-selector heading sizes (it's imported after `globals.css` in `pages/_app.js`). No colors here; mostly unaffected, but relevant to the display-font unit.
- `components/Layout.js` — root div `font-sans layout h-full`; the `layout` class is defined nowhere (dead class).
- `components/Nav.js` — unstyled header, `max-w-3xl` inner nav.
- `components/Card.js` — `bg-yellow-400 p-3 mb-4 rounded-lg`; used by `pages/blog/index.js`, `pages/blog/[slug].js`, `pages/about.js`, `pages/404.js`, `pages/guatemala.js`, `pages/medellin.js`.
- `pages/blog/[slug].js` — wraps every MDX paragraph in a `bg-cyan-100` div (`BlogParagraph`) and the whole post in a `Card`. These backgrounds sit on top of the gradient and must be reconciled (see Resolved questions).
- `components/MdxRenderer.js` — `bg-red-100 text-red-900` is an error-state fallback only; leave as-is.
- Stack: Next.js 16 (pages router), React 19, Tailwind CSS 3.4, PostCSS 8. Fonts should use `next/font/google`, which is the idiomatic Next.js approach.

### Institutional Learnings

- None — `docs/solutions/` does not exist in this repo.

### External References

- None needed — well-understood Tailwind/CSS techniques.

## Key Technical Decisions

- **Gradient on a fixed full-viewport pseudo-element (`body::before`) via plain CSS, not Tailwind utilities**: the gradient is a one-off `linear-gradient(135deg, #dbeafe 0%, #ede9fe 50%, #cffafe 100%)`, painted on `body::before { position: fixed; inset: 0; z-index: -1 }` in `globals.css`. Keeps it global without touching every page, and renders identically in every browser.
- **`min-h-screen` replaces `h-full`** in `globals.css` (`html, body`) and `components/Layout.js`. Precision on the mechanism: viewport coverage on short pages is guaranteed by the fixed `body::before` layer (`inset: 0` spans the viewport regardless of content height). The required change is removing `bg-white`; the height swap is a defensive layout cleanup (a full-min-height root avoids surprises if a footer or flex layout is added later), not what prevents a white band.
- **Fixed pseudo-element instead of `background-attachment: fixed`**: the origin doc suggested fixed attachment for the parallax feel, but iOS Safari ignores it — the gradient would stretch over the full document height, reading as near-solid color per screenful on long posts — and fixed attachment can force scroll repaints on desktop. The fixed `body::before` layer delivers the same parallax feel everywhere, iOS included.
- **Load the display font with `next/font/google`, not a `<link>` in `pages/_document.js`**: the origin doc suggested a `_document.js` link, but `next/font` self-hosts the font, eliminates layout shift, and is the Next.js-recommended pattern. Same intent, better mechanism. Wire the font's CSS variable into `tailwind.config.js` (`fontFamily.display`) and apply it to headings.
- **Palette tokens in `tailwind.config.js`**: add semantic tokens (e.g. `ink` for `#1e1b4b`) so components reference named colors instead of hex codes.

## Open Questions

### Resolved During Planning

- **What about the `bg-cyan-100` paragraph wrappers in blog posts?** Remove the `p: BlogParagraph` override entirely (delete `BlogParagraph` and the `p` entry in `blogComponents`), falling back to MdxRenderer's default `Paragraph` (`<p className="my-4 first:mt-0">`). The cyan divs carry no margin or padding — today the background color is the only visual separation between paragraphs, so merely removing the background while keeping a bare wrapper div would leave posts as one unspaced text block. Restoring real `<p>` elements brings back paragraph spacing and re-activates the `.juan-blog p` typography rules in `styles/blog.css`. Style-only, in scope.
- **Do blog posts keep their `Card` wrapper?** Yes — removing it would be layout restructuring (a non-goal). The restyled Card becomes the post reading surface, so its new treatment must keep long-form text readable.
- **Google Fonts via `_document.js` or `next/font`?** `next/font/google` (see Key Technical Decisions).

### Deferred to Implementation

- **Which display font** (Space Grotesk vs. Plus Jakarta Sans vs. similar): origin doc explicitly leaves this open — pick whichever feels most alive against the pastel palette when seen rendered.
- **Exact Card treatment** (near-white vs. very-light-indigo `#f5f3ff` vs. semi-translucent white vs. indigo-200 slice): origin doc offers options; judge against the gradient in the browser. Caution: `#f5f3ff` sits ~8 RGB units from the gradient's midpoint stop `#ede9fe`, so at mid-scroll the fill alone nearly vanishes. Start from a whiter fill (e.g. `bg-white/80`) or let a stronger soft indigo border carry the card edge at every scroll position.
- **Nav treatment** (translucent white tint vs. deeper gradient tint): judge rendered. `backdrop-blur` was dropped from the options — the nav is static (non-sticky) with only the smooth fixed gradient behind it, so there is nothing textured to blur and the effect would be invisible; the gradient-tint option is also the one more grounded in the palette.

## Implementation Units

- [ ] **Unit 1: Global palette and gradient foundation**

**Goal:** Gradient background on every page, dark indigo body text, new indigo link colors, full-viewport coverage on short pages.

**Requirements:** R1, R2, R6

**Dependencies:** None

**Files:**
- Modify: `styles/globals.css`
- Modify: `tailwind.config.js`

**Approach:**
- In `globals.css`: replace `h-full bg-white` on `html, body` with `min-h-screen`; add a `body::before` fixed layer (`position: fixed; inset: 0; z-index: -1`) carrying the 135deg blue→violet→cyan gradient; change body color to `#1e1b4b`; replace link colors (`#3182CE` → `#4f46e5`, hover `#C65B7D` → `#1d4ed8`); add a visible `:focus-visible` outline for links that reads against the pastel palette (once default colors change, the browser's default focus ring is no longer guaranteed to contrast).
- In `tailwind.config.js`: extend the theme with semantic color tokens (e.g. `ink: '#1e1b4b'`) for use in later units.

**Patterns to follow:**
- Existing `globals.css` structure (plain CSS with `@apply` where convenient).

**Test scenarios:**
- Test expectation: none — pure styling; no test infrastructure exists in this repo and there is no behavioral change.

**Verification:**
- Home, now, and 404 (short pages) show the gradient filling the entire viewport with no white band at the bottom.
- A long blog post scrolls with the gradient fixed in place (parallax feel) — identical on desktop and iOS.
- Tabbing through links shows a clearly visible focus indicator against the gradient.
- Links render medium indigo, hover to deeper blue.
- Link color passes WCAG AA (4.5:1) against the lightest gradient stop `#cffafe` (per the risk table — darken toward `#4338ca` if it falls short).

- [ ] **Unit 2: Layout and Nav treatment**

**Goal:** Layout root no longer constrains height; nav reads as intentionally elevated from the gradient.

**Requirements:** R1, R4

**Dependencies:** Unit 1 (needs the gradient in place to judge the nav treatment)

**Files:**
- Modify: `components/Layout.js`
- Modify: `components/Nav.js`

**Approach:**
- `Layout.js`: change `h-full` to `min-h-screen` on the root div (there is no `bg-white` here — that lived in `globals.css` and is removed in Unit 1). Optionally drop the dead `layout` class.
- `Nav.js`: style the header with either a translucent white tint or a deeper tint of the gradient — final look judged in the browser (deferred question). Skip `backdrop-blur`: with a static nav over a smooth fixed gradient there is nothing behind the header to blur, so it would add GPU compositing cost with no visible effect. Keep the existing structure and links untouched.

**Test scenarios:**
- Test expectation: none — pure styling, no behavioral change.

**Verification:**
- Nav is visually distinct from the page background on every page and harmonizes with the palette.
- No page shows a height regression (content still starts below the nav, footerless pages still fill the viewport).
- Nav links keep a visible keyboard-focus indicator on the new treatment.

- [ ] **Unit 3: Card restyle and blog-post surface**

**Goal:** No yellow anywhere; cards and the blog-post reading surface harmonize with the gradient.

**Requirements:** R2, R3, R6

**Dependencies:** Unit 1 (treatment must be judged against the live gradient)

**Files:**
- Modify: `components/Card.js`
- Modify: `pages/blog/[slug].js`

**Approach:**
- `Card.js`: replace `bg-yellow-400` with the chosen harmonious treatment (deferred question; start from a near-white fill + soft indigo border — see Deferred: `#f5f3ff` alone blends into the gradient midpoint). Keep padding/rounding/styled-jsx margin fixes as-is.
- `pages/blog/[slug].js`: delete the `BlogParagraph` component and its `p:` override in `blogComponents`, falling back to MdxRenderer's default `Paragraph` (`my-4 first:mt-0`) — this restores real `<p>` elements, paragraph spacing, and the `.juan-blog p` rules from `styles/blog.css` (see Resolved questions). Both the `my-4` margins and `.juan-blog p { padding-bottom: 1rem }` will then apply; trim one during implementation if spacing looks doubled. The restyled Card remains the post wrapper.

**Patterns to follow:**
- `components/Card.js` existing className pass-through (`${className}`) — callers like `blog/[slug].js` pass `juan-blog`; preserve that.

**Test scenarios:**
- Test expectation: none — pure styling, no behavioral change.

**Verification:**
- Blog index, about, 404, guatemala, medellin, and blog posts show the new card treatment; no `yellow` classes remain in the codebase (grep).
- A full blog post is comfortably readable on the new card surface (long-form body text on the chosen background), with visible spacing between paragraphs.
- Links inside cards pass WCAG AA contrast against the card fill (the card is lighter than any gradient stop, making link-on-card the worst case).
- Cards remain visually distinct from the background at every scroll position, including against the gradient midpoint `#ede9fe` — fill or border must carry the edge.

- [ ] **Unit 4: Display font for headings**

**Goal:** Headings use a distinctive Google Fonts display face; body text stack unchanged.

**Requirements:** R5, R6

**Dependencies:** Unit 1 (judge the font against the palette)

**Files:**
- Modify: `components/Layout.js` (or `pages/_app.js` — wherever the `next/font` variable class attaches to the tree)
- Modify: `tailwind.config.js`
- Modify: `styles/globals.css`

**Approach:**
- Load the chosen display font (deferred question: Space Grotesk or Plus Jakarta Sans) via `next/font/google` with a CSS variable; attach the variable class at the layout root.
- Register `fontFamily.display` in `tailwind.config.js` from the variable; apply it to `h1`–`h6` in `globals.css`.
- Heads-up: `styles/blog.css` declares `html * { font-size: 1rem }`, which overrides element-selector font sizes (`blog.css` is imported after `globals.css`; same specificity, later wins). Concretely, three headings have no Tailwind text-size utility and render at 1rem today: the `h1` in `pages/blog/index.js` ("Previous posts"), the post-title `h3`s in the same file, and the References `h3` in `pages/garden/[slug].js`. A distinctive display font will make these read as redesign bugs. Adding a text-size utility to those elements is in scope (style-only); don't refactor `blog.css` itself.

**Patterns to follow:**
- Next.js `next/font/google` variable-font pattern with Tailwind `fontFamily` extension.

**Test scenarios:**
- Test expectation: none — pure styling, no behavioral change.

**Verification:**
- All headings (page titles, markdown headings inside posts and garden pages) render in the display font; body paragraphs keep the sans stack.
- Heading sizes keep their visual hierarchy (h1 > h2 > h3) — specifically the blog-index `h1`, blog-index post-title `h3`s, and garden References `h3` no longer render at body size.
- No layout shift or flash-of-unstyled-font on first load (next/font handles this — confirm visually).

## System-Wide Impact

- **Interaction graph:** All pages inherit from `globals.css` and `components/Layout.js`, so Units 1–2 restyle every route at once, including MDX-driven garden and blog pages.
- **State lifecycle risks:** None — static styling only.
- **API surface parity:** `Card` is shared by six pages; its restyle applies uniformly. `components/MdxRenderer.js` error fallback (`bg-red-100`) is intentionally untouched.
- **Unchanged invariants:** Page structure, routing, content, `max-w-3xl` centering, and all component APIs stay identical. `styles/blog.css` typography rules stay as-is.

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Fixed `body::before` layer (`z-index: -1`) hidden by an opaque ancestor background | Grep confirmed no page-level opaque wrappers remain after Unit 3; verify visually on desktop and a mobile viewport during implementation. |
| Link color `#4f46e5` contrast on pastel backgrounds | Check WCAG AA (4.5:1) against the lightest gradient stop (`#cffafe`) during implementation; darken toward `#4338ca` if it falls short. |
| `html * { font-size: 1rem }` in `blog.css` interacting with heading styles | Known quirk documented in Unit 4; only touch if the redesign visibly breaks heading sizes. |
| Removing `bg-white` could expose unstyled surfaces | Grep for remaining `bg-`/color utilities after Unit 3 (`bg-cyan-100`, `bg-yellow-400` are the only page-level ones found). |

## Documentation / Operational Notes

- Site deploys via Vercel (`vercel.json`); no rollout steps beyond merging — preview deployment is the natural place for the final visual check.

## Sources & References

- **Origin document:** [docs/brainstorms/blog-redesign-requirements.md](../brainstorms/blog-redesign-requirements.md)
- Related code: `styles/globals.css`, `components/Card.js`, `components/Nav.js`, `components/Layout.js`, `pages/blog/[slug].js`
- Related PRs: #86 (Next.js migration — established current structure)
