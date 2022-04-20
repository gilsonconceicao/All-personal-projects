// menu mobile - responsividade

const btnMenu = document.getElementById('btn_menumobile'); 

btnMenu.addEventListener('click', function () {
    let itensDoMenu = window.document.getElementById('menu'); 
    let btnMobileType = document.getElementById('btn_menumobile'); 

    if (itensDoMenu.style.display == 'block') {
        itensDoMenu.style.display = 'none'; 
        btnMobileType.innerHTML = '&#9776;'
    } else {
        itensDoMenu.style.display = 'block'; 
        btnMobileType.innerHTML = '&#10007;'
    }
})