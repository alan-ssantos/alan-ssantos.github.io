window.addEventListener('load', setCard(), false);
//---> MENU
var menu = document.querySelector(".menu");

document.querySelector("#idOpenMenu").addEventListener('click', menuControl);
document.querySelector("#idCloseMenu").addEventListener('click', menuControl); 

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
        next: function(){
            card[actual].classList.remove('ativo');
            actual == max ? actual = 0 : actual++;
            console.log(actual);
            card[actual].classList.add('ativo');
        },
        prev: function(){
            card[actual].classList.remove('ativo');
            actual == 0 ? actual = max : actual--;
            console.log(actual);
            card[actual].classList.add('ativo');
        }
    }
    
    settings.first();

    document.querySelector(".next").addEventListener("click", settings.next, false);
    document.querySelector(".prev").addEventListener("click", settings.prev, false);
}

