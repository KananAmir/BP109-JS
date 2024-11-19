import { User } from "./class.js";
import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";
const registerForm = document.querySelector("form");
const userNameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#pw");

// const users = JSON.parse(localStorage.getItem("users")) || [];
const users = getDataFromLocalStorage("users") || [];

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let userName = userNameInput.value.trim();
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();
  const newUser = new User(userName, email, password);

  users.push(newUser);
  // localStorage.setItem("users", JSON.stringify(users));
  setDataToLocalStorage("users", users);
  resetForm();
});

function resetForm() {
  registerForm.reset();
}
