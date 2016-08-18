var menuButton = document.getElementById('menu-button');
var menu = document.querySelector('nav');
var logo = document.querySelector('.logo');

menuButton.addEventListener("click", toggleMenu);
logo.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menuButton.style.transform === "rotate(45deg)") {
    menuButton.style.transform = "";
  } else {
        menuButton.style.transform = "rotate(45deg)";
  }
  menu.classList.toggle('hide');
}
