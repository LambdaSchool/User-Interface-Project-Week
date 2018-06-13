// JS goes here
// class Dropdown {
//   constructor(element) {
//     this.element = element;
//     this.button = this.element.querySelector('.hamburger-img');
//     this.content = this.element.querySelector('.ham-content');
//     this.button.addEventListener('click', () => {
//       this.toggleContent();
//     });
//   }
//   toggleContent() {
//     this.content.classList.toggle('ham-hidden');
//   }
// }

// document.querySelector('.hamburger-img').addEventListener('click', () => {
//   console.log('click');
// });

// let dropdowns = document.querySelectorAll('.hamburger'); //gets all elements with classname hamburger
// dropdowns = Array.from(dropdowns).map((hamburger) => new Dropdown(hamburger));
// new dropdown is each element(hamburger) from line 3

let open = document.querySelector('.hamburger-img');
let hamburger = document.querySelector('.hamburger-open');
let closed = document.querySelector('.closed');

open.addEventListener('click', () => {
  hamburger.style.display = 'block';
});

closed.addEventListener('click', () => {
  hamburger.style.display = 'none';
});
