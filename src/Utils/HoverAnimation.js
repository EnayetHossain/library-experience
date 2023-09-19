const hoverAnimation = (options = {}) => {
    // try to run the if there is any error executes the except block
    try {
        // listens for mouse over event and executes based on the event
        options.hoverElement.addEventListener("mouseover", () => {
            // add transition to the animation
            options.changeElement.style.transition = `${options.transition ? options.transition : 0.5}s cubic-bezier(0.6, 0.04, 0, 0.99) 0s`;
            // checks if the background colors needs to be changed
            if (options.changeBG) {
                // makes sure the app doesn't crash even if the user doesn't give the color value
                try {
                    // sets the background color and text color if the based on the options value
                    options.hoverElement.style.backgroundColor = `rgb(var(${options?.colors?.changeBGColor}))`;
                    options.hoverElement.style.color = `rgb(var(${options?.colors?.changeFGColor}))`;
                } catch (err) {
                    console.log(err)
                }
            }
            // change the position property based on the direction
            if (options.direction == "top") {
                options.child.firstChild.style.top = `${options?.positions?.destinationFirstChildPos}%`;
                options.child.lastChild.style.top = `${options?.positions.destinationLastChildPos}%`;
            }
        });

        // listens for mouse leave event and execute based on the event
        options.hoverElement.addEventListener("mouseleave", () => {
            options.changeElement.style.transition = "0s";
            if (options.changeBG) {
                // makes sure the app doesn't crash even if the user doesn't give the color value
                try {
                    // sets the background color and text color if the based on the options value
                    options.hoverElement.style.backgroundColor = `rgb(var(${options?.colors?.defaultBGColor}))`;
                    options.hoverElement.style.color = `rgb(var(${options?.colors?.defaultFGColor}))`;
                } catch (err) {
                    console.log(err)
                }
            }

            // resets the position property based on the direction
            if (options.direction == "top") {
                options.child.firstChild.style.top = `${options?.positions?.defaultFirstChildPos}%`;
                options.child.lastChild.style.top = `${options?.positions?.defaultLastChildPos}%`;
            }
        });
    } catch (err) { // prevents the application from crashing in case of any error
        console.log(err)
    }
}

export default hoverAnimation;