/* alert('Vinculado') */
/* querySelector me permitirá capturar por etiqueta, por id o por clase */

/* let main = document.querySelector('main');
let h2 = document.querySelector('.subtitulo'); aqui capturo por su clase porque hay dos h2 
let a = document.querySelector('a');
let p = document.querySelectorAll('p');  All porque hay más de 1 p  */


/* ---------------------y sino función para menos código----------------------- */
function qs (element) {
    return document.querySelector(element)
}
let main = qs('.container')
let h2 = qs('.subtitulo')
let a = qs('a') 
let p = document.querySelectorAll('p')
main.style.display = "block" /* Aqui capturamos para que el elemento que tenia display none cambie a block desde aca */

/* Es una buena práctica nombrar a las variables que tienen un elemento del DOM con el signo peso adelante, 
para que sea más fácil identificarlas */

let $body = qs('body');
/* Estan el alert, el prompt y el confirm */


let userName = prompt('Ingrese su nombre') || 'Invitad@'; /* TRIM-saca los espacios vacios */
$h2.innerText += `${userName.trim()}`; 

$h2.style.textTransform = 'uppercase';

$a.style.color = '#E51B3E';

/* Agregar una clase a un elemento */
let background = confirm('¿Desea colocar un fondo de pantalla?'); /* Los confirm me devuelven true o false */
background && $body.classList.add('fondo'); /* Agarra el body, entra a la propiedad del body 
que se llama classList y le agrega atra vez de add una nueva clase que se llama fondo */
element.classList.remove.toggle('fondo') 
/* Sacariamos la clase con remove con add agregamos y con toggle: agregamos o quitamos dependiendo de como este*/


/* Resolución de un compañero
for(let i=0; i < $p.length; i++){
    if(i + 1) % 2 == 0){
        $p[i].classList.add('destacadoPar');
    }else{
        $p[i].classList.add('destacadoImpar');
    }
} */

$p.forEach((element, index) => {
    if((index + 1) % 2 == 0){
        element.classList.add('destacadoPar');
    }else{
        element.classList.add('destacadoImpar')
    }
})

/* Ejemplo con innerHTML */
$h2.innerHTML += `<a href="https://google.com">${userName.trim()}</a>`
/* aqui la palabra que esta en el h2 sera una a que nos lleve a otro sitio */

/* solo el paso 1, avanzar con los demas 
paso dos, no es un prompt sino un confirm*/