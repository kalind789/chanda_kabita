# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A two-page static website for Chanda-Kabita's Beauty & Brows Threading (Rochester, NY). **`SPEC (1).md` is the current build spec and the source of truth.** `SPEC.md` is an older, incomplete draft. Design tokens, business facts, copy, review text and prices must match the spec exactly. Never invent review text.

## Build / run

There is no build step, package manager, framework or test suite. Plain HTML, CSS and a little vanilla JS. Two hard requirements:

- It works when `index.html` is opened directly from disk (`file://`). Use only relative paths, no ES modules, no `fetch` of local files and no server-only features.
- It deploys as-is to any static host (Netlify, GitHub Pages, Cloudflare Pages).

To preview, run `open index.html`. Headless Chrome's `--window-size` won't go narrower than about 500px, so to check phone layouts, load the page in a 360px-wide `<iframe>` instead.

## Architecture

```
index.html        Header, hero, #reviews band (carousel), #visit (map), footer; BeautySalon JSON-LD
prices.html       Price list; prices are static HTML (not JS-rendered) for SEO
css/styles.css    The only stylesheet; every design token lives on :root here
js/reviews.js     Carousel Prev/Next: scrollBy one card width + gap
images/logo.svg   Thread mark logo (also the favicon)
images/hero.jpg   Owner photo, not supplied yet
```

- **Shared chrome:** both pages repeat the same header, footer and inline SVG icon sprite (`<symbol id="i-…">`, used through `<use href="#i-…">`). There are no includes, so edit both pages the same way. `prices.html` adds a "Home" link, marks "Prices" with `aria-current="page"` and points Reviews/Hours to `index.html#…`.
- **Tokens:** use `var(--…)` everywhere and never hard-code colors outside `:root`. `--white` was added beyond the spec's token table.
- **Icons:** inline SVG with a 2px stroke and round caps. Stroke styling comes from the `.icon` class, not from the symbols. No icon libraries and no emoji. Decorative SVGs get `aria-hidden="true"`.
- **Hero photo:** `images/hero.jpg` is the owner-supplied eyebrow-threading close-up (`IMG_2030.JPG`), cropped to 5:4 at 900×720. If you swap it, crop to 5:4, keep it under 300 KB and update the `alt` text. The owner's raw uploads (`IMG_*.JPG` in the repo root) are left untracked so they aren't published. The frame's `--blush-2` background and the `onerror` removal keep the page looking fine if the file is missing.
- **Hosting:** the site is published on GitHub Pages from `main` at https://kalind789.github.io/chanda_kabita/. Pushing to `main` redeploys it.
- **Reviews:** to add one, copy the card template in the HTML comment at the end of `.review-track` in `index.html`.
- **Rating figures:** 4.6 from 171 reviews, 144 of them five-star. These come from October 2026 listings and appear in several places in `index.html`; confirm they're current before launch.
