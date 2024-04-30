document.getElementById("homeLink").addEventListener("click", function() {
  window.location.href = "#home";
});

document.querySelector('a[href="#skills"]').addEventListener('click', function(event) {
  event.preventDefault(); 
  document.getElementById('skills').scrollIntoView({ behavior: 'smooth' }); 
});

document.querySelector('a[href="#history"]').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('history').scrollIntoView({ behavior: 'smooth' });
});