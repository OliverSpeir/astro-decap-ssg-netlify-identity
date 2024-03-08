# Decap Starter

1. Set up Netlify Identity

- Deploy site
- `Site configuration --> Identity --> Enable Identity --> Enable Git Gateway ( In Services Section of Identity )`
  - You can allow Registration or Invite Only
  - For Invite Only: `Integrations --> Identity --> Invite Users --> Send invite email`

## How it works

- SSG on Netlify
- Git Gateway backend of Decap
- Requires Netlify Identity
- Local Backend works
  - Preview styles and templates won't be applied in dev server, but the cms will work
  - For actual use / local testing it's best to `pnpm run build && pnpm run preview`

- Netlify Identity widget must be on root page ( is in `src/layouts/PageLayout.astro` but only needs to be on root page ) and `/admin`
- The decap admin board is preconfigured with preview styles built from the tailwind of our project and to only show the body in the preview ( personal preference of mine can be removed by removing the scripts in `/pages/admin.astro`)
- Tailwind typography for styling the blogs
  - Personally not a fan but I figured it was easy to use and remove

## WIP

This is a very rough WIP created very hastily
