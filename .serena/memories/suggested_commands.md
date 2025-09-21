# Suggested Commands

## Development Commands
```bash
npm run dev                      # Start dev server (port 3000)
npm run dev:mobile              # Start dev server accessible on network
npm run build                   # TypeScript build
npm start                       # Production server
```

## Code Quality Commands (Run after task completion)
```bash
npm run lint                    # ESLint check
npm run fix-build               # Auto-fix lint issues and check TypeScript
npm run fix-build-clean         # Fix build and remove broken imports
```

## Data Management Commands
```bash
npm run clean:data              # Clean generated AI tips data
npm run migrate-to-supabase     # Initial data migration to Supabase
npm run import-tricks           # Bulk import from CSV/JSON files
npm run import-tricks:validate  # Validate import data without inserting
npm run ingest:omni             # Ingest omnisearch results
```

## Supabase Commands (Local Development)
```bash
npm run db:start                # Start local Supabase
npm run db:stop                 # Stop local Supabase
npm run db:studio               # Open Supabase Studio
npm run db:reset                # Reset local database
npm run db:push                 # Push schema changes
```

## Supabase Cloud Commands
```bash
npm run supabase:login          # Login to Supabase CLI
npm run supabase:link           # Link to cloud project (requires SUPABASE_PROJECT_REF)
```

## Pipeline Commands
```bash
npm run pipeline:normalize      # Normalize news items
npm run pipeline:format-guides  # Format guides
```

## Git Commands (Linux)
```bash
git status                      # Check repository status
git add .                       # Stage all changes
git commit -m "message"         # Commit changes
git push origin main           # Push to main branch (SSH configured)
git pull                       # Pull latest changes
```

## System Utilities (Linux)
```bash
ls -la                         # List files with details
cd <path>                      # Change directory
grep -r "pattern" .            # Search for pattern recursively
find . -name "*.ts"            # Find TypeScript files
pwd                           # Print working directory
cat <file>                    # Display file contents
```

## Task Master AI Commands (If using Task Master)
```bash
task-master list               # Show all tasks
task-master next              # Get next task
task-master set-status --id=<id> --status=done  # Mark task complete
```