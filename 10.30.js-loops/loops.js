// for, while, do while, for of, for in LOOPS
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");

// for(staterPoint, condition, steps){

// }

// for (let index = 1; index <= 10; index = index + 1) {
//   console.log("hello world!");
// }

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// only even numbers
// for (let i = 2; i <= 100; i = i + 2) {
//   console.log(i);
// }
// for (let i = 1; i <= 100; i = i + 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// infinite loop

// let count = 0;
// for (;;) {
//   //   console.log("hello");
//   console.log(count++);

//   if (count === 1000) {
//     break;
//   }
// }

// console.log("COUNT", count);

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// }

let sum = 0;
for (let i = 1; i <= 100; i++) {
  //   sum = sum + i;
  //   sum += i;
  //   console.log(`${sum} + ${i} = ${sum + i}`);
  sum += i;
}

console.log("SUM:", sum);

//while

// let c = 0;
// while (c < 5) {
//   c++;
//   console.log(c);
// }

// let number = 1;
// while (true) {
//   if (number === 1000) {
//     break;
//   }
//   number++;
//   if (number % 2 !== 1) continue;

//   console.log(number);
// }

// do while

// let a = 5;
// do {
//   a++;
//   console.log(a);
// } while (a < -10);

let num = 547;

while (num > 0) {
  let remainder = num % 10;
  num = (num - remainder) / 10;
  console.log(remainder);
}
