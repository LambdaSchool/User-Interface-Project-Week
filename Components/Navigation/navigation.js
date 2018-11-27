class Navigation {
  constructor(element) {
    this.element = element;
    this.button = this.element.querySelector('#menu-button');
    this.menu = this.element.querySelector('.links');
    this.bar = this.element.querySelector('.main-nav-bar');
    this.links = this.element.querySelectorAll('a');

    this.button.addEventListener('click', (event) => {
      this.menu.classList.toggle('links-open');
      if (this.menu.classList.contains('links-open')) {
        this.button.setAttribute('src', 'img/nav-hamburger-close.png');
        TweenMax.from(this.menu, 0.5, {height: 0,opacity: 0});
        // TweenMax.from(this.menu, 0.5, {opacity: 0, y:50});

      } else {
        this.button.setAttribute('src', 'img/nav-hamburger.png');
    }
  })


}
}
let navBar = document.querySelector('.site-navigation');
navBar = new Navigation(navBar);
console.log(navBar);
