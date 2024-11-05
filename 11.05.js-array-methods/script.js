// // HOC - high order function
// function mainF(cbFunc) {
//   return cbFunc();
// }

// //callback function
// const callBackFunc = () => {
//   return "I am CB";
// };

// console.log(mainF(callBackFunc));
// console.log(
//   mainF(function () {
//     return "hello";
//   })
// );
// console.log(
//   mainF(() => {
//     return "hello";
//   })
// );

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies

// for (let i = 0; i < webTechs.length; i++) {
//   console.log(webTechs[i]);
// }

const numbers = [40, 30, 53, 37, 98, 100]; // array of numbers

// let sum = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// FOREACH
// webTechs.forEach((element, index, array) => {
//   console.log(index, element);
//   console.log(array);
// });

// let sum = 0;
// numbers.forEach((element, index, array) => {
//   sum += element;
// });

// console.log(sum);

// MAP
const countries = [
  "Finland",
  "America",
  "Denmark",
  "Sweden",
  "Azerbaijan",
  "Norway",
  "Iceland",
  "Albania",
]; // array of strings, countries

// const countriesArr = countries.map((country, index, arr) => {
//   return country;
// });

// const countriesArr = countries.map((country, index, arr) => {
//   return country.slice(0, 3).toUpperCase();
// });

const countriesArr = countries.map((country, index, arr) =>
  country.slice(0, 3).toUpperCase()
);

// console.log(countriesArr);
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits

// console.log(fruits.map((item, index) => `${index} .${item}`));

// console.log(
//   fruits.map((item, index, array) => {
//     return item[0].toUpperCase() + item.slice(1);
//   })
// );

// let res = numbers.find((item, index) => {
//   return item > 50;
// });
// let res = numbers.findLast((item, index) => {
//   return item > 50;
// });
// let res = numbers.findIndex((item, index) => {
//   return item > 50;
// });

// let res = numbers.findLastIndex((item, index) => item > 50);

// console.log(res);

console.log(countries.find((c) => c.length > 7));

console.log(numbers.filter((n) => n > 50));

console.log(webTechs.filter((item) => item.length >= 4));
console.log(webTechs.filter((item) => item.toUpperCase() === item));

const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
    count: 2,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
    count: 7,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
    count: 3,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
    count: 4,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
    count: 3,
  },
];
const filtered = products.filter((product, i, arr) => product.price > 500);

const productArr = products.map((p) => {
  return { title: p.title, price: p.price, count: p.count };
});
console.log(productArr);

const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products

// sort by asc
animalProducts.sort((a, b) => a.localeCompare(b));
// sort by desc
animalProducts.sort((a, b) => b.localeCompare(a));

console.log(animalProducts);

// const numbers = [40, 30, 53, 37, 98, 100]; // array of numbers

// sort by asc
numbers.sort((a, b) => a - b);
//sort by desc
numbers.sort((a, b) => b - a);

console.log(numbers);

//asc by price
// products.sort((a, b) => a.price - b.price);

//desc by price
// products.sort((a, b) => b.price - a.price);

// asc by title
products.sort((a, b) => a.title.localeCompare(b.title));
// desc by title

products.sort((a, b) => b.title.localeCompare(a.title));

console.log(products);

const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

const sortedVegetables = vegetables.toSorted();

console.log(vegetables);
console.log(sortedVegetables);

console.log(numbers.every((item) => item > 0)); //true
console.log(numbers.every((item) => item > 50)); //false

console.log(numbers.some((item) => item > 50)); //true
console.log(numbers.some((item) => item < 0)); //false

//REDUCE

const scores = [95, 40, 60, 75];
// let sum = scores.reduce((sum, item, index, array) => {
//   console.log("SUM: ", sum, "item: ", item);

//   return sum + item;
// }, 0);
let sum = scores.reduce((sum, item, index, array) => sum + item, 0);

const students = ["Huseyn", "Ayten", "Lale", "Vusala", "Aslan"]; // array of strings, countries
// console.log(sum);

let abbr = students.reduce((acc, curr) => acc + curr[0], "");
console.log(abbr);

const allPrices = products.reduce(
  (sum, item) => sum + item.price * item.count,
  0
);

let str = "lorem";

console.log(Array.from(str));
console.log([...str]);
