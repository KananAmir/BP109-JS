const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const allTodosBtn = document.querySelector(".all");
const completedBtn = document.querySelector(".completed");
const pendingBtn = document.querySelector(".pending");
const clearBtn = document.querySelector(".clear");
const todoList = document.querySelector("ul.todo-list");
const errorMessage = document.querySelector(".error-message");

// const todos = JSON.parse(localStorage.getItem("todos")) ?? [];
const todos = JSON.parse(localStorage.getItem("todos")) || [];

renderTodos(todos);
class Todo {
  constructor(todoText) {
    this.todoText = todoText;
    this.isCompleted = false;
    this.id = Date.now();
    this.createdAt = new Date().toLocaleString();
    this.editStatus = false;
  }
}

// let todo1 = {
//   id: 1,
//   todoText: "lorem",
//   isCompleted: false,
//   createdAt: "18.11.24",
// };

//add todo

function addTodo() {
  if (validate()) {
    const todo = new Todo(todoInput.value.trim());
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos(todos);
    errorMessage.classList.replace("d-block", "d-none");
    todoInput.classList.remove("border-red");

    Swal.fire({
      title: "Todo Added Succesfully!",
      text: "You clicked the button!",
      icon: "success",
    });
  } else {
    errorMessage.classList.replace("d-none", "d-block");
    todoInput.classList.add("border-red");
  }

  reset();
  calculatePendingCount();
}
addBtn.addEventListener("click", addTodo);

//render todos

function renderTodos(todosArr) {
  todoList.innerHTML = "";
  todosArr.forEach((todo) => {
    const liElem = document.createElement("li");
    liElem.className =
      "list-group-item list-group-item-success d-flex justify-content-between align-items-center mb-3";

    liElem.innerHTML = `
            <div class="d-flex gap-2 align-items-center">
              <input
                class="form-check-input mt-0 mark-as-completed"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
                data-id=${todo.id}
                ${todo.isCompleted ? "checked" : ""}
              />
              <p class=${todo.isCompleted ? "todo-completed" : ""}>${
      todo.todoText
    } <span class="fst-italic">${todo.createdAt}</span> <span class="${
      todo.editStatus ? "d-block text-warning" : "d-none"
    }">edited</span></p>
            </div>
            <div class="actions">
              <button class="btn btn-success edit" data-id=${todo.id}>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn btn-danger delete" data-id=${todo.id}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
      `;

    todoList.appendChild(liElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      //   console.log(this);

      Swal.fire({
        title: "Are you sure t0 delete todo?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const todoId = this.getAttribute("data-id");
          deleteTodo(todoId);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });

  allEditBtns = document.querySelectorAll(".edit");

  allEditBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const todoId = this.getAttribute("data-id");
      const editedTodo = todos.find((todo) => todo.id == todoId);
      console.log(editedTodo);

      Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Save",

        allowOutsideClick: () => !Swal.isLoading(),
      }).then((result) => {
        // console.log(result);

        if (result.isConfirmed) {
          editedTodo.todoText = result.value.trim();
          editedTodo.editStatus = true;
          editedTodo.createdAt = new Date().toLocaleString();
          localStorage.setItem("todos", JSON.stringify(todos));
          renderTodos(todos);
          Swal.fire({
            title: `todo updated successfully!!`,
          });
        }
      });

      const editInput = document.querySelector("#swal2-input");
      editInput.value = editedTodo.todoText;
    });
  });
  const allMarkAsCompletedCheckboxs =
    document.querySelectorAll(".mark-as-completed");

  allMarkAsCompletedCheckboxs.forEach((input) => {
    input.addEventListener("change", function (e) {
      const id = this.getAttribute("data-id");
      toggleCompleted(id);
    });
  });
}

//delete todo
function deleteTodo(id) {
  const idx = todos.findIndex((todo) => todo.id == id);
  //   console.log(idx);
  todos.splice(idx, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
  calculatePendingCount();
}

//toggle completed
function toggleCompleted(id) {
  //   console.log(id);
  const todo = todos.find((todo) => todo.id == id);
  if (todo.isCompleted === true) {
    todo.isCompleted = false;
  } else {
    todo.isCompleted = true;
  }

  renderTodos(todos);
  calculatePendingCount();
}
//reset input

function reset() {
  todoInput.value = "";
}

function validate() {
  let isValidate = false;
  if (todoInput.value.trim() !== "") {
    isValidate = true;
  }

  return isValidate;
}

//show error message
todoInput.addEventListener("input", function (event) {
  if (event.target.value.trim() !== "") {
    errorMessage.classList.replace("d-block", "d-none");
    this.classList.remove("border-red");
  } else {
    errorMessage.classList.replace("d-none", "d-block");
    this.classList.add("border-red");
  }
});

// add when enter button clicked

window.addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    addTodo();
  }
});

allTodosBtn.addEventListener("click", function () {
  renderTodos(todos);
});
pendingBtn.addEventListener("click", function () {
  const filteredTodos = todos.filter((todo) => !todo.isCompleted);
  renderTodos(filteredTodos);
});
completedBtn.addEventListener("click", function () {
  const filteredTodos = todos.filter((todo) => todo.isCompleted);
  renderTodos(filteredTodos);
});
clearBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure t0 delete all todos?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      todos.length = 0;
      localStorage.setItem("todos", JSON.stringify(todos));

      renderTodos(todos);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
});

function calculatePendingCount() {
  const completedCount = document.querySelector(".completed-count");
  const filteredTodos = todos.filter((todo) => !todo.isCompleted);
  completedCount.textContent = filteredTodos.length;
}
