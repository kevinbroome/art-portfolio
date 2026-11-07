# Kevin Broome art portfolio: multi-page version

This is a drop-in expansion of the existing static Cloudflare Pages website.

## Pages

- `index.html`: homepage with featured artwork, one featured exhibition, an about teaser and the existing contact section.
- `artwork.html`: full gallery with all five artwork entries from the original homepage, including their lightbox.
- `exhibitions.html`: all six exhibitions from the original homepage.
- `about.html`: the artist's statement and full Aberdare Art Society information.
- `styles.css`: your original stylesheet plus page layouts and a mobile navigation menu.
- `script.js`: shared copyright year, accessible mobile navigation and artwork lightbox. No homepage animations or rotating content yet.

## Deployment (existing GitHub repo and Cloudflare Pages project)

1. Back up or commit your current `index.html` and `styles.css`.
2. Copy these six files into the **root of your current repository**, replacing `index.html` and `styles.css` and adding the others.
3. **Keep your existing `images/` folder exactly as it is.** Images weren't supplied, so none are included in this download. Existing image paths are preserved.
4. Preview with Live Server or another local HTTP server. Test the menu at mobile widths and artwork lightboxes.
5. Push the files to the same branch as your current Cloudflare Pages deployment. You don't need another repository or another Pages project.

Pages are `index.html`, `artwork.html`, `exhibitions.html`, `about.html`. Cloudflare Pages can serve clean paths like `/artwork` as well as the `.html` files.

### Existing assets referenced

- `images/favicon_kb.png`
- `images/momento_mori.jpg`
- `images/every_single_thought_at_once.jpg`
- `images/equals_true.jpg`
- `images/exploding_head_syndrome.jpg`
- `images/persephone.jpg`
- `images/raven_with_berry.jpg`
- `images/exhibitions/CVM_2025.jpg`
- `images/exhibitions/CVM_2025_2.jpg`
- `images/exhibitions/Advert_CVM_2024.jpg`
- `images/exhibitions/Advert_CVM_2023.jpg`
- `images/exhibitions/Install_CVM_2023.jpg`
- `images/exhibitions/gwanwyn_2023.jpg`
- `images/exhibitions/Advert_CVM_2022.jpg`
- `images/exhibitions/DVP_2017.jpg`

Your HTML/CSS only included these five artwork entries and six exhibitions. I have deliberately not invented new artwork, exhibition dates or image files. Add new pieces directly to the artwork gallery when ready.
