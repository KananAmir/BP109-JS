const BASE_URL = "http://localhost:3000";

const searchInput = document.querySelector("#search-input");

let products = null;
async function getProducts() {
  const { data } = await axios.get(`${BASE_URL}/products`);
  products = data;
  //   console.log(response.data);

  displayProducts(response.data);
}

getProducts();

function displayProducts(arr) {
  const productCards = document.getElementById("product-cards");
  productCards.innerHTML = "";
  arr.forEach((product) => {
    const productCard = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text">Price: $${product.price}</p>
            </div>
          </div>
        </div>
      `;
    productCards.innerHTML += productCard;
  });
}

// searchInput.addEventListener("keyup", function (e) {
//   let searchValue = e.target.value.toLowerCase().trim();

//   const filteredProducts = products.filter(
//     (p) =>
//       p.name.toLowerCase().includes(searchValue) ||
//       p.description.toLowerCase().includes(searchValue)
//   );

//   displayProducts(filteredProducts);
// });

//debuncing
let timeoutId = null;

searchInput.addEventListener("input", function (e) {
  clearTimeout(timeoutId);

  console.log(e.target.value);

  timeoutId = setTimeout(async () => {
    let searchValue = e.target.value.toLowerCase().trim();
    const { data } = await axios.get(`${BASE_URL}/products`);

    const filteredProducts = data.filter(
      (p) =>
        p.name.toLowerCase().includes(searchValue) ||
        p.description.toLowerCase().includes(searchValue)
    );

    displayProducts(filteredProducts);
  }, 500);
});
