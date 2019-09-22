import SmoothScroll from './modules/smooth-scroll.js';
import AnimateScroll from './modules/animateScroll';
import MobileMenu from './modules/mobile-menu.js';
import MainAnime from './modules/main-anime.js';
import SlideNav from './modules/slideNav.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const animateScroll = new AnimateScroll('[data-animate="scroll"]');
animateScroll.init();

const mobileMenu = new MobileMenu('.menu', '.mobile-button', '.menu-list');
mobileMenu.init();

const mainAnime = new MainAnime('#main', '[data-main="image"]');
mainAnime.init();

// const slide = new Slide('.slide-wrapper', '.slide');
const slideNav = new SlideNav('.slide-wrapper', '.slide', 5000);
slideNav.init();
slideNav.addArrow('.prev', '.next');
