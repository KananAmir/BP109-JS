// addEventListener (click) vs onclik

const btn = document.querySelector(".click");

btn.addEventListener("click", function () {
  console.log("clicked with addEventListener 1");
});

btn.addEventListener("click", function () {
  console.log("clicked with addEventListener 2");
});

btn.onclick = function () {
  console.log("clicked with onclick 1");
};
btn.onclick = function () {
  console.log("clicked with onclick 2");
};
btn.onclick = function () {
  console.log("clicked with onclick 3");
};

const userNameInput = document.querySelector("#user-name");

// userNameInput.addEventListener("input", function (event) {
//   console.log(event.target.value);
// });

userNameInput.oninput = function (event) {
  console.log(event.target.value);
};
// userNameInput.onkeyup = function (event) {
//   console.log(event.target.value);
// };
