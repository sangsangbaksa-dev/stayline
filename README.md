# Stayline

A day counter for stay limits: Schengen 90/180, the 183-day tax rule, or a custom limit. Static site, no server, no account, no location access; data in localStorage. 5 languages (en, ko, ja, zh, es). Paid app: one payment (Stayline Pro) unlocks it on a device; without a licence key the counter stays locked.

### Features
- **Counters**: several counters (people or profiles), each with its own rule: Schengen 90/180, 180 in any 365 days, 183 per calendar year, or a custom rolling window or calendar-year limit. An overview lists all counters, and a group planner finds dates that work for everyone at once.
- **Trips**: add, edit and delete trips with undo; one tap to start or end a trip today; a per-trip note, an optional holiday label (display only, the count is unchanged) and an optional reminder date with its own note (listed for the next 30 days); paste trips from text (one per line); import trips from a calendar (`.ics`) or a CSV file into the current counter (duplicates are skipped, dates like 2026/6/1 are accepted, up to 500 rows); back up and restore everything as JSON (restore is sanitised).
- **Board**: days left, a 180-day strip, the last allowed day, room-again date, an optional safety margin for the leave-by date, and a permit or visa expiry with its own warning.
- **Planning**: a "what if I leave on date X" check (days left on that day if the current stay ends then), plan a trip (longest stay from an arrival date, or the earliest arrival for N days), arrival-date windows, a what-if itinerary (several future trips replayed against the rule, with the break day, a trim and an earliest start for each), and auto-fill of the earliest itinerary that fits.
- **Views**: a month calendar of stays and planned days, a week-by-week chart for the current year, a 6-month days-left forecast, a 12-month usage chart, a per-place breakdown of the last 365 days, travel statistics, and a rules comparison (the same trips under the common limits).
- **Warnings**: an urgent-items banner across all counters, a key-dates list (last allowed day, breach ahead, room again, permit end), a permits and visas list (90 days ahead), a 3-year overstay audit, and opt-in reminders when the app is opened (Notification API).
- **Export and sharing**: CSV of all trips, calendar (`.ics`) of trips and of key dates, a Markdown year report, a border-check sheet you can copy, a printable summary, and a read-only share link (the rule and trips in the URL fragment; notes are left out).
- **Cloud backup** (optional, Supabase): off unless `config.js` has a project URL and key. Licence fields stay on the device.
- **AI explanation** (optional, Pro): a plain-language summary of a counter's status with suggested next steps, written by Claude Haiku from your own API key. Without a key the same facts are shown as a rule-based summary.
- **Look**: a progress ring on the status card, a plain-language line under each rule explaining how the count is computed, light, dark or automatic theme, high-contrast support, and a layout that works at 360px wide.

- `config.js` the one place for checkout link, support email, price, site URL (read by the app and by the site generator)
- `app/` the app; `api/license.js` serverless licence check (Lemon Squeezy; env `LEMONSQUEEZY_PRODUCT_ID (optional)`; without them the app falls back to the offline placeholder key check)
- `scripts/build-site.js` generates the landing, privacy and terms pages for 5 languages, `sitemap.xml`, `robots.txt` from `scripts/landing-strings.json` and `scripts/site-i18n.js`. Run it after editing `config.js` or any string.
- `functions/api/license.js`, `_headers`, `scripts/build-pages.js`: Cloudflare Pages version of the same site (see `docs/cloudflare-pages.md`)
- `docs/` launch checklist, copy and post drafts, outreach plan, calculation verification
- Tests: `node --test test/core.test.js test/ai.test.js test/license.test.js` (unit, incl. Cloudflare function and dist build), `NODE_PATH=$(npm root -g) node test/e2e.js [shots-dir]` (Playwright)
- Rules: first and last day count as full days; overlapping trips count once; arithmetic on UTC day numbers.
- Placeholders to replace before charging: `config.js` (`checkoutUrl`, `supportEmail`, `price`, `siteUrl`), then rebuild the site. The offline licence check in `app/core.js` is a placeholder scheme (anyone can mint keys) and must be replaced with vendor-issued keys.
- Estimates only, not legal advice. Not verified against any official calculator.

## AI explanation (optional)

The **AI explanation** card on each counter restates the counter in plain language and suggests next steps (for example the leave-by date, the date room opens again, or a permit that is about to expire). The numbers are always worked out locally by `app/core.js`; the model only rewrites them.

- **Without a key**: `localAdvice()` in `app/core.js` writes the basic summary. It always shows and makes no network request.
- **With a key**: press "Explain with AI" and the browser calls `https://api.anthropic.com/v1/messages` directly with `claude-haiku-5-5`. The reply must be a JSON object; anything else falls back to the basic summary. An answer is hidden as soon as the counter changes.

### How to add a key

1. Create an API key in the Anthropic console (it starts with `sk-ant-`).
2. Open the **AI explanation** card, expand "Your API key", paste the key and press "Save key". "Remove key" deletes it.

The key is stored in this browser only, under the localStorage item `stayline-ai-key`. It is separate from the app's state, so it is never part of the cloud backup snapshot, and it is sent only to `api.anthropic.com`. The app's Content Security Policy allows that host in `connect-src` (`_headers` and `vercel.json`, which must match; `test/cf-pages.test.js` checks it).

### What is sent

Only the counter's rule (limit and window), the day counts, the window start, the last allowed day, the safety-margin date, the permit expiry, and the dates and place names of up to five upcoming trips. Trip notes, reminders, the counter name and the licence are not sent. Place names have line breaks removed and are capped at 40 characters. The reply is shown with `textContent`, never as HTML.

The estimate is not legal advice. Check the official rules and the border authority when a case is close.

## Why this niche
See `docs/why.md`.
