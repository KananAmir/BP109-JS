import { BASE_URL } from "./constant.js";

const tBody = document.querySelector("tbody");
const spinner = document.querySelector(".spinner");
const editForm = document.querySelector("#edit-form");

let customers = null;
let editedId = null;
window.addEventListener("DOMContentLoaded", function () {
  getData("customers");
});

function getData(endpoint) {
  document.body.style.backgroundColor = "teal";
  fetch(`${BASE_URL}/${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

      customers = data;
      drawTable(data);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      spinner.classList.remove("d-flex");
      spinner.classList.add("d-none");
      document.body.style.backgroundColor = "unset";
    });
}

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((item) => {
    tBody.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.companyName}</td>
            <td>${item.address?.phone}</td>
            <td>${item.address?.street}</td>
            <td>${item.address?.city}, ${item.address?.country}</td>
            <td class="d-flex gap-2">
                <button class="btn btn-outline-danger delete" data-id=${item.id}>Delete</button>
                <button class="btn btn-outline-success edit" data-id=${item.id} data-bs-toggle="modal" data-bs-target="#edit-modal">Edit</button>
                <a class="btn btn-primary d-flex align-items-center" href="details.html?id=${item.id}">Details</a>
            </td>
        </tr>
    `;
  });

  const allDeleteBtns = document.querySelectorAll(".delete");
  const allEditBtns = document.querySelectorAll(".edit");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteData("customers", id, this);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer: 1000,
          });
        }
      });
    });
  });

  allEditBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const cId = this.getAttribute("data-id");

      document
        .querySelector(".edit-form-btn")
        .setAttribute("data-bs-dismiss", "modal");

      editedId = cId;
      const customerObj = customers.find((q) => q.id == cId);

      fillEditForm(customerObj);
    });
  });
}

function deleteData(endpoint, id, btn) {
  //   fetch(`${BASE_URL}/${endpoint}/${id}`, {
  //     method: "DELETE",
  //   }).then(() => {
  //     getData("customers");
  //   });

  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  }).then((response) => {
    if (response.ok) {
      btn.closest("tr").remove();
    }
  });
}

const companyNameInput = document.querySelector("#company");
const phoneInput = document.querySelector("#phone");
const cityInput = document.querySelector("#city");
const streetInput = document.querySelector("#street");
const countryInput = document.querySelector("#country");

function fillEditForm(customer) {
  companyNameInput.value = customer.companyName;
  phoneInput.value = customer.address?.phone;
  cityInput.value = customer.address?.city;
  streetInput.value = customer.address?.street;
  countryInput.value = customer.address?.country;
}

editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const customer = {
    companyName: companyNameInput.value.trim(),
    address: {
      phone: phoneInput.value.trim(),
      city: cityInput.value.trim(),
      street: streetInput.value.trim(),
      country: countryInput.value.trim(),
    },
  };

  // console.log(customer);

  fetch(`${BASE_URL}/customers/${editedId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((res) => {
      getData("customers");
    })
    .catch((err) => {
      console.log(err);
    });
});
