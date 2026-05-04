// =========================
// Navbar Burger Toggle
// =========================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// =========================
// Smooth Scroll for Links
// =========================
const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active'); // close menu on mobile
    });
});

// =========================
// Active Link Highlight on Scroll
// =========================
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// =========================
// Animate Progress Bars on Scroll
// =========================
const skills = document.querySelectorAll('.progress-bar');

function animateSkills() {
    const skillsSection = document.querySelector('.skills');
    const sectionTop = skillsSection.offsetTop;
    const sectionHeight = skillsSection.clientHeight;
    if (window.pageYOffset >= sectionTop - sectionHeight / 1.5) {
        skills.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = width;
        });
    }
}

window.addEventListener('scroll', animateSkills);

// =========================
// Optional: Scroll Reveal Animation
// =========================
const srElements = document.querySelectorAll('.hero-content, .hero-image, .about-text, .projects-container, .contact-container');

function scrollReveal() {
    srElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            el.classList.add('reveal');
        }
    });
}

window.addEventListener('scroll', scrollReveal);
scrollReveal(); // initial call
