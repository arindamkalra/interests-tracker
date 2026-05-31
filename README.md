# Interests Tracker

A lightweight personal app to track hobbies and interests — what you want to try, what you're working on, and what you've done.

## Features

- **Interest list** with status: Active, Up Next, Someday, Archived
- **Next actions** per interest — check off to move to Done log with date
- **Done log** — collapsible history of completed actions with undo
- **Notes** — freeform notes per interest; paste a URL and it auto-moves to Resources
- **Resources & Links** — saved separately, one per line, clickable
- **Projects** — each interest can have sub-projects, each with their own next actions, done log, notes, and links

## Tech

- Single HTML file, no dependencies
- Data stored in browser `localStorage` (cross-device sync via Supabase planned)

## Roadmap

- [ ] Supabase integration for cross-device sync
- [ ] Mobile-friendly layout
- [ ] Tags/categories across interests
