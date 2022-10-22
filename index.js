const navbarLinks = document.querySelectorAll(".header-center")[0];
const navbarButtons = document.querySelectorAll(".header-right")[0];
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header");
const bodyElement = document.getElementsByTagName("body")[0];
const circle = document.getElementsByClassName("circle");
const agentsCard = document.getElementsByClassName("agents-card");
const feedbackCard = document.getElementsByClassName("feedback-card");


const dropdownMenu = () => {
    console.log("Dropdown Menu")
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


// Carousel slider function
const slider = (count) => {
    console.log("hello")
    for (let index = 0; index < agentsCard.length; index++) {
        if (index === count) {
            circle[index].style.border = "1px solid black";
        }
        else {
            circle[index].style.border = "none";
        }
        if (window.innerWidth >= 300) {
            agentsCard[index].style.left = `-${count * 110}%`;
        }
        if (window.innerWidth >= 600 && window.innerWidth <= 800) {
            agentsCard[index].style.left = `-${count * 100}%`;
        }
        if (window.innerWidth >= 800 && window.innerWidth <= 1100) {
            agentsCard[index].style.left = `-${count * 100}%`;
        }
        if (window.innerWidth >= 800) {
            agentsCard[index].style.left = `-${count * 30}%`;
        }
        agentsCard[index].style.marginRight = `50px`;
    }
    if (window.innerWidth >= 300) {
        Array.from(agentsCard).forEach((element, index) => {
            element.style.transform = `translateX(-${index * 10}%)`
        });
    }
    if (window.innerWidth >= 800) {
        Array.from(agentsCard).forEach((element, index) => {
            element.style.transform = `translateX(-${index * 15}%)`
        });
    }

}




// Feedback Slider
let counter = 0;

const feedbackSlider = () => {
    Array.from(feedbackCard).forEach((element, i) => {
        element.style.transform = `translateX(-${counter * 100}%)`;
    })
}

const prev = () => {

    if (counter <= 0) {
        counter = feedbackCard.length - 1;
    }
    else {
        counter--;
    }
    feedbackSlider();
}
const next = () => {
    if (counter >= feedbackCard.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    feedbackSlider();
}



// On load styling 
const onLoadStyling = () => {
    circle[0].style.border = "1px solid black";
}

window.addEventListener("load", onLoadStyling)



// changing media queries
const changingMediaQuery = () => {
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

window.addEventListener("resize", changingMediaQuery)