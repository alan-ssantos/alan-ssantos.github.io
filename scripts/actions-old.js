avar site = {
    init(){
        name();
        slider();
    }
}
    
function name(){
    var name = document.querySelectorAll('.name');
    
    name.forEach(function(item){
        item.classList.add('ativo');    
    });
}

// MENU
const m = document.querySelector('.menu');
var menu = {
    change(){        
        if (m.classList.contains('close')) {
            m.classList.replace('close', 'open');
        } else {
            m.classList.replace('open', 'close');
        }
    }
} 

document.querySelector("#idOpenMenu").addEventListener('click', function(){
    menu.change();
});
document.querySelector("#idCloseMenu").addEventListener('click', function () {
    menu.change();
}); 

document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        menu.change();
    }
};

//NAVBAR
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

//---> SLIDER
function slider() {
    var card = document.getElementsByClassName('card-body');
    var max = card.length - 1;
    var actual = 0;
    
    var settings = {
        first(){
            card[actual].classList.add('ativo');
        },
        slide(){
            card[actual].classList.remove('ativo');
            actual == max ? actual = 0 : actual++;
            card[actual].classList.add('ativo');
        },
        next(){
            clearInterval(intervalo);
            card[actual].classList.remove('ativo');
            actual == max ? actual = 0 : actual++;
            card[actual].classList.add('ativo');
            intervalo = setInterval(settings.slide, 5000);
        },
        prev(){
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

//Chama funções iniciais no site
document.addEventListener('load', site.init());