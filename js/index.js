

//Navbar
let image_tracker = 'f';
function change() {
    var image = document.querySelector('.burger');
    var nav = document.querySelector('nav');
    var menu = document.querySelector('.menu');
    if (image_tracker == 'f') {
        image.src = 'img/nav-hamburger-close.png';
        image_tracker = 't';
        TweenMax.to('nav', 1, {height: '100%'});
        TweenMax.staggerFrom('.menu a', 1, {opacity:0}, .1);
        nav.style.opacity = '0.9';
        menu.style.display = 'block';
    }
    else {
        image.src = 'img/nav-hamburger.png';
        image_tracker = 'f';
        TweenMax.to('nav', 0.5, {height: 35});
        menu.style.display = 'none';
    }
}









// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => new TabLink(link));
