# Tier 1 + Tier 2 Polish — Action Log

**Date:** 2026-06-18
**Branch:** `chore/tier1-tier2-polish-2026-06-18` (off `main`)
**Scope:** Broken-favicon fix, image-weight reduction, hero animation declutter, brand-color tightening, dead case-study links.
**Backup:** `.agent/backups/2026-06-18-tier1-tier2/` (all modified + deleted files)

---

## Pre-flight guardrails

1. Confirmed `git status` clean on `main` before starting.
2. Branched to `chore/tier1-tier2-polish-2026-06-18` so nothing folds into main work.
3. **Re-verified every deletion against the live repo** (not prior greps):
   - `/profile` route — zero references in any code file.
   - 3 PNGs — zero references in `.ts/.tsx/.js/.mjs/.css`; only mentioned in `.md` docs.
   - Confirmed `BeforeAfterSlider.tsx` takes image paths as props and is **not imported anywhere**, so it consumes no specific image files.

---

## Tier 1 — Fixes

### 1. Favicons (were missing, referenced by `app/layout.tsx:85-87`)
- **Source:** `public/logonew.png` (600×600 square).
- **Generated** via new `scripts/generate-favicons.mjs` (uses existing `sharp`, no new deps):
  - `public/favicon.ico` — multi-size 16/32/48 PNG-in-ICO (5,730 bytes).
  - `public/apple-touch-icon.png` — 180×180 on opaque white (48,724 bytes).
- Verified ICO header bytes (`00 00 01 00 03 00`) and `file` output ("3 icons").
- No `layout.tsx` change needed — it already referenced both.

### 2. Image weight (~6.9 MB removed; public/ 16M → 9.6M)
**Swapped 3 references to existing WebP twins:**
| File:line | Before | After |
|---|---|---|
| `app/applications/page.tsx:73` | `/power-station-clean.png` | `.webp` |
| `components/VisualDosingUnit.tsx:52` | `/cooling-loop-schematic.png` | `.webp` |
| `components/VisualDosingUnit.tsx:67` | `/biofilm-texture.png` | `.webp` |

**Deleted 3 orphaned PNGs** (zero code refs, WebP twins remain):
- `public/images/hero/after-stabilised-tubes.png` (2.8 MB)
- `public/images/hero/before-fouled-tubes.png` (1.6 MB)
- `public/images/home-verification-instrumentation.png` (2.5 MB)

### 3. Cleanup
- Added `deploy/` to `.gitignore` (prevents accidental commit of the 17 MB deploy zip).
- Added `tsconfig.tsbuildinfo` to `.gitignore` (prevents typecheck cache noise).
- Deleted orphan route `app/profile/` (redundant redirect hop to `/company-profile`).

---

## Tier 2 — Two fixes

### 4. Hero animation declutter (`components/PremiumHero.tsx`)
**Before:** 5 staggered `animate-fade-in` (delays 0/100/200/300/400ms) + right-panel `animate-slide-in-right` + status-dot `animate-pulse`.
**After:** Single `animate-fade-in` on the left-column wrapper; right panel static; status dot static.
Rationale: industrial/controlled, not SaaS-landing-page. `prefers-reduced-motion` already neutralizes all motion.

### 5. Brand color tightening (`components/PremiumHero.tsx`)
Migrated **decorative accents only** from generic `emerald-*` to the brand palette (`brand-400/500/700`):
- Eyebrow status dot, headline accent word "Reviewed.", trust-signal icons, evidence-panel dot, `%`/`Specific` metric text, footer check icon.
- Outline CTA border/text → `brand-500/400`.
- **Primary CTA intentionally kept as `emerald-600`** — white-on-brand-lime (#6CFF47) fails WCAG AA (~1.6:1). emerald-600 + white passes AA.
- `Button.tsx` untouched (out of scope; would affect every button site-wide).

### 6. Case-study links (`components/VisualIndustryGrid.tsx`)
**Before:** "View Case Study" was a `<div>` with `cursor-pointer` — not a link, clickable-looking but dead.
**After:** Real `<Link>` with per-card `href` + honest labels:
| Card | Label | Target |
|---|---|---|
| Power Generation | "View Case Study" | `/knowledge-hub/case-studies/kriel` (only real case study) |
| Mining & Smelters | "Explore Mining" | `/industries/mining` |
| Critical HVAC | "Explore HVAC" | `/industries/hvac-data-centers` |
Link color migrated to `brand-700` to match site accents.

---

## Validation results

| Check | Result |
|---|---|
| `npx tsc --noEmit` | ✅ PASS (exit 0) — required clearing stale `.next/` cache first |
| `npm run lint` | ✅ PASS — no ESLint warnings or errors |
| `npm run build` | ✅ PASS — 31 generated static pages, export succeeded |
| Favicons in `out/` | ✅ Present (`favicon.ico`, `apple-touch-icon.png`) |
| Deleted PNGs in `out/` | ✅ Absent |
| WebP twins in `out/` | ✅ Present |
| Broken refs to deleted assets in built HTML | ✅ None |
| `/profile` refs in built output | ✅ None |

---

## Change set

**Modified (5):** `.gitignore`, `app/applications/page.tsx`, `components/PremiumHero.tsx`, `components/VisualDosingUnit.tsx`, `components/VisualIndustryGrid.tsx`
**Deleted (4):** `app/profile/page.tsx`, `public/images/hero/after-stabilised-tubes.png`, `public/images/hero/before-fouled-tubes.png`, `public/images/home-verification-instrumentation.png`
**Added (3):** `public/favicon.ico`, `public/apple-touch-icon.png`, `scripts/generate-favicons.mjs`

## Not done (deferred — out of scope per agreed plan)
- `Button.tsx` / Navbar CTA color migration (site-wide change, separate scope).
- Lighthouse CI config (no `lighthouserc` exists despite `ci/lighthouse-ci.yml`).
- Remaining PNG→WebP conversions for assets still actively referenced as PNG.
