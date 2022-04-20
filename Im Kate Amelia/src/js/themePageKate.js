

function themeDark () {
    document.body.classList.toggle('darkTheme');

    let btnOptionClick = document.getElementsByClassName('btnThema')[0]
    
    if (btnOptionClick.innerHTML == '<i class="fa-solid fa-moon"></i>') {
        btnOptionClick.innerHTML = '<i class="fa-solid fa-cloud-sun"></i>'
        btnOptionClick.style.color = 'white'; 
        document.getElementsByClassName('btnMenuMobile')[0].style.color = 'white'
    } else {
        btnOptionClick.innerHTML = '<i class="fa-solid fa-moon"></i>'
        btnOptionClick.style.color = 'black'; 
        document.getElementsByClassName('btnMenuMobile')[0].style.color = 'black'
    }
}