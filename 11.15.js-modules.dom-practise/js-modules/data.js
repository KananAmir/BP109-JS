//named export
// export const students = ["khadija", "vusala", "aytakin", "nazifa"];
// export const users = [
//   "khadija_mammadli",
//   "vusala_alizada",
//   "aytakin_mammadli",
//   "nazifa_amirli",
// ];

const students = ["khadija", "vusala", "aytakin", "nazifa"];
const users = [
  "khadija_mammadli",
  "vusala_alizada",
  "aytakin_mammadli",
  "nazifa_amirli",
];

const BASE_URL = "www.api.com";

//named
export { students, users, BASE_URL };

//default
// export default function sum(a, b) {
//   return a + b;
// }
function sum(a, b) {
  return a + b;
}

export default sum;
