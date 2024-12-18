let img = document.querySelector(".share img");
let links = document.querySelector(".share .links");

document.addEventListener("click", (e) => {
  if (e.target === img) {
    img.classList.toggle("active")
  }
  if (e.target !== img && e.target !== links) {
    if (img.classList.contains("active")) {
      img.classList.toggle("active");
    }
  }
});
