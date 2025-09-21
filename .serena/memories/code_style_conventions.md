# Code Style and Conventions

## TypeScript Configuration
- **Strict mode**: Enabled (no `any` types allowed)
- **Module resolution**: Bundler
- **Target**: ES2017
- **JSX**: Preserve
- **Path alias**: `@/*` maps to `./src/*`

## Code Style Rules
- **Export style**: Named exports with `export const` or `export interface`
- **Component naming**: PascalCase for components (e.g., `SkeletonCard`, `TrickCard`)
- **File naming**: kebab-case for files, PascalCase for component files
- **No comments**: DO NOT ADD ANY COMMENTS unless explicitly asked
- **Type definitions**: Use interfaces for objects, type aliases for unions/primitives
- **Imports**: Always use `@/` path alias, centralized exports via index.ts files

## Next.js 15 Specific Patterns
1. **useSearchParams requires Suspense boundary**:
   ```typescript
   <Suspense fallback={<Loading />}>
     <ClientComponent />
   </Suspense>
   ```

2. **Dynamic route params use Promise pattern**:
   ```typescript
   export default async function Page({ params }: { params: Promise<{slug: string}> }) {
     const { slug } = await params
   }
   ```

3. **No styled-jsx** - Use Tailwind CSS exclusively

## Component Architecture Pattern
```
src/components/
├── atoms/       # Button, Badge, Checkbox, Input
├── molecules/   # TrickCard, SearchBar, TrickMeta  
├── organisms/   # FilterSidebar, TrickGrid, TrickForm
├── enhanced/    # GlowingTrickCard, RefinedTrickCard (glassmorphism)
└── layout/      # Header, Footer, PageContainer
```

## State Management Patterns
- URL params for shareable filter state via `useFilters` hook
- React state for UI-only concerns (modals, dropdowns)
- No global state management library (except Zustand where used)

## Performance Optimizations
- `React.memo` on heavy components
- `useMemo` for filtered/sorted lists
- 300ms debounce on search input
- Lazy loading for below-fold content

## German UI Conventions
- "Suchen" not "Search"
- "Filter" stays "Filter"
- "Kategorie" not "Category"
- Keep "Tricks" as English

## Security Best Practices
- Never introduce code that exposes or logs secrets and keys
- Never commit secrets or keys to the repository
- Admin routes protected via Basic Auth in middleware.ts

## Database Types
- Main types defined in `src/lib/types/types.ts`
- Categories: 'productivity' | 'content-creation' | 'programming' | 'design' | 'data-analysis' | 'learning' | 'business' | 'marketing'
- Status values: 'draft' | 'pending' | 'published' | 'rejected'