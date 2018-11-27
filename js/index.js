const navButtons = document.querySelector('.menu-links');
const hamburger = document.querySelector('#hamburger');
const hamburgerOpen = document.querySelector('#hamburger-open');
const hamburgerClose = document.querySelector('#hamburger-close');

 hamburger.addEventListener('click', function() {
  navButtons.classList.toggle('hidden');
  hamburgerOpen.classList.toggle('hidden');
  hamburgerClose.classList.toggle('hidden');
})


hamburgerOpen.addEventListener('click', function() {
  TweenMax.to(".menu-links", 3, {rotationX:360, clearProps: 'all'})
})



