const overlay = document.querySelector('.overlay');
const openOverlayIcon = document.querySelector('.overlay-open-icon');
const closeOverlayIcon = document.querySelector('.overlay-close-icon');

function openOverlay() {
  overlay.style.height = '100%';
}

function closeOverlay() {
  overlay.style.height = '0%';
}

openOverlayIcon.style.cursor = 'pointer';
openOverlayIcon.addEventListener('click', () => openOverlay());

closeOverlayIcon.style.cursor = 'pointer';
closeOverlayIcon.addEventListener('click', () => closeOverlay());
