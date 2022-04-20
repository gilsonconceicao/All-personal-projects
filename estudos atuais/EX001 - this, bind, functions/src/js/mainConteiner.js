function showAndCloseknow() {
    let ButtonknowMore = document.getElementById('knowMore')
    ButtonknowMore.addEventListener('click', ()=> {
        let knowMoreConteiner = document.getElementById('knowMoreConteiner'); 
        let textButton = document.querySelector('.button-text'); 

        if (knowMoreConteiner.style.display == 'block') {
            knowMoreConteiner.style.display = 'none'; 
            textButton.innerHTML = 'CONHEÇA MAIS'; 
        } else {
            knowMoreConteiner.style.display = 'block'; 
            textButton.innerHTML = 'FECHAR'
        }
    })
}
showAndCloseknow()