# tendr

A personal PWA to track hobbies/interests, daily wellness, and focus time — "what matters."

Live at: https://arindamkalra.github.io/interests-tracker/

## Features

**Interests**
- Interest list with status: Active, Up Next, Someday, Archived
- Notes saved as individual cards; pasting a URL auto-extracts it into Links (with an optional title)
- Links & Resources list, separate from notes
- Projects — each interest can have sub-projects with their own notes, links, and next actions

**Wellness**
- Daily checklist view, resets each day

**Focus**
- Pomodoro-style timer (short/long sessions)
- Task list for the day
- Weekly goals tracker

## Tech

- Single HTML file (`index.html`), no build step, no framework
- Installable PWA — `manifest.json` + `sw.js` service worker + app icons
- Data persistence via Supabase (interests + wellness data); Pomodoro session state is local-only
- Deployed via GitHub Pages from the `gh-pages` branch

## Repo layout

- `index.html` — the app
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `tendr_logo.svg` — PWA assets
- `archive/interests-legacy.html` — the original single-interest-list prototype this app grew out of, kept for reference

## Roadmap

- [ ] Tags/categories across interests
- [ ] Reduce the hardcoded single-user assumption (`USER_ID`) if multi-user access is ever needed
