const BASE_URL = "http://localhost:8080";

function getAllData() {
  fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

getAllData();
