# Why there is no `loading.tsx`

Every route in this app is statically prerendered (`next build` shows ○/● for
all of them), so there is nothing for a route-level loading state to wait on.

More importantly: adding `app/loading.tsx` on Next 16.2.7 wrapped every page
body in a Suspense boundary that **never hydrated**. The layout (header,
footer) stayed interactive, but everything inside the page — the contact form,
the job application wizard, the animated metrics — silently became static
HTML. A form would submit natively as a GET and dump its fields into the URL.

If a genuinely dynamic route is added later and needs a loading state, scope
the `loading.tsx` to that route segment only, and verify hydration afterwards:

    document.querySelector('form') &&
      Object.keys(document.querySelector('form')).some(k => k.startsWith('__react'))

should be `true`.
