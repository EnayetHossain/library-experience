import hoverAnimation from "./Utils/HoverAnimation";
import mobileMenuAnimation from "./Utils/MobileMenuAnimation";
import scrollAnimation from "./Utils/ScrollAnimation";
import ScrollImage from "./assets/images/libray.jpg";
import "./styles/style.css";

const libraryImage = document.getElementById("scroll-img")
const hamBar = document.querySelector(".ham-bar .fa-bars");
const mobileMenu = document.querySelector(".mobile-menu-container");
const closeBtn = document.querySelector(".menu-header .fa-x");
const menuHeader = document.querySelector(".menu-header");
const mobileListItem = [...document.querySelectorAll(".mobile-menu li")];
const delay = 120;

const mobileMenuOptions = {
    hamBar,
    mobileMenu,
    closeBtn,
    menuHeader,
    mobileListItem,
    delay
}

mobileMenuAnimation(mobileMenuOptions)

// set the image in the shape of svg
libraryImage.setAttribute("src", ScrollImage);

// svg animation
const SVG = document.getElementById("clip");
scrollAnimation(SVG);

// on hover button animation
const storeBtn = document.querySelector(".btn");
const firstChild = document.querySelector(".btn span:first-child");
const lastChild = document.querySelector(".btn span:last-child");
const span = document.querySelector(".btn span");

const StoreBtnOptions = {
    hoverElement: storeBtn,
    direction: "top",
    changeElement: span,
    transition: 0.5,
    child: {
        firstChild,
        lastChild
    },
    colors: {
        defaultBGColor: "--yellow-color",
        defaultFGColor: "--secondary-color",
        changeBGColor: "--secondary-color",
        changeFGColor: "--primary-color"
    },
    changeBG: true,
    positions: {
        defaultFirstChildPos: 200,
        defaultLastChildPos: 50,
        destinationFirstChildPos: 50,
        destinationLastChildPos: -60
    }
};

hoverAnimation(StoreBtnOptions);