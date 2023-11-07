document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('overlay');

    navbarToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', function() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const preloader = document.querySelector(".preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    }, 3000); // Hide the preloader after 3 seconds
  });
  