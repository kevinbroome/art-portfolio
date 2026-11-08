// Shared behaviour for all four pages.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Artwork lightbox. It navigates only the works featured on the current page:
// 3 selected works on Home, and all 13 on the Artwork page.
const lightbox = document.getElementById('art-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxMeta = document.getElementById('lightbox-meta');
const lightboxCounter = document.getElementById('lightbox-counter');
const lightboxTriggers = Array.from(document.querySelectorAll('.lightbox-trigger'));
let previousFocus = null;
let activeArtworkIndex = -1;

function displayArtwork(index) {
  if (!lightboxImage || !lightboxTitle || !lightboxMeta || !lightboxTriggers.length) return;
  activeArtworkIndex = (index + lightboxTriggers.length) % lightboxTriggers.length;
  const trigger = lightboxTriggers[activeArtworkIndex];
  const title = trigger.dataset.title || 'Artwork';
  lightboxImage.src = trigger.dataset.full || '';
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
  lightboxMeta.textContent = trigger.dataset.meta || '';
  if (lightboxCounter) {
    lightboxCounter.textContent = `${String(activeArtworkIndex + 1).padStart(2, '0')} / ${String(lightboxTriggers.length).padStart(2, '0')}`;
  }
}

function openLightbox(trigger) {
  if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxMeta) return;
  const index = lightboxTriggers.indexOf(trigger);
  if (index < 0) return;
  previousFocus = document.activeElement;
  displayArtwork(index);
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightbox.querySelector('.lightbox-close')?.focus();
}

function moveArtwork(direction) {
  if (!lightbox?.classList.contains('is-open')) return;
  displayArtwork(activeArtworkIndex + direction);
}

function closeLightbox() {
  if (!lightbox?.classList.contains('is-open')) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  lightboxImage.removeAttribute('src');
  lightboxImage.alt = '';
  activeArtworkIndex = -1;
  if (previousFocus instanceof HTMLElement) previousFocus.focus();
}

lightboxTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => openLightbox(trigger));
});
document.querySelectorAll('[data-lightbox-close]').forEach(button => {
  button.addEventListener('click', closeLightbox);
});
lightbox?.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => moveArtwork(-1));
lightbox?.querySelector('[data-lightbox-next]')?.addEventListener('click', () => moveArtwork(1));

document.addEventListener('keydown', event => {
  if (!lightbox?.classList.contains('is-open')) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closeLightbox();
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault();
    moveArtwork(-1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    moveArtwork(1);
  } else if (event.key === 'Tab') {
    // Keep keyboard focus within the open modal, including its new controls.
    const controls = Array.from(lightbox.querySelectorAll('button:not([disabled])'));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
});

// Homepage: animate alternating selected works once on entering the viewport.
// Without JS, IntersectionObserver, or with reduced motion, works stay visible.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const showcaseItems = document.querySelectorAll('.showcase-item');
if (showcaseItems.length && 'IntersectionObserver' in window && !prefersReducedMotion) {
  const artworkObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  // Establish the hidden/offscreen state first. Observing immediately can
  // toggle is-visible in the same rendering cycle and make the art snap.
  showcaseItems.forEach(item => item.classList.add('will-reveal'));
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      showcaseItems.forEach(item => artworkObserver.observe(item));
    });
  });
}

// Homepage: gentle parallax, with movement kept inside the 1.3x image overscan.
// Uses the existing hero image and requestAnimationFrame; no extra dependencies.
const hero = document.querySelector('.hero-fullbleed');
if (hero && !prefersReducedMotion && 'requestAnimationFrame' in window) {
  hero.classList.add('has-parallax');
  let framePending = false;

  function updateHeroParallax() {
    framePending = false;
    const rect = hero.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
    const travelled = Math.max(0, -rect.top);
    // A 1.3x image has about 15% spare height above/below the viewport.
    // Stay slightly inside that limit so no background edges are exposed.
    const offset = Math.min(travelled * 0.045, rect.height * 0.045);
    hero.style.setProperty('--hero-parallax-offset', `${offset.toFixed(1)}px`);
  }

  function requestHeroParallaxUpdate() {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(updateHeroParallax);
  }

  window.addEventListener('scroll', requestHeroParallaxUpdate, { passive: true });
  window.addEventListener('resize', requestHeroParallaxUpdate, { passive: true });
  requestHeroParallaxUpdate();
}
