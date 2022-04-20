function contar() {
    this.contador = 0; 

    setInterval(() => {
        this.contador++; 
        let resTime = document.getElementById('resTime'); 
        resTime.innerHTML = this.contador; 
    }, 1000)
}

