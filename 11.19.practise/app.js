// Bir qiymət izləmə sistemi hazırlayın:

// Tələbələr bir tələbə siyahısı yaratsınlar.
// Hər tələbə üçün qiymətlər əlavə edilə və saxlanıla bilsin.
// Orta qiymət avtomatik hesablanıb göstərilsin.
// Bütün məlumatlar localStorage-də saxlanılsın.

// form -> input (name),input (score), button
// button -> calculate avarega
// [
// {
// 	id: 1,
// 	score: 45,
// 	name: "khadija"
// },
// {
// 	id: 1,
// 	score: 75,
// 	name: "aslan"
// },
// ]

const form = document.querySelector("form");
const calculateBtn = document.querySelector(".calculate");
const nameInput = document.querySelector("#name");
const scoreInput = document.querySelector("#score");
const average = document.querySelector(".average");

const studentsArr = JSON.parse(localStorage.getItem("students")) || [];
average.textContent = calcAverage(studentsArr);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const student = {
    id: Date.now(),
    name: nameInput.value,
    score: scoreInput.valueAsNumber,
  };

  studentsArr.push(student);
  localStorage.setItem("students", JSON.stringify(studentsArr));
});

calculateBtn.addEventListener("click", function () {
  average.textContent = calcAverage(studentsArr);
});

function calcAverage(arr) {
  //   let sum = 0;

  //   arr.forEach((item) => {
  //     sum += item.score;
  //   });

  //   return sum / arr.length;

  return arr.reduce((sum, item) => sum + item.score, 0) / arr.length;
}
