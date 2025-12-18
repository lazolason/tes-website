# Project Context: Mexel Energy Sustain Website

## Overview
This is a **Next.js 14** web application built with **TypeScript** and **Tailwind CSS**. It serves as a marketing website for "Mexel Energy Sustain" (TES), focusing on cooling-water efficiency solutions.

## Architecture & Technology Stack
*   **Framework:** Next.js 14 (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **CMS Status:** **Inactive**.
    *   The project structure includes directories for Sanity CMS (`schemas/`, `lib/sanity.queries.ts`), and the `README.md` references it.
    *   However, `lib/sanity.queries.ts` is explicitly stubbed out, the `app/studio` directory is empty, and `package.json` lacks Sanity dependencies.
    *   All content currently rendered on the site is **static** (hardcoded in `.tsx` files).

## Key Directories
*   `app/`: Contains the App Router pages and layouts.
    *   `app/page.tsx`: The main homepage, containing static marketing content.
    *   `app/layout.tsx`: Root layout with Navbar, Footer, and metadata.
    *   `app/api/`: API routes (e.g., `contact/route.ts`).
*   `components/`: Reusable React components (e.g., `Navbar.tsx`, `Footer.tsx`, `AnimatedStats.tsx`).
*   `public/`: Static assets (images, PDFs, icons).
*   `schemas/`: Sanity CMS schema definitions (currently unused/reference only).

## Development Workflow

### Prerequisites
*   Node.js (LTS version recommended)
*   npm

### Commands
*   **Install Dependencies:** `npm install`
*   **Run Development Server:** `npm run dev` (Runs on `localhost:3000`)
*   **Build for Production:** `npm run build`
*   **Start Production Server:** `npm start`
*   **Linting:** `npm run lint`

## Conventions
*   **Routing:** File-system based routing via the `app/` directory.
*   **Styling:** Utility-first CSS using Tailwind. Avoid custom CSS files where possible; use `app/globals.css` for global overrides.
*   **Components:** Functional components using TypeScript interfaces for props.

## Active Sprint: UI/UX Modernization
*   [x] **Hero Section:** Implement interactive "Before/After" slider to replace static image.
*   [x] **Process Section:** Convert static 4-step process image into responsive, scroll-triggered React component.
*   [x] **Navigation:** Implement Mega Menu for better discovery of industries and resources.
*   [x] **Visuals:** Add dynamic background/mesh gradient to Hero section.
