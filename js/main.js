/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return debounce; });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack:///./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/main-anime.js":
/*!**********************************!*\
  !*** ./js/modules/main-anime.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MainAnime; });\nclass MainAnime {\n  constructor(main, image) {\n    this.main = document.querySelector(main);\n    this.image = document.querySelector(image);\n  }\n\n  moveImage(e) {\n    const mainX = this.main.offsetWidth / 2;\n    const mainY = this.main.offsetHeight / 2;\n\n    let x = Math.abs((mainX - e.clientX) / 10);\n    if (e.clientX > mainX) x = -x;\n\n    let y = Math.abs((mainY - e.clientY) / 10);\n    if (e.clientY > mainY) y = -y;\n\n    this.image.style.transform = `translate(${x}px, ${y}px)`;\n  }\n\n  addEventMove() {\n    document.body.addEventListener('mousemove', () => {\n      this.moveImage(window.event);\n    });\n  }\n\n  init() {\n    if (this.main && this.image) this.addEventMove();\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/main-anime.js?");

/***/ }),

/***/ "./js/modules/mobile-menu.js":
/*!***********************************!*\
  !*** ./js/modules/mobile-menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MobileMenu; });\n/* harmony import */ var _outside_click_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outside-click.js */ \"./js/modules/outside-click.js\");\n\n\nclass MobileMenu {\n  constructor(menu, mobileButton, menuList, events) {\n    this.menu = document.querySelector(menu);\n    this.mobileButton = document.querySelector(mobileButton);\n    this.menuList = document.querySelector(menuList);\n\n    if (events === undefined) {\n      this.events = ['click', 'touchstart'];\n    }\n\n    this.open = this.open.bind(this);\n  }\n\n  open(event) {\n    event.preventDefault();\n    this.menu.classList.add('active');\n    this.mobileButton.classList.add('active');\n    this.menuList.classList.add('active');\n    Object(_outside_click_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList, this.events, () => {\n      this.menu.classList.remove('active');\n      this.mobileButton.classList.remove('active');\n      this.menuList.classList.remove('active');\n    });\n  }\n\n  addMenuEvents() {\n    this.events.forEach((e) => {\n      this.mobileButton.addEventListener(e, this.open);\n    });\n  }\n\n  init() {\n    if (this.mobileButton && this.menuList) this.addMenuEvents();\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/mobile-menu.js?");

/***/ }),

/***/ "./js/modules/outside-click.js":
/*!*************************************!*\
  !*** ./js/modules/outside-click.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return outsideClick; });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/outside-click.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Slide; });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\nclass Slide {\n  constructor(wrapper, slide, time) {\n    this.wrapper = document.querySelector(wrapper);\n    this.slide = document.querySelector(slide);\n    this.time = time;\n    this.dist = {\n      finalX: 0,\n      startX: 0,\n      moveX: 0,\n      movement: 0,\n    };\n  }\n\n  moveSlide(x) {\n    this.dist.finalMovement = x;\n    this.slide.style.transform = `translate3d(${x}px, 0, 0)`;\n  }\n\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\n    return this.dist.finalX - this.dist.movement;\n  }\n\n  onStart(event) {\n    let eventType;\n    if (event.type === 'mousedown') {\n      event.preventDefault();\n      this.dist.startX = event.clientX;\n      eventType = 'mousemove';\n    } else {\n      eventType = 'touchmove';\n      this.dist.startX = event.changedTouches[0].clientX;\n    }\n    this.transition(false);\n    this.wrapper.addEventListener(eventType, this.onMove);\n  }\n\n  onMove(event) {\n    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;\n    const finalPosition = this.updatePosition(pointerPosition);\n    this.moveSlide(finalPosition);\n  }\n\n  onEnd(event) {\n    const eventType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';\n    this.dist.finalX = this.dist.finalMovement;\n    this.wrapper.removeEventListener(eventType, this.onMove);\n    this.transition(true);\n    this.changeOnEnd();\n  }\n\n  changeOnEnd() {\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\n      this.nextSlide();\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\n      this.prevSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n\n  slidePosition(slide) {\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n    return -(slide.offsetLeft - margin);\n  }\n\n  slidesConfig() {\n    this.slideArray = [...this.slide.children].map((element) => {\n      const position = this.slidePosition(element);\n      return { element, position };\n    });\n  }\n\n  slideIndex(index) {\n    const last = this.slideArray.length - 1;\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1,\n    };\n  }\n\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index];\n    this.slideIndex(index);\n    this.dist.finalX = activeSlide.position;\n    this.moveSlide(activeSlide.position);\n  }\n\n  nextSlide() {\n    if (this.index.next !== undefined) this.changeSlide(this.index.next);\n  }\n\n  prevSlide() {\n    if (this.index.prev !== undefined) this.changeSlide(this.index.prev);\n  }\n\n  transition(active) {\n    if (active) {\n      this.slide.style.transition = 'transform .3s';\n    } else {\n      this.slide.style.transition = '';\n    }\n  }\n\n  onResize() {\n    setTimeout(() => {\n      this.slidesConfig();\n      this.changeSlide(this.index.active);\n    }, 500);\n  }\n\n  addEvents() {\n    this.wrapper.addEventListener('mousedown', this.onStart);\n    this.wrapper.addEventListener('touchstart', this.onStart);\n    this.wrapper.addEventListener('mouseup', this.onEnd);\n    this.wrapper.addEventListener('touchend', this.onEnd);\n  }\n\n  addResizeEvent() {\n    window.addEventListener('resize', this.onResize);\n  }\n\n\n  bindEvents() {\n    this.onStart = this.onStart.bind(this);\n    this.onMove = this.onMove.bind(this);\n    this.onEnd = this.onEnd.bind(this);\n\n    this.prevSlide = this.prevSlide.bind(this);\n    this.nextSlide = this.nextSlide.bind(this);\n\n    this.onResize = Object(_debounce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.onResize.bind(this), 200);\n  }\n\n  init() {\n    this.bindEvents();\n    this.transition(false);\n    this.addEvents();\n    this.slidesConfig();\n    this.addResizeEvent();\n    this.changeSlide(0);\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/slideNav.js":
/*!********************************!*\
  !*** ./js/modules/slideNav.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SlideNav; });\n/* harmony import */ var _slide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.js */ \"./js/modules/slide.js\");\n\n\nclass SlideNav extends _slide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  addArrow(prev, next) {\n    this.prev = document.querySelector(prev);\n    this.next = document.querySelector(next);\n    this.addArrowEvents();\n  }\n\n  addArrowEvents() {\n    this.prev.addEventListener('click', this.prevSlide);\n    this.next.addEventListener('click', this.nextSlide);\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/slideNav.js?");

/***/ }),

/***/ "./js/modules/smooth-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/smooth-scroll.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SmoothScroll; });\nclass SmoothScroll {\n  constructor(links, options) {\n    this.links = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.links.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.links.length) this.addLinkEvent();\n  }\n}\n\n\n//# sourceURL=webpack:///./js/modules/smooth-scroll.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smooth-scroll.js */ \"./js/modules/smooth-scroll.js\");\n/* harmony import */ var _modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mobile-menu.js */ \"./js/modules/mobile-menu.js\");\n/* harmony import */ var _modules_main_anime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/main-anime.js */ \"./js/modules/main-anime.js\");\n/* harmony import */ var _modules_slideNav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slideNav.js */ \"./js/modules/slideNav.js\");\n\n\n\n// import Slide from './modules/slide.js';\n\n\nconst smoothScroll = new _modules_smooth_scroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"smooth\"] a[href^=\"#\"]');\nsmoothScroll.init();\n\nconst mobileMenu = new _modules_mobile_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.menu', '.mobile-button', '.menu-list');\nmobileMenu.init();\n\nconst mainAnime = new _modules_main_anime_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('#main', '[data-main=\"image\"]');\nmainAnime.init();\n\n// const slide = new Slide('.slide-wrapper', '.slide');\nconst slideNav = new _modules_slideNav_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('.slide-wrapper', '.slide', 5000);\nslideNav.init();\nslideNav.addArrow('.prev', '.next');\n\n\n//# sourceURL=webpack:///./js/script.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./js/script.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/script.js */\"./js/script.js\");\n\n\n//# sourceURL=webpack:///multi_./js/script.js?");

/***/ })

/******/ });