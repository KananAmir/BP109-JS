// default and named  export / import

//named import
import { students, BASE_URL, users as istifadeciler } from "./data.js";

//default import
import sum from "./data.js";

// console.log(students);
console.log(BASE_URL);

const list = document.querySelector(".list");
students.forEach((s) => {
  const liElem = document.createElement("li");
  liElem.textContent = s;
  list.appendChild(liElem);
});

console.log(sum(3, 5));

const users = [];

console.log(istifadeciler);
