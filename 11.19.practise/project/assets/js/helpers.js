export function setDataToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function calcBasketCount(user) {
  const basketCount = document.querySelector(".basket-count");
  //   basketCount.textContent = user.basket.length;
  const count = user?.basket.reduce((sum, item) => sum + item.count, 0);
  basketCount.textContent = count;
}

export function calcFavoritesCount(user) {
  const favsCount = document.querySelector(".favs-count");

  const count = user.wishlist.length;
  favsCount.textContent = count;
}
