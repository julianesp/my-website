//incluyendo animación alert
// import swal from 'sweetalert';

//menu lateral en 768px
const header = document.querySelector(".header");
const burgerMenu = document.querySelector("#burger-menu");

burgerMenu.addEventListener("click", hideShow);

function hideShow() {
    if (header.classList.contains("is-active")) {
        header.classList.remove("is-active");
    } else {
        header.classList.add("is-active");
    }
}

//----------------------------------------

var num = 1;

function adelante() {
    num++;
    if (num > 3) {
        num = 1;
        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";
    }
}

function atras() {
    num--;
    if (num < 1) {
        num = 3;
        var foto = document.getElementById("foto");
        foto.src = "foto" + num + ".jpg";
    }
}

//----------------------------------------

//anuncios con swal para página de registro
function without_register() {
    let touch = document.getElementById("register")
    let show_message = touch

    if (show_message.addEventListener('click')) {
        return swal('Página en construcción')
    }
}

//saludo
//éste code sirve
// window.onload = function show() {
//     setTimeout(() => {
//         swal('Bienvenid@s a mi sitio web ')
//     }, 1000);
// }

function cerrar() {
    setTimeout(() => {
        var modal = document.getElementById('swal-modal')
        modal.onclose
    }, 6000);
}

function abrir() {
    setTimeout(() => {
        swal('Gracias por visitar mi tienda')
    }, 3000);
    setTimeout(() => {
        cerrar()
    }, 6000);
}

/**
 * Con esta funcion debo recorrer las imágenes
 * para que cada vez que doy clic en el boton sea derecha
 * o izquierda, se cambie de imagen
 * 
 * DEBO TENER LAS IMAGENES EN UN ARREGLO PARA
 * PODER ACCEDER A ELLAS 
 */



//ubicando el elemento a modificar

var botones = document.getElementById('slide1')

function botonesPresen() {

}