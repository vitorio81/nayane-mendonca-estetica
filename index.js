function exibirMenu() {
    const ulOptions = document.getElementById('ul-options');
    if(ulOptions.style.display === 'block'){
        ulOptions.style.display = 'none'
    } else{
        ulOptions.style.display = 'block'
    }
}

function novoTamanho(){
    const ulOptions = document.getElementById('ul-options')
    if (window.innerWidth >= 576) {
        const ulOptions = document.getElementById('ul-options').style.display = 'block'
    } else {
        const ulOptions = document.getElementById('ul-options').style.display = 'none'
    }
}