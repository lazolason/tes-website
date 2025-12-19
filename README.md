# Mexel Energy Sustain Website

This project is a Next.js 14 application using the App Router, TypeScript, TailwindCSS, and Sanity CMS (embedded).

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open the Sanity Studio at `/studio` to manage content.

## Folder Structure

- `app/` - Next.js App Router pages and layout.
- `components/` - Shared React components.
- `schemas/` - Sanity CMS schema definitions.
- `lib/` - Sanity client and helper functions.
- `public/` - Static assets.
- `styles/` - Additional global styles (if needed).

## Deployment

Deploy this project to platforms like Vercel or Netlify. Configure environment variables if required for the Sanity client.

## Analytics

This site uses [Plausible Analytics](https://plausible.io/) for privacy-friendly analytics tracking. Plausible is:
- **Privacy-focused**: No cookies, GDPR compliant, no personal data collection
- **Lightweight**: < 1 KB script that doesn't impact page performance
- **Simple**: Clean dashboard with actionable insights

### Setup

1. Sign up for Plausible and add your domain at [plausible.io](https://plausible.io/)
2. Create a `.env.local` file in the project root (see `.env.local.example`)
3. Set the environment variable:
   ```bash
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
   ```
4. Deploy - analytics will start tracking automatically

### Custom Events Tracked

The following custom events are automatically tracked:
- **Contact Form Submitted** - When a user successfully submits the contact form (with interest area)
- **PDF Download** - When a user downloads a PDF resource (with file name)
- **CTA Clicked** - When a user clicks a call-to-action button (with location and action)

### Viewing Analytics

Log in to your Plausible dashboard at `https://plausible.io/yourdomain.com` to view:
- Page views and unique visitors
- Traffic sources and referrers
- Custom event conversions
- User journey flows

## MCP client (Codex via Docker)

To run the Model Context Protocol CLI against the Codex server without installing additional tools locally, follow the Docker-based setup outlined in [`docs/mcp-client-codex.md`](docs/mcp-client-codex.md).
