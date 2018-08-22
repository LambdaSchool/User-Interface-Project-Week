const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav");
hamburger.addEventListener('click', swap);

function swap() {
    hamburger.classList.toggle('x-cancel');
    if (navBar.style.display === "flex") navBar.style.display = "none";
    else navBar.style.display = "flex";
}




