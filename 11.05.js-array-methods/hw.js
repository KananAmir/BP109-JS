const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//  #Sort companies array using sort() method

itCompanies.sort();

console.log(itCompanies);

// # Verilən bir cümlədəki sözləri tərs sıraya düzmək üçün funksiya yazın.

console.log(reverseWordOrder("javascript öyrənmək maraqlıdır"));
function reverseWordOrder(str) {
  let result = str.split(" ").reverse().join(" ");
  return result;
}

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

countries.reverse().splice(7, 2, "Azerbaijan");
console.log(countries);

//   #Reverse countries array using reverse() method

//   #remove "Canada" and "Denmark", and add "Azerbaijan"
//   (splice)

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// #add 'Meat' in the beginning of your shopping cart if it has not been already added
// #add Sugar at the end of you shopping cart if it has not been already added
// #remove 'Honey' if you are allergic to honey
// #modify Tea to 'Green Tea'

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
} else {
  console.log("Meat already added");
}

console.log(shoppingCart);

function sum(...params) {
  return params.reduce((sum, item) => sum + item, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7));


