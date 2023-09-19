import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scrollAnimation = (SVG) => {
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
    });
}

export default scrollAnimation;