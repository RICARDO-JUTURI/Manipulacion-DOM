window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    let inputTitle = document.querySelector('#titulo')

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    titulo.addEventListener('mouseover', ()=>{
        let random1 = getRandomInt(1, 257),
        random2 = getRandomInt(1, 257),
        random3 = getRandomInt(1, 257)  
        console.log('paso')

        titulo.style.color = `rgba(${random1}, ${random2}, ${random3})`
    })

    let estadoSecreto = 0

    inputTitle.addEventListener('keydown', (event) => {
        switch (true) {
            case event.key == "s" && estadoSecreto == 0:
                estadoSecreto = 1;
                break;
            case event.key == "e" && estadoSecreto == 1:
                estadoSecreto = 2;
                break;
            case event.key == "c" && estadoSecreto == 2:
                estadoSecreto = 3;
                break;
            case event.key == "r" && estadoSecreto == 3:
                estadoSecreto = 4;
                break;
            case event.key == "e" && estadoSecreto == 4:
                estadoSecreto = 5;
                break;
            case event.key == "t" && estadoSecreto == 5:
                estadoSecreto = 6;
                break;
            case event.key == "o" && estadoSecreto == 6:
                estadoSecreto = 0;
                alert("SECRETO MÁGICO")
                break;
            default: 
                estadoSecreto = 0;
        }
    })


    formulario.addEventListener('submit',(event) =>{
        event.preventDefault()
        alert('se restringio el envio de formularioo')
    })
}