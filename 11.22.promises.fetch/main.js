// fetch
// api - application proggramming interface

// request vs response

const BASE_URL = "https://northwind.vercel.app/api";

// console.log(fetch("https://jsonplaceholder.typicode.com/users"));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("posts", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fetch(`${BASE_URL}/customers`)
  .then((response) => response.json())
  .then((data) => {
    console.log("customers", data);
  })
  .catch((err) => {
    console.log(err);
  });

fetch(`${BASE_URL}/suppliers`)
  .then((response) => response.json())
  .then((data) => {
    console.log("suppliers", data);
  })
  .catch((err) => {
    console.log(err);
  });

//   http request methods --- get, post, delete, put, patch
//   http status codes
