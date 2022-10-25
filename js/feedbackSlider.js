import {feedbackCard,prevBtn,nextBtn} from "./dom-loader";


// Feedback Slider
let counter = 0;

function feedbackSlider() {
    Array.from(feedbackCard).forEach((element, i) => {
        element.style.transform = `translateX(-${counter * 100}%)`;
    });
}

function prev() {
    if (counter <= 0) {
        counter = feedbackCard.length - 1;
    }
    else {
        counter--;
    }
    feedbackSlider();
}
function next() {
    if (counter >= feedbackCard.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    feedbackSlider();
}


prevBtn.addEventListener("click",prev);
nextBtn.addEventListener("click",next);