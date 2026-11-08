# Art site: hero & button refresh (8 November 2026)

Built from the **latest uploaded** `index(5).html`, `styles(7).css` and `script(4).js` files, preserving the recently updated first selected artwork.

## Changes

- **Hero zoom:** `Momento Mori` now stays at **1.3×** during parallax, and at rest or under `prefers-reduced-motion`. The old parallax-specific 1.1× override is removed.
- **Hero copy:** “I make the marks. You bring the ghosts.” replaces the longer subtitle.
- **Hero actions:** “Enter the work” links to `#work`; “Beyond the frame” links to `artwork.html`. Clear accessible labels retain their destinations for screen readers.
- **Button hover:** Replaces the vertical jump with a left-to-right warm colour sweep and soft glowing border. It also works via keyboard focus and respects reduced-motion settings. Applied consistently to buttons across all pages.
- **Latest selected artwork retained:** `It Isn't Lonely in Here` remains the first featured work. The lightbox's old 2023 mixed-media metadata is corrected to match its displayed “Acrylic · 2026” caption.

## Deployment

Replace `index.html`, `styles.css`, and `script.js` in your site root. Other HTML pages and the `images/` folder remain as they are; **images are not included in this ZIP**. No extra JavaScript libraries or build step needed.

Note: the parallax movement rate is unchanged, only its zoom level. Tweak the scroll multiplier in `script.js` later if you want stronger movement.
