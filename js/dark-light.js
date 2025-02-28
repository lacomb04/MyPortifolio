let menumobile = document.querySelectorAll("#menu-btn div");
let trilho = document.getElementById("trilho");
let body = document.querySelector("body");
let boldNeon = document.querySelectorAll(".bold-neon");
let linkHover = document.querySelectorAll("#navList li");
let navList = document.getElementById("navList");

trilho.addEventListener("click", () => {
  trilho.classList.toggle("dark");
  body.classList.toggle("dark");
  boldNeon.forEach((elemento) => {
    elemento.classList.toggle("dark");
  });
  navList.classList.toggle("dark");
  menumobile.forEach((div) => {
    div.classList.toggle("dark");
  });
  linkHover.forEach((link) => {
    link.classList.toggle("dark");
  });
});
