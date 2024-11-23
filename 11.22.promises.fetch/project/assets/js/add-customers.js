import { BASE_URL } from "./constant.js";

const companyNameInput = document.querySelector("#company");
const phoneInput = document.querySelector("#phone");
const cityInput = document.querySelector("#city");
const streetInput = document.querySelector("#street");
const countryInput = document.querySelector("#country");

const addForm = document.querySelector("form");

addForm.addEventListener("submit", function (e) {
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

  fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((res) => {
      if (res.ok) {
        window.location.replace("index.html");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
