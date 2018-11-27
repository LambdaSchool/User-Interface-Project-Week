// JS goes here

const images = document.querySelectorAll('img');
console.log(images);

window.addEventListener('resize', function (event) {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  if (viewportWidth <= 500) {
    images[1].setAttribute('src', 'img/home/home-mobile-img-1.png');
    images[2].setAttribute('src', 'img/home/home-mobile-img-2.png');
  }
  else if (viewportWidth > 500) {
    images[1].setAttribute('src', 'img/home/home-img-1.png');
    images[2].setAttribute('src', 'img/home/home-img-2.png');
  }
})

const projectHeaders = document.querySelectorAll('.header-img h3');
console.log(projectHeaders);
projectHeaders.forEach((item, index) => {
  if(index % 2 === 0) {
  TweenMax.from(item, 2, {x:100,y:10, display: 'none', opacity:0})
} else TweenMax.from(item, 2, {x:-100,y:10, display: 'none', opacity:0})

})
