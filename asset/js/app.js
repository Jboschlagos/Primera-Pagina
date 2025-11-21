// 1. Buscar el botón en el HTML
const botonArriba = document.querySelector('#ir-arriba');

// 2. Escuchar cuando el usuario hace clic
botonArriba.addEventListener('click', () => {
  
  // 3. Mover la página hacia arriba con scroll suave
  window.scrollTo({
    top: 0,          // hasta arriba
    behavior: 'smooth'  // suavemente
  });
});
