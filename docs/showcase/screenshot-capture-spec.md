# Kenvio website screenshot capture specification

Status: approved for planning (Step 3). No captures taken under this spec yet.
Source environment: Kenvio Demo (https://apex-clarity-demo.base44.app), tenant
Northgate Retrofit & Mechanical Ltd (fictional). Every image on the website is a
capture of this live environment. No mock-ups, composites or edited UI.

## Desktop
- Browser: Chromium (Playwright), device scale factor 2.
- Viewport: 1440 x 900 CSS px. Capture is the full viewport, not full page,
  unless a view needs a taller frame (then 1440 x 1100, same crop rules).
- Browser chrome: none. The website adds its own neutral frame
  (`src/lib/screenshots.jsx`), so captures must not include tabs or URL bar.
- Crop: start at the top of the Kenvio app shell (header included). Exclude the
  signed-in account name and avatar menu (crop or mask the top-right 220 px
  of the header only if the name is visible; no other masking).
- Theme: light, unless the view is designed dark-first (Home is dark-first).
- Data: Northgate demo data as it is. No injected values, no renamed records.
  If a view is empty, do not capture it; raise it as a demo-data gap instead.
- Output: PNG master at 2880 x 1800, then WebP (quality 82, `cwebp -m 6`) and a
  PNG fallback downscaled to 1440 wide. Both go in `public/demo/` with the same
  basename. Target: WebP under 90 KB, PNG under 350 KB.
- Aspect ratio on the website: 16:10 for desktop cards. Never stretch.

## Mobile
- Viewport: 390 x 844 CSS px (iPhone 14 class), device scale factor 3.
- Browser chrome: none. The website frames it as a phone bezel.
- Views: Home at 390 px and the Field page (`/field`) at 390 px. These are
  the genuine responsive views of the web app, not a separate native app.
- Output: PNG master at 1170 x 2532, WebP (quality 82) and PNG fallback at
  390 wide. Target: WebP under 60 KB.

## Naming
`public/demo/<view>.webp` + `public/demo/<view>.png`; mobile adds `-mobile`.
Register every image in `src/lib/screenshots.jsx` with alt text and caption.

## Shot list (Step 3 target)
| Key | Route | Notes |
| --- | --- | --- |
| home | / | Needs the Home operational-health visual layer (see Step 3 report) |
| jobs | /jobs | Jobs hub with lifecycle stages visible |
| health-safety | /health-and-safety | Retain current capture only if the hub has not changed |
| rams | /method-statements or RAMS package view | Pick the view with approval state and acknowledgements visible |
| competence | /competence-requirements | Expiry position visible |
| commercial | /jobs/:id/commercial | Only after a budget is built from the accepted quote in the demo UI |
| lucy | Any record with Lucy assistance open | Compact, cropped to the assistance panel |
| home-mobile | / at 390 px | Mobile Home |
| field-mobile | /field at 390 px | Operative view |

## Current images to replace
- `public/demo/home.*`: replace (shows the retired Focus Rail Home, not the live Home).
- `public/demo/projects.*`: replace with the Jobs hub capture.
- `public/demo/organisations.*`: keep (still genuine and current).
- `public/demo/bulk-import.*`: keep.
- `public/demo/health-safety.*`: re-capture under this spec for consistency; content unchanged.
