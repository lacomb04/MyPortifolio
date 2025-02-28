const navbar = document.querySelector("header nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.toggle("scrolling");
  } else {
    navbar.classList.remove("scrolling");
  }
});
