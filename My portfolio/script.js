document.getElementById("homeLink").addEventListener("click", function() {
  window.location.href = "#home";
});

document.querySelector('a[href="#skills"]').addEventListener('click', function(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hacia la sección de habilidades
});
