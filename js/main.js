const menu = document.querySelector('#menu-btn');
const header = document.querySelector('.header');

menu.onclick = function(){
    menu.classList.toggle('fa-times')
    header.classList.toggle('active')
}
window.onscroll = function(){
    menu.classList.remove('fa-times')
    header.classList.toggle('active')
}