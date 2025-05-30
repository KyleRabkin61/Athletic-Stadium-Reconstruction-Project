// Used vue for loop to create all timeline events
const vue_app = Vue.createApp({
    data() {
        return {
            timeline: [],
            testimonial: []
        };
    },
    created() {
        Promise.all([
            fetch('timeline.json').then(response => response.json()),
            fetch('testimonial.json').then(response => response.json())
        ])
        .then(([timelineData, testimonialData]) => {
            this.timeline = timelineData;
            this.testimonial = testimonialData;
        })
        .catch(error => console.error("Error fetching data:", error));
    }
});

vue_app.mount("#vue_app");

let imgHeader = document.querySelector(".image-header");
let height = parseInt(getComputedStyle(imgHeader).height, 10);

let nav = document.querySelector(".navbar");
let navHeight = parseInt(getComputedStyle(nav).height, 10);

// Add scroll event listener
window.addEventListener("scroll", () => {
    if (window.scrollY > height - (height * 0.8)) {
        nav.classList.add("navbar-scrolled");
    } else {
        nav.classList.remove("navbar-scrolled");
    }
    // Update navbar height dynamically
    if (nav) {
        navHeight = parseInt(getComputedStyle(nav).height, 10);
    }
});

// Button on scroll function that does not cut off div
function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = navHeight;
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
                if (typeof bootstrap !== "undefined") {
                    new bootstrap.Collapse(navbarCollapse, {
                        toggle: true
                    });
                }
            }
        });
    });
});

// Sliding animation with IntersectionObserver fallback
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
} else {
    // Fallback for older browsers
    document.querySelectorAll(".hidden").forEach((el) => el.classList.add("show"));
}

//  Back to top button

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const football = document.querySelector('.football');

const screenWidth = window.innerWidth;
const startX = -screenWidth * 0.9;
const endX = screenWidth * 1;
const baseY = 600;
const arcHeight = 700;
const peakY = baseY - arcHeight;

// Calculate duration: e.g., 1 second per 500px of width, with a minimum duration
const duration = Math.max(2, screenWidth / 700);

gsap.fromTo(football, {
  x: startX,
  y: baseY
}, {
  x: endX,
  duration: duration,
  delay: 1,
  rotate: 90,
  ease: "none",
  onUpdate: function () {
    const progress = this.progress();
    const parabolaY = baseY - 4 * (baseY - peakY) * progress * (1 - progress);
    gsap.set(football, { y: parabolaY });
  }
});


gsap.fromTo(['.header', '.explore'], {
    opacity: 0
}, {
    opacity: 1,
    duration: 2,
    delay: 3
})

gsap.fromTo('.navbar', {
    y: -150
}, {
    y: 0,
    duration: 1,
    delay: 3,
    ease: 'power2.Out'
})

gsap.from('.the-image', {
    filter: "brightness(1)",
    duration: 1.5,
    delay: 3
})

$('document').ready(() => {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
            $('#myBtn').fadeIn(200)
        } else {
            $('#myBtn').fadeOut(200)
        }
    }
})