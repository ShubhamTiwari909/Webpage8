
import {circle,dots,agentsCard} from "./dom-loader";

// Carousel slider function
function slider(count) {
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
        agentsCard[index].style.marginRight = `60px`;
    }
    if (window.innerWidth >= 300) {
        Array.from(agentsCard).forEach((element, index) => {
            element.style.transform = `translateX(-${index * 10}%)`;
        });
    }
    if (window.innerWidth >= 800) {
        Array.from(agentsCard).forEach((element, index) => {
            element.style.transform = `translateX(-${index * 15}%)`;
        });
    }
}



for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click",function(){
        slider(i)
    })
}