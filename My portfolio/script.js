var header = document.querySelector(".Header");

var sticky = header.offsetTop;

var mainContainer = document.querySelector(".main_container");

window.addEventListener("scroll", function () {
  if (window.pageYOffset >= sticky) {
    header.classList.add("fixed");
    mainContainer.style.marginTop = header.offsetHeight + "px";
  } else {
    header.classList.remove("fixed");
    mainContainer.style.marginTop = "0";
  }
});