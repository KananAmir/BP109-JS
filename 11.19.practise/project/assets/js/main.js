import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";
import { products } from "./data.js";

const navList = document.querySelector("ul");
const users = getDataFromLocalStorage("users") || [];

const user = users.find((u) => u.isLogged);

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

const logoutBtn = document.querySelector(".logout");
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
                    <button class="btn btn-outline-danger fav"><i class="fa-regular fa-heart"></i></button>
                    <a class="btn btn-outline-primary" href="details.html?id=${product.id}"><i class="fa-solid fa-circle-info"></i></a>
    `;

    cardBody.append(cardTitle, cardText, productPrice, icons);
    productCard.append(productImage, cardBody);
    cardWrapper.append(productCard);

    allProducts.append(cardWrapper);
  });

  const allBasketBtns = document.querySelectorAll(".basket");

  allBasketBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      addToBasket(id);
    });
  });
}

drawCards(products);

function addToBasket(pId) {
  const found = user.basket.find((q) => q.productId == pId);
  if (found) {
    found.count++;
  } else {
    user.basket.push({ productId: pId, count: 1 });
  }
  //   console.log(user.basket);

  setDataToLocalStorage("users", users);
  calcBasketCount();
}

function calcBasketCount() {
  const basketCount = document.querySelector(".basket-count");
  //   basketCount.textContent = user.basket.length;
  const count = user.basket.reduce((sum, item) => sum + item.count, 0);
  basketCount.textContent = count;
}

calcBasketCount();
