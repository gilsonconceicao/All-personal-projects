// dados cadastrais users

const enviarDadosUsers = document.getElementById('btnEnviarDados');

enviarDadosUsers.addEventListener('click', function () {
    let nomeUser = document.getElementById('nameUser').value;
    let Email = document.getElementById('nameEmail').value;
    let contactUser = document.getElementById('contactUser').value;

    if (nomeUser === '' || Email === '' || contactUser === '') {
        window.alert('Digite os dados para serem enviados. ')
    } else {
        // genero 
        let sexo = document.getElementsByName('generOptions');
        let genero = '';

        if (sexo[0].checked) {
            genero = 'masculino'
        } else if (sexo[1].checked) {
            genero = 'feminino'
        }

        // dados em um objeto 
        const dados = {
            usuario: nomeUser,
            emailUser: Email,
            contatoUser: contactUser,
            generoUser: genero
        }

        let localDados = document.getElementById('dadosInfo');

        localDados.innerHTML = ` 
            <strong>Nome de usuário:</strong> ${dados.usuario}</br> 
            <strong>Email:</strong> ${dados.emailUser}</br>
            <strong>contato:</strong> ${dados.contatoUser} </br>
            <strong>gênero:</strong> ${dados.generoUser}
        `; 

        window.alert('Dados cadastrados com sucesso. Veja-os no ícone do menu.')

        // ocultar msg header 
        const preenchaDados = document.getElementById('preenchaDados').style.display = 'none'
    }
});


const btnMostrarConsulta = document.getElementById('dadosUserLogin');

btnMostrarConsulta.addEventListener('click', function () {

    let nomeUser = document.getElementById('nameUser').value;
    let Email = document.getElementById('nameEmail').value;
    let contactUser = document.getElementById('contactUser').value;

    if (nomeUser === '' || Email === '' || contactUser === '') {
        window.alert('Ops! Preencha seus dados. '); 
        const preenchaDados = document.getElementById('preenchaDados');

        if (preenchaDados.style.display == 'block') {
            preenchaDados.style.display = 'none';
        } else {
            preenchaDados.style.display = 'block';
            
        }
    } else {

        const localDados = document.getElementById('localDados');
        const dadosInfo = document.getElementById('dadosInfo');

        if (localDados.style.display == 'block' && dadosInfo.style.display == 'block') {
            localDados.style.display = 'none';
            dadosInfo.style.display = 'none'
        } else {
            localDados.style.display = 'block';
            dadosInfo.style.display = 'block'; 

        }
    }
})