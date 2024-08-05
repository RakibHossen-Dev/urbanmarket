let hambtn = document.getElementById("ham-btn");
let menu = document.getElementById("menu");

hambtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
