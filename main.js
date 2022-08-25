const burgerTrigger = document.querySelector('#burger_icon');
const modalTrigger = document.getElementById('modal_trigger')
const modalContainer = document.getElementById('modalLayout');
const closeIcon = document.querySelector('.close-icon');

modalTrigger.addEventListener('click', function(){
    modalContainer.classList.add('openLayout')
})

closeIcon.addEventListener('click', function(){
    modalContainer.classList.remove('openLayout')
})

let isOpen = false;

burgerTrigger.addEventListener('click', () => {
    isOpen = !isOpen

    if(!isOpen){
        document.querySelector('.navbar_mobile').classList.remove('open_navbar')
    }
    else{
        document.querySelector('.navbar_mobile').classList.add('open_navbar')
    }
})