# Workspace Duplicate and Conflict Analysis

Generated: 2026-03-13
Project: `tes-website`
Scope: duplicate files, repeated code, naming and logic conflicts, validation status, and Afrihost-compatible contact handling

## Tools Used

- `rg --files`, `rg -n`
- `shasum` and a SHA-256 Python hash scan
- `jscpd` (`npx --yes jscpd ...`)
- `git status --short --branch`, `git ls-files --stage`
- `npm install --no-package-lock`
- `npx tsc --noEmit`
- `npm run build`

## Backups Created Before Any Removal

Backups were created under `.agent/backups/2026-03-13-workspace-analysis/`.

- `.agent/backups/2026-03-13-workspace-analysis/app/contact/page.tsx`
- `.agent/backups/2026-03-13-workspace-analysis/app/api/contact/route.ts`
- `.agent/backups/2026-03-13-workspace-analysis/root/.eslintrc.json`
- `.agent/backups/2026-03-13-workspace-analysis/root/.env.example`
- `.agent/backups/2026-03-13-workspace-analysis/public/images/home-outcomes-cooling-water.png`

## Findings

### 1. Contact flow is broken in the exported Afrihost build

Severity: High

Evidence:

- `next.config.mjs` sets `output: 'export'`
- `app/contact/page.tsx` posts to `/api/contact`
- `app/api/contact/route.ts` exists only as a Next.js route handler
- The exported output does not contain `out/api/contact`

Impact:

- The contact form can render in production, but the exported site has no `/api/contact` endpoint to receive submissions.
- This is a functional conflict between the deployment model and the implementation.

Proposed change:

- Replace the frontend submission target with an Afrihost-compatible handler served from `public/contact.php`
- Keep `app/api/contact/route.ts` as the local-development fallback
- Keep mail delivery local to the hosting stack so the destination mailbox can use normal Afrihost forwarding

### 2. Linting is broken because ESLint walks into the parent workspace config

Severity: Medium

Evidence:

- `npm run lint` failed with `Failed to load config "next/core-web-vitals" to extend from`
- The error references `/Users/lazolasonqishe/tes-website-2/.eslintrc.json`

Impact:

- Local linting and the build lint step are reporting a config failure unrelated to actual source violations.

Proposed change:

- Mark the project `.eslintrc.json` as the root ESLint config to stop parent-config traversal

### 3. One exact duplicate binary asset existed

Severity: Low

Evidence:

- `public/images/home-outcomes-cooling-water.png`
- `public/images/hero/after-stabilised-tubes.png`
- Both files have the same Git object hash and identical file hash

Impact:

- Redundant storage and asset-management ambiguity

Proposed change:

- Delete `public/images/home-outcomes-cooling-water.png` because it is not referenced by runtime code
- Keep the backup already created

### 4. Shared UI skeletons are duplicated across two modules

Severity: Low

Evidence:

- `components/skeletons/HomeSkeletons.tsx`
- `components/ui/Skeleton.tsx`
- Duplicate exports include `IndustryGridSkeleton`, `TestimonialsSkeleton`, and `CTASkeleton`

Impact:

- Divergence risk when one skeleton variant changes and the other does not

Proposed change:

- Document only in this pass
- Consolidate later when there is time to update all import sites together

### 5. Repeated page structures exist but are not necessarily unsafe duplicates

Severity: Low

Evidence:

- `jscpd` found 58 clones, mostly in:
  - industry landing pages
  - knowledge-hub resource cards
  - navbar menu blocks
  - repeated list and card markup

Impact:

- Maintainability cost, but these are mostly intentional composition patterns rather than conflicting definitions

Proposed change:

- No automated deduplication in this pass
- Preserve functionality and avoid broad refactors

### 6. Version-control noise is present

Severity: Low

Evidence:

- `tsconfig.tsbuildinfo` is tracked
- `.lighthouseci/` report artifacts are tracked

Impact:

- Review noise and larger diffs

Proposed change:

- Leave unchanged in this pass because they may be intentional CI artifacts

### 7. Documentation and environment hints drift from the deployed architecture

Severity: Low

Evidence:

- `.env.example` still describes a Gmail app-password flow
- `README.md` still describes a Sanity CMS setup that does not exist in this workspace

Impact:

- Confusing setup instructions and architectural drift

Proposed change:

- Update `.env.example` in this pass
- Leave `README.md` for a separate documentation cleanup

## Validation Baseline Before Changes

- `npm install --no-package-lock`: success
- `npx tsc --noEmit`: success
- `npm run lint`: failed due ESLint config root issue
- `npm run build`: export succeeded, but the build reported the same ESLint config failure

## External Hosting Notes

Afrihost's official help pages confirm the two assumptions used for the production contact-flow change:

- Afrihost hosting supports cPanel mail forwarders.
- Afrihost hosting supports PHP version management on hosted sites.

That makes a PHP mail handler plus a forwarded destination mailbox a reasonable replacement for a third-party form relay.

## Completed Change Set

1. Added `root: true` to `.eslintrc.json` so linting stays inside this workspace.
2. Added `public/contact.php` as an Afrihost-compatible mail handler for the exported site.
3. Updated `app/contact/page.tsx` to submit to `/contact.php` in production and `/api/contact` in local development.
4. Updated `app/api/contact/route.ts` so local development accepts both JSON and form-data payloads.
5. Updated `.env.example` to describe the actual deployment model.
6. Removed the unused duplicate asset `public/images/home-outcomes-cooling-water.png` after backup.

## Post-Change Validation

- `npm run lint`: passed
- `npx tsc --noEmit`: passed
- `npm run build`: passed
- Export validation:
  - `out/contact.php` exists
  - the production contact bundle now references `/contact.php`
  - `out/api/contact` still does not exist, which is expected for a static export
  - `out/images/home-outcomes-cooling-water.png` is no longer exported

## Not Changed In This Pass

- skeleton duplication across `components/skeletons/HomeSkeletons.tsx` and `components/ui/Skeleton.tsx` remains documented only
- tracked generated artifacts such as `.lighthouseci/` and `tsconfig.tsbuildinfo` remain in the repository

## Residual Risk

- The PHP handler could not be interpreter-validated locally because the workspace does not have a `php` binary installed.
- The handler is structurally simple and the Next.js side is fully validated, but final delivery still depends on Afrihost PHP/mail configuration in production.
