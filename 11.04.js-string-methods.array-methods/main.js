// const sum = function () {};

// const sum = () => {};

function sum() {}

// Immediately Invoked Function Expression
// (function () {
//   console.log("IIFE");
// })();

(() => {
  console.log("IIFE");
})();

function main(cb) {
  cb();
}

//high order function
const callBack = () => {
  console.log("I am CB");
};

// main(callBack);
// main(() => {
//   console.log("hello");
// });

main(function () {
  console.log("hello");
});

((a, b) => {
  console.log("SUM:", a + b);
})(7, 5);

// sayHi();

// function sayHi() {
//   console.log("Hiii");
// }

// const sayHi = () => {
//   console.log("Hiii");
// };
const sayHi = function () {
  console.log("Hiii");
};


sayHi();
