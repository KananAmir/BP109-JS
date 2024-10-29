// alert("hello world!");

// let userName = prompt("enter ur name!");
// let userName = prompt("enter ur name!", "jhon doe");

// console.log(userName);

// window.confirm("are u sure to exit??");

// let bool = window.confirm("are u sure to delete product!");

// console.log(bool);

// if (bool) {
//   console.log("delete product");
// } else {
//   console.log("do not delete product");
// }

let firstNumber = +window.prompt("enter first number");
let secondNumber = +window.prompt("enter second number");
let operation = window.prompt("enter sign to calculate");
let result;
switch (operation) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;

  default:
    console.log("enter correct sign pls!!");
    result = 0;
    break;
}

alert(`RESULT: ${result}`);

let number = window.prompt("enter number!");

if (number > 0) {
  if (number % 2 !== 0) {
    alert(`${number} is ODD number`);
  } else {
    alert(`${number} is EVEN number`);
  }
} else {
  alert("enter positive number");
}

//ternary operator

let isOnline = true;
// if (isOnline === true) {
//   console.log("user is online");
// } else {
//   console.log("user is offline");
// }

isOnline === true
  ? console.log("user is online")
  : console.log("user is offline");
