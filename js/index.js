// Animations
const slideImages = document.querySelectorAll('.slide');
const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', checkSlide);

var tl = new TimelineLite();
tl.from(".slogan1", 1, {opacity: 0})
  .from(".slogan2", 1, {opacity: 0})
  .from(".slogan3", 1, {opacity: 0})

function checkSlide() {
  // Image Slide Event
  slideImages.forEach(slideImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
    const halfShown = slideInAt > slideImage.offsetTop;
    const imageBottom = slideImage.offsetTop  + slideImage.height;
    const notPassed = window.scrollY < imageBottom;
    const hasSlideClass = slideImage.classList.contains('slide');
  
    const slide = () => {
      slideImage.classList.remove('slide');

      if (slideImage.classList.contains('slideFromRight')) {
        TweenMax.fromTo('.slideFromRight', 1, {x: 50, opacity: 0}, {x: 0, opacity: 1});
      } 
      else if (slideImage.classList.contains('slideFromLeft')) {
        TweenMax.fromTo('.slideFromLeft', 1, {x: -50, opacity: 0}, {x: 0, opacity: 1});
      }
    }
    
    if (halfShown && notPassed && hasSlideClass) {
      slide();
    } 
  })

  // Project Skew Event
  projects.forEach(project => {
    const view = window.scrollY + window.innerHeight;
    const hasRotateClass = project.classList.contains('rotate');

    const rotate = () => {
      project.classList.remove('rotate');

      if (project.classList.contains('skewFromRight')) {
        TweenMax.fromTo('.skewFromRight', 3, {skewX:-3, opacity: 0}, {skewX:0, opacity: 1})
      }
      else if (project.classList.contains('skewFromLeft')) {
        TweenMax.fromTo('.skewFromLeft', 3, {skewX:3, opacity: 0}, {skewX:0, opacity: 1})
      }
    }

    if (view > project.offsetTop && hasRotateClass) {
      rotate();
    } 
  })
}

// Navigation Bar
const modalNavTween = TweenMax.from('.navigation', 0.5, {y: -200, skewY: 100});
const modalModalTween = TweenMax.from('.modal', 0.5, {y: 200});
const navLinkTween = TweenMax.from('.navLink', 0.5, {scale: 0.1, y: -400, ease: Back.easeOut});
const navLinkATween = TweenMax.from('.navLink a', 1, {y:500, ease: Back.easeOut, rotationX: 540});

document.querySelector('.hamburger').addEventListener('click', () => openNav());
document.querySelector('.cross').addEventListener('click', () => closeNav());

function openNav() {
  document.querySelector('.hamburger').classList.add('hidden');
  document.querySelector('.cross').classList.remove('hidden');
  document.querySelector('.navigation').classList.add('modal');
  document.querySelector('.navLinks').classList.remove('hidden');
  document.querySelector('.navigation').style.justifyContent = 'center';
  modalModalTween.restart();
  navLinkTween.restart();
  navLinkATween.restart();
}

function closeNav() {
  // document.querySelector('.hamburger').classList.remove('hidden');
  // document.querySelector('.cross').classList.add('hidden');
  // document.querySelector('.navLinks').classList.add('hidden');
  // document.querySelector('.navigation').style.justifyContent = 'space-between';
  // document.querySelector('.navigation').classList.remove('modal');

  navLinkTween.reverse();
  navLinkATween.reverse(); 
  TweenMax.set('.navigation', {className: "-=modal", delay: 0.6});
  TweenMax.set('.hamburger', {className: "-=hidden", delay: 0.6});
  TweenMax.set('.cross, .navLinks', {className: "+=hidden", delay: 0.6});
  TweenMax.set('.navigation', {justifyContent: 'space-between', delay: 0.6});
}

// Services Tabs
class TabLink {
  constructor(element) {
    this.element = element;
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.itemLink = document.querySelector(`.tabs-link[data-tab='${this.data}']`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => { this.select() });
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));

    // // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');
    
    // // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    // Select all items elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    Array.from(items).forEach(item => item.classList.remove('tabs-item-selected'));

    // Add a class named "tabs-item-selected" to this element 
    this.element.classList.add('tabs-item-selected');

    var tl = new TimelineLite();
    tl.from(".tabs-item-title", 1, {y: -50, rotationX: 180, opacity: 0})
      .from(".tabs-item-description p:nth-child(1)", 1, {x: -50, rotationY: 180, opacity: 0}, "-=1")
      .from(".tabs-item-description p:nth-child(2)", 1, {y: 50, opacity: 0}, "-=0.25")
      .from(".tabs-item-photo", 2, {opacity: 0, rotationX: 90}, "-=2")
  }
}

// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => new TabLink(link));
