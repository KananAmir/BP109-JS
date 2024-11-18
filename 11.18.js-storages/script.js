//storages - localStorage, sessionStorage, cookies

//localStorage

const addBtn = document.querySelector(".add");
const getBtn = document.querySelector(".get");
const clearBtn = document.querySelector(".clear");
const searchInput = document.querySelector(".search");

localStorage.setItem("id", 123);

addBtn.addEventListener("click", function () {
  localStorage.setItem("userName", "jhon_doe");
});

getBtn.addEventListener("click", function () {
  console.log(localStorage.getItem("userName"));
});

clearBtn.addEventListener("click", function () {
  localStorage.clear();
});

// localStorage.removeItem("id");

searchInput.addEventListener("keyup", function (e) {
  localStorage.setItem("inputValue", e.target.value);
});

//sessionStorage

// sessionStorage.setItem("userId", "Salam123");
// localStorage.setItem("userId", "Salam123");

const incBtn = document.querySelector(".inc");
const decBtn = document.querySelector(".dec");
const resetBtn = document.querySelector(".reset");
const result = document.querySelector(".res");

let count;

window.addEventListener("DOMContentLoaded", function () {
  count = localStorage.getItem("count") || 0;
  result.textContent = count;
});
incBtn.addEventListener("click", function () {
  count++;
  localStorage.setItem("count", count);
  result.textContent = count;
});
decBtn.addEventListener("click", function () {
  count--;
  localStorage.setItem("count", count);
  result.textContent = count;
});
resetBtn.addEventListener("click", function () {
  count = 0;
  localStorage.setItem("count", count);
  result.textContent = count;
});

const setDataToLocalStorage = () => {};
const getDataFromLocalStorage = () => {};

localStorage.setItem("bool", true);
console.log(JSON.parse(localStorage.getItem("bool")));

console.log(typeof localStorage.getItem("bool"));

const users = ["anar", "khadija", "lala"];

// localStorage.setItem("users", users);
// console.log(localStorage.getItem("users"));

const userObj = {
  userName: "jhon_doe",
  email: "jhon@code.edu.az",
  id: 11,
};

// localStorage.setItem("user", userObj);
// console.log(localStorage.getItem("user"));

// console.log(userObj.toString());

// console.log(JSON.stringify(userObj));

localStorage.setItem("user", JSON.stringify(userObj));
localStorage.setItem("users", JSON.stringify(users));

// console.log(localStorage.getItem("user"));
// console.log(localStorage.getItem("users"));
console.log(JSON.parse(localStorage.getItem("user")));
console.log(JSON.parse(localStorage.getItem("users")));

const modeBtn = document.querySelector(".mode-btn");

let mode = localStorage.getItem("mode") || "light";

if (mode === "dark") {
  document.body.classList.add("dark-mode");
  modeBtn.textContent = "light";
}
console.log(mode);

modeBtn.addEventListener("click", function () {
  if (this.textContent === "dark") {
    this.textContent = "light";
    localStorage.setItem("mode", "dark");
    document.body.classList.add("dark-mode");
  } else {
    this.textContent = "dark";
    localStorage.setItem("mode", "light");
    document.body.classList.remove("dark-mode");
  }
});
