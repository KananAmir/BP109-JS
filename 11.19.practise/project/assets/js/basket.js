import {
  calcBasketCount,
  calcFavoritesCount,
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "./helpers.js";

import { products } from "./data.js";

const tBody = document.querySelector("tbody");
const clearAll = document.querySelector(".clear-all");
const logout = document.querySelector(".logout-btn");
const login = document.querySelector(".login-btn");
const register = document.querySelector(".register-btn");
const loggedUserName = document.querySelector(".logged-user-name");

const users = getDataFromLocalStorage("users") || [];

const user = users.find((user) => user.isLogged);

if (user) {
  logout.classList.replace("d-none", "d-block");
  login.classList.replace("d-block", "d-none");
  register.classList.replace("d-block", "d-none");
  loggedUserName.textContent = user.userName;
} else {
  logout.classList.replace("d-block", "d-none");
  login.classList.replace("d-none", "d-block");
  register.classList.replace("d-none", "d-block");
}

function drawTable(arr) {
  tBody.innerHTML = "";

  arr.forEach((item) => {
    const product = products.find((p) => p.id == item.productId);

    const trElem = document.createElement("tr");
    trElem.innerHTML = `
    
              <tr>
                <td>${product.id}</td>
                <td><img src="${product.imageUrl}" width="100"/></td>
                <td>${product.title}</td>
                <td>$ ${product.price}</td>
                <td>
                  <button class="increase btn btn-outline-success" data-id=${
                    product.id
                  }>increment</button>
                </td>
                <td>${item.count}</td>
                <td>
                  <button class="decrease btn btn btn-outline-danger" data-id=${
                    product.id
                  }>
                    decrement
                  </button>
                </td>
                <td>$ ${(item.count * product.price).toFixed(2)}</td>
                <td><button class="btn btn-outline-danger delete" data-id=${
                  product.id
                }><i class="fa-solid fa-xmark"></i></button></td>
              </tr>`;

    tBody.append(trElem);
  });

  const allIncreaseBtns = document.querySelectorAll(".increase");
  const allDecreaseBtns = document.querySelectorAll(".decrease");
  const allDeleteBtns = document.querySelectorAll(".delete");

  allIncreaseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      let found = user.basket.find((q) => q.productId === id);
      found.count++;

      // this.parentElement.nextElementSibling.textContent = found.count;

      updateBasket();
    });
  });
  allDecreaseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      let found = user.basket.find((q) => q.productId === id);
      found.count--;

      if (found.count === 0) {
        const idx = user.basket.findIndex((q) => q.productId == id);
        user.basket.splice(idx, 1);
      }
      updateBasket();
    });
  });

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");

      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const idx = user.basket.findIndex((q) => q.productId == id);

          // console.log(this.parentElement.parentElement);
          // this.parentElement.parentElement.remove();
          // this.closest("tr").remove();
          user.basket.splice(idx, 1);
          updateBasket();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer: 1500,
          });
        }
      });
    });
  });
}

function updateBasket() {
  setDataToLocalStorage("users", users);
  drawTable(user.basket);
  calculateTotalPrice(user.basket, products);
  calcBasketCount(user);
}

function calculateTotalPrice(basketArr, productsArr) {
  const totalPrice = basketArr.reduce((sum, item) => {
    const product = productsArr.find((p) => p.id == item.productId);
    return sum + item.count * product.price;
  }, 0);

  document.querySelector(".total-price").textContent = totalPrice.toFixed(2);
}

window.addEventListener("DOMContentLoaded", function () {
  if (user) {
    drawTable(user.basket);
    calculateTotalPrice(user.basket, products);
    calcBasketCount(user);
    showClearAll();
    calcFavoritesCount(user);
  }
});

clearAll.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure to delete all?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      user.basket.length = 0;
      showClearAll();
      updateBasket();
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        timer: 1500,
      });
    }
  });
});

function showClearAll() {
  if (user.basket.length === 0) {
    clearAll.classList.add("d-none");
    clearAll.classList.remove("d-block");
  } else {
    clearAll.classList.add("d-block");
    clearAll.classList.remove("d-none");
  }
}
