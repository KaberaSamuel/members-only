const passwordInput = document.querySelector("#password");
const checkboxInput = document.querySelector("#checkbox");

checkboxInput.addEventListener("click", () => {
  if (checkboxInput.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
