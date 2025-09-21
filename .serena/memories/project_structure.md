# Project Structure

## Root Directory Structure
```
ai-platform/
├── src/                    # Source code
├── public/                 # Static assets
├── supabase/              # Database schema and migrations
├── scripts/               # Utility scripts
├── migrations/            # Database migrations
├── docs/                  # Documentation
├── config/                # Configuration files
├── .taskmaster/           # Task Master AI integration
├── .claude/               # Claude Code configuration
├── .serena/               # Serena MCP memories
└── node_modules/          # Dependencies
```

## Source Code Structure
```
src/
├── app/                   # Next.js App Router pages
│   ├── admin/            # Admin interface (protected)
│   ├── tricks/           # Tricks listing and detail pages
│   ├── trick/            # Individual trick pages
│   ├── api/              # API routes
│   ├── learn/            # Learning resources
│   ├── dashboard/        # User dashboard
│   ├── kontakt/          # Contact page
│   ├── impressum/        # Legal notice
│   ├── datenschutz/      # Privacy policy
│   └── about/            # About page
├── components/           # React components
│   ├── atoms/           # Basic UI components
│   ├── molecules/       # Composite components
│   ├── organisms/       # Complex components
│   ├── enhanced/        # Enhanced UI with effects
│   ├── layout/          # Layout components
│   ├── backgrounds/     # Background components
│   ├── SEO/            # SEO components
│   ├── monetization/    # Monetization components
│   └── ui/              # UI library components
├── lib/                  # Core functionality
│   ├── actions/         # Server actions
│   ├── supabase/        # Database client
│   ├── types/           # TypeScript types
│   ├── constants/       # Constants
│   ├── services/        # Business logic
│   └── utils/           # Utility functions
├── hooks/               # Custom React hooks
├── styles/              # Global styles
└── emails/              # Email templates
```

## Key Files
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables (not committed)
- `.eslintrc.json` - ESLint configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration
- `middleware.ts` - Next.js middleware (auth)
- `CLAUDE.md` - Project instructions for Claude Code

## Database Structure
- `supabase/schema.sql` - Database schema
- `supabase/migrations/` - Migration files
- Main tables:
  - `ki_tricks` - Published tricks
  - `trick_submissions` - User submissions
  - `trick_analytics` - Analytics data

## Import Paths
- Use `@/` alias for imports from src/
- Example: `import { Button } from '@/components/atoms'`
- Centralized exports through index.ts files