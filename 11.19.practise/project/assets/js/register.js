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

  const bool = users.some(
    (user) => user.email === email || user.userName === userName
  );

  if (!bool) {
    users.push(newUser);
    // localStorage.setItem("users", JSON.stringify(users));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Succesfully Signed Up!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace("login.html");
    });
    setDataToLocalStorage("users", users);
    resetForm();
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Daxil etdiyiniz email və ya userName artıq istifadə edilib!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

function resetForm() {
  registerForm.reset();
}
