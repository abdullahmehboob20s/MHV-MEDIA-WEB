const navbarRight = document.querySelector(".nav-right");
const hamburger = document.querySelector(".hamburger");
const crossIcon = document.querySelector(".cross-icon");

hamburger.addEventListener("click", () => {
  navbarRight.classList.toggle("open");
});
crossIcon.addEventListener("click", () => {
  navbarRight.classList.remove("open");
});
