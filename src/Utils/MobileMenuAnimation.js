const mobileMenuAnimation = (options = {}) => {
    try {
        // options for observer to consider
        const menuOptions = {
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
        const observer = new IntersectionObserver(showItem, menuOptions);

        // add observer to individual list items
        options.mobileListItem.forEach(mobileItem => {
            observer.observe(mobileItem);
        });

        options.hamBar.addEventListener("click", () => {
            options.mobileMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 66%, 0% 100%)";

            setTimeout(() => {
                options.mobileMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
            }, options.delay);

            options.menuHeader.style.transform = "translateX(0)";
            options.menuHeader.style.opacity = 1;
        });

        options.closeBtn.addEventListener("click", () => {
            options.mobileMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 66%, 0% 100%)";
            setTimeout(() => {
                options.mobileMenu.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
            }, options.delay);
            options.menuHeader.style.transform = "translateX(-1em)";
            options.menuHeader.style.opacity = 0;
        });


    } catch (err) {
        console.log(err);
    }
}

export default mobileMenuAnimation;