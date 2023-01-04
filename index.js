const mobileNav = document.querySelector(".mobile-navigation ul");

document.querySelector(".mobile-navigation i").addEventListener("click", ()=> {
    mobileNav.classList.contains("show") ? mobileNav.classList.remove("show") : mobileNav.classList.add("show")
});

ScrollReveal().reveal('.main-row');