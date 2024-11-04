const products = [
  { name: "one Product 1", price: 20, category: "electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

//push, pop, shift, unshift

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits

// numbers.pop();

// numbers.push(2, 4, 7);

// numbers.unshift(12)
// numbers.shift();
// console.log(numbers);

console.log(fruits.length); //4
console.log(numbers.toString());
console.log(numbers.at(1));
console.log(numbers.at(-1));

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

console.log(webTechs.reverse());

console.log(webTechs.join());
console.log(webTechs.join(","));
console.log(webTechs.join("#"));

function isPolidrom(str) {
  return str.split("").reverse().join("") === str
    ? `${str} is polidrom`
    : `${str} is NOT polidrom`;
}

console.log(isPolidrom("hello")); //polidrom deyil
console.log(isPolidrom("racecar")); //polidromdur

const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

// const vegetablesAndFruits = vegetables.concat(fruits);
const vegetablesAndFruits = [...vegetables, ...fruits];

console.log(vegetablesAndFruits);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

console.log(countries.slice());
console.log(countries.slice(3));
console.log(countries.slice(1, 4));

// countries.reverse();
// console.log(countries);

// countries.splice(1, 2);
// countries.splice(1, 2, "Azerbaijan");
// countries.splice(1, 2, "Azerbaijan", "Russian");
countries.splice(2, 0, "Georgia");
console.log(countries);

const arr = [1, 2, [3, 4, [5, 6]]];

console.log(arr.flat());

console.log(arr.flat(2));
console.log(arr);

const animalProducts = ["milk", "butter", "meat", "meat", "yoghurt"]; // array of strings, products

console.log(animalProducts.indexOf("meatttt")); //-1
console.log(animalProducts.indexOf("meat")); //2
console.log(animalProducts.lastIndexOf("meat")); //3

console.log(animalProducts.includes("mulk")); //false
console.log(animalProducts.includes("milk")); //true

const nums = [200, 95, 150, 100000, 70, 97];
const students = ["murad", "aytekin", "khadija", "leyla", "aslan"];

// console.log(scores);

// students.sort();
// nums.sort();
// nums.sort((a, b) => a - b);

// console.log(students);
// console.log(nums);
// nums.reverse();
let reversedNums = nums.toReversed();

console.log(nums);
console.log(reversedNums);

const studentsArr = ["zubayda", "ayten", "huseyn"];

// let studentsArrCopy = studentsArr;
let studentsArrCopy = [...studentsArr];

// studentsArr.push("aytekin");
studentsArrCopy.push("anar");

console.log(studentsArr);
console.log(studentsArrCopy);
