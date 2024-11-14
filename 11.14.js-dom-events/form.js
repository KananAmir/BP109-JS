//form events

// const searchInput = document.querySelector(".search");
const studentForm = document.querySelector(".student-form");
const studentName = document.querySelector("#name");
const email = document.querySelector("#email");
const uniName = document.querySelector("#uni-name");
const gpa = document.querySelector("#gpa");

const tableBody = document.querySelector("tbody");

// searchInput.addEventListener("change", function (e) {
//   console.log(e.target.value);
// });
// searchInput.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

const students = [];

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let studentInfo;

  //   console.log(Date.now());

  if (validate()) {
    studentInfo = {
      id: Date.now(),
      studentName: studentName.value,
      email: email.value,
      uniName: uniName.value,
      gpa: gpa.valueAsNumber,
    };
    //   console.log(studentName.value);
    students.push(studentInfo);
    //   console.log(students);
    drawTable(students);
    reset();
  } else {
    window.alert("all inputs should be filled!!");
  }
});

function drawTable(arr) {
  tableBody.innerHTML = "";
  arr.forEach((student) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML += `
            <td>${student.id}</td>
            <td>${student.studentName}</td>
            <td>${student.email}</td>
            <td>${student.uniName}</td>
            <td>${student.gpa}</td>
          
    `;
    tableBody.appendChild(trElem);
  });
}

function reset() {
  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => {
    input.value = "";
  });
}

const validate = () => {
  const allInputs = document.querySelectorAll("input");
  console.log(allInputs);

  return Array.from(allInputs).every((input) => input.value !== "");
};
