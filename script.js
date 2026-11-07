// Shared behaviour for all four pages.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Artwork lightbox on the homepage and Artwork page.
const lightbox = document.getElementById('art-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxMeta = document.getElementById('lightbox-meta');
let previousFocus = null;

function openLightbox(trigger) {
  if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxMeta) return;
  previousFocus = document.activeElement;
  lightboxImage.src = trigger.dataset.full || '';
  lightboxImage.alt = trigger.dataset.title || 'Artwork';
  lightboxTitle.textContent = trigger.dataset.title || '';
  lightboxMeta.textContent = trigger.dataset.meta || '';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightbox.querySelector('.lightbox-close')?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightbox.classList.contains('is-open')) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxImage.removeAttribute('src');
  lightboxImage.alt = '';
  if (previousFocus instanceof HTMLElement) previousFocus.focus();
}

document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
  trigger.addEventListener('click', () => openLightbox(trigger));
});
document.querySelectorAll('[data-lightbox-close]').forEach(button => {
  button.addEventListener('click', closeLightbox);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (lightbox?.classList.contains('is-open')) closeLightbox();
  }
  if (event.key === 'Tab' && lightbox?.classList.contains('is-open')) {
    // The close button is the only interactive control in the dialog.
    event.preventDefault();
    lightbox.querySelector('.lightbox-close')?.focus();
  }
});


// Homepage: slide alternate artworks in once as they enter the viewport.
// With no JS, no IntersectionObserver, or reduced motion, the works stay visible.
const showcaseItems = document.querySelectorAll('.showcase-item');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (showcaseItems.length && 'IntersectionObserver' in window && !prefersReducedMotion) {
  const artworkObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target); // Animate only once, no repeated jumping.
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  showcaseItems.forEach(item => {
    item.classList.add('will-reveal');
    artworkObserver.observe(item);
  });
}
