function exibirMenu() {

    if (itens.display == 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}

function esconderMenu(){
    itens.style.display = 'none';
}

const myObserver = new IntersectionObserver ((observer) => {
    observer.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.animacao')

elements.forEach((element) => myObserver.observe(element))