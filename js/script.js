import SmoothScroll from './modules/smooth-scroll.js';
import MobileMenu from './modules/mobile-menu.js';
import MainAnime from './modules/main-anime.js';
import Slide from './modules/slide.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const mobileMenu = new MobileMenu('.menu', '.mobile-button', '.menu-list');
mobileMenu.init();

const mainAnime = new MainAnime('#main', '[data-main="image"]');
mainAnime.init();

const slide = new Slide('.slide-wrapper', '.slide');
slide.init();