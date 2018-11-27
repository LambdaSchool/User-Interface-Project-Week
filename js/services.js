
const images = document.querySelectorAll('img');
console.log(images);

window.addEventListener('resize', function (event) {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth <= 500) {
    images[1].setAttribute('src', 'img/services/services-tab-mobile-pre-construction-img.png');
    images[2].setAttribute('src', 'img/services/services-tab-mobile-construction-img.png');
    images[3].setAttribute('src', 'img/services/services-tab-mobile-design-build-img.png');
    images[4].setAttribute('src', 'img/services/services-tab-mobile-sustainability-img.png');

  }
  else if (viewportWidth > 500) {
    images[1].setAttribute('src', 'img/services/services-tab-pre-construction-img.png');
    images[2].setAttribute('src', 'img/services/services-tab-construction-img.png');
    images[3].setAttribute('src', 'img/services/services-tab-design-build-img.png');
    images[4].setAttribute('src', 'img/services/services-tab-sustainability-img.png');
  }
})
