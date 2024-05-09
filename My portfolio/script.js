var header = document.querySelector(".Header");
var sticky = header.offsetTop;
var mainContainer = document.querySelector(".main_container");

var lastScrollTop = 0; // Variable para almacenar la posición del scroll anterior

window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop; // Obtener la posición actual del scroll

  // Verificar la dirección del scroll (hacia arriba o hacia abajo)
  if (currentScroll > lastScrollTop) {
    // Scroll hacia abajo
    if ((window.innerWidth <= 375 || window.innerWidth >= 414) && window.pageYOffset >= sticky) {
      header.classList.add("fixed");
      mainContainer.style.marginTop = header.offsetHeight + "px";
    }
  } else {
    // Scroll hacia arriba
    if ((window.innerWidth <= 375 || window.innerWidth >= 414) && window.pageYOffset >= sticky) {
      header.classList.remove("fixed");
      mainContainer.style.marginTop = "0";
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Actualizar la posición del scroll anterior
});
