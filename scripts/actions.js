import SmoothScroll from './modules/smooth-scroll.js';
import MobileMenu from './modules/mobile-menu.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

console.log(document.querySelector('.menu-list'));

const mobileMenu = new MobileMenu('.mobile-button', '.menu-list');
mobileMenu.init();

// function outsideClick(){
//     //Seleciona o documento HTML
//     const html = document.documentElement; 
//     //Adiciona o evento de Click
//     html.addEventListener('click', handleOutsideClick);
//     //Cria a função handleOutsideClick
//     function handleOutsideClick(event){
//         console.log(event);
//     }
// }