// ── script.js ── Interactividad del portafolio de Dilan Chávez

// ── 1. MENSAJE DE BIENVENIDA ──────────────────────────────────────
// Muestra un saludo al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const bienvenida = document.getElementById('bienvenida');
  if (bienvenida) {
    bienvenida.textContent = '¡Bienvenido a mi portafolio! 👋 Soy Dilan Chávez, desarrollador en formación.';
    bienvenida.style.display = 'block';

    // Oculta el mensaje automáticamente después de 5 segundos
    setTimeout(() => {
      bienvenida.style.opacity = '0';
      bienvenida.style.transition = 'opacity 0.6s';
      setTimeout(() => { bienvenida.style.display = 'none'; }, 600);
    }, 5000);
  }
});

// ── 2. CAMBIAR TEXTO DEL PÁRRAFO ────────────────────────────────
// Al hacer clic en el botón, alterna entre dos versiones del texto
const btnCambiarTexto = document.getElementById('btn-cambiar-texto');
const parrafoDinamico = document.getElementById('parrafo-dinamico');

let textoAlternado = false;

const textOriginal = 'Hola, soy Dilan Chávez, tengo 17 años y soy apasionado por el desarrollo de software. Actualmente me formo en Riwi.';
const textAlternativo = '💻 Mi objetivo es convertirme en un desarrollador de software profesional y estudiar ingeniería de sistemas. ¡El código es mi camino!';

if (btnCambiarTexto && parrafoDinamico) {
  btnCambiarTexto.addEventListener('click', () => {
    // Efecto de fade al cambiar el texto
    parrafoDinamico.style.opacity = '0';

    setTimeout(() => {
      textoAlternado = !textoAlternado;
      parrafoDinamico.textContent = textoAlternado ? textAlternativo : textOriginal;
      parrafoDinamico.style.opacity = '1';
      parrafoDinamico.style.transition = 'opacity 0.3s';
    }, 200);

    // Cambia el label del botón según el estado
    btnCambiarTexto.textContent = textoAlternado ? 'Ver texto original' : 'Cambiar texto';
  });
}

// ── 3. MOSTRAR / OCULTAR CONTENIDO ──────────────────────────────
// Botón que revela u oculta una sección extra con efecto dinámico
const btnToggle = document.getElementById('btn-toggle');
const contenidoOculto = document.getElementById('contenido-oculto');

if (btnToggle && contenidoOculto) {
  btnToggle.addEventListener('click', () => {
    const estaVisible = contenidoOculto.style.display === 'block';

    if (estaVisible) {
      // Ocultar con animación
      contenidoOculto.style.opacity = '0';
      setTimeout(() => { contenidoOculto.style.display = 'none'; }, 300);
      btnToggle.textContent = '📂 Ver mis habilidades';
    } else {
      // Mostrar con animación
      contenidoOculto.style.display = 'block';
      contenidoOculto.style.opacity = '0';
      contenidoOculto.style.transition = 'opacity 0.3s';
      setTimeout(() => { contenidoOculto.style.opacity = '1'; }, 10);
      btnToggle.textContent = '🙈 Ocultar habilidades';
    }
  });
}
