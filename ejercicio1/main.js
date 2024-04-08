const boton = document.querySelector('#boton');
const parrafo = document.querySelector('#parrafo');

boton.addEventListener('click', () => {
  parrafo.textContent = prompt('Ingresa el texto que quieras que aparezca en el párrafo:');
})