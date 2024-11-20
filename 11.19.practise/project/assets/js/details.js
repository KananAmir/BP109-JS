import { products } from "./data.js";
const productDetails = document.querySelector(".product-details");
const pId = new URLSearchParams(window.location.search).get("id");

const product = products.find((p) => p.id == pId);
// console.log(product);

productDetails.innerHTML = `
          <div class="col-12 col-md-6">
            <img src="${product.imageUrl}" alt="" />
          </div>
          <div class="col-12 col-md-6">
            <h5>${product.title}</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              consequuntur enim dignissimos nobis quod aut animi accusantium
              commodi voluptatibus unde vero cupiditate esse molestias,
              perspiciatis, quisquam, ad minus voluptates dolorum.
            </p>
            <p>Category: ${product.category}</p>
            <p>Price: $ ${product.price}</p>
            <button class="btn btn-primary go-back">Go Back</button>
          </div>

`;

const goBackBtn = document.querySelector(".go-back");

goBackBtn.addEventListener("click", function () {
  window.history.back();
});
