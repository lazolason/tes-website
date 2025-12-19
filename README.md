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

## MCP client (Codex via Docker)

To run the Model Context Protocol CLI against the Codex server without installing additional tools locally, follow the Docker-based setup outlined in [`docs/mcp-client-codex.md`](docs/mcp-client-codex.md).
