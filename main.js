const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
    ...ScrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header-content h2", {
    ...ScrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header-content h1", {
    ...ScrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".order-card", {
    ...ScrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".event-content", {
    duration: 1000,
});