let imgHeader = document.querySelector(".img-header");

// Get the computed height and convert it to a number
let height = parseInt(getComputedStyle(imgHeader).height, 10);


let nav = document.querySelector('.navbar');

// Add scroll event listener
window.addEventListener('scroll', () => {
    if (window.scrollY > height - (height * 0.6)) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});

// Button on scroll function that does not cut off div

function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = 125; // Adjust this value based on navbar height
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
    });
}

// Navbar collapses on click

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navbarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
});
