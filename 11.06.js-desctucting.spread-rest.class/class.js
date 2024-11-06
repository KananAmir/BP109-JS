//classes

// OOP - object oriented programming
// abstraction, inheritance, encapulation, polymorphism;

// access modifiers --> puplic, private, protected

// static

// let User = class {
//     sayHi() {
//       alert("Hello");
//     }
//   };
class Human {
  static id = 1;
  _status = "offline"; //protected

  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.id = ++Human.id;

    if (this.constructor === Human) {
      throw new Error("Abstract class'dan instance yarada bilməzsən");
    }
  }

  getRole() {
    ede;
    return "I am Human";
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  //   static calculateAge() {
  //     let date = new Date();
  //     return date.getFullYear() - this.birthYear;
  //   }
  calculateAge() {
    let date = new Date();
    return date.getFullYear() - this.birthYear;
  }

  get status() {
    return this._status;
  }
  //   set status(newStatus) {
  //     this._status = newStatus;
  //   }
}

//inheritence
class Teacher extends Human {
  #salary; //encapulation
  constructor(firstName, lastName, birthYear, position, salary, experience) {
    super(firstName, lastName, birthYear);
    this.position = position;
    this.#salary = salary;
    this.experience = experience;
  }

  //polymorphism
  getRole() {
    return "I am Teacher";
  }
  getSalary() {
    return this.#salary;
  }

  setSalary(newSalary) {
    try {
      if (this.#salary < newSalary) {
        this.#salary = newSalary;
      } else {
        throw new Error("yeni maaş köhnədən çox olmalıdır!");
      }
    } catch (error) {
      console.log(error);
    }
  }
}
class Student extends Human {
  constructor(firstName, lastName, birthYear, uniName, faculty, courseNumber) {
    super(firstName, lastName, birthYear);
    this.uniName = uniName;
    this.faculty = faculty;
    this.courseNumber = courseNumber;
  }

  //polymorphism
  getRole() {
    return "I am Student";
  }
  setStatus() {
    this._status = "online";
  }
}
// const human1 = new Human("Vusala", "Alizada", 1990);
// human1.firstName = "Vusalaaaa";
const teacher1 = new Teacher("Kanan", "Amirov", 1800, "developer", 100, 3);
const student1 = new Student("Zubeyda", "Alizada", 2000, "BDU", "Math", 4);
// console.log(human1.getFullName());

// console.log(human1);
console.log(teacher1);
console.log(student1);

teacher1.salary = 80;
console.log(teacher1);

// console.log("human age", human1.calculateAge());
console.log("teacher age", teacher1.calculateAge());

// console.log(human1._status);
console.log(teacher1._status);
console.log(student1._status);

student1.setStatus();
console.log(student1);

console.log(student1.getRole());

// console.log(typeof Human); //function
// console.log(typeof human1); //object
