# Chanda-Kabita's Website: Build Spec for Claude Code

Oct 27, 2026 · @Kalind
## Project setup

A static site with two pages and shared CSS. It must open by double-clicking `index.html` and deploy as-is to any static host (Netlify, GitHub Pages, Cloudflare Pages).

```
/
  index.html        Homepage
  prices.html       Price list
  css/styles.css    All styles and design tokens
  js/reviews.js     Review carousel buttons
  images/
    logo.svg        Thread mark (see Design system)
    hero.jpg        Owner's photo (to be supplied)
```

- Fonts load from Google Fonts: Bricolage Grotesque (500, 700) and DM Sans (400, 500, 700).
- Icons are inline SVG, 2px stroke, round caps. No icon libraries, no emoji.
- Both pages share the same header and footer markup.

## Design system

Define these as CSS custom properties on `:root` and use them everywhere.

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | #FFF8F6 | Page background, review cards |
| `--ink` | #2A1018 | Body text, dark bands |
| `--ink-soft` | #4D3038 | Secondary text |
| `--muted` | #6B4E55 | Captions, small labels |
| `--maroon` | #7A1F3D | Primary buttons, links, accents |
| `--maroon-dark` | #4E1026 | Link hover |
| `--blush` | #FCE9E4 | Badges, info boxes |
| `--blush-2` | #F3D9D2 | Photo and map frames |
| `--line` | #F0DCD8 | Borders |
| `--gold` | #F2B53A | Accents on dark backgrounds |
| `--gold-dark` | #C98A12 | Star icons on light backgrounds |
| `--footer` | #1E0A10 | Footer background |

**Type.** Headings in Bricolage Grotesque 700; body in DM Sans 400/500/700. H1 `clamp(40px, 5.4vw, 68px)`, line-height 1.02, letter-spacing -0.02em. H2 `clamp(30px, 3.6vw, 44px)`. Body 17 to 18px, line-height 1.6. Eyebrow labels 14px, 700, uppercase, letter-spacing 0.12em.

**Layout.** Content max-width 1200px, 24px side padding. Section padding `clamp(48px, 6vw, 80px)` top and bottom.

**Components.**

- Primary button: maroon fill, white text, 700, padding 16px 28px, fully rounded (999px).
- Secondary button: transparent, 2px maroon border, maroon text, same shape.
- Badge: blush fill, maroon 700 text at 14px, padding 8px 14px, fully rounded, with a small clock icon.
- Cards: white or `--bg` fill, 1px `--line` border, 20 to 24px radius, 28px padding.
- Logo: a 36px circle outline in maroon with a curved maroon "thread" stroke and a thin gold line under it, beside "Chanda-Kabita's" (Bricolage 700, 18px) over "BEAUTY & BROWS" (13px, uppercase, maroon).

## Business facts

Use these exactly. Phone links use `tel:` with the +1 form.

| Item | Value |
| --- | --- |
| Name | Chanda-Kabita's Beauty & Brows Threading |
| Address | 2322 Lyell Ave, Rochester, NY 14606 (across from Wegmans) |
| Phone 1 (main) | (585) 417-0347, `tel:+15854170347` |
| Phone 2 | (585) 354-6387, `tel:+15853546387` |
| Hours | Mon to Fri 10 AM to 7 PM; Sat 10 AM to 6 PM; Sun closed |
| Google rating | 4.6 from 171 reviews (144 five-star) |
| Directions link | `https://www.google.com/maps/dir/?api=1&destination=2322+Lyell+Ave+Rochester+NY+14606` |
| Reviews link | `https://www.google.com/maps/search/?api=1&query=Chanda-Kabita%27s+Beauty+%26+Brows+Threading+2322+Lyell+Ave+Rochester` |

The rating and review count were taken from listings in October 2026; update them before launch.

## Homepage (index.html)

Four short sections, top to bottom. Keep scrolling to a minimum.

1. **Header (sticky).** Logo on the left. Right side: links "Prices" (to prices.html), "Reviews" (#reviews), "Hours & location" (#visit), then a primary pill button "(585) 417-0347". Background `--bg` at 94% opacity with an 8px backdrop blur and a 1px `--line` bottom border.
2. **Hero.** Two columns, text left, photo right; they stack on phones.
   - One row with the badge "Walk-ins welcome", then a map-pin icon and "2322 Lyell Ave · across from Wegmans" (15px, `--ink-soft`).
   - H1 on two lines: "Eyebrow threading" then "and waxing in Rochester." (second line in `--maroon`).
   - Three lines, each its own line: "Eyebrows from $14." / "Waxing, facials and henna too." / "Open Monday to Saturday."
   - Buttons: primary "Call to check the wait" (tel link to phone 1), secondary "See the price list" (prices.html).
   - Five gold stars and "**4.6** from 171 Google reviews", linking to #reviews.
   - Photo: `images/hero.jpg` in a 5:4 frame with an arched top (border-radius 160px 160px 24px 24px), `object-fit: cover`. Until the photo arrives, show a `--blush-2` box.
3. **Reviews (#reviews).** Full-width `--ink` band. Left: eyebrow "Google reviews" in gold, a huge "4.6" (`clamp(64px, 8vw, 104px)`), five gold stars, "From 171 reviews. 144 of them are five stars.", and a gold link "Read all reviews on Google". Right: the review carousel (see Reviews section).
4. **Visit (#visit).** H2 "Right across from Wegmans on Lyell." Then the address block (address, both phone numbers as links) beside an hours list (Mon to Fri, Saturday, Sunday). Buttons: "Get directions" (primary) and "Call us" (secondary). Right column: an embedded Google Map of 2322 Lyell Ave, 24px radius, at least 300px tall.
5. **Footer.** `--footer` background. Left: "© 2026 Chanda-Kabita's Beauty & Brows Threading". Right: "Threading · Waxing · Facials · Henna".
