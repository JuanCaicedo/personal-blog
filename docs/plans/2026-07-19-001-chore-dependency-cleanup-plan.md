---
title: Dependency PR Cleanup and Consolidated Update
type: chore
status: completed
date: 2026-07-19
---

# Dependency PR Cleanup and Consolidated Update

## Overview

The repo has 30 open Dependabot PRs (#38–#80), all opened between 2020 and March 2023, targeting Gatsby-era dependencies (gatsby, gatsby-plugin-mdx, express, moment, socket.io, ajv, etc.). The site was fully migrated from Gatsby to Next.js in PR #86 (`7126a92 Migrate from Gatsby to Next.js`), and there is no `.github/dependabot.yml` in the repo today, so no new dependency PRs have been generated since. None of these 30 PRs are mergeable or relevant anymore — the packages they touch either don't exist in `package.json`/`package-lock.json` at all, or (in the one case of `styled-jsx`) their diff is against the old npm lockfile v1 format, incompatible with the current lockfile v3 structure.

This plan closes all 30 stale PRs and replaces them with a single PR that brings currently-used dependencies up to date. PR #81 (`chore: expand .gitignore for local artifacts`) was a separate, unrelated chore PR from a bot account; it is already closed and requires no action here — noted only so it isn't mistaken for part of this cleanup.

## Problem Frame

Open PR clutter obscures real work and each stale PR still consumes CI/notification overhead. The user wants the noise cleared and a single, current, low-risk dependency bump landed instead of trying to resurrect any of the old bumps.

## Requirements Trace

- R1. Every one of the 30 Dependabot PRs (#38–#80) is confirmed obsolete before closing (not just assumed).
- R2. All 30 are closed with a brief explanatory comment.
- R3. A single new PR lands that updates real, currently-used dependencies to their latest safe versions.
- R4. Major-version upgrades (Tailwind v3→v4, Prettier v2→v3) are explicitly excluded from this PR — confirmed with user, too risky to bundle silently.
- R5. PR #81 is not touched by this cleanup (already closed independently; no action needed).

## Scope Boundaries

- No Tailwind v4 or Prettier v3 migration work (config rewrite, formatting-output review) — future work if desired.
- No action on PR #81 — already closed, unrelated to dependency management.
- No new `.github/dependabot.yml` — re-enabling automated dependency PRs is a separate decision, not part of this cleanup.
- Does not address the pre-existing transitive `js-yaml <3.15.0` advisory (comes from `gray-matter@4.0.3`, no newer `gray-matter` release fixes it), nor the nested `postcss` advisory inside `next`'s own bundled copy — confirmed this bump does not clear it (see Context & Research) — both are noted but not blocking, see Risks.

## Context & Research

### Verified current state (as of 2026-07-19)

- `package.json` dependencies are entirely Next.js/React based (`next ^16.2.0`, `react ^19.2.0`, `react-dom ^19.2.0`, `next-mdx-remote-client ^2.1.10`, `@mdx-js/mdx ^3.1.1`, `gray-matter ^4.0.3`, `prismjs ^1.30.0`, `prism-react-renderer ^2.4.1`, `styled-jsx ^5.1.7`, `prop-types ^15.7.2`) plus devDependencies (`@next/swc-wasm-nodejs`, `autoprefixer`, `postcss`, `prettier 2.0.5`, `tailwindcss ^3.4.17`).
- `grep -ril gatsby` across the repo (excluding `node_modules`) returns nothing — zero remaining references.
- `npm outdated` output:

  | Package | Current | Wanted | Latest |
  |---|---|---|---|
  | @next/swc-wasm-nodejs | 16.2.6 | 16.2.10 | 16.2.10 |
  | autoprefixer | 10.5.0 | 10.5.4 | 10.5.4 |
  | next | 16.2.6 | 16.2.10 | 16.2.10 |
  | next-mdx-remote-client | 2.1.10 | 2.1.11 | 2.1.11 |
  | postcss | 8.5.14 | 8.5.20 | 8.5.20 |
  | prettier | 2.0.5 | 2.0.5 | 3.9.5 |
  | react | 19.2.6 | 19.2.7 | 19.2.7 |
  | react-dom | 19.2.6 | 19.2.7 | 19.2.7 |
  | tailwindcss | 3.4.19 | 3.4.19 | 4.3.3 |

- **Key decision-relevant fact:** every "Wanted" version above (except prettier/tailwindcss, which don't move under `npm update`) already falls inside the caret range already declared in `package.json`. E.g. `"next": "^16.2.0"` permits `16.2.10`; `"react": "^19.2.0"` permits `19.2.7`. This means the consolidated update needs **no `package.json` edits** — only `npm update` (or equivalent) regenerating `package-lock.json`, which npm will do for packages whose current range already allows the newer version.
- `npm audit` reports 3 moderate advisories: `js-yaml <3.15.0` (transitive via `gray-matter@4.0.3`, no newer `gray-matter` release available to fix it) and `postcss` inside `next`'s own internally-bundled copy (`node_modules/next/node_modules/postcss@8.4.31`, separate from the top-level postcss). Neither is fixed by `npm audit fix` without `--force` (which would downgrade `next` to `9.3.3` — not applicable/wanted). **Confirmed:** `npm view next@16.2.10 dependencies.postcss` returns `8.4.31` — identical to the version bundled by the current `next@16.2.6`. Bumping `next` to `16.2.10` does **not** clear the nested postcss advisory; it will still show 3 moderate advisories after this update.

### Evidence that the 30 PRs are obsolete

- `gh pr diff 71` (bumping `loader-utils`/`styled-jsx`) shows a diff against `package-lock.json` in the old nested lockfile v1 format (`"requires": {...}"` blocks) — structurally incompatible with the current lockfile v3 file. None of these PRs can be cleanly merged or rebased.
- Package names across all 30 PRs (gatsby, gatsby-plugin-mdx, gatsby-transformer-remark, gatsby-plugin-sharp, express, moment, socket.io, socket.io-parser, engine.io, terser, devcert, url-parse, ajv, color-string, object-path, tar, path-parse, dns-packet, browserslist, hosted-git-info, lodash, ssri, y18n, elliptic, ini, json5, flat, minimist, http-cache-semantics, qs, decode-uri-component, loader-utils) — none appear in current `package.json`. `prismjs` is the only name that overlaps with a current dependency, and PR #63's target (1.27.0) is already below the current installed version (1.30.0).
- No `.github/dependabot.yml` exists in the repo, confirming Dependabot is not actively generating new PRs — these are 100% legacy leftovers from the Gatsby era.

## Key Technical Decisions

- **Close, don't attempt to rebase, any of the 30 PRs.** Rationale: their base lockfile format predates the Gatsby→Next.js migration; rebasing is not meaningfully different from a fresh update, and the target packages no longer exist in the tree.
- **Bundle only patch/minor updates into the single new PR; exclude Tailwind v4 and Prettier v3.** Rationale (user-confirmed): both are major, breaking upgrades — Tailwind v4 changes the config format entirely (CSS-first config) and Prettier v3 changes formatting output across the codebase. Bundling either would turn a "safe cleanup" PR into a migration project and obscure the real dependency bump in a large reformatting diff.
- **No `package.json` version-range edits needed.** Rationale: verified every in-scope package's newer version already satisfies its existing caret range; only the lockfile changes.
- **No action on PR #81.** Rationale: unrelated to dependency management (gitignore + package.json edit from a different bot); it's already closed independently of this plan.

## Open Questions

### Resolved During Planning

- Should the consolidated PR include Tailwind v4 / Prettier v3? → No, patch/minor only (user-confirmed).
- Should PR #81 be closed as part of this cleanup? → Not applicable — it's already closed; confirmed out of scope regardless (user-confirmed).
- Does bumping `next` to `16.2.10` clear the nested `postcss` advisory? → No — confirmed via `npm view next@16.2.10 dependencies.postcss` (returns `8.4.31`, same as current); the advisory persists after this PR.

### Deferred to Implementation

None — all planning-time questions were resolved above.

## Implementation Units

- [x] **Unit 1: Close the 30 obsolete Dependabot PRs**

**Goal:** Clear out PRs #38–#80 (all Dependabot dependency bumps) with a brief explanatory comment so the closure reason is visible in PR history, without touching #81 (already closed, unrelated).

**Requirements:** R1, R2, R5

**Dependencies:** None

**Files:** None (PR/issue-tracker operation only, no repo file changes)

**Approach:**
- For each of these 30 PR numbers — 38, 41, 42, 43, 45, 46, 47, 48, 52, 53, 56, 58, 61, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80 — post a short comment (e.g. "Closing — superseded by the Gatsby→Next.js migration (#86); this dependency no longer exists in the project.") and close the PR. This list is exhaustive; do not close any PR outside it, and #81 is not in this list.
- Do not delete the associated `dependabot/npm_and_yarn/*` branches as part of this unit — Dependabot/GitHub typically auto-deletes or they can be cleaned up separately; not required for the PR closure itself.

**Test expectation:** none -- administrative PR-closing action, no code behavior involved.

**Verification:**
- `gh pr list --state open` no longer shows PRs #38–#80.
- Each closed PR has a closing comment explaining why.

- [x] **Unit 2: Update package-lock.json to latest versions within existing ranges**

**Goal:** Bring `next`, `@next/swc-wasm-nodejs`, `autoprefixer`, `next-mdx-remote-client`, `postcss`, `react`, and `react-dom` up to their latest patch/minor versions, all already permitted by current `package.json` caret ranges.

**Requirements:** R4 (prerequisite work toward R3, which Unit 3 completes by landing the PR)

**Dependencies:** None (independent of Unit 1)

**Files:**
- Modify: `package-lock.json` (regenerated by npm; no expected `package.json` diff since ranges already permit the target versions)

**Approach:**
- Run the package manager's update command scoped to these 7 packages so `tailwindcss` and `prettier` are left untouched (they won't move anyway since `npm update` respects existing ranges, but scoping avoids ambiguity from any tool auto-suggesting a range bump).
- Confirm `package.json` has no unexpected diff — if npm proposes widening any range, revert that hunk and keep only the lockfile change.

**Patterns to follow:**
- None needed — this is a standard lockfile refresh, not new code.

**Test expectation:** none -- dependency version bump with no application code change; covered by the build/lint verification below instead of unit tests.

**Verification:**
- `npm outdated` no longer lists `next`, `@next/swc-wasm-nodejs`, `autoprefixer`, `next-mdx-remote-client`, `postcss`, `react`, or `react-dom` (still lists `prettier` and `tailwindcss`, unchanged, as expected).
- `npm run build` completes successfully.
- `npm audit` shows the same or fewer advisories than before (3 moderate, all pre-existing and unrelated to this bump) — no new advisories introduced.
- `git diff package.json` is empty or contains no unintended range widening.

- [x] **Unit 3: Open the consolidated dependency-update PR**

**Goal:** Land Unit 2's lockfile changes as a single, clearly-described PR.

**Requirements:** R3

**Dependencies:** Unit 2

**Files:** None beyond what Unit 2 already changed.

**Approach:**
- Branch from `main`, commit the `package-lock.json` update.
- PR description should list the 7 packages and old→new versions (from the table in Context & Research), note that Tailwind v4 and Prettier v3 were deliberately excluded as follow-up work, and reference that this replaces the 30 closed Dependabot PRs.

**Test expectation:** none -- process/PR-creation step, no additional code change beyond Unit 2.

**Verification:**
- PR is open, the `linter.yml` CI workflow (`.github/workflows/linter.yml`) passes, description accurately reflects the version table above.

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Closing PRs without comment looks like silent dismissal to anyone auditing PR history later | Unit 1 requires a brief comment on each closed PR explaining the Gatsby→Next.js migration made them obsolete |
| `next` patch bump (16.2.6→16.2.10) could carry subtle behavior changes despite being a patch version | `npm run build` verification in Unit 2 catches build-breaking issues; this is a personal blog with low traffic risk, so a quick manual smoke check of the built site is reasonable but not mandated by this plan |
| Pre-existing `js-yaml`/nested-`postcss` moderate advisories remain after this PR (confirmed: `next@16.2.10` still bundles `postcss@8.4.31`) | Explicitly out of scope (see Scope Boundaries); flagged here so it isn't mistaken for something this PR was supposed to fix |
| Excluding Tailwind v4/Prettier v3 means those upgrades still need to happen eventually | Deliberate scope decision (user-confirmed); worth a future plan once there's bandwidth for the config migration |

## Sources & References

- Migration commit: `7126a92 Migrate from Gatsby to Next.js` (merged via PR #86)
- Open PRs audited: `gh pr list --state open` (#38–#80, 30 total, captured 2026-07-19; #81 confirmed already closed)
- Example proof of obsolescence: `gh pr diff 71` (lockfile v1 format, incompatible with current lockfile v3)
- Current dependency state: `package.json`, `package-lock.json`, `npm outdated`, `npm audit` (all run 2026-07-19)
