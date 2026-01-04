# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Martin Gardening Services - a landscaping business landing page for Rancho Bernardo and Poway, CA. Deployed on Vercel at https://martin-landscapes.vercel.app.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Build for production (outputs to dist/public)
npm run preview    # Preview production build locally
npm run check      # TypeScript type checking
```

## Architecture

### Frontend (client/)
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: wouter (lightweight React router)
- **State**: TanStack Query for server state
- **Entry**: `client/src/main.tsx` → `App.tsx` → `pages/Home.tsx`

### API (api/)
- **Platform**: Vercel Serverless Functions
- **Endpoint**: `POST /api/contact` - Contact form submission with Zod validation
- Each file in `api/` becomes a serverless function endpoint

### Path Aliases (configured in vite.config.ts)
- `@/` → `client/src/`
- `@shared/` → `shared/`
- `@assets/` → `attached_assets/`

### UI Components
- `client/src/components/ui/` - shadcn/ui primitives (buttons, forms, dialogs, etc.)
- `client/src/components/` - Page sections (Hero, Services, ContactForm, Footer, etc.)

### Shared Code (shared/)
- `schema.ts` - Drizzle ORM table definitions and Zod validation schemas
- Types are exported for use in both client and API

## Deployment

Vercel auto-deploys from the `main` branch. Configuration in `vercel.json`:
- Build command: `npm run build:client`
- Output directory: `dist/public`
- API routes are handled by `/api/*` serverless functions
- Client-side routing fallback to `index.html`
