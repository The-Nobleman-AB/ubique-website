# Ubique Systems

Marketing site plus a recruitment admin, built on Next.js 16 (App Router,
Turbopack), React 19, Tailwind v4 and Prisma.

## Getting started

```bash
npm install          # postinstall runs `prisma generate`
npm run setup        # applies migrations and seeds the starter roles
npm run admin:create # prompts for your admin email and password
npm run dev          # http://localhost:3000
```

The public site works with no configuration. Email delivery and the admin need
environment variables — copy `.env.example` to `.env.local` and fill it in.

## Layout

```
app/
  (site)/        public pages — inherit the header, footer and Organization schema
  admin/         recruitment admin — its own chrome, gated by proxy.ts + requireUser()
  api/           contact and application endpoints
components/
  ui/            the design system: PageHero, SectionHeader, CTABand, Card
  admin/         admin-only primitives
lib/
  jobs.ts        job data access (server only)
  job-types.ts   job types and constants (client-safe)
  auth.ts        scrypt password hashing, database-backed sessions
  db.ts          Prisma client — swap the adapter here to change database
prisma/
  schema.prisma  data model
  seed.mts       the three starter roles
storage/cv/      uploaded CVs (gitignored, never served from /public)
```

## The design system

Every page opens on `PageHero` and closes on `CTABand`. Section openers use
`SectionHeader`, content sits in `Card`. Type and colour come from tokens in
`app/globals.css` — there are **no hardcoded hex values or pixel font sizes** in
the codebase, and `npm run check:links` fails the build on a dead route or
anchor.

- Display type: `display-1` … `display-4`, `stat-xl`, `stat-lg`, `watermark`
- Labels: `eyebrow`
- Section rhythm: `section-y`, `section-y-lg`, `section-y-sm`
- Radii: `rounded-control`, `rounded-card`, `rounded-panel`, `rounded-pill`

## Admin

`/admin` — sign in with the account from `npm run admin:create`.

- **Roles** — create, edit, publish. Draft roles are invisible on the public
  site; closed roles keep their page (so existing links work) but stop taking
  applications. A published role's URL never changes.
- **Applications** — every submission with its CV, filterable by status and
  role, with recruiter notes.

Saving a role revalidates the careers page, the role page, the sitemap and the
country pages, so changes appear without a deploy.

## Email

Three transports, chosen automatically. Check which one is live at
`/admin/email` and send a test from there.

| Transport | When | Notes |
|---|---|---|
| `smtp` | `SMTP_HOST` set | Your own mail server. Usually the quickest route to working mail — no new vendor, no domain verification. |
| `resend` | `RESEND_API_KEY` set | API-based. Verify the sending domain in Resend first. |
| `file` | neither, in development | Writes `.eml` files to `storage/outbox`. Nothing sends, but the whole path runs. |

For Microsoft 365, enable SMTP AUTH on the mailbox and use an app password if
MFA is on:

```
SMTP_HOST="smtp.office365.com"
SMTP_PORT="587"
SMTP_USER="noreply@ubique-systems.com"
SMTP_PASS="…"
CONTACT_FROM="Ubique Systems <noreply@ubique-systems.com>"
```

Enquiries go to `CONTACT_TO`, applications to `CAREERS_TO` (comma-separate for
several). Both senders get a confirmation, and `Reply-To` is set to the
enquirer so replying from the inbox reaches them directly.

## Database

SQLite by default, so the site runs with no setup. The schema is
Postgres-compatible — to move:

1. `provider = "postgresql"` in `prisma/schema.prisma`
2. `npm i @prisma/adapter-pg` and swap the adapter in `lib/db.ts`
3. Point `DATABASE_URL` at the instance, then `npx prisma migrate deploy`

CVs are written to `storage/cv/`. On a serverless host, swap that write in
`app/api/apply/route.ts` for object storage.

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run verify` | Link check, then build |
| `npm run check:links` | Fails on any dead internal route or anchor |
| `npm run db:migrate` | Create and apply a migration |
| `npm run db:seed` | Seed the starter roles |
| `npm run db:studio` | Browse the database |
| `npm run admin:create` | Create or reset an admin |
| `npm run format` | Prettier |

## Known gaps

- Email needs a transport configured for production — see **Email** below. In
  development it writes to `storage/outbox` so the forms are testable with no
  credentials. An application is **always** saved to the database before any
  email is attempted, so nothing is ever silently lost.
- The India talent report's figures aren't tied to a dataset; the page carries a
  visible notice until they are.
- The three `/legal` pages are drafts marked for legal review.
- Client logos and headline metrics are anonymised or derived from real data
  until someone confirms what can be published.
