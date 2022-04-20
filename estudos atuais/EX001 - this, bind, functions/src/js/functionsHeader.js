// To Send

// add name header 

function showAddName() {
    let msg = document.getElementById('message_textArea_click');
    let btnAdd = document.getElementById('add_name_header'); 
    if (msg.style.display == 'block') {
        msg.style.display = 'none';
        btnAdd.innerHTML = '<i class="fa-solid fa-address-book"></i>'; 
    } else {
        msg.style.display = 'block';
        btnAdd.innerHTML = '<i class="fa-brands fa-xing"></i>'; 
    }
}

function closeAddName() {
    document.getElementById('message_textArea_click').style.display = 'none'
}

// checked name code 

const toSend = document.getElementById('toSend');

toSend.addEventListener('click', () => {
    const dataUser = {
        nome: document.getElementById('nameUser').value,
        showDigit() {
            if (this.nome === '') {
                window.alert('ERRO!!! DIGITE SEU NOME PARA SEGUIR...')
            } else {
                let commentAnswer = document.querySelector('.commentAnswer').innerHTML = `
                Nome &#8250; ${this.nome} 
                `;
                let nameInputAdd = document.querySelector('.nameInputAdd'); 
                nameInputAdd.innerHTML = 'Olá, '+ this.nome +'!'; 
            }
        }
    }
    const dataUserDigit = dataUser.showDigit.bind(dataUser);
    dataUserDigit();

});


// show and close a about 

function showAndCloseAbout() {
    let conteiner = document.getElementById('message_dev_code')
    let btnCode = document.getElementById('btnLaptopCode')
    if (conteiner.style.display == 'block') {
        conteiner.style.display = 'none'; 
        btnCode.innerHTML = '<i class="fa-solid fa-laptop-code"></i>'; 
    } else {
        conteiner.style.display = 'block'; 
        btnCode.innerHTML = '<i class="fa-brands fa-xing"></i>'
    }
}