const mobileMenu = document.getElementById("menu-btn");
const menu = document.getElementById("navList");
const links = document.querySelectorAll("#navList li");

mobileMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  links.forEach((link) => {
    link.classList.toggle("active");
  });
});

document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !mobileMenu.contains(event.target)) {
    menu.classList.remove("active");
    links.forEach((link) => {
      link.classList.remove("active");
    });
  }
});
