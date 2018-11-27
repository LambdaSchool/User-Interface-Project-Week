// JS goes here

class TabLink {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    this.item = document.querySelector(`.items .item[data-tab='${this.data}']`);

    this.tabItem = new TabItem(this.item);

    this.element.addEventListener('click', () => this.select());
  }

  // Selects the tab that was just clicked along with its linked Item
  select() {
    const tabs = document.querySelectorAll('.tab');

    Array.from(tabs).forEach(tab => tab.classList.remove('tab-selected'));

    this.element.classList.add('tab-selected');

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;

    this.data = this.element.dataset.tab;

    if(document.querySelector('.contact.items')) {
      this.carousel = new Carousel(document.querySelector(`.item[data-tab='${this.data}'] .contact-carousel`));
    }
  }

  // Selects the item of the tab that was clicked
  select() {
    const items = document.querySelectorAll('.item');

    Array.from(items).forEach(item => item.classList.remove('item-selected'));
    
    this.element.classList.add('item-selected');
    TweenMax.from(this.element, 0.3, {scale: 0.7});
  }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');
    
    this.images = this.element.querySelectorAll('img');

    this.index = 0;
    this.images[this.index].style.display = 'block';

    this.leftButton.addEventListener('click', () => this.move(-1));
    this.rightButton.addEventListener('click', () => this.move(1));
  }

  move(dir) {
    this.images[this.index].style.display = 'none';
    this.index += dir;
    if(this.index >= this.images.length) {
      this.index = 0;
    } else if(this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.images[this.index].style.display = 'block';
  }
}

// Assigns the elements on the page to Components defined above
const tabs = document.querySelectorAll('.tabs .tab')
                     .forEach(tab => new TabLink(tab));


let menu = document.querySelector('.menu img');
let nav = document.querySelector('.nav-links');

let serviceHeaderImg = document.querySelector('.service-header img');

// Change header image for Services page on resize
if(document.querySelector('.service-container')) {
  window.addEventListener('resize', function() {
    if(window.outerWidth < 513) {
      serviceHeaderImg.src = 'img/services/services-mobile-jumbotron.png';
    } else {
      serviceHeaderImg.src = 'img/services/services-jumbotron.png';
    }
  })
}

// Add Functionality to the Nav Menu
menu.addEventListener('click', function() {
  nav.classList.remove('nav-links-hidden');
  if(menu.src.includes("img/nav-hamburger.png")) {
    menu.src = "img/nav-hamburger-close.png";
    TweenMax.fromTo(nav, 0.5, {height: 0, display: "flex"}, {height: "100%"});
  } else {
    menu.src = "img/nav-hamburger.png"
    TweenMax.fromTo(nav, 0.5, {height: "100%"}, {height: 0, display: "none"});
  }
})