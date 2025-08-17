# KI Tricks Platform - GitHub Copilot Instructions

**ALWAYS follow these instructions first** and only fallback to additional search and context gathering if the information here is incomplete or found to be in error.

## Project Overview

KI Tricks Platform is a Next.js 15 web application for discovering and implementing practical AI tips and tricks. The UI is in German and follows a minimalistic design. Built with TypeScript, React 19, and Tailwind CSS.

## Setup & Installation

### Prerequisites
- Node.js (any recent version - app uses built-in Node.js features)
- npm (comes with Node.js)

### Installation Commands
```bash
# Install dependencies (CRITICAL: Use environment variables for CI)
PUPPETEER_SKIP_DOWNLOAD=true npm install
```

**NOTE**: Puppeteer installation fails in CI environments due to network restrictions. ALWAYS use `PUPPETEER_SKIP_DOWNLOAD=true` in CI or restricted environments.

### Build & Development

#### Development Server
```bash
# Start development server (port 3000, fallback 3001)
npm run dev
```
- Server starts in ~2 seconds
- Runs on http://localhost:3000
- Hot reload enabled

#### Production Build
```bash
# Build for production (CRITICAL: Use env var for CI)
SKIP_GOOGLE_FONTS=true npm run build
```
- **Build time**: 5-25 seconds (depends on network conditions)
- **NEVER CANCEL**: Set timeout to 60+ seconds minimum for CI environments
- **Google Fonts issue**: Use `SKIP_GOOGLE_FONTS=true` in CI environments where fonts.googleapis.com is blocked
- Generates optimized static pages (83 pages total)

#### Production Server
```bash
npm start
```
- Serves production build on port 3000

#### Quality Checks
```bash
# Run ESLint (takes ~3-5 seconds)
npm run lint
```
- **Expected warnings**: 2 React Hook dependency warnings in admin pages (these are acceptable)
- All other lint issues should be fixed before committing

### Utility Scripts

#### Build Error Fixing
```bash
# Fix common TypeScript build errors
npm run fix-build

# Remove broken scraped content files  
npm run fix-build-clean
```

#### Content Generation (requires external APIs)
```bash
# Convert YouTube transcripts to KI tricks
npm run convert-youtube

# Note: Scraping scripts may not work in CI due to network restrictions
```

## Environment Configuration

### Required Environment Variables

```bash
# Admin authentication (required for /admin routes)
ADMIN_PASSWORD=your-secure-password

# CI/Build environment (when needed)
SKIP_GOOGLE_FONTS=true          # For CI environments
PUPPETEER_SKIP_DOWNLOAD=true    # For package installation

# EmailJS (optional - for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxx  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

## Project Structure

```
src/
├── app/                 # Next.js 15 app directory
│   ├── admin/          # Protected admin area (Basic Auth)
│   ├── api/            # API routes
│   ├── trick/[slug]/   # Dynamic trick detail pages
│   └── tricks/         # Tricks listing and submission
├── components/         # React components
│   ├── atoms/         # Basic UI components
│   ├── molecules/     # Composite components  
│   ├── organisms/     # Complex components
│   └── layout/        # Layout components
├── hooks/             # Custom React hooks
├── lib/               # Utilities and data
└── styles/            # Global CSS
scripts/               # Automation scripts
docs/                  # Documentation
```

## Key Features & Workflows

### Admin Area Access
- Routes: `/admin/*`
- **Authentication**: Basic Auth with username "admin" and ADMIN_PASSWORD
- Protected by middleware.ts
- Features: Analytics, pending trick moderation, new trick creation

### Content Management
- **Mock Data**: 64+ KI tricks in `src/lib/data/mock-data.ts`
- **Categories**: 8 categories (Programming, Business, Learning, etc.)
- **User Submissions**: Via `/tricks/einreichen` page

### Development Workflow
1. **Always run setup**: `PUPPETEER_SKIP_DOWNLOAD=true npm install`
2. **Start development**: `npm run dev`
3. **Make changes**: Edit files with hot reload
4. **Run linting**: `npm run lint` (fix any NEW errors)
5. **Test build**: `SKIP_GOOGLE_FONTS=true npm run build`
6. **Commit changes**: Only after successful build

## Validation & Testing

### Manual Validation Required
After making changes, ALWAYS test these scenarios:

1. **Homepage functionality**:
   - Navigate to http://localhost:3000
   - Verify trick categories display correctly
   - Click "Alle Tricks" - should load tricks page

2. **Tricks listing**:
   - Navigate to /tricks
   - Verify 64 tricks are displayed
   - Test filter functionality (categories, difficulty)
   - Test search functionality

3. **Individual trick pages**:
   - Click any trick from listing
   - Verify trick detail page loads correctly
   - Check that all trick information displays

4. **Admin area** (if ADMIN_PASSWORD is set):
   - Navigate to /admin
   - Authenticate with admin/[ADMIN_PASSWORD]
   - Verify admin dashboard loads

### No Automated Tests
- **No Jest/Vitest**: No unit test framework configured
- **No E2E tests**: No Playwright or Cypress tests
- **Manual testing only**: Use the validation scenarios above

## Network & CI Considerations

### Known Network Issues
1. **Google Fonts**: fonts.googleapis.com may be blocked in CI
   - **Solution**: Use `SKIP_GOOGLE_FONTS=true`
   
2. **Puppeteer**: Chrome download fails in restricted environments
   - **Solution**: Use `PUPPETEER_SKIP_DOWNLOAD=true`

3. **Vercel Analytics**: May fail to load in development
   - **Expected**: Console warnings about blocked analytics scripts

### Expected Console Messages (Safe to Ignore)
- "Failed to load resource: net::ERR_BLOCKED_BY_CLIENT" (analytics/fonts)
- "21st.dev Toolbar" messages (development tooling)
- React DevTools download message

## Common Issues & Solutions

### Build Failures
1. **Google Fonts error**: Add `SKIP_GOOGLE_FONTS=true` environment variable
2. **Puppeteer install fails**: Use `PUPPETEER_SKIP_DOWNLOAD=true npm install`
3. **TypeScript errors**: Run `npm run fix-build` to auto-fix common issues

### Development Issues
1. **Port 3000 in use**: Next.js will automatically use 3001
2. **Hot reload not working**: Restart dev server with `npm run dev`
3. **Admin access denied**: Check ADMIN_PASSWORD environment variable

### Performance Notes
- **Build time**: 5-25 seconds (varies by network)
- **Dev server start**: ~2 seconds
- **Page load**: Very fast due to static generation
- **No heavy operations**: All scripts complete within 30 seconds

## Architecture Notes

### Next.js 15 Compatibility
- Uses new app directory structure
- Supports React 19 features
- Dynamic routes use Promise pattern: `params: Promise<{slug: string}>`

### State Management
- URL-based filter state with useFilters hook
- Local storage for admin session
- No global state management library

### Styling
- **Tailwind CSS**: Primary styling system
- **No styled-jsx**: Removed for Next.js 15 compatibility
- **Custom theme**: Based on thegrowthlist.co design

## Deployment

- **Auto-deploys**: Pushes to main branch trigger Vercel deployment
- **Build requirements**: All environment variables must be set in Vercel
- **No manual deployment**: All handled through git workflow

## Security

- **Admin routes**: Protected by Basic Auth middleware
- **Environment variables**: Never commit .env files
- **No sensitive data**: All trick data is public

---

**Remember**: ALWAYS validate your changes by running the manual test scenarios and taking screenshots of any UI changes to ensure the application works correctly.