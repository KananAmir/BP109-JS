// data types - primitive vs referance

// implicit and explicit type convertions

// let a = 5 + "";
// let a = "" + 5;
// let b = "" + true;
// let c = null + "hello";
// console.log(typeof a);
// console.log(b);
// console.log(c);

// console.log("2" + 9); //29
// console.log(3 + "5"); //35

// console.log(typeof +"6");

// console.log(3 + +"5"); // 8

// console.log("17" - 3); //14
// console.log("17" - "3"); //14
// console.log(17 - "3"); //14
// console.log(17 - true); //16
// console.log("17" - true); //16

// console.log(13 + true); //14
// console.log(13 - true); // 12
// console.log(true + 7); //8

// console.log("a" - 5); //NaN
// console.log("a" * 5); //NaN
// console.log(12 - "a"); //NaN
// console.log(12 / "a"); //NaN

// explicit type conversions

// let number = "5";

// console.log(typeof number);
// console.log(typeof Number(number));

console.log(Number(NaN)); // NaN
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number("")); // 0
console.log(Number(" ")); // 0

// console.log(String(true));
// console.log(String(16));

console.log(Boolean("")); //false
console.log(Boolean(" ")); // true
console.log(Boolean("a")); //true
console.log(Boolean(15)); //true
console.log(Boolean(null)); //false
console.log(Boolean(0)); //false
console.log(Boolean("0")); //true

// Number methods
console.log(isNaN(NaN)); //true
console.log(isNaN(14)); //false
console.log(isNaN("14")); //false
console.log(isNaN("abc")); //true

console.log(isFinite(21)); //true
console.log(isFinite(21 / 0)); //false
console.log(isFinite(Infinity)); //false

// let n = 1000;
// let factorial = 1;

// for (let i = 2; i < n; i++) {
//   factorial *= i;
// }

// console.log(factorial);

console.log(parseInt(19.5)); //19
console.log(parseInt("18")); //18
console.log(parseInt("18.53")); //18
console.log(parseInt("salam")); //NaN
console.log(parseInt("5a")); //5
console.log(Number("5a")); //NaN
console.log(parseInt("5salam")); //5
console.log(parseInt("232.54salam")); //232
console.log(parseInt("a5")); //NaN

console.log(parseInt(1000, 2)); // 8
console.log(parseInt("ff", 16)); //255
console.log(parseInt(765, 8)); //501

console.log(parseFloat("23.56")); // 23.56
console.log(Number("23.56")); // 23.56
console.log(parseFloat("23.56a")); // 23.56
console.log(Number("23.56a")); // NaN

let n = 5;
console.log(n.toString());
