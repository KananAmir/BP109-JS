import { getDataFromLocalStorage, setDataToLocalStorage } from "./helpers.js";

const users = getDataFromLocalStorage("users") || [];

const user = users.find((u) => u.isLogged);

function calcBasketCount() {
  const basketCount = document.querySelector(".basket-count");
  console.log(basketCount);

  //   basketCount.textContent = user.basket.length;
  const count = user.basket.reduce((sum, item) => sum + item.count, 0);
  basketCount.textContent = count;
}
