import { products } from "./data.js";

const productDetailsWrapper = document.querySelector(".product-details");
// console.log(window.location.search);

const url = new URLSearchParams(window.location.search);

const id = url.get("id");

const product = products.find((p) => p.id == id);

console.log(product);

productDetailsWrapper.innerHTML = `
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <img src="${product.image}" alt="" class="product-photo" />
            </div>
            <div class="col-12 col-md-6">
              <h3 class="title">${product.title}</h3>
              <p class="desc">
                ${product.description}
              </p>
              <span>$ ${product.price}</span>
            </div>
          </div>
`;
