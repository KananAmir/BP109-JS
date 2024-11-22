// get all data
const BASE_URL = "https://northwind.vercel.app/api";
function getAllData(endpoind) {
  fetch(`${BASE_URL}/${endpoind}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

// getAllData("suppliers");
// getAllData("categories");
// getAllData("products");

//get data by id

function getDataById(endpoind, id) {
  fetch(`${BASE_URL}/${endpoind}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// getDataById("suppliers", 5);
// getDataById("suppliers", 59832498374934); //not found

//delete data by id

function deleteDataById(endpoind, id) {
  fetch(`${BASE_URL}/${endpoind}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

// const btn = document.querySelector(".delete");
// btn.addEventListener("click", function () {
//   deleteDataById("suppliers", 6);
// });

//add new data

function addNewData(endpoind, payload) {
  fetch(`${BASE_URL}/${endpoind}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

const obj = {
  companyName: "Code Academy",
  contactName: "Code MMC",
  contactTitle: "Developer",
};

// addNewData("suppliers", obj);
addNewData("suppliers", {
  test: "test",
});

//edit data by id -> put, patch

function updateDataById(endpoind, id, payload) {
  fetch(`${BASE_URL}/${endpoind}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

// updateDataById("suppliers", 5, {
//   companyName: "bp109",
//   contactName: "Frontend",
// });

function updateDataByIdWithSpecificFields(endpoind, id, payload) {
  fetch(`${BASE_URL}/${endpoind}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

updateDataByIdWithSpecificFields("suppliers", 7, {
  companyName: "bp109 class",
  contactName: "Frontend Development",
});
