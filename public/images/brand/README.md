# Brand assets

Drop the logo files here, then set the two paths in `lib/site.ts` under
`siteConfig.brand`. Until those are set the site renders the typographic
"UBIQUE." wordmark, so nothing is ever broken or half-finished.

## What to supply

| File | Used on | Required? |
|---|---|---|
| `logo.png` (or `.svg`) | header and mobile menu | **yes** — dark artwork |
| `logo-white.png` (or `.svg`) | the navy footer | optional — white artwork |

The header keeps a light panel behind the logo at every scroll position, so the
**dark logo alone covers it**. Supply just that one file and the header is
done.

The footer sits on navy. Without a white variant it keeps the typographic
"UBIQUE." wordmark, which looks perfectly deliberate — so the white file is a
nice-to-have, not a blocker.

**SVG is preferred** — sharp at every size, a few KB, no retina variant needed.
**PNG works perfectly well too**; just use `.png` in the paths below.

If supplying PNG:

- **Transparent background**, PNG-24 with alpha. Not PNG-8, and never JPG —
  the white variant sits on navy and will show a white box otherwise.
- **At least 3× the display size.** Rendered height is 30px, so 90px tall
  minimum, ideally 120–180px. Undersized PNGs look soft on retina screens.
- **Trim the whitespace.** Padding baked into the file makes the logo render
  visually smaller than the height you set, and you end up fighting it in CSS.

Ask whoever holds the brand files for the **horizontal / landscape** lockup.
A square or stacked logo will squash the header, which is only 80px tall.

## Wiring it up

```ts
// lib/site.ts
brand: {
  logo: "/images/brand/logo.png",
  logoWhite: "/images/brand/logo-white.png",
  logoHeight: 30,
  logoAspect: 4,   // natural width ÷ height, e.g. 600×150 → 4
},
```

Paths are relative to `public/`, so the leading `/images/...` is correct —
don't include `public` itself.

Adjust `logoHeight` to taste. 30px suits a typical wordmark; a logo with a
symbol above the text usually needs more.

Set `logoAspect` to the artwork's real proportions. It only reserves space
while the image loads — a wrong value never distorts the logo, but the header
will visibly jump as it settles.

## Also worth replacing

| File | What it is | Size |
|---|---|---|
| `app/favicon.ico` | browser tab icon | 32×32, or supply `app/icon.png` at 512×512 instead |
| `app/apple-icon.png` | iOS home screen | 180×180 (create if absent) |

Next.js picks both up automatically from those filenames — no config needed.

The social sharing card at `app/opengraph-image.tsx` is generated in code
rather than from a file, and currently uses the wordmark. It can take the real
logo too, but the image has to be embedded as a data URI — worth doing once the
final artwork is settled.
