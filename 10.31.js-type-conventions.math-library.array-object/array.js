const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// let arr = [];

let arr = new Array(10);
arr.push("salam");
arr[1] = "hi";
console.log(arr);
console.log(arr.length);

// console.log(fruits);
console.log(fruits[2]);

fruits[2] = "pomegranate";
console.log(fruits);
console.log(fruits[fruits.length - 1]);

let newArr = [];
for (let i = 0; i < vegetables.length; i++) {
  newArr.push(`${i}.${vegetables[i]}`);
}

console.log(newArr);

console.log(numbers.length);

// numbers.length = 3;
numbers.length = 0;

console.log(numbers);

// pop/push, shift/unshift

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

// webTechs.pop(); // arrayin en sonuncu elementini silir
// webTechs.shift(); //arrayin il elementini silir

// console.log(webTechs);

// console.log(webTechs.pop()); returns deleted item
// console.log(webTechs);
// console.log(webTechs.shift()); ..returns deleted item
// console.log(webTechs);

// webTechs.push("Phyton");
// webTechs.push("Phyton", "Django"); //arrayin sonuna elemet(ler) elave edir
webTechs.unshift("C#", "Dotnet"); //arrayin evvelinde element(ler) elave edir

// console.log(webTechs);

// console.log(webTechs.push("bootstrap")); //10
console.log(webTechs.unshift("bootstrap"));

// for in, for of

const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products

for (item of animalProducts) {
  console.log(item);
}

const student = {
  id: "bdu123",
  name: "Ayten",
  fakulty: "IT",
  university: "BDU",
  skills: ["html", "css"],
};

for (item in student) {
  //   console.log(item);
  //   console.log(student[item]);
  console.log(`${item}: ${student[item]}`);
}

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

let filteredProducts = [];
let electronics = [];
// for (let i = 0; i < products.length; i++) {
//   if (products[i].price > 40) {
//     filteredProducts.push(products[i]);
//   }
// }

// console.log(filteredProducts);

for (let i = 0; i < products.length; i++) {
  if (products[i].category.toLowerCase() === "electronics") {
    electronics.push(products[i]);
  }
}

console.log(electronics);
