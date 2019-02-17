const d = document;
const menu = d.querySelector(".menu");

d.querySelector("#idOpenMenu").addEventListener('click', menuControl);
d.querySelector("#idCloseMenu").addEventListener('click', menuControl); 

function menuControl(){
    if (menu.classList.contains('close')) {
        menu.classList.replace('close', 'open');
    } else {
        menu.classList.replace('open', 'close');
    }
}