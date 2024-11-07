//createElement

const wrapper = document.querySelector(".wrapper");
const ulElem = document.querySelector("ul.list");

const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
    count: 2,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
    count: 7,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
    count: 3,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
    count: 4,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
    count: 3,
  },
];

products.forEach((product) => {
  const liElem = document.createElement("li");
  liElem.textContent = product.title;
  //   ulElem.append(liElem);

  liElem.addEventListener("click", function () {
    // console.log(this);
    this.remove();
  });
  ulElem.prepend(liElem);
});

const img = document.createElement("img");

img.setAttribute(
  "src",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
);

img.setAttribute("alt", "cat image");
img.setAttribute("width", 100);

// wrapper.appendChild(img);

const pElem = document.createElement("p");

pElem.textContent = "lorem ipsum";

// document.body.append(pElem);
// wrapper.append(pElem);
// wrapper.append(pElem, img, "salam");
wrapper.append(pElem, img);

const h3Elem = document.querySelector("h3");

const clickBtn = document.querySelector(".click");

clickBtn.addEventListener("click", function () {
  //   console.log("clicked");
  //   console.log(this);
  h3Elem.remove();
});

const link = document.querySelector(".link");

console.log(link.hasAttribute("class")); //true
console.log(link.hasAttribute("id")); //false
console.log(link.hasAttribute("href")); //true
console.log(link.hasAttribute("target")); //false

link.setAttribute("target", "_blank");

console.log(link.hasAttribute("target")); //true

console.log(link.getAttribute("class"));

link.removeAttribute("class");

link.style.color = "red";
link.style.fontSize = "24px";
link.style.fontStyle = "italic";

console.log(getComputedStyle(link));
