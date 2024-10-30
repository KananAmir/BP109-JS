// # 3 ədəd verilib. Bu 3 ədəd içindən cəmləri ən böyük olan 2 ədədi qaytaran proqram
// tərtib edin.
// Məsələn: a=1, b=2, c=3 daxil etdikdə cavab bu şəkildə olmalıdır:
// Big sum result 2 and 3*/

// let first = 9;
// let second = 2;
// let third = 1;

// // 4, 3, 5;
// let res;
// if (first > second && second > third) {
//   res = `${first} + ${second} = ${first + second}`;
// } else if (second > first && second > third) {
//   res = `${second} + ${first} = ${second + first}`;
// } else if (second > first && third > first) {
//   res = second + third;
// } else {
//   res = `${first} + ${third} = ${first + third}`;
// }

// console.log(res);

let a = 5;
let b = 3;
let c = 4;

if (a ** 2 + b ** 2 === c ** 2) {
  console.log("duzbucaqlidir");
} else if (a ** 2 + c ** 2 === b ** 2) {
  console.log("duzbucaqlidir");
} else if (b ** 2 + c ** 2 === a ** 2) {
  console.log("duzbucaqlidir");
} else {
  console.log("duzbucaqli deyil");
}

let num = 897;

let x = num % 10;
let y = ((num % 100) - x) / 10;
// let z = (num - (y * 10 + x)) / 100;
let z = (num - (num % 100)) / 100;
console.log(`${x}, ${y}, ${z}`);

if (x > y && x > z) {
  if (y > z) {
    console.log(`${x}, ${y}, ${z}`);
  } else {
    console.log(`${x}, ${z}, ${y}`);
  }
} else if (y > x && y > z) {
  if (x > z) {
    console.log(`${y}, ${x}, ${z}`);
  } else {
    console.log(`${y}, ${z}, ${x}`);
  }
} else {
  if (x > y) {
    console.log(`${z}, ${x}, ${y}`);
  } else {
    console.log(`${z}, ${y}, ${x}`);
  }
}
