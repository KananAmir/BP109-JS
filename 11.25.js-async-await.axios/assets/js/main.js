import { endpoints } from "./api/constants.js";
import { getAllData } from "./api/services.js";

getAllData(endpoints.products).then((res) => {
  console.log(res);
});
