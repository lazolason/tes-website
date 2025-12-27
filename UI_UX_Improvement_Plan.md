# UI/UX Improvement Plan for Mexel Energy Sustain

This plan outlines specific, actionable steps to modernize the TES website, bifurcated into Backend/Infrastructure tasks and Frontend/Component tasks.

## Part 1: Backend Architecture & Infrastructure
*Focus on performance, core web vitals, project structure, and Next.js optimization.*

### 1.1 Critical Asset Optimization (Gemini Banana Audit)
**Goal:** Reduce initial page load size by >70% by optimizing heavy PNG assets.
*   **Target Files:** `public/*.png` (specifically `refinery.png` [7MB], `industrial-plant.png`, etc.).
*   **Actionable Steps:**
    1.  **Convert & Resize:** Use `sharp` or an external tool to convert all large PNGs in `public/` to **WebP** format.
        *   Full-width backgrounds: Max width 1920px, Quality 80.
        *   Content images: Max width 800px-1200px, Quality 85.
    2.  **Update References:** Replace all `.png` import paths in the codebase with the new `.webp` versions.
    3.  **Implement `sizes`:** In `components/IndustryGrid.tsx` and `app/page.tsx` usage of `<Image />`, add strict `sizes` props to prevent mobile devices from downloading desktop-sized images.
        *   *Code Example:* `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`

### 1.2 Hydration & Server-Side Stability
**Goal:** Fix the hydration mismatch warning to ensure React hydration works correctly.
*   **Target File:** `app/layout.tsx`.
*   **Actionable Steps:**
    1.  **Remove Suppression:** Delete `suppressHydrationWarning={true}` from the `<html>` tag to expose the underlying error.
    2.  **Debug & Fix:** Run dev server, identify the mismatched element (often `Navbar` logic or browser extensions), and fix the root cause.
    3.  **Strict Mode:** Verify `reactStrictMode: true` is active in `next.config.mjs` (it is default) to catch side-effects.

### 1.3 Codebase Organization & Clean-up
**Goal:** Decouple data/logic from presentation components for better maintainability.
*   **Target Component:** `components/Navbar.tsx`.
*   **Actionable Steps:**
    1.  **Extract Icons:** Move the large `Icons` object from `Navbar.tsx` into a dedicated file: `components/icons/NavIcons.tsx`.
    2.  **Type Safety:** Ensure strict typing for the extracted icon components.

---

## Part 2: Frontend Components & UI/UX
*Focus on visual polish, interactivity, accessibility, and reusable design systems.*

### 2.1 Component Standardization (Design System)
**Goal:** Remove inconsistent "magic strings" of Tailwind classes and create a unified component library.
*   **New Component:** `components/ui/Button.tsx`.
*   **Actionable Steps:**
    1.  Create a reusable `Button` component using `cva` (Class Variance Authority) or simple props.
    2.  **Variants:** `primary` (Emerald), `secondary` (White/Outline), `ghost` (Text only).
    3.  **Refactor:** Replace manual button coding in `app/page.tsx` (Hero), `CTASection.tsx`, and `Navbar.tsx` with this new component.

### 2.2 Refined Loading States (UX)
**Goal:** Eliminate layout shifts (CLS) and provide a polished loading experience.
*   **Current State:** `app/page.tsx` uses generic white/slate divs for `dynamic` imports.
*   **Actionable Steps:**
    1.  **Create Skeletons:** Build dedicated skeleton components (e.g., `components/skeletons/ChartSkeleton.tsx`, `components/skeletons/GridSkeleton.tsx`) that mirror the actual layout of the heavy components (`AnimatedStats`, `IndustryGrid`).
    2.  **Integrate:** Replace the inline `loading` props in `app/page.tsx` with these new skeleton components.

### 2.3 Accessibility (A11y) Implementation
**Goal:** Ensure the site is navigable by keyboard and screen readers (WCAG 2.1 AA).
*   **Target Files:** `app/layout.tsx`, `app/globals.css`.
*   **Actionable Steps:**
    1.  **Skip Link:** Add a hidden "Skip to main content" link at the top of `app/layout.tsx` that typically becomes visible on focus.
    2.  **Universal Focus Ring:** In `app/globals.css`, define a consistent focus ring utility class:
        ```css
        @layer utilities {
          .focus-ring {
            @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2;
          }
        }
        ```
    3.  **Apply:** Ensure all buttons, links, and form inputs use this class.

### 2.4 Micro-Interactions & "Aliveness"
**Goal:** Make the site feel responsive and premium.
*   **Target Components:** `IndustryGrid.tsx`, `Navbar.tsx`.
*   **Actionable Steps:**
    1.  **Card Hover:** Add subtle `scale-105` and `shadow-lg` transitions to generic cards (already present in some, standarize across all).
    2.  **Nav Feedback:** Ensure dropdowns fail gracefully and have smooth enter/leave transitions (consider using `headlessui` built-ins if standard CSS is too brittle).
