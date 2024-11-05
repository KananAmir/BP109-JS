//object litheral
// const obj = {};
// const userObj = {
//   userName: "jhon_doe",
//   email: "jhon@gmail.com",
// };

// // object constructure
// const student = new Object();

// console.log(userObj);

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
  calculateAge: function (year) {
    return year - this.birthDate;
  },
  getFullName: function () {
    return `${this.fName} ${this["last name"]}`;
  },
  //   getFullName() {
  //     return `${this.fName} ${this["last name"]}`;
  //   },
  //   getFullName: () => {
  //     return `${this.fName} ${this["last name"]}`;
  //   },
};

// delete studentObj.id;

console.log(studentObj.fName);
console.log(studentObj["fName"]);
console.log(studentObj["last name"]);

console.log(studentObj);

for (key in studentObj) {
  //   console.log(key);
  //   console.log(studentObj[key]);
  console.log(key + ": " + studentObj[key]);
}

studentObj.birthDate = 2004;
console.log(studentObj.getFullName());

console.log(studentObj.calculateAge(2024));

function Employee(fullname, department, salary) {
  this.fullname = fullname;
  this.department = department;
  this.salary = salary;
}

let lala = new Employee("Lala Aslanova", "IT", 5000);
let anar = new Employee("Anar Bazarov", "Low", 100000);

console.log(lala);
console.log(anar);
