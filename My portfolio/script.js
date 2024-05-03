// Función para manejar el comportamiento de desplazamiento suave al hacer clic en el enlace del Navbar
function smoothScrollTo(target) {
  window.scrollTo({
    top: target.offsetTop,
    behavior: "smooth"
  });
}

// Obtener elementos del DOM una vez al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.querySelector(".Navbar");
  var mainContainer = document.querySelector('.main_container');
  var check = document.getElementById('check');

  // Obtener la posición de inicio del Navbar
  var sticky = navbar.offsetTop;

  // Función para manejar el estado fijo del Navbar
  function handleFixedNavbar() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("fixed");
      mainContainer.style.marginTop = navbar.offsetHeight + 'px';
    } else {
      navbar.classList.remove("fixed");
      mainContainer.style.marginTop = '0';
    }
  }

  // Evento de desplazamiento para cambiar el estado del Navbar
  window.addEventListener("scroll", handleFixedNavbar);

  // Evento de clic en el enlace del Navbar
  document.getElementById("navbar").addEventListener("click", function(event) {
    var target = document.querySelector(event.target.getAttribute('href'));
    smoothScrollTo(target);
    mainContainer.style.marginTop = navbar.offsetHeight + 'px';
    check.checked = false; // Cerrar el menú al hacer clic en el enlace
  });

  // Evento de clic en el icono del menú
  document.querySelector('.menu-icon').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('ul').classList.toggle('active');
  });

  // Cerrar el menú cuando se hace clic fuera del menú
  window.addEventListener('click', function(event) {
    var menuIcon = document.getElementById('menu-icon');
    if (!event.target.matches('.icons') && !event.target.matches('#check') && !event.target.matches('#menu-icon')) {
      check.checked = false;
    }
  });

  // Llamar a la función para inicializar el estado del Navbar
  handleFixedNavbar();
});
