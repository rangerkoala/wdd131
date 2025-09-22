const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementById("nav-menu");

function toggleMenu() {
    navMenu.classList.toggle("active");
    hamburger.textContent = navMenu.classList.contains("active") ? "✖" : "☰";
    hamburger.setAttribute("aria-expanded", navMenu.classList.contains("active"));
}

hamburger.addEventListener("click", toggleMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('nav') && !e.target.closest('.hamburger') && navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;