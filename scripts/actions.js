window.addEventListener('load', setCard(), false);
//---> MENU
var menu = document.querySelector(".menu");

document.querySelector("#idOpenMenu").addEventListener('click', menuControl);
document.querySelector("#idCloseMenu").addEventListener('click', menuControl); 

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        menuControl();
    }
};

function menuControl(){
    if (menu.classList.contains('close')) {
        menu.classList.replace('close', 'open');
    } else {
        menu.classList.replace('open', 'close');
    }
}

//---> SLIDER
function setCard() {
    var card = document.getElementsByClassName('card-body');
    var max = card.length - 1;
    var actual = 0;
    
    var settings = {
        first: function(){
            card[actual].classList.add('ativo');
        },
        slide:function(){
            card[actual].classList.remove('ativo');
            actual == max ? actual = 0 : actual++;
            card[actual].classList.add('ativo');
        },
        next: function(){
            clearInterval(intervalo);
            card[actual].classList.remove('ativo');
            actual == max ? actual = 0 : actual++;
            card[actual].classList.add('ativo');
            intervalo = setInterval(settings.slide, 5000);
        },
        prev: function(){
            clearInterval(intervalo);
            card[actual].classList.remove('ativo');
            actual == 0 ? actual = max : actual--;
            card[actual].classList.add('ativo');
            intervalo = setInterval(settings.slide, 5000);
        }
    }
    
    settings.first();
    var intervalo = setInterval(settings.slide, 5000);
    document.querySelector(".next").addEventListener("click", settings.next, false);
    document.querySelector(".prev").addEventListener("click", settings.prev, false);
}

var navbar = document.querySelector('.navbar');
const navItem = document.querySelector('.nav-item').className
var cards = document.querySelector('.profile');
window.addEventListener('scroll', function () {    
    if (window.scrollY >= (cards.offsetTop - 24) && window.scrollY 
        <= cards.offsetTop + (cards.clientHeight - 24)) {             
        navbar.style.color = "white";
    } else {
        navbar.style.color = "black";
    }
});