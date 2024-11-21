import {
  calcBasketCount,
  calcFavoritesCount,
  getDataFromLocalStorage,
  setDataToLocalStorage,
} from "./helpers.js";
import { products } from "./data.js";

const users = getDataFromLocalStorage("users") || [];
const logout = document.querySelector(".logout-btn");
const login = document.querySelector(".login-btn");
const register = document.querySelector(".register-btn");
const loggedUserName = document.querySelector(".logged-user-name");
const favoritesCards = document.querySelector(".favorites-cards");

const user = users.find((u) => u.isLogged);
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

const logoutBtn = document.querySelector(".logout-btn");
const allProducts = document.querySelector(".all-products");

logoutBtn.addEventListener("click", function () {
  user.isLogged = false;
  setDataToLocalStorage("users", users);
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Succesfully Logged Out!",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.replace("login.html");
  });
});

function drawCards(arr) {
  favoritesCards.innerHTML = "";
  arr.forEach((q) => {
    const product = products.find((p) => q == p.id);

    const cardWrapper = document.createElement("div");
    const productCard = document.createElement("div");
    const productImage = document.createElement("img");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const productPrice = document.createElement("p");
    const icons = document.createElement("div");

    cardWrapper.className = "col-12 col-md-6 col-lg-3 mb-4";
    productCard.className = "card product-card";
    productImage.src = product.imageUrl;
    productImage.className = "card-img-top";
    cardBody.className = "card-body";

    cardTitle.textContent = product.title;
    cardText.textContent = product.description;
    productPrice.innerHTML = `Price: $ <span>${product.price}</span>`;

    icons.className = "d-flex gap-4 justify-content-center icons";
    icons.innerHTML = `
                      <button class="btn btn-outline-warning basket" data-id="${product.id}"><i class="fa-solid fa-cart-shopping"></i></button>
                      <button class="btn btn-outline-danger fav-btn" data-id="${product.id}"><i class="fa-solid fa-heart"></i></button>
                      <a class="btn btn-outline-primary" href="details.html?id=${product.id}"><i class="fa-solid fa-circle-info"></i></a>
      `;

    cardBody.append(cardTitle, cardText, productPrice, icons);
    productCard.append(productImage, cardBody);
    cardWrapper.append(productCard);

    favoritesCards.append(cardWrapper);
  });

  const allBasketBtns = document.querySelectorAll(".basket");
  const allFavBtns = document.querySelectorAll(".fav-btn");

  allBasketBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      if (user) {
        addToBasket(id);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "You should login first!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.replace("login.html");
        });
      }
    });
  });

  allFavBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");
      if (user) {
        const idx = user.wishlist.findIndex((q) => q == pId);
        user.wishlist.splice(idx, 1);
        this.closest(".col-12").remove();
        setDataToLocalStorage("users", users);
        calcFavoritesCount(user);
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "You should login first!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.replace("login.html");
        });
      }
    });
  });
}

function addToBasket(pId) {
  const found = user.basket.find((q) => q.productId == pId);
  if (found) {
    found.count++;
  } else {
    user.basket.push({ productId: pId, count: 1 });
  }
  //   console.log(user.basket);

  setDataToLocalStorage("users", users);
  calcBasketCount(user);
}

window.addEventListener("DOMContentLoaded", function () {
  if (user) {
    drawCards(user.wishlist);
    calcBasketCount(user);
    calcFavoritesCount(user);
  } else {
    window.location.replace("login.html");
  }
});
