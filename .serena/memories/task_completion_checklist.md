# Task Completion Checklist

When completing any development task, follow these steps:

## 1. Code Quality Checks
```bash
npm run lint                    # Check for linting issues
npm run fix-build               # Auto-fix and check TypeScript
```

## 2. TypeScript Validation
- Ensure no TypeScript errors with `npm run build`
- No `any` types (strict mode is enabled)
- All refs properly initialized
- Proper type definitions for all functions and components

## 3. Next.js 15 Compatibility
- Check that useSearchParams is wrapped in Suspense
- Dynamic routes use Promise pattern for params
- No styled-jsx usage (Tailwind only)

## 4. Performance Checks
- Heavy components wrapped with React.memo
- Lists using useMemo where appropriate
- Search inputs have proper debouncing

## 5. UI/UX Validation  
- German text conventions followed
- Responsive design works on mobile/tablet/desktop
- Filter state properly syncs with URL

## 6. Testing (if applicable)
- Run any existing tests
- Manual testing of new features
- Check browser console for errors

## 7. Security Review
- No exposed secrets or API keys in code
- No sensitive data in console.logs
- Admin routes properly protected

## 8. Git Commit
```bash
git add .
git status                     # Review changes
git commit -m "feat/fix: descriptive message"
```
Note: Push via SSH as configured (git push origin main)

## 9. Documentation Updates
- Update relevant documentation if needed
- Only create docs if explicitly requested

## 10. Final Verification
- Feature works as expected
- No console errors
- Build succeeds without warnings