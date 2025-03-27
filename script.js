// Select the header image
let imgHeader = document.querySelector(".img-header");

// Get the computed height and convert it to a number
let height = parseInt(getComputedStyle(imgHeader).height, 10);

// Select the navbar
let nav = document.querySelector('.navbar');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > height - (height * 0.6)) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});