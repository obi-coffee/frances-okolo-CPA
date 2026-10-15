# Frances Okolo, CPA — website

Four-page marketing site (Home, Services, About, Contact) built with Next.js. Live at https://francesokolo.com. Deploys automatically to Vercel on every push to `main`.

## Editing content

All copy lives in **`content/site.ts`**. Change text there and push; nothing else needs touching.

## Assets

| What | Where |
|---|---|
| Headshot | `public/headshot.jpg` (portrait, ~1200×1500px). Replace the file to update it everywhere. |
| Wordmark | `components/WordmarkSvg.tsx` (inline SVG); `public/wordmark.svg` is the same mark as a file. |
| Client logos | Add files to `public/logos/`, list them in `clientLogos.items` in `content/site.ts`, and set `features.clientLogos: true`. |
| Testimonials | Edit `testimonials.items` in `content/site.ts` and set `features.testimonials: true`. |

## Contact form (Formspree)

Submissions go through Formspree form `xaeqlqgg` ("Website contact"), which emails the client. The ID is set as a default in `components/ContactForm.tsx`; to point the site at a different form, add `NEXT_PUBLIC_FORMSPREE_ID` in Vercel (Project → Settings → Environment Variables) and redeploy.

Manage submissions, spam filtering, and the recipient address at https://formspree.io.

## Running locally

```
npm install
npm run dev
```

Then open http://localhost:3000.
