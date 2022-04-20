// menu js

let conteinerMenu = document.querySelector('.nav_menu'); 
let btnMenuMobile = document.querySelector('.btnMenuMobile'); 

function showListMenu () {
    conteinerMenu.style.display = 'block'; 
    btnMenuMobile.innerHTML = '<i class="fa-solid fa-x"></i>'
}

function closeListMenu () {
    conteinerMenu.style.display = 'none'; 
    btnMenuMobile.innerHTML = '<i class="fa-solid fa-bars"></i>'
}