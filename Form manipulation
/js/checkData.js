// check data 

function checkingData() {
    const diceUser = {
        nameUser: document.querySelector('#nameUser').value,
        lastName: document.querySelector('#sobrenomelUser').value,
        emailUser: document.querySelector('#emailUser').value,
        telUser: document.querySelector('#telUser').value,
        lastName: document.querySelector('#sobrenomelUser').value,
        
        dataSent() {
            let answerRes = document.getElementById('answer')
            answerRes.innerHTML = `Nome &#8250; ${this.nameUser}</br>`; 
            answerRes.innerHTML += `Sobrenome &#8250; ${this.lastName} </br>`; 
            answerRes.innerHTML += `Email &#8250; ${this.emailUser} </br>`;
            answerRes.innerHTML += `Telefone &#8250; ${this.telUser}`;  
        }
    }
    const showAnswer = diceUser.dataSent.bind(diceUser); 
    showAnswer(); 
}

const btnCheck = document.getElementById('btnCheck').addEventListener('click', (e) => {
    e.preventDefault(); 
    checkingData()
}); 