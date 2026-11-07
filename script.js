// Shared behaviour. Keep page-specific animation and dynamic homepage ideas for later.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('primary-navigation');

function closeMenu() {
  if (!menuToggle || !navLinks) return;
  navLinks.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation menu');
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!menuToggle.parentElement.contains(event.target)) closeMenu();
  });
}

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
    else closeMenu();
  }
  if (event.key === 'Tab' && lightbox?.classList.contains('is-open')) {
    // The close button is the only interactive control in the dialog.
    event.preventDefault();
    lightbox.querySelector('.lightbox-close')?.focus();
  }
});
