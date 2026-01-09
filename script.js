// 1. Navbar & Scroll Effects
const navbar = document.getElementById('navbar');
const bttButton = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        bttButton.style.display = "block";
    } else {
        bttButton.style.display = "none";
    }
};

bttButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 2. Tabbed Menu Control
function openMenu(evt, category) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    const tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(category).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// 3. Reveal on Scroll Animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// 4. Form Handle
document.getElementById('resForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Namaste! We've received your booking request. We'll contact you soon.");
    e.target.reset();
});