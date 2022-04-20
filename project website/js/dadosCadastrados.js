// dados cadastrados

const btnSubmitDice = document.getElementById('btnSubmitDice')

btnSubmitDice.addEventListener('click', function(e) {
    e.preventDefault(); 

    // inputs /* nome: nameUser, email: emailUser

    const dadosDeUsuario = {
        nomeUsuario: document.getElementById('nameUser').value, 
        emailUsuario: document.getElementById('emailUser').value,  
    } 
    const {nomeUsuario: nome, emailUsuario: email} = dadosDeUsuario; 

    console.log(nome); 
    console.log(email);


    // select: options

    let select = document.querySelector('#options'); 
    let languages = select.value;

    if (nome === '' || email === '') {
        window.alert('[OPS] DIGITE OS DADOS PARA CONTINUAR!!!');
    } else {
        // local onde os dados ficaram    
        
        const localDadosText = document.getElementsByClassName('addTextDigitados')[0]; 

        localDadosText.innerHTML = `
        Nome de usuário: ${nome} </br>
        Email: ${email} </br>
        Linguagem: ${languages.toUpperCase()} `

    }

    const btnIconMenu = document.getElementById('diceUser').style.display = 'block'
}); 

// mostrar ou não conteiner dados

const btnIconMenu = document.getElementById('diceUser').addEventListener('click', () => {
    const conteinerDice = document.getElementById('localDiceUsers'); 
    if (conteinerDice.style.display == 'block') {
        conteinerDice.style.display = 'none'; 
    } else {
        conteinerDice.style.display = 'block'
    }
})