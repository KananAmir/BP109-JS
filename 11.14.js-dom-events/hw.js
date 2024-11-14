const allBtns = document.querySelectorAll(".btn");

const firstVal = document.querySelector("#value1");
const secondVal = document.querySelector("#value2");

const result = document.querySelector(".result");

// console.log(allBtns[0]);

allBtns[0].addEventListener("click", function () {
  result.textContent = firstVal.valueAsNumber + secondVal.valueAsNumber;
});
allBtns[1].addEventListener("click", function () {
  result.textContent = firstVal.valueAsNumber - secondVal.valueAsNumber;
});
allBtns[2].addEventListener("click", function () {
  result.textContent = firstVal.valueAsNumber * secondVal.valueAsNumber;
});
allBtns[3].addEventListener("click", function () {
  result.textContent = firstVal.valueAsNumber / secondVal.valueAsNumber;
});
allBtns[4].addEventListener("click", function () {
  firstVal.value = "";
  secondVal.value = "";
  result.textContent = 0;
});

// let res = 0;

// allBtns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     // console.log(this.textContent);

//     switch (this.textContent.toLowerCase()) {
//       case "addition":
//         res = firstVal.valueAsNumber + secondVal.valueAsNumber;
//         break;
//       case "subtruct":
//         res = firstVal.valueAsNumber - secondVal.valueAsNumber;
//         break;
//       case "multiply":
//         res = firstVal.valueAsNumber * secondVal.valueAsNumber;
//         break;
//       case "division":
//         console.log(secondVal.value);

//         if (secondVal.value != 0) {
//           res = firstVal.valueAsNumber / secondVal.valueAsNumber;
//         } else {
//           console.error("sıfıra bölmək olmaz!!");
//           res = 0;
//         }
//         break;
//       case "reset":
//         res = 0;
//         firstVal.value = "";
//         secondVal.value = "";
//         break;

//       default:
//         break;
//     }

//     result.textContent = res;
//   });
// });
