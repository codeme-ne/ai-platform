# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KI Tricks Platform is a Next.js web application designed to help users discover and implement practical AI tips and tricks in their daily workflow. The platform features a categorized collection of KI tricks with difficulty levels, time estimates, and impact ratings. The UI is in German and follows a minimalistic design inspired by thegrowthlist.co.

## Common Development Commands

```bash
# Start development server (default port 3000, falls back to 3001 if occupied)
npm run dev

# Build for production (includes TypeScript type checking)
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Important Build Information

The application requires specific patterns for Next.js 15 compatibility:

1. **Suspense Boundary for useSearchParams**: The `/tricks` page is split into:
   - `app/tricks/page.tsx` - Server component with Suspense wrapper
   - `app/tricks/TricksClient.tsx` - Client component using useSearchParams

2. **Dynamic Routes**: Use `params: Promise<{slug: string}>` pattern in Next.js 15

3. **Component Props Consistency**:
   - TrickGrid uses `isLoading` (not `loading`)
   - SearchBar has optional `onChange`
   - Badge supports 'danger' variant

4. **Function Imports**:
   - `getAllCategories()` and `getAllTools()` take no parameters
   - Use centralized imports via index.ts files

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 15.4.5 with App Router
- **Language**: TypeScript 5.8.3 with strict mode enabled
- **React**: Version 19.1.1
- **Styling**: Tailwind CSS v3.4.16 
- **Icons**: Lucide React v0.534.0
- **Font**: Inter (loaded via Next.js font optimization)
- **Linting**: ESLint 9.32.0 with Next.js core-web-vitals configuration

### Project Structure
```
app/
├── components/
│   ├── atoms/              # Basic UI components (Button, Badge, Checkbox)
│   ├── molecules/          # Composite components (TrickCard, SearchBar, SkeletonCard)
│   ├── organisms/          # Complex components (FilterSidebar, TrickGrid)
│   └── layout/             # Layout components (Header, Footer, PageContainer)
├── hooks/
│   └── useFilters.ts      # Custom hook for filter state management with URL sync
├── lib/
│   ├── types.ts           # TypeScript interfaces and type definitions
│   └── mock-data.ts       # Mock data for KI tricks (20 tricks - ohne steps/examples)
├── styles/
│   └── globals.css        # Global styles, Tailwind imports, and animations
├── tricks/
│   └── page.tsx           # Tricks listing page with full filtering
├── trick/
│   └── [slug]/            # Dynamic route for individual tricks
├── about/
│   └── page.tsx           # About page
├── admin/
│   └── tricks/
│       └── new/           # Admin interface to add new tricks
├── layout.tsx             # Root layout with metadata
├── page.tsx               # Homepage with hero section and stats
├── error.tsx              # Error boundary
└── not-found.tsx          # 404 page
```

### Data Model

The core data structure is the `AITrick` interface:

```typescript
interface AITrick {
  id: string
  title: string
  description: string
  category: Category // 8 predefined categories
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tools: string[] // AI tools used (ChatGPT, Claude, etc.)
  timeToImplement: string
  impact: 'low' | 'medium' | 'high'
  steps?: string[]
  examples?: string[]
  slug: string
  createdAt: Date
  updatedAt: Date
}
```

Categories: productivity, content-creation, programming, design, data-analysis, learning, business, marketing

### Key Architecture Patterns

1. **Atomic Design Pattern**: Components are organized into atoms → molecules → organisms
2. **URL State Synchronization**: Filter state is persisted in URL query parameters using the `useFilters` hook
3. **Server Components**: Pages use Next.js server components by default, with 'use client' only where needed
4. **Type Safety**: All components and functions have strict TypeScript typing
5. **Path Aliases**: Using `@/` for imports (configured in tsconfig.json)

### Design System

- **Primary Color**: #2299dd (Blue inspired by thegrowthlist.co)
- **Text**: neutral-900 (#171717)
- **Borders**: neutral-200 (#e5e5e5)
- **Background**: neutral-50 (#fafafa)
- **Design Philosophy**: Minimalistic, clean cards with subtle hover effects, lots of whitespace

## Current Implementation Status

### ✅ Completed Features

1. **Core Infrastructure**
   - Next.js App Router setup with server components
   - TypeScript strict mode configuration
   - Tailwind CSS with custom color palette
   - Responsive design system

2. **Components Library**
   - Atomic design components (Button, Badge, Checkbox)
   - TrickCard with hover animations
   - FilterSidebar with mobile drawer variant
   - SearchBar with live search and clear functionality
   - SkeletonCard for loading states

3. **Filter System**
   - Multi-select filters for categories, difficulty, impact, and tools
   - URL state persistence
   - Active filter counter
   - Reset filters functionality

4. **Pages**
   - Homepage with hero section and correct category counts
   - Tricks listing page with full filtering
   - Individual trick detail pages
   - Admin interface for adding new tricks
   - About page
   - Error and 404 pages

5. **Navigation Improvements**
   - Back button always navigates to /tricks (not browser history)
   - "KI Tricks" branding throughout the application

### 🚧 TODO

1. **Data Integration**
   - Replace mock data with real backend/API
   - Integrate localStorage tricks with main display
   - Add data fetching and caching strategy

2. **Enhanced Features**
   - Dark mode support
   - Favorites functionality
   - Social sharing
   - User authentication for admin features

## Key Implementation Details

### URL State Management
The `useFilters` hook manages filter state and syncs with URL:
- Parses URL parameters on mount
- Updates URL when filters change
- Enables shareable filtered views
- Example: `/tricks?categories=productivity,design&difficulty=beginner`

### Performance Optimizations
- `React.memo` for TrickCard components
- `useMemo` for filtered results calculation
- Server-side rendering for initial page load
- Font optimization with next/font

### Responsive Design Breakpoints
- Mobile: < 640px (single column, drawer filters)
- Tablet: 640px - 1024px (2-column grid)
- Desktop: > 1024px (3-column grid with sidebar)

## Development Guidelines

- **Language**: All UI text must be in German
- **TypeScript**: Maintain strict mode - no `any` types
- **Components**: Follow atomic design pattern
- **State Management**: Use URL for filter state, React state for UI-only state
- **Code Style**: Clean, self-documenting code
- **Imports**: Always use `@/` path alias for consistency

## Testing the Application

The application runs on `http://localhost:3000` (or 3001 if port 3000 is occupied).

**Working Routes**:
- `/` - Homepage
- `/tricks` - Tricks listing with filters
- `/tricks?[filters]` - Filtered views
- `/trick/[slug]` - Individual trick pages
- `/admin/tricks/new` - Add new tricks (saves to localStorage)
- `/about` - About page
- `/kontakt` - Contact page
- `/impressum` - Legal notice
- `/datenschutz` - Privacy policy
- `/claude-code` - Claude Code tutorial page

## Mock Data

20 KI tricks are available in `app/lib/mock-data.ts` covering all categories, difficulty levels, and various AI tools. Steps and examples have been removed to allow users to add their own content via the admin interface. New tricks can be added through `/admin/tricks/new` and are stored in localStorage.