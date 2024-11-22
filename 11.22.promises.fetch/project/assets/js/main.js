import { BASE_URL } from "./constant.js";

const tBody = document.querySelector("tbody");
const spinner = document.querySelector(".spinner");

window.addEventListener("DOMContentLoaded", function () {
  getData("customers");
});

function getData(endpoint) {
  document.body.style.backgroundColor = "teal";
  fetch(`${BASE_URL}/${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

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
            <td>${item.contactTitle}</td>
            <td>${item.address?.phone}</td>
            <td>${item.address?.street}</td>
            <td>${item.address?.city}, ${item.address?.country}</td>
            <td class="d-flex gap-2">
                <button class="btn btn-outline-danger delete" data-id=${item.id}>Delete</button>
                <button class="btn btn-outline-success edit" data-id=${item.id}>Edit</button>
                <a class="btn btn-primary" href="details.html?id=${item.id}">Details</a>
            </td>

        </tr>
    `;
  });

  const allDeleteBtns = document.querySelectorAll(".delete");

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
