document.addEventListener('DOMContentLoaded', function () {
  // Function to toggle mobile menu
  var menuToggle = document.querySelector('.menu-toggle');
  var navList = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    navList.classList.toggle('active');
  });

  // Smooth scroll function
  function smoothScroll(target, duration) {
    var targetSection = document.querySelector(target);
    var targetPosition = targetSection.offsetTop - 50;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var scrollAmount = Math.easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollAmount);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }

  // Add smooth scroll functionality to navigation links
  var navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetSection = this.getAttribute('href');
      smoothScroll(targetSection, 1000);
    });
  });

  // Add other scripts here...

});
