const body = document.querySelector("body");
const dropdown = document.querySelector(".drop-down");
const dialogbox = document.querySelector(".dialog");

dropdown.addEventListener("click", (event) => {
  if (!dialogbox.classList.contains("visible")) {
    // stopping event propagation so that we show dialog
    event.stopPropagation();
    dialogbox.classList.add("visible");
  }
});

body.addEventListener("click", () => {
  dialogbox.classList.remove("visible");
});
