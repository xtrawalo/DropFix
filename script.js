const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

const scrollElements = document.querySelectorAll(".animate-left, .animate-top");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
    element.classList.add("visible");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);


window.addEventListener("scroll", handleScrollAnimation);
window.addEventListener("load", handleScrollAnimation);

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector(".faq-icon");

        // toggle answer visibility
        answer.style.display = answer.style.display === "block" ? "none" : "block";

        // rotate icon
        icon.classList.toggle("rotate");
    });
});