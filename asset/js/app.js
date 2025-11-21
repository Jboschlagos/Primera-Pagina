const botonArriba = document.querySelector('#ir-arriba');

botonArriba.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
