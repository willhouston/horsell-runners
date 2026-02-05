# Horsell Runners Website

Production-ready Astro site for the Horsell Runners running club in Horsell, Surrey.

## Project Structure

```text
/
├── public/
│   ├── favicon.svg
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── astro.config.mjs
```

## Run Locally

```sh
npm install
npm run dev
```

Astro will start the dev server at `http://localhost:4321`.

## Build

```sh
npm run build
npm run preview
```

## Deploy

- Static hosting: deploy the `dist/` directory.
- Netlify: the contact and mailing list forms are ready for Netlify Forms.
- If you prefer another provider (Mailchimp, Brevo, etc.), replace the form handlers in:
  - `src/pages/mailing-list.astro`
  - `src/pages/contact.astro`

## Content

- Blog posts live in `src/content/blog/` with frontmatter and tags.
- Runs data in `src/data/runs.ts`.
- Races data in `src/data/races.ts`.

## TODO / Next Enhancements

1. Replace placeholder SVGs with real photography.
2. Connect the forms to Mailchimp or Brevo.
3. Add Instagram embed with progressive enhancement.
4. Secure `/members/*` with Cloudflare Access.
5. Hook up a CMS (e.g., Decap or Contentful) for blog editing.
