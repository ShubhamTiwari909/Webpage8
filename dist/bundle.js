/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$u": () => (/* binding */ article_3Src),
/* harmony export */   "Au": () => (/* binding */ san_diegoSrc),
/* harmony export */   "By": () => (/* binding */ property_2Src),
/* harmony export */   "Bz": () => (/* binding */ agent_profileSrc),
/* harmony export */   "C6": () => (/* binding */ article_2Src),
/* harmony export */   "CX": () => (/* binding */ hero_bgSrc),
/* harmony export */   "Cm": () => (/* binding */ area_iconSrc),
/* harmony export */   "D": () => (/* binding */ typeDropdown),
/* harmony export */   "EM": () => (/* binding */ agentsCard),
/* harmony export */   "Ez": () => (/* binding */ dots),
/* harmony export */   "Fs": () => (/* binding */ header),
/* harmony export */   "HT": () => (/* binding */ property_1Src),
/* harmony export */   "H_": () => (/* binding */ bedroom_greySrc),
/* harmony export */   "IX": () => (/* binding */ agent_image_3Src),
/* harmony export */   "Jq": () => (/* binding */ invalid_iconSrc),
/* harmony export */   "M0": () => (/* binding */ hamburger),
/* harmony export */   "MF": () => (/* binding */ garageSrc),
/* harmony export */   "Ms": () => (/* binding */ nextBtn),
/* harmony export */   "Ne": () => (/* binding */ navbarButtons),
/* harmony export */   "Nq": () => (/* binding */ agency_image_3Src),
/* harmony export */   "OU": () => (/* binding */ garage_greySrc),
/* harmony export */   "Pq": () => (/* binding */ logoSrc),
/* harmony export */   "SB": () => (/* binding */ property_5Src),
/* harmony export */   "TL": () => (/* binding */ article_1Src),
/* harmony export */   "Te": () => (/* binding */ typeDropdownBtn),
/* harmony export */   "Tg": () => (/* binding */ san_franciscoSrc),
/* harmony export */   "Tw": () => (/* binding */ property_6Src),
/* harmony export */   "UH": () => (/* binding */ testimonial_bgSrc),
/* harmony export */   "X": () => (/* binding */ statusDropdown),
/* harmony export */   "Xw": () => (/* binding */ circle),
/* harmony export */   "Zt": () => (/* binding */ hot_dealSrc),
/* harmony export */   "cU": () => (/* binding */ seattleSrc),
/* harmony export */   "d_": () => (/* binding */ flagSrc),
/* harmony export */   "eT": () => (/* binding */ verified_iconSrc),
/* harmony export */   "f0": () => (/* binding */ agency_image_2Src),
/* harmony export */   "h2": () => (/* binding */ bodyElement),
/* harmony export */   "hk": () => (/* binding */ footer_logoSrc),
/* harmony export */   "iI": () => (/* binding */ property_4Src),
/* harmony export */   "j7": () => (/* binding */ property_3Src),
/* harmony export */   "ko": () => (/* binding */ bedroomSrc),
/* harmony export */   "lF": () => (/* binding */ agency_image_1Src),
/* harmony export */   "lu": () => (/* binding */ agent_image_1Src),
/* harmony export */   "m1": () => (/* binding */ bathroom_greySrc),
/* harmony export */   "on": () => (/* binding */ prevBtn),
/* harmony export */   "ow": () => (/* binding */ navbarLinks),
/* harmony export */   "pV": () => (/* binding */ statusDropdownBtn),
/* harmony export */   "r$": () => (/* binding */ los_angelesSrc),
/* harmony export */   "sf": () => (/* binding */ bathroomSrc),
/* harmony export */   "up": () => (/* binding */ feedbackCard),
/* harmony export */   "vj": () => (/* binding */ area_icon_greySrc),
/* harmony export */   "x2": () => (/* binding */ agent_image_2Src)
/* harmony export */ });
const navbarLinks = document.querySelectorAll(".header-center")[0];
const navbarButtons = document.querySelectorAll(".header-right")[0];
const hamburger = document.getElementById("hamburger");
const header = document.getElementById("header");
const bodyElement = document.getElementsByTagName("body")[0];
const circle = document.getElementsByClassName("circle");
const dots = document.getElementsByClassName("dot");
const agentsCard = document.getElementsByClassName("agents-card");
const feedbackCard = document.getElementsByClassName("feedback-card");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const typeDropdown = document.getElementById("type-content");
const typeDropdownBtn = document.getElementById("type-input");
const statusDropdown = document.getElementById("status-content");
const statusDropdownBtn = document.getElementById("status-input");

// img tags import
const logoSrc = document.getElementById("logo");
const agency_image_1Src = document.getElementById("agency-image-1");
const agency_image_2Src = document.getElementById("agency-image-2");
const agency_image_3Src = document.getElementById("agency-image-3");
const agent_image_1Src = document.getElementsByClassName("agent-image-1");
const agent_image_2Src = document.getElementsByClassName("agent-image-2");
const agent_image_3Src = document.getElementsByClassName("agent-image-3");
const agent_profileSrc = document.getElementsByClassName("agent-profile");
const area_iconSrc = document.getElementsByClassName("area-icon")
const area_icon_greySrc = document.getElementsByClassName("area-icon-grey");
const article_1Src = document.getElementsByClassName("article-1");
const article_2Src = document.getElementsByClassName("article-2");
const article_3Src = document.getElementsByClassName("article-3");
const bedroomSrc = document.getElementsByClassName("bedroom-icon");
const bedroom_greySrc = document.getElementsByClassName("bedroom-icon-grey");
const bathroomSrc = document.getElementsByClassName("bathroom-icon");
const bathroom_greySrc = document.getElementsByClassName("bathroom-icon-grey");
const garageSrc = document.getElementsByClassName("garage-icon");
const garage_greySrc = document.getElementsByClassName("garage-icon-grey");
const flagSrc = document.getElementsByClassName("flag")
const footer_logoSrc = document.getElementsByClassName("footer-logo");
const hero_bgSrc = document.getElementsByClassName("hero");
const hot_dealSrc = document.getElementsByClassName("hot-deal");
const invalid_iconSrc = document.getElementsByClassName("invalid-icon");
const property_1Src = document.getElementsByClassName("prop-card-image-one");
const property_2Src = document.getElementsByClassName("prop-card-image-two");
const property_3Src = document.getElementsByClassName("prop-card-image-three");
const property_4Src = document.getElementsByClassName("prop-card-image-four");
const property_5Src = document.getElementsByClassName("prop-card-image-five");
const property_6Src = document.getElementsByClassName("prop-card-image-six");
const los_angelesSrc = document.getElementsByClassName("area-card-one");
const san_diegoSrc = document.getElementsByClassName("area-card-two");
const san_franciscoSrc = document.getElementsByClassName("area-card-three");
const seattleSrc = document.getElementsByClassName("area-card-four");
const testimonial_bgSrc = document.getElementsByClassName("testimonial-bg");
const verified_iconSrc = document.getElementsByClassName("verified-icon")

/***/ }),

/***/ 321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./js/dom-loader.js
var dom_loader = __webpack_require__(121);
;// CONCATENATED MODULE: ./Images/logo.png
const logo_namespaceObject = __webpack_require__.p + "images/cfe95394c3b84218b48e.png";
;// CONCATENATED MODULE: ./Images/agency-image.png
const agency_image_namespaceObject = __webpack_require__.p + "images/b3a49a0d78b95eb87256.png";
;// CONCATENATED MODULE: ./Images/agency-image-2.png
const agency_image_2_namespaceObject = __webpack_require__.p + "images/30105f90b4a8a1a358bc.png";
;// CONCATENATED MODULE: ./Images/agency-image-3.png
const agency_image_3_namespaceObject = __webpack_require__.p + "images/221b53268d4f69648e00.png";
;// CONCATENATED MODULE: ./Images/agent-image1.png
const agent_image1_namespaceObject = __webpack_require__.p + "images/c30b03df97f0a6a028bf.png";
;// CONCATENATED MODULE: ./Images/agent-image2.png
const agent_image2_namespaceObject = __webpack_require__.p + "images/f2516098505b710fb83e.png";
;// CONCATENATED MODULE: ./Images/agent-image3.png
const agent_image3_namespaceObject = __webpack_require__.p + "images/0a0be644cfe21794d8c9.png";
;// CONCATENATED MODULE: ./Images/agent-profile.png
const agent_profile_namespaceObject = __webpack_require__.p + "images/226d9e8d291248098114.png";
;// CONCATENATED MODULE: ./Images/area-icon.png
const area_icon_namespaceObject = __webpack_require__.p + "images/e7c6f51bdd5078c5226f.png";
;// CONCATENATED MODULE: ./Images/area-icon-grey.png
const area_icon_grey_namespaceObject = __webpack_require__.p + "images/65551814911a1970bb1a.png";
;// CONCATENATED MODULE: ./Images/article-1.png
const article_1_namespaceObject = __webpack_require__.p + "images/9126164287b785fe4fda.png";
;// CONCATENATED MODULE: ./Images/article-2.png
const article_2_namespaceObject = __webpack_require__.p + "images/574412ebc23d555c7800.png";
;// CONCATENATED MODULE: ./Images/article-3.png
const article_3_namespaceObject = __webpack_require__.p + "images/a1e1e9b4ab923e73d0f0.png";
;// CONCATENATED MODULE: ./Images/bedroom-icon.png
const bedroom_icon_namespaceObject = __webpack_require__.p + "images/9a50b144989026ccaa96.png";
;// CONCATENATED MODULE: ./Images/bedroom-icon-grey.png
const bedroom_icon_grey_namespaceObject = __webpack_require__.p + "images/752f3bc6fe0fb1cdf139.png";
;// CONCATENATED MODULE: ./Images/bathroom-icon.png
const bathroom_icon_namespaceObject = __webpack_require__.p + "images/3adc71408a527cdda46f.png";
;// CONCATENATED MODULE: ./Images/bathroom-icon-grey.png
const bathroom_icon_grey_namespaceObject = __webpack_require__.p + "images/aa41a2b7b5bd250fed03.png";
;// CONCATENATED MODULE: ./Images/flag.png
const flag_namespaceObject = __webpack_require__.p + "images/1be6cda719bfb36ef69b.png";
;// CONCATENATED MODULE: ./Images/footer-logo.png
const footer_logo_namespaceObject = __webpack_require__.p + "images/8d11545afec55aedbb13.png";
;// CONCATENATED MODULE: ./Images/garage-icon.png
const garage_icon_namespaceObject = __webpack_require__.p + "images/3387ce6b856c6f9e3b26.png";
;// CONCATENATED MODULE: ./Images/garage-icon-grey.png
const garage_icon_grey_namespaceObject = __webpack_require__.p + "images/f237bc8bff55e52b97d2.png";
;// CONCATENATED MODULE: ./Images/hero-bg-image.png
const hero_bg_image_namespaceObject = __webpack_require__.p + "images/2ce44be1a14ccbe66b91.png";
;// CONCATENATED MODULE: ./Images/hotDeal.png
const hotDeal_namespaceObject = __webpack_require__.p + "images/7456ab7cd76f5223ae6e.png";
;// CONCATENATED MODULE: ./Images/invalid-name.png
const invalid_name_namespaceObject = __webpack_require__.p + "images/06bca0619223b1da3b60.png";
;// CONCATENATED MODULE: ./Images/property-image1.png
const property_image1_namespaceObject = __webpack_require__.p + "images/caa378d92112c6039d62.png";
;// CONCATENATED MODULE: ./Images/property-image2.png
const property_image2_namespaceObject = __webpack_require__.p + "images/ab2a6c509cbe294d448c.png";
;// CONCATENATED MODULE: ./Images/property-image3.png
const property_image3_namespaceObject = __webpack_require__.p + "images/f8ec8417739e35c30ec1.png";
;// CONCATENATED MODULE: ./Images/property-image4.png
const property_image4_namespaceObject = __webpack_require__.p + "images/212417fccacdadef2cf7.png";
;// CONCATENATED MODULE: ./Images/property-image5.png
const property_image5_namespaceObject = __webpack_require__.p + "images/19090f8464c609405199.png";
;// CONCATENATED MODULE: ./Images/property-image6.png
const property_image6_namespaceObject = __webpack_require__.p + "images/9724b1c980604b4d21fc.png";
;// CONCATENATED MODULE: ./Images/los-angeles.png
const los_angeles_namespaceObject = __webpack_require__.p + "images/7e1c36a110949fcf40db.png";
;// CONCATENATED MODULE: ./Images/san-diego.png
const san_diego_namespaceObject = __webpack_require__.p + "images/a52242179578a12168f7.png";
;// CONCATENATED MODULE: ./Images/san-francisco.png
const san_francisco_namespaceObject = __webpack_require__.p + "images/631c3243bea3049551f0.png";
;// CONCATENATED MODULE: ./Images/seattle.png
const seattle_namespaceObject = __webpack_require__.p + "images/6d902ae3c81aa36ad8ea.png";
;// CONCATENATED MODULE: ./Images/testimonials-bg-1.png
const testimonials_bg_1_namespaceObject = __webpack_require__.p + "images/b80ca76b40e0b040458b.png";
;// CONCATENATED MODULE: ./Images/verified-icon.png
const verified_icon_namespaceObject = __webpack_require__.p + "images/73ba9ae882b43af5c112.png";
;// CONCATENATED MODULE: ./js/image-bundler.js



// Images import







































// Setting the src of the Images
dom_loader/* logoSrc.src */.Pq.src = logo_namespaceObject
dom_loader/* agency_image_1Src.src */.lF.src = agency_image_namespaceObject;
dom_loader/* agency_image_2Src.src */.f0.src = agency_image_2_namespaceObject;
dom_loader/* agency_image_3Src.src */.Nq.src = agency_image_3_namespaceObject;

for (let i = 0; i < dom_loader/* agent_image_1Src.length */.lu.length; i++) {
    dom_loader/* agent_image_1Src */.lu[i].src = agent_image1_namespaceObject;
}
for (let i = 0; i < dom_loader/* agent_image_2Src.length */.x2.length; i++) {
    dom_loader/* agent_image_2Src */.x2[i].src = agent_image2_namespaceObject;
}
for (let i = 0; i < dom_loader/* agent_image_3Src.length */.IX.length; i++) {
    dom_loader/* agent_image_3Src */.IX[i].src = agent_image3_namespaceObject;
}
for (let i = 0; i < dom_loader/* agent_profileSrc.length */.Bz.length; i++) {
    dom_loader/* agent_profileSrc */.Bz[i].src = agent_profile_namespaceObject;
}
for (let i = 0; i < dom_loader/* area_iconSrc.length */.Cm.length; i++) {
    dom_loader/* area_iconSrc */.Cm[i].src = area_icon_namespaceObject;
}
for (let i = 0; i < dom_loader/* area_icon_greySrc.length */.vj.length; i++) {
    dom_loader/* area_icon_greySrc */.vj[i].src = area_icon_grey_namespaceObject;
}

for (let i = 0; i < dom_loader/* article_1Src.length */.TL.length; i++) {
    dom_loader/* article_1Src */.TL[i].src = article_1_namespaceObject;
}
for (let i = 0; i < dom_loader/* article_2Src.length */.C6.length; i++) {
    dom_loader/* article_2Src */.C6[i].src = article_2_namespaceObject;
}
for (let i = 0; i < dom_loader/* article_3Src.length */.$u.length; i++) {
    dom_loader/* article_3Src */.$u[i].src = article_3_namespaceObject;
}

for (let i = 0; i < dom_loader/* bedroomSrc.length */.ko.length; i++) {
    dom_loader/* bedroomSrc */.ko[i].src = bedroom_icon_namespaceObject;
}
for (let i = 0; i < dom_loader/* bedroom_greySrc.length */.H_.length; i++) {
    dom_loader/* bedroom_greySrc */.H_[i].src = bedroom_icon_grey_namespaceObject;
}
for (let i = 0; i < dom_loader/* bathroomSrc.length */.sf.length; i++) {
    dom_loader/* bathroomSrc */.sf[i].src = bathroom_icon_namespaceObject;
}
for (let i = 0; i < dom_loader/* bathroom_greySrc.length */.m1.length; i++) {
    dom_loader/* bathroom_greySrc */.m1[i].src = bathroom_icon_grey_namespaceObject;
}
for (let i = 0; i < dom_loader/* garageSrc.length */.MF.length; i++) {
    dom_loader/* garageSrc */.MF[i].src = garage_icon_namespaceObject;
}
for (let i = 0; i < dom_loader/* garage_greySrc.length */.OU.length; i++) {
    dom_loader/* garage_greySrc */.OU[i].src = garage_icon_grey_namespaceObject;
}

for (let i = 0; i < dom_loader/* flagSrc.length */.d_.length; i++) {
    dom_loader/* flagSrc */.d_[i].src = flag_namespaceObject;
}
for (let i = 0; i < dom_loader/* footer_logoSrc.length */.hk.length; i++) {
    dom_loader/* footer_logoSrc */.hk[i].src = footer_logo_namespaceObject;
}
for (let i = 0; i < dom_loader/* hero_bgSrc.length */.CX.length; i++) {
    dom_loader/* hero_bgSrc */.CX[i].style.backgroundImage = `url('${hero_bg_image_namespaceObject}')`;
}
for (let i = 0; i < dom_loader/* hot_dealSrc.length */.Zt.length; i++) {
    dom_loader/* hot_dealSrc */.Zt[i].src = hotDeal_namespaceObject;
}
for (let i = 0; i < dom_loader/* invalid_iconSrc.length */.Jq.length; i++) {
    dom_loader/* invalid_iconSrc */.Jq[i].src = invalid_name_namespaceObject;
}
for (let i = 0; i < dom_loader/* property_1Src.length */.HT.length; i++) {
    dom_loader/* property_1Src */.HT[i].style.backgroundImage = `url('${property_image1_namespaceObject}')`
}
for (let i = 0; i < dom_loader/* property_2Src.length */.By.length; i++) {
    dom_loader/* property_2Src */.By[i].style.backgroundImage = `url('${property_image2_namespaceObject}')`
}
for (let i = 0; i < dom_loader/* property_3Src.length */.j7.length; i++) {
    dom_loader/* property_3Src */.j7[i].style.backgroundImage = `url('${property_image3_namespaceObject}')`
}
for (let i = 0; i < dom_loader/* property_4Src.length */.iI.length; i++) {
    dom_loader/* property_4Src */.iI[i].style.backgroundImage = `url('${property_image4_namespaceObject}')`
}
for (let i = 0; i < dom_loader/* property_5Src.length */.SB.length; i++) {
    dom_loader/* property_5Src */.SB[i].style.backgroundImage = `url('${property_image5_namespaceObject}')`
}
for (let i = 0; i < dom_loader/* property_6Src.length */.Tw.length; i++) {
    dom_loader/* property_6Src */.Tw[i].style.backgroundImage = `url('${property_image6_namespaceObject}')`
}
for (let i = 0; i < dom_loader/* los_angelesSrc.length */.r$.length; i++) {
    dom_loader/* los_angelesSrc */.r$[i].style.backgroundImage = `url('${los_angeles_namespaceObject}')`;
}
for (let i = 0; i < dom_loader/* san_diegoSrc.length */.Au.length; i++) {
    dom_loader/* san_diegoSrc */.Au[i].style.backgroundImage = `url('${san_diego_namespaceObject}')`;
}
for (let i = 0; i < dom_loader/* san_franciscoSrc.length */.Tg.length; i++) {
    dom_loader/* san_franciscoSrc */.Tg[i].style.backgroundImage = `url('${san_francisco_namespaceObject}')`;
}
for (let i = 0; i < dom_loader/* seattleSrc.length */.cU.length; i++) {
    dom_loader/* seattleSrc */.cU[i].style.backgroundImage = `url('${seattle_namespaceObject}')`;
}
for (let i = 0; i < dom_loader/* testimonial_bgSrc.length */.UH.length; i++) {
    dom_loader/* testimonial_bgSrc */.UH[i].style.backgroundImage = `url('${testimonials_bg_1_namespaceObject}')`;
}
for (let i = 0; i < dom_loader/* verified_iconSrc.length */.eT.length; i++) {
    dom_loader/* verified_iconSrc */.eT[i].src = verified_icon_namespaceObject;
}

/***/ }),

/***/ 604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./js/dom-loader.js
var dom_loader = __webpack_require__(121);
;// CONCATENATED MODULE: ./js/feedbackSlider.js



// Feedback Slider
let counter = 0;

function feedbackSlider() {
    Array.from(dom_loader/* feedbackCard */.up).forEach((element, i) => {
        element.style.transform = `translateX(-${counter * 100}%)`;
    });
}

function prev() {
    if (counter <= 0) {
        counter = dom_loader/* feedbackCard.length */.up.length - 1;
    }
    else {
        counter--;
    }
    feedbackSlider();
}
function next() {
    if (counter >= dom_loader/* feedbackCard.length */.up.length - 1) {
        counter = 0;
    }
    else {
        counter++;
    }
    feedbackSlider();
}


dom_loader/* prevBtn.addEventListener */.on.addEventListener("click",prev);
dom_loader/* nextBtn.addEventListener */.Ms.addEventListener("click",next);
;// CONCATENATED MODULE: ./js/dropDown.js



function dropdownMenu() {
    console.log("Dropdown Menu");
    if (dom_loader/* navbarLinks.style.display */.ow.style.display === "flex") {
        dom_loader/* navbarLinks.style.display */.ow.style.display = "none";
        dom_loader/* navbarButtons.style.display */.Ne.style.display = "none";
        dom_loader/* header.style.height */.Fs.style.height = "60px";
        dom_loader/* bodyElement.style.overflow */.h2.style.overflow = "auto";
    }
    else {
        dom_loader/* navbarLinks.style.display */.ow.style.display = "flex";
        dom_loader/* navbarButtons.style.display */.Ne.style.display = "flex";
        dom_loader/* header.style.height */.Fs.style.height = "100vh";
        dom_loader/* bodyElement.style.overflow */.h2.style.overflow = "hidden";
    }
}

dom_loader/* hamburger.addEventListener */.M0.addEventListener("click", dropdownMenu);

;// CONCATENATED MODULE: ./js/sliderCarousel.js



// Carousel slider function
function slider(count) {
    for (let index = 0; index < dom_loader/* agentsCard.length */.EM.length; index++) {
        if (index === count) {
            dom_loader/* circle */.Xw[index].style.border = "1px solid black";
        }
        else {
            dom_loader/* circle */.Xw[index].style.border = "none";
        }
        if (window.innerWidth >= 300) {
            dom_loader/* agentsCard */.EM[index].style.left = `-${count * 110}%`;
        }
        if (window.innerWidth >= 600 && window.innerWidth <= 800) {
            dom_loader/* agentsCard */.EM[index].style.left = `-${count * 100}%`;
        }
        if (window.innerWidth >= 800 && window.innerWidth <= 1100) {
            dom_loader/* agentsCard */.EM[index].style.left = `-${count * 100}%`;
        }
        if (window.innerWidth >= 800) {
            dom_loader/* agentsCard */.EM[index].style.left = `-${count * 30}%`;
        }
        dom_loader/* agentsCard */.EM[index].style.marginRight = `60px`;
    }
    if (window.innerWidth >= 300) {
        Array.from(dom_loader/* agentsCard */.EM).forEach((element, index) => {
            element.style.transform = `translateX(-${index * 10}%)`;
        });
    }
    if (window.innerWidth >= 800) {
        Array.from(dom_loader/* agentsCard */.EM).forEach((element, index) => {
            element.style.transform = `translateX(-${index * 15}%)`;
        });
    }
}



for(let i = 0; i < dom_loader/* dots.length */.Ez.length; i++) {
    dom_loader/* dots */.Ez[i].addEventListener("click",function(){
        slider(i)
    })
}
;// CONCATENATED MODULE: ./js/custom-dropdown.js


dom_loader/* typeDropdownBtn.addEventListener */.Te.addEventListener("click", function(e) {
    dom_loader/* typeDropdown.style.display */.D.style.display = dom_loader/* typeDropdown.style.display */.D.style.display === "none" ? "block" : "none";
})
dom_loader/* statusDropdownBtn.addEventListener */.pV.addEventListener("click", function(e) {
    dom_loader/* statusDropdown.style.display */.X.style.display = dom_loader/* statusDropdown.style.display */.X.style.display === "none" ? "block" : "none";
})
;// CONCATENATED MODULE: ./js/index.js






// On load styling 
function onLoadStyling() {
    dom_loader/* circle.0.style.border */.Xw[0].style.border = "1px solid black";
}

// changing media queries
function changingMediaQuery() {
    if (window.innerWidth >= 800) {
        dom_loader/* navbarLinks.style.display */.ow.style.display = "flex";
        dom_loader/* navbarButtons.style.display */.Ne.style.display = "flex";
        dom_loader/* header.style.height */.Fs.style.height = "70px";
    }
    else {
        dom_loader/* navbarLinks.style.display */.ow.style.display = "none";
        dom_loader/* navbarButtons.style.display */.Ne.style.display = "none";
    }
    dom_loader/* bodyElement.style.overflow */.h2.style.overflow = "auto";
}


window.addEventListener("load", onLoadStyling)

window.addEventListener("resize", changingMediaQuery)


/***/ }),

/***/ 829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// CSS
__webpack_require__(829);

// js
__webpack_require__(604);

__webpack_require__(321)
})();

/******/ })()
;