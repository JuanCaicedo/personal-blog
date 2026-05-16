# Brainstorm: Next.js Migration with Digital Garden Backlinks

**Date:** 2026-03-21
**Status:** Brainstorm

## What We're Building

A complete rebuild of juancaicedo.com, migrating from Gatsby v2 to Next.js (App Router) with a unified content system. All content — currently split between blog posts and garden notes — will live in a single folder as MDX files. Every page supports `[[wiki-style backlinks]]` inspired by Roam Research and Logseq, with the backlink graph compiled at build time.

The site will get a full visual redesign using Tailwind CSS v4, drawing inspiration from Maggie Appleton's digital garden (editorial serif typography, growth-stage metaphor, backlink UI) and Trippy Pineapple Club (bold gradients, card hover effects, clean layout) — but with a blue gradient palette instead of green.

## Why This Approach

### Migration from Gatsby
- Gatsby v2 is effectively abandoned; the repo already needs `--openssl-legacy-provider` hacks to build
- Next.js App Router with React Server Components is the modern standard
- Vercel deployment stays the same, with better DX

### Unified content model
- Currently two separate systems (posts at `/blog/<slug>`, garden at `/<note>`) with different pipelines
- Unifying into one `/content/` folder simplifies authoring — just write MDX, add frontmatter
- All content gets `[[backlink]]` support, not just garden notes
- Frontmatter `type` field (post, note) can still differentiate rendering if needed

### Custom remark plugin for backlinks
- The existing `gatsby-theme-brain` plugin already proves the concept works
- A custom remark plugin (~100-150 lines) gives full control without risky dependencies
- Build-time graph compilation means zero runtime cost
- Stub pages for dangling `[[links]]` show only backlinks — encourages filling gaps over time

## Key Decisions

1. **Next.js App Router** — Modern approach with Server Components, layouts, and better performance
2. **Unified content in `/content/`** — All MDX files in one place, differentiated by frontmatter
3. **All pages at `/<slug>`** — No `/blog/` or `/garden/` prefix. Custom pages (about, etc.) take precedence over content slugs
4. **Redirects from old paths** — `/blog/<slug>` and `/garden/<slug>` redirect to `/<slug>` for backward compatibility
5. **MDX + custom remark plugin** — `[[backlinks]]` resolved at build time via remark, backlink graph serialized to JSON
6. **Dangling links create stub pages** — Pages that don't exist yet still get a page showing their backlinks
7. **Tailwind CSS v4** — Full redesign with modern utility-first CSS
8. **Blue gradient palette** — Inspired by Trippy Pineapple Club's gradient style but in blues
9. **Design inspiration** — Maggie Appleton's editorial quality (serif typography, growth stages, backlink UI) combined with Trippy Pineapple's bold gradients and card interactions

## Design Direction

### From Maggie Appleton
- Editorial serif typography for headings, clean sans-serif for body
- Growth stage metaphor for content maturity (seedling / budding / evergreen)
- Backlinks section with card previews at bottom of each page
- Topic filtering and discovery UI
- Masonry/grid layout for note listings

### From Trippy Pineapple Club
- Bold gradient text for hero titles (but blue instead of green)
- Card hover effects (shadow lift, slight scale, image zoom)
- Clean max-width containers with generous spacing
- Modern Next.js 15 + Tailwind v4 setup as technical reference

### Color Direction
- Primary: Blue gradient spectrum (replacing greens/golds)
- Accent: TBD during design phase
- Warm neutrals for backgrounds
- Dark mode support

## Content Model

```
/content/
  my-article.mdx        # A polished post
  react-patterns.mdx     # A garden note
  home.mdx               # Root garden note
  ...
```

**Frontmatter:**
```yaml
---
title: "My Article"
type: post | note        # Controls rendering/listing behavior
date: "2026-03-21"       # Optional, mainly for posts
aliases: ["alt-name"]    # For backlink resolution
---
```

**Backlink syntax:**
```markdown
I learned about [[react-patterns]] while working on [[my-article]].
```

Resolves against filename (minus extension) and `aliases` frontmatter.

## URL Structure

| Route | Source |
|-------|--------|
| `/<slug>` | MDX content files |
| `/<slug>` (stub) | Dangling `[[links]]` — auto-generated, shows backlinks only |
| `/about`, `/guatemala`, etc. | Custom pages in `app/` — take precedence over content |
| `/blog/<old-slug>` | Redirect to `/<slug>` |
| `/garden/<old-slug>` | Redirect to `/<slug>` |

## Resolved Questions

1. **Homepage layout** — Custom designed page with hero section and featured/recent content. Not the garden root note.
2. **Search** — No search for now. Browsing via backlinks and listings is sufficient. Could be a future improvement (Pagefind or Flexsearch).
3. **RSS feed** — Yes, generate an RSS feed for posts at build time.
4. **Analytics** — Yes, Vercel Analytics.

## Future Improvements

- Client-side or full-text search across content
- Growth stage metaphor for content maturity (seedling/budding/evergreen)
- Topic/tag filtering UI
- Dark mode
