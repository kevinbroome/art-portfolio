# Kevin Broome art site — homepage tweaks (8 November 2026)

Replace the existing `styles.css` and `script.js` in the site root with these two files. No HTML or artwork image changes are needed.

## Changes

- **Hero:** *Momento Mori* now uses `scale(1.1)` consistently, with or without JavaScript and when reduced motion is requested. The subtle parallax is capped to prevent the smaller image overscan from exposing background edges.
- **Selected works:** The artwork elements are scaled to **1.5×** on desktop. Each work is clipped at its own section's edges, including top and bottom. On narrower screens (760px and below), scale is **1.2×** to avoid cutting off too much of the work.
- **No row separators:** Removed the bottom borders from the selected-work sections, leaving the artwork metadata's small separator untouched.
- **Smoother reveals:** The hidden/offscreen state is established before the IntersectionObserver starts observing. Artwork frames reserve their size before lazy images finish loading, avoiding layout shifts that can make the animation snap. Reduced-motion visitors still see the art without reveal animations.

The larger artwork frame uses `object-fit: cover`, so the showcased version is intentionally cropped. The lightbox still displays the original full-size artwork (`object-fit: contain`).

## Deployment

1. Back up or commit your current site files.
2. Replace **`styles.css`** and **`script.js`** in the same folder as `index.html`.
3. Refresh locally (use a hard refresh if the browser caches the CSS), then commit and push as normal.

No extra libraries or build step. Existing image paths and the four HTML pages remain unchanged. No homepage text has been changed in this round.
