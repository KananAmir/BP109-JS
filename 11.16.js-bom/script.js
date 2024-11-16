// DOM - document object model
// BOM - browser object model

// console.log(this); //window object

// console.log(window.innerWidth);
// console.log(window.innerHeight);

const closeTab = document.querySelector(".close");

closeTab.addEventListener("click", () => window.close());

// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.screen.availWidth);
// console.log(window.screen.availHeight);

// console.log(window.location);
// console.log("href", window.location.href);
// console.log("host", window.location.host);
// console.log("hostname", window.location.hostname);
// console.log("pathname", window.location.pathname);
// console.log("protocol", window.location.protocol);

// console.log(window.navigator);

const text = document.querySelector(".text");
const copyBtn = document.querySelector(".copy");
copyBtn.addEventListener("click", () => {
  window.navigator.clipboard.writeText(text.textContent);
});

// window.alert("alert message");
// let bool = window.confirm("are u sure to delete product?");
// let username = window.prompt("enter username", "jhon doe");

//timing functions

//settimeout

const clearBtn = document.querySelector(".clear");

// const timeoutId = setTimeout(() => {
//   console.log("hello");
// }, 2000);

clearBtn.addEventListener("click", function () {
  //   clearTimeout(timeoutId);
  clearInterval(intervalId);
});

//setinterval

// const intervalId = setInterval(() => {
//   console.log("interval");
// }, 1000);

// let count = 0;
// const intervalId = setInterval(() => {
//   console.log(++count);

//   if (count === 10) {
//     clearInterval(intervalId);
//   }
// }, 100);

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const incBtn = document.querySelector(".increment");
const decBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");
const result = document.querySelector(".count");
const incByInputValue = document.querySelector(".inc-by-input-value");
const numberInput = document.querySelector(".number");

let count = 0;
let interval = null;
startBtn.addEventListener("click", function () {
  //   clearInterval(interval);

  this.setAttribute("disabled", null);
  stopBtn.removeAttribute("disabled");
  interval = setInterval(() => {
    count++;
    result.textContent = count;
  }, 1000);
});
stopBtn.addEventListener("click", function () {
  startBtn.removeAttribute("disabled");
  this.setAttribute("disabled", null);

  clearInterval(interval);
});

incBtn.addEventListener("click", function () {
  count++;
  result.textContent = count;
});
decBtn.addEventListener("click", function () {
  count--;
  result.textContent = count;
});
resetBtn.addEventListener("click", () => {
  count = 0;
  result.textContent = count;
});

incByInputValue.addEventListener("click", function () {
  count += numberInput.valueAsNumber;
  result.textContent = count;
});
