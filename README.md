# Kevin Broome | Hero parallax + lightbox navigation

Latest four-page portfolio. This update builds on the full-width **Momento Mori** hero and alternating homepage showcases.

## What's new

- **Subtle parallax**: the existing hero image scrolls approximately 12% more slowly than the rest of the page. The browser only updates its transform once per animation frame while the hero is visible. No additional libraries, image requests or CSS `background-attachment: fixed`.
- **Lightbox browsing**: previous/next buttons on Home (3 featured works) and Artwork (all 13 works). Controls wrap between the first and last piece; Left/Right arrow keys work too. Escape closes the dialog; Tab stays inside and focus returns to the originating artwork when closed.
- **Reduced motion**: parallax is disabled for visitors who request reduced motion. The original homepage scroll reveal also respects that setting.
- Featured works are still manually chosen in HTML (not randomised or dynamically rotated).

## Deploy

1. Back up or commit your current work.
2. Replace `index.html`, `artwork.html`, `styles.css` and `script.js` in your existing repository. Other HTML pages are included for convenience but unchanged.
3. Merge the included `images/` directory; **keep your existing exhibition photos and favicon**, which are not included here.
4. Preview locally, commit and push. Cloudflare Pages deploys automatically. No build step.

## Adjusting the effect

In `script.js`, `travelled * 0.12` controls parallax intensity; reduce to `0.08` for even subtler motion. The 90px cap limits maximum movement. CSS `.hero-fullbleed.has-parallax .hero-background` provides image overscan so the effect doesn't reveal blank areas.
