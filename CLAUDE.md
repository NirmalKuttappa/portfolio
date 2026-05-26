# Portfolio

Personal portfolio website for Nirmal Kuttappa (GitHub: [@NirmalKuttappa](https://github.com/NirmalKuttappa)). Designed to be shared with interviewers — both the live URL and the source repo.

## Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in `globals.css`)
- **Theming:** `next-themes` for light/dark toggle (class-based, persisted)
- **Deploy:** Netlify (auto-deploy from `main` via `@netlify/plugin-nextjs`)

## Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, ThemeProvider
│   ├── page.tsx         # Single-page composition (Hero + Projects + Contact)
│   └── globals.css      # Tailwind import + theme CSS vars
├── components/
│   ├── Nav.tsx          # Top nav: name, links, theme toggle, resume button
│   ├── Hero.tsx         # Intro block
│   ├── Projects.tsx     # Project list (list-style, not cards)
│   ├── Contact.tsx      # Email + social icons
│   ├── Footer.tsx       # Minimal footer
│   ├── ThemeToggle.tsx  # Sun/moon toggle
│   └── Providers.tsx    # Client wrapper for next-themes ThemeProvider
└── data/
    └── projects.ts      # Project array — SINGLE SOURCE OF TRUTH for projects
```

## Adding a new project

Edit `src/data/projects.ts` and append to the `projects` array:

```ts
{
  title: "Project name",
  description: "One-line description.",
  github: "https://github.com/NirmalKuttappa/repo",
  demo: "https://optional-live-url.com", // optional
  tech: ["Python", "FastAPI"],
}
```

Render is automatic.

## Updating personal info

Placeholders to replace (search the repo for `[YOUR ...]`):
- `[YOUR NAME]` — full name
- `[YOUR ROLE]` — e.g. "Software Engineer"
- `[YOUR BIO]` — short bio (1-2 sentences)
- `[YOUR EMAIL]` — contact email
- `[YOUR LINKEDIN]` — LinkedIn URL

Resume PDF: drop the file at `public/resume.pdf` (currently a placeholder).

## Design principles

Reference: [bensol.me](https://www.bensol.me/) — minimalist, generous whitespace, restraint over decoration. Keep these in mind:

- **List-style projects, not cards.** No heavy backgrounds, borders, or shadows on project entries.
- **Sans-serif, neutral palette.** Black on white (light) / off-white on near-black (dark).
- **Vertical rhythm matters.** Generous `py-` between sections.
- **Subtle hover states.** Underlines, arrows — no aggressive transforms.

## Commands

```bash
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Deploy

`main` → Netlify auto-deploy. Build settings live in `netlify.toml`. To set up Netlify for the first time:

1. Go to app.netlify.com → "Add new site" → "Import from GitHub"
2. Select the `NirmalKuttappa/portfolio` repo
3. Defaults are fine (build command and publish dir come from `netlify.toml`)
4. Deploy

Every subsequent `git push origin main` triggers a deploy.
