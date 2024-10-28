let userName = "Huseyn";

let university = "BDU";

let gpa = 88;

// console.log(userName);
// console.log(gpa);
// console.log(university);

// console.log(userName, university, gpa);

// console.log("I am", userName, "my universty is ", university, "gpa is ", gpa);

// let info =
//   "I am " + userName + " my universty is " + university + " gpa is " + gpa;
// console.log(info);

// template strings / template litherals

let info = `I am ${userName}, my university is ${university} and gpa is ${gpa}`;

console.log(info);

// initiaize
// declearment
// assignment
// redeclearment
// reassignment

// var, let , const

// ecmascript - js versiyaları

var group = "BP109";
var group = "BF109";

console.log(group);

// let x;

// x = 5;

// x = 15;
// console.log(x);

let faculty = "IT";

console.log(faculty);

const BASE_URL = "www.test.com";
// const BASE_URL = "asdas"

// BASE_URL = "lorem";
console.log(BASE_URL);

// let faculty = "Design"; // Cannot redeclare block-scoped variable 'faculty'

// global scope, local scope, function scope

// let / const  ---- > block scope variable
// var   ---- > function scope variable, global scope

// if(){}
// for(){}
// while(){}

let studentName = "Ayten";

{
  //   var a = 19;
  let studentName = "Zubeyda";
  //   console.log(studentName);
  const PASSWORD = "12345";
  console.log("PW:", PASSWORD);
}
console.log(studentName);

// console.log(a);

function sayHi() {
  var user = "Jhon Doe";
  console.log(`Hello, ${user}`);
}

sayHi();

examScore = 78;

console.log(examScore);

// hoisting

// console.log(x); //Uncaught ReferenceError: Cannot access 'x' before initialization

let x = 5;
let y;

// console.log(x); //5
// console.log(y); //undefined

console.log(a);
console.log(b);
var a = 3;
var b;

// console.log(a);
// console.log(b);


// naming conventions

// camelCase
// PascalCase
// snake_case

// studentName
// StudentName
// student_name
