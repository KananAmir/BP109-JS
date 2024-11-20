import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";

import { products } from "./data.js";

const navList = document.querySelector("ul");
const tBody = document.querySelector("tbody");

const users = getDataFromLocalStorage("users") || [];

const user = users.find((user) => user.isLogged);

console.log(user);

if (!user) {
  window.location.replace("login.html");
} else {
  navList.innerHTML = `
              <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="basket.html">Basket <sup class="text-danger fw-bold basket-count">0</sup></a>
                </li>
                <li>
                  <a href="favorites.html">Favorites</a>
                </li>
                <li class="d-flex gap-3 align-items-center">
                  <h5 class="user-name m-0">${user.userName}</h5>
                  <button class="btn btn-outline-primary logout">Logout</button>
                </li>
      
      `;
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

      setDataToLocalStorage("users", users);
      drawTable(user.basket);
      calculateTotalPrice(user.basket, products);
      calcBasketCount();
    });
  });
  allDecreaseBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      let found = user.basket.find((q) => q.productId === id);
      found.count--;

      setDataToLocalStorage("users", users);
      drawTable(user.basket);
      calculateTotalPrice(user.basket, products);
      calcBasketCount();
    });
  });

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      const idx = user.basket.findIndex((q) => q.productId == id);

      user.basket.splice(idx, 1);
      setDataToLocalStorage("users", users);
      drawTable(user.basket);
      calculateTotalPrice(user.basket, products);
      calcBasketCount();
    });
  });
}

drawTable(user.basket);

function calculateTotalPrice(basketArr, productsArr) {
  const totalPrice = basketArr.reduce((sum, item) => {
    const product = productsArr.find((p) => p.id == item.productId);
    return sum + item.count * product.price;
  }, 0);

  document.querySelector(".total-price").textContent = totalPrice.toFixed(2);
}

calculateTotalPrice(user.basket, products);

function calcBasketCount() {
  const basketCount = document.querySelector(".basket-count");
  //   basketCount.textContent = user.basket.length;
  const count = user.basket.reduce((sum, item) => sum + item.count, 0);
  basketCount.textContent = count;
}

calcBasketCount();
