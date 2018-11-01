// JS goes here

// ===================================================================
// NAVIGATION AND BACKDROP
// ===================================================================

const hamburger = document.querySelector('img.header__nav-links__hamburger');
const homeNav = document.querySelector('#home');
const servicesNav = document.querySelector('#services');
const contactNav = document.querySelector('#contact');
const fadeIn = document.querySelector('#fade-in');

var t1 = new TimelineMax({paused: true});

t1.to(".menu", 1, {
    display: "flex",
    top: "auto",
    width: "100%",
    ease: Expo.easeInOut,
    delay: -.25,
    opacity: 1,
    position: "fixed"
});

t1.staggerFrom(".menu ul li", .5, {
    marginLeft: "-50rem",
    opacity: 0,
    ease:Expo.easeOut
  }, 0.3);

t1.reverse();

hamburger.addEventListener("click", function() {
    t1.reversed(!t1.reversed());
    if(hamburger.classList.contains('burger')) {
      hamburger.src = "img/nav-hamburger-close.png";
      hamburger.classList.remove('burger');
      hamburger.classList.add('closed');
    } else if (hamburger.classList.contains('closed')) {
      hamburger.src = "img/nav-hamburger.png";
      hamburger.classList.remove('closed');
      hamburger.classList.add('burger');
    }
});

home.addEventListener("click", function(e) {
  t1.reversed(!t1.reversed());
  setTimeout(() => {
    fadeIn.style.opacity = 1;
  }, 1500);
  e.preventDefault();
  setTimeout(() => {
    document.location.href = "index.html";
  }, 2000);

})

services.addEventListener("click", function(e) {
  t1.reversed(!t1.reversed());
  setTimeout(() => {
    fadeIn.style.opacity = 1;
  }, 1500);
  e.preventDefault();
  setTimeout(() => {
    document.location.href = "services.html";
  }, 2000);
})

contact.addEventListener("click", function(e) {
  t1.reversed(!t1.reversed());
  setTimeout(() => {
    fadeIn.style.opacity = 1;
  }, 1500);
  e.preventDefault();
  setTimeout(() => {
    document.location.href = "contact.html";
  }, 2000);
})

setTimeout(() => {
  fadeIn.style.opacity = "0";
}, 200);

// ===================================================================
// SERVICES TAB COMPONENT
// ===================================================================

class TabToggle {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.services__tabs-card[data-tab='${this.data}']`);
    this.tabCard = new TabCard(this.itemElement);
    this.element.addEventListener('click', () => this.select())
  }
  select(){
    const toggleTabs = document.querySelectorAll('.services__tabs-tab');
    toggleTabs.forEach( tab => tab.classList.remove('active-tab'));
    this.element.classList.add('active-tab');
    this.tabCard.select();
  }
}

class TabCard {
  constructor(element) {
    this.element = element;
  }
  select() {
    let tabCards = document.querySelectorAll('.services__tabs-card');
    tabCards.forEach(card => card.classList.remove('active-card'));
    this.element.classList.add('active-card');
    console.log(this.element.children[0]);
    this.element.children[0].style.transform = 'translateX(0)';
    this.element.children[0].style.opacity = '1';
  }
}

let tabs = document.querySelectorAll('.services__tabs-tab');
tabs = Array.from(tabs, (tab => new TabToggle(tab)));

// ========================================================================
//  SERVICES PAGE EFFECTS
// ========================================================================

const tabsContainer = document.querySelector('.services__tabs');
const activeTabComponentText = document.querySelector('.services__tabs-card.active-card > .services__tabs-card__text-content-container');
const activeTabComponentImg = document.querySelector('.services__tabs-card.active-card > .tab-card-img');

// if on the services page -- load the following conditional
if(document.baseURI === 'http://127.0.0.1:5500/services.html' || document.baseURI ===  'https://wcolts2000.github.io/User-Interface-Project-Week/services.html') {

  // set fadeins on tab component elements
  activeTabComponentImg.addEventListener('load', () => {
    setTimeout(() => {
      
      activeTabComponentImg.style.opacity = '1';
      activeTabComponentImg.style.transform = 'translateX(0)';
      activeTabComponentText.style.transform = 'translateX(0)';
      activeTabComponentText.style.opacity = '1';
    }, 500);
  })
  
  // fadein tab component div on load
  setTimeout(() => {
    tabsContainer.style.opacity = "1";
  }, 750);
}

// ========================================================================
//  SCROLLMAGIC EFFECTS
// ========================================================================

// Init controller
const controller = new ScrollMagic.Controller();

// home page main section images fading in and transitioning from sides
const myScene = new ScrollMagic.Scene({
  triggerElement: '.home__main__container',
  duration: "100%",
  offset: -100
})
.setClassToggle("#homeImage1", 'activeImg')
.addTo(controller);

const myScene2 = new ScrollMagic.Scene({
  triggerElement: '.home__main__card__btn',
  duration: "100%",
  offset: -100
})
.setClassToggle("#homeImage2", 'activeImg')
.addTo(controller);

// recent projects section having fade in and fade out on entering and leaving viewport
const myScene3 = new ScrollMagic.Scene({
  triggerElement: '.home__recent-projects__heading',
  duration: "1900",
})
.setClassToggle(".home__recent-projects__card", 'activeProject')
.addTo(controller);

// ===============playing around with pins to make a fixed parallax type effect on home page but not liking the results so on to next thing
// const fixedHero = new ScrollMagic.Scene({triggerElement: "#homeImage1", duration: 100, pushFollowers: false})
//     .setPin("#hero")
//     .addTo(controller);


// ========================================================================
//  CONTACT PAGE EFFECTS
// ========================================================================

const contactFormLeft = document.querySelector('.contact__form-left');
const contactFormRight = document.querySelector('.contact__form-right');

// if on the services page -- load the following conditional
if(document.baseURI === 'http://127.0.0.1:5500/contact.html' || document.baseURI ===  'https://wcolts2000.github.io/User-Interface-Project-Week/contact.html') {

  contactFormLeft.style.opacity = "1";
  contactFormLeft.style.transform = 'translateX(0)';
  contactFormRight.style.transform = 'translateX(0)';
  contactFormRight.style.opacity = '1';
}