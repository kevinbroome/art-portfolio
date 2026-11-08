# November 2026 exhibition update

This package updates the **homepage** and **exhibitions archive** for the November 2026 Aberdare Art Society show at Cynon Valley Museum.

- The homepage now features the opening-night photo and **PACE**, replacing the September 2025 preview there.
- The exhibitions page starts with the November 2026 entry. It shows **all five** supplied images: the opening night, PACE, two pencil portraits, the cat painting, and the helmet artwork.
- All past exhibition listings, including September 2025, remain in the archive.
- No CSS, JavaScript, other text, or artwork entries were changed. The archive uses existing `gallery full-gallery`/`work-card` styles, plus an inline grid-column placement for the three-photo row.

## Install

1. Replace `index.html` and `exhibitions.html` in the site root with those from this package.
2. Copy the five JPGs from `images/exhibitions/` into the same existing directory on your site. **Do not delete your existing exhibition photos.**
3. Hard refresh locally and confirm both pages, then commit/deploy.

The archive's additional three photos use your existing responsive artwork-gallery classes. On smaller screens they will stack as the current stylesheet provides.
