// document.querySelector('.scroll-down a').addEventListener('click', function(event) {
//     event.preventDefault();
//     const navbar = document.querySelector('.Navbar');
//     navbar.style.position = 'fixed';
//     navbar.style.top = '0';
//     navbar.style.width = '100%';
//     const homeSection = document.getElementById('home');
//     const navbarHeight = navbar.offsetHeight;
//     window.scrollTo({
//       top: homeSection.offsetTop - navbarHeight,
//       behavior: 'smooth'
//     });
//   });

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('.main_container > div');
  const navbarLinks = document.querySelectorAll('.Navbar a');
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      currentSection = section.getAttribute('id');
    }
  });
  navbarLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});

document.getElementById("homeLink").addEventListener("click", function() {
  window.location.href = "#home";
});
