# Kevin Broome art portfolio: updated Artwork gallery

This update builds on the existing four-page static site and the previous layout fixes.

## What's new

- Artwork page expanded from 5 to **13 unique works**.
- The 5 original works remain, without duplicate entries.
- All 13 artwork photographs are supplied in `images/` with the **exact filenames referenced by the HTML**. The photo of *Momento Mori* was already on the homepage; it's now included in the full gallery too.
- Artwork page displays each work at its natural aspect ratio in responsive columns instead of cropping the images into fixed-height boxes. Click any artwork to see it in the original lightbox.
- The homepage, About and Exhibitions pages are otherwise unchanged, including the mobile navigation and spacing fixes.

## Install into your existing Cloudflare Pages repository

1. Back up or commit your current site.
2. Replace the six website files (`index.html`, `artwork.html`, `about.html`, `exhibitions.html`, `styles.css`, `script.js`) with the matching files from this package.
3. Merge the supplied **`images/`** folder into the existing `images/` folder. **Do not delete your existing folder**: it contains your favicon and exhibition images, which aren't in this package.
4. Check `artwork.html` with Live Server. Push to GitHub to deploy through your existing Cloudflare Pages project.

The photos are provided at the uploaded resolution (no artwork modifications or generative edits).
The uploaded copies had suffixes such as `(1)` and `(3)`; copies in this package use the clean filenames referenced in HTML.

## Gallery labels

The five pre-existing pieces retain their earlier metadata. For eight newly added gallery entries, labels use general descriptions only; I have **not invented dates, exact media or dimensions**. These can be updated when you have that information.

## Notes

The existing `images/exhibitions/` directory and `images/favicon_kb.png` are still needed from your current repository. No extra dependencies, build process or GitHub repository needed.
