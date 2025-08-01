# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KI Tricks Platform is a Next.js web application designed to help users discover and implement practical KI tips and tricks in their daily workflow. The platform features a categorized collection of KI tricks with difficulty levels, time estimates, and impact ratings. The UI is in German and follows a minimalistic design inspired by thegrowthlist.co.

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

The core data structure is the `KITrick` interface:

```typescript
interface KITrick {
  id: string
  title: string
  description: string
  category: Category // 8 predefined categories
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  tools: string[] // KI tools used (ChatGPT, Claude, etc.)
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

20 KI tricks are available in `app/lib/mock-data.ts` covering all categories, difficulty levels, and various KI tools. New tricks can be added through `/admin/tricks/new` and are stored in localStorage.

### 🚀 Content Update (2025-08-01)

40 high-quality KI tricks have been created based on YouTube transcripts and stored in `curated-ki-tips.json`. These tips include:

**Categories Distribution:**
- Programming: 11 tips
- Productivity: 10 tips  
- Learning: 7 tips
- Business: 5 tips
- Content Creation: 3 tips
- Data Analysis: 2 tips
- Marketing: 2 tips
- Design: 1 tip

**Key Features of the Curated Tips:**
- Each tip includes a compelling hook explaining why it works (psychology-based)
- 4 concrete, actionable steps in German
- 2 real-world examples with measurable results
- Tools variety: Claude, Claude Code, ChatGPT, Perplexity, GitHub Copilot, etc.
- Implementation time: 5-60 minutes
- Impact levels: low, medium, high

**Integration Status:**
- ✅ 40 tips created in `curated-ki-tips.json`
- ⏳ Integration into `mock-data.ts` pending
- ⏳ Testing with full content pending

The tips are based on real-world use cases from:
- Vibe Coding techniques from Anthropic
- Claude Code best practices
- Student learning optimization
- Startup rapid prototyping
- Business automation strategies

## Deployment Configuration

### Setting up Environment Variables in Vercel

1. **Login to Vercel Dashboard**
   - Go to https://vercel.com/dashboard
   - Select your project (ai-platform-lilac)

2. **Navigate to Settings**
   - Click on the "Settings" tab in your project
   - Select "Environment Variables" from the left sidebar

3. **Add Required Environment Variables**
   
   Add the following variables:

   **For Admin Authentication:**
   ```
   Name: ADMIN_PASSWORD
   Value: [your-secure-password]
   Environment: Production, Preview, Development
   ```

   **For EmailJS Integration:**
   ```
   Name: NEXT_PUBLIC_EMAILJS_SERVICE_ID
   Value: [your-emailjs-service-id]
   Environment: Production, Preview, Development
   ```

   ```
   Name: NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
   Value: [your-emailjs-template-id]
   Environment: Production, Preview, Development
   ```

   ```
   Name: NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
   Value: [your-emailjs-public-key]
   Environment: Production, Preview, Development
   ```

4. **Getting EmailJS Credentials**
   - Register at https://www.emailjs.com/
   - Create a new service (e.g., Gmail)
   - Create an email template with variables: `from_name`, `from_email`, `subject`, `message`, `to_email`
   - Copy your Service ID, Template ID, and Public Key

5. **Deploy with New Variables**
   - After adding all variables, trigger a new deployment
   - The variables will be automatically available in your application

### How Admin Authentication Works

Once the environment variables are set in Vercel:

1. **Access Admin Area**
   - Navigate to: https://ai-platform-lilac.vercel.app/admin/tricks/new
   - A browser authentication popup will appear

2. **Login Credentials**
   - Username: Can be anything (e.g., "admin")
   - Password: The value you set in ADMIN_PASSWORD

3. **Security Details**
   - Uses Basic Authentication via Next.js middleware
   - All routes under `/admin/*` are protected
   - Authentication is handled by `middleware.ts`
   - Session persists in browser until you close it

4. **Adding New Tricks**
   - Once authenticated, you can access the admin form
   - New tricks are saved to localStorage
   - Only Claude and Claude Code are available as tools

### Testing Authentication Locally

For local development:
1. Create a `.env.local` file (copy from `.env.local.example`)
2. Set your environment variables
3. Run `npm run dev`
4. Access http://localhost:3000/admin/tricks/new

## Recent Updates (2025-08-01)

### ✅ Completed UI Improvements

1. **Header Logo Visibility**
   - Fixed: Header and Footer were missing from the `/tricks` page
   - Solution: Added Header and Footer components to `app/tricks/page.tsx`
   - The KI logo is now visible on all pages and clickable for navigation

2. **KI Kurs Link Added**
   - Added prominent "KI Kurs" button in the header navigation
   - Link: https://www.produktiv.me/kiz/
   - Style: Blue background button with white text (stands out from other navigation items)
   - Position: Right side of the navigation menu
   - Opens in new tab with proper security attributes

## Security Notes

- Never commit `.env.local` file to version control
- Use strong passwords for admin authentication
- Regularly rotate passwords and API keys
- Consider implementing rate limiting for the contact form