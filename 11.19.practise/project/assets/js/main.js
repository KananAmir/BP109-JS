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
  allProducts.innerHTML = "";
  arr.forEach((product) => {
    const cardWrapper = document.createElement("div");
    const productCard = document.createElement("div");
    const productImage = document.createElement("img");
    const productImageWrapper = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");
    const productPrice = document.createElement("p");
    const icons = document.createElement("div");

    cardWrapper.className = "col-12 col-md-6 col-lg-3 mb-4";
    productCard.className = "card product-card";
    productImage.src = product.imageUrl;
    productImage.className = "card-img-top";
    productImageWrapper.className = "image-wrapper";
    cardBody.className = "card-body";

    cardTitle.textContent = `${product.title.slice(0, 20)}`;
    cardText.textContent = `${product.description.slice(0, 50)}...`;
    cardText.className = "description";
    productPrice.innerHTML = `Price: $ <span>${product.price}</span>`;

    const favProductId = user?.wishlist.find((q) => q == product.id);

    icons.className = "d-flex gap-4 justify-content-center icons";
    icons.innerHTML = `
                    <button class="btn btn-outline-warning basket" data-id="${
                      product.id
                    }"><i class="fa-solid fa-cart-shopping"></i></button>
                    <button class="btn btn-outline-danger fav-btn" data-id="${
                      product.id
                    }"><i class="${
      favProductId ? "fa-solid fa-heart" : "fa-regular fa-heart"
    }"></i></button>
                    <a class="btn btn-outline-primary" href="details.html?id=${
                      product.id
                    }"><i class="fa-solid fa-circle-info"></i></a>
    `;

    productImageWrapper.append(productImage);
    cardBody.append(cardTitle, cardText, productPrice, icons);
    productCard.append(productImageWrapper, cardBody);
    cardWrapper.append(productCard);

    allProducts.append(cardWrapper);
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
        toggleFavorites(pId);

        // console.log(this.firstElementChild);

        if (this.firstElementChild.classList.contains("fa-regular")) {
          this.firstElementChild.classList.remove("fa-regular");
          this.firstElementChild.classList.add("fa-solid");
        } else {
          this.firstElementChild.classList.remove("fa-solid");
          this.firstElementChild.classList.add("fa-regular");
        }
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

function toggleFavorites(productId) {
  const idx = user.wishlist.findIndex((q) => q == productId);
  if (idx === -1) {
    user.wishlist.push(productId);
  } else {
    user.wishlist.splice(idx, 1);
  }

  setDataToLocalStorage("users", users);

  calcFavoritesCount(user);
}

window.addEventListener("DOMContentLoaded", function () {
  drawCards(products);
  if (user) {
    calcBasketCount(user);
    calcFavoritesCount(user);
  }
});
