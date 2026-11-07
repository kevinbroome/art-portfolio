# Kevin Broome | Full-width hero + animated selected works

This is the latest full four-page static art portfolio, based on the 13-work gallery version.

## Changes

- Homepage hero is now full width, with **Momento Mori** behind the heading and a dark gradient for contrast. The hero image uses the existing `images/momento_mori.jpg` file.
- **All explicit CSS border radii** are now 5px, including the logo mark, buttons, work cards, exhibition cards and lightbox.
- The homepage's three selected works have their own large rows, alternating left and right, with separate side captions. Their images keep their proportions rather than being cropped.
- `script.js` uses `IntersectionObserver` to slide the artworks in from alternating sides once when scrolled into view. They stop in their off-centre layout positions. The titles fade into place.
- Accessibility: keyboard lightbox, working without JS for the homepage layout, and reduced-motion support.
- Other pages, 13-work gallery, navigation and contact information remain unchanged.

## Deploying to existing Cloudflare Pages project

1. Commit your existing work, or back it up first.
2. Copy `index.html`, `styles.css` and `script.js` to your repository root. The ZIP also includes the other pages so it can be used as a complete snapshot.
3. **Merge**, do not delete, the supplied `images/` directory. Your existing `images/exhibitions/` photos and favicon are not in the ZIP and must be preserved.
4. Preview locally with Live Server, then commit and push. No separate repository, build step or Cloudflare settings are needed.

Animation tweaks live in `styles.css` (`.showcase-item.will-reveal...`) and the observer options at the end of `script.js`. To change speed, adjust `transition` durations; to change when it starts, change the observer's `threshold` or `rootMargin`.
