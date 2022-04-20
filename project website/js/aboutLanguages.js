/* mostrar próximo section */

const btnShowConteiner = document.getElementsByClassName('linkVerMais')[0];

btnShowConteiner.addEventListener('click', function() {
    let linguagensConteiner = document.getElementById('linguagensConteiner');

    window.alert('Opa! Agora é só continuar a vendo pagina. Veja mais abaixo.')

    if (linguagensConteiner.style.display == 'block') {
        linguagensConteiner.style.display = 'none';
    } else {
        linguagensConteiner.style.display = 'block'; 
    }
})


/* HTML  */

const btnShowHtml = document.getElementById('btnShowHtml'); 

btnShowHtml.addEventListener('click', function() {
    let conteinerHtml = document.getElementById('aboutHtml'); 

    if (conteinerHtml.style.display == 'block') {
        conteinerHtml.style.display = 'none'; 
        btnShowHtml.innerHTML = '+';
        //ocultando os demais
        
    } else {
        conteinerHtml.style.display = 'block'; 
        btnShowHtml.innerHTML = '-'
    }
}); 

/* CSS */

const btnShowCSS = document.getElementById('btnShowCSS'); 

btnShowCSS.addEventListener('click', function() {
    let conteinerCSS = document.getElementById('aboutCSS'); 
    if (conteinerCSS.style.display == 'block') {
        conteinerCSS.style.display = 'none';
        btnShowCSS.innerHTML = '+'; 

    } else {
        conteinerCSS.style.display = 'block'; 
        btnShowCSS.innerHTML = '-'
    }
}); 

/* JAVASCRIPET */

const btnShowJavascript = document.getElementById('btnShowJavascript'); 

btnShowJavascript.addEventListener('click', function() {
    let conteinerJS = document.getElementById('aboutJavascript'); 
    if (conteinerJS.style.display == 'block') {
        conteinerJS.style.display = 'none'; 
        btnShowJavascript.innerHTML = '+'; 
    } else {
        conteinerJS.style.display = 'block'; 
        btnShowJavascript.innerHTML = '-';
    }
}); 