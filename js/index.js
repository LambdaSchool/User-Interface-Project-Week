
// Navigation
const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header.header');
let open = hamburger.addEventListener('click', () => {

    



    if (header.classList.contains('navigation-show')) {
        hamburger.classList.remove("is-active");
    TweenMax.to(header, .3, {height:'50px', onComplete: () => {
        header.classList.remove('navigation-show');
        navigation.classList.remove('navigation-show');
    }});

    TweenMax.fromTo(navigation, .2, {opacity: '1'}, {opacity: '0'});

    // hamburger.src='img/nav-hamburger.png';
    // hamburger.alt='Open Menu';

    } else {
        hamburger.classList.add("is-active");
        navigation.classList.add('navigation-show');
        header.classList.add('navigation-show');
    TweenMax.to(header, .3, {height:'100%', onComplete: () => {
    }});

    TweenMax.fromTo(navigation, .2, {opacity: '0'}, {opacity: '1'});
    // hamburger.src='img/nav-hamburger-close.png';
    // hamburger.alt='Close Menu';
    }
});
