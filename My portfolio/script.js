document.getElementById("homeLink").addEventListener("click", function() {
  window.location.href = "#home";
});

document.getElementById("navbar").addEventListener("click", function() {
  window.location.href = "#skills";
});

document.getElementById("navbar").addEventListener("click", function() {
  window.location.href = "#history";
});

// Obtén el Navbar
var navbar = document.querySelector(".Navbar");

// Obtén la posición inicial del Navbar
var sticky = navbar.offsetTop;

// Obtén el contenedor principal
var mainContainer = document.querySelector('.main_container');

// Agrega un evento de scroll
window.addEventListener("scroll", function() {
    // Si el usuario ha hecho scroll suficiente
    if (window.pageYOffset >= sticky) {
        // Agrega la clase 'fixed' al Navbar
        navbar.classList.add("fixed");
        // Ajusta el margen superior del contenedor principal
        mainContainer.style.marginTop = navbar.offsetHeight + 'px';
    } else {
        // Remueve la clase 'fixed' del Navbar
        navbar.classList.remove("fixed");
        // Restaura el margen superior del contenedor principal
        mainContainer.style.marginTop = '0';
    }
});

document.getElementById("homeLink").addEventListener("click", function(event) {
  // Previene el comportamiento por defecto del enlace
  event.preventDefault();
  
  // Mueve la ventana a la parte superior de la página
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  
  // Redirige al ancla "home" después de un pequeño retraso
  setTimeout(function() {
      window.location.href = "#home";
  }, 500); // Ajusta el valor del retraso según sea necesario

  // Obtén la altura del Navbar
  var navbarHeight = document.querySelector(".Navbar").offsetHeight;
  
  // Reducir el margen superior del contenedor principal para dejar espacio para el Navbar
  mainContainer.style.marginTop = navbarHeight + 'px';
});

// Agrega un evento de scroll
window.addEventListener("scroll", function() {
  // Si el usuario ha hecho scroll suficiente
  if (window.pageYOffset >= sticky) {
      // Agrega la clase 'fixed' al Navbar
      navbar.classList.add("fixed");
      // Ajusta el margen superior del contenedor principal
      mainContainer.style.marginTop = navbar.offsetHeight + 'px';
  } else {
      // Remueve la clase 'fixed' del Navbar
      navbar.classList.remove("fixed");
      // Restaura el margen superior del contenedor principal
      mainContainer.style.marginTop = '0';
  }
});
