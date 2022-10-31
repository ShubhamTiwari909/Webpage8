/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// CSS\r\n__webpack_require__(/*! ../sass/index.scss */ \"./sass/index.scss\");\r\n\r\n// js\r\n__webpack_require__(/*! ./index.js */ \"./js/index.js\");\r\n\r\n__webpack_require__(/*! ./image-bundler.js */ \"./js/image-bundler.js\")\n\n//# sourceURL=webpack://webpage8/./js/app.js?");

/***/ }),

/***/ "./js/dom-loader.js":
/*!**************************!*\
  !*** ./js/dom-loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agency_image_1Src\": () => (/* binding */ agency_image_1Src),\n/* harmony export */   \"agency_image_2Src\": () => (/* binding */ agency_image_2Src),\n/* harmony export */   \"agency_image_3Src\": () => (/* binding */ agency_image_3Src),\n/* harmony export */   \"agent_image_1Src\": () => (/* binding */ agent_image_1Src),\n/* harmony export */   \"agent_image_2Src\": () => (/* binding */ agent_image_2Src),\n/* harmony export */   \"agent_image_3Src\": () => (/* binding */ agent_image_3Src),\n/* harmony export */   \"agent_profileSrc\": () => (/* binding */ agent_profileSrc),\n/* harmony export */   \"agentsCard\": () => (/* binding */ agentsCard),\n/* harmony export */   \"area_iconSrc\": () => (/* binding */ area_iconSrc),\n/* harmony export */   \"area_icon_greySrc\": () => (/* binding */ area_icon_greySrc),\n/* harmony export */   \"article_1Src\": () => (/* binding */ article_1Src),\n/* harmony export */   \"article_2Src\": () => (/* binding */ article_2Src),\n/* harmony export */   \"article_3Src\": () => (/* binding */ article_3Src),\n/* harmony export */   \"bathroomSrc\": () => (/* binding */ bathroomSrc),\n/* harmony export */   \"bathroom_greySrc\": () => (/* binding */ bathroom_greySrc),\n/* harmony export */   \"bedroomSrc\": () => (/* binding */ bedroomSrc),\n/* harmony export */   \"bedroom_greySrc\": () => (/* binding */ bedroom_greySrc),\n/* harmony export */   \"bodyElement\": () => (/* binding */ bodyElement),\n/* harmony export */   \"circle\": () => (/* binding */ circle),\n/* harmony export */   \"dots\": () => (/* binding */ dots),\n/* harmony export */   \"feedbackCard\": () => (/* binding */ feedbackCard),\n/* harmony export */   \"flagSrc\": () => (/* binding */ flagSrc),\n/* harmony export */   \"footer_logoSrc\": () => (/* binding */ footer_logoSrc),\n/* harmony export */   \"garageSrc\": () => (/* binding */ garageSrc),\n/* harmony export */   \"garage_greySrc\": () => (/* binding */ garage_greySrc),\n/* harmony export */   \"hamburger\": () => (/* binding */ hamburger),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"hero_bgSrc\": () => (/* binding */ hero_bgSrc),\n/* harmony export */   \"hot_dealSrc\": () => (/* binding */ hot_dealSrc),\n/* harmony export */   \"invalid_iconSrc\": () => (/* binding */ invalid_iconSrc),\n/* harmony export */   \"logoSrc\": () => (/* binding */ logoSrc),\n/* harmony export */   \"los_angelesSrc\": () => (/* binding */ los_angelesSrc),\n/* harmony export */   \"navbarButtons\": () => (/* binding */ navbarButtons),\n/* harmony export */   \"navbarLinks\": () => (/* binding */ navbarLinks),\n/* harmony export */   \"nextBtn\": () => (/* binding */ nextBtn),\n/* harmony export */   \"prevBtn\": () => (/* binding */ prevBtn),\n/* harmony export */   \"property_1Src\": () => (/* binding */ property_1Src),\n/* harmony export */   \"property_2Src\": () => (/* binding */ property_2Src),\n/* harmony export */   \"property_3Src\": () => (/* binding */ property_3Src),\n/* harmony export */   \"property_4Src\": () => (/* binding */ property_4Src),\n/* harmony export */   \"property_5Src\": () => (/* binding */ property_5Src),\n/* harmony export */   \"property_6Src\": () => (/* binding */ property_6Src),\n/* harmony export */   \"san_diegoSrc\": () => (/* binding */ san_diegoSrc),\n/* harmony export */   \"san_franciscoSrc\": () => (/* binding */ san_franciscoSrc),\n/* harmony export */   \"seattleSrc\": () => (/* binding */ seattleSrc),\n/* harmony export */   \"testimonial_bgSrc\": () => (/* binding */ testimonial_bgSrc),\n/* harmony export */   \"verified_iconSrc\": () => (/* binding */ verified_iconSrc)\n/* harmony export */ });\nconst navbarLinks = document.querySelectorAll(\".header-center\")[0];\r\nconst navbarButtons = document.querySelectorAll(\".header-right\")[0];\r\nconst hamburger = document.getElementById(\"hamburger\");\r\nconst header = document.getElementById(\"header\");\r\nconst bodyElement = document.getElementsByTagName(\"body\")[0];\r\nconst circle = document.getElementsByClassName(\"circle\");\r\nconst dots = document.getElementsByClassName(\"dot\");\r\nconst agentsCard = document.getElementsByClassName(\"agents-card\");\r\nconst feedbackCard = document.getElementsByClassName(\"feedback-card\");\r\nconst prevBtn = document.getElementById(\"prev\");\r\nconst nextBtn = document.getElementById(\"next\");\r\n\r\n// img tags import\r\nconst logoSrc = document.getElementById(\"logo\");\r\nconst agency_image_1Src = document.getElementById(\"agency-image-1\");\r\nconst agency_image_2Src = document.getElementById(\"agency-image-2\");\r\nconst agency_image_3Src = document.getElementById(\"agency-image-3\");\r\nconst agent_image_1Src = document.getElementsByClassName(\"agent-image-1\");\r\nconst agent_image_2Src = document.getElementsByClassName(\"agent-image-2\");\r\nconst agent_image_3Src = document.getElementsByClassName(\"agent-image-3\");\r\nconst agent_profileSrc = document.getElementsByClassName(\"agent-profile\");\r\nconst area_iconSrc = document.getElementsByClassName(\"area-icon\")\r\nconst area_icon_greySrc = document.getElementsByClassName(\"area-icon-grey\");\r\nconst article_1Src = document.getElementsByClassName(\"article-1\");\r\nconst article_2Src = document.getElementsByClassName(\"article-2\");\r\nconst article_3Src = document.getElementsByClassName(\"article-3\");\r\nconst bedroomSrc = document.getElementsByClassName(\"bedroom-icon\");\r\nconst bedroom_greySrc = document.getElementsByClassName(\"bedroom-icon-grey\");\r\nconst bathroomSrc = document.getElementsByClassName(\"bathroom-icon\");\r\nconst bathroom_greySrc = document.getElementsByClassName(\"bathroom-icon-grey\");\r\nconst garageSrc = document.getElementsByClassName(\"garage-icon\");\r\nconst garage_greySrc = document.getElementsByClassName(\"garage-icon-grey\");\r\nconst flagSrc = document.getElementsByClassName(\"flag\")\r\nconst footer_logoSrc = document.getElementsByClassName(\"footer-logo\");\r\nconst hero_bgSrc = document.getElementsByClassName(\"hero\");\r\nconst hot_dealSrc = document.getElementsByClassName(\"hot-deal\");\r\nconst invalid_iconSrc = document.getElementsByClassName(\"invalid-icon\");\r\nconst property_1Src = document.getElementsByClassName(\"prop-card-image-one\");\r\nconst property_2Src = document.getElementsByClassName(\"prop-card-image-two\");\r\nconst property_3Src = document.getElementsByClassName(\"prop-card-image-three\");\r\nconst property_4Src = document.getElementsByClassName(\"prop-card-image-four\");\r\nconst property_5Src = document.getElementsByClassName(\"prop-card-image-five\");\r\nconst property_6Src = document.getElementsByClassName(\"prop-card-image-six\");\r\nconst los_angelesSrc = document.getElementsByClassName(\"area-card-one\");\r\nconst san_diegoSrc = document.getElementsByClassName(\"area-card-two\");\r\nconst san_franciscoSrc = document.getElementsByClassName(\"area-card-three\");\r\nconst seattleSrc = document.getElementsByClassName(\"area-card-four\");\r\nconst testimonial_bgSrc = document.getElementsByClassName(\"testimonial-bg\");\r\nconst verified_iconSrc = document.getElementsByClassName(\"verified-icon\")\n\n//# sourceURL=webpack://webpage8/./js/dom-loader.js?");

/***/ }),

/***/ "./js/dropDown.js":
/*!************************!*\
  !*** ./js/dropDown.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \"./js/dom-loader.js\");\n\r\n\r\n\r\nfunction dropdownMenu() {\r\n    console.log(\"Dropdown Menu\");\r\n    if (_dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarLinks.style.display === \"flex\") {\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarLinks.style.display = \"none\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarButtons.style.display = \"none\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.header.style.height = \"60px\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bodyElement.style.overflow = \"auto\";\r\n    }\r\n    else {\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarLinks.style.display = \"flex\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarButtons.style.display = \"flex\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.header.style.height = \"100vh\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bodyElement.style.overflow = \"hidden\";\r\n    }\r\n}\r\n\r\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.hamburger.addEventListener(\"click\", dropdownMenu);\r\n\n\n//# sourceURL=webpack://webpage8/./js/dropDown.js?");

/***/ }),

/***/ "./js/feedbackSlider.js":
/*!******************************!*\
  !*** ./js/feedbackSlider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \"./js/dom-loader.js\");\n\r\n\r\n\r\n// Feedback Slider\r\nlet counter = 0;\r\n\r\nfunction feedbackSlider() {\r\n    Array.from(_dom_loader__WEBPACK_IMPORTED_MODULE_0__.feedbackCard).forEach((element, i) => {\r\n        element.style.transform = `translateX(-${counter * 100}%)`;\r\n    });\r\n}\r\n\r\nfunction prev() {\r\n    if (counter <= 0) {\r\n        counter = _dom_loader__WEBPACK_IMPORTED_MODULE_0__.feedbackCard.length - 1;\r\n    }\r\n    else {\r\n        counter--;\r\n    }\r\n    feedbackSlider();\r\n}\r\nfunction next() {\r\n    if (counter >= _dom_loader__WEBPACK_IMPORTED_MODULE_0__.feedbackCard.length - 1) {\r\n        counter = 0;\r\n    }\r\n    else {\r\n        counter++;\r\n    }\r\n    feedbackSlider();\r\n}\r\n\r\n\r\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.prevBtn.addEventListener(\"click\",prev);\r\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.nextBtn.addEventListener(\"click\",next);\n\n//# sourceURL=webpack://webpage8/./js/feedbackSlider.js?");

/***/ }),

/***/ "./js/image-bundler.js":
/*!*****************************!*\
  !*** ./js/image-bundler.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \"./js/dom-loader.js\");\n/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Images/logo.png */ \"./Images/logo.png\");\n/* harmony import */ var _Images_agency_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/agency-image.png */ \"./Images/agency-image.png\");\n/* harmony import */ var _Images_agency_image_2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/agency-image-2.png */ \"./Images/agency-image-2.png\");\n/* harmony import */ var _Images_agency_image_3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/agency-image-3.png */ \"./Images/agency-image-3.png\");\n/* harmony import */ var _Images_agent_image1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Images/agent-image1.png */ \"./Images/agent-image1.png\");\n/* harmony import */ var _Images_agent_image2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Images/agent-image2.png */ \"./Images/agent-image2.png\");\n/* harmony import */ var _Images_agent_image3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Images/agent-image3.png */ \"./Images/agent-image3.png\");\n/* harmony import */ var _Images_agent_profile_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Images/agent-profile.png */ \"./Images/agent-profile.png\");\n/* harmony import */ var _Images_area_icon_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Images/area-icon.png */ \"./Images/area-icon.png\");\n/* harmony import */ var _Images_area_icon_grey_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Images/area-icon-grey.png */ \"./Images/area-icon-grey.png\");\n/* harmony import */ var _Images_article_1_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Images/article-1.png */ \"./Images/article-1.png\");\n/* harmony import */ var _Images_article_2_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Images/article-2.png */ \"./Images/article-2.png\");\n/* harmony import */ var _Images_article_3_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Images/article-3.png */ \"./Images/article-3.png\");\n/* harmony import */ var _Images_bedroom_icon_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Images/bedroom-icon.png */ \"./Images/bedroom-icon.png\");\n/* harmony import */ var _Images_bedroom_icon_grey_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Images/bedroom-icon-grey.png */ \"./Images/bedroom-icon-grey.png\");\n/* harmony import */ var _Images_bathroom_icon_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Images/bathroom-icon.png */ \"./Images/bathroom-icon.png\");\n/* harmony import */ var _Images_bathroom_icon_grey_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Images/bathroom-icon-grey.png */ \"./Images/bathroom-icon-grey.png\");\n/* harmony import */ var _Images_flag_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Images/flag.png */ \"./Images/flag.png\");\n/* harmony import */ var _Images_footer_logo_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Images/footer-logo.png */ \"./Images/footer-logo.png\");\n/* harmony import */ var _Images_garage_icon_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Images/garage-icon.png */ \"./Images/garage-icon.png\");\n/* harmony import */ var _Images_garage_icon_grey_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Images/garage-icon-grey.png */ \"./Images/garage-icon-grey.png\");\n/* harmony import */ var _Images_hero_bg_image_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Images/hero-bg-image.png */ \"./Images/hero-bg-image.png\");\n/* harmony import */ var _Images_hotDeal_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Images/hotDeal.png */ \"./Images/hotDeal.png\");\n/* harmony import */ var _Images_invalid_name_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Images/invalid-name.png */ \"./Images/invalid-name.png\");\n/* harmony import */ var _Images_property_image1_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Images/property-image1.png */ \"./Images/property-image1.png\");\n/* harmony import */ var _Images_property_image2_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../Images/property-image2.png */ \"./Images/property-image2.png\");\n/* harmony import */ var _Images_property_image3_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Images/property-image3.png */ \"./Images/property-image3.png\");\n/* harmony import */ var _Images_property_image4_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../Images/property-image4.png */ \"./Images/property-image4.png\");\n/* harmony import */ var _Images_property_image5_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../Images/property-image5.png */ \"./Images/property-image5.png\");\n/* harmony import */ var _Images_property_image6_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../Images/property-image6.png */ \"./Images/property-image6.png\");\n/* harmony import */ var _Images_los_angeles_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../Images/los-angeles.png */ \"./Images/los-angeles.png\");\n/* harmony import */ var _Images_san_diego_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../Images/san-diego.png */ \"./Images/san-diego.png\");\n/* harmony import */ var _Images_san_francisco_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../Images/san-francisco.png */ \"./Images/san-francisco.png\");\n/* harmony import */ var _Images_seattle_png__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../Images/seattle.png */ \"./Images/seattle.png\");\n/* harmony import */ var _Images_testimonials_bg_1_png__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../Images/testimonials-bg-1.png */ \"./Images/testimonials-bg-1.png\");\n/* harmony import */ var _Images_verified_icon_png__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../Images/verified-icon.png */ \"./Images/verified-icon.png\");\n\r\n\r\n\r\n// Images import\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Setting the src of the Images\r\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.logoSrc.src = _Images_logo_png__WEBPACK_IMPORTED_MODULE_1__\r\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.agency_image_1Src.src = _Images_agency_image_png__WEBPACK_IMPORTED_MODULE_2__;\r\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.agency_image_2Src.src = _Images_agency_image_2_png__WEBPACK_IMPORTED_MODULE_3__;\r\n_dom_loader__WEBPACK_IMPORTED_MODULE_0__.agency_image_3Src.src = _Images_agency_image_3_png__WEBPACK_IMPORTED_MODULE_4__;\r\n\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agent_image_1Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agent_image_1Src[i].src = _Images_agent_image1_png__WEBPACK_IMPORTED_MODULE_5__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agent_image_2Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agent_image_2Src[i].src = _Images_agent_image2_png__WEBPACK_IMPORTED_MODULE_6__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agent_image_3Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agent_image_3Src[i].src = _Images_agent_image3_png__WEBPACK_IMPORTED_MODULE_7__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agent_profileSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agent_profileSrc[i].src = _Images_agent_profile_png__WEBPACK_IMPORTED_MODULE_8__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.area_iconSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.area_iconSrc[i].src = _Images_area_icon_png__WEBPACK_IMPORTED_MODULE_9__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.area_icon_greySrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.area_icon_greySrc[i].src = _Images_area_icon_grey_png__WEBPACK_IMPORTED_MODULE_10__;\r\n}\r\n\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.article_1Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.article_1Src[i].src = _Images_article_1_png__WEBPACK_IMPORTED_MODULE_11__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.article_2Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.article_2Src[i].src = _Images_article_2_png__WEBPACK_IMPORTED_MODULE_12__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.article_3Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.article_3Src[i].src = _Images_article_3_png__WEBPACK_IMPORTED_MODULE_13__;\r\n}\r\n\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bedroomSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bedroomSrc[i].src = _Images_bedroom_icon_png__WEBPACK_IMPORTED_MODULE_14__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bedroom_greySrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bedroom_greySrc[i].src = _Images_bedroom_icon_grey_png__WEBPACK_IMPORTED_MODULE_15__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bathroomSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bathroomSrc[i].src = _Images_bathroom_icon_png__WEBPACK_IMPORTED_MODULE_16__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bathroom_greySrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bathroom_greySrc[i].src = _Images_bathroom_icon_grey_png__WEBPACK_IMPORTED_MODULE_17__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.garageSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.garageSrc[i].src = _Images_garage_icon_png__WEBPACK_IMPORTED_MODULE_20__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.garage_greySrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.garage_greySrc[i].src = _Images_garage_icon_grey_png__WEBPACK_IMPORTED_MODULE_21__;\r\n}\r\n\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.flagSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.flagSrc[i].src = _Images_flag_png__WEBPACK_IMPORTED_MODULE_18__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.footer_logoSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.footer_logoSrc[i].src = _Images_footer_logo_png__WEBPACK_IMPORTED_MODULE_19__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.hero_bgSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.hero_bgSrc[i].style.backgroundImage = `url('${_Images_hero_bg_image_png__WEBPACK_IMPORTED_MODULE_22__}')`;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.hot_dealSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.hot_dealSrc[i].src = _Images_hotDeal_png__WEBPACK_IMPORTED_MODULE_23__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.invalid_iconSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.invalid_iconSrc[i].src = _Images_invalid_name_png__WEBPACK_IMPORTED_MODULE_24__;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_1Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_1Src[i].style.backgroundImage = `url('${_Images_property_image1_png__WEBPACK_IMPORTED_MODULE_25__}')`\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_2Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_2Src[i].style.backgroundImage = `url('${_Images_property_image2_png__WEBPACK_IMPORTED_MODULE_26__}')`\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_3Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_3Src[i].style.backgroundImage = `url('${_Images_property_image3_png__WEBPACK_IMPORTED_MODULE_27__}')`\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_4Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_4Src[i].style.backgroundImage = `url('${_Images_property_image4_png__WEBPACK_IMPORTED_MODULE_28__}')`\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_5Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_5Src[i].style.backgroundImage = `url('${_Images_property_image5_png__WEBPACK_IMPORTED_MODULE_29__}')`\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_6Src.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.property_6Src[i].style.backgroundImage = `url('${_Images_property_image6_png__WEBPACK_IMPORTED_MODULE_30__}')`\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.los_angelesSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.los_angelesSrc[i].style.backgroundImage = `url('${_Images_los_angeles_png__WEBPACK_IMPORTED_MODULE_31__}')`;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.san_diegoSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.san_diegoSrc[i].style.backgroundImage = `url('${_Images_san_diego_png__WEBPACK_IMPORTED_MODULE_32__}')`;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.san_franciscoSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.san_franciscoSrc[i].style.backgroundImage = `url('${_Images_san_francisco_png__WEBPACK_IMPORTED_MODULE_33__}')`;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.seattleSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.seattleSrc[i].style.backgroundImage = `url('${_Images_seattle_png__WEBPACK_IMPORTED_MODULE_34__}')`;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.testimonial_bgSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.testimonial_bgSrc[i].style.backgroundImage = `url('${_Images_testimonials_bg_1_png__WEBPACK_IMPORTED_MODULE_35__}')`;\r\n}\r\nfor (let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.verified_iconSrc.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.verified_iconSrc[i].src = _Images_verified_icon_png__WEBPACK_IMPORTED_MODULE_36__;\r\n}\n\n//# sourceURL=webpack://webpage8/./js/image-bundler.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \"./js/dom-loader.js\");\n/* harmony import */ var _feedbackSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedbackSlider */ \"./js/feedbackSlider.js\");\n/* harmony import */ var _dropDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropDown */ \"./js/dropDown.js\");\n/* harmony import */ var _sliderCarousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliderCarousel */ \"./js/sliderCarousel.js\");\n\r\n\r\n\r\n\r\n\r\n// On load styling \r\nfunction onLoadStyling() {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.circle[0].style.border = \"1px solid black\";\r\n}\r\n\r\n// changing media queries\r\nfunction changingMediaQuery() {\r\n    if (window.innerWidth >= 800) {\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarLinks.style.display = \"flex\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarButtons.style.display = \"flex\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.header.style.height = \"70px\";\r\n    }\r\n    else {\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarLinks.style.display = \"none\";\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.navbarButtons.style.display = \"none\";\r\n    }\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.bodyElement.style.overflow = \"auto\";\r\n}\r\n\r\n\r\nwindow.addEventListener(\"load\", onLoadStyling)\r\n\r\nwindow.addEventListener(\"resize\", changingMediaQuery)\r\n\n\n//# sourceURL=webpack://webpage8/./js/index.js?");

/***/ }),

/***/ "./js/sliderCarousel.js":
/*!******************************!*\
  !*** ./js/sliderCarousel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-loader */ \"./js/dom-loader.js\");\n\r\n\r\n\r\n// Carousel slider function\r\nfunction slider(count) {\r\n    for (let index = 0; index < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agentsCard.length; index++) {\r\n        if (index === count) {\r\n            _dom_loader__WEBPACK_IMPORTED_MODULE_0__.circle[index].style.border = \"1px solid black\";\r\n        }\r\n        else {\r\n            _dom_loader__WEBPACK_IMPORTED_MODULE_0__.circle[index].style.border = \"none\";\r\n        }\r\n        if (window.innerWidth >= 300) {\r\n            _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agentsCard[index].style.left = `-${count * 110}%`;\r\n        }\r\n        if (window.innerWidth >= 600 && window.innerWidth <= 800) {\r\n            _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agentsCard[index].style.left = `-${count * 100}%`;\r\n        }\r\n        if (window.innerWidth >= 800 && window.innerWidth <= 1100) {\r\n            _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agentsCard[index].style.left = `-${count * 100}%`;\r\n        }\r\n        if (window.innerWidth >= 800) {\r\n            _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agentsCard[index].style.left = `-${count * 30}%`;\r\n        }\r\n        _dom_loader__WEBPACK_IMPORTED_MODULE_0__.agentsCard[index].style.marginRight = `60px`;\r\n    }\r\n    if (window.innerWidth >= 300) {\r\n        Array.from(_dom_loader__WEBPACK_IMPORTED_MODULE_0__.agentsCard).forEach((element, index) => {\r\n            element.style.transform = `translateX(-${index * 10}%)`;\r\n        });\r\n    }\r\n    if (window.innerWidth >= 800) {\r\n        Array.from(_dom_loader__WEBPACK_IMPORTED_MODULE_0__.agentsCard).forEach((element, index) => {\r\n            element.style.transform = `translateX(-${index * 15}%)`;\r\n        });\r\n    }\r\n}\r\n\r\n\r\n\r\nfor(let i = 0; i < _dom_loader__WEBPACK_IMPORTED_MODULE_0__.dots.length; i++) {\r\n    _dom_loader__WEBPACK_IMPORTED_MODULE_0__.dots[i].addEventListener(\"click\",function(){\r\n        slider(i)\r\n    })\r\n}\n\n//# sourceURL=webpack://webpage8/./js/sliderCarousel.js?");

/***/ }),

/***/ "./sass/index.scss":
/*!*************************!*\
  !*** ./sass/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpage8/./sass/index.scss?");

/***/ }),

/***/ "./Images/agency-image-2.png":
/*!***********************************!*\
  !*** ./Images/agency-image-2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/30105f90b4a8a1a358bc.png\";\n\n//# sourceURL=webpack://webpage8/./Images/agency-image-2.png?");

/***/ }),

/***/ "./Images/agency-image-3.png":
/*!***********************************!*\
  !*** ./Images/agency-image-3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/221b53268d4f69648e00.png\";\n\n//# sourceURL=webpack://webpage8/./Images/agency-image-3.png?");

/***/ }),

/***/ "./Images/agency-image.png":
/*!*********************************!*\
  !*** ./Images/agency-image.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/b3a49a0d78b95eb87256.png\";\n\n//# sourceURL=webpack://webpage8/./Images/agency-image.png?");

/***/ }),

/***/ "./Images/agent-image1.png":
/*!*********************************!*\
  !*** ./Images/agent-image1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/c30b03df97f0a6a028bf.png\";\n\n//# sourceURL=webpack://webpage8/./Images/agent-image1.png?");

/***/ }),

/***/ "./Images/agent-image2.png":
/*!*********************************!*\
  !*** ./Images/agent-image2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/f2516098505b710fb83e.png\";\n\n//# sourceURL=webpack://webpage8/./Images/agent-image2.png?");

/***/ }),

/***/ "./Images/agent-image3.png":
/*!*********************************!*\
  !*** ./Images/agent-image3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/0a0be644cfe21794d8c9.png\";\n\n//# sourceURL=webpack://webpage8/./Images/agent-image3.png?");

/***/ }),

/***/ "./Images/agent-profile.png":
/*!**********************************!*\
  !*** ./Images/agent-profile.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/226d9e8d291248098114.png\";\n\n//# sourceURL=webpack://webpage8/./Images/agent-profile.png?");

/***/ }),

/***/ "./Images/area-icon-grey.png":
/*!***********************************!*\
  !*** ./Images/area-icon-grey.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/65551814911a1970bb1a.png\";\n\n//# sourceURL=webpack://webpage8/./Images/area-icon-grey.png?");

/***/ }),

/***/ "./Images/area-icon.png":
/*!******************************!*\
  !*** ./Images/area-icon.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/e7c6f51bdd5078c5226f.png\";\n\n//# sourceURL=webpack://webpage8/./Images/area-icon.png?");

/***/ }),

/***/ "./Images/article-1.png":
/*!******************************!*\
  !*** ./Images/article-1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/9126164287b785fe4fda.png\";\n\n//# sourceURL=webpack://webpage8/./Images/article-1.png?");

/***/ }),

/***/ "./Images/article-2.png":
/*!******************************!*\
  !*** ./Images/article-2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/574412ebc23d555c7800.png\";\n\n//# sourceURL=webpack://webpage8/./Images/article-2.png?");

/***/ }),

/***/ "./Images/article-3.png":
/*!******************************!*\
  !*** ./Images/article-3.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/a1e1e9b4ab923e73d0f0.png\";\n\n//# sourceURL=webpack://webpage8/./Images/article-3.png?");

/***/ }),

/***/ "./Images/bathroom-icon-grey.png":
/*!***************************************!*\
  !*** ./Images/bathroom-icon-grey.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/aa41a2b7b5bd250fed03.png\";\n\n//# sourceURL=webpack://webpage8/./Images/bathroom-icon-grey.png?");

/***/ }),

/***/ "./Images/bathroom-icon.png":
/*!**********************************!*\
  !*** ./Images/bathroom-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/3adc71408a527cdda46f.png\";\n\n//# sourceURL=webpack://webpage8/./Images/bathroom-icon.png?");

/***/ }),

/***/ "./Images/bedroom-icon-grey.png":
/*!**************************************!*\
  !*** ./Images/bedroom-icon-grey.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/752f3bc6fe0fb1cdf139.png\";\n\n//# sourceURL=webpack://webpage8/./Images/bedroom-icon-grey.png?");

/***/ }),

/***/ "./Images/bedroom-icon.png":
/*!*********************************!*\
  !*** ./Images/bedroom-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/9a50b144989026ccaa96.png\";\n\n//# sourceURL=webpack://webpage8/./Images/bedroom-icon.png?");

/***/ }),

/***/ "./Images/flag.png":
/*!*************************!*\
  !*** ./Images/flag.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1be6cda719bfb36ef69b.png\";\n\n//# sourceURL=webpack://webpage8/./Images/flag.png?");

/***/ }),

/***/ "./Images/footer-logo.png":
/*!********************************!*\
  !*** ./Images/footer-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/8d11545afec55aedbb13.png\";\n\n//# sourceURL=webpack://webpage8/./Images/footer-logo.png?");

/***/ }),

/***/ "./Images/garage-icon-grey.png":
/*!*************************************!*\
  !*** ./Images/garage-icon-grey.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/f237bc8bff55e52b97d2.png\";\n\n//# sourceURL=webpack://webpage8/./Images/garage-icon-grey.png?");

/***/ }),

/***/ "./Images/garage-icon.png":
/*!********************************!*\
  !*** ./Images/garage-icon.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/3387ce6b856c6f9e3b26.png\";\n\n//# sourceURL=webpack://webpage8/./Images/garage-icon.png?");

/***/ }),

/***/ "./Images/hero-bg-image.png":
/*!**********************************!*\
  !*** ./Images/hero-bg-image.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/2ce44be1a14ccbe66b91.png\";\n\n//# sourceURL=webpack://webpage8/./Images/hero-bg-image.png?");

/***/ }),

/***/ "./Images/hotDeal.png":
/*!****************************!*\
  !*** ./Images/hotDeal.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/7456ab7cd76f5223ae6e.png\";\n\n//# sourceURL=webpack://webpage8/./Images/hotDeal.png?");

/***/ }),

/***/ "./Images/invalid-name.png":
/*!*********************************!*\
  !*** ./Images/invalid-name.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/06bca0619223b1da3b60.png\";\n\n//# sourceURL=webpack://webpage8/./Images/invalid-name.png?");

/***/ }),

/***/ "./Images/logo.png":
/*!*************************!*\
  !*** ./Images/logo.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/cfe95394c3b84218b48e.png\";\n\n//# sourceURL=webpack://webpage8/./Images/logo.png?");

/***/ }),

/***/ "./Images/los-angeles.png":
/*!********************************!*\
  !*** ./Images/los-angeles.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/7e1c36a110949fcf40db.png\";\n\n//# sourceURL=webpack://webpage8/./Images/los-angeles.png?");

/***/ }),

/***/ "./Images/property-image1.png":
/*!************************************!*\
  !*** ./Images/property-image1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/caa378d92112c6039d62.png\";\n\n//# sourceURL=webpack://webpage8/./Images/property-image1.png?");

/***/ }),

/***/ "./Images/property-image2.png":
/*!************************************!*\
  !*** ./Images/property-image2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/ab2a6c509cbe294d448c.png\";\n\n//# sourceURL=webpack://webpage8/./Images/property-image2.png?");

/***/ }),

/***/ "./Images/property-image3.png":
/*!************************************!*\
  !*** ./Images/property-image3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/f8ec8417739e35c30ec1.png\";\n\n//# sourceURL=webpack://webpage8/./Images/property-image3.png?");

/***/ }),

/***/ "./Images/property-image4.png":
/*!************************************!*\
  !*** ./Images/property-image4.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/212417fccacdadef2cf7.png\";\n\n//# sourceURL=webpack://webpage8/./Images/property-image4.png?");

/***/ }),

/***/ "./Images/property-image5.png":
/*!************************************!*\
  !*** ./Images/property-image5.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/19090f8464c609405199.png\";\n\n//# sourceURL=webpack://webpage8/./Images/property-image5.png?");

/***/ }),

/***/ "./Images/property-image6.png":
/*!************************************!*\
  !*** ./Images/property-image6.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/9724b1c980604b4d21fc.png\";\n\n//# sourceURL=webpack://webpage8/./Images/property-image6.png?");

/***/ }),

/***/ "./Images/san-diego.png":
/*!******************************!*\
  !*** ./Images/san-diego.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/a52242179578a12168f7.png\";\n\n//# sourceURL=webpack://webpage8/./Images/san-diego.png?");

/***/ }),

/***/ "./Images/san-francisco.png":
/*!**********************************!*\
  !*** ./Images/san-francisco.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/631c3243bea3049551f0.png\";\n\n//# sourceURL=webpack://webpage8/./Images/san-francisco.png?");

/***/ }),

/***/ "./Images/seattle.png":
/*!****************************!*\
  !*** ./Images/seattle.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/6d902ae3c81aa36ad8ea.png\";\n\n//# sourceURL=webpack://webpage8/./Images/seattle.png?");

/***/ }),

/***/ "./Images/testimonials-bg-1.png":
/*!**************************************!*\
  !*** ./Images/testimonials-bg-1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/b80ca76b40e0b040458b.png\";\n\n//# sourceURL=webpack://webpage8/./Images/testimonials-bg-1.png?");

/***/ }),

/***/ "./Images/verified-icon.png":
/*!**********************************!*\
  !*** ./Images/verified-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/73ba9ae882b43af5c112.png\";\n\n//# sourceURL=webpack://webpage8/./Images/verified-icon.png?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;