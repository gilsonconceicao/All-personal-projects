// menu JS

const btnMenuListItens = document.getElementById('btnMenuItens'); 

btnMenuListItens.addEventListener('click', function() {
    
    // conteiner Menu 
    let menuItens = document.getElementById('menu');
    
    if (menuItens.style.display == 'block') {
        menuItens.style.display = 'none';
        btnMenuListItens.innerHTML = '|||'; 
        btnMenuListItens.style.transform = 'rotate(90deg)'
    } else {
        menuItens.style.display = 'block';
        btnMenuListItens.innerHTML = 'X'; 
        btnMenuListItens.style.transform = 'rotate(0deg)'
    }
})