//prime number

// let n = +prompt("enter number");

// let isPrime = true;
// for (let i = 2; i < Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// if (isPrime) {
//   console.log(`${n} is PRIME`);
// } else {
//   console.log(`${n} is not PRIME`);
// }

let str = "frontend";

// console.log(str.length);
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[str.length - 1]);

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

let text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore animi voluptatibus distinctio accusamus esse odit, odio eum saepe consectetur dolorum aut molestiae, sequi laborum. Voluptas aperiam laboriosam deserunt repellat suscipit!`;

let countOfM = 0;
let countOfSpace = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i].toLowerCase() === "l") {
    countOfM++;
  }
}
for (let i = 0; i < text.length; i++) {
  if (text[i] === " ") {
    countOfSpace++;
  }
}

// console.log("countOfM", countOfM);
// console.log("countOfM", countOfSpace);
console.log(`textdə ${countOfSpace + 1} ədəd söz var`);

const students = ["ayten", "lale", "fatima", "murad", "feyza"];
const countries = [
  "azerbaijan",
  "america",
  "norwey",
  "spain",
  "germayn",
  "albania",
];

// console.log(students[3]);
// console.log(students.length);
// console.log(students[students.length - 1]);

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// only starts with "a"
// for (let i = 0; i < countries.length; i++) {
//   if (countries[i][0] === "a") {
//     console.log(countries[i]);
//   }
// }

// starts with "a" and ends with "a"
for (let i = 0; i < countries.length; i++) {
  if (
    countries[i][0] === "a" &&
    countries[i][countries[i].length - 1] === "a"
  ) {
    console.log(countries[i]);
  }
}

const examScores = [100, 35, 56, 74, 90, 60];

let sum = 0;
let average = 0;
for (let i = 0; i < examScores.length; i++) {
  sum += examScores[i];
}

average = sum / examScores.length;
console.log("SUM:", sum);
console.log("AVERAGE:", average);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let txt = "lorem";

for (let i = txt.length - 1; i >= 0; i--) {
  console.log(txt[i]);
}
