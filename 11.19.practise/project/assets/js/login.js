import { User } from "./class.js";
import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";
const loginForm = document.querySelector("form");
const userNameOrEmailInput = document.querySelector("#username-email");
const passwordInput = document.querySelector("#pw");

// const users = JSON.parse(localStorage.getItem("users")) || [];
const users = getDataFromLocalStorage("users") || [];

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let password = passwordInput.value.trim();
  let userNameOrEmail = userNameOrEmailInput.value.trim();
  const foundUser = users.find(
    (user) =>
      user.password == password &&
      (user.email === userNameOrEmail || user.userName === userNameOrEmail)
  );

  if (foundUser) {
    foundUser.isLogged = true;
    // localStorage.setItem("users", JSON.stringify(users));
    setDataToLocalStorage("users", users);
    window.location.replace("index.html");
  } else {
    window.alert("daxil etdiyiniz məlumatlar yanlışdır!");
  }
});

function resetForm() {
  registerForm.reset();
}
