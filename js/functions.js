var menuButton = document.getElementById('menu-button');
var menu = document.querySelector('nav')
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle('hide');
}
