

var fondo = document.querySelector(".escenario");
var llanta_uno = document.querySelector(".llanta_1");
var llanta_dos = document.querySelector(".llanta_2");
var atras = document.querySelector('.atras')
var luz = document.querySelector('.luz')
var humo = document.querySelector('.humo')

fondo.addEventListener("click", cambia);
function cambia() {
    fondo.classList.add("fondito");
    llanta_uno.classList.add("uno");
    llanta_dos.classList.add("llantita");
    atras.classList.remove('oculto')
    atras.classList.add('luzMover')
    luz.classList.remove('oculto')
    luz.classList.add('luzMover')
    humo.classList.remove('oculto')
    humo.classList.add('humoMover')
}

