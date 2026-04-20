const menu_button = document.getElementById("menu-btn");

menu_button.onclick = function(e) {
  menu_button.firstElementChild.classList.toggle("rotate-[-42deg]");
  menu_button.lastElementChild.classList.toggle("rotate-[42deg]");
  menu_button.firstElementChild.classList.toggle("translate-y-[10px]");
  menu_button.lastElementChild.classList.toggle("translate-y-[-10px]");
  menu_button.firstElementChild.nextElementSibling.classList.toggle("opacity-0");
}