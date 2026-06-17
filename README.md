# Portfolio

Personal portfolio site for Nirmal Kuttappa. Built with Next.js + Tailwind, deployed on Netlify.

**Live site:** [https://portfolio-nirmal33.vercel.app/](https://portfolio-nirmal33.vercel.app/)
**Live site:** [aibuilderprojects.netlify.app](https://aibuilderprojects.netlify.app)

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Customizing

- **Personal info:** search for `[YOUR ...]` placeholders and replace.
- **Projects:** edit `src/data/projects.ts`.
- **Resume:** replace `public/resume.pdf`.

See [CLAUDE.md](CLAUDE.md) for more detail on structure and conventions.

## Deploy

Pushes to `main` auto-deploy to Netlify via `@netlify/plugin-nextjs` (see `netlify.toml`).
