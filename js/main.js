/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/animateScroll.js":
/*!*************************************!*\
  !*** ./js/modules/animateScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimateScroll)\n/* harmony export */ });\nclass AnimateScroll {\r\n  constructor(section) {\r\n    this.sections = document.querySelectorAll(section);\r\n  }\r\n\r\n  animate() {\r\n    this.halfWindowHeight = window.innerHeight * 0.6;\r\n\r\n    this.sections.forEach((section) => {\r\n      const distFromTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = (distFromTop - this.halfWindowHeight) < 0;\r\n\r\n      if (isSectionVisible) {\r\n        section.classList.add('active');\r\n      } else {\r\n        section.classList.remove('active');\r\n      }\r\n    });\r\n  }\r\n\r\n  addEvents() {\r\n    window.addEventListener('scroll', this.animate, { passive: true });\r\n  }\r\n\r\n  bind() {\r\n    this.animate = this.animate.bind(this);\r\n  }\r\n\r\n  init() {\r\n    if (this.sections.length > 0) {\r\n      this.bind();\r\n      this.addEvents();\r\n      this.animate();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://alansantos/./js/modules/animateScroll.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\r\n  let timer;\r\n  return (...args) => {\r\n    if (timer) clearTimeout(timer);\r\n    timer = setTimeout(() => {\r\n      callback(...args);\r\n      timer = null;\r\n    }, delay);\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://alansantos/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/main-anime.js":
/*!**********************************!*\
  !*** ./js/modules/main-anime.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MainAnime)\n/* harmony export */ });\nclass MainAnime {\r\n  constructor(main, image) {\r\n    this.main = document.querySelector(main);\r\n    this.image = document.querySelector(image);\r\n  }\r\n\r\n  moveImage(e) {\r\n    const mainX = this.main.offsetWidth / 2;\r\n    const mainY = this.main.offsetHeight / 2;\r\n\r\n    let x = Math.abs((mainX - e.clientX) / 10);\r\n    if (e.clientX > mainX) x = -x;\r\n\r\n    let y = Math.abs((mainY - e.clientY) / 10);\r\n    if (e.clientY > mainY) y = -y;\r\n\r\n    this.image.style.transform = `translate(${x}px, ${y}px)`;\r\n  }\r\n\r\n  addEventMove() {\r\n    document.body.addEventListener('mousemove', () => {\r\n      this.moveImage(window.event);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.main && this.image) this.addEventMove();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://alansantos/./js/modules/main-anime.js?");

/***/ }),

/***/ "./js/modules/mobile-menu.js":
/*!***********************************!*\
  !*** ./js/modules/mobile-menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MobileMenu)\n/* harmony export */ });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\r\n\r\nclass MobileMenu {\r\n  constructor(menu, mobileButton, menuList, events) {\r\n    this.menu = document.querySelector(menu);\r\n    this.mobileButton = document.querySelector(mobileButton);\r\n    this.menuList = document.querySelector(menuList);\r\n\r\n    if (events === undefined) {\r\n      this.events = ['click', 'touchstart'];\r\n    }\r\n\r\n    this.open = this.open.bind(this);\r\n  }\r\n\r\n  open(event) {\r\n    event.preventDefault();\r\n    this.menu.classList.add('active');\r\n    this.mobileButton.classList.add('active');\r\n    this.menuList.classList.add('active');\r\n    (0,_outside_click_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.menuList, this.events, () => {\r\n      this.menu.classList.remove('active');\r\n      this.mobileButton.classList.remove('active');\r\n      this.menuList.classList.remove('active');\r\n    });\r\n  }\r\n\r\n  addMenuEvents() {\r\n    this.events.forEach((e) => {\r\n      this.mobileButton.addEventListener(e, this.open);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.mobileButton && this.menuList) this.addMenuEvents();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://alansantos/./js/modules/mobile-menu.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = 'data-outside';\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, handleOutsideClick);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach((userEvent) => {\r\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\r\n    });\r\n    element.setAttribute(outside, '');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://alansantos/./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Slide)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\r\n\r\nclass Slide {\r\n  constructor(wrapper, slide, time) {\r\n    this.wrapper = document.querySelector(wrapper);\r\n    this.slide = document.querySelector(slide);\r\n    this.time = time;\r\n    this.dist = {\r\n      finalX: 0,\r\n      startX: 0,\r\n      moveX: 0,\r\n      movement: 0,\r\n    };\r\n  }\r\n\r\n  moveSlide(x) {\r\n    this.dist.finalMovement = x;\r\n    this.slide.style.transform = `translate3d(${x}px, 0, 0)`;\r\n  }\r\n\r\n  updatePosition(clientX) {\r\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\r\n    return this.dist.finalX - this.dist.movement;\r\n  }\r\n\r\n  onStart(event) {\r\n    let eventType;\r\n    if (event.type === 'mousedown') {\r\n      event.preventDefault();\r\n      this.dist.startX = event.clientX;\r\n      eventType = 'mousemove';\r\n    } else {\r\n      eventType = 'touchmove';\r\n      this.dist.startX = event.changedTouches[0].clientX;\r\n    }\r\n    this.transition(false);\r\n    this.wrapper.addEventListener(eventType, this.onMove);\r\n  }\r\n\r\n  onMove(event) {\r\n    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;\r\n    const finalPosition = this.updatePosition(pointerPosition);\r\n    this.moveSlide(finalPosition);\r\n  }\r\n\r\n  onEnd(event) {\r\n    const eventType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';\r\n    this.dist.finalX = this.dist.finalMovement;\r\n    this.wrapper.removeEventListener(eventType, this.onMove, { passive: true });\r\n    this.transition(true);\r\n    this.changeOnEnd();\r\n  }\r\n\r\n  changeOnEnd() {\r\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\r\n      this.nextSlide();\r\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\r\n      this.prevSlide();\r\n    } else {\r\n      this.changeSlide(this.index.active);\r\n    }\r\n  }\r\n\r\n  slidePosition(slide) {\r\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\r\n    return -(slide.offsetLeft - margin);\r\n  }\r\n\r\n  slidesConfig() {\r\n    this.slideArray = [...this.slide.children].map((element) => {\r\n      const position = this.slidePosition(element);\r\n      return { element, position };\r\n    });\r\n  }\r\n\r\n  slideIndex(index) {\r\n    const last = this.slideArray.length - 1;\r\n    this.index = {\r\n      prev: index ? index - 1 : undefined,\r\n      active: index,\r\n      next: index === last ? undefined : index + 1,\r\n    };\r\n  }\r\n\r\n  changeSlide(index) {\r\n    const activeSlide = this.slideArray[index];\r\n    this.slideIndex(index);\r\n    this.dist.finalX = activeSlide.position;\r\n    this.moveSlide(activeSlide.position);\r\n  }\r\n\r\n  nextSlide() {\r\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\r\n  }\r\n\r\n  prevSlide() {\r\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\r\n  }\r\n\r\n  transition(active) {\r\n    if (active) {\r\n      this.slide.style.transition = 'transform .3s';\r\n    } else {\r\n      this.slide.style.transition = '';\r\n    }\r\n  }\r\n\r\n  onResize() {\r\n    setTimeout(() => {\r\n      this.slidesConfig();\r\n      this.changeSlide(this.index.active);\r\n    }, 500);\r\n  }\r\n\r\n  addEvents() {\r\n    this.wrapper.addEventListener('mousedown', this.onStart);\r\n    this.wrapper.addEventListener('touchstart', this.onStart);\r\n    this.wrapper.addEventListener('mouseup', this.onEnd);\r\n    this.wrapper.addEventListener('touchend', this.onEnd);\r\n  }\r\n\r\n  addResizeEvent() {\r\n    window.addEventListener('resize', this.onResize);\r\n  }\r\n\r\n\r\n  bindEvents() {\r\n    this.onStart = this.onStart.bind(this);\r\n    this.onMove = this.onMove.bind(this);\r\n    this.onEnd = this.onEnd.bind(this);\r\n\r\n    this.prevSlide = this.prevSlide.bind(this);\r\n    this.nextSlide = this.nextSlide.bind(this);\r\n\r\n    this.onResize = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.onResize.bind(this), 200);\r\n  }\r\n\r\n  init() {\r\n    this.bindEvents();\r\n    this.transition(false);\r\n    this.addEvents();\r\n    this.slidesConfig();\r\n    this.addResizeEvent();\r\n    this.changeSlide(0);\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://alansantos/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/slideNav.js":
/*!********************************!*\
  !*** ./js/modules/slideNav.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SlideNav)\n/* harmony export */ });\n/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ \"./js/modules/slide.js\");\n\r\n\r\nclass SlideNav extends _slide_js__WEBPACK_IMPORTED_MODULE_0__.default {\r\n  addArrow(prev, next) {\r\n    this.prev = document.querySelector(prev);\r\n    this.next = document.querySelector(next);\r\n    this.addArrowEvents();\r\n  }\r\n\r\n  addArrowEvents() {\r\n    this.prev.addEventListener('click', this.prevSlide);\r\n    this.next.addEventListener('click', this.nextSlide);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://alansantos/./js/modules/slideNav.js?");

/***/ }),

/***/ "./js/modules/smooth-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/smooth-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SmoothScroll)\n/* harmony export */ });\nclass SmoothScroll {\r\n  constructor(links, options) {\r\n    this.links = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: 'smooth', block: 'start' };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.links.forEach((link) => {\r\n      link.addEventListener('click', this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.links.length) this.addLinkEvent();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://alansantos/./js/modules/smooth-scroll.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smooth-scroll.js */ \"./js/modules/smooth-scroll.js\");\n/* harmony import */ var _modules_animateScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animateScroll */ \"./js/modules/animateScroll.js\");\n/* harmony import */ var _modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mobile-menu.js */ \"./js/modules/mobile-menu.js\");\n/* harmony import */ var _modules_main_anime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/main-anime.js */ \"./js/modules/main-anime.js\");\n/* harmony import */ var _modules_slideNav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slideNav.js */ \"./js/modules/slideNav.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst smoothScroll = new _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"smooth\"] a[href^=\"#\"]');\r\nsmoothScroll.init();\r\n\r\nconst animateScroll = new _modules_animateScroll__WEBPACK_IMPORTED_MODULE_1__.default('[data-animate=\"scroll\"]');\r\nanimateScroll.init();\r\n\r\nconst mobileMenu = new _modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_2__.default('.menu', '.mobile-button', '.menu-list');\r\nmobileMenu.init();\r\n\r\nconst mainAnime = new _modules_main_anime_js__WEBPACK_IMPORTED_MODULE_3__.default('#main', '[data-main=\"image\"]');\r\nmainAnime.init();\r\n\r\n// const slide = new Slide('.slide-wrapper', '.slide');\r\nconst slideNav = new _modules_slideNav_js__WEBPACK_IMPORTED_MODULE_4__.default('.slide-wrapper', '.slide', 5000);\r\nslideNav.init();\r\nslideNav.addArrow('.prev', '.next');\r\n\n\n//# sourceURL=webpack://alansantos/./js/script.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;