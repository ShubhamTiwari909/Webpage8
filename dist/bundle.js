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

eval("// CSS\r\n__webpack_require__(/*! ../sass/index.scss */ \"./sass/index.scss\");\r\n\r\n// js\r\n__webpack_require__(/*! ./index.js */ \"./js/index.js\");\n\n//# sourceURL=webpack://webpage8/./js/app.js?");

/***/ }),

/***/ "./js/dom-loader.js":
/*!**************************!*\
  !*** ./js/dom-loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"agentsCard\": () => (/* binding */ agentsCard),\n/* harmony export */   \"bodyElement\": () => (/* binding */ bodyElement),\n/* harmony export */   \"circle\": () => (/* binding */ circle),\n/* harmony export */   \"dots\": () => (/* binding */ dots),\n/* harmony export */   \"feedbackCard\": () => (/* binding */ feedbackCard),\n/* harmony export */   \"hamburger\": () => (/* binding */ hamburger),\n/* harmony export */   \"header\": () => (/* binding */ header),\n/* harmony export */   \"navbarButtons\": () => (/* binding */ navbarButtons),\n/* harmony export */   \"navbarLinks\": () => (/* binding */ navbarLinks),\n/* harmony export */   \"nextBtn\": () => (/* binding */ nextBtn),\n/* harmony export */   \"prevBtn\": () => (/* binding */ prevBtn)\n/* harmony export */ });\nconst navbarLinks = document.querySelectorAll(\".header-center\")[0];\r\nconst navbarButtons = document.querySelectorAll(\".header-right\")[0];\r\nconst hamburger = document.getElementById(\"hamburger\");\r\nconst header = document.getElementById(\"header\");\r\nconst bodyElement = document.getElementsByTagName(\"body\")[0];\r\nconst circle = document.getElementsByClassName(\"circle\");\r\nconst dots = document.getElementsByClassName(\"dot\");\r\nconst agentsCard = document.getElementsByClassName(\"agents-card\");\r\nconst feedbackCard = document.getElementsByClassName(\"feedback-card\");\r\nconst prevBtn = document.getElementById(\"prev\");\r\nconst nextBtn = document.getElementById(\"next\");\r\n\n\n//# sourceURL=webpack://webpage8/./js/dom-loader.js?");

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/index.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/index.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: Rubik, sans-serif;\\n}\\n\\nbody {\\n  background-color: #fafafa;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\nselect {\\n  border: none;\\n  outline: none;\\n  font-weight: 600;\\n}\\n\\n.m-t-10 {\\n  margin-top: 10px;\\n}\\n\\n.p-t-10 {\\n  padding-top: 10px;\\n}\\n\\n.m-t-12 {\\n  margin-top: 12px;\\n}\\n\\n.p-t-12 {\\n  padding-top: 12px;\\n}\\n\\n.m-t-15 {\\n  margin-top: 15px;\\n}\\n\\n.p-t-15 {\\n  padding-top: 15px;\\n}\\n\\n.m-t-20 {\\n  margin-top: 20px;\\n}\\n\\n.p-t-20 {\\n  padding-top: 20px;\\n}\\n\\n.m-t-25 {\\n  margin-top: 25px;\\n}\\n\\n.p-t-25 {\\n  padding-top: 25px;\\n}\\n\\n.m-t-30 {\\n  margin-top: 30px;\\n}\\n\\n.p-t-30 {\\n  padding-top: 30px;\\n}\\n\\n.m-t-35 {\\n  margin-top: 35px;\\n}\\n\\n.p-t-35 {\\n  padding-top: 35px;\\n}\\n\\n.m-t-40 {\\n  margin-top: 40px;\\n}\\n\\n.p-t-40 {\\n  padding-top: 40px;\\n}\\n\\n.m-t-50 {\\n  margin-top: 50px;\\n}\\n\\n.p-t-50 {\\n  padding-top: 50px;\\n}\\n\\n.m-t-60 {\\n  margin-top: 60px;\\n}\\n\\n.p-t-60 {\\n  padding-top: 60px;\\n}\\n\\n.m-t-70 {\\n  margin-top: 70px;\\n}\\n\\n.p-t-70 {\\n  padding-top: 70px;\\n}\\n\\n.m-t-80 {\\n  margin-top: 80px;\\n}\\n\\n.p-t-80 {\\n  padding-top: 80px;\\n}\\n\\n.m-t-90 {\\n  margin-top: 90px;\\n}\\n\\n.p-t-90 {\\n  padding-top: 90px;\\n}\\n\\n.m-t-100 {\\n  margin-top: 100px;\\n}\\n\\n.p-t-100 {\\n  padding-top: 100px;\\n}\\n\\n.m-t-120 {\\n  margin-top: 120px;\\n}\\n\\n.p-t-120 {\\n  padding-top: 120px;\\n}\\n\\n.m-t-150 {\\n  margin-top: 150px;\\n}\\n\\n.p-t-150 {\\n  padding-top: 150px;\\n}\\n\\n.m-t-180 {\\n  margin-top: 180px;\\n}\\n\\n.p-t-180 {\\n  padding-top: 180px;\\n}\\n\\n.m-t-200 {\\n  margin-top: 200px;\\n}\\n\\n.p-t-200 {\\n  padding-top: 200px;\\n}\\n\\n.p-15 {\\n  padding: 15px;\\n}\\n\\n.p-20 {\\n  padding: 20px;\\n}\\n\\n.p-25 {\\n  padding: 25px;\\n}\\n\\n.p-30 {\\n  padding: 30px;\\n}\\n\\n.p-y-60 {\\n  padding: 60px 0;\\n}\\n\\n.p-y-120 {\\n  padding: 120px 0;\\n}\\n\\n.w-100 {\\n  width: 100%;\\n}\\n\\n.min-w-100 {\\n  min-width: 100%;\\n}\\n\\n.max-w-250 {\\n  max-width: 250px;\\n}\\n\\n.h-200 {\\n  height: 200px;\\n}\\n\\n.l-h-one-half {\\n  line-height: 1.5;\\n}\\n\\n.font-x-small {\\n  font-size: 12px;\\n}\\n\\n.font-small {\\n  font-size: 14px;\\n}\\n\\n.font-medium {\\n  font-size: 16px;\\n}\\n\\n.font-large {\\n  font-size: 18px;\\n}\\n\\n.font-x-large {\\n  font-size: 20px;\\n}\\n\\n.font-2x-large {\\n  font-size: 24px;\\n}\\n\\n.font-3x-large {\\n  font-size: 28px;\\n}\\n\\n.font-4x-large {\\n  font-size: 32px;\\n}\\n\\n.font-5x-large {\\n  font-size: 36px;\\n}\\n\\n.font-6x-large {\\n  font-size: 42px;\\n}\\n\\n.font-7x-large {\\n  font-size: 46px;\\n}\\n\\n.font-8x-large {\\n  font-size: 56px;\\n}\\n\\n.font-9x-large {\\n  font-size: 60px;\\n}\\n\\n.font-w-500 {\\n  font-weight: 500;\\n}\\n\\n.font-w-600 {\\n  font-weight: 600;\\n}\\n\\n.font-w-bold {\\n  font-weight: bold;\\n}\\n\\n.font-w-bolder {\\n  font-weight: bolder;\\n}\\n\\n.text-black-one {\\n  color: #000000;\\n}\\n\\n.text-black-two {\\n  color: #111111;\\n}\\n\\n.text-black-three {\\n  color: #232628;\\n}\\n\\n.text-black-four {\\n  color: #1d1d1d;\\n}\\n\\n.text-white {\\n  color: #ffffff;\\n}\\n\\n.text-grey-one {\\n  color: #9b9b9b;\\n}\\n\\n.text-grey-two {\\n  color: #848484;\\n}\\n\\n.text-darkgrey {\\n  color: #4b4d4f;\\n}\\n\\n.text-lightgrey {\\n  color: #ececec;\\n}\\n\\n.text-darkblue {\\n  color: #2a41e8;\\n}\\n\\n.text-orange {\\n  color: #ff5e14;\\n}\\n\\n.text-yellow {\\n  color: #ffc107;\\n}\\n\\n.text-blueish-white {\\n  color: #eaedfd;\\n}\\n\\n.bg-black-one {\\n  background-color: #000000;\\n}\\n\\n.bg-black-two {\\n  background-color: #111111;\\n}\\n\\n.bg-black-three {\\n  background-color: #232628;\\n}\\n\\n.bg-white-one {\\n  background-color: #ffffff;\\n}\\n\\n.bg-white-two {\\n  background-color: #f3f3f3;\\n}\\n\\n.bg-white-three {\\n  background-color: #fafafa;\\n}\\n\\n.bg-grey-one {\\n  background-color: #9b9b9b;\\n}\\n\\n.bg-darkblue {\\n  background-color: #2a41e8;\\n}\\n\\n.bg-orange {\\n  background-color: #ff5e14;\\n}\\n\\n.bg-yellow {\\n  background-color: #ffc107;\\n}\\n\\n.bg-blueish-white {\\n  background-color: #eaedfd;\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.container-lg, .container-md, .container-full {\\n  max-width: 1100px;\\n  margin: 0 auto;\\n  padding-left: 20px;\\n  padding-right: 20px;\\n  box-sizing: border-box;\\n}\\n\\n.container-lg {\\n  max-width: 1200px;\\n}\\n\\n.container-full {\\n  max-width: 100%;\\n  padding: 0 30px;\\n}\\n\\n.center-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.btn-orange, .btn-blue, .btn-black-rounded, .btn-lightblue {\\n  display: inline-block;\\n  border: none;\\n  font-weight: 500;\\n  max-width: 200px;\\n}\\n\\n.btn-orange {\\n  background-color: #ff5e14;\\n  padding: 26px 30px;\\n  border-radius: 4px;\\n  font-size: 16px;\\n}\\n\\n.btn-blue {\\n  background-color: #2a41e8;\\n  padding: 13px 20px;\\n  border-radius: 4px;\\n  font-size: 18px;\\n}\\n\\n.btn-black-rounded {\\n  background-color: #000000;\\n  padding: 18px 37px;\\n  border-radius: 29px;\\n  font-size: 18px;\\n}\\n\\n.btn-lightblue {\\n  background-color: #eaedfd;\\n  padding: 18px 37px;\\n  border-radius: 3px;\\n  font-size: 16px;\\n}\\n\\n.d-center {\\n  justify-content: center;\\n}\\n\\n.d-center-vertical {\\n  align-items: center;\\n}\\n\\n.h-space-between {\\n  justify-content: space-between;\\n}\\n\\n.v-space-between {\\n  justify-content: space-between;\\n  flex-direction: column;\\n}\\n\\n.d-center-column {\\n  align-items: center;\\n  flex-direction: column;\\n}\\n\\n.d-center-both {\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.d-column {\\n  flex-direction: column;\\n}\\n\\n.flex-wrap {\\n  flex-wrap: wrap;\\n}\\n\\n.d-flex {\\n  display: flex;\\n}\\n\\n.gap-5 {\\n  gap: 5px;\\n}\\n\\n.gap-10 {\\n  gap: 10px;\\n}\\n\\n.gap-15 {\\n  gap: 15px;\\n}\\n\\n.gap-20 {\\n  gap: 20px;\\n}\\n\\n.gap-25 {\\n  gap: 25px;\\n}\\n\\n.gap-30 {\\n  gap: 30px;\\n}\\n\\n.gap-40 {\\n  gap: 40px;\\n}\\n\\n.area-card {\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  height: 360px;\\n  width: 400px;\\n  position: relative;\\n  border-radius: 6px;\\n}\\n.area-card-large {\\n  width: 720px;\\n}\\n.area-card-text {\\n  position: absolute;\\n  bottom: 20px;\\n  left: 40px;\\n}\\n.area-card-one {\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\\\"https://dl.dropboxusercontent.com/s/j35g8uudgwfteuk/los-angeles.png?dl=0\\\");\\n}\\n.area-card-two {\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\\\"https://dl.dropboxusercontent.com/s/1dt2jx2r3dya8rr/san-francisco.png?dl=0\\\");\\n}\\n.area-card-three {\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\\\"https://dl.dropboxusercontent.com/s/txfkk3r7ip32c9z/seattle.png?dl=0\\\");\\n}\\n.area-card-four {\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(\\\"https://dl.dropboxusercontent.com/s/pk99pxf56i9yn04/san-diego.png?dl=0\\\");\\n}\\n\\n.header {\\n  display: flex;\\n  position: fixed;\\n  width: 100%;\\n  z-index: 10;\\n}\\n.header-left {\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 10px 20px 0;\\n}\\n.header-left img {\\n  width: 220px;\\n  height: 50px;\\n}\\n.header-center {\\n  font-weight: 600;\\n  flex: 1;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 7px 30px;\\n  align-items: center;\\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\\n}\\n.header-right {\\n  display: flex;\\n  gap: 30px;\\n  align-items: center;\\n  padding: 0 0 0 20px;\\n}\\n\\n.navbar {\\n  display: flex;\\n  gap: 35px;\\n  font-size: 14px;\\n}\\n\\n.compare-icon {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n  font-size: 14px;\\n}\\n\\n.hamburger {\\n  display: none;\\n  background: transparent;\\n  font-size: 20px;\\n  border: none;\\n  outline: none;\\n}\\n\\n.cr-form {\\n  display: flex;\\n  flex-wrap: wrap;\\n  gap: 30px;\\n  padding: 30px 29px 29px;\\n  background-color: #ffffff;\\n  border-radius: 4px;\\n}\\n.cr-input-group {\\n  position: relative;\\n}\\n.cr-input-select, .cr-input-text {\\n  background-color: #ececec;\\n  border-radius: 4px;\\n  border: none;\\n  outline: none;\\n  font-size: 16px;\\n}\\n.cr-input-select-md {\\n  width: 220px;\\n  padding: 30px 16px 10px;\\n}\\n.cr-input-select-sm {\\n  width: 180px;\\n  padding: 30px 16px 10px;\\n}\\n.cr-input-text {\\n  width: 350px;\\n  padding: 20px 20px;\\n}\\n.cr-input-addon {\\n  position: absolute;\\n  left: 20px;\\n  top: 7px;\\n}\\n\\n.prop-card {\\n  max-width: 360px;\\n  border-radius: 4px;\\n}\\n.prop-card-image {\\n  height: 280px;\\n  padding: 30px 20px;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n}\\n.prop-card-image-one {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/lv2rwdfvudreogu/property-image1.png?dl=0\\\");\\n}\\n.prop-card-image-two {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/fdn69zllj10u5us/property-image2.png?dl=0\\\");\\n}\\n.prop-card-image-three {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/id57sreilmk1kd1/property-image3.png?dl=0\\\");\\n}\\n.prop-card-image-four {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/f7rwg6cm194k1c8/property-image4.png?dl=0\\\");\\n}\\n.prop-card-image-five {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/z7rtpz4r974jz1o/property-image5.png?dl=0\\\");\\n}\\n.prop-card-image-six {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/pj7ymezdjvgvzlp/property-image6.png?dl=0\\\");\\n}\\n.prop-card-label {\\n  padding: 8px 12px;\\n  border-radius: 4px;\\n}\\n.prop-card-description {\\n  padding: 20px;\\n}\\n\\n.small-card {\\n  position: relative;\\n  min-width: 350px;\\n  border-radius: 4px;\\n  box-sizing: border-box;\\n}\\n.small-card-image {\\n  min-width: 100%;\\n  max-width: 350px;\\n  max-height: 200px;\\n}\\n.small-card-highlight {\\n  box-shadow: 0 0 90px 0 rgba(41, 44, 28, 0.2);\\n}\\n\\n.card-padding-1 {\\n  padding: 30px 35px 45px;\\n}\\n\\n.card-padding-2 {\\n  padding: 30px 35px;\\n}\\n\\n.small-label {\\n  padding: 10px;\\n}\\n\\n.footer-icons {\\n  align-items: center;\\n}\\n.footer-links {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  color: rgba(255, 255, 255, 0.5);\\n}\\n.footer-text {\\n  color: rgba(255, 255, 255, 0.5);\\n}\\n.footer-description {\\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\\n  gap: 60px;\\n}\\n.footer-about {\\n  width: 400px;\\n}\\n\\n.icon-wrapper {\\n  padding: 30px;\\n  border-left: 1px solid rgba(255, 255, 255, 0.07);\\n  border-right: 1px solid rgba(255, 255, 255, 0.07);\\n}\\n\\n.hero {\\n  height: 650px;\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/dkj02chybrem0zw/hero-bg-image.png?dl=0\\\");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n}\\n.hero-wrapper {\\n  position: relative;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n\\n.hotDeal-image {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/apqnlra2rqgn5si/hotDeal.png?dl=0\\\");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  height: 600px;\\n  width: 50%;\\n}\\n.hotDeal-description {\\n  width: 50%;\\n  padding: 30px 20px;\\n  box-sizing: border-box;\\n  height: 600px;\\n}\\n\\n.play-btn-circle {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 60px;\\n  height: 60px;\\n  border-radius: 50%;\\n  border: 2px solid #9b9b9b;\\n}\\n\\n.triangle {\\n  display: inline-block;\\n  width: 17px;\\n  height: 17px;\\n  clip-path: polygon(0 0, 100% 50%, 0 100%);\\n}\\n\\n.agents-card {\\n  position: relative;\\n  box-sizing: border-box;\\n  min-width: 370px;\\n  transition: all 0.4s linear;\\n  transform: translateX(0);\\n  left: 0;\\n}\\n.agents-card img {\\n  width: 100%;\\n}\\n.agents-card-wrapper {\\n  overflow: hidden;\\n  display: flex;\\n  justify-content: flex-start;\\n  gap: 20px;\\n}\\n\\n.social-icons {\\n  border: 1px solid #ececec;\\n  border-radius: 4px;\\n  padding: 10px 20px;\\n}\\n\\n.circle {\\n  width: 20px;\\n  height: 20px;\\n  border-radius: 50%;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.border-rounded {\\n  border: 1px solid #111111;\\n}\\n\\n.dot {\\n  display: inline-block;\\n  width: 10px;\\n  height: 10px;\\n  background-color: #111111;\\n  border-radius: 50%;\\n}\\n\\n.sell-property {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/dkj02chybrem0zw/hero-bg-image.png?dl=0\\\");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  height: 700px;\\n  align-items: center;\\n}\\n.sell-property-card {\\n  padding: 80px 50px;\\n  max-width: 600px;\\n}\\n.sell-property-btn {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.feedback {\\n  background-image: url(\\\"https://dl.dropboxusercontent.com/s/h1m34nutq9ldmz6/testimonials-bg-1.png?dl=0\\\");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n  background-size: cover;\\n  height: 600px;\\n  position: relative;\\n}\\n.feedback-cards-wrapper {\\n  display: flex;\\n  overflow: hidden;\\n}\\n.feedback-card {\\n  transform: translate(0);\\n  transition: all 0.4s linear;\\n}\\n.feedback-heading {\\n  display: flex;\\n  flex-direction: column;\\n  height: 200px;\\n  justify-content: center;\\n}\\n.feedback-user-image {\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 50%;\\n  object-fit: fill;\\n}\\n.feedback-sliderBtn {\\n  position: absolute;\\n  right: 5%;\\n  bottom: 10%;\\n}\\n\\n.slider-btn {\\n  padding: 15px 22px;\\n  background-color: #2a41e8;\\n  color: #ffffff;\\n  border: none;\\n  outline: none;\\n  border-radius: 4px;\\n}\\n\\n@media screen and (max-width: 800px) {\\n  .font-x-small {\\n    font-size: 12px;\\n  }\\n  .font-small {\\n    font-size: 14px;\\n  }\\n  .font-medium {\\n    font-size: 15px;\\n  }\\n  .font-large {\\n    font-size: 16px;\\n  }\\n  .font-x-large {\\n    font-size: 18px;\\n  }\\n  .font-2x-large {\\n    font-size: 20px;\\n  }\\n  .font-3x-large {\\n    font-size: 22px;\\n  }\\n  .font-4x-large {\\n    font-size: 25px;\\n  }\\n  .font-5x-large {\\n    font-size: 28px;\\n  }\\n  .font-6x-large {\\n    font-size: 32px;\\n  }\\n  .font-7x-large {\\n    font-size: 35px;\\n  }\\n  .font-8x-large {\\n    font-size: 38px;\\n  }\\n  .font-9x-large {\\n    font-size: 40px;\\n  }\\n  .m-t-35 {\\n    margin-top: 30px;\\n  }\\n  .p-t-35 {\\n    padding-top: 30px;\\n  }\\n  .m-t-40 {\\n    margin-top: 32px;\\n  }\\n  .p-t-40 {\\n    padding-top: 32px;\\n  }\\n  .m-t-45 {\\n    margin-top: 38px;\\n  }\\n  .p-t-45 {\\n    padding-top: 38px;\\n  }\\n  .m-t-50 {\\n    margin-top: 40px;\\n  }\\n  .p-t-50 {\\n    padding-top: 40px;\\n  }\\n  .m-t-60 {\\n    margin-top: 45px;\\n  }\\n  .p-t-60 {\\n    padding-top: 45px;\\n  }\\n  .m-t-70 {\\n    margin-top: 52px;\\n  }\\n  .p-t-70 {\\n    padding-top: 52px;\\n  }\\n  .m-t-80 {\\n    margin-top: 60px;\\n  }\\n  .p-t-80 {\\n    padding-top: 60px;\\n  }\\n  .m-t-90 {\\n    margin-top: 65px;\\n  }\\n  .p-t-90 {\\n    padding-top: 65px;\\n  }\\n  .m-t-100 {\\n    margin-top: 70px;\\n  }\\n  .p-t-100 {\\n    padding-top: 70px;\\n  }\\n  .m-t-120 {\\n    margin-top: 80px;\\n  }\\n  .p-t-120 {\\n    padding-top: 80px;\\n  }\\n  .m-t-150 {\\n    margin-top: 100px;\\n  }\\n  .p-t-150 {\\n    padding-top: 100px;\\n  }\\n  .m-t-180 {\\n    margin-top: 120px;\\n  }\\n  .p-t-180 {\\n    padding-top: 120px;\\n  }\\n  .m-t-200 {\\n    margin-top: 140px;\\n  }\\n  .p-t-200 {\\n    padding-top: 140px;\\n  }\\n  .mob-d-center {\\n    justify-content: center;\\n  }\\n  .small-card {\\n    min-width: 100%;\\n  }\\n  .small-card-image {\\n    max-width: 100%;\\n  }\\n  .header {\\n    flex-direction: column;\\n    gap: 50px;\\n  }\\n  .header-center {\\n    display: none;\\n    flex-direction: column;\\n    text-align: center;\\n    gap: 50px;\\n    flex: 0;\\n  }\\n  .header-right {\\n    display: none;\\n    justify-content: center;\\n  }\\n  .navbar {\\n    gap: 30px;\\n    flex-direction: column;\\n    font-size: 20px;\\n  }\\n  .navbar li select {\\n    font-size: 20px;\\n  }\\n  .compare-icon {\\n    font-size: 20px;\\n  }\\n  .hamburger {\\n    display: block;\\n  }\\n  .btn-orange,\\n.btn-black-rounded {\\n    padding: 20px 30px;\\n  }\\n  .hotDeal-image {\\n    width: 100%;\\n    height: 300px;\\n  }\\n  .hotDeal-description {\\n    width: 100%;\\n  }\\n  .area-card-large {\\n    width: 370px;\\n  }\\n  .agents-card {\\n    min-width: 100%;\\n  }\\n  .slider-btn {\\n    padding: 8px 14px;\\n  }\\n  .feedback-sliderBtn {\\n    position: absolute;\\n    right: 2%;\\n    bottom: 7%;\\n  }\\n  .footer-icons {\\n    flex-direction: column;\\n    gap: 30px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpage8/./sass/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpage8/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpage8/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./sass/index.scss":
/*!*************************!*\
  !*** ./sass/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpage8/./sass/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpage8/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpage8/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpage8/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpage8/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpage8/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpage8/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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