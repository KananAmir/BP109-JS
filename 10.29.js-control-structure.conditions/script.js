// if () {

// }else if(){

// }else if(){

// }else{

// }

// let number1 = 33;
// let number2 = 33;

// if (number1 > number2) {
//   console.log(`${number1} is larger than ${number2}`);
// } else if (number2 > number1) {
//   console.log(`${number2} is larger than ${number1}`);
// } else {
//   console.log(`${number1} is equal to ${number2}`);
// }

let num = -15;

// if (num > 0) {
//   console.log(`${num} is positive number`);
// } else if (num < 0) {
//   console.log(`${num} is negative number`);
// } else {
//   console.log(`${num} is equal to zero`);
// }

// if (num !== 0) {
//   if (num > 0) console.log(`${num} is positive number`);
//   else {
//     console.log(`${num} is negative number`);
//   }
// } else {
//   console.log(`${num} is equal to zero`);
// }

// let user = "Huseyn";
// let age = 15;
// let userBalance = 50;
let ticketPrice = 8;

const userObj = {
  name: "Huseyn",
  age: 25,
  userBalance: 50,
};

// console.log(userObj.name);

if (userObj.age >= 18 && userObj.age <= 60) {
  if (userObj.userBalance >= ticketPrice) {
    userObj.userBalance -= ticketPrice;
    console.log(
      `${userObj.name}, bilet hazırdır! Balansın: ${userObj.userBalance}`
    );
  }
} else {
  console.log(`${userObj.name}, hələ uşaqsan, böyüyəndə gələrsən :)`);
}

let weekDay = 6;
// let weekDay = +prompt("enter weekday here..");

// switch (weekDay) {
//   case 1:
//     console.log(`Today is Monday!`);
//     break;
//   case 2:
//     console.log(`Today is Tuesday!`);
//     break;
//   case 3:
//     console.log(`Today is Wednesday!`);
//     break;

//   case 4:
//     console.log(`Today is Thursaday!`);
//     break;
//   case 5:
//     console.log(`Today is Friday!`);
//     break;
//   case 6:
//     console.log(`Today is Saturday!`);
//     break;
//   case 7:
//     console.log(`Today is Sunday!`);
//     break;

//   default:
//     console.log(`${weekDay} is not a week day!`);

//     break;
// }
switch (weekDay) {
  case 1:
    console.log(`Today is Monday!`);
    break;
  case 2:
    console.log(`Today is Tuesday!`);
    break;
  case 3:
    console.log(`Today is Wednesday!`);
    break;

  case 4:
    console.log(`Today is Thursaday!`);
    break;
  case 5:
    console.log(`Today is Friday!`);
    break;
  case 6:
  case 7:
    console.log(`Today is Weekend!`);
    break;

  default:
    console.log(`${weekDay} is not a week day!`);

    break;
}
