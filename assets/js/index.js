var menuToggle = document.getElementById('menu-toggle');
var mainContent = document.getElementById('main-content');
var footerContent = document.getElementById('footer-content');


menuToggle.addEventListener('change', function() {
  if (this.checked) {
    mainContent.classList.add('main-content-shift');
    footerContent.classList.add('footer-content-shift');
  } else {
    mainContent.classList.remove('main-content-shift');
    footerContent.classList.remove('footer-content-shift');
  }
});

