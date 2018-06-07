//Main JS file

// Grab Navigation Parent
let nav = document.querySelector('.nav');

//Add a scroll event listener that adds a class if scroll.Y > 0
window.addEventListener('scroll',function(e){
  console.log(window.scrollY, 'y coord');
  if (window.scrollY > 0){
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
})


//Grab overlay and menu btn
let overlay = document.querySelector(".overlay");
let menuBtn = document.querySelector(".menu-btn img");
let overlayHome = document.querySelector(".overlay-home");
let overlayServ = document.querySelector(".overlay-serv");
let overlayCont = document.querySelector(".overlay-cont");


// On load minimize the menu overlay
window.onload = function(){
  TweenMax.to(overlay,.25,{display: "none", scale:0, opacity:0, ease:Bounce.easOut})
}

//Home Link
overlayHome.addEventListener('click', function(e) {
  e.stopPropagation;
  TweenMax.to(overlay,.25,{display: "none", scale:0, opacity:0, ease:Bounce.easOut, onComplete: function(){
    window.location.href = 'http://127.0.0.1:5500/index.html'
  }})
})

//Services Link
overlayServ.addEventListener('click', function(e) {
  e.stopPropagation;
  TweenMax.to(overlay,.25,{display: "none", scale:0, opacity:0, ease:Bounce.easOut, onComplete: function(){
    window.location.href = 'http://127.0.0.1:5500/services.html'
  }})
})

//Contact Link
overlayCont.addEventListener('click', function(e) {
  e.stopPropagation;
  TweenMax.to(overlay,.25,{display: "none", scale:0, opacity:0, ease:Bounce.easOut, onComplete: function(){
    window.location.href = 'http://127.0.0.1:5500/contact.html'
  }})
})


//Add a listener to toggle between the menu open and close state
menuBtn.addEventListener('click', function() {

  if (menuBtn.classList.contains('open')){
    TweenMax.to(overlay,.25,{display: "none", scale:0, opacity:0, ease:Bounce.easOut})
    menuBtn.src= "./img/nav-hamburger.png"
    menuBtn.classList.remove('open')  

  }else {
    TweenMax.to(overlay,.25,{display: "block", scale:1, opacity:.95, ease:Bounce.easOut})
    menuBtn.src= "./img/nav-hamburger-close.png"
    menuBtn.classList.add('open')
  }

});