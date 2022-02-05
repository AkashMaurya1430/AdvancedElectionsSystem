import { baseURL } from "../Constants";
const axios = require("axios");

let token = JSON.parse(localStorage.getItem("profile"))?.token;

const axiosJWT = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    "content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosJWT