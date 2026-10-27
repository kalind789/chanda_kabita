# Chanda-Kabita's Website: Build Spec

Build a two-page static website (index.html and prices.html) for Chanda-Kabita's Beauty & Brows Threading in Rochester, NY. Follow the design system, copy and prices in this file exactly. Use plain HTML, CSS and a little vanilla JS. No frameworks, no package manager, no build step.

## Project setup

The site must open by double-clicking `index.html` and deploy as-is to any static host (Netlify, GitHub Pages, Cloudflare Pages).

```
/
  index.html        Homepage
  prices.html       Price list
  css/styles.css    All styles and design tokens
  js/reviews.js     Review carousel buttons
  images/
    logo.svg        Thread mark (see Design system)
    hero.jpg        Owner's photo (to be supplied; page must still look fine without it)
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
| Map embed | `https://www.google.com/maps?q=2322+Lyell+Ave,+Rochester,+NY+14606&output=embed` |

The rating and review count were taken from listings in October 2026; update them before launch.

## Homepage (index.html)

A header, three short sections and a footer, top to bottom. Keep scrolling to a minimum.

1. **Header (sticky).** Logo on the left. Right side: links "Prices" (to prices.html), "Reviews" (#reviews), "Hours & location" (#visit), then a primary pill button "(585) 417-0347". Background `--bg` at 94% opacity with an 8px backdrop blur and a 1px `--line` bottom border.
2. **Hero.** Two columns, text left, photo right; they stack on phones.
    - One row with the badge "Walk-ins welcome", then a map-pin icon and "2322 Lyell Ave · across from Wegmans" (15px, `--ink-soft`).
    - H1 on two lines: "Eyebrow threading" then "and waxing in Rochester." (second line in `--maroon`).
    - Three lines, each its own line: "Eyebrows from $14." / "Waxing, facials and henna too." / "Open Monday to Saturday."
    - Buttons: primary "Call to check the wait" (tel link to phone 1), secondary "See the price list" (prices.html).
    - Five gold stars and "**4.6** from 171 Google reviews", linking to #reviews.
    - Photo: `images/hero.jpg` in a 5:4 frame with an arched top (border-radius 160px 160px 24px 24px), `object-fit: cover`. The frame has a `--blush-2` background so it looks fine before the photo exists.
3. **Reviews (#reviews).** Full-width `--ink` band. Left: eyebrow "Google reviews" in gold, a huge "4.6" (`clamp(64px, 8vw, 104px)`), five gold stars, "From 171 reviews. 144 of them are five stars.", and a gold link "Read all reviews on Google". Right: the review carousel (see Reviews carousel).
4. **Visit (#visit).** H2 "Right across from Wegmans on Lyell." Then the address block (address, both phone numbers as links) beside an hours list (Mon to Fri, Saturday, Sunday). Buttons: "Get directions" (primary) and "Call us" (secondary). Right column: the embedded Google Map, 24px radius, at least 320px tall.
5. **Footer.** `--footer` background. Left: "© 2026 Chanda-Kabita's Beauty & Brows Threading". Right: "Threading · Waxing · Facials · Henna".

## Reviews carousel

A horizontal row of review cards the visitor can swipe, scroll with a trackpad, or move with arrow buttons.

- Track: `display: flex; gap: 16px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth`. Each card is 300px wide (82% wide on phones) with `scroll-snap-align: start`.
- Card: `--bg` fill, `--ink` text, 20px radius, 28px padding, min-height 240px. Quote in Bricolage Grotesque 500 at 21px; caption "**Name** · Google review" at 14px in `--muted`. No star icons on cards (individual ratings vary).
- Under the track, right-aligned: a "Previous reviews" button (48px circle, white outline, left chevron) and a "Next reviews" button (48px circle, gold fill, right chevron). Each calls `scrollBy` by one card width plus the gap. Both have `aria-label`s. This logic lives in `js/reviews.js`.
- The track gets `tabindex="0"` and an `aria-label` so keyboard users can scroll it.

Reviews to show:

| Reviewer | Text |
| --- | --- |
| Henry P. | "i absolutely love they way they do my brows !!" |
| Caitlyn R. | "The lady is very professional and nice and welcoming." |
| Google reviewer | "So professional and wonderful ladies!" |

After these, add an HTML comment with a copy-ready card template so more reviews can be pasted in later. Do not invent review text.

## Price list (prices.html)

Same header and footer as the homepage, with a "Home" link added, "Prices" shown as the current page (maroon, 700, `aria-current="page"`), and the Reviews and Hours links pointing to `index.html#reviews` and `index.html#visit`.

- **Top.** Eyebrow "Price list", H1 "Prices", and the line "Walk-ins welcome. Gift certificates available." On the right, a blush box with the hours.
- **Price cards.** A responsive grid (`repeat(auto-fit, minmax(320px, 1fr))`) of four white cards, one per group below. Each card is an H2 (maroon, 26px) and a `<ul>`; each row is the service name, a dotted leader line, then the price in maroon 700.
- **Bottom band.** `--ink` background: "2322 Lyell Ave, across from Wegmans" plus buttons "Get directions" (gold fill, dark text), "Call (585) 417-0347" and "Call (585) 354-6387" (white outline).

Write prices as plain HTML (not JS-rendered) so search engines can read them.

| Group | Service | Price |
| --- | --- | --- |
| Threading | Eyebrows | $14 |
| Threading | Upper lip | $8 |
| Threading | Upper + lower lip | $10 |
| Threading | Chin | $8 |
| Threading | Forehead | $8 |
| Threading | Neck | $10 |
| Threading | Sideburn | $10 |
| Threading | Sideburn + cheeks | $15 |
| Threading | Brows + lip + chin | $30 |
| Threading | Full face | $35 |
| Waxing: legs & arms | Full legs | $60 |
| Waxing: legs & arms | Upper legs | $45 |
| Waxing: legs & arms | Lower legs | $30 |
| Waxing: legs & arms | Full arms | $40 |
| Waxing: legs & arms | Half arms | $20 |
| Waxing: legs & arms | Underarms | $20 |
| Waxing: body | Full body | $160 |
| Waxing: body | Brazilian | $45 |
| Waxing: body | Brazilian (hard wax) | $55 |
| Waxing: body | Bikini | $30 |
| Waxing: body | Full butt | $25 |
| Waxing: body | Butt cheek | $10 |
| Waxing: body | Full back | $40 |
| Waxing: body | Partial back | $20 |
| Waxing: body | Chest + full belly | $35 |
| Waxing: body | Full belly | $25 |
| Waxing: body | Chest | $15 |
| Waxing: body | Belly button | $15 |
| Specials | Full facial | $75 |
| Specials | Mini facial | $50 |
| Specials | Henna tattoo | $10+ |

## Responsive, accessibility and launch checklist

The site must work from 360px phones to 1440px desktops with no horizontal page scroll.

- [ ] Hero columns, Visit columns and price cards stack on phones; the header links wrap under the logo.
- [ ] Every button and link is at least 44px tall; phone numbers are `tel:` links.
- [ ] Real `<button>` and `<a>` elements only; icon-only buttons have `aria-label`; decorative SVGs have `aria-hidden="true"`.
- [ ] Text contrast is at least 4.5:1 (the token pairs above pass).
- [ ] `<html lang="en">`, one H1 per page, a unique `<title>` and meta description on each page.
- [ ] Add LocalBusiness (BeautySalon) JSON-LD with address, both phones and hours on index.html.
- [ ] Hero photo compressed under 300 KB, with descriptive `alt` text.
- [ ] Embedded map uses `loading="lazy"`.
- [ ] Confirm the Google rating is current before launch.
