# Sveltekit PWA Issue

This repository demonstrates the issue with the fallback html file not being added to the
service worker manifest.


## Reproduction

Just run `pnpm run build` and inspect the service worker code in `build/service-worker.js` to see if `app.html` (or `app` as
it seem to drop the `.html` at least in some cases) is present.


## Observations

`.svelte-kit/output/prerendered/pages` only contain the two pre-rendered pages `index.html` and `test.html` but is
missing the `app.html` (or `fallback.html` as the plugin seem to expect).

Ether file is also missing in `output/client`.

However, it does exist in `build` after the build is finished.
