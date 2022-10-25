import {navbarLinks,navbarButtons,hamburger,header,bodyElement} from "./dom-loader";


function dropdownMenu() {
    console.log("Dropdown Menu");
    if (navbarLinks.style.display === "flex") {
        navbarLinks.style.display = "none";
        navbarButtons.style.display = "none";
        header.style.height = "60px";
        bodyElement.style.overflow = "auto";
    }
    else {
        navbarLinks.style.display = "flex";
        navbarButtons.style.display = "flex";
        header.style.height = "100vh";
        bodyElement.style.overflow = "hidden";
    }
}

hamburger.addEventListener("click", dropdownMenu);
