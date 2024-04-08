const parrafos = document.querySelectorAll('p');

parrafos.forEach((parrafo) => {
  parrafo.addEventListener('mouseenter', () => parrafo.style.fontSize = '20px')
  parrafo.addEventListener('mouseleave', () => parrafo.style.fontSize = '16px')
})