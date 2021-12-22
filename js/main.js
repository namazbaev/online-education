const menu = document.querySelector('#menu-btn');
const header = document.querySelector('.header');

menu.onclick = function(){
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}