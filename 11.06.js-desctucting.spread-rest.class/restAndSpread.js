//spread
//rest

let str = "hello";

let strArray = [...str];
console.log(strArray);

// const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

// const webTechsCopy = [...webTechs];

// webTechsCopy.pop();

// console.log(webTechs);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits

const vegetablesAndFruits = [...vegetables, ...fruits];
console.log(vegetablesAndFruits);

function sumOfNums(a, b, c) {
  return a + b + c;
}

const nums = [4, 2, 7, 1, 9];

console.log(Math.max(...nums));
console.log(Math.min(...nums));

console.log(sumOfNums(1, 2, 3)); //6
console.log(sumOfNums(1, 2, 3, 4, 5)); //6
console.log(sumOfNums(...nums));

//rest
function myBio(firstName, lastName, ...otherInfo) {
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
console.log(
  myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male")
);

function sum(...params) {
  return params.reduce((acc, curr) => acc + curr);
}

console.log(sum("a", "b", "c"));
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6));

//DESTRUCTING

const countries = [
  "Finland",
  "Denmark",
  "Sweden",
  "Norway",
  "Albania",
  "Iceland",
]; // array of strings, countries

// let f = countries[0];
// let d = countries[1];
// let s = countries[2];

let [f, d, s, ...restCountries] = countries;
// let [, , s, ...restCountries] = countries;

console.log(s);
console.log(restCountries);

// swapping
let a = 3;
let b = 4;
// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];
console.log(a);
console.log(b);

const studentObj = {
  id: "123",
  fName: "Nigar",
  birthDate: 2000,
  "last name": "Ganbarli",
  skills: ["html", "css", "js"],
  uniInfo: {
    studentId: "bdu22",
    uniName: "BDU",
    faculty: "Math",
    courseNumber: 4,
    gpa: 3.4,
  },
};

// console.log(studentObj.fName);
// console.log(studentObj["fName"]);
// let firstName = studentObj.fName;
// let skillsArr = studentObj.skills;
// let faculty = studentObj.uniInfo.faculty;

let fName = "lorem";
let {
  fName: firstName,
  birthDate,
  skills: bacariqlar,
  uniInfo: { uniName },
} = studentObj;

// let { uniName } = uniInfo;
console.log(bacariqlar);
console.log(firstName);
console.log(uniName);

const students = [
  "ayten",
  "lala",
  "huseyn",
  { studentName: "nigar", email: "nigar@code.edu.az" },
];

// const studensCopy = students; //shallow copy
// const studensCopy = [...students]; //deep copy - birinci dereceden
// const studensCopy = structuredClone(students); //deep copy
const studensCopy = JSON.parse(JSON.stringify(students)); //deep copy

students[3].email = "nigar@gmail.com";

console.log(students[3]);

studensCopy.push("anar");
students.push("khadija");

console.log(students);
console.log(studensCopy);

const user = {
  userName: "jhon doe",
  age: 33,
  city: "Baku",
};

// const userCopy = { ...user };
// const userCopy = structuredClone(user);
const userCopy = JSON.parse(JSON.stringify(user));

userCopy.email = "test@gmail.com";

console.log(user);
