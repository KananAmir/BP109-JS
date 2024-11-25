import BASE_URL from "./constants.js";

//get all data

async function getAllData(endpoint) {
  try {
    const response = axios.get(`${BASE_URL}/${endpoint}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
// get data by id
async function getDataById(endpoint, id) {
  try {
    const response = axios.get(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//delete data by id
async function deleteDataById(endpoint, id) {
  try {
    const response = axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//add new data
async function addNewData(endpoint, payload) {
  try {
    const response = axios.post(`${BASE_URL}/${endpoint}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}
//edit add -> with put
async function editData(endpoint, id, payload) {
  try {
    const response = axios.put(`${BASE_URL}/${endpoint}/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}
//edit add -> with patch
async function editDataWithSpecificFields(endpoint, id, payload) {
  try {
    const response = axios.patch(`${BASE_URL}/${endpoint}/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export {
  getAllData,
  getDataById,
  deleteDataById,
  editData,
  editDataWithSpecificFields,
};
