const menuItens = document.querySelectorAll('.menu-item a');

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

document.querySelector('.logo').addEventListener('click', scrollToSection);
menuItens.forEach((item) => {
    item.addEventListener('click', scrollToSection);
});

initName();

function initName(){
    const names = document.querySelectorAll('.name');
    
    names.forEach((name) => {
        name.classList.add('ativo');  
    });
}

