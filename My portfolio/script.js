document.getElementById("homeLink").addEventListener("click", function() {
  window.location.href = "#home";
});

document.getElementById("navbar").addEventListener("click", function() {
  window.location.href = "#skills";
});

document.getElementById("navbar").addEventListener("click", function() {
  window.location.href = "#history";
});

document.getElementById("navbar").addEventListener("click", function() {
  window.location.href = "#contact";
});

var navbar = document.querySelector(".Navbar");

var sticky = navbar.offsetTop;

var mainContainer = document.querySelector('.main_container');

window.addEventListener("scroll", function() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed");
        mainContainer.style.marginTop = navbar.offsetHeight + 'px';
    } else {
        navbar.classList.remove("fixed");
        mainContainer.style.marginTop = '0';
    }
});

document.getElementById("homeLink").addEventListener("click", function(event) {
  event.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  setTimeout(function() {
      window.location.href = "#home";
  }, 500);

  var navbarHeight = document.querySelector(".Navbar").offsetHeight;
  
  mainContainer.style.marginTop = navbarHeight + 'px';
});

