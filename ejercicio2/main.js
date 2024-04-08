const botones = document.querySelectorAll('button');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    document.body.style.backgroundColor = boton.dataset.color;
  })
})