# TELL Church

Website for TELL Church in Rapid City, South Dakota.

Requires Node.js 22.12 or newer.

## Local development

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

For Cloudflare Pages, use `npm run build` as the build command and `dist` as the output directory.

## Content dashboard

The website editor is available at `/admin/`. It uses Sveltia CMS and writes approved content
changes directly to the `main` branch, which triggers a new GitHub Pages deployment.

For the first administrator, sign in with a fine-grained GitHub access token that is limited to
this repository and has `Contents: Read and write` permission. Never share a GitHub password or
reuse a token that has access to unrelated repositories.

Editable content is stored in:

- `src/content/church.json`
- `src/content/homepage.json`
- `src/content/giving.json`

## Content still needed

- Real TELL Church worship and community photography
- Pastor and leadership information
- Ministry leaders and contact details
- YouTube or sermon archive URL
- Stripe/Apple Pay donation checkout URL after nonprofit verification
- Church email, phone number and social media links
