const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {    
    if (window.scrollY > 1400) {
        scrollUp.classList.add("scroll-active");
    } else {
        scrollUp.classList.remove("scroll-active");
    }
})