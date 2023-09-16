import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollImage from "./assets/images/libray.jpg";
import "./styles/style.css";

const libraryImage = document.getElementById("scroll-img")
const hamBar = document.querySelector(".ham-bar .fa-bars");
const mobileMenu = document.querySelector(".mobile-menu-container");
const closeBtn = document.querySelector(".menu-header .fa-x");
const menuHeader = document.querySelector(".menu-header");
const mobileListItem = [...document.querySelectorAll(".mobile-menu li")];
const delay = 120;

libraryImage.setAttribute("src", ScrollImage);

// options for observer to consider
const options = {
    rootMargin: "-10%",
    threshold: 0.0
}

// loop through all list items and add style based on that item visible or not.
const showItem = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = "translateY(0)";
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.transform = "translateY(1em)";
            entry.target.style.opacity = 0;
        }
    });
}

// observer instance observe if given element is visible or not and perform a particular operation considering the options
const observer = new IntersectionObserver(showItem, options);

// add observer to individual list items
mobileListItem.forEach(mobileItem => {
    observer.observe(mobileItem);
});

hamBar.addEventListener("click", () => {
    mobileMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 66%, 0% 100%)";

    setTimeout(() => {
        mobileMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
    }, delay);

    menuHeader.style.transform = "translateX(0)";
    menuHeader.style.opacity = 1;
});

closeBtn.addEventListener("click", () => {
    mobileMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 66%, 0% 100%)";
    setTimeout(() => {
        mobileMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
    }, delay);
    menuHeader.style.transform = "translateX(-1em)";
    menuHeader.style.opacity = 0;
});

// svg animation
const SVG = document.getElementById("clip");
SVG.style.transform = "matrix(1, 0, 0, 1, 400, 36)"

gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

tl.to(SVG, {
    transform: "matrix(5, 0, 0, 2, -6000, -36)"
}, "start")
.to(".image-holder img", {
    transform: "matrix(1, 0, 0, 1, 0, 0)"
}, "start")

ScrollTrigger.create({
    animation: tl,
    trigger: ".image-holder",
    toggleActions: "restart none none none",
    markers: false,
    start: "top top",
    end: "bottom 50%",
    scrub: 2,
    pin: ".image-reveal"
})