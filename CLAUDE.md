# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mexel Energy Sustain Website - A Next.js 14 marketing website for TES (Thermal Efficiency Solution) cooling-water efficiency products. Built with TypeScript and Tailwind CSS.

**Important Context**: While the project structure includes Sanity CMS directories (`schemas/`, `lib/sanity.queries.ts`) and the README references it, **Sanity CMS is completely inactive**. All content is static and hardcoded in `.tsx` files. The `lib/sanity.queries.ts` is explicitly stubbed out, and no Sanity dependencies exist in `package.json`.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### Routing & Pages
- **App Router**: File-system based routing using Next.js 14 App Router in `app/` directory
- **Main Pages**:
  - `/` - Homepage with hero, stats, process steps, testimonials ([app/page.tsx](app/page.tsx))
  - `/tes` - TES System details
  - `/products` - Product listings
  - `/industries/*` - Industry-specific pages (power-energy, mining, refineries, food-beverage, agriculture, data-centres, ports)
  - `/knowledge-hub/*` - Resources, case studies, advanced engineering content
  - `/contact` - Contact form with custom layout
  - `/about` - About page

### Layout Structure
- **Root Layout** ([app/layout.tsx](app/layout.tsx)):
  - Global wrapper with comprehensive SEO metadata
  - Includes Navbar, Footer, FloatingCTA components
  - Uses `suppressHydrationWarning` on `<html>` tag
- **Contact Layout** ([app/contact/layout.tsx](app/contact/layout.tsx)): Custom layout override for contact page

### Components Architecture
All components in `components/` are functional React components using TypeScript. Client-side interactivity requires `"use client"` directive.

**Key Components**:
- **Navbar** ([components/Navbar.tsx](components/Navbar.tsx)): Mega Menu navigation with dropdown panels for Industries and Knowledge Hub. Includes mobile hamburger menu and sticky behavior with scroll effects.
- **Footer** ([components/Footer.tsx](components/Footer.tsx)): Multi-column footer with links and contact info
- **FloatingCTA** ([components/FloatingCTA.tsx](components/FloatingCTA.tsx)): Sticky CTA button that appears on scroll
- **BeforeAfterSlider** ([components/BeforeAfterSlider.tsx](components/BeforeAfterSlider.tsx)): Interactive before/after comparison slider
- **ProcessSteps** ([components/ProcessSteps.tsx](components/ProcessSteps.tsx)): Animated 4-step process visualization with scroll triggers
- **AnimatedStats** ([components/AnimatedStats.tsx](components/AnimatedStats.tsx)): Counter animations for statistics
- **FadeIn** ([components/FadeIn.tsx](components/FadeIn.tsx)): Reusable scroll-triggered fade-in animation wrapper

### API Routes
- **Contact Form** ([app/api/contact/route.ts](app/api/contact/route.ts)): POST endpoint for handling contact form submissions

### Styling Conventions
- **Tailwind CSS**: Utility-first approach throughout the codebase
- **Global Styles**: [app/globals.css](app/globals.css) contains base styles and custom CSS variables
- **Color Palette**:
  - Primary brand colors defined in `globals.css` with CSS custom properties
  - Slate grays for text and backgrounds
  - Emerald/green accents for CTAs and highlights
- **Responsive Design**: Mobile-first approach with `md:`, `lg:`, `xl:` breakpoints
- Avoid creating custom CSS files; extend Tailwind config ([tailwind.config.ts](tailwind.config.ts)) or use `globals.css` for global overrides

### TypeScript Configuration
- **Strict Mode**: Currently disabled (`"strict": false` in [tsconfig.json](tsconfig.json))
- **Component Props**: Define TypeScript interfaces for component props
- **Target**: ES5 for broad browser compatibility

## Content Strategy

All content is static and embedded directly in TSX files. When updating content:
- Edit the relevant page file in `app/` directory
- Update components in `components/` directory
- Modify static metadata in [app/layout.tsx](app/layout.tsx) for SEO changes

The `schemas/` directory contains Sanity CMS schema definitions but these are **reference only** and not actively used.

## Navigation Structure

The Navbar implements a **Mega Menu** pattern with two main dropdown sections:
1. **Industries**: Power & Energy, Mining, Refineries, Food & Beverage, Agriculture, Data Centres, Ports
2. **Knowledge Hub**: Resources, Case Studies, Advanced Engineering

Menu items are defined in `navItems` array in [components/Navbar.tsx](components/Navbar.tsx). Update this array when adding/removing pages.

## SEO & Metadata

- Base metadata configured in [app/layout.tsx](app/layout.tsx)
- Includes OpenGraph, Twitter cards, and robots directives
- `NEXT_PUBLIC_SITE_URL` environment variable controls canonical URLs (defaults to `https://mexelenergysustain.com`)
- Individual pages can override metadata using Next.js `Metadata` export
- [app/sitemap.ts](app/sitemap.ts) generates XML sitemap
- [app/robots.ts](app/robots.ts) generates robots.txt

## Static Assets

- **Images**: Stored in `public/` directory
- **Reference**: Use Next.js `<Image>` component with relative paths (e.g., `/logo.png`)
- **Icons**: Inline SVG icons defined directly in components (see Navbar Icons)

## Related Documentation

- [GEMINI.md](GEMINI.md) - Project context guide for Gemini (contains detailed sprint history and architecture notes)
- [docs/mcp-client-codex.md](docs/mcp-client-codex.md) - Docker-based MCP CLI setup instructions
