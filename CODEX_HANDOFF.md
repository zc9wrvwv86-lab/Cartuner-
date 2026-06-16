# CarTuner Codex Handoff

## Repository
- Repo: `zc9wrvwv86-lab/Cartuner-`
- Default branch: `main`
- Site type: static HTML/CSS/JavaScript
- Main live path: GitHub Pages project site

## Important instruction for Codex
The user wants the CarTuner website, especially the visual roadmap page, to look like a premium neon car dashboard/cockpit HUD. Do not keep patching the current roadmap if it conflicts. It is allowed to replace, delete, or rewrite files as needed.

## Main goal
Build a car tuning planning website where the user chooses:
- brand / make
- model
- engine
- target horsepower

The app should auto-fill base horsepower from the selected car/engine, then open a visual roadmap. The roadmap should show a cockpit-style neon dashboard with roadmap stages, a car driving along the route, and dynamic car data.

## Desired roadmap visual style
The target visual is a full-screen car cockpit dashboard, not a normal webpage card layout.

Required visual elements:
- Top navigation: CarTuner, Planner, Upgrades, Roadmaps, Dyno, Garage, Community, My Garage
- Left car info card: brand, model, engine, base HP, target HP, car image
- Main dashboard/cockpit scene
- Neon city / road background
- Visible cockpit foreground at bottom: steering wheel feel, center display, dashboard edge
- Floating stage cards in fixed positions across the windshield/road
- Progress box in top right
- Detail panel floating bottom right
- Summary strip bottom center
- Small real car image driving along the route

## Current key files
- `index.html`: main planner page
- `styles.css`: main page styling
- `script.js`: planner logic, car data, base HP autofill, launch animation, opens roadmap
- `roadmap.html`: visual roadmap page
- `roadmap.css`: main roadmap styling
- `roadmap.js`: dynamic roadmap renderer
- `roadmap-final.css`: small override for real car marker image
- `roadmap-cockpit-final.css`: small cockpit height override
- `roadmap-stage-final.css`: active stage glow override

## Current problem
The roadmap still does not visually match the desired dashboard enough. Earlier attempts used many small overrides because some larger GitHub write attempts were blocked. The final desired fix should be cleaner:

1. Keep only the files needed for the final dashboard:
   - `roadmap.html`
   - `roadmap.css`
   - `roadmap.js`
   - `script.js`
2. Remove dependency on extra patch files if possible:
   - `roadmap-final.css`
   - `roadmap-cockpit-final.css`
   - `roadmap-stage-final.css`
   - older `roadmap-car.css`
   - older `roadmap-car.js`
   - older `roadmap-drive.js`
3. Put the final dashboard styling into one clean `roadmap.css`.
4. Put dynamic rendering and stage animation into one clean `roadmap.js`.
5. Put planner-to-roadmap car launch animation in `script.js`.

## Roadmap page desired structure
`roadmap.html` should be minimal and clean:

```html
<main class="dashboard">
  <header class="topbar">...</header>
  <aside id="carPanel" class="car-panel"></aside>
  <section id="roadmapApp" class="dashboard-main"></section>
</main>
<script src="roadmap.js?v=..." defer></script>
```

No legacy `roadmap-drive.js`. No layout style injection from JS.

## Roadmap JS requirements
`roadmap.js` should:
- read URL params: make, model, engine, currentHp, targetHp
- pick the matching car from car data
- render the left car panel
- render the main dashboard scene
- render stages in fixed positions
- render the car marker as an actual `<img>` using the selected car image
- move the car marker on stage click using `left/top` positions
- update progress and the detail panel on stage click
- use EV-specific stages for Tesla / EV models; do not show intake/exhaust for EVs

## Planner JS requirements
`script.js` should:
- keep car data in one place or match roadmap car data
- filter brand -> model -> engine correctly
- auto-fill base HP after valid selection
- let user edit target HP only
- update hero car image when selected car changes
- on submit, clone the current hero car image as a real DOM element and animate it away before redirecting to `roadmap.html?...`

## Important car-data requirements
Known cars currently expected:
- BMW M340i / B58 / 382 HP
- Toyota GR Supra / B58 / 382 HP
- Volkswagen Golf GTI / EA888 / 241 HP
- Audi RS3 / EA855 / 401 HP
- Nissan GT-R / VR38DETT / 565 HP
- Honda Civic Type R / K20C1 / 306 HP
- Ford Mustang GT / Coyote 5.0 / 460 HP
- Dodge Challenger Hellcat / Hellcat 6.2 / 717 HP
- Tesla Model 3 Performance / Dual Motor EV / about 450 HP

For Tesla / EV builds, do not show intake/exhaust stages. Use EV-safe stages like inspection, tires, brakes, thermal, validation.

## Image requirements
The Volkswagen Golf GTI must not show a Tesla image. Use a real Golf GTI image or stable fallback. Each preset should show the correct model or at least a plausible matching model image.

## Current user frustration
The user repeatedly said the roadmap still looks too much like a broken normal layout and not like the uploaded dashboard screenshot. They want the implementation to be decisive: replace/delete/rewrite as needed, but keep steps small and controllable.

## Recommended Codex implementation plan
1. Open `roadmap.html`, `roadmap.css`, `roadmap.js`, and `script.js`.
2. Remove legacy extra roadmap CSS/JS references from `roadmap.html`.
3. Replace `roadmap.css` with a full dashboard stylesheet:
   - dark body
   - grid layout with topbar, left panel, main scene
   - dashboard background using neon city image and overlays
   - fixed stage card positions
   - cockpit bottom foreground
   - detail panel bottom right
   - summary strip bottom center
   - car marker as real image
4. Replace `roadmap.js` with a clean renderer.
5. Ensure `script.js` submit animation uses a cloned car image and delays redirect briefly.
6. Remove or ignore old patch files after verifying nothing imports them.
7. Test locally by opening:
   - `index.html`
   - `roadmap.html?make=Volkswagen&model=Golf%20GTI&engine=EA888&currentHp=241&targetHp=350`
   - `roadmap.html?make=BMW&model=M340i&engine=B58&currentHp=382&targetHp=500`
8. Verify hard refresh/cache-busting by bumping query versions in HTML.

## Acceptance checklist
- Roadmap looks like a neon cockpit/dashboard, not a normal card page.
- Topbar and left car card match the desired layout.
- Cockpit foreground is visible at bottom.
- Stage cards are floating in fixed positions over the road/windshield.
- Detail panel floats bottom right.
- Summary strip floats bottom center.
- Small car image is visible on road and moves when clicking stages.
- Planner submit animates a real car element away before opening roadmap.
- GTI image is not Tesla.
- Tesla roadmap avoids intake/exhaust text.

## Note
If large file writes are blocked, split the work into smaller commits by replacing one file at a time or using smaller sections. Prefer clean replacement over many override files once possible.
