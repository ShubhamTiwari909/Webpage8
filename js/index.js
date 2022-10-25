import {navbarLinks,bodyElement,circle} from "./dom-loader";
import "./feedbackSlider";
import "./dropDown";
import "./sliderCarousel";

// On load styling 
function onLoadStyling() {
    circle[0].style.border = "1px solid black";
}

// changing media queries
function changingMediaQuery() {
    if (window.innerWidth >= 800) {
        navbarLinks.style.display = "flex";
        navbarButtons.style.display = "flex";
        header.style.height = "70px";
    }
    else {
        navbarLinks.style.display = "none";
        navbarButtons.style.display = "none";
    }
    bodyElement.style.overflow = "auto";
}


window.addEventListener("load", onLoadStyling)

window.addEventListener("resize", changingMediaQuery)
