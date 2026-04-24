// MENSAJE DE BIENVENIDA
window.onload = function () {
  let bienvenida = document.getElementById("bienvenida");

  if (bienvenida) {
    bienvenida.innerText = "¡Bienvenido a mi portafolio! 👋 Soy Dilan Chávez.";
    bienvenida.style.display = "block";

    // Se oculta después de 5 segundos
    setTimeout(function () {
      bienvenida.style.display = "none";
    }, 5000);
  }
};  

// BOTON DE MENU
function showMenu() {
    var btn = document.getElementById("botton-menu");
    var menu = document.getElementsByClassName("nav-menu");
    if (menu[0].classList.contains("active")){
        btn.innerText = "≡"

    }else{
        btn.innerText = "x"
    }
    menu[0].classList.toggle("active")
}


// ── CAMBIAR TEXTO ──
let botonTexto = document.getElementById("btn-cambiar-texto");
let parrafo = document.getElementById("parrafo-dinamico");

let estado = false;

if (botonTexto && parrafo) {
  botonTexto.onclick = function () {
    if (estado === false) {
      parrafo.innerText = "Mi objetivo es ser desarrollador profesional y estudiar ingeniería.";
      botonTexto.innerText = "Ver texto original";
      estado = true;
    } else {
      parrafo.innerText = "Hola, soy Dilan Chávez, tengo 17 años y soy apasionado por el desarrollo de software.";
      botonTexto.innerText = "Cambiar texto";
      estado = false;
    }
  };
}


