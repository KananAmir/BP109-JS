// primitive vs refrance (nonprimitive) DATA TYPES

//primitive types
let str = "lorem ipsum dolor";
let age = 77;

let maxNumber = Number.MAX_VALUE;
let isOnline = true;
// typeof

console.log(typeof age);
console.log(typeof str);
console.log(typeof isOnline);

console.log(maxNumber);

let char = "A";

let s = Symbol("a34sds5");
console.log(s);

let a;

const userName = null;

console.log(typeof a);
console.log(userName);
console.log(typeof null);

// NaN - not a number

console.log(typeof NaN);

// referance types

const studentObj = {
  studentName: "Murad Muradov",
  email: "murad@code.edu.az",
  age: 20,
  uniName: "BDU",
  skills: ["html", "css", "js"],
};

const students = ["Huseyn", "Ayten", "Vusala"];
console.log(studentObj);

// falsy values vs truth values

// if (5 < 3) {
//   console.log("5>3");
// }

// FALSY VALUES: null, undefined, NaN, false, 0, -0, 0n, "", '', ``

//TRUTH VALUES
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)
